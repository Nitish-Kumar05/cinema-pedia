import React from 'react'

const Season = ({ seasons }) => {
    return (
        <div>
            <p>
                Total seasons: {seasons.length}
            </p>
            <p>
                Total episodes: {seasons.reduce((sum, season) => sum + season.episodeOrder, 0)}
            </p>
            <div>
                {seasons.map(season => (
                    <div key={season.key} >
                        <p>Season: {season.number}</p>
                        <p>Episodes: {season.episodeOrder}</p>

                        <div>
                            Runtime: {season.premiereDate} - {season.endDate}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Season