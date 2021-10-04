import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from '../router/App'
import { Provider } from 'react-redux';
import { store } from '../store/store';

const AppContainer = () => {
    return (
        <>
         <Provider store={store}>
            <App />
         </Provider>
        </>
    )

}

export default AppContainer
