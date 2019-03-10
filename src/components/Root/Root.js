import React from 'react'
import App from '../App/App'
import {BrowserRouter as Router} from 'react-router-dom'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import store from '../../store/store'
import {Provider} from 'react-redux'

const Root = () => {
    return (
        <Provider store={store} >
            <ErrorBoundary>
                <Router>
                    <App/>
                </Router>
            </ErrorBoundary>
        </Provider>
    )
}

export default Root