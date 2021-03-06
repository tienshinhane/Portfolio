import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

const Contact = (props) => {
  const [mailSent, setmailSent] = useState(false);
  const [disabledButton, setDisabled] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({});
  const [text, setText] = useState("Submit");

  /**
   * @function handleFormSubmit
   * @param e { obj } - form event
   * @return void
   */
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);
    setText("Sending...");
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API}`,
      headers: { "content-type": "application/json" },
      data: formData,
    })
      .then((result) => {
        if (result.data.sent) {
          setmailSent(result.data.sent);
          setError(false);
          setDisabled(true);
          setText("Success!");
        } else {
          setError(true);
          setDisabled(false);
          setText("Submit");
        }
      })
      .catch((error) => setError(error.message));
  };
  /**
   * @function handleChange
   * @param e { obj } - change event
   * @param field { string } - name of the field
   * @return void
   */
  const handleChange = (e, field) => {
    let value = e.target.value;
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const { successMessage, errorMessage, fieldsConfig } = props.config;

  return (
    <div id="contact" className="contact-container">
      <h2>Contact Me</h2>
      <div className="divider-lightbg"></div>
      <div className="container">
        <div className="alternative">
          Alternatively, email me at:
          <a href="mailto:edgespearprojects@gmail.com">
            &nbsp; edgespearprojects@gmail.com
          </a>
        </div>
        <div id="form-main">
          <div id="form-div">
            <form action="#" className="montform" id="reused_form">
              {fieldsConfig &&
                fieldsConfig.map((field) => {
                  return (
                    <React.Fragment key={field.id}>
                      {field.type !== "textarea" ? (
                        <React.Fragment>
                          <p className={field.identifier}>
                            <input
                              type={field.type}
                              className={field.className}
                              placeholder={field.placeholder}
                              value={field.name}
                              id={field.identifier}
                              onChange={(e) => handleChange(e, field.fieldName)}
                            />
                          </p>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <p className={field.identifier}>
                            <textarea
                              className={field.className}
                              placeholder={field.placeholder}
                              id={field.identifier}
                              onChange={(e) => handleChange(e, field.fieldName)}
                              value={field.name}
                            />
                          </p>
                        </React.Fragment>
                      )}
                    </React.Fragment>
                  );
                })}
              <div className="submit">
                <button
                  disabled={disabledButton}
                  type="submit"
                  className="button-blue"
                  onClick={(e) => handleFormSubmit(e)}
                >
                  {text}
                </button>
                <div className="ease"></div>
              </div>
              <div>
                <br />

                {mailSent && <div className="success">{successMessage}</div>}
                {error && <div className="error">{errorMessage}</div>}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="footer">Created by Jonathan Fereday ??2021</div>
    </div>
  );
};

export default Contact;

FormData.propTypes = {
  config: PropTypes.object.isRequired,
};
