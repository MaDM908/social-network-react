import React from 'react';
import { connect } from 'react-redux';
import { addPost, getProfileData, getStatus, updateStatus, setUserProfile, savePhoto, editProfile } from '../../redux/profile-reducer';
import Profile from './Profile';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import withAuthRedirect from '../hoc/withAuthComponent';
import { compose } from 'redux';
import PreLoader from '../common/Loader/PreLoader';


class ProfileContainer extends React.PureComponent {
    componentDidMount() {
        if (this.props.match.params.userId) {
            let id = this.props.match.params.userId;
            this.props.getProfileData(id);
            this.props.getStatus(id)
        } else {
            this.props.getProfileData();
            this.props.getStatus()
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.profile !== null) {
            if (prevProps.profile.userId !== this.props.authId && !this.props.match.params.userId) {
                this.props.getProfileData();
                this.props.getStatus()
            }
        }
    }
    // //Реализовал, но все таки как-то некрасиво


    //В общем говоря, из фетчинг doesnt matter. Данные приходят, но медленно dispatching...
    render() {
        if (this.props.profile !== null) {
            return <Profile {...this.props} isOwner={!this.props.match.params.userId} />;
        } else {
            return <PreLoader />
        }
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        isFetching: state.profilePage.isFetching,
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status,
        authId: state.auth.id,
        error: state.profilePage.error
    };
};
//Думаю сделать reset form для profile

//Главная проблем ужасная реализация профайл компоненты, слишком много логики в презент комп
//А также наш auth-хок работает для всех компонент, но не всем нужен withRouter!
export default compose(
    withRouter,
    connect(mapStateToProps, { addPost, getProfileData, getStatus, updateStatus, setUserProfile, savePhoto, editProfile }),
    withAuthRedirect
)(ProfileContainer);


