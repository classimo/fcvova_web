/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".server.bundle.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.resolve();
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 83);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("react");

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("react-intl");

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("mongoose");

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("react-redux");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("react-router");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ADD_POSTS = exports.ADD_FIXTURES = exports.ADD_TEAMS = undefined;
exports.addTeams = addTeams;
exports.addFixtures = addFixtures;
exports.addPosts = addPosts;
exports.fetchTeamFixtures = fetchTeamFixtures;
exports.fetchPosts = fetchPosts;
exports.fetchPost = fetchPost;
exports.fetchLeagueTeams = fetchLeagueTeams;
exports.fetchAllTeams = fetchAllTeams;

var _apiCaller = __webpack_require__(35);

var _apiCaller2 = _interopRequireDefault(_apiCaller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ADD_TEAMS = exports.ADD_TEAMS = 'ADD_TEAMS'; /**
                                                  * Created by paulius on 27/07/16.
                                                  */

var ADD_FIXTURES = exports.ADD_FIXTURES = 'ADD_FIXTURES';
var ADD_POSTS = exports.ADD_POSTS = 'ADD_POSTS';

function addTeams(teams) {
  return {
    type: ADD_TEAMS,
    teams: teams
  };
}

function addFixtures(fixtures) {
  return {
    type: ADD_FIXTURES,
    fixtures: fixtures
  };
}

function addPosts(posts) {
  return {
    type: ADD_POSTS,
    posts: posts
  };
}

function fetchTeamFixtures(teamId) {
  return function (dispatch) {
    return (0, _apiCaller2.default)('fixtures/' + teamId).then(function (res) {
      return dispatch(addFixtures(res.fixtures));
    });
  };
}
function fetchPosts() {
  return function (dispatch) {
    return (0, _apiCaller2.default)('posts').then(function (res) {
      dispatch(addPosts(res.posts));
    });
  };
}

function fetchPost(cuid) {
  return function (dispatch) {
    return (0, _apiCaller2.default)('posts/' + cuid).then(function (res) {
      return dispatch(addPost(res.post));
    });
  };
}

function fetchLeagueTeams(leagueId) {
  return function (dispatch) {
    return (0, _apiCaller2.default)('teams/' + leagueId).then(function (res) {
      return dispatch(addTeams(res.teams));
    });
  };
}

function fetchAllTeams() {
  return function (dispatch) {
    return (0, _apiCaller2.default)('teams').then(function (res) {
      return dispatch(addTeams(res.teams));
    });
  };
}

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("react-helmet");

/***/ },
/* 8 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/mern-starter',
  port: process.env.PORT || 8888
};

exports.default = config;

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("webpack");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localizationData = exports.enabledLanguages = undefined;

var _reactIntl = __webpack_require__(1);

var _intl = __webpack_require__(65);

var _intl2 = _interopRequireDefault(_intl);

__webpack_require__(66);

var _en = __webpack_require__(76);

var _en2 = _interopRequireDefault(_en);

var _en3 = __webpack_require__(36);

var _en4 = _interopRequireDefault(_en3);

__webpack_require__(67);

var _lt = __webpack_require__(77);

var _lt2 = _interopRequireDefault(_lt);

var _lt3 = __webpack_require__(37);

var _lt4 = _interopRequireDefault(_lt3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// list of available languages
var enabledLanguages = exports.enabledLanguages = ['lt', 'en'];

// this object will have language-specific data added to it which will be placed in the state when that language is active
// if localization data get to big, stop importing in all languages and switch to using API requests to load upon switching languages
var localizationData = exports.localizationData = {};

// here you bring in 'intl' browser polyfill and language-specific polyfills
// (needed as safari doesn't have native intl: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
// as well as react-intl's language-specific data
// be sure to use static imports for language or else every language will be included in your build (adds ~800 kb)


// need Intl polyfill, Intl not supported in Safari

global.Intl = _intl2.default;

// use this to allow nested messages, taken from docs:
// https://github.com/yahoo/react-intl/wiki/Upgrade-Guide#flatten-messages-object
function flattenMessages() {
  var nestedMessages = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var prefix = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  return Object.keys(nestedMessages).reduce(function (messages, key) {
    var value = nestedMessages[key];
    var prefixedKey = prefix ? prefix + '.' + key : key;

    if (typeof value === 'string') {
      messages[prefixedKey] = value; // eslint-disable-line no-param-reassign
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
}

// bring in intl polyfill, react-intl, and app-specific language data

(0, _reactIntl.addLocaleData)(_en2.default);
localizationData.en = _en4.default;
localizationData.en.messages = flattenMessages(localizationData.en.messages);

(0, _reactIntl.addLocaleData)(_lt2.default);
localizationData.lt = _lt4.default;
localizationData.lt.messages = flattenMessages(localizationData.lt.messages);

/***/ },
/* 11 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleAddPost = toggleAddPost;
// Export Constants
var TOGGLE_ADD_POST = exports.TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';

// Export Actions
function toggleAddPost() {
  return {
    type: TOGGLE_ADD_POST
  };
}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SWITCH_LANGUAGE = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.switchLanguage = switchLanguage;

var _setup = __webpack_require__(10);

// Export Constants
var SWITCH_LANGUAGE = exports.SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';

function switchLanguage(newLang) {
  return _extends({
    type: SWITCH_LANGUAGE
  }, _setup.localizationData[newLang]);
}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNextTeamFixture = exports.getTeamFixtures = undefined;

var _Actions = __webpack_require__(6);

// Initial State
var initialState = { data: [] }; /**
                                  * Created by paulius on 03/08/16.
                                  */

var FixturesReducer = function FixturesReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _Actions.ADD_FIXTURES:
      return {
        data: action.fixtures
      };
    default:
      return state;
  }
};

//Get all team's fixtures
var getTeamFixtures = exports.getTeamFixtures = function getTeamFixtures(state) {
  return state.fixtures.data;
};

//Get next team's fixture
var getNextTeamFixture = exports.getNextTeamFixture = function getNextTeamFixture(state) {
  return state.fixtures.data[0];
};

// Export Fixtures Reducer
exports.default = FixturesReducer;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPost = exports.getPosts = undefined;

var _Actions = __webpack_require__(6);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Initial State
var initialState = { data: [] };

var PostReducer = function PostReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _Actions.ADD_POST:
      return {
        data: [action.post].concat(_toConsumableArray(state.data))
      };

    case _Actions.ADD_POSTS:
      return {
        data: action.posts
      };

    case _Actions.DELETE_POST:
      return {
        data: state.data.filter(function (post) {
          return post.cuid !== action.cuid;
        })
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
var getPosts = exports.getPosts = function getPosts(state) {
  return state.posts.data;
};

// Get post by cuid
var getPost = exports.getPost = function getPost(state, cuid) {
  return state.posts.data.filter(function (post) {
    return post.cuid === cuid;
  })[0];
};

// Export Reducer
exports.default = PostReducer;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLeagueTeams = undefined;

var _Actions = __webpack_require__(6);

// Initial State
var initialState = { data: [] }; /* Selectors */


var TeamsReducer = function TeamsReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _Actions.ADD_TEAMS:
      return {
        data: action.teams
      };
    default:
      return state;
  }
};

// Get league table by leagueId
var getLeagueTeams = exports.getLeagueTeams = function getLeagueTeams(state) {
  return state.teams.data;
};

// Get all teams
// export const getAllTeams = state => state.teams.data;

// Export Teams Reducer
exports.default = TeamsReducer;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _reactIntl = __webpack_require__(1);

var _container = __webpack_require__(71);

var _container2 = _interopRequireDefault(_container);

var _row = __webpack_require__(72);

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(70);

var _col2 = _interopRequireDefault(_col);

var _Title = __webpack_require__(45);

var _Title2 = _interopRequireDefault(_Title);

var _LeagueTable = __webpack_require__(39);

var _LeagueTable2 = _interopRequireDefault(_LeagueTable);

var _HottestNews = __webpack_require__(38);

var _HottestNews2 = _interopRequireDefault(_HottestNews);

var _NextGame = __webpack_require__(42);

var _NextGame2 = _interopRequireDefault(_NextGame);

var _PostList = __webpack_require__(43);

var _PostList2 = _interopRequireDefault(_PostList);

var _Actions = __webpack_require__(6);

var _TeamsReducer = __webpack_require__(15);

var _FixturesReducer = __webpack_require__(13);

var _PostReducer = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by paulius on 27/07/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


// Import Components


// Import Actions


// Import Selectors


var _ref = _jsx(_Title2.default, {}, void 0, _jsx(_reactIntl.FormattedMessage, {
  id: 'news_title'
}));

var _ref2 = _jsx(_Title2.default, {}, void 0, _jsx(_reactIntl.FormattedMessage, {
  id: 'nextGame'
}));

var _ref3 = _jsx(_Title2.default, {}, void 0, _jsx(_reactIntl.FormattedMessage, {
  id: 'table_title'
}));

