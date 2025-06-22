import React from "react";

const About = () => (
  <div className="page-container">
    <h2>About OrcaTek Solutions</h2>
    <p>
      OrcaTek Solutions is a fast-growing IT and business process outsourcing company based in India.
      We specialize in data entry, data processing, transcription, content moderation, customer support, HR support, and more.
      Our mission is to help businesses grow efficiently and securely, providing reliable services and innovative digital solutions.
      With a focus on quality, accuracy, and customer satisfaction, we are your trusted partner for all IT and back-office needs.
    </p>

    <h3>Our Portfolio</h3>
    <div className="portfolio-list">
      <div className="portfolio-item">
        <strong>The Newsroom Application</strong>
        <p>
          We developed and maintain a modern news delivery application that provides daily news to people in real time, supporting both editorial teams and readers with seamless technology.
        </p>
      </div>
      <div className="portfolio-item">
        <strong>Designs Textile, Mettur, Salem</strong>
        <p>
          For this textile firm, we built a robust billing software solution and provide ongoing maintenance to ensure smooth business operations and reliable customer service.
        </p>
      </div>
      <div className="portfolio-item">
        <strong>Farmer-focused Applications (Coming Soon)</strong>
        <p>
          We are developing two innovative applications designed to be a saviour for farmers. These are OrcaTek’s own products, currently under development—stay tuned for more details!
        </p>
      </div>
    </div>
  </div>
);

export default About;
