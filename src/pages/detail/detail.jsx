import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Layout from '../../components/layout/layout';
import Spinner from '../../components/spinner/spinner';
import useAxios from '@/hooks/useAxios';
import { setTitle } from '@/lib/redux';

import './detail.scss';
import TransitionLink from '../../components/transitionLink/TransitionLink';

/**
 * Renders the DetailPage component.
 *
 * @return {JSX.Element} The DetailPage component.
 */
export default function DetailPage() {
	const { id, typeurl } = useParams();
	const dispatch = useDispatch();
	const [hero, setHero] = useState(undefined);
	const [title, setUseTitle] = useState('Detail');

	const navigate = useNavigate();
	console.log(id, typeurl);
	const returnPage = () => {
		navigate('/', { replace: true });
	};
	const { response, error, loading } = useAxios(`${typeurl}/${id}`);
	console.log(response);
	useEffect(() => {});
	useEffect(() => {
		if (response) {
			if (response.status === 200 && response.code === 'Ok') {
				console.log(response);
				const {
					data: { results },
				} = response;
				setHero(results[0]);
				console.log(hero);
				const checktitle =
					typeurl == 'characters' ? results[0].name : results[0].title;
				setUseTitle(`${checktitle} | Marvel App`);
				dispatch(setTitle(checktitle));
			}
		}
	}, [response]);
	return (
		<Layout title={title}>
			{hero === undefined ? (
				<Spinner />
			) : response.status === 200 && response.code === 'Ok' ? (
				<motion.section
					initial={{ y: 100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					className='detail'>
					<article className='detail-container container'>
						<div className='container detail-content'>
							<div className='detail-image'>
								<img
									src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
									alt={hero.name}
								/>
							</div>
							<div className='detail-info'>
								{hero.description ? (
									<>
										<h2 className='detail-description'>Description</h2>
										<div className='info-content'>{hero.description}</div>
									</>
								) : (
									<h2
										className='detail-description'
										style={{ color: '#EC1D24' }}>
										Description not Available
									</h2>
								)}
								<div className='datails'>
									<TransitionLink url={`/${typeurl}`} className=''>
										{' '}
										<i className='bi bi-arrow-return-left'></i>{' '}
									</TransitionLink>
								</div>
							</div>
						</div>
					</article>
				</motion.section>
			) : (
				<>
					<div className='alert'>
						<h2 style={{ color: '#EC1D24' }}>{response.data.message}</h2>
					</div>
				</>
			)}
		</Layout>
	);
}
