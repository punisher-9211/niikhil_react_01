import React, { Component } from "react";
import axios from "axios";
import Axios from "axios";
import { timingSafeEqual } from "crypto";
import emailjs from "emailjs-com";
class ContactUsForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    purpose: "",
    message: "",
    emailStatus: ""
  };

  submitForm(e) {
    //console.log(this.state);
    const { firstName, lastName, email, purpose, message } = this.state;

    let templateParams = {
      email: email,
      name: firstName,
      surname: lastName,
      need: purpose,
      message: message
    };
    e.preventDefault();
    console.log(this.state);
    emailjs
      .sendForm(
        "gmail",
        "template_8m85hjj",
        "contact-form",
        "user_jbjtcbr4efv2muhgGOVxR"
      )
      .then(
        result => {
          console.log(result.text);
          alert(result.text + " MAIL SENT");
        },
        error => {
          console.log(error.text);
        }
      );
    //this.reset();
  }

  reset() {
    this.state({
      firstName: "",
      lastName: "",
      email: "",
      purpose: "",
      message: "",
      emailStatus: ""
    });
  }

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });

    /*Axios.post("http://localhost:3030/api/email", this.state).then(res => {
      if (res.data.success) {
        this.setState({
          emailStatus: true
        });
      } else {
        this.setState({
          emailStatus: true
        });
      }
    });*/
  };
  render() {
    const { firstName, lastName, email, purpose, message } = this.state;
    return (
      <>
        <div class="container">
          <div class="row">
            <div class="col-xl-8 offset-xl-2 py-5">
              <p class="lead contact-form-header">Get In Touch</p>

              <form
                id="contact-form"
                className="conatct-form-class"
                /*method="post"
                action="contact.php"
                role="form"*/
                onSubmit={this.submitForm.bind(this)}
              >
                <div class="messages"></div>

                <div class="controls">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="form_name">Firstname *</label>
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          value={firstName}
                          class="form-control"
                          placeholder="Please enter your firstname *"
                          required="required"
                          onChange={this.handleChange("firstName")}
                          data-error="Firstname is required."
                        />
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="form_lastname">Contact Number *</label>
                        <input
                          id="form_lastname"
                          type="text"
                          name="surname"
                          value={lastName}
                          class="form-control"
                          placeholder="Please enter your number *"
                          required="required"
                          onChange={this.handleChange("lastName")}
                          data-error="Lastname is required."
                        />
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="form_email">Email *</label>
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          value={email}
                          class="form-control"
                          placeholder="Please enter your email *"
                          required="required"
                          onChange={this.handleChange("email")}
                          data-error="Valid email is required."
                        />
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="form_need">
                          Please specify your need *
                        </label>
                        <select
                          id="form_need"
                          name="need"
                          value={purpose}
                          class="form-control"
                          required="required"
                          onChange={this.handleChange("purpose")}
                          data-error="Please specify your need."
                        >
                          <option value=""></option>
                          <option value="Request quotation">
                            Request quotation
                          </option>
                          <option value="Request order status">
                            Request order status
                          </option>
                          <option value="Request copy of an invoice">
                            Request copy of an invoice
                          </option>
                          <option value="Other">Other</option>
                        </select>
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="form_message">Message *</label>
                        <textarea
                          id="form_message"
                          name="message"
                          value={message}
                          class="form-control"
                          placeholder="Message for me *"
                          rows="4"
                          required="required"
                          onChange={this.handleChange("message")}
                          data-error="Please, leave us a message."
                        ></textarea>
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <input
                        type="submit"
                        class="btn btn-success btn-send"
                        value="Send message"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <p class="text-muted">
                        <strong>*</strong> These fields are required.
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ContactUsForm;
