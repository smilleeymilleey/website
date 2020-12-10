import React from 'react';
import '../../App.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Email Address:
          <input
            name="Email"
            type="string"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Message:
          <input
            name="numberOfGuests"
            type="string"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
        <button>Submit</button>
      </form>
    );
  }
}

export default Contact;
