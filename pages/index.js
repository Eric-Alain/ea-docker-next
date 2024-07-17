import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					<div className={styles.titleSpan}>Eric says:</div>
					Welcome to <a href='https://nextjs.org'>Next.js</a> on Docker!
				</h1>

				<div className={styles.grid}>
					<div className={styles.card}>
						<h3>Hello Juan!</h3>
						<hr/>
						<p>Pleased to meet you!</p>
					</div>
					<div className={styles.card}>
						<h3>Node.js app with RedHat seasoning</h3>
						<p>Deployed to Redhat Openshift sandbox.</p>
					</div>
					<div className={styles.card}>
						<h3>Was fun to figure out</h3>
						<p>Containers can be tricky, but very rewarding.</p>
					</div>
				</div>
			</main>
		</div>
	);
}
