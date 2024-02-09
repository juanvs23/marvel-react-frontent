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
import { url } from './constants';



ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<BrowserRouter basename={url} >
			<App />
		</BrowserRouter>
	</Provider>
);
