import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Layout from '../../components/layout/layout';
import Spinner from '../../components/spinner/spinner';
import getGender from '../../utils/getGenter';
import getApi from '../../utils/getApi';

import './detail.scss';

export default function DetailPage() {
	const { id } = useParams();
	const [student, setStudent] = useState(undefined);
	const [title, setTitle] = useState('Detail');

	const navigate = useNavigate();

	const returnPage = () => {
		navigate('/', { replace: true });
	};
	useEffect(() => {
		getApi('/student', id).then((res) => {
			if (res.status === 200) {
				setStudent(res.data[0]);
				setTitle(res.data[0].Name);
			}
		});
	}, []);

	return (
		<Layout title={title}>
			{student === undefined ? (
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
			)}
		</Layout>
	);
}
