import { useState } from "react"

const Home = () => {

    const [searchStr, setSearchStr] = useState('')

    const onSearchInputChange = (e) => {
        setSearchStr(e.target.value);
    }

    const onSearch = async (e) => {
        e.preventDefault();
        // For API request
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchStr}`);
        const data = await response.json();
        console.log(data)
    }

    return (
        <>
            <form onSubmit={onSearch} >
                <input type='text' onChange={onSearchInputChange} />
                <button type="submit" value={searchStr} onChange={onSearchInputChange} >
                    Search
                </button>
            </form>
        </>
    )
}

export default Home