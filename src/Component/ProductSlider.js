import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";
import data from "../data";

const CarouselView = props => {
  const [id, setId] = useState(1);

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
        <ProductCard
          handleId={value => setId(value)}
          id="1"
          image="./1.jpeg"
        ></ProductCard>
        <ProductCard
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
        ></ProductCard>
      </Carousel>
      <ProductDetail clickId={id}></ProductDetail>
    </>
  );
};
export default CarouselView;
