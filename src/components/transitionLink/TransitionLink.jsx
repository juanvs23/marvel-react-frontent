import { flushSync } from 'react-dom';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setCount, setTotal, setOffset } from '@/lib/redux';

const TransitionLink = ({ className, url, children }) => {
	const dispatch = useDispatch();

	const navigate = useNavigate();
	if (!document.startViewTransition) {
		return (
			<Link className={className} to={url}>
				{children}
			</Link>
		);
	}
	return (
		<a
			href={url}
			className={className}
			onClick={(e) => {
				e.preventDefault();
				document.startViewTransition(() => {
					flushSync(() => {
						navigate(url);
					});
				});
			}}>
			{children}
		</a>
	);
};
export default TransitionLink;