var MainPage = function (_Component) {
  _inherits(MainPage, _Component);

  function MainPage() {
    _classCallCheck(this, MainPage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(MainPage).apply(this, arguments));
  }

  _createClass(MainPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.dispatch((0, _Actions.fetchLeagueTeams)(70));
      this.props.dispatch((0, _Actions.fetchTeamFixtures)(17));
      this.props.dispatch((0, _Actions.fetchPosts)());
    }
  }, {
    key: 'render',
    value: function render() {
      var mockPost = {
        postId: 'po-savaites-trukusios-keliones-vova',
        postPhoto: 'Kelione.jpg',
        postTitle: 'Po savaitės trukusios kelionės Vovos kailiai sugrįžta namo',
        postSubtitle: 'Liepos 22-24d. vyko futbolo čempionatas, kuriame laimėjom vienerias varžybas...'
      };
      console.log(mockPost);
      return _jsx(_container2.default, {}, void 0, _jsx(_row2.default, {}, void 0, _jsx(_col2.default, {
        md: '8'
      }, void 0, _ref, _jsx(_HottestNews2.default, {
        post: mockPost
      }), _jsx(_PostList2.default, {
        posts: this.props.posts
      })), _jsx(_col2.default, {
        md: '4'
      }, void 0, _ref2, _jsx(_NextGame2.default, {
        fixture: this.props.fixtures
      }), _ref3, _jsx(_LeagueTable2.default, {
        teams: this.props.teams
      }))));
    }
  }]);

  return MainPage;
}(_react.Component);

// Actions required to provide data for this component to render in sever side.


MainPage.need = [function () {
  return (0, _Actions.fetchLeagueTeams)(70);
}];
MainPage.need = [function () {
  return (0, _Actions.fetchTeamFixtures)(17);
}];
MainPage.need = [function () {
  return (0, _Actions.fetchPosts)();
}];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    teams: (0, _TeamsReducer.getLeagueTeams)(state),
    fixtures: (0, _FixturesReducer.getTeamFixtures)(state),
    posts: (0, _PostReducer.getPosts)(state)
  };
}

MainPage.contextTypes = {
  router: _react2.default.PropTypes.object
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(MainPage);

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(2);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema; /**
                                         * Created by paulius on 03/08/16.
                                         */


var stadiumSchema = new Schema({
  _id: { type: 'Number', required: true },
  name: { type: 'String', required: true },
  shortName: { type: 'String', required: true },
  addressLine: { type: 'String', required: true },
  city: { type: 'String', required: true }
});

stadiumSchema.set('collection', 'stadiums');

exports.default = _mongoose2.default.model('Stadium', stadiumSchema);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(2);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema; /**
                                         * Created by paulius on 27/07/16.
                                         */


var teamSchema = new Schema({
  leagueId: { type: 'Number', required: true },
  teamId: { type: 'Number', required: true },
  name: { type: 'String', required: true },
  played: { type: 'Number', required: true },
  win: { type: 'Number', required: true },
  draw: { type: 'Number', required: true },
  loss: { type: 'Number', required: true },
  goals: { type: 'Number', required: true },
  conceded: { type: 'Number', required: true },
  difference: { type: 'Number', required: true },
  points: { type: 'Number', required: true },
  logo: { type: 'String', required: true }
});

teamSchema.set('colection', 'teams');

exports.default = _mongoose2.default.model('Team', teamSchema);

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports = require("redux");

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntlWrapper = IntlWrapper;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__(1);

var _reactRedux = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IntlWrapper(props) {
  return _react2.default.createElement(
    _reactIntl.IntlProvider,
    props.intl,
    props.children
  );
}

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(IntlWrapper);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /* eslint-disable global-require */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(5);

var _App = __webpack_require__(46);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// require.ensure polyfill for node
if (false) {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  // require('./modules/Post/pages/PostListPage/PostListPage');
  // require('./modules/Post/pages/PostDetailPage/PostDetailPage');
  __webpack_require__(16);
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/

exports.default = _jsx(_reactRouter.Route, {
  path: '/',
  component: _App2.default
}, void 0, _jsx(_reactRouter.IndexRoute, {
  getComponent: function getComponent(nextState, cb) {
    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
      // cb(null, require('./modules/Post/pages/PostListPage/PostListPage').default);
      cb(null, __webpack_require__(16).default);
    }).bind(null, __webpack_require__));
  }
}), _jsx(_reactRouter.Route, {
  path: '/posts/:slug-:cuid',
  getComponent: function getComponent(nextState, cb) {
    __webpack_require__.e/* nsure */(0).catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
      cb(null, __webpack_require__(84).default);
    }).bind(null, __webpack_require__));
  }
}));

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureStore = configureStore;

var _redux = __webpack_require__(19);

var _reduxThunk = __webpack_require__(81);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _DevTools = __webpack_require__(48);

var _DevTools2 = _interopRequireDefault(_DevTools);

var _reducers = __webpack_require__(54);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Main store function
 */
function configureStore() {
  var initialState = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  // Middleware and store enhancers
  var enhancers = [(0, _redux.applyMiddleware)(_reduxThunk2.default)];

  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
    // Enable DevTools only when rendering on client and during development.
    enhancers.push(window.devToolsExtension ? window.devToolsExtension() : _DevTools2.default.instrument());
  }

  var store = (0, _redux.createStore)(_reducers2.default, initialState, _redux.compose.apply(undefined, enhancers));

  // For hot reloading reducers
  if (false) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', function () {
      var nextReducer = require('./reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(3);

var _fixture = __webpack_require__(55);

var FixtureController = _interopRequireWildcard(_fixture);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Created by paulius on 02/08/16.
 */
var router = new _express.Router();

// Get all teams
// router.route('/teams').get(PostController.getAllTeams);

// Get league teams
router.route('/fixtures/:teamId').get(FixtureController.getAllTeamsFixtures);

// router.route('/teams').get(TeamController.getAllTeams);

// Add a new Post
// router.route('/posts').post(PostController.addPost);

// Delete a post by cuid
// router.route('/posts/:cuid').delete(PostController.deletePost);

exports.default = router;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(3);

var _post = __webpack_require__(56);

var PostController = _interopRequireWildcard(_post);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = new _express.Router();

// Get all Posts
router.route('/posts').get(PostController.getPosts);

// Get one post by cuid
router.route('/posts/:cuid').get(PostController.getPost);

// Add a new Post
router.route('/posts').post(PostController.addPost);

// Delete a post by cuid
router.route('/posts/:cuid').delete(PostController.deletePost);

exports.default = router;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(3);

var _stadium = __webpack_require__(57);

var StadiumController = _interopRequireWildcard(_stadium);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Created by paulius on 03/08/16.
 */
var router = new _express.Router();

// Get stadium by id
router.route('/stadiums/:id').get(StadiumController.getStadiumById);

router.route('/stadiums').get(StadiumController.getAllStadiums);

exports.default = router;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(3);

var _team = __webpack_require__(58);

var TeamController = _interopRequireWildcard(_team);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Created by paulius on 27/07/16.
 */
var router = new _express.Router();

// Get league teams
router.route('/teams/:leagueId').get(TeamController.getLeagueTeams);

// Get all teams
router.route('/teams').get(TeamController.getAllTeams);

exports.default = router;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchComponentData = fetchComponentData;

var _promiseUtils = __webpack_require__(62);

function fetchComponentData(store, components, params) {
  var needs = components.reduce(function (prev, current) {
    return (current.need || []).concat((current.WrappedComponent && current.WrappedComponent.need !== current.need ? current.WrappedComponent.need : []) || []).concat(prev);
  }, []);

  return (0, _promiseUtils.sequence)(needs, function (need) {
    return store.dispatch(need(params, store.getState()));
  });
} /*
  Utility function to fetch required data for component to render in server side.
  This was inspired from https://github.com/caljrimmer/isomorphic-redux-app/blob/73e6e7d43ccd41e2eb557a70be79cebc494ee54b/src/common/api/fetchComponentDataBeforeRender.js
  */

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

var webpack = __webpack_require__(9);
var cssnext = __webpack_require__(73);
var postcssFocus = __webpack_require__(74);
var postcssReporter = __webpack_require__(75);

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: {
    app: ['webpack-hot-middleware/client', 'webpack/hot/only-dev-server', 'react-hot-loader/patch', './client/index.js'],
    vendor: ['react', 'react-dom']
  },

  output: {
    path: __dirname,
    filename: 'app.js',
    publicPath: 'http://0.0.0.0:8888/'
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modules: ['client', 'node_modules']
  },

  module: {
    loaders: [{
      test: /\.css$/,
      exclude: /node_modules/,
      loader: 'style-loader!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader'
    }, {
      test: /\.css$/,
      include: /node_modules/,
      loaders: ['style-loader', 'css-loader']
    }, {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }, {
      test: /\.jsx*$/,
      exclude: [/node_modules/, /.+\.config.js/],
      loader: 'babel'
    }, {
      test: /\.(jpe?g|gif|png|svg)$/i,
      loader: 'url-loader?limit=10000'
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }]
  },

  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
    filename: 'vendor.js'
  }), new webpack.DefinePlugin({
    'process.env': {
      CLIENT: JSON.stringify(true),
      'NODE_ENV': JSON.stringify('development')
    }
  })],

  postcss: function postcss() {
    return [postcssFocus(), cssnext({
      browsers: ['last 2 versions', 'IE > 10']
    }), postcssReporter({
      clearMessages: true
    })];
  }
};
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 29 */
/***/ function(module, exports) {

module.exports = require("body-parser");

/***/ },
/* 30 */
/***/ function(module, exports) {

module.exports = require("compression");

/***/ },
/* 31 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 32 */
/***/ function(module, exports) {

module.exports = require("react-dom/server");

/***/ },
/* 33 */
/***/ function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ },
/* 34 */
/***/ function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.API_URL = undefined;
exports.default = callApi;

