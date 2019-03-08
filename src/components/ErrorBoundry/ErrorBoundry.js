import React from 'react'
import ErrorIndicator from '../ErrrorIndicator/ErrrorIndicator'

export default class ErrorBoundry extends React.Component{

	state = {
		hasError: false
	}

	componentDidCatch() {
		this.setState({
			hasError: true
		})
	}

	render() {

		const {children} = this.props
		const {hasError} = this.state

		if(hasError) {
			// return <ErrorIndicator />
			return <span>ghh</span>
		}

		return children
	}

}