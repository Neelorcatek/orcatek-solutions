import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mnnvbrpj"); // ← your Formspree ID here

  if (state.succeeded) {
    return (
      <div className="page-container">
        <h2>Contact Us</h2>
        <p style={{ color: "green", marginTop: "1rem" }}>
          Thank you! Your message has been sent.
        </p>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          rows={4}
          required
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <button
          type="submit"
          disabled={state.submitting}
          className="send-btn"
        >
          Send
        </button>
      </form>

      <div className="contact-details">
        <h4>Our Office</h4>
        <p>
          OrcaTek Solutions, <br />
          #118/4.1, 3rd Cross Street, <br />
          Gandhi Nagar, Jahirammapalayam,
          Salem - 636005 <br />
          Tamil Nadu, India
        </p>
        <p>
          <b>Phone:</b> +91 9994111633 , 9790229919 <br />
          <b>Email:</b> orcateksolutions@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Contact;
