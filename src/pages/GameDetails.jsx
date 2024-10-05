import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./GameDetails.css";

const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState({});
  const API_KEY = import.meta.env.VITE_API_KEY;


  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
        );
        console.log(response.data); // Para verificar os dados
        setGame(response.data);
      } catch (error) {
        console.error("Erro ao buscar detalhes do jogo:", error);
      }
    };
    fetchGameDetails();
  }, [id, API_KEY]);

  return (
    <div className="game-detail">
      <h1>{game.name}</h1>
      {game.background_image && (
        <img src={game.background_image} alt={game.name} />
      )}
      <p>{game.description_raw || game.description}</p>
      <p>
        <strong>Lançado em:</strong>{" "}
        {new Date(game.released).toLocaleDateString()}
      </p>
      <p>
        <strong>Avaliação:</strong> {game.rating}
      </p>
      <p>
        <strong>Plataformas:</strong>{" "}
        {game.platforms?.map((platform) => platform.platform.name).join(", ")}
      </p>
      <p>
        <strong>Gêneros:</strong>{" "}
        {game.genres?.map((genre) => genre.name).join(", ")}
      </p>
      <p>
        <strong>Desenvolvedor:</strong>{" "}
        {game.developers?.map((dev) => dev.name).join(", ")}
      </p>
      <p>
        <strong>Duração:</strong> {game.playtime} horas
      </p>
    </div>
  );
};

export default GameDetails;
