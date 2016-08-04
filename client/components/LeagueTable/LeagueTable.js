/**
 * Created by paulius on 27/07/16.
 */
import React, { PropTypes } from 'react';

// Import Components
import LeagueTableHeader from './LeagueTableHeader/BigLeagueTableHeader';
import LeagueTableRow from './LeagueTableRow/LeagueTableRow';

// Import Style
import styles from './LeagueTable.css';

function LeagueTable(props) {
  return (
    <div className={styles.LeagueTable}>
      <table>
        <thead>
          <LeagueTableHeader />
        </thead>
        <tbody>
        {
          props.teams.map((team, i) =>
            <LeagueTableRow
              position={i + 1}
              team={team}
              key={team.teamId}
            />
          )
        }
        </tbody>
      </table>
    </div>
  );
}

LeagueTable.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.shape({
    leagueId: PropTypes.number.isRequired,
    teamId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    played: PropTypes.number.isRequired,
    win: PropTypes.number.isRequired,
    draw: PropTypes.number.isRequired,
    loss: PropTypes.number.isRequired,
    goals: PropTypes.number.isRequired,
    conceded: PropTypes.number.isRequired,
    difference: PropTypes.number.isRequired,
    points: PropTypes.number.isRequired,
    logo: PropTypes.string.isRequired,
  })).isRequired,
};

export default LeagueTable;
