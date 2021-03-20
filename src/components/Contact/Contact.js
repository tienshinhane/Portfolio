import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

<script src="form.js"></script>;

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h2>Contact Me</h2>
      <div className="divider-lightbg"></div>
      <div className="container">
        <div id="form-main">
          <div id="form-div">
            <form className="montform" id="reused_form">
              <p className="name">
                <input
                  name="name"
                  type="text"
                  className="feedback-input"
                  required
                  placeholder="Name"
                  id="name"
                />
              </p>
              <p className="email">
                <input
                  name="email"
                  type="email"
                  required
                  className="feedback-input"
                  id="email"
                  placeholder="Email"
                />
              </p>
              <p className="subject">
                <input
                  name="subject"
                  type="text"
                  required
                  className="feedback-input"
                  id="subject"
                  placeholder="Subject"
                />
              </p>
              <p className="text">
                <textarea
                  name="message"
                  className="feedback-input"
                  id="comment"
                  placeholder="Message"
                ></textarea>
              </p>
              <div className="submit">
                <button type="submit" className="button-blue">
                  Submit
                </button>
                <div className="ease"></div>
              </div>
            </form>
            {/* <div
              id="error_message"
              // style="width:100%; height:100%; display:none;"
            >
              <h4>Error</h4>
              Sorry there was an error sending your form.
            </div>
            <div
              id="success_message"
              // style="width:100%; height:100%; display:none; "
            >
              {" "}
              <h2>Success! Your Message was Sent Successfully.</h2>{" "}
            </div> */}
          </div>
        </div>
      </div>
      <div className="footer">Created by Jonathan Fereday ©2021</div>
    </div>
  );
};

export default Contact;
