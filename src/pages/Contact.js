import React, { useState } from "react";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const handleSubmit = e => { e.preventDefault(); setSent(true); };
  return (
    <div className="page-container">
      {sent ? <h3>Thanks! We’ll be in touch.</h3> : (
        <form onSubmit={handleSubmit}>
          <input type="text" required placeholder="Your Name" />
          <input type="email" required placeholder="Your Email" />
          <textarea required placeholder="Your Message" />
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
