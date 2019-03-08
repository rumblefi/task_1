import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App/App'
import {BrowserRouter as Router} from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import {Provider} from 'react-redux'
import Service from './service/Service'
import {ServiceProvider} from './components/ServiceContext/ServiceContext'
import store from './store'

const service = new Service()

const appBody = (
    <Provider store={store}>
        <ErrorBoundary>
            <ServiceProvider value={service} >
                <Router>
                    <App/>
                </Router>
            </ServiceProvider>
        </ErrorBoundary>
    </Provider>
)

ReactDOM.render(appBody, document.getElementById('root'))