var _isomorphicFetch = __webpack_require__(68);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _config = __webpack_require__(8);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_URL = exports.API_URL = typeof window === 'undefined' || process.env.NODE_ENV === 'test' ? process.env.BASE_URL || 'http://localhost:' + (process.env.PORT || _config2.default.port) + '/api' : '/api';

function callApi(endpoint) {
  var method = arguments.length <= 1 || arguments[1] === undefined ? 'get' : arguments[1];
  var body = arguments[2];

  return (0, _isomorphicFetch2.default)(API_URL + '/' + endpoint, {
    headers: { 'content-type': 'application/json' },
    method: method,
    body: JSON.stringify(body)
  }).then(function (response) {
    return response.json().then(function (json) {
      return { json: json, response: response };
    });
  }).then(function (_ref) {
    var json = _ref.json;
    var response = _ref.response;

    if (!response.ok) {
      return Promise.reject(json);
    }

    return json;
  }).then(function (response) {
    return response;
  }, function (error) {
    return error;
  });
}

/***/ },
/* 36 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  locale: 'en',
  messages: {
    siteTitle: 'FC Vova Vilnius',
    addPost: 'Add post',
    switchLanguage: 'Switch language',
    twitterMessage: 'We are on Twitter',
    by: 'By',
    deletePost: 'Delete Post',
    createNewPost: 'Create new post',
    authorName: 'Author\'s Name',
    postTitle: 'Post Title',
    postContent: 'Post Content',
    readMore: 'Read more...',
    submit: 'Submit',
    comment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t}',
    HTMLComment: 'user <b style=\'font-weight: bold\'>{name} </b> {value, plural,\n    \t  =0 {does not have <i style=\'font-style: italic\'>any</i> comments}\n    \t  =1 {has <i style=\'font-style: italic\'>#</i> comment}\n    \t  other {has <i style=\'font-style: italic\'>#</i> comments}\n    \t}',
    nestedDateComment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t} as of {date}',
    team_name: 'Team',
    team_played: 'G',
    team_win: 'W',
    team_draw: 'D',
    team_loss: 'L',
    team_goals: 'GS',
    team_conceded: 'GC',
    team_difference: 'GD',
    team_points: 'P',
    team_form: 'Form',
    table_title: 'League table',
    news_title: 'Hottest news',
    nextGame: 'Next game'
  }

};

/***/ },
/* 37 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  locale: 'lt',
  messages: {
    siteTitle: 'FC Vova Vilnius',
    addPost: 'Pridėti įrašą',
    switchLanguage: 'Pakeisti kalbą',
    twitterMessage: 'Mūsų Twitter paskyra',
    by: 'parašė',
    deletePost: 'Ištrinti įrašą',
    createNewPost: 'Sukurti naują įrašą',
    authorName: 'Autoriaus vardas',
    postTitle: 'Įrašo antraštė',
    postContent: 'Įrašo turinys',
    readMore: 'Skaityti daugiau...',
    submit: 'Įšsaugoti',
    comment: 'user {name} {value, plural,\n    \t  =0 {be komentarų}\n    \t  =1 {# komentaras}\n    \t  other {# komentarai}\n    \t}',
    HTMLComment: 'user <b style=\'font-weight: bold\'>{name} </b> {value, plural,\n    \t  =0 {<i style=\'font-style: italic\'>be</i> komentarų}\n    \t  =1 {<i style=\'font-style: italic\'>#</i> komentaras}\n    \t  other {<i style=\'font-style: italic\'>#</i> komentarai}\n    \t}',
    nestedDateComment: 'user {name} {value, plural,\n  \t\t  =0 {be komentarų}\n  \t\t  =1 {# komentaras}\n  \t\t  other {# komentarai}\n  \t\t} as of {date}',
    team_name: 'Komanda',
    team_played: 'R',
    team_win: 'P',
    team_draw: 'L',
    team_loss: 'Pr',
    team_goals: 'Įv',
    team_conceded: 'Pr',
    team_difference: 'Sk',
    team_points: 'T',
    team_form: 'Forma',
    table_title: 'Turnyrinė lentelė',
    news_title: 'Karščiausios naujienos',
    nextGame: 'Sekančios rungtynės'
  }
};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Created by paulius on 29/07/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _HottestNews = {
  "HottestNews": "HottestNews__HottestNews__3KIiB",
  "cover": "HottestNews__cover__10Iya"
};

var _HottestNews2 = _interopRequireDefault(_HottestNews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HottestNews(props) {
  return _jsx('div', {
    className: _HottestNews2.default.HottestNews
  }, void 0, _jsx('img', {
    src: '/images/Kelione.jpg',
    alt: props.post.postTitle
  }), _jsx('div', {
    className: _HottestNews2.default.cover
  }, void 0, _jsx('h4', {}, void 0, props.post.postTitle), _jsx('h5', {}, void 0, props.post.postSubtitle)));
}

exports.default = HottestNews;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Created by paulius on 27/07/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


// Import Components


// Import Style


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BigLeagueTableHeader = __webpack_require__(40);

var _BigLeagueTableHeader2 = _interopRequireDefault(_BigLeagueTableHeader);

var _LeagueTableRow = __webpack_require__(41);

var _LeagueTableRow2 = _interopRequireDefault(_LeagueTableRow);

var _LeagueTable = {
  "LeagueTable": "LeagueTable__LeagueTable__3KJs2"
};

var _LeagueTable2 = _interopRequireDefault(_LeagueTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx('thead', {}, void 0, _jsx(_BigLeagueTableHeader2.default, {}));

function LeagueTable(props) {
  return _jsx('div', {
    className: _LeagueTable2.default.LeagueTable
  }, void 0, _jsx('table', {}, void 0, _ref, _jsx('tbody', {}, void 0, props.teams.map(function (team, i) {
    return _jsx(_LeagueTableRow2.default, {
      position: i + 1,
      team: team
    }, team.teamId);
  }))));
}

exports.default = LeagueTable;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Created by paulius on 27/07/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */ /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * Created by paulius on 27/07/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx('img', {
  src: '/images/sfl.png',
  alt: 'SFL'
});

var _ref2 = _jsx('th', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
  id: 'team_played'
}));

var _ref3 = _jsx('th', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
  id: 'team_points'
}));

function BigLeagueTableHeader() {
  return _jsx('tr', {}, void 0, _jsx('th', {
    colSpan: '3'
  }, void 0, _ref), _ref2, _ref3);
}

exports.default = BigLeagueTableHeader;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Created by paulius on 27/07/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Img from 'react-image';

function LeagueTableRow(props) {
  var logo = '';
  if (props.team.logo) {
    var pathToImageSource = '../images/teamLogos/' + props.team.logo;
    logo = _jsx('img', {
      src: pathToImageSource,
      alt: ''
    });
  }
  var vova = props.team.name === 'FC Vova' ? { fontWeight: 'bold', color: '#F44336' } : null;
  return _jsx('tr', {}, void 0, _jsx('td', {}, void 0, _jsx('span', {
    style: vova
  }, void 0, props.position)), _jsx('td', {}, void 0, logo), _jsx('td', {}, void 0, _jsx('span', {
    style: vova
  }, void 0, props.team.name)), _jsx('td', {}, void 0, _jsx('span', {
    style: vova
  }, void 0, props.team.played)), _jsx('td', {}, void 0, _jsx('span', {
    style: vova
  }, void 0, props.team.points)));
}

exports.default = LeagueTableRow;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Created by paulius on 03/08/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dateFormat = __webpack_require__(64);

var _dateFormat2 = _interopRequireDefault(_dateFormat);

var _NextGame = {
  "NextGame": "NextGame__NextGame__mYmBZ",
  "time": "NextGame__time__1esEm",
  "team-logos": "NextGame__team-logos__1oqRi",
  "away-team-logo-wrapper": "NextGame__away-team-logo-wrapper__3J25l",
  "home-team-logo-wrapper": "NextGame__home-team-logo-wrapper__2VGDF",
  "away-team-logo": "NextGame__away-team-logo__1FWpr",
  "vs": "NextGame__vs__3OhFI"
};

