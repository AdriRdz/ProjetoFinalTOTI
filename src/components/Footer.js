import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import "./styles.css";
import fundofooter from "../assets/fundofooter.jpg";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer' style={{ backgroundImage: `url(${fundofooter})` }}>
            <div className='container'>
                <div className='row'>
                    <div className='footer-col'>
                        <h4>Pet codigos</h4>
                        <ul>
                            <li><Link href=''>Desenvolvido por:</Link></li>
                            <li><Link href='/'>Adriana Rodriguez</Link></li>
                            <li><Link href='/'>Jose Lumbo</Link></li>
                            <li><Link href='/'>Nahomi Rebolledo</Link></li>
                        </ul>

                    </div>
                    <div className='footer-col'>
                        <h4>Obter ajuda</h4>
                        <ul>
                            <li><Link href='/'>Perguntas Frequentes</Link></li>
                            <li><Link href='/'>Transporte</Link></li>
                            <li><Link href='/'>Retorno</Link></li>
                            <li><Link href='/'>Status de Pedidos</Link></li>
                            <li><Link href='/'>Opção de pagamento</Link></li>
                        </ul>

                    </div>
                    <div className='footer-col'>
                        <h4>Produtos mais vendidos</h4>
                        <ul>
                            <li><Link href='/'>Ração</Link></li>
                            <li><Link href='/'>Cama</Link></li>
                            <li><Link href='/'>Leite</Link></li>
                            <li><Link href='/'>Outros</Link></li>
                        </ul>

                    </div>
                    <div className='footer-col'>
                        <p>Siga-nos</p>
                        <div className='social-links'>
                            <ul>
                                <li><Link><FaFacebook /></Link></li>
                                <li><Link> <FaInstagram /></Link></li>
                                <li><Link> <FaLinkedin /></Link></li>
                                <li><FaEnvelope /> petcodigos@gmail.com</li>
                                <li><FaPhoneAlt/>99999999999</li>
                                <li>Pet Codigos&copy; 2022</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;