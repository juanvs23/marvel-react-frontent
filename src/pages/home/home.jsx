import { useEffect, useState } from 'react';

import './home.scss';
import CardComponent from '../../components/card/cardComponent';
import Layout from '../../components/layout/layout';
import Spinner from '../../components/spinner/spinner';
import Average from '../../components/average/average';

import getApi from '../../utils/getApi';

export default function HomePage() {
	const [useTitle, setUseTitle] = useState('Home');

	const [response, setResponse] = useState(undefined);
	useEffect(() => {
		setUseTitle('Student list');
		getApi().then((res) => {
			setResponse(res.data);
		});
	}, []);
	return (
		<Layout title={useTitle}>
			{response == undefined ? (
				<Spinner />
			) : (
				<>
					<Average students={response} />
					<div className='students'>
						{response.map((student, i) => {
							if (student.active === true) {
								return (
									<CardComponent
										key={i}
										title={student.Name}
										grade={student.grades}
										color={student.Color}
										id={student.ID}
									/>
								);
							}
						})}
					</div>
				</>
			)}
		</Layout>
	);
}
