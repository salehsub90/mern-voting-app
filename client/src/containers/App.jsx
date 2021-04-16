import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/index";

const App = () => {
  return (
    <Provider store={store}>
      <div>App works</div>
    </Provider>
  );
};

// class App extends Component {
//   state = {};

//   async componentDidMount() {
//     const result = await api.call("post", "auth/login", {
//       username: "username",
//       password: "password",
//     });

//     console.log(result);
//   }

//   render() {
//     return <div>App works</div>;
//   }
// }

export default App;
