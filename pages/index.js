import minhaImagem from "../img/image_c14c65cf.jpg";

function Home() {
  return (
    <div>
      <h1>Elenilma, pode rir não viu ! 👀👀</h1>
      <img
        src={minhaImagem.src}
        alt="Descrição da imagem"
        style={{ width: "700px", height: "auto", maxWidth: "100%" }}
      />
    </div>
  );
}

export default Home;