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
import AdminCriarCidadaoRegistado from './Paginas/AdminCriarCidadaoRegistado'
import AdminEditarAdmin from './Paginas/AdminEditarAdmin'
import AdminEditarCidadaoRegistado from './Paginas/AdminEditarCidadaoRegistado'
import AdminEditarJornalista from './Paginas/AdminEditarJornalista'
import AdminConsultarEmpresarios from './Paginas/AdminConsultarEmpresarios'
import AdminCargosEmEmpresas from './Paginas/AdminCargosEmEmpresas'
import AdminConsultarEventos from './Paginas/AdminConsultarEventos'
import AdminConsultarEmpresas from './Paginas/AdminConsultarEmpresas'
import ConsultarPoliticos from './Paginas/ConsultarPoliticos'
import ConsultarPoliticosSoVoto from './Paginas/ConsultarPoliticosSoVoto'
import RelacoesPoliticos from './Paginas/RelacoesPoliticos'
import RelacoesPoliticosSoVoto from './Paginas/RelacoesPoliticosSoVoto'
import ConsultarEmpresarios from './Paginas/ConsultarEmpresarios'
import ConsultarEmpresas from './Paginas/ConsultarEmpresas'
import ConsultarEventos from './Paginas/ConsultarEventos'
import RelacoesEmpresas from './Paginas/RelacoesEmpresas'
import RelacoesEventos from './Paginas/RelacoesEventos'
import RelacoesEmpresasSoVoto from './Paginas/AdminRelacoesEmpresas'
import CargosEmEmpresas from './Paginas/CargosEmEmpresas'
import CriarRelacaoPSC from './Paginas/CriarRelacaoPSC'
import CriarInfoPC from './Paginas/CriarInfoPC'
import CriarInfoPS from './Paginas/CriarInfoPS'
import Login from './Paginas/Login'
import CriarPolitico from './Paginas/CriarPolitico'
import CriarEmpresario from './Paginas/CriarEmpresario'
import CriarEmpresa from './Paginas/CriarEmpresa'
import CriarEvento from './Paginas/CriarEvento'
import HomeJornalista from './Paginas/HomeJornalista'
import HomeCidadaoRegistado from './Paginas/HomeCidadaoRegistado'
import HomeCidadao from './Paginas/HomeCidadao'


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
					<Route path="/AdminRelacoesEmpresarios/:idpessoasingular" element={<AdminRelacoesEmpresarios />} />
				</Routes>
				<Routes>
					<Route path="/AdminRelacoesPoliticos/:idpessoasingular" element={<AdminRelacoesPoliticos />} />
				</Routes>
				<Routes>
					<Route path="/AdminRelacoesEmpresarios/:idpessoasingular" element={<AdminRelacoesEmpresarios />} />
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
					<Route path="/AdminCriarCidadaoRegistado" element={<AdminCriarCidadaoRegistado />} />
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
					<Route path="/HomeJornalista" element={<HomeJornalista />} />
				</Routes>
				<Routes>
					<Route path="/HomeCidadaoRegistado" element={<HomeCidadaoRegistado />} />
				</Routes>
				<Routes>
					<Route path="/HomeCidadao" element={<HomeCidadao />} />
				</Routes>
				<Routes>
					<Route path="/ConsultarPoliticos" element={<ConsultarPoliticos />} />
				</Routes>
				<Routes>
					<Route path="/ConsultarPoliticosSoVoto" element={<ConsultarPoliticosSoVoto />} />
				</Routes>
				<Routes>
					<Route path="/ConsultarEmpresarios" element={<ConsultarEmpresarios />} />
				</Routes>
				<Routes>
					<Route path="/ConsultarEmpresas" element={<ConsultarEmpresas />} />
				</Routes>
				<Routes>
					<Route path="/ConsultarEventos" element={<ConsultarEventos />} />
				</Routes>
				<Routes>
					<Route path="/RelacoesPoliticos/:idpessoasingular" element={<RelacoesPoliticos />} />
				</Routes>
				<Routes>
					<Route path="/RelacoesEmpresas/:idpessoacoletiva" element={<RelacoesEmpresas />} />
				</Routes>
				<Routes>
					<Route path="/RelacoesEventos/:idevento" element={<RelacoesEventos />} />
				</Routes>
				<Routes>
					<Route path="/RelacoesPoliticosSoVoto/:idpessoasingular" element={<RelacoesPoliticosSoVoto />} />
				</Routes>
				<Routes>
					<Route path="/RelacoesEmpresasSoVoto/:idpessoacoletiva" element={<RelacoesEmpresasSoVoto />} />
				</Routes>
				<Routes>
					<Route path="/CriarRelacaoPSC/:idpessoasingular" element={<CriarRelacaoPSC />} />
				</Routes>
				<Routes>
					<Route path="/CriarInfoPC/:idpessoacoletiva" element={<CriarInfoPC />} />
				</Routes>
				<Routes>
					<Route path="/CriarInfoPS/:idpessoasingular" element={<CriarInfoPS />} />
				</Routes>
				<Routes>
					<Route path="/Login" element={<Login />} />
				</Routes>
				<Routes>
					<Route path="/CriarPolitico" element={<CriarPolitico />} />
				</Routes>
				<Routes>
					<Route path="/CriarEmpresario" element={<CriarEmpresario />} />
				</Routes>
				<Routes>
					<Route path="/CriarEmpresa" element={<CriarEmpresa />} />
				</Routes>
				<Routes>
					<Route path="/CriarEvento" element={<CriarEvento />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
