import React from 'react'
import App from '../components/App/App'
import {BrowserRouter as Router} from 'react-router-dom'
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import store from '../store/store'
import {Provider} from 'react-redux'
import {ServiceProvider} from '../components/ServiceContext/ServiceContext'
import Service from '../service/Service'

const service = new Service()

const Root = () => {
    return (
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
}

export default Root