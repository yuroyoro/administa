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
require("adminlte-skins-blue.css");
require("adminlte-skins-black.css");
require("app.css");

//setup datetimepicker with moment.js
require("jquery.datetimepicker.css");
require("jquery-datetimepicker");

Date.parseDate = function( input, format ){
  return moment(input,format).toDate();
};
Date.prototype.dateFormat = function( format ){
  return moment(this).format(format);
};

import ResourceActions from 'actions/ResourceActions';
import MenuActions     from 'actions/MenuActions';
import UserActions     from 'actions/UserActions';

import Header        from 'components/Header.react';
import Menu          from 'components/Menu.react';
import ContentHeader from 'components/ContentHeader.react';
import Footer        from 'components/Footer.react';
import Loader        from 'Loader';

import Resource       from 'components/Resource.react';
import ResourceDetail from 'components/detail/Detail.react';
import ResourceForm   from 'components/form/Form.react';

import Dialogs        from 'components/Dialogs.react';

// expose React to global (workarround)
global.React = React;

var App = React.createClass({
  displayName: 'App',

  render() {
    return (
      <div className="main">
        <Header/>
        <Menu/>

        <div className="content-wrapper">
          <section className="content">

          <RouteHandler {...this.props}/>

          </section><!-- /.content -->
        </div>

        <Footer/>
        <Dialogs/>
      </div>
    );
  }
});

var routes = (
    <Route name="app" path="/" handler={App} >
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
  initialData() {
    var data = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
    return data;
  },

  user() {
    return JSON.parse(document.getElementById('initial-data').getAttribute('user-json'));
  },

  menus() {
    return JSON.parse(document.getElementById('initial-data').getAttribute('menu-json'));
  },

  render(data) {

    console.log('render');
    console.log(data);
    ResourceActions.initialize(data);
    UserActions.initialize(this.user());
    MenuActions.initialize(this.menus());

    Router.run(routes, Router.HistoryLocation, (Handler, state) => {
      let params = state.params;
      React.render(<Handler params={params}/>, document.body);
    });

    $.AdminLTE.layout.fix()
  }

}
