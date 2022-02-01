import { Form, Button, Table, Carousel, Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import './AdminHome.css'
import imagem1 from "../Imagens/1.jpg";
import imagem2 from "../Imagens/2.jpg";
import imagem3 from "../Imagens/3.jpg";
import imagem4 from "../Imagens/4.jpg";
import imagem5 from "../Imagens/5.jpg";
import imagem6 from "../Imagens/6.jpg";



function HomeJornalista() {
	return (
		<div>
			<h1>Bem-vindo!</h1>

			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={imagem1}
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>Consultar Politicos</h3>
						<p>Visualizar políticos e respetivas relações</p>
						<Link class="text-info" style={{ textDecoration: 'none' }} to={`/ConsultarPoliticos/`}>Clique aqui</Link>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={imagem3}
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>Consultar Eventos</h3>
						<p>Visualizar Eventos e respetivas relações</p>
						<Link class="text-info" style={{ textDecoration: 'none' }} to={`/ConsultarEventos/`}>Clique aqui</Link>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={imagem2}
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>Consultar Empresários</h3>
						<p>Visualizar Empresários e respetivas relações</p>
						<Link class="text-info" style={{ textDecoration: 'none' }} to={`/ConsultarEmpresarios/`}>Clique aqui</Link>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={imagem4}
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>Consultar Empresas</h3>
						<p>Visualizar Empresas e respetivas relações</p>
						<Link class="text-info" style={{ textDecoration: 'none' }} to={`/ConsultarEmpresas/`}>Clique aqui</Link>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={imagem6}
						alt="Third slide"
					/>
					<Carousel.Caption>
						<h3>Minha área pessoal</h3>
						<p>Alterar dados pessoais.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>

		</div>


	);
}

export default HomeJornalista;
