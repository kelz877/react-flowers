import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BaseLayout} from './components/BaseLayout';
import App from './components/App';
import {BrowserRouter, Switch} from 'react-router-dom';
import { createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducers/reducer'
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <BaseLayout>
                <Switch>
                    <App />
                </Switch>  
            </BaseLayout>
        </BrowserRouter>
    </Provider>
    
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
