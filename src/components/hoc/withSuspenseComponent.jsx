import React from 'react';
import PreLoader from '../common/Loader/PreLoader';

const withSuspenseComponent = (Component) => {
    return <React.Suspense fallback={<PreLoader />}>
        <Component />
    </React.Suspense>
};

export default withSuspenseComponent;