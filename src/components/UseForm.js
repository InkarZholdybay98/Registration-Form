import React, { Component } from "react";
import MainDetails from "./MainDetails";
import PersonalDetails from "./PersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

export class UseForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    bio: "",
    occupation: "",
    city: "",
  };

  nextStep = () => {
    const { step } = this.state;

    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;

    this.setState({ step: step - 1 });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, bio, occupation, city } = this.state;
    const values = { firstName, lastName, email, bio, occupation, city };

    switch (step) {
      case 1:
        return (
          <MainDetails
            values={values}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
          />
        );

      case 2:
        return (
          <PersonalDetails
            values={values}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            prevStep={this.prevStep}
          />
        );

      case 3:
        return (
          <Confirm
            values={values}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );

      case 4:
        return <Success />;

      default:
        break;
    }
  }
}

export default UseForm;
