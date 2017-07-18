import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { injectIntl, intlShape } from 'react-intl';

// Import Style
import styles from './PostListItem.css';

function PostListItem(props) {
  return (
    <div className={styles['PostListItem']}>
      <h4 className={styles['post-title']}>
        <Link to={`/posts/${props.post.slug}-${props.post.cuid}`} >
          {props.post.title}
        </Link>
      </h4>

      <h5 className={styles['post-desc']}>{props.post.subTitle}</h5>
      {/*<p className={styles['post-action']}><a href="#" onClick={props.onDelete}>{props.intl.messages.deletePost}</a></p>*/}

      <h6 className={styles['read-more']}>
        <Link to={`/posts/${props.post.slug}-${props.post.cuid}`} >
          {props.intl.messages.readMore}
        </Link>
      </h6>
      <hr className={styles.divider} />
    </div>
  );
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  // onDelete: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(PostListItem);
