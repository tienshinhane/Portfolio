/**
 * @config preparing config prop.
 * api: url for the server endpoint
 * title: form title
 * successMessage: message will show in the UI when mail is successfully sent.
 * errorMessage: message will show in the UI when mail is not sent.
 * fields: this is the name of each field. This should be exact order of the fieldsConfig and fieldsConfig.fieldName should be  the same
 * fieldsConfig = settings for each input/textarea field
 */
require("dotenv").config();

export const config = {
  // api: `${process.env.REACT_APP_API}`,
  api: `http://localhost/api/contact/index.php`,
  successMessage: "Thank you for your message, I will be in touch soon.",
  errorMessage: "There was an error.",
  fields: {
    name: "",
    email: "",
    subject: "",
    msg: "",
  },
  fieldsConfig: [
    {
      id: 1,
      label: "Name",
      fieldName: "name",
      type: "text",
      placeholder: "Your Name",
      isRequired: true,
      className: "feedback-input",
      identifier: "name",
    },
    {
      id: 2,
      label: "Email",
      fieldName: "email",
      type: "email",
      placeholder: " Your Email",
      isRequired: true,
      className: "feedback-input",
      identifier: "email",
    },
    {
      id: 3,
      label: "Subject",
      fieldName: "subject",
      type: "subject",
      placeholder: "Subject",
      isRequired: true,
      className: "feedback-input",
      identifier: "subject",
    },
    {
      id: 4,
      label: "Message",
      fieldName: "msg",
      type: "textarea",
      placeholder: "Your Message",
      isRequired: true,
      className: "feedback-input",
      identifier: "comment",
    },
  ],
};
