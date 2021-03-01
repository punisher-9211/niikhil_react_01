import React from "react";
import "./product-style.css";

const CustomProjects = props => {
  return (
    <div class="product-cont">
      <div class="product-des-cust">
        <div class="product-card-des-cust">
          <div>
            <div>
              <div class="product-details-title-cust">
                {props.clickId.category}
              </div>
            </div>
          </div>
        </div>

        <div class="product-card-des-cust">
          <div>
            <div>
              <div class="product-details-info-cust">
                {props.clickId.categoryContent.details.map(info => (
                  <div>{info}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div class="product-card-des-cust">
          <div>
            <div>
              <div class="product-details-value-cust">
                {props.clickId.categoryContent.info}
              </div>
            </div>
          </div>
        </div>

        <div class="product-card-des-cust">
          <div class="product-cont">
            <div class="product-img-cust">
              <div class="product-card-img-cust">
                <img
                  class="product-img-src"
                  src={props.clickId.imageUrl}
                  alt=""
                ></img>
              </div>
            </div>
            <div class="product-des">
              <div class="product-card-des-cust-1">
                <div>
                  <div>
                    <div class="product-details-title">
                      {props.clickId.categoryContent.custom1.title}
                    </div>
                    <br />
                    <h6>{props.clickId.categoryContent.custom1.info}</h6>
                    <p class="product-details-headding">Product Details:</p>
                    <p class="product-details-value">
                      {
                        <ul>
                          {props.clickId.categoryContent.custom1.details.map(
                            s => (
                              <li>{s}</li>
                            )
                          )}
                        </ul>
                      }
                    </p>
                    <p class="product-details-headding">Features :</p>
                    <p class="product-details-value">
                      {
                        <ul>
                          {props.clickId.categoryContent.custom1.technical.map(
                            s => (
                              <li>{s}</li>
                            )
                          )}
                        </ul>
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="product-card-des-cust">
          <div class="product-cont">
            <div class="product-img-cust">
              <div class="product-card-img-cust">
                <img
                  class="product-img-src"
                  src={props.clickId.imageUrl}
                  alt=""
                ></img>
              </div>
            </div>
            <div class="product-des">
              <div class="product-card-des-cust-1">
                <div>
                  <div>
                    <div class="product-details-title">
                      {props.clickId.categoryContent.custom2.title}
                    </div>
                    <p class="product-details-headding">Features :</p>
                    <p class="product-details-value">
                      {
                        <ul>
                          {props.clickId.categoryContent.custom2.technical.map(
                            s => (
                              <li>{s}</li>
                            )
                          )}
                        </ul>
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="product-card-des-cust">
          <div class="product-cont">
            <div class="product-img-cust">
              <div class="product-card-img-cust">
                <img
                  class="product-img-src"
                  src={props.clickId.imageUrl}
                  alt=""
                ></img>
              </div>
            </div>
            <div class="product-des">
              <div class="product-card-des-cust-1">
                <div>
                  <div>
                    <div class="product-details-title">
                      {props.clickId.categoryContent.custom3.title}
                    </div>
                    <p class="product-details-headding">Features :</p>
                    <p class="product-details-value">
                      {
                        <ul>
                          {props.clickId.categoryContent.custom3.technical.map(
                            s => (
                              <li>{s}</li>
                            )
                          )}
                        </ul>
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="product-card-des-cust">
          <div class="product-cont">
            <div class="product-img-cust">
              <div class="product-card-img-cust">
                <img
                  class="product-img-src"
                  src={props.clickId.imageUrl}
                  alt=""
                ></img>
              </div>
            </div>
            <div class="product-des">
              <div class="product-card-des-cust-1">
                <div>
                  <div>
                    <div class="product-details-title">
                      {props.clickId.categoryContent.custom4.title}
                    </div>
                    <p class="product-details-headding">Features :</p>
                    <p class="product-details-value">
                      {
                        <ul>
                          {props.clickId.categoryContent.custom4.technical.map(
                            s => (
                              <li>{s}</li>
                            )
                          )}
                        </ul>
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomProjects;
