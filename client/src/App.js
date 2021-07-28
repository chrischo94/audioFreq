import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './utils/auth';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Welcome from './pages/Welcome/Welcome';
import Profile from './pages/Profile/Profile';
import Results from './pages/Results/Results';
import ProfileReview from './pages/ProfileReview/ProfileReview'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profilereview" component={ProfileReview} />
          <Route exact path="/results" component={Results} />
          {/* <ProtectedRoute exact path="/profile" onLoginFail="/login" component={Profile} /> */}
          {/* <ProtectedRoute exact path="/results" onLoginFail="/login" component={Results} /> */}
        </Switch>
      </Router>
    </AuthProvider>
    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}

    // <Login />
    // </div>
  );
}

export default App;
