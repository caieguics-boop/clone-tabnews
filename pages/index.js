import minhaImagem from "../img/image_c14c65cf.jpg";

function Home() {
  return (
    <div>
      <h1>Estou aprendendo programação do zero</h1>
      <img src={minhaImagem.src} alt="Descrição da imagem" />
    </div>
  );
}

export default Home;