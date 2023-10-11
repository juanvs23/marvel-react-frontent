import React from 'react';
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenMnu, setDarkTheme } from '@/lib/redux';
import { userInterfaceOptions } from '@/constants';
//<i class="bi bi-moon-fill"></i>

const SwitchComponent = () => {
	const dispath = useDispatch();
	const { isDark } = useSelector((state) => state.userInterface);
	const activeDark =
		isDark === userInterfaceOptions.isDarkTheme.light ? '' : ' dark-active';
	const handlerChange = () => {
		if (isDark === userInterfaceOptions.isDarkTheme.light) {
			dispath(setDarkTheme(userInterfaceOptions.isDarkTheme.dark));
		} else {
			dispath(setDarkTheme(userInterfaceOptions.isDarkTheme.light));
		}
	};
	const switchIcon =
		isDark == userInterfaceOptions.isDarkTheme.light ? (
			<i className='bi bi-sun-fill'></i>
		) : (
			<i className='bi bi-moon-fill'></i>
		);
	return (
		<div className={`switch${activeDark}`}>
			<input type='checkbox' id='toggle_checkbox' onChange={handlerChange} />

			<label htmlFor='toggle_checkbox'>
				<div id='star'>{switchIcon}</div>
				<div id='moon'></div>
			</label>
		</div>
	);
};

export default SwitchComponent;
