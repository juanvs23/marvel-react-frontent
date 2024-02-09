import React from 'react';
import { Layout } from '@/components';
import { useEffect } from 'react';
import { setTitle } from '@/lib/redux';
import { useDispatch } from 'react-redux';
import TransitionLink from '../transitionLink/TransitionLink';
import './index.scss';
import NotFoundImage from './not-found.svg';

function NotFound() {
	const dispath = useDispatch();
	useEffect(() => {
		dispath(setTitle('Not Found'));
	}, []);
	return (
		<Layout title='Not Found'>
			<section className='notFound'>
				<div className='columns'>
					<img
						src={NotFoundImage}
						alt='Sorry not found'
						className='not-found-img'
					/>{' '}
				</div>
				<div className='columns'>
					<h2>Uppss... Page Not Found</h2> <p>Please go back</p>{' '}
					<TransitionLink className={'back'} url={'/'}>
						Back
					</TransitionLink>
				</div>
			</section>
		</Layout>
	);
}

export default NotFound;
