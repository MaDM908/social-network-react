import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logoutThunk } from './../../redux/auth-reducer';
import { getIcon } from '../../redux/selectors/header-selectors';

class HeaderContainer extends React.Component{

    render(){

        return <Header {...this.props}/>;
    }
};

let mapStateToProps = (state) => {
    return {
    login: state.auth.login,
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth,
    icon: getIcon(state)
    } 
};

export default connect(mapStateToProps, { logoutThunk })(HeaderContainer);