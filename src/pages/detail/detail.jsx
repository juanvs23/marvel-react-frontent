import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Layout from '../../components/layout/layout';
import Spinner from '../../components/spinner/spinner';
import useAxios from '@/hooks/useAxios';

import './detail.scss';

/**
 * Renders the DetailPage component.
 *
 * @return {JSX.Element} The DetailPage component.
 */
export default function DetailPage() {
	const { id } = useParams();
	const [student, setStudent] = useState(undefined);
	const [title, setTitle] = useState('Detail');

	const navigate = useNavigate();

	const returnPage = () => {
		navigate('/', { replace: true });
	};
	const { response, error, loading } = useAxios(`characters/${id}`);
	console.log(response);

	useEffect(() => {
		if (response) {
			if (response.status === 200 && response.code === 'Ok') {
				const {
					data: { results },
				} = response;
				console.log(results[0]);
				setTitle(`${results[0].name} | Marvel App`);
				//setStudent(response.data.results[0]);
			}
		}
	}, [response]);
	return (
		<Layout title={title}>
			{/* {student === undefined ? (
				<Spinner />
			) : (
				<motion.div
					initial={{ y: 100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					className='detail-container'
					style={{
						backgroundColor: student.Color != 'Black' ? student.Color : 'white',
						color: student.Color != 'Black' ? '#333' : student.Color,
					}}>
					<div className='datails'>
						<h3 style={{ textAlign: 'center' }}>
							<span
								style={{
									fontWeight: '400',
									display: 'block',
									fontSize: '0.8em',
								}}>
								Gender:
							</span>
							{getGender(student.grades)}
						</h3>
						<h3 style={{ textAlign: 'center' }}>
							<span
								style={{
									fontWeight: '400',
									display: 'block',
									fontSize: '0.8em',
								}}>
								Grades:
							</span>
							{student.grades}
						</h3>
						<h3 style={{ textAlign: 'center' }}>
							<span
								style={{
									fontWeight: '400',
									display: 'block',
									fontSize: '0.8em',
								}}>
								Strength:
							</span>
							{student.Strength}
						</h3>
						<h3 style={{ textAlign: 'center' }}>
							<span
								style={{
									fontWeight: '400',
									display: 'block',
									fontSize: '0.8em',
								}}>
								Class:
							</span>
							{student.Class}
						</h3>
						<Link to='/'> Return </Link>
					</div>
				</motion.div>
			)} */}
		</Layout>
	);
}