var _NextGame2 = _interopRequireDefault(_NextGame);

var _reactIntl = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NextGame(props) {
  var date = new Date(props.fixture.date);
  var dateString = (0, _dateFormat2.default)('yyyy MM dd', date);
  var timeString = (0, _dateFormat2.default)('hh:mm', date);
  var homeTeamLogo = '/images/teamLogos/' + props.fixture.homeTeamLogo;
  var awayTeamLogo = '/images/teamLogos/' + props.fixture.awayTeamLogo;
  var competitionString;
  switch (props.intl.locale) {
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

  return _jsx('div', {
    className: _NextGame2.default.NextGame
  }, void 0, _jsx('div', {
    className: _NextGame2.default['game-info']
  }, void 0, _jsx('span', {
    className: _NextGame2.default.date
  }, void 0, dateString, ' / ', props.fixture.stadiumAddress), _jsx('span', {
    className: _NextGame2.default.time
  }, void 0, timeString)), _jsx('div', {
    className: _NextGame2.default['team-logos']
  }, void 0, _jsx('div', {
    className: _NextGame2.default['home-team-logo-wrapper']
  }, void 0, _jsx('img', {
    className: _NextGame2.default['home-team-logo'],
    src: homeTeamLogo,
    alt: props.fixture.homeTeamName
  })), _jsx('div', {
    className: _NextGame2.default.vs
  }, void 0, '-'), _jsx('div', {
    className: _NextGame2.default['away-team-logo-wrapper']
  }, void 0, _jsx('img', {
    className: _NextGame2.default['away-team-logo'],
    src: awayTeamLogo,
    alt: props.fixture.awayTeamName
  }))), _jsx('span', {
    className: _NextGame2.default.league
  }, void 0, competitionString));
}

exports.default = (0, _reactIntl.injectIntl)(NextGame);

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

// Import Components


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PostListItem = __webpack_require__(44);

var _PostListItem2 = _interopRequireDefault(_PostListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PostList(props) {
  return _jsx('div', {
    className: 'listView'
  }, void 0, props.posts.map(function (post) {
    return _jsx(_PostListItem2.default, {
      post: post,
      onDelete: function onDelete() {
        return props.handleDeletePost(post.cuid);
      }
    }, post.cuid);
  }));
}

exports.default = PostList;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

// Import Style


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(5);

var _reactIntl = __webpack_require__(1);

var _PostListItem = {
  "single-post": "PostListItem__single-post__PSd3x",
  "post-title": "PostListItem__post-title__1XaUC",
  "author-name": "PostListItem__author-name__3Pm9I",
  "post-desc": "PostListItem__post-desc__24tVh",
  "post-action": "PostListItem__post-action__2yXhb",
  "divider": "PostListItem__divider__qpce_",
  "post-detail": "PostListItem__post-detail__3yY1H"
};

var _PostListItem2 = _interopRequireDefault(_PostListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PostListItem(props) {
  return _jsx('div', {
    className: _PostListItem2.default['single-post']
  }, void 0, _jsx('h4', {
    className: _PostListItem2.default['post-title']
  }, void 0, _jsx(_reactRouter.Link, {
    to: '/posts/' + props.post.slug + '-' + props.post.cuid
  }, void 0, props.post.title)), _jsx('h5', {
    className: _PostListItem2.default['post-desc']
  }, void 0, props.post.subTitle), _jsx('p', {
    className: _PostListItem2.default['author-name']
  }, void 0, ' ', props.intl.messages.readMore), _jsx('hr', {
    className: _PostListItem2.default.divider
  }));
}

exports.default = (0, _reactIntl.injectIntl)(PostListItem);

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Created by paulius on 29/07/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


exports.default = Title;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Title = {
  "Title": "Title__Title__1Ux5z"
};

var _Title2 = _interopRequireDefault(_Title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Title(props) {
  return _jsx('div', {
    className: _Title2.default.Title
  }, void 0, _jsx('h4', {}, void 0, props.children));
}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _App = {
  "container": "App__container__4uEyK"
};

var _App2 = _interopRequireDefault(_App);

var _reactHelmet = __webpack_require__(7);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _Header = __webpack_require__(50);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(49);

var _Footer2 = _interopRequireDefault(_Footer);

var _AppActions = __webpack_require__(11);

var _IntlActions = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Import Style


// Import Components

// import DevTools from './components/DevTools';


// Import Actions


var _ref = _jsx(_Footer2.default, {});

var App = exports.App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

    _this.toggleAddPostSection = function () {
      _this.props.dispatch((0, _AppActions.toggleAddPost)());
    };

    _this.state = { isMounted: false };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ isMounted: true }); // eslint-disable-line
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _jsx('div', {}, void 0, _jsx('div', {}, void 0, _jsx(_reactHelmet2.default, {
        title: 'FC Vova Vilnius',
        titleTemplate: '%s - Home Page',
        meta: [{ charset: 'utf-8' }, {
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=edge'
        }, {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }]
      }), _jsx(_Header2.default, {
        switchLanguage: function switchLanguage(lang) {
          return _this2.props.dispatch((0, _IntlActions.switchLanguage)(lang));
        },
        intl: this.props.intl,
        toggleAddPost: this.toggleAddPostSection
      }), _jsx('div', {
        className: _App2.default.container
      }, void 0, this.props.children), _ref));
    }
  }]);

  return App;
}(_react.Component);

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getShowAddPost = undefined;

var _AppActions = __webpack_require__(11);

// Initial State
var initialState = {
  showAddPost: false
}; // Import Actions


var AppReducer = function AppReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _AppActions.TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
var getShowAddPost = exports.getShowAddPost = function getShowAddPost(state) {
  return state.app.showAddPost;
};

// Export Reducer
exports.default = AppReducer;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxDevtools = __webpack_require__(78);

var _reduxDevtoolsLogMonitor = __webpack_require__(80);

var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

var _reduxDevtoolsDockMonitor = __webpack_require__(79);

var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reduxDevtools.createDevTools)(_jsx(_reduxDevtoolsDockMonitor2.default, {
  toggleVisibilityKey: 'ctrl-h',
  changePositionKey: 'ctrl-w'
}, void 0, _jsx(_reduxDevtoolsLogMonitor2.default, {})));

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

// Import Style


exports.Footer = Footer;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__(1);

var _Footer = {
  "footer": "Footer__footer__3vPEi"
};

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx('p', {}, void 0, 'All human rights reserved');

var _ref2 = _jsx('p', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
  id: 'twitterMessage'
}), ' : ', _jsx('a', {
  href: 'https://twitter.com/@fc_vova',
  target: '_Blank'
}, void 0, '@fc_vova'));

function Footer() {
  return _jsx('div', {
    className: _Footer2.default.footer
  }, void 0, _ref, _ref2);
}

exports.default = Footer;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
// import { Link } from 'react-router';
// import { FormattedMessage } from 'react-intl';

// Import Style


exports.Header = Header;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _HeaderPhoto = __webpack_require__(51);

var _HeaderPhoto2 = _interopRequireDefault(_HeaderPhoto);

var _Logo = __webpack_require__(52);

var _Logo2 = _interopRequireDefault(_Logo);

var _Header = {
  "header": "Header__header__2sEZY",
  "content": "Header__content__1eavA",
  "site-title": "Header__site-title__UfFn6",
  "add-post-button": "Header__add-post-button__CkTz6",
  "language-switcher": "Header__language-switcher__3bviQ",
  "selected": "Header__selected__3IRlm"
};

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx(_Logo2.default, {});

var _ref2 = _jsx(_HeaderPhoto2.default, {});

function Header(props) {
  var languageNodes = props.intl.enabledLanguages.map(function (lang) {
    return _jsx('li', {
      onClick: function onClick() {
        return props.switchLanguage(lang);
      },
      className: lang === props.intl.locale ? _Header2.default.selected : ''
    }, lang, lang);
  });

  return _jsx('div', {
    className: _Header2.default.header
  }, void 0, _jsx('div', {
    className: _Header2.default['language-switcher']
  }, void 0, _jsx('ul', {}, void 0, _ref, languageNodes)), _ref2);
}

Header.contextTypes = {
  router: _react2.default.PropTypes.object
};

exports.default = Header;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _fcvova_header_ = '/' + "b6a1020c8c7b7882d60a0e381e504ee0.jpg";

var _fcvova_header_2 = _interopRequireDefault(_fcvova_header_);

var _fcvova_header_3 = '/' + "bcc1a927a9b7cf4ee3556476f69aa52d.jpg";

var _fcvova_header_4 = _interopRequireDefault(_fcvova_header_3);

var _fcvova_header_5 = '/' + "0a6e88733b4209a57b4f6f3abfa55bcf.jpg";

var _fcvova_header_6 = _interopRequireDefault(_fcvova_header_5);

