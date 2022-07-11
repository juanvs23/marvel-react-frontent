import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './card.scss';
import gradeColor from '../../utils/gradeColor';

export default function CardComponent({ title, id, color, grade }) {
	const [open, setOpen] = useState(false);
	const showGrade = open ? (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.3 }}
			className='grade'
			style={{ color: gradeColor(grade.toFixed(2)) }}>
			{grade.toFixed(2)}
		</motion.div>
	) : null;
	return (
		<motion.article
			initial={{ y: 200, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 1 }}
			className='card'>
			<div className='car-container'>
				<h2 style={{ color: color !== 'Color' ? color : '#333' }}>{title}</h2>
				<div className='gradeContainer'>
					<button
						onClick={() => setOpen((open) => !open)}
						className={`${open ? 'active' : ''}`}>
						Show grade
					</button>
					<AnimatePresence>{showGrade}</AnimatePresence>
				</div>
				<Link to={`/student/${id}`}>Leer más</Link>
			</div>
		</motion.article>
	);
}
