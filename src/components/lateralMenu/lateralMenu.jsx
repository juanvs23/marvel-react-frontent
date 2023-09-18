import { useDispatch, useSelector } from 'react-redux';
import { endpointsOptions } from '@/constants';
import SwitchComponent from '../swithComponent/switchComponent';
import './lateralMenu.scss';
import { setSelection } from '@/lib/redux';
import { NavLink, useLocation } from 'react-router-dom';

function LateralMenu() {
	return (
		<aside className='sidebar-menu'>
			<div className='sidebar-container'>
				<div className='show-mobile'>
					<SwitchComponent />
				</div>
				<nav className='sidebar-nav'>
					<ul>
						<li className='sidebar-item'>
							<NavLink to='/'>Characters</NavLink>
						</li>
						<li className='sidebar-item'>
							<NavLink to='/comics'>Comics</NavLink>
						</li>
						<li className='sidebar-item'>
							<NavLink to='/series'>Series</NavLink>
						</li>
						<li className='sidebar-item'>
							<NavLink to='/events'>Events</NavLink>
						</li>
						<li className='sidebar-item'>
							<NavLink to='/stories'>Stories</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</aside>
	);
}

export default LateralMenu;
