import { useSelector } from 'react-redux';

import HeaderLogo from './header.svg';
import './header.scss';

import { Panel } from './../panel/panelComponent';
import TransitionLink from '../transitionLink/TransitionLink';
import { Link } from 'react-router-dom';
export default function Header() {
	const { selectedOption, input } = useSelector((state) => state.select);
	const { title } = useSelector((state) => state.userInterface);
	return (
		<header>
			<div className='header-container container'>
				{window.location.pathname === '/' ? (
					<>
						<div className='header-logo'>
							<Link to='/' className=''>
								<img src={HeaderLogo} alt='logo' />
							</Link>
						</div>
						<div className='lateral-menu'>
							<div className='search'>
								<Link className='' to='/'>
									<h1 className=''>{title}</h1>
								</Link>
							</div>

							<Panel />
						</div>
					</>
				) : (
					<>
						<div className='header-logo'>
							<TransitionLink url='/' className=''>
								<img src={HeaderLogo} alt='logo' />
							</TransitionLink>
						</div>
						<div className='lateral-menu'>
							<div className='search'>
								<TransitionLink className='' url='/'>
									<h1 className=''>{title}</h1>
								</TransitionLink>
							</div>

							<Panel />
						</div>
					</>
				)}
			</div>
		</header>
	);
}
