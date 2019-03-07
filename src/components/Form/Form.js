import React from 'react'
import './Form.scss'
import withSection from '../../HOC/withSection/withSection'
import '../../styles/field.scss'
import '../../styles/button.scss'
import {Link} from 'react-router-dom'


const Form = () => {
	return(
		<div className="form" >
			<label className="form-label" >
				<span className="form-label__title">Number:</span>
				<input type="text" className="field" placeholder="Enter Number" />
			</label>	
			<label className="form-label" >
				<span className="form-label__title">Invoice Date:</span>
				<input type="text" className="field" placeholder="Select date" />
			</label>	
			<label className="form-label" >
				<span className="form-label__title">Supply Date:</span>
				<input type="text" className="field" placeholder="Select date" />
			</label>
			<label className="form-label" >
				<span className="form-label__title">Comment:</span>
				<textarea className="field field--textarea"></textarea>
			</label>
			<div className="form__buttons">
				<button className="button button--2 form__button form__submit">Save</button>
				<Link to="/" className="button button--4 form__button form__cancel" >Cancel</Link>
			</div>
		</div>
	)
}

export default withSection(Form)