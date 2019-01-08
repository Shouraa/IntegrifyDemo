import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import SingleImage from "./containers/SingleImage/SingleImage";
// import ImagesGrid from "./containers/FrontPage/FrontPage";
import "./App.css";
import FrontPage from "./containers/FrontPage/FrontPage";
import axios from "axios";

class App extends Component {
  state = {
    images: []
  };

  componentDidMount() {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=add2d2d52391495814a84b22b6089261f7133c5ac4b5a22017e11a4c7a6dc60b"
      )
      .then(response => {
        console.log(response.data);
        this.setState({ images: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route
                path="/singleImage/:id"
                render={props => <SingleImage {...this.state} />}
              />
              <Route
                path="/"
                exact
                render={props => <FrontPage {...this.state} />}
              />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
