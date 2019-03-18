import React from 'react'
import {withRouter} from "react-router-dom"

const withPageTitle = (Wrapped) => {

    class PageTitle extends React.Component {

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
				<Wrapped title={ this.getTitle(title) } />
			)
        }

    }

    return withRouter(PageTitle)

}

export default withPageTitle