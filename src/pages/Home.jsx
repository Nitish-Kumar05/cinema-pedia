import { useState } from "react"
import { searchForShows, searchForPeople } from "../utils/tvmazeapi"
import SearchForm from "../components/SearchForm"

const Home = () => {


    const [apiData, setApiData] = useState(null)
    const [apiDataError, setApiDataError] = useState(null)

    const onSearch = async ({ q, searchOption }) => {
        // For API request

        try {
            setApiDataError(null);

            if (searchOption === 'shows') {
                const resultData = await searchForShows(q)
                setApiData(resultData)
            } else {
                const resultData = await searchForPeople(q)
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

        return null;
    }

    return (
        <>
            <SearchForm onSearch={onSearch} />

            <div>
                {renderApiData()}
            </div>
        </>
    )
}

export default Home