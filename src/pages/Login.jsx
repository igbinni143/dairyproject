import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/form.css';

const Login = () => {
	const navigate = useNavigate();
	const [click, setClick] = useState();
	const onClickPage = (page) => {
		setClick(navigate('/' + page));
	};
	return (
		<div className='formdiv'>
			<h1>로그인</h1>
			<div className='login' id='email'>
				이메일
				<input />
			</div>
			<div className='login' id='pw'>
				비밀번호
				<input />
			</div>
			<div className='explain'>
				<div>계정이 없으신가요?</div>
				<a onClick={() => onClickPage('SignUp')}>
					회원가입하기
				</a>
			</div>
			<button className='FormButton'>로그인</button>
		</div>
	);
};

export default Login;
