import { useEffect } from 'react';

// d5581b28
const API_URL = 'http://www.omdbapi.com?apikey=d5581b28';

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('SpiderMan');
    }, []);

    return (
        <h1>Hello</h1>
    );
}

export default App;