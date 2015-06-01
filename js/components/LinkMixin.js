import Router          from 'react-router';
import ResourceActions from 'actions/ResourceActions';

var Link = Router.Link;

export default {
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

    console.log("--transitionToShow");
    console.log(params);
    console.log(query);
    console.log("---");

    this.transitionTo('show', params, query);
  },

  linkToEdit(options = {}) {
    let name  = options.name;
    let id    = options.id;
    let label = options.label;

    var params = { name: name, id: id };
    var query = this.linkToListQuery(options);

    var f = () => {
      ResourceActions.fetch(name, id, query);
      return true;
    };

    var classes = options.classes || "btn btn-primary btn-xs btn-flat"

    var link = <Link to='edit' params={ params } query={ query } onClick={ f } className={classes} >{ label }</Link>;
    return link;
  },

  linkToShow(options = {}) {
    let name  = options.name;
    let id    = options.id;
    let label = options.label;

    var params = { name: name, id: id };
    var query = this.linkToListQuery(options);

    var f = () => {
      ResourceActions.fetch(name, id, query);
      return true;
    };

    var classes = options.classes || "btn btn-primary btn-xs btn-flat"

    var link = <Link to='show' params={ params } query={ query } onClick={ f } className={classes}>{ label }</Link>;
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
    var f = this.linkToListHandler(options);

    return(
      <Link to= { route } params={ params } query={ query } onClick={ f } key={ label } >{ label }</Link>
    );
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

  linkToListHandler(options = {}) {
    var query = this.linkToListQuery(options);
    var transition = !(options.transition == false);
    var f = () => {
      ResourceActions.list(options.name, query);
      return transition;
    };

    return f;
  }

}
