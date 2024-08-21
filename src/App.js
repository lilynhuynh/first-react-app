import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import AnimeCard from './AnimeCard.jsx';

const API_URL = 'https://api.jikan.moe/v4';

const App = () => {
    const [animes, setAnimes] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    const searchAnime = async (title) => {
        const response = await fetch(`${API_URL}/anime?q=${title}&sfw`);
        const data = await response.json();

        console.log("Searching for Anime");
        console.log(data.data);
        setAnimes(data.data);
    }

    useEffect(() => {
        searchAnime('One Piece')
    }, []);

    return (
        <div className="app">
            <h1>Anime Log</h1>
            <div className="search">
                <input
                    placeholder="Search for an anime"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchAnime(searchTerm)}
                />
            </div>

            {animes?.length > 0
                ? (
                    <div className="container">
                        {animes.map((anime) => (
                            <AnimeCard props={anime} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No animes found</h2>
                    </div>
                )
            }

        </div>
    );
}

export default App;