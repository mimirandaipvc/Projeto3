import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AdminHome from './Paginas/AdminHome'
import AdminRelacoesEmpresarios from './Paginas/AdminRelacoesEmpresarios'
import AdminRelacoesEmpresas from './Paginas/AdminRelacoesEmpresas'
import AdminRelacoesEventos from './Paginas/AdminRelacoesEventos'
import AdminConsultarPoliticos from './Paginas/AdminConsultarPoliticos'
import AdminRelacoesPoliticos from './Paginas/AdminRelacoesPoliticos'
import AdminConsultarUtilizadores from './Paginas/AdminConsultarUtilizadores'
import AdminCriarJornalista from './Paginas/AdminCriarJornalista'
import AdminCriarAdmin from './Paginas/AdminCriarAdmin'
import AdminEditarAdmin from './Paginas/AdminEditarAdmin'
import AdminEditarCidadaoRegistado from './Paginas/AdminEditarCidadaoRegistado'
import AdminEditarJornalista from './Paginas/AdminEditarJornalista'
import AdminConsultarEmpresarios from './Paginas/AdminConsultarEmpresarios'
import AdminCargosEmEmpresas from './Paginas/AdminCargosEmEmpresas'
import AdminConsultarEventos from './Paginas/AdminConsultarEventos'
import AdminConsultarEmpresas from './Paginas/AdminConsultarEmpresas'

import JornalistaHome from './Paginas/JornalistaHome'
import JornalistaRelacoesEmpresarios from './Paginas/JornalistaRelacoesEmpresarios'
import JornalistaRelacoesEmpresas from './Paginas/JornalistaRelacoesEmpresas'
import JornalistaRelacoesEventos from './Paginas/JornalistaRelacoesEventos'
import JornalistaConsultarPoliticos from './Paginas/JornalistaConsultarPoliticos'
import JornalistaRelacoesPoliticos from './Paginas/JornalistaRelacoesPoliticos'
import JornalistaConsultarEmpresarios from './Paginas/JornalistaConsultarEmpresarios'
import JornalistaCargosEmEmpresas from './Paginas/JornalistaCargosEmEmpresas'
import JornalistaConsultarEventos from './Paginas/JornalistaConsultarEventos'
import JornalistaConsultarEmpresas from './Paginas/JornalistaConsultarEmpresas'
import JornalistaCriarInfoPC from './Paginas/JornalistaCriarInfoPC'
import JornalistaCriarInfoPS from './Paginas/JornalistaCriarInfoPS'
import JornalistaCriarRelacaoPSC from './Paginas/JornalistaCriarRelacaoPSC'
import JornalistaCriarPolitico from './Paginas/JornalistaCriarPolitico'
import JornalistaCriarEmpresario from './Paginas/JornalistaCriarEmpresario'
import JornalistaCriarEmpresa from './Paginas/JornalistaCriarEmpresa'
import JornalistaCriarEvento from './Paginas/JornalistaCriarEvento'

import CRHome from './Paginas/CRHome'
import CRRelacoesEmpresarios from './Paginas/CRRelacoesEmpresarios'
import CRRelacoesEmpresas from './Paginas/CRRelacoesEmpresas'
import CRRelacoesEventos from './Paginas/CRRelacoesEventos'
import CRConsultarPoliticos from './Paginas/CRConsultarPoliticos'
import CRRelacoesPoliticos from './Paginas/CRRelacoesPoliticos'
import CRConsultarEmpresarios from './Paginas/CRConsultarEmpresarios'
import CRCargosEmEmpresas from './Paginas/CRCargosEmEmpresas'
import CRConsultarEventos from './Paginas/CRConsultarEventos'
import CRConsultarEmpresas from './Paginas/CRConsultarEmpresas'

