import React from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


const withAuthRedirect = (WrappedComponent) => {
    return class AuthRedirectComponent extends React.Component {
        render(){
            if(!this.props.isAuth && !this.props.match.params.userId)
                return <Redirect to={'./login'} />
            return <WrappedComponent {...this.props}/>;
        }
    }
};

export default withAuthRedirect;