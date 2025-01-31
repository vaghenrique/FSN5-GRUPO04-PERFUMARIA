import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          <h4>Redes Sociais</h4>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
        </div>

        <div className="footer-address">
          <h4>Endereço</h4>
          <p>Rua dos Finados, 151 - Bairro Vila Velha</p>
          <p>Fortaleza, Ceará - 4002-8922</p>
          <h4>Telefone</h4>
          <p>(85) 1234-5678</p>
          <p>(85) 9876-5432</p>
        </div>

        <div className="footer-form">
          <h4>Contato</h4>
          <form>
            <input type="email" placeholder="Seu e-mail" required />
            <textarea placeholder="Mensagem" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
