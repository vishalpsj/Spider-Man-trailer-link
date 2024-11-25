export const SpidermanCardDetails = (props) => {
    const { imageURL, movieName, imdbRating, releaseYear, casting, genre, storyline, youtubeTrailerLink } = props.curElem
    const buttonStyle = {backgroundColor:imdbRating >= 7 ? "var(--suprthit-color)" : "var(--average-color)"}
    const ratingColor = imdbRating >= 7 ? "super_hit" : "average"
    return (
        <li>
            <div>
                <img src={imageURL} alt={movieName} width={400} />
            </div>
            <h2>Name : {movieName} </h2>
            <h3>Rating : <span className={`rating ${ratingColor}`}>{imdbRating}</span> </h3>
            <h4>Year : {releaseYear} </h4>
            <h4>Cast : {casting.join(', ')} </h4>
            <p><b>Genre :</b> {genre} </p>
            <p><b>Storyline :</b> {storyline} </p>
            <a href={youtubeTrailerLink} target="_blank"><button style={buttonStyle}>Watch Trailer</button></a>
        </li>
    )
}