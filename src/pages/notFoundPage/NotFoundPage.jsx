import imageNotFound from '../../img/pageNotFound.png';
import styles from './NotFoundPage.module.css';

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <img src={imageNotFound} width="650" alt="ErrorImage" />
    </div>
  );
};