var _fcvova_header_7 = '/' + "e35c8f131c62f32aac5b5995de910250.jpg";

var _fcvova_header_8 = _interopRequireDefault(_fcvova_header_7);

var _fcvova_header_9 = '/' + "e4cdd730fdbda50b7a97b532ab0849fd.jpg";

var _fcvova_header_10 = _interopRequireDefault(_fcvova_header_9);

var _fcvova_header_11 = '/' + "03a00a04d2bed510c3b688c48c4fb295.jpg";

var _fcvova_header_12 = _interopRequireDefault(_fcvova_header_11);

var _fcvova_header_13 = '/' + "026ffb91eb345cbce30ee7386b7b17fc.jpg";

var _fcvova_header_14 = _interopRequireDefault(_fcvova_header_13);

var _fcvova_header_15 = '/' + "215585544963e163417d1f9b6f77ec6e.jpg";

var _fcvova_header_16 = _interopRequireDefault(_fcvova_header_15);

var _fcvova_header_17 = '/' + "fea4cdb68e8e3459a947fb491f93fe79.jpg";

var _fcvova_header_18 = _interopRequireDefault(_fcvova_header_17);

var _fcvova_header_19 = '/' + "4d2a32bce5939a9ba0c4d68ec0b1861b.jpg";

var _fcvova_header_20 = _interopRequireDefault(_fcvova_header_19);

var _fcvova_header_21 = '/' + "d09848265f45c753a67622be9f8c6f8c.jpg";

var _fcvova_header_22 = _interopRequireDefault(_fcvova_header_21);

var _fcvova_header_23 = '/' + "620f3f18cab09bbf3276ffb90431914c.jpg";

var _fcvova_header_24 = _interopRequireDefault(_fcvova_header_23);

var _fcvova_header_25 = '/' + "46c103d03d136500f63a35ff3c66a0a6.jpg";

var _fcvova_header_26 = _interopRequireDefault(_fcvova_header_25);

var _fcvova_header_27 = '/' + "63e0eee62b6cd1616677b31153cd52ee.jpg";

var _fcvova_header_28 = _interopRequireDefault(_fcvova_header_27);

var _fcvova_header_29 = '/' + "26ec335d17c34694c31b1a2237e60b01.jpg";

var _fcvova_header_30 = _interopRequireDefault(_fcvova_header_29);

var _fcvova_header_31 = '/' + "8d34c1d8b61a7f63e6eb1c1fe68cfe0a.jpg";

var _fcvova_header_32 = _interopRequireDefault(_fcvova_header_31);

var _fcvova_header_33 = '/' + "da23e8794ae37bbbbec82ee894164e2b.jpg";

var _fcvova_header_34 = _interopRequireDefault(_fcvova_header_33);

var _fcvova_header_35 = '/' + "fe6a7cf853b983976b193f47d0ba60dd.jpg";

