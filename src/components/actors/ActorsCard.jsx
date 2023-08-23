import React from 'react'

const ActorsCard = ({ name, image, gender, country, birthday }) => {

    return (
        <>
            <div>
                <img src={image} alt={name} />
            </div>

            <h1>
                {name}
                {!!gender && `(${gender})`}
            </h1>

            <p>
                {country ? `comes from ${country}` : 'unknown'}
            </p>

            {!!birthday && <p>Born : {birthday}</p>}
        </>
    )
}

export default ActorsCard