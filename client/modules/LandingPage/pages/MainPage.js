/**
 * Created by paulius on 27/07/16.
 */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';


// Import Components
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Title from '../../../components/Title/Title';
import LeagueTable from '../../../components/LeagueTable/LeagueTable';
import HottestNews from '../../../components/HottestNews/HottestNews';
import NextGame from '../../../components/NextGame/NextGame';
import PostsList from '../../../components/Post/components/PostList';

// Import Actions
import { fetchLeagueTeams, fetchTeamFixtures, fetchPosts } from '../Actions';

// Import Selectors
import { getLeagueTeams } from '../TeamsReducer';
import { getNextTeamFixture, getTeamFixtures } from '../FixturesReducer';
import { getPosts } from '../PostReducer';

class MainPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchLeagueTeams(70));
    this.props.dispatch(fetchTeamFixtures(17));
    this.props.dispatch(fetchPosts());
  }

  render() {
    const mockPost = {
      postId: 'po-savaites-trukusios-keliones-vova',
      postPhoto: 'Kelione.jpg',
      postTitle: 'Po savaitės trukusios kelionės Vovos kailiai sugrįžta namo',
      postSubtitle: 'Liepos 22-24d. vyko futbolo čempionatas, kuriame laimėjom vienerias varžybas...',
    };
    console.log(mockPost);
    return (
      <Container>
        <Row>
          <Col md="8">
            <Title><FormattedMessage id="news_title" /></Title>
            <HottestNews post={mockPost} />
            <PostsList posts={this.props.posts} />
          </Col>
          <Col md="4">
            <Title><FormattedMessage id="nextGame" /></Title>
            <NextGame fixture={this.props.fixtures} />
            <Title><FormattedMessage id="table_title" /></Title>
            <LeagueTable teams={this.props.teams} />
          </Col>
        </Row>
      </Container>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
MainPage.need = [() => { return fetchLeagueTeams(70); }];
MainPage.need = [() => { return fetchTeamFixtures(17); }];
MainPage.need = [() => { return fetchPosts(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    teams: getLeagueTeams(state),
    fixtures: getTeamFixtures(state),
    posts: getPosts(state),
  };
}

MainPage.propTypes = {
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
    logo: PropTypes.string.isRequired
  })).isRequired,
  fixtures: PropTypes.shape({
    homeTeamId: PropTypes.number.isRequired,
    awayTeamId: PropTypes.number.isRequired,
    leagueId: PropTypes.number.isRequired,
    stadiumId: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    homeTeamName: PropTypes.string.isRequired,
    awayTeamName: PropTypes.string.isRequired,
    homeTeamLogo: PropTypes.string.isRequired,
    awayTeamLogo: PropTypes.string.isRequired,
  }).isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

MainPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(MainPage);
