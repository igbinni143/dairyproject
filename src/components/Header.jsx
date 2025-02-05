import React, { useState } from 'react';

const Header = () => {
	return (
		<div>
			<header>
				<div>React Blog</div>
				{window.innerWidth <= 700 ? (
					<div className='subheader'>아이콘</div>
				) : (
					<div className='subheader'>
						<div>글쓰기</div>
						<div>게시글</div>
						<div>프로필</div>
					</div>
				)}
			</header>
		</div>
	);
};

export default Header;
