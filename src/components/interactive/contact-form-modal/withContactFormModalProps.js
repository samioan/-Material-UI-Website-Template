import React, { useState } from "react";

const withContactFormModalProps = (Component) => (props) => {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    const { name, email, message } = e.target.elements;

    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    }).catch((error) => {
      alert("Couldn't send your message. Please try again later!");
    });

    setStatus("Submit");

    let result = await response.json();

    alert(result.status);
  };

  const newProps = {
    ...props,
    status,
    handleSubmit,
  };

  return <Component {...newProps} />;
};

export { withContactFormModalProps };
export default withContactFormModalProps;
