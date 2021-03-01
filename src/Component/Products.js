import React, { useContext } from "react";
import Footer from "./Footer";
import ProductSlider from "./ProductSlider";
import ProductTest from "./ProductTest";
import { ProductContext } from "./ProductContext";
const Products = props => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];
  const msg = useContext(ProductContext);
  return (
    <div class="product">
      {/* <ProductSlider breakPoints={breakPoints}></ProductSlider> */}
      <ProductTest></ProductTest>
      <Footer></Footer>
    </div>
  );
};
export default Products;
