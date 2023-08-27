import React from 'react'
import { useStarredShows } from '../lib/useStarredShows'

const Starred = () => {
    const [starredShows] = useStarredShows()

    return (
        <div>Starred, starred {starredShows.length}</div>
    )
}

export default Starred