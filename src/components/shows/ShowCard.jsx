const ShowCard = ({ name, image, id, summary, onStarMeClick }) => {

    const shortSummary = summary ? summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, '') : 'No description found'

    return (
        <>
            <div>
                <img src={image} alt={name} />
            </div>

            <h1>{name}</h1>
            <p>{shortSummary}</p>

            <div>
                <a href={`/show/${id}`} target="_blank" rel="noreferrer" >Read More...</a>
                <button type='button' onClick={() => onStarMeClick(id)} >
                    Star Me
                </button>
            </div>
        </>
    )
}

export default ShowCard