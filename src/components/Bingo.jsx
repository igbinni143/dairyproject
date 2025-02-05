import React, { useState } from 'react';
import '../css/bingo.css';

const Bingo = () => {
	const [bingo, useBingo] = useState();
	const ElementBox = () => {};
	return (
		<>
			<div className='bingolist'>
				<div className='bingo'>
					<div className='row1'>
						<div className='elementbox'></div>
						<div className='elementbox'></div>
						<div className='elementbox'></div>
					</div>
					<div className='row1'>
						<div className='elementbox'></div>
						<div className='elementbox'></div>
						<div className='elementbox'></div>
					</div>
					<div className='row1'>
						<div className='elementbox'></div>
						<div className='elementbox'></div>
						<div className='elementbox'></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Bingo;
