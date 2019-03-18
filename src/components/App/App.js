import React from 'react'
import 'normalize.css'
import './App.scss'
import '../../styles/button.scss'
import Header from '../Header/Header';
import Home from '../pages/Home/Home'
import {Route, Switch} from 'react-router-dom'
import NotFound from '../NotFound/NotFound'
import Create from '../pages/Create/Create'
import DocumentTitle from '../DocumentTitle/DocumentTitle'

class App extends React.Component {

    render() {

        return (
            <div className="app">
                <DocumentTitle />
                <div className="app__container">
                    <Header/>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/create" component={Create} />
                        <Route component={NotFound} />
                    </Switch>

                </div>
            </div>
        )

    }

}

export default App