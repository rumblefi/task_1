import React from 'react'
import '../../styles/field.scss'
import './SearchBar.scss'

class SearchBar extends React.Component {

    handleChange = (e) => {

        const {value} = e.target
        const re = /^[0-9\b]+$/;
        
        if (value === '' || re.test(value)) {
        }

    }

    render() {

        return (
            <div className="search-bar">
                <input
                    type="text"
                    className="field"
                    placeholder="Seach invoices by number"
                    />
            </div>
        )

    }

}

export default SearchBar