import React from "react";
import ServiceCard from "../components/ServiceCard";

const services = [
  {
    title: "Data Entry Services",
    image: "data-entry.png",
    items: [
      "Manual data entry",
      "Online/offline data entry",
      "Image to text conversion",
      "Survey data input",
      "Invoice/receipt data capture"
    ]
  },
  {
    title: "Data Processing Services",
    image: "data-processing.png",
    items: [
      "Form processing",
      "Insurance claim processing",
      "Order processing",
      "Check/cheque processing",
      "Data cleansing and validation"
    ]
  },
  {
    title: "Data Conversion Services",
    image: "data-conversion.png",
    items: [
      "PDF to Word/Excel conversion",
      "Scanned document digitization",
      "XML/HTML conversion",
      "File format conversions"
    ]
  },
  {
    title: "Back Office Support",
    image: "back-office.png",
    items: [
      "Document management",
      "CRM data management",
      "Virtual assistance",
      "Email handling",
      "Calendar/scheduling management"
    ]
  },
  {
    title: "Transcription Services",
    image: "transcription.png",
    items: [
      "Audio/video to text transcription",
      "Medical transcription",
      "Legal transcription",
      "Business meeting transcription"
    ]
  },
  {
    title: "Content Moderation",
    image: "content-moderation.png",
    items: [
      "Review of user-generated content",
      "Flagging inappropriate content",
      "Social media monitoring",
      "Forum and community moderation"
    ]
  },
  {
    title: "Market Research Support",
    image: "market-research.png",
    items: [
      "Data mining",
      "Web research",
      "Competitor analysis",
      "Product listing research"
    ]
  },
  {
    title: "Customer Support (Non-Tech)",
    image: "customer-support.png",
    items: [
      "Email and chat support",
      "Call center support (inbound/outbound)",
      "Order tracking and follow-up",
      "Feedback collection and surveys"
    ]
  },
  {
    title: "HR Support Services",
    image: "hr-support.png",
    items: [
      "Resume sourcing and screening",
      "Candidate database management",
      "Interview scheduling",
      "Employee data management"
    ]
  }
];

const Home = () => (
  <div>
    <div
      className="hero"
      style={{
        backgroundImage: "url('/images/bg-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        padding: "4rem",
        textAlign: "center",
        minHeight: "300px"
      }}
    >
      <div className="hero-title">Welcome to OrcaTek Solutions</div>
      <div className="hero-desc">
        Reliable partner for Data Services, Back Office Support, Transcription, and more.
      </div>
    </div>

    <div className="page-container">
      <h2>Our Services</h2>
      <div className="services-list">
        {services.map((service, i) => (
          <ServiceCard key={i} {...service} />
        ))}
      </div>
    </div>
  </div>
);

export default Home;
