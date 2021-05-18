import React from 'react';
import PreLoader from './../common/Loader/PreLoader';

const withFetchingComponent = (component) => {
    return class FetchingComponent extends React.Component {
    render(){
        if(this.props.isFetching)
            return <PreLoader />
        return <component {...this.props}/>
    }
}
};

export default withFetchingComponent;