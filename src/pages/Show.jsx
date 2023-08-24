import React from 'react'
import { useParams } from 'react-router-dom'

const Show = () => {

    const { showId } = useParams();

    return (
        <>
            {showId}
        </>
    )
}

export default Show