import CHome from './Paginas/CHome'
import CRelacoesEmpresarios from './Paginas/CRelacoesEmpresarios'
import CRelacoesEmpresas from './Paginas/CRelacoesEmpresas'
import CRelacoesEventos from './Paginas/CRelacoesEventos'
import CConsultarPoliticos from './Paginas/CConsultarPoliticos'
import CRelacoesPoliticos from './Paginas/CRelacoesPoliticos'
import CConsultarEmpresarios from './Paginas/CConsultarEmpresarios'
import CCargosEmEmpresas from './Paginas/CCargosEmEmpresas'
import CConsultarEventos from './Paginas/CConsultarEventos'
import CConsultarEmpresas from './Paginas/CConsultarEmpresas'

import Login from './Paginas/Login'
import CriarCidadaoRegistado from './Paginas/CriarCidadaoRegistado'


function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/AdminHome" element={<AdminHome />} />
				</Routes>
				<Routes>
					<Route path="/AdminConsultarPoliticos" element={<AdminConsultarPoliticos />} />
				</Routes>
				<Routes>
					<Route path="/AdminRelacoesPoliticos/:idpessoasingular" element={<AdminRelacoesPoliticos />} />
				</Routes>
				<Routes>
					<Route path="/AdminRelacoesEmpresas/:idpessoacoletiva" element={<AdminRelacoesEmpresas />} />
				</Routes>
				<Routes>
					<Route path="/AdminRelacoesEventos/:idevento" element={<AdminRelacoesEventos />} />
				</Routes>
				<Routes>
					<Route path="/AdminConsultarUtilizadores" element={<AdminConsultarUtilizadores />} />
				</Routes>
				<Routes>
					<Route path="/AdminRelacoesEmpresarios/:idpessoasingular" element={<AdminRelacoesEmpresarios />} />
				</Routes>
				<Routes>
					<Route path="/AdminCriarJornalista" element={<AdminCriarJornalista />} />
				</Routes>
				<Routes>
					<Route path="/AdminCriarAdmin" element={<AdminCriarAdmin />} />
				</Routes>
				<Routes>
					<Route path="/AdminEditarAdmin/:idutilizador" element={<AdminEditarAdmin />} />
				</Routes>
				<Routes>
					<Route path="/AdminEditarCidadaoRegistado/:idutilizador" element={<AdminEditarCidadaoRegistado />} />
				</Routes>
				<Routes>
					<Route path="/AdminEditarJornalista/:idutilizador" element={<AdminEditarJornalista />} />
				</Routes>
				<Routes>
					<Route path="/AdminConsultarEventos" element={<AdminConsultarEventos />} />
				</Routes>
				<Routes>
					<Route path="/AdminConsultarEmpresarios" element={<AdminConsultarEmpresarios />} />
				</Routes>
				<Routes>
					<Route path="/AdminCargosEmEmpresas/:idpessoasingular" element={<AdminCargosEmEmpresas />} />
				</Routes>
				<Routes>
					<Route path="/AdminConsultarEmpresas" element={<AdminConsultarEmpresas />} />
				</Routes>

				<Routes>
					<Route path="/JornalistaHome" element={<JornalistaHome />} />
				</Routes>
				<Routes>
					<Route path="/JornalistaConsultarPoliticos" element={<JornalistaConsultarPoliticos />} />
				</Routes>
				<Routes>
					<Route path="/JornalistaRelacoesEmpresarios/:idpessoasingular" element={<JornalistaRelacoesEmpresarios />} />
				</Routes>
				<Routes>
					<Route path="/JornalistaRelacoesPoliticos/:idpessoasingular" element={<JornalistaRelacoesPoliticos />} />
				</Routes>
				<Routes>
					<Route path="/JornalistaRelacoesEmpresas/:idpessoacoletiva" element={<JornalistaRelacoesEmpresas />} />
				</Routes>
				<Routes>
					<Route path="/JornalistaRelacoesEventos/:idevento" element={<JornalistaRelacoesEventos />} />
				</Routes>
				<Routes>
					<Route path="/JornalistaConsultarEventos" element={<JornalistaConsultarEventos />} />
				</Routes>
				<Routes>
					<Route path="/JornalistaConsultarEmpresarios" element={<JornalistaConsultarEmpresarios />} />
				</Routes>
				<Routes>
					<Route path="/JornalistaCargosEmEmpresas/:idpessoasingular" element={<JornalistaCargosEmEmpresas />} />
				</Routes>
				<Routes>
					<Route path="/JornalistaConsultarEmpresas" element={<JornalistaConsultarEmpresas />} />
				</Routes>
				<Routes>
					<Route path="/JornalistaCriarInfoPC/:idpessoacoletiva" element={<JornalistaCriarInfoPC />} />
				</Routes>
				<Routes>
					<Route path="/JornalistaCriarInfoPS/:idpessoasingular" element={<JornalistaCriarInfoPS />} />
				</Routes>
				<Routes>
					<Route path="/JornalistaCriarRelacaoPSC/:idpessoasingular" element={<JornalistaCriarRelacaoPSC />} />
				</Routes>
				<Routes>
					<Route path="/JornalistaCriarPolitico" element={<JornalistaCriarPolitico />} />
				</Routes>
				<Routes>
					<Route path="/JornalistaCriarEmpresario" element={<JornalistaCriarEmpresario />} />
				</Routes>
				<Routes>
					<Route path="/JornalistaCriarEmpresa" element={<JornalistaCriarEmpresa />} />
				</Routes>
				<Routes>
					<Route path="/JornalistaCriarEvento" element={<JornalistaCriarEvento />} />
				</Routes>

				<Routes>
					<Route path="/CRHome" element={<CRHome />} />
				</Routes>
				<Routes>
					<Route path="/CRConsultarPoliticos" element={<CRConsultarPoliticos />} />
				</Routes>
				<Routes>
					<Route path="/CRRelacoesPoliticos/:idpessoasingular" element={<CRRelacoesPoliticos />} />
				</Routes>
				<Routes>
					<Route path="/CRRelacoesEmpresas/:idpessoacoletiva" element={<CRRelacoesEmpresas />} />
				</Routes>
				<Routes>
					<Route path="/CRRelacoesEventos/:idevento" element={<CRRelacoesEventos />} />
				</Routes>
				<Routes>
					<Route path="/CRRelacoesEmpresarios/:idpessoasingular" element={<CRRelacoesEmpresarios />} />
				</Routes>
				<Routes>
					<Route path="/CRConsultarEventos" element={<CRConsultarEventos />} />
				</Routes>
				<Routes>
					<Route path="/CRConsultarEmpresarios" element={<CRConsultarEmpresarios />} />
				</Routes>
				<Routes>
					<Route path="/CRCargosEmEmpresas/:idpessoasingular" element={<CRCargosEmEmpresas />} />
				</Routes>
				<Routes>
					<Route path="/CRConsultarEmpresas" element={<CRConsultarEmpresas />} />
				</Routes>

				<Routes>
					<Route path="/CHome" element={<CHome />} />
				</Routes>
				<Routes>
					<Route path="/CConsultarPoliticos" element={<CConsultarPoliticos />} />
				</Routes>
				<Routes>
					<Route path="/CRelacoesPoliticos/:idpessoasingular" element={<CRelacoesPoliticos />} />
				</Routes>
				<Routes>
					<Route path="/CRelacoesEmpresas/:idpessoacoletiva" element={<CRelacoesEmpresas />} />
				</Routes>
				<Routes>
					<Route path="/CRelacoesEventos/:idevento" element={<CRelacoesEventos />} />
				</Routes>
				<Routes>
					<Route path="/CRelacoesEmpresarios/:idpessoasingular" element={<CRelacoesEmpresarios />} />
				</Routes>
				<Routes>
					<Route path="/CConsultarEventos" element={<CConsultarEventos />} />
				</Routes>
				<Routes>
					<Route path="/CConsultarEmpresarios" element={<CConsultarEmpresarios />} />
				</Routes>
				<Routes>
					<Route path="/CCargosEmEmpresas/:idpessoasingular" element={<CCargosEmEmpresas />} />
				</Routes>
				<Routes>
					<Route path="/CConsultarEmpresas" element={<CConsultarEmpresas />} />
				</Routes>

				<Routes>
					<Route path="/Login" element={<Login />} />
				</Routes>
				<Routes>
					<Route path="/CriarCidadaoRegistado" element={<CriarCidadaoRegistado />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
