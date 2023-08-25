import { Link, useParams } from 'react-router-dom'
import { getShowId } from '../utils/tvmazeapi';
import { useQuery } from '@tanstack/react-query';
import ShowMainData from '../components/shows/ShowMainData';
import Details from '../components/shows/Details';
import Season from '../components/shows/Season';
import Cast from '../components/shows/Cast';


const Show = () => {

    const { showId } = useParams();

    const { data: showData, error: showError } = useQuery({
        queryKey: ['show', showId],
        queryFn: () => getShowId(showId),
        refetchOnWindowFocus: false,
    })

    if (showError) {
        return <div>We have an error: {showError.message}</div>
    }

    if (showData) {
        return <div>

            <Link to='/' >
                Go back to home
            </Link>

            <ShowMainData
                image={showData.image}
                name={showData.name}
                rating={showData.rating}
                summary={showData.summary}
                genres={showData.genres}
            />

            <div>
                <h2>Details</h2>
                <Details
                    status={showData.status}
                    premiered={showData.premiered}
                    network={showData.network}
                />
            </div>

            <div>
                <h2>Seasons</h2>
                <Season seasons={showData._embedded.seasons} />
            </div>

            <div>
                <h2>Cast</h2>
                <Cast cast={showData._embedded.cast} />
            </div>
        </div>
    }

    return (
        <>
            LOADING......
        </>
    )
}

export default Show