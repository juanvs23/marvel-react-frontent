import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout, Spinner, Card, Pagination } from '@/components';
import { setTitle, setCount, setTotal, setOffset } from '@/lib/redux';
import useAxios from '@/hooks/useAxios';

export default function PageComponent({ text }) {
	const dispatch = useDispatch();
	const endpoint = text.toLowerCase();
	const [useTitle, setUseTitle] = useState();

	const { count, limit, offset, total } = useSelector(
		(state) => state.pagination
	);
	const { response, error, loading } = useAxios(
		`${endpoint}?&limit=${limit}&offset=${offset}`
	);
	console.log('response', response, 'error', error, 'loading', loading);
	useEffect(() => {
		setUseTitle(`${text} | Marvel App`);
		dispatch(setTitle(text));
		console.log(response);
		if (response && response.status === 200) {
			const { data } = response;
			dispatch(setCount(data.count));
			dispatch(setTotal(data.total));
			dispatch(setOffset(data.offset));
		}
	}, [response]);

	return (
		<Layout title={useTitle}>
			{response == undefined ? (
				<Spinner />
			) : response.status === 200 && response.code === 'Ok' ? (
				<>
					<div className='students'>
						{response.data.results.map((hero, i) => {
							const {
								id,
								name,
								thumbnail: { extension, path },
								resourceURI,
							} = hero;
							return (
								<Card
									key={id}
									cardData={{
										id: id,
										title: text === 'Characters' ? name : hero.title,
										thumbnail: { path, extension },
										resourceURI,
										type: endpoint,
									}}
								/>
							);
						})}
					</div>
					<Pagination />
				</>
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
