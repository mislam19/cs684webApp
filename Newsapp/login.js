import React, { useState } from 'react';

import Link from 'next/link';
import Router from 'next/router';
import styles from '../styles/Auth.module.scss';

const Login = () => {
	const [data, setData] = useState({ email: '', password: '' });

	const loginHandler = async () => {
		fetch('http://localhost:8080/signin', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((e) => e.json())
			.then((e) => {
				console.log(e);
				if (typeof window !== 'undefined') {
					localStorage.setItem('newsAppCred', JSON.stringify(data));
				}
				Router.push('/');
			});
	};

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<span>Login</span>
				<input
					type='text'
					placeholder='email'
					onChange={(e) => setData({ ...data, email: e.target.value })}
				/>
				<input
					type='password'
					placeholder='password'
					onChange={(e) => setData({ ...data, password: e.target.value })}
				/>
				<button
					onClick={() => {
						loginHandler();
					}}>
					Submit
				</button>
				<Link href={'/signup'}>Sign Up</Link>
			</div>
		</div>
	);
};

export default Login;
