import Link from 'next/link';
import React from 'react';
import Router from 'next/router';
import styles from '../styles/Auth.module.scss';
import { useState } from 'react';
import validator from 'validator';

const Signup = () => {
	const [data, setData] = useState({
		userName: '',
		email: '',
		password: '',
	});
	const [cnfPassword, setCnfPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const validate = (value) => {
		if (
			validator.isStrongPassword(value, {
				minLength: 8,

				minLowercase: 1,
				minUppercase: 1,
				minNumbers: 1,
				minSymbols: 1,
			})
		) {
			setErrorMessage({ message: 'Is Strong Password', status: 1 });
			return true;
		} else {
			setErrorMessage({ message: 'Is Not Strong Password', status: 0 });
			return false;
		}
	};

	const signUpHandler = async () => {
		if (validate(data.password))
			fetch('http://localhost:8080/signup', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			})
				.then((e) => e.json())
				.then((e) => {
					Router.push('/');
				});
	};

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<span>Sign Up</span>
				<input
					type='text'
					placeholder='email'
					onChange={(e) => setData({ ...data, email: e.target.value })}
				/>
				<input
					type='text'
					placeholder='Username'
					onChange={(e) => setData({ ...data, userName: e.target.value })}
				/>
				<input
					type='password'
					placeholder='password'
					onChange={(e) => setData({ ...data, password: e.target.value })}
				/>
				{errorMessage.status == 0 && (
					<span className={errorMessage.status == 0 && styles.errorMsg}>
						{errorMessage.message}
					</span>
				)}
				<input
					type='password'
					placeholder='Confirm Password'
					className={`${
						cnfPassword !== data.password && styles.passwordDontMatch
					}`}
					onChange={(e) => setCnfPassword(e.target.value)}
				/>
				<button
					onClick={() => {
						signUpHandler();
					}}>
					Submit
				</button>
				<Link href={'/login'}>Login</Link>
			</div>
		</div>
	);
};

export default Signup;
