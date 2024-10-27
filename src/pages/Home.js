import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import ImgHome from "../assets/logo_tela_inicial.jpg";
import ImgHeader from "../assets/logo_principal.jpg";

export const Home = () => {
  return (
    <div className="home-container">
      <Header>
        <div className="login-row header-left"></div>
        <div className="login-row header-center">
          <img className="img-header" src={ImgHeader} />
        </div>
        <div className="login-row header-right">
          <Link to={"cadastro"} className="text-link">
            Cadastre-se
          </Link>
          <Link to={"login"} className="text-link">
            Login
          </Link>
        </div>
      </Header>
      <div className="home-content">
        <img className="img-home" src={ImgHome} />
      </div>
      <Footer>
        <div className="login-row header-left"></div>
        <div className="login-row header-center"></div>
        <div className="login-row footer-right">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-youtube"></i>
        </div>
      </Footer>
    </div>
  );
};
