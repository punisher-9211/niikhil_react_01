import React from "react";
import "../index.css";

const FloatingButton = props => {
  return (
    <div class="icon-bar">
      <a href="https://www.facebook.com" class="facebook">
        <i class="fa fa-facebook"></i>
      </a>
      <a href="https://www.twitter.com" class="twitter">
        <i class="fa fa-twitter"></i>
      </a>
      <a href="https://www.google.com" class="google">
        <i class="fa fa-google"></i>
      </a>
      <a href="https://www.linkedin.com" class="linkedin">
        <i class="fa fa-linkedin"></i>
      </a>
    </div>
  );
};

export default FloatingButton;
