/**
 * Created by paulius on 03/08/16.
 */

import React, {PropTypes} from 'react';
import format from 'date-format';
import styles from './NextGame.css';
import { injectIntl, intlShape } from 'react-intl';

function NextGame(props) {

  var date = new Date(props.fixture.date);
  var dateString = format('yyyy MM dd', date);
  var timeString = format('hh:mm', date)
  var homeTeamLogo = `/images/teamLogos/${props.fixture.homeTeamLogo}`;
  var awayTeamLogo = `/images/teamLogos/${props.fixture.awayTeamLogo}`;
  var competitionString;
  switch (props.intl.locale){
    case 'en':
      competitionString = props.fixture.shortCompetitionNameEn;
      break;
    case 'lt':
      competitionString = props.fixture.shortCompetitionNameLt;
      break;
    default:
      competitionString = props.fixture.shortCompetitionNameLt;
      break;
  }

  return (
    <div className={styles.NextGame}>
      <div className={styles['game-info']}>
        <span className={styles.date}>{dateString} / {props.fixture.stadiumAddress}</span>
        <span className={styles.time}>{timeString}</span>
      </div>
      <div className={styles['team-logos']}>
        <div className={styles['home-team-logo-wrapper']}>
          <img className={styles['home-team-logo']} src={homeTeamLogo} alt={props.fixture.homeTeamName}/>
        </div>
        <div className={styles.vs}>-</div>
        <div className={styles['away-team-logo-wrapper']}>
          <img className={styles['away-team-logo']} src={awayTeamLogo} alt={props.fixture.awayTeamName}/>
        </div>
      </div>
      <span className={styles.league}>{competitionString}</span>
    </div>
  );
}

NextGame.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(NextGame);
