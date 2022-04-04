import React from 'react';
import styles from './Loader.module.scss';

const LoaderComponent = () => {
  return (
    <div className={styles['lds-facebook']}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoaderComponent;
