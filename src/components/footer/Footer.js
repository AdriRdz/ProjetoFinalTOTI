import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import "./Footer.css"

const Footer = () => {
    return (

        <div className='container'>
            <div className='row'>
                <div className='footer-col'>
                    <h4>Instituto de Tecnologia e Saber</h4>
                    <ul>
                        <li><h5>Desenvolvido por:</h5></li>
                        <li><a href="https://github.com/AdriRdz" target="_blank" rel="noreferrer"> Adriana Rodriguez</a></li>
                        <li><a href="https://github.com/joseLumbo" target="_blank" rel="noreferrer"> Jose Lumbo</a></li>
                        <li><a href="https://github.com/NelsonVillarreal" target="_blank" rel="noreferrer"> Nelson Villarreal</a></li>
                        <li><a href="https://github.com/walidzizo3030" target="_blank" rel="noreferrer"> Walid Abdelaziz</a></li>
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
                    <p>Siga-nos</p>
                    <div className='social-links'>
                        <ul>
                            <div className="logos">
                                <li><Link><FaFacebook /></Link></li>
                                <li><Link> <FaInstagram /></Link></li>
                                <li><Link> <FaLinkedin /></Link></li>
                                <li><FaEnvelope /></li>
                                <li></li>
                            </div>
                            <p> tecnosaber@gmail.com</p>
                            <li><FaPhoneAlt />(55)55555-5555</li>
                            <li>Instituto de Tecnologia e Saber &copy; 2022</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;