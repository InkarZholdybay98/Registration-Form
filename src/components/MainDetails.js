import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class MainDetails extends Component {
  continue = (e) => {
    e.preventDefault();

    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <div>
        <MuiThemeProvider>
          <React.Fragment>
            <AppBar title="Enter Your Main Data" />
            <TextField
              floatingLabelText="Your First Name"
              onChange={handleChange("firstName")}
              defaultValue={values.firstName}
            />
            <br />
            <TextField
              floatingLabelText="Your Last Name"
              onChange={handleChange("lastName")}
              defaultValue={values.lastName}
            />
            <br />
            <TextField
              floatingLabelText="Your Email"
              onChange={handleChange("email")}
              defaultValue={values.email}
            />
            <br /> <br />
            <RaisedButton
              label="Continue"
              primary={true}
              onClick={this.continue}
            />
          </React.Fragment>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default MainDetails;
