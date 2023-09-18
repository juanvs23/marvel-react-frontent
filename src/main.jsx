import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import './pages/pages.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App';

import { Provider } from 'react-redux';
import store from '@/lib/redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<BrowserRouter basename='/'>
			<App />
		</BrowserRouter>
	</Provider>
);
