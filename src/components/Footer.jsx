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
              <br />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Instagram
              <br />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Twitter
              <br />
            </a>
          </div>
        </div>

        <div className="footer-address">
          <h4>Endereço:</h4>
          <h4>Rua dos Finados, 151 - Bairro Vila Velha</h4>
          <p>Fortaleza, Ceara - 4002-8922</p>
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