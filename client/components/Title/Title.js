/**
 * Created by paulius on 29/07/16.
 */
import React, { PropTypes } from 'react';

import styles from './Title.css';

export default function Title(props) {
  return (
    <div className={styles.Title}>
      <h4>{props.children}</h4>
    </div>
  );
}
Title.propTypes = {
  children: PropTypes.object.isRequired,
};
