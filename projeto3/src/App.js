import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeAdmin from './Paginas/HomeAdmin'
import ConsultarPoliticos from './Paginas/ConsultarPoliticos'
import RelacoesPoliticos from './Paginas/RelacoesPoliticos'


function App() {
  return (
	  <div>
		  <BrowserRouter>
			<Routes>
				<Route path="/HomeAdmin" element={<HomeAdmin />} />
			</Routes>
			<Routes>
				<Route path="/ConsultarPoliticos" element={<ConsultarPoliticos />} />
			</Routes>
			<Routes>
				  <Route path="/RelacoesPoliticos/:idpessoasingular" element={<RelacoesPoliticos />} />
			</Routes>
		  </BrowserRouter>
	  </div>
  );
}

export default App;
