import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";
import data from "../data";

const CarouselView = props => {
  const [id, setId] = useState({
    id: "1",
    category: "SPECIALIZED WEIGHING SCALE",
    categoryContent: {
      id: "1",
      details: [
        "Comi weigh / coin operated / oil vending / wireless system/ CONVEYOR SYSTEM  HOPPER TANK WEIGHING "
      ],
      info:
        "We are highly established and reputed company engaged in designing, manufacturing, servicing of Specialized Weighing Scales, which are offered at very economical prices to the customers. Our range of Electronic Weighing Scale is used for all kinds of weighing applications (static weighing to dynamic weighing). This Specialized Weighing Scale works in almost in any environment. It can be used where normal weighing scales cannot perform and is available in various capacities. Our highly effective Specialized Weighing Scale successfully caters various Weighing needs of customers and available at cost-effective ",
      features: [
        "Incorporates International quality OIML standard load cells.",
        "Stainless steel weighing pan * Advance microcomputer based design.",
        "Optional Battery backup * Overload & shock load protection.",
        "100% Tare facility * No moving parts. * Multiple function : parts counting, accumulation of weights.",
        "In memory, printing of weight data, selection of baud rate, Filling mode, variable integration time to suit    weighing atmosphereBidirectional RS232C interface.Audio visual overload indication.",
        "Custom Built Hybrid Circuit for protection against moisture.",
        "Unique ADC with temp. compensation for high resolution models."
      ],
      custom1: {
        title: "Weighing Indicator “Weighbridge”",
        info:
          "The Weighing Indicator can be used for various Electronic Platform Scales, Truck Scales and Weighbridges System.",
        details: [
          "Be capable of displaying millivolt signal, and easy to detect whether the sensor is in good",
          "Condition or not filtering progression adjustment (Grade 1-4)",
          "Unique stabilization control procedure",
          "Automatic Switching in 3 Graduations",
          "No re-scaling is needed during instrument changing",
          "Tare Weight Storage for 512 car numbers",
          "Storage and printing for 1521-group weighing records",
          "Functions of enquiry, report and accumulative printing",
          "20mA current loop and rs-232c serial communication interface",
          "Baud Rate 1200/2400/4800/9600 (optional)",
          "Anti-static electricity design was adopted for all interfaces to avoid damage",
          "3-level timing power off",
          "AC/DC, can be external connected with 6V battery"
        ],
        technical: [
          "Range of input signal:-18~+18mV ",
          "A/D Conversion:24-bit Sigma-Delta A/D Conversion ",
          "A/D Sampling Frequency:38.400 kHz ",
          "Nonlinearity :< 0.0015% F.S. ",
          "Gain Error Drift:0.5ppm/’C ",
          "Minimum Resolution:0.1uV/d ",
          "Supply Voltage: 5V/750mA (can connect 16 sensors) ",
          "Operating Temperature:-10~+50'C ",
          "Storage Temperature:-40~+85'C ",
          "Relative Humidity:<90%R.H ",
          "Power Supply:AC187~242V,49~51Hz or DC6V ",
          "External Dimension:325×210×205 (mm)"
        ]
      },
      custom2: {
        title: "Crane Scale Hts Series",
        info: "no-info",
        details: ["no-info"],
        technical: [
          "Max capacity:600 kg~35 ton",
          "360° Freely swiveling hook; easy to operate ",
          "Large and bright red LED with wide view angle",
          "Change, hold, zero function ",
          "Auto-zero tracking",
          "Capacity 600kg~10t",
          "Special design, quick to show exact weight ",
          "Extra bright red LED, easy to read ",
          "360° freely swiveling hook ",
          "Battery life 150 hours ",
          "Recharging time 10 hours",
          "Rugged and compact design",
          "Aluminum die-casting housing for maximum protecting",
          "Waterproof and dustproof meet IP65 protection rating",
          "Power saving mode selectable ",
          "Easy to read 5 digits LED display",
          "kg/lb conversion modes"
        ]
      },
      custom3: {
        title: "Price Computing Scale",
        info: "no-info",
        details: ["no-info"],
        technical: [
          "3kg /0.5g ~ 30kg/5g ",
          "6kg /2g ~ 30kg /10g",
          "1/600,000 Internal resolution",
          "1/3,000 Display resolution",
          "15kg /5g , 30kg /10g",
          "1/65,000 Internal resolution",
          "1/3,000 Display resolution"
        ]
      },
      custom4: {
        title: "Semi Auto Packing Machine",
        info: "no-info",
        details: ["no-info"],
        technical: [
          "Models for quantifying powder or specific materials can be custom-made",
          "Available to quantify for various grains, such as: snacks, beans, candies, refreshments, minor hardware, and tea leave, etc.",
          "Quantifying accuracy: ±2g",
          "89 cm (L). 51.5 cm (w). 153 cm (H). Weight about 86.3 kg.",
          "Power AC 110V / 220 V¡A50 / 60 Hz¡A300 W"
        ]
      }
    },
    desc: "",
    imageUrl: "./1.jpeg"
  });

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  function handleId() {
    alert("Hi");
    console.log("The link was clicked.");
  }
  return (
    <>
      <Carousel
        centerMode={true}
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {data.data.map(productDetail => {
          return (
            <ProductCard
              handleId={value => setId(value)}
              id={productDetail.id}
              image={productDetail.imageUrl}
              productData={productDetail}
            ></ProductCard>
          );
        })}

        {/* <ProductCard
          handleId={value => setId(value)}
          id="2"
          image="./2.jpeg"
        ></ProductCard>
        <ProductCard
          handleId={value => setId(value)}
          id="3"
          image="./3.jpeg"
        ></ProductCard>
        <ProductCard
          handleId={value => setId(value)}
          id="4"
          image="./4.jpeg"
        ></ProductCard>
        <ProductCard
          handleId={value => setId(value)}
          id="5"
          image="./5.jpeg"
        ></ProductCard>
        <ProductCard
          handleId={value => setId(value)}
          id="6"
          image="./6.jpg"
        ></ProductCard>
        <ProductCard
          handleId={value => setId(value)}
          id="7"
          image="./7.jpg"
        ></ProductCard>
        <ProductCard
          handleId={value => setId(value)}
          id="8"
          image="./8.jpg"
        ></ProductCard> */}
      </Carousel>
      <ProductDetail clickId={id}></ProductDetail>
    </>
  );
};
export default CarouselView;
