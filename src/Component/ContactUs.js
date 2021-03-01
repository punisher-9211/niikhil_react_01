import React from "react";
import "../index.css";
import Footer from "./Footer";
import GMaps from "../Component/GMaps";
import Slider from "./Slider";
import ContactUsForm from "../Component/ContactUsForm";

const ContactUs = props => {
  return (
    <div class="background_contact">
      <ContactUsForm></ContactUsForm>
      <div class="contact">
        <div class="card-contact">
          <div class="row">
            <div id="location">
              <div>
                <div class="contact-heading">SAISUN ENGINEER</div>
              </div>
              <div class="widgets_div">
                <div class="icon_div">
                  <span>
                    <i class="fa fa-building" aria-hidden="true"></i>
                  </span>
                </div>
                <div class="text_div">
                  <span>B - 4, Block No.11, </span>
                  <br />
                  <span>Gajanan Vaibhav Complex, Cannaught Place, </span>
                  <br />
                  <span>CIDCO, N - 5, Town Centre, Aurangabad - 431003, </span>
                  <br />
                  <span>Maharashtra, India.</span>
                </div>
              </div>
              <div class="widgets_div">
                <div class="icon_div">
                  <span>
                    <i class="fa fa-phone" aria-hidden="true"></i>
                  </span>
                </div>
                <div class="text_div">
                  <span>+91 9999888822</span>
                </div>
              </div>
              <div class="widgets_div">
                <div class="icon_div">
                  <span>
                    <i class="fa fa-fax" aria-hidden="true"></i>
                  </span>
                </div>
                <div class="text_div">
                  <span>+123 9856321447</span>
                </div>
              </div>
              <div class="widgets_div">
                <div class="icon_div">
                  <span>
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                  </span>
                </div>
                <div class="text_div">
                  <span>www.saisunscales.com</span>
                </div>
              </div>
            </div>
            <div
              id="map"
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/place/Saisun+Engineers/@19.8839473,75.3587022,16z/data=!3m1!4b1!4m5!3m4!1s0x3bdba295bfffffff:0x236588f37e88a4d9!8m2!3d19.8839474!4d75.3630796",
                  "_blank"
                )
              }
            >
              <div>
                <i
                  class="fa fa-map-marker location-icon"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default ContactUs;
