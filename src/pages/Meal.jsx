import React, { useRef } from 'react';
import '../css/meal.css';

const Meal = () => {
	const handleResizeHeight = (event) => {
		const textarea = event.target;
		textarea.style.height = 'auto';
		textarea.style.height = `${textarea.scrollHeight}px`;
	};
	return (
		<div className='mealbody'>
			<div className='topbutton'>
				<button>저장</button>
			</div>

			<div className='submealdiv'>
				<div className='sub2mealdiv'>
					<h1>아침</h1>
					<textarea onInput={handleResizeHeight} />
				</div>
				<div className='sub2mealdiv'>
					<h1>😄</h1>
					<textarea onInput={handleResizeHeight} />
				</div>
			</div>
			<div className='submealdiv'>
				<div className='sub2mealdiv'>
					<h1>점심</h1>
					<textarea onInput={handleResizeHeight} />
				</div>
				<div className='sub2mealdiv'>
					<h1>😄</h1>
					<textarea onInput={handleResizeHeight} />
				</div>
			</div>
			<div className='submealdiv'>
				<div className='sub2mealdiv'>
					<h1>저녁</h1>
					<textarea onInput={handleResizeHeight} />
				</div>
				<div className='sub2mealdiv'>
					<h1>😄</h1>
					<textarea onInput={handleResizeHeight} />
				</div>
			</div>
		</div>
	);
};

export default Meal;
