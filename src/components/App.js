import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Chart from "./chart/Chart";
import FormPage from "./form/FormPage";

function App() {
  const [inputValues, setInputValues] = useState([["", ""]]);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          render={() => (
            <FormPage
              inputValues={inputValues}
              setInputValues={setInputValues}
            />
          )}
          exact={true}
        />
        <Route
          path="/chart"
          render={() => <Chart inputValues={inputValues} />}
          exact={true}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
