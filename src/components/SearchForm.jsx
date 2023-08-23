import React from 'react'
import { useState } from 'react'

const SearchForm = ({ onSearch }) => {

    const [searchStr, setSearchStr] = useState('')
    const [searchOption, setSearchOption] = useState('show')

    const onSearchInputChange = (e) => {
        setSearchStr(e.target.value);
    }

    const onRadioClick = (e) => {
        setSearchOption(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault()

        const options = {
            q: searchStr,
            searchOption,
        }

        onSearch(options)
    }

    return (
        <form onSubmit={onSubmit} >
            <input type='text' value={searchStr} onChange={onSearchInputChange} />

            <label>
                shows
                <input type="radio" name="search-options" value='shows' checked={searchOption === 'shows'} onChange={onRadioClick} />
            </label>

            <label>
                actors
                <input type="radio" name="search-options" value='actors' checked={searchOption === 'actors'} onChange={onRadioClick} />
            </label>

            <button type="submit">
                Search
            </button>
        </form>
    )
}

export default SearchForm