import React from 'react'
import '../../styles/field.scss'
import './SearchBar.scss'

export default class SearchBar extends React.Component {

    handleChange = (e) => {

        const {onSearch} = this.props
        const {value} = e.target
        const re = /^[0-9\b]+$/;
        
        if (value === '' || re.test(value)) {
            onSearch(value)
        }

    }

    render() {

        const {searchTerm} = this.props

        return (
            <div className="search-bar">
                <input
                    type="text"
                    className="field"
                    placeholder="Seach invoices by number"
                    onChange={this.handleChange}
                    value={searchTerm}
                    />
            </div>
        )

    }

}