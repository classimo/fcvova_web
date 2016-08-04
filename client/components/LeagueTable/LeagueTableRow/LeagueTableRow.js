/**
 * Created by paulius on 27/07/16.
 */
import React, { PropTypes } from 'react';
// import Img from 'react-image';

function LeagueTableRow(props) {
  let logo = '';
  if (props.team.logo) {
    let pathToImageSource = `../images/teamLogos/${props.team.logo}`;
    logo = <img src={pathToImageSource} alt="" />;
  }
  var vova = props.team.name === 'FC Vova' ? { fontWeight: 'bold', color: '#F44336' } : null;
  return (
    <tr>
      <td><span style={vova}>{props.position}</span></td>
      <td>{logo}</td>
      <td><span style={vova}>{props.team.name}</span></td>
      <td><span style={vova}>{props.team.played}</span></td>
      {/* <td><span>{props.team.win}</span></td> */}
      {/* <td><span>{props.team.draw}</span></td> */}
      {/* <td><span>{props.team.loss}</span></td> */}
      {/* <td><span>{props.team.goals}</span></td> */}
      {/* <td><span>{props.team.conceded}</span></td> */}
      {/* <td><span>{props.team.difference}</span></td> */}
      <td><span style={vova}>{props.team.points}</span></td>
      {/* <td><span>{props.team.points}</span></td> */}
    </tr>
  );
}

LeagueTableRow.propTypes = {
  position: PropTypes.number.isRequired,
  team: PropTypes.shape({
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
  }).isRequired,
};

export default LeagueTableRow;
