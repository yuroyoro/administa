webpackJsonp([1],[
/* 0 */
/*!*****************!*\
  !*** multi app ***!
  \*****************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./js/app */6);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Administa"] = __webpack_require__(/*! -!./~/babel-loader!./js/app.js */ 7);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 7 */
/*!************************************!*\
  !*** ./~/babel-loader!./js/app.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React, global, $) {"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var Router = _interopRequire(__webpack_require__(/*! react-router */ 26));
	
	var Bootstrap = _interopRequire(__webpack_require__(/*! bootstrap */ 21));
	
	var AdminLTE = _interopRequire(__webpack_require__(/*! adminlte */ 27));
	
	// react-router
	var Route = Router.Route;
	var NotFoundRoute = Router.NotFoundRoute;
	var DefaultRoute = Router.DefaultRoute;
	var Link = Router.Link;
	var Redirect = Router.Redirect;
	var RouteHandler = Router.RouteHandler;
	
	// require stylesheets
	__webpack_require__(/*! bootstrap.css */ 24);
	__webpack_require__(/*! adminlte.css */ 28);
	__webpack_require__(/*! adminlte-skins-blue.css */ 30);
	__webpack_require__(/*! adminlte-skins-black.css */ 32);
	__webpack_require__(/*! app.css */ 22);
	
	var ResourceActions = _interopRequire(__webpack_require__(/*! actions/ResourceActions */ 9));
	
	var MenuActions = _interopRequire(__webpack_require__(/*! actions/MenuActions */ 10));
	
	var UserActions = _interopRequire(__webpack_require__(/*! actions/UserActions */ 11));
	
	var Header = _interopRequire(__webpack_require__(/*! components/Header.react */ 12));
	
	var Menu = _interopRequire(__webpack_require__(/*! components/Menu.react */ 13));
	
	var ContentHeader = _interopRequire(__webpack_require__(/*! components/ContentHeader.react */ 14));
	
	var Footer = _interopRequire(__webpack_require__(/*! components/Footer.react */ 15));
	
	var Loader = _interopRequire(__webpack_require__(/*! Loader */ 8));
	
	var Resource = _interopRequire(__webpack_require__(/*! components/Resource.react */ 16));
	
	var ResourceDetail = _interopRequire(__webpack_require__(/*! components/detail/Detail.react */ 17));
	
	var ResourceForm = _interopRequire(__webpack_require__(/*! components/form/Form.react */ 18));
	
	var Dialogs = _interopRequire(__webpack_require__(/*! components/Dialogs.react */ 19));
	
	// expose React to global (workarround)
	global.React = React;
	
	var App = React.createClass({
	  displayName: "App",
	
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "main" },
	      React.createElement(Header, null),
	      React.createElement(Menu, null),
	      React.createElement(
	        "div",
	        { className: "content-wrapper" },
	        React.createElement(
	          "section",
	          { className: "content" },
	          React.createElement(RouteHandler, this.props)
	        )
	      ),
	      React.createElement(Footer, null),
	      React.createElement(Dialogs, null)
	    );
	  }
	});
	
	var routes = React.createElement(
	  Route,
	  { name: "app", path: "/", handler: App },
	  React.createElement(
	    Route,
	    { name: "resource", path: "administa/:name", handler: Resource },
	    React.createElement(Route, { name: "new", path: "new", handler: ResourceForm }),
	    React.createElement(Route, { name: "edit", path: ":id/edit", handler: ResourceForm }),
	    React.createElement(Route, { name: "show", path: ":id", handler: ResourceDetail })
	  ),
	  React.createElement(Redirect, { from: "administa/:name/", to: "resource" })
	);
	
	Loader.setup();
	
	module.exports = {
	  initialData: function initialData() {
	    var data = JSON.parse(document.getElementById("initial-data").getAttribute("data-json"));
	    return data;
	  },
	
	  user: function user() {
	    return JSON.parse(document.getElementById("initial-data").getAttribute("user-json"));
	  },
	
	  menus: function menus() {
	    return JSON.parse(document.getElementById("initial-data").getAttribute("menu-json"));
	  },
	
	  render: function render(data) {
	
	    console.log("render");
	    console.log(data);
	    ResourceActions.initialize(data);
	    UserActions.initialize(this.user());
	    MenuActions.initialize(this.menus());
	
	    Router.run(routes, Router.HistoryLocation, function (Handler, state) {
	      var params = state.params;
	      React.render(React.createElement(Handler, { params: params }), document.body);
	    });
	
	    $.AdminLTE.layout.fix();
	  }
	
	};
	// /.content -->
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! react */ 1), (function() { return this; }()), __webpack_require__(/*! jquery */ 4)))

/***/ },
/* 8 */
/*!**********************!*\
  !*** ./js/Loader.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
	
	module.exports = {
	  // http://projects.lukehaas.me/css-loaders/
	  // http://w3lessons.info/2014/01/26/showing-busy-loading-indicator-during-an-ajax-request-using-jquery/
	
	  setup: function setup() {
	    var _this = this;
	
	    jQuery(document).ajaxStart(function () {
	      //show ajax indicator
	      _this.start("Loading...");
	    }).ajaxStop(function () {
	      //hide ajax indicator
	      _this.stop();
	    });
	  },
	
	  start: function start(text) {
	    if (jQuery("body").find("#resultLoading").attr("id") != "resultLoading") {
	      jQuery("body").append("<div id=\"resultLoading\" style=\"display:none\"><div class=\"bg\"></div><div class=\"loader\">" + text + "</div></div>");
	    }
	
	    jQuery("#resultLoading").css({
	      width: "100%",
	      height: "100%",
	      position: "fixed",
	      "z-index": "10000000",
	      top: "0",
	      left: "0",
	      right: "0",
	      bottom: "0",
	      margin: "auto"
	    });
	
	    jQuery("#resultLoading .bg").css({
	      background: "#000000",
	      opacity: "0.7",
	      width: "100%",
	      height: "100%",
	      position: "absolute",
	      top: "0"
	    });
	
	    jQuery("#resultLoading > div:last").css({
	      // 'width': '250px',
	      // 'height':'75px',
	      // 'text-align': 'center',
	      position: "fixed",
	      top: "0",
	      left: "0",
	      right: "0",
	      bottom: "0",
	      margin: "auto",
	      // 'font-size':'16px',
	      "z-index": "10" });
	
	    jQuery("#resultLoading .bg").height("100%");
	    jQuery("#resultLoading").fadeIn(300);
	    jQuery("body").css("cursor", "wait");
	  },
	
	  stop: function stop() {
	    jQuery("#resultLoading .bg").height("100%");
	    jQuery("#resultLoading").fadeOut(300);
	    jQuery("body").css("cursor", "default");
	  }
	};
	
	// 'color':'#ffffff'
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 4)))

/***/ },
/* 9 */
/*!***************************************!*\
  !*** ./js/actions/ResourceActions.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var AppDispatcher = _interopRequire(__webpack_require__(/*! ../AppDispatcher */ 35));
	
	var Constants = _interopRequire(__webpack_require__(/*! ../Constants */ 36));
	
	var Utils = _interopRequire(__webpack_require__(/*! Utils */ 37));
	
	module.exports = {
	
	  initialize: function initialize(data) {
	    AppDispatcher.dispatch({
	      type: Constants.INITIALIZE,
	      data: data
	    });
	  },
	
	  fetch: function fetch(name, id) {
	    var query = arguments[2] === undefined ? {} : arguments[2];
	
	    var url = "/administa/" + name + "/" + id;
	
	    console.log("fetch :" + url);
	    return $.ajax({
	      url: url,
	      dataType: "json",
	      data: query
	    }).done(function (data) {
	      console.log("fetch done:" + url);
	      console.log(data);
	      AppDispatcher.dispatch({
	        type: Constants.RESOURCE_FETCH,
	        name: name,
	        data: data
	      });
	    }).fail(function (xhr, status, err) {
	      console.error(url, status, err.toString());
	    }).promise();
	  },
	
	  list: function list(name) {
	    var query = arguments[1] === undefined ? {} : arguments[1];
	
	    var url = "/administa/" + name;
	
	    console.log("list:" + url);
	
	    return $.ajax({
	      url: url,
	      dataType: "json",
	      data: query
	    }).done(function (data) {
	      console.log(data);
	      AppDispatcher.dispatch({
	        type: Constants.RESOURCE_LIST,
	        name: name,
	        data: data
	      });
	    }).fail(function (xhr, status, err) {
	      console.error(url, status, err.toString());
	    }).promise();
	  },
	
	  build: function build(name) {
	    var data = arguments[1] === undefined ? {} : arguments[1];
	
	    var url = "/administa/" + name + "/new";
	
	    console.log("build:" + url);
	
	    return $.ajax({
	      url: url,
	      dataType: "json",
	      data: data
	    }).done(function (data) {
	      console.log(data);
	      AppDispatcher.dispatch({
	        type: Constants.RESOURCE_BUILD,
	        name: name,
	        data: data
	      });
	    }).fail(function (xhr, status, err) {
	      console.error(url, status, err.toString());
	    }).promise();
	  },
	
	  create: function create(name) {
	    var data = arguments[1] === undefined ? {} : arguments[1];
	
	    var url = "/administa/" + name;
	
	    console.log("create:" + url);
	
	    return this.sendRequiest("POST", url, data).done(function (data) {
	      console.log(data);
	      AppDispatcher.dispatch({
	        type: Constants.RESOURCE_CREATED,
	        name: name,
	        data: data
	      });
	    }).fail(function (xhr, status, err) {
	      if (xhr.status == 422) {
	        var res = xhr.responseJSON;
	        AppDispatcher.dispatch({
	          type: Constants.RESOURCE_INVALID,
	          name: name,
	          data: res
	        });
	      }
	
	      console.error(url, status, err.toString());
	    }).promise();
	  },
	
	  update: function update(name, id) {
	    var data = arguments[2] === undefined ? {} : arguments[2];
	
	    var url = "/administa/" + name + "/" + id;
	
	    console.log("update:" + url);
	
	    return this.sendRequiest("PUT", url, data).done(function (data) {
	      console.log(data);
	      AppDispatcher.dispatch({
	        type: Constants.RESOURCE_UPDATED,
	        name: name,
	        data: data
	      });
	    }).fail(function (xhr, status, err) {
	      if (xhr.status == 422) {
	        var res = xhr.responseJSON;
	        AppDispatcher.dispatch({
	          type: Constants.RESOURCE_INVALID,
	          name: name,
	          data: res
	        });
	      }
	      console.error(url, status, err.toString());
	    }).promise();
	  },
	
	  sendRequiest: function sendRequiest(method, url, data) {
	    var csrfToken = data.csrfToken;
	    delete data.csrfToken;
	
	    var reqdata = this.requestData(data);
	    var ajaxparams = {
	      url: url,
	      type: method,
	      dataType: "json" };
	
	    if (csrfToken) {
	      ajaxparams.headers = {
	        "X-CSRF-Token": csrfToken
	      };
	    }
	
	    if (reqdata instanceof FormData) {
	      ajaxparams.data = reqdata;
	      ajaxparams.processData = false;
	      ajaxparams.contentType = false;
	    } else {
	      ajaxparams.data = JSON.stringify(reqdata);
	      ajaxparams.contentType = "application/json";
	    }
	
	    return $.ajax(ajaxparams);
	  },
	
	  requestData: function requestData(data) {
	    var res = this.separateJsonAndFiles(data);
	    var json = res.json;
	    var files = res.files;
	
	    if (Utils.empty(files)) {
	      return json;
	    }
	
	    var formdata = new FormData();
	    formdata = this.constructFormData(formdata, json);
	    formdata = this.constructFormData(formdata, files);
	
	    return formdata;
	  },
	
	  constructFormData: function constructFormData(formdata, data, prefix) {
	    var _this = this;
	
	    var keys = Object.keys(data);
	    for (var i = 0, len = keys.length; i < len; i++) {
	      var key = keys[i];
	      var v = data[key];
	
	      var name = key;
	      if (prefix) {
	        name = "" + prefix + "[" + key + "]";
	      }
	
	      if (v instanceof File) {
	        formdata.append(name, v, v.name);
	        continue;
	      }
	
	      if (v instanceof Array) {
	        v.forEach(function (child) {
	          _this.constructFormData(formdata, child, name);
	        });
	        continue;
	      }
	
	      if (v instanceof Object) {
	        this.constructFormData(formdata, v, name);
	        continue;
	      }
	      formdata.append(name, v);
	    }
	
	    return formdata;
	  },
	
	  separateJsonAndFiles: function separateJsonAndFiles(data) {
	    var _this = this;
	
	    var json = {};
	    var files = {};
	
	    var keys = Object.keys(data);
	    for (var i = 0, len = keys.length; i < len; i++) {
	      var name = keys[i];
	      var v = data[name];
	
	      if (v instanceof File) {
	        files[name] = v;
	        continue;
	      }
	
	      if (v instanceof Array) {
	        var childJson = [];
	        var childFiles = [];
	        v.forEach(function (child) {
	          var res = _this.separateJsonAndFiles(v);
	          childJson.push(res.json);
	          childFiles.push(res.files);
	        });
	
	        if (Utils.present(childJson)) {
	          json[name] = childJson;
	        }
	        if (Utils.present(childFiles)) {
	          files[name] = childFiles;
	        }
	        continue;
	      }
	
	      if (v instanceof Object) {
	        var res = this.separateJsonAndFiles(v);
	        if (Utils.present(res.json)) {
	          json[name] = res.json;
	        }
	        if (Utils.present(res.files)) {
	          files[name] = res.files;
	        }
	        continue;
	      }
	
	      json[name] = v;
	    }
	
	    return { json: json, files: files };
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 4)))

/***/ },
/* 10 */
/*!***********************************!*\
  !*** ./js/actions/MenuActions.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var AppDispatcher = _interopRequire(__webpack_require__(/*! ../AppDispatcher */ 35));
	
	var Constants = _interopRequire(__webpack_require__(/*! ../Constants */ 36));
	
	module.exports = {
	
	  initialize: function initialize(data) {
	    AppDispatcher.dispatch({
	      type: Constants.MENU_INITIALIZED,
	      data: data
	    });
	  }
	};

/***/ },
/* 11 */
/*!***********************************!*\
  !*** ./js/actions/UserActions.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var AppDispatcher = _interopRequire(__webpack_require__(/*! ../AppDispatcher */ 35));
	
	var Constants = _interopRequire(__webpack_require__(/*! ../Constants */ 36));
	
	module.exports = {
	
	  initialize: function initialize(data) {
	    AppDispatcher.dispatch({
	      type: Constants.USER_INITIALIZED,
	      data: data
	    });
	  }
	};

/***/ },
/* 12 */
/*!***************************************!*\
  !*** ./js/components/Header.react.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var UserStore = _interopRequire(__webpack_require__(/*! stores/UserStore */ 47));
	
	module.exports = React.createClass({
	  displayName: "Header",
	
	  getInitialState: function getInitialState() {
	    return { user: UserStore.getState() };
	  },
	
	  componentDidMount: function componentDidMount() {
	    UserStore.addEventListener(this._onChange);
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    UserStore.removeEventListener(this._onChange);
	  },
	
	  _onChange: function _onChange() {
	    var user = UserStore.getState();
	    this.setState({ user: user });
	  },
	
	  render: function render() {
	    return (
	      // Main Header -->
	      React.createElement(
	        "header",
	        { className: "main-header" },
	        React.createElement(
	          "a",
	          { href: "index2.html", className: "logo" },
	          "Administa"
	        ),
	        React.createElement(
	          "nav",
	          { className: "navbar navbar-static-top", role: "navigation" },
	          React.createElement(
	            "a",
	            { href: "#", className: "sidebar-toggle", "data-toggle": "offcanvas", role: "button" },
	            React.createElement(
	              "span",
	              { className: "sr-only" },
	              "Toggle navigation"
	            )
	          ),
	          React.createElement(
	            "div",
	            { className: "navbar-custom-menu" },
	            React.createElement(
	              "ul",
	              { className: "nav navbar-nav" },
	              React.createElement(
	                "li",
	                { className: "dropdown user user-menu" },
	                React.createElement(
	                  "a",
	                  { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },
	                  React.createElement("img", { src: this.state.user.icon, className: "user-image", alt: "User Image" }),
	                  React.createElement(
	                    "span",
	                    { className: "hidden-xs" },
	                    this.state.user.name
	                  )
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  } });
	// Logo -->
	// Header Navbar -->
	// Sidebar toggle button-->
	// Navbar Right User -->
	// User Account User -->
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! react */ 1)))

/***/ },
/* 13 */
/*!*************************************!*\
  !*** ./js/components/Menu.react.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var MenuStore = _interopRequire(__webpack_require__(/*! stores/MenuStore */ 48));
	
	module.exports = React.createClass({
	  displayName: "Menu",
	
	  getInitialState: function getInitialState() {
	    return { menus: MenuStore.getState() };
	  },
	
	  componentDidMount: function componentDidMount() {
	    MenuStore.addEventListener(this._onChange);
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    MenuStore.removeEventListener(this._onChange);
	  },
	
	  _onChange: function _onChange() {
	    var menus = MenuStore.getState();
	    this.setState({ menus: menus });
	  },
	
	  label: function label(m, key) {
	    return React.createElement(
	      "li",
	      { className: "header", key: key },
	      m.label
	    );
	  },
	
	  group: function group(m, key) {
	    var _this = this;
	
	    var l = m.label;
	    var title = null;
	
	    switch (l.type) {
	      case "label":
	        title = React.createElement(
	          "a",
	          { href: "#" },
	          React.createElement(
	            "span",
	            null,
	            l.label
	          ),
	          React.createElement("i", { className: "fa fa-angle-left pull-right" })
	        );;
	      case "menu":
	        var f = function (e) {
	          e.preventDefault();
	          e.stopPropagation();
	          window.location.href = l.path;
	          return false;
	        };
	        var iconstyle = "fa fa-circle-o";
	        if (l.selected) iconstyle += " text-aqua";
	
	        title = React.createElement(
	          "a",
	          { href: l.path },
	          React.createElement("i", { className: iconstyle }),
	          React.createElement(
	            "span",
	            { onClick: f },
	            l.label
	          ),
	          React.createElement("i", { className: "fa fa-angle-left pull-right" })
	        );
	    }
	
	    var children = m.menus.map(function (c, i) {
	      return _this.generate(c, "" + key + "_" + i);
	    });
	
	    var listyle = "";
	    var ulstyle = "treeview-menu";
	    if (m.opened) {
	      listyle = "active";
	      ulstyle += " menu-open";
	    }
	
	    return React.createElement(
	      "li",
	      { key: key, className: listyle },
	      title,
	      React.createElement(
	        "ul",
	        { className: ulstyle },
	        children
	      )
	    );
	  },
	
	  menu: function menu(m, key) {
	    var className = "";
	    var iconstyle = "fa fa-circle-o";
	
	    if (m.selected) {
	      className = "active";
	      iconstyle += " text-aqua";
	    }
	
	    return React.createElement(
	      "li",
	      { className: className, key: key },
	      React.createElement(
	        "a",
	        { href: m.path },
	        React.createElement("i", { className: iconstyle }),
	        React.createElement(
	          "span",
	          null,
	          m.label
	        )
	      )
	    );
	  },
	
	  generate: function generate(m, key) {
	    switch (m.type) {
	      case "label":
	        return this.label(m, key);
	      case "group":
	        return this.group(m, key);
	      case "menu":
	        return this.menu(m, key);
	      default:
	      //noop
	    }
	  },
	
	  menus: function menus() {
	    var _this = this;
	
	    return this.state.menus.map(function (m, i) {
	      return _this.generate(m, i);
	    });
	  },
	
	  render: function render() {
	    return (
	      // Left side column. contains the logo and sidebar -->
	      React.createElement(
	        "aside",
	        { className: "main-sidebar" },
	        React.createElement(
	          "section",
	          { className: "sidebar" },
	          React.createElement(
	            "ul",
	            { className: "sidebar-menu" },
	            this.menus()
	          )
	        )
	      )
	    );
	  } })
	
	/*

	          <!-- Sidebar user panel (optional) -->
	          <div className="user-panel">
	            <div className="pull-left image">
	              <img src="http://www.gravatar.com/avatar/f9e7f1e6a9654f137e12cf84ce14e34d.png" className="img-circle" alt="User Image"/>
	            </div>
	            <div className="pull-left info">
	              <p>yuroyoro</p>
	              <!-- Status -->
	              <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
	            </div>
	          </div>

	          <!-- search form (Optional) -->
	          <form action="#" method="get" className="sidebar-form">
	            <div className="input-group">
	              <input type="text" name="q" className="form-control" placeholder="Search..."/>
	              <span className="input-group-btn">
	                <button type='submit' name='search' id='search-btn' className="btn btn-flat"><i className="fa fa-search"></i></button>
	              </span>
	            </div>
	          </form>
	          <!-- /.search form -->
	            <li className="header">HEADER</li>
	            <!-- Optionally, you can add icons to the links -->
	            <li className="active"><a href="#"><span>Link</span></a></li>
	            <li><a href="#"><span>Another Link</span></a></li>
	            <li className="treeview">
	              <a href="#"><span>Multilevel</span> <i className="fa fa-angle-left pull-right"></i></a>
	              <ul className="treeview-menu">
	                <li><a href="#">Link in level 2</a></li>
	                <li><a href="#">Link in level 2</a></li>
	              </ul>
	            </li>
	*/
	;
	// sidebar: style can be found in sidebar.less -->
	// Sidebar Menu -->
	// /.sidebar-menu -->
	// /.sidebar -->
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! react */ 1)))

/***/ },
/* 14 */
/*!**********************************************!*\
  !*** ./js/components/ContentHeader.react.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {"use strict";
	
	module.exports = React.createClass({
	  displayName: "ContentHeader",
	
	  render: function render() {
	    return (
	      // Content Header (Page header) -->
	      React.createElement(
	        "section",
	        { className: "content-header" },
	        React.createElement(
	          "h1",
	          null,
	          "Page Header",
	          React.createElement(
	            "small",
	            null,
	            "Optional description"
	          )
	        ),
	        React.createElement(
	          "ol",
	          { className: "breadcrumb" },
	          React.createElement(
	            "li",
	            null,
	            React.createElement(
	              "a",
	              { href: "#" },
	              React.createElement("i", { className: "fa fa-dashboard" }),
	              " Level"
	            )
	          ),
	          React.createElement(
	            "li",
	            { className: "active" },
	            "Here"
	          )
	        )
	      )
	    );
	  }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! react */ 1)))

/***/ },
/* 15 */
/*!***************************************!*\
  !*** ./js/components/Footer.react.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {"use strict";
	
	module.exports = React.createClass({
	  displayName: "Footer.react",
	
	  render: function render() {
	    return (
	      // Main Footer -->
	      React.createElement(
	        "footer",
	        { className: "main-footer" },
	        React.createElement(
	          "div",
	          { className: "pull-right hidden-xs" },
	          "Anything you want"
	        ),
	        React.createElement(
	          "strong",
	          null,
	          "Copyright © 2015 ",
	          React.createElement(
	            "a",
	            { href: "#" },
	            "Company"
	          ),
	          "."
	        ),
	        " All rights reserved."
	      )
	    );
	  } });
	// To the right -->
	// Default to the left -->
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! react */ 1)))

/***/ },
/* 16 */
/*!*****************************************!*\
  !*** ./js/components/Resource.react.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var Router = _interopRequire(__webpack_require__(/*! react-router */ 26));
	
	var ResourceActions = _interopRequire(__webpack_require__(/*! actions/ResourceActions */ 9));
	
	var ResourceStore = _interopRequire(__webpack_require__(/*! stores/ResourceStore */ 49));
	
	var List = _interopRequire(__webpack_require__(/*! ./list/List.react */ 38));
	
	var RouteHandler = Router.RouteHandler;
	
	module.exports = React.createClass({
	
	  displayName: "Resource",
	
	  getInitialState: function getInitialState() {
	    return ResourceStore.getState(this.props.params.name);
	  },
	
	  componentDidMount: function componentDidMount() {
	    ResourceStore.addEventListener(this.props.params.name, this._onChange);
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    ResourceStore.removeEventListener(this.props.params.name, this._onChange);
	  },
	
	  _onChange: function _onChange() {
	    var st = ResourceStore.getState(this.props.params.name);
	    console.log("Resoruce: _onChange");
	    console.log(st);
	
	    this.setState(st);
	    // this.setState(ResourceStore.getState(this.props.params.name));
	  },
	
	  contextTypes: {
	    router: React.PropTypes.func
	  },
	
	  render: function render() {
	    console.log("resource render");
	    console.log(this.props);
	
	    var leftcol = 12;
	    var rightcol = 12;
	    var id = this.state.currentId || this.props.params.id;
	    var name = this.state.name || this.props.params.name;
	    var resource = this.state.currentResource || {};
	    var resources = this.state.resources || [];
	    var settings = this.state.settings || {};
	    var pagination = this.state.pagination || {};
	    var errors = this.state.errors || {};
	    var csrfToken = this.state.csrfToken || "";
	
	    console.log("resource = ");
	    console.log(resource);
	
	    if (resource && Object.keys(resource).length != 0) {
	      leftcol = 8;
	      rightcol = 4;
	      id = Number(id);
	    }
	
	    var attrs = {
	      name: name,
	      id: id,
	      label: settings.label,
	      settings: settings,
	      pagination: pagination,
	      errors: errors,
	      csrfToken: csrfToken };
	
	    var list_attrs = {
	      col: leftcol,
	      resources: resources
	    };
	
	    return React.createElement(
	      "div",
	      { className: "resoruce row" },
	      React.createElement(List, _extends({}, this.props, attrs, list_attrs)),
	      React.createElement(RouteHandler, _extends({}, this.props, attrs, { col: rightcol, resource: resource }))
	    );
	  }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! react */ 1)))

/***/ },
/* 17 */
/*!**********************************************!*\
  !*** ./js/components/detail/Detail.react.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var Router = _interopRequire(__webpack_require__(/*! react-router */ 26));
	
	var LinkMixin = _interopRequire(__webpack_require__(/*! components/LinkMixin */ 45));
	
	var Property = _interopRequire(__webpack_require__(/*! ./Property.react */ 39));
	
	module.exports = React.createClass({
	  displayName: "detali/Detail",
	
	  mixins: [LinkMixin, Router.Navigation],
	
	  propTypes: {
	    name: React.PropTypes.string,
	    id: React.PropTypes.number,
	    col: React.PropTypes.number,
	    resource: React.PropTypes.object.isRequired,
	    pagination: React.PropTypes.object,
	    settings: React.PropTypes.object
	  },
	
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    return !!nextProps.resource;
	  },
	
	  editLink: function editLink(resource) {
	    var name = this.props.name;
	    var id = resource.id;
	
	    console.log("editLink");
	    console.log(name);
	    console.log(resource);
	    console.log(id);
	
	    var linkAttrs = {
	      name: name,
	      id: id,
	      label: "edit",
	      page: this.props.pagination.page,
	      limit: this.props.pagination.limit,
	      order: this.props.pagination.order,
	      q: this.props.pagination.q
	    };
	
	    return this.linkToEdit(linkAttrs);
	  },
	
	  properties: function properties() {
	    var _this = this;
	
	    return this.props.settings.show.columns.map(function (col) {
	      return React.createElement(Property, { column: col, resource: _this.props.resource, settings: _this.props.settings, key: col.name });
	    });
	  },
	
	  render: function render() {
	    console.log("resource detail render");
	    var resource = this.props.resource;
	    var classes = "resource-detail";
	    classes += " col-md-" + this.props.col;
	
	    if (!resource.id) {
	      return React.createElement("div", { className: classes });
	    }
	
	    var properties = this.properties();
	
	    return React.createElement(
	      "div",
	      { className: classes },
	      React.createElement(
	        "div",
	        { className: "box box-primary" },
	        React.createElement(
	          "div",
	          { className: "box-header with-border" },
	          React.createElement(
	            "h3",
	            { className: "box-title" },
	            " Detail : ",
	            this.props.label,
	            "(id:",
	            this.props.id,
	            ")"
	          ),
	          React.createElement(
	            "div",
	            { className: "box-tools pull-right" },
	            this.editLink(resource)
	          )
	        ),
	        React.createElement(
	          "div",
	          { className: "box-body" },
	          properties
	        )
	      )
	    );
	  } });
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! react */ 1)))

/***/ },
/* 18 */
/*!******************************************!*\
  !*** ./js/components/form/Form.react.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var Router = _interopRequire(__webpack_require__(/*! react-router */ 26));
	
	var assign = _interopRequire(__webpack_require__(/*! object-assign */ 51));
	
	var ResourceActions = _interopRequire(__webpack_require__(/*! actions/ResourceActions */ 9));
	
	var ResourceStore = _interopRequire(__webpack_require__(/*! stores/ResourceStore */ 49));
	
	var Property = _interopRequire(__webpack_require__(/*! components/detail/Property.react */ 39));
	
	var Input = _interopRequire(__webpack_require__(/*! ./Input.react */ 40));
	
	var BelongsTo = _interopRequire(__webpack_require__(/*! ./BelongsTo.react */ 41));
	
	var HasOne = _interopRequire(__webpack_require__(/*! ./HasOne.react */ 42));
	
	var HasMany = _interopRequire(__webpack_require__(/*! ./HasMany.react */ 43));
	
	var Through = _interopRequire(__webpack_require__(/*! ./Through.react */ 44));
	
	var LinkMixin = _interopRequire(__webpack_require__(/*! components/LinkMixin */ 45));
	
	var Utils = _interopRequire(__webpack_require__(/*! Utils */ 37));
	
	module.exports = React.createClass({
	  displayName: "form/Form",
	
	  mixins: [LinkMixin, Router.Navigation],
	
	  propTypes: {
	    name: React.PropTypes.string,
	    id: React.PropTypes.number,
	    col: React.PropTypes.number,
	    resource: React.PropTypes.object.isRequired,
	    settings: React.PropTypes.object,
	    errors: React.PropTypes.object,
	    onsubmit: React.PropTypes.func,
	    classes: React.PropTypes.array,
	    dirty: React.PropTypes.bool,
	    csrfToken: React.PropTypes.string },
	
	  columns: function columns() {
	    var cols = null;
	    if (this.props.id) {
	      cols = this.props.settings.edit.columns;
	    } else {
	      cols = this.props.settings.create.columns;
	    }
	
	    return cols;
	  },
	
	  properties: function properties() {
	    var _this = this;
	
	    var cols = this.columns();
	
	    var resource = this.props.resource;
	    var errors = this.props.errors;
	    var errorsPresent = Utils.present(errors);
	
	    return cols.map(function (col) {
	
	      var attrs = {
	        column: col,
	        resource: _this.props.resource,
	        settings: _this.props.settings,
	        key: col.name };
	
	      if (errorsPresent) {
	        var msg = errors[col.name];
	        if (!msg && col.association) {
	          msg = errors[col.association.name];
	        }
	
	        if (msg) {
	          attrs.invalid = true;
	          attrs.errors = msg;
	        }
	      }
	
	      var TheComponent = Property;
	
	      if (col.readonly) {
	        return React.createElement(TheComponent, attrs);
	      }
	
	      // editable
	      attrs.ref = col.name;
	
	      TheComponent = Input;
	      if (col.association) {
	        var atype = col.association.type;
	        switch (atype) {
	          case "belongs_to":
	            TheComponent = BelongsTo;
	            break;
	          case "has_one":
	            TheComponent = HasOne;
	            break;
	          case "has_many":
	            TheComponent = HasMany;
	            break;
	          case "through":
	            TheComponent = Through;
	            break;
	        }
	      }
	
	      return React.createElement(TheComponent, attrs);
	    });
	  },
	
	  hasFileField: function hasFileField() {
	    return this.columns().some(function (c) {
	      return c.type == "file";
	    });
	  },
	
	  getFormData: function getFormData() {
	    var data = {};
	    var keys = Object.keys(this.refs);
	
	    for (var i = 0, len = keys.length; i < len; i++) {
	      var key = keys[i];
	      var property = this.refs[key];
	
	      if (property.isDirty()) {
	        var value = property.getFormValue();
	        assign(data, value);
	      }
	    }
	
	    if (this.props.resource.id) {
	      data.id = this.props.resource.id;
	    }
	
	    return data;
	  },
	
	  getResourceData: function getResourceData() {
	    var resource = assign({}, this.props.resource);
	    var keys = Object.keys(this.refs);
	
	    for (var i = 0, len = keys.length; i < len; i++) {
	      var key = keys[i];
	      var property = this.refs[key];
	
	      if (property.isDirty()) {
	        var value = property.getResourceValue();
	        assign(resource, value);
	      }
	    }
	
	    return resource;
	  },
	
	  isDirty: function isDirty() {
	    if (this.props.dirty) {
	      return true;
	    }var keys = Object.keys(this.refs);
	    for (var i = 0, len = keys.length; i < len; i++) {
	      var key = keys[i];
	      var property = this.refs[key];
	      if (property.isDirty()) {
	        return true;
	      }
	    }
	    return false;
	  },
	
	  handleSave: function handleSave() {
	    var dirty = this.isDirty();
	
	    if (!dirty) console.log("formdata isn't modified");
	
	    var data = this.getFormData();
	    var resource = this.getResourceData();
	    var f = this.props.onsubmit;
	
	    if (!f) {
	      if (this.props.id) {
	        f = this.update;
	      } else {
	        f = this.create;
	      }
	    }
	
	    console.log("FormData --");
	    console.log(data);
	    console.log("---");
	
	    f(resource, data, dirty);
	  },
	
	  create: function create(resource, data, dirty) {
	    var _this = this;
	
	    if (!dirty) {
	      return;
	    }var name = this.props.name;
	    var pagination = this.props.pagination;
	
	    ResourceActions.create(name, { resource: data, csrfToken: this.props.csrfToken }).then(function () {
	      var state = ResourceStore.getState(name);
	      var id = state.currentId;
	      _this.transitionToShow(name, id, pagination);
	    });
	  },
	
	  update: function update(resource, data, dirty) {
	    var _this = this;
	
	    if (!dirty) {
	      return;
	    }var name = this.props.name;
	    var id = this.props.id;
	    var pagination = this.props.pagination;
	
	    ResourceActions.update(name, id, { resource: data, csrfToken: this.props.csrfToken }).then(function () {
	      _this.transitionToShow(name, id, pagination);
	    });
	  },
	
	  render: function render() {
	    console.log("resource form render");
	    var resource = this.props.resource;
	    var classes = ["resource-form"];
	    if (this.props.col) {
	      classes.push("col-md-" + this.props.col);
	    }
	    if (this.props.classes) {
	      classes = classes.concat(this.props.classes);
	    }
	    classes = classes.join(" ");
	
	    if (!resource) {
	      return React.createElement("div", { className: classes });
	    }
	
	    console.log(resource);
	
	    var title = "New: " + this.props.label;
	    if (this.props.id) {
	      title = "Edit: " + this.props.settings.label + "(id:" + this.props.id + ")";
	    }
	
	    var properties = this.properties();
	    var onsubmit = this.props.onsubmit || this.handleSave;
	
	    return React.createElement(
	      "div",
	      { className: classes },
	      React.createElement(
	        "div",
	        { className: "box box-primary" },
	        React.createElement(
	          "div",
	          { className: "box-header with-border" },
	          React.createElement(
	            "h3",
	            { className: "box-title" },
	            " ",
	            title
	          ),
	          React.createElement(
	            "div",
	            { className: "box-tools pull-right" },
	            React.createElement(
	              "button",
	              { type: "button", className: "btn btn-flat btn-primary btn-xs", onClick: this.handleSave },
	              "save"
	            )
	          )
	        ),
	        React.createElement(
	          "div",
	          { className: "box-body" },
	          React.createElement(
	            "form",
	            null,
	            properties
	          )
	        )
	      )
	    );
	  } });
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! react */ 1)))

/***/ },
/* 19 */
/*!****************************************!*\
  !*** ./js/components/Dialogs.react.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var DialogStore = _interopRequire(__webpack_require__(/*! stores/DialogStore */ 50));
	
	var Dialog = _interopRequire(__webpack_require__(/*! ./Dialog.react */ 46));
	
	module.exports = React.createClass({
	  displayName: "Dialogs",
	
	  getInitialState: function getInitialState() {
	    return DialogStore.getAllState();
	  },
	
	  componentDidMount: function componentDidMount() {
	    DialogStore.addEventListener("*", this._onChange);
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    DialogStore.removeEventListener("*", this._onChange);
	  },
	
	  _onChange: function _onChange(e) {
	    var st = DialogStore.getAllState();
	    console.log("Dialog: _onChange");
	    console.log(st);
	
	    this.setState(st);
	    // this.setState(ResourceStore.getState(this.props.params.name));
	  },
	
	  render: function render() {
	    var _this = this;
	
	    var dialogs = Object.keys(this.state).map(function (k) {
	      return _this.state[k];
	    }).filter(function (d) {
	      return d.opened;
	    }).sort(function (d1, d2) {
	      return d1 > d2;
	    }).map(function (dialog) {
	      return React.createElement(Dialog, {
	        key: dialog.name,
	        name: dialog.name,
	        opened: dialog.opened,
	        component: dialog.component,
	        onclose: dialog.onclose,
	        index: dialog.index,
	        componentProps: dialog.props
	      });
	    });
	
	    return React.createElement(
	      "div",
	      { className: "dialogs" },
	      dialogs
	    );
	  }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! react */ 1)))

/***/ },
/* 20 */,
/* 21 */
/*!***************************************************!*\
  !*** ./bower_components/bootstrap/dist/js/npm.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	// This file is autogenerated via the `commonjs` Grunt task. You can require() this file in a CommonJS environment.
	__webpack_require__(/*! ../../js/transition.js */ 52)
	__webpack_require__(/*! ../../js/alert.js */ 53)
	__webpack_require__(/*! ../../js/button.js */ 54)
	__webpack_require__(/*! ../../js/carousel.js */ 55)
	__webpack_require__(/*! ../../js/collapse.js */ 56)
	__webpack_require__(/*! ../../js/dropdown.js */ 57)
	__webpack_require__(/*! ../../js/modal.js */ 58)
	__webpack_require__(/*! ../../js/tooltip.js */ 59)
	__webpack_require__(/*! ../../js/popover.js */ 60)
	__webpack_require__(/*! ../../js/scrollspy.js */ 61)
	__webpack_require__(/*! ../../js/tab.js */ 62)
	__webpack_require__(/*! ../../js/affix.js */ 63)

/***/ },
/* 22 */
/*!*********************!*\
  !*** ./css/app.css ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./~/css-loader?sourceMap!!./css/app.css */ 23);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./~/style-loader/addStyles.js */ 34)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/ozaki/dev/administa/node_modules/css-loader/index.js?sourceMap!!/home/ozaki/dev/administa/css/app.css", function() {
			var newContent = require("!!/home/ozaki/dev/administa/node_modules/css-loader/index.js?sourceMap!!/home/ozaki/dev/administa/css/app.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 23 */
/*!**********************************************!*\
  !*** ./~/css-loader?sourceMap!./css/app.css ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./~/css-loader/cssToString.js */ 64)();
	exports.push([module.id, ".main {\n  height: 100vh;\n  max-height: 100vh;\n  overflow-y: auto;\n}\n\n.content-wrapper{\n}\n\n/* header */\n.skin-black .main-header>.logo {\n  background-color: #0C0C0C;\n  color: #C7C7C7;\n  border-right: 1px solid #303030;\n}\n\n.skin-black .main-header>.navbar {\n  background-color: #0C0C0C;\n  border: 1px solid transparent;\n}\n\n\n.skin-black .main-header>.navbar>.sidebar-toggle {\n  color: #C7C7C7;\n  border-right: none;\n}\n\n\n.skin-black .main-header>.navbar .navbar-custom-menu .navbar-nav>li>a, .skin-black .main-header>.navbar .navbar-right>li>a {\n  border-left: none;\n  border-right-width: 0;\n}\n\n.skin-black .main-header>.navbar .nav>li>a {\n  color: #C7C7C7;\n}\n\n/* sidebar */\n.skin-black .wrapper, .skin-black .main-sidebar, .skin-black .left-side {\n  background-color: #303030;\n}\n\n.skin-black .sidebar-menu>li.header {\n  color: #CDCDCD;\n  background: #454545;\n}\n\n.skin-black .main-header>.logo:hover {\n  background: #454545;\n  color: #C7C7C7;\n}\n\n.skin-black .main-header>.navbar .nav>li>a:hover, .skin-black .main-header>.navbar .nav>li>a:active, .skin-black .main-header>.navbar .nav>li>a:focus, .skin-black .main-header>.navbar .nav .open>a, .skin-black .main-header>.navbar .nav .open>a:hover, .skin-black .main-header>.navbar .nav .open>a:focus {\n  background: #454545;\n  color: #C7C7C7;\n}\n\n.skin-black .sidebar-menu>li:hover>a, .skin-black .sidebar-menu>li.active>a {\n  color: #fff;\n  background: #1E2022;\n  border-left-color: #fff;\n}\n\n.skin-black .sidebar-menu>li>.treeview-menu {\n  margin: 0 0px;\n  padding-left: 10px;\n  background: #373B3D;\n}\n\n.skin-black .treeview-menu>li>a {\n  color: #A5ADB0;\n}\n\n\n\n\n.skin-black .sidebar-form input[type=\"text\"], .skin-black .sidebar-form .btn {\n  background-color: #373B3D;\n}\n\n.skin-black .sidebar-form {\n  border: 1px solid #474C4F;\n}\n\n\n/* form */\n.form-group .modified {\n  border-color: royalblue;\n  color: royalblue;\n}\n.form-group .invalid{\n  border-color: tomato;\n  color: tomato;\n}\n\n.form-group blockquote {\n  font-size: 14px;\n  padding: 0px 20px;\n}\n\n.form-group .input-group {\n  margin-bottom: 4px;\n}\n\n.form-control[disabled]{\n  background-color: #FAFAFA;\n}\n\n.input-group-btn .btn-default {\n  background-color: #EEEEEE;\n   border-color: #d2d6de;\n}\n\n\n/* resoource-list */\n.resource-list .box-body {\n  scroll: auto;\n}\n.resource-list .box-tools a,\n.resource-list .box-tools button{\n  margin-right : .75em;\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n\n.resource-list table tr{\n  cursor: pointer ;\n}\n\n.resource-list table th, td{\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 150px;\n }\n\n/* pagination */\n.pagination li {\n  cursor: pointer;\n}\n\n/* dialog */\n\n.dialog-base {\n  width    : 100%;\n  height   : 100%;\n  position : fixed;\n  z-index  : 10000000;\n  top      : 0;\n  left     : 0;\n  right    : 0;\n  bottom   : 0;\n  margin   : auto;\n}\n\n.dialog-base .dialog-bg {\n  background : #000000;\n  opacity    : 0.7;\n  width      : 100%;\n  height     : 100%;\n  position   : absolute;\n  top        : 0;\n}\n\n.dialog-base .dialog-body {\n  position : fixed;\n  top      : 30px;\n  left     : 0;\n  right    : 0;\n  bottom   : 0;\n  margin   : auto;\n  z-index  : 10;\n  min-width: 400px;\n  max-width: 600px;\n  overflow-y: auto;\n}\n\n/* loader */\n.loader,\n.loader:before,\n.loader:after {\n  background: #FFF;\n  -webkit-animation: load1 1s infinite ease-in-out;\n  animation: load1 1s infinite ease-in-out;\n  width: 1em;\n  height: 4em;\n}\n.loader:before,\n.loader:after {\n  position: absolute;\n  top: 0;\n  content: '';\n}\n.loader:before {\n  left: -1.5em;\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n.loader {\n  text-indent: -9999em;\n  margin: 8em auto;\n  position: relative;\n  font-size: 11px;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n.loader:after {\n  left: 1.5em;\n}\n@-webkit-keyframes load1 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 0 #FFF;\n    height: 4em;\n  }\n  40% {\n    box-shadow: 0 -2em #ffffff;\n    height: 5em;\n  }\n}\n@keyframes load1 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 0 #FFF;\n    height: 4em;\n  }\n  40% {\n    box-shadow: 0 -2em #ffffff;\n    height: 5em;\n  }\n}\n\n", "", {"version":3,"sources":["/home/ozaki/dev/administa/css/app.css"],"names":[],"mappings":"AAAA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA","file":"/home/ozaki/dev/administa/node_modules/css-loader/index.js?sourceMap!/home/ozaki/dev/administa/css/app.css","sourcesContent":[".main {\n  height: 100vh;\n  max-height: 100vh;\n  overflow-y: auto;\n}\n\n.content-wrapper{\n}\n\n/* header */\n.skin-black .main-header>.logo {\n  background-color: #0C0C0C;\n  color: #C7C7C7;\n  border-right: 1px solid #303030;\n}\n\n.skin-black .main-header>.navbar {\n  background-color: #0C0C0C;\n  border: 1px solid transparent;\n}\n\n\n.skin-black .main-header>.navbar>.sidebar-toggle {\n  color: #C7C7C7;\n  border-right: none;\n}\n\n\n.skin-black .main-header>.navbar .navbar-custom-menu .navbar-nav>li>a, .skin-black .main-header>.navbar .navbar-right>li>a {\n  border-left: none;\n  border-right-width: 0;\n}\n\n.skin-black .main-header>.navbar .nav>li>a {\n  color: #C7C7C7;\n}\n\n/* sidebar */\n.skin-black .wrapper, .skin-black .main-sidebar, .skin-black .left-side {\n  background-color: #303030;\n}\n\n.skin-black .sidebar-menu>li.header {\n  color: #CDCDCD;\n  background: #454545;\n}\n\n.skin-black .main-header>.logo:hover {\n  background: #454545;\n  color: #C7C7C7;\n}\n\n.skin-black .main-header>.navbar .nav>li>a:hover, .skin-black .main-header>.navbar .nav>li>a:active, .skin-black .main-header>.navbar .nav>li>a:focus, .skin-black .main-header>.navbar .nav .open>a, .skin-black .main-header>.navbar .nav .open>a:hover, .skin-black .main-header>.navbar .nav .open>a:focus {\n  background: #454545;\n  color: #C7C7C7;\n}\n\n.skin-black .sidebar-menu>li:hover>a, .skin-black .sidebar-menu>li.active>a {\n  color: #fff;\n  background: #1E2022;\n  border-left-color: #fff;\n}\n\n.skin-black .sidebar-menu>li>.treeview-menu {\n  margin: 0 0px;\n  padding-left: 10px;\n  background: #373B3D;\n}\n\n.skin-black .treeview-menu>li>a {\n  color: #A5ADB0;\n}\n\n\n\n\n.skin-black .sidebar-form input[type=\"text\"], .skin-black .sidebar-form .btn {\n  background-color: #373B3D;\n}\n\n.skin-black .sidebar-form {\n  border: 1px solid #474C4F;\n}\n\n\n/* form */\n.form-group .modified {\n  border-color: royalblue;\n  color: royalblue;\n}\n.form-group .invalid{\n  border-color: tomato;\n  color: tomato;\n}\n\n.form-group blockquote {\n  font-size: 14px;\n  padding: 0px 20px;\n}\n\n.form-group .input-group {\n  margin-bottom: 4px;\n}\n\n.form-control[disabled]{\n  background-color: #FAFAFA;\n}\n\n.input-group-btn .btn-default {\n  background-color: #EEEEEE;\n   border-color: #d2d6de;\n}\n\n\n/* resoource-list */\n.resource-list .box-body {\n  scroll: auto;\n}\n.resource-list .box-tools a,\n.resource-list .box-tools button{\n  margin-right : .75em;\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n\n.resource-list table tr{\n  cursor: pointer ;\n}\n\n.resource-list table th, td{\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 150px;\n }\n\n/* pagination */\n.pagination li {\n  cursor: pointer;\n}\n\n/* dialog */\n\n.dialog-base {\n  width    : 100%;\n  height   : 100%;\n  position : fixed;\n  z-index  : 10000000;\n  top      : 0;\n  left     : 0;\n  right    : 0;\n  bottom   : 0;\n  margin   : auto;\n}\n\n.dialog-base .dialog-bg {\n  background : #000000;\n  opacity    : 0.7;\n  width      : 100%;\n  height     : 100%;\n  position   : absolute;\n  top        : 0;\n}\n\n.dialog-base .dialog-body {\n  position : fixed;\n  top      : 30px;\n  left     : 0;\n  right    : 0;\n  bottom   : 0;\n  margin   : auto;\n  z-index  : 10;\n  min-width: 400px;\n  max-width: 600px;\n  overflow-y: auto;\n}\n\n/* loader */\n.loader,\n.loader:before,\n.loader:after {\n  background: #FFF;\n  -webkit-animation: load1 1s infinite ease-in-out;\n  animation: load1 1s infinite ease-in-out;\n  width: 1em;\n  height: 4em;\n}\n.loader:before,\n.loader:after {\n  position: absolute;\n  top: 0;\n  content: '';\n}\n.loader:before {\n  left: -1.5em;\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n.loader {\n  text-indent: -9999em;\n  margin: 8em auto;\n  position: relative;\n  font-size: 11px;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n.loader:after {\n  left: 1.5em;\n}\n@-webkit-keyframes load1 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 0 #FFF;\n    height: 4em;\n  }\n  40% {\n    box-shadow: 0 -2em #ffffff;\n    height: 5em;\n  }\n}\n@keyframes load1 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 0 #FFF;\n    height: 4em;\n  }\n  40% {\n    box-shadow: 0 -2em #ffffff;\n    height: 5em;\n  }\n}\n\n"]}]);

/***/ },
/* 24 */
/*!***********************************************************!*\
  !*** ./bower_components/bootstrap/dist/css/bootstrap.css ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./~/css-loader?sourceMap!!./bower_components/bootstrap/dist/css/bootstrap.css */ 25);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./~/style-loader/addStyles.js */ 34)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/ozaki/dev/administa/node_modules/css-loader/index.js?sourceMap!!/home/ozaki/dev/administa/bower_components/bootstrap/dist/css/bootstrap.css", function() {
			var newContent = require("!!/home/ozaki/dev/administa/node_modules/css-loader/index.js?sourceMap!!/home/ozaki/dev/administa/bower_components/bootstrap/dist/css/bootstrap.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 25 */
/*!************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./bower_components/bootstrap/dist/css/bootstrap.css ***!
  \************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./~/css-loader/cssToString.js */ 64)();
	exports.push([module.id, "/*!\n * Bootstrap v3.3.4 (http://getbootstrap.com)\n * Copyright 2011-2015 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n\n/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\nhtml {\n  font-family: sans-serif;\n  -webkit-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n}\nbody {\n  margin: 0;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n[hidden],\ntemplate {\n  display: none;\n}\na {\n  background-color: transparent;\n}\na:active,\na:hover {\n  outline: 0;\n}\nabbr[title] {\n  border-bottom: 1px dotted;\n}\nb,\nstrong {\n  font-weight: bold;\n}\ndfn {\n  font-style: italic;\n}\nh1 {\n  margin: .67em 0;\n  font-size: 2em;\n}\nmark {\n  color: #000;\n  background: #ff0;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsup {\n  top: -.5em;\n}\nsub {\n  bottom: -.25em;\n}\nimg {\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  height: 0;\n  -webkit-box-sizing: content-box;\n     -moz-box-sizing: content-box;\n          box-sizing: content-box;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\nbutton {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\ninput {\n  line-height: normal;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0;\n}\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-box-sizing: content-box;\n     -moz-box-sizing: content-box;\n          box-sizing: content-box;\n  -webkit-appearance: textfield;\n}\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\nfieldset {\n  padding: .35em .625em .75em;\n  margin: 0 2px;\n  border: 1px solid #c0c0c0;\n}\nlegend {\n  padding: 0;\n  border: 0;\n}\ntextarea {\n  overflow: auto;\n}\noptgroup {\n  font-weight: bold;\n}\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\ntd,\nth {\n  padding: 0;\n}\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n@media print {\n  *,\n  *:before,\n  *:after {\n    color: #000 !important;\n    text-shadow: none !important;\n    background: transparent !important;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n  }\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n  a[href]:after {\n    content: \" (\" attr(href) \")\";\n  }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\";\n  }\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\";\n  }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n\n    page-break-inside: avoid;\n  }\n  thead {\n    display: table-header-group;\n  }\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n  img {\n    max-width: 100% !important;\n  }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n  select {\n    background: #fff !important;\n  }\n  .navbar {\n    display: none;\n  }\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important;\n  }\n  .label {\n    border: 1px solid #000;\n  }\n  .table {\n    border-collapse: collapse !important;\n  }\n  .table td,\n  .table th {\n    background-color: #fff !important;\n  }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important;\n  }\n}\n@font-face {\n  font-family: 'Glyphicons Halflings';\n\n  src: url("+__webpack_require__(/*! ../fonts/glyphicons-halflings-regular.eot */ 72)+");\n  src: url("+__webpack_require__(/*! ../fonts/glyphicons-halflings-regular.eot */ 72)+"?#iefix) format('embedded-opentype'), url("+__webpack_require__(/*! ../fonts/glyphicons-halflings-regular.woff2 */ 74)+") format('woff2'), url("+__webpack_require__(/*! ../fonts/glyphicons-halflings-regular.woff */ 75)+") format('woff'), url("+__webpack_require__(/*! ../fonts/glyphicons-halflings-regular.ttf */ 76)+") format('truetype'), url("+__webpack_require__(/*! ../fonts/glyphicons-halflings-regular.svg */ 77)+"#glyphicons_halflingsregular) format('svg');\n}\n.glyphicon {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.glyphicon-asterisk:before {\n  content: \"\\2a\";\n}\n.glyphicon-plus:before {\n  content: \"\\2b\";\n}\n.glyphicon-euro:before,\n.glyphicon-eur:before {\n  content: \"\\20ac\";\n}\n.glyphicon-minus:before {\n  content: \"\\2212\";\n}\n.glyphicon-cloud:before {\n  content: \"\\2601\";\n}\n.glyphicon-envelope:before {\n  content: \"\\2709\";\n}\n.glyphicon-pencil:before {\n  content: \"\\270f\";\n}\n.glyphicon-glass:before {\n  content: \"\\e001\";\n}\n.glyphicon-music:before {\n  content: \"\\e002\";\n}\n.glyphicon-search:before {\n  content: \"\\e003\";\n}\n.glyphicon-heart:before {\n  content: \"\\e005\";\n}\n.glyphicon-star:before {\n  content: \"\\e006\";\n}\n.glyphicon-star-empty:before {\n  content: \"\\e007\";\n}\n.glyphicon-user:before {\n  content: \"\\e008\";\n}\n.glyphicon-film:before {\n  content: \"\\e009\";\n}\n.glyphicon-th-large:before {\n  content: \"\\e010\";\n}\n.glyphicon-th:before {\n  content: \"\\e011\";\n}\n.glyphicon-th-list:before {\n  content: \"\\e012\";\n}\n.glyphicon-ok:before {\n  content: \"\\e013\";\n}\n.glyphicon-remove:before {\n  content: \"\\e014\";\n}\n.glyphicon-zoom-in:before {\n  content: \"\\e015\";\n}\n.glyphicon-zoom-out:before {\n  content: \"\\e016\";\n}\n.glyphicon-off:before {\n  content: \"\\e017\";\n}\n.glyphicon-signal:before {\n  content: \"\\e018\";\n}\n.glyphicon-cog:before {\n  content: \"\\e019\";\n}\n.glyphicon-trash:before {\n  content: \"\\e020\";\n}\n.glyphicon-home:before {\n  content: \"\\e021\";\n}\n.glyphicon-file:before {\n  content: \"\\e022\";\n}\n.glyphicon-time:before {\n  content: \"\\e023\";\n}\n.glyphicon-road:before {\n  content: \"\\e024\";\n}\n.glyphicon-download-alt:before {\n  content: \"\\e025\";\n}\n.glyphicon-download:before {\n  content: \"\\e026\";\n}\n.glyphicon-upload:before {\n  content: \"\\e027\";\n}\n.glyphicon-inbox:before {\n  content: \"\\e028\";\n}\n.glyphicon-play-circle:before {\n  content: \"\\e029\";\n}\n.glyphicon-repeat:before {\n  content: \"\\e030\";\n}\n.glyphicon-refresh:before {\n  content: \"\\e031\";\n}\n.glyphicon-list-alt:before {\n  content: \"\\e032\";\n}\n.glyphicon-lock:before {\n  content: \"\\e033\";\n}\n.glyphicon-flag:before {\n  content: \"\\e034\";\n}\n.glyphicon-headphones:before {\n  content: \"\\e035\";\n}\n.glyphicon-volume-off:before {\n  content: \"\\e036\";\n}\n.glyphicon-volume-down:before {\n  content: \"\\e037\";\n}\n.glyphicon-volume-up:before {\n  content: \"\\e038\";\n}\n.glyphicon-qrcode:before {\n  content: \"\\e039\";\n}\n.glyphicon-barcode:before {\n  content: \"\\e040\";\n}\n.glyphicon-tag:before {\n  content: \"\\e041\";\n}\n.glyphicon-tags:before {\n  content: \"\\e042\";\n}\n.glyphicon-book:before {\n  content: \"\\e043\";\n}\n.glyphicon-bookmark:before {\n  content: \"\\e044\";\n}\n.glyphicon-print:before {\n  content: \"\\e045\";\n}\n.glyphicon-camera:before {\n  content: \"\\e046\";\n}\n.glyphicon-font:before {\n  content: \"\\e047\";\n}\n.glyphicon-bold:before {\n  content: \"\\e048\";\n}\n.glyphicon-italic:before {\n  content: \"\\e049\";\n}\n.glyphicon-text-height:before {\n  content: \"\\e050\";\n}\n.glyphicon-text-width:before {\n  content: \"\\e051\";\n}\n.glyphicon-align-left:before {\n  content: \"\\e052\";\n}\n.glyphicon-align-center:before {\n  content: \"\\e053\";\n}\n.glyphicon-align-right:before {\n  content: \"\\e054\";\n}\n.glyphicon-align-justify:before {\n  content: \"\\e055\";\n}\n.glyphicon-list:before {\n  content: \"\\e056\";\n}\n.glyphicon-indent-left:before {\n  content: \"\\e057\";\n}\n.glyphicon-indent-right:before {\n  content: \"\\e058\";\n}\n.glyphicon-facetime-video:before {\n  content: \"\\e059\";\n}\n.glyphicon-picture:before {\n  content: \"\\e060\";\n}\n.glyphicon-map-marker:before {\n  content: \"\\e062\";\n}\n.glyphicon-adjust:before {\n  content: \"\\e063\";\n}\n.glyphicon-tint:before {\n  content: \"\\e064\";\n}\n.glyphicon-edit:before {\n  content: \"\\e065\";\n}\n.glyphicon-share:before {\n  content: \"\\e066\";\n}\n.glyphicon-check:before {\n  content: \"\\e067\";\n}\n.glyphicon-move:before {\n  content: \"\\e068\";\n}\n.glyphicon-step-backward:before {\n  content: \"\\e069\";\n}\n.glyphicon-fast-backward:before {\n  content: \"\\e070\";\n}\n.glyphicon-backward:before {\n  content: \"\\e071\";\n}\n.glyphicon-play:before {\n  content: \"\\e072\";\n}\n.glyphicon-pause:before {\n  content: \"\\e073\";\n}\n.glyphicon-stop:before {\n  content: \"\\e074\";\n}\n.glyphicon-forward:before {\n  content: \"\\e075\";\n}\n.glyphicon-fast-forward:before {\n  content: \"\\e076\";\n}\n.glyphicon-step-forward:before {\n  content: \"\\e077\";\n}\n.glyphicon-eject:before {\n  content: \"\\e078\";\n}\n.glyphicon-chevron-left:before {\n  content: \"\\e079\";\n}\n.glyphicon-chevron-right:before {\n  content: \"\\e080\";\n}\n.glyphicon-plus-sign:before {\n  content: \"\\e081\";\n}\n.glyphicon-minus-sign:before {\n  content: \"\\e082\";\n}\n.glyphicon-remove-sign:before {\n  content: \"\\e083\";\n}\n.glyphicon-ok-sign:before {\n  content: \"\\e084\";\n}\n.glyphicon-question-sign:before {\n  content: \"\\e085\";\n}\n.glyphicon-info-sign:before {\n  content: \"\\e086\";\n}\n.glyphicon-screenshot:before {\n  content: \"\\e087\";\n}\n.glyphicon-remove-circle:before {\n  content: \"\\e088\";\n}\n.glyphicon-ok-circle:before {\n  content: \"\\e089\";\n}\n.glyphicon-ban-circle:before {\n  content: \"\\e090\";\n}\n.glyphicon-arrow-left:before {\n  content: \"\\e091\";\n}\n.glyphicon-arrow-right:before {\n  content: \"\\e092\";\n}\n.glyphicon-arrow-up:before {\n  content: \"\\e093\";\n}\n.glyphicon-arrow-down:before {\n  content: \"\\e094\";\n}\n.glyphicon-share-alt:before {\n  content: \"\\e095\";\n}\n.glyphicon-resize-full:before {\n  content: \"\\e096\";\n}\n.glyphicon-resize-small:before {\n  content: \"\\e097\";\n}\n.glyphicon-exclamation-sign:before {\n  content: \"\\e101\";\n}\n.glyphicon-gift:before {\n  content: \"\\e102\";\n}\n.glyphicon-leaf:before {\n  content: \"\\e103\";\n}\n.glyphicon-fire:before {\n  content: \"\\e104\";\n}\n.glyphicon-eye-open:before {\n  content: \"\\e105\";\n}\n.glyphicon-eye-close:before {\n  content: \"\\e106\";\n}\n.glyphicon-warning-sign:before {\n  content: \"\\e107\";\n}\n.glyphicon-plane:before {\n  content: \"\\e108\";\n}\n.glyphicon-calendar:before {\n  content: \"\\e109\";\n}\n.glyphicon-random:before {\n  content: \"\\e110\";\n}\n.glyphicon-comment:before {\n  content: \"\\e111\";\n}\n.glyphicon-magnet:before {\n  content: \"\\e112\";\n}\n.glyphicon-chevron-up:before {\n  content: \"\\e113\";\n}\n.glyphicon-chevron-down:before {\n  content: \"\\e114\";\n}\n.glyphicon-retweet:before {\n  content: \"\\e115\";\n}\n.glyphicon-shopping-cart:before {\n  content: \"\\e116\";\n}\n.glyphicon-folder-close:before {\n  content: \"\\e117\";\n}\n.glyphicon-folder-open:before {\n  content: \"\\e118\";\n}\n.glyphicon-resize-vertical:before {\n  content: \"\\e119\";\n}\n.glyphicon-resize-horizontal:before {\n  content: \"\\e120\";\n}\n.glyphicon-hdd:before {\n  content: \"\\e121\";\n}\n.glyphicon-bullhorn:before {\n  content: \"\\e122\";\n}\n.glyphicon-bell:before {\n  content: \"\\e123\";\n}\n.glyphicon-certificate:before {\n  content: \"\\e124\";\n}\n.glyphicon-thumbs-up:before {\n  content: \"\\e125\";\n}\n.glyphicon-thumbs-down:before {\n  content: \"\\e126\";\n}\n.glyphicon-hand-right:before {\n  content: \"\\e127\";\n}\n.glyphicon-hand-left:before {\n  content: \"\\e128\";\n}\n.glyphicon-hand-up:before {\n  content: \"\\e129\";\n}\n.glyphicon-hand-down:before {\n  content: \"\\e130\";\n}\n.glyphicon-circle-arrow-right:before {\n  content: \"\\e131\";\n}\n.glyphicon-circle-arrow-left:before {\n  content: \"\\e132\";\n}\n.glyphicon-circle-arrow-up:before {\n  content: \"\\e133\";\n}\n.glyphicon-circle-arrow-down:before {\n  content: \"\\e134\";\n}\n.glyphicon-globe:before {\n  content: \"\\e135\";\n}\n.glyphicon-wrench:before {\n  content: \"\\e136\";\n}\n.glyphicon-tasks:before {\n  content: \"\\e137\";\n}\n.glyphicon-filter:before {\n  content: \"\\e138\";\n}\n.glyphicon-briefcase:before {\n  content: \"\\e139\";\n}\n.glyphicon-fullscreen:before {\n  content: \"\\e140\";\n}\n.glyphicon-dashboard:before {\n  content: \"\\e141\";\n}\n.glyphicon-paperclip:before {\n  content: \"\\e142\";\n}\n.glyphicon-heart-empty:before {\n  content: \"\\e143\";\n}\n.glyphicon-link:before {\n  content: \"\\e144\";\n}\n.glyphicon-phone:before {\n  content: \"\\e145\";\n}\n.glyphicon-pushpin:before {\n  content: \"\\e146\";\n}\n.glyphicon-usd:before {\n  content: \"\\e148\";\n}\n.glyphicon-gbp:before {\n  content: \"\\e149\";\n}\n.glyphicon-sort:before {\n  content: \"\\e150\";\n}\n.glyphicon-sort-by-alphabet:before {\n  content: \"\\e151\";\n}\n.glyphicon-sort-by-alphabet-alt:before {\n  content: \"\\e152\";\n}\n.glyphicon-sort-by-order:before {\n  content: \"\\e153\";\n}\n.glyphicon-sort-by-order-alt:before {\n  content: \"\\e154\";\n}\n.glyphicon-sort-by-attributes:before {\n  content: \"\\e155\";\n}\n.glyphicon-sort-by-attributes-alt:before {\n  content: \"\\e156\";\n}\n.glyphicon-unchecked:before {\n  content: \"\\e157\";\n}\n.glyphicon-expand:before {\n  content: \"\\e158\";\n}\n.glyphicon-collapse-down:before {\n  content: \"\\e159\";\n}\n.glyphicon-collapse-up:before {\n  content: \"\\e160\";\n}\n.glyphicon-log-in:before {\n  content: \"\\e161\";\n}\n.glyphicon-flash:before {\n  content: \"\\e162\";\n}\n.glyphicon-log-out:before {\n  content: \"\\e163\";\n}\n.glyphicon-new-window:before {\n  content: \"\\e164\";\n}\n.glyphicon-record:before {\n  content: \"\\e165\";\n}\n.glyphicon-save:before {\n  content: \"\\e166\";\n}\n.glyphicon-open:before {\n  content: \"\\e167\";\n}\n.glyphicon-saved:before {\n  content: \"\\e168\";\n}\n.glyphicon-import:before {\n  content: \"\\e169\";\n}\n.glyphicon-export:before {\n  content: \"\\e170\";\n}\n.glyphicon-send:before {\n  content: \"\\e171\";\n}\n.glyphicon-floppy-disk:before {\n  content: \"\\e172\";\n}\n.glyphicon-floppy-saved:before {\n  content: \"\\e173\";\n}\n.glyphicon-floppy-remove:before {\n  content: \"\\e174\";\n}\n.glyphicon-floppy-save:before {\n  content: \"\\e175\";\n}\n.glyphicon-floppy-open:before {\n  content: \"\\e176\";\n}\n.glyphicon-credit-card:before {\n  content: \"\\e177\";\n}\n.glyphicon-transfer:before {\n  content: \"\\e178\";\n}\n.glyphicon-cutlery:before {\n  content: \"\\e179\";\n}\n.glyphicon-header:before {\n  content: \"\\e180\";\n}\n.glyphicon-compressed:before {\n  content: \"\\e181\";\n}\n.glyphicon-earphone:before {\n  content: \"\\e182\";\n}\n.glyphicon-phone-alt:before {\n  content: \"\\e183\";\n}\n.glyphicon-tower:before {\n  content: \"\\e184\";\n}\n.glyphicon-stats:before {\n  content: \"\\e185\";\n}\n.glyphicon-sd-video:before {\n  content: \"\\e186\";\n}\n.glyphicon-hd-video:before {\n  content: \"\\e187\";\n}\n.glyphicon-subtitles:before {\n  content: \"\\e188\";\n}\n.glyphicon-sound-stereo:before {\n  content: \"\\e189\";\n}\n.glyphicon-sound-dolby:before {\n  content: \"\\e190\";\n}\n.glyphicon-sound-5-1:before {\n  content: \"\\e191\";\n}\n.glyphicon-sound-6-1:before {\n  content: \"\\e192\";\n}\n.glyphicon-sound-7-1:before {\n  content: \"\\e193\";\n}\n.glyphicon-copyright-mark:before {\n  content: \"\\e194\";\n}\n.glyphicon-registration-mark:before {\n  content: \"\\e195\";\n}\n.glyphicon-cloud-download:before {\n  content: \"\\e197\";\n}\n.glyphicon-cloud-upload:before {\n  content: \"\\e198\";\n}\n.glyphicon-tree-conifer:before {\n  content: \"\\e199\";\n}\n.glyphicon-tree-deciduous:before {\n  content: \"\\e200\";\n}\n.glyphicon-cd:before {\n  content: \"\\e201\";\n}\n.glyphicon-save-file:before {\n  content: \"\\e202\";\n}\n.glyphicon-open-file:before {\n  content: \"\\e203\";\n}\n.glyphicon-level-up:before {\n  content: \"\\e204\";\n}\n.glyphicon-copy:before {\n  content: \"\\e205\";\n}\n.glyphicon-paste:before {\n  content: \"\\e206\";\n}\n.glyphicon-alert:before {\n  content: \"\\e209\";\n}\n.glyphicon-equalizer:before {\n  content: \"\\e210\";\n}\n.glyphicon-king:before {\n  content: \"\\e211\";\n}\n.glyphicon-queen:before {\n  content: \"\\e212\";\n}\n.glyphicon-pawn:before {\n  content: \"\\e213\";\n}\n.glyphicon-bishop:before {\n  content: \"\\e214\";\n}\n.glyphicon-knight:before {\n  content: \"\\e215\";\n}\n.glyphicon-baby-formula:before {\n  content: \"\\e216\";\n}\n.glyphicon-tent:before {\n  content: \"\\26fa\";\n}\n.glyphicon-blackboard:before {\n  content: \"\\e218\";\n}\n.glyphicon-bed:before {\n  content: \"\\e219\";\n}\n.glyphicon-apple:before {\n  content: \"\\f8ff\";\n}\n.glyphicon-erase:before {\n  content: \"\\e221\";\n}\n.glyphicon-hourglass:before {\n  content: \"\\231b\";\n}\n.glyphicon-lamp:before {\n  content: \"\\e223\";\n}\n.glyphicon-duplicate:before {\n  content: \"\\e224\";\n}\n.glyphicon-piggy-bank:before {\n  content: \"\\e225\";\n}\n.glyphicon-scissors:before {\n  content: \"\\e226\";\n}\n.glyphicon-bitcoin:before {\n  content: \"\\e227\";\n}\n.glyphicon-btc:before {\n  content: \"\\e227\";\n}\n.glyphicon-xbt:before {\n  content: \"\\e227\";\n}\n.glyphicon-yen:before {\n  content: \"\\00a5\";\n}\n.glyphicon-jpy:before {\n  content: \"\\00a5\";\n}\n.glyphicon-ruble:before {\n  content: \"\\20bd\";\n}\n.glyphicon-rub:before {\n  content: \"\\20bd\";\n}\n.glyphicon-scale:before {\n  content: \"\\e230\";\n}\n.glyphicon-ice-lolly:before {\n  content: \"\\e231\";\n}\n.glyphicon-ice-lolly-tasted:before {\n  content: \"\\e232\";\n}\n.glyphicon-education:before {\n  content: \"\\e233\";\n}\n.glyphicon-option-horizontal:before {\n  content: \"\\e234\";\n}\n.glyphicon-option-vertical:before {\n  content: \"\\e235\";\n}\n.glyphicon-menu-hamburger:before {\n  content: \"\\e236\";\n}\n.glyphicon-modal-window:before {\n  content: \"\\e237\";\n}\n.glyphicon-oil:before {\n  content: \"\\e238\";\n}\n.glyphicon-grain:before {\n  content: \"\\e239\";\n}\n.glyphicon-sunglasses:before {\n  content: \"\\e240\";\n}\n.glyphicon-text-size:before {\n  content: \"\\e241\";\n}\n.glyphicon-text-color:before {\n  content: \"\\e242\";\n}\n.glyphicon-text-background:before {\n  content: \"\\e243\";\n}\n.glyphicon-object-align-top:before {\n  content: \"\\e244\";\n}\n.glyphicon-object-align-bottom:before {\n  content: \"\\e245\";\n}\n.glyphicon-object-align-horizontal:before {\n  content: \"\\e246\";\n}\n.glyphicon-object-align-left:before {\n  content: \"\\e247\";\n}\n.glyphicon-object-align-vertical:before {\n  content: \"\\e248\";\n}\n.glyphicon-object-align-right:before {\n  content: \"\\e249\";\n}\n.glyphicon-triangle-right:before {\n  content: \"\\e250\";\n}\n.glyphicon-triangle-left:before {\n  content: \"\\e251\";\n}\n.glyphicon-triangle-bottom:before {\n  content: \"\\e252\";\n}\n.glyphicon-triangle-top:before {\n  content: \"\\e253\";\n}\n.glyphicon-console:before {\n  content: \"\\e254\";\n}\n.glyphicon-superscript:before {\n  content: \"\\e255\";\n}\n.glyphicon-subscript:before {\n  content: \"\\e256\";\n}\n.glyphicon-menu-left:before {\n  content: \"\\e257\";\n}\n.glyphicon-menu-right:before {\n  content: \"\\e258\";\n}\n.glyphicon-menu-down:before {\n  content: \"\\e259\";\n}\n.glyphicon-menu-up:before {\n  content: \"\\e260\";\n}\n* {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\nhtml {\n  font-size: 10px;\n\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #333;\n  background-color: #fff;\n}\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\na {\n  color: #337ab7;\n  text-decoration: none;\n}\na:hover,\na:focus {\n  color: #23527c;\n  text-decoration: underline;\n}\na:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\nfigure {\n  margin: 0;\n}\nimg {\n  vertical-align: middle;\n}\n.img-responsive,\n.thumbnail > img,\n.thumbnail a > img,\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n.img-rounded {\n  border-radius: 6px;\n}\n.img-thumbnail {\n  display: inline-block;\n  max-width: 100%;\n  height: auto;\n  padding: 4px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: all .2s ease-in-out;\n       -o-transition: all .2s ease-in-out;\n          transition: all .2s ease-in-out;\n}\n.img-circle {\n  border-radius: 50%;\n}\nhr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eee;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n[role=\"button\"] {\n  cursor: pointer;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n}\nh1 small,\nh2 small,\nh3 small,\nh4 small,\nh5 small,\nh6 small,\n.h1 small,\n.h2 small,\n.h3 small,\n.h4 small,\n.h5 small,\n.h6 small,\nh1 .small,\nh2 .small,\nh3 .small,\nh4 .small,\nh5 .small,\nh6 .small,\n.h1 .small,\n.h2 .small,\n.h3 .small,\n.h4 .small,\n.h5 .small,\n.h6 .small {\n  font-weight: normal;\n  line-height: 1;\n  color: #777;\n}\nh1,\n.h1,\nh2,\n.h2,\nh3,\n.h3 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\nh1 small,\n.h1 small,\nh2 small,\n.h2 small,\nh3 small,\n.h3 small,\nh1 .small,\n.h1 .small,\nh2 .small,\n.h2 .small,\nh3 .small,\n.h3 .small {\n  font-size: 65%;\n}\nh4,\n.h4,\nh5,\n.h5,\nh6,\n.h6 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\nh4 small,\n.h4 small,\nh5 small,\n.h5 small,\nh6 small,\n.h6 small,\nh4 .small,\n.h4 .small,\nh5 .small,\n.h5 .small,\nh6 .small,\n.h6 .small {\n  font-size: 75%;\n}\nh1,\n.h1 {\n  font-size: 36px;\n}\nh2,\n.h2 {\n  font-size: 30px;\n}\nh3,\n.h3 {\n  font-size: 24px;\n}\nh4,\n.h4 {\n  font-size: 18px;\n}\nh5,\n.h5 {\n  font-size: 14px;\n}\nh6,\n.h6 {\n  font-size: 12px;\n}\np {\n  margin: 0 0 10px;\n}\n.lead {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4;\n}\n@media (min-width: 768px) {\n  .lead {\n    font-size: 21px;\n  }\n}\nsmall,\n.small {\n  font-size: 85%;\n}\nmark,\n.mark {\n  padding: .2em;\n  background-color: #fcf8e3;\n}\n.text-left {\n  text-align: left;\n}\n.text-right {\n  text-align: right;\n}\n.text-center {\n  text-align: center;\n}\n.text-justify {\n  text-align: justify;\n}\n.text-nowrap {\n  white-space: nowrap;\n}\n.text-lowercase {\n  text-transform: lowercase;\n}\n.text-uppercase {\n  text-transform: uppercase;\n}\n.text-capitalize {\n  text-transform: capitalize;\n}\n.text-muted {\n  color: #777;\n}\n.text-primary {\n  color: #337ab7;\n}\na.text-primary:hover {\n  color: #286090;\n}\n.text-success {\n  color: #3c763d;\n}\na.text-success:hover {\n  color: #2b542c;\n}\n.text-info {\n  color: #31708f;\n}\na.text-info:hover {\n  color: #245269;\n}\n.text-warning {\n  color: #8a6d3b;\n}\na.text-warning:hover {\n  color: #66512c;\n}\n.text-danger {\n  color: #a94442;\n}\na.text-danger:hover {\n  color: #843534;\n}\n.bg-primary {\n  color: #fff;\n  background-color: #337ab7;\n}\na.bg-primary:hover {\n  background-color: #286090;\n}\n.bg-success {\n  background-color: #dff0d8;\n}\na.bg-success:hover {\n  background-color: #c1e2b3;\n}\n.bg-info {\n  background-color: #d9edf7;\n}\na.bg-info:hover {\n  background-color: #afd9ee;\n}\n.bg-warning {\n  background-color: #fcf8e3;\n}\na.bg-warning:hover {\n  background-color: #f7ecb5;\n}\n.bg-danger {\n  background-color: #f2dede;\n}\na.bg-danger:hover {\n  background-color: #e4b9b9;\n}\n.page-header {\n  padding-bottom: 9px;\n  margin: 40px 0 20px;\n  border-bottom: 1px solid #eee;\n}\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\nul ul,\nol ul,\nul ol,\nol ol {\n  margin-bottom: 0;\n}\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline {\n  padding-left: 0;\n  margin-left: -5px;\n  list-style: none;\n}\n.list-inline > li {\n  display: inline-block;\n  padding-right: 5px;\n  padding-left: 5px;\n}\ndl {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\ndt,\ndd {\n  line-height: 1.42857143;\n}\ndt {\n  font-weight: bold;\n}\ndd {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    overflow: hidden;\n    clear: left;\n    text-align: right;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .dl-horizontal dd {\n    margin-left: 180px;\n  }\n}\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #777;\n}\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase;\n}\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eee;\n}\nblockquote p:last-child,\nblockquote ul:last-child,\nblockquote ol:last-child {\n  margin-bottom: 0;\n}\nblockquote footer,\nblockquote small,\nblockquote .small {\n  display: block;\n  font-size: 80%;\n  line-height: 1.42857143;\n  color: #777;\n}\nblockquote footer:before,\nblockquote small:before,\nblockquote .small:before {\n  content: '\\2014 \\00A0';\n}\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  text-align: right;\n  border-right: 5px solid #eee;\n  border-left: 0;\n}\n.blockquote-reverse footer:before,\nblockquote.pull-right footer:before,\n.blockquote-reverse small:before,\nblockquote.pull-right small:before,\n.blockquote-reverse .small:before,\nblockquote.pull-right .small:before {\n  content: '';\n}\n.blockquote-reverse footer:after,\nblockquote.pull-right footer:after,\n.blockquote-reverse small:after,\nblockquote.pull-right small:after,\n.blockquote-reverse .small:after,\nblockquote.pull-right .small:after {\n  content: '\\00A0 \\2014';\n}\naddress {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857143;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px;\n}\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);\n          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);\n}\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: bold;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  color: #333;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\npre code {\n  padding: 0;\n  font-size: inherit;\n  color: inherit;\n  white-space: pre-wrap;\n  background-color: transparent;\n  border-radius: 0;\n}\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n.container {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n.container-fluid {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n.row {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n.col-xs-12 {\n  width: 100%;\n}\n.col-xs-11 {\n  width: 91.66666667%;\n}\n.col-xs-10 {\n  width: 83.33333333%;\n}\n.col-xs-9 {\n  width: 75%;\n}\n.col-xs-8 {\n  width: 66.66666667%;\n}\n.col-xs-7 {\n  width: 58.33333333%;\n}\n.col-xs-6 {\n  width: 50%;\n}\n.col-xs-5 {\n  width: 41.66666667%;\n}\n.col-xs-4 {\n  width: 33.33333333%;\n}\n.col-xs-3 {\n  width: 25%;\n}\n.col-xs-2 {\n  width: 16.66666667%;\n}\n.col-xs-1 {\n  width: 8.33333333%;\n}\n.col-xs-pull-12 {\n  right: 100%;\n}\n.col-xs-pull-11 {\n  right: 91.66666667%;\n}\n.col-xs-pull-10 {\n  right: 83.33333333%;\n}\n.col-xs-pull-9 {\n  right: 75%;\n}\n.col-xs-pull-8 {\n  right: 66.66666667%;\n}\n.col-xs-pull-7 {\n  right: 58.33333333%;\n}\n.col-xs-pull-6 {\n  right: 50%;\n}\n.col-xs-pull-5 {\n  right: 41.66666667%;\n}\n.col-xs-pull-4 {\n  right: 33.33333333%;\n}\n.col-xs-pull-3 {\n  right: 25%;\n}\n.col-xs-pull-2 {\n  right: 16.66666667%;\n}\n.col-xs-pull-1 {\n  right: 8.33333333%;\n}\n.col-xs-pull-0 {\n  right: auto;\n}\n.col-xs-push-12 {\n  left: 100%;\n}\n.col-xs-push-11 {\n  left: 91.66666667%;\n}\n.col-xs-push-10 {\n  left: 83.33333333%;\n}\n.col-xs-push-9 {\n  left: 75%;\n}\n.col-xs-push-8 {\n  left: 66.66666667%;\n}\n.col-xs-push-7 {\n  left: 58.33333333%;\n}\n.col-xs-push-6 {\n  left: 50%;\n}\n.col-xs-push-5 {\n  left: 41.66666667%;\n}\n.col-xs-push-4 {\n  left: 33.33333333%;\n}\n.col-xs-push-3 {\n  left: 25%;\n}\n.col-xs-push-2 {\n  left: 16.66666667%;\n}\n.col-xs-push-1 {\n  left: 8.33333333%;\n}\n.col-xs-push-0 {\n  left: auto;\n}\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n.col-xs-offset-11 {\n  margin-left: 91.66666667%;\n}\n.col-xs-offset-10 {\n  margin-left: 83.33333333%;\n}\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n.col-xs-offset-8 {\n  margin-left: 66.66666667%;\n}\n.col-xs-offset-7 {\n  margin-left: 58.33333333%;\n}\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n.col-xs-offset-5 {\n  margin-left: 41.66666667%;\n}\n.col-xs-offset-4 {\n  margin-left: 33.33333333%;\n}\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n.col-xs-offset-2 {\n  margin-left: 16.66666667%;\n}\n.col-xs-offset-1 {\n  margin-left: 8.33333333%;\n}\n.col-xs-offset-0 {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left;\n  }\n  .col-sm-12 {\n    width: 100%;\n  }\n  .col-sm-11 {\n    width: 91.66666667%;\n  }\n  .col-sm-10 {\n    width: 83.33333333%;\n  }\n  .col-sm-9 {\n    width: 75%;\n  }\n  .col-sm-8 {\n    width: 66.66666667%;\n  }\n  .col-sm-7 {\n    width: 58.33333333%;\n  }\n  .col-sm-6 {\n    width: 50%;\n  }\n  .col-sm-5 {\n    width: 41.66666667%;\n  }\n  .col-sm-4 {\n    width: 33.33333333%;\n  }\n  .col-sm-3 {\n    width: 25%;\n  }\n  .col-sm-2 {\n    width: 16.66666667%;\n  }\n  .col-sm-1 {\n    width: 8.33333333%;\n  }\n  .col-sm-pull-12 {\n    right: 100%;\n  }\n  .col-sm-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-sm-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-sm-pull-9 {\n    right: 75%;\n  }\n  .col-sm-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-sm-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-sm-pull-6 {\n    right: 50%;\n  }\n  .col-sm-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-sm-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-sm-pull-3 {\n    right: 25%;\n  }\n  .col-sm-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-sm-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-sm-pull-0 {\n    right: auto;\n  }\n  .col-sm-push-12 {\n    left: 100%;\n  }\n  .col-sm-push-11 {\n    left: 91.66666667%;\n  }\n  .col-sm-push-10 {\n    left: 83.33333333%;\n  }\n  .col-sm-push-9 {\n    left: 75%;\n  }\n  .col-sm-push-8 {\n    left: 66.66666667%;\n  }\n  .col-sm-push-7 {\n    left: 58.33333333%;\n  }\n  .col-sm-push-6 {\n    left: 50%;\n  }\n  .col-sm-push-5 {\n    left: 41.66666667%;\n  }\n  .col-sm-push-4 {\n    left: 33.33333333%;\n  }\n  .col-sm-push-3 {\n    left: 25%;\n  }\n  .col-sm-push-2 {\n    left: 16.66666667%;\n  }\n  .col-sm-push-1 {\n    left: 8.33333333%;\n  }\n  .col-sm-push-0 {\n    left: auto;\n  }\n  .col-sm-offset-12 {\n    margin-left: 100%;\n  }\n  .col-sm-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-sm-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n  .col-sm-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-sm-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n  .col-sm-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-sm-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n  .col-sm-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-sm-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-sm-offset-0 {\n    margin-left: 0;\n  }\n}\n@media (min-width: 992px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left;\n  }\n  .col-md-12 {\n    width: 100%;\n  }\n  .col-md-11 {\n    width: 91.66666667%;\n  }\n  .col-md-10 {\n    width: 83.33333333%;\n  }\n  .col-md-9 {\n    width: 75%;\n  }\n  .col-md-8 {\n    width: 66.66666667%;\n  }\n  .col-md-7 {\n    width: 58.33333333%;\n  }\n  .col-md-6 {\n    width: 50%;\n  }\n  .col-md-5 {\n    width: 41.66666667%;\n  }\n  .col-md-4 {\n    width: 33.33333333%;\n  }\n  .col-md-3 {\n    width: 25%;\n  }\n  .col-md-2 {\n    width: 16.66666667%;\n  }\n  .col-md-1 {\n    width: 8.33333333%;\n  }\n  .col-md-pull-12 {\n    right: 100%;\n  }\n  .col-md-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-md-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-md-pull-9 {\n    right: 75%;\n  }\n  .col-md-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-md-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-md-pull-6 {\n    right: 50%;\n  }\n  .col-md-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-md-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-md-pull-3 {\n    right: 25%;\n  }\n  .col-md-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-md-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-md-pull-0 {\n    right: auto;\n  }\n  .col-md-push-12 {\n    left: 100%;\n  }\n  .col-md-push-11 {\n    left: 91.66666667%;\n  }\n  .col-md-push-10 {\n    left: 83.33333333%;\n  }\n  .col-md-push-9 {\n    left: 75%;\n  }\n  .col-md-push-8 {\n    left: 66.66666667%;\n  }\n  .col-md-push-7 {\n    left: 58.33333333%;\n  }\n  .col-md-push-6 {\n    left: 50%;\n  }\n  .col-md-push-5 {\n    left: 41.66666667%;\n  }\n  .col-md-push-4 {\n    left: 33.33333333%;\n  }\n  .col-md-push-3 {\n    left: 25%;\n  }\n  .col-md-push-2 {\n    left: 16.66666667%;\n  }\n  .col-md-push-1 {\n    left: 8.33333333%;\n  }\n  .col-md-push-0 {\n    left: auto;\n  }\n  .col-md-offset-12 {\n    margin-left: 100%;\n  }\n  .col-md-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-md-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n  .col-md-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-md-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n  .col-md-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-md-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n  .col-md-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-md-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-md-offset-0 {\n    margin-left: 0;\n  }\n}\n@media (min-width: 1200px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left;\n  }\n  .col-lg-12 {\n    width: 100%;\n  }\n  .col-lg-11 {\n    width: 91.66666667%;\n  }\n  .col-lg-10 {\n    width: 83.33333333%;\n  }\n  .col-lg-9 {\n    width: 75%;\n  }\n  .col-lg-8 {\n    width: 66.66666667%;\n  }\n  .col-lg-7 {\n    width: 58.33333333%;\n  }\n  .col-lg-6 {\n    width: 50%;\n  }\n  .col-lg-5 {\n    width: 41.66666667%;\n  }\n  .col-lg-4 {\n    width: 33.33333333%;\n  }\n  .col-lg-3 {\n    width: 25%;\n  }\n  .col-lg-2 {\n    width: 16.66666667%;\n  }\n  .col-lg-1 {\n    width: 8.33333333%;\n  }\n  .col-lg-pull-12 {\n    right: 100%;\n  }\n  .col-lg-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-lg-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-lg-pull-9 {\n    right: 75%;\n  }\n  .col-lg-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-lg-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-lg-pull-6 {\n    right: 50%;\n  }\n  .col-lg-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-lg-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-lg-pull-3 {\n    right: 25%;\n  }\n  .col-lg-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-lg-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-lg-pull-0 {\n    right: auto;\n  }\n  .col-lg-push-12 {\n    left: 100%;\n  }\n  .col-lg-push-11 {\n    left: 91.66666667%;\n  }\n  .col-lg-push-10 {\n    left: 83.33333333%;\n  }\n  .col-lg-push-9 {\n    left: 75%;\n  }\n  .col-lg-push-8 {\n    left: 66.66666667%;\n  }\n  .col-lg-push-7 {\n    left: 58.33333333%;\n  }\n  .col-lg-push-6 {\n    left: 50%;\n  }\n  .col-lg-push-5 {\n    left: 41.66666667%;\n  }\n  .col-lg-push-4 {\n    left: 33.33333333%;\n  }\n  .col-lg-push-3 {\n    left: 25%;\n  }\n  .col-lg-push-2 {\n    left: 16.66666667%;\n  }\n  .col-lg-push-1 {\n    left: 8.33333333%;\n  }\n  .col-lg-push-0 {\n    left: auto;\n  }\n  .col-lg-offset-12 {\n    margin-left: 100%;\n  }\n  .col-lg-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-lg-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n  .col-lg-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-lg-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n  .col-lg-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-lg-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n  .col-lg-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-lg-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-lg-offset-0 {\n    margin-left: 0;\n  }\n}\ntable {\n  background-color: transparent;\n}\ncaption {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #777;\n  text-align: left;\n}\nth {\n  text-align: left;\n}\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n.table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #ddd;\n}\n.table > caption + thead > tr:first-child > th,\n.table > colgroup + thead > tr:first-child > th,\n.table > thead:first-child > tr:first-child > th,\n.table > caption + thead > tr:first-child > td,\n.table > colgroup + thead > tr:first-child > td,\n.table > thead:first-child > tr:first-child > td {\n  border-top: 0;\n}\n.table > tbody + tbody {\n  border-top: 2px solid #ddd;\n}\n.table .table {\n  background-color: #fff;\n}\n.table-condensed > thead > tr > th,\n.table-condensed > tbody > tr > th,\n.table-condensed > tfoot > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > td {\n  padding: 5px;\n}\n.table-bordered {\n  border: 1px solid #ddd;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #ddd;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td {\n  border-bottom-width: 2px;\n}\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9;\n}\n.table-hover > tbody > tr:hover {\n  background-color: #f5f5f5;\n}\ntable col[class*=\"col-\"] {\n  position: static;\n  display: table-column;\n  float: none;\n}\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  display: table-cell;\n  float: none;\n}\n.table > thead > tr > td.active,\n.table > tbody > tr > td.active,\n.table > tfoot > tr > td.active,\n.table > thead > tr > th.active,\n.table > tbody > tr > th.active,\n.table > tfoot > tr > th.active,\n.table > thead > tr.active > td,\n.table > tbody > tr.active > td,\n.table > tfoot > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr.active > th,\n.table > tfoot > tr.active > th {\n  background-color: #f5f5f5;\n}\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #e8e8e8;\n}\n.table > thead > tr > td.success,\n.table > tbody > tr > td.success,\n.table > tfoot > tr > td.success,\n.table > thead > tr > th.success,\n.table > tbody > tr > th.success,\n.table > tfoot > tr > th.success,\n.table > thead > tr.success > td,\n.table > tbody > tr.success > td,\n.table > tfoot > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr.success > th,\n.table > tfoot > tr.success > th {\n  background-color: #dff0d8;\n}\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #d0e9c6;\n}\n.table > thead > tr > td.info,\n.table > tbody > tr > td.info,\n.table > tfoot > tr > td.info,\n.table > thead > tr > th.info,\n.table > tbody > tr > th.info,\n.table > tfoot > tr > th.info,\n.table > thead > tr.info > td,\n.table > tbody > tr.info > td,\n.table > tfoot > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr.info > th,\n.table > tfoot > tr.info > th {\n  background-color: #d9edf7;\n}\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #c4e3f3;\n}\n.table > thead > tr > td.warning,\n.table > tbody > tr > td.warning,\n.table > tfoot > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > tbody > tr > th.warning,\n.table > tfoot > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > tbody > tr.warning > td,\n.table > tfoot > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr.warning > th {\n  background-color: #fcf8e3;\n}\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #faf2cc;\n}\n.table > thead > tr > td.danger,\n.table > tbody > tr > td.danger,\n.table > tfoot > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > tbody > tr > th.danger,\n.table > tfoot > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > tbody > tr.danger > td,\n.table > tfoot > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr.danger > th {\n  background-color: #f2dede;\n}\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #ebcccc;\n}\n.table-responsive {\n  min-height: .01%;\n  overflow-x: auto;\n}\n@media screen and (max-width: 767px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    border: 1px solid #ddd;\n  }\n  .table-responsive > .table {\n    margin-bottom: 0;\n  }\n  .table-responsive > .table > thead > tr > th,\n  .table-responsive > .table > tbody > tr > th,\n  .table-responsive > .table > tfoot > tr > th,\n  .table-responsive > .table > thead > tr > td,\n  .table-responsive > .table > tbody > tr > td,\n  .table-responsive > .table > tfoot > tr > td {\n    white-space: nowrap;\n  }\n  .table-responsive > .table-bordered {\n    border: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0;\n  }\n  .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n  .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n    border-bottom: 0;\n  }\n}\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5;\n}\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\ninput[type=\"search\"] {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal;\n}\ninput[type=\"file\"] {\n  display: block;\n}\ninput[type=\"range\"] {\n  display: block;\n  width: 100%;\n}\nselect[multiple],\nselect[size] {\n  height: auto;\n}\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n}\n.form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;\n       -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n          transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);\n          box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);\n}\n.form-control::-moz-placeholder {\n  color: #999;\n  opacity: 1;\n}\n.form-control:-ms-input-placeholder {\n  color: #999;\n}\n.form-control::-webkit-input-placeholder {\n  color: #999;\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: #eee;\n  opacity: 1;\n}\n.form-control[disabled],\nfieldset[disabled] .form-control {\n  cursor: not-allowed;\n}\ntextarea.form-control {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-appearance: none;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"],\n  input[type=\"time\"],\n  input[type=\"datetime-local\"],\n  input[type=\"month\"] {\n    line-height: 34px;\n  }\n  input[type=\"date\"].input-sm,\n  input[type=\"time\"].input-sm,\n  input[type=\"datetime-local\"].input-sm,\n  input[type=\"month\"].input-sm,\n  .input-group-sm input[type=\"date\"],\n  .input-group-sm input[type=\"time\"],\n  .input-group-sm input[type=\"datetime-local\"],\n  .input-group-sm input[type=\"month\"] {\n    line-height: 30px;\n  }\n  input[type=\"date\"].input-lg,\n  input[type=\"time\"].input-lg,\n  input[type=\"datetime-local\"].input-lg,\n  input[type=\"month\"].input-lg,\n  .input-group-lg input[type=\"date\"],\n  .input-group-lg input[type=\"time\"],\n  .input-group-lg input[type=\"datetime-local\"],\n  .input-group-lg input[type=\"month\"] {\n    line-height: 46px;\n  }\n}\n.form-group {\n  margin-bottom: 15px;\n}\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.radio label,\n.checkbox label {\n  min-height: 20px;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  cursor: pointer;\n}\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-top: 4px \\9;\n  margin-left: -20px;\n}\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px;\n}\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px;\n}\ninput[type=\"radio\"][disabled],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"radio\"].disabled,\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\nfieldset[disabled] input[type=\"checkbox\"] {\n  cursor: not-allowed;\n}\n.radio-inline.disabled,\n.checkbox-inline.disabled,\nfieldset[disabled] .radio-inline,\nfieldset[disabled] .checkbox-inline {\n  cursor: not-allowed;\n}\n.radio.disabled label,\n.checkbox.disabled label,\nfieldset[disabled] .radio label,\nfieldset[disabled] .checkbox label {\n  cursor: not-allowed;\n}\n.form-control-static {\n  min-height: 34px;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-bottom: 0;\n}\n.form-control-static.input-lg,\n.form-control-static.input-sm {\n  padding-right: 0;\n  padding-left: 0;\n}\n.input-sm {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\nselect.input-sm {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.input-sm,\nselect[multiple].input-sm {\n  height: auto;\n}\n.form-group-sm .form-control {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\nselect.form-group-sm .form-control {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.form-group-sm .form-control,\nselect[multiple].form-group-sm .form-control {\n  height: auto;\n}\n.form-group-sm .form-control-static {\n  height: 30px;\n  min-height: 32px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.input-lg {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\nselect.input-lg {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.input-lg,\nselect[multiple].input-lg {\n  height: auto;\n}\n.form-group-lg .form-control {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\nselect.form-group-lg .form-control {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.form-group-lg .form-control,\nselect[multiple].form-group-lg .form-control {\n  height: auto;\n}\n.form-group-lg .form-control-static {\n  height: 46px;\n  min-height: 38px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n.has-feedback {\n  position: relative;\n}\n.has-feedback .form-control {\n  padding-right: 42.5px;\n}\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none;\n}\n.input-lg + .form-control-feedback {\n  width: 46px;\n  height: 46px;\n  line-height: 46px;\n}\n.input-sm + .form-control-feedback {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n}\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #3c763d;\n}\n.has-success .form-control {\n  border-color: #3c763d;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-success .form-control:focus {\n  border-color: #2b542c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;\n}\n.has-success .input-group-addon {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #3c763d;\n}\n.has-success .form-control-feedback {\n  color: #3c763d;\n}\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #8a6d3b;\n}\n.has-warning .form-control {\n  border-color: #8a6d3b;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-warning .form-control:focus {\n  border-color: #66512c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;\n}\n.has-warning .input-group-addon {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #8a6d3b;\n}\n.has-warning .form-control-feedback {\n  color: #8a6d3b;\n}\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n  color: #a94442;\n}\n.has-error .form-control {\n  border-color: #a94442;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-error .form-control:focus {\n  border-color: #843534;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;\n}\n.has-error .input-group-addon {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #a94442;\n}\n.has-error .form-control-feedback {\n  color: #a94442;\n}\n.has-feedback label ~ .form-control-feedback {\n  top: 25px;\n}\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0;\n}\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #737373;\n}\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .form-inline .form-control-static {\n    display: inline-block;\n  }\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .form-inline .input-group .input-group-addon,\n  .form-inline .input-group .input-group-btn,\n  .form-inline .input-group .form-control {\n    width: auto;\n  }\n  .form-inline .input-group > .form-control {\n    width: 100%;\n  }\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .radio label,\n  .form-inline .checkbox label {\n    padding-left: 0;\n  }\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  padding-top: 7px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 27px;\n}\n.form-horizontal .form-group {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    padding-top: 7px;\n    margin-bottom: 0;\n    text-align: right;\n  }\n}\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 14.333333px;\n  }\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n  }\n}\n.btn {\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.btn:focus,\n.btn:active:focus,\n.btn.active:focus,\n.btn.focus,\n.btn:active.focus,\n.btn.active.focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n.btn:hover,\n.btn:focus,\n.btn.focus {\n  color: #333;\n  text-decoration: none;\n}\n.btn:active,\n.btn.active {\n  background-image: none;\n  outline: 0;\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n}\n.btn.disabled,\n.btn[disabled],\nfieldset[disabled] .btn {\n  pointer-events: none;\n  cursor: not-allowed;\n  filter: alpha(opacity=65);\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  opacity: .65;\n}\n.btn-default {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc;\n}\n.btn-default:hover,\n.btn-default:focus,\n.btn-default.focus,\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  background-image: none;\n}\n.btn-default.disabled,\n.btn-default[disabled],\nfieldset[disabled] .btn-default,\n.btn-default.disabled:hover,\n.btn-default[disabled]:hover,\nfieldset[disabled] .btn-default:hover,\n.btn-default.disabled:focus,\n.btn-default[disabled]:focus,\nfieldset[disabled] .btn-default:focus,\n.btn-default.disabled.focus,\n.btn-default[disabled].focus,\nfieldset[disabled] .btn-default.focus,\n.btn-default.disabled:active,\n.btn-default[disabled]:active,\nfieldset[disabled] .btn-default:active,\n.btn-default.disabled.active,\n.btn-default[disabled].active,\nfieldset[disabled] .btn-default.active {\n  background-color: #fff;\n  border-color: #ccc;\n}\n.btn-default .badge {\n  color: #fff;\n  background-color: #333;\n}\n.btn-primary {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary.focus,\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n  background-image: none;\n}\n.btn-primary.disabled,\n.btn-primary[disabled],\nfieldset[disabled] .btn-primary,\n.btn-primary.disabled:hover,\n.btn-primary[disabled]:hover,\nfieldset[disabled] .btn-primary:hover,\n.btn-primary.disabled:focus,\n.btn-primary[disabled]:focus,\nfieldset[disabled] .btn-primary:focus,\n.btn-primary.disabled.focus,\n.btn-primary[disabled].focus,\nfieldset[disabled] .btn-primary.focus,\n.btn-primary.disabled:active,\n.btn-primary[disabled]:active,\nfieldset[disabled] .btn-primary:active,\n.btn-primary.disabled.active,\n.btn-primary[disabled].active,\nfieldset[disabled] .btn-primary.active {\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n.btn-primary .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.btn-success {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n.btn-success:hover,\n.btn-success:focus,\n.btn-success.focus,\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n  background-image: none;\n}\n.btn-success.disabled,\n.btn-success[disabled],\nfieldset[disabled] .btn-success,\n.btn-success.disabled:hover,\n.btn-success[disabled]:hover,\nfieldset[disabled] .btn-success:hover,\n.btn-success.disabled:focus,\n.btn-success[disabled]:focus,\nfieldset[disabled] .btn-success:focus,\n.btn-success.disabled.focus,\n.btn-success[disabled].focus,\nfieldset[disabled] .btn-success.focus,\n.btn-success.disabled:active,\n.btn-success[disabled]:active,\nfieldset[disabled] .btn-success:active,\n.btn-success.disabled.active,\n.btn-success[disabled].active,\nfieldset[disabled] .btn-success.active {\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n.btn-success .badge {\n  color: #5cb85c;\n  background-color: #fff;\n}\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n.btn-info:hover,\n.btn-info:focus,\n.btn-info.focus,\n.btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n.btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n  background-image: none;\n}\n.btn-info.disabled,\n.btn-info[disabled],\nfieldset[disabled] .btn-info,\n.btn-info.disabled:hover,\n.btn-info[disabled]:hover,\nfieldset[disabled] .btn-info:hover,\n.btn-info.disabled:focus,\n.btn-info[disabled]:focus,\nfieldset[disabled] .btn-info:focus,\n.btn-info.disabled.focus,\n.btn-info[disabled].focus,\nfieldset[disabled] .btn-info.focus,\n.btn-info.disabled:active,\n.btn-info[disabled]:active,\nfieldset[disabled] .btn-info:active,\n.btn-info.disabled.active,\n.btn-info[disabled].active,\nfieldset[disabled] .btn-info.active {\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n.btn-info .badge {\n  color: #5bc0de;\n  background-color: #fff;\n}\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n.btn-warning:hover,\n.btn-warning:focus,\n.btn-warning.focus,\n.btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n.btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n  background-image: none;\n}\n.btn-warning.disabled,\n.btn-warning[disabled],\nfieldset[disabled] .btn-warning,\n.btn-warning.disabled:hover,\n.btn-warning[disabled]:hover,\nfieldset[disabled] .btn-warning:hover,\n.btn-warning.disabled:focus,\n.btn-warning[disabled]:focus,\nfieldset[disabled] .btn-warning:focus,\n.btn-warning.disabled.focus,\n.btn-warning[disabled].focus,\nfieldset[disabled] .btn-warning.focus,\n.btn-warning.disabled:active,\n.btn-warning[disabled]:active,\nfieldset[disabled] .btn-warning:active,\n.btn-warning.disabled.active,\n.btn-warning[disabled].active,\nfieldset[disabled] .btn-warning.active {\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n.btn-warning .badge {\n  color: #f0ad4e;\n  background-color: #fff;\n}\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n.btn-danger:hover,\n.btn-danger:focus,\n.btn-danger.focus,\n.btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n.btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n  background-image: none;\n}\n.btn-danger.disabled,\n.btn-danger[disabled],\nfieldset[disabled] .btn-danger,\n.btn-danger.disabled:hover,\n.btn-danger[disabled]:hover,\nfieldset[disabled] .btn-danger:hover,\n.btn-danger.disabled:focus,\n.btn-danger[disabled]:focus,\nfieldset[disabled] .btn-danger:focus,\n.btn-danger.disabled.focus,\n.btn-danger[disabled].focus,\nfieldset[disabled] .btn-danger.focus,\n.btn-danger.disabled:active,\n.btn-danger[disabled]:active,\nfieldset[disabled] .btn-danger:active,\n.btn-danger.disabled.active,\n.btn-danger[disabled].active,\nfieldset[disabled] .btn-danger.active {\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n.btn-danger .badge {\n  color: #d9534f;\n  background-color: #fff;\n}\n.btn-link {\n  font-weight: normal;\n  color: #337ab7;\n  border-radius: 0;\n}\n.btn-link,\n.btn-link:active,\n.btn-link.active,\n.btn-link[disabled],\nfieldset[disabled] .btn-link {\n  background-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.btn-link,\n.btn-link:hover,\n.btn-link:focus,\n.btn-link:active {\n  border-color: transparent;\n}\n.btn-link:hover,\n.btn-link:focus {\n  color: #23527c;\n  text-decoration: underline;\n  background-color: transparent;\n}\n.btn-link[disabled]:hover,\nfieldset[disabled] .btn-link:hover,\n.btn-link[disabled]:focus,\nfieldset[disabled] .btn-link:focus {\n  color: #777;\n  text-decoration: none;\n}\n.btn-lg,\n.btn-group-lg > .btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\n.btn-sm,\n.btn-group-sm > .btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.btn-xs,\n.btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.btn-block {\n  display: block;\n  width: 100%;\n}\n.btn-block + .btn-block {\n  margin-top: 5px;\n}\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity .15s linear;\n       -o-transition: opacity .15s linear;\n          transition: opacity .15s linear;\n}\n.fade.in {\n  opacity: 1;\n}\n.collapse {\n  display: none;\n}\n.collapse.in {\n  display: block;\n}\ntr.collapse.in {\n  display: table-row;\n}\ntbody.collapse.in {\n  display: table-row-group;\n}\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-timing-function: ease;\n       -o-transition-timing-function: ease;\n          transition-timing-function: ease;\n  -webkit-transition-duration: .35s;\n       -o-transition-duration: .35s;\n          transition-duration: .35s;\n  -webkit-transition-property: height, visibility;\n       -o-transition-property: height, visibility;\n          transition-property: height, visibility;\n}\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n.dropup,\n.dropdown {\n  position: relative;\n}\n.dropdown-toggle:focus {\n  outline: 0;\n}\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  font-size: 14px;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, .15);\n  border-radius: 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n          box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n}\n.dropdown-menu.pull-right {\n  right: 0;\n  left: auto;\n}\n.dropdown-menu .divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.dropdown-menu > li > a {\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: normal;\n  line-height: 1.42857143;\n  color: #333;\n  white-space: nowrap;\n}\n.dropdown-menu > li > a:hover,\n.dropdown-menu > li > a:focus {\n  color: #262626;\n  text-decoration: none;\n  background-color: #f5f5f5;\n}\n.dropdown-menu > .active > a,\n.dropdown-menu > .active > a:hover,\n.dropdown-menu > .active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  background-color: #337ab7;\n  outline: 0;\n}\n.dropdown-menu > .disabled > a,\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  color: #777;\n}\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  cursor: not-allowed;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n}\n.open > .dropdown-menu {\n  display: block;\n}\n.open > a {\n  outline: 0;\n}\n.dropdown-menu-right {\n  right: 0;\n  left: auto;\n}\n.dropdown-menu-left {\n  right: auto;\n  left: 0;\n}\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 12px;\n  line-height: 1.42857143;\n  color: #777;\n  white-space: nowrap;\n}\n.dropdown-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 990;\n}\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto;\n}\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  content: \"\";\n  border-top: 0;\n  border-bottom: 4px solid;\n}\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px;\n}\n@media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    right: 0;\n    left: auto;\n  }\n  .navbar-right .dropdown-menu-left {\n    right: auto;\n    left: 0;\n  }\n}\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  float: left;\n}\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover,\n.btn-group > .btn:focus,\n.btn-group-vertical > .btn:focus,\n.btn-group > .btn:active,\n.btn-group-vertical > .btn:active,\n.btn-group > .btn.active,\n.btn-group-vertical > .btn.active {\n  z-index: 2;\n}\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px;\n}\n.btn-toolbar {\n  margin-left: -5px;\n}\n.btn-toolbar .btn-group,\n.btn-toolbar .input-group {\n  float: left;\n}\n.btn-toolbar > .btn,\n.btn-toolbar > .btn-group,\n.btn-toolbar > .input-group {\n  margin-left: 5px;\n}\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n.btn-group > .btn:first-child {\n  margin-left: 0;\n}\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group > .btn-group {\n  float: left;\n}\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n}\n.btn-group > .btn + .dropdown-toggle {\n  padding-right: 8px;\n  padding-left: 8px;\n}\n.btn-group > .btn-lg + .dropdown-toggle {\n  padding-right: 12px;\n  padding-left: 12px;\n}\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n}\n.btn-group.open .dropdown-toggle.btn-link {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.btn .caret {\n  margin-left: 0;\n}\n.btn-lg .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0;\n}\n.dropup .btn-lg .caret {\n  border-width: 0 5px 5px;\n}\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%;\n}\n.btn-group-vertical > .btn-group > .btn {\n  float: none;\n}\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0;\n}\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 4px;\n}\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n}\n.btn-group-justified > .btn,\n.btn-group-justified > .btn-group {\n  display: table-cell;\n  float: none;\n  width: 1%;\n}\n.btn-group-justified > .btn-group .btn {\n  width: 100%;\n}\n.btn-group-justified > .btn-group .dropdown-menu {\n  left: auto;\n}\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate;\n}\n.input-group[class*=\"col-\"] {\n  float: none;\n  padding-right: 0;\n  padding-left: 0;\n}\n.input-group .form-control {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n}\n.input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\nselect.input-group-lg > .form-control,\nselect.input-group-lg > .input-group-addon,\nselect.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.input-group-lg > .form-control,\ntextarea.input-group-lg > .input-group-addon,\ntextarea.input-group-lg > .input-group-btn > .btn,\nselect[multiple].input-group-lg > .form-control,\nselect[multiple].input-group-lg > .input-group-addon,\nselect[multiple].input-group-lg > .input-group-btn > .btn {\n  height: auto;\n}\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\nselect.input-group-sm > .form-control,\nselect.input-group-sm > .input-group-addon,\nselect.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.input-group-sm > .form-control,\ntextarea.input-group-sm > .input-group-addon,\ntextarea.input-group-sm > .input-group-btn > .btn,\nselect[multiple].input-group-sm > .form-control,\nselect[multiple].input-group-sm > .input-group-addon,\nselect[multiple].input-group-sm > .input-group-btn > .btn {\n  height: auto;\n}\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell;\n}\n.input-group-addon:not(:first-child):not(:last-child),\n.input-group-btn:not(:first-child):not(:last-child),\n.input-group .form-control:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n.input-group-addon {\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1;\n  color: #555;\n  text-align: center;\n  background-color: #eee;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n.input-group-addon.input-sm {\n  padding: 5px 10px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n.input-group-addon.input-lg {\n  padding: 10px 16px;\n  font-size: 18px;\n  border-radius: 6px;\n}\n.input-group-addon input[type=\"radio\"],\n.input-group-addon input[type=\"checkbox\"] {\n  margin-top: 0;\n}\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group-addon:first-child {\n  border-right: 0;\n}\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.input-group-addon:last-child {\n  border-left: 0;\n}\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap;\n}\n.input-group-btn > .btn {\n  position: relative;\n}\n.input-group-btn > .btn + .btn {\n  margin-left: -1px;\n}\n.input-group-btn > .btn:hover,\n.input-group-btn > .btn:focus,\n.input-group-btn > .btn:active {\n  z-index: 2;\n}\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group {\n  margin-right: -1px;\n}\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group {\n  margin-left: -1px;\n}\n.nav {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.nav > li {\n  position: relative;\n  display: block;\n}\n.nav > li > a {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n}\n.nav > li > a:hover,\n.nav > li > a:focus {\n  text-decoration: none;\n  background-color: #eee;\n}\n.nav > li.disabled > a {\n  color: #777;\n}\n.nav > li.disabled > a:hover,\n.nav > li.disabled > a:focus {\n  color: #777;\n  text-decoration: none;\n  cursor: not-allowed;\n  background-color: transparent;\n}\n.nav .open > a,\n.nav .open > a:hover,\n.nav .open > a:focus {\n  background-color: #eee;\n  border-color: #337ab7;\n}\n.nav .nav-divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.nav > li > a > img {\n  max-width: none;\n}\n.nav-tabs {\n  border-bottom: 1px solid #ddd;\n}\n.nav-tabs > li {\n  float: left;\n  margin-bottom: -1px;\n}\n.nav-tabs > li > a {\n  margin-right: 2px;\n  line-height: 1.42857143;\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0;\n}\n.nav-tabs > li > a:hover {\n  border-color: #eee #eee #ddd;\n}\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:hover,\n.nav-tabs > li.active > a:focus {\n  color: #555;\n  cursor: default;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-bottom-color: transparent;\n}\n.nav-tabs.nav-justified {\n  width: 100%;\n  border-bottom: 0;\n}\n.nav-tabs.nav-justified > li {\n  float: none;\n}\n.nav-tabs.nav-justified > li > a {\n  margin-bottom: 5px;\n  text-align: center;\n}\n.nav-tabs.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-tabs.nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n.nav-tabs.nav-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n.nav-tabs.nav-justified > .active > a,\n.nav-tabs.nav-justified > .active > a:hover,\n.nav-tabs.nav-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n  .nav-tabs.nav-justified > .active > a,\n  .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs.nav-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n.nav-pills > li {\n  float: left;\n}\n.nav-pills > li > a {\n  border-radius: 4px;\n}\n.nav-pills > li + li {\n  margin-left: 2px;\n}\n.nav-pills > li.active > a,\n.nav-pills > li.active > a:hover,\n.nav-pills > li.active > a:focus {\n  color: #fff;\n  background-color: #337ab7;\n}\n.nav-stacked > li {\n  float: none;\n}\n.nav-stacked > li + li {\n  margin-top: 2px;\n  margin-left: 0;\n}\n.nav-justified {\n  width: 100%;\n}\n.nav-justified > li {\n  float: none;\n}\n.nav-justified > li > a {\n  margin-bottom: 5px;\n  text-align: center;\n}\n.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n@media (min-width: 768px) {\n  .nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n.nav-tabs-justified {\n  border-bottom: 0;\n}\n.nav-tabs-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n.nav-tabs-justified > .active > a,\n.nav-tabs-justified > .active > a:hover,\n.nav-tabs-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n@media (min-width: 768px) {\n  .nav-tabs-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n  .nav-tabs-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n.tab-content > .tab-pane {\n  display: none;\n}\n.tab-content > .active {\n  display: block;\n}\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.navbar {\n  position: relative;\n  min-height: 50px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n}\n@media (min-width: 768px) {\n  .navbar {\n    border-radius: 4px;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-header {\n    float: left;\n  }\n}\n.navbar-collapse {\n  padding-right: 15px;\n  padding-left: 15px;\n  overflow-x: visible;\n  -webkit-overflow-scrolling: touch;\n  border-top: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);\n          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);\n}\n.navbar-collapse.in {\n  overflow-y: auto;\n}\n@media (min-width: 768px) {\n  .navbar-collapse {\n    width: auto;\n    border-top: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n  .navbar-collapse.collapse {\n    display: block !important;\n    height: auto !important;\n    padding-bottom: 0;\n    overflow: visible !important;\n  }\n  .navbar-collapse.in {\n    overflow-y: visible;\n  }\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-static-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n.navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n  max-height: 340px;\n}\n@media (max-device-width: 480px) and (orientation: landscape) {\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    max-height: 200px;\n  }\n}\n.container > .navbar-header,\n.container-fluid > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n@media (min-width: 768px) {\n  .container > .navbar-header,\n  .container-fluid > .navbar-header,\n  .container > .navbar-collapse,\n  .container-fluid > .navbar-collapse {\n    margin-right: 0;\n    margin-left: 0;\n  }\n}\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px;\n}\n@media (min-width: 768px) {\n  .navbar-static-top {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n@media (min-width: 768px) {\n  .navbar-fixed-top,\n  .navbar-fixed-bottom {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px;\n}\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0;\n}\n.navbar-brand {\n  float: left;\n  height: 50px;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px;\n}\n.navbar-brand:hover,\n.navbar-brand:focus {\n  text-decoration: none;\n}\n.navbar-brand > img {\n  display: block;\n}\n@media (min-width: 768px) {\n  .navbar > .container .navbar-brand,\n  .navbar > .container-fluid .navbar-brand {\n    margin-left: -15px;\n  }\n}\n.navbar-toggle {\n  position: relative;\n  float: right;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-right: 15px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.navbar-toggle:focus {\n  outline: 0;\n}\n.navbar-toggle .icon-bar {\n  display: block;\n  width: 22px;\n  height: 2px;\n  border-radius: 1px;\n}\n.navbar-toggle .icon-bar + .icon-bar {\n  margin-top: 4px;\n}\n@media (min-width: 768px) {\n  .navbar-toggle {\n    display: none;\n  }\n}\n.navbar-nav {\n  margin: 7.5px -15px;\n}\n.navbar-nav > li > a {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  line-height: 20px;\n}\n@media (max-width: 767px) {\n  .navbar-nav .open .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n  .navbar-nav .open .dropdown-menu > li > a,\n  .navbar-nav .open .dropdown-menu .dropdown-header {\n    padding: 5px 15px 5px 25px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a {\n    line-height: 20px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-nav .open .dropdown-menu > li > a:focus {\n    background-image: none;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-nav {\n    float: left;\n    margin: 0;\n  }\n  .navbar-nav > li {\n    float: left;\n  }\n  .navbar-nav > li > a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n}\n.navbar-form {\n  padding: 10px 15px;\n  margin-top: 8px;\n  margin-right: -15px;\n  margin-bottom: 8px;\n  margin-left: -15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);\n          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);\n}\n@media (min-width: 768px) {\n  .navbar-form .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .navbar-form .form-control-static {\n    display: inline-block;\n  }\n  .navbar-form .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .navbar-form .input-group .input-group-addon,\n  .navbar-form .input-group .input-group-btn,\n  .navbar-form .input-group .form-control {\n    width: auto;\n  }\n  .navbar-form .input-group > .form-control {\n    width: 100%;\n  }\n  .navbar-form .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .radio,\n  .navbar-form .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .radio label,\n  .navbar-form .checkbox label {\n    padding-left: 0;\n  }\n  .navbar-form .radio input[type=\"radio\"],\n  .navbar-form .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n  .navbar-form .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n@media (max-width: 767px) {\n  .navbar-form .form-group {\n    margin-bottom: 5px;\n  }\n  .navbar-form .form-group:last-child {\n    margin-bottom: 0;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-form {\n    width: auto;\n    padding-top: 0;\n    padding-bottom: 0;\n    margin-right: 0;\n    margin-left: 0;\n    border: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n}\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.navbar-btn {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n.navbar-btn.btn-sm {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.navbar-btn.btn-xs {\n  margin-top: 14px;\n  margin-bottom: 14px;\n}\n.navbar-text {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n@media (min-width: 768px) {\n  .navbar-text {\n    float: left;\n    margin-right: 15px;\n    margin-left: 15px;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-left {\n    float: left !important;\n  }\n  .navbar-right {\n    float: right !important;\n    margin-right: -15px;\n  }\n  .navbar-right ~ .navbar-right {\n    margin-right: 0;\n  }\n}\n.navbar-default {\n  background-color: #f8f8f8;\n  border-color: #e7e7e7;\n}\n.navbar-default .navbar-brand {\n  color: #777;\n}\n.navbar-default .navbar-brand:hover,\n.navbar-default .navbar-brand:focus {\n  color: #5e5e5e;\n  background-color: transparent;\n}\n.navbar-default .navbar-text {\n  color: #777;\n}\n.navbar-default .navbar-nav > li > a {\n  color: #777;\n}\n.navbar-default .navbar-nav > li > a:hover,\n.navbar-default .navbar-nav > li > a:focus {\n  color: #333;\n  background-color: transparent;\n}\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n  color: #555;\n  background-color: #e7e7e7;\n}\n.navbar-default .navbar-nav > .disabled > a,\n.navbar-default .navbar-nav > .disabled > a:hover,\n.navbar-default .navbar-nav > .disabled > a:focus {\n  color: #ccc;\n  background-color: transparent;\n}\n.navbar-default .navbar-toggle {\n  border-color: #ddd;\n}\n.navbar-default .navbar-toggle:hover,\n.navbar-default .navbar-toggle:focus {\n  background-color: #ddd;\n}\n.navbar-default .navbar-toggle .icon-bar {\n  background-color: #888;\n}\n.navbar-default .navbar-collapse,\n.navbar-default .navbar-form {\n  border-color: #e7e7e7;\n}\n.navbar-default .navbar-nav > .open > a,\n.navbar-default .navbar-nav > .open > a:hover,\n.navbar-default .navbar-nav > .open > a:focus {\n  color: #555;\n  background-color: #e7e7e7;\n}\n@media (max-width: 767px) {\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n    color: #777;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #333;\n    background-color: transparent;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #555;\n    background-color: #e7e7e7;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent;\n  }\n}\n.navbar-default .navbar-link {\n  color: #777;\n}\n.navbar-default .navbar-link:hover {\n  color: #333;\n}\n.navbar-default .btn-link {\n  color: #777;\n}\n.navbar-default .btn-link:hover,\n.navbar-default .btn-link:focus {\n  color: #333;\n}\n.navbar-default .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-default .btn-link:hover,\n.navbar-default .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-default .btn-link:focus {\n  color: #ccc;\n}\n.navbar-inverse {\n  background-color: #222;\n  border-color: #080808;\n}\n.navbar-inverse .navbar-brand {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-brand:hover,\n.navbar-inverse .navbar-brand:focus {\n  color: #fff;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-text {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-nav > li > a {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-nav > li > a:hover,\n.navbar-inverse .navbar-nav > li > a:focus {\n  color: #fff;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-nav > .active > a,\n.navbar-inverse .navbar-nav > .active > a:hover,\n.navbar-inverse .navbar-nav > .active > a:focus {\n  color: #fff;\n  background-color: #080808;\n}\n.navbar-inverse .navbar-nav > .disabled > a,\n.navbar-inverse .navbar-nav > .disabled > a:hover,\n.navbar-inverse .navbar-nav > .disabled > a:focus {\n  color: #444;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-toggle {\n  border-color: #333;\n}\n.navbar-inverse .navbar-toggle:hover,\n.navbar-inverse .navbar-toggle:focus {\n  background-color: #333;\n}\n.navbar-inverse .navbar-toggle .icon-bar {\n  background-color: #fff;\n}\n.navbar-inverse .navbar-collapse,\n.navbar-inverse .navbar-form {\n  border-color: #101010;\n}\n.navbar-inverse .navbar-nav > .open > a,\n.navbar-inverse .navbar-nav > .open > a:hover,\n.navbar-inverse .navbar-nav > .open > a:focus {\n  color: #fff;\n  background-color: #080808;\n}\n@media (max-width: 767px) {\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n    border-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n    background-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n    color: #9d9d9d;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #fff;\n    background-color: transparent;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #fff;\n    background-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #444;\n    background-color: transparent;\n  }\n}\n.navbar-inverse .navbar-link {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-link:hover {\n  color: #fff;\n}\n.navbar-inverse .btn-link {\n  color: #9d9d9d;\n}\n.navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link:focus {\n  color: #fff;\n}\n.navbar-inverse .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-inverse .btn-link:focus {\n  color: #444;\n}\n.breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n.breadcrumb > li {\n  display: inline-block;\n}\n.breadcrumb > li + li:before {\n  padding: 0 5px;\n  color: #ccc;\n  content: \"/\\00a0\";\n}\n.breadcrumb > .active {\n  color: #777;\n}\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.pagination > li {\n  display: inline;\n}\n.pagination > li > a,\n.pagination > li > span {\n  position: relative;\n  float: left;\n  padding: 6px 12px;\n  margin-left: -1px;\n  line-height: 1.42857143;\n  color: #337ab7;\n  text-decoration: none;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n.pagination > li:first-child > a,\n.pagination > li:first-child > span {\n  margin-left: 0;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.pagination > li:last-child > a,\n.pagination > li:last-child > span {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.pagination > li > a:hover,\n.pagination > li > span:hover,\n.pagination > li > a:focus,\n.pagination > li > span:focus {\n  color: #23527c;\n  background-color: #eee;\n  border-color: #ddd;\n}\n.pagination > .active > a,\n.pagination > .active > span,\n.pagination > .active > a:hover,\n.pagination > .active > span:hover,\n.pagination > .active > a:focus,\n.pagination > .active > span:focus {\n  z-index: 2;\n  color: #fff;\n  cursor: default;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.pagination > .disabled > span,\n.pagination > .disabled > span:hover,\n.pagination > .disabled > span:focus,\n.pagination > .disabled > a,\n.pagination > .disabled > a:hover,\n.pagination > .disabled > a:focus {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #fff;\n  border-color: #ddd;\n}\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 10px 16px;\n  font-size: 18px;\n}\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 5px 10px;\n  font-size: 12px;\n}\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n.pager {\n  padding-left: 0;\n  margin: 20px 0;\n  text-align: center;\n  list-style: none;\n}\n.pager li {\n  display: inline;\n}\n.pager li > a,\n.pager li > span {\n  display: inline-block;\n  padding: 5px 14px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n}\n.pager li > a:hover,\n.pager li > a:focus {\n  text-decoration: none;\n  background-color: #eee;\n}\n.pager .next > a,\n.pager .next > span {\n  float: right;\n}\n.pager .previous > a,\n.pager .previous > span {\n  float: left;\n}\n.pager .disabled > a,\n.pager .disabled > a:hover,\n.pager .disabled > a:focus,\n.pager .disabled > span {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #fff;\n}\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n}\na.label:hover,\na.label:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.label:empty {\n  display: none;\n}\n.btn .label {\n  position: relative;\n  top: -1px;\n}\n.label-default {\n  background-color: #777;\n}\n.label-default[href]:hover,\n.label-default[href]:focus {\n  background-color: #5e5e5e;\n}\n.label-primary {\n  background-color: #337ab7;\n}\n.label-primary[href]:hover,\n.label-primary[href]:focus {\n  background-color: #286090;\n}\n.label-success {\n  background-color: #5cb85c;\n}\n.label-success[href]:hover,\n.label-success[href]:focus {\n  background-color: #449d44;\n}\n.label-info {\n  background-color: #5bc0de;\n}\n.label-info[href]:hover,\n.label-info[href]:focus {\n  background-color: #31b0d5;\n}\n.label-warning {\n  background-color: #f0ad4e;\n}\n.label-warning[href]:hover,\n.label-warning[href]:focus {\n  background-color: #ec971f;\n}\n.label-danger {\n  background-color: #d9534f;\n}\n.label-danger[href]:hover,\n.label-danger[href]:focus {\n  background-color: #c9302c;\n}\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  background-color: #777;\n  border-radius: 10px;\n}\n.badge:empty {\n  display: none;\n}\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n.btn-xs .badge,\n.btn-group-xs > .btn .badge {\n  top: 0;\n  padding: 1px 5px;\n}\na.badge:hover,\na.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.list-group-item.active > .badge,\n.nav-pills > .active > a > .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.list-group-item > .badge {\n  float: right;\n}\n.list-group-item > .badge + .badge {\n  margin-right: 5px;\n}\n.nav-pills > li > a > .badge {\n  margin-left: 3px;\n}\n.jumbotron {\n  padding: 30px 15px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #eee;\n}\n.jumbotron h1,\n.jumbotron .h1 {\n  color: inherit;\n}\n.jumbotron p {\n  margin-bottom: 15px;\n  font-size: 21px;\n  font-weight: 200;\n}\n.jumbotron > hr {\n  border-top-color: #d5d5d5;\n}\n.container .jumbotron,\n.container-fluid .jumbotron {\n  border-radius: 6px;\n}\n.jumbotron .container {\n  max-width: 100%;\n}\n@media screen and (min-width: 768px) {\n  .jumbotron {\n    padding: 48px 0;\n  }\n  .container .jumbotron,\n  .container-fluid .jumbotron {\n    padding-right: 60px;\n    padding-left: 60px;\n  }\n  .jumbotron h1,\n  .jumbotron .h1 {\n    font-size: 63px;\n  }\n}\n.thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 20px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: border .2s ease-in-out;\n       -o-transition: border .2s ease-in-out;\n          transition: border .2s ease-in-out;\n}\n.thumbnail > img,\n.thumbnail a > img {\n  margin-right: auto;\n  margin-left: auto;\n}\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: #337ab7;\n}\n.thumbnail .caption {\n  padding: 9px;\n  color: #333;\n}\n.alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.alert h4 {\n  margin-top: 0;\n  color: inherit;\n}\n.alert .alert-link {\n  font-weight: bold;\n}\n.alert > p,\n.alert > ul {\n  margin-bottom: 0;\n}\n.alert > p + p {\n  margin-top: 5px;\n}\n.alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px;\n}\n.alert-dismissable .close,\n.alert-dismissible .close {\n  position: relative;\n  top: -2px;\n  right: -21px;\n  color: inherit;\n}\n.alert-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n.alert-success hr {\n  border-top-color: #c9e2b3;\n}\n.alert-success .alert-link {\n  color: #2b542c;\n}\n.alert-info {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n.alert-info hr {\n  border-top-color: #a6e1ec;\n}\n.alert-info .alert-link {\n  color: #245269;\n}\n.alert-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n.alert-warning hr {\n  border-top-color: #f7e1b5;\n}\n.alert-warning .alert-link {\n  color: #66512c;\n}\n.alert-danger {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n.alert-danger hr {\n  border-top-color: #e4b9c0;\n}\n.alert-danger .alert-link {\n  color: #843534;\n}\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@-o-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n.progress {\n  height: 20px;\n  margin-bottom: 20px;\n  overflow: hidden;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\n          box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\n}\n.progress-bar {\n  float: left;\n  width: 0;\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  color: #fff;\n  text-align: center;\n  background-color: #337ab7;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);\n          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);\n  -webkit-transition: width .6s ease;\n       -o-transition: width .6s ease;\n          transition: width .6s ease;\n}\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  -webkit-background-size: 40px 40px;\n          background-size: 40px 40px;\n}\n.progress.active .progress-bar,\n.progress-bar.active {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n       -o-animation: progress-bar-stripes 2s linear infinite;\n          animation: progress-bar-stripes 2s linear infinite;\n}\n.progress-bar-success {\n  background-color: #5cb85c;\n}\n.progress-striped .progress-bar-success {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-info {\n  background-color: #5bc0de;\n}\n.progress-striped .progress-bar-info {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-warning {\n  background-color: #f0ad4e;\n}\n.progress-striped .progress-bar-warning {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-danger {\n  background-color: #d9534f;\n}\n.progress-striped .progress-bar-danger {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.media {\n  margin-top: 15px;\n}\n.media:first-child {\n  margin-top: 0;\n}\n.media,\n.media-body {\n  overflow: hidden;\n  zoom: 1;\n}\n.media-body {\n  width: 10000px;\n}\n.media-object {\n  display: block;\n}\n.media-right,\n.media > .pull-right {\n  padding-left: 10px;\n}\n.media-left,\n.media > .pull-left {\n  padding-right: 10px;\n}\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top;\n}\n.media-middle {\n  vertical-align: middle;\n}\n.media-bottom {\n  vertical-align: bottom;\n}\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.media-list {\n  padding-left: 0;\n  list-style: none;\n}\n.list-group {\n  padding-left: 0;\n  margin-bottom: 20px;\n}\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n.list-group-item:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\na.list-group-item {\n  color: #555;\n}\na.list-group-item .list-group-item-heading {\n  color: #333;\n}\na.list-group-item:hover,\na.list-group-item:focus {\n  color: #555;\n  text-decoration: none;\n  background-color: #f5f5f5;\n}\n.list-group-item.disabled,\n.list-group-item.disabled:hover,\n.list-group-item.disabled:focus {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #eee;\n}\n.list-group-item.disabled .list-group-item-heading,\n.list-group-item.disabled:hover .list-group-item-heading,\n.list-group-item.disabled:focus .list-group-item-heading {\n  color: inherit;\n}\n.list-group-item.disabled .list-group-item-text,\n.list-group-item.disabled:hover .list-group-item-text,\n.list-group-item.disabled:focus .list-group-item-text {\n  color: #777;\n}\n.list-group-item.active,\n.list-group-item.active:hover,\n.list-group-item.active:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.list-group-item.active .list-group-item-heading,\n.list-group-item.active:hover .list-group-item-heading,\n.list-group-item.active:focus .list-group-item-heading,\n.list-group-item.active .list-group-item-heading > small,\n.list-group-item.active:hover .list-group-item-heading > small,\n.list-group-item.active:focus .list-group-item-heading > small,\n.list-group-item.active .list-group-item-heading > .small,\n.list-group-item.active:hover .list-group-item-heading > .small,\n.list-group-item.active:focus .list-group-item-heading > .small {\n  color: inherit;\n}\n.list-group-item.active .list-group-item-text,\n.list-group-item.active:hover .list-group-item-text,\n.list-group-item.active:focus .list-group-item-text {\n  color: #c7ddef;\n}\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n}\na.list-group-item-success {\n  color: #3c763d;\n}\na.list-group-item-success .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-success:hover,\na.list-group-item-success:focus {\n  color: #3c763d;\n  background-color: #d0e9c6;\n}\na.list-group-item-success.active,\na.list-group-item-success.active:hover,\na.list-group-item-success.active:focus {\n  color: #fff;\n  background-color: #3c763d;\n  border-color: #3c763d;\n}\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7;\n}\na.list-group-item-info {\n  color: #31708f;\n}\na.list-group-item-info .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-info:hover,\na.list-group-item-info:focus {\n  color: #31708f;\n  background-color: #c4e3f3;\n}\na.list-group-item-info.active,\na.list-group-item-info.active:hover,\na.list-group-item-info.active:focus {\n  color: #fff;\n  background-color: #31708f;\n  border-color: #31708f;\n}\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n}\na.list-group-item-warning {\n  color: #8a6d3b;\n}\na.list-group-item-warning .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-warning:hover,\na.list-group-item-warning:focus {\n  color: #8a6d3b;\n  background-color: #faf2cc;\n}\na.list-group-item-warning.active,\na.list-group-item-warning.active:hover,\na.list-group-item-warning.active:focus {\n  color: #fff;\n  background-color: #8a6d3b;\n  border-color: #8a6d3b;\n}\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede;\n}\na.list-group-item-danger {\n  color: #a94442;\n}\na.list-group-item-danger .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-danger:hover,\na.list-group-item-danger:focus {\n  color: #a94442;\n  background-color: #ebcccc;\n}\na.list-group-item-danger.active,\na.list-group-item-danger.active:hover,\na.list-group-item-danger.active:focus {\n  color: #fff;\n  background-color: #a94442;\n  border-color: #a94442;\n}\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3;\n}\n.panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n}\n.panel-body {\n  padding: 15px;\n}\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel-heading > .dropdown .dropdown-toggle {\n  color: inherit;\n}\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: inherit;\n}\n.panel-title > a,\n.panel-title > small,\n.panel-title > .small,\n.panel-title > small > a,\n.panel-title > .small > a {\n  color: inherit;\n}\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #ddd;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .list-group,\n.panel > .panel-collapse > .list-group {\n  margin-bottom: 0;\n}\n.panel > .list-group .list-group-item,\n.panel > .panel-collapse > .list-group .list-group-item {\n  border-width: 1px 0;\n  border-radius: 0;\n}\n.panel > .list-group:first-child .list-group-item:first-child,\n.panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n  border-top: 0;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .list-group:last-child .list-group-item:last-child,\n.panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n  border-bottom: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0;\n}\n.list-group + .panel-footer {\n  border-top-width: 0;\n}\n.panel > .table,\n.panel > .table-responsive > .table,\n.panel > .panel-collapse > .table {\n  margin-bottom: 0;\n}\n.panel > .table caption,\n.panel > .table-responsive > .table caption,\n.panel > .panel-collapse > .table caption {\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n  border-top-left-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n  border-top-right-radius: 3px;\n}\n.panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n  border-bottom-right-radius: 3px;\n}\n.panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive,\n.panel > .table + .panel-body,\n.panel > .table-responsive + .panel-body {\n  border-top: 1px solid #ddd;\n}\n.panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0;\n}\n.panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n  border: 0;\n}\n.panel > .table-bordered > thead > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n.panel > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-bordered > thead > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n.panel > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-bordered > tfoot > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n  border-left: 0;\n}\n.panel > .table-bordered > thead > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n.panel > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-bordered > thead > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n.panel > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-bordered > tfoot > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n  border-right: 0;\n}\n.panel > .table-bordered > thead > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n.panel > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-bordered > thead > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n.panel > .table-bordered > tbody > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n  border-bottom: 0;\n}\n.panel > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-bordered > tfoot > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n  border-bottom: 0;\n}\n.panel > .table-responsive {\n  margin-bottom: 0;\n  border: 0;\n}\n.panel-group {\n  margin-bottom: 20px;\n}\n.panel-group .panel {\n  margin-bottom: 0;\n  border-radius: 4px;\n}\n.panel-group .panel + .panel {\n  margin-top: 5px;\n}\n.panel-group .panel-heading {\n  border-bottom: 0;\n}\n.panel-group .panel-heading + .panel-collapse > .panel-body,\n.panel-group .panel-heading + .panel-collapse > .list-group {\n  border-top: 1px solid #ddd;\n}\n.panel-group .panel-footer {\n  border-top: 0;\n}\n.panel-group .panel-footer + .panel-collapse .panel-body {\n  border-bottom: 1px solid #ddd;\n}\n.panel-default {\n  border-color: #ddd;\n}\n.panel-default > .panel-heading {\n  color: #333;\n  background-color: #f5f5f5;\n  border-color: #ddd;\n}\n.panel-default > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ddd;\n}\n.panel-default > .panel-heading .badge {\n  color: #f5f5f5;\n  background-color: #333;\n}\n.panel-default > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ddd;\n}\n.panel-primary {\n  border-color: #337ab7;\n}\n.panel-primary > .panel-heading {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.panel-primary > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #337ab7;\n}\n.panel-primary > .panel-heading .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.panel-primary > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #337ab7;\n}\n.panel-success {\n  border-color: #d6e9c6;\n}\n.panel-success > .panel-heading {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n.panel-success > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #d6e9c6;\n}\n.panel-success > .panel-heading .badge {\n  color: #dff0d8;\n  background-color: #3c763d;\n}\n.panel-success > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #d6e9c6;\n}\n.panel-info {\n  border-color: #bce8f1;\n}\n.panel-info > .panel-heading {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n.panel-info > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #bce8f1;\n}\n.panel-info > .panel-heading .badge {\n  color: #d9edf7;\n  background-color: #31708f;\n}\n.panel-info > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #bce8f1;\n}\n.panel-warning {\n  border-color: #faebcc;\n}\n.panel-warning > .panel-heading {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n.panel-warning > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #faebcc;\n}\n.panel-warning > .panel-heading .badge {\n  color: #fcf8e3;\n  background-color: #8a6d3b;\n}\n.panel-warning > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #faebcc;\n}\n.panel-danger {\n  border-color: #ebccd1;\n}\n.panel-danger > .panel-heading {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n.panel-danger > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ebccd1;\n}\n.panel-danger > .panel-heading .badge {\n  color: #f2dede;\n  background-color: #a94442;\n}\n.panel-danger > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ebccd1;\n}\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden;\n}\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%;\n}\n.embed-responsive-4by3 {\n  padding-bottom: 75%;\n}\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);\n}\n.well blockquote {\n  border-color: #ddd;\n  border-color: rgba(0, 0, 0, .15);\n}\n.well-lg {\n  padding: 24px;\n  border-radius: 6px;\n}\n.well-sm {\n  padding: 9px;\n  border-radius: 3px;\n}\n.close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  filter: alpha(opacity=20);\n  opacity: .2;\n}\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\nbutton.close {\n  -webkit-appearance: none;\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n.modal-open {\n  overflow: hidden;\n}\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n.modal.fade .modal-dialog {\n  -webkit-transition: -webkit-transform .3s ease-out;\n       -o-transition:      -o-transform .3s ease-out;\n          transition:         transform .3s ease-out;\n  -webkit-transform: translate(0, -25%);\n      -ms-transform: translate(0, -25%);\n       -o-transform: translate(0, -25%);\n          transform: translate(0, -25%);\n}\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n      -ms-transform: translate(0, 0);\n       -o-transform: translate(0, 0);\n          transform: translate(0, 0);\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n}\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, .2);\n  border-radius: 6px;\n  outline: 0;\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n          box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000;\n}\n.modal-backdrop.fade {\n  filter: alpha(opacity=0);\n  opacity: 0;\n}\n.modal-backdrop.in {\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\n.modal-header {\n  min-height: 16.42857143px;\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5;\n}\n.modal-header .close {\n  margin-top: -2px;\n}\n.modal-title {\n  margin: 0;\n  line-height: 1.42857143;\n}\n.modal-body {\n  position: relative;\n  padding: 15px;\n}\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5;\n}\n.modal-footer .btn + .btn {\n  margin-bottom: 0;\n  margin-left: 5px;\n}\n.modal-footer .btn-group .btn + .btn {\n  margin-left: -1px;\n}\n.modal-footer .btn-block + .btn-block {\n  margin-left: 0;\n}\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto;\n  }\n  .modal-content {\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n            box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n  }\n  .modal-sm {\n    width: 300px;\n  }\n}\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px;\n  }\n}\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 1.4;\n  filter: alpha(opacity=0);\n  opacity: 0;\n}\n.tooltip.in {\n  filter: alpha(opacity=90);\n  opacity: .9;\n}\n.tooltip.top {\n  padding: 5px 0;\n  margin-top: -3px;\n}\n.tooltip.right {\n  padding: 0 5px;\n  margin-left: 3px;\n}\n.tooltip.bottom {\n  padding: 5px 0;\n  margin-top: 3px;\n}\n.tooltip.left {\n  padding: 0 5px;\n  margin-left: -3px;\n}\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  background-color: #000;\n  border-radius: 4px;\n}\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.top-left .tooltip-arrow {\n  right: 5px;\n  bottom: 0;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000;\n}\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000;\n}\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: left;\n  white-space: normal;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, .2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, .2);\n          box-shadow: 0 5px 10px rgba(0, 0, 0, .2);\n}\n.popover.top {\n  margin-top: -10px;\n}\n.popover.right {\n  margin-left: 10px;\n}\n.popover.bottom {\n  margin-top: 10px;\n}\n.popover.left {\n  margin-left: -10px;\n}\n.popover-title {\n  padding: 8px 14px;\n  margin: 0;\n  font-size: 14px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0;\n}\n.popover-content {\n  padding: 9px 14px;\n}\n.popover > .arrow,\n.popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.popover > .arrow {\n  border-width: 11px;\n}\n.popover > .arrow:after {\n  content: \"\";\n  border-width: 10px;\n}\n.popover.top > .arrow {\n  bottom: -11px;\n  left: 50%;\n  margin-left: -11px;\n  border-top-color: #999;\n  border-top-color: rgba(0, 0, 0, .25);\n  border-bottom-width: 0;\n}\n.popover.top > .arrow:after {\n  bottom: 1px;\n  margin-left: -10px;\n  content: \" \";\n  border-top-color: #fff;\n  border-bottom-width: 0;\n}\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-right-color: #999;\n  border-right-color: rgba(0, 0, 0, .25);\n  border-left-width: 0;\n}\n.popover.right > .arrow:after {\n  bottom: -10px;\n  left: 1px;\n  content: \" \";\n  border-right-color: #fff;\n  border-left-width: 0;\n}\n.popover.bottom > .arrow {\n  top: -11px;\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999;\n  border-bottom-color: rgba(0, 0, 0, .25);\n}\n.popover.bottom > .arrow:after {\n  top: 1px;\n  margin-left: -10px;\n  content: \" \";\n  border-top-width: 0;\n  border-bottom-color: #fff;\n}\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999;\n  border-left-color: rgba(0, 0, 0, .25);\n}\n.popover.left > .arrow:after {\n  right: 1px;\n  bottom: -10px;\n  content: \" \";\n  border-right-width: 0;\n  border-left-color: #fff;\n}\n.carousel {\n  position: relative;\n}\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.carousel-inner > .item {\n  position: relative;\n  display: none;\n  -webkit-transition: .6s ease-in-out left;\n       -o-transition: .6s ease-in-out left;\n          transition: .6s ease-in-out left;\n}\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  line-height: 1;\n}\n@media all and (transform-3d), (-webkit-transform-3d) {\n  .carousel-inner > .item {\n    -webkit-transition: -webkit-transform .6s ease-in-out;\n         -o-transition:      -o-transform .6s ease-in-out;\n            transition:         transform .6s ease-in-out;\n\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    -webkit-perspective: 1000;\n            perspective: 1000;\n  }\n  .carousel-inner > .item.next,\n  .carousel-inner > .item.active.right {\n    left: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n  }\n  .carousel-inner > .item.prev,\n  .carousel-inner > .item.active.left {\n    left: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n  }\n  .carousel-inner > .item.next.left,\n  .carousel-inner > .item.prev.right,\n  .carousel-inner > .item.active {\n    left: 0;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n.carousel-inner > .active,\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  display: block;\n}\n.carousel-inner > .active {\n  left: 0;\n}\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.carousel-inner > .next {\n  left: 100%;\n}\n.carousel-inner > .prev {\n  left: -100%;\n}\n.carousel-inner > .next.left,\n.carousel-inner > .prev.right {\n  left: 0;\n}\n.carousel-inner > .active.left {\n  left: -100%;\n}\n.carousel-inner > .active.right {\n  left: 100%;\n}\n.carousel-control {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 15%;\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\n.carousel-control.left {\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);\n  background-image:      -o-linear-gradient(left, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .5)), to(rgba(0, 0, 0, .0001)));\n  background-image:         linear-gradient(to right, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);\n  background-repeat: repeat-x;\n}\n.carousel-control.right {\n  right: 0;\n  left: auto;\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);\n  background-image:      -o-linear-gradient(left, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .0001)), to(rgba(0, 0, 0, .5)));\n  background-image:         linear-gradient(to right, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);\n  background-repeat: repeat-x;\n}\n.carousel-control:hover,\n.carousel-control:focus {\n  color: #fff;\n  text-decoration: none;\n  filter: alpha(opacity=90);\n  outline: 0;\n  opacity: .9;\n}\n.carousel-control .icon-prev,\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-left,\n.carousel-control .glyphicon-chevron-right {\n  position: absolute;\n  top: 50%;\n  z-index: 5;\n  display: inline-block;\n}\n.carousel-control .icon-prev,\n.carousel-control .glyphicon-chevron-left {\n  left: 50%;\n  margin-left: -10px;\n}\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-right {\n  right: 50%;\n  margin-right: -10px;\n}\n.carousel-control .icon-prev,\n.carousel-control .icon-next {\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  font-family: serif;\n  line-height: 1;\n}\n.carousel-control .icon-prev:before {\n  content: '\\2039';\n}\n.carousel-control .icon-next:before {\n  content: '\\203a';\n}\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  padding-left: 0;\n  margin-left: -30%;\n  text-align: center;\n  list-style: none;\n}\n.carousel-indicators li {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin: 1px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #000 \\9;\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px solid #fff;\n  border-radius: 10px;\n}\n.carousel-indicators .active {\n  width: 12px;\n  height: 12px;\n  margin: 0;\n  background-color: #fff;\n}\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);\n}\n.carousel-caption .btn {\n  text-shadow: none;\n}\n@media screen and (min-width: 768px) {\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -15px;\n    font-size: 30px;\n  }\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .icon-prev {\n    margin-left: -15px;\n  }\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-next {\n    margin-right: -15px;\n  }\n  .carousel-caption {\n    right: 20%;\n    left: 20%;\n    padding-bottom: 30px;\n  }\n  .carousel-indicators {\n    bottom: 20px;\n  }\n}\n.clearfix:before,\n.clearfix:after,\n.dl-horizontal dd:before,\n.dl-horizontal dd:after,\n.container:before,\n.container:after,\n.container-fluid:before,\n.container-fluid:after,\n.row:before,\n.row:after,\n.form-horizontal .form-group:before,\n.form-horizontal .form-group:after,\n.btn-toolbar:before,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:before,\n.btn-group-vertical > .btn-group:after,\n.nav:before,\n.nav:after,\n.navbar:before,\n.navbar:after,\n.navbar-header:before,\n.navbar-header:after,\n.navbar-collapse:before,\n.navbar-collapse:after,\n.pager:before,\n.pager:after,\n.panel-body:before,\n.panel-body:after,\n.modal-footer:before,\n.modal-footer:after {\n  display: table;\n  content: \" \";\n}\n.clearfix:after,\n.dl-horizontal dd:after,\n.container:after,\n.container-fluid:after,\n.row:after,\n.form-horizontal .form-group:after,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:after,\n.nav:after,\n.navbar:after,\n.navbar-header:after,\n.navbar-collapse:after,\n.pager:after,\n.panel-body:after,\n.modal-footer:after {\n  clear: both;\n}\n.center-block {\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n}\n.pull-right {\n  float: right !important;\n}\n.pull-left {\n  float: left !important;\n}\n.hide {\n  display: none !important;\n}\n.show {\n  display: block !important;\n}\n.invisible {\n  visibility: hidden;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.hidden {\n  display: none !important;\n}\n.affix {\n  position: fixed;\n}\n@-ms-viewport {\n  width: device-width;\n}\n.visible-xs,\n.visible-sm,\n.visible-md,\n.visible-lg {\n  display: none !important;\n}\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important;\n}\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important;\n  }\n  table.visible-xs {\n    display: table;\n  }\n  tr.visible-xs {\n    display: table-row !important;\n  }\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important;\n  }\n  table.visible-sm {\n    display: table;\n  }\n  tr.visible-sm {\n    display: table-row !important;\n  }\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important;\n  }\n  table.visible-md {\n    display: table;\n  }\n  tr.visible-md {\n    display: table-row !important;\n  }\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important;\n  }\n  table.visible-lg {\n    display: table;\n  }\n  tr.visible-lg {\n    display: table-row !important;\n  }\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important;\n  }\n}\n.visible-print {\n  display: none !important;\n}\n@media print {\n  .visible-print {\n    display: block !important;\n  }\n  table.visible-print {\n    display: table;\n  }\n  tr.visible-print {\n    display: table-row !important;\n  }\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important;\n  }\n}\n.visible-print-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-block {\n    display: block !important;\n  }\n}\n.visible-print-inline {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline {\n    display: inline !important;\n  }\n}\n.visible-print-inline-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline-block {\n    display: inline-block !important;\n  }\n}\n@media print {\n  .hidden-print {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=bootstrap.css.map */\n", "", {"version":3,"sources":["/home/ozaki/dev/administa/bower_components/bootstrap/dist/css/bootstrap.css"],"names":[],"mappings":"AAAA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA","file":"/home/ozaki/dev/administa/node_modules/css-loader/index.js?sourceMap!/home/ozaki/dev/administa/bower_components/bootstrap/dist/css/bootstrap.css","sourcesContent":["/*!\n * Bootstrap v3.3.4 (http://getbootstrap.com)\n * Copyright 2011-2015 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n\n/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\nhtml {\n  font-family: sans-serif;\n  -webkit-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n}\nbody {\n  margin: 0;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n[hidden],\ntemplate {\n  display: none;\n}\na {\n  background-color: transparent;\n}\na:active,\na:hover {\n  outline: 0;\n}\nabbr[title] {\n  border-bottom: 1px dotted;\n}\nb,\nstrong {\n  font-weight: bold;\n}\ndfn {\n  font-style: italic;\n}\nh1 {\n  margin: .67em 0;\n  font-size: 2em;\n}\nmark {\n  color: #000;\n  background: #ff0;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsup {\n  top: -.5em;\n}\nsub {\n  bottom: -.25em;\n}\nimg {\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  height: 0;\n  -webkit-box-sizing: content-box;\n     -moz-box-sizing: content-box;\n          box-sizing: content-box;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\nbutton {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\ninput {\n  line-height: normal;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0;\n}\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-box-sizing: content-box;\n     -moz-box-sizing: content-box;\n          box-sizing: content-box;\n  -webkit-appearance: textfield;\n}\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\nfieldset {\n  padding: .35em .625em .75em;\n  margin: 0 2px;\n  border: 1px solid #c0c0c0;\n}\nlegend {\n  padding: 0;\n  border: 0;\n}\ntextarea {\n  overflow: auto;\n}\noptgroup {\n  font-weight: bold;\n}\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\ntd,\nth {\n  padding: 0;\n}\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n@media print {\n  *,\n  *:before,\n  *:after {\n    color: #000 !important;\n    text-shadow: none !important;\n    background: transparent !important;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n  }\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n  a[href]:after {\n    content: \" (\" attr(href) \")\";\n  }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\";\n  }\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\";\n  }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n\n    page-break-inside: avoid;\n  }\n  thead {\n    display: table-header-group;\n  }\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n  img {\n    max-width: 100% !important;\n  }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n  select {\n    background: #fff !important;\n  }\n  .navbar {\n    display: none;\n  }\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important;\n  }\n  .label {\n    border: 1px solid #000;\n  }\n  .table {\n    border-collapse: collapse !important;\n  }\n  .table td,\n  .table th {\n    background-color: #fff !important;\n  }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important;\n  }\n}\n@font-face {\n  font-family: 'Glyphicons Halflings';\n\n  src: url('../fonts/glyphicons-halflings-regular.eot');\n  src: url('../fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('../fonts/glyphicons-halflings-regular.woff2') format('woff2'), url('../fonts/glyphicons-halflings-regular.woff') format('woff'), url('../fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('../fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');\n}\n.glyphicon {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.glyphicon-asterisk:before {\n  content: \"\\2a\";\n}\n.glyphicon-plus:before {\n  content: \"\\2b\";\n}\n.glyphicon-euro:before,\n.glyphicon-eur:before {\n  content: \"\\20ac\";\n}\n.glyphicon-minus:before {\n  content: \"\\2212\";\n}\n.glyphicon-cloud:before {\n  content: \"\\2601\";\n}\n.glyphicon-envelope:before {\n  content: \"\\2709\";\n}\n.glyphicon-pencil:before {\n  content: \"\\270f\";\n}\n.glyphicon-glass:before {\n  content: \"\\e001\";\n}\n.glyphicon-music:before {\n  content: \"\\e002\";\n}\n.glyphicon-search:before {\n  content: \"\\e003\";\n}\n.glyphicon-heart:before {\n  content: \"\\e005\";\n}\n.glyphicon-star:before {\n  content: \"\\e006\";\n}\n.glyphicon-star-empty:before {\n  content: \"\\e007\";\n}\n.glyphicon-user:before {\n  content: \"\\e008\";\n}\n.glyphicon-film:before {\n  content: \"\\e009\";\n}\n.glyphicon-th-large:before {\n  content: \"\\e010\";\n}\n.glyphicon-th:before {\n  content: \"\\e011\";\n}\n.glyphicon-th-list:before {\n  content: \"\\e012\";\n}\n.glyphicon-ok:before {\n  content: \"\\e013\";\n}\n.glyphicon-remove:before {\n  content: \"\\e014\";\n}\n.glyphicon-zoom-in:before {\n  content: \"\\e015\";\n}\n.glyphicon-zoom-out:before {\n  content: \"\\e016\";\n}\n.glyphicon-off:before {\n  content: \"\\e017\";\n}\n.glyphicon-signal:before {\n  content: \"\\e018\";\n}\n.glyphicon-cog:before {\n  content: \"\\e019\";\n}\n.glyphicon-trash:before {\n  content: \"\\e020\";\n}\n.glyphicon-home:before {\n  content: \"\\e021\";\n}\n.glyphicon-file:before {\n  content: \"\\e022\";\n}\n.glyphicon-time:before {\n  content: \"\\e023\";\n}\n.glyphicon-road:before {\n  content: \"\\e024\";\n}\n.glyphicon-download-alt:before {\n  content: \"\\e025\";\n}\n.glyphicon-download:before {\n  content: \"\\e026\";\n}\n.glyphicon-upload:before {\n  content: \"\\e027\";\n}\n.glyphicon-inbox:before {\n  content: \"\\e028\";\n}\n.glyphicon-play-circle:before {\n  content: \"\\e029\";\n}\n.glyphicon-repeat:before {\n  content: \"\\e030\";\n}\n.glyphicon-refresh:before {\n  content: \"\\e031\";\n}\n.glyphicon-list-alt:before {\n  content: \"\\e032\";\n}\n.glyphicon-lock:before {\n  content: \"\\e033\";\n}\n.glyphicon-flag:before {\n  content: \"\\e034\";\n}\n.glyphicon-headphones:before {\n  content: \"\\e035\";\n}\n.glyphicon-volume-off:before {\n  content: \"\\e036\";\n}\n.glyphicon-volume-down:before {\n  content: \"\\e037\";\n}\n.glyphicon-volume-up:before {\n  content: \"\\e038\";\n}\n.glyphicon-qrcode:before {\n  content: \"\\e039\";\n}\n.glyphicon-barcode:before {\n  content: \"\\e040\";\n}\n.glyphicon-tag:before {\n  content: \"\\e041\";\n}\n.glyphicon-tags:before {\n  content: \"\\e042\";\n}\n.glyphicon-book:before {\n  content: \"\\e043\";\n}\n.glyphicon-bookmark:before {\n  content: \"\\e044\";\n}\n.glyphicon-print:before {\n  content: \"\\e045\";\n}\n.glyphicon-camera:before {\n  content: \"\\e046\";\n}\n.glyphicon-font:before {\n  content: \"\\e047\";\n}\n.glyphicon-bold:before {\n  content: \"\\e048\";\n}\n.glyphicon-italic:before {\n  content: \"\\e049\";\n}\n.glyphicon-text-height:before {\n  content: \"\\e050\";\n}\n.glyphicon-text-width:before {\n  content: \"\\e051\";\n}\n.glyphicon-align-left:before {\n  content: \"\\e052\";\n}\n.glyphicon-align-center:before {\n  content: \"\\e053\";\n}\n.glyphicon-align-right:before {\n  content: \"\\e054\";\n}\n.glyphicon-align-justify:before {\n  content: \"\\e055\";\n}\n.glyphicon-list:before {\n  content: \"\\e056\";\n}\n.glyphicon-indent-left:before {\n  content: \"\\e057\";\n}\n.glyphicon-indent-right:before {\n  content: \"\\e058\";\n}\n.glyphicon-facetime-video:before {\n  content: \"\\e059\";\n}\n.glyphicon-picture:before {\n  content: \"\\e060\";\n}\n.glyphicon-map-marker:before {\n  content: \"\\e062\";\n}\n.glyphicon-adjust:before {\n  content: \"\\e063\";\n}\n.glyphicon-tint:before {\n  content: \"\\e064\";\n}\n.glyphicon-edit:before {\n  content: \"\\e065\";\n}\n.glyphicon-share:before {\n  content: \"\\e066\";\n}\n.glyphicon-check:before {\n  content: \"\\e067\";\n}\n.glyphicon-move:before {\n  content: \"\\e068\";\n}\n.glyphicon-step-backward:before {\n  content: \"\\e069\";\n}\n.glyphicon-fast-backward:before {\n  content: \"\\e070\";\n}\n.glyphicon-backward:before {\n  content: \"\\e071\";\n}\n.glyphicon-play:before {\n  content: \"\\e072\";\n}\n.glyphicon-pause:before {\n  content: \"\\e073\";\n}\n.glyphicon-stop:before {\n  content: \"\\e074\";\n}\n.glyphicon-forward:before {\n  content: \"\\e075\";\n}\n.glyphicon-fast-forward:before {\n  content: \"\\e076\";\n}\n.glyphicon-step-forward:before {\n  content: \"\\e077\";\n}\n.glyphicon-eject:before {\n  content: \"\\e078\";\n}\n.glyphicon-chevron-left:before {\n  content: \"\\e079\";\n}\n.glyphicon-chevron-right:before {\n  content: \"\\e080\";\n}\n.glyphicon-plus-sign:before {\n  content: \"\\e081\";\n}\n.glyphicon-minus-sign:before {\n  content: \"\\e082\";\n}\n.glyphicon-remove-sign:before {\n  content: \"\\e083\";\n}\n.glyphicon-ok-sign:before {\n  content: \"\\e084\";\n}\n.glyphicon-question-sign:before {\n  content: \"\\e085\";\n}\n.glyphicon-info-sign:before {\n  content: \"\\e086\";\n}\n.glyphicon-screenshot:before {\n  content: \"\\e087\";\n}\n.glyphicon-remove-circle:before {\n  content: \"\\e088\";\n}\n.glyphicon-ok-circle:before {\n  content: \"\\e089\";\n}\n.glyphicon-ban-circle:before {\n  content: \"\\e090\";\n}\n.glyphicon-arrow-left:before {\n  content: \"\\e091\";\n}\n.glyphicon-arrow-right:before {\n  content: \"\\e092\";\n}\n.glyphicon-arrow-up:before {\n  content: \"\\e093\";\n}\n.glyphicon-arrow-down:before {\n  content: \"\\e094\";\n}\n.glyphicon-share-alt:before {\n  content: \"\\e095\";\n}\n.glyphicon-resize-full:before {\n  content: \"\\e096\";\n}\n.glyphicon-resize-small:before {\n  content: \"\\e097\";\n}\n.glyphicon-exclamation-sign:before {\n  content: \"\\e101\";\n}\n.glyphicon-gift:before {\n  content: \"\\e102\";\n}\n.glyphicon-leaf:before {\n  content: \"\\e103\";\n}\n.glyphicon-fire:before {\n  content: \"\\e104\";\n}\n.glyphicon-eye-open:before {\n  content: \"\\e105\";\n}\n.glyphicon-eye-close:before {\n  content: \"\\e106\";\n}\n.glyphicon-warning-sign:before {\n  content: \"\\e107\";\n}\n.glyphicon-plane:before {\n  content: \"\\e108\";\n}\n.glyphicon-calendar:before {\n  content: \"\\e109\";\n}\n.glyphicon-random:before {\n  content: \"\\e110\";\n}\n.glyphicon-comment:before {\n  content: \"\\e111\";\n}\n.glyphicon-magnet:before {\n  content: \"\\e112\";\n}\n.glyphicon-chevron-up:before {\n  content: \"\\e113\";\n}\n.glyphicon-chevron-down:before {\n  content: \"\\e114\";\n}\n.glyphicon-retweet:before {\n  content: \"\\e115\";\n}\n.glyphicon-shopping-cart:before {\n  content: \"\\e116\";\n}\n.glyphicon-folder-close:before {\n  content: \"\\e117\";\n}\n.glyphicon-folder-open:before {\n  content: \"\\e118\";\n}\n.glyphicon-resize-vertical:before {\n  content: \"\\e119\";\n}\n.glyphicon-resize-horizontal:before {\n  content: \"\\e120\";\n}\n.glyphicon-hdd:before {\n  content: \"\\e121\";\n}\n.glyphicon-bullhorn:before {\n  content: \"\\e122\";\n}\n.glyphicon-bell:before {\n  content: \"\\e123\";\n}\n.glyphicon-certificate:before {\n  content: \"\\e124\";\n}\n.glyphicon-thumbs-up:before {\n  content: \"\\e125\";\n}\n.glyphicon-thumbs-down:before {\n  content: \"\\e126\";\n}\n.glyphicon-hand-right:before {\n  content: \"\\e127\";\n}\n.glyphicon-hand-left:before {\n  content: \"\\e128\";\n}\n.glyphicon-hand-up:before {\n  content: \"\\e129\";\n}\n.glyphicon-hand-down:before {\n  content: \"\\e130\";\n}\n.glyphicon-circle-arrow-right:before {\n  content: \"\\e131\";\n}\n.glyphicon-circle-arrow-left:before {\n  content: \"\\e132\";\n}\n.glyphicon-circle-arrow-up:before {\n  content: \"\\e133\";\n}\n.glyphicon-circle-arrow-down:before {\n  content: \"\\e134\";\n}\n.glyphicon-globe:before {\n  content: \"\\e135\";\n}\n.glyphicon-wrench:before {\n  content: \"\\e136\";\n}\n.glyphicon-tasks:before {\n  content: \"\\e137\";\n}\n.glyphicon-filter:before {\n  content: \"\\e138\";\n}\n.glyphicon-briefcase:before {\n  content: \"\\e139\";\n}\n.glyphicon-fullscreen:before {\n  content: \"\\e140\";\n}\n.glyphicon-dashboard:before {\n  content: \"\\e141\";\n}\n.glyphicon-paperclip:before {\n  content: \"\\e142\";\n}\n.glyphicon-heart-empty:before {\n  content: \"\\e143\";\n}\n.glyphicon-link:before {\n  content: \"\\e144\";\n}\n.glyphicon-phone:before {\n  content: \"\\e145\";\n}\n.glyphicon-pushpin:before {\n  content: \"\\e146\";\n}\n.glyphicon-usd:before {\n  content: \"\\e148\";\n}\n.glyphicon-gbp:before {\n  content: \"\\e149\";\n}\n.glyphicon-sort:before {\n  content: \"\\e150\";\n}\n.glyphicon-sort-by-alphabet:before {\n  content: \"\\e151\";\n}\n.glyphicon-sort-by-alphabet-alt:before {\n  content: \"\\e152\";\n}\n.glyphicon-sort-by-order:before {\n  content: \"\\e153\";\n}\n.glyphicon-sort-by-order-alt:before {\n  content: \"\\e154\";\n}\n.glyphicon-sort-by-attributes:before {\n  content: \"\\e155\";\n}\n.glyphicon-sort-by-attributes-alt:before {\n  content: \"\\e156\";\n}\n.glyphicon-unchecked:before {\n  content: \"\\e157\";\n}\n.glyphicon-expand:before {\n  content: \"\\e158\";\n}\n.glyphicon-collapse-down:before {\n  content: \"\\e159\";\n}\n.glyphicon-collapse-up:before {\n  content: \"\\e160\";\n}\n.glyphicon-log-in:before {\n  content: \"\\e161\";\n}\n.glyphicon-flash:before {\n  content: \"\\e162\";\n}\n.glyphicon-log-out:before {\n  content: \"\\e163\";\n}\n.glyphicon-new-window:before {\n  content: \"\\e164\";\n}\n.glyphicon-record:before {\n  content: \"\\e165\";\n}\n.glyphicon-save:before {\n  content: \"\\e166\";\n}\n.glyphicon-open:before {\n  content: \"\\e167\";\n}\n.glyphicon-saved:before {\n  content: \"\\e168\";\n}\n.glyphicon-import:before {\n  content: \"\\e169\";\n}\n.glyphicon-export:before {\n  content: \"\\e170\";\n}\n.glyphicon-send:before {\n  content: \"\\e171\";\n}\n.glyphicon-floppy-disk:before {\n  content: \"\\e172\";\n}\n.glyphicon-floppy-saved:before {\n  content: \"\\e173\";\n}\n.glyphicon-floppy-remove:before {\n  content: \"\\e174\";\n}\n.glyphicon-floppy-save:before {\n  content: \"\\e175\";\n}\n.glyphicon-floppy-open:before {\n  content: \"\\e176\";\n}\n.glyphicon-credit-card:before {\n  content: \"\\e177\";\n}\n.glyphicon-transfer:before {\n  content: \"\\e178\";\n}\n.glyphicon-cutlery:before {\n  content: \"\\e179\";\n}\n.glyphicon-header:before {\n  content: \"\\e180\";\n}\n.glyphicon-compressed:before {\n  content: \"\\e181\";\n}\n.glyphicon-earphone:before {\n  content: \"\\e182\";\n}\n.glyphicon-phone-alt:before {\n  content: \"\\e183\";\n}\n.glyphicon-tower:before {\n  content: \"\\e184\";\n}\n.glyphicon-stats:before {\n  content: \"\\e185\";\n}\n.glyphicon-sd-video:before {\n  content: \"\\e186\";\n}\n.glyphicon-hd-video:before {\n  content: \"\\e187\";\n}\n.glyphicon-subtitles:before {\n  content: \"\\e188\";\n}\n.glyphicon-sound-stereo:before {\n  content: \"\\e189\";\n}\n.glyphicon-sound-dolby:before {\n  content: \"\\e190\";\n}\n.glyphicon-sound-5-1:before {\n  content: \"\\e191\";\n}\n.glyphicon-sound-6-1:before {\n  content: \"\\e192\";\n}\n.glyphicon-sound-7-1:before {\n  content: \"\\e193\";\n}\n.glyphicon-copyright-mark:before {\n  content: \"\\e194\";\n}\n.glyphicon-registration-mark:before {\n  content: \"\\e195\";\n}\n.glyphicon-cloud-download:before {\n  content: \"\\e197\";\n}\n.glyphicon-cloud-upload:before {\n  content: \"\\e198\";\n}\n.glyphicon-tree-conifer:before {\n  content: \"\\e199\";\n}\n.glyphicon-tree-deciduous:before {\n  content: \"\\e200\";\n}\n.glyphicon-cd:before {\n  content: \"\\e201\";\n}\n.glyphicon-save-file:before {\n  content: \"\\e202\";\n}\n.glyphicon-open-file:before {\n  content: \"\\e203\";\n}\n.glyphicon-level-up:before {\n  content: \"\\e204\";\n}\n.glyphicon-copy:before {\n  content: \"\\e205\";\n}\n.glyphicon-paste:before {\n  content: \"\\e206\";\n}\n.glyphicon-alert:before {\n  content: \"\\e209\";\n}\n.glyphicon-equalizer:before {\n  content: \"\\e210\";\n}\n.glyphicon-king:before {\n  content: \"\\e211\";\n}\n.glyphicon-queen:before {\n  content: \"\\e212\";\n}\n.glyphicon-pawn:before {\n  content: \"\\e213\";\n}\n.glyphicon-bishop:before {\n  content: \"\\e214\";\n}\n.glyphicon-knight:before {\n  content: \"\\e215\";\n}\n.glyphicon-baby-formula:before {\n  content: \"\\e216\";\n}\n.glyphicon-tent:before {\n  content: \"\\26fa\";\n}\n.glyphicon-blackboard:before {\n  content: \"\\e218\";\n}\n.glyphicon-bed:before {\n  content: \"\\e219\";\n}\n.glyphicon-apple:before {\n  content: \"\\f8ff\";\n}\n.glyphicon-erase:before {\n  content: \"\\e221\";\n}\n.glyphicon-hourglass:before {\n  content: \"\\231b\";\n}\n.glyphicon-lamp:before {\n  content: \"\\e223\";\n}\n.glyphicon-duplicate:before {\n  content: \"\\e224\";\n}\n.glyphicon-piggy-bank:before {\n  content: \"\\e225\";\n}\n.glyphicon-scissors:before {\n  content: \"\\e226\";\n}\n.glyphicon-bitcoin:before {\n  content: \"\\e227\";\n}\n.glyphicon-btc:before {\n  content: \"\\e227\";\n}\n.glyphicon-xbt:before {\n  content: \"\\e227\";\n}\n.glyphicon-yen:before {\n  content: \"\\00a5\";\n}\n.glyphicon-jpy:before {\n  content: \"\\00a5\";\n}\n.glyphicon-ruble:before {\n  content: \"\\20bd\";\n}\n.glyphicon-rub:before {\n  content: \"\\20bd\";\n}\n.glyphicon-scale:before {\n  content: \"\\e230\";\n}\n.glyphicon-ice-lolly:before {\n  content: \"\\e231\";\n}\n.glyphicon-ice-lolly-tasted:before {\n  content: \"\\e232\";\n}\n.glyphicon-education:before {\n  content: \"\\e233\";\n}\n.glyphicon-option-horizontal:before {\n  content: \"\\e234\";\n}\n.glyphicon-option-vertical:before {\n  content: \"\\e235\";\n}\n.glyphicon-menu-hamburger:before {\n  content: \"\\e236\";\n}\n.glyphicon-modal-window:before {\n  content: \"\\e237\";\n}\n.glyphicon-oil:before {\n  content: \"\\e238\";\n}\n.glyphicon-grain:before {\n  content: \"\\e239\";\n}\n.glyphicon-sunglasses:before {\n  content: \"\\e240\";\n}\n.glyphicon-text-size:before {\n  content: \"\\e241\";\n}\n.glyphicon-text-color:before {\n  content: \"\\e242\";\n}\n.glyphicon-text-background:before {\n  content: \"\\e243\";\n}\n.glyphicon-object-align-top:before {\n  content: \"\\e244\";\n}\n.glyphicon-object-align-bottom:before {\n  content: \"\\e245\";\n}\n.glyphicon-object-align-horizontal:before {\n  content: \"\\e246\";\n}\n.glyphicon-object-align-left:before {\n  content: \"\\e247\";\n}\n.glyphicon-object-align-vertical:before {\n  content: \"\\e248\";\n}\n.glyphicon-object-align-right:before {\n  content: \"\\e249\";\n}\n.glyphicon-triangle-right:before {\n  content: \"\\e250\";\n}\n.glyphicon-triangle-left:before {\n  content: \"\\e251\";\n}\n.glyphicon-triangle-bottom:before {\n  content: \"\\e252\";\n}\n.glyphicon-triangle-top:before {\n  content: \"\\e253\";\n}\n.glyphicon-console:before {\n  content: \"\\e254\";\n}\n.glyphicon-superscript:before {\n  content: \"\\e255\";\n}\n.glyphicon-subscript:before {\n  content: \"\\e256\";\n}\n.glyphicon-menu-left:before {\n  content: \"\\e257\";\n}\n.glyphicon-menu-right:before {\n  content: \"\\e258\";\n}\n.glyphicon-menu-down:before {\n  content: \"\\e259\";\n}\n.glyphicon-menu-up:before {\n  content: \"\\e260\";\n}\n* {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\nhtml {\n  font-size: 10px;\n\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #333;\n  background-color: #fff;\n}\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\na {\n  color: #337ab7;\n  text-decoration: none;\n}\na:hover,\na:focus {\n  color: #23527c;\n  text-decoration: underline;\n}\na:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\nfigure {\n  margin: 0;\n}\nimg {\n  vertical-align: middle;\n}\n.img-responsive,\n.thumbnail > img,\n.thumbnail a > img,\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n.img-rounded {\n  border-radius: 6px;\n}\n.img-thumbnail {\n  display: inline-block;\n  max-width: 100%;\n  height: auto;\n  padding: 4px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: all .2s ease-in-out;\n       -o-transition: all .2s ease-in-out;\n          transition: all .2s ease-in-out;\n}\n.img-circle {\n  border-radius: 50%;\n}\nhr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eee;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n[role=\"button\"] {\n  cursor: pointer;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n}\nh1 small,\nh2 small,\nh3 small,\nh4 small,\nh5 small,\nh6 small,\n.h1 small,\n.h2 small,\n.h3 small,\n.h4 small,\n.h5 small,\n.h6 small,\nh1 .small,\nh2 .small,\nh3 .small,\nh4 .small,\nh5 .small,\nh6 .small,\n.h1 .small,\n.h2 .small,\n.h3 .small,\n.h4 .small,\n.h5 .small,\n.h6 .small {\n  font-weight: normal;\n  line-height: 1;\n  color: #777;\n}\nh1,\n.h1,\nh2,\n.h2,\nh3,\n.h3 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\nh1 small,\n.h1 small,\nh2 small,\n.h2 small,\nh3 small,\n.h3 small,\nh1 .small,\n.h1 .small,\nh2 .small,\n.h2 .small,\nh3 .small,\n.h3 .small {\n  font-size: 65%;\n}\nh4,\n.h4,\nh5,\n.h5,\nh6,\n.h6 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\nh4 small,\n.h4 small,\nh5 small,\n.h5 small,\nh6 small,\n.h6 small,\nh4 .small,\n.h4 .small,\nh5 .small,\n.h5 .small,\nh6 .small,\n.h6 .small {\n  font-size: 75%;\n}\nh1,\n.h1 {\n  font-size: 36px;\n}\nh2,\n.h2 {\n  font-size: 30px;\n}\nh3,\n.h3 {\n  font-size: 24px;\n}\nh4,\n.h4 {\n  font-size: 18px;\n}\nh5,\n.h5 {\n  font-size: 14px;\n}\nh6,\n.h6 {\n  font-size: 12px;\n}\np {\n  margin: 0 0 10px;\n}\n.lead {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4;\n}\n@media (min-width: 768px) {\n  .lead {\n    font-size: 21px;\n  }\n}\nsmall,\n.small {\n  font-size: 85%;\n}\nmark,\n.mark {\n  padding: .2em;\n  background-color: #fcf8e3;\n}\n.text-left {\n  text-align: left;\n}\n.text-right {\n  text-align: right;\n}\n.text-center {\n  text-align: center;\n}\n.text-justify {\n  text-align: justify;\n}\n.text-nowrap {\n  white-space: nowrap;\n}\n.text-lowercase {\n  text-transform: lowercase;\n}\n.text-uppercase {\n  text-transform: uppercase;\n}\n.text-capitalize {\n  text-transform: capitalize;\n}\n.text-muted {\n  color: #777;\n}\n.text-primary {\n  color: #337ab7;\n}\na.text-primary:hover {\n  color: #286090;\n}\n.text-success {\n  color: #3c763d;\n}\na.text-success:hover {\n  color: #2b542c;\n}\n.text-info {\n  color: #31708f;\n}\na.text-info:hover {\n  color: #245269;\n}\n.text-warning {\n  color: #8a6d3b;\n}\na.text-warning:hover {\n  color: #66512c;\n}\n.text-danger {\n  color: #a94442;\n}\na.text-danger:hover {\n  color: #843534;\n}\n.bg-primary {\n  color: #fff;\n  background-color: #337ab7;\n}\na.bg-primary:hover {\n  background-color: #286090;\n}\n.bg-success {\n  background-color: #dff0d8;\n}\na.bg-success:hover {\n  background-color: #c1e2b3;\n}\n.bg-info {\n  background-color: #d9edf7;\n}\na.bg-info:hover {\n  background-color: #afd9ee;\n}\n.bg-warning {\n  background-color: #fcf8e3;\n}\na.bg-warning:hover {\n  background-color: #f7ecb5;\n}\n.bg-danger {\n  background-color: #f2dede;\n}\na.bg-danger:hover {\n  background-color: #e4b9b9;\n}\n.page-header {\n  padding-bottom: 9px;\n  margin: 40px 0 20px;\n  border-bottom: 1px solid #eee;\n}\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\nul ul,\nol ul,\nul ol,\nol ol {\n  margin-bottom: 0;\n}\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline {\n  padding-left: 0;\n  margin-left: -5px;\n  list-style: none;\n}\n.list-inline > li {\n  display: inline-block;\n  padding-right: 5px;\n  padding-left: 5px;\n}\ndl {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\ndt,\ndd {\n  line-height: 1.42857143;\n}\ndt {\n  font-weight: bold;\n}\ndd {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    overflow: hidden;\n    clear: left;\n    text-align: right;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .dl-horizontal dd {\n    margin-left: 180px;\n  }\n}\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #777;\n}\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase;\n}\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eee;\n}\nblockquote p:last-child,\nblockquote ul:last-child,\nblockquote ol:last-child {\n  margin-bottom: 0;\n}\nblockquote footer,\nblockquote small,\nblockquote .small {\n  display: block;\n  font-size: 80%;\n  line-height: 1.42857143;\n  color: #777;\n}\nblockquote footer:before,\nblockquote small:before,\nblockquote .small:before {\n  content: '\\2014 \\00A0';\n}\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  text-align: right;\n  border-right: 5px solid #eee;\n  border-left: 0;\n}\n.blockquote-reverse footer:before,\nblockquote.pull-right footer:before,\n.blockquote-reverse small:before,\nblockquote.pull-right small:before,\n.blockquote-reverse .small:before,\nblockquote.pull-right .small:before {\n  content: '';\n}\n.blockquote-reverse footer:after,\nblockquote.pull-right footer:after,\n.blockquote-reverse small:after,\nblockquote.pull-right small:after,\n.blockquote-reverse .small:after,\nblockquote.pull-right .small:after {\n  content: '\\00A0 \\2014';\n}\naddress {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857143;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px;\n}\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);\n          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);\n}\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: bold;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  color: #333;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\npre code {\n  padding: 0;\n  font-size: inherit;\n  color: inherit;\n  white-space: pre-wrap;\n  background-color: transparent;\n  border-radius: 0;\n}\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n.container {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n.container-fluid {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n.row {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n.col-xs-12 {\n  width: 100%;\n}\n.col-xs-11 {\n  width: 91.66666667%;\n}\n.col-xs-10 {\n  width: 83.33333333%;\n}\n.col-xs-9 {\n  width: 75%;\n}\n.col-xs-8 {\n  width: 66.66666667%;\n}\n.col-xs-7 {\n  width: 58.33333333%;\n}\n.col-xs-6 {\n  width: 50%;\n}\n.col-xs-5 {\n  width: 41.66666667%;\n}\n.col-xs-4 {\n  width: 33.33333333%;\n}\n.col-xs-3 {\n  width: 25%;\n}\n.col-xs-2 {\n  width: 16.66666667%;\n}\n.col-xs-1 {\n  width: 8.33333333%;\n}\n.col-xs-pull-12 {\n  right: 100%;\n}\n.col-xs-pull-11 {\n  right: 91.66666667%;\n}\n.col-xs-pull-10 {\n  right: 83.33333333%;\n}\n.col-xs-pull-9 {\n  right: 75%;\n}\n.col-xs-pull-8 {\n  right: 66.66666667%;\n}\n.col-xs-pull-7 {\n  right: 58.33333333%;\n}\n.col-xs-pull-6 {\n  right: 50%;\n}\n.col-xs-pull-5 {\n  right: 41.66666667%;\n}\n.col-xs-pull-4 {\n  right: 33.33333333%;\n}\n.col-xs-pull-3 {\n  right: 25%;\n}\n.col-xs-pull-2 {\n  right: 16.66666667%;\n}\n.col-xs-pull-1 {\n  right: 8.33333333%;\n}\n.col-xs-pull-0 {\n  right: auto;\n}\n.col-xs-push-12 {\n  left: 100%;\n}\n.col-xs-push-11 {\n  left: 91.66666667%;\n}\n.col-xs-push-10 {\n  left: 83.33333333%;\n}\n.col-xs-push-9 {\n  left: 75%;\n}\n.col-xs-push-8 {\n  left: 66.66666667%;\n}\n.col-xs-push-7 {\n  left: 58.33333333%;\n}\n.col-xs-push-6 {\n  left: 50%;\n}\n.col-xs-push-5 {\n  left: 41.66666667%;\n}\n.col-xs-push-4 {\n  left: 33.33333333%;\n}\n.col-xs-push-3 {\n  left: 25%;\n}\n.col-xs-push-2 {\n  left: 16.66666667%;\n}\n.col-xs-push-1 {\n  left: 8.33333333%;\n}\n.col-xs-push-0 {\n  left: auto;\n}\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n.col-xs-offset-11 {\n  margin-left: 91.66666667%;\n}\n.col-xs-offset-10 {\n  margin-left: 83.33333333%;\n}\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n.col-xs-offset-8 {\n  margin-left: 66.66666667%;\n}\n.col-xs-offset-7 {\n  margin-left: 58.33333333%;\n}\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n.col-xs-offset-5 {\n  margin-left: 41.66666667%;\n}\n.col-xs-offset-4 {\n  margin-left: 33.33333333%;\n}\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n.col-xs-offset-2 {\n  margin-left: 16.66666667%;\n}\n.col-xs-offset-1 {\n  margin-left: 8.33333333%;\n}\n.col-xs-offset-0 {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left;\n  }\n  .col-sm-12 {\n    width: 100%;\n  }\n  .col-sm-11 {\n    width: 91.66666667%;\n  }\n  .col-sm-10 {\n    width: 83.33333333%;\n  }\n  .col-sm-9 {\n    width: 75%;\n  }\n  .col-sm-8 {\n    width: 66.66666667%;\n  }\n  .col-sm-7 {\n    width: 58.33333333%;\n  }\n  .col-sm-6 {\n    width: 50%;\n  }\n  .col-sm-5 {\n    width: 41.66666667%;\n  }\n  .col-sm-4 {\n    width: 33.33333333%;\n  }\n  .col-sm-3 {\n    width: 25%;\n  }\n  .col-sm-2 {\n    width: 16.66666667%;\n  }\n  .col-sm-1 {\n    width: 8.33333333%;\n  }\n  .col-sm-pull-12 {\n    right: 100%;\n  }\n  .col-sm-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-sm-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-sm-pull-9 {\n    right: 75%;\n  }\n  .col-sm-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-sm-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-sm-pull-6 {\n    right: 50%;\n  }\n  .col-sm-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-sm-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-sm-pull-3 {\n    right: 25%;\n  }\n  .col-sm-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-sm-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-sm-pull-0 {\n    right: auto;\n  }\n  .col-sm-push-12 {\n    left: 100%;\n  }\n  .col-sm-push-11 {\n    left: 91.66666667%;\n  }\n  .col-sm-push-10 {\n    left: 83.33333333%;\n  }\n  .col-sm-push-9 {\n    left: 75%;\n  }\n  .col-sm-push-8 {\n    left: 66.66666667%;\n  }\n  .col-sm-push-7 {\n    left: 58.33333333%;\n  }\n  .col-sm-push-6 {\n    left: 50%;\n  }\n  .col-sm-push-5 {\n    left: 41.66666667%;\n  }\n  .col-sm-push-4 {\n    left: 33.33333333%;\n  }\n  .col-sm-push-3 {\n    left: 25%;\n  }\n  .col-sm-push-2 {\n    left: 16.66666667%;\n  }\n  .col-sm-push-1 {\n    left: 8.33333333%;\n  }\n  .col-sm-push-0 {\n    left: auto;\n  }\n  .col-sm-offset-12 {\n    margin-left: 100%;\n  }\n  .col-sm-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-sm-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n  .col-sm-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-sm-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n  .col-sm-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-sm-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n  .col-sm-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-sm-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-sm-offset-0 {\n    margin-left: 0;\n  }\n}\n@media (min-width: 992px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left;\n  }\n  .col-md-12 {\n    width: 100%;\n  }\n  .col-md-11 {\n    width: 91.66666667%;\n  }\n  .col-md-10 {\n    width: 83.33333333%;\n  }\n  .col-md-9 {\n    width: 75%;\n  }\n  .col-md-8 {\n    width: 66.66666667%;\n  }\n  .col-md-7 {\n    width: 58.33333333%;\n  }\n  .col-md-6 {\n    width: 50%;\n  }\n  .col-md-5 {\n    width: 41.66666667%;\n  }\n  .col-md-4 {\n    width: 33.33333333%;\n  }\n  .col-md-3 {\n    width: 25%;\n  }\n  .col-md-2 {\n    width: 16.66666667%;\n  }\n  .col-md-1 {\n    width: 8.33333333%;\n  }\n  .col-md-pull-12 {\n    right: 100%;\n  }\n  .col-md-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-md-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-md-pull-9 {\n    right: 75%;\n  }\n  .col-md-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-md-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-md-pull-6 {\n    right: 50%;\n  }\n  .col-md-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-md-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-md-pull-3 {\n    right: 25%;\n  }\n  .col-md-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-md-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-md-pull-0 {\n    right: auto;\n  }\n  .col-md-push-12 {\n    left: 100%;\n  }\n  .col-md-push-11 {\n    left: 91.66666667%;\n  }\n  .col-md-push-10 {\n    left: 83.33333333%;\n  }\n  .col-md-push-9 {\n    left: 75%;\n  }\n  .col-md-push-8 {\n    left: 66.66666667%;\n  }\n  .col-md-push-7 {\n    left: 58.33333333%;\n  }\n  .col-md-push-6 {\n    left: 50%;\n  }\n  .col-md-push-5 {\n    left: 41.66666667%;\n  }\n  .col-md-push-4 {\n    left: 33.33333333%;\n  }\n  .col-md-push-3 {\n    left: 25%;\n  }\n  .col-md-push-2 {\n    left: 16.66666667%;\n  }\n  .col-md-push-1 {\n    left: 8.33333333%;\n  }\n  .col-md-push-0 {\n    left: auto;\n  }\n  .col-md-offset-12 {\n    margin-left: 100%;\n  }\n  .col-md-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-md-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n  .col-md-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-md-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n  .col-md-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-md-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n  .col-md-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-md-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-md-offset-0 {\n    margin-left: 0;\n  }\n}\n@media (min-width: 1200px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left;\n  }\n  .col-lg-12 {\n    width: 100%;\n  }\n  .col-lg-11 {\n    width: 91.66666667%;\n  }\n  .col-lg-10 {\n    width: 83.33333333%;\n  }\n  .col-lg-9 {\n    width: 75%;\n  }\n  .col-lg-8 {\n    width: 66.66666667%;\n  }\n  .col-lg-7 {\n    width: 58.33333333%;\n  }\n  .col-lg-6 {\n    width: 50%;\n  }\n  .col-lg-5 {\n    width: 41.66666667%;\n  }\n  .col-lg-4 {\n    width: 33.33333333%;\n  }\n  .col-lg-3 {\n    width: 25%;\n  }\n  .col-lg-2 {\n    width: 16.66666667%;\n  }\n  .col-lg-1 {\n    width: 8.33333333%;\n  }\n  .col-lg-pull-12 {\n    right: 100%;\n  }\n  .col-lg-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-lg-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-lg-pull-9 {\n    right: 75%;\n  }\n  .col-lg-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-lg-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-lg-pull-6 {\n    right: 50%;\n  }\n  .col-lg-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-lg-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-lg-pull-3 {\n    right: 25%;\n  }\n  .col-lg-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-lg-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-lg-pull-0 {\n    right: auto;\n  }\n  .col-lg-push-12 {\n    left: 100%;\n  }\n  .col-lg-push-11 {\n    left: 91.66666667%;\n  }\n  .col-lg-push-10 {\n    left: 83.33333333%;\n  }\n  .col-lg-push-9 {\n    left: 75%;\n  }\n  .col-lg-push-8 {\n    left: 66.66666667%;\n  }\n  .col-lg-push-7 {\n    left: 58.33333333%;\n  }\n  .col-lg-push-6 {\n    left: 50%;\n  }\n  .col-lg-push-5 {\n    left: 41.66666667%;\n  }\n  .col-lg-push-4 {\n    left: 33.33333333%;\n  }\n  .col-lg-push-3 {\n    left: 25%;\n  }\n  .col-lg-push-2 {\n    left: 16.66666667%;\n  }\n  .col-lg-push-1 {\n    left: 8.33333333%;\n  }\n  .col-lg-push-0 {\n    left: auto;\n  }\n  .col-lg-offset-12 {\n    margin-left: 100%;\n  }\n  .col-lg-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-lg-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n  .col-lg-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-lg-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n  .col-lg-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-lg-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n  .col-lg-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-lg-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-lg-offset-0 {\n    margin-left: 0;\n  }\n}\ntable {\n  background-color: transparent;\n}\ncaption {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #777;\n  text-align: left;\n}\nth {\n  text-align: left;\n}\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n.table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #ddd;\n}\n.table > caption + thead > tr:first-child > th,\n.table > colgroup + thead > tr:first-child > th,\n.table > thead:first-child > tr:first-child > th,\n.table > caption + thead > tr:first-child > td,\n.table > colgroup + thead > tr:first-child > td,\n.table > thead:first-child > tr:first-child > td {\n  border-top: 0;\n}\n.table > tbody + tbody {\n  border-top: 2px solid #ddd;\n}\n.table .table {\n  background-color: #fff;\n}\n.table-condensed > thead > tr > th,\n.table-condensed > tbody > tr > th,\n.table-condensed > tfoot > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > td {\n  padding: 5px;\n}\n.table-bordered {\n  border: 1px solid #ddd;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #ddd;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td {\n  border-bottom-width: 2px;\n}\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9;\n}\n.table-hover > tbody > tr:hover {\n  background-color: #f5f5f5;\n}\ntable col[class*=\"col-\"] {\n  position: static;\n  display: table-column;\n  float: none;\n}\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  display: table-cell;\n  float: none;\n}\n.table > thead > tr > td.active,\n.table > tbody > tr > td.active,\n.table > tfoot > tr > td.active,\n.table > thead > tr > th.active,\n.table > tbody > tr > th.active,\n.table > tfoot > tr > th.active,\n.table > thead > tr.active > td,\n.table > tbody > tr.active > td,\n.table > tfoot > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr.active > th,\n.table > tfoot > tr.active > th {\n  background-color: #f5f5f5;\n}\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #e8e8e8;\n}\n.table > thead > tr > td.success,\n.table > tbody > tr > td.success,\n.table > tfoot > tr > td.success,\n.table > thead > tr > th.success,\n.table > tbody > tr > th.success,\n.table > tfoot > tr > th.success,\n.table > thead > tr.success > td,\n.table > tbody > tr.success > td,\n.table > tfoot > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr.success > th,\n.table > tfoot > tr.success > th {\n  background-color: #dff0d8;\n}\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #d0e9c6;\n}\n.table > thead > tr > td.info,\n.table > tbody > tr > td.info,\n.table > tfoot > tr > td.info,\n.table > thead > tr > th.info,\n.table > tbody > tr > th.info,\n.table > tfoot > tr > th.info,\n.table > thead > tr.info > td,\n.table > tbody > tr.info > td,\n.table > tfoot > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr.info > th,\n.table > tfoot > tr.info > th {\n  background-color: #d9edf7;\n}\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #c4e3f3;\n}\n.table > thead > tr > td.warning,\n.table > tbody > tr > td.warning,\n.table > tfoot > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > tbody > tr > th.warning,\n.table > tfoot > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > tbody > tr.warning > td,\n.table > tfoot > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr.warning > th {\n  background-color: #fcf8e3;\n}\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #faf2cc;\n}\n.table > thead > tr > td.danger,\n.table > tbody > tr > td.danger,\n.table > tfoot > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > tbody > tr > th.danger,\n.table > tfoot > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > tbody > tr.danger > td,\n.table > tfoot > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr.danger > th {\n  background-color: #f2dede;\n}\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #ebcccc;\n}\n.table-responsive {\n  min-height: .01%;\n  overflow-x: auto;\n}\n@media screen and (max-width: 767px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    border: 1px solid #ddd;\n  }\n  .table-responsive > .table {\n    margin-bottom: 0;\n  }\n  .table-responsive > .table > thead > tr > th,\n  .table-responsive > .table > tbody > tr > th,\n  .table-responsive > .table > tfoot > tr > th,\n  .table-responsive > .table > thead > tr > td,\n  .table-responsive > .table > tbody > tr > td,\n  .table-responsive > .table > tfoot > tr > td {\n    white-space: nowrap;\n  }\n  .table-responsive > .table-bordered {\n    border: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0;\n  }\n  .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n  .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n    border-bottom: 0;\n  }\n}\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5;\n}\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\ninput[type=\"search\"] {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal;\n}\ninput[type=\"file\"] {\n  display: block;\n}\ninput[type=\"range\"] {\n  display: block;\n  width: 100%;\n}\nselect[multiple],\nselect[size] {\n  height: auto;\n}\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n}\n.form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;\n       -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n          transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);\n          box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);\n}\n.form-control::-moz-placeholder {\n  color: #999;\n  opacity: 1;\n}\n.form-control:-ms-input-placeholder {\n  color: #999;\n}\n.form-control::-webkit-input-placeholder {\n  color: #999;\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: #eee;\n  opacity: 1;\n}\n.form-control[disabled],\nfieldset[disabled] .form-control {\n  cursor: not-allowed;\n}\ntextarea.form-control {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-appearance: none;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"],\n  input[type=\"time\"],\n  input[type=\"datetime-local\"],\n  input[type=\"month\"] {\n    line-height: 34px;\n  }\n  input[type=\"date\"].input-sm,\n  input[type=\"time\"].input-sm,\n  input[type=\"datetime-local\"].input-sm,\n  input[type=\"month\"].input-sm,\n  .input-group-sm input[type=\"date\"],\n  .input-group-sm input[type=\"time\"],\n  .input-group-sm input[type=\"datetime-local\"],\n  .input-group-sm input[type=\"month\"] {\n    line-height: 30px;\n  }\n  input[type=\"date\"].input-lg,\n  input[type=\"time\"].input-lg,\n  input[type=\"datetime-local\"].input-lg,\n  input[type=\"month\"].input-lg,\n  .input-group-lg input[type=\"date\"],\n  .input-group-lg input[type=\"time\"],\n  .input-group-lg input[type=\"datetime-local\"],\n  .input-group-lg input[type=\"month\"] {\n    line-height: 46px;\n  }\n}\n.form-group {\n  margin-bottom: 15px;\n}\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.radio label,\n.checkbox label {\n  min-height: 20px;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  cursor: pointer;\n}\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-top: 4px \\9;\n  margin-left: -20px;\n}\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px;\n}\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px;\n}\ninput[type=\"radio\"][disabled],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"radio\"].disabled,\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\nfieldset[disabled] input[type=\"checkbox\"] {\n  cursor: not-allowed;\n}\n.radio-inline.disabled,\n.checkbox-inline.disabled,\nfieldset[disabled] .radio-inline,\nfieldset[disabled] .checkbox-inline {\n  cursor: not-allowed;\n}\n.radio.disabled label,\n.checkbox.disabled label,\nfieldset[disabled] .radio label,\nfieldset[disabled] .checkbox label {\n  cursor: not-allowed;\n}\n.form-control-static {\n  min-height: 34px;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-bottom: 0;\n}\n.form-control-static.input-lg,\n.form-control-static.input-sm {\n  padding-right: 0;\n  padding-left: 0;\n}\n.input-sm {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\nselect.input-sm {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.input-sm,\nselect[multiple].input-sm {\n  height: auto;\n}\n.form-group-sm .form-control {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\nselect.form-group-sm .form-control {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.form-group-sm .form-control,\nselect[multiple].form-group-sm .form-control {\n  height: auto;\n}\n.form-group-sm .form-control-static {\n  height: 30px;\n  min-height: 32px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.input-lg {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\nselect.input-lg {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.input-lg,\nselect[multiple].input-lg {\n  height: auto;\n}\n.form-group-lg .form-control {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\nselect.form-group-lg .form-control {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.form-group-lg .form-control,\nselect[multiple].form-group-lg .form-control {\n  height: auto;\n}\n.form-group-lg .form-control-static {\n  height: 46px;\n  min-height: 38px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n.has-feedback {\n  position: relative;\n}\n.has-feedback .form-control {\n  padding-right: 42.5px;\n}\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none;\n}\n.input-lg + .form-control-feedback {\n  width: 46px;\n  height: 46px;\n  line-height: 46px;\n}\n.input-sm + .form-control-feedback {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n}\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #3c763d;\n}\n.has-success .form-control {\n  border-color: #3c763d;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-success .form-control:focus {\n  border-color: #2b542c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;\n}\n.has-success .input-group-addon {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #3c763d;\n}\n.has-success .form-control-feedback {\n  color: #3c763d;\n}\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #8a6d3b;\n}\n.has-warning .form-control {\n  border-color: #8a6d3b;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-warning .form-control:focus {\n  border-color: #66512c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;\n}\n.has-warning .input-group-addon {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #8a6d3b;\n}\n.has-warning .form-control-feedback {\n  color: #8a6d3b;\n}\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n  color: #a94442;\n}\n.has-error .form-control {\n  border-color: #a94442;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-error .form-control:focus {\n  border-color: #843534;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;\n}\n.has-error .input-group-addon {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #a94442;\n}\n.has-error .form-control-feedback {\n  color: #a94442;\n}\n.has-feedback label ~ .form-control-feedback {\n  top: 25px;\n}\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0;\n}\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #737373;\n}\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .form-inline .form-control-static {\n    display: inline-block;\n  }\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .form-inline .input-group .input-group-addon,\n  .form-inline .input-group .input-group-btn,\n  .form-inline .input-group .form-control {\n    width: auto;\n  }\n  .form-inline .input-group > .form-control {\n    width: 100%;\n  }\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .radio label,\n  .form-inline .checkbox label {\n    padding-left: 0;\n  }\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  padding-top: 7px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 27px;\n}\n.form-horizontal .form-group {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    padding-top: 7px;\n    margin-bottom: 0;\n    text-align: right;\n  }\n}\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 14.333333px;\n  }\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n  }\n}\n.btn {\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.btn:focus,\n.btn:active:focus,\n.btn.active:focus,\n.btn.focus,\n.btn:active.focus,\n.btn.active.focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n.btn:hover,\n.btn:focus,\n.btn.focus {\n  color: #333;\n  text-decoration: none;\n}\n.btn:active,\n.btn.active {\n  background-image: none;\n  outline: 0;\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n}\n.btn.disabled,\n.btn[disabled],\nfieldset[disabled] .btn {\n  pointer-events: none;\n  cursor: not-allowed;\n  filter: alpha(opacity=65);\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  opacity: .65;\n}\n.btn-default {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc;\n}\n.btn-default:hover,\n.btn-default:focus,\n.btn-default.focus,\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  background-image: none;\n}\n.btn-default.disabled,\n.btn-default[disabled],\nfieldset[disabled] .btn-default,\n.btn-default.disabled:hover,\n.btn-default[disabled]:hover,\nfieldset[disabled] .btn-default:hover,\n.btn-default.disabled:focus,\n.btn-default[disabled]:focus,\nfieldset[disabled] .btn-default:focus,\n.btn-default.disabled.focus,\n.btn-default[disabled].focus,\nfieldset[disabled] .btn-default.focus,\n.btn-default.disabled:active,\n.btn-default[disabled]:active,\nfieldset[disabled] .btn-default:active,\n.btn-default.disabled.active,\n.btn-default[disabled].active,\nfieldset[disabled] .btn-default.active {\n  background-color: #fff;\n  border-color: #ccc;\n}\n.btn-default .badge {\n  color: #fff;\n  background-color: #333;\n}\n.btn-primary {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary.focus,\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n  background-image: none;\n}\n.btn-primary.disabled,\n.btn-primary[disabled],\nfieldset[disabled] .btn-primary,\n.btn-primary.disabled:hover,\n.btn-primary[disabled]:hover,\nfieldset[disabled] .btn-primary:hover,\n.btn-primary.disabled:focus,\n.btn-primary[disabled]:focus,\nfieldset[disabled] .btn-primary:focus,\n.btn-primary.disabled.focus,\n.btn-primary[disabled].focus,\nfieldset[disabled] .btn-primary.focus,\n.btn-primary.disabled:active,\n.btn-primary[disabled]:active,\nfieldset[disabled] .btn-primary:active,\n.btn-primary.disabled.active,\n.btn-primary[disabled].active,\nfieldset[disabled] .btn-primary.active {\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n.btn-primary .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.btn-success {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n.btn-success:hover,\n.btn-success:focus,\n.btn-success.focus,\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n  background-image: none;\n}\n.btn-success.disabled,\n.btn-success[disabled],\nfieldset[disabled] .btn-success,\n.btn-success.disabled:hover,\n.btn-success[disabled]:hover,\nfieldset[disabled] .btn-success:hover,\n.btn-success.disabled:focus,\n.btn-success[disabled]:focus,\nfieldset[disabled] .btn-success:focus,\n.btn-success.disabled.focus,\n.btn-success[disabled].focus,\nfieldset[disabled] .btn-success.focus,\n.btn-success.disabled:active,\n.btn-success[disabled]:active,\nfieldset[disabled] .btn-success:active,\n.btn-success.disabled.active,\n.btn-success[disabled].active,\nfieldset[disabled] .btn-success.active {\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n.btn-success .badge {\n  color: #5cb85c;\n  background-color: #fff;\n}\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n.btn-info:hover,\n.btn-info:focus,\n.btn-info.focus,\n.btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n.btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n  background-image: none;\n}\n.btn-info.disabled,\n.btn-info[disabled],\nfieldset[disabled] .btn-info,\n.btn-info.disabled:hover,\n.btn-info[disabled]:hover,\nfieldset[disabled] .btn-info:hover,\n.btn-info.disabled:focus,\n.btn-info[disabled]:focus,\nfieldset[disabled] .btn-info:focus,\n.btn-info.disabled.focus,\n.btn-info[disabled].focus,\nfieldset[disabled] .btn-info.focus,\n.btn-info.disabled:active,\n.btn-info[disabled]:active,\nfieldset[disabled] .btn-info:active,\n.btn-info.disabled.active,\n.btn-info[disabled].active,\nfieldset[disabled] .btn-info.active {\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n.btn-info .badge {\n  color: #5bc0de;\n  background-color: #fff;\n}\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n.btn-warning:hover,\n.btn-warning:focus,\n.btn-warning.focus,\n.btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n.btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n  background-image: none;\n}\n.btn-warning.disabled,\n.btn-warning[disabled],\nfieldset[disabled] .btn-warning,\n.btn-warning.disabled:hover,\n.btn-warning[disabled]:hover,\nfieldset[disabled] .btn-warning:hover,\n.btn-warning.disabled:focus,\n.btn-warning[disabled]:focus,\nfieldset[disabled] .btn-warning:focus,\n.btn-warning.disabled.focus,\n.btn-warning[disabled].focus,\nfieldset[disabled] .btn-warning.focus,\n.btn-warning.disabled:active,\n.btn-warning[disabled]:active,\nfieldset[disabled] .btn-warning:active,\n.btn-warning.disabled.active,\n.btn-warning[disabled].active,\nfieldset[disabled] .btn-warning.active {\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n.btn-warning .badge {\n  color: #f0ad4e;\n  background-color: #fff;\n}\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n.btn-danger:hover,\n.btn-danger:focus,\n.btn-danger.focus,\n.btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n.btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n  background-image: none;\n}\n.btn-danger.disabled,\n.btn-danger[disabled],\nfieldset[disabled] .btn-danger,\n.btn-danger.disabled:hover,\n.btn-danger[disabled]:hover,\nfieldset[disabled] .btn-danger:hover,\n.btn-danger.disabled:focus,\n.btn-danger[disabled]:focus,\nfieldset[disabled] .btn-danger:focus,\n.btn-danger.disabled.focus,\n.btn-danger[disabled].focus,\nfieldset[disabled] .btn-danger.focus,\n.btn-danger.disabled:active,\n.btn-danger[disabled]:active,\nfieldset[disabled] .btn-danger:active,\n.btn-danger.disabled.active,\n.btn-danger[disabled].active,\nfieldset[disabled] .btn-danger.active {\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n.btn-danger .badge {\n  color: #d9534f;\n  background-color: #fff;\n}\n.btn-link {\n  font-weight: normal;\n  color: #337ab7;\n  border-radius: 0;\n}\n.btn-link,\n.btn-link:active,\n.btn-link.active,\n.btn-link[disabled],\nfieldset[disabled] .btn-link {\n  background-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.btn-link,\n.btn-link:hover,\n.btn-link:focus,\n.btn-link:active {\n  border-color: transparent;\n}\n.btn-link:hover,\n.btn-link:focus {\n  color: #23527c;\n  text-decoration: underline;\n  background-color: transparent;\n}\n.btn-link[disabled]:hover,\nfieldset[disabled] .btn-link:hover,\n.btn-link[disabled]:focus,\nfieldset[disabled] .btn-link:focus {\n  color: #777;\n  text-decoration: none;\n}\n.btn-lg,\n.btn-group-lg > .btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\n.btn-sm,\n.btn-group-sm > .btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.btn-xs,\n.btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.btn-block {\n  display: block;\n  width: 100%;\n}\n.btn-block + .btn-block {\n  margin-top: 5px;\n}\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity .15s linear;\n       -o-transition: opacity .15s linear;\n          transition: opacity .15s linear;\n}\n.fade.in {\n  opacity: 1;\n}\n.collapse {\n  display: none;\n}\n.collapse.in {\n  display: block;\n}\ntr.collapse.in {\n  display: table-row;\n}\ntbody.collapse.in {\n  display: table-row-group;\n}\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-timing-function: ease;\n       -o-transition-timing-function: ease;\n          transition-timing-function: ease;\n  -webkit-transition-duration: .35s;\n       -o-transition-duration: .35s;\n          transition-duration: .35s;\n  -webkit-transition-property: height, visibility;\n       -o-transition-property: height, visibility;\n          transition-property: height, visibility;\n}\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n.dropup,\n.dropdown {\n  position: relative;\n}\n.dropdown-toggle:focus {\n  outline: 0;\n}\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  font-size: 14px;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, .15);\n  border-radius: 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n          box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n}\n.dropdown-menu.pull-right {\n  right: 0;\n  left: auto;\n}\n.dropdown-menu .divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.dropdown-menu > li > a {\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: normal;\n  line-height: 1.42857143;\n  color: #333;\n  white-space: nowrap;\n}\n.dropdown-menu > li > a:hover,\n.dropdown-menu > li > a:focus {\n  color: #262626;\n  text-decoration: none;\n  background-color: #f5f5f5;\n}\n.dropdown-menu > .active > a,\n.dropdown-menu > .active > a:hover,\n.dropdown-menu > .active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  background-color: #337ab7;\n  outline: 0;\n}\n.dropdown-menu > .disabled > a,\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  color: #777;\n}\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  cursor: not-allowed;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n}\n.open > .dropdown-menu {\n  display: block;\n}\n.open > a {\n  outline: 0;\n}\n.dropdown-menu-right {\n  right: 0;\n  left: auto;\n}\n.dropdown-menu-left {\n  right: auto;\n  left: 0;\n}\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 12px;\n  line-height: 1.42857143;\n  color: #777;\n  white-space: nowrap;\n}\n.dropdown-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 990;\n}\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto;\n}\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  content: \"\";\n  border-top: 0;\n  border-bottom: 4px solid;\n}\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px;\n}\n@media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    right: 0;\n    left: auto;\n  }\n  .navbar-right .dropdown-menu-left {\n    right: auto;\n    left: 0;\n  }\n}\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  float: left;\n}\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover,\n.btn-group > .btn:focus,\n.btn-group-vertical > .btn:focus,\n.btn-group > .btn:active,\n.btn-group-vertical > .btn:active,\n.btn-group > .btn.active,\n.btn-group-vertical > .btn.active {\n  z-index: 2;\n}\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px;\n}\n.btn-toolbar {\n  margin-left: -5px;\n}\n.btn-toolbar .btn-group,\n.btn-toolbar .input-group {\n  float: left;\n}\n.btn-toolbar > .btn,\n.btn-toolbar > .btn-group,\n.btn-toolbar > .input-group {\n  margin-left: 5px;\n}\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n.btn-group > .btn:first-child {\n  margin-left: 0;\n}\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group > .btn-group {\n  float: left;\n}\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n}\n.btn-group > .btn + .dropdown-toggle {\n  padding-right: 8px;\n  padding-left: 8px;\n}\n.btn-group > .btn-lg + .dropdown-toggle {\n  padding-right: 12px;\n  padding-left: 12px;\n}\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n}\n.btn-group.open .dropdown-toggle.btn-link {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.btn .caret {\n  margin-left: 0;\n}\n.btn-lg .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0;\n}\n.dropup .btn-lg .caret {\n  border-width: 0 5px 5px;\n}\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%;\n}\n.btn-group-vertical > .btn-group > .btn {\n  float: none;\n}\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0;\n}\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 4px;\n}\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n}\n.btn-group-justified > .btn,\n.btn-group-justified > .btn-group {\n  display: table-cell;\n  float: none;\n  width: 1%;\n}\n.btn-group-justified > .btn-group .btn {\n  width: 100%;\n}\n.btn-group-justified > .btn-group .dropdown-menu {\n  left: auto;\n}\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate;\n}\n.input-group[class*=\"col-\"] {\n  float: none;\n  padding-right: 0;\n  padding-left: 0;\n}\n.input-group .form-control {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n}\n.input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\nselect.input-group-lg > .form-control,\nselect.input-group-lg > .input-group-addon,\nselect.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.input-group-lg > .form-control,\ntextarea.input-group-lg > .input-group-addon,\ntextarea.input-group-lg > .input-group-btn > .btn,\nselect[multiple].input-group-lg > .form-control,\nselect[multiple].input-group-lg > .input-group-addon,\nselect[multiple].input-group-lg > .input-group-btn > .btn {\n  height: auto;\n}\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\nselect.input-group-sm > .form-control,\nselect.input-group-sm > .input-group-addon,\nselect.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.input-group-sm > .form-control,\ntextarea.input-group-sm > .input-group-addon,\ntextarea.input-group-sm > .input-group-btn > .btn,\nselect[multiple].input-group-sm > .form-control,\nselect[multiple].input-group-sm > .input-group-addon,\nselect[multiple].input-group-sm > .input-group-btn > .btn {\n  height: auto;\n}\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell;\n}\n.input-group-addon:not(:first-child):not(:last-child),\n.input-group-btn:not(:first-child):not(:last-child),\n.input-group .form-control:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n.input-group-addon {\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1;\n  color: #555;\n  text-align: center;\n  background-color: #eee;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n.input-group-addon.input-sm {\n  padding: 5px 10px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n.input-group-addon.input-lg {\n  padding: 10px 16px;\n  font-size: 18px;\n  border-radius: 6px;\n}\n.input-group-addon input[type=\"radio\"],\n.input-group-addon input[type=\"checkbox\"] {\n  margin-top: 0;\n}\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group-addon:first-child {\n  border-right: 0;\n}\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.input-group-addon:last-child {\n  border-left: 0;\n}\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap;\n}\n.input-group-btn > .btn {\n  position: relative;\n}\n.input-group-btn > .btn + .btn {\n  margin-left: -1px;\n}\n.input-group-btn > .btn:hover,\n.input-group-btn > .btn:focus,\n.input-group-btn > .btn:active {\n  z-index: 2;\n}\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group {\n  margin-right: -1px;\n}\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group {\n  margin-left: -1px;\n}\n.nav {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.nav > li {\n  position: relative;\n  display: block;\n}\n.nav > li > a {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n}\n.nav > li > a:hover,\n.nav > li > a:focus {\n  text-decoration: none;\n  background-color: #eee;\n}\n.nav > li.disabled > a {\n  color: #777;\n}\n.nav > li.disabled > a:hover,\n.nav > li.disabled > a:focus {\n  color: #777;\n  text-decoration: none;\n  cursor: not-allowed;\n  background-color: transparent;\n}\n.nav .open > a,\n.nav .open > a:hover,\n.nav .open > a:focus {\n  background-color: #eee;\n  border-color: #337ab7;\n}\n.nav .nav-divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.nav > li > a > img {\n  max-width: none;\n}\n.nav-tabs {\n  border-bottom: 1px solid #ddd;\n}\n.nav-tabs > li {\n  float: left;\n  margin-bottom: -1px;\n}\n.nav-tabs > li > a {\n  margin-right: 2px;\n  line-height: 1.42857143;\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0;\n}\n.nav-tabs > li > a:hover {\n  border-color: #eee #eee #ddd;\n}\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:hover,\n.nav-tabs > li.active > a:focus {\n  color: #555;\n  cursor: default;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-bottom-color: transparent;\n}\n.nav-tabs.nav-justified {\n  width: 100%;\n  border-bottom: 0;\n}\n.nav-tabs.nav-justified > li {\n  float: none;\n}\n.nav-tabs.nav-justified > li > a {\n  margin-bottom: 5px;\n  text-align: center;\n}\n.nav-tabs.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-tabs.nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n.nav-tabs.nav-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n.nav-tabs.nav-justified > .active > a,\n.nav-tabs.nav-justified > .active > a:hover,\n.nav-tabs.nav-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n  .nav-tabs.nav-justified > .active > a,\n  .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs.nav-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n.nav-pills > li {\n  float: left;\n}\n.nav-pills > li > a {\n  border-radius: 4px;\n}\n.nav-pills > li + li {\n  margin-left: 2px;\n}\n.nav-pills > li.active > a,\n.nav-pills > li.active > a:hover,\n.nav-pills > li.active > a:focus {\n  color: #fff;\n  background-color: #337ab7;\n}\n.nav-stacked > li {\n  float: none;\n}\n.nav-stacked > li + li {\n  margin-top: 2px;\n  margin-left: 0;\n}\n.nav-justified {\n  width: 100%;\n}\n.nav-justified > li {\n  float: none;\n}\n.nav-justified > li > a {\n  margin-bottom: 5px;\n  text-align: center;\n}\n.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n@media (min-width: 768px) {\n  .nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n.nav-tabs-justified {\n  border-bottom: 0;\n}\n.nav-tabs-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n.nav-tabs-justified > .active > a,\n.nav-tabs-justified > .active > a:hover,\n.nav-tabs-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n@media (min-width: 768px) {\n  .nav-tabs-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n  .nav-tabs-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n.tab-content > .tab-pane {\n  display: none;\n}\n.tab-content > .active {\n  display: block;\n}\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.navbar {\n  position: relative;\n  min-height: 50px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n}\n@media (min-width: 768px) {\n  .navbar {\n    border-radius: 4px;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-header {\n    float: left;\n  }\n}\n.navbar-collapse {\n  padding-right: 15px;\n  padding-left: 15px;\n  overflow-x: visible;\n  -webkit-overflow-scrolling: touch;\n  border-top: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);\n          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);\n}\n.navbar-collapse.in {\n  overflow-y: auto;\n}\n@media (min-width: 768px) {\n  .navbar-collapse {\n    width: auto;\n    border-top: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n  .navbar-collapse.collapse {\n    display: block !important;\n    height: auto !important;\n    padding-bottom: 0;\n    overflow: visible !important;\n  }\n  .navbar-collapse.in {\n    overflow-y: visible;\n  }\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-static-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n.navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n  max-height: 340px;\n}\n@media (max-device-width: 480px) and (orientation: landscape) {\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    max-height: 200px;\n  }\n}\n.container > .navbar-header,\n.container-fluid > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n@media (min-width: 768px) {\n  .container > .navbar-header,\n  .container-fluid > .navbar-header,\n  .container > .navbar-collapse,\n  .container-fluid > .navbar-collapse {\n    margin-right: 0;\n    margin-left: 0;\n  }\n}\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px;\n}\n@media (min-width: 768px) {\n  .navbar-static-top {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n@media (min-width: 768px) {\n  .navbar-fixed-top,\n  .navbar-fixed-bottom {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px;\n}\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0;\n}\n.navbar-brand {\n  float: left;\n  height: 50px;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px;\n}\n.navbar-brand:hover,\n.navbar-brand:focus {\n  text-decoration: none;\n}\n.navbar-brand > img {\n  display: block;\n}\n@media (min-width: 768px) {\n  .navbar > .container .navbar-brand,\n  .navbar > .container-fluid .navbar-brand {\n    margin-left: -15px;\n  }\n}\n.navbar-toggle {\n  position: relative;\n  float: right;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-right: 15px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.navbar-toggle:focus {\n  outline: 0;\n}\n.navbar-toggle .icon-bar {\n  display: block;\n  width: 22px;\n  height: 2px;\n  border-radius: 1px;\n}\n.navbar-toggle .icon-bar + .icon-bar {\n  margin-top: 4px;\n}\n@media (min-width: 768px) {\n  .navbar-toggle {\n    display: none;\n  }\n}\n.navbar-nav {\n  margin: 7.5px -15px;\n}\n.navbar-nav > li > a {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  line-height: 20px;\n}\n@media (max-width: 767px) {\n  .navbar-nav .open .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n  .navbar-nav .open .dropdown-menu > li > a,\n  .navbar-nav .open .dropdown-menu .dropdown-header {\n    padding: 5px 15px 5px 25px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a {\n    line-height: 20px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-nav .open .dropdown-menu > li > a:focus {\n    background-image: none;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-nav {\n    float: left;\n    margin: 0;\n  }\n  .navbar-nav > li {\n    float: left;\n  }\n  .navbar-nav > li > a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n}\n.navbar-form {\n  padding: 10px 15px;\n  margin-top: 8px;\n  margin-right: -15px;\n  margin-bottom: 8px;\n  margin-left: -15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);\n          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);\n}\n@media (min-width: 768px) {\n  .navbar-form .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .navbar-form .form-control-static {\n    display: inline-block;\n  }\n  .navbar-form .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .navbar-form .input-group .input-group-addon,\n  .navbar-form .input-group .input-group-btn,\n  .navbar-form .input-group .form-control {\n    width: auto;\n  }\n  .navbar-form .input-group > .form-control {\n    width: 100%;\n  }\n  .navbar-form .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .radio,\n  .navbar-form .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .radio label,\n  .navbar-form .checkbox label {\n    padding-left: 0;\n  }\n  .navbar-form .radio input[type=\"radio\"],\n  .navbar-form .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n  .navbar-form .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n@media (max-width: 767px) {\n  .navbar-form .form-group {\n    margin-bottom: 5px;\n  }\n  .navbar-form .form-group:last-child {\n    margin-bottom: 0;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-form {\n    width: auto;\n    padding-top: 0;\n    padding-bottom: 0;\n    margin-right: 0;\n    margin-left: 0;\n    border: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n}\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.navbar-btn {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n.navbar-btn.btn-sm {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.navbar-btn.btn-xs {\n  margin-top: 14px;\n  margin-bottom: 14px;\n}\n.navbar-text {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n@media (min-width: 768px) {\n  .navbar-text {\n    float: left;\n    margin-right: 15px;\n    margin-left: 15px;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-left {\n    float: left !important;\n  }\n  .navbar-right {\n    float: right !important;\n    margin-right: -15px;\n  }\n  .navbar-right ~ .navbar-right {\n    margin-right: 0;\n  }\n}\n.navbar-default {\n  background-color: #f8f8f8;\n  border-color: #e7e7e7;\n}\n.navbar-default .navbar-brand {\n  color: #777;\n}\n.navbar-default .navbar-brand:hover,\n.navbar-default .navbar-brand:focus {\n  color: #5e5e5e;\n  background-color: transparent;\n}\n.navbar-default .navbar-text {\n  color: #777;\n}\n.navbar-default .navbar-nav > li > a {\n  color: #777;\n}\n.navbar-default .navbar-nav > li > a:hover,\n.navbar-default .navbar-nav > li > a:focus {\n  color: #333;\n  background-color: transparent;\n}\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n  color: #555;\n  background-color: #e7e7e7;\n}\n.navbar-default .navbar-nav > .disabled > a,\n.navbar-default .navbar-nav > .disabled > a:hover,\n.navbar-default .navbar-nav > .disabled > a:focus {\n  color: #ccc;\n  background-color: transparent;\n}\n.navbar-default .navbar-toggle {\n  border-color: #ddd;\n}\n.navbar-default .navbar-toggle:hover,\n.navbar-default .navbar-toggle:focus {\n  background-color: #ddd;\n}\n.navbar-default .navbar-toggle .icon-bar {\n  background-color: #888;\n}\n.navbar-default .navbar-collapse,\n.navbar-default .navbar-form {\n  border-color: #e7e7e7;\n}\n.navbar-default .navbar-nav > .open > a,\n.navbar-default .navbar-nav > .open > a:hover,\n.navbar-default .navbar-nav > .open > a:focus {\n  color: #555;\n  background-color: #e7e7e7;\n}\n@media (max-width: 767px) {\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n    color: #777;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #333;\n    background-color: transparent;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #555;\n    background-color: #e7e7e7;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent;\n  }\n}\n.navbar-default .navbar-link {\n  color: #777;\n}\n.navbar-default .navbar-link:hover {\n  color: #333;\n}\n.navbar-default .btn-link {\n  color: #777;\n}\n.navbar-default .btn-link:hover,\n.navbar-default .btn-link:focus {\n  color: #333;\n}\n.navbar-default .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-default .btn-link:hover,\n.navbar-default .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-default .btn-link:focus {\n  color: #ccc;\n}\n.navbar-inverse {\n  background-color: #222;\n  border-color: #080808;\n}\n.navbar-inverse .navbar-brand {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-brand:hover,\n.navbar-inverse .navbar-brand:focus {\n  color: #fff;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-text {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-nav > li > a {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-nav > li > a:hover,\n.navbar-inverse .navbar-nav > li > a:focus {\n  color: #fff;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-nav > .active > a,\n.navbar-inverse .navbar-nav > .active > a:hover,\n.navbar-inverse .navbar-nav > .active > a:focus {\n  color: #fff;\n  background-color: #080808;\n}\n.navbar-inverse .navbar-nav > .disabled > a,\n.navbar-inverse .navbar-nav > .disabled > a:hover,\n.navbar-inverse .navbar-nav > .disabled > a:focus {\n  color: #444;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-toggle {\n  border-color: #333;\n}\n.navbar-inverse .navbar-toggle:hover,\n.navbar-inverse .navbar-toggle:focus {\n  background-color: #333;\n}\n.navbar-inverse .navbar-toggle .icon-bar {\n  background-color: #fff;\n}\n.navbar-inverse .navbar-collapse,\n.navbar-inverse .navbar-form {\n  border-color: #101010;\n}\n.navbar-inverse .navbar-nav > .open > a,\n.navbar-inverse .navbar-nav > .open > a:hover,\n.navbar-inverse .navbar-nav > .open > a:focus {\n  color: #fff;\n  background-color: #080808;\n}\n@media (max-width: 767px) {\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n    border-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n    background-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n    color: #9d9d9d;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #fff;\n    background-color: transparent;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #fff;\n    background-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #444;\n    background-color: transparent;\n  }\n}\n.navbar-inverse .navbar-link {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-link:hover {\n  color: #fff;\n}\n.navbar-inverse .btn-link {\n  color: #9d9d9d;\n}\n.navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link:focus {\n  color: #fff;\n}\n.navbar-inverse .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-inverse .btn-link:focus {\n  color: #444;\n}\n.breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n.breadcrumb > li {\n  display: inline-block;\n}\n.breadcrumb > li + li:before {\n  padding: 0 5px;\n  color: #ccc;\n  content: \"/\\00a0\";\n}\n.breadcrumb > .active {\n  color: #777;\n}\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.pagination > li {\n  display: inline;\n}\n.pagination > li > a,\n.pagination > li > span {\n  position: relative;\n  float: left;\n  padding: 6px 12px;\n  margin-left: -1px;\n  line-height: 1.42857143;\n  color: #337ab7;\n  text-decoration: none;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n.pagination > li:first-child > a,\n.pagination > li:first-child > span {\n  margin-left: 0;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.pagination > li:last-child > a,\n.pagination > li:last-child > span {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.pagination > li > a:hover,\n.pagination > li > span:hover,\n.pagination > li > a:focus,\n.pagination > li > span:focus {\n  color: #23527c;\n  background-color: #eee;\n  border-color: #ddd;\n}\n.pagination > .active > a,\n.pagination > .active > span,\n.pagination > .active > a:hover,\n.pagination > .active > span:hover,\n.pagination > .active > a:focus,\n.pagination > .active > span:focus {\n  z-index: 2;\n  color: #fff;\n  cursor: default;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.pagination > .disabled > span,\n.pagination > .disabled > span:hover,\n.pagination > .disabled > span:focus,\n.pagination > .disabled > a,\n.pagination > .disabled > a:hover,\n.pagination > .disabled > a:focus {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #fff;\n  border-color: #ddd;\n}\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 10px 16px;\n  font-size: 18px;\n}\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 5px 10px;\n  font-size: 12px;\n}\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n.pager {\n  padding-left: 0;\n  margin: 20px 0;\n  text-align: center;\n  list-style: none;\n}\n.pager li {\n  display: inline;\n}\n.pager li > a,\n.pager li > span {\n  display: inline-block;\n  padding: 5px 14px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n}\n.pager li > a:hover,\n.pager li > a:focus {\n  text-decoration: none;\n  background-color: #eee;\n}\n.pager .next > a,\n.pager .next > span {\n  float: right;\n}\n.pager .previous > a,\n.pager .previous > span {\n  float: left;\n}\n.pager .disabled > a,\n.pager .disabled > a:hover,\n.pager .disabled > a:focus,\n.pager .disabled > span {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #fff;\n}\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n}\na.label:hover,\na.label:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.label:empty {\n  display: none;\n}\n.btn .label {\n  position: relative;\n  top: -1px;\n}\n.label-default {\n  background-color: #777;\n}\n.label-default[href]:hover,\n.label-default[href]:focus {\n  background-color: #5e5e5e;\n}\n.label-primary {\n  background-color: #337ab7;\n}\n.label-primary[href]:hover,\n.label-primary[href]:focus {\n  background-color: #286090;\n}\n.label-success {\n  background-color: #5cb85c;\n}\n.label-success[href]:hover,\n.label-success[href]:focus {\n  background-color: #449d44;\n}\n.label-info {\n  background-color: #5bc0de;\n}\n.label-info[href]:hover,\n.label-info[href]:focus {\n  background-color: #31b0d5;\n}\n.label-warning {\n  background-color: #f0ad4e;\n}\n.label-warning[href]:hover,\n.label-warning[href]:focus {\n  background-color: #ec971f;\n}\n.label-danger {\n  background-color: #d9534f;\n}\n.label-danger[href]:hover,\n.label-danger[href]:focus {\n  background-color: #c9302c;\n}\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  background-color: #777;\n  border-radius: 10px;\n}\n.badge:empty {\n  display: none;\n}\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n.btn-xs .badge,\n.btn-group-xs > .btn .badge {\n  top: 0;\n  padding: 1px 5px;\n}\na.badge:hover,\na.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.list-group-item.active > .badge,\n.nav-pills > .active > a > .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.list-group-item > .badge {\n  float: right;\n}\n.list-group-item > .badge + .badge {\n  margin-right: 5px;\n}\n.nav-pills > li > a > .badge {\n  margin-left: 3px;\n}\n.jumbotron {\n  padding: 30px 15px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #eee;\n}\n.jumbotron h1,\n.jumbotron .h1 {\n  color: inherit;\n}\n.jumbotron p {\n  margin-bottom: 15px;\n  font-size: 21px;\n  font-weight: 200;\n}\n.jumbotron > hr {\n  border-top-color: #d5d5d5;\n}\n.container .jumbotron,\n.container-fluid .jumbotron {\n  border-radius: 6px;\n}\n.jumbotron .container {\n  max-width: 100%;\n}\n@media screen and (min-width: 768px) {\n  .jumbotron {\n    padding: 48px 0;\n  }\n  .container .jumbotron,\n  .container-fluid .jumbotron {\n    padding-right: 60px;\n    padding-left: 60px;\n  }\n  .jumbotron h1,\n  .jumbotron .h1 {\n    font-size: 63px;\n  }\n}\n.thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 20px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: border .2s ease-in-out;\n       -o-transition: border .2s ease-in-out;\n          transition: border .2s ease-in-out;\n}\n.thumbnail > img,\n.thumbnail a > img {\n  margin-right: auto;\n  margin-left: auto;\n}\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: #337ab7;\n}\n.thumbnail .caption {\n  padding: 9px;\n  color: #333;\n}\n.alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.alert h4 {\n  margin-top: 0;\n  color: inherit;\n}\n.alert .alert-link {\n  font-weight: bold;\n}\n.alert > p,\n.alert > ul {\n  margin-bottom: 0;\n}\n.alert > p + p {\n  margin-top: 5px;\n}\n.alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px;\n}\n.alert-dismissable .close,\n.alert-dismissible .close {\n  position: relative;\n  top: -2px;\n  right: -21px;\n  color: inherit;\n}\n.alert-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n.alert-success hr {\n  border-top-color: #c9e2b3;\n}\n.alert-success .alert-link {\n  color: #2b542c;\n}\n.alert-info {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n.alert-info hr {\n  border-top-color: #a6e1ec;\n}\n.alert-info .alert-link {\n  color: #245269;\n}\n.alert-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n.alert-warning hr {\n  border-top-color: #f7e1b5;\n}\n.alert-warning .alert-link {\n  color: #66512c;\n}\n.alert-danger {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n.alert-danger hr {\n  border-top-color: #e4b9c0;\n}\n.alert-danger .alert-link {\n  color: #843534;\n}\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@-o-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n.progress {\n  height: 20px;\n  margin-bottom: 20px;\n  overflow: hidden;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\n          box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\n}\n.progress-bar {\n  float: left;\n  width: 0;\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  color: #fff;\n  text-align: center;\n  background-color: #337ab7;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);\n          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);\n  -webkit-transition: width .6s ease;\n       -o-transition: width .6s ease;\n          transition: width .6s ease;\n}\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  -webkit-background-size: 40px 40px;\n          background-size: 40px 40px;\n}\n.progress.active .progress-bar,\n.progress-bar.active {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n       -o-animation: progress-bar-stripes 2s linear infinite;\n          animation: progress-bar-stripes 2s linear infinite;\n}\n.progress-bar-success {\n  background-color: #5cb85c;\n}\n.progress-striped .progress-bar-success {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-info {\n  background-color: #5bc0de;\n}\n.progress-striped .progress-bar-info {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-warning {\n  background-color: #f0ad4e;\n}\n.progress-striped .progress-bar-warning {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-danger {\n  background-color: #d9534f;\n}\n.progress-striped .progress-bar-danger {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.media {\n  margin-top: 15px;\n}\n.media:first-child {\n  margin-top: 0;\n}\n.media,\n.media-body {\n  overflow: hidden;\n  zoom: 1;\n}\n.media-body {\n  width: 10000px;\n}\n.media-object {\n  display: block;\n}\n.media-right,\n.media > .pull-right {\n  padding-left: 10px;\n}\n.media-left,\n.media > .pull-left {\n  padding-right: 10px;\n}\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top;\n}\n.media-middle {\n  vertical-align: middle;\n}\n.media-bottom {\n  vertical-align: bottom;\n}\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.media-list {\n  padding-left: 0;\n  list-style: none;\n}\n.list-group {\n  padding-left: 0;\n  margin-bottom: 20px;\n}\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n.list-group-item:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\na.list-group-item {\n  color: #555;\n}\na.list-group-item .list-group-item-heading {\n  color: #333;\n}\na.list-group-item:hover,\na.list-group-item:focus {\n  color: #555;\n  text-decoration: none;\n  background-color: #f5f5f5;\n}\n.list-group-item.disabled,\n.list-group-item.disabled:hover,\n.list-group-item.disabled:focus {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #eee;\n}\n.list-group-item.disabled .list-group-item-heading,\n.list-group-item.disabled:hover .list-group-item-heading,\n.list-group-item.disabled:focus .list-group-item-heading {\n  color: inherit;\n}\n.list-group-item.disabled .list-group-item-text,\n.list-group-item.disabled:hover .list-group-item-text,\n.list-group-item.disabled:focus .list-group-item-text {\n  color: #777;\n}\n.list-group-item.active,\n.list-group-item.active:hover,\n.list-group-item.active:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.list-group-item.active .list-group-item-heading,\n.list-group-item.active:hover .list-group-item-heading,\n.list-group-item.active:focus .list-group-item-heading,\n.list-group-item.active .list-group-item-heading > small,\n.list-group-item.active:hover .list-group-item-heading > small,\n.list-group-item.active:focus .list-group-item-heading > small,\n.list-group-item.active .list-group-item-heading > .small,\n.list-group-item.active:hover .list-group-item-heading > .small,\n.list-group-item.active:focus .list-group-item-heading > .small {\n  color: inherit;\n}\n.list-group-item.active .list-group-item-text,\n.list-group-item.active:hover .list-group-item-text,\n.list-group-item.active:focus .list-group-item-text {\n  color: #c7ddef;\n}\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n}\na.list-group-item-success {\n  color: #3c763d;\n}\na.list-group-item-success .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-success:hover,\na.list-group-item-success:focus {\n  color: #3c763d;\n  background-color: #d0e9c6;\n}\na.list-group-item-success.active,\na.list-group-item-success.active:hover,\na.list-group-item-success.active:focus {\n  color: #fff;\n  background-color: #3c763d;\n  border-color: #3c763d;\n}\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7;\n}\na.list-group-item-info {\n  color: #31708f;\n}\na.list-group-item-info .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-info:hover,\na.list-group-item-info:focus {\n  color: #31708f;\n  background-color: #c4e3f3;\n}\na.list-group-item-info.active,\na.list-group-item-info.active:hover,\na.list-group-item-info.active:focus {\n  color: #fff;\n  background-color: #31708f;\n  border-color: #31708f;\n}\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n}\na.list-group-item-warning {\n  color: #8a6d3b;\n}\na.list-group-item-warning .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-warning:hover,\na.list-group-item-warning:focus {\n  color: #8a6d3b;\n  background-color: #faf2cc;\n}\na.list-group-item-warning.active,\na.list-group-item-warning.active:hover,\na.list-group-item-warning.active:focus {\n  color: #fff;\n  background-color: #8a6d3b;\n  border-color: #8a6d3b;\n}\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede;\n}\na.list-group-item-danger {\n  color: #a94442;\n}\na.list-group-item-danger .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-danger:hover,\na.list-group-item-danger:focus {\n  color: #a94442;\n  background-color: #ebcccc;\n}\na.list-group-item-danger.active,\na.list-group-item-danger.active:hover,\na.list-group-item-danger.active:focus {\n  color: #fff;\n  background-color: #a94442;\n  border-color: #a94442;\n}\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3;\n}\n.panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n}\n.panel-body {\n  padding: 15px;\n}\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel-heading > .dropdown .dropdown-toggle {\n  color: inherit;\n}\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: inherit;\n}\n.panel-title > a,\n.panel-title > small,\n.panel-title > .small,\n.panel-title > small > a,\n.panel-title > .small > a {\n  color: inherit;\n}\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #ddd;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .list-group,\n.panel > .panel-collapse > .list-group {\n  margin-bottom: 0;\n}\n.panel > .list-group .list-group-item,\n.panel > .panel-collapse > .list-group .list-group-item {\n  border-width: 1px 0;\n  border-radius: 0;\n}\n.panel > .list-group:first-child .list-group-item:first-child,\n.panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n  border-top: 0;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .list-group:last-child .list-group-item:last-child,\n.panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n  border-bottom: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0;\n}\n.list-group + .panel-footer {\n  border-top-width: 0;\n}\n.panel > .table,\n.panel > .table-responsive > .table,\n.panel > .panel-collapse > .table {\n  margin-bottom: 0;\n}\n.panel > .table caption,\n.panel > .table-responsive > .table caption,\n.panel > .panel-collapse > .table caption {\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n  border-top-left-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n  border-top-right-radius: 3px;\n}\n.panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n  border-bottom-right-radius: 3px;\n}\n.panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive,\n.panel > .table + .panel-body,\n.panel > .table-responsive + .panel-body {\n  border-top: 1px solid #ddd;\n}\n.panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0;\n}\n.panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n  border: 0;\n}\n.panel > .table-bordered > thead > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n.panel > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-bordered > thead > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n.panel > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-bordered > tfoot > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n  border-left: 0;\n}\n.panel > .table-bordered > thead > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n.panel > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-bordered > thead > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n.panel > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-bordered > tfoot > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n  border-right: 0;\n}\n.panel > .table-bordered > thead > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n.panel > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-bordered > thead > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n.panel > .table-bordered > tbody > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n  border-bottom: 0;\n}\n.panel > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-bordered > tfoot > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n  border-bottom: 0;\n}\n.panel > .table-responsive {\n  margin-bottom: 0;\n  border: 0;\n}\n.panel-group {\n  margin-bottom: 20px;\n}\n.panel-group .panel {\n  margin-bottom: 0;\n  border-radius: 4px;\n}\n.panel-group .panel + .panel {\n  margin-top: 5px;\n}\n.panel-group .panel-heading {\n  border-bottom: 0;\n}\n.panel-group .panel-heading + .panel-collapse > .panel-body,\n.panel-group .panel-heading + .panel-collapse > .list-group {\n  border-top: 1px solid #ddd;\n}\n.panel-group .panel-footer {\n  border-top: 0;\n}\n.panel-group .panel-footer + .panel-collapse .panel-body {\n  border-bottom: 1px solid #ddd;\n}\n.panel-default {\n  border-color: #ddd;\n}\n.panel-default > .panel-heading {\n  color: #333;\n  background-color: #f5f5f5;\n  border-color: #ddd;\n}\n.panel-default > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ddd;\n}\n.panel-default > .panel-heading .badge {\n  color: #f5f5f5;\n  background-color: #333;\n}\n.panel-default > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ddd;\n}\n.panel-primary {\n  border-color: #337ab7;\n}\n.panel-primary > .panel-heading {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.panel-primary > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #337ab7;\n}\n.panel-primary > .panel-heading .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.panel-primary > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #337ab7;\n}\n.panel-success {\n  border-color: #d6e9c6;\n}\n.panel-success > .panel-heading {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n.panel-success > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #d6e9c6;\n}\n.panel-success > .panel-heading .badge {\n  color: #dff0d8;\n  background-color: #3c763d;\n}\n.panel-success > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #d6e9c6;\n}\n.panel-info {\n  border-color: #bce8f1;\n}\n.panel-info > .panel-heading {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n.panel-info > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #bce8f1;\n}\n.panel-info > .panel-heading .badge {\n  color: #d9edf7;\n  background-color: #31708f;\n}\n.panel-info > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #bce8f1;\n}\n.panel-warning {\n  border-color: #faebcc;\n}\n.panel-warning > .panel-heading {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n.panel-warning > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #faebcc;\n}\n.panel-warning > .panel-heading .badge {\n  color: #fcf8e3;\n  background-color: #8a6d3b;\n}\n.panel-warning > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #faebcc;\n}\n.panel-danger {\n  border-color: #ebccd1;\n}\n.panel-danger > .panel-heading {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n.panel-danger > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ebccd1;\n}\n.panel-danger > .panel-heading .badge {\n  color: #f2dede;\n  background-color: #a94442;\n}\n.panel-danger > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ebccd1;\n}\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden;\n}\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%;\n}\n.embed-responsive-4by3 {\n  padding-bottom: 75%;\n}\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);\n}\n.well blockquote {\n  border-color: #ddd;\n  border-color: rgba(0, 0, 0, .15);\n}\n.well-lg {\n  padding: 24px;\n  border-radius: 6px;\n}\n.well-sm {\n  padding: 9px;\n  border-radius: 3px;\n}\n.close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  filter: alpha(opacity=20);\n  opacity: .2;\n}\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\nbutton.close {\n  -webkit-appearance: none;\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n.modal-open {\n  overflow: hidden;\n}\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n.modal.fade .modal-dialog {\n  -webkit-transition: -webkit-transform .3s ease-out;\n       -o-transition:      -o-transform .3s ease-out;\n          transition:         transform .3s ease-out;\n  -webkit-transform: translate(0, -25%);\n      -ms-transform: translate(0, -25%);\n       -o-transform: translate(0, -25%);\n          transform: translate(0, -25%);\n}\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n      -ms-transform: translate(0, 0);\n       -o-transform: translate(0, 0);\n          transform: translate(0, 0);\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n}\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, .2);\n  border-radius: 6px;\n  outline: 0;\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n          box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000;\n}\n.modal-backdrop.fade {\n  filter: alpha(opacity=0);\n  opacity: 0;\n}\n.modal-backdrop.in {\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\n.modal-header {\n  min-height: 16.42857143px;\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5;\n}\n.modal-header .close {\n  margin-top: -2px;\n}\n.modal-title {\n  margin: 0;\n  line-height: 1.42857143;\n}\n.modal-body {\n  position: relative;\n  padding: 15px;\n}\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5;\n}\n.modal-footer .btn + .btn {\n  margin-bottom: 0;\n  margin-left: 5px;\n}\n.modal-footer .btn-group .btn + .btn {\n  margin-left: -1px;\n}\n.modal-footer .btn-block + .btn-block {\n  margin-left: 0;\n}\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto;\n  }\n  .modal-content {\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n            box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n  }\n  .modal-sm {\n    width: 300px;\n  }\n}\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px;\n  }\n}\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 1.4;\n  filter: alpha(opacity=0);\n  opacity: 0;\n}\n.tooltip.in {\n  filter: alpha(opacity=90);\n  opacity: .9;\n}\n.tooltip.top {\n  padding: 5px 0;\n  margin-top: -3px;\n}\n.tooltip.right {\n  padding: 0 5px;\n  margin-left: 3px;\n}\n.tooltip.bottom {\n  padding: 5px 0;\n  margin-top: 3px;\n}\n.tooltip.left {\n  padding: 0 5px;\n  margin-left: -3px;\n}\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  background-color: #000;\n  border-radius: 4px;\n}\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.top-left .tooltip-arrow {\n  right: 5px;\n  bottom: 0;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000;\n}\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000;\n}\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: left;\n  white-space: normal;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, .2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, .2);\n          box-shadow: 0 5px 10px rgba(0, 0, 0, .2);\n}\n.popover.top {\n  margin-top: -10px;\n}\n.popover.right {\n  margin-left: 10px;\n}\n.popover.bottom {\n  margin-top: 10px;\n}\n.popover.left {\n  margin-left: -10px;\n}\n.popover-title {\n  padding: 8px 14px;\n  margin: 0;\n  font-size: 14px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0;\n}\n.popover-content {\n  padding: 9px 14px;\n}\n.popover > .arrow,\n.popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.popover > .arrow {\n  border-width: 11px;\n}\n.popover > .arrow:after {\n  content: \"\";\n  border-width: 10px;\n}\n.popover.top > .arrow {\n  bottom: -11px;\n  left: 50%;\n  margin-left: -11px;\n  border-top-color: #999;\n  border-top-color: rgba(0, 0, 0, .25);\n  border-bottom-width: 0;\n}\n.popover.top > .arrow:after {\n  bottom: 1px;\n  margin-left: -10px;\n  content: \" \";\n  border-top-color: #fff;\n  border-bottom-width: 0;\n}\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-right-color: #999;\n  border-right-color: rgba(0, 0, 0, .25);\n  border-left-width: 0;\n}\n.popover.right > .arrow:after {\n  bottom: -10px;\n  left: 1px;\n  content: \" \";\n  border-right-color: #fff;\n  border-left-width: 0;\n}\n.popover.bottom > .arrow {\n  top: -11px;\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999;\n  border-bottom-color: rgba(0, 0, 0, .25);\n}\n.popover.bottom > .arrow:after {\n  top: 1px;\n  margin-left: -10px;\n  content: \" \";\n  border-top-width: 0;\n  border-bottom-color: #fff;\n}\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999;\n  border-left-color: rgba(0, 0, 0, .25);\n}\n.popover.left > .arrow:after {\n  right: 1px;\n  bottom: -10px;\n  content: \" \";\n  border-right-width: 0;\n  border-left-color: #fff;\n}\n.carousel {\n  position: relative;\n}\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.carousel-inner > .item {\n  position: relative;\n  display: none;\n  -webkit-transition: .6s ease-in-out left;\n       -o-transition: .6s ease-in-out left;\n          transition: .6s ease-in-out left;\n}\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  line-height: 1;\n}\n@media all and (transform-3d), (-webkit-transform-3d) {\n  .carousel-inner > .item {\n    -webkit-transition: -webkit-transform .6s ease-in-out;\n         -o-transition:      -o-transform .6s ease-in-out;\n            transition:         transform .6s ease-in-out;\n\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    -webkit-perspective: 1000;\n            perspective: 1000;\n  }\n  .carousel-inner > .item.next,\n  .carousel-inner > .item.active.right {\n    left: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n  }\n  .carousel-inner > .item.prev,\n  .carousel-inner > .item.active.left {\n    left: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n  }\n  .carousel-inner > .item.next.left,\n  .carousel-inner > .item.prev.right,\n  .carousel-inner > .item.active {\n    left: 0;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n.carousel-inner > .active,\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  display: block;\n}\n.carousel-inner > .active {\n  left: 0;\n}\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.carousel-inner > .next {\n  left: 100%;\n}\n.carousel-inner > .prev {\n  left: -100%;\n}\n.carousel-inner > .next.left,\n.carousel-inner > .prev.right {\n  left: 0;\n}\n.carousel-inner > .active.left {\n  left: -100%;\n}\n.carousel-inner > .active.right {\n  left: 100%;\n}\n.carousel-control {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 15%;\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\n.carousel-control.left {\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);\n  background-image:      -o-linear-gradient(left, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .5)), to(rgba(0, 0, 0, .0001)));\n  background-image:         linear-gradient(to right, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);\n  background-repeat: repeat-x;\n}\n.carousel-control.right {\n  right: 0;\n  left: auto;\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);\n  background-image:      -o-linear-gradient(left, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .0001)), to(rgba(0, 0, 0, .5)));\n  background-image:         linear-gradient(to right, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);\n  background-repeat: repeat-x;\n}\n.carousel-control:hover,\n.carousel-control:focus {\n  color: #fff;\n  text-decoration: none;\n  filter: alpha(opacity=90);\n  outline: 0;\n  opacity: .9;\n}\n.carousel-control .icon-prev,\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-left,\n.carousel-control .glyphicon-chevron-right {\n  position: absolute;\n  top: 50%;\n  z-index: 5;\n  display: inline-block;\n}\n.carousel-control .icon-prev,\n.carousel-control .glyphicon-chevron-left {\n  left: 50%;\n  margin-left: -10px;\n}\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-right {\n  right: 50%;\n  margin-right: -10px;\n}\n.carousel-control .icon-prev,\n.carousel-control .icon-next {\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  font-family: serif;\n  line-height: 1;\n}\n.carousel-control .icon-prev:before {\n  content: '\\2039';\n}\n.carousel-control .icon-next:before {\n  content: '\\203a';\n}\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  padding-left: 0;\n  margin-left: -30%;\n  text-align: center;\n  list-style: none;\n}\n.carousel-indicators li {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin: 1px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #000 \\9;\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px solid #fff;\n  border-radius: 10px;\n}\n.carousel-indicators .active {\n  width: 12px;\n  height: 12px;\n  margin: 0;\n  background-color: #fff;\n}\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);\n}\n.carousel-caption .btn {\n  text-shadow: none;\n}\n@media screen and (min-width: 768px) {\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -15px;\n    font-size: 30px;\n  }\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .icon-prev {\n    margin-left: -15px;\n  }\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-next {\n    margin-right: -15px;\n  }\n  .carousel-caption {\n    right: 20%;\n    left: 20%;\n    padding-bottom: 30px;\n  }\n  .carousel-indicators {\n    bottom: 20px;\n  }\n}\n.clearfix:before,\n.clearfix:after,\n.dl-horizontal dd:before,\n.dl-horizontal dd:after,\n.container:before,\n.container:after,\n.container-fluid:before,\n.container-fluid:after,\n.row:before,\n.row:after,\n.form-horizontal .form-group:before,\n.form-horizontal .form-group:after,\n.btn-toolbar:before,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:before,\n.btn-group-vertical > .btn-group:after,\n.nav:before,\n.nav:after,\n.navbar:before,\n.navbar:after,\n.navbar-header:before,\n.navbar-header:after,\n.navbar-collapse:before,\n.navbar-collapse:after,\n.pager:before,\n.pager:after,\n.panel-body:before,\n.panel-body:after,\n.modal-footer:before,\n.modal-footer:after {\n  display: table;\n  content: \" \";\n}\n.clearfix:after,\n.dl-horizontal dd:after,\n.container:after,\n.container-fluid:after,\n.row:after,\n.form-horizontal .form-group:after,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:after,\n.nav:after,\n.navbar:after,\n.navbar-header:after,\n.navbar-collapse:after,\n.pager:after,\n.panel-body:after,\n.modal-footer:after {\n  clear: both;\n}\n.center-block {\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n}\n.pull-right {\n  float: right !important;\n}\n.pull-left {\n  float: left !important;\n}\n.hide {\n  display: none !important;\n}\n.show {\n  display: block !important;\n}\n.invisible {\n  visibility: hidden;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.hidden {\n  display: none !important;\n}\n.affix {\n  position: fixed;\n}\n@-ms-viewport {\n  width: device-width;\n}\n.visible-xs,\n.visible-sm,\n.visible-md,\n.visible-lg {\n  display: none !important;\n}\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important;\n}\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important;\n  }\n  table.visible-xs {\n    display: table;\n  }\n  tr.visible-xs {\n    display: table-row !important;\n  }\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important;\n  }\n  table.visible-sm {\n    display: table;\n  }\n  tr.visible-sm {\n    display: table-row !important;\n  }\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important;\n  }\n  table.visible-md {\n    display: table;\n  }\n  tr.visible-md {\n    display: table-row !important;\n  }\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important;\n  }\n  table.visible-lg {\n    display: table;\n  }\n  tr.visible-lg {\n    display: table-row !important;\n  }\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important;\n  }\n}\n.visible-print {\n  display: none !important;\n}\n@media print {\n  .visible-print {\n    display: block !important;\n  }\n  table.visible-print {\n    display: table;\n  }\n  tr.visible-print {\n    display: table-row !important;\n  }\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important;\n  }\n}\n.visible-print-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-block {\n    display: block !important;\n  }\n}\n.visible-print-inline {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline {\n    display: inline !important;\n  }\n}\n.visible-print-inline-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline-block {\n    display: inline-block !important;\n  }\n}\n@media print {\n  .hidden-print {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=bootstrap.css.map */\n"]}]);

/***/ },
/* 26 */
/*!*******************************************************************!*\
  !*** ./bower_components/react-router/build/global/ReactRouter.js ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(/*! react */ 1));
		else if(typeof define === 'function' && define.amd)
			define(["react"], factory);
		else if(typeof exports === 'object')
			exports["ReactRouter"] = factory(require("react"));
		else
			root["ReactRouter"] = factory(root["React"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_21__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		exports.DefaultRoute = __webpack_require__(1);
		exports.Link = __webpack_require__(2);
		exports.NotFoundRoute = __webpack_require__(3);
		exports.Redirect = __webpack_require__(4);
		exports.Route = __webpack_require__(5);
		exports.RouteHandler = __webpack_require__(6);
	
		exports.HashLocation = __webpack_require__(7);
		exports.HistoryLocation = __webpack_require__(8);
		exports.RefreshLocation = __webpack_require__(9);
		exports.StaticLocation = __webpack_require__(10);
		exports.TestLocation = __webpack_require__(11);
	
		exports.ImitateBrowserBehavior = __webpack_require__(12);
		exports.ScrollToTopBehavior = __webpack_require__(13);
	
		exports.History = __webpack_require__(14);
		exports.Navigation = __webpack_require__(15);
		exports.State = __webpack_require__(16);
	
		exports.createRoute = __webpack_require__(17).createRoute;
		exports.createDefaultRoute = __webpack_require__(17).createDefaultRoute;
		exports.createNotFoundRoute = __webpack_require__(17).createNotFoundRoute;
		exports.createRedirect = __webpack_require__(17).createRedirect;
		exports.createRoutesFromReactChildren = __webpack_require__(18);
		exports.create = __webpack_require__(19);
		exports.run = __webpack_require__(20);
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
		var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
		var PropTypes = __webpack_require__(22);
		var RouteHandler = __webpack_require__(6);
		var Route = __webpack_require__(5);
	
		/**
		 * A <DefaultRoute> component is a special kind of <Route> that
		 * renders when its parent matches but none of its siblings do.
		 * Only one such route may be used at any given level in the
		 * route hierarchy.
		 */
	
		var DefaultRoute = (function (_Route) {
		  function DefaultRoute() {
		    _classCallCheck(this, DefaultRoute);
	
		    if (_Route != null) {
		      _Route.apply(this, arguments);
		    }
		  }
	
		  _inherits(DefaultRoute, _Route);
	
		  return DefaultRoute;
		})(Route);
	
		// TODO: Include these in the above class definition
		// once we can use ES7 property initializers.
		// https://github.com/babel/babel/issues/619
	
		DefaultRoute.propTypes = {
		  name: PropTypes.string,
		  path: PropTypes.falsy,
		  children: PropTypes.falsy,
		  handler: PropTypes.func.isRequired
		};
	
		DefaultRoute.defaultProps = {
		  handler: RouteHandler
		};
	
		module.exports = DefaultRoute;
	
	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
		var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
		var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
		var React = __webpack_require__(21);
		var assign = __webpack_require__(33);
		var PropTypes = __webpack_require__(22);
	
		function isLeftClickEvent(event) {
		  return event.button === 0;
		}
	
		function isModifiedEvent(event) {
		  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
		}
	
		/**
		 * <Link> components are used to create an <a> element that links to a route.
		 * When that route is active, the link gets an "active" class name (or the
		 * value of its `activeClassName` prop).
		 *
		 * For example, assuming you have the following route:
		 *
		 *   <Route name="showPost" path="/posts/:postID" handler={Post}/>
		 *
		 * You could use the following component to link to that route:
		 *
		 *   <Link to="showPost" params={{ postID: "123" }} />
		 *
		 * In addition to params, links may pass along query string parameters
		 * using the `query` prop.
		 *
		 *   <Link to="showPost" params={{ postID: "123" }} query={{ show:true }}/>
		 */
	
		var Link = (function (_React$Component) {
		  function Link() {
		    _classCallCheck(this, Link);
	
		    if (_React$Component != null) {
		      _React$Component.apply(this, arguments);
		    }
		  }
	
		  _inherits(Link, _React$Component);
	
		  _createClass(Link, {
		    handleClick: {
		      value: function handleClick(event) {
		        var allowTransition = true;
		        var clickResult;
	
		        if (this.props.onClick) clickResult = this.props.onClick(event);
	
		        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
		          return;
		        }if (clickResult === false || event.defaultPrevented === true) allowTransition = false;
	
		        event.preventDefault();
	
		        if (allowTransition) this.context.router.transitionTo(this.props.to, this.props.params, this.props.query);
		      }
		    },
		    getHref: {
	
		      /**
		       * Returns the value of the "href" attribute to use on the DOM element.
		       */
	
		      value: function getHref() {
		        return this.context.router.makeHref(this.props.to, this.props.params, this.props.query);
		      }
		    },
		    getClassName: {
	
		      /**
		       * Returns the value of the "class" attribute to use on the DOM element, which contains
		       * the value of the activeClassName property when this <Link> is active.
		       */
	
		      value: function getClassName() {
		        var className = this.props.className;
	
		        if (this.getActiveState()) className += " " + this.props.activeClassName;
	
		        return className;
		      }
		    },
		    getActiveState: {
		      value: function getActiveState() {
		        return this.context.router.isActive(this.props.to, this.props.params, this.props.query);
		      }
		    },
		    render: {
		      value: function render() {
		        var props = assign({}, this.props, {
		          href: this.getHref(),
		          className: this.getClassName(),
		          onClick: this.handleClick.bind(this)
		        });
	
		        if (props.activeStyle && this.getActiveState()) props.style = props.activeStyle;
	
		        return React.DOM.a(props, this.props.children);
		      }
		    }
		  });
	
		  return Link;
		})(React.Component);
	
		// TODO: Include these in the above class definition
		// once we can use ES7 property initializers.
		// https://github.com/babel/babel/issues/619
	
		Link.contextTypes = {
		  router: PropTypes.router.isRequired
		};
	
		Link.propTypes = {
		  activeClassName: PropTypes.string.isRequired,
		  to: PropTypes.oneOfType([PropTypes.string, PropTypes.route]).isRequired,
		  params: PropTypes.object,
		  query: PropTypes.object,
		  activeStyle: PropTypes.object,
		  onClick: PropTypes.func
		};
	
		Link.defaultProps = {
		  activeClassName: "active",
		  className: ""
		};
	
		module.exports = Link;
	
	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
		var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
		var PropTypes = __webpack_require__(22);
		var RouteHandler = __webpack_require__(6);
		var Route = __webpack_require__(5);
	
		/**
		 * A <NotFoundRoute> is a special kind of <Route> that
		 * renders when the beginning of its parent's path matches
		 * but none of its siblings do, including any <DefaultRoute>.
		 * Only one such route may be used at any given level in the
		 * route hierarchy.
		 */
	
		var NotFoundRoute = (function (_Route) {
		  function NotFoundRoute() {
		    _classCallCheck(this, NotFoundRoute);
	
		    if (_Route != null) {
		      _Route.apply(this, arguments);
		    }
		  }
	
		  _inherits(NotFoundRoute, _Route);
	
		  return NotFoundRoute;
		})(Route);
	
		// TODO: Include these in the above class definition
		// once we can use ES7 property initializers.
		// https://github.com/babel/babel/issues/619
	
		NotFoundRoute.propTypes = {
		  name: PropTypes.string,
		  path: PropTypes.falsy,
		  children: PropTypes.falsy,
		  handler: PropTypes.func.isRequired
		};
	
		NotFoundRoute.defaultProps = {
		  handler: RouteHandler
		};
	
		module.exports = NotFoundRoute;
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
		var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
		var PropTypes = __webpack_require__(22);
		var Route = __webpack_require__(5);
	
		/**
		 * A <Redirect> component is a special kind of <Route> that always
		 * redirects to another route when it matches.
		 */
	
		var Redirect = (function (_Route) {
		  function Redirect() {
		    _classCallCheck(this, Redirect);
	
		    if (_Route != null) {
		      _Route.apply(this, arguments);
		    }
		  }
	
		  _inherits(Redirect, _Route);
	
		  return Redirect;
		})(Route);
	
		// TODO: Include these in the above class definition
		// once we can use ES7 property initializers.
		// https://github.com/babel/babel/issues/619
	
		Redirect.propTypes = {
		  path: PropTypes.string,
		  from: PropTypes.string, // Alias for path.
		  to: PropTypes.string,
		  handler: PropTypes.falsy
		};
	
		// Redirects should not have a default handler
		Redirect.defaultProps = {};
	
		module.exports = Redirect;
	
	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
		var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
		var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
		var React = __webpack_require__(21);
		var invariant = __webpack_require__(34);
		var PropTypes = __webpack_require__(22);
		var RouteHandler = __webpack_require__(6);
	
		/**
		 * <Route> components specify components that are rendered to the page when the
		 * URL matches a given pattern.
		 *
		 * Routes are arranged in a nested tree structure. When a new URL is requested,
		 * the tree is searched depth-first to find a route whose path matches the URL.
		 * When one is found, all routes in the tree that lead to it are considered
		 * "active" and their components are rendered into the DOM, nested in the same
		 * order as they are in the tree.
		 *
		 * The preferred way to configure a router is using JSX. The XML-like syntax is
		 * a great way to visualize how routes are laid out in an application.
		 *
		 *   var routes = [
		 *     <Route handler={App}>
		 *       <Route name="login" handler={Login}/>
		 *       <Route name="logout" handler={Logout}/>
		 *       <Route name="about" handler={About}/>
		 *     </Route>
		 *   ];
		 *   
		 *   Router.run(routes, function (Handler) {
		 *     React.render(<Handler/>, document.body);
		 *   });
		 *
		 * Handlers for Route components that contain children can render their active
		 * child route using a <RouteHandler> element.
		 *
		 *   var App = React.createClass({
		 *     render: function () {
		 *       return (
		 *         <div class="application">
		 *           <RouteHandler/>
		 *         </div>
		 *       );
		 *     }
		 *   });
		 *
		 * If no handler is provided for the route, it will render a matched child route.
		 */
	
		var Route = (function (_React$Component) {
		  function Route() {
		    _classCallCheck(this, Route);
	
		    if (_React$Component != null) {
		      _React$Component.apply(this, arguments);
		    }
		  }
	
		  _inherits(Route, _React$Component);
	
		  _createClass(Route, {
		    render: {
		      value: function render() {
		        invariant(false, "%s elements are for router configuration only and should not be rendered", this.constructor.name);
		      }
		    }
		  });
	
		  return Route;
		})(React.Component);
	
		// TODO: Include these in the above class definition
		// once we can use ES7 property initializers.
		// https://github.com/babel/babel/issues/619
	
		Route.propTypes = {
		  name: PropTypes.string,
		  path: PropTypes.string,
		  handler: PropTypes.func,
		  ignoreScrollBehavior: PropTypes.bool
		};
	
		Route.defaultProps = {
		  handler: RouteHandler
		};
	
		module.exports = Route;
	
	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
		var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
		var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
		var React = __webpack_require__(21);
		var ContextWrapper = __webpack_require__(23);
		var assign = __webpack_require__(33);
		var PropTypes = __webpack_require__(22);
	
		var REF_NAME = "__routeHandler__";
	
		/**
		 * A <RouteHandler> component renders the active child route handler
		 * when routes are nested.
		 */
	
		var RouteHandler = (function (_React$Component) {
		  function RouteHandler() {
		    _classCallCheck(this, RouteHandler);
	
		    if (_React$Component != null) {
		      _React$Component.apply(this, arguments);
		    }
		  }
	
		  _inherits(RouteHandler, _React$Component);
	
		  _createClass(RouteHandler, {
		    getChildContext: {
		      value: function getChildContext() {
		        return {
		          routeDepth: this.context.routeDepth + 1
		        };
		      }
		    },
		    componentDidMount: {
		      value: function componentDidMount() {
		        this._updateRouteComponent(this.refs[REF_NAME]);
		      }
		    },
		    componentDidUpdate: {
		      value: function componentDidUpdate() {
		        this._updateRouteComponent(this.refs[REF_NAME]);
		      }
		    },
		    componentWillUnmount: {
		      value: function componentWillUnmount() {
		        this._updateRouteComponent(null);
		      }
		    },
		    _updateRouteComponent: {
		      value: function _updateRouteComponent(component) {
		        this.context.router.setRouteComponentAtDepth(this.getRouteDepth(), component);
		      }
		    },
		    getRouteDepth: {
		      value: function getRouteDepth() {
		        return this.context.routeDepth;
		      }
		    },
		    createChildRouteHandler: {
		      value: function createChildRouteHandler(props) {
		        var route = this.context.router.getRouteAtDepth(this.getRouteDepth());
		        return route ? React.createElement(route.handler, assign({}, props || this.props, { ref: REF_NAME })) : null;
		      }
		    },
		    render: {
		      value: function render() {
		        var handler = this.createChildRouteHandler();
		        // <script/> for things like <CSSTransitionGroup/> that don't like null
		        return handler ? React.createElement(
		          ContextWrapper,
		          null,
		          handler
		        ) : React.createElement("script", null);
		      }
		    }
		  });
	
		  return RouteHandler;
		})(React.Component);
	
		// TODO: Include these in the above class definition
		// once we can use ES7 property initializers.
		// https://github.com/babel/babel/issues/619
	
		RouteHandler.contextTypes = {
		  routeDepth: PropTypes.number.isRequired,
		  router: PropTypes.router.isRequired
		};
	
		RouteHandler.childContextTypes = {
		  routeDepth: PropTypes.number.isRequired
		};
	
		module.exports = RouteHandler;
	
	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		var LocationActions = __webpack_require__(24);
		var History = __webpack_require__(14);
	
		var _listeners = [];
		var _isListening = false;
		var _actionType;
	
		function notifyChange(type) {
		  if (type === LocationActions.PUSH) History.length += 1;
	
		  var change = {
		    path: HashLocation.getCurrentPath(),
		    type: type
		  };
	
		  _listeners.forEach(function (listener) {
		    listener.call(HashLocation, change);
		  });
		}
	
		function ensureSlash() {
		  var path = HashLocation.getCurrentPath();
	
		  if (path.charAt(0) === "/") {
		    return true;
		  }HashLocation.replace("/" + path);
	
		  return false;
		}
	
		function onHashChange() {
		  if (ensureSlash()) {
		    // If we don't have an _actionType then all we know is the hash
		    // changed. It was probably caused by the user clicking the Back
		    // button, but may have also been the Forward button or manual
		    // manipulation. So just guess 'pop'.
		    var curActionType = _actionType;
		    _actionType = null;
		    notifyChange(curActionType || LocationActions.POP);
		  }
		}
	
		/**
		 * A Location that uses `window.location.hash`.
		 */
		var HashLocation = {
	
		  addChangeListener: function addChangeListener(listener) {
		    _listeners.push(listener);
	
		    // Do this BEFORE listening for hashchange.
		    ensureSlash();
	
		    if (!_isListening) {
		      if (window.addEventListener) {
		        window.addEventListener("hashchange", onHashChange, false);
		      } else {
		        window.attachEvent("onhashchange", onHashChange);
		      }
	
		      _isListening = true;
		    }
		  },
	
		  removeChangeListener: function removeChangeListener(listener) {
		    _listeners = _listeners.filter(function (l) {
		      return l !== listener;
		    });
	
		    if (_listeners.length === 0) {
		      if (window.removeEventListener) {
		        window.removeEventListener("hashchange", onHashChange, false);
		      } else {
		        window.removeEvent("onhashchange", onHashChange);
		      }
	
		      _isListening = false;
		    }
		  },
	
		  push: function push(path) {
		    _actionType = LocationActions.PUSH;
		    window.location.hash = path;
		  },
	
		  replace: function replace(path) {
		    _actionType = LocationActions.REPLACE;
		    window.location.replace(window.location.pathname + window.location.search + "#" + path);
		  },
	
		  pop: function pop() {
		    _actionType = LocationActions.POP;
		    History.back();
		  },
	
		  getCurrentPath: function getCurrentPath() {
		    return decodeURI(
		    // We can't use window.location.hash here because it's not
		    // consistent across browsers - Firefox will pre-decode it!
		    window.location.href.split("#")[1] || "");
		  },
	
		  toString: function toString() {
		    return "<HashLocation>";
		  }
	
		};
	
		module.exports = HashLocation;
	
	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		var LocationActions = __webpack_require__(24);
		var History = __webpack_require__(14);
	
		var _listeners = [];
		var _isListening = false;
	
		function notifyChange(type) {
		  var change = {
		    path: HistoryLocation.getCurrentPath(),
		    type: type
		  };
	
		  _listeners.forEach(function (listener) {
		    listener.call(HistoryLocation, change);
		  });
		}
	
		function onPopState(event) {
		  if (event.state === undefined) {
		    return;
		  } // Ignore extraneous popstate events in WebKit.
	
		  notifyChange(LocationActions.POP);
		}
	
		/**
		 * A Location that uses HTML5 history.
		 */
		var HistoryLocation = {
	
		  addChangeListener: function addChangeListener(listener) {
		    _listeners.push(listener);
	
		    if (!_isListening) {
		      if (window.addEventListener) {
		        window.addEventListener("popstate", onPopState, false);
		      } else {
		        window.attachEvent("onpopstate", onPopState);
		      }
	
		      _isListening = true;
		    }
		  },
	
		  removeChangeListener: function removeChangeListener(listener) {
		    _listeners = _listeners.filter(function (l) {
		      return l !== listener;
		    });
	
		    if (_listeners.length === 0) {
		      if (window.addEventListener) {
		        window.removeEventListener("popstate", onPopState, false);
		      } else {
		        window.removeEvent("onpopstate", onPopState);
		      }
	
		      _isListening = false;
		    }
		  },
	
		  push: function push(path) {
		    window.history.pushState({ path: path }, "", path);
		    History.length += 1;
		    notifyChange(LocationActions.PUSH);
		  },
	
		  replace: function replace(path) {
		    window.history.replaceState({ path: path }, "", path);
		    notifyChange(LocationActions.REPLACE);
		  },
	
		  pop: History.back,
	
		  getCurrentPath: function getCurrentPath() {
		    return decodeURI(window.location.pathname + window.location.search);
		  },
	
		  toString: function toString() {
		    return "<HistoryLocation>";
		  }
	
		};
	
		module.exports = HistoryLocation;
	
	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		var HistoryLocation = __webpack_require__(8);
		var History = __webpack_require__(14);
	
		/**
		 * A Location that uses full page refreshes. This is used as
		 * the fallback for HistoryLocation in browsers that do not
		 * support the HTML5 history API.
		 */
		var RefreshLocation = {
	
		  push: function push(path) {
		    window.location = path;
		  },
	
		  replace: function replace(path) {
		    window.location.replace(path);
		  },
	
		  pop: History.back,
	
		  getCurrentPath: HistoryLocation.getCurrentPath,
	
		  toString: function toString() {
		    return "<RefreshLocation>";
		  }
	
		};
	
		module.exports = RefreshLocation;
	
	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
		var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
		var invariant = __webpack_require__(34);
	
		function throwCannotModify() {
		  invariant(false, "You cannot modify a static location");
		}
	
		/**
		 * A location that only ever contains a single path. Useful in
		 * stateless environments like servers where there is no path history,
		 * only the path that was used in the request.
		 */
	
		var StaticLocation = (function () {
		  function StaticLocation(path) {
		    _classCallCheck(this, StaticLocation);
	
		    this.path = path;
		  }
	
		  _createClass(StaticLocation, {
		    getCurrentPath: {
		      value: function getCurrentPath() {
		        return this.path;
		      }
		    },
		    toString: {
		      value: function toString() {
		        return "<StaticLocation path=\"" + this.path + "\">";
		      }
		    }
		  });
	
		  return StaticLocation;
		})();
	
		// TODO: Include these in the above class definition
		// once we can use ES7 property initializers.
		// https://github.com/babel/babel/issues/619
	
		StaticLocation.prototype.push = throwCannotModify;
		StaticLocation.prototype.replace = throwCannotModify;
		StaticLocation.prototype.pop = throwCannotModify;
	
		module.exports = StaticLocation;
	
	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
		var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
		var invariant = __webpack_require__(34);
		var LocationActions = __webpack_require__(24);
		var History = __webpack_require__(14);
	
		/**
		 * A location that is convenient for testing and does not require a DOM.
		 */
	
		var TestLocation = (function () {
		  function TestLocation(history) {
		    _classCallCheck(this, TestLocation);
	
		    this.history = history || [];
		    this.listeners = [];
		    this._updateHistoryLength();
		  }
	
		  _createClass(TestLocation, {
		    needsDOM: {
		      get: function () {
		        return false;
		      }
		    },
		    _updateHistoryLength: {
		      value: function _updateHistoryLength() {
		        History.length = this.history.length;
		      }
		    },
		    _notifyChange: {
		      value: function _notifyChange(type) {
		        var change = {
		          path: this.getCurrentPath(),
		          type: type
		        };
	
		        for (var i = 0, len = this.listeners.length; i < len; ++i) this.listeners[i].call(this, change);
		      }
		    },
		    addChangeListener: {
		      value: function addChangeListener(listener) {
		        this.listeners.push(listener);
		      }
		    },
		    removeChangeListener: {
		      value: function removeChangeListener(listener) {
		        this.listeners = this.listeners.filter(function (l) {
		          return l !== listener;
		        });
		      }
		    },
		    push: {
		      value: function push(path) {
		        this.history.push(path);
		        this._updateHistoryLength();
		        this._notifyChange(LocationActions.PUSH);
		      }
		    },
		    replace: {
		      value: function replace(path) {
		        invariant(this.history.length, "You cannot replace the current path with no history");
	
		        this.history[this.history.length - 1] = path;
	
		        this._notifyChange(LocationActions.REPLACE);
		      }
		    },
		    pop: {
		      value: function pop() {
		        this.history.pop();
		        this._updateHistoryLength();
		        this._notifyChange(LocationActions.POP);
		      }
		    },
		    getCurrentPath: {
		      value: function getCurrentPath() {
		        return this.history[this.history.length - 1];
		      }
		    },
		    toString: {
		      value: function toString() {
		        return "<TestLocation>";
		      }
		    }
		  });
	
		  return TestLocation;
		})();
	
		module.exports = TestLocation;
	
	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		var LocationActions = __webpack_require__(24);
	
		/**
		 * A scroll behavior that attempts to imitate the default behavior
		 * of modern browsers.
		 */
		var ImitateBrowserBehavior = {
	
		  updateScrollPosition: function updateScrollPosition(position, actionType) {
		    switch (actionType) {
		      case LocationActions.PUSH:
		      case LocationActions.REPLACE:
		        window.scrollTo(0, 0);
		        break;
		      case LocationActions.POP:
		        if (position) {
		          window.scrollTo(position.x, position.y);
		        } else {
		          window.scrollTo(0, 0);
		        }
		        break;
		    }
		  }
	
		};
	
		module.exports = ImitateBrowserBehavior;
	
	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		/**
		 * A scroll behavior that always scrolls to the top of the page
		 * after a transition.
		 */
		var ScrollToTopBehavior = {
	
		  updateScrollPosition: function updateScrollPosition() {
		    window.scrollTo(0, 0);
		  }
	
		};
	
		module.exports = ScrollToTopBehavior;
	
	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		var invariant = __webpack_require__(34);
		var canUseDOM = __webpack_require__(35).canUseDOM;
	
		var History = {
	
		  /**
		   * The current number of entries in the history.
		   *
		   * Note: This property is read-only.
		   */
		  length: 1,
	
		  /**
		   * Sends the browser back one entry in the history.
		   */
		  back: function back() {
		    invariant(canUseDOM, "Cannot use History.back without a DOM");
	
		    // Do this first so that History.length will
		    // be accurate in location change listeners.
		    History.length -= 1;
	
		    window.history.back();
		  }
	
		};
	
		module.exports = History;
	
	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		var warning = __webpack_require__(36);
		var PropTypes = __webpack_require__(22);
	
		function deprecatedMethod(routerMethodName, fn) {
		  return function () {
		    warning(false, "Router.Navigation is deprecated. Please use this.context.router." + routerMethodName + "() instead");
	
		    return fn.apply(this, arguments);
		  };
		}
	
		/**
		 * A mixin for components that modify the URL.
		 *
		 * Example:
		 *
		 *   var MyLink = React.createClass({
		 *     mixins: [ Router.Navigation ],
		 *     handleClick(event) {
		 *       event.preventDefault();
		 *       this.transitionTo('aRoute', { the: 'params' }, { the: 'query' });
		 *     },
		 *     render() {
		 *       return (
		 *         <a onClick={this.handleClick}>Click me!</a>
		 *       );
		 *     }
		 *   });
		 */
		var Navigation = {
	
		  contextTypes: {
		    router: PropTypes.router.isRequired
		  },
	
		  /**
		   * Returns an absolute URL path created from the given route
		   * name, URL parameters, and query values.
		   */
		  makePath: deprecatedMethod("makePath", function (to, params, query) {
		    return this.context.router.makePath(to, params, query);
		  }),
	
		  /**
		   * Returns a string that may safely be used as the href of a
		   * link to the route with the given name.
		   */
		  makeHref: deprecatedMethod("makeHref", function (to, params, query) {
		    return this.context.router.makeHref(to, params, query);
		  }),
	
		  /**
		   * Transitions to the URL specified in the arguments by pushing
		   * a new URL onto the history stack.
		   */
		  transitionTo: deprecatedMethod("transitionTo", function (to, params, query) {
		    this.context.router.transitionTo(to, params, query);
		  }),
	
		  /**
		   * Transitions to the URL specified in the arguments by replacing
		   * the current URL in the history stack.
		   */
		  replaceWith: deprecatedMethod("replaceWith", function (to, params, query) {
		    this.context.router.replaceWith(to, params, query);
		  }),
	
		  /**
		   * Transitions to the previous URL.
		   */
		  goBack: deprecatedMethod("goBack", function () {
		    return this.context.router.goBack();
		  })
	
		};
	
		module.exports = Navigation;
	
	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		var warning = __webpack_require__(36);
		var PropTypes = __webpack_require__(22);
	
		function deprecatedMethod(routerMethodName, fn) {
		  return function () {
		    warning(false, "Router.State is deprecated. Please use this.context.router." + routerMethodName + "() instead");
	
		    return fn.apply(this, arguments);
		  };
		}
	
		/**
		 * A mixin for components that need to know the path, routes, URL
		 * params and query that are currently active.
		 *
		 * Example:
		 *
		 *   var AboutLink = React.createClass({
		 *     mixins: [ Router.State ],
		 *     render() {
		 *       var className = this.props.className;
		 *   
		 *       if (this.isActive('about'))
		 *         className += ' is-active';
		 *   
		 *       return React.DOM.a({ className: className }, this.props.children);
		 *     }
		 *   });
		 */
		var State = {
	
		  contextTypes: {
		    router: PropTypes.router.isRequired
		  },
	
		  /**
		   * Returns the current URL path.
		   */
		  getPath: deprecatedMethod("getCurrentPath", function () {
		    return this.context.router.getCurrentPath();
		  }),
	
		  /**
		   * Returns the current URL path without the query string.
		   */
		  getPathname: deprecatedMethod("getCurrentPathname", function () {
		    return this.context.router.getCurrentPathname();
		  }),
	
		  /**
		   * Returns an object of the URL params that are currently active.
		   */
		  getParams: deprecatedMethod("getCurrentParams", function () {
		    return this.context.router.getCurrentParams();
		  }),
	
		  /**
		   * Returns an object of the query params that are currently active.
		   */
		  getQuery: deprecatedMethod("getCurrentQuery", function () {
		    return this.context.router.getCurrentQuery();
		  }),
	
		  /**
		   * Returns an array of the routes that are currently active.
		   */
		  getRoutes: deprecatedMethod("getCurrentRoutes", function () {
		    return this.context.router.getCurrentRoutes();
		  }),
	
		  /**
		   * A helper method to determine if a given route, params, and query
		   * are active.
		   */
		  isActive: deprecatedMethod("isActive", function (to, params, query) {
		    return this.context.router.isActive(to, params, query);
		  })
	
		};
	
		module.exports = State;
	
	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
		var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
		var assign = __webpack_require__(33);
		var invariant = __webpack_require__(34);
		var warning = __webpack_require__(36);
		var PathUtils = __webpack_require__(25);
	
		var _currentRoute;
	
		var Route = (function () {
		  function Route(name, path, ignoreScrollBehavior, isDefault, isNotFound, onEnter, onLeave, handler) {
		    _classCallCheck(this, Route);
	
		    this.name = name;
		    this.path = path;
		    this.paramNames = PathUtils.extractParamNames(this.path);
		    this.ignoreScrollBehavior = !!ignoreScrollBehavior;
		    this.isDefault = !!isDefault;
		    this.isNotFound = !!isNotFound;
		    this.onEnter = onEnter;
		    this.onLeave = onLeave;
		    this.handler = handler;
		  }
	
		  _createClass(Route, {
		    appendChild: {
	
		      /**
		       * Appends the given route to this route's child routes.
		       */
	
		      value: function appendChild(route) {
		        invariant(route instanceof Route, "route.appendChild must use a valid Route");
	
		        if (!this.childRoutes) this.childRoutes = [];
	
		        this.childRoutes.push(route);
		      }
		    },
		    toString: {
		      value: function toString() {
		        var string = "<Route";
	
		        if (this.name) string += " name=\"" + this.name + "\"";
	
		        string += " path=\"" + this.path + "\">";
	
		        return string;
		      }
		    }
		  }, {
		    createRoute: {
	
		      /**
		       * Creates and returns a new route. Options may be a URL pathname string
		       * with placeholders for named params or an object with any of the following
		       * properties:
		       *
		       * - name                     The name of the route. This is used to lookup a
		       *                            route relative to its parent route and should be
		       *                            unique among all child routes of the same parent
		       * - path                     A URL pathname string with optional placeholders
		       *                            that specify the names of params to extract from
		       *                            the URL when the path matches. Defaults to `/${name}`
		       *                            when there is a name given, or the path of the parent
		       *                            route, or /
		       * - ignoreScrollBehavior     True to make this route (and all descendants) ignore
		       *                            the scroll behavior of the router
		       * - isDefault                True to make this route the default route among all
		       *                            its siblings
		       * - isNotFound               True to make this route the "not found" route among
		       *                            all its siblings
		       * - onEnter                  A transition hook that will be called when the
		       *                            router is going to enter this route
		       * - onLeave                  A transition hook that will be called when the
		       *                            router is going to leave this route
		       * - handler                  A React component that will be rendered when
		       *                            this route is active
		       * - parentRoute              The parent route to use for this route. This option
		       *                            is automatically supplied when creating routes inside
		       *                            the callback to another invocation of createRoute. You
		       *                            only ever need to use this when declaring routes
		       *                            independently of one another to manually piece together
		       *                            the route hierarchy
		       *
		       * The callback may be used to structure your route hierarchy. Any call to
		       * createRoute, createDefaultRoute, createNotFoundRoute, or createRedirect
		       * inside the callback automatically uses this route as its parent.
		       */
	
		      value: function createRoute(options, callback) {
		        options = options || {};
	
		        if (typeof options === "string") options = { path: options };
	
		        var parentRoute = _currentRoute;
	
		        if (parentRoute) {
		          warning(options.parentRoute == null || options.parentRoute === parentRoute, "You should not use parentRoute with createRoute inside another route's child callback; it is ignored");
		        } else {
		          parentRoute = options.parentRoute;
		        }
	
		        var name = options.name;
		        var path = options.path || name;
	
		        if (path && !(options.isDefault || options.isNotFound)) {
		          if (PathUtils.isAbsolute(path)) {
		            if (parentRoute) {
		              invariant(path === parentRoute.path || parentRoute.paramNames.length === 0, "You cannot nest path \"%s\" inside \"%s\"; the parent requires URL parameters", path, parentRoute.path);
		            }
		          } else if (parentRoute) {
		            // Relative paths extend their parent.
		            path = PathUtils.join(parentRoute.path, path);
		          } else {
		            path = "/" + path;
		          }
		        } else {
		          path = parentRoute ? parentRoute.path : "/";
		        }
	
		        if (options.isNotFound && !/\*$/.test(path)) path += "*"; // Auto-append * to the path of not found routes.
	
		        var route = new Route(name, path, options.ignoreScrollBehavior, options.isDefault, options.isNotFound, options.onEnter, options.onLeave, options.handler);
	
		        if (parentRoute) {
		          if (route.isDefault) {
		            invariant(parentRoute.defaultRoute == null, "%s may not have more than one default route", parentRoute);
	
		            parentRoute.defaultRoute = route;
		          } else if (route.isNotFound) {
		            invariant(parentRoute.notFoundRoute == null, "%s may not have more than one not found route", parentRoute);
	
		            parentRoute.notFoundRoute = route;
		          }
	
		          parentRoute.appendChild(route);
		        }
	
		        // Any routes created in the callback
		        // use this route as their parent.
		        if (typeof callback === "function") {
		          var currentRoute = _currentRoute;
		          _currentRoute = route;
		          callback.call(route, route);
		          _currentRoute = currentRoute;
		        }
	
		        return route;
		      }
		    },
		    createDefaultRoute: {
	
		      /**
		       * Creates and returns a route that is rendered when its parent matches
		       * the current URL.
		       */
	
		      value: function createDefaultRoute(options) {
		        return Route.createRoute(assign({}, options, { isDefault: true }));
		      }
		    },
		    createNotFoundRoute: {
	
		      /**
		       * Creates and returns a route that is rendered when its parent matches
		       * the current URL but none of its siblings do.
		       */
	
		      value: function createNotFoundRoute(options) {
		        return Route.createRoute(assign({}, options, { isNotFound: true }));
		      }
		    },
		    createRedirect: {
	
		      /**
		       * Creates and returns a route that automatically redirects the transition
		       * to another route. In addition to the normal options to createRoute, this
		       * function accepts the following options:
		       *
		       * - from         An alias for the `path` option. Defaults to *
		       * - to           The path/route/route name to redirect to
		       * - params       The params to use in the redirect URL. Defaults
		       *                to using the current params
		       * - query        The query to use in the redirect URL. Defaults
		       *                to using the current query
		       */
	
		      value: function createRedirect(options) {
		        return Route.createRoute(assign({}, options, {
		          path: options.path || options.from || "*",
		          onEnter: function onEnter(transition, params, query) {
		            transition.redirect(options.to, options.params || params, options.query || query);
		          }
		        }));
		      }
		    }
		  });
	
		  return Route;
		})();
	
		module.exports = Route;
	
	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		/* jshint -W084 */
		var React = __webpack_require__(21);
		var assign = __webpack_require__(33);
		var warning = __webpack_require__(36);
		var DefaultRoute = __webpack_require__(1);
		var NotFoundRoute = __webpack_require__(3);
		var Redirect = __webpack_require__(4);
		var Route = __webpack_require__(17);
	
		function checkPropTypes(componentName, propTypes, props) {
		  componentName = componentName || "UnknownComponent";
	
		  for (var propName in propTypes) {
		    if (propTypes.hasOwnProperty(propName)) {
		      var error = propTypes[propName](props, propName, componentName);
	
		      if (error instanceof Error) warning(false, error.message);
		    }
		  }
		}
	
		function createRouteOptions(props) {
		  var options = assign({}, props);
		  var handler = options.handler;
	
		  if (handler) {
		    options.onEnter = handler.willTransitionTo;
		    options.onLeave = handler.willTransitionFrom;
		  }
	
		  return options;
		}
	
		function createRouteFromReactElement(element) {
		  if (!React.isValidElement(element)) {
		    return;
		  }var type = element.type;
		  var props = assign({}, type.defaultProps, element.props);
	
		  if (type.propTypes) checkPropTypes(type.displayName, type.propTypes, props);
	
		  if (type === DefaultRoute) {
		    return Route.createDefaultRoute(createRouteOptions(props));
		  }if (type === NotFoundRoute) {
		    return Route.createNotFoundRoute(createRouteOptions(props));
		  }if (type === Redirect) {
		    return Route.createRedirect(createRouteOptions(props));
		  }return Route.createRoute(createRouteOptions(props), function () {
		    if (props.children) createRoutesFromReactChildren(props.children);
		  });
		}
	
		/**
		 * Creates and returns an array of routes created from the given
		 * ReactChildren, all of which should be one of <Route>, <DefaultRoute>,
		 * <NotFoundRoute>, or <Redirect>, e.g.:
		 *
		 *   var { createRoutesFromReactChildren, Route, Redirect } = require('react-router');
		 *
		 *   var routes = createRoutesFromReactChildren(
		 *     <Route path="/" handler={App}>
		 *       <Route name="user" path="/user/:userId" handler={User}>
		 *         <Route name="task" path="tasks/:taskId" handler={Task}/>
		 *         <Redirect from="todos/:taskId" to="task"/>
		 *       </Route>
		 *     </Route>
		 *   );
		 */
		function createRoutesFromReactChildren(children) {
		  var routes = [];
	
		  React.Children.forEach(children, function (child) {
		    if (child = createRouteFromReactElement(child)) routes.push(child);
		  });
	
		  return routes;
		}
	
		module.exports = createRoutesFromReactChildren;
	
	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		/* jshint -W058 */
		var React = __webpack_require__(21);
		var warning = __webpack_require__(36);
		var invariant = __webpack_require__(34);
		var canUseDOM = __webpack_require__(35).canUseDOM;
		var LocationActions = __webpack_require__(24);
		var ImitateBrowserBehavior = __webpack_require__(12);
		var HashLocation = __webpack_require__(7);
		var HistoryLocation = __webpack_require__(8);
		var RefreshLocation = __webpack_require__(9);
		var StaticLocation = __webpack_require__(10);
		var ScrollHistory = __webpack_require__(26);
		var createRoutesFromReactChildren = __webpack_require__(18);
		var isReactChildren = __webpack_require__(27);
		var Transition = __webpack_require__(28);
		var PropTypes = __webpack_require__(22);
		var Redirect = __webpack_require__(29);
		var History = __webpack_require__(14);
		var Cancellation = __webpack_require__(30);
		var Match = __webpack_require__(31);
		var Route = __webpack_require__(17);
		var supportsHistory = __webpack_require__(32);
		var PathUtils = __webpack_require__(25);
	
		/**
		 * The default location for new routers.
		 */
		var DEFAULT_LOCATION = canUseDOM ? HashLocation : "/";
	
		/**
		 * The default scroll behavior for new routers.
		 */
		var DEFAULT_SCROLL_BEHAVIOR = canUseDOM ? ImitateBrowserBehavior : null;
	
		function hasProperties(object, properties) {
		  for (var propertyName in properties) if (properties.hasOwnProperty(propertyName) && object[propertyName] !== properties[propertyName]) {
		    return false;
		  }return true;
		}
	
		function hasMatch(routes, route, prevParams, nextParams, prevQuery, nextQuery) {
		  return routes.some(function (r) {
		    if (r !== route) return false;
	
		    var paramNames = route.paramNames;
		    var paramName;
	
		    // Ensure that all params the route cares about did not change.
		    for (var i = 0, len = paramNames.length; i < len; ++i) {
		      paramName = paramNames[i];
	
		      if (nextParams[paramName] !== prevParams[paramName]) return false;
		    }
	
		    // Ensure the query hasn't changed.
		    return hasProperties(prevQuery, nextQuery) && hasProperties(nextQuery, prevQuery);
		  });
		}
	
		function addRoutesToNamedRoutes(routes, namedRoutes) {
		  var route;
		  for (var i = 0, len = routes.length; i < len; ++i) {
		    route = routes[i];
	
		    if (route.name) {
		      invariant(namedRoutes[route.name] == null, "You may not have more than one route named \"%s\"", route.name);
	
		      namedRoutes[route.name] = route;
		    }
	
		    if (route.childRoutes) addRoutesToNamedRoutes(route.childRoutes, namedRoutes);
		  }
		}
	
		function routeIsActive(activeRoutes, routeName) {
		  return activeRoutes.some(function (route) {
		    return route.name === routeName;
		  });
		}
	
		function paramsAreActive(activeParams, params) {
		  for (var property in params) if (String(activeParams[property]) !== String(params[property])) {
		    return false;
		  }return true;
		}
	
		function queryIsActive(activeQuery, query) {
		  for (var property in query) if (String(activeQuery[property]) !== String(query[property])) {
		    return false;
		  }return true;
		}
	
		/**
		 * Creates and returns a new router using the given options. A router
		 * is a ReactComponent class that knows how to react to changes in the
		 * URL and keep the contents of the page in sync.
		 *
		 * Options may be any of the following:
		 *
		 * - routes           (required) The route config
		 * - location         The location to use. Defaults to HashLocation when
		 *                    the DOM is available, "/" otherwise
		 * - scrollBehavior   The scroll behavior to use. Defaults to ImitateBrowserBehavior
		 *                    when the DOM is available, null otherwise
		 * - onError          A function that is used to handle errors
		 * - onAbort          A function that is used to handle aborted transitions
		 *
		 * When rendering in a server-side environment, the location should simply
		 * be the URL path that was used in the request, including the query string.
		 */
		function createRouter(options) {
		  options = options || {};
	
		  if (isReactChildren(options)) options = { routes: options };
	
		  var mountedComponents = [];
		  var location = options.location || DEFAULT_LOCATION;
		  var scrollBehavior = options.scrollBehavior || DEFAULT_SCROLL_BEHAVIOR;
		  var state = {};
		  var nextState = {};
		  var pendingTransition = null;
		  var dispatchHandler = null;
	
		  if (typeof location === "string") location = new StaticLocation(location);
	
		  if (location instanceof StaticLocation) {
		    warning(!canUseDOM || ("production") === "test", "You should not use a static location in a DOM environment because " + "the router will not be kept in sync with the current URL");
		  } else {
		    invariant(canUseDOM || location.needsDOM === false, "You cannot use %s without a DOM", location);
		  }
	
		  // Automatically fall back to full page refreshes in
		  // browsers that don't support the HTML history API.
		  if (location === HistoryLocation && !supportsHistory()) location = RefreshLocation;
	
		  var Router = React.createClass({
	
		    displayName: "Router",
	
		    statics: {
	
		      isRunning: false,
	
		      cancelPendingTransition: function cancelPendingTransition() {
		        if (pendingTransition) {
		          pendingTransition.cancel();
		          pendingTransition = null;
		        }
		      },
	
		      clearAllRoutes: function clearAllRoutes() {
		        Router.cancelPendingTransition();
		        Router.namedRoutes = {};
		        Router.routes = [];
		      },
	
		      /**
		       * Adds routes to this router from the given children object (see ReactChildren).
		       */
		      addRoutes: function addRoutes(routes) {
		        if (isReactChildren(routes)) routes = createRoutesFromReactChildren(routes);
	
		        addRoutesToNamedRoutes(routes, Router.namedRoutes);
	
		        Router.routes.push.apply(Router.routes, routes);
		      },
	
		      /**
		       * Replaces routes of this router from the given children object (see ReactChildren).
		       */
		      replaceRoutes: function replaceRoutes(routes) {
		        Router.clearAllRoutes();
		        Router.addRoutes(routes);
		        Router.refresh();
		      },
	
		      /**
		       * Performs a match of the given path against this router and returns an object
		       * with the { routes, params, pathname, query } that match. Returns null if no
		       * match can be made.
		       */
		      match: function match(path) {
		        return Match.findMatch(Router.routes, path);
		      },
	
		      /**
		       * Returns an absolute URL path created from the given route
		       * name, URL parameters, and query.
		       */
		      makePath: function makePath(to, params, query) {
		        var path;
		        if (PathUtils.isAbsolute(to)) {
		          path = to;
		        } else {
		          var route = to instanceof Route ? to : Router.namedRoutes[to];
	
		          invariant(route instanceof Route, "Cannot find a route named \"%s\"", to);
	
		          path = route.path;
		        }
	
		        return PathUtils.withQuery(PathUtils.injectParams(path, params), query);
		      },
	
		      /**
		       * Returns a string that may safely be used as the href of a link
		       * to the route with the given name, URL parameters, and query.
		       */
		      makeHref: function makeHref(to, params, query) {
		        var path = Router.makePath(to, params, query);
		        return location === HashLocation ? "#" + path : path;
		      },
	
		      /**
		       * Transitions to the URL specified in the arguments by pushing
		       * a new URL onto the history stack.
		       */
		      transitionTo: function transitionTo(to, params, query) {
		        var path = Router.makePath(to, params, query);
	
		        if (pendingTransition) {
		          // Replace so pending location does not stay in history.
		          location.replace(path);
		        } else {
		          location.push(path);
		        }
		      },
	
		      /**
		       * Transitions to the URL specified in the arguments by replacing
		       * the current URL in the history stack.
		       */
		      replaceWith: function replaceWith(to, params, query) {
		        location.replace(Router.makePath(to, params, query));
		      },
	
		      /**
		       * Transitions to the previous URL if one is available. Returns true if the
		       * router was able to go back, false otherwise.
		       *
		       * Note: The router only tracks history entries in your application, not the
		       * current browser session, so you can safely call this function without guarding
		       * against sending the user back to some other site. However, when using
		       * RefreshLocation (which is the fallback for HistoryLocation in browsers that
		       * don't support HTML5 history) this method will *always* send the client back
		       * because we cannot reliably track history length.
		       */
		      goBack: function goBack() {
		        if (History.length > 1 || location === RefreshLocation) {
		          location.pop();
		          return true;
		        }
	
		        warning(false, "goBack() was ignored because there is no router history");
	
		        return false;
		      },
	
		      handleAbort: options.onAbort || function (abortReason) {
		        if (location instanceof StaticLocation) throw new Error("Unhandled aborted transition! Reason: " + abortReason);
	
		        if (abortReason instanceof Cancellation) {
		          return;
		        } else if (abortReason instanceof Redirect) {
		          location.replace(Router.makePath(abortReason.to, abortReason.params, abortReason.query));
		        } else {
		          location.pop();
		        }
		      },
	
		      handleError: options.onError || function (error) {
		        // Throw so we don't silently swallow async errors.
		        throw error; // This error probably originated in a transition hook.
		      },
	
		      handleLocationChange: function handleLocationChange(change) {
		        Router.dispatch(change.path, change.type);
		      },
	
		      /**
		       * Performs a transition to the given path and calls callback(error, abortReason)
		       * when the transition is finished. If both arguments are null the router's state
		       * was updated. Otherwise the transition did not complete.
		       *
		       * In a transition, a router first determines which routes are involved by beginning
		       * with the current route, up the route tree to the first parent route that is shared
		       * with the destination route, and back down the tree to the destination route. The
		       * willTransitionFrom hook is invoked on all route handlers we're transitioning away
		       * from, in reverse nesting order. Likewise, the willTransitionTo hook is invoked on
		       * all route handlers we're transitioning to.
		       *
		       * Both willTransitionFrom and willTransitionTo hooks may either abort or redirect the
		       * transition. To resolve asynchronously, they may use the callback argument. If no
		       * hooks wait, the transition is fully synchronous.
		       */
		      dispatch: function dispatch(path, action) {
		        Router.cancelPendingTransition();
	
		        var prevPath = state.path;
		        var isRefreshing = action == null;
	
		        if (prevPath === path && !isRefreshing) {
		          return;
		        } // Nothing to do!
	
		        // Record the scroll position as early as possible to
		        // get it before browsers try update it automatically.
		        if (prevPath && action === LocationActions.PUSH) Router.recordScrollPosition(prevPath);
	
		        var match = Router.match(path);
	
		        warning(match != null, "No route matches path \"%s\". Make sure you have <Route path=\"%s\"> somewhere in your routes", path, path);
	
		        if (match == null) match = {};
	
		        var prevRoutes = state.routes || [];
		        var prevParams = state.params || {};
		        var prevQuery = state.query || {};
	
		        var nextRoutes = match.routes || [];
		        var nextParams = match.params || {};
		        var nextQuery = match.query || {};
	
		        var fromRoutes, toRoutes;
		        if (prevRoutes.length) {
		          fromRoutes = prevRoutes.filter(function (route) {
		            return !hasMatch(nextRoutes, route, prevParams, nextParams, prevQuery, nextQuery);
		          });
	
		          toRoutes = nextRoutes.filter(function (route) {
		            return !hasMatch(prevRoutes, route, prevParams, nextParams, prevQuery, nextQuery);
		          });
		        } else {
		          fromRoutes = [];
		          toRoutes = nextRoutes;
		        }
	
		        var transition = new Transition(path, Router.replaceWith.bind(Router, path));
		        pendingTransition = transition;
	
		        var fromComponents = mountedComponents.slice(prevRoutes.length - fromRoutes.length);
	
		        Transition.from(transition, fromRoutes, fromComponents, function (error) {
		          if (error || transition.abortReason) return dispatchHandler.call(Router, error, transition); // No need to continue.
	
		          Transition.to(transition, toRoutes, nextParams, nextQuery, function (error) {
		            dispatchHandler.call(Router, error, transition, {
		              path: path,
		              action: action,
		              pathname: match.pathname,
		              routes: nextRoutes,
		              params: nextParams,
		              query: nextQuery
		            });
		          });
		        });
		      },
	
		      /**
		       * Starts this router and calls callback(router, state) when the route changes.
		       *
		       * If the router's location is static (i.e. a URL path in a server environment)
		       * the callback is called only once. Otherwise, the location should be one of the
		       * Router.*Location objects (e.g. Router.HashLocation or Router.HistoryLocation).
		       */
		      run: function run(callback) {
		        invariant(!Router.isRunning, "Router is already running");
	
		        dispatchHandler = function (error, transition, newState) {
		          if (error) Router.handleError(error);
	
		          if (pendingTransition !== transition) return;
	
		          pendingTransition = null;
	
		          if (transition.abortReason) {
		            Router.handleAbort(transition.abortReason);
		          } else {
		            callback.call(Router, Router, nextState = newState);
		          }
		        };
	
		        if (!(location instanceof StaticLocation)) {
		          if (location.addChangeListener) location.addChangeListener(Router.handleLocationChange);
	
		          Router.isRunning = true;
		        }
	
		        // Bootstrap using the current path.
		        Router.refresh();
		      },
	
		      refresh: function refresh() {
		        Router.dispatch(location.getCurrentPath(), null);
		      },
	
		      stop: function stop() {
		        Router.cancelPendingTransition();
	
		        if (location.removeChangeListener) location.removeChangeListener(Router.handleLocationChange);
	
		        Router.isRunning = false;
		      },
	
		      getLocation: function getLocation() {
		        return location;
		      },
	
		      getScrollBehavior: function getScrollBehavior() {
		        return scrollBehavior;
		      },
	
		      getRouteAtDepth: function getRouteAtDepth(routeDepth) {
		        var routes = state.routes;
		        return routes && routes[routeDepth];
		      },
	
		      setRouteComponentAtDepth: function setRouteComponentAtDepth(routeDepth, component) {
		        mountedComponents[routeDepth] = component;
		      },
	
		      /**
		       * Returns the current URL path + query string.
		       */
		      getCurrentPath: function getCurrentPath() {
		        return state.path;
		      },
	
		      /**
		       * Returns the current URL path without the query string.
		       */
		      getCurrentPathname: function getCurrentPathname() {
		        return state.pathname;
		      },
	
		      /**
		       * Returns an object of the currently active URL parameters.
		       */
		      getCurrentParams: function getCurrentParams() {
		        return state.params;
		      },
	
		      /**
		       * Returns an object of the currently active query parameters.
		       */
		      getCurrentQuery: function getCurrentQuery() {
		        return state.query;
		      },
	
		      /**
		       * Returns an array of the currently active routes.
		       */
		      getCurrentRoutes: function getCurrentRoutes() {
		        return state.routes;
		      },
	
		      /**
		       * Returns true if the given route, params, and query are active.
		       */
		      isActive: function isActive(to, params, query) {
		        if (PathUtils.isAbsolute(to)) {
		          return to === state.path;
		        }return routeIsActive(state.routes, to) && paramsAreActive(state.params, params) && (query == null || queryIsActive(state.query, query));
		      }
	
		    },
	
		    mixins: [ScrollHistory],
	
		    propTypes: {
		      children: PropTypes.falsy
		    },
	
		    childContextTypes: {
		      routeDepth: PropTypes.number.isRequired,
		      router: PropTypes.router.isRequired
		    },
	
		    getChildContext: function getChildContext() {
		      return {
		        routeDepth: 1,
		        router: Router
		      };
		    },
	
		    getInitialState: function getInitialState() {
		      return state = nextState;
		    },
	
		    componentWillReceiveProps: function componentWillReceiveProps() {
		      this.setState(state = nextState);
		    },
	
		    componentWillUnmount: function componentWillUnmount() {
		      Router.stop();
		    },
	
		    render: function render() {
		      var route = Router.getRouteAtDepth(0);
		      return route ? React.createElement(route.handler, this.props) : null;
		    }
	
		  });
	
		  Router.clearAllRoutes();
	
		  if (options.routes) Router.addRoutes(options.routes);
	
		  return Router;
		}
	
		module.exports = createRouter;
	
	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		var createRouter = __webpack_require__(19);
	
		/**
		 * A high-level convenience method that creates, configures, and
		 * runs a router in one shot. The method signature is:
		 *
		 *   Router.run(routes[, location ], callback);
		 *
		 * Using `window.location.hash` to manage the URL, you could do:
		 *
		 *   Router.run(routes, function (Handler) {
		 *     React.render(<Handler/>, document.body);
		 *   });
		 * 
		 * Using HTML5 history and a custom "cursor" prop:
		 * 
		 *   Router.run(routes, Router.HistoryLocation, function (Handler) {
		 *     React.render(<Handler cursor={cursor}/>, document.body);
		 *   });
		 *
		 * Returns the newly created router.
		 *
		 * Note: If you need to specify further options for your router such
		 * as error/abort handling or custom scroll behavior, use Router.create
		 * instead.
		 *
		 *   var router = Router.create(options);
		 *   router.run(function (Handler) {
		 *     // ...
		 *   });
		 */
		function runRouter(routes, location, callback) {
		  if (typeof location === "function") {
		    callback = location;
		    location = null;
		  }
	
		  var router = createRouter({
		    routes: routes,
		    location: location
		  });
	
		  router.run(callback);
	
		  return router;
		}
	
		module.exports = runRouter;
	
	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_21__;
	
	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		var assign = __webpack_require__(33);
		var ReactPropTypes = __webpack_require__(21).PropTypes;
		var Route = __webpack_require__(17);
	
		var PropTypes = assign({}, ReactPropTypes, {
	
		  /**
		   * Indicates that a prop should be falsy.
		   */
		  falsy: function falsy(props, propName, componentName) {
		    if (props[propName]) {
		      return new Error("<" + componentName + "> may not have a \"" + propName + "\" prop");
		    }
		  },
	
		  /**
		   * Indicates that a prop should be a Route object.
		   */
		  route: ReactPropTypes.instanceOf(Route),
	
		  /**
		   * Indicates that a prop should be a Router object.
		   */
		  //router: ReactPropTypes.instanceOf(Router) // TODO
		  router: ReactPropTypes.func
	
		});
	
		module.exports = PropTypes;
	
	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
		var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
		var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
		/**
		 * This component is necessary to get around a context warning
		 * present in React 0.13.0. It sovles this by providing a separation
		 * between the "owner" and "parent" contexts.
		 */
	
		var React = __webpack_require__(21);
	
		var ContextWrapper = (function (_React$Component) {
		  function ContextWrapper() {
		    _classCallCheck(this, ContextWrapper);
	
		    if (_React$Component != null) {
		      _React$Component.apply(this, arguments);
		    }
		  }
	
		  _inherits(ContextWrapper, _React$Component);
	
		  _createClass(ContextWrapper, {
		    render: {
		      value: function render() {
		        return this.props.children;
		      }
		    }
		  });
	
		  return ContextWrapper;
		})(React.Component);
	
		module.exports = ContextWrapper;
	
	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		/**
		 * Actions that modify the URL.
		 */
		var LocationActions = {
	
		  /**
		   * Indicates a new location is being pushed to the history stack.
		   */
		  PUSH: "push",
	
		  /**
		   * Indicates the current location should be replaced.
		   */
		  REPLACE: "replace",
	
		  /**
		   * Indicates the most recent entry should be removed from the history stack.
		   */
		  POP: "pop"
	
		};
	
		module.exports = LocationActions;
	
	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		var invariant = __webpack_require__(34);
		var objectAssign = __webpack_require__(38);
		var qs = __webpack_require__(39);
	
		var paramCompileMatcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|[*.()\[\]\\+|{}^$]/g;
		var paramInjectMatcher = /:([a-zA-Z_$][a-zA-Z0-9_$?]*[?]?)|[*]/g;
		var paramInjectTrailingSlashMatcher = /\/\/\?|\/\?\/|\/\?/g;
		var queryMatcher = /\?(.*)$/;
	
		var _compiledPatterns = {};
	
		function compilePattern(pattern) {
		  if (!(pattern in _compiledPatterns)) {
		    var paramNames = [];
		    var source = pattern.replace(paramCompileMatcher, function (match, paramName) {
		      if (paramName) {
		        paramNames.push(paramName);
		        return "([^/?#]+)";
		      } else if (match === "*") {
		        paramNames.push("splat");
		        return "(.*?)";
		      } else {
		        return "\\" + match;
		      }
		    });
	
		    _compiledPatterns[pattern] = {
		      matcher: new RegExp("^" + source + "$", "i"),
		      paramNames: paramNames
		    };
		  }
	
		  return _compiledPatterns[pattern];
		}
	
		var PathUtils = {
	
		  /**
		   * Returns true if the given path is absolute.
		   */
		  isAbsolute: function isAbsolute(path) {
		    return path.charAt(0) === "/";
		  },
	
		  /**
		   * Joins two URL paths together.
		   */
		  join: function join(a, b) {
		    return a.replace(/\/*$/, "/") + b;
		  },
	
		  /**
		   * Returns an array of the names of all parameters in the given pattern.
		   */
		  extractParamNames: function extractParamNames(pattern) {
		    return compilePattern(pattern).paramNames;
		  },
	
		  /**
		   * Extracts the portions of the given URL path that match the given pattern
		   * and returns an object of param name => value pairs. Returns null if the
		   * pattern does not match the given path.
		   */
		  extractParams: function extractParams(pattern, path) {
		    var _compilePattern = compilePattern(pattern);
	
		    var matcher = _compilePattern.matcher;
		    var paramNames = _compilePattern.paramNames;
	
		    var match = path.match(matcher);
	
		    if (!match) {
		      return null;
		    }var params = {};
	
		    paramNames.forEach(function (paramName, index) {
		      params[paramName] = match[index + 1];
		    });
	
		    return params;
		  },
	
		  /**
		   * Returns a version of the given route path with params interpolated. Throws
		   * if there is a dynamic segment of the route path for which there is no param.
		   */
		  injectParams: function injectParams(pattern, params) {
		    params = params || {};
	
		    var splatIndex = 0;
	
		    return pattern.replace(paramInjectMatcher, function (match, paramName) {
		      paramName = paramName || "splat";
	
		      // If param is optional don't check for existence
		      if (paramName.slice(-1) === "?") {
		        paramName = paramName.slice(0, -1);
	
		        if (params[paramName] == null) return "";
		      } else {
		        invariant(params[paramName] != null, "Missing \"%s\" parameter for path \"%s\"", paramName, pattern);
		      }
	
		      var segment;
		      if (paramName === "splat" && Array.isArray(params[paramName])) {
		        segment = params[paramName][splatIndex++];
	
		        invariant(segment != null, "Missing splat # %s for path \"%s\"", splatIndex, pattern);
		      } else {
		        segment = params[paramName];
		      }
	
		      return segment;
		    }).replace(paramInjectTrailingSlashMatcher, "/");
		  },
	
		  /**
		   * Returns an object that is the result of parsing any query string contained
		   * in the given path, null if the path contains no query string.
		   */
		  extractQuery: function extractQuery(path) {
		    var match = path.match(queryMatcher);
		    return match && qs.parse(match[1]);
		  },
	
		  /**
		   * Returns a version of the given path without the query string.
		   */
		  withoutQuery: function withoutQuery(path) {
		    return path.replace(queryMatcher, "");
		  },
	
		  /**
		   * Returns a version of the given path with the parameters in the given
		   * query merged into the query string.
		   */
		  withQuery: function withQuery(path, query) {
		    var existingQuery = PathUtils.extractQuery(path);
	
		    if (existingQuery) query = query ? objectAssign(existingQuery, query) : existingQuery;
	
		    var queryString = qs.stringify(query, { arrayFormat: "brackets" });
	
		    if (queryString) {
		      return PathUtils.withoutQuery(path) + "?" + queryString;
		    }return PathUtils.withoutQuery(path);
		  }
	
		};
	
		module.exports = PathUtils;
	
	/***/ },
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		var invariant = __webpack_require__(34);
		var canUseDOM = __webpack_require__(35).canUseDOM;
		var getWindowScrollPosition = __webpack_require__(37);
	
		function shouldUpdateScroll(state, prevState) {
		  if (!prevState) {
		    return true;
		  } // Don't update scroll position when only the query has changed.
		  if (state.pathname === prevState.pathname) {
		    return false;
		  }var routes = state.routes;
		  var prevRoutes = prevState.routes;
	
		  var sharedAncestorRoutes = routes.filter(function (route) {
		    return prevRoutes.indexOf(route) !== -1;
		  });
	
		  return !sharedAncestorRoutes.some(function (route) {
		    return route.ignoreScrollBehavior;
		  });
		}
	
		/**
		 * Provides the router with the ability to manage window scroll position
		 * according to its scroll behavior.
		 */
		var ScrollHistory = {
	
		  statics: {
	
		    /**
		     * Records curent scroll position as the last known position for the given URL path.
		     */
		    recordScrollPosition: function recordScrollPosition(path) {
		      if (!this.scrollHistory) this.scrollHistory = {};
	
		      this.scrollHistory[path] = getWindowScrollPosition();
		    },
	
		    /**
		     * Returns the last known scroll position for the given URL path.
		     */
		    getScrollPosition: function getScrollPosition(path) {
		      if (!this.scrollHistory) this.scrollHistory = {};
	
		      return this.scrollHistory[path] || null;
		    }
	
		  },
	
		  componentWillMount: function componentWillMount() {
		    invariant(this.constructor.getScrollBehavior() == null || canUseDOM, "Cannot use scroll behavior without a DOM");
		  },
	
		  componentDidMount: function componentDidMount() {
		    this._updateScroll();
		  },
	
		  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
		    this._updateScroll(prevState);
		  },
	
		  _updateScroll: function _updateScroll(prevState) {
		    if (!shouldUpdateScroll(this.state, prevState)) {
		      return;
		    }var scrollBehavior = this.constructor.getScrollBehavior();
	
		    if (scrollBehavior) scrollBehavior.updateScrollPosition(this.constructor.getScrollPosition(this.state.path), this.state.action);
		  }
	
		};
	
		module.exports = ScrollHistory;
	
	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		var React = __webpack_require__(21);
	
		function isValidChild(object) {
		  return object == null || React.isValidElement(object);
		}
	
		function isReactChildren(object) {
		  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
		}
	
		module.exports = isReactChildren;
	
	/***/ },
	/* 28 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		/* jshint -W058 */
	
		var Cancellation = __webpack_require__(30);
		var Redirect = __webpack_require__(29);
	
		/**
		 * Encapsulates a transition to a given path.
		 *
		 * The willTransitionTo and willTransitionFrom handlers receive
		 * an instance of this class as their first argument.
		 */
		function Transition(path, retry) {
		  this.path = path;
		  this.abortReason = null;
		  // TODO: Change this to router.retryTransition(transition)
		  this.retry = retry.bind(this);
		}
	
		Transition.prototype.abort = function (reason) {
		  if (this.abortReason == null) this.abortReason = reason || "ABORT";
		};
	
		Transition.prototype.redirect = function (to, params, query) {
		  this.abort(new Redirect(to, params, query));
		};
	
		Transition.prototype.cancel = function () {
		  this.abort(new Cancellation());
		};
	
		Transition.from = function (transition, routes, components, callback) {
		  routes.reduce(function (callback, route, index) {
		    return function (error) {
		      if (error || transition.abortReason) {
		        callback(error);
		      } else if (route.onLeave) {
		        try {
		          route.onLeave(transition, components[index], callback);
	
		          // If there is no callback in the argument list, call it automatically.
		          if (route.onLeave.length < 3) callback();
		        } catch (e) {
		          callback(e);
		        }
		      } else {
		        callback();
		      }
		    };
		  }, callback)();
		};
	
		Transition.to = function (transition, routes, params, query, callback) {
		  routes.reduceRight(function (callback, route) {
		    return function (error) {
		      if (error || transition.abortReason) {
		        callback(error);
		      } else if (route.onEnter) {
		        try {
		          route.onEnter(transition, params, query, callback);
	
		          // If there is no callback in the argument list, call it automatically.
		          if (route.onEnter.length < 4) callback();
		        } catch (e) {
		          callback(e);
		        }
		      } else {
		        callback();
		      }
		    };
		  }, callback)();
		};
	
		module.exports = Transition;
	
	/***/ },
	/* 29 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		/**
		 * Encapsulates a redirect to the given route.
		 */
		function Redirect(to, params, query) {
		  this.to = to;
		  this.params = params;
		  this.query = query;
		}
	
		module.exports = Redirect;
	
	/***/ },
	/* 30 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		/**
		 * Represents a cancellation caused by navigating away
		 * before the previous transition has fully resolved.
		 */
		function Cancellation() {}
	
		module.exports = Cancellation;
	
	/***/ },
	/* 31 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
		var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
		/* jshint -W084 */
		var PathUtils = __webpack_require__(25);
	
		function deepSearch(route, pathname, query) {
		  // Check the subtree first to find the most deeply-nested match.
		  var childRoutes = route.childRoutes;
		  if (childRoutes) {
		    var match, childRoute;
		    for (var i = 0, len = childRoutes.length; i < len; ++i) {
		      childRoute = childRoutes[i];
	
		      if (childRoute.isDefault || childRoute.isNotFound) continue; // Check these in order later.
	
		      if (match = deepSearch(childRoute, pathname, query)) {
		        // A route in the subtree matched! Add this route and we're done.
		        match.routes.unshift(route);
		        return match;
		      }
		    }
		  }
	
		  // No child routes matched; try the default route.
		  var defaultRoute = route.defaultRoute;
		  if (defaultRoute && (params = PathUtils.extractParams(defaultRoute.path, pathname))) {
		    return new Match(pathname, params, query, [route, defaultRoute]);
		  } // Does the "not found" route match?
		  var notFoundRoute = route.notFoundRoute;
		  if (notFoundRoute && (params = PathUtils.extractParams(notFoundRoute.path, pathname))) {
		    return new Match(pathname, params, query, [route, notFoundRoute]);
		  } // Last attempt: check this route.
		  var params = PathUtils.extractParams(route.path, pathname);
		  if (params) {
		    return new Match(pathname, params, query, [route]);
		  }return null;
		}
	
		var Match = (function () {
		  function Match(pathname, params, query, routes) {
		    _classCallCheck(this, Match);
	
		    this.pathname = pathname;
		    this.params = params;
		    this.query = query;
		    this.routes = routes;
		  }
	
		  _createClass(Match, null, {
		    findMatch: {
	
		      /**
		       * Attempts to match depth-first a route in the given route's
		       * subtree against the given path and returns the match if it
		       * succeeds, null if no match can be made.
		       */
	
		      value: function findMatch(routes, path) {
		        var pathname = PathUtils.withoutQuery(path);
		        var query = PathUtils.extractQuery(path);
		        var match = null;
	
		        for (var i = 0, len = routes.length; match == null && i < len; ++i) match = deepSearch(routes[i], pathname, query);
	
		        return match;
		      }
		    }
		  });
	
		  return Match;
		})();
	
		module.exports = Match;
	
	/***/ },
	/* 32 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		function supportsHistory() {
		  /*! taken from modernizr
		   * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
		   * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
		   * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
		   */
		  var ua = navigator.userAgent;
		  if ((ua.indexOf("Android 2.") !== -1 || ua.indexOf("Android 4.0") !== -1) && ua.indexOf("Mobile Safari") !== -1 && ua.indexOf("Chrome") === -1 && ua.indexOf("Windows Phone") === -1) {
		    return false;
		  }
		  return window.history && "pushState" in window.history;
		}
	
		module.exports = supportsHistory;
	
	/***/ },
	/* 33 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		function assign(target, sources) {
		  if (target == null) {
		    throw new TypeError("Object.assign target cannot be null or undefined");
		  }
	
		  var to = Object(target);
		  var hasOwnProperty = Object.prototype.hasOwnProperty;
	
		  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
		    var nextSource = arguments[nextIndex];
		    if (nextSource == null) {
		      continue;
		    }
	
		    var from = Object(nextSource);
	
		    // We don't currently support accessors nor proxies. Therefore this
		    // copy cannot throw. If we ever supported this then we must handle
		    // exceptions and side-effects. We don't support symbols so they won't
		    // be transferred.
	
		    for (var key in from) {
		      if (hasOwnProperty.call(from, key)) {
		        to[key] = from[key];
		      }
		    }
		  }
	
		  return to;
		}
	
		module.exports = assign;
		/**
		 * Copyright 2014-2015, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule Object.assign
		 */
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign
	
	/***/ },
	/* 34 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		/**
		 * Use invariant() to assert state which your program assumes to be true.
		 *
		 * Provide sprintf-style format (only %s is supported) and arguments
		 * to provide information about what broke and what you were
		 * expecting.
		 *
		 * The invariant message will be stripped in production, but the invariant
		 * will remain to ensure logic does not differ in production.
		 */
	
		var invariant = function invariant(condition, format, a, b, c, d, e, f) {
		  if (false) {
		    if (format === undefined) {
		      throw new Error("invariant requires an error message argument");
		    }
		  }
	
		  if (!condition) {
		    var error;
		    if (format === undefined) {
		      error = new Error("Minified exception occurred; use the non-minified dev environment " + "for the full error message and additional helpful warnings.");
		    } else {
		      var args = [a, b, c, d, e, f];
		      var argIndex = 0;
		      error = new Error("Invariant Violation: " + format.replace(/%s/g, function () {
		        return args[argIndex++];
		      }));
		    }
	
		    error.framesToPop = 1; // we don't care about invariant's own frame
		    throw error;
		  }
		};
	
		module.exports = invariant;
		/**
		 * Copyright 2013-2015, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule invariant
		 */
	
	/***/ },
	/* 35 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
	
		/**
		 * Simple, lightweight module assisting with the detection and context of
		 * Worker. Helps avoid circular dependencies and allows code to reason about
		 * whether or not they are in a Worker, even if they never include the main
		 * `ReactWorker` dependency.
		 */
		var ExecutionEnvironment = {
	
		  canUseDOM: canUseDOM,
	
		  canUseWorkers: typeof Worker !== "undefined",
	
		  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
	
		  canUseViewport: canUseDOM && !!window.screen,
	
		  isInWorker: !canUseDOM // For now, this is true - might change in the future.
	
		};
	
		module.exports = ExecutionEnvironment;
		/**
		 * Copyright 2013-2015, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule ExecutionEnvironment
		 */
	
		/*jslint evil: true */
	
	/***/ },
	/* 36 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		var emptyFunction = __webpack_require__(40);
	
		/**
		 * Similar to invariant but only logs a warning if the condition is not met.
		 * This can be used to log issues in development environments in critical
		 * paths. Removing the logging code for production environments will keep the
		 * same logic and follow the same code paths.
		 */
	
		var warning = emptyFunction;
	
		if (false) {
		  warning = function (condition, format) {
		    for (var args = [], $__0 = 2, $__1 = arguments.length; $__0 < $__1; $__0++) args.push(arguments[$__0]);
		    if (format === undefined) {
		      throw new Error("`warning(condition, format, ...args)` requires a warning " + "message argument");
		    }
	
		    if (format.length < 10 || /^[s\W]*$/.test(format)) {
		      throw new Error("The warning format should be able to uniquely identify this " + "warning. Please, use a more descriptive format than: " + format);
		    }
	
		    if (format.indexOf("Failed Composite propType: ") === 0) {
		      return; // Ignore CompositeComponent proptype check.
		    }
	
		    if (!condition) {
		      var argIndex = 0;
		      var message = "Warning: " + format.replace(/%s/g, function () {
		        return args[argIndex++];
		      });
		      console.warn(message);
		      try {
		        // --- Welcome to debugging React ---
		        // This error was thrown as a convenience so that you can use this stack
		        // to find the callsite that caused this warning to fire.
		        throw new Error(message);
		      } catch (x) {}
		    }
		  };
		}
	
		module.exports = warning;
		/**
		 * Copyright 2014-2015, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule warning
		 */
	
	/***/ },
	/* 37 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		var invariant = __webpack_require__(34);
		var canUseDOM = __webpack_require__(35).canUseDOM;
	
		/**
		 * Returns the current scroll position of the window as { x, y }.
		 */
		function getWindowScrollPosition() {
		  invariant(canUseDOM, "Cannot get current scroll position without a DOM");
	
		  return {
		    x: window.pageXOffset || document.documentElement.scrollLeft,
		    y: window.pageYOffset || document.documentElement.scrollTop
		  };
		}
	
		module.exports = getWindowScrollPosition;
	
	/***/ },
	/* 38 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		function ToObject(val) {
			if (val == null) {
				throw new TypeError("Object.assign cannot be called with null or undefined");
			}
	
			return Object(val);
		}
	
		module.exports = Object.assign || function (target, source) {
			var from;
			var keys;
			var to = ToObject(target);
	
			for (var s = 1; s < arguments.length; s++) {
				from = arguments[s];
				keys = Object.keys(Object(from));
	
				for (var i = 0; i < keys.length; i++) {
					to[keys[i]] = from[keys[i]];
				}
			}
	
			return to;
		};
	
	/***/ },
	/* 39 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		module.exports = __webpack_require__(41);
	
	/***/ },
	/* 40 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		/**
		 * Copyright 2013-2015, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule emptyFunction
		 */
	
		function makeEmptyFunction(arg) {
		  return function () {
		    return arg;
		  };
		}
	
		/**
		 * This function accepts and discards inputs; it has no side effects. This is
		 * primarily useful idiomatically for overridable function endpoints which
		 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
		 */
		function emptyFunction() {}
	
		emptyFunction.thatReturns = makeEmptyFunction;
		emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
		emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
		emptyFunction.thatReturnsNull = makeEmptyFunction(null);
		emptyFunction.thatReturnsThis = function () {
		  return this;
		};
		emptyFunction.thatReturnsArgument = function (arg) {
		  return arg;
		};
	
		module.exports = emptyFunction;
	
	/***/ },
	/* 41 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		// Load modules
	
		var Stringify = __webpack_require__(42);
		var Parse = __webpack_require__(43);
	
		// Declare internals
	
		var internals = {};
	
		module.exports = {
		    stringify: Stringify,
		    parse: Parse
		};
	
	/***/ },
	/* 42 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		// Load modules
	
		var Utils = __webpack_require__(44);
	
		// Declare internals
	
		var internals = {
		    delimiter: "&",
		    arrayPrefixGenerators: {
		        brackets: function brackets(prefix, key) {
		            return prefix + "[]";
		        },
		        indices: function indices(prefix, key) {
		            return prefix + "[" + key + "]";
		        },
		        repeat: function repeat(prefix, key) {
		            return prefix;
		        }
		    }
		};
	
		internals.stringify = function (obj, prefix, generateArrayPrefix) {
	
		    if (Utils.isBuffer(obj)) {
		        obj = obj.toString();
		    } else if (obj instanceof Date) {
		        obj = obj.toISOString();
		    } else if (obj === null) {
		        obj = "";
		    }
	
		    if (typeof obj === "string" || typeof obj === "number" || typeof obj === "boolean") {
	
		        return [encodeURIComponent(prefix) + "=" + encodeURIComponent(obj)];
		    }
	
		    var values = [];
	
		    if (typeof obj === "undefined") {
		        return values;
		    }
	
		    var objKeys = Object.keys(obj);
		    for (var i = 0, il = objKeys.length; i < il; ++i) {
		        var key = objKeys[i];
		        if (Array.isArray(obj)) {
		            values = values.concat(internals.stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix));
		        } else {
		            values = values.concat(internals.stringify(obj[key], prefix + "[" + key + "]", generateArrayPrefix));
		        }
		    }
	
		    return values;
		};
	
		module.exports = function (obj, options) {
	
		    options = options || {};
		    var delimiter = typeof options.delimiter === "undefined" ? internals.delimiter : options.delimiter;
	
		    var keys = [];
	
		    if (typeof obj !== "object" || obj === null) {
	
		        return "";
		    }
	
		    var arrayFormat;
		    if (options.arrayFormat in internals.arrayPrefixGenerators) {
		        arrayFormat = options.arrayFormat;
		    } else if ("indices" in options) {
		        arrayFormat = options.indices ? "indices" : "repeat";
		    } else {
		        arrayFormat = "indices";
		    }
	
		    var generateArrayPrefix = internals.arrayPrefixGenerators[arrayFormat];
	
		    var objKeys = Object.keys(obj);
		    for (var i = 0, il = objKeys.length; i < il; ++i) {
		        var key = objKeys[i];
		        keys = keys.concat(internals.stringify(obj[key], key, generateArrayPrefix));
		    }
	
		    return keys.join(delimiter);
		};
	
	/***/ },
	/* 43 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		// Load modules
	
		var Utils = __webpack_require__(44);
	
		// Declare internals
	
		var internals = {
		    delimiter: "&",
		    depth: 5,
		    arrayLimit: 20,
		    parameterLimit: 1000
		};
	
		internals.parseValues = function (str, options) {
	
		    var obj = {};
		    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);
	
		    for (var i = 0, il = parts.length; i < il; ++i) {
		        var part = parts[i];
		        var pos = part.indexOf("]=") === -1 ? part.indexOf("=") : part.indexOf("]=") + 1;
	
		        if (pos === -1) {
		            obj[Utils.decode(part)] = "";
		        } else {
		            var key = Utils.decode(part.slice(0, pos));
		            var val = Utils.decode(part.slice(pos + 1));
	
		            if (Object.prototype.hasOwnProperty(key)) {
		                continue;
		            }
	
		            if (!obj.hasOwnProperty(key)) {
		                obj[key] = val;
		            } else {
		                obj[key] = [].concat(obj[key]).concat(val);
		            }
		        }
		    }
	
		    return obj;
		};
	
		internals.parseObject = function (chain, val, options) {
	
		    if (!chain.length) {
		        return val;
		    }
	
		    var root = chain.shift();
	
		    var obj = {};
		    if (root === "[]") {
		        obj = [];
		        obj = obj.concat(internals.parseObject(chain, val, options));
		    } else {
		        var cleanRoot = root[0] === "[" && root[root.length - 1] === "]" ? root.slice(1, root.length - 1) : root;
		        var index = parseInt(cleanRoot, 10);
		        var indexString = "" + index;
		        if (!isNaN(index) && root !== cleanRoot && indexString === cleanRoot && index >= 0 && index <= options.arrayLimit) {
	
		            obj = [];
		            obj[index] = internals.parseObject(chain, val, options);
		        } else {
		            obj[cleanRoot] = internals.parseObject(chain, val, options);
		        }
		    }
	
		    return obj;
		};
	
		internals.parseKeys = function (key, val, options) {
	
		    if (!key) {
		        return;
		    }
	
		    // The regex chunks
	
		    var parent = /^([^\[\]]*)/;
		    var child = /(\[[^\[\]]*\])/g;
	
		    // Get the parent
	
		    var segment = parent.exec(key);
	
		    // Don't allow them to overwrite object prototype properties
	
		    if (Object.prototype.hasOwnProperty(segment[1])) {
		        return;
		    }
	
		    // Stash the parent if it exists
	
		    var keys = [];
		    if (segment[1]) {
		        keys.push(segment[1]);
		    }
	
		    // Loop through children appending to the array until we hit depth
	
		    var i = 0;
		    while ((segment = child.exec(key)) !== null && i < options.depth) {
	
		        ++i;
		        if (!Object.prototype.hasOwnProperty(segment[1].replace(/\[|\]/g, ""))) {
		            keys.push(segment[1]);
		        }
		    }
	
		    // If there's a remainder, just add whatever is left
	
		    if (segment) {
		        keys.push("[" + key.slice(segment.index) + "]");
		    }
	
		    return internals.parseObject(keys, val, options);
		};
	
		module.exports = function (str, options) {
	
		    if (str === "" || str === null || typeof str === "undefined") {
	
		        return {};
		    }
	
		    options = options || {};
		    options.delimiter = typeof options.delimiter === "string" || Utils.isRegExp(options.delimiter) ? options.delimiter : internals.delimiter;
		    options.depth = typeof options.depth === "number" ? options.depth : internals.depth;
		    options.arrayLimit = typeof options.arrayLimit === "number" ? options.arrayLimit : internals.arrayLimit;
		    options.parameterLimit = typeof options.parameterLimit === "number" ? options.parameterLimit : internals.parameterLimit;
	
		    var tempObj = typeof str === "string" ? internals.parseValues(str, options) : str;
		    var obj = {};
	
		    // Iterate over the keys and setup the new object
	
		    var keys = Object.keys(tempObj);
		    for (var i = 0, il = keys.length; i < il; ++i) {
		        var key = keys[i];
		        var newObj = internals.parseKeys(key, tempObj[key], options);
		        obj = Utils.merge(obj, newObj);
		    }
	
		    return Utils.compact(obj);
		};
	
	/***/ },
	/* 44 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		// Load modules
	
		// Declare internals
	
		var internals = {};
	
		exports.arrayToObject = function (source) {
	
		    var obj = {};
		    for (var i = 0, il = source.length; i < il; ++i) {
		        if (typeof source[i] !== "undefined") {
	
		            obj[i] = source[i];
		        }
		    }
	
		    return obj;
		};
	
		exports.merge = function (target, source) {
	
		    if (!source) {
		        return target;
		    }
	
		    if (typeof source !== "object") {
		        if (Array.isArray(target)) {
		            target.push(source);
		        } else {
		            target[source] = true;
		        }
	
		        return target;
		    }
	
		    if (typeof target !== "object") {
		        target = [target].concat(source);
		        return target;
		    }
	
		    if (Array.isArray(target) && !Array.isArray(source)) {
	
		        target = exports.arrayToObject(target);
		    }
	
		    var keys = Object.keys(source);
		    for (var k = 0, kl = keys.length; k < kl; ++k) {
		        var key = keys[k];
		        var value = source[key];
	
		        if (!target[key]) {
		            target[key] = value;
		        } else {
		            target[key] = exports.merge(target[key], value);
		        }
		    }
	
		    return target;
		};
	
		exports.decode = function (str) {
	
		    try {
		        return decodeURIComponent(str.replace(/\+/g, " "));
		    } catch (e) {
		        return str;
		    }
		};
	
		exports.compact = function (obj, refs) {
	
		    if (typeof obj !== "object" || obj === null) {
	
		        return obj;
		    }
	
		    refs = refs || [];
		    var lookup = refs.indexOf(obj);
		    if (lookup !== -1) {
		        return refs[lookup];
		    }
	
		    refs.push(obj);
	
		    if (Array.isArray(obj)) {
		        var compacted = [];
	
		        for (var i = 0, il = obj.length; i < il; ++i) {
		            if (typeof obj[i] !== "undefined") {
		                compacted.push(obj[i]);
		            }
		        }
	
		        return compacted;
		    }
	
		    var keys = Object.keys(obj);
		    for (i = 0, il = keys.length; i < il; ++i) {
		        var key = keys[i];
		        obj[key] = exports.compact(obj[key], refs);
		    }
	
		    return obj;
		};
	
		exports.isRegExp = function (obj) {
		    return Object.prototype.toString.call(obj) === "[object RegExp]";
		};
	
		exports.isBuffer = function (obj) {
	
		    if (obj === null || typeof obj === "undefined") {
	
		        return false;
		    }
	
		    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
		};
	
	/***/ }
	/******/ ])
	});


/***/ },
/* 27 */
/*!***************************************************!*\
  !*** ./bower_components/admin-lte/dist/js/app.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery, $) {/*! AdminLTE app.js
	 * ================
	 * Main JS application file for AdminLTE v2. This file
	 * should be included in all pages. It controls some layout
	 * options and implements exclusive AdminLTE plugins.
	 *
	 * @Author  Almsaeed Studio
	 * @Support <http://www.almsaeedstudio.com>
	 * @Email   <support@almsaeedstudio.com>
	 * @version 2.1.0
	 * @license MIT <http://opensource.org/licenses/MIT>
	 */
	
	'use strict';
	
	//Make sure jQuery has been loaded before app.js
	if (typeof jQuery === "undefined") {
	  throw new Error("AdminLTE requires jQuery");
	}
	
	/* AdminLTE
	 *
	 * @type Object
	 * @description $.AdminLTE is the main object for the template's app.
	 *              It's used for implementing functions and options related
	 *              to the template. Keeping everything wrapped in an object
	 *              prevents conflict with other plugins and is a better
	 *              way to organize our code.
	 */
	$.AdminLTE = {};
	
	/* --------------------
	 * - AdminLTE Options -
	 * --------------------
	 * Modify these options to suit your implementation
	 */
	$.AdminLTE.options = {
	  //Add slimscroll to navbar menus
	  //This requires you to load the slimscroll plugin
	  //in every page before app.js
	  navbarMenuSlimscroll: true,
	  navbarMenuSlimscrollWidth: "3px", //The width of the scroll bar
	  navbarMenuHeight: "200px", //The height of the inner menu
	  //Sidebar push menu toggle button selector
	  sidebarToggleSelector: "[data-toggle='offcanvas']",
	  //Activate sidebar push menu
	  sidebarPushMenu: true,
	  //Activate sidebar slimscroll if the fixed layout is set (requires SlimScroll Plugin)
	  sidebarSlimScroll: true,
	  //BoxRefresh Plugin
	  enableBoxRefresh: true,
	  //Bootstrap.js tooltip
	  enableBSToppltip: true,
	  BSTooltipSelector: "[data-toggle='tooltip']",
	  //Enable Fast Click. Fastclick.js creates a more
	  //native touch experience with touch devices. If you
	  //choose to enable the plugin, make sure you load the script
	  //before AdminLTE's app.js
	  enableFastclick: true,
	  //Control Sidebar Options
	  enableControlSidebar: true,
	  controlSidebarOptions: {
	    //Which button should trigger the open/close event
	    toggleBtnSelector: "[data-toggle='control-sidebar']",
	    //The sidebar selector
	    selector: ".control-sidebar",
	    //Enable slide over content
	    slide: true
	  },
	  //Box Widget Plugin. Enable this plugin
	  //to allow boxes to be collapsed and/or removed
	  enableBoxWidget: true,
	  //Box Widget plugin options
	  boxWidgetOptions: {
	    boxWidgetIcons: {
	      //Collapse icon
	      collapse: 'fa-minus',
	      //Open icon
	      open: 'fa-plus',
	      //Remove icon
	      remove: 'fa-times'
	    },
	    boxWidgetSelectors: {
	      //Remove button selector
	      remove: '[data-widget="remove"]',
	      //Collapse button selector
	      collapse: '[data-widget="collapse"]'
	    }
	  },
	  //Direct Chat plugin options
	  directChat: {
	    //Enable direct chat by default
	    enable: true,
	    //The button to open and close the chat contacts pane
	    contactToggleSelector: '[data-widget="chat-pane-toggle"]'
	  },
	  //Define the set of colors to use globally around the website
	  colors: {
	    lightBlue: "#3c8dbc",
	    red: "#f56954",
	    green: "#00a65a",
	    aqua: "#00c0ef",
	    yellow: "#f39c12",
	    blue: "#0073b7",
	    navy: "#001F3F",
	    teal: "#39CCCC",
	    olive: "#3D9970",
	    lime: "#01FF70",
	    orange: "#FF851B",
	    fuchsia: "#F012BE",
	    purple: "#8E24AA",
	    maroon: "#D81B60",
	    black: "#222222",
	    gray: "#d2d6de"
	  },
	  //The standard screen sizes that bootstrap uses.
	  //If you change these in the variables.less file, change
	  //them here too.
	  screenSizes: {
	    xs: 480,
	    sm: 768,
	    md: 992,
	    lg: 1200
	  }
	};
	
	/* ------------------
	 * - Implementation -
	 * ------------------
	 * The next block of code implements AdminLTE's
	 * functions and plugins as specified by the
	 * options above.
	 */
	$(function () {
	  //Easy access to options
	  var o = $.AdminLTE.options;
	
	  //Set up the object
	  _init();
	
	  //Activate the layout maker
	  $.AdminLTE.layout.activate();
	
	  //Enable sidebar tree view controls
	  $.AdminLTE.tree('.sidebar');
	
	  //Enable control sidebar
	  if (o.enableControlSidebar) {
	    $.AdminLTE.controlSidebar.activate();
	  }
	
	  //Add slimscroll to navbar dropdown
	  if (o.navbarMenuSlimscroll && typeof $.fn.slimscroll != 'undefined') {
	    $(".navbar .menu").slimscroll({
	      height: o.navbarMenuHeight,
	      alwaysVisible: false,
	      size: o.navbarMenuSlimscrollWidth
	    }).css("width", "100%");
	  }
	
	  //Activate sidebar push menu
	  if (o.sidebarPushMenu) {
	    $.AdminLTE.pushMenu(o.sidebarToggleSelector);
	  }
	
	  //Activate Bootstrap tooltip
	  if (o.enableBSToppltip) {
	    $(o.BSTooltipSelector).tooltip();
	  }
	
	  //Activate box widget
	  if (o.enableBoxWidget) {
	    $.AdminLTE.boxWidget.activate();
	  }
	
	  //Activate fast click
	  if (o.enableFastclick && typeof FastClick != 'undefined') {
	    FastClick.attach(document.body);
	  }
	
	  //Activate direct chat widget
	  if (o.directChat.enable) {
	    $(o.directChat.contactToggleSelector).on('click', function () {
	      var box = $(this).parents('.direct-chat').first();
	      box.toggleClass('direct-chat-contacts-open');
	    });
	  }
	
	  /*
	   * INITIALIZE BUTTON TOGGLE
	   * ------------------------
	   */
	  $('.btn-group[data-toggle="btn-toggle"]').each(function () {
	    var group = $(this);
	    $(this).find(".btn").on('click', function (e) {
	      group.find(".btn.active").removeClass("active");
	      $(this).addClass("active");
	      e.preventDefault();
	    });
	
	  });
	});
	
	/* ----------------------------------
	 * - Initialize the AdminLTE Object -
	 * ----------------------------------
	 * All AdminLTE functions are implemented below.
	 */
	function _init() {
	
	  /* Layout
	   * ======
	   * Fixes the layout height in case min-height fails.
	   *
	   * @type Object
	   * @usage $.AdminLTE.layout.activate()
	   *        $.AdminLTE.layout.fix()
	   *        $.AdminLTE.layout.fixSidebar()
	   */
	  $.AdminLTE.layout = {
	    activate: function () {
	      var _this = this;
	      _this.fix();
	      _this.fixSidebar();
	      $(window, ".wrapper").resize(function () {
	        _this.fix();
	        _this.fixSidebar();
	      });
	    },
	    fix: function () {
	      //Get window height and the wrapper height
	      var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
	      var window_height = $(window).height();
	      var sidebar_height = $(".sidebar").height();
	      //Set the min-height of the content and sidebar based on the
	      //the height of the document.
	      if ($("body").hasClass("fixed")) {
	        $(".content-wrapper, .right-side").css('min-height', window_height - $('.main-footer').outerHeight());
	      } else {
	        if (window_height >= sidebar_height) {
	          $(".content-wrapper, .right-side").css('min-height', window_height - neg);
	        } else {
	          $(".content-wrapper, .right-side").css('min-height', sidebar_height);
	        }
	      }
	    },
	    fixSidebar: function () {
	      //Make sure the body tag has the .fixed class
	      if (!$("body").hasClass("fixed")) {
	        if (typeof $.fn.slimScroll != 'undefined') {
	          $(".sidebar").slimScroll({destroy: true}).height("auto");
	        }
	        return;
	      } else if (typeof $.fn.slimScroll == 'undefined' && console) {
	        console.error("Error: the fixed layout requires the slimscroll plugin!");
	      }
	      //Enable slimscroll for fixed layout
	      if ($.AdminLTE.options.sidebarSlimScroll) {
	        if (typeof $.fn.slimScroll != 'undefined') {
	          //Distroy if it exists
	          $(".sidebar").slimScroll({destroy: true}).height("auto");
	          //Add slimscroll
	          $(".sidebar").slimscroll({
	            height: ($(window).height() - $(".main-header").height()) + "px",
	            color: "rgba(0,0,0,0.2)",
	            size: "3px"
	          });
	        }
	      }
	    }
	  };
	
	  /* PushMenu()
	   * ==========
	   * Adds the push menu functionality to the sidebar.
	   *
	   * @type Function
	   * @usage: $.AdminLTE.pushMenu("[data-toggle='offcanvas']")
	   */
	  $.AdminLTE.pushMenu = function (toggleBtn) {
	    //Get the screen sizes
	    var screenSizes = this.options.screenSizes;
	
	    //Enable sidebar toggle
	    $(document).on('click', toggleBtn, function (e) {
	      e.preventDefault();
	
	      //Enable sidebar push menu
	      if ($(window).width() > (screenSizes.sm - 1)) {
	        $("body").toggleClass('sidebar-collapse');
	      }
	      //Handle sidebar push menu for small screens
	      else {
	        if ($("body").hasClass('sidebar-open')) {
	          $("body").removeClass('sidebar-open');
	          $("body").removeClass('sidebar-collapse')
	        } else {
	          $("body").addClass('sidebar-open');
	        }
	      }
	    });
	
	    $(".content-wrapper").click(function () {
	      //Enable hide menu when clicking on the content-wrapper on small screens
	      if ($(window).width() <= (screenSizes.sm - 1) && $("body").hasClass("sidebar-open")) {
	        $("body").removeClass('sidebar-open');
	      }
	    });
	
	  };
	
	  /* Tree()
	   * ======
	   * Converts the sidebar into a multilevel
	   * tree view menu.
	   *
	   * @type Function
	   * @Usage: $.AdminLTE.tree('.sidebar')
	   */
	  $.AdminLTE.tree = function (menu) {
	    var _this = this;
	
	    $(document).on('click', "li a", $(menu), function (e) {
	      //Get the clicked link and the next element
	      var $this = $(this);
	      var checkElement = $this.next();
	
	      //Check if the next element is a menu and is visible
	      if ((checkElement.is('.treeview-menu')) && (checkElement.is(':visible'))) {
	        //Close the menu
	        checkElement.slideUp('normal', function () {
	          checkElement.removeClass('menu-open');
	          //Fix the layout in case the sidebar stretches over the height of the window
	          //_this.layout.fix();
	        });
	        checkElement.parent("li").removeClass("active");
	      }
	      //If the menu is not visible
	      else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
	        //Get the parent menu
	        var parent = $this.parents('ul').first();
	        //Close all open menus within the parent
	        var ul = parent.find('ul:visible').slideUp('normal');
	        //Remove the menu-open class from the parent
	        ul.removeClass('menu-open');
	        //Get the parent li
	        var parent_li = $this.parent("li");
	
	        //Open the target menu and add the menu-open class
	        checkElement.slideDown('normal', function () {
	          //Add the class active to the parent li
	          checkElement.addClass('menu-open');
	          parent.find('li.active').removeClass('active');
	          parent_li.addClass('active');
	          //Fix the layout in case the sidebar stretches over the height of the window
	          _this.layout.fix();
	        });
	      }
	      //if this isn't a link, prevent the page from being redirected
	      if (checkElement.is('.treeview-menu')) {
	        e.preventDefault();
	      }
	    });
	  };
	
	  /* ControlSidebar
	   * ==============
	   * Adds functionality to the right sidebar
	   *
	   * @type Object
	   * @usage $.AdminLTE.controlSidebar.activate(options)
	   */
	  $.AdminLTE.controlSidebar = {
	    //instantiate the object
	    activate: function () {
	      //Get the object
	      var _this = this;
	      //Update options
	      var o = $.AdminLTE.options.controlSidebarOptions;
	
	      //Listen to the click event
	      $(document).on('click', o.toggleBtnSelector, function (e) {
	        e.preventDefault();
	
	        //Get the sidebar
	        var sidebar = $(o.selector);
	        //If the sidebar is not open
	        if (!sidebar.hasClass('control-sidebar-open')
	                && !$('body').hasClass('control-sidebar-open')) {
	          //Open the sidebar
	          _this.open(sidebar, o.slide);
	        } else {
	          _this.close(sidebar, o.slide);
	        }
	      });
	
	      //If the body has a boxed layout, fix the sidebar bg position
	      var bg = $(".control-sidebar-bg");
	      _this._fix(bg);
	    },
	    //Open the control sidebar
	    open: function (sidebar, slide) {
	      //Slide over content
	      if (slide)
	        sidebar.addClass('control-sidebar-open');
	      //Push the content by adding the open class to the body instead
	      //of the sidebar itself
	      else
	        $('body').addClass('control-sidebar-open');
	    },
	    //Close the control sidebar
	    close: function (sidebar, slide) {
	      if (slide)
	        sidebar.removeClass('control-sidebar-open');
	      else
	        $('body').removeClass('control-sidebar-open');
	    },
	    _fix: function (sidebar) {
	      var _this = this;
	      if ($("body").hasClass('layout-boxed')) {
	        sidebar.css('position', 'absolute');
	        sidebar.height($(".wrapper").height());
	        $(window).resize(function () {
	          _this._fix(sidebar);
	        });
	      } else {
	        sidebar.css({
	          'position': 'fixed',
	          'height': 'auto'
	        });
	      }
	    }
	  };
	
	  /* BoxWidget
	   * =========
	   * BoxWidget is plugin to handle collapsing and
	   * removing boxes from the screen.
	   *
	   * @type Object
	   * @usage $.AdminLTE.boxWidget.activate()
	   *        Set all of your option in the main $.AdminLTE.options object
	   */
	  $.AdminLTE.boxWidget = {
	    selectors: $.AdminLTE.options.boxWidgetOptions.boxWidgetSelectors,
	    icons: $.AdminLTE.options.boxWidgetOptions.boxWidgetIcons,
	    activate: function () {
	      var _this = this;
	      //Listen for collapse event triggers
	      $(_this.selectors.collapse).on('click', function (e) {
	        e.preventDefault();
	        _this.collapse($(this));
	      });
	
	      //Listen for remove event triggers
	      $(_this.selectors.remove).on('click', function (e) {
	        e.preventDefault();
	        _this.remove($(this));
	      });
	    },
	    collapse: function (element) {
	      var _this = this;
	      //Find the box parent
	      var box = element.parents(".box").first();
	      //Find the body and the footer
	      var box_content = box.find("> .box-body, > .box-footer");
	      if (!box.hasClass("collapsed-box")) {
	        //Convert minus into plus
	        element.children(":first")
	                .removeClass(_this.icons.collapse)
	                .addClass(_this.icons.open);
	        //Hide the content
	        box_content.slideUp(300, function () {
	          box.addClass("collapsed-box");
	        });
	      } else {
	        //Convert plus into minus
	        element.children(":first")
	                .removeClass(_this.icons.open)
	                .addClass(_this.icons.collapse);
	        //Show the content
	        box_content.slideDown(300, function () {
	          box.removeClass("collapsed-box");
	        });
	      }
	    },
	    remove: function (element) {
	      //Find the box parent
	      var box = element.parents(".box").first();
	      box.slideUp();
	    }
	  };
	}
	
	/* ------------------
	 * - Custom Plugins -
	 * ------------------
	 * All custom plugins are defined below.
	 */
	
	/*
	 * BOX REFRESH BUTTON
	 * ------------------
	 * This is a custom plugin to use with the compenet BOX. It allows you to add
	 * a refresh button to the box. It converts the box's state to a loading state.
	 *
	 * @type plugin
	 * @usage $("#box-widget").boxRefresh( options );
	 */
	(function ($) {
	
	  $.fn.boxRefresh = function (options) {
	
	    // Render options
	    var settings = $.extend({
	      //Refressh button selector
	      trigger: ".refresh-btn",
	      //File source to be loaded (e.g: ajax/src.php)
	      source: "",
	      //Callbacks
	      onLoadStart: function (box) {
	      }, //Right after the button has been clicked
	      onLoadDone: function (box) {
	      } //When the source has been loaded
	
	    }, options);
	
	    //The overlay
	    var overlay = $('<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>');
	
	    return this.each(function () {
	      //if a source is specified
	      if (settings.source === "") {
	        if (console) {
	          console.log("Please specify a source first - boxRefresh()");
	        }
	        return;
	      }
	      //the box
	      var box = $(this);
	      //the button
	      var rBtn = box.find(settings.trigger).first();
	
	      //On trigger click
	      rBtn.on('click', function (e) {
	        e.preventDefault();
	        //Add loading overlay
	        start(box);
	
	        //Perform ajax call
	        box.find(".box-body").load(settings.source, function () {
	          done(box);
	        });
	      });
	    });
	
	    function start(box) {
	      //Add overlay and loading img
	      box.append(overlay);
	
	      settings.onLoadStart.call(box);
	    }
	
	    function done(box) {
	      //Remove overlay and loading img
	      box.find(overlay).remove();
	
	      settings.onLoadDone.call(box);
	    }
	
	  };
	
	})(jQuery);
	
	/*
	 * TODO LIST CUSTOM PLUGIN
	 * -----------------------
	 * This plugin depends on iCheck plugin for checkbox and radio inputs
	 *
	 * @type plugin
	 * @usage $("#todo-widget").todolist( options );
	 */
	(function ($) {
	
	  $.fn.todolist = function (options) {
	    // Render options
	    var settings = $.extend({
	      //When the user checks the input
	      onCheck: function (ele) {
	      },
	      //When the user unchecks the input
	      onUncheck: function (ele) {
	      }
	    }, options);
	
	    return this.each(function () {
	
	      if (typeof $.fn.iCheck != 'undefined') {
	        $('input', this).on('ifChecked', function (event) {
	          var ele = $(this).parents("li").first();
	          ele.toggleClass("done");
	          settings.onCheck.call(ele);
	        });
	
	        $('input', this).on('ifUnchecked', function (event) {
	          var ele = $(this).parents("li").first();
	          ele.toggleClass("done");
	          settings.onUncheck.call(ele);
	        });
	      } else {
	        $('input', this).on('change', function (event) {
	          var ele = $(this).parents("li").first();
	          ele.toggleClass("done");
	          settings.onCheck.call(ele);
	        });
	      }
	    });
	  };
	}(jQuery));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 4), __webpack_require__(/*! jquery */ 4)))

/***/ },
/* 28 */
/*!**********************************************************!*\
  !*** ./bower_components/admin-lte/dist/css/AdminLTE.css ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./~/css-loader?sourceMap!!./bower_components/admin-lte/dist/css/AdminLTE.css */ 29);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./~/style-loader/addStyles.js */ 34)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/ozaki/dev/administa/node_modules/css-loader/index.js?sourceMap!!/home/ozaki/dev/administa/bower_components/admin-lte/dist/css/AdminLTE.css", function() {
			var newContent = require("!!/home/ozaki/dev/administa/node_modules/css-loader/index.js?sourceMap!!/home/ozaki/dev/administa/bower_components/admin-lte/dist/css/AdminLTE.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 29 */
/*!***********************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./bower_components/admin-lte/dist/css/AdminLTE.css ***!
  \***********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./~/css-loader/cssToString.js */ 64)();
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic);", ""]);
	exports.push([module.id, "\n/*!\n *   AdminLTE v2.1.0\n *   Author: Almsaeed Studio\n *\t Website: Almsaeed Studio <http://almsaeedstudio.com>\n *   License: Open source - MIT\n *           Please visit http://opensource.org/licenses/MIT for more information\n!*/\n/*\n * Core: Genral Layout Style\n * -------------------------\n */\nhtml,\nbody {\n  min-height: 100%;\n}\n.layout-boxed html,\n.layout-boxed body {\n  height: 100%;\n}\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 400;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n/* Layout */\n.wrapper {\n  min-height: 100%;\n  position: static;\n  overflow: hidden;\n}\n.wrapper:before,\n.wrapper:after {\n  content: \" \";\n  display: table;\n}\n.wrapper:after {\n  clear: both;\n}\n.layout-boxed .wrapper {\n  max-width: 1250px;\n  margin: 0 auto;\n  min-height: 100%;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);\n  position: relative;\n}\n.layout-boxed {\n  background: url("+__webpack_require__(/*! ../img/boxed-bg.jpg */ 73)+") repeat fixed;\n}\n/*\n * Content Wrapper - contins main content\n * ```.right-side has been deprecated as of v2.0.0 in favor of .content-wrapper  ```\n */\n.content-wrapper,\n.right-side,\n.main-footer {\n  -webkit-transition: -webkit-transform 0.3s ease-in-out, margin 0.3s ease-in-out;\n  -moz-transition: -moz-transform 0.3s ease-in-out, margin 0.3s ease-in-out;\n  -o-transition: -o-transform 0.3s ease-in-out, margin 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out, margin 0.3s ease-in-out;\n  margin-left: 230px;\n  z-index: 820;\n}\n.layout-top-nav .content-wrapper,\n.layout-top-nav .right-side,\n.layout-top-nav .main-footer {\n  margin-left: 0;\n}\n@media (max-width: 767px) {\n  .content-wrapper,\n  .right-side,\n  .main-footer {\n    margin-left: 0;\n  }\n}\n@media (min-width: 768px) {\n  .sidebar-collapse .content-wrapper,\n  .sidebar-collapse .right-side,\n  .sidebar-collapse .main-footer {\n    margin-left: 0;\n  }\n}\n@media (max-width: 767px) {\n  .sidebar-open .content-wrapper,\n  .sidebar-open .right-side,\n  .sidebar-open .main-footer {\n    -webkit-transform: translate(230px, 0);\n    -ms-transform: translate(230px, 0);\n    -o-transform: translate(230px, 0);\n    transform: translate(230px, 0);\n  }\n}\n.content-wrapper,\n.right-side {\n  min-height: 100%;\n  background-color: #ecf0f5;\n  z-index: 800;\n}\n.main-footer {\n  background: #fff;\n  padding: 15px;\n  color: #444;\n  border-top: 1px solid #d2d6de;\n}\n/* Fixed layout */\n.fixed .main-header,\n.fixed .main-sidebar,\n.fixed .left-side {\n  position: fixed;\n}\n.fixed .main-header {\n  top: 0;\n  right: 0;\n  left: 0;\n}\n.fixed .content-wrapper,\n.fixed .right-side {\n  padding-top: 50px;\n}\n@media (max-width: 767px) {\n  .fixed .content-wrapper,\n  .fixed .right-side {\n    padding-top: 100px;\n  }\n}\n.fixed.layout-boxed .wrapper {\n  max-width: 100%;\n}\n/* Content */\n.content {\n  min-height: 250px;\n  padding: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n/* H1 - H6 font */\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-family: 'Source Sans Pro', sans-serif;\n}\n/* General Links */\na {\n  color: #3c8dbc;\n}\na:hover,\na:active,\na:focus {\n  outline: none;\n  text-decoration: none;\n  color: #72afd2;\n}\n/* Page Header */\n.page-header {\n  margin: 10px 0 20px 0;\n  font-size: 22px;\n}\n.page-header > small {\n  color: #666;\n  display: block;\n  margin-top: 5px;\n}\n/*\n * Component: Main Header\n * ----------------------\n */\n.main-header {\n  position: relative;\n  max-height: 100px;\n  z-index: 1030;\n}\n.main-header > .navbar {\n  -webkit-transition: margin-left 0.3s ease-in-out;\n  -o-transition: margin-left 0.3s ease-in-out;\n  transition: margin-left 0.3s ease-in-out;\n  margin-bottom: 0;\n  margin-left: 230px;\n  border: none;\n  min-height: 50px;\n  border-radius: 0;\n}\n.layout-top-nav .main-header > .navbar {\n  margin-left: 0!important;\n}\n.main-header #navbar-search-input {\n  background: rgba(255, 255, 255, 0.2);\n  border-color: transparent;\n}\n.main-header #navbar-search-input:focus,\n.main-header #navbar-search-input:active {\n  border-color: rgba(0, 0, 0, 0.1) !important;\n  background: rgba(255, 255, 255, 0.9);\n}\n.main-header #navbar-search-input::-moz-placeholder {\n  color: #ccc;\n  opacity: 1;\n}\n.main-header #navbar-search-input:-ms-input-placeholder {\n  color: #ccc;\n}\n.main-header #navbar-search-input::-webkit-input-placeholder {\n  color: #ccc;\n}\n.main-header .navbar-custom-menu,\n.main-header .navbar-right {\n  float: right;\n}\n@media (max-width: 991px) {\n  .main-header .navbar-custom-menu a,\n  .main-header .navbar-right a {\n    color: inherit;\n    background: transparent;\n  }\n}\n@media (max-width: 767px) {\n  .main-header .navbar-right {\n    float: none;\n  }\n  .navbar-collapse .main-header .navbar-right {\n    margin: 7.5px -15px;\n  }\n  .main-header .navbar-right > li {\n    color: inherit;\n    border: 0;\n  }\n}\n.main-header .sidebar-toggle {\n  float: left;\n  background-color: transparent;\n  background-image: none;\n  padding: 15px 15px;\n  font-family: fontAwesome;\n}\n.main-header .sidebar-toggle:before {\n  content: \"\\f0c9\";\n}\n.main-header .sidebar-toggle:hover {\n  color: #fff;\n}\n.main-header .sidebar-toggle:focus,\n.main-header .sidebar-toggle:active {\n  background: transparent;\n}\n.main-header .sidebar-toggle .icon-bar {\n  display: none;\n}\n.main-header .navbar .nav > li.user > a > .fa,\n.main-header .navbar .nav > li.user > a > .glyphicon,\n.main-header .navbar .nav > li.user > a > .ion {\n  margin-right: 5px;\n}\n.main-header .navbar .nav > li > a > .label {\n  position: absolute;\n  top: 9px;\n  right: 7px;\n  text-align: center;\n  font-size: 9px;\n  padding: 2px 3px;\n  line-height: .9;\n}\n.main-header .logo {\n  -webkit-transition: width 0.3s ease-in-out;\n  -o-transition: width 0.3s ease-in-out;\n  transition: width 0.3s ease-in-out;\n  display: block;\n  float: left;\n  height: 50px;\n  font-size: 20px;\n  line-height: 50px;\n  text-align: center;\n  width: 230px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  padding: 0 15px;\n  font-weight: 300;\n}\n.main-header .logo .logo-lg {\n  display: block;\n}\n.main-header .logo .logo-mini {\n  display: none;\n}\n.main-header .navbar-brand {\n  color: #fff;\n}\n.content-header {\n  position: relative;\n  padding: 15px 15px 0 15px;\n}\n.content-header > h1 {\n  margin: 0;\n  font-size: 24px;\n}\n.content-header > h1 > small {\n  font-size: 15px;\n  display: inline-block;\n  padding-left: 4px;\n  font-weight: 300;\n}\n.content-header > .breadcrumb {\n  float: right;\n  background: transparent;\n  margin-top: 0px;\n  margin-bottom: 0;\n  font-size: 12px;\n  padding: 7px 5px;\n  position: absolute;\n  top: 15px;\n  right: 10px;\n  border-radius: 2px;\n}\n.content-header > .breadcrumb > li > a {\n  color: #444;\n  text-decoration: none;\n  display: inline-block;\n}\n.content-header > .breadcrumb > li > a > .fa,\n.content-header > .breadcrumb > li > a > .glyphicon,\n.content-header > .breadcrumb > li > a > .ion {\n  margin-right: 5px;\n}\n.content-header > .breadcrumb > li + li:before {\n  content: '>\\00a0';\n}\n@media (max-width: 991px) {\n  .content-header > .breadcrumb {\n    position: relative;\n    margin-top: 5px;\n    top: 0;\n    right: 0;\n    float: none;\n    background: #d2d6de;\n    padding-left: 10px;\n  }\n  .content-header > .breadcrumb li:before {\n    color: #97a0b3;\n  }\n}\n.navbar-toggle {\n  color: #fff;\n  border: 0;\n  margin: 0;\n  padding: 15px 15px;\n}\n@media (max-width: 991px) {\n  .navbar-custom-menu .navbar-nav > li {\n    float: left;\n  }\n  .navbar-custom-menu .navbar-nav {\n    margin: 0;\n    float: left;\n  }\n  .navbar-custom-menu .navbar-nav > li > a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n    line-height: 20px;\n  }\n}\n@media (max-width: 767px) {\n  .main-header {\n    position: relative;\n  }\n  .main-header .logo,\n  .main-header .navbar {\n    width: 100%;\n    float: none;\n    position: relative!important;\n  }\n  .main-header .navbar {\n    margin: 0;\n  }\n  .main-header .navbar-custom-menu {\n    float: right;\n  }\n  .main-sidebar,\n  .left-side {\n    padding-top: 100px!important;\n  }\n}\n@media (max-width: 991px) {\n  .navbar-collapse.pull-left {\n    float: none!important;\n  }\n  .navbar-collapse.pull-left + .navbar-custom-menu {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 40px;\n  }\n}\n/*\n * Component: Sidebar\n * ------------------\n */\n.main-sidebar,\n.left-side {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding-top: 50px;\n  min-height: 100%;\n  width: 230px;\n  z-index: 810;\n  -webkit-transition: -webkit-transform 0.3s ease-in-out, width 0.3s ease-in-out;\n  -moz-transition: -moz-transform 0.3s ease-in-out, width 0.3s ease-in-out;\n  -o-transition: -o-transform 0.3s ease-in-out, width 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;\n}\n@media (max-width: 767px) {\n  .main-sidebar,\n  .left-side {\n    -webkit-transform: translate(-230px, 0);\n    -ms-transform: translate(-230px, 0);\n    -o-transform: translate(-230px, 0);\n    transform: translate(-230px, 0);\n  }\n}\n@media (min-width: 768px) {\n  .sidebar-collapse .main-sidebar,\n  .sidebar-collapse .left-side {\n    -webkit-transform: translate(-230px, 0);\n    -ms-transform: translate(-230px, 0);\n    -o-transform: translate(-230px, 0);\n    transform: translate(-230px, 0);\n  }\n}\n@media (max-width: 767px) {\n  .sidebar-open .main-sidebar,\n  .sidebar-open .left-side {\n    -webkit-transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    transform: translate(0, 0);\n  }\n}\n.sidebar {\n  padding-bottom: 10px;\n}\n.sidebar-form input:focus {\n  border-color: transparent!important;\n}\n.user-panel {\n  position: relative;\n  width: 100%;\n  padding: 10px;\n  overflow: hidden;\n}\n.user-panel:before,\n.user-panel:after {\n  content: \" \";\n  display: table;\n}\n.user-panel:after {\n  clear: both;\n}\n.user-panel > .image > img {\n  width: 100%;\n  max-width: 45px;\n  height: auto;\n}\n.user-panel > .info {\n  padding: 5px 5px 5px 15px;\n  line-height: 1;\n  position: absolute;\n  left: 55px;\n}\n.user-panel > .info > p {\n  font-weight: 600;\n  margin-bottom: 9px;\n}\n.user-panel > .info > a {\n  text-decoration: none;\n  padding-right: 5px;\n  margin-top: 3px;\n  font-size: 11px;\n}\n.user-panel > .info > a > .fa,\n.user-panel > .info > a > .ion,\n.user-panel > .info > a > .glyphicon {\n  margin-right: 3px;\n}\n.sidebar-menu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.sidebar-menu > li {\n  position: relative;\n  margin: 0;\n  padding: 0;\n}\n.sidebar-menu > li > a {\n  padding: 12px 5px 12px 15px;\n  display: block;\n}\n.sidebar-menu > li > a > .fa,\n.sidebar-menu > li > a > .glyphicon,\n.sidebar-menu > li > a > .ion {\n  width: 20px;\n}\n.sidebar-menu > li .label,\n.sidebar-menu > li .badge {\n  margin-top: 3px;\n  margin-right: 5px;\n}\n.sidebar-menu li.header {\n  padding: 10px 25px 10px 15px;\n  font-size: 12px;\n}\n.sidebar-menu li > a > .fa-angle-left {\n  width: auto;\n  height: auto;\n  padding: 0;\n  margin-right: 10px;\n  margin-top: 3px;\n}\n.sidebar-menu li.active > a > .fa-angle-left {\n  -webkit-transform: rotate(-90deg);\n  -ms-transform: rotate(-90deg);\n  -o-transform: rotate(-90deg);\n  transform: rotate(-90deg);\n}\n.sidebar-menu li.active > .treeview-menu {\n  display: block;\n}\n.sidebar-menu .treeview-menu {\n  display: none;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  padding-left: 5px;\n}\n.sidebar-menu .treeview-menu .treeview-menu {\n  padding-left: 20px;\n}\n.sidebar-menu .treeview-menu > li {\n  margin: 0;\n}\n.sidebar-menu .treeview-menu > li > a {\n  padding: 5px 5px 5px 15px;\n  display: block;\n  font-size: 14px;\n}\n.sidebar-menu .treeview-menu > li > a > .fa,\n.sidebar-menu .treeview-menu > li > a > .glyphicon,\n.sidebar-menu .treeview-menu > li > a > .ion {\n  width: 20px;\n}\n.sidebar-menu .treeview-menu > li > a > .fa-angle-left,\n.sidebar-menu .treeview-menu > li > a > .fa-angle-down {\n  width: auto;\n}\n/*\n * Component: Sidebar Mini\n */\n@media (min-width: 768px) {\n  .sidebar-mini.sidebar-collapse .content-wrapper,\n  .sidebar-mini.sidebar-collapse .right-side,\n  .sidebar-mini.sidebar-collapse .main-footer {\n    margin-left: 50px!important;\n    z-index: 840;\n  }\n  .sidebar-mini.sidebar-collapse .main-sidebar {\n    -webkit-transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    transform: translate(0, 0);\n    width: 50px!important;\n    z-index: 850;\n  }\n  .sidebar-mini.sidebar-collapse .sidebar-menu > li {\n    position: relative;\n  }\n  .sidebar-mini.sidebar-collapse .sidebar-menu > li > a {\n    margin-right: 0;\n  }\n  .sidebar-mini.sidebar-collapse .sidebar-menu > li > a > span {\n    border-top-right-radius: 4px;\n  }\n  .sidebar-mini.sidebar-collapse .sidebar-menu > li:not(.treeview) > a > span {\n    border-bottom-right-radius: 4px;\n  }\n  .sidebar-mini.sidebar-collapse .sidebar-menu > li > .treeview-menu {\n    padding-top: 5px;\n    padding-bottom: 5px;\n    border-bottom-right-radius: 4px;\n  }\n  .sidebar-mini.sidebar-collapse .sidebar-menu > li:hover > a {\n    overflow: visible;\n  }\n  .sidebar-mini.sidebar-collapse .sidebar-menu > li:hover > a > span:not(.pull-right),\n  .sidebar-mini.sidebar-collapse .sidebar-menu > li:hover > .treeview-menu {\n    display: block!important;\n    position: absolute;\n    width: 180px;\n    left: 50px;\n  }\n  .sidebar-mini.sidebar-collapse .sidebar-menu > li:hover > a > span {\n    top: 0;\n    margin-left: -3px;\n    padding: 12px 5px 12px 20px;\n    background-color: inherit;\n  }\n  .sidebar-mini.sidebar-collapse .sidebar-menu > li:hover > .treeview-menu {\n    top: 44px;\n    margin-left: 0;\n  }\n  .sidebar-mini.sidebar-collapse .main-sidebar .user-panel > .info,\n  .sidebar-mini.sidebar-collapse .sidebar-form,\n  .sidebar-mini.sidebar-collapse .sidebar-menu > li > a > span,\n  .sidebar-mini.sidebar-collapse .sidebar-menu > li > .treeview-menu,\n  .sidebar-mini.sidebar-collapse .sidebar-menu > li > a > .pull-right,\n  .sidebar-mini.sidebar-collapse .sidebar-menu li.header {\n    display: none!important;\n  }\n  .sidebar-mini.sidebar-collapse .main-header .logo {\n    width: 50px;\n  }\n  .sidebar-mini.sidebar-collapse .main-header .logo > .logo-mini {\n    display: block;\n    margin-left: -15px;\n    margin-right: -15px;\n    font-size: 18px;\n  }\n  .sidebar-mini.sidebar-collapse .main-header .logo > .logo-lg {\n    display: none;\n  }\n  .sidebar-mini.sidebar-collapse .main-header .navbar {\n    margin-left: 50px;\n  }\n}\n.sidebar-menu li > a,\n.main-sidebar .user-panel,\n.sidebar-menu > li.header {\n  white-space: nowrap!important;\n  overflow: hidden;\n}\n.sidebar-form,\n.sidebar-menu > li.header {\n  overflow: hidden;\n  text-overflow: clip;\n}\n.sidebar-menu li > a {\n  position: relative;\n}\n.sidebar-menu li > a > .pull-right {\n  position: absolute;\n  top: 50%;\n  right: 10px;\n  margin-top: -7px;\n}\n/*\n * Component: Control sidebar. By deafult, this is the right sidebar.\n */\n.control-sidebar-bg {\n  position: fixed;\n  z-index: 900;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 230px;\n}\n.control-sidebar-bg,\n.control-sidebar {\n  -webkit-transform: translate(230px, 0);\n  -ms-transform: translate(230px, 0);\n  -o-transform: translate(230px, 0);\n  transform: translate(230px, 0);\n  -webkit-transition: -webkit-transform 0.3s ease-in-out;\n  -moz-transition: -moz-transform 0.3s ease-in-out;\n  -o-transition: -o-transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out;\n}\n.control-sidebar {\n  position: absolute;\n  top: 50px;\n  right: 0;\n  width: 230px;\n  z-index: 1010;\n}\n@media (max-width: 768px) {\n  .control-sidebar {\n    top: 100px;\n  }\n}\n.control-sidebar > .tab-content {\n  padding: 10px 15px;\n}\n.control-sidebar.control-sidebar-open,\n.control-sidebar.control-sidebar-open + .control-sidebar-bg {\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  -o-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n.control-sidebar-open .control-sidebar-bg,\n.control-sidebar-open .control-sidebar {\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  -o-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n@media (min-width: 768px) {\n  .control-sidebar-open .content-wrapper,\n  .control-sidebar-open .right-side,\n  .control-sidebar-open .main-footer {\n    margin-right: 230px;\n  }\n}\n.control-sidebar-tabs > li:first-of-type > a {\n  margin-left: 1px;\n}\n.control-sidebar-tabs > li:first-of-type > a,\n.control-sidebar-tabs > li:first-of-type > a:hover {\n  border-left-width: 0!important;\n}\n.control-sidebar-tabs > li > a {\n  border-radius: 0 !important;\n}\n.control-sidebar-tabs > li > a,\n.control-sidebar-tabs > li > a:hover {\n  border-top: none;\n  border-right: none;\n  border-left: 1px solid transparent!important;\n  border-bottom: 1px solid transparent!important;\n}\n.control-sidebar-tabs > li > a .icon {\n  font-size: 16px;\n}\n.control-sidebar-tabs > li.active > a,\n.control-sidebar-tabs > li.active > a:hover,\n.control-sidebar-tabs > li.active > a:focus,\n.control-sidebar-tabs > li.active > a:active {\n  border-top: none!important;\n  border-right: none!important;\n  border-bottom: none!important;\n}\n@media (max-width: 768px) {\n  .control-sidebar-tabs {\n    display: table;\n  }\n  .control-sidebar-tabs > li {\n    display: table-cell !important;\n  }\n}\n.control-sidebar-heading {\n  font-weight: 400;\n  font-size: 16px;\n  padding: 10px 0;\n  margin-bottom: 10px;\n}\n.control-sidebar-subheading {\n  display: block;\n  font-weight: 400;\n  font-size: 14px;\n}\n.control-sidebar-menu {\n  list-style: none;\n  padding: 0;\n  margin: 0 -15px;\n}\n.control-sidebar-menu > li > a {\n  display: block;\n  padding: 10px 15px;\n}\n.control-sidebar-menu > li > a:before,\n.control-sidebar-menu > li > a:after {\n  content: \" \";\n  display: table;\n}\n.control-sidebar-menu > li > a:after {\n  clear: both;\n}\n.control-sidebar-menu > li > a > .control-sidebar-subheading {\n  margin-top: 0;\n}\n.control-sidebar-menu .menu-icon {\n  float: left;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 35px;\n}\n.control-sidebar-menu .menu-info {\n  margin-left: 45px;\n  margin-top: 3px;\n}\n.control-sidebar-menu .menu-info > .control-sidebar-subheading {\n  margin: 0;\n}\n.control-sidebar-menu .menu-info > p {\n  margin: 0;\n  font-size: 11px;\n}\n.control-sidebar-menu .progress {\n  margin: 0;\n}\n.control-sidebar-dark {\n  color: #b8c7ce;\n}\n.control-sidebar-dark + .control-sidebar-bg {\n  background: #222d32;\n}\n.control-sidebar-dark .control-sidebar-tabs {\n  border-bottom: #1c2529;\n}\n.control-sidebar-dark .control-sidebar-tabs > li > a {\n  background: #181f23;\n  color: #b8c7ce;\n}\n.control-sidebar-dark .control-sidebar-tabs > li > a,\n.control-sidebar-dark .control-sidebar-tabs > li > a:hover {\n  border-left-color: #141a1d !important;\n  border-bottom-color: #141a1d !important;\n}\n.control-sidebar-dark .control-sidebar-tabs > li > a:hover,\n.control-sidebar-dark .control-sidebar-tabs > li > a:focus,\n.control-sidebar-dark .control-sidebar-tabs > li > a:active {\n  background: #1c2529;\n}\n.control-sidebar-dark .control-sidebar-tabs > li.active > a,\n.control-sidebar-dark .control-sidebar-tabs > li.active > a:hover,\n.control-sidebar-dark .control-sidebar-tabs > li.active > a:focus,\n.control-sidebar-dark .control-sidebar-tabs > li.active > a:active {\n  background: #222d32;\n  color: #fff;\n}\n.control-sidebar-dark .control-sidebar-heading,\n.control-sidebar-dark .control-sidebar-subheading {\n  color: #fff;\n}\n.control-sidebar-dark .control-sidebar-menu > li > a:hover {\n  background: #1e282c;\n}\n.control-sidebar-dark .control-sidebar-menu > li > a .menu-info > p {\n  color: #b8c7ce;\n}\n.control-sidebar-light {\n  color: #5e5e5e;\n}\n.control-sidebar-light + .control-sidebar-bg {\n  background: #f9fafc;\n  border-left: 1px solid #d2d6de;\n}\n.control-sidebar-light .control-sidebar-tabs {\n  border-bottom: #d2d6de;\n}\n.control-sidebar-light .control-sidebar-tabs > li > a {\n  background: #e8ecf4;\n  color: #444444;\n}\n.control-sidebar-light .control-sidebar-tabs > li > a,\n.control-sidebar-light .control-sidebar-tabs > li > a:hover {\n  border-left-color: #d2d6de !important;\n  border-bottom-color: #d2d6de !important;\n}\n.control-sidebar-light .control-sidebar-tabs > li > a:hover,\n.control-sidebar-light .control-sidebar-tabs > li > a:focus,\n.control-sidebar-light .control-sidebar-tabs > li > a:active {\n  background: #eff1f7;\n}\n.control-sidebar-light .control-sidebar-tabs > li.active > a,\n.control-sidebar-light .control-sidebar-tabs > li.active > a:hover,\n.control-sidebar-light .control-sidebar-tabs > li.active > a:focus,\n.control-sidebar-light .control-sidebar-tabs > li.active > a:active {\n  background: #f9fafc;\n  color: #111;\n}\n.control-sidebar-light .control-sidebar-heading,\n.control-sidebar-light .control-sidebar-subheading {\n  color: #111;\n}\n.control-sidebar-light .control-sidebar-menu {\n  margin-left: -14px;\n}\n.control-sidebar-light .control-sidebar-menu > li > a:hover {\n  background: #f4f4f5;\n}\n.control-sidebar-light .control-sidebar-menu > li > a .menu-info > p {\n  color: #5e5e5e;\n}\n/*\n * Component: Dropdown menus\n * -------------------------\n */\n/*Dropdowns in general*/\n.dropdown-menu {\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  border-color: #eee;\n}\n.dropdown-menu > li > a {\n  color: #777;\n}\n.dropdown-menu > li > a > .glyphicon,\n.dropdown-menu > li > a > .fa,\n.dropdown-menu > li > a > .ion {\n  margin-right: 10px;\n}\n.dropdown-menu > li > a:hover {\n  background-color: #e1e3e9;\n  color: #333;\n}\n.dropdown-menu > .divider {\n  background-color: #eee;\n}\n/*\n    Navbar custom dropdown menu\n------------------------------------\n*/\n.navbar-nav > .notifications-menu,\n.navbar-nav > .messages-menu,\n.navbar-nav > .tasks-menu {\n  position: relative;\n}\n.navbar-nav > .notifications-menu > .dropdown-menu,\n.navbar-nav > .messages-menu > .dropdown-menu,\n.navbar-nav > .tasks-menu > .dropdown-menu {\n  width: 280px;\n  padding: 0 0 0 0!important;\n  margin: 0!important;\n  top: 100%;\n}\n.navbar-nav > .notifications-menu > .dropdown-menu > li,\n.navbar-nav > .messages-menu > .dropdown-menu > li,\n.navbar-nav > .tasks-menu > .dropdown-menu > li {\n  position: relative;\n}\n.navbar-nav > .notifications-menu > .dropdown-menu > li.header,\n.navbar-nav > .messages-menu > .dropdown-menu > li.header,\n.navbar-nav > .tasks-menu > .dropdown-menu > li.header {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  background-color: #ffffff;\n  padding: 7px 10px;\n  border-bottom: 1px solid #f4f4f4;\n  color: #444444;\n  font-size: 14px;\n}\n.navbar-nav > .notifications-menu > .dropdown-menu > li.footer > a,\n.navbar-nav > .messages-menu > .dropdown-menu > li.footer > a,\n.navbar-nav > .tasks-menu > .dropdown-menu > li.footer > a {\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  font-size: 12px;\n  background-color: #fff;\n  padding: 7px 10px;\n  border-bottom: 1px solid #eeeeee;\n  color: #444!important;\n  text-align: center;\n}\n@media (max-width: 991px) {\n  .navbar-nav > .notifications-menu > .dropdown-menu > li.footer > a,\n  .navbar-nav > .messages-menu > .dropdown-menu > li.footer > a,\n  .navbar-nav > .tasks-menu > .dropdown-menu > li.footer > a {\n    background: #fff!important;\n    color: #444!important;\n  }\n}\n.navbar-nav > .notifications-menu > .dropdown-menu > li.footer > a:hover,\n.navbar-nav > .messages-menu > .dropdown-menu > li.footer > a:hover,\n.navbar-nav > .tasks-menu > .dropdown-menu > li.footer > a:hover {\n  text-decoration: none;\n  font-weight: normal;\n}\n.navbar-nav > .notifications-menu > .dropdown-menu > li .menu,\n.navbar-nav > .messages-menu > .dropdown-menu > li .menu,\n.navbar-nav > .tasks-menu > .dropdown-menu > li .menu {\n  max-height: 200px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  overflow-x: hidden;\n}\n.navbar-nav > .notifications-menu > .dropdown-menu > li .menu > li > a,\n.navbar-nav > .messages-menu > .dropdown-menu > li .menu > li > a,\n.navbar-nav > .tasks-menu > .dropdown-menu > li .menu > li > a {\n  display: block;\n  white-space: nowrap;\n  /* Prevent text from breaking */\n  border-bottom: 1px solid #f4f4f4;\n}\n.navbar-nav > .notifications-menu > .dropdown-menu > li .menu > li > a:hover,\n.navbar-nav > .messages-menu > .dropdown-menu > li .menu > li > a:hover,\n.navbar-nav > .tasks-menu > .dropdown-menu > li .menu > li > a:hover {\n  background: #f4f4f4;\n  text-decoration: none;\n}\n.navbar-nav > .notifications-menu > .dropdown-menu > li .menu > li > a {\n  color: #444444;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 10px;\n}\n.navbar-nav > .notifications-menu > .dropdown-menu > li .menu > li > a > .glyphicon,\n.navbar-nav > .notifications-menu > .dropdown-menu > li .menu > li > a > .fa,\n.navbar-nav > .notifications-menu > .dropdown-menu > li .menu > li > a > .ion {\n  width: 20px;\n}\n.navbar-nav > .messages-menu > .dropdown-menu > li .menu > li > a {\n  margin: 0px;\n  padding: 10px 10px;\n}\n.navbar-nav > .messages-menu > .dropdown-menu > li .menu > li > a > div > img {\n  margin: auto 10px auto auto;\n  width: 40px;\n  height: 40px;\n}\n.navbar-nav > .messages-menu > .dropdown-menu > li .menu > li > a > h4 {\n  padding: 0;\n  margin: 0 0 0 45px;\n  color: #444444;\n  font-size: 15px;\n  position: relative;\n}\n.navbar-nav > .messages-menu > .dropdown-menu > li .menu > li > a > h4 > small {\n  color: #999999;\n  font-size: 10px;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n.navbar-nav > .messages-menu > .dropdown-menu > li .menu > li > a > p {\n  margin: 0 0 0 45px;\n  font-size: 12px;\n  color: #888888;\n}\n.navbar-nav > .messages-menu > .dropdown-menu > li .menu > li > a:before,\n.navbar-nav > .messages-menu > .dropdown-menu > li .menu > li > a:after {\n  content: \" \";\n  display: table;\n}\n.navbar-nav > .messages-menu > .dropdown-menu > li .menu > li > a:after {\n  clear: both;\n}\n.navbar-nav > .tasks-menu > .dropdown-menu > li .menu > li > a {\n  padding: 10px;\n}\n.navbar-nav > .tasks-menu > .dropdown-menu > li .menu > li > a > h3 {\n  font-size: 14px;\n  padding: 0;\n  margin: 0 0 10px 0;\n  color: #666666;\n}\n.navbar-nav > .tasks-menu > .dropdown-menu > li .menu > li > a > .progress {\n  padding: 0;\n  margin: 0;\n}\n.navbar-nav > .user-menu > .dropdown-menu {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  padding: 1px 0 0 0;\n  border-top-width: 0;\n  width: 280px;\n}\n.navbar-nav > .user-menu > .dropdown-menu,\n.navbar-nav > .user-menu > .dropdown-menu > .user-body {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.navbar-nav > .user-menu > .dropdown-menu > li.user-header {\n  height: 175px;\n  padding: 10px;\n  text-align: center;\n}\n.navbar-nav > .user-menu > .dropdown-menu > li.user-header > img {\n  z-index: 5;\n  height: 90px;\n  width: 90px;\n  border: 3px solid;\n  border-color: transparent;\n  border-color: rgba(255, 255, 255, 0.2);\n}\n.navbar-nav > .user-menu > .dropdown-menu > li.user-header > p {\n  z-index: 5;\n  color: #fff;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 17px;\n  margin-top: 10px;\n}\n.navbar-nav > .user-menu > .dropdown-menu > li.user-header > p > small {\n  display: block;\n  font-size: 12px;\n}\n.navbar-nav > .user-menu > .dropdown-menu > .user-body {\n  padding: 15px;\n  border-bottom: 1px solid #f4f4f4;\n  border-top: 1px solid #dddddd;\n}\n.navbar-nav > .user-menu > .dropdown-menu > .user-body:before,\n.navbar-nav > .user-menu > .dropdown-menu > .user-body:after {\n  content: \" \";\n  display: table;\n}\n.navbar-nav > .user-menu > .dropdown-menu > .user-body:after {\n  clear: both;\n}\n.navbar-nav > .user-menu > .dropdown-menu > .user-body a {\n  color: #444 !important;\n}\n@media (max-width: 991px) {\n  .navbar-nav > .user-menu > .dropdown-menu > .user-body a {\n    background: #fff !important;\n    color: #444 !important;\n  }\n}\n.navbar-nav > .user-menu > .dropdown-menu > .user-footer {\n  background-color: #f9f9f9;\n  padding: 10px;\n}\n.navbar-nav > .user-menu > .dropdown-menu > .user-footer:before,\n.navbar-nav > .user-menu > .dropdown-menu > .user-footer:after {\n  content: \" \";\n  display: table;\n}\n.navbar-nav > .user-menu > .dropdown-menu > .user-footer:after {\n  clear: both;\n}\n.navbar-nav > .user-menu > .dropdown-menu > .user-footer .btn-default {\n  color: #666666;\n}\n.navbar-nav > .user-menu .user-image {\n  float: left;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  margin-right: 10px;\n  margin-top: -2px;\n}\n@media (max-width: 767px) {\n  .navbar-nav > .user-menu .user-image {\n    float: none;\n    margin-right: 0;\n    margin-top: -8px;\n    line-height: 10px;\n  }\n}\n/* Add fade animation to dropdown menus by appending\n the class .animated-dropdown-menu to the .dropdown-menu ul (or ol)*/\n.open:not(.dropup) > .animated-dropdown-menu {\n  backface-visibility: visible !important;\n  -webkit-animation: flipInX 0.7s both;\n  -o-animation: flipInX 0.7s both;\n  animation: flipInX 0.7s both;\n}\n@keyframes flipInX {\n  0% {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transition-timing-function: ease-in;\n    opacity: 0;\n  }\n  40% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transition-timing-function: ease-in;\n  }\n  60% {\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n  80% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n  100% {\n    transform: perspective(400px);\n  }\n}\n@-webkit-keyframes flipInX {\n  0% {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transition-timing-function: ease-in;\n    opacity: 0;\n  }\n  40% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transition-timing-function: ease-in;\n  }\n  60% {\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n  80% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n  100% {\n    transform: perspective(400px);\n  }\n}\n/* Fix dropdown menu in navbars */\n.navbar-custom-menu > .navbar-nav > li {\n  position: relative;\n}\n.navbar-custom-menu > .navbar-nav > li > .dropdown-menu {\n  position: absolute;\n  right: 0;\n  left: auto;\n}\n@media (max-width: 991px) {\n  .navbar-custom-menu > .navbar-nav {\n    float: right;\n  }\n  .navbar-custom-menu > .navbar-nav > li {\n    position: static;\n  }\n  .navbar-custom-menu > .navbar-nav > li > .dropdown-menu {\n    position: absolute;\n    right: 5%;\n    left: auto;\n    border: 1px solid #ddd;\n    background: #fff;\n  }\n}\n/*\n * Component: Form\n * ---------------\n */\n.form-control {\n  border-radius: 0px !important;\n  box-shadow: none;\n  border-color: #d2d6de;\n}\n.form-control:focus {\n  border-color: #3c8dbc !important;\n  box-shadow: none;\n}\n.form-control::-moz-placeholder {\n  color: #bbb;\n  opacity: 1;\n}\n.form-control:-ms-input-placeholder {\n  color: #bbb;\n}\n.form-control::-webkit-input-placeholder {\n  color: #bbb;\n}\n.form-control:not(select) {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.form-group.has-success label {\n  color: #00a65a;\n}\n.form-group.has-success .form-control {\n  border-color: #00a65a !important;\n  box-shadow: none;\n}\n.form-group.has-warning label {\n  color: #f39c12;\n}\n.form-group.has-warning .form-control {\n  border-color: #f39c12 !important;\n  box-shadow: none;\n}\n.form-group.has-error label {\n  color: #dd4b39;\n}\n.form-group.has-error .form-control {\n  border-color: #dd4b39 !important;\n  box-shadow: none;\n}\n/* Input group */\n.input-group .input-group-addon {\n  border-radius: 0px;\n  border-color: #d2d6de;\n  background-color: #fff;\n}\n/* button groups */\n.btn-group-vertical .btn.btn-flat:first-of-type,\n.btn-group-vertical .btn.btn-flat:last-of-type {\n  border-radius: 0;\n}\n.icheck > label {\n  padding-left: 0;\n}\n/*\n * Component: Progress Bar\n * -----------------------\n */\n.progress,\n.progress > .progress-bar {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.progress,\n.progress > .progress-bar,\n.progress .progress-bar,\n.progress > .progress-bar .progress-bar {\n  border-radius: 1px;\n}\n/* size variation */\n.progress.sm,\n.progress-sm {\n  height: 10px;\n}\n.progress.sm,\n.progress-sm,\n.progress.sm .progress-bar,\n.progress-sm .progress-bar {\n  border-radius: 1px;\n}\n.progress.xs,\n.progress-xs {\n  height: 7px;\n}\n.progress.xs,\n.progress-xs,\n.progress.xs .progress-bar,\n.progress-xs .progress-bar {\n  border-radius: 1px;\n}\n.progress.xxs,\n.progress-xxs {\n  height: 3px;\n}\n.progress.xxs,\n.progress-xxs,\n.progress.xxs .progress-bar,\n.progress-xxs .progress-bar {\n  border-radius: 1px;\n}\n/* Vertical bars */\n.progress.vertical {\n  position: relative;\n  width: 30px;\n  height: 200px;\n  display: inline-block;\n  margin-right: 10px;\n}\n.progress.vertical > .progress-bar {\n  width: 100%!important;\n  position: absolute;\n  bottom: 0;\n}\n.progress.vertical.sm,\n.progress.vertical.progress-sm {\n  width: 20px;\n}\n.progress.vertical.xs,\n.progress.vertical.progress-xs {\n  width: 10px;\n}\n.progress.vertical.xxs,\n.progress.vertical.progress-xxs {\n  width: 3px;\n}\n.progress-group .progress-text {\n  font-weight: 600;\n}\n.progress-group .progress-number {\n  float: right;\n}\n/* Remove margins from progress bars when put in a table */\n.table tr > td .progress {\n  margin: 0;\n}\n.progress-bar-light-blue,\n.progress-bar-primary {\n  background-color: #3c8dbc;\n}\n.progress-striped .progress-bar-light-blue,\n.progress-striped .progress-bar-primary {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.progress-bar-green,\n.progress-bar-success {\n  background-color: #00a65a;\n}\n.progress-striped .progress-bar-green,\n.progress-striped .progress-bar-success {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.progress-bar-aqua,\n.progress-bar-info {\n  background-color: #00c0ef;\n}\n.progress-striped .progress-bar-aqua,\n.progress-striped .progress-bar-info {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.progress-bar-yellow,\n.progress-bar-warning {\n  background-color: #f39c12;\n}\n.progress-striped .progress-bar-yellow,\n.progress-striped .progress-bar-warning {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.progress-bar-red,\n.progress-bar-danger {\n  background-color: #dd4b39;\n}\n.progress-striped .progress-bar-red,\n.progress-striped .progress-bar-danger {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n/*\n * Component: Small Box\n * --------------------\n */\n.small-box {\n  border-radius: 2px;\n  position: relative;\n  display: block;\n  margin-bottom: 20px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n}\n.small-box > .inner {\n  padding: 10px;\n}\n.small-box > .small-box-footer {\n  position: relative;\n  text-align: center;\n  padding: 3px 0;\n  color: #fff;\n  color: rgba(255, 255, 255, 0.8);\n  display: block;\n  z-index: 10;\n  background: rgba(0, 0, 0, 0.1);\n  text-decoration: none;\n}\n.small-box > .small-box-footer:hover {\n  color: #fff;\n  background: rgba(0, 0, 0, 0.15);\n}\n.small-box h3 {\n  font-size: 38px;\n  font-weight: bold;\n  margin: 0 0 10px 0;\n  white-space: nowrap;\n  padding: 0;\n}\n.small-box p {\n  font-size: 15px;\n}\n.small-box p > small {\n  display: block;\n  color: #f9f9f9;\n  font-size: 13px;\n  margin-top: 5px;\n}\n.small-box h3,\n.small-box p {\n  z-index: 5px;\n}\n.small-box .icon {\n  -webkit-transition: all 0.3s linear;\n  -o-transition: all 0.3s linear;\n  transition: all 0.3s linear;\n  position: absolute;\n  top: -10px;\n  right: 10px;\n  z-index: 0;\n  font-size: 90px;\n  color: rgba(0, 0, 0, 0.15);\n}\n.small-box:hover {\n  text-decoration: none;\n  color: #f9f9f9;\n}\n.small-box:hover .icon {\n  font-size: 95px;\n}\n@media (max-width: 767px) {\n  .small-box {\n    text-align: center;\n  }\n  .small-box .icon {\n    display: none;\n  }\n  .small-box p {\n    font-size: 12px;\n  }\n}\n/*\n * Component: Box\n * --------------\n */\n.box {\n  position: relative;\n  border-radius: 3px;\n  background: #ffffff;\n  border-top: 3px solid #d2d6de;\n  margin-bottom: 20px;\n  width: 100%;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n}\n.box.box-primary {\n  border-top-color: #3c8dbc;\n}\n.box.box-info {\n  border-top-color: #00c0ef;\n}\n.box.box-danger {\n  border-top-color: #dd4b39;\n}\n.box.box-warning {\n  border-top-color: #f39c12;\n}\n.box.box-success {\n  border-top-color: #00a65a;\n}\n.box.box-default {\n  border-top-color: #d2d6de;\n}\n.box.collapsed-box .box-body,\n.box.collapsed-box .box-footer {\n  display: none;\n}\n.box .nav-stacked > li {\n  border-bottom: 1px solid #f4f4f4;\n  margin: 0;\n}\n.box .nav-stacked > li:last-of-type {\n  border-bottom: none;\n}\n.box.height-control .box-body {\n  max-height: 300px;\n  overflow: auto;\n}\n.box .border-right {\n  border-right: 1px solid #f4f4f4;\n}\n.box .border-left {\n  border-left: 1px solid #f4f4f4;\n}\n.box.box-solid {\n  border-top: 0px;\n}\n.box.box-solid > .box-header .btn.btn-default {\n  background: transparent;\n}\n.box.box-solid > .box-header .btn:hover,\n.box.box-solid > .box-header a:hover {\n  background: rgba(0, 0, 0, 0.1) !important;\n}\n.box.box-solid.box-default {\n  border: 1px solid #d2d6de;\n}\n.box.box-solid.box-default > .box-header {\n  color: #444444;\n  background: #d2d6de;\n  background-color: #d2d6de;\n}\n.box.box-solid.box-default > .box-header a,\n.box.box-solid.box-default > .box-header .btn {\n  color: #444444;\n}\n.box.box-solid.box-primary {\n  border: 1px solid #3c8dbc;\n}\n.box.box-solid.box-primary > .box-header {\n  color: #ffffff;\n  background: #3c8dbc;\n  background-color: #3c8dbc;\n}\n.box.box-solid.box-primary > .box-header a,\n.box.box-solid.box-primary > .box-header .btn {\n  color: #ffffff;\n}\n.box.box-solid.box-info {\n  border: 1px solid #00c0ef;\n}\n.box.box-solid.box-info > .box-header {\n  color: #ffffff;\n  background: #00c0ef;\n  background-color: #00c0ef;\n}\n.box.box-solid.box-info > .box-header a,\n.box.box-solid.box-info > .box-header .btn {\n  color: #ffffff;\n}\n.box.box-solid.box-danger {\n  border: 1px solid #dd4b39;\n}\n.box.box-solid.box-danger > .box-header {\n  color: #ffffff;\n  background: #dd4b39;\n  background-color: #dd4b39;\n}\n.box.box-solid.box-danger > .box-header a,\n.box.box-solid.box-danger > .box-header .btn {\n  color: #ffffff;\n}\n.box.box-solid.box-warning {\n  border: 1px solid #f39c12;\n}\n.box.box-solid.box-warning > .box-header {\n  color: #ffffff;\n  background: #f39c12;\n  background-color: #f39c12;\n}\n.box.box-solid.box-warning > .box-header a,\n.box.box-solid.box-warning > .box-header .btn {\n  color: #ffffff;\n}\n.box.box-solid.box-success {\n  border: 1px solid #00a65a;\n}\n.box.box-solid.box-success > .box-header {\n  color: #ffffff;\n  background: #00a65a;\n  background-color: #00a65a;\n}\n.box.box-solid.box-success > .box-header a,\n.box.box-solid.box-success > .box-header .btn {\n  color: #ffffff;\n}\n.box.box-solid > .box-header > .box-tools .btn {\n  border: 0;\n  box-shadow: none;\n}\n.box.box-solid[class*='bg'] > .box-header {\n  color: #fff;\n}\n.box .box-group > .box {\n  margin-bottom: 5px;\n}\n.box .knob-label {\n  text-align: center;\n  color: #333;\n  font-weight: 100;\n  font-size: 12px;\n  margin-bottom: 0.3em;\n}\n.box > .overlay,\n.box > .loading-img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.box .overlay {\n  z-index: 50;\n  background: rgba(255, 255, 255, 0.7);\n  border-radius: 3px;\n}\n.box .overlay > .fa {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -15px;\n  margin-top: -15px;\n  color: #000;\n  font-size: 30px;\n}\n.box .overlay.dark {\n  background: rgba(0, 0, 0, 0.5);\n}\n.box-header:before,\n.box-body:before,\n.box-footer:before,\n.box-header:after,\n.box-body:after,\n.box-footer:after {\n  content: \" \";\n  display: table;\n}\n.box-header:after,\n.box-body:after,\n.box-footer:after {\n  clear: both;\n}\n.box-header {\n  color: #444;\n  display: block;\n  padding: 10px;\n  position: relative;\n}\n.box-header.with-border {\n  border-bottom: 1px solid #f4f4f4;\n}\n.collapsed-box .box-header.with-border {\n  border-bottom: none;\n}\n.box-header > .fa,\n.box-header > .glyphicon,\n.box-header > .ion,\n.box-header .box-title {\n  display: inline-block;\n  font-size: 18px;\n  margin: 0;\n  line-height: 1;\n}\n.box-header > .fa,\n.box-header > .glyphicon,\n.box-header > .ion {\n  margin-right: 5px;\n}\n.box-header > .box-tools {\n  position: absolute;\n  right: 10px;\n  top: 5px;\n}\n.box-header > .box-tools [data-toggle=\"tooltip\"] {\n  position: relative;\n}\n.box-header > .box-tools.pull-right .dropdown-menu {\n  right: 0;\n  left: auto;\n}\n.btn-box-tool {\n  padding: 5px;\n  font-size: 12px;\n  background: transparent;\n  box-shadow: none!important;\n  color: #97a0b3;\n}\n.open .btn-box-tool,\n.btn-box-tool:hover {\n  color: #606c84;\n}\n.btn-box-tool:active {\n  outline: none!important;\n}\n.box-body {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  padding: 10px;\n}\n.no-header .box-body {\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n.box-body > .table {\n  margin-bottom: 0;\n}\n.box-body .fc {\n  margin-top: 5px;\n}\n.box-body .full-width-chart {\n  margin: -19px;\n}\n.box-body.no-padding .full-width-chart {\n  margin: -9px;\n}\n.box-body .box-pane {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 3px;\n}\n.box-body .box-pane-right {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 0;\n}\n.box-footer {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  border-top: 1px solid #f4f4f4;\n  padding: 10px;\n  background-color: #ffffff;\n}\n.chart-legend {\n  margin: 10px 0;\n}\n@media (max-width: 991px) {\n  .chart-legend > li {\n    float: left;\n    margin-right: 10px;\n  }\n}\n/* Widget: TODO LIST */\n.todo-list {\n  margin: 0;\n  padding: 0px 0px;\n  list-style: none;\n  overflow: auto;\n}\n.todo-list > li {\n  border-radius: 2px;\n  padding: 10px;\n  background: #f4f4f4;\n  margin-bottom: 2px;\n  border-left: 2px solid #e6e7e8;\n  color: #444;\n}\n.todo-list > li:last-of-type {\n  margin-bottom: 0;\n}\n.todo-list > li.danger {\n  border-left-color: #dd4b39;\n}\n.todo-list > li.warning {\n  border-left-color: #f39c12;\n}\n.todo-list > li.info {\n  border-left-color: #00c0ef;\n}\n.todo-list > li.success {\n  border-left-color: #00a65a;\n}\n.todo-list > li.primary {\n  border-left-color: #3c8dbc;\n}\n.todo-list > li > input[type='checkbox'] {\n  margin: 0 10px 0 5px;\n}\n.todo-list > li .text {\n  display: inline-block;\n  margin-left: 5px;\n  font-weight: 600;\n}\n.todo-list > li .label {\n  margin-left: 10px;\n  font-size: 9px;\n}\n.todo-list > li .tools {\n  display: none;\n  float: right;\n  color: #dd4b39;\n}\n.todo-list > li .tools > .fa,\n.todo-list > li .tools > .glyphicon,\n.todo-list > li .tools > .ion {\n  margin-right: 5px;\n  cursor: pointer;\n}\n.todo-list > li:hover .tools {\n  display: inline-block;\n}\n.todo-list > li.done {\n  color: #999;\n}\n.todo-list > li.done .text {\n  text-decoration: line-through;\n  font-weight: 500;\n}\n.todo-list > li.done .label {\n  background: #d2d6de !important;\n}\n.todo-list .handle {\n  display: inline-block;\n  cursor: move;\n  margin: 0 5px;\n}\n/* Chat widget (DEPRECATED - this will be removed in the next major release. Use Direct Chat instead)*/\n.chat {\n  padding: 5px 20px 5px 10px;\n}\n.chat .item {\n  margin-bottom: 10px;\n}\n.chat .item:before,\n.chat .item:after {\n  content: \" \";\n  display: table;\n}\n.chat .item:after {\n  clear: both;\n}\n.chat .item > img {\n  width: 40px;\n  height: 40px;\n  border: 2px solid transparent;\n  border-radius: 50% !important;\n}\n.chat .item > img.online {\n  border: 2px solid #00a65a;\n}\n.chat .item > img.offline {\n  border: 2px solid #dd4b39;\n}\n.chat .item > .message {\n  margin-left: 55px;\n  margin-top: -40px;\n}\n.chat .item > .message > .name {\n  display: block;\n  font-weight: 600;\n}\n.chat .item > .attachment {\n  border-radius: 3px;\n  background: #f4f4f4;\n  margin-left: 65px;\n  margin-right: 15px;\n  padding: 10px;\n}\n.chat .item > .attachment > h4 {\n  margin: 0 0 5px 0;\n  font-weight: 600;\n  font-size: 14px;\n}\n.chat .item > .attachment > p,\n.chat .item > .attachment > .filename {\n  font-weight: 600;\n  font-size: 13px;\n  font-style: italic;\n  margin: 0;\n}\n.chat .item > .attachment:before,\n.chat .item > .attachment:after {\n  content: \" \";\n  display: table;\n}\n.chat .item > .attachment:after {\n  clear: both;\n}\n.box-input {\n  max-width: 200px;\n}\n/*\n * Component: Info Box\n * -------------------\n */\n.info-box {\n  display: block;\n  min-height: 90px;\n  background: #fff;\n  width: 100%;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  margin-bottom: 15px;\n}\n.info-box small {\n  font-size: 14px;\n}\n.info-box .progress {\n  background: rgba(0, 0, 0, 0.2);\n  margin: 5px -10px 5px -10px;\n  height: 2px;\n}\n.info-box .progress,\n.info-box .progress .progress-bar {\n  border-radius: 0;\n}\n.info-box .progress .progress-bar {\n  background: #fff;\n}\n.info-box-icon {\n  border-top-left-radius: 2px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 2px;\n  display: block;\n  float: left;\n  height: 90px;\n  width: 90px;\n  text-align: center;\n  font-size: 45px;\n  line-height: 90px;\n  background: rgba(0, 0, 0, 0.2);\n}\n.info-box-content {\n  padding: 5px 10px;\n  margin-left: 90px;\n}\n.info-box-number {\n  display: block;\n  font-weight: bold;\n  font-size: 18px;\n}\n.progress-description,\n.info-box-text {\n  display: block;\n  font-size: 14px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.info-box-text {\n  text-transform: uppercase;\n}\n.info-box-more {\n  display: block;\n}\n.progress-description {\n  margin: 0;\n}\n/*\n * Component: Timeline\n * -------------------\n */\n.timeline {\n  position: relative;\n  margin: 0 0 30px 0;\n  padding: 0;\n  list-style: none;\n}\n.timeline:before {\n  content: '';\n  position: absolute;\n  top: 0px;\n  bottom: 0;\n  width: 4px;\n  background: #ddd;\n  left: 31px;\n  margin: 0;\n  border-radius: 2px;\n}\n.timeline > li {\n  position: relative;\n  margin-right: 10px;\n  margin-bottom: 15px;\n}\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table;\n}\n.timeline > li:after {\n  clear: both;\n}\n.timeline > li > .timeline-item {\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n  margin-top: 0px;\n  background: #fff;\n  color: #444;\n  margin-left: 60px;\n  margin-right: 15px;\n  padding: 0;\n  position: relative;\n}\n.timeline > li > .timeline-item > .time {\n  color: #999;\n  float: right;\n  padding: 10px;\n  font-size: 12px;\n}\n.timeline > li > .timeline-item > .timeline-header {\n  margin: 0;\n  color: #555;\n  border-bottom: 1px solid #f4f4f4;\n  padding: 10px;\n  font-size: 16px;\n  line-height: 1.1;\n}\n.timeline > li > .timeline-item > .timeline-header > a {\n  font-weight: 600;\n}\n.timeline > li > .timeline-item > .timeline-body,\n.timeline > li > .timeline-item > .timeline-footer {\n  padding: 10px;\n}\n.timeline > li.time-label > span {\n  font-weight: 600;\n  padding: 5px;\n  display: inline-block;\n  background-color: #fff;\n  border-radius: 4px;\n}\n.timeline > li > .fa,\n.timeline > li > .glyphicon,\n.timeline > li > .ion {\n  width: 30px;\n  height: 30px;\n  font-size: 15px;\n  line-height: 30px;\n  position: absolute;\n  color: #666;\n  background: #d2d6de;\n  border-radius: 50%;\n  text-align: center;\n  left: 18px;\n  top: 0;\n}\n/*\n * Component: Button\n * -----------------\n */\n.btn {\n  border-radius: 3px;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  border: 1px solid transparent;\n}\n.btn.uppercase {\n  text-transform: uppercase;\n}\n.btn.btn-flat {\n  border-radius: 0;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  box-shadow: none;\n  border-width: 1px;\n}\n.btn:active {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  -moz-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.btn:focus {\n  outline: none;\n}\n.btn.btn-file {\n  position: relative;\n  overflow: hidden;\n}\n.btn.btn-file > input[type='file'] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  min-width: 100%;\n  min-height: 100%;\n  font-size: 100px;\n  text-align: right;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  outline: none;\n  background: white;\n  cursor: inherit;\n  display: block;\n}\n.btn-default {\n  background-color: #f4f4f4;\n  color: #444;\n  border-color: #ddd;\n}\n.btn-default:hover,\n.btn-default:active,\n.btn-default.hover {\n  background-color: #e7e7e7 !important;\n}\n.btn-primary {\n  background-color: #3c8dbc;\n  border-color: #367fa9;\n}\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary.hover {\n  background-color: #367fa9;\n}\n.btn-success {\n  background-color: #00a65a;\n  border-color: #008d4c;\n}\n.btn-success:hover,\n.btn-success:active,\n.btn-success.hover {\n  background-color: #008d4c;\n}\n.btn-info {\n  background-color: #00c0ef;\n  border-color: #00acd6;\n}\n.btn-info:hover,\n.btn-info:active,\n.btn-info.hover {\n  background-color: #00acd6;\n}\n.btn-danger {\n  background-color: #dd4b39;\n  border-color: #d73925;\n}\n.btn-danger:hover,\n.btn-danger:active,\n.btn-danger.hover {\n  background-color: #d73925;\n}\n.btn-warning {\n  background-color: #f39c12;\n  border-color: #e08e0b;\n}\n.btn-warning:hover,\n.btn-warning:active,\n.btn-warning.hover {\n  background-color: #e08e0b;\n}\n.btn-outline {\n  border: 1px solid #fff;\n  background: transparent;\n  color: #fff;\n}\n.btn-outline:hover,\n.btn-outline:focus,\n.btn-outline:active {\n  color: rgba(255, 255, 255, 0.7);\n  border-color: rgba(255, 255, 255, 0.7);\n}\n.btn-link {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.btn[class*='bg-']:hover {\n  -webkit-box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.2);\n  box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.2);\n}\n.btn-app {\n  border-radius: 3px;\n  position: relative;\n  padding: 15px 5px;\n  margin: 0 0 10px 10px;\n  min-width: 80px;\n  height: 60px;\n  text-align: center;\n  color: #666;\n  border: 1px solid #ddd;\n  background-color: #f4f4f4;\n  font-size: 12px;\n}\n.btn-app > .fa,\n.btn-app > .glyphicon,\n.btn-app > .ion {\n  font-size: 20px;\n  display: block;\n}\n.btn-app:hover {\n  background: #f4f4f4;\n  color: #444;\n  border-color: #aaa;\n}\n.btn-app:active,\n.btn-app:focus {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  -moz-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.btn-app > .badge {\n  position: absolute;\n  top: -3px;\n  right: -10px;\n  font-size: 10px;\n  font-weight: 400;\n}\n/*\n * Component: Callout\n * ------------------\n */\n.callout {\n  border-radius: 3px;\n  margin: 0 0 20px 0;\n  padding: 15px 30px 15px 15px;\n  border-left: 5px solid #eee;\n}\n.callout a {\n  color: #fff;\n  text-decoration: underline;\n}\n.callout a:hover {\n  color: #eee;\n}\n.callout h4 {\n  margin-top: 0;\n  font-weight: 600;\n}\n.callout p:last-child {\n  margin-bottom: 0;\n}\n.callout code,\n.callout .highlight {\n  background-color: #fff;\n}\n.callout.callout-danger {\n  border-color: #c23321;\n}\n.callout.callout-warning {\n  border-color: #c87f0a;\n}\n.callout.callout-info {\n  border-color: #0097bc;\n}\n.callout.callout-success {\n  border-color: #00733e;\n}\n/*\n * Component: alert\n * ----------------\n */\n.alert {\n  border-radius: 3px;\n}\n.alert h4 {\n  font-weight: 600;\n}\n.alert .icon {\n  margin-right: 10px;\n}\n.alert .close {\n  color: #000;\n  opacity: 0.2;\n  filter: alpha(opacity=20);\n}\n.alert .close:hover {\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n}\n.alert a {\n  color: #fff;\n  text-decoration: underline;\n}\n.alert-success {\n  border-color: #008d4c;\n}\n.alert-danger,\n.alert-error {\n  border-color: #d73925;\n}\n.alert-warning {\n  border-color: #e08e0b;\n}\n.alert-info {\n  border-color: #00acd6;\n}\n/*\n * Component: Nav\n * --------------\n */\n/* NAV PILLS */\n.nav-pills > li > a {\n  border-radius: 0;\n  border-top: 3px solid transparent;\n  color: #444;\n}\n.nav-pills > li > a > .fa,\n.nav-pills > li > a > .glyphicon,\n.nav-pills > li > a > .ion {\n  margin-right: 5px;\n}\n.nav-pills > li.active > a,\n.nav-pills > li.active > a:hover,\n.nav-pills > li.active > a:focus {\n  background-color: #f4f4f4;\n  border-top-color: #3c8dbc;\n  color: #444;\n}\n.nav-pills > li.active > a {\n  font-weight: 600;\n}\n.nav-pills > li > a:hover {\n  background-color: #f6f6f6;\n}\n/* NAV STACKED */\n.nav-stacked > li > a {\n  border-radius: 0;\n  border-top: 0;\n  border-left: 3px solid transparent;\n  color: #444;\n}\n.nav-stacked > li.active > a,\n.nav-stacked > li.active > a:hover {\n  background-color: #f4f4f4;\n  border-top: 0;\n  border-left-color: #3c8dbc;\n  color: #444;\n}\n.nav-stacked > li.header {\n  border-bottom: 1px solid #ddd;\n  color: #777;\n  margin-bottom: 10px;\n  padding: 5px 10px;\n  text-transform: uppercase;\n}\n/* NAV TABS */\n.nav-tabs-custom {\n  margin-bottom: 20px;\n  background: #fff;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n}\n.nav-tabs-custom > .nav-tabs {\n  margin: 0;\n  border-bottom-color: #f4f4f4;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n.nav-tabs-custom > .nav-tabs > li {\n  border-top: 3px solid transparent;\n  margin-bottom: -2px;\n  margin-right: 5px;\n}\n.nav-tabs-custom > .nav-tabs > li > a {\n  border-radius: 0 !important;\n}\n.nav-tabs-custom > .nav-tabs > li > a,\n.nav-tabs-custom > .nav-tabs > li > a:hover {\n  background: transparent;\n  margin: 0;\n}\n.nav-tabs-custom > .nav-tabs > li:not(.active) > a:hover,\n.nav-tabs-custom > .nav-tabs > li:not(.active) > a:focus,\n.nav-tabs-custom > .nav-tabs > li:not(.active) > a:active {\n  border-color: transparent;\n}\n.nav-tabs-custom > .nav-tabs > li.active {\n  border-top-color: #3c8dbc;\n}\n.nav-tabs-custom > .nav-tabs > li.active > a,\n.nav-tabs-custom > .nav-tabs > li.active:hover > a {\n  background-color: #fff;\n}\n.nav-tabs-custom > .nav-tabs > li.active > a {\n  border-top: 0;\n  border-left-color: #f4f4f4;\n  border-right-color: #f4f4f4;\n}\n.nav-tabs-custom > .nav-tabs > li:first-of-type {\n  margin-left: 0;\n}\n.nav-tabs-custom > .nav-tabs > li:first-of-type.active > a {\n  border-left-width: 0;\n}\n.nav-tabs-custom > .nav-tabs.pull-right {\n  float: none!important;\n}\n.nav-tabs-custom > .nav-tabs.pull-right > li {\n  float: right;\n}\n.nav-tabs-custom > .nav-tabs.pull-right > li:first-of-type {\n  margin-right: 0;\n}\n.nav-tabs-custom > .nav-tabs.pull-right > li:first-of-type.active > a {\n  border-left-width: 1px;\n  border-right-width: 0;\n}\n.nav-tabs-custom > .nav-tabs > li.header {\n  line-height: 35px;\n  padding: 0 10px;\n  font-size: 20px;\n  color: #444;\n}\n.nav-tabs-custom > .nav-tabs > li.header > .fa,\n.nav-tabs-custom > .nav-tabs > li.header > .glyphicon,\n.nav-tabs-custom > .nav-tabs > li.header > .ion {\n  margin-right: 5px;\n}\n.nav-tabs-custom > .tab-content {\n  background: #fff;\n  padding: 10px;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n/* Nav tabs bottom */\n.tabs-bottom.nav-3 li a {\n  width: 3333.33333333% !important;\n}\n.tabs-bottom li a {\n  border: 0;\n}\n/* PAGINATION */\n.pagination > li > a {\n  background: #fafafa;\n  color: #666;\n}\n.pagination > li:first-of-type a,\n.pagination > li:last-of-type a {\n  border-radius: 0;\n}\n/*\n * Component: Products List\n * ------------------------\n */\n.products-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.products-list > .item {\n  border-radius: 3px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  padding: 10px 0;\n  background: #fff;\n}\n.products-list > .item:before,\n.products-list > .item:after {\n  content: \" \";\n  display: table;\n}\n.products-list > .item:after {\n  clear: both;\n}\n.products-list .product-img {\n  float: left;\n}\n.products-list .product-img img {\n  width: 50px;\n  height: 50px;\n}\n.products-list .product-info {\n  margin-left: 60px;\n}\n.products-list .product-title {\n  font-weight: 600;\n}\n.products-list .product-description {\n  display: block;\n  color: #999;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.product-list-in-box > .item {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  border-radius: 0;\n  border-bottom: 1px solid #f4f4f4;\n}\n.product-list-in-box > .item:last-of-type {\n  border-bottom-width: 0;\n}\n/*\n * Component: Table\n * ----------------\n */\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  border-top: 1px solid #f4f4f4;\n}\n.table > thead > tr > th {\n  border-bottom: 2px solid #f4f4f4;\n}\n.table tr td .progress {\n  margin-top: 5px;\n}\n.table-bordered {\n  border: 1px solid #f4f4f4;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #f4f4f4;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td {\n  border-bottom-width: 2px;\n}\n.table.no-border,\n.table.no-border td,\n.table.no-border th {\n  border: 0;\n}\n/* .text-center in tables */\ntable.text-center,\ntable.text-center td,\ntable.text-center th {\n  text-align: center;\n}\n.table.align th {\n  text-align: left;\n}\n.table.align td {\n  text-align: right;\n}\n/*\n * Component: Label\n * ----------------\n */\n.label-default {\n  background-color: #d2d6de;\n  color: #444;\n}\n/*\n * Component: Direct Chat\n * ----------------------\n */\n.direct-chat .box-body {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  position: relative;\n  overflow-x: hidden;\n  padding: 0;\n}\n.direct-chat.chat-pane-open .direct-chat-contacts {\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  -o-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n.direct-chat-messages {\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  -o-transform: translate(0, 0);\n  transform: translate(0, 0);\n  padding: 10px;\n  height: 250px;\n  overflow: auto;\n}\n.direct-chat-msg,\n.direct-chat-text {\n  display: block;\n}\n.direct-chat-msg {\n  margin-bottom: 10px;\n}\n.direct-chat-msg:before,\n.direct-chat-msg:after {\n  content: \" \";\n  display: table;\n}\n.direct-chat-msg:after {\n  clear: both;\n}\n.direct-chat-messages,\n.direct-chat-contacts {\n  -webkit-transition: -webkit-transform 0.5s ease-in-out;\n  -moz-transition: -moz-transform 0.5s ease-in-out;\n  -o-transition: -o-transform 0.5s ease-in-out;\n  transition: transform 0.5s ease-in-out;\n}\n.direct-chat-text {\n  border-radius: 5px;\n  position: relative;\n  padding: 5px 10px;\n  background: #d2d6de;\n  border: 1px solid #d2d6de;\n  margin: 5px 0 0 50px;\n  color: #444444;\n}\n.direct-chat-text:after,\n.direct-chat-text:before {\n  position: absolute;\n  right: 100%;\n  top: 15px;\n  border: solid transparent;\n  border-right-color: #d2d6de;\n  content: ' ';\n  height: 0;\n  width: 0;\n  pointer-events: none;\n}\n.direct-chat-text:after {\n  border-width: 5px;\n  margin-top: -5px;\n}\n.direct-chat-text:before {\n  border-width: 6px;\n  margin-top: -6px;\n}\n.right .direct-chat-text {\n  margin-right: 50px;\n  margin-left: 0;\n}\n.right .direct-chat-text:after,\n.right .direct-chat-text:before {\n  right: auto;\n  left: 100%;\n  border-right-color: transparent;\n  border-left-color: #d2d6de;\n}\n.direct-chat-img {\n  border-radius: 50%;\n  float: left;\n  width: 40px;\n  height: 40px;\n}\n.right .direct-chat-img {\n  float: right;\n}\n.direct-chat-info {\n  display: block;\n  margin-bottom: 2px;\n  font-size: 12px;\n}\n.direct-chat-name {\n  font-weight: 600;\n}\n.direct-chat-timestamp {\n  color: #999;\n}\n.direct-chat-contacts-open .direct-chat-contacts {\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  -o-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n.direct-chat-contacts {\n  -webkit-transform: translate(101%, 0);\n  -ms-transform: translate(101%, 0);\n  -o-transform: translate(101%, 0);\n  transform: translate(101%, 0);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  height: 250px;\n  width: 100%;\n  background: #222d32;\n  color: #fff;\n  overflow: auto;\n}\n.contacts-list > li {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 10px;\n  margin: 0;\n}\n.contacts-list > li:before,\n.contacts-list > li:after {\n  content: \" \";\n  display: table;\n}\n.contacts-list > li:after {\n  clear: both;\n}\n.contacts-list > li:last-of-type {\n  border-bottom: none;\n}\n.contacts-list-img {\n  border-radius: 50%;\n  width: 40px;\n  float: left;\n}\n.contacts-list-info {\n  margin-left: 45px;\n  color: #fff;\n}\n.contacts-list-name,\n.contacts-list-status {\n  display: block;\n}\n.contacts-list-name {\n  font-weight: 600;\n}\n.contacts-list-status {\n  font-size: 12px;\n}\n.contacts-list-date {\n  color: #aaa;\n  font-weight: normal;\n}\n.contacts-list-msg {\n  color: #999;\n}\n.direct-chat-danger .right > .direct-chat-text {\n  background: #dd4b39;\n  border-color: #dd4b39;\n  color: #ffffff;\n}\n.direct-chat-danger .right > .direct-chat-text:after,\n.direct-chat-danger .right > .direct-chat-text:before {\n  border-left-color: #dd4b39;\n}\n.direct-chat-primary .right > .direct-chat-text {\n  background: #3c8dbc;\n  border-color: #3c8dbc;\n  color: #ffffff;\n}\n.direct-chat-primary .right > .direct-chat-text:after,\n.direct-chat-primary .right > .direct-chat-text:before {\n  border-left-color: #3c8dbc;\n}\n.direct-chat-warning .right > .direct-chat-text {\n  background: #f39c12;\n  border-color: #f39c12;\n  color: #ffffff;\n}\n.direct-chat-warning .right > .direct-chat-text:after,\n.direct-chat-warning .right > .direct-chat-text:before {\n  border-left-color: #f39c12;\n}\n.direct-chat-info .right > .direct-chat-text {\n  background: #00c0ef;\n  border-color: #00c0ef;\n  color: #ffffff;\n}\n.direct-chat-info .right > .direct-chat-text:after,\n.direct-chat-info .right > .direct-chat-text:before {\n  border-left-color: #00c0ef;\n}\n.direct-chat-success .right > .direct-chat-text {\n  background: #00a65a;\n  border-color: #00a65a;\n  color: #ffffff;\n}\n.direct-chat-success .right > .direct-chat-text:after,\n.direct-chat-success .right > .direct-chat-text:before {\n  border-left-color: #00a65a;\n}\n/*\n * Component: Users List\n * ---------------------\n */\n.users-list > li {\n  width: 25%;\n  float: left;\n  padding: 10px;\n  text-align: center;\n}\n.users-list > li img {\n  border-radius: 50%;\n  max-width: 100%;\n  height: auto;\n}\n.users-list > li > a:hover,\n.users-list > li > a:hover .users-list-name {\n  color: #999;\n}\n.users-list-name,\n.users-list-date {\n  display: block;\n}\n.users-list-name {\n  font-weight: 600;\n  color: #444;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.users-list-date {\n  color: #999;\n  font-size: 12px;\n}\n/*\n * Component: Carousel\n * -------------------\n */\n.carousel-control {\n  background-image: none!important;\n}\n.carousel-control > .fa {\n  font-size: 40px;\n  position: absolute;\n  top: 50%;\n  z-index: 5;\n  display: inline-block;\n  margin-top: -20px;\n}\n/*\n * Component: modal\n * ----------------\n */\n.modal {\n  background: rgba(0, 0, 0, 0.3);\n}\n.modal-content {\n  border-radius: 0;\n  -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.125) !important;\n  border: 0;\n}\n@media (min-width: 768px) {\n  .modal-content {\n    -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.125) !important;\n    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.125) !important;\n  }\n}\n.modal-header {\n  border-bottom-color: #f4f4f4;\n}\n.modal-footer {\n  border-top-color: #f4f4f4;\n}\n.modal-primary .modal-header,\n.modal-primary .modal-footer {\n  border-color: #307095;\n}\n.modal-warning .modal-header,\n.modal-warning .modal-footer {\n  border-color: #c87f0a;\n}\n.modal-info .modal-header,\n.modal-info .modal-footer {\n  border-color: #0097bc;\n}\n.modal-success .modal-header,\n.modal-success .modal-footer {\n  border-color: #00733e;\n}\n.modal-danger .modal-header,\n.modal-danger .modal-footer {\n  border-color: #c23321;\n}\n/*\n * Page: Mailbox\n * -------------\n */\n.mailbox-messages > .table {\n  margin: 0;\n}\n.mailbox-controls {\n  padding: 5px;\n}\n.mailbox-controls.with-border {\n  border-bottom: 1px solid #f4f4f4;\n}\n.mailbox-read-info {\n  border-bottom: 1px solid #f4f4f4;\n  padding: 10px;\n}\n.mailbox-read-info h3 {\n  font-size: 20px;\n  margin: 0;\n}\n.mailbox-read-info h5 {\n  margin: 0;\n  padding: 5px 0 0 0;\n}\n.mailbox-read-time {\n  color: #999;\n  font-size: 13px;\n}\n.mailbox-read-message {\n  padding: 10px;\n}\n.mailbox-attachments li {\n  float: left;\n  width: 200px;\n  border: 1px solid #eee;\n  margin-bottom: 10px;\n  margin-right: 10px;\n}\n.mailbox-attachment-name {\n  font-weight: bold;\n  color: #666;\n}\n.mailbox-attachment-icon,\n.mailbox-attachment-info,\n.mailbox-attachment-size {\n  display: block;\n}\n.mailbox-attachment-info {\n  padding: 10px;\n  background: #f4f4f4;\n}\n.mailbox-attachment-size {\n  color: #999;\n  font-size: 12px;\n}\n.mailbox-attachment-icon {\n  text-align: center;\n  font-size: 65px;\n  color: #666;\n  padding: 20px 10px;\n}\n.mailbox-attachment-icon.has-img {\n  padding: 0;\n}\n.mailbox-attachment-icon.has-img > img {\n  max-width: 100%;\n  height: auto;\n}\n/*\n * Page: Lock Screen\n * -----------------\n */\n/* ADD THIS CLASS TO THE <BODY> TAG */\n.lockscreen {\n  background: #d2d6de;\n}\n.lockscreen-logo {\n  font-size: 35px;\n  text-align: center;\n  margin-bottom: 25px;\n  font-weight: 300;\n}\n.lockscreen-logo a {\n  color: #444;\n}\n.lockscreen-wrapper {\n  max-width: 400px;\n  margin: 0 auto;\n  margin-top: 10%;\n}\n/* User name [optional] */\n.lockscreen .lockscreen-name {\n  text-align: center;\n  font-weight: 600;\n}\n/* Will contain the image and the sign in form */\n.lockscreen-item {\n  border-radius: 4px;\n  padding: 0;\n  background: #fff;\n  position: relative;\n  margin: 10px auto 30px auto;\n  width: 290px;\n}\n/* User image */\n.lockscreen-image {\n  border-radius: 50%;\n  position: absolute;\n  left: -10px;\n  top: -25px;\n  background: #fff;\n  padding: 5px;\n  z-index: 10;\n}\n.lockscreen-image > img {\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n}\n/* Contains the password input and the login button */\n.lockscreen-credentials {\n  margin-left: 70px;\n}\n.lockscreen-credentials .form-control {\n  border: 0 !important;\n}\n.lockscreen-credentials .btn {\n  background-color: #fff;\n  border: 0;\n  padding: 0 10px;\n}\n.lockscreen-footer {\n  margin-top: 10px;\n}\n/*\n * Page: Login & Register\n * ----------------------\n */\n.login-logo,\n.register-logo {\n  font-size: 35px;\n  text-align: center;\n  margin-bottom: 25px;\n  font-weight: 300;\n}\n.login-logo a,\n.register-logo a {\n  color: #444;\n}\n.login-page,\n.register-page {\n  background: #d2d6de;\n}\n.login-box,\n.register-box {\n  width: 360px;\n  margin: 7% auto;\n}\n@media (max-width: 768px) {\n  .login-box,\n  .register-box {\n    width: 90%;\n    margin-top: 20px;\n  }\n}\n.login-box-body,\n.register-box-body {\n  background: #fff;\n  padding: 20px;\n  color: #444;\n  border-top: 0;\n  color: #666;\n}\n.login-box-body .form-control-feedback,\n.register-box-body .form-control-feedback {\n  color: #777;\n}\n.login-box-msg,\n.register-box-msg {\n  margin: 0;\n  text-align: center;\n  padding: 0 20px 20px 20px;\n}\n.social-auth-links {\n  margin: 10px 0;\n}\n/*\n * Page: 400 and 500 error pages\n * ------------------------------\n */\n.error-page {\n  width: 600px;\n  margin: 20px auto 0 auto;\n}\n@media (max-width: 991px) {\n  .error-page {\n    width: 100%;\n  }\n}\n.error-page > .headline {\n  float: left;\n  font-size: 100px;\n  font-weight: 300;\n}\n@media (max-width: 991px) {\n  .error-page > .headline {\n    float: none;\n    text-align: center;\n  }\n}\n.error-page > .error-content {\n  margin-left: 190px;\n  display: block;\n}\n@media (max-width: 991px) {\n  .error-page > .error-content {\n    margin-left: 0;\n  }\n}\n.error-page > .error-content > h3 {\n  font-weight: 300;\n  font-size: 25px;\n}\n@media (max-width: 991px) {\n  .error-page > .error-content > h3 {\n    text-align: center;\n  }\n}\n/*\n * Page: Invoice\n * -------------\n */\n.invoice {\n  position: relative;\n  background: #fff;\n  border: 1px solid #f4f4f4;\n  padding: 20px;\n  margin: 10px 25px;\n}\n.invoice-title {\n  margin-top: 0;\n}\n/*\n * Plugin: Social Buttons\n * ----------------------\n */\n.btn-social {\n  position: relative;\n  padding-left: 44px !important;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.btn-social :first-child {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 32px !important;\n  line-height: 34px !important;\n  font-size: 1.6em!important;\n  text-align: center;\n  border-right: 1px solid rgba(0, 0, 0, 0.2);\n}\n.btn-social.btn-lg {\n  padding-left: 61px !important;\n}\n.btn-social.btn-lg :first-child {\n  line-height: 45px;\n  width: 45px;\n  font-size: 1.8em;\n}\n.btn-social.btn-sm {\n  padding-left: 38px !important;\n}\n.btn-social.btn-sm :first-child {\n  line-height: 28px;\n  width: 28px;\n  font-size: 1.4em;\n}\n.btn-social.btn-xs {\n  padding-left: 30px !important;\n}\n.btn-social.btn-xs :first-child {\n  line-height: 20px;\n  width: 20px;\n  font-size: 1.2em;\n}\n.btn-social-icon {\n  position: relative;\n  padding-left: 44px !important;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 34px;\n  width: 34px;\n  padding: 0;\n}\n.btn-social-icon :first-child {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 32px !important;\n  line-height: 34px !important;\n  font-size: 1.6em!important;\n  text-align: center;\n  border-right: 1px solid rgba(0, 0, 0, 0.2);\n}\n.btn-social-icon.btn-lg {\n  padding-left: 61px !important;\n}\n.btn-social-icon.btn-lg :first-child {\n  line-height: 45px;\n  width: 45px;\n  font-size: 1.8em;\n}\n.btn-social-icon.btn-sm {\n  padding-left: 38px !important;\n}\n.btn-social-icon.btn-sm :first-child {\n  line-height: 28px;\n  width: 28px;\n  font-size: 1.4em;\n}\n.btn-social-icon.btn-xs {\n  padding-left: 30px !important;\n}\n.btn-social-icon.btn-xs :first-child {\n  line-height: 20px;\n  width: 20px;\n  font-size: 1.2em;\n}\n.btn-social-icon :first-child {\n  border: none;\n  text-align: center;\n  width: 100%!important;\n}\n.btn-social-icon.btn-lg {\n  height: 45px;\n  width: 45px;\n  padding-left: 0;\n  padding-right: 0;\n}\n.btn-social-icon.btn-sm {\n  height: 30px;\n  width: 30px;\n  padding-left: 0;\n  padding-right: 0;\n}\n.btn-social-icon.btn-xs {\n  height: 22px;\n  width: 22px;\n  padding-left: 0;\n  padding-right: 0;\n}\n.btn-bitbucket {\n  color: #ffffff;\n  background-color: #205081;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-bitbucket:hover,\n.btn-bitbucket:focus,\n.btn-bitbucket.focus,\n.btn-bitbucket:active,\n.btn-bitbucket.active,\n.open > .dropdown-toggle.btn-bitbucket {\n  color: #ffffff;\n  background-color: #163758;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-bitbucket:active,\n.btn-bitbucket.active,\n.open > .dropdown-toggle.btn-bitbucket {\n  background-image: none;\n}\n.btn-bitbucket.disabled,\n.btn-bitbucket[disabled],\nfieldset[disabled] .btn-bitbucket,\n.btn-bitbucket.disabled:hover,\n.btn-bitbucket[disabled]:hover,\nfieldset[disabled] .btn-bitbucket:hover,\n.btn-bitbucket.disabled:focus,\n.btn-bitbucket[disabled]:focus,\nfieldset[disabled] .btn-bitbucket:focus,\n.btn-bitbucket.disabled.focus,\n.btn-bitbucket[disabled].focus,\nfieldset[disabled] .btn-bitbucket.focus,\n.btn-bitbucket.disabled:active,\n.btn-bitbucket[disabled]:active,\nfieldset[disabled] .btn-bitbucket:active,\n.btn-bitbucket.disabled.active,\n.btn-bitbucket[disabled].active,\nfieldset[disabled] .btn-bitbucket.active {\n  background-color: #205081;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-bitbucket .badge {\n  color: #205081;\n  background-color: #ffffff;\n}\n.btn-dropbox {\n  color: #ffffff;\n  background-color: #1087dd;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-dropbox:hover,\n.btn-dropbox:focus,\n.btn-dropbox.focus,\n.btn-dropbox:active,\n.btn-dropbox.active,\n.open > .dropdown-toggle.btn-dropbox {\n  color: #ffffff;\n  background-color: #0d6aad;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-dropbox:active,\n.btn-dropbox.active,\n.open > .dropdown-toggle.btn-dropbox {\n  background-image: none;\n}\n.btn-dropbox.disabled,\n.btn-dropbox[disabled],\nfieldset[disabled] .btn-dropbox,\n.btn-dropbox.disabled:hover,\n.btn-dropbox[disabled]:hover,\nfieldset[disabled] .btn-dropbox:hover,\n.btn-dropbox.disabled:focus,\n.btn-dropbox[disabled]:focus,\nfieldset[disabled] .btn-dropbox:focus,\n.btn-dropbox.disabled.focus,\n.btn-dropbox[disabled].focus,\nfieldset[disabled] .btn-dropbox.focus,\n.btn-dropbox.disabled:active,\n.btn-dropbox[disabled]:active,\nfieldset[disabled] .btn-dropbox:active,\n.btn-dropbox.disabled.active,\n.btn-dropbox[disabled].active,\nfieldset[disabled] .btn-dropbox.active {\n  background-color: #1087dd;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-dropbox .badge {\n  color: #1087dd;\n  background-color: #ffffff;\n}\n.btn-facebook {\n  color: #ffffff;\n  background-color: #3b5998;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-facebook:hover,\n.btn-facebook:focus,\n.btn-facebook.focus,\n.btn-facebook:active,\n.btn-facebook.active,\n.open > .dropdown-toggle.btn-facebook {\n  color: #ffffff;\n  background-color: #2d4373;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-facebook:active,\n.btn-facebook.active,\n.open > .dropdown-toggle.btn-facebook {\n  background-image: none;\n}\n.btn-facebook.disabled,\n.btn-facebook[disabled],\nfieldset[disabled] .btn-facebook,\n.btn-facebook.disabled:hover,\n.btn-facebook[disabled]:hover,\nfieldset[disabled] .btn-facebook:hover,\n.btn-facebook.disabled:focus,\n.btn-facebook[disabled]:focus,\nfieldset[disabled] .btn-facebook:focus,\n.btn-facebook.disabled.focus,\n.btn-facebook[disabled].focus,\nfieldset[disabled] .btn-facebook.focus,\n.btn-facebook.disabled:active,\n.btn-facebook[disabled]:active,\nfieldset[disabled] .btn-facebook:active,\n.btn-facebook.disabled.active,\n.btn-facebook[disabled].active,\nfieldset[disabled] .btn-facebook.active {\n  background-color: #3b5998;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-facebook .badge {\n  color: #3b5998;\n  background-color: #ffffff;\n}\n.btn-flickr {\n  color: #ffffff;\n  background-color: #ff0084;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-flickr:hover,\n.btn-flickr:focus,\n.btn-flickr.focus,\n.btn-flickr:active,\n.btn-flickr.active,\n.open > .dropdown-toggle.btn-flickr {\n  color: #ffffff;\n  background-color: #cc006a;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-flickr:active,\n.btn-flickr.active,\n.open > .dropdown-toggle.btn-flickr {\n  background-image: none;\n}\n.btn-flickr.disabled,\n.btn-flickr[disabled],\nfieldset[disabled] .btn-flickr,\n.btn-flickr.disabled:hover,\n.btn-flickr[disabled]:hover,\nfieldset[disabled] .btn-flickr:hover,\n.btn-flickr.disabled:focus,\n.btn-flickr[disabled]:focus,\nfieldset[disabled] .btn-flickr:focus,\n.btn-flickr.disabled.focus,\n.btn-flickr[disabled].focus,\nfieldset[disabled] .btn-flickr.focus,\n.btn-flickr.disabled:active,\n.btn-flickr[disabled]:active,\nfieldset[disabled] .btn-flickr:active,\n.btn-flickr.disabled.active,\n.btn-flickr[disabled].active,\nfieldset[disabled] .btn-flickr.active {\n  background-color: #ff0084;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-flickr .badge {\n  color: #ff0084;\n  background-color: #ffffff;\n}\n.btn-foursquare {\n  color: #ffffff;\n  background-color: #0072b1;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-foursquare:hover,\n.btn-foursquare:focus,\n.btn-foursquare.focus,\n.btn-foursquare:active,\n.btn-foursquare.active,\n.open > .dropdown-toggle.btn-foursquare {\n  color: #ffffff;\n  background-color: #00517e;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-foursquare:active,\n.btn-foursquare.active,\n.open > .dropdown-toggle.btn-foursquare {\n  background-image: none;\n}\n.btn-foursquare.disabled,\n.btn-foursquare[disabled],\nfieldset[disabled] .btn-foursquare,\n.btn-foursquare.disabled:hover,\n.btn-foursquare[disabled]:hover,\nfieldset[disabled] .btn-foursquare:hover,\n.btn-foursquare.disabled:focus,\n.btn-foursquare[disabled]:focus,\nfieldset[disabled] .btn-foursquare:focus,\n.btn-foursquare.disabled.focus,\n.btn-foursquare[disabled].focus,\nfieldset[disabled] .btn-foursquare.focus,\n.btn-foursquare.disabled:active,\n.btn-foursquare[disabled]:active,\nfieldset[disabled] .btn-foursquare:active,\n.btn-foursquare.disabled.active,\n.btn-foursquare[disabled].active,\nfieldset[disabled] .btn-foursquare.active {\n  background-color: #0072b1;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-foursquare .badge {\n  color: #0072b1;\n  background-color: #ffffff;\n}\n.btn-github {\n  color: #ffffff;\n  background-color: #444444;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-github:hover,\n.btn-github:focus,\n.btn-github.focus,\n.btn-github:active,\n.btn-github.active,\n.open > .dropdown-toggle.btn-github {\n  color: #ffffff;\n  background-color: #2b2b2b;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-github:active,\n.btn-github.active,\n.open > .dropdown-toggle.btn-github {\n  background-image: none;\n}\n.btn-github.disabled,\n.btn-github[disabled],\nfieldset[disabled] .btn-github,\n.btn-github.disabled:hover,\n.btn-github[disabled]:hover,\nfieldset[disabled] .btn-github:hover,\n.btn-github.disabled:focus,\n.btn-github[disabled]:focus,\nfieldset[disabled] .btn-github:focus,\n.btn-github.disabled.focus,\n.btn-github[disabled].focus,\nfieldset[disabled] .btn-github.focus,\n.btn-github.disabled:active,\n.btn-github[disabled]:active,\nfieldset[disabled] .btn-github:active,\n.btn-github.disabled.active,\n.btn-github[disabled].active,\nfieldset[disabled] .btn-github.active {\n  background-color: #444444;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-github .badge {\n  color: #444444;\n  background-color: #ffffff;\n}\n.btn-google-plus {\n  color: #ffffff;\n  background-color: #dd4b39;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-google-plus:hover,\n.btn-google-plus:focus,\n.btn-google-plus.focus,\n.btn-google-plus:active,\n.btn-google-plus.active,\n.open > .dropdown-toggle.btn-google-plus {\n  color: #ffffff;\n  background-color: #c23321;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-google-plus:active,\n.btn-google-plus.active,\n.open > .dropdown-toggle.btn-google-plus {\n  background-image: none;\n}\n.btn-google-plus.disabled,\n.btn-google-plus[disabled],\nfieldset[disabled] .btn-google-plus,\n.btn-google-plus.disabled:hover,\n.btn-google-plus[disabled]:hover,\nfieldset[disabled] .btn-google-plus:hover,\n.btn-google-plus.disabled:focus,\n.btn-google-plus[disabled]:focus,\nfieldset[disabled] .btn-google-plus:focus,\n.btn-google-plus.disabled.focus,\n.btn-google-plus[disabled].focus,\nfieldset[disabled] .btn-google-plus.focus,\n.btn-google-plus.disabled:active,\n.btn-google-plus[disabled]:active,\nfieldset[disabled] .btn-google-plus:active,\n.btn-google-plus.disabled.active,\n.btn-google-plus[disabled].active,\nfieldset[disabled] .btn-google-plus.active {\n  background-color: #dd4b39;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-google-plus .badge {\n  color: #dd4b39;\n  background-color: #ffffff;\n}\n.btn-instagram {\n  color: #ffffff;\n  background-color: #3f729b;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-instagram:hover,\n.btn-instagram:focus,\n.btn-instagram.focus,\n.btn-instagram:active,\n.btn-instagram.active,\n.open > .dropdown-toggle.btn-instagram {\n  color: #ffffff;\n  background-color: #305777;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-instagram:active,\n.btn-instagram.active,\n.open > .dropdown-toggle.btn-instagram {\n  background-image: none;\n}\n.btn-instagram.disabled,\n.btn-instagram[disabled],\nfieldset[disabled] .btn-instagram,\n.btn-instagram.disabled:hover,\n.btn-instagram[disabled]:hover,\nfieldset[disabled] .btn-instagram:hover,\n.btn-instagram.disabled:focus,\n.btn-instagram[disabled]:focus,\nfieldset[disabled] .btn-instagram:focus,\n.btn-instagram.disabled.focus,\n.btn-instagram[disabled].focus,\nfieldset[disabled] .btn-instagram.focus,\n.btn-instagram.disabled:active,\n.btn-instagram[disabled]:active,\nfieldset[disabled] .btn-instagram:active,\n.btn-instagram.disabled.active,\n.btn-instagram[disabled].active,\nfieldset[disabled] .btn-instagram.active {\n  background-color: #3f729b;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-instagram .badge {\n  color: #3f729b;\n  background-color: #ffffff;\n}\n.btn-linkedin {\n  color: #ffffff;\n  background-color: #007bb6;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-linkedin:hover,\n.btn-linkedin:focus,\n.btn-linkedin.focus,\n.btn-linkedin:active,\n.btn-linkedin.active,\n.open > .dropdown-toggle.btn-linkedin {\n  color: #ffffff;\n  background-color: #005983;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-linkedin:active,\n.btn-linkedin.active,\n.open > .dropdown-toggle.btn-linkedin {\n  background-image: none;\n}\n.btn-linkedin.disabled,\n.btn-linkedin[disabled],\nfieldset[disabled] .btn-linkedin,\n.btn-linkedin.disabled:hover,\n.btn-linkedin[disabled]:hover,\nfieldset[disabled] .btn-linkedin:hover,\n.btn-linkedin.disabled:focus,\n.btn-linkedin[disabled]:focus,\nfieldset[disabled] .btn-linkedin:focus,\n.btn-linkedin.disabled.focus,\n.btn-linkedin[disabled].focus,\nfieldset[disabled] .btn-linkedin.focus,\n.btn-linkedin.disabled:active,\n.btn-linkedin[disabled]:active,\nfieldset[disabled] .btn-linkedin:active,\n.btn-linkedin.disabled.active,\n.btn-linkedin[disabled].active,\nfieldset[disabled] .btn-linkedin.active {\n  background-color: #007bb6;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-linkedin .badge {\n  color: #007bb6;\n  background-color: #ffffff;\n}\n.btn-tumblr {\n  color: #ffffff;\n  background-color: #2c4762;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-tumblr:hover,\n.btn-tumblr:focus,\n.btn-tumblr.focus,\n.btn-tumblr:active,\n.btn-tumblr.active,\n.open > .dropdown-toggle.btn-tumblr {\n  color: #ffffff;\n  background-color: #1c2d3f;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-tumblr:active,\n.btn-tumblr.active,\n.open > .dropdown-toggle.btn-tumblr {\n  background-image: none;\n}\n.btn-tumblr.disabled,\n.btn-tumblr[disabled],\nfieldset[disabled] .btn-tumblr,\n.btn-tumblr.disabled:hover,\n.btn-tumblr[disabled]:hover,\nfieldset[disabled] .btn-tumblr:hover,\n.btn-tumblr.disabled:focus,\n.btn-tumblr[disabled]:focus,\nfieldset[disabled] .btn-tumblr:focus,\n.btn-tumblr.disabled.focus,\n.btn-tumblr[disabled].focus,\nfieldset[disabled] .btn-tumblr.focus,\n.btn-tumblr.disabled:active,\n.btn-tumblr[disabled]:active,\nfieldset[disabled] .btn-tumblr:active,\n.btn-tumblr.disabled.active,\n.btn-tumblr[disabled].active,\nfieldset[disabled] .btn-tumblr.active {\n  background-color: #2c4762;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-tumblr .badge {\n  color: #2c4762;\n  background-color: #ffffff;\n}\n.btn-twitter {\n  color: #ffffff;\n  background-color: #55acee;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-twitter:hover,\n.btn-twitter:focus,\n.btn-twitter.focus,\n.btn-twitter:active,\n.btn-twitter.active,\n.open > .dropdown-toggle.btn-twitter {\n  color: #ffffff;\n  background-color: #2795e9;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-twitter:active,\n.btn-twitter.active,\n.open > .dropdown-toggle.btn-twitter {\n  background-image: none;\n}\n.btn-twitter.disabled,\n.btn-twitter[disabled],\nfieldset[disabled] .btn-twitter,\n.btn-twitter.disabled:hover,\n.btn-twitter[disabled]:hover,\nfieldset[disabled] .btn-twitter:hover,\n.btn-twitter.disabled:focus,\n.btn-twitter[disabled]:focus,\nfieldset[disabled] .btn-twitter:focus,\n.btn-twitter.disabled.focus,\n.btn-twitter[disabled].focus,\nfieldset[disabled] .btn-twitter.focus,\n.btn-twitter.disabled:active,\n.btn-twitter[disabled]:active,\nfieldset[disabled] .btn-twitter:active,\n.btn-twitter.disabled.active,\n.btn-twitter[disabled].active,\nfieldset[disabled] .btn-twitter.active {\n  background-color: #55acee;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-twitter .badge {\n  color: #55acee;\n  background-color: #ffffff;\n}\n.btn-vk {\n  color: #ffffff;\n  background-color: #587ea3;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-vk:hover,\n.btn-vk:focus,\n.btn-vk.focus,\n.btn-vk:active,\n.btn-vk.active,\n.open > .dropdown-toggle.btn-vk {\n  color: #ffffff;\n  background-color: #466482;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-vk:active,\n.btn-vk.active,\n.open > .dropdown-toggle.btn-vk {\n  background-image: none;\n}\n.btn-vk.disabled,\n.btn-vk[disabled],\nfieldset[disabled] .btn-vk,\n.btn-vk.disabled:hover,\n.btn-vk[disabled]:hover,\nfieldset[disabled] .btn-vk:hover,\n.btn-vk.disabled:focus,\n.btn-vk[disabled]:focus,\nfieldset[disabled] .btn-vk:focus,\n.btn-vk.disabled.focus,\n.btn-vk[disabled].focus,\nfieldset[disabled] .btn-vk.focus,\n.btn-vk.disabled:active,\n.btn-vk[disabled]:active,\nfieldset[disabled] .btn-vk:active,\n.btn-vk.disabled.active,\n.btn-vk[disabled].active,\nfieldset[disabled] .btn-vk.active {\n  background-color: #587ea3;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-vk .badge {\n  color: #587ea3;\n  background-color: #ffffff;\n}\n/*\n * Plugin: Full Calendar\n * ---------------------\n */\n.fc-button {\n  background: #f4f4f4;\n  background-image: none;\n  color: #444;\n  border-color: #ddd;\n  border-bottom-color: #ddd;\n}\n.fc-button:hover,\n.fc-button:active,\n.fc-button.hover {\n  background-color: #e9e9e9;\n}\n.fc-header-title h2 {\n  font-size: 15px;\n  line-height: 1.6em;\n  color: #666;\n  margin-left: 10px;\n}\n.fc-header-right {\n  padding-right: 10px;\n}\n.fc-header-left {\n  padding-left: 10px;\n}\n.fc-widget-header {\n  background: #fafafa;\n}\n.fc-grid {\n  width: 100%;\n  border: 0;\n}\n.fc-widget-header:first-of-type,\n.fc-widget-content:first-of-type {\n  border-left: 0;\n  border-right: 0;\n}\n.fc-widget-header:last-of-type,\n.fc-widget-content:last-of-type {\n  border-right: 0;\n}\n.fc-toolbar {\n  padding: 10px;\n  margin: 0;\n}\n.fc-day-number {\n  font-size: 20px;\n  font-weight: 300;\n  padding-right: 10px;\n}\n.fc-color-picker {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.fc-color-picker > li {\n  float: left;\n  font-size: 30px;\n  margin-right: 5px;\n  line-height: 30px;\n}\n.fc-color-picker > li .fa {\n  -webkit-transition: -webkit-transform linear 0.3s;\n  -moz-transition: -moz-transform linear 0.3s;\n  -o-transition: -o-transform linear 0.3s;\n  transition: transform linear 0.3s;\n}\n.fc-color-picker > li .fa:hover {\n  -webkit-transform: rotate(30deg);\n  -ms-transform: rotate(30deg);\n  -o-transform: rotate(30deg);\n  transform: rotate(30deg);\n}\n#add-new-event {\n  -webkit-transition: all linear 0.3s;\n  -o-transition: all linear 0.3s;\n  transition: all linear 0.3s;\n}\n.external-event {\n  padding: 5px 10px;\n  font-weight: bold;\n  margin-bottom: 4px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n  cursor: move;\n}\n.external-event:hover {\n  box-shadow: inset 0 0 90px rgba(0, 0, 0, 0.2);\n}\n/*\n * General: Miscellaneous\n * ----------------------\n */\n.pad {\n  padding: 10px;\n}\n.margin {\n  margin: 10px;\n}\n.margin-bottom {\n  margin-bottom: 20px;\n}\n.inline {\n  display: inline;\n  width: auto;\n}\n.description-block {\n  display: block;\n  margin: 10px 0;\n  text-align: center;\n}\n.description-block.margin-bottom {\n  margin-bottom: 25px;\n}\n.description-block > .description-header {\n  margin: 0;\n  padding: 0;\n  font-weight: 600;\n  font-size: 16px;\n}\n.description-block > .description-text {\n  text-transform: uppercase;\n}\n.bg-red,\n.bg-yellow,\n.bg-aqua,\n.bg-blue,\n.bg-light-blue,\n.bg-green,\n.bg-navy,\n.bg-teal,\n.bg-olive,\n.bg-lime,\n.bg-orange,\n.bg-fuchsia,\n.bg-purple,\n.bg-maroon,\n.bg-black,\n.bg-red-active,\n.bg-yellow-active,\n.bg-aqua-active,\n.bg-blue-active,\n.bg-light-blue-active,\n.bg-green-active,\n.bg-navy-active,\n.bg-teal-active,\n.bg-olive-active,\n.bg-lime-active,\n.bg-orange-active,\n.bg-fuchsia-active,\n.bg-purple-active,\n.bg-maroon-active,\n.bg-black-active,\n.callout.callout-danger,\n.callout.callout-warning,\n.callout.callout-info,\n.callout.callout-success,\n.alert-success,\n.alert-danger,\n.alert-error,\n.alert-warning,\n.alert-info,\n.label-danger,\n.label-info,\n.label-waring,\n.label-primary,\n.label-success,\n.modal-primary .modal-body,\n.modal-primary .modal-header,\n.modal-primary .modal-footer,\n.modal-warning .modal-body,\n.modal-warning .modal-header,\n.modal-warning .modal-footer,\n.modal-info .modal-body,\n.modal-info .modal-header,\n.modal-info .modal-footer,\n.modal-success .modal-body,\n.modal-success .modal-header,\n.modal-success .modal-footer,\n.modal-danger .modal-body,\n.modal-danger .modal-header,\n.modal-danger .modal-footer {\n  color: #fff !important;\n}\n.bg-gray {\n  color: #000;\n  background-color: #d2d6de !important;\n}\n.bg-black {\n  background-color: #111111 !important;\n}\n.bg-red,\n.callout.callout-danger,\n.alert-danger,\n.alert-error,\n.label-danger,\n.modal-danger .modal-body {\n  background-color: #dd4b39 !important;\n}\n.bg-yellow,\n.callout.callout-warning,\n.alert-warning,\n.label-waring,\n.modal-warning .modal-body {\n  background-color: #f39c12 !important;\n}\n.bg-aqua,\n.callout.callout-info,\n.alert-info,\n.label-info,\n.modal-info .modal-body {\n  background-color: #00c0ef !important;\n}\n.bg-blue {\n  background-color: #0073b7 !important;\n}\n.bg-light-blue,\n.label-primary,\n.modal-primary .modal-body {\n  background-color: #3c8dbc !important;\n}\n.bg-green,\n.callout.callout-success,\n.alert-success,\n.label-success,\n.modal-success .modal-body {\n  background-color: #00a65a !important;\n}\n.bg-navy {\n  background-color: #001f3f !important;\n}\n.bg-teal {\n  background-color: #39cccc !important;\n}\n.bg-olive {\n  background-color: #3d9970 !important;\n}\n.bg-lime {\n  background-color: #01ff70 !important;\n}\n.bg-orange {\n  background-color: #ff851b !important;\n}\n.bg-fuchsia {\n  background-color: #f012be !important;\n}\n.bg-purple {\n  background-color: #605ca8 !important;\n}\n.bg-maroon {\n  background-color: #d81b60 !important;\n}\n.bg-gray-active {\n  color: #000;\n  background-color: #b5bbc8 !important;\n}\n.bg-black-active {\n  background-color: #000000 !important;\n}\n.bg-red-active,\n.modal-danger .modal-header,\n.modal-danger .modal-footer {\n  background-color: #d33724 !important;\n}\n.bg-yellow-active,\n.modal-warning .modal-header,\n.modal-warning .modal-footer {\n  background-color: #db8b0b !important;\n}\n.bg-aqua-active,\n.modal-info .modal-header,\n.modal-info .modal-footer {\n  background-color: #00a7d0 !important;\n}\n.bg-blue-active {\n  background-color: #005384 !important;\n}\n.bg-light-blue-active,\n.modal-primary .modal-header,\n.modal-primary .modal-footer {\n  background-color: #357ca5 !important;\n}\n.bg-green-active,\n.modal-success .modal-header,\n.modal-success .modal-footer {\n  background-color: #008d4c !important;\n}\n.bg-navy-active {\n  background-color: #001a35 !important;\n}\n.bg-teal-active {\n  background-color: #30bbbb !important;\n}\n.bg-olive-active {\n  background-color: #368763 !important;\n}\n.bg-lime-active {\n  background-color: #00e765 !important;\n}\n.bg-orange-active {\n  background-color: #ff7701 !important;\n}\n.bg-fuchsia-active {\n  background-color: #db0ead !important;\n}\n.bg-purple-active {\n  background-color: #555299 !important;\n}\n.bg-maroon-active {\n  background-color: #ca195a !important;\n}\n[class^=\"bg-\"].disabled {\n  opacity: 0.65;\n  filter: alpha(opacity=65);\n}\n.text-red {\n  color: #dd4b39 !important;\n}\n.text-yellow {\n  color: #f39c12 !important;\n}\n.text-aqua {\n  color: #00c0ef !important;\n}\n.text-blue {\n  color: #0073b7 !important;\n}\n.text-black {\n  color: #111111 !important;\n}\n.text-light-blue {\n  color: #3c8dbc !important;\n}\n.text-green {\n  color: #00a65a !important;\n}\n.text-gray {\n  color: #d2d6de !important;\n}\n.text-navy {\n  color: #001f3f !important;\n}\n.text-teal {\n  color: #39cccc !important;\n}\n.text-olive {\n  color: #3d9970 !important;\n}\n.text-lime {\n  color: #01ff70 !important;\n}\n.text-orange {\n  color: #ff851b !important;\n}\n.text-fuchsia {\n  color: #f012be !important;\n}\n.text-purple {\n  color: #605ca8 !important;\n}\n.text-maroon {\n  color: #d81b60 !important;\n}\n.hide {\n  display: none !important;\n}\n.no-border {\n  border: 0px !important;\n}\n.no-padding {\n  padding: 0px !important;\n}\n.no-margin {\n  margin: 0px !important;\n}\n.no-shadow {\n  box-shadow: none!important;\n}\n.list-unstyled,\n.chart-legend,\n.contacts-list,\n.users-list,\n.mailbox-attachments {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.flat {\n  border-radius: 0 !important;\n}\n.text-bold,\n.text-bold.table td,\n.text-bold.table th {\n  font-weight: 700;\n}\n.jqstooltip {\n  padding: 5px!important;\n  width: auto!important;\n  height: auto!important;\n}\n.bg-teal-gradient {\n  background: #39cccc !important;\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #39cccc), color-stop(1, #7adddd)) !important;\n  background: -ms-linear-gradient(bottom, #39cccc, #7adddd) !important;\n  background: -moz-linear-gradient(center bottom, #39cccc 0%, #7adddd 100%) !important;\n  background: -o-linear-gradient(#7adddd, #39cccc) !important;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#7adddd', endColorstr='#39cccc', GradientType=0) !important;\n  color: #fff;\n}\n.bg-light-blue-gradient {\n  background: #3c8dbc !important;\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #3c8dbc), color-stop(1, #67a8ce)) !important;\n  background: -ms-linear-gradient(bottom, #3c8dbc, #67a8ce) !important;\n  background: -moz-linear-gradient(center bottom, #3c8dbc 0%, #67a8ce 100%) !important;\n  background: -o-linear-gradient(#67a8ce, #3c8dbc) !important;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#67a8ce', endColorstr='#3c8dbc', GradientType=0) !important;\n  color: #fff;\n}\n.bg-blue-gradient {\n  background: #0073b7 !important;\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #0073b7), color-stop(1, #0089db)) !important;\n  background: -ms-linear-gradient(bottom, #0073b7, #0089db) !important;\n  background: -moz-linear-gradient(center bottom, #0073b7 0%, #0089db 100%) !important;\n  background: -o-linear-gradient(#0089db, #0073b7) !important;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0089db', endColorstr='#0073b7', GradientType=0) !important;\n  color: #fff;\n}\n.bg-aqua-gradient {\n  background: #00c0ef !important;\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #00c0ef), color-stop(1, #14d1ff)) !important;\n  background: -ms-linear-gradient(bottom, #00c0ef, #14d1ff) !important;\n  background: -moz-linear-gradient(center bottom, #00c0ef 0%, #14d1ff 100%) !important;\n  background: -o-linear-gradient(#14d1ff, #00c0ef) !important;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#14d1ff', endColorstr='#00c0ef', GradientType=0) !important;\n  color: #fff;\n}\n.bg-yellow-gradient {\n  background: #f39c12 !important;\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #f39c12), color-stop(1, #f7bc60)) !important;\n  background: -ms-linear-gradient(bottom, #f39c12, #f7bc60) !important;\n  background: -moz-linear-gradient(center bottom, #f39c12 0%, #f7bc60 100%) !important;\n  background: -o-linear-gradient(#f7bc60, #f39c12) !important;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f7bc60', endColorstr='#f39c12', GradientType=0) !important;\n  color: #fff;\n}\n.bg-purple-gradient {\n  background: #605ca8 !important;\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #605ca8), color-stop(1, #9491c4)) !important;\n  background: -ms-linear-gradient(bottom, #605ca8, #9491c4) !important;\n  background: -moz-linear-gradient(center bottom, #605ca8 0%, #9491c4 100%) !important;\n  background: -o-linear-gradient(#9491c4, #605ca8) !important;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#9491c4', endColorstr='#605ca8', GradientType=0) !important;\n  color: #fff;\n}\n.bg-green-gradient {\n  background: #00a65a !important;\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #00a65a), color-stop(1, #00ca6d)) !important;\n  background: -ms-linear-gradient(bottom, #00a65a, #00ca6d) !important;\n  background: -moz-linear-gradient(center bottom, #00a65a 0%, #00ca6d 100%) !important;\n  background: -o-linear-gradient(#00ca6d, #00a65a) !important;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ca6d', endColorstr='#00a65a', GradientType=0) !important;\n  color: #fff;\n}\n.bg-red-gradient {\n  background: #dd4b39 !important;\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #dd4b39), color-stop(1, #e47365)) !important;\n  background: -ms-linear-gradient(bottom, #dd4b39, #e47365) !important;\n  background: -moz-linear-gradient(center bottom, #dd4b39 0%, #e47365 100%) !important;\n  background: -o-linear-gradient(#e47365, #dd4b39) !important;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e47365', endColorstr='#dd4b39', GradientType=0) !important;\n  color: #fff;\n}\n.bg-black-gradient {\n  background: #111111 !important;\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #111111), color-stop(1, #2b2b2b)) !important;\n  background: -ms-linear-gradient(bottom, #111111, #2b2b2b) !important;\n  background: -moz-linear-gradient(center bottom, #111111 0%, #2b2b2b 100%) !important;\n  background: -o-linear-gradient(#2b2b2b, #111111) !important;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#2b2b2b', endColorstr='#111111', GradientType=0) !important;\n  color: #fff;\n}\n.bg-maroon-gradient {\n  background: #d81b60 !important;\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #d81b60), color-stop(1, #e73f7c)) !important;\n  background: -ms-linear-gradient(bottom, #d81b60, #e73f7c) !important;\n  background: -moz-linear-gradient(center bottom, #d81b60 0%, #e73f7c 100%) !important;\n  background: -o-linear-gradient(#e73f7c, #d81b60) !important;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e73f7c', endColorstr='#d81b60', GradientType=0) !important;\n  color: #fff;\n}\n.connectedSortable {\n  min-height: 100px;\n}\n.ui-helper-hidden-accessible {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n.sort-highlight {\n  background: #f4f4f4;\n  border: 1px dashed #ddd;\n  margin-bottom: 10px;\n}\n.full-opacity-hover {\n  opacity: 0.65;\n  filter: alpha(opacity=65);\n}\n.full-opacity-hover:hover {\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.chart {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n.chart svg,\n.chart canvas {\n  width: 100%!important;\n}\n/*\n * Misc: print\n * -----------\n */\n@media print {\n  .no-print,\n  .main-sidebar,\n  .left-side,\n  .main-header,\n  .content-header {\n    display: none!important;\n  }\n  .content-wrapper,\n  .right-side,\n  .main-footer {\n    margin-left: 0!important;\n    min-height: 0!important;\n    -webkit-transform: translate(0, 0) !important;\n    -ms-transform: translate(0, 0) !important;\n    -o-transform: translate(0, 0) !important;\n    transform: translate(0, 0) !important;\n  }\n  .fixed .content-wrapper,\n  .fixed .right-side {\n    padding-top: 0!important;\n  }\n  .invoice {\n    width: 100%;\n    border: 0;\n    margin: 0;\n    padding: 0;\n  }\n  .invoice-col {\n    float: left;\n    width: 33.3333333%;\n  }\n  .table-responsive {\n    overflow: auto;\n  }\n  .table-responsive > .table tr th,\n  .table-responsive > .table tr td {\n    white-space: normal!important;\n  }\n}\n", "", {"version":3,"sources":["/home/ozaki/dev/administa/bower_components/admin-lte/dist/css/AdminLTE.css"],"names":[],"mappings":"AAAA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA","file":"/home/ozaki/dev/administa/node_modules/css-loader/index.js?sourceMap!/home/ozaki/dev/administa/bower_components/admin-lte/dist/css/AdminLTE.css","sourcesContent":["@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic);\n/*!\n *   AdminLTE v2.1.0\n *   Author: Almsaeed Studio\n *\t Website: Almsaeed Studio <http://almsaeedstudio.com>\n *   License: Open source - MIT\n *           Please visit http://opensource.org/licenses/MIT for more information\n!*/\n/*\n * Core: Genral Layout Style\n * -------------------------\n */\nhtml,\nbody {\n  min-height: 100%;\n}\n.layout-boxed html,\n.layout-boxed body {\n  height: 100%;\n}\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 400;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n/* Layout */\n.wrapper {\n  min-height: 100%;\n  position: static;\n  overflow: hidden;\n}\n.wrapper:before,\n.wrapper:after {\n  content: \" \";\n  display: table;\n}\n.wrapper:after {\n  clear: both;\n}\n.layout-boxed .wrapper {\n  max-width: 1250px;\n  margin: 0 auto;\n  min-height: 100%;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);\n  position: relative;\n}\n.layout-boxed {\n  background: url('../img/boxed-bg.jpg') repeat fixed;\n}\n/*\n * Content Wrapper - contins main content\n * ```.right-side has been deprecated as of v2.0.0 in favor of .content-wrapper  ```\n */\n.content-wrapper,\n.right-side,\n.main-footer {\n  -webkit-transition: -webkit-transform 0.3s ease-in-out, margin 0.3s ease-in-out;\n  -moz-transition: -moz-transform 0.3s ease-in-out, margin 0.3s ease-in-out;\n  -o-transition: -o-transform 0.3s ease-in-out, margin 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out, margin 0.3s ease-in-out;\n  margin-left: 230px;\n  z-index: 820;\n}\n.layout-top-nav .content-wrapper,\n.layout-top-nav .right-side,\n.layout-top-nav .main-footer {\n  margin-left: 0;\n}\n@media (max-width: 767px) {\n  .content-wrapper,\n  .right-side,\n  .main-footer {\n    margin-left: 0;\n  }\n}\n@media (min-width: 768px) {\n  .sidebar-collapse .content-wrapper,\n  .sidebar-collapse .right-side,\n  .sidebar-collapse .main-footer {\n    margin-left: 0;\n  }\n}\n@media (max-width: 767px) {\n  .sidebar-open .content-wrapper,\n  .sidebar-open .right-side,\n  .sidebar-open .main-footer {\n    -webkit-transform: translate(230px, 0);\n    -ms-transform: translate(230px, 0);\n    -o-transform: translate(230px, 0);\n    transform: translate(230px, 0);\n  }\n}\n.content-wrapper,\n.right-side {\n  min-height: 100%;\n  background-color: #ecf0f5;\n  z-index: 800;\n}\n.main-footer {\n  background: #fff;\n  padding: 15px;\n  color: #444;\n  border-top: 1px solid #d2d6de;\n}\n/* Fixed layout */\n.fixed .main-header,\n.fixed .main-sidebar,\n.fixed .left-side {\n  position: fixed;\n}\n.fixed .main-header {\n  top: 0;\n  right: 0;\n  left: 0;\n}\n.fixed .content-wrapper,\n.fixed .right-side {\n  padding-top: 50px;\n}\n@media (max-width: 767px) {\n  .fixed .content-wrapper,\n  .fixed .right-side {\n    padding-top: 100px;\n  }\n}\n.fixed.layout-boxed .wrapper {\n  max-width: 100%;\n}\n/* Content */\n.content {\n  min-height: 250px;\n  padding: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n/* H1 - H6 font */\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-family: 'Source Sans Pro', sans-serif;\n}\n/* General Links */\na {\n  color: #3c8dbc;\n}\na:hover,\na:active,\na:focus {\n  outline: none;\n  text-decoration: none;\n  color: #72afd2;\n}\n/* Page Header */\n.page-header {\n  margin: 10px 0 20px 0;\n  font-size: 22px;\n}\n.page-header > small {\n  color: #666;\n  display: block;\n  margin-top: 5px;\n}\n/*\n * Component: Main Header\n * ----------------------\n */\n.main-header {\n  position: relative;\n  max-height: 100px;\n  z-index: 1030;\n}\n.main-header > .navbar {\n  -webkit-transition: margin-left 0.3s ease-in-out;\n  -o-transition: margin-left 0.3s ease-in-out;\n  transition: margin-left 0.3s ease-in-out;\n  margin-bottom: 0;\n  margin-left: 230px;\n  border: none;\n  min-height: 50px;\n  border-radius: 0;\n}\n.layout-top-nav .main-header > .navbar {\n  margin-left: 0!important;\n}\n.main-header #navbar-search-input {\n  background: rgba(255, 255, 255, 0.2);\n  border-color: transparent;\n}\n.main-header #navbar-search-input:focus,\n.main-header #navbar-search-input:active {\n  border-color: rgba(0, 0, 0, 0.1) !important;\n  background: rgba(255, 255, 255, 0.9);\n}\n.main-header #navbar-search-input::-moz-placeholder {\n  color: #ccc;\n  opacity: 1;\n}\n.main-header #navbar-search-input:-ms-input-placeholder {\n  color: #ccc;\n}\n.main-header #navbar-search-input::-webkit-input-placeholder {\n  color: #ccc;\n}\n.main-header .navbar-custom-menu,\n.main-header .navbar-right {\n  float: right;\n}\n@media (max-width: 991px) {\n  .main-header .navbar-custom-menu a,\n  .main-header .navbar-right a {\n    color: inherit;\n    background: transparent;\n  }\n}\n@media (max-width: 767px) {\n  .main-header .navbar-right {\n    float: none;\n  }\n  .navbar-collapse .main-header .navbar-right {\n    margin: 7.5px -15px;\n  }\n  .main-header .navbar-right > li {\n    color: inherit;\n    border: 0;\n  }\n}\n.main-header .sidebar-toggle {\n  float: left;\n  background-color: transparent;\n  background-image: none;\n  padding: 15px 15px;\n  font-family: fontAwesome;\n}\n.main-header .sidebar-toggle:before {\n  content: \"\\f0c9\";\n}\n.main-header .sidebar-toggle:hover {\n  color: #fff;\n}\n.main-header .sidebar-toggle:focus,\n.main-header .sidebar-toggle:active {\n  background: transparent;\n}\n.main-header .sidebar-toggle .icon-bar {\n  display: none;\n}\n.main-header .navbar .nav > li.user > a > .fa,\n.main-header .navbar .nav > li.user > a > .glyphicon,\n.main-header .navbar .nav > li.user > a > .ion {\n  margin-right: 5px;\n}\n.main-header .navbar .nav > li > a > .label {\n  position: absolute;\n  top: 9px;\n  right: 7px;\n  text-align: center;\n  font-size: 9px;\n  padding: 2px 3px;\n  line-height: .9;\n}\n.main-header .logo {\n  -webkit-transition: width 0.3s ease-in-out;\n  -o-transition: width 0.3s ease-in-out;\n  transition: width 0.3s ease-in-out;\n  display: block;\n  float: left;\n  height: 50px;\n  font-size: 20px;\n  line-height: 50px;\n  text-align: center;\n  width: 230px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  padding: 0 15px;\n  font-weight: 300;\n}\n.main-header .logo .logo-lg {\n  display: block;\n}\n.main-header .logo .logo-mini {\n  display: none;\n}\n.main-header .navbar-brand {\n  color: #fff;\n}\n.content-header {\n  position: relative;\n  padding: 15px 15px 0 15px;\n}\n.content-header > h1 {\n  margin: 0;\n  font-size: 24px;\n}\n.content-header > h1 > small {\n  font-size: 15px;\n  display: inline-block;\n  padding-left: 4px;\n  font-weight: 300;\n}\n.content-header > .breadcrumb {\n  float: right;\n  background: transparent;\n  margin-top: 0px;\n  margin-bottom: 0;\n  font-size: 12px;\n  padding: 7px 5px;\n  position: absolute;\n  top: 15px;\n  right: 10px;\n  border-radius: 2px;\n}\n.content-header > .breadcrumb > li > a {\n  color: #444;\n  text-decoration: none;\n  display: inline-block;\n}\n.content-header > .breadcrumb > li > a > .fa,\n.content-header > .breadcrumb > li > a > .glyphicon,\n.content-header > .breadcrumb > li > a > .ion {\n  margin-right: 5px;\n}\n.content-header > .breadcrumb > li + li:before {\n  content: '>\\00a0';\n}\n@media (max-width: 991px) {\n  .content-header > .breadcrumb {\n    position: relative;\n    margin-top: 5px;\n    top: 0;\n    right: 0;\n    float: none;\n    background: #d2d6de;\n    padding-left: 10px;\n  }\n  .content-header > .breadcrumb li:before {\n    color: #97a0b3;\n  }\n}\n.navbar-toggle {\n  color: #fff;\n  border: 0;\n  margin: 0;\n  padding: 15px 15px;\n}\n@media (max-width: 991px) {\n  .navbar-custom-menu .navbar-nav > li {\n    float: left;\n  }\n  .navbar-custom-menu .navbar-nav {\n    margin: 0;\n    float: left;\n  }\n  .navbar-custom-menu .navbar-nav > li > a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n    line-height: 20px;\n  }\n}\n@media (max-width: 767px) {\n  .main-header {\n    position: relative;\n  }\n  .main-header .logo,\n  .main-header .navbar {\n    width: 100%;\n    float: none;\n    position: relative!important;\n  }\n  .main-header .navbar {\n    margin: 0;\n  }\n  .main-header .navbar-custom-menu {\n    float: right;\n  }\n  .main-sidebar,\n  .left-side {\n    padding-top: 100px!important;\n  }\n}\n@media (max-width: 991px) {\n  .navbar-collapse.pull-left {\n    float: none!important;\n  }\n  .navbar-collapse.pull-left + .navbar-custom-menu {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 40px;\n  }\n}\n/*\n * Component: Sidebar\n * ------------------\n */\n.main-sidebar,\n.left-side {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding-top: 50px;\n  min-height: 100%;\n  width: 230px;\n  z-index: 810;\n  -webkit-transition: -webkit-transform 0.3s ease-in-out, width 0.3s ease-in-out;\n  -moz-transition: -moz-transform 0.3s ease-in-out, width 0.3s ease-in-out;\n  -o-transition: -o-transform 0.3s ease-in-out, width 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;\n}\n@media (max-width: 767px) {\n  .main-sidebar,\n  .left-side {\n    -webkit-transform: translate(-230px, 0);\n    -ms-transform: translate(-230px, 0);\n    -o-transform: translate(-230px, 0);\n    transform: translate(-230px, 0);\n  }\n}\n@media (min-width: 768px) {\n  .sidebar-collapse .main-sidebar,\n  .sidebar-collapse .left-side {\n    -webkit-transform: translate(-230px, 0);\n    -ms-transform: translate(-230px, 0);\n    -o-transform: translate(-230px, 0);\n    transform: translate(-230px, 0);\n  }\n}\n@media (max-width: 767px) {\n  .sidebar-open .main-sidebar,\n  .sidebar-open .left-side {\n    -webkit-transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    transform: translate(0, 0);\n  }\n}\n.sidebar {\n  padding-bottom: 10px;\n}\n.sidebar-form input:focus {\n  border-color: transparent!important;\n}\n.user-panel {\n  position: relative;\n  width: 100%;\n  padding: 10px;\n  overflow: hidden;\n}\n.user-panel:before,\n.user-panel:after {\n  content: \" \";\n  display: table;\n}\n.user-panel:after {\n  clear: both;\n}\n.user-panel > .image > img {\n  width: 100%;\n  max-width: 45px;\n  height: auto;\n}\n.user-panel > .info {\n  padding: 5px 5px 5px 15px;\n  line-height: 1;\n  position: absolute;\n  left: 55px;\n}\n.user-panel > .info > p {\n  font-weight: 600;\n  margin-bottom: 9px;\n}\n.user-panel > .info > a {\n  text-decoration: none;\n  padding-right: 5px;\n  margin-top: 3px;\n  font-size: 11px;\n}\n.user-panel > .info > a > .fa,\n.user-panel > .info > a > .ion,\n.user-panel > .info > a > .glyphicon {\n  margin-right: 3px;\n}\n.sidebar-menu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.sidebar-menu > li {\n  position: relative;\n  margin: 0;\n  padding: 0;\n}\n.sidebar-menu > li > a {\n  padding: 12px 5px 12px 15px;\n  display: block;\n}\n.sidebar-menu > li > a > .fa,\n.sidebar-menu > li > a > .glyphicon,\n.sidebar-menu > li > a > .ion {\n  width: 20px;\n}\n.sidebar-menu > li .label,\n.sidebar-menu > li .badge {\n  margin-top: 3px;\n  margin-right: 5px;\n}\n.sidebar-menu li.header {\n  padding: 10px 25px 10px 15px;\n  font-size: 12px;\n}\n.sidebar-menu li > a > .fa-angle-left {\n  width: auto;\n  height: auto;\n  padding: 0;\n  margin-right: 10px;\n  margin-top: 3px;\n}\n.sidebar-menu li.active > a > .fa-angle-left {\n  -webkit-transform: rotate(-90deg);\n  -ms-transform: rotate(-90deg);\n  -o-transform: rotate(-90deg);\n  transform: rotate(-90deg);\n}\n.sidebar-menu li.active > .treeview-menu {\n  display: block;\n}\n.sidebar-menu .treeview-menu {\n  display: none;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  padding-left: 5px;\n}\n.sidebar-menu .treeview-menu .treeview-menu {\n  padding-left: 20px;\n}\n.sidebar-menu .treeview-menu > li {\n  margin: 0;\n}\n.sidebar-menu .treeview-menu > li > a {\n  padding: 5px 5px 5px 15px;\n  display: block;\n  font-size: 14px;\n}\n.sidebar-menu .treeview-menu > li > a > .fa,\n.sidebar-menu .treeview-menu > li > a > .glyphicon,\n.sidebar-menu .treeview-menu > li > a > .ion {\n  width: 20px;\n}\n.sidebar-menu .treeview-menu > li > a > .fa-angle-left,\n.sidebar-menu .treeview-menu > li > a > .fa-angle-down {\n  width: auto;\n}\n/*\n * Component: Sidebar Mini\n */\n@media (min-width: 768px) {\n  .sidebar-mini.sidebar-collapse .content-wrapper,\n  .sidebar-mini.sidebar-collapse .right-side,\n  .sidebar-mini.sidebar-collapse .main-footer {\n    margin-left: 50px!important;\n    z-index: 840;\n  }\n  .sidebar-mini.sidebar-collapse .main-sidebar {\n    -webkit-transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    transform: translate(0, 0);\n    width: 50px!important;\n    z-index: 850;\n  }\n  .sidebar-mini.sidebar-collapse .sidebar-menu > li {\n    position: relative;\n  }\n  .sidebar-mini.sidebar-collapse .sidebar-menu > li > a {\n    margin-right: 0;\n  }\n  .sidebar-mini.sidebar-collapse .sidebar-menu > li > a > span {\n    border-top-right-radius: 4px;\n  }\n  .sidebar-mini.sidebar-collapse .sidebar-menu > li:not(.treeview) > a > span {\n    border-bottom-right-radius: 4px;\n  }\n  .sidebar-mini.sidebar-collapse .sidebar-menu > li > .treeview-menu {\n    padding-top: 5px;\n    padding-bottom: 5px;\n    border-bottom-right-radius: 4px;\n  }\n  .sidebar-mini.sidebar-collapse .sidebar-menu > li:hover > a {\n    overflow: visible;\n  }\n  .sidebar-mini.sidebar-collapse .sidebar-menu > li:hover > a > span:not(.pull-right),\n  .sidebar-mini.sidebar-collapse .sidebar-menu > li:hover > .treeview-menu {\n    display: block!important;\n    position: absolute;\n    width: 180px;\n    left: 50px;\n  }\n  .sidebar-mini.sidebar-collapse .sidebar-menu > li:hover > a > span {\n    top: 0;\n    margin-left: -3px;\n    padding: 12px 5px 12px 20px;\n    background-color: inherit;\n  }\n  .sidebar-mini.sidebar-collapse .sidebar-menu > li:hover > .treeview-menu {\n    top: 44px;\n    margin-left: 0;\n  }\n  .sidebar-mini.sidebar-collapse .main-sidebar .user-panel > .info,\n  .sidebar-mini.sidebar-collapse .sidebar-form,\n  .sidebar-mini.sidebar-collapse .sidebar-menu > li > a > span,\n  .sidebar-mini.sidebar-collapse .sidebar-menu > li > .treeview-menu,\n  .sidebar-mini.sidebar-collapse .sidebar-menu > li > a > .pull-right,\n  .sidebar-mini.sidebar-collapse .sidebar-menu li.header {\n    display: none!important;\n  }\n  .sidebar-mini.sidebar-collapse .main-header .logo {\n    width: 50px;\n  }\n  .sidebar-mini.sidebar-collapse .main-header .logo > .logo-mini {\n    display: block;\n    margin-left: -15px;\n    margin-right: -15px;\n    font-size: 18px;\n  }\n  .sidebar-mini.sidebar-collapse .main-header .logo > .logo-lg {\n    display: none;\n  }\n  .sidebar-mini.sidebar-collapse .main-header .navbar {\n    margin-left: 50px;\n  }\n}\n.sidebar-menu li > a,\n.main-sidebar .user-panel,\n.sidebar-menu > li.header {\n  white-space: nowrap!important;\n  overflow: hidden;\n}\n.sidebar-form,\n.sidebar-menu > li.header {\n  overflow: hidden;\n  text-overflow: clip;\n}\n.sidebar-menu li > a {\n  position: relative;\n}\n.sidebar-menu li > a > .pull-right {\n  position: absolute;\n  top: 50%;\n  right: 10px;\n  margin-top: -7px;\n}\n/*\n * Component: Control sidebar. By deafult, this is the right sidebar.\n */\n.control-sidebar-bg {\n  position: fixed;\n  z-index: 900;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 230px;\n}\n.control-sidebar-bg,\n.control-sidebar {\n  -webkit-transform: translate(230px, 0);\n  -ms-transform: translate(230px, 0);\n  -o-transform: translate(230px, 0);\n  transform: translate(230px, 0);\n  -webkit-transition: -webkit-transform 0.3s ease-in-out;\n  -moz-transition: -moz-transform 0.3s ease-in-out;\n  -o-transition: -o-transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out;\n}\n.control-sidebar {\n  position: absolute;\n  top: 50px;\n  right: 0;\n  width: 230px;\n  z-index: 1010;\n}\n@media (max-width: 768px) {\n  .control-sidebar {\n    top: 100px;\n  }\n}\n.control-sidebar > .tab-content {\n  padding: 10px 15px;\n}\n.control-sidebar.control-sidebar-open,\n.control-sidebar.control-sidebar-open + .control-sidebar-bg {\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  -o-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n.control-sidebar-open .control-sidebar-bg,\n.control-sidebar-open .control-sidebar {\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  -o-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n@media (min-width: 768px) {\n  .control-sidebar-open .content-wrapper,\n  .control-sidebar-open .right-side,\n  .control-sidebar-open .main-footer {\n    margin-right: 230px;\n  }\n}\n.control-sidebar-tabs > li:first-of-type > a {\n  margin-left: 1px;\n}\n.control-sidebar-tabs > li:first-of-type > a,\n.control-sidebar-tabs > li:first-of-type > a:hover {\n  border-left-width: 0!important;\n}\n.control-sidebar-tabs > li > a {\n  border-radius: 0 !important;\n}\n.control-sidebar-tabs > li > a,\n.control-sidebar-tabs > li > a:hover {\n  border-top: none;\n  border-right: none;\n  border-left: 1px solid transparent!important;\n  border-bottom: 1px solid transparent!important;\n}\n.control-sidebar-tabs > li > a .icon {\n  font-size: 16px;\n}\n.control-sidebar-tabs > li.active > a,\n.control-sidebar-tabs > li.active > a:hover,\n.control-sidebar-tabs > li.active > a:focus,\n.control-sidebar-tabs > li.active > a:active {\n  border-top: none!important;\n  border-right: none!important;\n  border-bottom: none!important;\n}\n@media (max-width: 768px) {\n  .control-sidebar-tabs {\n    display: table;\n  }\n  .control-sidebar-tabs > li {\n    display: table-cell !important;\n  }\n}\n.control-sidebar-heading {\n  font-weight: 400;\n  font-size: 16px;\n  padding: 10px 0;\n  margin-bottom: 10px;\n}\n.control-sidebar-subheading {\n  display: block;\n  font-weight: 400;\n  font-size: 14px;\n}\n.control-sidebar-menu {\n  list-style: none;\n  padding: 0;\n  margin: 0 -15px;\n}\n.control-sidebar-menu > li > a {\n  display: block;\n  padding: 10px 15px;\n}\n.control-sidebar-menu > li > a:before,\n.control-sidebar-menu > li > a:after {\n  content: \" \";\n  display: table;\n}\n.control-sidebar-menu > li > a:after {\n  clear: both;\n}\n.control-sidebar-menu > li > a > .control-sidebar-subheading {\n  margin-top: 0;\n}\n.control-sidebar-menu .menu-icon {\n  float: left;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 35px;\n}\n.control-sidebar-menu .menu-info {\n  margin-left: 45px;\n  margin-top: 3px;\n}\n.control-sidebar-menu .menu-info > .control-sidebar-subheading {\n  margin: 0;\n}\n.control-sidebar-menu .menu-info > p {\n  margin: 0;\n  font-size: 11px;\n}\n.control-sidebar-menu .progress {\n  margin: 0;\n}\n.control-sidebar-dark {\n  color: #b8c7ce;\n}\n.control-sidebar-dark + .control-sidebar-bg {\n  background: #222d32;\n}\n.control-sidebar-dark .control-sidebar-tabs {\n  border-bottom: #1c2529;\n}\n.control-sidebar-dark .control-sidebar-tabs > li > a {\n  background: #181f23;\n  color: #b8c7ce;\n}\n.control-sidebar-dark .control-sidebar-tabs > li > a,\n.control-sidebar-dark .control-sidebar-tabs > li > a:hover {\n  border-left-color: #141a1d !important;\n  border-bottom-color: #141a1d !important;\n}\n.control-sidebar-dark .control-sidebar-tabs > li > a:hover,\n.control-sidebar-dark .control-sidebar-tabs > li > a:focus,\n.control-sidebar-dark .control-sidebar-tabs > li > a:active {\n  background: #1c2529;\n}\n.control-sidebar-dark .control-sidebar-tabs > li.active > a,\n.control-sidebar-dark .control-sidebar-tabs > li.active > a:hover,\n.control-sidebar-dark .control-sidebar-tabs > li.active > a:focus,\n.control-sidebar-dark .control-sidebar-tabs > li.active > a:active {\n  background: #222d32;\n  color: #fff;\n}\n.control-sidebar-dark .control-sidebar-heading,\n.control-sidebar-dark .control-sidebar-subheading {\n  color: #fff;\n}\n.control-sidebar-dark .control-sidebar-menu > li > a:hover {\n  background: #1e282c;\n}\n.control-sidebar-dark .control-sidebar-menu > li > a .menu-info > p {\n  color: #b8c7ce;\n}\n.control-sidebar-light {\n  color: #5e5e5e;\n}\n.control-sidebar-light + .control-sidebar-bg {\n  background: #f9fafc;\n  border-left: 1px solid #d2d6de;\n}\n.control-sidebar-light .control-sidebar-tabs {\n  border-bottom: #d2d6de;\n}\n.control-sidebar-light .control-sidebar-tabs > li > a {\n  background: #e8ecf4;\n  color: #444444;\n}\n.control-sidebar-light .control-sidebar-tabs > li > a,\n.control-sidebar-light .control-sidebar-tabs > li > a:hover {\n  border-left-color: #d2d6de !important;\n  border-bottom-color: #d2d6de !important;\n}\n.control-sidebar-light .control-sidebar-tabs > li > a:hover,\n.control-sidebar-light .control-sidebar-tabs > li > a:focus,\n.control-sidebar-light .control-sidebar-tabs > li > a:active {\n  background: #eff1f7;\n}\n.control-sidebar-light .control-sidebar-tabs > li.active > a,\n.control-sidebar-light .control-sidebar-tabs > li.active > a:hover,\n.control-sidebar-light .control-sidebar-tabs > li.active > a:focus,\n.control-sidebar-light .control-sidebar-tabs > li.active > a:active {\n  background: #f9fafc;\n  color: #111;\n}\n.control-sidebar-light .control-sidebar-heading,\n.control-sidebar-light .control-sidebar-subheading {\n  color: #111;\n}\n.control-sidebar-light .control-sidebar-menu {\n  margin-left: -14px;\n}\n.control-sidebar-light .control-sidebar-menu > li > a:hover {\n  background: #f4f4f5;\n}\n.control-sidebar-light .control-sidebar-menu > li > a .menu-info > p {\n  color: #5e5e5e;\n}\n/*\n * Component: Dropdown menus\n * -------------------------\n */\n/*Dropdowns in general*/\n.dropdown-menu {\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  border-color: #eee;\n}\n.dropdown-menu > li > a {\n  color: #777;\n}\n.dropdown-menu > li > a > .glyphicon,\n.dropdown-menu > li > a > .fa,\n.dropdown-menu > li > a > .ion {\n  margin-right: 10px;\n}\n.dropdown-menu > li > a:hover {\n  background-color: #e1e3e9;\n  color: #333;\n}\n.dropdown-menu > .divider {\n  background-color: #eee;\n}\n/*\n    Navbar custom dropdown menu\n------------------------------------\n*/\n.navbar-nav > .notifications-menu,\n.navbar-nav > .messages-menu,\n.navbar-nav > .tasks-menu {\n  position: relative;\n}\n.navbar-nav > .notifications-menu > .dropdown-menu,\n.navbar-nav > .messages-menu > .dropdown-menu,\n.navbar-nav > .tasks-menu > .dropdown-menu {\n  width: 280px;\n  padding: 0 0 0 0!important;\n  margin: 0!important;\n  top: 100%;\n}\n.navbar-nav > .notifications-menu > .dropdown-menu > li,\n.navbar-nav > .messages-menu > .dropdown-menu > li,\n.navbar-nav > .tasks-menu > .dropdown-menu > li {\n  position: relative;\n}\n.navbar-nav > .notifications-menu > .dropdown-menu > li.header,\n.navbar-nav > .messages-menu > .dropdown-menu > li.header,\n.navbar-nav > .tasks-menu > .dropdown-menu > li.header {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  background-color: #ffffff;\n  padding: 7px 10px;\n  border-bottom: 1px solid #f4f4f4;\n  color: #444444;\n  font-size: 14px;\n}\n.navbar-nav > .notifications-menu > .dropdown-menu > li.footer > a,\n.navbar-nav > .messages-menu > .dropdown-menu > li.footer > a,\n.navbar-nav > .tasks-menu > .dropdown-menu > li.footer > a {\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  font-size: 12px;\n  background-color: #fff;\n  padding: 7px 10px;\n  border-bottom: 1px solid #eeeeee;\n  color: #444!important;\n  text-align: center;\n}\n@media (max-width: 991px) {\n  .navbar-nav > .notifications-menu > .dropdown-menu > li.footer > a,\n  .navbar-nav > .messages-menu > .dropdown-menu > li.footer > a,\n  .navbar-nav > .tasks-menu > .dropdown-menu > li.footer > a {\n    background: #fff!important;\n    color: #444!important;\n  }\n}\n.navbar-nav > .notifications-menu > .dropdown-menu > li.footer > a:hover,\n.navbar-nav > .messages-menu > .dropdown-menu > li.footer > a:hover,\n.navbar-nav > .tasks-menu > .dropdown-menu > li.footer > a:hover {\n  text-decoration: none;\n  font-weight: normal;\n}\n.navbar-nav > .notifications-menu > .dropdown-menu > li .menu,\n.navbar-nav > .messages-menu > .dropdown-menu > li .menu,\n.navbar-nav > .tasks-menu > .dropdown-menu > li .menu {\n  max-height: 200px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  overflow-x: hidden;\n}\n.navbar-nav > .notifications-menu > .dropdown-menu > li .menu > li > a,\n.navbar-nav > .messages-menu > .dropdown-menu > li .menu > li > a,\n.navbar-nav > .tasks-menu > .dropdown-menu > li .menu > li > a {\n  display: block;\n  white-space: nowrap;\n  /* Prevent text from breaking */\n  border-bottom: 1px solid #f4f4f4;\n}\n.navbar-nav > .notifications-menu > .dropdown-menu > li .menu > li > a:hover,\n.navbar-nav > .messages-menu > .dropdown-menu > li .menu > li > a:hover,\n.navbar-nav > .tasks-menu > .dropdown-menu > li .menu > li > a:hover {\n  background: #f4f4f4;\n  text-decoration: none;\n}\n.navbar-nav > .notifications-menu > .dropdown-menu > li .menu > li > a {\n  color: #444444;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 10px;\n}\n.navbar-nav > .notifications-menu > .dropdown-menu > li .menu > li > a > .glyphicon,\n.navbar-nav > .notifications-menu > .dropdown-menu > li .menu > li > a > .fa,\n.navbar-nav > .notifications-menu > .dropdown-menu > li .menu > li > a > .ion {\n  width: 20px;\n}\n.navbar-nav > .messages-menu > .dropdown-menu > li .menu > li > a {\n  margin: 0px;\n  padding: 10px 10px;\n}\n.navbar-nav > .messages-menu > .dropdown-menu > li .menu > li > a > div > img {\n  margin: auto 10px auto auto;\n  width: 40px;\n  height: 40px;\n}\n.navbar-nav > .messages-menu > .dropdown-menu > li .menu > li > a > h4 {\n  padding: 0;\n  margin: 0 0 0 45px;\n  color: #444444;\n  font-size: 15px;\n  position: relative;\n}\n.navbar-nav > .messages-menu > .dropdown-menu > li .menu > li > a > h4 > small {\n  color: #999999;\n  font-size: 10px;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n.navbar-nav > .messages-menu > .dropdown-menu > li .menu > li > a > p {\n  margin: 0 0 0 45px;\n  font-size: 12px;\n  color: #888888;\n}\n.navbar-nav > .messages-menu > .dropdown-menu > li .menu > li > a:before,\n.navbar-nav > .messages-menu > .dropdown-menu > li .menu > li > a:after {\n  content: \" \";\n  display: table;\n}\n.navbar-nav > .messages-menu > .dropdown-menu > li .menu > li > a:after {\n  clear: both;\n}\n.navbar-nav > .tasks-menu > .dropdown-menu > li .menu > li > a {\n  padding: 10px;\n}\n.navbar-nav > .tasks-menu > .dropdown-menu > li .menu > li > a > h3 {\n  font-size: 14px;\n  padding: 0;\n  margin: 0 0 10px 0;\n  color: #666666;\n}\n.navbar-nav > .tasks-menu > .dropdown-menu > li .menu > li > a > .progress {\n  padding: 0;\n  margin: 0;\n}\n.navbar-nav > .user-menu > .dropdown-menu {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  padding: 1px 0 0 0;\n  border-top-width: 0;\n  width: 280px;\n}\n.navbar-nav > .user-menu > .dropdown-menu,\n.navbar-nav > .user-menu > .dropdown-menu > .user-body {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.navbar-nav > .user-menu > .dropdown-menu > li.user-header {\n  height: 175px;\n  padding: 10px;\n  text-align: center;\n}\n.navbar-nav > .user-menu > .dropdown-menu > li.user-header > img {\n  z-index: 5;\n  height: 90px;\n  width: 90px;\n  border: 3px solid;\n  border-color: transparent;\n  border-color: rgba(255, 255, 255, 0.2);\n}\n.navbar-nav > .user-menu > .dropdown-menu > li.user-header > p {\n  z-index: 5;\n  color: #fff;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 17px;\n  margin-top: 10px;\n}\n.navbar-nav > .user-menu > .dropdown-menu > li.user-header > p > small {\n  display: block;\n  font-size: 12px;\n}\n.navbar-nav > .user-menu > .dropdown-menu > .user-body {\n  padding: 15px;\n  border-bottom: 1px solid #f4f4f4;\n  border-top: 1px solid #dddddd;\n}\n.navbar-nav > .user-menu > .dropdown-menu > .user-body:before,\n.navbar-nav > .user-menu > .dropdown-menu > .user-body:after {\n  content: \" \";\n  display: table;\n}\n.navbar-nav > .user-menu > .dropdown-menu > .user-body:after {\n  clear: both;\n}\n.navbar-nav > .user-menu > .dropdown-menu > .user-body a {\n  color: #444 !important;\n}\n@media (max-width: 991px) {\n  .navbar-nav > .user-menu > .dropdown-menu > .user-body a {\n    background: #fff !important;\n    color: #444 !important;\n  }\n}\n.navbar-nav > .user-menu > .dropdown-menu > .user-footer {\n  background-color: #f9f9f9;\n  padding: 10px;\n}\n.navbar-nav > .user-menu > .dropdown-menu > .user-footer:before,\n.navbar-nav > .user-menu > .dropdown-menu > .user-footer:after {\n  content: \" \";\n  display: table;\n}\n.navbar-nav > .user-menu > .dropdown-menu > .user-footer:after {\n  clear: both;\n}\n.navbar-nav > .user-menu > .dropdown-menu > .user-footer .btn-default {\n  color: #666666;\n}\n.navbar-nav > .user-menu .user-image {\n  float: left;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  margin-right: 10px;\n  margin-top: -2px;\n}\n@media (max-width: 767px) {\n  .navbar-nav > .user-menu .user-image {\n    float: none;\n    margin-right: 0;\n    margin-top: -8px;\n    line-height: 10px;\n  }\n}\n/* Add fade animation to dropdown menus by appending\n the class .animated-dropdown-menu to the .dropdown-menu ul (or ol)*/\n.open:not(.dropup) > .animated-dropdown-menu {\n  backface-visibility: visible !important;\n  -webkit-animation: flipInX 0.7s both;\n  -o-animation: flipInX 0.7s both;\n  animation: flipInX 0.7s both;\n}\n@keyframes flipInX {\n  0% {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transition-timing-function: ease-in;\n    opacity: 0;\n  }\n  40% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transition-timing-function: ease-in;\n  }\n  60% {\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n  80% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n  100% {\n    transform: perspective(400px);\n  }\n}\n@-webkit-keyframes flipInX {\n  0% {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transition-timing-function: ease-in;\n    opacity: 0;\n  }\n  40% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transition-timing-function: ease-in;\n  }\n  60% {\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n  80% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n  100% {\n    transform: perspective(400px);\n  }\n}\n/* Fix dropdown menu in navbars */\n.navbar-custom-menu > .navbar-nav > li {\n  position: relative;\n}\n.navbar-custom-menu > .navbar-nav > li > .dropdown-menu {\n  position: absolute;\n  right: 0;\n  left: auto;\n}\n@media (max-width: 991px) {\n  .navbar-custom-menu > .navbar-nav {\n    float: right;\n  }\n  .navbar-custom-menu > .navbar-nav > li {\n    position: static;\n  }\n  .navbar-custom-menu > .navbar-nav > li > .dropdown-menu {\n    position: absolute;\n    right: 5%;\n    left: auto;\n    border: 1px solid #ddd;\n    background: #fff;\n  }\n}\n/*\n * Component: Form\n * ---------------\n */\n.form-control {\n  border-radius: 0px !important;\n  box-shadow: none;\n  border-color: #d2d6de;\n}\n.form-control:focus {\n  border-color: #3c8dbc !important;\n  box-shadow: none;\n}\n.form-control::-moz-placeholder {\n  color: #bbb;\n  opacity: 1;\n}\n.form-control:-ms-input-placeholder {\n  color: #bbb;\n}\n.form-control::-webkit-input-placeholder {\n  color: #bbb;\n}\n.form-control:not(select) {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.form-group.has-success label {\n  color: #00a65a;\n}\n.form-group.has-success .form-control {\n  border-color: #00a65a !important;\n  box-shadow: none;\n}\n.form-group.has-warning label {\n  color: #f39c12;\n}\n.form-group.has-warning .form-control {\n  border-color: #f39c12 !important;\n  box-shadow: none;\n}\n.form-group.has-error label {\n  color: #dd4b39;\n}\n.form-group.has-error .form-control {\n  border-color: #dd4b39 !important;\n  box-shadow: none;\n}\n/* Input group */\n.input-group .input-group-addon {\n  border-radius: 0px;\n  border-color: #d2d6de;\n  background-color: #fff;\n}\n/* button groups */\n.btn-group-vertical .btn.btn-flat:first-of-type,\n.btn-group-vertical .btn.btn-flat:last-of-type {\n  border-radius: 0;\n}\n.icheck > label {\n  padding-left: 0;\n}\n/*\n * Component: Progress Bar\n * -----------------------\n */\n.progress,\n.progress > .progress-bar {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.progress,\n.progress > .progress-bar,\n.progress .progress-bar,\n.progress > .progress-bar .progress-bar {\n  border-radius: 1px;\n}\n/* size variation */\n.progress.sm,\n.progress-sm {\n  height: 10px;\n}\n.progress.sm,\n.progress-sm,\n.progress.sm .progress-bar,\n.progress-sm .progress-bar {\n  border-radius: 1px;\n}\n.progress.xs,\n.progress-xs {\n  height: 7px;\n}\n.progress.xs,\n.progress-xs,\n.progress.xs .progress-bar,\n.progress-xs .progress-bar {\n  border-radius: 1px;\n}\n.progress.xxs,\n.progress-xxs {\n  height: 3px;\n}\n.progress.xxs,\n.progress-xxs,\n.progress.xxs .progress-bar,\n.progress-xxs .progress-bar {\n  border-radius: 1px;\n}\n/* Vertical bars */\n.progress.vertical {\n  position: relative;\n  width: 30px;\n  height: 200px;\n  display: inline-block;\n  margin-right: 10px;\n}\n.progress.vertical > .progress-bar {\n  width: 100%!important;\n  position: absolute;\n  bottom: 0;\n}\n.progress.vertical.sm,\n.progress.vertical.progress-sm {\n  width: 20px;\n}\n.progress.vertical.xs,\n.progress.vertical.progress-xs {\n  width: 10px;\n}\n.progress.vertical.xxs,\n.progress.vertical.progress-xxs {\n  width: 3px;\n}\n.progress-group .progress-text {\n  font-weight: 600;\n}\n.progress-group .progress-number {\n  float: right;\n}\n/* Remove margins from progress bars when put in a table */\n.table tr > td .progress {\n  margin: 0;\n}\n.progress-bar-light-blue,\n.progress-bar-primary {\n  background-color: #3c8dbc;\n}\n.progress-striped .progress-bar-light-blue,\n.progress-striped .progress-bar-primary {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.progress-bar-green,\n.progress-bar-success {\n  background-color: #00a65a;\n}\n.progress-striped .progress-bar-green,\n.progress-striped .progress-bar-success {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.progress-bar-aqua,\n.progress-bar-info {\n  background-color: #00c0ef;\n}\n.progress-striped .progress-bar-aqua,\n.progress-striped .progress-bar-info {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.progress-bar-yellow,\n.progress-bar-warning {\n  background-color: #f39c12;\n}\n.progress-striped .progress-bar-yellow,\n.progress-striped .progress-bar-warning {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.progress-bar-red,\n.progress-bar-danger {\n  background-color: #dd4b39;\n}\n.progress-striped .progress-bar-red,\n.progress-striped .progress-bar-danger {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n/*\n * Component: Small Box\n * --------------------\n */\n.small-box {\n  border-radius: 2px;\n  position: relative;\n  display: block;\n  margin-bottom: 20px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n}\n.small-box > .inner {\n  padding: 10px;\n}\n.small-box > .small-box-footer {\n  position: relative;\n  text-align: center;\n  padding: 3px 0;\n  color: #fff;\n  color: rgba(255, 255, 255, 0.8);\n  display: block;\n  z-index: 10;\n  background: rgba(0, 0, 0, 0.1);\n  text-decoration: none;\n}\n.small-box > .small-box-footer:hover {\n  color: #fff;\n  background: rgba(0, 0, 0, 0.15);\n}\n.small-box h3 {\n  font-size: 38px;\n  font-weight: bold;\n  margin: 0 0 10px 0;\n  white-space: nowrap;\n  padding: 0;\n}\n.small-box p {\n  font-size: 15px;\n}\n.small-box p > small {\n  display: block;\n  color: #f9f9f9;\n  font-size: 13px;\n  margin-top: 5px;\n}\n.small-box h3,\n.small-box p {\n  z-index: 5px;\n}\n.small-box .icon {\n  -webkit-transition: all 0.3s linear;\n  -o-transition: all 0.3s linear;\n  transition: all 0.3s linear;\n  position: absolute;\n  top: -10px;\n  right: 10px;\n  z-index: 0;\n  font-size: 90px;\n  color: rgba(0, 0, 0, 0.15);\n}\n.small-box:hover {\n  text-decoration: none;\n  color: #f9f9f9;\n}\n.small-box:hover .icon {\n  font-size: 95px;\n}\n@media (max-width: 767px) {\n  .small-box {\n    text-align: center;\n  }\n  .small-box .icon {\n    display: none;\n  }\n  .small-box p {\n    font-size: 12px;\n  }\n}\n/*\n * Component: Box\n * --------------\n */\n.box {\n  position: relative;\n  border-radius: 3px;\n  background: #ffffff;\n  border-top: 3px solid #d2d6de;\n  margin-bottom: 20px;\n  width: 100%;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n}\n.box.box-primary {\n  border-top-color: #3c8dbc;\n}\n.box.box-info {\n  border-top-color: #00c0ef;\n}\n.box.box-danger {\n  border-top-color: #dd4b39;\n}\n.box.box-warning {\n  border-top-color: #f39c12;\n}\n.box.box-success {\n  border-top-color: #00a65a;\n}\n.box.box-default {\n  border-top-color: #d2d6de;\n}\n.box.collapsed-box .box-body,\n.box.collapsed-box .box-footer {\n  display: none;\n}\n.box .nav-stacked > li {\n  border-bottom: 1px solid #f4f4f4;\n  margin: 0;\n}\n.box .nav-stacked > li:last-of-type {\n  border-bottom: none;\n}\n.box.height-control .box-body {\n  max-height: 300px;\n  overflow: auto;\n}\n.box .border-right {\n  border-right: 1px solid #f4f4f4;\n}\n.box .border-left {\n  border-left: 1px solid #f4f4f4;\n}\n.box.box-solid {\n  border-top: 0px;\n}\n.box.box-solid > .box-header .btn.btn-default {\n  background: transparent;\n}\n.box.box-solid > .box-header .btn:hover,\n.box.box-solid > .box-header a:hover {\n  background: rgba(0, 0, 0, 0.1) !important;\n}\n.box.box-solid.box-default {\n  border: 1px solid #d2d6de;\n}\n.box.box-solid.box-default > .box-header {\n  color: #444444;\n  background: #d2d6de;\n  background-color: #d2d6de;\n}\n.box.box-solid.box-default > .box-header a,\n.box.box-solid.box-default > .box-header .btn {\n  color: #444444;\n}\n.box.box-solid.box-primary {\n  border: 1px solid #3c8dbc;\n}\n.box.box-solid.box-primary > .box-header {\n  color: #ffffff;\n  background: #3c8dbc;\n  background-color: #3c8dbc;\n}\n.box.box-solid.box-primary > .box-header a,\n.box.box-solid.box-primary > .box-header .btn {\n  color: #ffffff;\n}\n.box.box-solid.box-info {\n  border: 1px solid #00c0ef;\n}\n.box.box-solid.box-info > .box-header {\n  color: #ffffff;\n  background: #00c0ef;\n  background-color: #00c0ef;\n}\n.box.box-solid.box-info > .box-header a,\n.box.box-solid.box-info > .box-header .btn {\n  color: #ffffff;\n}\n.box.box-solid.box-danger {\n  border: 1px solid #dd4b39;\n}\n.box.box-solid.box-danger > .box-header {\n  color: #ffffff;\n  background: #dd4b39;\n  background-color: #dd4b39;\n}\n.box.box-solid.box-danger > .box-header a,\n.box.box-solid.box-danger > .box-header .btn {\n  color: #ffffff;\n}\n.box.box-solid.box-warning {\n  border: 1px solid #f39c12;\n}\n.box.box-solid.box-warning > .box-header {\n  color: #ffffff;\n  background: #f39c12;\n  background-color: #f39c12;\n}\n.box.box-solid.box-warning > .box-header a,\n.box.box-solid.box-warning > .box-header .btn {\n  color: #ffffff;\n}\n.box.box-solid.box-success {\n  border: 1px solid #00a65a;\n}\n.box.box-solid.box-success > .box-header {\n  color: #ffffff;\n  background: #00a65a;\n  background-color: #00a65a;\n}\n.box.box-solid.box-success > .box-header a,\n.box.box-solid.box-success > .box-header .btn {\n  color: #ffffff;\n}\n.box.box-solid > .box-header > .box-tools .btn {\n  border: 0;\n  box-shadow: none;\n}\n.box.box-solid[class*='bg'] > .box-header {\n  color: #fff;\n}\n.box .box-group > .box {\n  margin-bottom: 5px;\n}\n.box .knob-label {\n  text-align: center;\n  color: #333;\n  font-weight: 100;\n  font-size: 12px;\n  margin-bottom: 0.3em;\n}\n.box > .overlay,\n.box > .loading-img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.box .overlay {\n  z-index: 50;\n  background: rgba(255, 255, 255, 0.7);\n  border-radius: 3px;\n}\n.box .overlay > .fa {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -15px;\n  margin-top: -15px;\n  color: #000;\n  font-size: 30px;\n}\n.box .overlay.dark {\n  background: rgba(0, 0, 0, 0.5);\n}\n.box-header:before,\n.box-body:before,\n.box-footer:before,\n.box-header:after,\n.box-body:after,\n.box-footer:after {\n  content: \" \";\n  display: table;\n}\n.box-header:after,\n.box-body:after,\n.box-footer:after {\n  clear: both;\n}\n.box-header {\n  color: #444;\n  display: block;\n  padding: 10px;\n  position: relative;\n}\n.box-header.with-border {\n  border-bottom: 1px solid #f4f4f4;\n}\n.collapsed-box .box-header.with-border {\n  border-bottom: none;\n}\n.box-header > .fa,\n.box-header > .glyphicon,\n.box-header > .ion,\n.box-header .box-title {\n  display: inline-block;\n  font-size: 18px;\n  margin: 0;\n  line-height: 1;\n}\n.box-header > .fa,\n.box-header > .glyphicon,\n.box-header > .ion {\n  margin-right: 5px;\n}\n.box-header > .box-tools {\n  position: absolute;\n  right: 10px;\n  top: 5px;\n}\n.box-header > .box-tools [data-toggle=\"tooltip\"] {\n  position: relative;\n}\n.box-header > .box-tools.pull-right .dropdown-menu {\n  right: 0;\n  left: auto;\n}\n.btn-box-tool {\n  padding: 5px;\n  font-size: 12px;\n  background: transparent;\n  box-shadow: none!important;\n  color: #97a0b3;\n}\n.open .btn-box-tool,\n.btn-box-tool:hover {\n  color: #606c84;\n}\n.btn-box-tool:active {\n  outline: none!important;\n}\n.box-body {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  padding: 10px;\n}\n.no-header .box-body {\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n.box-body > .table {\n  margin-bottom: 0;\n}\n.box-body .fc {\n  margin-top: 5px;\n}\n.box-body .full-width-chart {\n  margin: -19px;\n}\n.box-body.no-padding .full-width-chart {\n  margin: -9px;\n}\n.box-body .box-pane {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 3px;\n}\n.box-body .box-pane-right {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 0;\n}\n.box-footer {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  border-top: 1px solid #f4f4f4;\n  padding: 10px;\n  background-color: #ffffff;\n}\n.chart-legend {\n  margin: 10px 0;\n}\n@media (max-width: 991px) {\n  .chart-legend > li {\n    float: left;\n    margin-right: 10px;\n  }\n}\n/* Widget: TODO LIST */\n.todo-list {\n  margin: 0;\n  padding: 0px 0px;\n  list-style: none;\n  overflow: auto;\n}\n.todo-list > li {\n  border-radius: 2px;\n  padding: 10px;\n  background: #f4f4f4;\n  margin-bottom: 2px;\n  border-left: 2px solid #e6e7e8;\n  color: #444;\n}\n.todo-list > li:last-of-type {\n  margin-bottom: 0;\n}\n.todo-list > li.danger {\n  border-left-color: #dd4b39;\n}\n.todo-list > li.warning {\n  border-left-color: #f39c12;\n}\n.todo-list > li.info {\n  border-left-color: #00c0ef;\n}\n.todo-list > li.success {\n  border-left-color: #00a65a;\n}\n.todo-list > li.primary {\n  border-left-color: #3c8dbc;\n}\n.todo-list > li > input[type='checkbox'] {\n  margin: 0 10px 0 5px;\n}\n.todo-list > li .text {\n  display: inline-block;\n  margin-left: 5px;\n  font-weight: 600;\n}\n.todo-list > li .label {\n  margin-left: 10px;\n  font-size: 9px;\n}\n.todo-list > li .tools {\n  display: none;\n  float: right;\n  color: #dd4b39;\n}\n.todo-list > li .tools > .fa,\n.todo-list > li .tools > .glyphicon,\n.todo-list > li .tools > .ion {\n  margin-right: 5px;\n  cursor: pointer;\n}\n.todo-list > li:hover .tools {\n  display: inline-block;\n}\n.todo-list > li.done {\n  color: #999;\n}\n.todo-list > li.done .text {\n  text-decoration: line-through;\n  font-weight: 500;\n}\n.todo-list > li.done .label {\n  background: #d2d6de !important;\n}\n.todo-list .handle {\n  display: inline-block;\n  cursor: move;\n  margin: 0 5px;\n}\n/* Chat widget (DEPRECATED - this will be removed in the next major release. Use Direct Chat instead)*/\n.chat {\n  padding: 5px 20px 5px 10px;\n}\n.chat .item {\n  margin-bottom: 10px;\n}\n.chat .item:before,\n.chat .item:after {\n  content: \" \";\n  display: table;\n}\n.chat .item:after {\n  clear: both;\n}\n.chat .item > img {\n  width: 40px;\n  height: 40px;\n  border: 2px solid transparent;\n  border-radius: 50% !important;\n}\n.chat .item > img.online {\n  border: 2px solid #00a65a;\n}\n.chat .item > img.offline {\n  border: 2px solid #dd4b39;\n}\n.chat .item > .message {\n  margin-left: 55px;\n  margin-top: -40px;\n}\n.chat .item > .message > .name {\n  display: block;\n  font-weight: 600;\n}\n.chat .item > .attachment {\n  border-radius: 3px;\n  background: #f4f4f4;\n  margin-left: 65px;\n  margin-right: 15px;\n  padding: 10px;\n}\n.chat .item > .attachment > h4 {\n  margin: 0 0 5px 0;\n  font-weight: 600;\n  font-size: 14px;\n}\n.chat .item > .attachment > p,\n.chat .item > .attachment > .filename {\n  font-weight: 600;\n  font-size: 13px;\n  font-style: italic;\n  margin: 0;\n}\n.chat .item > .attachment:before,\n.chat .item > .attachment:after {\n  content: \" \";\n  display: table;\n}\n.chat .item > .attachment:after {\n  clear: both;\n}\n.box-input {\n  max-width: 200px;\n}\n/*\n * Component: Info Box\n * -------------------\n */\n.info-box {\n  display: block;\n  min-height: 90px;\n  background: #fff;\n  width: 100%;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  margin-bottom: 15px;\n}\n.info-box small {\n  font-size: 14px;\n}\n.info-box .progress {\n  background: rgba(0, 0, 0, 0.2);\n  margin: 5px -10px 5px -10px;\n  height: 2px;\n}\n.info-box .progress,\n.info-box .progress .progress-bar {\n  border-radius: 0;\n}\n.info-box .progress .progress-bar {\n  background: #fff;\n}\n.info-box-icon {\n  border-top-left-radius: 2px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 2px;\n  display: block;\n  float: left;\n  height: 90px;\n  width: 90px;\n  text-align: center;\n  font-size: 45px;\n  line-height: 90px;\n  background: rgba(0, 0, 0, 0.2);\n}\n.info-box-content {\n  padding: 5px 10px;\n  margin-left: 90px;\n}\n.info-box-number {\n  display: block;\n  font-weight: bold;\n  font-size: 18px;\n}\n.progress-description,\n.info-box-text {\n  display: block;\n  font-size: 14px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.info-box-text {\n  text-transform: uppercase;\n}\n.info-box-more {\n  display: block;\n}\n.progress-description {\n  margin: 0;\n}\n/*\n * Component: Timeline\n * -------------------\n */\n.timeline {\n  position: relative;\n  margin: 0 0 30px 0;\n  padding: 0;\n  list-style: none;\n}\n.timeline:before {\n  content: '';\n  position: absolute;\n  top: 0px;\n  bottom: 0;\n  width: 4px;\n  background: #ddd;\n  left: 31px;\n  margin: 0;\n  border-radius: 2px;\n}\n.timeline > li {\n  position: relative;\n  margin-right: 10px;\n  margin-bottom: 15px;\n}\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table;\n}\n.timeline > li:after {\n  clear: both;\n}\n.timeline > li > .timeline-item {\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n  margin-top: 0px;\n  background: #fff;\n  color: #444;\n  margin-left: 60px;\n  margin-right: 15px;\n  padding: 0;\n  position: relative;\n}\n.timeline > li > .timeline-item > .time {\n  color: #999;\n  float: right;\n  padding: 10px;\n  font-size: 12px;\n}\n.timeline > li > .timeline-item > .timeline-header {\n  margin: 0;\n  color: #555;\n  border-bottom: 1px solid #f4f4f4;\n  padding: 10px;\n  font-size: 16px;\n  line-height: 1.1;\n}\n.timeline > li > .timeline-item > .timeline-header > a {\n  font-weight: 600;\n}\n.timeline > li > .timeline-item > .timeline-body,\n.timeline > li > .timeline-item > .timeline-footer {\n  padding: 10px;\n}\n.timeline > li.time-label > span {\n  font-weight: 600;\n  padding: 5px;\n  display: inline-block;\n  background-color: #fff;\n  border-radius: 4px;\n}\n.timeline > li > .fa,\n.timeline > li > .glyphicon,\n.timeline > li > .ion {\n  width: 30px;\n  height: 30px;\n  font-size: 15px;\n  line-height: 30px;\n  position: absolute;\n  color: #666;\n  background: #d2d6de;\n  border-radius: 50%;\n  text-align: center;\n  left: 18px;\n  top: 0;\n}\n/*\n * Component: Button\n * -----------------\n */\n.btn {\n  border-radius: 3px;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  border: 1px solid transparent;\n}\n.btn.uppercase {\n  text-transform: uppercase;\n}\n.btn.btn-flat {\n  border-radius: 0;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  box-shadow: none;\n  border-width: 1px;\n}\n.btn:active {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  -moz-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.btn:focus {\n  outline: none;\n}\n.btn.btn-file {\n  position: relative;\n  overflow: hidden;\n}\n.btn.btn-file > input[type='file'] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  min-width: 100%;\n  min-height: 100%;\n  font-size: 100px;\n  text-align: right;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  outline: none;\n  background: white;\n  cursor: inherit;\n  display: block;\n}\n.btn-default {\n  background-color: #f4f4f4;\n  color: #444;\n  border-color: #ddd;\n}\n.btn-default:hover,\n.btn-default:active,\n.btn-default.hover {\n  background-color: #e7e7e7 !important;\n}\n.btn-primary {\n  background-color: #3c8dbc;\n  border-color: #367fa9;\n}\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary.hover {\n  background-color: #367fa9;\n}\n.btn-success {\n  background-color: #00a65a;\n  border-color: #008d4c;\n}\n.btn-success:hover,\n.btn-success:active,\n.btn-success.hover {\n  background-color: #008d4c;\n}\n.btn-info {\n  background-color: #00c0ef;\n  border-color: #00acd6;\n}\n.btn-info:hover,\n.btn-info:active,\n.btn-info.hover {\n  background-color: #00acd6;\n}\n.btn-danger {\n  background-color: #dd4b39;\n  border-color: #d73925;\n}\n.btn-danger:hover,\n.btn-danger:active,\n.btn-danger.hover {\n  background-color: #d73925;\n}\n.btn-warning {\n  background-color: #f39c12;\n  border-color: #e08e0b;\n}\n.btn-warning:hover,\n.btn-warning:active,\n.btn-warning.hover {\n  background-color: #e08e0b;\n}\n.btn-outline {\n  border: 1px solid #fff;\n  background: transparent;\n  color: #fff;\n}\n.btn-outline:hover,\n.btn-outline:focus,\n.btn-outline:active {\n  color: rgba(255, 255, 255, 0.7);\n  border-color: rgba(255, 255, 255, 0.7);\n}\n.btn-link {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.btn[class*='bg-']:hover {\n  -webkit-box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.2);\n  box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.2);\n}\n.btn-app {\n  border-radius: 3px;\n  position: relative;\n  padding: 15px 5px;\n  margin: 0 0 10px 10px;\n  min-width: 80px;\n  height: 60px;\n  text-align: center;\n  color: #666;\n  border: 1px solid #ddd;\n  background-color: #f4f4f4;\n  font-size: 12px;\n}\n.btn-app > .fa,\n.btn-app > .glyphicon,\n.btn-app > .ion {\n  font-size: 20px;\n  display: block;\n}\n.btn-app:hover {\n  background: #f4f4f4;\n  color: #444;\n  border-color: #aaa;\n}\n.btn-app:active,\n.btn-app:focus {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  -moz-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.btn-app > .badge {\n  position: absolute;\n  top: -3px;\n  right: -10px;\n  font-size: 10px;\n  font-weight: 400;\n}\n/*\n * Component: Callout\n * ------------------\n */\n.callout {\n  border-radius: 3px;\n  margin: 0 0 20px 0;\n  padding: 15px 30px 15px 15px;\n  border-left: 5px solid #eee;\n}\n.callout a {\n  color: #fff;\n  text-decoration: underline;\n}\n.callout a:hover {\n  color: #eee;\n}\n.callout h4 {\n  margin-top: 0;\n  font-weight: 600;\n}\n.callout p:last-child {\n  margin-bottom: 0;\n}\n.callout code,\n.callout .highlight {\n  background-color: #fff;\n}\n.callout.callout-danger {\n  border-color: #c23321;\n}\n.callout.callout-warning {\n  border-color: #c87f0a;\n}\n.callout.callout-info {\n  border-color: #0097bc;\n}\n.callout.callout-success {\n  border-color: #00733e;\n}\n/*\n * Component: alert\n * ----------------\n */\n.alert {\n  border-radius: 3px;\n}\n.alert h4 {\n  font-weight: 600;\n}\n.alert .icon {\n  margin-right: 10px;\n}\n.alert .close {\n  color: #000;\n  opacity: 0.2;\n  filter: alpha(opacity=20);\n}\n.alert .close:hover {\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n}\n.alert a {\n  color: #fff;\n  text-decoration: underline;\n}\n.alert-success {\n  border-color: #008d4c;\n}\n.alert-danger,\n.alert-error {\n  border-color: #d73925;\n}\n.alert-warning {\n  border-color: #e08e0b;\n}\n.alert-info {\n  border-color: #00acd6;\n}\n/*\n * Component: Nav\n * --------------\n */\n/* NAV PILLS */\n.nav-pills > li > a {\n  border-radius: 0;\n  border-top: 3px solid transparent;\n  color: #444;\n}\n.nav-pills > li > a > .fa,\n.nav-pills > li > a > .glyphicon,\n.nav-pills > li > a > .ion {\n  margin-right: 5px;\n}\n.nav-pills > li.active > a,\n.nav-pills > li.active > a:hover,\n.nav-pills > li.active > a:focus {\n  background-color: #f4f4f4;\n  border-top-color: #3c8dbc;\n  color: #444;\n}\n.nav-pills > li.active > a {\n  font-weight: 600;\n}\n.nav-pills > li > a:hover {\n  background-color: #f6f6f6;\n}\n/* NAV STACKED */\n.nav-stacked > li > a {\n  border-radius: 0;\n  border-top: 0;\n  border-left: 3px solid transparent;\n  color: #444;\n}\n.nav-stacked > li.active > a,\n.nav-stacked > li.active > a:hover {\n  background-color: #f4f4f4;\n  border-top: 0;\n  border-left-color: #3c8dbc;\n  color: #444;\n}\n.nav-stacked > li.header {\n  border-bottom: 1px solid #ddd;\n  color: #777;\n  margin-bottom: 10px;\n  padding: 5px 10px;\n  text-transform: uppercase;\n}\n/* NAV TABS */\n.nav-tabs-custom {\n  margin-bottom: 20px;\n  background: #fff;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n}\n.nav-tabs-custom > .nav-tabs {\n  margin: 0;\n  border-bottom-color: #f4f4f4;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n.nav-tabs-custom > .nav-tabs > li {\n  border-top: 3px solid transparent;\n  margin-bottom: -2px;\n  margin-right: 5px;\n}\n.nav-tabs-custom > .nav-tabs > li > a {\n  border-radius: 0 !important;\n}\n.nav-tabs-custom > .nav-tabs > li > a,\n.nav-tabs-custom > .nav-tabs > li > a:hover {\n  background: transparent;\n  margin: 0;\n}\n.nav-tabs-custom > .nav-tabs > li:not(.active) > a:hover,\n.nav-tabs-custom > .nav-tabs > li:not(.active) > a:focus,\n.nav-tabs-custom > .nav-tabs > li:not(.active) > a:active {\n  border-color: transparent;\n}\n.nav-tabs-custom > .nav-tabs > li.active {\n  border-top-color: #3c8dbc;\n}\n.nav-tabs-custom > .nav-tabs > li.active > a,\n.nav-tabs-custom > .nav-tabs > li.active:hover > a {\n  background-color: #fff;\n}\n.nav-tabs-custom > .nav-tabs > li.active > a {\n  border-top: 0;\n  border-left-color: #f4f4f4;\n  border-right-color: #f4f4f4;\n}\n.nav-tabs-custom > .nav-tabs > li:first-of-type {\n  margin-left: 0;\n}\n.nav-tabs-custom > .nav-tabs > li:first-of-type.active > a {\n  border-left-width: 0;\n}\n.nav-tabs-custom > .nav-tabs.pull-right {\n  float: none!important;\n}\n.nav-tabs-custom > .nav-tabs.pull-right > li {\n  float: right;\n}\n.nav-tabs-custom > .nav-tabs.pull-right > li:first-of-type {\n  margin-right: 0;\n}\n.nav-tabs-custom > .nav-tabs.pull-right > li:first-of-type.active > a {\n  border-left-width: 1px;\n  border-right-width: 0;\n}\n.nav-tabs-custom > .nav-tabs > li.header {\n  line-height: 35px;\n  padding: 0 10px;\n  font-size: 20px;\n  color: #444;\n}\n.nav-tabs-custom > .nav-tabs > li.header > .fa,\n.nav-tabs-custom > .nav-tabs > li.header > .glyphicon,\n.nav-tabs-custom > .nav-tabs > li.header > .ion {\n  margin-right: 5px;\n}\n.nav-tabs-custom > .tab-content {\n  background: #fff;\n  padding: 10px;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n/* Nav tabs bottom */\n.tabs-bottom.nav-3 li a {\n  width: 3333.33333333% !important;\n}\n.tabs-bottom li a {\n  border: 0;\n}\n/* PAGINATION */\n.pagination > li > a {\n  background: #fafafa;\n  color: #666;\n}\n.pagination > li:first-of-type a,\n.pagination > li:last-of-type a {\n  border-radius: 0;\n}\n/*\n * Component: Products List\n * ------------------------\n */\n.products-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.products-list > .item {\n  border-radius: 3px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  padding: 10px 0;\n  background: #fff;\n}\n.products-list > .item:before,\n.products-list > .item:after {\n  content: \" \";\n  display: table;\n}\n.products-list > .item:after {\n  clear: both;\n}\n.products-list .product-img {\n  float: left;\n}\n.products-list .product-img img {\n  width: 50px;\n  height: 50px;\n}\n.products-list .product-info {\n  margin-left: 60px;\n}\n.products-list .product-title {\n  font-weight: 600;\n}\n.products-list .product-description {\n  display: block;\n  color: #999;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.product-list-in-box > .item {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  border-radius: 0;\n  border-bottom: 1px solid #f4f4f4;\n}\n.product-list-in-box > .item:last-of-type {\n  border-bottom-width: 0;\n}\n/*\n * Component: Table\n * ----------------\n */\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  border-top: 1px solid #f4f4f4;\n}\n.table > thead > tr > th {\n  border-bottom: 2px solid #f4f4f4;\n}\n.table tr td .progress {\n  margin-top: 5px;\n}\n.table-bordered {\n  border: 1px solid #f4f4f4;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #f4f4f4;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td {\n  border-bottom-width: 2px;\n}\n.table.no-border,\n.table.no-border td,\n.table.no-border th {\n  border: 0;\n}\n/* .text-center in tables */\ntable.text-center,\ntable.text-center td,\ntable.text-center th {\n  text-align: center;\n}\n.table.align th {\n  text-align: left;\n}\n.table.align td {\n  text-align: right;\n}\n/*\n * Component: Label\n * ----------------\n */\n.label-default {\n  background-color: #d2d6de;\n  color: #444;\n}\n/*\n * Component: Direct Chat\n * ----------------------\n */\n.direct-chat .box-body {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  position: relative;\n  overflow-x: hidden;\n  padding: 0;\n}\n.direct-chat.chat-pane-open .direct-chat-contacts {\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  -o-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n.direct-chat-messages {\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  -o-transform: translate(0, 0);\n  transform: translate(0, 0);\n  padding: 10px;\n  height: 250px;\n  overflow: auto;\n}\n.direct-chat-msg,\n.direct-chat-text {\n  display: block;\n}\n.direct-chat-msg {\n  margin-bottom: 10px;\n}\n.direct-chat-msg:before,\n.direct-chat-msg:after {\n  content: \" \";\n  display: table;\n}\n.direct-chat-msg:after {\n  clear: both;\n}\n.direct-chat-messages,\n.direct-chat-contacts {\n  -webkit-transition: -webkit-transform 0.5s ease-in-out;\n  -moz-transition: -moz-transform 0.5s ease-in-out;\n  -o-transition: -o-transform 0.5s ease-in-out;\n  transition: transform 0.5s ease-in-out;\n}\n.direct-chat-text {\n  border-radius: 5px;\n  position: relative;\n  padding: 5px 10px;\n  background: #d2d6de;\n  border: 1px solid #d2d6de;\n  margin: 5px 0 0 50px;\n  color: #444444;\n}\n.direct-chat-text:after,\n.direct-chat-text:before {\n  position: absolute;\n  right: 100%;\n  top: 15px;\n  border: solid transparent;\n  border-right-color: #d2d6de;\n  content: ' ';\n  height: 0;\n  width: 0;\n  pointer-events: none;\n}\n.direct-chat-text:after {\n  border-width: 5px;\n  margin-top: -5px;\n}\n.direct-chat-text:before {\n  border-width: 6px;\n  margin-top: -6px;\n}\n.right .direct-chat-text {\n  margin-right: 50px;\n  margin-left: 0;\n}\n.right .direct-chat-text:after,\n.right .direct-chat-text:before {\n  right: auto;\n  left: 100%;\n  border-right-color: transparent;\n  border-left-color: #d2d6de;\n}\n.direct-chat-img {\n  border-radius: 50%;\n  float: left;\n  width: 40px;\n  height: 40px;\n}\n.right .direct-chat-img {\n  float: right;\n}\n.direct-chat-info {\n  display: block;\n  margin-bottom: 2px;\n  font-size: 12px;\n}\n.direct-chat-name {\n  font-weight: 600;\n}\n.direct-chat-timestamp {\n  color: #999;\n}\n.direct-chat-contacts-open .direct-chat-contacts {\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  -o-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n.direct-chat-contacts {\n  -webkit-transform: translate(101%, 0);\n  -ms-transform: translate(101%, 0);\n  -o-transform: translate(101%, 0);\n  transform: translate(101%, 0);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  height: 250px;\n  width: 100%;\n  background: #222d32;\n  color: #fff;\n  overflow: auto;\n}\n.contacts-list > li {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 10px;\n  margin: 0;\n}\n.contacts-list > li:before,\n.contacts-list > li:after {\n  content: \" \";\n  display: table;\n}\n.contacts-list > li:after {\n  clear: both;\n}\n.contacts-list > li:last-of-type {\n  border-bottom: none;\n}\n.contacts-list-img {\n  border-radius: 50%;\n  width: 40px;\n  float: left;\n}\n.contacts-list-info {\n  margin-left: 45px;\n  color: #fff;\n}\n.contacts-list-name,\n.contacts-list-status {\n  display: block;\n}\n.contacts-list-name {\n  font-weight: 600;\n}\n.contacts-list-status {\n  font-size: 12px;\n}\n.contacts-list-date {\n  color: #aaa;\n  font-weight: normal;\n}\n.contacts-list-msg {\n  color: #999;\n}\n.direct-chat-danger .right > .direct-chat-text {\n  background: #dd4b39;\n  border-color: #dd4b39;\n  color: #ffffff;\n}\n.direct-chat-danger .right > .direct-chat-text:after,\n.direct-chat-danger .right > .direct-chat-text:before {\n  border-left-color: #dd4b39;\n}\n.direct-chat-primary .right > .direct-chat-text {\n  background: #3c8dbc;\n  border-color: #3c8dbc;\n  color: #ffffff;\n}\n.direct-chat-primary .right > .direct-chat-text:after,\n.direct-chat-primary .right > .direct-chat-text:before {\n  border-left-color: #3c8dbc;\n}\n.direct-chat-warning .right > .direct-chat-text {\n  background: #f39c12;\n  border-color: #f39c12;\n  color: #ffffff;\n}\n.direct-chat-warning .right > .direct-chat-text:after,\n.direct-chat-warning .right > .direct-chat-text:before {\n  border-left-color: #f39c12;\n}\n.direct-chat-info .right > .direct-chat-text {\n  background: #00c0ef;\n  border-color: #00c0ef;\n  color: #ffffff;\n}\n.direct-chat-info .right > .direct-chat-text:after,\n.direct-chat-info .right > .direct-chat-text:before {\n  border-left-color: #00c0ef;\n}\n.direct-chat-success .right > .direct-chat-text {\n  background: #00a65a;\n  border-color: #00a65a;\n  color: #ffffff;\n}\n.direct-chat-success .right > .direct-chat-text:after,\n.direct-chat-success .right > .direct-chat-text:before {\n  border-left-color: #00a65a;\n}\n/*\n * Component: Users List\n * ---------------------\n */\n.users-list > li {\n  width: 25%;\n  float: left;\n  padding: 10px;\n  text-align: center;\n}\n.users-list > li img {\n  border-radius: 50%;\n  max-width: 100%;\n  height: auto;\n}\n.users-list > li > a:hover,\n.users-list > li > a:hover .users-list-name {\n  color: #999;\n}\n.users-list-name,\n.users-list-date {\n  display: block;\n}\n.users-list-name {\n  font-weight: 600;\n  color: #444;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.users-list-date {\n  color: #999;\n  font-size: 12px;\n}\n/*\n * Component: Carousel\n * -------------------\n */\n.carousel-control {\n  background-image: none!important;\n}\n.carousel-control > .fa {\n  font-size: 40px;\n  position: absolute;\n  top: 50%;\n  z-index: 5;\n  display: inline-block;\n  margin-top: -20px;\n}\n/*\n * Component: modal\n * ----------------\n */\n.modal {\n  background: rgba(0, 0, 0, 0.3);\n}\n.modal-content {\n  border-radius: 0;\n  -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.125) !important;\n  border: 0;\n}\n@media (min-width: 768px) {\n  .modal-content {\n    -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.125) !important;\n    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.125) !important;\n  }\n}\n.modal-header {\n  border-bottom-color: #f4f4f4;\n}\n.modal-footer {\n  border-top-color: #f4f4f4;\n}\n.modal-primary .modal-header,\n.modal-primary .modal-footer {\n  border-color: #307095;\n}\n.modal-warning .modal-header,\n.modal-warning .modal-footer {\n  border-color: #c87f0a;\n}\n.modal-info .modal-header,\n.modal-info .modal-footer {\n  border-color: #0097bc;\n}\n.modal-success .modal-header,\n.modal-success .modal-footer {\n  border-color: #00733e;\n}\n.modal-danger .modal-header,\n.modal-danger .modal-footer {\n  border-color: #c23321;\n}\n/*\n * Page: Mailbox\n * -------------\n */\n.mailbox-messages > .table {\n  margin: 0;\n}\n.mailbox-controls {\n  padding: 5px;\n}\n.mailbox-controls.with-border {\n  border-bottom: 1px solid #f4f4f4;\n}\n.mailbox-read-info {\n  border-bottom: 1px solid #f4f4f4;\n  padding: 10px;\n}\n.mailbox-read-info h3 {\n  font-size: 20px;\n  margin: 0;\n}\n.mailbox-read-info h5 {\n  margin: 0;\n  padding: 5px 0 0 0;\n}\n.mailbox-read-time {\n  color: #999;\n  font-size: 13px;\n}\n.mailbox-read-message {\n  padding: 10px;\n}\n.mailbox-attachments li {\n  float: left;\n  width: 200px;\n  border: 1px solid #eee;\n  margin-bottom: 10px;\n  margin-right: 10px;\n}\n.mailbox-attachment-name {\n  font-weight: bold;\n  color: #666;\n}\n.mailbox-attachment-icon,\n.mailbox-attachment-info,\n.mailbox-attachment-size {\n  display: block;\n}\n.mailbox-attachment-info {\n  padding: 10px;\n  background: #f4f4f4;\n}\n.mailbox-attachment-size {\n  color: #999;\n  font-size: 12px;\n}\n.mailbox-attachment-icon {\n  text-align: center;\n  font-size: 65px;\n  color: #666;\n  padding: 20px 10px;\n}\n.mailbox-attachment-icon.has-img {\n  padding: 0;\n}\n.mailbox-attachment-icon.has-img > img {\n  max-width: 100%;\n  height: auto;\n}\n/*\n * Page: Lock Screen\n * -----------------\n */\n/* ADD THIS CLASS TO THE <BODY> TAG */\n.lockscreen {\n  background: #d2d6de;\n}\n.lockscreen-logo {\n  font-size: 35px;\n  text-align: center;\n  margin-bottom: 25px;\n  font-weight: 300;\n}\n.lockscreen-logo a {\n  color: #444;\n}\n.lockscreen-wrapper {\n  max-width: 400px;\n  margin: 0 auto;\n  margin-top: 10%;\n}\n/* User name [optional] */\n.lockscreen .lockscreen-name {\n  text-align: center;\n  font-weight: 600;\n}\n/* Will contain the image and the sign in form */\n.lockscreen-item {\n  border-radius: 4px;\n  padding: 0;\n  background: #fff;\n  position: relative;\n  margin: 10px auto 30px auto;\n  width: 290px;\n}\n/* User image */\n.lockscreen-image {\n  border-radius: 50%;\n  position: absolute;\n  left: -10px;\n  top: -25px;\n  background: #fff;\n  padding: 5px;\n  z-index: 10;\n}\n.lockscreen-image > img {\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n}\n/* Contains the password input and the login button */\n.lockscreen-credentials {\n  margin-left: 70px;\n}\n.lockscreen-credentials .form-control {\n  border: 0 !important;\n}\n.lockscreen-credentials .btn {\n  background-color: #fff;\n  border: 0;\n  padding: 0 10px;\n}\n.lockscreen-footer {\n  margin-top: 10px;\n}\n/*\n * Page: Login & Register\n * ----------------------\n */\n.login-logo,\n.register-logo {\n  font-size: 35px;\n  text-align: center;\n  margin-bottom: 25px;\n  font-weight: 300;\n}\n.login-logo a,\n.register-logo a {\n  color: #444;\n}\n.login-page,\n.register-page {\n  background: #d2d6de;\n}\n.login-box,\n.register-box {\n  width: 360px;\n  margin: 7% auto;\n}\n@media (max-width: 768px) {\n  .login-box,\n  .register-box {\n    width: 90%;\n    margin-top: 20px;\n  }\n}\n.login-box-body,\n.register-box-body {\n  background: #fff;\n  padding: 20px;\n  color: #444;\n  border-top: 0;\n  color: #666;\n}\n.login-box-body .form-control-feedback,\n.register-box-body .form-control-feedback {\n  color: #777;\n}\n.login-box-msg,\n.register-box-msg {\n  margin: 0;\n  text-align: center;\n  padding: 0 20px 20px 20px;\n}\n.social-auth-links {\n  margin: 10px 0;\n}\n/*\n * Page: 400 and 500 error pages\n * ------------------------------\n */\n.error-page {\n  width: 600px;\n  margin: 20px auto 0 auto;\n}\n@media (max-width: 991px) {\n  .error-page {\n    width: 100%;\n  }\n}\n.error-page > .headline {\n  float: left;\n  font-size: 100px;\n  font-weight: 300;\n}\n@media (max-width: 991px) {\n  .error-page > .headline {\n    float: none;\n    text-align: center;\n  }\n}\n.error-page > .error-content {\n  margin-left: 190px;\n  display: block;\n}\n@media (max-width: 991px) {\n  .error-page > .error-content {\n    margin-left: 0;\n  }\n}\n.error-page > .error-content > h3 {\n  font-weight: 300;\n  font-size: 25px;\n}\n@media (max-width: 991px) {\n  .error-page > .error-content > h3 {\n    text-align: center;\n  }\n}\n/*\n * Page: Invoice\n * -------------\n */\n.invoice {\n  position: relative;\n  background: #fff;\n  border: 1px solid #f4f4f4;\n  padding: 20px;\n  margin: 10px 25px;\n}\n.invoice-title {\n  margin-top: 0;\n}\n/*\n * Plugin: Social Buttons\n * ----------------------\n */\n.btn-social {\n  position: relative;\n  padding-left: 44px !important;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.btn-social :first-child {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 32px !important;\n  line-height: 34px !important;\n  font-size: 1.6em!important;\n  text-align: center;\n  border-right: 1px solid rgba(0, 0, 0, 0.2);\n}\n.btn-social.btn-lg {\n  padding-left: 61px !important;\n}\n.btn-social.btn-lg :first-child {\n  line-height: 45px;\n  width: 45px;\n  font-size: 1.8em;\n}\n.btn-social.btn-sm {\n  padding-left: 38px !important;\n}\n.btn-social.btn-sm :first-child {\n  line-height: 28px;\n  width: 28px;\n  font-size: 1.4em;\n}\n.btn-social.btn-xs {\n  padding-left: 30px !important;\n}\n.btn-social.btn-xs :first-child {\n  line-height: 20px;\n  width: 20px;\n  font-size: 1.2em;\n}\n.btn-social-icon {\n  position: relative;\n  padding-left: 44px !important;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 34px;\n  width: 34px;\n  padding: 0;\n}\n.btn-social-icon :first-child {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 32px !important;\n  line-height: 34px !important;\n  font-size: 1.6em!important;\n  text-align: center;\n  border-right: 1px solid rgba(0, 0, 0, 0.2);\n}\n.btn-social-icon.btn-lg {\n  padding-left: 61px !important;\n}\n.btn-social-icon.btn-lg :first-child {\n  line-height: 45px;\n  width: 45px;\n  font-size: 1.8em;\n}\n.btn-social-icon.btn-sm {\n  padding-left: 38px !important;\n}\n.btn-social-icon.btn-sm :first-child {\n  line-height: 28px;\n  width: 28px;\n  font-size: 1.4em;\n}\n.btn-social-icon.btn-xs {\n  padding-left: 30px !important;\n}\n.btn-social-icon.btn-xs :first-child {\n  line-height: 20px;\n  width: 20px;\n  font-size: 1.2em;\n}\n.btn-social-icon :first-child {\n  border: none;\n  text-align: center;\n  width: 100%!important;\n}\n.btn-social-icon.btn-lg {\n  height: 45px;\n  width: 45px;\n  padding-left: 0;\n  padding-right: 0;\n}\n.btn-social-icon.btn-sm {\n  height: 30px;\n  width: 30px;\n  padding-left: 0;\n  padding-right: 0;\n}\n.btn-social-icon.btn-xs {\n  height: 22px;\n  width: 22px;\n  padding-left: 0;\n  padding-right: 0;\n}\n.btn-bitbucket {\n  color: #ffffff;\n  background-color: #205081;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-bitbucket:hover,\n.btn-bitbucket:focus,\n.btn-bitbucket.focus,\n.btn-bitbucket:active,\n.btn-bitbucket.active,\n.open > .dropdown-toggle.btn-bitbucket {\n  color: #ffffff;\n  background-color: #163758;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-bitbucket:active,\n.btn-bitbucket.active,\n.open > .dropdown-toggle.btn-bitbucket {\n  background-image: none;\n}\n.btn-bitbucket.disabled,\n.btn-bitbucket[disabled],\nfieldset[disabled] .btn-bitbucket,\n.btn-bitbucket.disabled:hover,\n.btn-bitbucket[disabled]:hover,\nfieldset[disabled] .btn-bitbucket:hover,\n.btn-bitbucket.disabled:focus,\n.btn-bitbucket[disabled]:focus,\nfieldset[disabled] .btn-bitbucket:focus,\n.btn-bitbucket.disabled.focus,\n.btn-bitbucket[disabled].focus,\nfieldset[disabled] .btn-bitbucket.focus,\n.btn-bitbucket.disabled:active,\n.btn-bitbucket[disabled]:active,\nfieldset[disabled] .btn-bitbucket:active,\n.btn-bitbucket.disabled.active,\n.btn-bitbucket[disabled].active,\nfieldset[disabled] .btn-bitbucket.active {\n  background-color: #205081;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-bitbucket .badge {\n  color: #205081;\n  background-color: #ffffff;\n}\n.btn-dropbox {\n  color: #ffffff;\n  background-color: #1087dd;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-dropbox:hover,\n.btn-dropbox:focus,\n.btn-dropbox.focus,\n.btn-dropbox:active,\n.btn-dropbox.active,\n.open > .dropdown-toggle.btn-dropbox {\n  color: #ffffff;\n  background-color: #0d6aad;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-dropbox:active,\n.btn-dropbox.active,\n.open > .dropdown-toggle.btn-dropbox {\n  background-image: none;\n}\n.btn-dropbox.disabled,\n.btn-dropbox[disabled],\nfieldset[disabled] .btn-dropbox,\n.btn-dropbox.disabled:hover,\n.btn-dropbox[disabled]:hover,\nfieldset[disabled] .btn-dropbox:hover,\n.btn-dropbox.disabled:focus,\n.btn-dropbox[disabled]:focus,\nfieldset[disabled] .btn-dropbox:focus,\n.btn-dropbox.disabled.focus,\n.btn-dropbox[disabled].focus,\nfieldset[disabled] .btn-dropbox.focus,\n.btn-dropbox.disabled:active,\n.btn-dropbox[disabled]:active,\nfieldset[disabled] .btn-dropbox:active,\n.btn-dropbox.disabled.active,\n.btn-dropbox[disabled].active,\nfieldset[disabled] .btn-dropbox.active {\n  background-color: #1087dd;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-dropbox .badge {\n  color: #1087dd;\n  background-color: #ffffff;\n}\n.btn-facebook {\n  color: #ffffff;\n  background-color: #3b5998;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-facebook:hover,\n.btn-facebook:focus,\n.btn-facebook.focus,\n.btn-facebook:active,\n.btn-facebook.active,\n.open > .dropdown-toggle.btn-facebook {\n  color: #ffffff;\n  background-color: #2d4373;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-facebook:active,\n.btn-facebook.active,\n.open > .dropdown-toggle.btn-facebook {\n  background-image: none;\n}\n.btn-facebook.disabled,\n.btn-facebook[disabled],\nfieldset[disabled] .btn-facebook,\n.btn-facebook.disabled:hover,\n.btn-facebook[disabled]:hover,\nfieldset[disabled] .btn-facebook:hover,\n.btn-facebook.disabled:focus,\n.btn-facebook[disabled]:focus,\nfieldset[disabled] .btn-facebook:focus,\n.btn-facebook.disabled.focus,\n.btn-facebook[disabled].focus,\nfieldset[disabled] .btn-facebook.focus,\n.btn-facebook.disabled:active,\n.btn-facebook[disabled]:active,\nfieldset[disabled] .btn-facebook:active,\n.btn-facebook.disabled.active,\n.btn-facebook[disabled].active,\nfieldset[disabled] .btn-facebook.active {\n  background-color: #3b5998;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-facebook .badge {\n  color: #3b5998;\n  background-color: #ffffff;\n}\n.btn-flickr {\n  color: #ffffff;\n  background-color: #ff0084;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-flickr:hover,\n.btn-flickr:focus,\n.btn-flickr.focus,\n.btn-flickr:active,\n.btn-flickr.active,\n.open > .dropdown-toggle.btn-flickr {\n  color: #ffffff;\n  background-color: #cc006a;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-flickr:active,\n.btn-flickr.active,\n.open > .dropdown-toggle.btn-flickr {\n  background-image: none;\n}\n.btn-flickr.disabled,\n.btn-flickr[disabled],\nfieldset[disabled] .btn-flickr,\n.btn-flickr.disabled:hover,\n.btn-flickr[disabled]:hover,\nfieldset[disabled] .btn-flickr:hover,\n.btn-flickr.disabled:focus,\n.btn-flickr[disabled]:focus,\nfieldset[disabled] .btn-flickr:focus,\n.btn-flickr.disabled.focus,\n.btn-flickr[disabled].focus,\nfieldset[disabled] .btn-flickr.focus,\n.btn-flickr.disabled:active,\n.btn-flickr[disabled]:active,\nfieldset[disabled] .btn-flickr:active,\n.btn-flickr.disabled.active,\n.btn-flickr[disabled].active,\nfieldset[disabled] .btn-flickr.active {\n  background-color: #ff0084;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-flickr .badge {\n  color: #ff0084;\n  background-color: #ffffff;\n}\n.btn-foursquare {\n  color: #ffffff;\n  background-color: #0072b1;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-foursquare:hover,\n.btn-foursquare:focus,\n.btn-foursquare.focus,\n.btn-foursquare:active,\n.btn-foursquare.active,\n.open > .dropdown-toggle.btn-foursquare {\n  color: #ffffff;\n  background-color: #00517e;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-foursquare:active,\n.btn-foursquare.active,\n.open > .dropdown-toggle.btn-foursquare {\n  background-image: none;\n}\n.btn-foursquare.disabled,\n.btn-foursquare[disabled],\nfieldset[disabled] .btn-foursquare,\n.btn-foursquare.disabled:hover,\n.btn-foursquare[disabled]:hover,\nfieldset[disabled] .btn-foursquare:hover,\n.btn-foursquare.disabled:focus,\n.btn-foursquare[disabled]:focus,\nfieldset[disabled] .btn-foursquare:focus,\n.btn-foursquare.disabled.focus,\n.btn-foursquare[disabled].focus,\nfieldset[disabled] .btn-foursquare.focus,\n.btn-foursquare.disabled:active,\n.btn-foursquare[disabled]:active,\nfieldset[disabled] .btn-foursquare:active,\n.btn-foursquare.disabled.active,\n.btn-foursquare[disabled].active,\nfieldset[disabled] .btn-foursquare.active {\n  background-color: #0072b1;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-foursquare .badge {\n  color: #0072b1;\n  background-color: #ffffff;\n}\n.btn-github {\n  color: #ffffff;\n  background-color: #444444;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-github:hover,\n.btn-github:focus,\n.btn-github.focus,\n.btn-github:active,\n.btn-github.active,\n.open > .dropdown-toggle.btn-github {\n  color: #ffffff;\n  background-color: #2b2b2b;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-github:active,\n.btn-github.active,\n.open > .dropdown-toggle.btn-github {\n  background-image: none;\n}\n.btn-github.disabled,\n.btn-github[disabled],\nfieldset[disabled] .btn-github,\n.btn-github.disabled:hover,\n.btn-github[disabled]:hover,\nfieldset[disabled] .btn-github:hover,\n.btn-github.disabled:focus,\n.btn-github[disabled]:focus,\nfieldset[disabled] .btn-github:focus,\n.btn-github.disabled.focus,\n.btn-github[disabled].focus,\nfieldset[disabled] .btn-github.focus,\n.btn-github.disabled:active,\n.btn-github[disabled]:active,\nfieldset[disabled] .btn-github:active,\n.btn-github.disabled.active,\n.btn-github[disabled].active,\nfieldset[disabled] .btn-github.active {\n  background-color: #444444;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-github .badge {\n  color: #444444;\n  background-color: #ffffff;\n}\n.btn-google-plus {\n  color: #ffffff;\n  background-color: #dd4b39;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-google-plus:hover,\n.btn-google-plus:focus,\n.btn-google-plus.focus,\n.btn-google-plus:active,\n.btn-google-plus.active,\n.open > .dropdown-toggle.btn-google-plus {\n  color: #ffffff;\n  background-color: #c23321;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-google-plus:active,\n.btn-google-plus.active,\n.open > .dropdown-toggle.btn-google-plus {\n  background-image: none;\n}\n.btn-google-plus.disabled,\n.btn-google-plus[disabled],\nfieldset[disabled] .btn-google-plus,\n.btn-google-plus.disabled:hover,\n.btn-google-plus[disabled]:hover,\nfieldset[disabled] .btn-google-plus:hover,\n.btn-google-plus.disabled:focus,\n.btn-google-plus[disabled]:focus,\nfieldset[disabled] .btn-google-plus:focus,\n.btn-google-plus.disabled.focus,\n.btn-google-plus[disabled].focus,\nfieldset[disabled] .btn-google-plus.focus,\n.btn-google-plus.disabled:active,\n.btn-google-plus[disabled]:active,\nfieldset[disabled] .btn-google-plus:active,\n.btn-google-plus.disabled.active,\n.btn-google-plus[disabled].active,\nfieldset[disabled] .btn-google-plus.active {\n  background-color: #dd4b39;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-google-plus .badge {\n  color: #dd4b39;\n  background-color: #ffffff;\n}\n.btn-instagram {\n  color: #ffffff;\n  background-color: #3f729b;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-instagram:hover,\n.btn-instagram:focus,\n.btn-instagram.focus,\n.btn-instagram:active,\n.btn-instagram.active,\n.open > .dropdown-toggle.btn-instagram {\n  color: #ffffff;\n  background-color: #305777;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-instagram:active,\n.btn-instagram.active,\n.open > .dropdown-toggle.btn-instagram {\n  background-image: none;\n}\n.btn-instagram.disabled,\n.btn-instagram[disabled],\nfieldset[disabled] .btn-instagram,\n.btn-instagram.disabled:hover,\n.btn-instagram[disabled]:hover,\nfieldset[disabled] .btn-instagram:hover,\n.btn-instagram.disabled:focus,\n.btn-instagram[disabled]:focus,\nfieldset[disabled] .btn-instagram:focus,\n.btn-instagram.disabled.focus,\n.btn-instagram[disabled].focus,\nfieldset[disabled] .btn-instagram.focus,\n.btn-instagram.disabled:active,\n.btn-instagram[disabled]:active,\nfieldset[disabled] .btn-instagram:active,\n.btn-instagram.disabled.active,\n.btn-instagram[disabled].active,\nfieldset[disabled] .btn-instagram.active {\n  background-color: #3f729b;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-instagram .badge {\n  color: #3f729b;\n  background-color: #ffffff;\n}\n.btn-linkedin {\n  color: #ffffff;\n  background-color: #007bb6;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-linkedin:hover,\n.btn-linkedin:focus,\n.btn-linkedin.focus,\n.btn-linkedin:active,\n.btn-linkedin.active,\n.open > .dropdown-toggle.btn-linkedin {\n  color: #ffffff;\n  background-color: #005983;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-linkedin:active,\n.btn-linkedin.active,\n.open > .dropdown-toggle.btn-linkedin {\n  background-image: none;\n}\n.btn-linkedin.disabled,\n.btn-linkedin[disabled],\nfieldset[disabled] .btn-linkedin,\n.btn-linkedin.disabled:hover,\n.btn-linkedin[disabled]:hover,\nfieldset[disabled] .btn-linkedin:hover,\n.btn-linkedin.disabled:focus,\n.btn-linkedin[disabled]:focus,\nfieldset[disabled] .btn-linkedin:focus,\n.btn-linkedin.disabled.focus,\n.btn-linkedin[disabled].focus,\nfieldset[disabled] .btn-linkedin.focus,\n.btn-linkedin.disabled:active,\n.btn-linkedin[disabled]:active,\nfieldset[disabled] .btn-linkedin:active,\n.btn-linkedin.disabled.active,\n.btn-linkedin[disabled].active,\nfieldset[disabled] .btn-linkedin.active {\n  background-color: #007bb6;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-linkedin .badge {\n  color: #007bb6;\n  background-color: #ffffff;\n}\n.btn-tumblr {\n  color: #ffffff;\n  background-color: #2c4762;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-tumblr:hover,\n.btn-tumblr:focus,\n.btn-tumblr.focus,\n.btn-tumblr:active,\n.btn-tumblr.active,\n.open > .dropdown-toggle.btn-tumblr {\n  color: #ffffff;\n  background-color: #1c2d3f;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-tumblr:active,\n.btn-tumblr.active,\n.open > .dropdown-toggle.btn-tumblr {\n  background-image: none;\n}\n.btn-tumblr.disabled,\n.btn-tumblr[disabled],\nfieldset[disabled] .btn-tumblr,\n.btn-tumblr.disabled:hover,\n.btn-tumblr[disabled]:hover,\nfieldset[disabled] .btn-tumblr:hover,\n.btn-tumblr.disabled:focus,\n.btn-tumblr[disabled]:focus,\nfieldset[disabled] .btn-tumblr:focus,\n.btn-tumblr.disabled.focus,\n.btn-tumblr[disabled].focus,\nfieldset[disabled] .btn-tumblr.focus,\n.btn-tumblr.disabled:active,\n.btn-tumblr[disabled]:active,\nfieldset[disabled] .btn-tumblr:active,\n.btn-tumblr.disabled.active,\n.btn-tumblr[disabled].active,\nfieldset[disabled] .btn-tumblr.active {\n  background-color: #2c4762;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-tumblr .badge {\n  color: #2c4762;\n  background-color: #ffffff;\n}\n.btn-twitter {\n  color: #ffffff;\n  background-color: #55acee;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-twitter:hover,\n.btn-twitter:focus,\n.btn-twitter.focus,\n.btn-twitter:active,\n.btn-twitter.active,\n.open > .dropdown-toggle.btn-twitter {\n  color: #ffffff;\n  background-color: #2795e9;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-twitter:active,\n.btn-twitter.active,\n.open > .dropdown-toggle.btn-twitter {\n  background-image: none;\n}\n.btn-twitter.disabled,\n.btn-twitter[disabled],\nfieldset[disabled] .btn-twitter,\n.btn-twitter.disabled:hover,\n.btn-twitter[disabled]:hover,\nfieldset[disabled] .btn-twitter:hover,\n.btn-twitter.disabled:focus,\n.btn-twitter[disabled]:focus,\nfieldset[disabled] .btn-twitter:focus,\n.btn-twitter.disabled.focus,\n.btn-twitter[disabled].focus,\nfieldset[disabled] .btn-twitter.focus,\n.btn-twitter.disabled:active,\n.btn-twitter[disabled]:active,\nfieldset[disabled] .btn-twitter:active,\n.btn-twitter.disabled.active,\n.btn-twitter[disabled].active,\nfieldset[disabled] .btn-twitter.active {\n  background-color: #55acee;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-twitter .badge {\n  color: #55acee;\n  background-color: #ffffff;\n}\n.btn-vk {\n  color: #ffffff;\n  background-color: #587ea3;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-vk:hover,\n.btn-vk:focus,\n.btn-vk.focus,\n.btn-vk:active,\n.btn-vk.active,\n.open > .dropdown-toggle.btn-vk {\n  color: #ffffff;\n  background-color: #466482;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-vk:active,\n.btn-vk.active,\n.open > .dropdown-toggle.btn-vk {\n  background-image: none;\n}\n.btn-vk.disabled,\n.btn-vk[disabled],\nfieldset[disabled] .btn-vk,\n.btn-vk.disabled:hover,\n.btn-vk[disabled]:hover,\nfieldset[disabled] .btn-vk:hover,\n.btn-vk.disabled:focus,\n.btn-vk[disabled]:focus,\nfieldset[disabled] .btn-vk:focus,\n.btn-vk.disabled.focus,\n.btn-vk[disabled].focus,\nfieldset[disabled] .btn-vk.focus,\n.btn-vk.disabled:active,\n.btn-vk[disabled]:active,\nfieldset[disabled] .btn-vk:active,\n.btn-vk.disabled.active,\n.btn-vk[disabled].active,\nfieldset[disabled] .btn-vk.active {\n  background-color: #587ea3;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-vk .badge {\n  color: #587ea3;\n  background-color: #ffffff;\n}\n/*\n * Plugin: Full Calendar\n * ---------------------\n */\n.fc-button {\n  background: #f4f4f4;\n  background-image: none;\n  color: #444;\n  border-color: #ddd;\n  border-bottom-color: #ddd;\n}\n.fc-button:hover,\n.fc-button:active,\n.fc-button.hover {\n  background-color: #e9e9e9;\n}\n.fc-header-title h2 {\n  font-size: 15px;\n  line-height: 1.6em;\n  color: #666;\n  margin-left: 10px;\n}\n.fc-header-right {\n  padding-right: 10px;\n}\n.fc-header-left {\n  padding-left: 10px;\n}\n.fc-widget-header {\n  background: #fafafa;\n}\n.fc-grid {\n  width: 100%;\n  border: 0;\n}\n.fc-widget-header:first-of-type,\n.fc-widget-content:first-of-type {\n  border-left: 0;\n  border-right: 0;\n}\n.fc-widget-header:last-of-type,\n.fc-widget-content:last-of-type {\n  border-right: 0;\n}\n.fc-toolbar {\n  padding: 10px;\n  margin: 0;\n}\n.fc-day-number {\n  font-size: 20px;\n  font-weight: 300;\n  padding-right: 10px;\n}\n.fc-color-picker {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.fc-color-picker > li {\n  float: left;\n  font-size: 30px;\n  margin-right: 5px;\n  line-height: 30px;\n}\n.fc-color-picker > li .fa {\n  -webkit-transition: -webkit-transform linear 0.3s;\n  -moz-transition: -moz-transform linear 0.3s;\n  -o-transition: -o-transform linear 0.3s;\n  transition: transform linear 0.3s;\n}\n.fc-color-picker > li .fa:hover {\n  -webkit-transform: rotate(30deg);\n  -ms-transform: rotate(30deg);\n  -o-transform: rotate(30deg);\n  transform: rotate(30deg);\n}\n#add-new-event {\n  -webkit-transition: all linear 0.3s;\n  -o-transition: all linear 0.3s;\n  transition: all linear 0.3s;\n}\n.external-event {\n  padding: 5px 10px;\n  font-weight: bold;\n  margin-bottom: 4px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n  cursor: move;\n}\n.external-event:hover {\n  box-shadow: inset 0 0 90px rgba(0, 0, 0, 0.2);\n}\n/*\n * General: Miscellaneous\n * ----------------------\n */\n.pad {\n  padding: 10px;\n}\n.margin {\n  margin: 10px;\n}\n.margin-bottom {\n  margin-bottom: 20px;\n}\n.inline {\n  display: inline;\n  width: auto;\n}\n.description-block {\n  display: block;\n  margin: 10px 0;\n  text-align: center;\n}\n.description-block.margin-bottom {\n  margin-bottom: 25px;\n}\n.description-block > .description-header {\n  margin: 0;\n  padding: 0;\n  font-weight: 600;\n  font-size: 16px;\n}\n.description-block > .description-text {\n  text-transform: uppercase;\n}\n.bg-red,\n.bg-yellow,\n.bg-aqua,\n.bg-blue,\n.bg-light-blue,\n.bg-green,\n.bg-navy,\n.bg-teal,\n.bg-olive,\n.bg-lime,\n.bg-orange,\n.bg-fuchsia,\n.bg-purple,\n.bg-maroon,\n.bg-black,\n.bg-red-active,\n.bg-yellow-active,\n.bg-aqua-active,\n.bg-blue-active,\n.bg-light-blue-active,\n.bg-green-active,\n.bg-navy-active,\n.bg-teal-active,\n.bg-olive-active,\n.bg-lime-active,\n.bg-orange-active,\n.bg-fuchsia-active,\n.bg-purple-active,\n.bg-maroon-active,\n.bg-black-active,\n.callout.callout-danger,\n.callout.callout-warning,\n.callout.callout-info,\n.callout.callout-success,\n.alert-success,\n.alert-danger,\n.alert-error,\n.alert-warning,\n.alert-info,\n.label-danger,\n.label-info,\n.label-waring,\n.label-primary,\n.label-success,\n.modal-primary .modal-body,\n.modal-primary .modal-header,\n.modal-primary .modal-footer,\n.modal-warning .modal-body,\n.modal-warning .modal-header,\n.modal-warning .modal-footer,\n.modal-info .modal-body,\n.modal-info .modal-header,\n.modal-info .modal-footer,\n.modal-success .modal-body,\n.modal-success .modal-header,\n.modal-success .modal-footer,\n.modal-danger .modal-body,\n.modal-danger .modal-header,\n.modal-danger .modal-footer {\n  color: #fff !important;\n}\n.bg-gray {\n  color: #000;\n  background-color: #d2d6de !important;\n}\n.bg-black {\n  background-color: #111111 !important;\n}\n.bg-red,\n.callout.callout-danger,\n.alert-danger,\n.alert-error,\n.label-danger,\n.modal-danger .modal-body {\n  background-color: #dd4b39 !important;\n}\n.bg-yellow,\n.callout.callout-warning,\n.alert-warning,\n.label-waring,\n.modal-warning .modal-body {\n  background-color: #f39c12 !important;\n}\n.bg-aqua,\n.callout.callout-info,\n.alert-info,\n.label-info,\n.modal-info .modal-body {\n  background-color: #00c0ef !important;\n}\n.bg-blue {\n  background-color: #0073b7 !important;\n}\n.bg-light-blue,\n.label-primary,\n.modal-primary .modal-body {\n  background-color: #3c8dbc !important;\n}\n.bg-green,\n.callout.callout-success,\n.alert-success,\n.label-success,\n.modal-success .modal-body {\n  background-color: #00a65a !important;\n}\n.bg-navy {\n  background-color: #001f3f !important;\n}\n.bg-teal {\n  background-color: #39cccc !important;\n}\n.bg-olive {\n  background-color: #3d9970 !important;\n}\n.bg-lime {\n  background-color: #01ff70 !important;\n}\n.bg-orange {\n  background-color: #ff851b !important;\n}\n.bg-fuchsia {\n  background-color: #f012be !important;\n}\n.bg-purple {\n  background-color: #605ca8 !important;\n}\n.bg-maroon {\n  background-color: #d81b60 !important;\n}\n.bg-gray-active {\n  color: #000;\n  background-color: #b5bbc8 !important;\n}\n.bg-black-active {\n  background-color: #000000 !important;\n}\n.bg-red-active,\n.modal-danger .modal-header,\n.modal-danger .modal-footer {\n  background-color: #d33724 !important;\n}\n.bg-yellow-active,\n.modal-warning .modal-header,\n.modal-warning .modal-footer {\n  background-color: #db8b0b !important;\n}\n.bg-aqua-active,\n.modal-info .modal-header,\n.modal-info .modal-footer {\n  background-color: #00a7d0 !important;\n}\n.bg-blue-active {\n  background-color: #005384 !important;\n}\n.bg-light-blue-active,\n.modal-primary .modal-header,\n.modal-primary .modal-footer {\n  background-color: #357ca5 !important;\n}\n.bg-green-active,\n.modal-success .modal-header,\n.modal-success .modal-footer {\n  background-color: #008d4c !important;\n}\n.bg-navy-active {\n  background-color: #001a35 !important;\n}\n.bg-teal-active {\n  background-color: #30bbbb !important;\n}\n.bg-olive-active {\n  background-color: #368763 !important;\n}\n.bg-lime-active {\n  background-color: #00e765 !important;\n}\n.bg-orange-active {\n  background-color: #ff7701 !important;\n}\n.bg-fuchsia-active {\n  background-color: #db0ead !important;\n}\n.bg-purple-active {\n  background-color: #555299 !important;\n}\n.bg-maroon-active {\n  background-color: #ca195a !important;\n}\n[class^=\"bg-\"].disabled {\n  opacity: 0.65;\n  filter: alpha(opacity=65);\n}\n.text-red {\n  color: #dd4b39 !important;\n}\n.text-yellow {\n  color: #f39c12 !important;\n}\n.text-aqua {\n  color: #00c0ef !important;\n}\n.text-blue {\n  color: #0073b7 !important;\n}\n.text-black {\n  color: #111111 !important;\n}\n.text-light-blue {\n  color: #3c8dbc !important;\n}\n.text-green {\n  color: #00a65a !important;\n}\n.text-gray {\n  color: #d2d6de !important;\n}\n.text-navy {\n  color: #001f3f !important;\n}\n.text-teal {\n  color: #39cccc !important;\n}\n.text-olive {\n  color: #3d9970 !important;\n}\n.text-lime {\n  color: #01ff70 !important;\n}\n.text-orange {\n  color: #ff851b !important;\n}\n.text-fuchsia {\n  color: #f012be !important;\n}\n.text-purple {\n  color: #605ca8 !important;\n}\n.text-maroon {\n  color: #d81b60 !important;\n}\n.hide {\n  display: none !important;\n}\n.no-border {\n  border: 0px !important;\n}\n.no-padding {\n  padding: 0px !important;\n}\n.no-margin {\n  margin: 0px !important;\n}\n.no-shadow {\n  box-shadow: none!important;\n}\n.list-unstyled,\n.chart-legend,\n.contacts-list,\n.users-list,\n.mailbox-attachments {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.flat {\n  border-radius: 0 !important;\n}\n.text-bold,\n.text-bold.table td,\n.text-bold.table th {\n  font-weight: 700;\n}\n.jqstooltip {\n  padding: 5px!important;\n  width: auto!important;\n  height: auto!important;\n}\n.bg-teal-gradient {\n  background: #39cccc !important;\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #39cccc), color-stop(1, #7adddd)) !important;\n  background: -ms-linear-gradient(bottom, #39cccc, #7adddd) !important;\n  background: -moz-linear-gradient(center bottom, #39cccc 0%, #7adddd 100%) !important;\n  background: -o-linear-gradient(#7adddd, #39cccc) !important;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#7adddd', endColorstr='#39cccc', GradientType=0) !important;\n  color: #fff;\n}\n.bg-light-blue-gradient {\n  background: #3c8dbc !important;\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #3c8dbc), color-stop(1, #67a8ce)) !important;\n  background: -ms-linear-gradient(bottom, #3c8dbc, #67a8ce) !important;\n  background: -moz-linear-gradient(center bottom, #3c8dbc 0%, #67a8ce 100%) !important;\n  background: -o-linear-gradient(#67a8ce, #3c8dbc) !important;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#67a8ce', endColorstr='#3c8dbc', GradientType=0) !important;\n  color: #fff;\n}\n.bg-blue-gradient {\n  background: #0073b7 !important;\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #0073b7), color-stop(1, #0089db)) !important;\n  background: -ms-linear-gradient(bottom, #0073b7, #0089db) !important;\n  background: -moz-linear-gradient(center bottom, #0073b7 0%, #0089db 100%) !important;\n  background: -o-linear-gradient(#0089db, #0073b7) !important;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0089db', endColorstr='#0073b7', GradientType=0) !important;\n  color: #fff;\n}\n.bg-aqua-gradient {\n  background: #00c0ef !important;\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #00c0ef), color-stop(1, #14d1ff)) !important;\n  background: -ms-linear-gradient(bottom, #00c0ef, #14d1ff) !important;\n  background: -moz-linear-gradient(center bottom, #00c0ef 0%, #14d1ff 100%) !important;\n  background: -o-linear-gradient(#14d1ff, #00c0ef) !important;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#14d1ff', endColorstr='#00c0ef', GradientType=0) !important;\n  color: #fff;\n}\n.bg-yellow-gradient {\n  background: #f39c12 !important;\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #f39c12), color-stop(1, #f7bc60)) !important;\n  background: -ms-linear-gradient(bottom, #f39c12, #f7bc60) !important;\n  background: -moz-linear-gradient(center bottom, #f39c12 0%, #f7bc60 100%) !important;\n  background: -o-linear-gradient(#f7bc60, #f39c12) !important;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f7bc60', endColorstr='#f39c12', GradientType=0) !important;\n  color: #fff;\n}\n.bg-purple-gradient {\n  background: #605ca8 !important;\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #605ca8), color-stop(1, #9491c4)) !important;\n  background: -ms-linear-gradient(bottom, #605ca8, #9491c4) !important;\n  background: -moz-linear-gradient(center bottom, #605ca8 0%, #9491c4 100%) !important;\n  background: -o-linear-gradient(#9491c4, #605ca8) !important;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#9491c4', endColorstr='#605ca8', GradientType=0) !important;\n  color: #fff;\n}\n.bg-green-gradient {\n  background: #00a65a !important;\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #00a65a), color-stop(1, #00ca6d)) !important;\n  background: -ms-linear-gradient(bottom, #00a65a, #00ca6d) !important;\n  background: -moz-linear-gradient(center bottom, #00a65a 0%, #00ca6d 100%) !important;\n  background: -o-linear-gradient(#00ca6d, #00a65a) !important;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ca6d', endColorstr='#00a65a', GradientType=0) !important;\n  color: #fff;\n}\n.bg-red-gradient {\n  background: #dd4b39 !important;\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #dd4b39), color-stop(1, #e47365)) !important;\n  background: -ms-linear-gradient(bottom, #dd4b39, #e47365) !important;\n  background: -moz-linear-gradient(center bottom, #dd4b39 0%, #e47365 100%) !important;\n  background: -o-linear-gradient(#e47365, #dd4b39) !important;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e47365', endColorstr='#dd4b39', GradientType=0) !important;\n  color: #fff;\n}\n.bg-black-gradient {\n  background: #111111 !important;\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #111111), color-stop(1, #2b2b2b)) !important;\n  background: -ms-linear-gradient(bottom, #111111, #2b2b2b) !important;\n  background: -moz-linear-gradient(center bottom, #111111 0%, #2b2b2b 100%) !important;\n  background: -o-linear-gradient(#2b2b2b, #111111) !important;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#2b2b2b', endColorstr='#111111', GradientType=0) !important;\n  color: #fff;\n}\n.bg-maroon-gradient {\n  background: #d81b60 !important;\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #d81b60), color-stop(1, #e73f7c)) !important;\n  background: -ms-linear-gradient(bottom, #d81b60, #e73f7c) !important;\n  background: -moz-linear-gradient(center bottom, #d81b60 0%, #e73f7c 100%) !important;\n  background: -o-linear-gradient(#e73f7c, #d81b60) !important;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e73f7c', endColorstr='#d81b60', GradientType=0) !important;\n  color: #fff;\n}\n.connectedSortable {\n  min-height: 100px;\n}\n.ui-helper-hidden-accessible {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n.sort-highlight {\n  background: #f4f4f4;\n  border: 1px dashed #ddd;\n  margin-bottom: 10px;\n}\n.full-opacity-hover {\n  opacity: 0.65;\n  filter: alpha(opacity=65);\n}\n.full-opacity-hover:hover {\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.chart {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n.chart svg,\n.chart canvas {\n  width: 100%!important;\n}\n/*\n * Misc: print\n * -----------\n */\n@media print {\n  .no-print,\n  .main-sidebar,\n  .left-side,\n  .main-header,\n  .content-header {\n    display: none!important;\n  }\n  .content-wrapper,\n  .right-side,\n  .main-footer {\n    margin-left: 0!important;\n    min-height: 0!important;\n    -webkit-transform: translate(0, 0) !important;\n    -ms-transform: translate(0, 0) !important;\n    -o-transform: translate(0, 0) !important;\n    transform: translate(0, 0) !important;\n  }\n  .fixed .content-wrapper,\n  .fixed .right-side {\n    padding-top: 0!important;\n  }\n  .invoice {\n    width: 100%;\n    border: 0;\n    margin: 0;\n    padding: 0;\n  }\n  .invoice-col {\n    float: left;\n    width: 33.3333333%;\n  }\n  .table-responsive {\n    overflow: auto;\n  }\n  .table-responsive > .table tr th,\n  .table-responsive > .table tr td {\n    white-space: normal!important;\n  }\n}\n"]}]);

/***/ },
/* 30 */
/*!*********************************************************************!*\
  !*** ./bower_components/admin-lte/dist/css/skins/skin-blue.min.css ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./~/css-loader?sourceMap!!./bower_components/admin-lte/dist/css/skins/skin-blue.min.css */ 31);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./~/style-loader/addStyles.js */ 34)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/ozaki/dev/administa/node_modules/css-loader/index.js?sourceMap!!/home/ozaki/dev/administa/bower_components/admin-lte/dist/css/skins/skin-blue.min.css", function() {
			var newContent = require("!!/home/ozaki/dev/administa/node_modules/css-loader/index.js?sourceMap!!/home/ozaki/dev/administa/bower_components/admin-lte/dist/css/skins/skin-blue.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 31 */
/*!**********************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./bower_components/admin-lte/dist/css/skins/skin-blue.min.css ***!
  \**********************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./~/css-loader/cssToString.js */ 64)();
	exports.push([module.id, ".skin-blue .main-header .navbar{background-color:#3c8dbc}.skin-blue .main-header .navbar .nav>li>a{color:#fff}.skin-blue .main-header .navbar .nav>li>a:hover,.skin-blue .main-header .navbar .nav>li>a:active,.skin-blue .main-header .navbar .nav>li>a:focus,.skin-blue .main-header .navbar .nav .open>a,.skin-blue .main-header .navbar .nav .open>a:hover,.skin-blue .main-header .navbar .nav .open>a:focus{background:rgba(0,0,0,0.1);color:#f6f6f6}.skin-blue .main-header .navbar .sidebar-toggle{color:#fff}.skin-blue .main-header .navbar .sidebar-toggle:hover{color:#f6f6f6;background:rgba(0,0,0,0.1)}.skin-blue .main-header .navbar .sidebar-toggle{color:#fff}.skin-blue .main-header .navbar .sidebar-toggle:hover{background-color:#367fa9}@media (max-width:767px){.skin-blue .main-header .navbar .dropdown-menu li.divider{background-color:rgba(255,255,255,0.1)}.skin-blue .main-header .navbar .dropdown-menu li a{color:#fff}.skin-blue .main-header .navbar .dropdown-menu li a:hover{background:#367fa9}}.skin-blue .main-header .logo{background-color:#367fa9;color:#fff;border-bottom:0 solid transparent}.skin-blue .main-header .logo:hover{background:#357ca5}.skin-blue .main-header li.user-header{background-color:#3c8dbc}.skin-blue .content-header{background:transparent}.skin-blue .wrapper,.skin-blue .main-sidebar,.skin-blue .left-side{background-color:#222d32}.skin-blue .user-panel>.info,.skin-blue .user-panel>.info>a{color:#fff}.skin-blue .sidebar-menu>li.header{color:#4b646f;background:#1a2226}.skin-blue .sidebar-menu>li>a{border-left:3px solid transparent;margin-right:1px}.skin-blue .sidebar-menu>li:hover>a,.skin-blue .sidebar-menu>li.active>a{color:#fff;background:#1e282c;border-left-color:#3c8dbc}.skin-blue .sidebar-menu>li>.treeview-menu{margin:0 1px;background:#2c3b41}.skin-blue .sidebar a{color:#b8c7ce}.skin-blue .sidebar a:hover{text-decoration:none}.skin-blue .treeview-menu>li>a{color:#8aa4af}.skin-blue .treeview-menu>li.active>a,.skin-blue .treeview-menu>li>a:hover{color:#fff}.skin-blue .sidebar-form{border-radius:3px;border:1px solid #374850;margin:10px 10px}.skin-blue .sidebar-form input[type=\"text\"],.skin-blue .sidebar-form .btn{box-shadow:none;background-color:#374850;border:1px solid transparent;height:35px;-webkit-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.skin-blue .sidebar-form input[type=\"text\"]{color:#666;border-top-left-radius:2px !important;border-top-right-radius:0 !important;border-bottom-right-radius:0 !important;border-bottom-left-radius:2px !important}.skin-blue .sidebar-form input[type=\"text\"]:focus,.skin-blue .sidebar-form input[type=\"text\"]:focus+.input-group-btn .btn{background-color:#fff;color:#666}.skin-blue .sidebar-form input[type=\"text\"]:focus+.input-group-btn .btn{border-left-color:#fff}.skin-blue .sidebar-form .btn{color:#999;border-top-left-radius:0 !important;border-top-right-radius:2px !important;border-bottom-right-radius:2px !important;border-bottom-left-radius:0 !important}.skin-blue.layout-top-nav .main-header>.logo{background-color:#3c8dbc;color:#fff;border-bottom:0 solid transparent}.skin-blue.layout-top-nav .main-header>.logo:hover{background:#3b8ab8}", "", {"version":3,"sources":["/home/ozaki/dev/administa/bower_components/admin-lte/dist/css/skins/skin-blue.min.css"],"names":[],"mappings":"AAAA","file":"/home/ozaki/dev/administa/node_modules/css-loader/index.js?sourceMap!/home/ozaki/dev/administa/bower_components/admin-lte/dist/css/skins/skin-blue.min.css","sourcesContent":[".skin-blue .main-header .navbar{background-color:#3c8dbc}.skin-blue .main-header .navbar .nav>li>a{color:#fff}.skin-blue .main-header .navbar .nav>li>a:hover,.skin-blue .main-header .navbar .nav>li>a:active,.skin-blue .main-header .navbar .nav>li>a:focus,.skin-blue .main-header .navbar .nav .open>a,.skin-blue .main-header .navbar .nav .open>a:hover,.skin-blue .main-header .navbar .nav .open>a:focus{background:rgba(0,0,0,0.1);color:#f6f6f6}.skin-blue .main-header .navbar .sidebar-toggle{color:#fff}.skin-blue .main-header .navbar .sidebar-toggle:hover{color:#f6f6f6;background:rgba(0,0,0,0.1)}.skin-blue .main-header .navbar .sidebar-toggle{color:#fff}.skin-blue .main-header .navbar .sidebar-toggle:hover{background-color:#367fa9}@media (max-width:767px){.skin-blue .main-header .navbar .dropdown-menu li.divider{background-color:rgba(255,255,255,0.1)}.skin-blue .main-header .navbar .dropdown-menu li a{color:#fff}.skin-blue .main-header .navbar .dropdown-menu li a:hover{background:#367fa9}}.skin-blue .main-header .logo{background-color:#367fa9;color:#fff;border-bottom:0 solid transparent}.skin-blue .main-header .logo:hover{background:#357ca5}.skin-blue .main-header li.user-header{background-color:#3c8dbc}.skin-blue .content-header{background:transparent}.skin-blue .wrapper,.skin-blue .main-sidebar,.skin-blue .left-side{background-color:#222d32}.skin-blue .user-panel>.info,.skin-blue .user-panel>.info>a{color:#fff}.skin-blue .sidebar-menu>li.header{color:#4b646f;background:#1a2226}.skin-blue .sidebar-menu>li>a{border-left:3px solid transparent;margin-right:1px}.skin-blue .sidebar-menu>li:hover>a,.skin-blue .sidebar-menu>li.active>a{color:#fff;background:#1e282c;border-left-color:#3c8dbc}.skin-blue .sidebar-menu>li>.treeview-menu{margin:0 1px;background:#2c3b41}.skin-blue .sidebar a{color:#b8c7ce}.skin-blue .sidebar a:hover{text-decoration:none}.skin-blue .treeview-menu>li>a{color:#8aa4af}.skin-blue .treeview-menu>li.active>a,.skin-blue .treeview-menu>li>a:hover{color:#fff}.skin-blue .sidebar-form{border-radius:3px;border:1px solid #374850;margin:10px 10px}.skin-blue .sidebar-form input[type=\"text\"],.skin-blue .sidebar-form .btn{box-shadow:none;background-color:#374850;border:1px solid transparent;height:35px;-webkit-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.skin-blue .sidebar-form input[type=\"text\"]{color:#666;border-top-left-radius:2px !important;border-top-right-radius:0 !important;border-bottom-right-radius:0 !important;border-bottom-left-radius:2px !important}.skin-blue .sidebar-form input[type=\"text\"]:focus,.skin-blue .sidebar-form input[type=\"text\"]:focus+.input-group-btn .btn{background-color:#fff;color:#666}.skin-blue .sidebar-form input[type=\"text\"]:focus+.input-group-btn .btn{border-left-color:#fff}.skin-blue .sidebar-form .btn{color:#999;border-top-left-radius:0 !important;border-top-right-radius:2px !important;border-bottom-right-radius:2px !important;border-bottom-left-radius:0 !important}.skin-blue.layout-top-nav .main-header>.logo{background-color:#3c8dbc;color:#fff;border-bottom:0 solid transparent}.skin-blue.layout-top-nav .main-header>.logo:hover{background:#3b8ab8}"]}]);

/***/ },
/* 32 */
/*!**********************************************************************!*\
  !*** ./bower_components/admin-lte/dist/css/skins/skin-black.min.css ***!
  \**********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./~/css-loader?sourceMap!!./bower_components/admin-lte/dist/css/skins/skin-black.min.css */ 33);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./~/style-loader/addStyles.js */ 34)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/ozaki/dev/administa/node_modules/css-loader/index.js?sourceMap!!/home/ozaki/dev/administa/bower_components/admin-lte/dist/css/skins/skin-black.min.css", function() {
			var newContent = require("!!/home/ozaki/dev/administa/node_modules/css-loader/index.js?sourceMap!!/home/ozaki/dev/administa/bower_components/admin-lte/dist/css/skins/skin-black.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 33 */
/*!***********************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./bower_components/admin-lte/dist/css/skins/skin-black.min.css ***!
  \***********************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./~/css-loader/cssToString.js */ 64)();
	exports.push([module.id, ".skin-black .main-header{-webkit-box-shadow:0 1px 1px rgba(0,0,0,0.05);box-shadow:0 1px 1px rgba(0,0,0,0.05)}.skin-black .main-header .navbar-toggle{color:#333}.skin-black .main-header .navbar-brand{color:#333;border-right:1px solid #eee}.skin-black .main-header>.navbar{background-color:#fff}.skin-black .main-header>.navbar .nav>li>a{color:#333}.skin-black .main-header>.navbar .nav>li>a:hover,.skin-black .main-header>.navbar .nav>li>a:active,.skin-black .main-header>.navbar .nav>li>a:focus,.skin-black .main-header>.navbar .nav .open>a,.skin-black .main-header>.navbar .nav .open>a:hover,.skin-black .main-header>.navbar .nav .open>a:focus{background:#fff;color:#999}.skin-black .main-header>.navbar .sidebar-toggle{color:#333}.skin-black .main-header>.navbar .sidebar-toggle:hover{color:#999;background:#fff}.skin-black .main-header>.navbar>.sidebar-toggle{color:#333;border-right:1px solid #eee}.skin-black .main-header>.navbar .navbar-nav>li>a{border-right:1px solid #eee}.skin-black .main-header>.navbar .navbar-custom-menu .navbar-nav>li>a,.skin-black .main-header>.navbar .navbar-right>li>a{border-left:1px solid #eee;border-right-width:0}.skin-black .main-header>.logo{background-color:#fff;color:#333;border-bottom:0 solid transparent;border-right:1px solid #eee}.skin-black .main-header>.logo:hover{background:#fcfcfc}@media (max-width:767px){.skin-black .main-header>.logo{background-color:#222;color:#fff;border-bottom:0 solid transparent;border-right:none}.skin-black .main-header>.logo:hover{background:#1f1f1f}}.skin-black .main-header li.user-header{background-color:#222}.skin-black .content-header{background:transparent;box-shadow:none}.skin-black .wrapper,.skin-black .main-sidebar,.skin-black .left-side{background-color:#222d32}.skin-black .user-panel>.info,.skin-black .user-panel>.info>a{color:#fff}.skin-black .sidebar-menu>li.header{color:#4b646f;background:#1a2226}.skin-black .sidebar-menu>li>a{border-left:3px solid transparent;margin-right:1px}.skin-black .sidebar-menu>li:hover>a,.skin-black .sidebar-menu>li.active>a{color:#fff;background:#1e282c;border-left-color:#fff}.skin-black .sidebar-menu>li>.treeview-menu{margin:0 1px;background:#2c3b41}.skin-black .sidebar a{color:#b8c7ce}.skin-black .sidebar a:hover{text-decoration:none}.skin-black .treeview-menu>li>a{color:#8aa4af}.skin-black .treeview-menu>li.active>a,.skin-black .treeview-menu>li>a:hover{color:#fff}.skin-black .sidebar-form{border-radius:3px;border:1px solid #374850;margin:10px 10px}.skin-black .sidebar-form input[type=\"text\"],.skin-black .sidebar-form .btn{box-shadow:none;background-color:#374850;border:1px solid transparent;height:35px;-webkit-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.skin-black .sidebar-form input[type=\"text\"]{color:#666;border-top-left-radius:2px !important;border-top-right-radius:0 !important;border-bottom-right-radius:0 !important;border-bottom-left-radius:2px !important}.skin-black .sidebar-form input[type=\"text\"]:focus,.skin-black .sidebar-form input[type=\"text\"]:focus+.input-group-btn .btn{background-color:#fff;color:#666}.skin-black .sidebar-form input[type=\"text\"]:focus+.input-group-btn .btn{border-left-color:#fff}.skin-black .sidebar-form .btn{color:#999;border-top-left-radius:0 !important;border-top-right-radius:2px !important;border-bottom-right-radius:2px !important;border-bottom-left-radius:0 !important}", "", {"version":3,"sources":["/home/ozaki/dev/administa/bower_components/admin-lte/dist/css/skins/skin-black.min.css"],"names":[],"mappings":"AAAA","file":"/home/ozaki/dev/administa/node_modules/css-loader/index.js?sourceMap!/home/ozaki/dev/administa/bower_components/admin-lte/dist/css/skins/skin-black.min.css","sourcesContent":[".skin-black .main-header{-webkit-box-shadow:0 1px 1px rgba(0,0,0,0.05);box-shadow:0 1px 1px rgba(0,0,0,0.05)}.skin-black .main-header .navbar-toggle{color:#333}.skin-black .main-header .navbar-brand{color:#333;border-right:1px solid #eee}.skin-black .main-header>.navbar{background-color:#fff}.skin-black .main-header>.navbar .nav>li>a{color:#333}.skin-black .main-header>.navbar .nav>li>a:hover,.skin-black .main-header>.navbar .nav>li>a:active,.skin-black .main-header>.navbar .nav>li>a:focus,.skin-black .main-header>.navbar .nav .open>a,.skin-black .main-header>.navbar .nav .open>a:hover,.skin-black .main-header>.navbar .nav .open>a:focus{background:#fff;color:#999}.skin-black .main-header>.navbar .sidebar-toggle{color:#333}.skin-black .main-header>.navbar .sidebar-toggle:hover{color:#999;background:#fff}.skin-black .main-header>.navbar>.sidebar-toggle{color:#333;border-right:1px solid #eee}.skin-black .main-header>.navbar .navbar-nav>li>a{border-right:1px solid #eee}.skin-black .main-header>.navbar .navbar-custom-menu .navbar-nav>li>a,.skin-black .main-header>.navbar .navbar-right>li>a{border-left:1px solid #eee;border-right-width:0}.skin-black .main-header>.logo{background-color:#fff;color:#333;border-bottom:0 solid transparent;border-right:1px solid #eee}.skin-black .main-header>.logo:hover{background:#fcfcfc}@media (max-width:767px){.skin-black .main-header>.logo{background-color:#222;color:#fff;border-bottom:0 solid transparent;border-right:none}.skin-black .main-header>.logo:hover{background:#1f1f1f}}.skin-black .main-header li.user-header{background-color:#222}.skin-black .content-header{background:transparent;box-shadow:none}.skin-black .wrapper,.skin-black .main-sidebar,.skin-black .left-side{background-color:#222d32}.skin-black .user-panel>.info,.skin-black .user-panel>.info>a{color:#fff}.skin-black .sidebar-menu>li.header{color:#4b646f;background:#1a2226}.skin-black .sidebar-menu>li>a{border-left:3px solid transparent;margin-right:1px}.skin-black .sidebar-menu>li:hover>a,.skin-black .sidebar-menu>li.active>a{color:#fff;background:#1e282c;border-left-color:#fff}.skin-black .sidebar-menu>li>.treeview-menu{margin:0 1px;background:#2c3b41}.skin-black .sidebar a{color:#b8c7ce}.skin-black .sidebar a:hover{text-decoration:none}.skin-black .treeview-menu>li>a{color:#8aa4af}.skin-black .treeview-menu>li.active>a,.skin-black .treeview-menu>li>a:hover{color:#fff}.skin-black .sidebar-form{border-radius:3px;border:1px solid #374850;margin:10px 10px}.skin-black .sidebar-form input[type=\"text\"],.skin-black .sidebar-form .btn{box-shadow:none;background-color:#374850;border:1px solid transparent;height:35px;-webkit-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.skin-black .sidebar-form input[type=\"text\"]{color:#666;border-top-left-radius:2px !important;border-top-right-radius:0 !important;border-bottom-right-radius:0 !important;border-bottom-left-radius:2px !important}.skin-black .sidebar-form input[type=\"text\"]:focus,.skin-black .sidebar-form input[type=\"text\"]:focus+.input-group-btn .btn{background-color:#fff;color:#666}.skin-black .sidebar-form input[type=\"text\"]:focus+.input-group-btn .btn{border-left-color:#fff}.skin-black .sidebar-form .btn{color:#999;border-top-left-radius:0 !important;border-top-right-radius:2px !important;border-bottom-right-radius:2px !important;border-bottom-left-radius:0 !important}"]}]);

/***/ },
/* 34 */
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:text/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 35 */
/*!*****************************!*\
  !*** ./js/AppDispatcher.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Flux) {"use strict";
	
	var Dispatcher = Flux.Dispatcher;
	
	module.exports = new Dispatcher();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! flux */ 2)))

/***/ },
/* 36 */
/*!*************************!*\
  !*** ./js/Constants.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var keyMirror = function keyMirror(obj) {
	  var ret = {};
	  var key;
	  if (!(obj instanceof Object && !Array.isArray(obj))) {
	    throw new Error("keyMirror(...): Argument must be an object.");
	  }
	  for (key in obj) {
	    if (obj.hasOwnProperty(key)) {
	      ret[key] = key;
	    }
	  }
	  return ret;
	};
	
	module.exports = keyMirror({
	  INITIALIZE: null,
	  RESOURCE_BUILD: null,
	  RESOURCE_FETCH: null,
	  RESOURCE_LIST: null,
	  RESOURCE_UPDATED: null,
	  RESOURCE_INVALID: null,
	  DIALOG_OPENED: null,
	  DIALOG_CLOSED: null,
	  MENU_INITIALIZED: null,
	  USER_INITIALIZED: null });

/***/ },
/* 37 */
/*!*********************!*\
  !*** ./js/Utils.js ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = {
	  present: function present(obj) {
	    return obj && Object.keys(obj).length > 0;
	  },
	
	  empty: function empty(obj) {
	    return !obj || Object.keys(obj).length == 0;
	  }
	};

/***/ },
/* 38 */
/*!******************************************!*\
  !*** ./js/components/list/List.react.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var Router = _interopRequire(__webpack_require__(/*! react-router */ 26));
	
	var ResourceActions = _interopRequire(__webpack_require__(/*! actions/ResourceActions */ 9));
	
	var ResourceItem = _interopRequire(__webpack_require__(/*! ./Item.react */ 65));
	
	var Pagination = _interopRequire(__webpack_require__(/*! ./Pagination.react */ 66));
	
	var SearchBox = _interopRequire(__webpack_require__(/*! ./SearchBox.react */ 67));
	
	var LinkMixin = _interopRequire(__webpack_require__(/*! components/LinkMixin */ 45));
	
	var PropertyMixin = _interopRequire(__webpack_require__(/*! components/PropertyMixin */ 68));
	
	var PT = React.PropTypes;
	
	module.exports = React.createClass({
	  displayName: "list/List",
	
	  mixins: [LinkMixin, PropertyMixin, Router.Navigation],
	
	  propTypes: {
	    name: PT.string,
	    id: PT.number,
	    col: PT.number,
	    resources: PT.arrayOf(PT.object),
	    settings: PT.object.isRequired,
	    pagination: PT.object },
	
	  clickItem: function clickItem(resource) {
	    var _this = this;
	
	    var name = this.props.name;
	    var id = resource.id;
	    var pagination = this.props.pagination;
	
	    var attrs = this.linkAttrs(name, id, pagination);
	    var query = this.linkToListQuery(attrs);
	
	    ResourceActions.fetch(name, id, query).then(function () {
	      _this.transitionToShow(name, id, pagination);
	    });
	  },
	
	  newLink: function newLink() {
	    var name = this.props.name;
	
	    console.log("newLink");
	    console.log(name);
	
	    var linkAttrs = {
	      name: name,
	      label: "create",
	      page: this.props.pagination.page,
	      limit: this.props.pagination.limit,
	      order: this.props.pagination.order,
	      q: this.props.pagination.q
	    };
	
	    return this.linkToNew(linkAttrs);
	  },
	
	  render: function render() {
	    var _this = this;
	
	    console.log("resource list render");
	
	    var Item = ResourceItem;
	
	    var classes = "resource-list";
	    classes += " col-md-" + this.props.col;
	
	    var index_settings = this.props.settings.index;
	    var headers = index_settings.columns.map(function (col) {
	      var name = _this.toProperyName(col);
	      return React.createElement(
	        "th",
	        { key: name },
	        name
	      );
	    });
	
	    var items = this.props.resources.map(function (resource) {
	      var resource = resource;
	      var selected = resource.id == _this.props.id;
	      var attrs = {
	        name: _this.props.name,
	        resource: resource,
	        key: resource.id,
	        selected: selected,
	        columns: index_settings.columns,
	        search_columns: _this.props.settings.search_columns,
	        pagination: _this.props.pagination,
	        onclick: function () {
	          _this.clickItem(resource);
	        } };
	
	      return React.createElement(Item, attrs);
	    });
	
	    return React.createElement(
	      "div",
	      { className: classes },
	      React.createElement(
	        "div",
	        { className: "box box-primary" },
	        React.createElement(
	          "div",
	          { className: "box-header with-border" },
	          React.createElement(
	            "h3",
	            { className: "box-title" },
	            " ",
	            this.props.settings.label,
	            " "
	          ),
	          React.createElement(
	            "div",
	            { className: "box-tools pull-right " },
	            React.createElement(SearchBox, this.props),
	            React.createElement(
	              "div",
	              { className: "pull-right input-group input-group-sm" },
	              this.newLink()
	            )
	          )
	        ),
	        React.createElement(
	          "div",
	          { className: "box-body" },
	          React.createElement(
	            "div",
	            { className: "table-responsive" },
	            React.createElement(
	              "table",
	              { className: "table no-margin table-hover table-condensed" },
	              React.createElement(
	                "thead",
	                null,
	                React.createElement(
	                  "tr",
	                  null,
	                  headers
	                )
	              ),
	              React.createElement(
	                "tbody",
	                null,
	                items
	              )
	            )
	          )
	        ),
	        React.createElement(
	          "div",
	          { className: "box-footer clearfix" },
	          React.createElement(Pagination, this.props)
	        )
	      )
	    );
	  } });
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! react */ 1)))

/***/ },
/* 39 */
/*!************************************************!*\
  !*** ./js/components/detail/Property.react.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var PropertyMixin = _interopRequire(__webpack_require__(/*! components/PropertyMixin */ 68));
	
	module.exports = React.createClass({
	  displayName: "detail/Property",
	
	  mixins: [PropertyMixin],
	
	  propTypes: {
	    column: React.PropTypes.object.isRequired,
	    resource: React.PropTypes.object.isRequired,
	    settings: React.PropTypes.object.isRequired },
	
	  render: function render() {
	    var column = this.props.column;
	    var name = this.toProperyName(column);
	
	    var resource = this.props.resource;
	
	    var value = this.toLabel(column, resource, this.props.settings.search_columns);
	    var tag = null;
	
	    switch (this.props.column.type) {
	      case "file":
	        var imgtag = null;
	        if (value.url) {
	          tag = React.createElement(
	            "span",
	            null,
	            React.createElement("img", { src: value.url }),
	            value.url
	          );
	        }
	        break;
	      case "boolean":
	        tag = "on";
	        if (!value) tag = "off";
	        break;
	      default:
	        tag = value;
	    }
	
	    return React.createElement(
	      "div",
	      { className: "form-group", key: name },
	      React.createElement(
	        "label",
	        { htmlFor: name },
	        name
	      ),
	      React.createElement(
	        "blockquote",
	        null,
	        tag
	      )
	    );
	  } });
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! react */ 1)))

/***/ },
/* 40 */
/*!*******************************************!*\
  !*** ./js/components/form/Input.react.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React, jQuery) {"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var InputMixin = _interopRequire(__webpack_require__(/*! ./InputMixin */ 69));
	
	var PropertyMixin = _interopRequire(__webpack_require__(/*! components/PropertyMixin */ 68));
	
	module.exports = React.createClass({
	  displayName: "form/Input",
	
	  mixins: [PropertyMixin, InputMixin],
	
	  getInitialState: function getInitialState() {
	    return {
	      value: this.props.resource[this.props.column.name],
	      dirty: false };
	  },
	
	  handleChange: function handleChange(event) {
	    var initial = this.props.resource[this.props.column.name];
	    var value = event.target.value;
	    if (this.props.column.type == "file") {
	      value = jQuery(event.target).prop("files")[0];
	    }
	    if (this.props.column.type == "boolean") {
	      value = event.target.checked;
	    }
	    this.setState({
	      value: value,
	      dirty: value != initial });
	  },
	
	  getFormValue: function getFormValue() {
	    return this.getResourceValue();
	  },
	
	  getResourceValue: function getResourceValue() {
	    var value = {};
	    value[this.props.column.name] = this.state.value;
	    return value;
	  },
	
	  isDirty: function isDirty() {
	    return this.state.dirty;
	  },
	
	  hasError: function hasError() {
	    return this.props.invalid;
	  },
	
	  inputField: function inputField() {
	    var name = this.props.column.name;
	    var value = this.state.value;
	
	    switch (this.props.column.type) {
	      case "file":
	        var imgtag = null;
	        if (value.url) {
	          imgtag = React.createElement("img", { src: value.url });
	        }
	
	        return React.createElement(
	          "div",
	          null,
	          imgtag,
	          React.createElement("input", { type: "file", className: this.inputClasses(), name: name, disabled: this.props.disabled, onChange: this.handleChange })
	        );
	
	        break;
	      case "boolean":
	        var text = "on";
	        if (!this.state.value) text = "off";
	
	        return React.createElement(
	          "div",
	          { className: "checkbox" },
	          React.createElement(
	            "label",
	            null,
	            React.createElement("input", { type: "checkbox", className: this.inputStatusClasses(), name: name, checked: !!value, disabled: this.props.disabled, onChange: this.handleChange }),
	            text
	          )
	        );
	        break;
	      case "enum":
	        var options = this.props.column.enums.map(function (e) {
	          return React.createElement(
	            "option",
	            { value: e, selected: e === value },
	            e
	          );
	        });
	
	        return React.createElement(
	          "select",
	          { className: "form-control", name: name, disabled: this.props.disabled, onChange: this.handleChange },
	          options
	        );
	        break;
	      default:
	        return React.createElement("input", { type: "text", className: this.inputClasses(), name: name, value: value, disabled: this.props.disabled, onChange: this.handleChange });
	    }
	  },
	
	  render: function render() {
	    var name = this.props.column.name;
	    var column = this.props.column;
	    var label = this.toProperyName(column);
	
	    return React.createElement(
	      "div",
	      { className: this.formClasses(), key: name },
	      React.createElement(
	        "label",
	        { htmlFor: name },
	        label
	      ),
	      this.inputField(),
	      this.errorsBlock(label)
	    );
	  } });
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! react */ 1), __webpack_require__(/*! jquery */ 4)))

/***/ },
/* 41 */
/*!***********************************************!*\
  !*** ./js/components/form/BelongsTo.react.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var InputMixin = _interopRequire(__webpack_require__(/*! ./InputMixin */ 69));
	
	var PropertyMixin = _interopRequire(__webpack_require__(/*! components/PropertyMixin */ 68));
	
	module.exports = React.createClass({
	  displayName: "form/BelongsTo",
	
	  mixins: [PropertyMixin, InputMixin],
	
	  getFormValue: function getFormValue() {
	    var value = this.getResourceValue();
	    delete value[this.props.column.association.name];
	
	    return value;
	  },
	
	  getResourceValue: function getResourceValue() {
	    var value = {};
	    var name = this.props.column.name;
	    value[name] = null;
	    var target = this.refs.association.state.target;
	    if (target) {
	      value[name] = target.id;
	      value[this.props.column.association.name] = target;
	    }
	
	    return value;
	  },
	
	  isDirty: function isDirty() {
	    return this.refs.association.isDirty();
	  },
	
	  hasError: function hasError() {
	    return this.props.invalid;
	  },
	
	  render: function render() {
	    var column = this.props.column;
	    var name = column.name;
	    var label = this.toProperyName(column);
	    var association = this.props.column.association;
	    var target = this.props.resource[association.name];
	
	    return React.createElement(
	      "div",
	      { className: this.formClasses(), key: name },
	      React.createElement(
	        "label",
	        null,
	        label
	      ),
	      this.createAssociation(target, { ref: "association" }),
	      this.errorsBlock(label)
	    );
	  } });
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! react */ 1)))

/***/ },
/* 42 */
/*!********************************************!*\
  !*** ./js/components/form/HasOne.react.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var InputMixin = _interopRequire(__webpack_require__(/*! ./InputMixin */ 69));
	
	var PropertyMixin = _interopRequire(__webpack_require__(/*! components/PropertyMixin */ 68));
	
	module.exports = React.createClass({
	  displayName: "form/HasOne",
	
	  mixins: [PropertyMixin, InputMixin],
	
	  getFormValue: function getFormValue() {
	    return this.refs.association.getFormValue();
	  },
	
	  getResourceValue: function getResourceValue() {
	    return this.refs.association.getResourceValue();
	  },
	
	  isDirty: function isDirty() {
	    return this.refs.association.isDirty();
	  },
	
	  hasError: function hasError() {
	    return this.props.invalid;
	  },
	
	  render: function render() {
	    var column = this.props.column;
	    var name = column.name;
	    var label = this.toProperyName(column);
	    var association = this.props.column.association;
	    var target = this.props.resource[association.name];
	
	    return React.createElement(
	      "div",
	      { className: this.formClasses(), key: name },
	      React.createElement(
	        "label",
	        null,
	        label
	      ),
	      this.createAssociation(target, { ref: "association" }),
	      this.errorsBlock(label)
	    );
	  } });
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! react */ 1)))

/***/ },
/* 43 */
/*!*********************************************!*\
  !*** ./js/components/form/HasMany.react.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var InputMixin = _interopRequire(__webpack_require__(/*! ./InputMixin */ 69));
	
	var CollectionMixin = _interopRequire(__webpack_require__(/*! ./CollectionMixin */ 70));
	
	var PropertyMixin = _interopRequire(__webpack_require__(/*! components/PropertyMixin */ 68));
	
	module.exports = React.createClass({
	  displayName: "form/HasMany",
	
	  mixins: [PropertyMixin, InputMixin, CollectionMixin],
	
	  getFormValue: function getFormValue() {
	    var keys = Object.keys(this.refs);
	    var result = {};
	    var targets = [];
	    var name = this.props.column.association.name;
	
	    for (var i = 0, len = keys.length; i < len; i++) {
	      var key = keys[i];
	      var property = this.refs[key];
	      if (property.isDirty()) {
	        var value = property.getFormValue();
	        targets.push(value[name]);
	      }
	    }
	
	    result[name] = targets;
	    return result;
	  } });
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! react */ 1)))

/***/ },
/* 44 */
/*!*********************************************!*\
  !*** ./js/components/form/Through.react.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var InputMixin = _interopRequire(__webpack_require__(/*! ./InputMixin */ 69));
	
	var CollectionMixin = _interopRequire(__webpack_require__(/*! ./CollectionMixin */ 70));
	
	var PropertyMixin = _interopRequire(__webpack_require__(/*! components/PropertyMixin */ 68));
	
	module.exports = React.createClass({
	  displayName: "form/Through",
	
	  mixins: [PropertyMixin, InputMixin, CollectionMixin],
	
	  getFormValue: function getFormValue() {
	    var keys = Object.keys(this.refs);
	    var result = {};
	    var targets = [];
	    var ids = [];
	    var name = this.props.column.association.name;
	    var dirty = false;
	
	    for (var i = 0, len = keys.length; i < len; i++) {
	      var key = keys[i];
	      var property = this.refs[key];
	      var target = property.state.target;
	      if (target && target.id) {
	        ids.push(target.id);
	      }
	      if (property.isDirty()) {
	        dirty = true;
	        switch (property.state.reason) {
	          case "created":
	          case "edited":
	            var value = property.getFormValue();
	            targets.push(value[name]);
	            break;
	          case "selected":
	            break;
	        }
	      }
	    }
	
	    result[name] = targets;
	    if (dirty) {
	      result[this.props.column.association.foreign_key] = ids;
	    }
	    return result;
	  } });
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! react */ 1)))

/***/ },
/* 45 */
/*!************************************!*\
  !*** ./js/components/LinkMixin.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var Router = _interopRequire(__webpack_require__(/*! react-router */ 26));
	
	var ResourceActions = _interopRequire(__webpack_require__(/*! actions/ResourceActions */ 9));
	
	var Link = Router.Link;
	
	module.exports = {
	  transitionToShow: function transitionToShow(name, id, pagination) {
	    var options = {
	      name: name,
	      id: id,
	      page: pagination.page,
	      limit: pagination.limit,
	      order: pagination.order,
	      q: pagination.q
	    };
	
	    var params = { name: name, id: id };
	    var query = this.linkToListQuery(options);
	
	    console.log("--transitionToShow");
	    console.log(params);
	    console.log(query);
	    console.log("---");
	
	    this.transitionTo("show", params, query);
	  },
	
	  linkToNew: function linkToNew() {
	    var _this = this;
	
	    var options = arguments[0] === undefined ? {} : arguments[0];
	
	    var name = options.name;
	    var label = options.label;
	
	    var params = { name: name };
	    var query = this.linkToListQuery(options);
	
	    var f = function (event) {
	      event.preventDefault();
	
	      ResourceActions.build(name, query).then(function () {
	        _this.transitionTo("new", params, query);
	      });
	      return true;
	    };
	
	    var classes = options.classes || "btn btn-primary btn-xs btn-flat";
	    var href = this.makeHref("new", params, query);
	
	    var link = React.createElement(
	      "a",
	      { herf: href, onClick: f, className: classes },
	      label
	    );
	    return link;
	  },
	
	  linkToEdit: function linkToEdit() {
	    var _this = this;
	
	    var options = arguments[0] === undefined ? {} : arguments[0];
	
	    var name = options.name;
	    var id = options.id;
	    var label = options.label;
	
	    var params = { name: name, id: id };
	    var query = this.linkToListQuery(options);
	
	    var f = function (event) {
	      event.preventDefault();
	      ResourceActions.fetch(name, id, query).then(function () {
	        _this.transitionTo("edit", params, query);
	      });
	      return true;
	    };
	
	    var classes = options.classes || "btn btn-primary btn-xs btn-flat";
	    var href = this.makeHref("edit", params, query);
	
	    var link = React.createElement(
	      "a",
	      { herf: href, onClick: f, className: classes },
	      label
	    );
	    return link;
	  },
	
	  linkToShow: function linkToShow() {
	    var _this = this;
	
	    var options = arguments[0] === undefined ? {} : arguments[0];
	
	    var name = options.name;
	    var id = options.id;
	    var label = options.label;
	
	    var params = { name: name, id: id };
	    var query = this.linkToListQuery(options);
	
	    var f = function (event) {
	      event.preventDefault();
	
	      ResourceActions.fetch(name, id, query).then(function () {
	        _this.transitionTo("show", params, query);
	      });
	      return true;
	    };
	
	    var classes = options.classes || "btn btn-primary btn-xs btn-flat";
	    var href = this.makeHref("show", params, query);
	
	    var link = React.createElement(
	      "a",
	      { herf: href, onClick: f, className: classes },
	      label
	    );
	    return link;
	  },
	
	  linkToList: function linkToList() {
	    var _this = this;
	
	    var options = arguments[0] === undefined ? {} : arguments[0];
	
	    var route = "resource";
	    var name = options.name;
	    var id = options.id;
	    var label = options.label;
	
	    var params = { name: name };
	    if (id) {
	      params.id = id;
	      route = "show";
	    }
	    var query = this.linkToListQuery(options);
	    var transition = !(options.transition == false);
	
	    var f = function (event) {
	      event.preventDefault();
	
	      ResourceActions.list(options.name, query).then(function () {
	        if (transition) {
	          _this.transitionTo(route, params, query);
	        }
	      });
	    };
	
	    var classes = options.classes;
	    var href = this.makeHref(route, params, query);
	
	    var link = React.createElement(
	      "a",
	      { herf: href, onClick: f, className: classes, key: label },
	      label
	    );
	    return link;
	  },
	
	  linkAttrs: function linkAttrs(name, id, pagination) {
	    return {
	      name: name,
	      id: id,
	      page: pagination.page,
	      limit: pagination.limit,
	      order: pagination.order,
	      q: pagination.q
	    };
	  },
	
	  linkToListQuery: function linkToListQuery() {
	    var options = arguments[0] === undefined ? {} : arguments[0];
	
	    return {
	      page: options.page,
	      limit: options.limit,
	      order: options.order,
	      q: options.q
	    };
	  } };
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! react */ 1)))

/***/ },
/* 46 */
/*!***************************************!*\
  !*** ./js/components/Dialog.react.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var DialogActions = _interopRequire(__webpack_require__(/*! actions/DialogActions */ 71));
	
	module.exports = React.createClass({
	  displayName: "Dialog",
	
	  propTypes: {
	    name: React.PropTypes.string,
	    opened: React.PropTypes.bool,
	    component: React.PropTypes.func,
	    componentProps: React.PropTypes.object,
	    onclose: React.PropTypes.func,
	    index: React.PropTypes.number },
	
	  close: function close() {
	    if (this.props.onclose) {
	      this.props.onclose();
	    }
	    DialogActions.close(this.props.name);
	  },
	
	  render: function render() {
	    if (this.props.opened && this.props.component) {
	      var InnerComponent = this.props.component;
	
	      var index = this.props.index;
	      console.log("Dialog:render: " + this.props.name);
	      console.log(InnerComponent);
	      var zindex = 10000000 + (index + 1) * 10;
	      var style = {
	        top: index * 20 + "px",
	        left: index * 20 + "px" };
	
	      return React.createElement(
	        "div",
	        { className: "dialog-base", style: { zIndex: zindex } },
	        React.createElement("div", { className: "dialog-bg", onClick: this.close }),
	        React.createElement(
	          "div",
	          { style: style },
	          React.createElement(InnerComponent, this.props.componentProps)
	        )
	      );
	    } else {
	      return React.createElement("div", { className: "dialog-base", style: { display: "none" } });
	    }
	  }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! react */ 1)))

/***/ },
/* 47 */
/*!********************************!*\
  !*** ./js/stores/UserStore.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var Events = _interopRequire(__webpack_require__(/*! events */ 78));
	
	var Constants = _interopRequire(__webpack_require__(/*! ../Constants */ 36));
	
	var AppDispatcher = _interopRequire(__webpack_require__(/*! ../AppDispatcher */ 35));
	
	var assign = _interopRequire(__webpack_require__(/*! object-assign */ 51));
	
	var _user = {};
	var UserStore = assign({}, Events.EventEmitter.prototype, {
	
	  emitEvent: function emitEvent() {
	    this.emit();
	  },
	
	  addEventListener: function addEventListener(callback) {
	    this.on("user:change", callback);
	  },
	
	  removeEventListener: function removeEventListener(callback) {
	    this.removeListener("user:change", callback);
	  },
	
	  setState: function setState(user) {
	    _user = user;
	  },
	
	  getState: function getState() {
	    return _user;
	  } });
	
	AppDispatcher.register(function (action) {
	  switch (action.type) {
	    case Constants.USER_INITIALIZED:
	      var data = action.data;
	      UserStore.setState(data);
	      UserStore.emitEvent();
	
	      break;
	
	    default: // no op
	  }
	});
	module.exports = UserStore;

/***/ },
/* 48 */
/*!********************************!*\
  !*** ./js/stores/MenuStore.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var Events = _interopRequire(__webpack_require__(/*! events */ 78));
	
	var Constants = _interopRequire(__webpack_require__(/*! ../Constants */ 36));
	
	var AppDispatcher = _interopRequire(__webpack_require__(/*! ../AppDispatcher */ 35));
	
	var assign = _interopRequire(__webpack_require__(/*! object-assign */ 51));
	
	var _menus = [];
	var MenuStore = assign({}, Events.EventEmitter.prototype, {
	
	  emitEvent: function emitEvent() {
	    this.emit();
	  },
	
	  addEventListener: function addEventListener(callback) {
	    this.on("menu:change", callback);
	  },
	
	  removeEventListener: function removeEventListener(callback) {
	    this.removeListener("menu:change", callback);
	  },
	
	  setState: function setState(menus) {
	    _menus = menus;
	  },
	
	  getState: function getState() {
	    return _menus;
	  } });
	
	AppDispatcher.register(function (action) {
	  switch (action.type) {
	    case Constants.MENU_INITIALIZED:
	      var data = action.data;
	      MenuStore.setState(data);
	      MenuStore.emitEvent();
	
	      break;
	
	    default: // no op
	  }
	});
	module.exports = MenuStore;

/***/ },
/* 49 */
/*!************************************!*\
  !*** ./js/stores/ResourceStore.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var Events = _interopRequire(__webpack_require__(/*! events */ 78));
	
	var Constants = _interopRequire(__webpack_require__(/*! ../Constants */ 36));
	
	var AppDispatcher = _interopRequire(__webpack_require__(/*! ../AppDispatcher */ 35));
	
	var assign = _interopRequire(__webpack_require__(/*! object-assign */ 51));
	
	var states = {};
	
	var ResourceState = (function () {
	  function ResourceState(name) {
	    var data = arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, ResourceState);
	
	    this.name = name || "";
	    this.currentId = data.id;
	    this.currentResource = data.resource;
	    this.settings = data.settings || {};
	    this.resources = data.resources || [];
	    this.pagination = data.pagination || {};
	    this.errors = data.errors || {};
	    this.csrfToken = data.csrf_token || "";
	  }
	
	  _createClass(ResourceState, {
	    update: {
	      value: function update(other) {
	        var setUnlessEmpty = function setUnlessEmpty(attr, self) {
	          if (other.hasOwnProperty(attr) == false) {
	            return;
	          }
	          var v = other[attr];
	          if (v && Object.keys(v).length > 0) {
	            self[attr] = v;
	          }
	        };
	
	        if (other.currentId) this.currentId = other.currentId;
	
	        setUnlessEmpty("currentResource", this);
	        setUnlessEmpty("resources", this);
	        setUnlessEmpty("settings", this);
	        setUnlessEmpty("pagination", this);
	        setUnlessEmpty("errors", this);
	        setUnlessEmpty("csrfToken", this);
	        return this;
	      }
	    },
	    clone: {
	      value: function clone() {
	        return new ResourceState(this.name, {
	          id: this.currentId,
	          resource: this.currentResource,
	          settings: this.settings,
	          resources: this.resources,
	          pagination: this.pagination,
	          csrfToken: this.csrfToken });
	      }
	    }
	  });
	
	  return ResourceState;
	})();
	
	var ResourceStore = assign({}, Events.EventEmitter.prototype, {
	
	  eventTag: function eventTag(name) {
	    return "resource:" + name;
	  },
	
	  emitEvent: function emitEvent(name) {
	    this.emit(this.eventTag(name));
	
	    if (name != "*") {
	      this.emit(this.eventTag("*"));
	    }
	  },
	
	  addEventListener: function addEventListener(name, callback) {
	    this.on(this.eventTag(name), callback);
	  },
	
	  removeEventListener: function removeEventListener(name, callback) {
	    this.removeListener(this.eventTag(name), callback);
	  },
	
	  updateState: function updateState(name, data) {
	    var old = this.getState(name);
	    var state = new ResourceState(name, data);
	
	    console.log("update state");
	    console.log("old :");
	    console.log(old);
	    console.log("new ");
	    console.log(state);
	    if (old) {
	      state = old.clone().update(state);
	    }
	
	    console.log("result");
	    console.log(state);
	    this.setState(name, state);
	    return state;
	  },
	
	  setState: function setState(name, state) {
	    states[name] = state;
	  },
	
	  getState: function getState(name) {
	    return states[name];
	  },
	
	  getAllState: function getAllState() {
	    return states;
	  } });
	
	AppDispatcher.register(function (action) {
	  switch (action.type) {
	    case Constants.INITIALIZE:
	      console.log("store INITIALIZE");
	      var data = action.data;
	      console.log(data);
	      var name = data.name;
	
	      var state = new ResourceState(name, data);
	      console.log(state);
	
	      ResourceStore.setState(name, state);
	      ResourceStore.emitEvent(name);
	
	      break;
	    case Constants.RESOURCE_FETCH:
	      console.log("store RESOURCE_FETCH");
	
	      var data = action.data;
	      var name = action.name;
	
	      ResourceStore.updateState(name, data);
	      ResourceStore.emitEvent(name);
	
	      break;
	    case Constants.RESOURCE_LIST:
	      console.log("store RESOURCE_LIST");
	      var data = action.data;
	      var name = action.name;
	
	      ResourceStore.updateState(name, data);
	      ResourceStore.emitEvent(name);
	
	      break;
	    case Constants.RESOURCE_BUILD:
	      console.log("store RESOURCE_BUILD");
	
	      var data = action.data;
	      var name = action.name;
	
	      var state = ResourceStore.updateState(name, data);
	      state.currentId = null; // clear currentid
	      ResourceStore.emitEvent(name);
	
	      break;
	    case Constants.RESOURCE_CREATED:
	      console.log("store RESOURCE_CREATED");
	
	      var data = action.data;
	      var name = action.name;
	
	      ResourceStore.updateState(name, data);
	      ResourceStore.emitEvent(name);
	
	      break;
	    case Constants.RESOURCE_UPDATED:
	      console.log("store RESOURCE_UPDATED");
	
	      var data = action.data;
	      var name = action.name;
	
	      ResourceStore.updateState(name, data);
	      ResourceStore.emitEvent(name);
	
	      break;
	    case Constants.RESOURCE_INVALID:
	      console.log("store RESOURCE_INVALID");
	
	      var data = action.data;
	      var name = action.name;
	
	      ResourceStore.updateState(name, data);
	      ResourceStore.emitEvent(name);
	
	    default: // no op
	  }
	});
	module.exports = ResourceStore;

/***/ },
/* 50 */
/*!**********************************!*\
  !*** ./js/stores/DialogStore.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var Events = _interopRequire(__webpack_require__(/*! events */ 78));
	
	var Constants = _interopRequire(__webpack_require__(/*! ../Constants */ 36));
	
	var AppDispatcher = _interopRequire(__webpack_require__(/*! ../AppDispatcher */ 35));
	
	var assign = _interopRequire(__webpack_require__(/*! object-assign */ 51));
	
	var dialogs = {};
	var index = 0;
	
	var DialogState = (function () {
	  function DialogState(name, component, index, props) {
	    _classCallCheck(this, DialogState);
	
	    this.name = name;
	    this.component = component;
	    this.index = index;
	    this.props = props;
	    this.opened = false;
	  }
	
	  _createClass(DialogState, {
	    open: {
	      value: function open() {
	        this.opened = true;
	      }
	    },
	    close: {
	      value: function close() {
	        this.opened = false;
	      }
	    }
	  });
	
	  return DialogState;
	})();
	
	var DialogStore = assign({}, Events.EventEmitter.prototype, {
	
	  eventTag: function eventTag(name) {
	    return "dialog:" + name;
	  },
	
	  emitEvent: function emitEvent(name) {
	    this.emit(this.eventTag(name));
	
	    if (name != "*") {
	      this.emit(this.eventTag("*"));
	    }
	  },
	
	  addEventListener: function addEventListener(name, callback) {
	    this.on(this.eventTag(name), callback);
	  },
	
	  removeEventListener: function removeEventListener(name, callback) {
	    this.removeListener(this.eventTag(name), callback);
	  },
	
	  setState: function setState(name, dialog) {
	    dialogs[name] = dialog;
	    console.log("DialogStore: setState: " + name);
	    console.log(dialog);
	    console.log(dialogs);
	  },
	
	  getState: function getState(name) {
	    return dialogs[name];
	  },
	
	  getAllState: function getAllState() {
	    return dialogs;
	  } });
	
	AppDispatcher.register(function (action) {
	  switch (action.type) {
	    case Constants.DIALOG_OPENED:
	      var data = action.data;
	      var name = data.name;
	
	      var dialog = new DialogState(name, data.component, index++, data.props);
	
	      dialog.open();
	      DialogStore.setState(name, dialog);
	      console.log("DialogStore: OPENED");
	      console.log(dialog);
	
	      DialogStore.emitEvent(name);
	      break;
	
	    case Constants.DIALOG_CLOSED:
	      var data = action.data;
	      var name = data.name;
	
	      console.log("DialogStore: CLOSED");
	      var dialog = DialogStore.getState(name);
	      if (dialog) {
	        dialog.close();
	        --index;
	        DialogStore.setState(name, dialog);
	        DialogStore.emitEvent(name);
	      }
	
	      break;
	    default: // no op
	  }
	});
	module.exports = DialogStore;

/***/ },
/* 51 */
/*!*************************************************!*\
  !*** ./bower_components/object-assign/index.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);
	
		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = Object.keys(Object(from));
	
			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}
	
		return to;
	};


/***/ },
/* 52 */
/*!*****************************************************!*\
  !*** ./bower_components/bootstrap/js/transition.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: transition.js v3.3.4
	 * http://getbootstrap.com/javascript/#transitions
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
	  // ============================================================
	
	  function transitionEnd() {
	    var el = document.createElement('bootstrap')
	
	    var transEndEventNames = {
	      WebkitTransition : 'webkitTransitionEnd',
	      MozTransition    : 'transitionend',
	      OTransition      : 'oTransitionEnd otransitionend',
	      transition       : 'transitionend'
	    }
	
	    for (var name in transEndEventNames) {
	      if (el.style[name] !== undefined) {
	        return { end: transEndEventNames[name] }
	      }
	    }
	
	    return false // explicit for ie8 (  ._.)
	  }
	
	  // http://blog.alexmaccaw.com/css-transitions
	  $.fn.emulateTransitionEnd = function (duration) {
	    var called = false
	    var $el = this
	    $(this).one('bsTransitionEnd', function () { called = true })
	    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
	    setTimeout(callback, duration)
	    return this
	  }
	
	  $(function () {
	    $.support.transition = transitionEnd()
	
	    if (!$.support.transition) return
	
	    $.event.special.bsTransitionEnd = {
	      bindType: $.support.transition.end,
	      delegateType: $.support.transition.end,
	      handle: function (e) {
	        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
	      }
	    }
	  })
	
	}(jQuery);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 4)))

/***/ },
/* 53 */
/*!************************************************!*\
  !*** ./bower_components/bootstrap/js/alert.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: alert.js v3.3.4
	 * http://getbootstrap.com/javascript/#alerts
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // ALERT CLASS DEFINITION
	  // ======================
	
	  var dismiss = '[data-dismiss="alert"]'
	  var Alert   = function (el) {
	    $(el).on('click', dismiss, this.close)
	  }
	
	  Alert.VERSION = '3.3.4'
	
	  Alert.TRANSITION_DURATION = 150
	
	  Alert.prototype.close = function (e) {
	    var $this    = $(this)
	    var selector = $this.attr('data-target')
	
	    if (!selector) {
	      selector = $this.attr('href')
	      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
	    }
	
	    var $parent = $(selector)
	
	    if (e) e.preventDefault()
	
	    if (!$parent.length) {
	      $parent = $this.closest('.alert')
	    }
	
	    $parent.trigger(e = $.Event('close.bs.alert'))
	
	    if (e.isDefaultPrevented()) return
	
	    $parent.removeClass('in')
	
	    function removeElement() {
	      // detach from parent, fire event then clean up data
	      $parent.detach().trigger('closed.bs.alert').remove()
	    }
	
	    $.support.transition && $parent.hasClass('fade') ?
	      $parent
	        .one('bsTransitionEnd', removeElement)
	        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
	      removeElement()
	  }
	
	
	  // ALERT PLUGIN DEFINITION
	  // =======================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this)
	      var data  = $this.data('bs.alert')
	
	      if (!data) $this.data('bs.alert', (data = new Alert(this)))
	      if (typeof option == 'string') data[option].call($this)
	    })
	  }
	
	  var old = $.fn.alert
	
	  $.fn.alert             = Plugin
	  $.fn.alert.Constructor = Alert
	
	
	  // ALERT NO CONFLICT
	  // =================
	
	  $.fn.alert.noConflict = function () {
	    $.fn.alert = old
	    return this
	  }
	
	
	  // ALERT DATA-API
	  // ==============
	
	  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)
	
	}(jQuery);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 4)))

/***/ },
/* 54 */
/*!*************************************************!*\
  !*** ./bower_components/bootstrap/js/button.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: button.js v3.3.4
	 * http://getbootstrap.com/javascript/#buttons
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // BUTTON PUBLIC CLASS DEFINITION
	  // ==============================
	
	  var Button = function (element, options) {
	    this.$element  = $(element)
	    this.options   = $.extend({}, Button.DEFAULTS, options)
	    this.isLoading = false
	  }
	
	  Button.VERSION  = '3.3.4'
	
	  Button.DEFAULTS = {
	    loadingText: 'loading...'
	  }
	
	  Button.prototype.setState = function (state) {
	    var d    = 'disabled'
	    var $el  = this.$element
	    var val  = $el.is('input') ? 'val' : 'html'
	    var data = $el.data()
	
	    state = state + 'Text'
	
	    if (data.resetText == null) $el.data('resetText', $el[val]())
	
	    // push to event loop to allow forms to submit
	    setTimeout($.proxy(function () {
	      $el[val](data[state] == null ? this.options[state] : data[state])
	
	      if (state == 'loadingText') {
	        this.isLoading = true
	        $el.addClass(d).attr(d, d)
	      } else if (this.isLoading) {
	        this.isLoading = false
	        $el.removeClass(d).removeAttr(d)
	      }
	    }, this), 0)
	  }
	
	  Button.prototype.toggle = function () {
	    var changed = true
	    var $parent = this.$element.closest('[data-toggle="buttons"]')
	
	    if ($parent.length) {
	      var $input = this.$element.find('input')
	      if ($input.prop('type') == 'radio') {
	        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false
	        else $parent.find('.active').removeClass('active')
	      }
	      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
	    } else {
	      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
	    }
	
	    if (changed) this.$element.toggleClass('active')
	  }
	
	
	  // BUTTON PLUGIN DEFINITION
	  // ========================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.button')
	      var options = typeof option == 'object' && option
	
	      if (!data) $this.data('bs.button', (data = new Button(this, options)))
	
	      if (option == 'toggle') data.toggle()
	      else if (option) data.setState(option)
	    })
	  }
	
	  var old = $.fn.button
	
	  $.fn.button             = Plugin
	  $.fn.button.Constructor = Button
	
	
	  // BUTTON NO CONFLICT
	  // ==================
	
	  $.fn.button.noConflict = function () {
	    $.fn.button = old
	    return this
	  }
	
	
	  // BUTTON DATA-API
	  // ===============
	
	  $(document)
	    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
	      var $btn = $(e.target)
	      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
	      Plugin.call($btn, 'toggle')
	      e.preventDefault()
	    })
	    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
	      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
	    })
	
	}(jQuery);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 4)))

/***/ },
/* 55 */
/*!***************************************************!*\
  !*** ./bower_components/bootstrap/js/carousel.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: carousel.js v3.3.4
	 * http://getbootstrap.com/javascript/#carousel
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // CAROUSEL CLASS DEFINITION
	  // =========================
	
	  var Carousel = function (element, options) {
	    this.$element    = $(element)
	    this.$indicators = this.$element.find('.carousel-indicators')
	    this.options     = options
	    this.paused      = null
	    this.sliding     = null
	    this.interval    = null
	    this.$active     = null
	    this.$items      = null
	
	    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))
	
	    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
	      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
	      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
	  }
	
	  Carousel.VERSION  = '3.3.4'
	
	  Carousel.TRANSITION_DURATION = 600
	
	  Carousel.DEFAULTS = {
	    interval: 5000,
	    pause: 'hover',
	    wrap: true,
	    keyboard: true
	  }
	
	  Carousel.prototype.keydown = function (e) {
	    if (/input|textarea/i.test(e.target.tagName)) return
	    switch (e.which) {
	      case 37: this.prev(); break
	      case 39: this.next(); break
	      default: return
	    }
	
	    e.preventDefault()
	  }
	
	  Carousel.prototype.cycle = function (e) {
	    e || (this.paused = false)
	
	    this.interval && clearInterval(this.interval)
	
	    this.options.interval
	      && !this.paused
	      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
	
	    return this
	  }
	
	  Carousel.prototype.getItemIndex = function (item) {
	    this.$items = item.parent().children('.item')
	    return this.$items.index(item || this.$active)
	  }
	
	  Carousel.prototype.getItemForDirection = function (direction, active) {
	    var activeIndex = this.getItemIndex(active)
	    var willWrap = (direction == 'prev' && activeIndex === 0)
	                || (direction == 'next' && activeIndex == (this.$items.length - 1))
	    if (willWrap && !this.options.wrap) return active
	    var delta = direction == 'prev' ? -1 : 1
	    var itemIndex = (activeIndex + delta) % this.$items.length
	    return this.$items.eq(itemIndex)
	  }
	
	  Carousel.prototype.to = function (pos) {
	    var that        = this
	    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))
	
	    if (pos > (this.$items.length - 1) || pos < 0) return
	
	    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
	    if (activeIndex == pos) return this.pause().cycle()
	
	    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
	  }
	
	  Carousel.prototype.pause = function (e) {
	    e || (this.paused = true)
	
	    if (this.$element.find('.next, .prev').length && $.support.transition) {
	      this.$element.trigger($.support.transition.end)
	      this.cycle(true)
	    }
	
	    this.interval = clearInterval(this.interval)
	
	    return this
	  }
	
	  Carousel.prototype.next = function () {
	    if (this.sliding) return
	    return this.slide('next')
	  }
	
	  Carousel.prototype.prev = function () {
	    if (this.sliding) return
	    return this.slide('prev')
	  }
	
	  Carousel.prototype.slide = function (type, next) {
	    var $active   = this.$element.find('.item.active')
	    var $next     = next || this.getItemForDirection(type, $active)
	    var isCycling = this.interval
	    var direction = type == 'next' ? 'left' : 'right'
	    var that      = this
	
	    if ($next.hasClass('active')) return (this.sliding = false)
	
	    var relatedTarget = $next[0]
	    var slideEvent = $.Event('slide.bs.carousel', {
	      relatedTarget: relatedTarget,
	      direction: direction
	    })
	    this.$element.trigger(slideEvent)
	    if (slideEvent.isDefaultPrevented()) return
	
	    this.sliding = true
	
	    isCycling && this.pause()
	
	    if (this.$indicators.length) {
	      this.$indicators.find('.active').removeClass('active')
	      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
	      $nextIndicator && $nextIndicator.addClass('active')
	    }
	
	    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
	    if ($.support.transition && this.$element.hasClass('slide')) {
	      $next.addClass(type)
	      $next[0].offsetWidth // force reflow
	      $active.addClass(direction)
	      $next.addClass(direction)
	      $active
	        .one('bsTransitionEnd', function () {
	          $next.removeClass([type, direction].join(' ')).addClass('active')
	          $active.removeClass(['active', direction].join(' '))
	          that.sliding = false
	          setTimeout(function () {
	            that.$element.trigger(slidEvent)
	          }, 0)
	        })
	        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
	    } else {
	      $active.removeClass('active')
	      $next.addClass('active')
	      this.sliding = false
	      this.$element.trigger(slidEvent)
	    }
	
	    isCycling && this.cycle()
	
	    return this
	  }
	
	
	  // CAROUSEL PLUGIN DEFINITION
	  // ==========================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.carousel')
	      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
	      var action  = typeof option == 'string' ? option : options.slide
	
	      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
	      if (typeof option == 'number') data.to(option)
	      else if (action) data[action]()
	      else if (options.interval) data.pause().cycle()
	    })
	  }
	
	  var old = $.fn.carousel
	
	  $.fn.carousel             = Plugin
	  $.fn.carousel.Constructor = Carousel
	
	
	  // CAROUSEL NO CONFLICT
	  // ====================
	
	  $.fn.carousel.noConflict = function () {
	    $.fn.carousel = old
	    return this
	  }
	
	
	  // CAROUSEL DATA-API
	  // =================
	
	  var clickHandler = function (e) {
	    var href
	    var $this   = $(this)
	    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
	    if (!$target.hasClass('carousel')) return
	    var options = $.extend({}, $target.data(), $this.data())
	    var slideIndex = $this.attr('data-slide-to')
	    if (slideIndex) options.interval = false
	
	    Plugin.call($target, options)
	
	    if (slideIndex) {
	      $target.data('bs.carousel').to(slideIndex)
	    }
	
	    e.preventDefault()
	  }
	
	  $(document)
	    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
	    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)
	
	  $(window).on('load', function () {
	    $('[data-ride="carousel"]').each(function () {
	      var $carousel = $(this)
	      Plugin.call($carousel, $carousel.data())
	    })
	  })
	
	}(jQuery);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 4)))

/***/ },
/* 56 */
/*!***************************************************!*\
  !*** ./bower_components/bootstrap/js/collapse.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: collapse.js v3.3.4
	 * http://getbootstrap.com/javascript/#collapse
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // COLLAPSE PUBLIC CLASS DEFINITION
	  // ================================
	
	  var Collapse = function (element, options) {
	    this.$element      = $(element)
	    this.options       = $.extend({}, Collapse.DEFAULTS, options)
	    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
	                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
	    this.transitioning = null
	
	    if (this.options.parent) {
	      this.$parent = this.getParent()
	    } else {
	      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
	    }
	
	    if (this.options.toggle) this.toggle()
	  }
	
	  Collapse.VERSION  = '3.3.4'
	
	  Collapse.TRANSITION_DURATION = 350
	
	  Collapse.DEFAULTS = {
	    toggle: true
	  }
	
	  Collapse.prototype.dimension = function () {
	    var hasWidth = this.$element.hasClass('width')
	    return hasWidth ? 'width' : 'height'
	  }
	
	  Collapse.prototype.show = function () {
	    if (this.transitioning || this.$element.hasClass('in')) return
	
	    var activesData
	    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')
	
	    if (actives && actives.length) {
	      activesData = actives.data('bs.collapse')
	      if (activesData && activesData.transitioning) return
	    }
	
	    var startEvent = $.Event('show.bs.collapse')
	    this.$element.trigger(startEvent)
	    if (startEvent.isDefaultPrevented()) return
	
	    if (actives && actives.length) {
	      Plugin.call(actives, 'hide')
	      activesData || actives.data('bs.collapse', null)
	    }
	
	    var dimension = this.dimension()
	
	    this.$element
	      .removeClass('collapse')
	      .addClass('collapsing')[dimension](0)
	      .attr('aria-expanded', true)
	
	    this.$trigger
	      .removeClass('collapsed')
	      .attr('aria-expanded', true)
	
	    this.transitioning = 1
	
	    var complete = function () {
	      this.$element
	        .removeClass('collapsing')
	        .addClass('collapse in')[dimension]('')
	      this.transitioning = 0
	      this.$element
	        .trigger('shown.bs.collapse')
	    }
	
	    if (!$.support.transition) return complete.call(this)
	
	    var scrollSize = $.camelCase(['scroll', dimension].join('-'))
	
	    this.$element
	      .one('bsTransitionEnd', $.proxy(complete, this))
	      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
	  }
	
	  Collapse.prototype.hide = function () {
	    if (this.transitioning || !this.$element.hasClass('in')) return
	
	    var startEvent = $.Event('hide.bs.collapse')
	    this.$element.trigger(startEvent)
	    if (startEvent.isDefaultPrevented()) return
	
	    var dimension = this.dimension()
	
	    this.$element[dimension](this.$element[dimension]())[0].offsetHeight
	
	    this.$element
	      .addClass('collapsing')
	      .removeClass('collapse in')
	      .attr('aria-expanded', false)
	
	    this.$trigger
	      .addClass('collapsed')
	      .attr('aria-expanded', false)
	
	    this.transitioning = 1
	
	    var complete = function () {
	      this.transitioning = 0
	      this.$element
	        .removeClass('collapsing')
	        .addClass('collapse')
	        .trigger('hidden.bs.collapse')
	    }
	
	    if (!$.support.transition) return complete.call(this)
	
	    this.$element
	      [dimension](0)
	      .one('bsTransitionEnd', $.proxy(complete, this))
	      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
	  }
	
	  Collapse.prototype.toggle = function () {
	    this[this.$element.hasClass('in') ? 'hide' : 'show']()
	  }
	
	  Collapse.prototype.getParent = function () {
	    return $(this.options.parent)
	      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
	      .each($.proxy(function (i, element) {
	        var $element = $(element)
	        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
	      }, this))
	      .end()
	  }
	
	  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
	    var isOpen = $element.hasClass('in')
	
	    $element.attr('aria-expanded', isOpen)
	    $trigger
	      .toggleClass('collapsed', !isOpen)
	      .attr('aria-expanded', isOpen)
	  }
	
	  function getTargetFromTrigger($trigger) {
	    var href
	    var target = $trigger.attr('data-target')
	      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7
	
	    return $(target)
	  }
	
	
	  // COLLAPSE PLUGIN DEFINITION
	  // ==========================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.collapse')
	      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)
	
	      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
	      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }
	
	  var old = $.fn.collapse
	
	  $.fn.collapse             = Plugin
	  $.fn.collapse.Constructor = Collapse
	
	
	  // COLLAPSE NO CONFLICT
	  // ====================
	
	  $.fn.collapse.noConflict = function () {
	    $.fn.collapse = old
	    return this
	  }
	
	
	  // COLLAPSE DATA-API
	  // =================
	
	  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
	    var $this   = $(this)
	
	    if (!$this.attr('data-target')) e.preventDefault()
	
	    var $target = getTargetFromTrigger($this)
	    var data    = $target.data('bs.collapse')
	    var option  = data ? 'toggle' : $this.data()
	
	    Plugin.call($target, option)
	  })
	
	}(jQuery);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 4)))

/***/ },
/* 57 */
/*!***************************************************!*\
  !*** ./bower_components/bootstrap/js/dropdown.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: dropdown.js v3.3.4
	 * http://getbootstrap.com/javascript/#dropdowns
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // DROPDOWN CLASS DEFINITION
	  // =========================
	
	  var backdrop = '.dropdown-backdrop'
	  var toggle   = '[data-toggle="dropdown"]'
	  var Dropdown = function (element) {
	    $(element).on('click.bs.dropdown', this.toggle)
	  }
	
	  Dropdown.VERSION = '3.3.4'
	
	  Dropdown.prototype.toggle = function (e) {
	    var $this = $(this)
	
	    if ($this.is('.disabled, :disabled')) return
	
	    var $parent  = getParent($this)
	    var isActive = $parent.hasClass('open')
	
	    clearMenus()
	
	    if (!isActive) {
	      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
	        // if mobile we use a backdrop because click events don't delegate
	        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
	      }
	
	      var relatedTarget = { relatedTarget: this }
	      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))
	
	      if (e.isDefaultPrevented()) return
	
	      $this
	        .trigger('focus')
	        .attr('aria-expanded', 'true')
	
	      $parent
	        .toggleClass('open')
	        .trigger('shown.bs.dropdown', relatedTarget)
	    }
	
	    return false
	  }
	
	  Dropdown.prototype.keydown = function (e) {
	    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return
	
	    var $this = $(this)
	
	    e.preventDefault()
	    e.stopPropagation()
	
	    if ($this.is('.disabled, :disabled')) return
	
	    var $parent  = getParent($this)
	    var isActive = $parent.hasClass('open')
	
	    if ((!isActive && e.which != 27) || (isActive && e.which == 27)) {
	      if (e.which == 27) $parent.find(toggle).trigger('focus')
	      return $this.trigger('click')
	    }
	
	    var desc = ' li:not(.disabled):visible a'
	    var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc)
	
	    if (!$items.length) return
	
	    var index = $items.index(e.target)
	
	    if (e.which == 38 && index > 0)                 index--                        // up
	    if (e.which == 40 && index < $items.length - 1) index++                        // down
	    if (!~index)                                      index = 0
	
	    $items.eq(index).trigger('focus')
	  }
	
	  function clearMenus(e) {
	    if (e && e.which === 3) return
	    $(backdrop).remove()
	    $(toggle).each(function () {
	      var $this         = $(this)
	      var $parent       = getParent($this)
	      var relatedTarget = { relatedTarget: this }
	
	      if (!$parent.hasClass('open')) return
	
	      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))
	
	      if (e.isDefaultPrevented()) return
	
	      $this.attr('aria-expanded', 'false')
	      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
	    })
	  }
	
	  function getParent($this) {
	    var selector = $this.attr('data-target')
	
	    if (!selector) {
	      selector = $this.attr('href')
	      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
	    }
	
	    var $parent = selector && $(selector)
	
	    return $parent && $parent.length ? $parent : $this.parent()
	  }
	
	
	  // DROPDOWN PLUGIN DEFINITION
	  // ==========================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this)
	      var data  = $this.data('bs.dropdown')
	
	      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
	      if (typeof option == 'string') data[option].call($this)
	    })
	  }
	
	  var old = $.fn.dropdown
	
	  $.fn.dropdown             = Plugin
	  $.fn.dropdown.Constructor = Dropdown
	
	
	  // DROPDOWN NO CONFLICT
	  // ====================
	
	  $.fn.dropdown.noConflict = function () {
	    $.fn.dropdown = old
	    return this
	  }
	
	
	  // APPLY TO STANDARD DROPDOWN ELEMENTS
	  // ===================================
	
	  $(document)
	    .on('click.bs.dropdown.data-api', clearMenus)
	    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
	    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
	    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
	    .on('keydown.bs.dropdown.data-api', '[role="menu"]', Dropdown.prototype.keydown)
	    .on('keydown.bs.dropdown.data-api', '[role="listbox"]', Dropdown.prototype.keydown)
	
	}(jQuery);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 4)))

/***/ },
/* 58 */
/*!************************************************!*\
  !*** ./bower_components/bootstrap/js/modal.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: modal.js v3.3.4
	 * http://getbootstrap.com/javascript/#modals
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // MODAL CLASS DEFINITION
	  // ======================
	
	  var Modal = function (element, options) {
	    this.options             = options
	    this.$body               = $(document.body)
	    this.$element            = $(element)
	    this.$dialog             = this.$element.find('.modal-dialog')
	    this.$backdrop           = null
	    this.isShown             = null
	    this.originalBodyPad     = null
	    this.scrollbarWidth      = 0
	    this.ignoreBackdropClick = false
	
	    if (this.options.remote) {
	      this.$element
	        .find('.modal-content')
	        .load(this.options.remote, $.proxy(function () {
	          this.$element.trigger('loaded.bs.modal')
	        }, this))
	    }
	  }
	
	  Modal.VERSION  = '3.3.4'
	
	  Modal.TRANSITION_DURATION = 300
	  Modal.BACKDROP_TRANSITION_DURATION = 150
	
	  Modal.DEFAULTS = {
	    backdrop: true,
	    keyboard: true,
	    show: true
	  }
	
	  Modal.prototype.toggle = function (_relatedTarget) {
	    return this.isShown ? this.hide() : this.show(_relatedTarget)
	  }
	
	  Modal.prototype.show = function (_relatedTarget) {
	    var that = this
	    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })
	
	    this.$element.trigger(e)
	
	    if (this.isShown || e.isDefaultPrevented()) return
	
	    this.isShown = true
	
	    this.checkScrollbar()
	    this.setScrollbar()
	    this.$body.addClass('modal-open')
	
	    this.escape()
	    this.resize()
	
	    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))
	
	    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
	      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
	        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
	      })
	    })
	
	    this.backdrop(function () {
	      var transition = $.support.transition && that.$element.hasClass('fade')
	
	      if (!that.$element.parent().length) {
	        that.$element.appendTo(that.$body) // don't move modals dom position
	      }
	
	      that.$element
	        .show()
	        .scrollTop(0)
	
	      that.adjustDialog()
	
	      if (transition) {
	        that.$element[0].offsetWidth // force reflow
	      }
	
	      that.$element
	        .addClass('in')
	        .attr('aria-hidden', false)
	
	      that.enforceFocus()
	
	      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })
	
	      transition ?
	        that.$dialog // wait for modal to slide in
	          .one('bsTransitionEnd', function () {
	            that.$element.trigger('focus').trigger(e)
	          })
	          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
	        that.$element.trigger('focus').trigger(e)
	    })
	  }
	
	  Modal.prototype.hide = function (e) {
	    if (e) e.preventDefault()
	
	    e = $.Event('hide.bs.modal')
	
	    this.$element.trigger(e)
	
	    if (!this.isShown || e.isDefaultPrevented()) return
	
	    this.isShown = false
	
	    this.escape()
	    this.resize()
	
	    $(document).off('focusin.bs.modal')
	
	    this.$element
	      .removeClass('in')
	      .attr('aria-hidden', true)
	      .off('click.dismiss.bs.modal')
	      .off('mouseup.dismiss.bs.modal')
	
	    this.$dialog.off('mousedown.dismiss.bs.modal')
	
	    $.support.transition && this.$element.hasClass('fade') ?
	      this.$element
	        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
	        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
	      this.hideModal()
	  }
	
	  Modal.prototype.enforceFocus = function () {
	    $(document)
	      .off('focusin.bs.modal') // guard against infinite focus loop
	      .on('focusin.bs.modal', $.proxy(function (e) {
	        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
	          this.$element.trigger('focus')
	        }
	      }, this))
	  }
	
	  Modal.prototype.escape = function () {
	    if (this.isShown && this.options.keyboard) {
	      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
	        e.which == 27 && this.hide()
	      }, this))
	    } else if (!this.isShown) {
	      this.$element.off('keydown.dismiss.bs.modal')
	    }
	  }
	
	  Modal.prototype.resize = function () {
	    if (this.isShown) {
	      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
	    } else {
	      $(window).off('resize.bs.modal')
	    }
	  }
	
	  Modal.prototype.hideModal = function () {
	    var that = this
	    this.$element.hide()
	    this.backdrop(function () {
	      that.$body.removeClass('modal-open')
	      that.resetAdjustments()
	      that.resetScrollbar()
	      that.$element.trigger('hidden.bs.modal')
	    })
	  }
	
	  Modal.prototype.removeBackdrop = function () {
	    this.$backdrop && this.$backdrop.remove()
	    this.$backdrop = null
	  }
	
	  Modal.prototype.backdrop = function (callback) {
	    var that = this
	    var animate = this.$element.hasClass('fade') ? 'fade' : ''
	
	    if (this.isShown && this.options.backdrop) {
	      var doAnimate = $.support.transition && animate
	
	      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
	        .appendTo(this.$body)
	
	      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
	        if (this.ignoreBackdropClick) {
	          this.ignoreBackdropClick = false
	          return
	        }
	        if (e.target !== e.currentTarget) return
	        this.options.backdrop == 'static'
	          ? this.$element[0].focus()
	          : this.hide()
	      }, this))
	
	      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow
	
	      this.$backdrop.addClass('in')
	
	      if (!callback) return
	
	      doAnimate ?
	        this.$backdrop
	          .one('bsTransitionEnd', callback)
	          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
	        callback()
	
	    } else if (!this.isShown && this.$backdrop) {
	      this.$backdrop.removeClass('in')
	
	      var callbackRemove = function () {
	        that.removeBackdrop()
	        callback && callback()
	      }
	      $.support.transition && this.$element.hasClass('fade') ?
	        this.$backdrop
	          .one('bsTransitionEnd', callbackRemove)
	          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
	        callbackRemove()
	
	    } else if (callback) {
	      callback()
	    }
	  }
	
	  // these following methods are used to handle overflowing modals
	
	  Modal.prototype.handleUpdate = function () {
	    this.adjustDialog()
	  }
	
	  Modal.prototype.adjustDialog = function () {
	    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight
	
	    this.$element.css({
	      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
	      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
	    })
	  }
	
	  Modal.prototype.resetAdjustments = function () {
	    this.$element.css({
	      paddingLeft: '',
	      paddingRight: ''
	    })
	  }
	
	  Modal.prototype.checkScrollbar = function () {
	    var fullWindowWidth = window.innerWidth
	    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
	      var documentElementRect = document.documentElement.getBoundingClientRect()
	      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
	    }
	    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
	    this.scrollbarWidth = this.measureScrollbar()
	  }
	
	  Modal.prototype.setScrollbar = function () {
	    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
	    this.originalBodyPad = document.body.style.paddingRight || ''
	    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
	  }
	
	  Modal.prototype.resetScrollbar = function () {
	    this.$body.css('padding-right', this.originalBodyPad)
	  }
	
	  Modal.prototype.measureScrollbar = function () { // thx walsh
	    var scrollDiv = document.createElement('div')
	    scrollDiv.className = 'modal-scrollbar-measure'
	    this.$body.append(scrollDiv)
	    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
	    this.$body[0].removeChild(scrollDiv)
	    return scrollbarWidth
	  }
	
	
	  // MODAL PLUGIN DEFINITION
	  // =======================
	
	  function Plugin(option, _relatedTarget) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.modal')
	      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)
	
	      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
	      if (typeof option == 'string') data[option](_relatedTarget)
	      else if (options.show) data.show(_relatedTarget)
	    })
	  }
	
	  var old = $.fn.modal
	
	  $.fn.modal             = Plugin
	  $.fn.modal.Constructor = Modal
	
	
	  // MODAL NO CONFLICT
	  // =================
	
	  $.fn.modal.noConflict = function () {
	    $.fn.modal = old
	    return this
	  }
	
	
	  // MODAL DATA-API
	  // ==============
	
	  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
	    var $this   = $(this)
	    var href    = $this.attr('href')
	    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
	    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())
	
	    if ($this.is('a')) e.preventDefault()
	
	    $target.one('show.bs.modal', function (showEvent) {
	      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
	      $target.one('hidden.bs.modal', function () {
	        $this.is(':visible') && $this.trigger('focus')
	      })
	    })
	    Plugin.call($target, option, this)
	  })
	
	}(jQuery);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 4)))

/***/ },
/* 59 */
/*!**************************************************!*\
  !*** ./bower_components/bootstrap/js/tooltip.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: tooltip.js v3.3.4
	 * http://getbootstrap.com/javascript/#tooltip
	 * Inspired by the original jQuery.tipsy by Jason Frame
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // TOOLTIP PUBLIC CLASS DEFINITION
	  // ===============================
	
	  var Tooltip = function (element, options) {
	    this.type       = null
	    this.options    = null
	    this.enabled    = null
	    this.timeout    = null
	    this.hoverState = null
	    this.$element   = null
	
	    this.init('tooltip', element, options)
	  }
	
	  Tooltip.VERSION  = '3.3.4'
	
	  Tooltip.TRANSITION_DURATION = 150
	
	  Tooltip.DEFAULTS = {
	    animation: true,
	    placement: 'top',
	    selector: false,
	    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
	    trigger: 'hover focus',
	    title: '',
	    delay: 0,
	    html: false,
	    container: false,
	    viewport: {
	      selector: 'body',
	      padding: 0
	    }
	  }
	
	  Tooltip.prototype.init = function (type, element, options) {
	    this.enabled   = true
	    this.type      = type
	    this.$element  = $(element)
	    this.options   = this.getOptions(options)
	    this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport)
	
	    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
	      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
	    }
	
	    var triggers = this.options.trigger.split(' ')
	
	    for (var i = triggers.length; i--;) {
	      var trigger = triggers[i]
	
	      if (trigger == 'click') {
	        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
	      } else if (trigger != 'manual') {
	        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
	        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'
	
	        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
	        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
	      }
	    }
	
	    this.options.selector ?
	      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
	      this.fixTitle()
	  }
	
	  Tooltip.prototype.getDefaults = function () {
	    return Tooltip.DEFAULTS
	  }
	
	  Tooltip.prototype.getOptions = function (options) {
	    options = $.extend({}, this.getDefaults(), this.$element.data(), options)
	
	    if (options.delay && typeof options.delay == 'number') {
	      options.delay = {
	        show: options.delay,
	        hide: options.delay
	      }
	    }
	
	    return options
	  }
	
	  Tooltip.prototype.getDelegateOptions = function () {
	    var options  = {}
	    var defaults = this.getDefaults()
	
	    this._options && $.each(this._options, function (key, value) {
	      if (defaults[key] != value) options[key] = value
	    })
	
	    return options
	  }
	
	  Tooltip.prototype.enter = function (obj) {
	    var self = obj instanceof this.constructor ?
	      obj : $(obj.currentTarget).data('bs.' + this.type)
	
	    if (self && self.$tip && self.$tip.is(':visible')) {
	      self.hoverState = 'in'
	      return
	    }
	
	    if (!self) {
	      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
	      $(obj.currentTarget).data('bs.' + this.type, self)
	    }
	
	    clearTimeout(self.timeout)
	
	    self.hoverState = 'in'
	
	    if (!self.options.delay || !self.options.delay.show) return self.show()
	
	    self.timeout = setTimeout(function () {
	      if (self.hoverState == 'in') self.show()
	    }, self.options.delay.show)
	  }
	
	  Tooltip.prototype.leave = function (obj) {
	    var self = obj instanceof this.constructor ?
	      obj : $(obj.currentTarget).data('bs.' + this.type)
	
	    if (!self) {
	      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
	      $(obj.currentTarget).data('bs.' + this.type, self)
	    }
	
	    clearTimeout(self.timeout)
	
	    self.hoverState = 'out'
	
	    if (!self.options.delay || !self.options.delay.hide) return self.hide()
	
	    self.timeout = setTimeout(function () {
	      if (self.hoverState == 'out') self.hide()
	    }, self.options.delay.hide)
	  }
	
	  Tooltip.prototype.show = function () {
	    var e = $.Event('show.bs.' + this.type)
	
	    if (this.hasContent() && this.enabled) {
	      this.$element.trigger(e)
	
	      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
	      if (e.isDefaultPrevented() || !inDom) return
	      var that = this
	
	      var $tip = this.tip()
	
	      var tipId = this.getUID(this.type)
	
	      this.setContent()
	      $tip.attr('id', tipId)
	      this.$element.attr('aria-describedby', tipId)
	
	      if (this.options.animation) $tip.addClass('fade')
	
	      var placement = typeof this.options.placement == 'function' ?
	        this.options.placement.call(this, $tip[0], this.$element[0]) :
	        this.options.placement
	
	      var autoToken = /\s?auto?\s?/i
	      var autoPlace = autoToken.test(placement)
	      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'
	
	      $tip
	        .detach()
	        .css({ top: 0, left: 0, display: 'block' })
	        .addClass(placement)
	        .data('bs.' + this.type, this)
	
	      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
	
	      var pos          = this.getPosition()
	      var actualWidth  = $tip[0].offsetWidth
	      var actualHeight = $tip[0].offsetHeight
	
	      if (autoPlace) {
	        var orgPlacement = placement
	        var $container   = this.options.container ? $(this.options.container) : this.$element.parent()
	        var containerDim = this.getPosition($container)
	
	        placement = placement == 'bottom' && pos.bottom + actualHeight > containerDim.bottom ? 'top'    :
	                    placement == 'top'    && pos.top    - actualHeight < containerDim.top    ? 'bottom' :
	                    placement == 'right'  && pos.right  + actualWidth  > containerDim.width  ? 'left'   :
	                    placement == 'left'   && pos.left   - actualWidth  < containerDim.left   ? 'right'  :
	                    placement
	
	        $tip
	          .removeClass(orgPlacement)
	          .addClass(placement)
	      }
	
	      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)
	
	      this.applyPlacement(calculatedOffset, placement)
	
	      var complete = function () {
	        var prevHoverState = that.hoverState
	        that.$element.trigger('shown.bs.' + that.type)
	        that.hoverState = null
	
	        if (prevHoverState == 'out') that.leave(that)
	      }
	
	      $.support.transition && this.$tip.hasClass('fade') ?
	        $tip
	          .one('bsTransitionEnd', complete)
	          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
	        complete()
	    }
	  }
	
	  Tooltip.prototype.applyPlacement = function (offset, placement) {
	    var $tip   = this.tip()
	    var width  = $tip[0].offsetWidth
	    var height = $tip[0].offsetHeight
	
	    // manually read margins because getBoundingClientRect includes difference
	    var marginTop = parseInt($tip.css('margin-top'), 10)
	    var marginLeft = parseInt($tip.css('margin-left'), 10)
	
	    // we must check for NaN for ie 8/9
	    if (isNaN(marginTop))  marginTop  = 0
	    if (isNaN(marginLeft)) marginLeft = 0
	
	    offset.top  = offset.top  + marginTop
	    offset.left = offset.left + marginLeft
	
	    // $.fn.offset doesn't round pixel values
	    // so we use setOffset directly with our own function B-0
	    $.offset.setOffset($tip[0], $.extend({
	      using: function (props) {
	        $tip.css({
	          top: Math.round(props.top),
	          left: Math.round(props.left)
	        })
	      }
	    }, offset), 0)
	
	    $tip.addClass('in')
	
	    // check to see if placing tip in new offset caused the tip to resize itself
	    var actualWidth  = $tip[0].offsetWidth
	    var actualHeight = $tip[0].offsetHeight
	
	    if (placement == 'top' && actualHeight != height) {
	      offset.top = offset.top + height - actualHeight
	    }
	
	    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)
	
	    if (delta.left) offset.left += delta.left
	    else offset.top += delta.top
	
	    var isVertical          = /top|bottom/.test(placement)
	    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
	    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'
	
	    $tip.offset(offset)
	    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
	  }
	
	  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
	    this.arrow()
	      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
	      .css(isVertical ? 'top' : 'left', '')
	  }
	
	  Tooltip.prototype.setContent = function () {
	    var $tip  = this.tip()
	    var title = this.getTitle()
	
	    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
	    $tip.removeClass('fade in top bottom left right')
	  }
	
	  Tooltip.prototype.hide = function (callback) {
	    var that = this
	    var $tip = $(this.$tip)
	    var e    = $.Event('hide.bs.' + this.type)
	
	    function complete() {
	      if (that.hoverState != 'in') $tip.detach()
	      that.$element
	        .removeAttr('aria-describedby')
	        .trigger('hidden.bs.' + that.type)
	      callback && callback()
	    }
	
	    this.$element.trigger(e)
	
	    if (e.isDefaultPrevented()) return
	
	    $tip.removeClass('in')
	
	    $.support.transition && $tip.hasClass('fade') ?
	      $tip
	        .one('bsTransitionEnd', complete)
	        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
	      complete()
	
	    this.hoverState = null
	
	    return this
	  }
	
	  Tooltip.prototype.fixTitle = function () {
	    var $e = this.$element
	    if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {
	      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
	    }
	  }
	
	  Tooltip.prototype.hasContent = function () {
	    return this.getTitle()
	  }
	
	  Tooltip.prototype.getPosition = function ($element) {
	    $element   = $element || this.$element
	
	    var el     = $element[0]
	    var isBody = el.tagName == 'BODY'
	
	    var elRect    = el.getBoundingClientRect()
	    if (elRect.width == null) {
	      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
	      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
	    }
	    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
	    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
	    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null
	
	    return $.extend({}, elRect, scroll, outerDims, elOffset)
	  }
	
	  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
	    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
	           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
	           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
	        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }
	
	  }
	
	  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
	    var delta = { top: 0, left: 0 }
	    if (!this.$viewport) return delta
	
	    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
	    var viewportDimensions = this.getPosition(this.$viewport)
	
	    if (/right|left/.test(placement)) {
	      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
	      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
	      if (topEdgeOffset < viewportDimensions.top) { // top overflow
	        delta.top = viewportDimensions.top - topEdgeOffset
	      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
	        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
	      }
	    } else {
	      var leftEdgeOffset  = pos.left - viewportPadding
	      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
	      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
	        delta.left = viewportDimensions.left - leftEdgeOffset
	      } else if (rightEdgeOffset > viewportDimensions.width) { // right overflow
	        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
	      }
	    }
	
	    return delta
	  }
	
	  Tooltip.prototype.getTitle = function () {
	    var title
	    var $e = this.$element
	    var o  = this.options
	
	    title = $e.attr('data-original-title')
	      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)
	
	    return title
	  }
	
	  Tooltip.prototype.getUID = function (prefix) {
	    do prefix += ~~(Math.random() * 1000000)
	    while (document.getElementById(prefix))
	    return prefix
	  }
	
	  Tooltip.prototype.tip = function () {
	    return (this.$tip = this.$tip || $(this.options.template))
	  }
	
	  Tooltip.prototype.arrow = function () {
	    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
	  }
	
	  Tooltip.prototype.enable = function () {
	    this.enabled = true
	  }
	
	  Tooltip.prototype.disable = function () {
	    this.enabled = false
	  }
	
	  Tooltip.prototype.toggleEnabled = function () {
	    this.enabled = !this.enabled
	  }
	
	  Tooltip.prototype.toggle = function (e) {
	    var self = this
	    if (e) {
	      self = $(e.currentTarget).data('bs.' + this.type)
	      if (!self) {
	        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
	        $(e.currentTarget).data('bs.' + this.type, self)
	      }
	    }
	
	    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
	  }
	
	  Tooltip.prototype.destroy = function () {
	    var that = this
	    clearTimeout(this.timeout)
	    this.hide(function () {
	      that.$element.off('.' + that.type).removeData('bs.' + that.type)
	    })
	  }
	
	
	  // TOOLTIP PLUGIN DEFINITION
	  // =========================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.tooltip')
	      var options = typeof option == 'object' && option
	
	      if (!data && /destroy|hide/.test(option)) return
	      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }
	
	  var old = $.fn.tooltip
	
	  $.fn.tooltip             = Plugin
	  $.fn.tooltip.Constructor = Tooltip
	
	
	  // TOOLTIP NO CONFLICT
	  // ===================
	
	  $.fn.tooltip.noConflict = function () {
	    $.fn.tooltip = old
	    return this
	  }
	
	}(jQuery);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 4)))

/***/ },
/* 60 */
/*!**************************************************!*\
  !*** ./bower_components/bootstrap/js/popover.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: popover.js v3.3.4
	 * http://getbootstrap.com/javascript/#popovers
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // POPOVER PUBLIC CLASS DEFINITION
	  // ===============================
	
	  var Popover = function (element, options) {
	    this.init('popover', element, options)
	  }
	
	  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')
	
	  Popover.VERSION  = '3.3.4'
	
	  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
	    placement: 'right',
	    trigger: 'click',
	    content: '',
	    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	  })
	
	
	  // NOTE: POPOVER EXTENDS tooltip.js
	  // ================================
	
	  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)
	
	  Popover.prototype.constructor = Popover
	
	  Popover.prototype.getDefaults = function () {
	    return Popover.DEFAULTS
	  }
	
	  Popover.prototype.setContent = function () {
	    var $tip    = this.tip()
	    var title   = this.getTitle()
	    var content = this.getContent()
	
	    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
	    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
	      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
	    ](content)
	
	    $tip.removeClass('fade top bottom left right in')
	
	    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
	    // this manually by checking the contents.
	    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
	  }
	
	  Popover.prototype.hasContent = function () {
	    return this.getTitle() || this.getContent()
	  }
	
	  Popover.prototype.getContent = function () {
	    var $e = this.$element
	    var o  = this.options
	
	    return $e.attr('data-content')
	      || (typeof o.content == 'function' ?
	            o.content.call($e[0]) :
	            o.content)
	  }
	
	  Popover.prototype.arrow = function () {
	    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
	  }
	
	
	  // POPOVER PLUGIN DEFINITION
	  // =========================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.popover')
	      var options = typeof option == 'object' && option
	
	      if (!data && /destroy|hide/.test(option)) return
	      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }
	
	  var old = $.fn.popover
	
	  $.fn.popover             = Plugin
	  $.fn.popover.Constructor = Popover
	
	
	  // POPOVER NO CONFLICT
	  // ===================
	
	  $.fn.popover.noConflict = function () {
	    $.fn.popover = old
	    return this
	  }
	
	}(jQuery);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 4)))

/***/ },
/* 61 */
/*!****************************************************!*\
  !*** ./bower_components/bootstrap/js/scrollspy.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: scrollspy.js v3.3.4
	 * http://getbootstrap.com/javascript/#scrollspy
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // SCROLLSPY CLASS DEFINITION
	  // ==========================
	
	  function ScrollSpy(element, options) {
	    this.$body          = $(document.body)
	    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
	    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
	    this.selector       = (this.options.target || '') + ' .nav li > a'
	    this.offsets        = []
	    this.targets        = []
	    this.activeTarget   = null
	    this.scrollHeight   = 0
	
	    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
	    this.refresh()
	    this.process()
	  }
	
	  ScrollSpy.VERSION  = '3.3.4'
	
	  ScrollSpy.DEFAULTS = {
	    offset: 10
	  }
	
	  ScrollSpy.prototype.getScrollHeight = function () {
	    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	  }
	
	  ScrollSpy.prototype.refresh = function () {
	    var that          = this
	    var offsetMethod  = 'offset'
	    var offsetBase    = 0
	
	    this.offsets      = []
	    this.targets      = []
	    this.scrollHeight = this.getScrollHeight()
	
	    if (!$.isWindow(this.$scrollElement[0])) {
	      offsetMethod = 'position'
	      offsetBase   = this.$scrollElement.scrollTop()
	    }
	
	    this.$body
	      .find(this.selector)
	      .map(function () {
	        var $el   = $(this)
	        var href  = $el.data('target') || $el.attr('href')
	        var $href = /^#./.test(href) && $(href)
	
	        return ($href
	          && $href.length
	          && $href.is(':visible')
	          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
	      })
	      .sort(function (a, b) { return a[0] - b[0] })
	      .each(function () {
	        that.offsets.push(this[0])
	        that.targets.push(this[1])
	      })
	  }
	
	  ScrollSpy.prototype.process = function () {
	    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
	    var scrollHeight = this.getScrollHeight()
	    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
	    var offsets      = this.offsets
	    var targets      = this.targets
	    var activeTarget = this.activeTarget
	    var i
	
	    if (this.scrollHeight != scrollHeight) {
	      this.refresh()
	    }
	
	    if (scrollTop >= maxScroll) {
	      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
	    }
	
	    if (activeTarget && scrollTop < offsets[0]) {
	      this.activeTarget = null
	      return this.clear()
	    }
	
	    for (i = offsets.length; i--;) {
	      activeTarget != targets[i]
	        && scrollTop >= offsets[i]
	        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
	        && this.activate(targets[i])
	    }
	  }
	
	  ScrollSpy.prototype.activate = function (target) {
	    this.activeTarget = target
	
	    this.clear()
	
	    var selector = this.selector +
	      '[data-target="' + target + '"],' +
	      this.selector + '[href="' + target + '"]'
	
	    var active = $(selector)
	      .parents('li')
	      .addClass('active')
	
	    if (active.parent('.dropdown-menu').length) {
	      active = active
	        .closest('li.dropdown')
	        .addClass('active')
	    }
	
	    active.trigger('activate.bs.scrollspy')
	  }
	
	  ScrollSpy.prototype.clear = function () {
	    $(this.selector)
	      .parentsUntil(this.options.target, '.active')
	      .removeClass('active')
	  }
	
	
	  // SCROLLSPY PLUGIN DEFINITION
	  // ===========================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.scrollspy')
	      var options = typeof option == 'object' && option
	
	      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }
	
	  var old = $.fn.scrollspy
	
	  $.fn.scrollspy             = Plugin
	  $.fn.scrollspy.Constructor = ScrollSpy
	
	
	  // SCROLLSPY NO CONFLICT
	  // =====================
	
	  $.fn.scrollspy.noConflict = function () {
	    $.fn.scrollspy = old
	    return this
	  }
	
	
	  // SCROLLSPY DATA-API
	  // ==================
	
	  $(window).on('load.bs.scrollspy.data-api', function () {
	    $('[data-spy="scroll"]').each(function () {
	      var $spy = $(this)
	      Plugin.call($spy, $spy.data())
	    })
	  })
	
	}(jQuery);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 4)))

/***/ },
/* 62 */
/*!**********************************************!*\
  !*** ./bower_components/bootstrap/js/tab.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: tab.js v3.3.4
	 * http://getbootstrap.com/javascript/#tabs
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // TAB CLASS DEFINITION
	  // ====================
	
	  var Tab = function (element) {
	    this.element = $(element)
	  }
	
	  Tab.VERSION = '3.3.4'
	
	  Tab.TRANSITION_DURATION = 150
	
	  Tab.prototype.show = function () {
	    var $this    = this.element
	    var $ul      = $this.closest('ul:not(.dropdown-menu)')
	    var selector = $this.data('target')
	
	    if (!selector) {
	      selector = $this.attr('href')
	      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
	    }
	
	    if ($this.parent('li').hasClass('active')) return
	
	    var $previous = $ul.find('.active:last a')
	    var hideEvent = $.Event('hide.bs.tab', {
	      relatedTarget: $this[0]
	    })
	    var showEvent = $.Event('show.bs.tab', {
	      relatedTarget: $previous[0]
	    })
	
	    $previous.trigger(hideEvent)
	    $this.trigger(showEvent)
	
	    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return
	
	    var $target = $(selector)
	
	    this.activate($this.closest('li'), $ul)
	    this.activate($target, $target.parent(), function () {
	      $previous.trigger({
	        type: 'hidden.bs.tab',
	        relatedTarget: $this[0]
	      })
	      $this.trigger({
	        type: 'shown.bs.tab',
	        relatedTarget: $previous[0]
	      })
	    })
	  }
	
	  Tab.prototype.activate = function (element, container, callback) {
	    var $active    = container.find('> .active')
	    var transition = callback
	      && $.support.transition
	      && (($active.length && $active.hasClass('fade')) || !!container.find('> .fade').length)
	
	    function next() {
	      $active
	        .removeClass('active')
	        .find('> .dropdown-menu > .active')
	          .removeClass('active')
	        .end()
	        .find('[data-toggle="tab"]')
	          .attr('aria-expanded', false)
	
	      element
	        .addClass('active')
	        .find('[data-toggle="tab"]')
	          .attr('aria-expanded', true)
	
	      if (transition) {
	        element[0].offsetWidth // reflow for transition
	        element.addClass('in')
	      } else {
	        element.removeClass('fade')
	      }
	
	      if (element.parent('.dropdown-menu').length) {
	        element
	          .closest('li.dropdown')
	            .addClass('active')
	          .end()
	          .find('[data-toggle="tab"]')
	            .attr('aria-expanded', true)
	      }
	
	      callback && callback()
	    }
	
	    $active.length && transition ?
	      $active
	        .one('bsTransitionEnd', next)
	        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
	      next()
	
	    $active.removeClass('in')
	  }
	
	
	  // TAB PLUGIN DEFINITION
	  // =====================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this)
	      var data  = $this.data('bs.tab')
	
	      if (!data) $this.data('bs.tab', (data = new Tab(this)))
	      if (typeof option == 'string') data[option]()
	    })
	  }
	
	  var old = $.fn.tab
	
	  $.fn.tab             = Plugin
	  $.fn.tab.Constructor = Tab
	
	
	  // TAB NO CONFLICT
	  // ===============
	
	  $.fn.tab.noConflict = function () {
	    $.fn.tab = old
	    return this
	  }
	
	
	  // TAB DATA-API
	  // ============
	
	  var clickHandler = function (e) {
	    e.preventDefault()
	    Plugin.call($(this), 'show')
	  }
	
	  $(document)
	    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
	    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)
	
	}(jQuery);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 4)))

/***/ },
/* 63 */
/*!************************************************!*\
  !*** ./bower_components/bootstrap/js/affix.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: affix.js v3.3.4
	 * http://getbootstrap.com/javascript/#affix
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // AFFIX CLASS DEFINITION
	  // ======================
	
	  var Affix = function (element, options) {
	    this.options = $.extend({}, Affix.DEFAULTS, options)
	
	    this.$target = $(this.options.target)
	      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
	      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))
	
	    this.$element     = $(element)
	    this.affixed      = null
	    this.unpin        = null
	    this.pinnedOffset = null
	
	    this.checkPosition()
	  }
	
	  Affix.VERSION  = '3.3.4'
	
	  Affix.RESET    = 'affix affix-top affix-bottom'
	
	  Affix.DEFAULTS = {
	    offset: 0,
	    target: window
	  }
	
	  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
	    var scrollTop    = this.$target.scrollTop()
	    var position     = this.$element.offset()
	    var targetHeight = this.$target.height()
	
	    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false
	
	    if (this.affixed == 'bottom') {
	      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
	      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
	    }
	
	    var initializing   = this.affixed == null
	    var colliderTop    = initializing ? scrollTop : position.top
	    var colliderHeight = initializing ? targetHeight : height
	
	    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
	    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'
	
	    return false
	  }
	
	  Affix.prototype.getPinnedOffset = function () {
	    if (this.pinnedOffset) return this.pinnedOffset
	    this.$element.removeClass(Affix.RESET).addClass('affix')
	    var scrollTop = this.$target.scrollTop()
	    var position  = this.$element.offset()
	    return (this.pinnedOffset = position.top - scrollTop)
	  }
	
	  Affix.prototype.checkPositionWithEventLoop = function () {
	    setTimeout($.proxy(this.checkPosition, this), 1)
	  }
	
	  Affix.prototype.checkPosition = function () {
	    if (!this.$element.is(':visible')) return
	
	    var height       = this.$element.height()
	    var offset       = this.options.offset
	    var offsetTop    = offset.top
	    var offsetBottom = offset.bottom
	    var scrollHeight = $(document.body).height()
	
	    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
	    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
	    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)
	
	    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)
	
	    if (this.affixed != affix) {
	      if (this.unpin != null) this.$element.css('top', '')
	
	      var affixType = 'affix' + (affix ? '-' + affix : '')
	      var e         = $.Event(affixType + '.bs.affix')
	
	      this.$element.trigger(e)
	
	      if (e.isDefaultPrevented()) return
	
	      this.affixed = affix
	      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null
	
	      this.$element
	        .removeClass(Affix.RESET)
	        .addClass(affixType)
	        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
	    }
	
	    if (affix == 'bottom') {
	      this.$element.offset({
	        top: scrollHeight - height - offsetBottom
	      })
	    }
	  }
	
	
	  // AFFIX PLUGIN DEFINITION
	  // =======================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.affix')
	      var options = typeof option == 'object' && option
	
	      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }
	
	  var old = $.fn.affix
	
	  $.fn.affix             = Plugin
	  $.fn.affix.Constructor = Affix
	
	
	  // AFFIX NO CONFLICT
	  // =================
	
	  $.fn.affix.noConflict = function () {
	    $.fn.affix = old
	    return this
	  }
	
	
	  // AFFIX DATA-API
	  // ==============
	
	  $(window).on('load', function () {
	    $('[data-spy="affix"]').each(function () {
	      var $spy = $(this)
	      var data = $spy.data()
	
	      data.offset = data.offset || {}
	
	      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
	      if (data.offsetTop    != null) data.offset.top    = data.offsetTop
	
	      Plugin.call($spy, data)
	    })
	  })
	
	}(jQuery);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 4)))

/***/ },
/* 64 */
/*!*************************************!*\
  !*** ./~/css-loader/cssToString.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ },
/* 65 */
/*!******************************************!*\
  !*** ./js/components/list/Item.react.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var Router = _interopRequire(__webpack_require__(/*! react-router */ 26));
	
	var ResourceActions = _interopRequire(__webpack_require__(/*! actions/ResourceActions */ 9));
	
	var LinkMixin = _interopRequire(__webpack_require__(/*! components/LinkMixin */ 45));
	
	var PropertyMixin = _interopRequire(__webpack_require__(/*! components/PropertyMixin */ 68));
	
	var Link = Router.Link;
	var PT = React.PropTypes;
	
	module.exports = React.createClass({
	  displayName: "list/Item",
	
	  mixins: [LinkMixin, PropertyMixin, Router.Navigation],
	
	  propTypes: {
	    name: PT.string.isRequired,
	    resource: PT.object.isRequired,
	    columns: PT.array.isRequired,
	    search_columns: PT.array.isRequired,
	    pagination: PT.object.isRequired,
	    onclick: PT.func },
	
	  showLink: function showLink(resource) {
	
	    var attrs = this.linkAttrs(this.props.name, resource.id, this.props.pagination);
	    attrs.label = "show";
	
	    return this.linkToShow(attrs);
	  },
	
	  render: function render() {
	    var _this = this;
	
	    var resource = this.props.resource;
	    var classes = this.props.selected ? "info" : "";
	
	    var cols = this.props.columns.map(function (col) {
	      var label = _this.toLabel(col, resource, _this.props.search_columns);
	      var title = _this.toTitle(col, resource, _this.props.search_columns);
	
	      return React.createElement(
	        "td",
	        { key: col.name, alt: title, title: title },
	        label
	      );
	    });
	
	    return React.createElement(
	      "tr",
	      { key: resource.id, className: classes, onClick: this.props.onclick },
	      cols
	    );
	  } });
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! react */ 1)))

/***/ },
/* 66 */
/*!************************************************!*\
  !*** ./js/components/list/Pagination.react.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var Router = _interopRequire(__webpack_require__(/*! react-router */ 26));
	
	var ResourceActions = _interopRequire(__webpack_require__(/*! actions/ResourceActions */ 9));
	
	var LinkMixin = _interopRequire(__webpack_require__(/*! components/LinkMixin */ 45));
	
	var Link = Router.Link;
	var PT = React.PropTypes;
	
	module.exports = React.createClass({
	  displayName: "list/Pagination",
	
	  mixins: [LinkMixin, Router.Navigation],
	
	  propTypes: {
	    name: PT.string,
	    id: PT.number,
	    resource: PT.object,
	    pagination: PT.object,
	    transition: PT.bool
	  },
	
	  paginationLink: function paginationLink(label, page) {
	    var name = this.props.name;
	    var id = this.props.id;
	
	    var className = "";
	    if (page == this.props.pagination.page) {
	      className = "active";
	    }
	
	    var linkAttrs = {
	      name: name,
	      id: id,
	      label: label,
	      page: page,
	      limit: this.props.pagination.limit,
	      order: this.props.pagination.order,
	      q: this.props.pagination.q,
	      transition: this.props.transition
	    };
	
	    return React.createElement(
	      "li",
	      { className: className, key: label },
	      this.linkToList(linkAttrs)
	    );
	  },
	
	  render: function render() {
	    var page = this.props.pagination.page;
	    var count = this.props.pagination.count;
	    var total = this.props.pagination.total_pages;
	    var from = page - 2;
	    var to = page + 2;
	
	    if (from < 1) from = 1;
	    if (to > total) to = total;
	
	    if (to - from < 4) {
	      if (from + 4 <= total) {
	        to = from + 4;
	      } else if (to - 4 > 1) {
	        from = to - 4;
	      }
	    }
	
	    var links = [];
	    if (from > 1) {
	      links.push(this.paginationLink("«", 1));
	    }
	
	    for (var i = from; i <= to; i++) {
	      links.push(this.paginationLink(i, i));
	    }
	
	    if (to < total) {
	      links.push(this.paginationLink("»", total));
	    }
	
	    links.push(React.createElement(
	      "li",
	      { className: "disabled", key: "administa-records-label" },
	      React.createElement(
	        "a",
	        { href: "#" },
	        count + " records"
	      )
	    ));
	    links.push(React.createElement(
	      "li",
	      { className: "disabled", key: "administa-pages-label" },
	      React.createElement(
	        "a",
	        { href: "#" },
	        total + " pages"
	      )
	    ));
	
	    return React.createElement(
	      "ul",
	      { className: "pagination pagination-sm no-margin pull-right" },
	      links
	    );
	  }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! react */ 1)))

/***/ },
/* 67 */
/*!***********************************************!*\
  !*** ./js/components/list/SearchBox.react.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var Router = _interopRequire(__webpack_require__(/*! react-router */ 26));
	
	var ResourceActions = _interopRequire(__webpack_require__(/*! actions/ResourceActions */ 9));
	
	var LinkMixin = _interopRequire(__webpack_require__(/*! components/LinkMixin */ 45));
	
	var PT = React.PropTypes;
	
	module.exports = React.createClass({
	  displayName: "list/SearchBox",
	
	  mixins: [LinkMixin, Router.Navigation],
	
	  propTypes: {
	    name: PT.string,
	    pagination: PT.object,
	    transition: PT.bool },
	
	  getInitialState: function getInitialState() {
	    return { value: this.props.pagination.q };
	  },
	
	  handleChange: function handleChange(event) {
	    this.setState({ value: event.target.value });
	  },
	
	  search: function search() {
	    var _this = this;
	
	    var name = this.props.name;
	    var id = this.props.id;
	    var route = "resource";
	
	    var params = { name: name };
	    if (id) {
	      params.id = id;
	      route = "show";
	    }
	
	    var options = {
	      name: name,
	      id: id,
	      page: 1,
	      limit: this.props.pagination.limit,
	      order: this.props.pagination.order,
	      q: this.state.value
	    };
	    var query = this.linkToListQuery(options);
	    ResourceActions.list(name, query).then(function () {
	      var transition = !(_this.props.transition == false);
	      if (transition) {
	        _this.transitionTo(route, params, query);
	      }
	    });
	  },
	
	  render: function render() {
	    var value = this.state.value;
	    return React.createElement(
	      "div",
	      { className: "has-feedback input-group input-group-sm col-md-3 pull-right" },
	      React.createElement("input", { type: "text", className: "form-control input-sm", placeholder: "Search...", value: value, onChange: this.handleChange }),
	      React.createElement(
	        "span",
	        { className: "input-group-btn" },
	        React.createElement(
	          "button",
	          { type: "submit", name: "search", id: "search-btn", className: "btn btn-flat btn-primary", onClick: this.search },
	          React.createElement("i", { className: "fa fa-search" })
	        )
	      )
	    );
	  } });
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! react */ 1)))

/***/ },
/* 68 */
/*!****************************************!*\
  !*** ./js/components/PropertyMixin.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {"use strict";
	
	module.exports = {
	
	  toProperyName: function toProperyName(col) {
	    var name = col.label;
	    if (col.association) {
	      name = col.association.label;
	    }
	    return name;
	  },
	
	  toProperyKey: function toProperyKey(col) {
	    var name = col.name;
	    if (col.association) {
	      name = col.association.name;
	    }
	    return name;
	  },
	
	  toLabel: function toLabel(col, resource, search_columns) {
	    return this.stringifyProperty(col, resource, search_columns, true);
	  },
	
	  toTitle: function toTitle(col, resource, search_columns) {
	    return this.stringifyProperty(col, resource, search_columns, false);
	  },
	
	  stringifyProperty: function stringifyProperty(col, resource, search_columns, wrap_tag) {
	    var name = this.toProperyKey(col);
	    var val = resource[name];
	
	    if (col.association) {
	      name = col.association.name;
	      var nested = val;
	
	      if (!nested) {
	        return "";
	      }
	      if (col.association.type == "has_many" || col.association.type == "through") {
	        val = [];
	        for (var i = 0; i < nested.length; i++) {
	          var s = this.extractLabel(col.association.label, nested[i], search_columns);
	          if (wrap_tag) {
	            val.push(s);
	          } else {
	            s = this.wrapPermlink(s, nested[i], col.association);
	            val.push(React.createElement(
	              "div",
	              { key: i },
	              s
	            ));
	          }
	        }
	
	        if (!wrap_tag) val = val.join(", ");
	
	        return val;
	      } else {
	        val = this.extractLabel(name, nested, search_columns);
	      }
	
	      if (!wrap_tag) {
	        return val;
	      } // permlink
	      return this.wrapPermlink(val, nested, col.association);
	    }
	    return val;
	  },
	
	  wrapPermlink: function wrapPermlink(val, obj, association) {
	    // permlink
	    if (!(obj && obj.id && association.controller_path)) {
	      return val;
	    }
	
	    var href = "/" + association.controller_path + "/" + obj.id;
	    return React.createElement(
	      "a",
	      { href: href },
	      val
	    );
	  },
	
	  extractLabel: function extractLabel(name, obj, search_columns) {
	    var label = name;
	    var id = obj.id || "new";
	    for (var i = 0; i < search_columns.length; i++) {
	      var v = obj[search_columns[i]];
	      if (v) {
	        label = v;
	        break;
	      }
	    }
	    return label + "(" + id + ")";
	  }
	
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! react */ 1)))

/***/ },
/* 69 */
/*!******************************************!*\
  !*** ./js/components/form/InputMixin.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var assign = _interopRequire(__webpack_require__(/*! object-assign */ 51));
	
	var Association = _interopRequire(__webpack_require__(/*! ./Association.react */ 79));
	
	module.exports = {
	  propTypes: {
	    column: React.PropTypes.object.isRequired,
	    resource: React.PropTypes.object.isRequired,
	    settings: React.PropTypes.object.isRequired,
	    disabled: React.PropTypes.bool,
	    invalid: React.PropTypes.bool,
	    errors: React.PropTypes.string },
	
	  errorsBlock: function errorsBlock(label) {
	    if (!this.props.errors || this.props.errors.length == 0) {
	      return null;
	    }return this.props.errors.map(function (e, i) {
	      var msg = "" + label + " " + e;
	      return React.createElement(
	        "p",
	        { className: "help-block", key: i },
	        msg
	      );
	    });
	  },
	
	  inputClasses: function inputClasses() {
	    var classes = "form-control input-sm";
	    classes += "" + this.inputStatusClasses();
	    return classes;
	  },
	
	  inputStatusClasses: function inputStatusClasses() {
	    var classes = "";
	    if (this.isDirty()) {
	      classes += "modified";
	    }
	    if (this.hasError()) {
	      classes += "invalid";
	    }
	    return classes;
	  },
	
	  formClasses: function formClasses() {
	    var classes = "form-group";
	    if (this.hasError()) {
	      classes += " has-error";
	    }
	    return classes;
	  },
	
	  createAssociation: function createAssociation(target, options) {
	    var column = this.props.column;
	    var name = column.name;
	    var association = this.props.column.association;
	
	    var attrs = {
	      name: name,
	      column: column,
	      resource: this.props.resource,
	      settings: this.props.settings,
	      buttons: { select: association.select, clear: association.select, create: association.create, edit: association.update },
	      disabled: this.props.disabled,
	      target: target };
	
	    assign(attrs, options);
	
	    return React.createElement(Association, attrs);
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! react */ 1)))

/***/ },
/* 70 */
/*!***********************************************!*\
  !*** ./js/components/form/CollectionMixin.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {"use strict";
	
	module.exports = {
	  getInitialState: function getInitialState() {
	    var targets = this.props.resource[this.props.column.association.name];
	    return {
	      targets: targets,
	      dirty: false };
	  },
	
	  getResourceValue: function getResourceValue() {
	    var keys = Object.keys(this.refs);
	    var result = {};
	    var targets = [];
	    var name = this.props.column.association.name;
	
	    for (var i = 0, len = keys.length; i < len; i++) {
	      var key = keys[i];
	      var property = this.refs[key];
	      var value = property.getResourceValue();
	      targets.push(value[name]);
	    }
	
	    result[name] = targets;
	    return result;
	  },
	
	  isDirty: function isDirty() {
	    if (this.props.dirty) {
	      return true;
	    }var keys = Object.keys(this.refs);
	    for (var i = 0, len = keys.length; i < len; i++) {
	      var key = keys[i];
	      var property = this.refs[key];
	      if (property.isDirty()) {
	        return true;
	      }
	    }
	    return false;
	  },
	
	  add: function add() {
	    var targets = this.state.targets;
	    targets.push(null);
	    this.setState({
	      targets: targets,
	      dirty: false });
	  },
	
	  hasError: function hasError() {
	    return this.props.invalid;
	  },
	
	  render: function render() {
	    var _this = this;
	
	    var column = this.props.column;
	    var name = column.name;
	    var label = this.toProperyName(column);
	    var targets = this.state.targets || [];
	    if (targets.length == 0) {
	      targets.push(null); // append blank record if empty
	    }
	    var associations = targets.map(function (tgt, i) {
	      var attrs = {
	        key: "" + name + "[" + i + "]",
	        ref: i };
	      return _this.createAssociation(tgt, attrs);
	    });
	
	    return React.createElement(
	      "div",
	      { className: this.formClasses(), key: name },
	      React.createElement(
	        "label",
	        { htmlFor: name },
	        label
	      ),
	      associations,
	      React.createElement(
	        "div",
	        null,
	        React.createElement(
	          "button",
	          { type: "button", className: "btn btn-flat btn-primary btn-xs", onClick: this.add },
	          "Add"
	        )
	      ),
	      this.errorsBlock(label)
	    );
	  } };
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! react */ 1)))

/***/ },
/* 71 */
/*!*************************************!*\
  !*** ./js/actions/DialogActions.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var AppDispatcher = _interopRequire(__webpack_require__(/*! ../AppDispatcher */ 35));
	
	var Constants = _interopRequire(__webpack_require__(/*! ../Constants */ 36));
	
	module.exports = {
	
	  open: function open(name, component, props) {
	    AppDispatcher.dispatch({
	      type: Constants.DIALOG_OPENED,
	      data: {
	        name: name,
	        component: component,
	        props: props
	      }
	    });
	  },
	
	  close: function close(name) {
	    AppDispatcher.dispatch({
	      type: Constants.DIALOG_CLOSED,
	      data: {
	        name: name }
	    });
	  }
	};

/***/ },
/* 72 */
/*!********************************************************************************!*\
  !*** ./bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot ***!
  \********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f4769f9bdb7466be65088239c12046d1.eot"

/***/ },
/* 73 */
/*!**********************************************************!*\
  !*** ./bower_components/admin-lte/dist/img/boxed-bg.jpg ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "7799dece2c79854f63f09e7dfa528b88.jpg"

/***/ },
/* 74 */
/*!**********************************************************************************!*\
  !*** ./bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2 ***!
  \**********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "448c34a56d699c29117adc64c43affeb.woff2"

/***/ },
/* 75 */
/*!*********************************************************************************!*\
  !*** ./bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff ***!
  \*********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fa2772327f55d8198301fdb8bcfc8158.woff"

/***/ },
/* 76 */
/*!********************************************************************************!*\
  !*** ./bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf ***!
  \********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e18bbf611f2a2e43afc071aa2f4e1512.ttf"

/***/ },
/* 77 */
/*!********************************************************************************!*\
  !*** ./bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg ***!
  \********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "89889688147bd7575d6327160d64e760.svg"

/***/ },
/* 78 */
/*!********************************************************!*\
  !*** (webpack)/~/node-libs-browser/~/events/events.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      }
	      throw TypeError('Uncaught, unspecified "error" event.');
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        len = arguments.length;
	        args = new Array(len - 1);
	        for (i = 1; i < len; i++)
	          args[i - 1] = arguments[i];
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    len = arguments.length;
	    args = new Array(len - 1);
	    for (i = 1; i < len; i++)
	      args[i - 1] = arguments[i];
	
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    var m;
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  var ret;
	  if (!emitter._events || !emitter._events[type])
	    ret = 0;
	  else if (isFunction(emitter._events[type]))
	    ret = 1;
	  else
	    ret = emitter._events[type].length;
	  return ret;
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 79 */
/*!*************************************************!*\
  !*** ./js/components/form/Association.react.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var assign = _interopRequire(__webpack_require__(/*! object-assign */ 51));
	
	var ResourceActions = _interopRequire(__webpack_require__(/*! actions/ResourceActions */ 9));
	
	var ResourceStore = _interopRequire(__webpack_require__(/*! stores/ResourceStore */ 49));
	
	var DialogActions = _interopRequire(__webpack_require__(/*! actions/DialogActions */ 71));
	
	var PropertyMixin = _interopRequire(__webpack_require__(/*! components/PropertyMixin */ 68));
	
	var Selection = _interopRequire(__webpack_require__(/*! components/list/Selection.react */ 80));
	
	module.exports = React.createClass({
	  displayName: "form/Association",
	
	  mixins: [PropertyMixin],
	
	  propTypes: {
	    name: React.PropTypes.string.isRequired,
	    column: React.PropTypes.object.isRequired,
	    resource: React.PropTypes.object.isRequired,
	    settings: React.PropTypes.object.isRequired,
	    target: React.PropTypes.object,
	    buttons: React.PropTypes.object,
	    invalid: React.PropTypes.bool },
	
	  getInitialState: function getInitialState() {
	    return {
	      target: this.props.target,
	      dirty: false };
	  },
	
	  getFormValue: function getFormValue() {
	    var value = {};
	    if (this.state.formdata) {
	      value[this.props.column.association.name] = this.state.formdata;
	    }
	
	    return value;
	  },
	
	  getResourceValue: function getResourceValue() {
	    var value = {};
	    value[this.props.column.association.name] = this.state.target;
	    return value;
	  },
	
	  isDirty: function isDirty() {
	    return this.state.dirty;
	  },
	
	  associationName: function associationName() {
	    return this.props.column.association.pluralized;
	  },
	
	  associationLabel: function associationLabel() {
	    return this.props.column.association.label;
	  },
	
	  dialogName: function dialogName(prefix) {
	    return prefix + ":" + this.associationName();
	  },
	
	  clear: function clear() {
	    if (this.state.target) {
	      this.setState({
	        target: null,
	        dirty: true,
	        reason: "cleared" });
	    }
	  },
	
	  onSelect: function onSelect(selected) {
	    this.setState({ target: selected, dirty: true, reason: "selected" });
	
	    DialogActions.close(this.dialogName("selection"));
	  },
	
	  openSelection: function openSelection() {
	    var _this = this;
	
	    var title = this.associationLabel();
	    var name = this.props.column.association.path;
	
	    ResourceActions.list(name).then(function () {
	      DialogActions.open(_this.dialogName("selection"), Selection, { name: name, title: title, onselect: _this.onSelect });
	    });
	  },
	
	  settingsForForm: function settingsForForm(settings, action) {
	    var modified = assign({}, settings);
	    var columns = modified[action].columns;
	    var atype = this.props.column.association.type;
	    if (atype == "has_one" || atype == "has_many") {
	      var foreign_key = this.props.column.association.foreign_key;
	      columns = columns.map(function (col) {
	        var res = col;
	        if (col.name == foreign_key) {
	          col = assign({}, col);
	          col.readonly = true;
	        };
	        return col;
	      });
	    }
	
	    modified[action].columns = columns;
	    return modified;
	  },
	
	  propsForForm: function propsForForm(action, target, settings) {
	    var name = this.associationName();
	    var modified_settings = this.settingsForForm(settings, action);
	
	    var modified_target = assign({}, target);
	    var atype = this.props.column.association.type;
	
	    if (atype == "has_one" || atype == "has_many") {
	      var foreign_key = this.props.column.association.foreign_key;
	      var foreign_property = foreign_key.replace(/_id$/, ""); // TODO: fix
	      modified_target[foreign_key] = this.props.resource;
	      modified_target[foreign_property] = this.props.resource;
	    }
	    var dirty = this.state.dirty;
	    var props = {
	      name: name,
	      id: target.id,
	      resource: modified_target,
	      settings: modified_settings,
	      onsubmit: this.onSubmit,
	      classes: ["dialog-body"],
	      dirty: dirty
	    };
	
	    return props;
	  },
	
	  openDialog: function openDialog(action, fetchmethod) {
	    var _this = this;
	
	    var name = this.associationName();
	    var Form = __webpack_require__(/*! ./Form.react */ 18);
	
	    if (this.state.dirty && this.state.formsettings) {
	      var props = this.propsForForm(action, this.state.target, this.state.formsettings);
	      DialogActions.open(this.dialogName(action), Form, props);
	    } else {
	      fetchmethod().then(function () {
	        var state = ResourceStore.getState(name);
	        var props = _this.propsForForm(action, state.currentResource, state.settings);
	        _this.state.formsettings = state.settings;
	        DialogActions.open(_this.dialogName(action), Form, props);
	      });
	    }
	  },
	
	  openEdit: function openEdit() {
	    var name = this.associationName();
	    var id = this.state.target.id;
	    if (!id) {
	      return false;
	    }
	    this.openDialog("edit", function () {
	      return ResourceActions.fetch(name, id);
	    });
	  },
	
	  openCreate: function openCreate() {
	    var name = this.associationName();
	    this.openDialog("create", function () {
	      return ResourceActions.build(name);
	    });
	  },
	
	  onSubmit: function onSubmit(resource, data, dirty) {
	
	    console.log("onSubmit");
	    console.log(resource);
	    console.log(data);
	
	    if (dirty) {
	      var reason = "created";
	      if (resource.id) {
	        reason = "edited";
	      }
	      this.setState({ target: resource, dirty: true, formdata: data, reason: reason });
	    }
	
	    DialogActions.close(this.dialogName("create"));
	    DialogActions.close(this.dialogName("edit"));
	  },
	
	  buttons: (function (_buttons) {
	    var _buttonsWrapper = function buttons() {
	      return _buttons.apply(this, arguments);
	    };
	
	    _buttonsWrapper.toString = function () {
	      return _buttons.toString();
	    };
	
	    return _buttonsWrapper;
	  })(function () {
	    var default_buttons = {
	      select: true,
	      clear: true,
	      create: true,
	      edit: true };
	    var buttons = this.props.buttons || default_buttons;
	    var result = [];
	
	    if (this.props.disabled) {
	      return result;
	    }
	
	    if (buttons.clear) {
	      result.push(React.createElement(
	        "button",
	        { type: "button", key: "btn-clear", className: "btn btn-default btn-flat btn-xs", onClick: this.clear },
	        React.createElement("i", { className: "fa fa-close" })
	      ));
	    }
	    if (buttons.select) {
	      result.push(React.createElement(
	        "button",
	        { type: "button", key: "btn-select", className: "btn btn-default btn-flat btn-xs", onClick: this.openSelection },
	        React.createElement("i", { className: "fa fa-list" })
	      ));
	    }
	
	    if (buttons.create) {
	      result.push(React.createElement(
	        "button",
	        { type: "button", key: "btn-create", className: "btn btn-primary btn-flat btn-xs", onClick: this.openCreate },
	        React.createElement("i", { className: "fa fa-plus" })
	      ));
	    }
	
	    if (buttons.edit) {
	      result.push(React.createElement(
	        "button",
	        { type: "button", key: "btn-edit", className: "btn btn-primary btn-flat btn-xs", onClick: this.openEdit, disabled: !this.state.target },
	        React.createElement("i", { className: "fa fa-edit" })
	      ));
	    }
	
	    return result;
	  }),
	
	  render: function render() {
	    var displayText = "";
	    if (this.state.target) {
	      displayText = this.extractLabel(this.associationLabel(), this.state.target, this.props.settings.search_columns);
	    }
	
	    var classes = "form-control input-sm";
	    if (this.isDirty()) {
	      classes += " modified";
	    }
	
	    if (this.props.invalid) {
	      classes += " invalid";
	    }
	
	    return React.createElement(
	      "div",
	      { className: "input-group input-group-sm" },
	      React.createElement("input", { type: "text", className: classes, disabled: true, value: displayText }),
	      React.createElement(
	        "span",
	        { className: "input-group-btn" },
	        this.buttons()
	      )
	    );
	  } });
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! react */ 1)))

/***/ },
/* 80 */
/*!***********************************************!*\
  !*** ./js/components/list/Selection.react.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var ResourceStore = _interopRequire(__webpack_require__(/*! stores/ResourceStore */ 49));
	
	var ResourceItem = _interopRequire(__webpack_require__(/*! ./Item.react */ 65));
	
	var Pagination = _interopRequire(__webpack_require__(/*! ./Pagination.react */ 66));
	
	var SearchBox = _interopRequire(__webpack_require__(/*! ./SearchBox.react */ 67));
	
	var PropertyMixin = _interopRequire(__webpack_require__(/*! components/PropertyMixin */ 68));
	
	var PT = React.PropTypes;
	
	module.exports = React.createClass({
	  displayName: "list/Selection",
	
	  mixins: [PropertyMixin],
	
	  propTypes: {
	    name: PT.string,
	    title: PT.string,
	    onselect: PT.func },
	
	  getInitialState: function getInitialState() {
	    console.log("Selection: getInitialState");
	    return ResourceStore.getState(this.props.name);
	  },
	
	  componentDidMount: function componentDidMount() {
	    console.log("Selection: componentDidMount");
	    ResourceStore.addEventListener(this.props.name, this._onChange);
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    console.log("Selection: componentWillUnmount");
	    ResourceStore.removeEventListener(this.props.name, this._onChange);
	  },
	
	  _onChange: function _onChange() {
	    var st = ResourceStore.getState(this.props.name);
	    console.log("Selection: _onChange");
	    console.log(st);
	
	    this.setState(st);
	  },
	
	  render: function render() {
	    var _this = this;
	
	    console.log("resource selection render");
	
	    var Item = ResourceItem;
	
	    var classes = "dialog-body resource-list";
	    classes += " col-md-2";
	
	    var settings = this.state.settings;
	    var index_settings = this.state.settings.index;
	
	    var columns = [];
	    var searchcols = settings.search_columns;
	    console.log(searchcols);
	    var cols = index_settings.columns;
	    for (var i = 0; i < cols.length; i++) {
	      var col = cols[i];
	      for (var j = 0; j < searchcols.length; j++) {
	        if (col.name == "id" || col.name == searchcols[j]) {
	          columns.push(col);
	          break;
	        }
	      }
	    }
	    if (columns.length == 1) {
	      for (var i = 0; i < cols.length; i++) {
	        var col = cols[i];
	        if (col.name != "id" && col.name != "created_at" && col.name != "updated_at") {
	          columns.push(col);
	          break;
	        }
	      }
	    }
	
	    console.log(columns);
	    var headers = columns.map(function (col) {
	      var name = _this.toProperyName(col);
	      return React.createElement(
	        "th",
	        { key: name },
	        name
	      );
	    });
	
	    var items = this.state.resources.map(function (resource) {
	      var resource = resource;
	      var attrs = {
	        name: _this.props.name,
	        resource: resource,
	        key: resource.id,
	        columns: columns,
	        search_columns: settings.search_columns,
	        pagination: _this.state.pagination,
	        onclick: function () {
	          _this.props.onselect(resource);
	        } };
	
	      return React.createElement(Item, _extends({}, attrs, _this.props));
	    });
	
	    var title = this.props.title || this.props.name;
	
	    return React.createElement(
	      "div",
	      { className: classes },
	      React.createElement(
	        "div",
	        { className: "box box-primary" },
	        React.createElement(
	          "div",
	          { className: "box-header with-border" },
	          React.createElement(
	            "h3",
	            { className: "box-title" },
	            " ",
	            title,
	            " "
	          ),
	          React.createElement(
	            "div",
	            { className: "box-tools pull-right " },
	            React.createElement(SearchBox, _extends({ transition: false }, this.state))
	          )
	        ),
	        React.createElement(
	          "div",
	          { className: "box-body" },
	          React.createElement(
	            "div",
	            { className: "table-responsive" },
	            React.createElement(
	              "table",
	              { className: "table no-margin table-hover table-condensed" },
	              React.createElement(
	                "thead",
	                null,
	                React.createElement(
	                  "tr",
	                  null,
	                  headers
	                )
	              ),
	              React.createElement(
	                "tbody",
	                null,
	                items
	              )
	            )
	          )
	        ),
	        React.createElement(
	          "div",
	          { className: "box-footer clearfix" },
	          React.createElement(Pagination, _extends({ transition: false }, this.state))
	        )
	      )
	    );
	  } });
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! react */ 1)))

/***/ }
]);
//# sourceMappingURL=app.bundle.js.map