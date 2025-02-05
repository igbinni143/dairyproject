import React, { useState } from 'react';
import '../css/form.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
	const navigate = useNavigate();
	const [click, setClick] = useState();
	const onClickPage = (page) => {
		setClick(navigate('/' + page));
	};
	return (
		<>
			<div className='formdiv'>
				<h1>회원가입</h1>
				<div className='login' id='email'>
					이메일
					<input />
				</div>
				<div className='login' id='pw'>
					비밀번호
					<input />
					비밀번호 확인
					<input />
				</div>
				<div className='explain'>
					<div>계정이 있으신가요?</div>
					<a onClick={() => onClickPage('login')}>
						로그인하기
					</a>
				</div>
				<button className='FormButton'>회원가입</button>
			</div>
		</>
	);
};

export default SignUp;
