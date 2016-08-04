import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
// import { FormattedMessage } from 'react-intl';

import HeaderPhoto from '../HeaderPhoto/HeaderPhoto';
import Logo from '../Logo/Logo';


// Import Style
import styles from './Header.css';

export function Header(props) {
  const languageNodes = props.intl.enabledLanguages.map(
    lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
  );

  return (
    <div className={styles.header}>
      <div className={styles['language-switcher']}>
        <ul>
          <Logo />
          {/* <li><FormattedMessage id="switchLanguage" /></li> */}
          {languageNodes}
        </ul>
      </div>
      <HeaderPhoto />
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Header;
