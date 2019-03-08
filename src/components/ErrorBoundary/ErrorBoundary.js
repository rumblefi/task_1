import React from 'react'
import ErrorIndicator from '../ErrrorIndicator/ErrrorIndicator'

export default class ErrorBoundary extends React.Component{

	state = {
		hasError: null
	}

	componentDidCatch(error) {
		this.setState({
			hasError: error
		})
	}

	render() {

		const {children} = this.props
		const {hasError} = this.state

		if(hasError) {

			return <ErrorIndicator errorMessage={hasError} />
		}

		return children
	}

}