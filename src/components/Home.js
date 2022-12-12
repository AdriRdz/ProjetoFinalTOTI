import arvore2 from "../assets/arvore2.jpg"
import "./Index.css"




const Home = () => {
    return (
        <div className="body" style={{ backgroundImage: `url(${arvore2})` }}>

            <div>
                <h1>Sistema de Cadastro de Alunos</h1>
            </div>
            <div>
                <p className="titulo">Instituto de Tecnologia e Saber</p>
            </div>
            <div>
                <p className="slogan">"Um programador que escreve código limpo, entende totalmente o problema antes de escrever o código."</p>
            </div>
        </div>
    )
}

export default Home;