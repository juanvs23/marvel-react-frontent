import { useSelector } from 'react-redux';

import Logo from './header.svg';
import './header.scss';

import { Panel } from './../panel/panelComponent';
export default function Header() {
	const { selectedOption, input } = useSelector((state) => state.select);
	const { title } = useSelector((state) => state.userInterface);
	return (
		<header>
			<div className='header-container container'>
				<div className='header-logo'>
					<img src={Logo} alt='logo' />
				</div>
				<div className='lateral-menu'>
					<div className='search'>
						<h1 className=''> {title} </h1>
					</div>

					<Panel />
				</div>
			</div>
		</header>
	);
}
