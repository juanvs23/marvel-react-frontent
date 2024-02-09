import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap-icons/font/bootstrap-icons.css';
import '@/pages/pages.scss';
import 'atropos/css';
import './index.scss';

import App from './App';
import { Provider } from 'react-redux';
import store from '@/lib/redux/store';

const urlBaseName = () => {
	const url =
		import.meta.env.MODE === 'development'
			? import.meta.env.VITE_DEV_HOME_URL
			: import.meta.env.VITE_PROD_HOME_URL;
	return `${url}`;
};

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<BrowserRouter basename={urlBaseName()}>
			<App />
		</BrowserRouter>
	</Provider>
);
