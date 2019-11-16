import React, { Component } from "react";

class AdminPage extends Component {
  componentDidMount() {
    if (typeof window !== "undefined") {
      window.location.replace("https://host.mildronize.com/wp-admin");
    }
  }

  render() {
    return <></>;
  }
}

export default AdminPage;
