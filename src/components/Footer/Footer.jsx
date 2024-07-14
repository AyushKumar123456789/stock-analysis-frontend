import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#74E291] text-white py-8">
      <div className="container mx-auto text-center md:text-left">
        <div className="md:flex md:justify-between">
          {/* Company Info */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Your Company</h4>
            <p>&copy; 2024 Your Company</p>
            <p className="mt-2">All rights reserved.</p>
          </div>

          {/* Contact Info */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Contact Us</h4>
            <p>WhatsApp: +123-456-7890</p>
            <p>Email: info@yourcompany.com</p>
            <p>Address: 123 Investment St, Finance City, Country</p>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold mb-2">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://facebook.com" className="hover:text-yellow-500">
                Facebook
              </a>
              <a href="https://twitter.com" className="hover:text-yellow-500">
                Twitter
              </a>
              <a href="https://linkedin.com" className="hover:text-yellow-500">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
