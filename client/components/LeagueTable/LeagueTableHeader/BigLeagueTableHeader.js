/**
 * Created by paulius on 27/07/16.
 *//**
 * Created by paulius on 27/07/16.
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';

function BigLeagueTableHeader() {
  return (
    <tr>
      <th colSpan="3">
        <img src="/images/teamLogos/SFL_big.png" alt="SFL" />
        {/* <FormattedMessage id="team_name" /> */}
      </th>
      <th><FormattedMessage id="team_played" /></th>
      {/* <th><FormattedMessage id="team_win" /></th> */}
      {/* <th><FormattedMessage id="team_draw" /></th> */}
      {/* <th><FormattedMessage id="team_loss" /></th> */}
      {/* <th><FormattedMessage id="team_goals" /></th> */}
      {/* <th><FormattedMessage id="team_conceded" /></th> */}
      {/* <th><FormattedMessage id="team_difference" /></th> */}
      <th><FormattedMessage id="team_points" /></th>
      {/* <th><FormattedMessage id="team_form" /></th> */}
    </tr>
  );
}


export default BigLeagueTableHeader;
