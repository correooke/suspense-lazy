import React from 'react';
const ModuleA = React.lazy(() => import('./ModuleA'));
const ModuleB = React.lazy(() => import('./ModuleB'));

const Container = ({children, module}) => {
    return (
        <div>
                {module === 'A' && <ModuleA/>}
                {module === 'B' && <ModuleB/>}
        </div>
    );
};

export default Container;