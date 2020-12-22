import React from 'react';
import "./Contact.css";



export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xoqpkozl"
        method="POST"
      >
        <div className="newContainer">
<div class="wrapper">
  <div class="title">
    <h1>Contact Me</h1>
  </div>
  <div className="contact-form">
    <div className="input-fields">

    <label className="EmailText">Email:</label>
        <input className="emailBox" type="email" name="email" />
        <label className="Message">Message:</label>
        <input className="messageBox" type="text" name="message" />
        {status === "SUCCESS" ? <p>Thanks!</p> : <button className="btn">Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}

        </div>
      </div>
    </div>
  </div> 
</form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

