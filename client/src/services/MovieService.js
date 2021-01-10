import axios from 'axios'

const movies = 'http://localhost:5000/api/movies/'

// define functions for frontend to GET/POST data to the API
class MovieService {
    // get movies
    static getMovies() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(movies);
                const data = res.data;
                resolve(
                    data.map(movie => ({
                        ...movie
                    }))
                );
            } catch (err) {
                reject(err)
            }
        })
    }

    // add movie
    static addMovie(name, price) {
        return axios.post(movies, { 
            name,
            price
        })
    }

    // delete movie
    static deleteMovie(id) {
        return axios.delete(`${movies}${id}`)
    }
}


export default MovieService
