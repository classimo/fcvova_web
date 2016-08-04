/**
 * Created by paulius on 29/07/16.
 */
import React, { PropTypes } from 'react';
import styles from './HottestNews.css';


function HottestNews(props) {
  return (
    <div className={styles.HottestNews}>
      <img src="/images/Kelione.jpg" alt={props.post.postTitle} />
      <div className={styles.cover}>
        <h4>{props.post.postTitle}</h4>
        <h5>{props.post.postSubtitle}</h5>
      </div>
    </div>
  );
}

HottestNews.propTypes = {
  post: PropTypes.shape({
    postId: PropTypes.string.isRequired,
    postPhoto: PropTypes.string.isRequired,
    postTitle: PropTypes.string.isRequired,
    postSubtitle: PropTypes.string.isRequired,
  }).isRequired,
};

export default HottestNews;
