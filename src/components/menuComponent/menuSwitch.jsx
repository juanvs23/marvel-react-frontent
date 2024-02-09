import { useDispatch, useSelector } from 'react-redux';

import './index.scss';
import { setOpenMnu, userInterfaSlicer } from '@/lib/redux';

export default function MenuSwitch() {
	const dispath = useDispatch();
	const { isOpen } = useSelector((state) => state.userInterface);
	const showButton = isOpen ? (
		<i className='bi bi-x-lg'></i>
	) : (
		<i className='bi bi-list'></i>
	);
	return (
		<div className='menucontainer'>
			<button className='show-button' onClick={() => dispath(setOpenMnu())}>
				{showButton}
			</button>
		</div>
	);
}
