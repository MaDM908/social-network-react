import { sentMessage } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import withAuthRedirect from '../hoc/withAuthComponent';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

let mapStateToProps = (state) => {
    return {
        users: state.dialogsPage.users,
        messages: state.dialogsPage.messages,
        isAuth: state.auth.isAuth
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps, {sentMessage}),
    withAuthRedirect
)(Dialogs);

