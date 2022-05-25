import styles from './hero.module.scss';

const Hero = () => {
	return (
		<div className={styles.hero}>
			<div className={styles.hero__wrapper}>
				<div className={styles.hero__content_main}>pratyakash saini</div>
				<div className={styles.hero__content_sub}>front-end developer</div>
			</div>
		</div>
	);
};

export default Hero;
