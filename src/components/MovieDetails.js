import PropTypes from "prop-types";
//import { Link } from "react-router-dom";

function MovieDetails({ id, coverImg, title, url, genres }) {
    return (
        <div>
            <img src={coverImg} alt={title} />
            <h2><a href={url} target={`_blank`}>{title}</a></h2>
            {/* <p>{url}</p> */}
            <ul>
                {genres.map(g => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

MovieDetails.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default MovieDetails;