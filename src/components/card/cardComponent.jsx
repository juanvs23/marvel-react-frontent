import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './card.scss';
import utils from '@/utils';
import Atropos from 'atropos/react';
import TransitionLink from '../transitionLink/TransitionLink';

export default function CardComponent({ cardData }) {
	const [open, setOpen] = useState(false);
	const {
		id,
		title,
		thumbnail: { path, extension },
		resourceURI,
		type,
	} = cardData;

	return (
		<motion.article
			initial={{ y: 200, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 1 }}
			className='card'>
			<div className={`car-container ${type}`}>
				<TransitionLink className='' url={`/detail/${type}/${id}`}>
					<div className='card-content'>
						<div className='overlay'></div>
						<img
							src={`${utils.changehttpTohttps(path)}.${extension}`}
							alt={title}
							className='img-background'
						/>
						<div className='button-container'>
							<div className='button-content'>
								<h2>{title}</h2>
								<div className='button'>See More</div>
							</div>
						</div>
					</div>
				</TransitionLink>
			</div>
		</motion.article>
	);
}
