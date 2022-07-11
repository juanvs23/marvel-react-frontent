import { Routes, Route } from 'react-router-dom';

import DetailPage from './pages/detail/detail';
import HomePage from './pages/home/home';

function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/student/:id' element={<DetailPage />} />
		</Routes>
	);
}

export default App;
