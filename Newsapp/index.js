import { useEffect, useState } from 'react';

import styles from '../styles/Home.module.scss';

export default function Home() {
	const uri = 'http://localhost:8080/news';

	const [articles, setArticles] = useState(null);
	const [userAuth, setUserAuth] = useState(null);

	const getArticles = () => {
		fetch(uri)
			.then((res) => res.json())
			.then((data) => setArticles(data.data));
	};

	useEffect(() => {
		getArticles();
	}, []);

	return (
		<div className={styles.container}>
			<span onClick={() => getArticles()} className={styles.refreshButton}>
				Refresh
			</span>
			<div className={styles.articles}>
				{articles !== null &&
					articles.articles.map((item, index) => (
						<div className={styles.article} key={index}>
							<h3>{item.title}</h3>
							<span>{item.publishedAt}</span>
							<p>{item.description}</p>
						</div>
					))}
			</div>
		</div>
	);
}
