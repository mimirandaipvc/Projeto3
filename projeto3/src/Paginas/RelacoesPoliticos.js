import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'


import './HomeAdmin.css'

function RelacoesPoliticos() {

	const params = useParams();
	const [data1, setData1] = useState([]);
	const [data2, setData2] = useState([]);
	const [data3, setData3] = useState([]);

	function obterPolitico() {
		return api.get('/api/v1/Politico/' + params.idpessoasingular)
			.then(function (response) {
				setData2(response.data);
				console.log(response.data);
			});
	}

	function obterEvento() {
		for (const i = 0; i < data1.length; i++) {
			return api.get('/api/v1/Evento/' + data1[i].idevento)
				.then(function (response) {
					setData3(response.data);
					console.log(response.data);
				});
		}
	}

	function obterDados(){
		return api.get('/api/v1/RelacaoPSP/' + params.idpessoasingular)
			.then(function (response) {
				setData1(response.data);
				console.log(response.data);
			});
	}

	function mais(i) {
		api.post('/api/v1/VotoRPS',{
			idrelacaops: i,
			idutilizador: 1,
		});
		api.put('/api/v1/AumentarCredibilidadeRPS', {
			idrelacaops: i,
		});
		console.log('mais');
		// window.location.reload();

	}

	function menos(i) {
		api.post('/api/v1/VotoRPS', {
			idrelacaops: i,
			idutilizador: 1,
		});
		api.put('/api/v1/DiminuirCredibilidadeRPS', {
			idrelacaops: i,
		});
		console.log('menos');
		// window.location.reload();

	}

	useEffect(() => {
		obterDados();
		obterPolitico();
		obterEvento();
	}, [data1]);

	return (
			<div>
				<Container fluid>

				<Navbar bg="light" expand="lg">
					<Container>
						<Navbar.Brand href="#home">Rede Contactos Politicos</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link href="#home">Home</Nav.Link>
								<Nav.Link href="#areapessoal">Área Pessoal</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>

					<br />
					<h1>RELAÇÕES</h1>

					{data1.map(item => (
						<Card style={{ width: '23rem' }} key={item.idrelacaops}>
							<Card.Body>
								<Card.Title>Relação número <b>{item.idrelacaops}</b> </Card.Title>
								<Card.Text>
									{data2.map(item => (
									<p>Politico:{item.nome}</p>
									))}
									{data3.map(item => (
									<p>Evento: {item.designacao}</p>
									))}
									<p>Motivo: {item.motivo}</p>
									<p>Valores: {item.valores}€</p>
									<p>Data inserção: {item.data}</p>
									<p>Inserido por: {item.idutilizador}</p>
									<p><b>Credibilidade: {item.credibilidade}</b></p>
								</Card.Text>
								<Button variant="success" onClick={() => mais(item.idrelacaops)}>Credível</Button>
								<Button id="dois" variant="danger" onClick={() => menos(item.idrelacaops)}>Não Credível</Button>
							</Card.Body>
						</Card>
					))}
				</Container>
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