var _fcvova_header_36 = _interopRequireDefault(_fcvova_header_35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HeaderPhoto() {
  var images = [_fcvova_header_2.default, _fcvova_header_4.default, _fcvova_header_6.default, _fcvova_header_8.default, _fcvova_header_10.default, _fcvova_header_12.default, _fcvova_header_14.default, _fcvova_header_16.default, _fcvova_header_18.default, _fcvova_header_20.default, _fcvova_header_22.default, _fcvova_header_24.default, _fcvova_header_26.default, _fcvova_header_28.default, _fcvova_header_30.default, _fcvova_header_32.default, _fcvova_header_34.default, _fcvova_header_36.default];
  var random = Math.floor(18 * Math.random());
  var divStyle = {
    height: '35em',
    color: 'white',
    background: 'url(' + images[random] + ')',
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
    WebkitTransition: 'all',
    msTransition: 'all',
    WebkitFilter: 'grayscale(90%) saturate(2) brightness(110%) contrast(80%) sepia(20%)',
    Filter: 'grayscale(90%) saturation(2) brightness(110%) contrast(80%) sepia(20%)'
  };
  return _jsx('div', {
    style: divStyle
  }, void 0);
}

exports.default = HeaderPhoto;
// visibility: inherit; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0); transform-origin: 50% 50% 0px;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Created by paulius on 19/07/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


exports.default = Logo;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(5);

var _Logo = {
  "Logo": "Logo__Logo__1bA_n",
  "logo-svg": "Logo__logo-svg__3w9ic",
  "fil1": "Logo__fil1__3CZEn",
  "fil4": "Logo__fil4__fUAqW",
  "fil2": "Logo__fil2__39CuN",
  "fil3": "Logo__fil3__3CYpy",
  "fil0": "Logo__fil0__1p2qI",
  "inner": "Logo__inner__2roWC",
  "inner-group": "Logo__inner-group__VryYm"
};

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Logo() {
  return _jsx('div', {
    className: _Logo2.default.Logo
  }, void 0, _jsx(_reactRouter.Link, {
    className: _Logo2.default.Link,
    to: '/'
  }, void 0, _jsx('svg', {
    className: _Logo2.default['logo-svg'],
    viewBox: '0 0 16000 16000'
  }, void 0, _jsx('g', {}, void 0, _jsx('path', {
    className: _Logo2.default.fil1,
    d: 'M13334 2666c-1365,-1365 -3251,-2209 -5334,-2209 -2083,0 -3969,844 -5334,2209\n            -1365,1365 -2209,3251 -2209,5334 0,2083 844,3969 2209,5334 1365,1365 3251,2209 5334,2209 2083,0 3969,-844\n            5334,-2209 1365,-1365 2209,-3251 2209,-5334 0,-2083 -844,-3969 -2209,-5334z'
  }), _jsx('path', {
    className: _Logo2.default.fil1,
    d: 'M8000 256c2138,0 4074,867 5476,2268 1401,1402 2268,3338 2268,5476 0,2138 -867,\n            4074 -2268,5476 -1402,1401 -3338,2268 -5476,2268 -2138,0 -4074,-867 -5476,-2268 -1401,-1402 -2268,-3338 -2268,\n            -5476 0,-2138 867,-4074 2268,-5476 1402,-1401 3338,-2268 5476,-2268z'
  }), _jsx('path', {
    className: _Logo2.default.fil0,
    d: 'M2666 8134c0,876 156,1363 470,2191 181,477 700,1187 1087,1574 381,382 1079,893\n            1569,1093 1127,459 1864,581 3120,408 96,-13 172,-38 270,-62 349,-88 921,-281 1221,-443 377,-202 654,-400 996,\n            -666l345 -321c457,-457 664,-770 993,-1336 103,-177 134,-277 202,-463 335,-925 471,-1534 353,-2585 -61,-545 -240,\n            -1070 -435,-1561 -82,-205 -233,-458 -356,-642l-418 -580c-128,-166 -499,-517 -662,-669 -119,-111 -651,-473 -779,\n            -551 -356,-215 -1280,-562 -1698,-631 -660,-108 -1205,-94 -1861,-4 -445,61 -1531,472 -1911,749l-931 733 -314\n            352c-785,843 -1261,2229 -1261,3414zm3397 -3193l518 554c56,75 420,544 443,629l646 -56 903 21c111,12 289,35\n            410,35 36,-69 73,-110 121,-175 48,-64 79,-105 127,-169l255 -336c115,-123 352,-311 450,-437 50,-65 92,-116 155,\n            -159 -271,-512 -585,-764 -867,-1128 -68,-87 -131,-69 -307,-99 -526,-88 -1215,-142 -1728,-11 -184,47 -310,246\n            -438,374 -202,202 -554,704 -688,957z'
  }), _jsx('path', {
    className: _Logo2.default.fil2,
    d: 'M4477 10518c0,233 171,364 319,512 284,285 604,536 935,766l569 281c108,50 154,11\n            332,-33 124,-31 218,-52 333,-92l313 -111c727,-294 563,-216 600,-676 15,-185 63,-1056 13,-1234 -36,-131 -708,-746\n            -912,-881l-535 -351c-154,-101 -197,-148 -308,-129 -132,23 -253,39 -377,70 -421,106 -448,124 -820,288 -251,111\n            -225,31 -310,374 -99,397 -152,769 -152,1216z'
  }), _jsx('path', {
    className: _Logo2.default.fil2,
    d: 'M8118 10370c0,157 41,990 69,1150 17,96 10,79 93,110l435 194c94,44 210,74 315,\n            110 92,30 583,177 655,168 39,-5 234,-101 281,-124 368,-184 426,-250 747,-491l449 -383c45,-44 66,-50 111,-92 37,\n            -34 67,-65 102,-101 104,-108 180,-190 180,-301 0,-313 -69,-1378 -237,-1575l-625 -280c-365,-112 -374,-111 -746,\n            -178 -190,-35 -210,30 -447,181 -54,35 -95,57 -148,93 -543,364 -508,340 -999,830 -247,247 -235,222 -235,689z'
  }), _jsx('path', {
    className: _Logo2.default.fil2,
    d: 'M9855 8374c291,68 922,218 1198,317 107,37 264,120 373,145 58,-88 143,-147 217,\n            -226l406 -482c72,-97 129,-167 191,-271 187,-313 303,-367 243,-596 -142,-540 -351,-1118 -658,-1578 -211,-316\n            -100,-221 -526,-380 -114,-42 -217,-72 -347,-115 -193,-63 -587,-177 -783,-177 -35,0 -153,106 -180,133 -123,123\n            -104,66 -242,239 -28,34 -50,53 -82,85l-288 358c-53,71 -238,313 -263,385 -22,65 50,140 88,210 76,143 157,273\n            220,427 207,502 384,946 433,1526z'
  }), _jsx('path', {
    className: _Logo2.default.fil2,
    d: 'M4569 8836l557 -201c286,-92 717,-192 1014,-261 230,-988 122,-833 579,-1750 178,\n            -356 271,-301 53,-619l-721 -831c-286,-227 -45,-212 -1027,32 -220,55 -382,121 -579,198 -157,61 -119,50 -205,183\n            -223,349 -356,661 -520,1031l-174 603c-65,259 -79,132 156,524 266,445 328,525 678,874 67,66 139,142 189,217z'
  }), _jsx('path', {
    className: _Logo2.default.fil2,
    d: 'M3849 10739l-351 -18c23,88 449,678 531,763 156,161 221,259 395,398l175 159c40,\n            32 49,45 89,77 644,506 688,508 1422,851l234 99 -163 -651c-26,-110 -46,-114 -22,-218 -66,-15 -218,-96 -277,-130\n            -439,-255 -844,-538 -1206,-900 -76,-75 -142,-130 -207,-218 -62,-83 -132,-163 -177,-249 -150,13 -267,37 -443,37z'
  }), _jsx('path', {
    className: _Logo2.default.fil2,
    d: 'M9614 13086c160,-37 928,-418 1087,-521l574 -405c74,-55 99,-88 164,-151 72,-68 147,\n            -113 250,-230 203,-231 722,-828 771,-1040l-610 1c-115,-2 -82,-18 -166,-38 -218,412 -767,830 -1132,1104 -252,189\n            -123,87 -338,216 -438,262 -371,106 -384,282 -1,15 -13,92 -20,128 -33,181 -126,509 -196,654z'
  }), _jsx('path', {
    className: _Logo2.default.fil2,
    d: 'M13181 7949c0,-357 -66,-710 -140,-1005 -77,-308 -151,-613 -273,-874l-277 -573c-61,\n            -123 -369,-536 -471,-674 -60,-81 -59,-96 -151,-145 0,209 5,362 -26,546 -55,320 18,151 254,575 38,69 63,126 98,197\n            72,143 124,251 184,408 122,321 190,549 273,891 66,268 107,178 246,345l283 309z'
  }), _jsx('path', {
    className: _Logo2.default.fil2,
    d: 'M2832 7930c76,-50 335,-328 440,-429 78,-76 79,-64 99,-196 50,-319 145,-602 274,\n            -890 120,-268 238,-528 396,-769 271,-412 103,-159 103,-968 -239,275 -283,338 -491,636 -106,151 -121,200 -205,368\n            -167,334 -214,453 -346,799 -62,161 -95,250 -133,441l-137 1008z'
  }), _jsx('path', {
    className: _Logo2.default.fil2,
    d: 'M6380 3181c35,47 379,178 457,209 235,93 105,75 546,18 545,-71 1186,2 1696,87 419,\n            70 42,81 650,-88 82,-23 152,-58 237,-60l-197 -81c-82,-27 -125,-47 -203,-74 -175,-61 -741,-186 -917,-210 -324,-44\n            -911,-24 -1235,13l-701 112c-89,22 -239,72 -333,74z'
  }), _jsx('path', {
    className: _Logo2.default.fil3,
    d: 'M8154 6897l-326 0 -623 1545 378 0 114 -309 589 0 114 309 378 0 -624 -1545zm12 927l\n            -349 0 173 -450 3 0 173 450z'
  }), _jsx('path', {
    className: _Logo2.default.fil3,
    d: 'M7991 6486c360,0 686,145 922,381 236,236 382,562 382,922 0,360 -146,686 -382,921\n             -236,236 -562,382 -922,382 -359,0 -685,-146 -921,-382 -236,-235 -382,-561 -382,-921 0,-360 146,-686 382,-922 236,\n             -236 562,-381 921,-381zm751 553c-192,-192 -458,-311 -751,-311 -293,0 -558,119 -750,311 -192,192 -310,457 -310,750\n              0,293 118,558 310,750 192,192 457,311 750,311 293,0 559,-119 751,-311 191,-192 310,-457 310,-750 0,-293 -119,\n              -558 -310,-750z'
  }), _jsx('path', {
    className: _Logo2.default.fil4,
    d: 'M457 8000c0,-2083 844,-3969 2209,-5334 1365,-1365 3251,-2209 5334,-2209 2083,0\n            3969,844 5334,2209 1365,1365 2209,3251 2209,5334 0,2083 -844,3969 -2209,5334 -1365,1365 -3251,2209 -5334,2209\n            -2083,0 -3969,-844 -5334,-2209 -1365,-1365 -2209,-3251 -2209,-5334zm13019 -5476c-1402,-1401 -3338,-2268 -5476,\n            -2268 -2138,0 -4074,867 -5476,2268 -1401,1402 -2268,3338 -2268,5476 0,2138 867,4074 2268,5476 1402,1401 3338,\n            2268 5476,2268 2138,0 4074,-867 5476,-2268 1401,-1402 2268,-3338 2268,-5476 0,-2138 -867,-4074 -2268,-5476z'
  }), _jsx('path', {
    className: _Logo2.default.fil3,
    d: 'M6063 4941l518 554c56,75 420,544 443,629l646 -56 903 21c111,12 289,35 410,35 36,\n            -69 73,-110 121,-175 48,-64 79,-105 127,-169l255 -336c115,-123 352,-311 450,-437 50,-65 92,-116 155,-159 -271,\n            -512 -585,-764 -867,-1128 -68,-87 -131,-69 -307,-99 -526,-88 -1215,-142 -1728,-11 -184,47 -310,246 -438,374\n            -202,202 -554,704 -688,957z'
  }), _jsx('g', {
    className: _Logo2.default['inner-group']
  }, void 0, _jsx('path', {
    className: _Logo2.default.inner,
    d: 'M8974 2435c400,49 756,-214 807,-625 50,-410 -231,-752 -632,-801 -400,-50\n               -756,214 -807,624 -50,411 231,753 632,802zm31 -255c-253,-32 -400,-251 -369,-510 32,-260 229,-437 482,-406\n                253,31 401,251 369,510 -32,260 -228,437 -482,406z'
  }), _jsx('path', {
    className: _Logo2.default.inner,
    d: 'M7595 2380l29 -3 505 -1455 -279 22 -194 555c-44,126 -82,325 -82,325 0,0 -71,\n              -193 -133,-308l-281 -520 -308 24 743 1360z'
  }), _jsx('path', {
    className: _Logo2.default.inner,
    d: 'M10290 2806l27 11 1093 -1085 -260 -103 -418 414c-95,93 -217,255 -217,255 0,\n              0 22,-204 16,-335l-24 -591 -287 -114 70 1548z'
  }), _jsx('path', {
    className: _Logo2.default.inner,
    d: 'M10736 2957l233 151 142 -97 477 308 -31 169 255 164 228 -1534 -21 -13 -1283\n              852zm587 -96l216 -150c88,-60 206,-166 206,-166 0,0 -47,151 -66,257l-47 259 -309 -200z'
  }), _jsx('path', {
    className: _Logo2.default.inner,
    d: 'M5861 2757c251,-98 388,-280 433,-500l-265 -63c-30,140 -93,257 -261,323 -236,\n              92 -468,-32 -563,-276 -95,-244 -7,-488 229,-580 150,-58 283,-28 383,48l149 -226c-188,-137 -390,-155 -626,-64\n              -374,146 -561,544 -411,930 150,385 558,553 932,408z'
  }), _jsx('polygon', {
    className: _Logo2.default.inner,
    points: '4275,3596 4518,3441 4289,3082 4759,2782 4621,2565 4150,2865 3901,\n              2475 4418,2145 4282,1931 3522,2416 '
  }), _jsx('path', {
    className: _Logo2.default.inner,
    d: 'M13320 4064c815,1100 1297,2462 1297,3936 0,1827 -741,3481 -1938,4679 -181,\n              181 -372,351 -573,510l-331 0c271,-198 526,-416 762,-652 1161,-1161 1879,-2765 1879,-4537 0,-1483 -503,-2849\n              -1348,-3936l252 0zm-9426 9125c-201,-159 -392,-329 -573,-510 -1197,-1198 -1938,-2852 -1938,-4679 0,-1474 482,\n              -2836 1297,-3936l252 0c-845,1087 -1348,2453 -1348,3936 0,1772 718,3376 1879,4537 236,236 491,454 762,652l-331\n               0z'
  }), _jsx('path', {
    className: _Logo2.default.inner,
    d: 'M2680 4064c-815,1100 -1297,2462 -1297,3936 0,1827 741,3481 1938,4679 181,\n              181 372,351 573,510l331 0c-271,-198 -526,-416 -762,-652 -1161,-1161 -1879,-2765 -1879,-4537 0,-1483 503,\n              -2849 1348,-3936l-252 0z'
  }), _jsx('path', {
    className: _Logo2.default.inner,
    d: 'M5264 14545l18 8 764 -702 -172 -77 -293 268c-66,60 -152,166 -152,166 0,0\n              20,-137 19,-225l0 -398 -191 -85 7 1045zm747 263l188 52 252 -909 -188 -52 -252 909zm609 144l611 115 32 -167\n              -420 -80 144 -759 -191 -36 -176 927zm1749 172l19 1 34 -951 -182 -7 -14 396c-2,65 7,172 7,172 0,0 -62,-88\n              -107,-133l-460 -463 -19 -1 -33 952 181 6 14 -395c2,-68 -8,-173 -8,-173 0,0 62,87 108,133l460 463zm448 -78l193\n               -22 -110 -937 -193 22 110 937zm986 -173c207,-57 336,-212 272,-442l-161 -580 -187 52 158 569c36,133 -6,199\n               -129,233 -124,34 -196,0 -232,-133l-158 -569 -187 52 161 580c63,230 253,297 463,238zm1010 -358c168,-77 253,\n               -220 181,-380 -67,-148 -181,-175 -361,-171l-53 1c-90,1 -133,-5 -157,-59 -19,-42 -1,-90 51,-114 50,-23 93,\n               -16 148,25l97 -151c-104,-76 -203,-79 -315,-28 -158,72 -214,218 -154,351 66,144 181,174 333,171l53 -1c97,-1\n                155,-2 182,59 23,51 -7,108 -80,142 -87,39 -157,16 -223,-29l-107 149c99,79 240,109 405,35z'
  }))))));
}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _setup = __webpack_require__(10);

var _IntlActions = __webpack_require__(12);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var initLocale = global.navigator && global.navigator.language || 'lt';

var initialState = _extends({
  locale: initLocale,
  enabledLanguages: _setup.enabledLanguages
}, _setup.localizationData[initLocale] || {});

var IntlReducer = function IntlReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _IntlActions.SWITCH_LANGUAGE:
      {
        var type = action.type;

        var actionWithoutType = _objectWithoutProperties(action, ['type']); // eslint-disable-line


        return _extends({}, state, actionWithoutType);
      }

    default:
      return state;
  }
};

