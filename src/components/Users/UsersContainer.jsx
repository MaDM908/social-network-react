import React from 'react';
import { connect } from 'react-redux';
import { receiveUsers, changePage, follow, unfollow } from '../../redux/users-reducer';
import Users from './Users';
import PreLoader from '../common/Loader/PreLoader';
import { getCurrentPage, getInFollowingProcess, getUsersSuper, getPageSize, getUsersCount, getIsFetching } from '../../redux/selectors/users-selectors';

class UsersContainer extends React.PureComponent {
    componentDidMount() {
        this.props.receiveUsers(this.props.currentPage, this.props.pageSize);

    };
    
    onPageChanger = (pageNumber) => {
        this.props.changePage(pageNumber, this.pageSize);
    };
    render() {
        const {users, pageSize, usersCount, currentPage, inFollowingProcess, follow, unfollow, isAuth} = {...this.props};
        return <>
            {this.props.isFetching ? <PreLoader /> :
                <Users
                    users={users}
                    setPortionNumber={this.setPortionNumber}
                    onPageChanger={this.onPageChanger}
                    usersCount={usersCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    unfollow={unfollow}
                    follow={follow}
                    inFollowingProcess={inFollowingProcess}
                    isAuth={isAuth}
                />
            }
        </>
    }
};

let mapStateToProps = (state) => {
    return {
        users: getUsersSuper(state),
        pageSize: getPageSize(state),
        usersCount: getUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        inFollowingProcess: getInFollowingProcess(state),
        isAuth: state.auth.isAuth
    };
};

export default connect(mapStateToProps, {
    receiveUsers, changePage, follow, unfollow, 
})(UsersContainer);