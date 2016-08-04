import React from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Footer.css';

export function Footer() {
  return (
    <div className={styles.footer}>
      <p>All human rights reserved</p>
      <p><FormattedMessage id="twitterMessage" /> : <a href="https://twitter.com/@fc_vova" target="_Blank">@fc_vova</a></p>
    </div>
  );
}

export default Footer;
