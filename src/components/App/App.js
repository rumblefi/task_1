import React from 'react'
import 'normalize.css'
import './App.scss'
import '../../styles/button.scss'
import Header from '../Header/Header';
import Page from '../pages/Page/Page'
import Home from '../pages/Home/Home'
import {Route, Switch} from 'react-router-dom'
import NotFound from '../NotFound/NotFound'
import Create from '../pages/Create/Create'

class App extends React.Component {

    render() {

        return (
            <div className="app">
                <div className="app__container">
                    <Header/>
                    <Switch>
                        <Route
                            path="/"
                            exact
                            render={(props) => (<Page {...props} component={Home} title="Invoices"/>)}/>
                        <Route
                            path="/create"
                            component={Create}
                            render={(props) => (<Page {...props} component={Create} title="Create"/>)}/>
                        <Route
                            render={(props) => (<Page {...props} component={NotFound} title="Not Found"/>)}/>
                    </Switch>

                </div>
            </div>
        )

    }

}

export default App