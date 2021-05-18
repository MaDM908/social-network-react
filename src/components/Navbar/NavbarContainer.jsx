import { newFriendActionCreator, updateFriendActionCreator } from '../../redux/sidebar-reducer';
import Navbar from './Navbar';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        links: state.sidebar.links,
        friends: state.sidebar.friends,
        newFriendText: state.sidebar.newFriendText
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        addFriend: () => {
            dispatch(newFriendActionCreator());
        },
        updateFriend: (body) => {
            dispatch(updateFriendActionCreator(body));
        }
    };
};
const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;