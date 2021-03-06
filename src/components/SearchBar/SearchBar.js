import React from 'react'
import '../../styles/field.scss'
import './SearchBar.scss'
import {connect} from 'react-redux'
import search from '../../actions/search'

class SearchBar extends React.Component {

    handleChange = (e) => {

        const {value} = e.target
        const re = /^[0-9\b]+$/;

        if (value === '' || re.test(value)) {
            this.props.search( value )
            
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
                    onChange = {this.handleChange}
                    value={searchTerm}/>
            </div>
        )

    }

}

const mapStateToProps = ({searchTerm}) => {
    return {searchTerm}
}

const mapDispatchToProps = {
    search
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar)