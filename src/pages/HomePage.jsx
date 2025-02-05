import React, { useState } from 'react';
import '../css/home.css';

const HomePage = () => {
	const [meal, useMeal] = useState();

	return (
		<>
			<div className='calenderdiv'>calender</div>
			<div className='maindiv'>
				<div className='subdiv' id='meal'>
					<h2>오늘의 식사</h2>
					<h3>아침</h3>
					<h3>점심</h3>
					<h3>저녁</h3>
				</div>
				<div className='subdiv' id='schedule'>
					<h2>오늘의 기록</h2>
				</div>
				<div className='subdiv' id='feeling'>
					<h2>오늘의 감정</h2>
				</div>
			</div>
		</>
	);
};

export default HomePage;
