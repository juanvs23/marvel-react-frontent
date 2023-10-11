import React, { memo } from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from '@/hooks/usePagination';
import './pagination.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
	setTitle,
	setCount,
	setTotal,
	setOffset,
	setCurrentPage,
} from '@/lib/redux';

import './pagination.scss';

const Pagination = (props) => {
	const dispatch = useDispatch();
	const { count, limit, offset, total, currentPage } = useSelector(
		(state) => state.pagination
	);
	const pages = Math.ceil(total / limit);
	//	console.log(count, limit, offset, total, currentPage);

	/* 
	  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage
	
	*/
	const pagination = usePagination({
		totalCount: total,
		pageSize: limit,
		siblingCount: 1,
		currentPage,
	});
	//console.log(pagination);
	if (currentPage === 0 || pagination.length < 2) {
		return null;
	}
	const onNext = () => {
		onPageChange(currentPage + 1);
	};
	const onPrevious = () => {
		onPageChange(currentPage - 1);
	};
	let lastPage = pagination[pagination.length - 1];
	const onPageChange = (target) => {
		if (target > 0 && target <= lastPage) {
			dispatch(setCurrentPage(target));
			dispatch(setOffset((target - 1) * limit));
		}
	};
	return (
		<nav className='pagination'>
			<ul>
				<li>
					<button onClick={onPrevious}>
						<i className='bi bi-arrow-left'></i>
					</button>
				</li>
				{pagination.map((button, index) => {
					if (pagination.length === index + 1) {
						return (
							<li key={index}>
								<button
									onClick={() => onPageChange(index + 1)}
									className={`pagination-button last ${
										index + 1 === currentPage ? 'active' : ''
									}`}>
									{button}
								</button>
							</li>
						);
					} else if (button === DOTS) {
						return (
							<li key={index}>
								<button
									onClick={() => onPageChange(index + 1)}
									className={`pagination-button dots ${
										index + 1 === currentPage ? 'active' : ''
									}`}>
									{button}
								</button>
							</li>
						);
					} else {
						return (
							<li key={index}>
								<button
									onClick={() => onPageChange(index + 1)}
									className={`pagination-button ${
										index + 1 === currentPage ? 'active' : ''
									}`}>
									{button}
								</button>
							</li>
						);
					}
				})}
				<li>
					<button onClick={onNext}>
						<i className='bi bi-arrow-right'></i>
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;
