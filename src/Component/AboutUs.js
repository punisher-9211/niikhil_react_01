import React from "react";
import "../index.css";
import Slider from "../Component/Slider";
import Footer from "./Footer";
import Oem from "./Oem";

const AboutUs = props => {
  return (
    <div>
      <Oem></Oem>
      <Slider></Slider>
      <section id="about_us">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h2 class="about-head">About Us</h2>
              <div class="about-content">
                Established in the year 2001, our company, Saisun is engaged in
                the field of manufacturing and supplying a wide range of
                Weighing Scales & Weighing Machines. We have been working from
                last 10 years & set up new benchmarks in the industry with our
                efficient range of Weighing Scales and Machines. The entire
                range is fabricated at our highly sophisticated manufacturing
                units that are equipped with latest facilities. We take pride of
                owing three manufacturing plants, which are spread over an area
                of 20000 square feet with 100 units of installation capacity.
                The units are also equipped with latest in-house design unit,
                enabled with modern CAD/ CAM software to design the machines
                with innovative approach. Being a client centric organization,
                we have always tried to satisfy our valued clients in every
                possible manner to earn their faith. Besides the qualitative
                range, we provide complete customization and after sale service
                to our client, keeping the diverse requirements and need for
                trouble free functioning of the Scales & machines.
              </div>
            </div>
            <div class="col-md-6">
              <h2 class="about-head">Research & Devlopment</h2>
              <div class="about-content">
                We use graded raw material such as steel, electronic components
                and put latest mechanism into practice so that we can offer
                unsurpassed quality to our clients To understand clients’
                expectations and market trends we have set up a full-fledged R &
                D Wing. The department is involved constant research to provide
                improved range of Weighing Scales & Weighing Machines to our
                esteemed clients.Based on the exhaustive research by our
                researchers and continuous feedback taken from our customers, we
                design and develop technologically advanced and cost-effective
                scales and machines. They also device new production and quality
                testing techniques that proves to be beneficial for our clients
                and our company both. Our company has made continuous
                engineering improvements and innovations that have enhanced
                versatility, accuracy, reliability and systems interface
                capability of our electronic weighing systems.
              </div>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-md-6">
              <h2 class="about-head">Client Satisfaction</h2>
              <div class="about-content">
                Due to the overwhelming response and support from our clients,
                we have able to establish ourselves as one of the most trusted
                organization in the industry. We make sure our weighing machines
                and other products are made in accordance with quality standards
                of the industry. Further, we also provide prompt after sale
                service so that our clients enjoy trouble free functioning of
                the machines and scales.Saisun in house investment or depth of
                experience and fully integrated manufacturing system benefit the
                customers through: Enhanced quality Quicker introduction of new
                technologies and Established interoperability or system
                components Specific mechanical assembly for arrangements of cl
              </div>
            </div>
            <div class="col-md-6">
              <h2 class="about-head">Our Team</h2>
              <div class="about-content">
                Our team of experts and highly qualified professionals lend us a
                hand to develop our comprehensive range of weighing machines and
                scales with flawlessness. They have a dense knowledge of the
                manufacturing process which enables us to produce these machines
                as per the orders received by our clients.We have a team of
                technocrats, quality inspectors, procurement agents,
                electricians and other skilled workers who work in a close
                coordination and understand the clients’ requirements cap-a-pie.
                The entire workforce is dedicated and has rich experience of the
                entire process which has helped us in turning out to be a
                favorite organization in the market. Further, we have competent
                service personnel, who assist us in providing prompt after sale
                service to our clients.
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};
export default AboutUs;
