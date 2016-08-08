webpackJsonp([1],{680:function(e,t,s){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e){return _["default"].createElement("div",null,_["default"].createElement(c["default"],{title:e.post.title}),_["default"].createElement("div",{className:P["default"]["single-post"]+" "+P["default"]["post-detail"]},_["default"].createElement("h3",{className:P["default"]["post-title"]},e.post.title),_["default"].createElement("p",{className:P["default"]["author-name"]},_["default"].createElement(l.FormattedMessage,{id:"by"})," ",e.post.name),_["default"].createElement("p",{className:P["default"]["post-desc"]},e.post.content)))}function u(e,t){return{post:(0,p.getPost)(e,t.params.cuid)}}Object.defineProperty(t,"__esModule",{value:!0}),t.PostDetailPage=r;var n=s(0),_=o(n),i=s(60),a=s(257),c=o(a),l=s(82),d=s(699),P=o(d),f=s(682),p=s(692);r.need=[function(e){return(0,f.fetchPost)(e.cuid)}],r.propTypes={post:n.PropTypes.shape({name:n.PropTypes.string.isRequired,title:n.PropTypes.string.isRequired,content:n.PropTypes.string.isRequired,slug:n.PropTypes.string.isRequired,cuid:n.PropTypes.string.isRequired}).isRequired};var T=(0,i.connect)(u)(r);t["default"]=T,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"PostDetailPage","/home/paulius/Projects/fcvova_web/client/modules/Post/pages/PostDetailPage/PostDetailPage.js"),__REACT_HOT_LOADER__.register(u,"mapStateToProps","/home/paulius/Projects/fcvova_web/client/modules/Post/pages/PostDetailPage/PostDetailPage.js"),__REACT_HOT_LOADER__.register(T,"default","/home/paulius/Projects/fcvova_web/client/modules/Post/pages/PostDetailPage/PostDetailPage.js"))}()},682:function(e,t,s){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e){return{type:P,post:e}}function u(e){return function(t){return(0,d["default"])("posts","post",{post:{name:e.name,title:e.title,content:e.content}}).then(function(e){return t(r(e.post))})}}function n(e){return{type:f,posts:e}}function _(){return function(e){return(0,d["default"])("posts").then(function(t){e(n(t.posts))})}}function i(e){return function(t){return(0,d["default"])("posts/"+e).then(function(e){return t(r(e.post))})}}function a(e){return{type:p,cuid:e}}function c(e){return function(t){return(0,d["default"])("posts/"+e,"delete").then(function(){return t(a(e))})}}Object.defineProperty(t,"__esModule",{value:!0}),t.DELETE_POST=t.ADD_POSTS=t.ADD_POST=void 0,t.addPost=r,t.addPostRequest=u,t.addPosts=n,t.fetchPosts=_,t.fetchPost=i,t.deletePost=a,t.deletePostRequest=c;var l=s(256),d=o(l),P=t.ADD_POST="ADD_POST",f=t.ADD_POSTS="ADD_POSTS",p=t.DELETE_POST="DELETE_POST";!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(P,"ADD_POST","/home/paulius/Projects/fcvova_web/client/modules/Post/PostActions.js"),__REACT_HOT_LOADER__.register(f,"ADD_POSTS","/home/paulius/Projects/fcvova_web/client/modules/Post/PostActions.js"),__REACT_HOT_LOADER__.register(p,"DELETE_POST","/home/paulius/Projects/fcvova_web/client/modules/Post/PostActions.js"),__REACT_HOT_LOADER__.register(r,"addPost","/home/paulius/Projects/fcvova_web/client/modules/Post/PostActions.js"),__REACT_HOT_LOADER__.register(u,"addPostRequest","/home/paulius/Projects/fcvova_web/client/modules/Post/PostActions.js"),__REACT_HOT_LOADER__.register(n,"addPosts","/home/paulius/Projects/fcvova_web/client/modules/Post/PostActions.js"),__REACT_HOT_LOADER__.register(_,"fetchPosts","/home/paulius/Projects/fcvova_web/client/modules/Post/PostActions.js"),__REACT_HOT_LOADER__.register(i,"fetchPost","/home/paulius/Projects/fcvova_web/client/modules/Post/PostActions.js"),__REACT_HOT_LOADER__.register(a,"deletePost","/home/paulius/Projects/fcvova_web/client/modules/Post/PostActions.js"),__REACT_HOT_LOADER__.register(c,"deletePostRequest","/home/paulius/Projects/fcvova_web/client/modules/Post/PostActions.js"))}()},692:function(e,t,s){"use strict";function o(e){if(Array.isArray(e)){for(var t=0,s=Array(e.length);t<e.length;t++)s[t]=e[t];return s}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.getPost=t.getPosts=void 0;var r=s(682),u={data:[]},n=function(){var e=arguments.length<=0||void 0===arguments[0]?u:arguments[0],t=arguments[1];switch(t.type){case r.ADD_POST:return{data:[t.post].concat(o(e.data))};case r.ADD_POSTS:return{data:t.posts};case r.DELETE_POST:return{data:e.data.filter(function(e){return e.cuid!==t.cuid})};default:return e}},_=t.getPosts=function(e){return e.posts.data},i=t.getPost=function(e,t){return e.posts.data.filter(function(e){return e.cuid===t})[0]},a=n;t["default"]=a,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(u,"initialState","/home/paulius/Projects/fcvova_web/client/modules/Post/PostReducer.js"),__REACT_HOT_LOADER__.register(n,"PostReducer","/home/paulius/Projects/fcvova_web/client/modules/Post/PostReducer.js"),__REACT_HOT_LOADER__.register(_,"getPosts","/home/paulius/Projects/fcvova_web/client/modules/Post/PostReducer.js"),__REACT_HOT_LOADER__.register(i,"getPost","/home/paulius/Projects/fcvova_web/client/modules/Post/PostReducer.js"),__REACT_HOT_LOADER__.register(a,"default","/home/paulius/Projects/fcvova_web/client/modules/Post/PostReducer.js"))}()},699:function(e,t){e.exports={"single-post":"_3B15Q62CNe0LaxJ8BUZr5W","post-title":"_3mZF-WLrnBUxaWr9zFi6Q_","author-name":"_1cSDPptMi8rvUEB2tAonlW","post-desc":"_3D8Fgk2edKTkFyBDsUEZ2u","post-action":"_3S84cKmlvGO49pK1biPlXr",divider:"y2SIF3ydn02JYMgeklO7S","post-detail":"_3W9vrxIdnQ93EmH-x2UgJR"}}});