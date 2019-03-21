import React from 'react'
import './Form.scss'
import '../../styles/field.scss'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import createInvoice from '../../actions/createInvoice'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

class Form extends React.Component {

    state = {
        number: '',
        invoice_date: '',
        supply_date: '',
		comment: '',
		fuck: '',
        redirect: false
    }

    onChange = ({
        target: {
            name,
            value
        }
    }) => {
        this.setState({[name]: value})
    }

    onSubmit = (event) => {
        event.preventDefault()
        const {
            redirect,
            ...restState
        } = this.state
        this
            .props
            .createInvoice(restState)
        this.setState({redirect: true})
    }

    render() {

        const {number, invoice_date, supply_date, comment, redirect} = this.state

        if (redirect) {
            return <Redirect to="/"/>
        }

        return (
            <form className="form" onSubmit={this.onSubmit}>
                <DatePicker name="fuck" selected={this.state.fuck} onChange={this.handleChange}/>
                <label className="form-label">
                    <span className="form-label__title">Number:</span>
                    <input
                        type="text"
                        name="number"
                        className="field"
                        placeholder="Enter Number"
                        value={number}
                        onChange={this.onChange}/>
                </label>
                <label className="form-label">
                    <span className="form-label__title">Invoice Date:</span>
                    <input
                        type="text"
                        name="invoice_date"
                        className="field"
                        placeholder="Select date"
                        value={invoice_date}
                        onChange={this.onChange}/>
                </label>
                <label className="form-label">
                    <span className="form-label__title">Supply Date:</span>
                    <input
                        type="text"
                        name="supply_date"
                        className="field"
                        placeholder="Select date"
                        value={supply_date}
                        onChange={this.onChange}/>
                </label>
                <label className="form-label">
                    <span className="form-label__title">Comment:</span>
                    <textarea
                        name="comment"
                        className="field field--textarea"
                        value={comment}
                        onChange={this.onChange}></textarea>
                </label>
                <div className="form__buttons">
                    <button className="button button--2 form__button form__submit">Save</button>
                    <Link to="/" className="button button--4 form__button form__cancel">Cancel</Link>
                </div>
            </form>
        )
    }

}

const mapDispatchToProps = {
    createInvoice
}

export default connect(null, mapDispatchToProps)(Form)