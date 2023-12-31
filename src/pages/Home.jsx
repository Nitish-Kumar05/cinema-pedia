import { useState } from "react"
import { searchForShows, searchForPeople } from "../utils/tvmazeapi"
import { useQuery } from "@tanstack/react-query"
import { TextCenter } from '../components/common/TextCenter'
import SearchForm from "../components/SearchForm"
import ShowGrid from "../components/shows/ShowGrid"
import ActorsGrid from "../components/actors/ActorsGrid"

const Home = () => {

    const [filter, setFilter] = useState(null)

    const { data: apiData, error: apiDataError } = useQuery({
        queryKey: ['search', filter],
        queryFn: () => filter.searchOption === 'shows'
            ? searchForShows(filter.q)
            : searchForPeople(filter.q),
        enabled: !!filter,
        refetchOnWindowFocus: false,
    })

    const onSearch = async ({ q, searchOption }) => {
        // For API request

        setFilter({ q, searchOption })
    }

    const renderApiData = () => {
        // For showing results in page also error
        if (apiDataError) {
            return <TextCenter>
                ERROR OCCURED: {apiDataError.message}
            </TextCenter>
        }

        if (apiData?.length === 0) {
            return <TextCenter>No Results</TextCenter>
        }

        if (apiData) {
            return apiData[0].show
                ? <ShowGrid shows={apiData} />
                : <ActorsGrid actors={apiData} />
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