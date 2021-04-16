import React, { Component } from "react";
import api from "../services/api";

// const App = () => {
//   return <div>App works</div>;
// };

class App extends Component {
  state = {};

  async componentDidMount() {
    const result = await api.call("post", "auth/login", {
      username: "username",
      password: "password",
    });

    console.log(result);
  }

  render() {
    return <div>App works</div>;
  }
}

export default App;
