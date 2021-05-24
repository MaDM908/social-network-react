import React, { Component } from 'react';
import './App.css';
import News from './components/News/News';
import Nutrition from './components/Nutrition/Nutrition';
import { BrowserRouter, Route } from 'react-router-dom';
import NavbarContainer from './components/Navbar/NavbarContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import { initializingProcess } from './redux/app-reducer';
import PreLoader from './components/common/Loader/PreLoader';
import { Provider, connect } from 'react-redux';
import store from './redux/redux-store';
import withSuspenseComponent from './components/hoc/withSuspenseComponent';
import { compose } from 'redux';
import { Redirect, withRouter } from 'react-router-dom/cjs/react-router-dom.min';

const ProfileContainer = React.lazy(() => import( './components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));


class App extends Component {
  componentDidMount() {
    this.props.initializingProcess();
    window.addEventListener("unhandledrejection", event => (this.unHandledRejector(event)));
  };
  unHandledRejector(event){
    alert(event);
  };
  componentWillUnmount(){
    window.removeEventListener("unhandledrejection", event => (this.unHandledRejector(event)));
  };

  render() {
    if (!this.props.initialized) {

      return <PreLoader />
    } else
      return (

        <div className="app-wrapper">
          <HeaderContainer />
          
          <div className="app-wrapper-main">
            <div>
              <NavbarContainer />
            </div>
          
            <div className="app-wrapper-content">

              <Route exact path='*'  render ={() => <Redirect to='/Profile' />}/>
              <Route exact path='/Profile/:userId?' render={() => withSuspenseComponent(ProfileContainer)} />
              <Route path='/Dialogs' render={() => withSuspenseComponent(DialogsContainer)} />
              <Route path='/Users' render={() => withSuspenseComponent(UsersContainer)} />
              <Route path='/News' component={News} />
              <Route path='/Nutrition' component={Nutrition} />
              <Route exact path='/login' render={() => withSuspenseComponent(Login)}/>

            </div>
          </div>
          
        </div>
      );
  }
}


const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

let AppContainer = compose(
withRouter,
connect(mapStateToProps, { initializingProcess })
)(App);

const SamuraiAppJS = (props) => {
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
};


export default SamuraiAppJS

