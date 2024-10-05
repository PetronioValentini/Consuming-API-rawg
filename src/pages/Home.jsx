import { useEffect, useState } from "react";
import GameCard from "../components/GameCard";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [games, setGames] = useState([]);
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games?key=${API_KEY}`
        );
        setGames(response.data.results);
      } catch (error) {
        console.error("Erro ao buscar jogos:", error);
      }
    };
    fetchGames();
  }, [API_KEY]);

  return (
    <div>
      <h1>Jogos Populares</h1>
      <div className="game-list">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Home;
