import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactContainer = styled.div`
  background: #000;
  padding: 100px 0;
`;

const ContactWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 50px;
`;

const ContactH1 = styled.h1`
  font-size: 48px;
  color: #ff0000;
  text-align: center;
  margin-bottom: 50px;
`;

const ContactContent = styled.div`
  display: flex;
  justify-content: center;  // Centers horizontally
  width: 100%;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 15px;
  border-radius: 5px;
  border: none;
  background: #1a1a1a;
  color: #fff;
  font-size: 16px;

  &:focus {
    outline: 2px solid #ff0000;
  }
`;

const TextArea = styled.textarea`
  padding: 15px;
  border-radius: 5px;
  border: none;
  background: #1a1a1a;
  color: #fff;
  font-size: 16px;
  min-height: 150px;

  &:focus {
    outline: 2px solid #ff0000;
  }
`;

const SubmitButton = styled.button`
  padding: 15px 30px;
  background: #ff0000;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #cc0000;
    transform: translateY(-2px);
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
    transform: none;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: #fff;
  font-size: 18px;
`;

const Message = styled.div`
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  text-align: center;
  color: ${props => props.isError ? '#ff0000' : '#00ff00'};
`;

const CaptchaContainer = styled.div`
  margin: 0px 0;
  display: flex;
  justify-content: center;  // Centers horizontally
  align-items: center;     // Centers vertically
  width: 100%;
`;

function Contact() {
  const [status, setStatus] = useState({
    submitting: false,
    message: null,
    error: false
  });
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!captchaToken) {
      setStatus({
        submitting: false,
        message: 'Please complete the CAPTCHA',
        error: true
      });
      return;
    }

    setStatus({ submitting: true, message: null, error: false });

    emailjs.sendForm(
      'service_qa76onj',
      'template_cwrbvlr',
      e.target,
      'yfgyL1lBqfhW-lq2M'
    )
    .then((result) => {
      setStatus({
        submitting: false,
        message: 'Message sent successfully!',
        error: false
      });
      e.target.reset();
      setCaptchaToken(null);
    }, (error) => {
      setStatus({
        submitting: false,
        message: 'Failed to send message. Please try again.',
        error: true
      });
    });
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <ContactH1>Contact Me</ContactH1>
        <ContactContent>
          <ContactForm onSubmit={handleSubmit}>
            <Input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <Input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
            <TextArea
              name="message"
              placeholder="Your Message"
              required
            />
            <CaptchaContainer>
              <ReCAPTCHA
                sitekey="6Ld-8aYqAAAAAMR8SSJkk8F0McPdOIHja5q6PfzB"
                onChange={handleCaptchaChange}
                theme="dark"
              />
            </CaptchaContainer>
            <SubmitButton 
              type="submit"
              disabled={status.submitting || !captchaToken}
            >
              {status.submitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
            {status.message && (
              <Message isError={status.error}>
                {status.message}
              </Message>
            )}
          </ContactForm>
        </ContactContent>
      </ContactWrapper>
    </ContactContainer>
  );
}

export default Contact;