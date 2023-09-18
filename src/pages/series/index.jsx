import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import getApi from '@/utils/getApi';
import { Layout, Pagination, Spinner, Card } from '@/components';

export default function SeriesPage() {
	const [useTitle, setUseTitle] = useState('Home');
	const [pagination, setPagination] = useState({
		offset: 0,
		limit: 20,
		total: null,
		count: null,
	});
	const { selectedOption, input } = useSelector((state) => state.select);
	console.log(input);
	const [response, setResponse] = useState(undefined);
	const fetchApi = async (endPoint, pagination = {}) => {
		const { offset, limit, total, count } = pagination;
		const slug =
			selectedOption.value !== undefined
				? `${endPoint}?&limit=${limit}&offset=${offset}`
				: `characters?&limit=${limit}&offset=${offset}`;
		console.log(endPoint);
		const { data } = await getApi(slug);

		setResponse(data.results);
		setPagination({
			offset: data.offset,
			limit: data.limit,
			total: data.total,
			count: data.count,
		});
	};
	useEffect(() => {
		setUseTitle(`${selectedOption.Label} | Marvel App`);
		fetchApi(selectedOption.value, pagination);
		console.log(selectedOption.Label);
	}, [selectedOption.Label]);

	return (
		<Layout title={useTitle}>
			{response == undefined ? (
				<Spinner />
			) : (
				<>
					{/* <Average students={response} /> */}
					<div className='students'>
						{response.map((hero, i) => {
							return <Card key={hero.id} hero={hero} />;
						})}
					</div>
					<Pagination
						pagination={pagination}
						fetchApi={fetchApi}
						setPagination={setPagination}
					/>
				</>
			)}
		</Layout>
	);
}
