import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export class MainDetails extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <React.Fragment>
            <AppBar title="Success" />
            <h1>Thank You fot Your Registration</h1>
            <p>You will get an email</p>
          </React.Fragment>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default MainDetails;
