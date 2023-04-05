import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails"
import styles from "./Home.module.css";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);

    const getMovie = useCallback(async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json.data.movie);
        setMovie(json.data.movie);
        setLoading(false);
    }, [id]);
    useEffect(() => {
        getMovie();
    }, [getMovie]);
    return (
        <div className={styles.container}>
        {loading ? (
            <div className={styles.loader}>
                <span>Loading...</span>
            </div>
        ) : (
            <div className={styles.movies}>
            {
                <MovieDetails
                    key={movie.id}
                    id={movie.id}
                    coverImg={movie.large_cover_image} 
                    title={movie.title} 
                    url={movie.url} 
                    genres={movie.genres} 
                />
            }
            </div>
        )}
        </div>
    );
}
export default Detail;