import React, { Component } from "react";
import PropTypes from "prop-types";
import { Forms } from "../../Styles/Form.styled";

const INITIAL_STATE = {
  name: "",
  number: "",
};

class Form extends Component {
  state = {
    ...INITIAL_STATE,
  };

  constructor(props) {
    super();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  reset = () => this.setState({ ...INITIAL_STATE });

  render() {
    return (
      <Forms
        onSubmit={(e) =>
          this.props.submit(e, this.state.name, this.state.number, this.reset)
        }
      >
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Name"
          value={this.state.name}
          onChange={(e) => this.handleChange(e)}
          // onChange = {(e) => this.checkForm(e)}
        />

        <input
          type="tel"
          name="number"
          placeholder="Number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={(e) => this.handleChange(e)}
        />
        <button type="submit">Add contact</button>
      </Forms>
    );
  }
}

Form.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default Form;
