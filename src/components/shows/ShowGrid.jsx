import { useReducer } from 'react'
import ShowCard from './ShowCard'

const starredShowsReducer = (currentStarred, action) => {
    switch (action.type) {
        case 'STAR':
            return currentStarred.concat(action.showId);
        case 'UNSTAR':
            return currentStarred.filter(showId => showId !== action.showId)
        default:
            return currentStarred;
    }
}

const ShowGrid = ({ shows }) => {

    const [starredShows, dispatchStarred] = useReducer(starredShowsReducer, [])

    const onStarMeClick = showId => {
        const isStarred = starredShows.include(showId);

        if (isStarred) {
            dispatchStarred({ type: 'UNSTAR', showId })
        } else {
            dispatchStarred({ type: 'STAR', showId })
        }
    }

    return (
        <>
            {shows.map(data => (
                <ShowCard
                    key={data.show.id}
                    id={data.show.id}
                    name={data.show.name}
                    image={data.show.image ? data.show.image.medium : '/img-placeholder.png'}
                    summary={data.show.summary}
                />
            ))}
        </>
    )
}

export default ShowGrid