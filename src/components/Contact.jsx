import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b0c8i9z",
        "template_4yhxd1d",
        formRef.current,
        "WIkaAMFla5LllXJdH"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    document.getElementById("myForm").reset();
  };
  return (
    <div className="background" id="contact">
      <div className="container">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>Send Me a</span>
                <span>Message</span>
              </div>
              <div className="app-contact">CONTACT INFO : +61 415977112</div>
            </div>
            <div className="screen-body-item">
              <form
                id="myForm"
                ref={formRef}
                onSubmit={handleSubmit}
                className="app-form"
              >
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="NAME"
                    defaultValue=""
                    name="user-first"
                  />
                </div>
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="EMAIL"
                    name="user-email"
                  />
                </div>

                <div className="app-form-group message">
                  <input
                    className="app-form-control"
                    placeholder="MESSAGE"
                    name="message"
                  />
                </div>
                <div className="app-form-group buttons">
                  <button className="app-form-button">SEND</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
