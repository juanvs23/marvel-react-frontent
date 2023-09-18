import React, { useEffect, useState } from 'react';
import './index.scss';
import { motion } from 'framer-motion';

const PaginationComponents = ({ pagination, setPagination, fetchApi }) => {
	const totalPageCount = Math.ceil(pagination.total / pagination.limit);
	const [buttons, setbuttons] = useState([]);
	const showButtons = 7;
	const createButton = ({ offset, limit, total, count }) => {
		let button = [];
		console.log(total);
		console.log(Math.ceil(total / limit));
		for (let index = count; index < showButtons; index++) {
			button.push({ index });
		}
		return button;
	};
	useEffect(() => {
		console.log(createButton(pagination));
	}, [pagination.count]);

	return (
		<motion.nav>
			{' '}
			<nav className='Pagination'></nav>{' '}
		</motion.nav>
	);
};

export default PaginationComponents;
