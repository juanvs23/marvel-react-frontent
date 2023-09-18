import { Routes, Route } from 'react-router-dom';

import DetailPage from './pages/detail/detail';
import { Characters, Comics, Events, Series, Stories } from './pages';

function App() {
	return (
		<Routes>
			<Route path='/' exact element={<Characters />} />

			<Route path='/events' element={<Events />} />
			<Route path='/stories' element={<Stories />} />
			<Route path='/comics' element={<Comics />} />
			<Route path='/series' element={<Series />} />

			<Route path='/detail/:id' element={<DetailPage />} />
		</Routes>
	);
}

export default App;
