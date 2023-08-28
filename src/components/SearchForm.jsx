import React from 'react'
import { useState } from 'react'
import { useSearchStr } from '../lib/useSearchStr'
import CustomRadio from './CustomRadio'

const SearchForm = ({ onSearch }) => {

    const [searchStr, setSearchStr] = useSearchStr()
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

            <CustomRadio
                label='Shows'
                name='search-option'
                value='shows'
                checked={searchOption === 'shows'}
                onChange={onRadioClick}
            />

            <CustomRadio
                label='Actors'
                name='search-option'
                value='actors'
                checked={searchOption === 'actors'}
                onChange={onRadioClick}
            />

            <button type="submit">
                Search
            </button>
        </form>
    )
}

export default SearchForm