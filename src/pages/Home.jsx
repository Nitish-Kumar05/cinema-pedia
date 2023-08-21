import { useState } from "react"
import { searchForShows, searchForPeople } from "../utils/tvmazeapi"

const Home = () => {

    const [searchStr, setSearchStr] = useState('')
    const [apiData, setApiData] = useState(null)
    const [apiDataError, setApiDataError] = useState(null)
    const [searchOption, setSearchOption] = useState('show')

    const onSearchInputChange = (e) => {
        setSearchStr(e.target.value);
    }

    const onRadioClick = (e) => {
        setSearchOption(e.target.value)
    }

    const onSearch = async (e) => {
        e.preventDefault();
        // For API request

        try {
            setApiDataError(null);

            if (searchOption === 'shows') {
                const resultData = await searchForShows(searchStr)
                setApiData(resultData)
            } else {
                const resultData = await searchForShows(searchStr)
                setApiData(resultData)
            }
        } catch (error) {
            setApiDataError(error);
        }
    }

    const renderApiData = () => {
        // For showing results in page also error
        if (apiDataError) {
            return <div>
                ERROR OCCURED: {apiDataError.message}
            </div>
        }

        if (apiData) {
            return apiData[0].show
                ? apiData.map((data) => <div key={data.show.id}>{data.show.name}</div>)
                : apiData.map((data) => <div key={data.person.id}>{data.person.name}</div>)
        }
    }

    return (
        <>
            <form onSubmit={onSearch} >
                <input type='text' onChange={onSearchInputChange} />

                <label>
                    shows
                    <input type="radio" name="search-options" value='shows' checked={searchOption === 'shows'} onChange={onRadioClick} />
                </label>

                <label>
                    actors
                    <input type="radio" name="search-options" value='actors' checked={searchOption === 'actors'} onChange={onRadioClick} />
                </label>

                <button type="submit" value={searchStr} onChange={onSearchInputChange} >
                    Search
                </button>
            </form>

            <div>
                {renderApiData()}
            </div>
        </>
    )
}

export default Home