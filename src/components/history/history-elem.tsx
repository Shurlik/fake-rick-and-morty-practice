import * as React from 'react'
import styles from './history.module.css'

interface IHistoryItemProps {
  elem: string
}

const HistoryElem: React.FC<IHistoryItemProps> = ({elem}) => {
  return (
    <div className={styles.itemWrapper}>
      <p className={styles.text}>{elem}</p>
    </div>
  );
};

export default HistoryElem;