exports.default = IntlReducer;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(19);

var _AppReducer = __webpack_require__(47);

var _AppReducer2 = _interopRequireDefault(_AppReducer);

var _IntlReducer = __webpack_require__(53);

var _IntlReducer2 = _interopRequireDefault(_IntlReducer);

var _FixturesReducer = __webpack_require__(13);

var _FixturesReducer2 = _interopRequireDefault(_FixturesReducer);

var _PostReducer = __webpack_require__(14);

var _PostReducer2 = _interopRequireDefault(_PostReducer);

var _TeamsReducer = __webpack_require__(15);

var _TeamsReducer2 = _interopRequireDefault(_TeamsReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Combine all reducers into one root reducer
/**
 * Root Reducer
 */
exports.default = (0, _redux.combineReducers)({
  app: _AppReducer2.default,
  intl: _IntlReducer2.default,
  fixtures: _FixturesReducer2.default,
  posts: _PostReducer2.default,
  teams: _TeamsReducer2.default
});

// Import Reducers

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllTeamsFixtures = getAllTeamsFixtures;

var _team = __webpack_require__(18);

var _team2 = _interopRequireDefault(_team);

var _fixture = __webpack_require__(60);

var _fixture2 = _interopRequireDefault(_fixture);

var _stadium = __webpack_require__(17);

var _stadium2 = _interopRequireDefault(_stadium);

var _competition = __webpack_require__(59);

var _competition2 = _interopRequireDefault(_competition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by paulius on 02/08/16.
 */
function getAllTeamsFixtures(req, res) {
  _fixture2.default.find({ homeTeamId: req.params.teamId }).sort('-date').exec(function (err, fixtures) {
    if (err) {
      res.status(500).send(err);
    }
    for (var i = 0; i < fixtures.length; i++) {
      var fx = fixtures[i];
      _team2.default.find({ teamId: fx.homeTeamId }).exec(function (err, team) {
        if (err) {
          res.status(500).send(err);
        }
        fx.homeTeamName = team[0].name;
        fx.homeTeamLogo = team[0].logo;
        _team2.default.find({ teamId: fx.awayTeamId }).exec(function (err, team) {
          if (err) {
            res.status(500).send(err);
          }
          fx['awayTeamName'] = team[0].name;
          fx['awayTeamLogo'] = team[0].logo;

          _stadium2.default.find({ _id: fx.stadiumId }).exec(function (err, stadiums) {
            if (err) {
              res.status(500).send(err);
            }
            fx['stadiumAddress'] = stadiums[0].addressLine;

            _competition2.default.findOne({ _id: fx.leagueId }).exec(function (err, competition) {
              if (err) {
                res.status(500).send(err);
              }
              fx['shortCompetitionNameEn'] = competition.shortNameEn;
              fx['shortCompetitionNameLt'] = competition.shortNameLt;
              fixtures = fx;
              res.json({ fixtures: fixtures });
            });
          });
        });
      });
    }
  });
}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPosts = getPosts;
exports.addPost = addPost;
exports.getPost = getPost;
exports.deletePost = deletePost;

var _post = __webpack_require__(61);

var _post2 = _interopRequireDefault(_post);

var _cuid = __webpack_require__(63);

var _cuid2 = _interopRequireDefault(_cuid);

var _limax = __webpack_require__(69);

var _limax2 = _interopRequireDefault(_limax);

var _sanitizeHtml = __webpack_require__(82);

var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
function getPosts(req, res) {
  _post2.default.find().sort('-dateAdded').exec(function (err, posts) {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ posts: posts });
  });
}

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
function addPost(req, res) {
  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
    res.status(403).end();
  }

  var newPost = new _post2.default(req.body.post);

  // Let's sanitize inputs
  newPost.title = (0, _sanitizeHtml2.default)(newPost.title);
  newPost.name = (0, _sanitizeHtml2.default)(newPost.name);
  newPost.content = (0, _sanitizeHtml2.default)(newPost.content);

  newPost.slug = (0, _limax2.default)(newPost.title.toLowerCase(), { lowercase: true });
  newPost.cuid = (0, _cuid2.default)();
  newPost.save(function (err, saved) {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: saved });
  });
}

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
function getPost(req, res) {
  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (err, post) {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: post });
  });
}

/**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
function deletePost(req, res) {
  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (err, post) {
    if (err) {
      res.status(500).send(err);
    }

    post.remove(function () {
      res.status(200).end();
    });
  });
}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStadiumById = getStadiumById;
exports.getAllStadiums = getAllStadiums;

var _stadium = __webpack_require__(17);

var _stadium2 = _interopRequireDefault(_stadium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get stadium by id
 * @param req
 * @param res
 * @returns void
 */
function getStadiumById(req, res) {
  _stadium2.default.find({ _id: req.params.id }).exec(function (err, stadiums) {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ stadiums: stadiums });
  });
} /**
   * Created by paulius on 03/08/16.
   */
function getAllStadiums(req, res) {
  _stadium2.default.find().exec(function (err, stadiums) {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ stadiums: stadiums });
  });
}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLeagueTeams = getLeagueTeams;
exports.getAllTeams = getAllTeams;

var _team = __webpack_require__(18);

var _team2 = _interopRequireDefault(_team);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get all league teams
 * @param req
 * @param res
 * @returns void
 */
function getLeagueTeams(req, res) {
  _team2.default.find({ leagueId: req.params.leagueId }).sort('-points').exec(function (err, teams) {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ teams: teams });
  });
} /**
   * Created by paulius on 27/07/16.
   */
function getAllTeams(req, res) {
  _team2.default.find().exec(function (err, teams) {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ teams: teams });
  });
}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(2);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema; /**
                                         * Created by paulius on 03/08/16.
                                         */


var competitionSchema = new Schema({
  _id: { type: 'Number', required: true },
  name: { type: 'String', required: true },
  shortNameLt: { type: 'String', required: true },
  shortNameEn: { type: 'String', required: true },
  type: { type: 'String', required: true },
  descriptionLt: { type: 'String', required: true },
  descriptionEn: { type: 'String', required: true },
  year: { type: 'Number' }
});

competitionSchema.set('collection', 'competitions');

