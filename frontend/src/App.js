import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from "./components/homePage"
import FoodPhotoShow from "./components/foodPhotoShow";
import FoodPhotos from "./components/foodPhotos";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  const user = useSelector(state=>Object.values(state.session))
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/" exact>
            {user[0] && <FoodPhotos />}
            <Home />
          </Route>
          <Route path ="/foodPhotos/:id" exact>
            <FoodPhotoShow />
          </Route>
          <Route path ="/foodPhotos">
            <FoodPhotos />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
