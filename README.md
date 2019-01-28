
## ¿Cómo ejecutar el proyecto? 

Simplemente, con el comando npm o yarn 

### `npm start`

## Descripción

Este proyecto tiene finalidad simplemente educativa y de demostración de la utilización de los componentes Suspense y lazy introducidos por React 16.6.
Estas utilidades permiten la carga tardía de componentes y el code spliting sin el agregado de librerías de terceros como podía ser react-loadable (aún recomendada para SSR). 
El code splitting o división de código en varios bundles permite cargarlo a demanda o en paralelo.

Para la utilización de esta funcionalidad necesitamos de la ayuda de WebPack, el cual en el caso de CRA ya esta correctamente configurado. (babel-plugin-syntax-dynamic-import)

## ¿Porqué es importante el "code-splitting"? 

No sólo por el peso de la descarga de las librerías, sino también para reducir el tiempo de procesamiento inherente del código javascript: 
 - tiempo de parseo (parsing)
 - tiempo de compilación.

https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4

## Herramienta de profiling

LightHouse: Puede actuar por linea de comandos o cómo extensión del Chrome. 

https://developers.google.com/web/tools/lighthouse/
https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk

Coverage: Herramienta de Chrome Dev Tools

## Comparación con otras herramientas

### Loadable-components

https://github.com/smooth-code/loadable-components
https://www.smooth-code.com/open-source/loadable-components/docs/loadable-vs-react-lazy/
https://github.com/react-boilerplate/react-boilerplate/blob/master/docs/js/async-components.md

import loadable from 'loadable-components';

export default loadable(() => import('./Home'), {
  LoadingComponent: () => <div>Loading...</div>,
})

### react-loadable

https://github.com/jamiebuilds/react-loadable

import Loadable from 'react-loadable';
import Loading from './my-loading-component';

const LoadableComponent = Loadable({
  loader: () => import('./my-component'),
  loading: Loading,
});

export default class App extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
}

## Para ver el código en funcionamiento

Se puede ingresar al Sandbox: https://codesandbox.io/s/github/correooke/suspense-lazy

## Autor: Emiliano Ocariz