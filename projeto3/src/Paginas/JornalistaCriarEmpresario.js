import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'



function JornalistaCriarEmpresario() {

	const params = useParams();
	const [data1, setData1] = useState([]);
	const [Nome, setNome] = useState([]);
	const [Sexo, setSexo] = useState([]);
	const [Nacionalidade, setNacionalidade] = useState([]);
	const [DataNascimento, setDataNascimento] = useState([]);
	const [Profissao, setProfissao] = useState([]);
	const [Partido, setPartido] = useState([]);
	const navigate = useNavigate()


	useEffect(() => {
		api.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem("token")
	}, []);

	function adicionaEmpresario() {
		if (Nome.length == 0 || Sexo.length == 0 || Nacionalidade.length == 0 || DataNascimento.length == 0 || Profissao.length == 0) {
			alert("Dados incorretos")
		} else {
			return api.post('/api/v1/Empresario', {
				nome: Nome,
				sexo: Sexo,
				nacionalidade: Nacionalidade,
				datanascimento: DataNascimento,
				profissao: Profissao,
				partido: Partido
			}).then(response => {
				console.log(response.data);
				alert("Empresário criado!")
				navigate("/JornalistaConsultarEmpresarios")
			}).catch(error => {
				console.log(error);
			})
		}
	}

	return (
		<div id="page-container">

			<Container fluid>

				<div id="content-wrap">

					<Navbar bg="dark" variant="dark" expand="lg">
						<Container>
							<Navbar.Brand href="#home">Rede Contactos Politicos</Navbar.Brand>
							<Navbar.Toggle aria-controls="basic-navbar-nav" />
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav className="me-auto">
									<Nav.Link href="/JornalistaHome">Home</Nav.Link>
									<Nav.Link href="/JornalistaConsultarPoliticos">Políticos</Nav.Link>
									<Nav.Link href="/JornalistaConsultarEventos">Eventos</Nav.Link>
									<Nav.Link href="/JornalistaConsultarEmpresarios">Empresários</Nav.Link>
									<Nav.Link href="/JornalistaConsultarEmpresas">Empresas</Nav.Link>
									<Nav.Link href="/JornalistaConsultarVotos">Histórico de Votos</Nav.Link>
									<Nav.Link href="/JornalistaAPessoal">Área Pessoal</Nav.Link>
								</Nav>
							</Navbar.Collapse>
						</Container>
					</Navbar>

					<br /><br />
					<div class="conteudoo">
						<h2>Criar Empresário</h2>
						<br></br>
						<Form.Label>Nome: </Form.Label>
						<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="nome"
							placeholder="Introduza o nome" onChange={e => setNome(e.target.value)} />
						<br></br>
						<Form.Label>Sexo: </Form.Label>
						<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="password"
							placeholder="Introduza o sexo" onChange={e => setSexo(e.target.value)} />
						<br></br>
						<Form.Label>Nacionalidade: </Form.Label>
						<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="nome"
							placeholder="Introduza a nacionalidade" onChange={e => setNacionalidade(e.target.value)} />
						<br></br>
						<Form.Label>Data de Nascimento: </Form.Label>
						<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="password"
							placeholder="Introduza a data de nascimento" onChange={e => setDataNascimento(e.target.value)} />
						<br></br>
						<Form.Label>Profissao: </Form.Label>
						<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="nome"
							placeholder="Introduza a profissão" onChange={e => setProfissao(e.target.value)} />
						<br></br>
						<Form.Label>Preferência Política: </Form.Label>
						<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="nome"
							placeholder="Introduza a preferência política" onChange={e => setPartido(e.target.value)} />
						<br></br>
						<button type="button" className="btn btn-info btn-block mt-4" onClick={adicionaEmpresario}>Criar Empresário</button>
					</div>
				</div>

				<footer id="footer">
					<div class="container text-center">
						<small>© 2022 Copyright: Miguel Miranda e Pedro Castro | Engenharia Informática | ESTG-IPVC </small>
					</div>
				</footer>
			</Container>
		</div>
	);
}

export default JornalistaCriarEmpresario;
