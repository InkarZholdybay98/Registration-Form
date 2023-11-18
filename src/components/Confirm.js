import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

export class MainDetails extends Component {
  continue = (e) => {
    e.preventDefault();

    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();

    this.props.prevStep();
  };

  render() {
    const { values } = this.props;

    return (
      <div>
        <MuiThemeProvider>
          <React.Fragment>
            <AppBar title="Confirm Your Data" />
            <List>
              <ListItem
                primaryText="First Name"
                secondaryText={values.firstName}
              />

              <ListItem
                primaryText="Last Name"
                secondaryText={values.lastName}
              />

              <ListItem primaryText="Email" secondaryText={values.email} />

              <ListItem
                primaryText="Occupation"
                secondaryText={values.occupation}
              />

              <ListItem primaryText="City" secondaryText={values.city} />

              <ListItem primaryText="Bio" secondaryText={values.bio} />
            </List>

            <br />
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

export default MainDetails;
