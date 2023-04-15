import React from 'react';

import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😵</span>
        <br />
        Not Found yet
      </h1>
      <p className={styles.description}>
        К сожалению, данная страница отсутствует в интернет-магазине
      </p>
    </div>
  );
};

export default NotFoundBlock;
