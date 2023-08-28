import { SearchCard, SearchImgWrapper } from '../common/SearchCard'

const ActorsCard = ({ name, image, gender, country, birthday }) => {

    return (
        <SearchCard>
            <SearchImgWrapper>
                <img src={image} alt={name} />
            </SearchImgWrapper>

            <h1>
                {name}
                {!!gender && `(${gender})`}
            </h1>

            <p>
                {country ? `comes from ${country}` : 'unknown'}
            </p>

            {!!birthday && <p>Born : {birthday}</p>}
        </SearchCard>
    )
}

export default ActorsCard