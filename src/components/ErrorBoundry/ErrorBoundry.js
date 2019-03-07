import React from 'react'

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
			return <h1>Error!</h1>
		}

		return children
	}

}