import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class PersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();

    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();

    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <div>
        <MuiThemeProvider>
          <React.Fragment>
            <AppBar title="Enter Your Personal Data" />
            <TextField
              floatingLabelText="Your Occupation"
              onChange={handleChange("occupation")}
              defaultValue={values.occupation}
            />
            <br />
            <TextField
              floatingLabelText="Your City"
              onChange={handleChange("city")}
              defaultValue={values.city}
            />
            <br />
            <TextField
              floatingLabelText="Your Bio"
              onChange={handleChange("bio")}
              defaultValue={values.bio}
            />
            <br /> <br />
            <RaisedButton
              label="Continue"
              primary={true}
              onClick={this.continue}
            />
            <RaisedButton label="Back" primary={false} onClick={this.back} />
          </React.Fragment>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default PersonalDetails;
