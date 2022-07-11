import { useState, useEffect } from 'react';
import gradeColor from '../../utils/gradeColor';
import './average.scss';
export default function Average({ students }) {
	const [average, setaverage] = useState(0);
	useEffect(() => {
		const avegareNumber = parseFloat(
			students
				.reduce((a, b) => {
					return a + b.grades;
				}, 0)
				.toFixed(2)
		);
		setaverage(avegareNumber / students.length);
	}, []);
	return (
		<div className='average-content'>
			<div className='average'>
				<b>Average:</b>
				<span style={{ color: gradeColor(average) }}>{average.toFixed(2)}</span>
			</div>
		</div>
	);
}
