import React, { Suspense } from 'react';
import Container from './Container';


const Home = ({module}) => (
        <Suspense fallback={<h2>Cargando...</h2>}>
            <Container module={module}></Container>
            <div>Módulos dinámicos</div>

        </Suspense>
);

export default Home;