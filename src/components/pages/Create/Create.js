import React from 'react'
import './Create.scss'
import Form from '../../Form/Form'
import Section from '../../Section/Section'

const Create = () => {

	document.title = 'Create'

	return(
		<Section>
			<Form />
		</Section>
	)
}

export default Create