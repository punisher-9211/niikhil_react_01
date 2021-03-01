import React from "react";
import "../Products/product-style.css";
import PriceComputing from "../Products/PriceComputing";
import PieceCounting from "../Products/PieceCounting";
import PlatformScales from "../Products/PlatformScales";
import WeighBridge from "../Products/WeighBridge";
import BenchScale from "../Products/BenchScale";
import CraneScale from "../Products/CraneScale";
import MilkWeigh from "../Products/MilkWeigh";
import JwelletyScale from "../Products/JwelletyScale";
import CustomProjects from "../Products/CustomProjects";

const ProductDetail = props => {
  let component = "1";
  switch (props.clickId.id) {
    case "1":
      component = <CustomProjects clickId={props.clickId} />;
      break;

    case "2":
      component = <PriceComputing clickId={props.clickId} />;
      break;

    case "3":
      component = <PieceCounting clickId={props.clickId} />;
      break;

    case "4":
      component = <BenchScale clickId={props.clickId} />;
      break;

    case "5":
      component = <PlatformScales clickId={props.clickId} />;
      break;

    case "6":
      component = <CraneScale clickId={props.clickId} />;
      break;

    case "7":
      component = <WeighBridge clickId={props.clickId} />;
      break;

    case "8":
      component = <MilkWeigh clickId={props.clickId} />;
      break;

    case "9":
      component = <JwelletyScale clickId={props.clickId} />;
      break;

    default:
      component = <CustomProjects clickId={props.clickId} />;
      break;
  }
  return (
    <section id="product_detail">
      <>{component}</>
    </section>
  );
};
export default ProductDetail;
