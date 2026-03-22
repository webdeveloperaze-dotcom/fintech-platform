import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '20px', backgroundColor: '#f1f1f1', textAlign: 'center' }}>
      <div>
        <h3>Footer Links</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><a href='/about'>About Us</a></li>
          <li><a href='/services'>Services</a></li>
          <li><a href='/contact'>Contact</a></li>
          <li><a href='/privacy'>Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <h3>Contact Info</h3>
        <p>Email: info@fintechplatform.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      <div>
        <h3>Follow Us</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><a href='https://twitter.com/fintechplatform' target='_blank' rel='noopener noreferrer'>Twitter</a></li>
          <li><a href='https://facebook.com/fintechplatform' target='_blank' rel='noopener noreferrer'>Facebook</a></li>
          <li><a href='https://linkedin.com/company/fintechplatform' target='_blank' rel='noopener noreferrer'>LinkedIn</a></li>
        </ul>
      </div>
      <div style={{ marginTop: '20px', fontSize: 'smaller' }}>
        <p>&copy; {new Date().getFullYear()} Fintech Platform. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;