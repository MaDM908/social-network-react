import React from 'react';
import s from './Login.module.css';
import { reduxForm } from 'redux-form';
import { Input, createField } from '../common/FormControls/FormControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { loginThunk } from './../../redux/auth-reducer';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';



const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return <div>
        <form onSubmit={handleSubmit} className={s.form}>
            <div>{createField("Email...", "email", [ required ], Input, "text")}</div>
            <div>{createField("Password...", "password", [ required ], Input, "password")}</div>
            <span>Remember me</span>
            <div>{createField(null, "rememberMe", [], Input, "checkbox")}</div>

            { captchaUrl && <div>
                <img src={captchaUrl} alt="captcha" />
                {createField("Type symbols from image...", "captcha", [ required ], Input )}
            </div> }

            { error && <div className={s.form + ' ' + s.error}>{error}</div>}
            <div><button>Sign In</button></div>
        </form>
    </div>;
};

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

const Login = (props) => {
    const onSubmit = (payload) => {
        props.loginThunk(payload.email, payload.password, payload.rememberMe, payload.captcha);
    }
    if(props.isAuth) return <Redirect to="/Profile" />
    return <div className={s.content}>
        <div className={s.title}>Login</div>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>;
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    };
};
//Обернуть container component от hoc connect
export default connect(mapStateToProps, { loginThunk })(Login);   