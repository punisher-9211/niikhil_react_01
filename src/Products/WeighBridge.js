import React from "react";
import "./product-style.css";

const WeighBridge = props => {
  return (
    <div class="product-cont">
      <div class="product-img">
        <div class="product-card-img">
          <img
            class="product-img-src"
            src={props.clickId.imageUrl}
            alt=""
          ></img>
        </div>
      </div>
      <div class="product-des">
        <div class="product-card-des">
          <div>
            <div>
              <div class="product-details-title">{props.clickId.category}</div>
              <p class="product-details-headding">Features :</p>
              <p class="product-details-value">
                {
                  <ul>
                    {props.clickId.categoryContent.features.map(s => (
                      <li>{s}</li>
                    ))}
                  </ul>
                }
              </p>
              <p class="product-details-headding">Applications :</p>
              <p class="product-details-value">
                {
                  <ul>
                    {props.clickId.categoryContent.applications.map(s => (
                      <li>{s}</li>
                    ))}
                  </ul>
                }
              </p>
              <p class="product-details-headding">Technical Details :</p>
              <p class="product-details-value">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Capacity</th>
                      <th scope="col">Accuracy (in gm)</th>
                      <th scope="col">Pan size (in mm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.clickId.categoryContent.technical.map(s => (
                      <tr>
                        <td>{s.capacity}</td>
                        <td>{s.accuracy}</td>
                        <td>{s.panSize}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeighBridge;
