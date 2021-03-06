import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import jwt_decode from 'jwt-decode';
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown, Row, Col } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'


function Login() {

	const params = useParams();
	const [data1, setData1] = useState([]);
	const [Username, setUsername] = useState([]);
	const [Password, setPassword] = useState([]);
	const navigate = useNavigate()



	function login() {
		if (Username.length == 0 || Password.length == 0) {
			alert("Introduza todos os dados")
		} else {
			return api.post('/api/v1/signin', {
				username: Username,
				password: Password
			})
				.then(response => {
					console.log(response.data);
					var token = response.data.token;
					var decoded = jwt_decode(token);
					document.cookie = "token=" + token + "; expires=Thu, 01 Jan 2022 00:00:00 UTC; path=/;";
					localStorage.setItem("token", token);
					localStorage.setItem("iud", response.data.uid);
					localStorage.setItem("idutilizador", response.data.id);
					console.log(localStorage.getItem("idutilizador"));
					if (decoded.idtipoutilizador === 1) {
						localStorage.setItem("idtipoutilizador", 1)
						alert("Bem-vindo Administrador!")
						navigate('/AdminHome')
					} else if (decoded.idtipoutilizador === 2) {
						localStorage.setItem("idtipoutilizador", 2)
						alert("Bem-vindo Jornalista!")
						navigate("/JornalistaHome");
					} else {
						localStorage.setItem("idtipoutilizador", 3)
						alert("Bem-vindo Cidadão Registado!")
						navigate("/CRHome");
					}
				}).catch(error => {
					alert("Dados Incorretos")
				})
		}

	}


	return (
		<div id="page-container">

			<Container fluid>

				<div id="content-wrap">

					<Row>
						<Col xs={12}>
							<div class="conteudoo">
								<h2>Login</h2>
								<br></br>
								<Form.Label>Username: </Form.Label>
								<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="username"
									placeholder="Introduza o username" onChange={e => setUsername(e.target.value)} />
								<br></br>
								<Form.Label>Password: </Form.Label>
								<input type="password" class="form-control" placeholder="Introduza a password" onChange={e => setPassword(e.target.value)} ></input>
								<button type="button" className="btn btn-info btn-block mt-4" onClick={login}>Login</button>
								<br></br>
								<br></br>
								<Button variant="dark" href={"http://localhost:3000/CriarCidadaoRegistado/"}>Registar-se</Button>
								<br></br>
								<br></br>
								<Button variant="dark" href={"http://localhost:3000/CHome/"}>Entrar como convidado</Button>
							</div>
						</Col>
					</Row>


				</div>

				<footer id="footer">
					<div class="container text-center">
						<small>© 2022 Copyright: Miguel Miranda e Pedro Castro | Engenharia Informática | ESTG-IPVC </small>
					</div>
				</footer>

			</Container >
		</div >
	);
}


export default Login;

