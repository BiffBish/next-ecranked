import styles from '../styles/components/Banner.module.scss';
const Banner: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.otherTitle}>{title}</h1>
      <h1 className={styles.otherTitle}>{title}</h1>
      <h1 className={styles.realTitle}>{title}</h1>
      <h1 className={styles.otherTitle}>{title}</h1>
      <h1 className={styles.otherTitle}>{title}</h1>
    </div>
  );
};
export default Banner;