import React from 'react'
import 'normalize.css'
import './App.scss'
import '../../styles/button.scss'
import Header from '../Header/Header';
import Home from '../pages/Home/Home'
import {Route, Switch} from 'react-router-dom'
import NotFound from '../NotFound/NotFound'
import Create from '../pages/Create/Create'
import withService from '../../HOC/withService'
import {connect} from 'react-redux'
import compose from '../../utils/compose'
import fetchInvoices from '../../actions/fetchInvoices'
import {bindActionCreators} from 'redux'

class App extends React.Component {

    componentDidMount() {

		const {fetchInvoices} = this.props
		
        fetchInvoices()

    }

    render() {

        return (
            <div className="app">
                <div className="app__container">
                    <Header title="Invoices"/>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/create" component={Create}/>
                        <Route component={NotFound}/>
                    </Switch>

                </div>
            </div>
        )

    }

}

const mapDispatchToProps = (dispatch, {service}) => {

    return bindActionCreators({
        fetchInvoices: fetchInvoices(service),
    }, dispatch);
}

export default compose(withService(), connect(null, mapDispatchToProps))(App)