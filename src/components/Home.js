import React, {Suspense} from 'react';

const ModuleA = React.lazy(() => import ('./ModuleA'));
const ModuleB = React.lazy(() => import ('./ModuleB'));


const Home = ({module}) => (
    <Suspense fallback={< h1 > Cargando ...</h1>}>
        <div className="home">
            <div>Módulos dinámicos</div>            
            {module === 'A' && <ModuleA/>}
            {module === 'B' && <ModuleB/>}
        </div>
    </Suspense>
);

export default Home;