import React , {useState} from 'react';
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "../pages/home-page";
import SettingsPage from "../pages/settings-page";
import LabelBottomNavigation from "./bottom-navigation";
import AppHeader from "./app-header";
import SearchPage from "../pages/search-page";
import SavedPage from "../pages/saved-page";
import PostPage from "../pages/post-page";
import FavoritesPage from "../pages/favorites-page";
import { Container, Box } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { isMobile } from "../utils/functions";
import Theme from "./theme";

//Redux implementation
import { useDispatch, useSelector } from 'react-redux';
import { DisplayScreen } from '../redux/actions/actions';

//Screens
import Login from '../pages/login';
import Register from '../pages/register';
import Forgetpassword from '../pages/forgotpassword';

const MainComponent = () => {
  const dispatch = useDispatch();
  const allStates = useSelector((state) => state);
  console.log("allStates", allStates);
  const changeScreen= (screenNumber) => {
    dispatch(DisplayScreen(screenNumber));
  }

  if(allStates.displaypage!=4)
  {
    return (
          <div style={{
            height:'100vh',
            overflow:'hidden',
            flex:1,
            flexDirection:'column',
            display: 'flex',
          }}>        
            <div
              style={{
                flex:0.9, 
                display: 'flex',
              }}
            >
            {allStates.displaypage===1 ?
                  <Login />
                :
                  allStates.displaypage===2 ?
                      <Register/>
                    :
                      allStates.displaypage===3 ?                    
                      <Forgetpassword/>
                      :
                        <Login />
            }
            </div>
            <div style={{
                flex:0.1,
                flexDirection:'row',
                display: 'flex',
              }}
            >
              <button
                style={{ 
                  flex:1, 
                  fontSize: 16, 
                  backgroundColor:(allStates.displaypage===1?'white':'gray')
                }}
                onClick={() => {
                  changeScreen(1)
                }}
              >
                Login
              </button>
              <button style={{ 
                  flex:1, 
                  fontSize: 16, 
                  backgroundColor:(allStates.displaypage===2?'white':'gray')
                }}
                onClick={() => {
                  changeScreen(2)
                }}
              >
                Registration
              </button>
              <button style={{ 
                  flex:1, 
                  fontSize: 16, 
                  backgroundColor:(allStates.displaypage===3?'white':'gray')
                }}
                onClick={() => {
                  changeScreen(3)
                }}
              >
                Forget Password
              </button>
            </div>
        </div>
    );
  }
  else
    return (
          <Theme>
            <CssBaseline />
            <Router basename={process.env.PUBLIC_URL}>
              <div className="App">
                <AppHeader />
    
                <Container>
                  <Box>
                    <Switch>
                      <Route exact path="/">
                        <HomePage />
                      </Route>
                      <Route path="/search">
                        <SearchPage />
                      </Route>
                      <Route path="/favorites">
                        <FavoritesPage />
                      </Route>
                      <Route path="/saved">
                        <SavedPage />
                      </Route>
                      <Route path="/settings">
                        <SettingsPage />
                      </Route>
                      <Route path="/post">
                        <PostPage />
                      </Route>
                    </Switch>
                  </Box>
                </Container>
                <br />
                <br />
                <br />
                <br />
                {isMobile() && <LabelBottomNavigation />}
              </div>
            </Router>
          </Theme>
      );
    };

export default MainComponent;
