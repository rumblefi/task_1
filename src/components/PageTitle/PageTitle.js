import React from 'react'
import {withRouter} from "react-router-dom"

class HeaderTitle extends React.Component {

    state = {
        title: null
    }

    setTitle() {
        const title = this
            .props
            .location
            .pathname
            .slice(1)
        this.setState({title})
    }

    componentDidMount() {
        this.setTitle()
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.setTitle()
        }
    }

    getTitle(title) {
        switch (title) {
            case '':
                return 'Invoices'
            case 'create':
                return 'Create'
            default:
                return 'Not found'
        }
    }

    render() {

        const {title} = this.state

        return (
            <div className="header__title">
                <span>{this.getTitle(title)}</span>
            </div>
        )
    }

}

export default withRouter(HeaderTitle)