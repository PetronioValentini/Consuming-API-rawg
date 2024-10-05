import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h1>Sobre este aplicativo</h1>
      <p>
        Este aplicativo utiliza a API RAWG para fornecer informações detalhadas
        sobre uma ampla variedade de jogos. Com uma interface amigável e
        intuitiva, os usuários podem explorar diversos títulos, visualizar
        detalhes sobre cada jogo, incluindo imagens, avaliações e as plataformas
        em que estão disponíveis.
      </p>
      <p>
        Para mais informações sobre a API, acesse a{" "}
        <a
          href="https://rawg.io/apidocs"
          target="_blank"
          rel="noopener noreferrer"
        >
          documentação da API RAWG
        </a>
      </p>
      <h2>Vídeo sobre como consumir API RAWG</h2>
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/lUMIj6I9fR8"
        title="#9 Build Game Listing App with React Js, Tailwind CSS, Vite : Fetch Data from API"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default About;
