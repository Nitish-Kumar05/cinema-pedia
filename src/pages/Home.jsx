import { useState } from "react"
import { searchForShows } from "../utils/tvmazeapi"

const Home = () => {

    const [searchStr, setSearchStr] = useState('')
    const [apiData, setApiData] = useState(null)
    const [apiDataError, setApiDataError] = useState(null)

    const onSearchInputChange = (e) => {
        setSearchStr(e.target.value);
    }

    const onSearch = async (e) => {
        e.preventDefault();
        // For API request

        try {
            const resultData = await searchForShows(searchStr)
            setApiData(resultData)
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
            return apiData.map((data) => <div key={data.show.id}>
                {data.show.name}
            </div>)
        }
    }

    return (
        <>
            <form onSubmit={onSearch} >
                <input type='text' onChange={onSearchInputChange} />
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