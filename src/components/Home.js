import livro2 from "../assets/livro2.jpeg";
import "./Index.css";
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';




const Home = () => {
    return (

        <div>
            <div className="body" style={{ backgroundImage: `url(${livro2})` }}>

                <div>
                    <h1 className="cadastro">Instituto de Tecnologia e Saber</h1>
                </div>
                <div>
                    <p className="titulo">Sistema de Cadastro de Alunos</p>
                </div>
                <div>
                    <p className="slogan">"Um programador que escreve código limpo, entende totalmente o problema antes de escrever o código."</p>
                    </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='footer-col'>
                        <h4>Instituto de Tecnologia e Saber</h4>
                        <ul>
                            <li><Link href=''>Desenvolvido por:</Link></li>
                            <li><Link href='/'>Adriana Rodriguez</Link></li>
                            <li><Link href='/'>Jose Lumbo</Link></li>
                            <li><Link href='/'>Nelson Villarroel</Link></li>
                            <li><Link href='/'>Walid Abdelfattah</Link></li>
                        </ul>
                    </div>
                    <div className='footer-col'>
                        <h4>Obter ajuda</h4>
                        <ul>
                            <li><Link href='/'>Perguntas Frequentes</Link></li>
                            <li><Link href='/'>Transporte</Link></li>
                             <li><Link href='/'>Status de Alunos</Link></li>
                            <li><Link href='/'>Opção de pagamento</Link></li>
                        </ul>
                    </div>

                    <div className='footer-col'>
                        <h4>Produtos mais vendidos</h4>
                        <ul>
                            <li><a href='#'>Ração</a></li>
                            <li><a href='#'>Cama</a></li>
                            <li><a href='#'>Leite</a></li>
                            <li><a href='#'>Outros</a></li>
                        </ul>

                    </div>

                    <div className='footer-col'>
                        <p>Siga-nos</p>
                        <div className='social-links'>
                            <ul>
                                <li><Link><FaFacebook /></Link></li>
                                <li><Link> <FaInstagram /></Link></li>
                                <li><Link> <FaLinkedin /></Link></li>
                                <li><FaEnvelope /> tecnosaber@gmail.com</li>
                                <li><FaPhoneAlt />(55)55555-5555</li>
                                <li>Instuto de Tecnologia e Saber &copy; 2022</li>
                            </ul>
                        </div>
                    </div>
                        </div>
                            </div>
                            
        </div>

    )
}

export default Home;