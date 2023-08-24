import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getShowId } from '../utils/tvmazeapi';

const Show = () => {

    const { showId } = useParams();

    const [showData, setShowData] = useState(null)
    const [showError, setShowError] = useState(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getShowId(showId);
                setShowData(data)
            } catch (err) {
                setShowError(err);
            }
        }
        fetchData()
    }, [showId])

    if (showError) {
        return <div>We have an error: {showError.message}</div>
    }

    if (showData) {
        return <div>Got show data: {showData.name}</div>
    }

    return (
        <>
            LOADING......
        </>
    )
}

export default Show