/**
 * Created by paulius on 11/08/16.
 */
import React from 'react';
import YT from 'react-youtube';

import styles from './Youtube.css';

export default function Youtube(props) {
  return (
    <div className={styles.Youtube}>
      <YT opts={props.options} videoId={props.videoId}/>
    </div>
  );
}
