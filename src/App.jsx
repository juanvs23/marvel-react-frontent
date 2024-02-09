import { Routes, Route } from 'react-router-dom';

import DetailPage from './pages/detail/detail';
import { Characters, Comics, Events, Series } from './pages';
import NotFound from './components/notFound';

function App() {
	return (
		<Routes>
			<Route path='/' exact element={<Characters />} />
			<Route path='/characters' exact element={<Characters />} />
			<Route path='/events' element={<Events />} />
			<Route path='/comics' element={<Comics />} />
			<Route path='/series' element={<Series />} />

			<Route path='/detail/:typeurl/:id' element={<DetailPage />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}

export default App;
