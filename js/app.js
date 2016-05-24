'use strict'

import Router    from 'react-router';
import Bootstrap from 'bootstrap';
import AdminLTE  from 'adminlte';

// react-router
var Route         = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute  = Router.DefaultRoute;
var Link          = Router.Link;
var Redirect      = Router.Redirect;
var RouteHandler  = Router.RouteHandler;

// require stylesheets
require("bootstrap.css");
require("adminlte.css");
// require("adminlte-skins-blue.css");
require("adminlte-skins-black.css");
require("app.css");

//setup datetimepicker with moment.js
require("jquery.datetimepicker.css");
require("jquery-datetimepicker.js");

// setup jquery notify bar
require("jqnotifybar");
require("jquery.notifyBar.css")

Date.parseDate = function( input, format ){
  return moment(input,format).toDate();
};
Date.prototype.dateFormat = function( format ){
  return moment(this).format(format);
};

import AppStore        from 'stores/AppStore';
import ResourceActions from 'actions/ResourceActions';
import MenuActions     from 'actions/MenuActions';
import UserActions     from 'actions/UserActions';

import Header        from 'components/Header.react';
import Menu          from 'components/Menu.react';
import Main          from 'components/Main.react';
import Footer        from 'components/Footer.react';
import Loader        from 'Loader';

import Resource       from 'components/Resource.react';
import ResourceDetail from 'components/detail/Detail.react';
import ResourceForm   from 'components/form/Form.react';

import Dialogs        from 'components/Dialogs.react';
import Utils          from 'Utils';

// expose React to global (workarround)
global.React = React;


// Display js error
window.addEventListener('error', function(e){

  var stack = e.stack || (e.error && e.error.stack);
  Utils.reportError(e.message, e.error, stack);
});

var App = React.createClass({
  displayName: 'App',

  mixins: [Router.Navigation],

  getInitialState() {
    return AppStore.getState();
  },

  componentDidMount() {
    AppStore.addEventListener(this._onChange);
  },

  componentWillUnmount() {
    AppStore.removeEventListener(this._onChange);
  },

  componentWillUpdate(nextProps, nextState) {

    if (nextState.transitionTo ) {
      var route  = nextState.transitionTo.route;
      var params = nextState.transitionTo.params;
      var query  = nextState.transitionTo.query;

      this.transitionTo(route, params, query);
    }
  },

  _onChange() {
    var st = AppStore.getState();
    this.setState(st);
  },

  render() {
    return (
      <div className="main">
        <Header/>
        <Menu/>

        <div className="content-wrapper">
          <section className="content">

          <RouteHandler {...this.props}/>

          </section>
        </div>

        <Footer/>
        <Dialogs/>
      </div>
    );
  }
});

var routes = (
    <Route name="app" path="/" handler={App} >
      <DefaultRoute handler={Main}/>
      <NotFoundRoute handler={Main}/>

      <Route name="resource" path="administa/:name" handler={Resource} >
        <Route name="new"  path="new"      handler={ResourceForm  } />
        <Route name="edit" path=":id/edit" handler={ResourceForm  } />
        <Route name="show" path=":id"      handler={ResourceDetail}   />
      </Route>
      <Redirect from="administa/:name/" to="resource" />
    </Route>
);

Loader.setup();

export default {
  dataElement() {
    return document.getElementById('initial-data');
  },

  extractFromDataElement(name) {
    return JSON.parse(this.dataElement().getAttribute(name));
  },

  initialData() {
    return this.extractFromDataElement('data-json');
  },

  user() {
    return this.extractFromDataElement('user-json');
  },

  menus() {
    return this.extractFromDataElement('menu-json');
  },

  initializeAdminLTE() {
    //Activate the layout maker
    $.AdminLTE.layout.fix()
    //Enable sidebar tree view controls
    $.AdminLTE.tree('.sidebar');
  },

  render(data) {

    ResourceActions.initialize(data);
    UserActions.initialize(this.user());
    MenuActions.initialize(this.menus());

    Router.run(routes, Router.HistoryLocation, (Handler, state) => {
      let params = state.params;
      React.render(<Handler params={params}/>, document.body);
    });

    this.initializeAdminLTE();
  }

}
