import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App/App'
import {BrowserRouter as Router} from 'react-router-dom'
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry'
import {Provider} from 'react-redux'
import Service from './service/Service'
import {ServiceProvider} from './components/ServiceContext/ServiceContext'
import store from './store'

const service = new Service()

const appBody = (
    <Provider store={store}>
        <ErrorBoundry>
            <ServiceProvider value={service} >
                <Router>
                    <App/>
                </Router>
            </ServiceProvider>
        </ErrorBoundry>
    </Provider>
)

ReactDOM.render(appBody, document.getElementById('root'))