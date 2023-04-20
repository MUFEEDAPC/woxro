import React from "react";
import "./Contact.css";
import earth from "./woxroglobe.png";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className=" col-xl-6 col-lg-6 col-md-12 contact-text-area">
        <h3 className="contacttext">
          We offer all kinds of IT services that ensure your success
        </h3>
      </div>
      <div className=" col-xl-6 col-lg-6 col-md-12 contact-buttom-area">
        <button className="contact-phone-icon centered-button">
          <div><i class="fa-solid fa-phone "></i> </div>
          <div className="btnname"> Contact us</div>
         
        </button>
        <button  className="contact-comment-icon centered-button">
        
          <i class="fa-solid fa-comment"></i> 
          <div className="btnname"> Let's Talk</div>
        </button>
      </div>
    </div>
  );
};

export default Contact;
// <button> <i class="fa-solid fa-phone"></i> Contact us</button>
// <button> <i class="fa-solid fa-comment"></i> Let's Talk</button>
