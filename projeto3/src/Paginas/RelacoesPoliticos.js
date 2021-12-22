import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


import './HomeAdmin.css'

function RelacoesPoliticos() {

	const params = useParams();
	const [data, setData] = useState([]);

	function obterDados(){
		return api.get('/api/v1/RelacaoPSP/' + params.idpessoasingular)
			.then(function (response) {
				setData(response.data);
				console.log(response.data);
			});
	}

	function mais() {
		api.post('/api/v1/VotoRPS',{
			idrelacaops: 2,
			idutilizador: 1,
		});
		api.put('/api/v1/AumentarCredibilidadeRPS', {
			idrelacaops: 2,
		});
		console.log('mais');
	}

	function menos() {
		api.post('/api/v1/VotoRPS', {
			idrelacaops: 2,
			idutilizador: 1,
		});
		api.put('/api/v1/DiminuirCredibilidadeRPS', {
			idrelacaops: 2,
		});
		console.log('menos');
	}

	useEffect(() => {
		obterDados();
	});

	return (
			<div>
				<Navbar bg="dark" variant="dark">
					<Container>
						<Navbar.Brand href="#home">Rede Contactos Politicos</Navbar.Brand>
						<Nav className="me-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#areapessoal">Área Pessoal</Nav.Link>
						</Nav>
					</Container>
				</Navbar>
				<br />
				<h1>RELACOES</h1>

				{data.map(item => (
					<Card style={{ width: '23rem' }} key={item.idrelacaops}>
						<Card.Body>
							<Card.Title>{item.idrelacaops} {item.idpessoasingular} e {item.idevento}</Card.Title>
							<Card.Text>
								Motivo: {item.motivo} <br></br>
								Valores: {item.valores}€ <br></br>
								Data inserção: {item.data} <br></br>
								Inserido por: {item.idutilizador} <br></br>
								<b>Credibilidade: {item.credibilidade}</b>
							</Card.Text>
							<Button onClick={mais} >Credível</Button>
							<Button onClick={menos}>Não Credível</Button>
						</Card.Body>
					</Card>
				))}


			</div>
		);

}

export default RelacoesPoliticos;

// class RelacoesPoliticos extends Component {

// 	state = {
// 		linguagens: []
// 	};

// 	async componentDidMount() {
// 		const response = await api.get('/api/v1/RelacaoPSP/2')
// 		this.setState({ linguagens: response.data });
// 	}

// 	mais(i) {
// 		api.post('/api/v1/VotoRPS',{
// 			idrelacaops: i,
// 			idutilizador: 1,
// 		});
// 		api.put('/api/v1/AumentarCredibilidadeRPS', {
// 			idrelacaops: i,
// 		});;
// 	}

// 	menos(i) {
// 		api.post('/api/v1/VotoRPS', {
// 			idrelacaops: i,
// 			idutilizador: 1,
// 		});
// 		api.put('/api/v1/DiminuirCredibilidadeRPS', {
// 			idrelacaops: i,
// 		});;
// 	}

// 	async componentDidUpdate() {
// 		const response = await api.get('/api/v1/RelacaoPSP/2')
// 		this.setState({ linguagens: response.data });
// 	}


// 	// componentDidMount() {
// 	// 	fetch('http://192.168.1.78:8080/api/v1/RelacaoPS/2')
// 	// 		.then(res => res.json())
// 	// 		.then(res => {
// 	// 			this.setState({
// 	// 				linguagens: res
// 	// 			});
// 	// 		});
// 	// }



// 	render() {
// 		return (
// 			<div>
// 				<Navbar bg="dark" variant="dark">
// 					<Container>
// 						<Navbar.Brand href="#home">Rede Contactos Politicos</Navbar.Brand>
// 						<Nav className="me-auto">
// 							<Nav.Link href="#home">Home</Nav.Link>
// 							<Nav.Link href="#areapessoal">Área Pessoal</Nav.Link>
// 						</Nav>
// 					</Container>
// 				</Navbar>
// 				<br />
// 				<h1>RELACOES</h1>

// 				{this.state.linguagens.map(item => (
// 					<Card style={{ width: '23rem' }} key={item.idrelacaops}>
// 						<Card.Body>
// 							<Card.Title>{item.idrelacaops} {item.idpessoasingular} e {item.idevento}</Card.Title>
// 							<Card.Text>
// 								Motivo: {item.motivo} <br></br>
// 								Valores: {item.valores}€ <br></br>
// 								Data inserção: {item.data} <br></br>
// 								Inserido por: {item.idutilizador} <br></br>
// 								<b>Credibilidade: {item.credibilidade}</b>
// 							</Card.Text>
// 							<Button onClick={this.mais.bind(this, item.idrelacaops)} variant="success">Credível</Button>
// 							<Button onClick={this.menos.bind(this, item.idrelacaops)} variant="danger">Não Credível</Button>
// 						</Card.Body>
// 					</Card>
// 				))}


// 			</div>
// 		);
// 	}
// }

// export default RelacoesPoliticos;
