import React from 'react';
import ModuleA from './ModuleA';
import ModuleB from './ModuleB';

const HomeStatic = ({module}) => (
        <div>
            <div>Módulos estáticos</div>
            {module === 'A' && <ModuleA/>}
            {module === 'B' && <ModuleB/>}
        </div>
);

export default HomeStatic;