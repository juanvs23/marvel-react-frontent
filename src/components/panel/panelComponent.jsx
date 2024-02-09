import React from 'react';
import './panel.scss';
import SwitchComponent from '../swithComponent/switchComponent';
import MenuSwitch from '../menuComponent/menuSwitch';

export const Panel = () => {
	return (
		<div className='panel'>
			<div className='show-desktop'>
				<SwitchComponent />
			</div>
			<MenuSwitch />
		</div>
	);
};
