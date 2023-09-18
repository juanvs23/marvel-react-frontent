import { useEffect, useState } from 'react';

import getApi from '@/utils/getApi';
import { Layout, Pagination, Spinner, Card } from '@/components';
import useAxios from '@/hooks/useAxios';
import { useDispatch } from 'react-redux';
import { setTitle } from '@/lib/redux';

export default function CharactersPage() {
	const title = 'Characters';
	const dispatch = useDispatch();
	const endpoint = title.toLowerCase();
	const [useTitle, setUseTitle] = useState();
	const [pagination, setPagination] = useState({
		limit: 20,
		offset: 0,
	});

	const { response, error, loading } = useAxios(
		`${endpoint}?&limit=${pagination.limit}&offset=${pagination.offset}`
	);
	//console.log('response', response, 'error', error, 'loading', loading);
	useEffect(() => {
		setUseTitle(`${title} | Marvel App`);
		dispatch(setTitle(title));
	});

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
										title: name,
										thumbnail: { path, extension },
										resourceURI,
										type: 'characters',
									}}
								/>
							);
						})}
					</div>
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
