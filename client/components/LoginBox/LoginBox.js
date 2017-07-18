/**
 * Created by paulius on 16/08/16.
 */
import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import TextField from 'material-ui/TextField'
import styles from './LoginBox.css';

function LoginBox(props) {
  return (
    <div className={styles.LoginBox}>
      {/*<FormattedMessage id="email" />*/}
      <TextField
        floatingLabelText="Email"
      />
      {/*<FormattedMessage id="password" />*/}
      <TextField
        floatingLabelText="Password"
        type="password"
      />
    </div>
  );
}
export default LoginBox;
