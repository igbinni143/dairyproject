import React from 'react';
import Bingo from '../components/Bingo';
import '../css/bingo.css';

const BingoPage = () => {
	return (
		<div className='BingoPage'>
			<div className='Bingopagefirstrow'>
				<Bingo />
				<Bingo />
			</div>
			<div className='Bingopagefirstrow'>
				<Bingo />
				<Bingo />
			</div>
		</div>
	);
};

export default BingoPage;