exports.default = _mongoose2.default.model('Competition', competitionSchema);

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(2);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema; /**
                                         * Created by paulius on 02/08/16.
                                         */


var fixtureSchema = new Schema({
  leagueId: { type: 'Number', required: true },
  homeTeamId: { type: 'Number', required: true },
  awayTeamId: { type: 'Number', required: true },
  date: { type: 'Date', required: true },
  stadiumId: { type: 'Number', required: true },
  homeTeamName: { type: 'String', required: true },
  awayTeamName: { type: 'String', required: true },
  homeTeamLogo: { type: 'String', required: true },
  awayTeamLogo: { type: 'String', required: true },
  stadiumAddress: { type: 'String', required: true },
  shortCompetitionNameEn: { type: 'String', required: true },
  shortCompetitionNameLt: { type: 'String', required: true }
});

fixtureSchema.set('colection', 'fixtures');

exports.default = _mongoose2.default.model('Fixture', fixtureSchema);

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(2);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var postSchema = new Schema({
  name: { type: 'String', required: true },
  title: { type: 'String', required: true },
  subTitle: { type: 'String', required: true },
  content: { type: 'String', required: true },
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true }
});

exports.default = _mongoose2.default.model('Post', postSchema);

/***/ },
/* 62 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequence = sequence;
/**
 * Throw an array to it and a function which can generate promises
 * and it will call them sequentially, one after another
 */
function sequence(items, consumer) {
  var results = [];
  var runner = function runner() {
    var item = items.shift();
    if (item) {
      return consumer(item).then(function (result) {
        results.push(result);
      }).then(runner);
    }

    return Promise.resolve(results);
  };

  return runner();
}

/***/ },
/* 63 */
/***/ function(module, exports) {

module.exports = require("cuid");

/***/ },
/* 64 */
/***/ function(module, exports) {

module.exports = require("date-format");

/***/ },
/* 65 */
/***/ function(module, exports) {

module.exports = require("intl");

/***/ },
/* 66 */
/***/ function(module, exports) {

module.exports = require("intl/locale-data/jsonp/en");

/***/ },
/* 67 */
/***/ function(module, exports) {

module.exports = require("intl/locale-data/jsonp/lt");

/***/ },
/* 68 */
/***/ function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ },
/* 69 */
/***/ function(module, exports) {

module.exports = require("limax");

/***/ },
/* 70 */
/***/ function(module, exports) {

module.exports = require("muicss/lib/react/col");

/***/ },
/* 71 */
/***/ function(module, exports) {

module.exports = require("muicss/lib/react/container");

/***/ },
/* 72 */
/***/ function(module, exports) {

module.exports = require("muicss/lib/react/row");

/***/ },
/* 73 */
/***/ function(module, exports) {

module.exports = require("postcss-cssnext");

/***/ },
/* 74 */
/***/ function(module, exports) {

module.exports = require("postcss-focus");

/***/ },
/* 75 */
/***/ function(module, exports) {

module.exports = require("postcss-reporter");

/***/ },
/* 76 */
/***/ function(module, exports) {

module.exports = require("react-intl/locale-data/en");

/***/ },
/* 77 */
/***/ function(module, exports) {

module.exports = require("react-intl/locale-data/lt");

/***/ },
/* 78 */
/***/ function(module, exports) {

module.exports = require("redux-devtools");

/***/ },
/* 79 */
/***/ function(module, exports) {

module.exports = require("redux-devtools-dock-monitor");

/***/ },
/* 80 */
/***/ function(module, exports) {

module.exports = require("redux-devtools-log-monitor");

/***/ },
/* 81 */
/***/ function(module, exports) {

module.exports = require("redux-thunk");

/***/ },
/* 82 */
/***/ function(module, exports) {

module.exports = require("sanitize-html");

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

// Webpack Requirements


var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _compression = __webpack_require__(30);

var _compression2 = _interopRequireDefault(_compression);

var _mongoose = __webpack_require__(2);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = __webpack_require__(29);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = __webpack_require__(31);

var _path2 = _interopRequireDefault(_path);

var _IntlWrapper = __webpack_require__(20);

var _IntlWrapper2 = _interopRequireDefault(_IntlWrapper);

var _webpack = __webpack_require__(9);

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackConfig = __webpack_require__(28);

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

var _webpackDevMiddleware = __webpack_require__(33);

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = __webpack_require__(34);

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _store = __webpack_require__(22);

var _reactRedux = __webpack_require__(4);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(32);

var _reactRouter = __webpack_require__(5);

var _reactHelmet = __webpack_require__(7);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _routes = __webpack_require__(21);

var _routes2 = _interopRequireDefault(_routes);

var _fetchData = __webpack_require__(27);

var _post = __webpack_require__(24);

var _post2 = _interopRequireDefault(_post);

var _team = __webpack_require__(26);

var _team2 = _interopRequireDefault(_team);

var _fixture = __webpack_require__(23);

var _fixture2 = _interopRequireDefault(_fixture);

var _stadium = __webpack_require__(25);

var _stadium2 = _interopRequireDefault(_stadium);

var _config = __webpack_require__(8);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Initialize the Express App
var app = new _express2.default();

// Run Webpack dev server in development mode
if (process.env.NODE_ENV === 'development') {
  var compiler = (0, _webpack2.default)(_webpackConfig2.default);
  app.use((0, _webpackDevMiddleware2.default)(compiler, { noInfo: true, publicPath: _webpackConfig2.default.output.publicPath }));
  app.use((0, _webpackHotMiddleware2.default)(compiler));
}

// React And Redux Setup


// Import required modules


// MongoDB Connection
_mongoose2.default.connect(_config2.default.mongoURL, function (error) {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }
});

// Apply body Parser and server dist assets and routes
app.use((0, _compression2.default)());
app.use(_bodyParser2.default.json({ limit: '20mb' }));
app.use(_bodyParser2.default.urlencoded({ limit: '20mb', extended: false }));
app.use(_express2.default.static(_path2.default.resolve(__dirname, '../dist')));
app.use(_express2.default.static(_path2.default.resolve(__dirname, '../public')));
app.use('/api', _post2.default);
app.use('/api', _team2.default);
app.use('/api', _fixture2.default);
app.use('/api', _stadium2.default);

// Render Initial HTML
var renderFullPage = function renderFullPage(html, initialState) {
  var head = _reactHelmet2.default.rewind();

  // Import Manifests
  var assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
  var chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);

  return '\n    <!doctype html>\n    <html>\n      <head>\n        ' + head.base.toString() + '\n        ' + head.title.toString() + '\n        ' + head.meta.toString() + '\n        ' + head.link.toString() + '\n        ' + head.script.toString() + '\n\n        ' + (process.env.NODE_ENV === 'production' ? '<link rel=\'stylesheet\' href=\'' + assetsManifest['/app.css'] + '\' />' : '') + '\n        <link href=\'https://fonts.googleapis.com/css?family=Lato:400,300,700\' rel=\'stylesheet\' type=\'text/css\'/>\n        <link rel="shortcut icon" href="http://res.cloudinary.com/hashnode/image/upload/v1455629445/static_imgs/mern/mern-favicon-circle-fill.png" type="image/png" />\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + ';\n          ' + (process.env.NODE_ENV === 'production' ? '//<![CDATA[\n          window.webpackManifest = ' + JSON.stringify(chunkManifest) + ';\n          //]]>' : '') + '\n        </script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/vendor.js'] : '/vendor.js') + '\'></script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/app.js'] : '/app.js') + '\'></script>\n      </body>\n    </html>\n  ';
};

var renderError = function renderError(err) {
  var softTab = '&#32;&#32;&#32;&#32;';
  var errTrace = process.env.NODE_ENV !== 'production' ? ':<br><br><pre style="color:red">' + softTab + err.stack.replace(/\n/g, '<br>' + softTab) + '</pre>' : '';
  return renderFullPage('Server Error' + errTrace, {});
};

// Server Side Rendering based on routes matched by React-router.
app.use(function (req, res, next) {
  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
    if (err) {
      return res.status(500).end(renderError(err));
    }

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }

    if (!renderProps) {
      return next();
    }

    var store = (0, _store.configureStore)();

    return (0, _fetchData.fetchComponentData)(store, renderProps.components, renderProps.params).then(function () {
      var initialView = (0, _server.renderToString)(_jsx(_reactRedux.Provider, {
        store: store
      }, void 0, _jsx(_IntlWrapper2.default, {}, void 0, _react2.default.createElement(_reactRouter.RouterContext, renderProps))));
      var finalState = store.getState();

      res.set('Content-Type', 'text/html').status(200).end(renderFullPage(initialView, finalState));
    }).catch(function (error) {
      return next(error);
    });
  });
});

// start app
app.listen(_config2.default.port, function (error) {
  if (!error) {
    console.log('MERN is running on port: ' + _config2.default.port + '! Build something amazing!'); // eslint-disable-line
  }
});

exports.default = app;
/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ }
/******/ ]);