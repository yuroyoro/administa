import AppDispatcher from '../AppDispatcher';
import Constants     from '../Constants';
import Router          from 'react-router';
import ResourceActions from 'actions/ResourceActions';

var Link = Router.Link;

export default {

  promiseTransition(route, params, query) {
    AppDispatcher.dispatch({
      type: Constants.APP_TRANSITION,
      route:  route,
      params: params,
      query:  query,
    });
  },

  transitionToShow(name, id, pagination) {
    var options = {
      name:  name,
      id:    id,
      page:  pagination.page,
      limit: pagination.limit,
      order: pagination.order,
      q:     pagination.q
    };

    var params = { name: name, id: id };
    var query = this.linkToListQuery(options);

    this.promiseTransition('show', params, query);

  },

  linkToNew(options = {}) {
    let name  = options.name;
    let label = options.label;

    var params = { name: name };
    var query = this.linkToListQuery(options);

    var f = (event) => {
      event.preventDefault();

      ResourceActions.build(name, query).then(() => {
        this.promiseTransition('new', params, query);
      });
    };

    var classes = options.classes || "btn btn-primary btn-xs btn-flat"
    var href = this.makeHref('new', params, query);

    var link = <a herf={ href } onClick={ f }  className={classes} >{ label }</a>;
    return link;
  },

  linkToEdit(options = {}) {
    let name  = options.name;
    let id    = options.id;
    let label = options.label;

    var params = { name: name, id: id };
    var query = this.linkToListQuery(options);

    var f = (event) => {
      event.preventDefault();
      ResourceActions.fetch(name, id, query).then(() => {
        this.promiseTransition('edit', params, query);
      });
    };

    var classes = options.classes || "btn btn-primary btn-xs btn-flat"
    var href = this.makeHref('edit', params, query);

    var link = <a herf={ href } onClick={ f }  className={classes} >{ label }</a>;
    return link;
  },

  linkToDestroy(options = {}) {
    let name  = options.name;
    let id    = options.id;
    let label = options.label;

    var params = { name: name, id: id };
    var query = this.linkToListQuery(options);

    var f = (event) => {
      event.preventDefault();

      if( options.confirm ){
        if( !window.confirm(options.confirm)) {
          return ;
        }
      }
      ResourceActions.destroy(name, id, query, options).then((data) => {

        var flash = data.flash;

        if( flash ) {
          $.notifyBar({ cssClass: "success", html: flash, });
        }
      });
      return true;
    };

    var classes = options.classes || "btn btn-danger btn-xs btn-flat"
    var href = this.makeHref('show', params, query);

    var link = <a herf={ href } onClick={ f }  className={classes} >{ label }</a>;
    return link;
  },

  linkToShow(options = {}) {
    let name  = options.name;
    let id    = options.id;
    let label = options.label;

    var params = { name: name, id: id };
    var query = this.linkToListQuery(options);

    var f = (event) => {
      event.preventDefault();

      ResourceActions.fetch(name, id, query).then(() => {
        this.promiseTransition('show', params, query);
      });
    };

    var classes = options.classes || "btn btn-primary btn-xs btn-flat"
    var href = this.makeHref('show', params, query);

    var link = <a herf={ href } onClick={ f }  className={classes} >{ label }</a>;
    return link;
  },

  linkToList(options = {}) {
    let route = 'resource';
    let name  = options.name;
    let id    = options.id;
    let label = options.label;

    var params = { name: name }
    if (id) {
      params.id = id;
      route = 'show';
    }
    var query = this.linkToListQuery(options);
    var transition = !(options.transition == false);

    var f = (event) => {
      event.preventDefault();

      ResourceActions.list(options.name, query).then(() => {
        if(transition) {
          this.promiseTransition(route, params, query);
        }
      });
    };

    var classes = options.classes ;
    var href = this.makeHref(route, params, query);

    var link = <a herf={ href } onClick={ f }  className={classes} key={ label } >{ label }</a>;
    return link;
  },

  linkAttrs(name, id, pagination){
    return {
      name:  name,
      id:    id,
      page:  pagination.page,
      limit: pagination.limit,
      order: pagination.order,
      q:     pagination.q
    }
  },

  linkToListQuery(options = {}) {
    return {
      page:  options.page,
      limit: options.limit,
      order: options.order,
      q:     options.q
    }
  },

}
