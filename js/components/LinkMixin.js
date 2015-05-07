import Router          from 'react-router';
import ResourceActions from 'actions/ResourceActions';

var Link = Router.Link;

export default {
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

    var classes = options.classes || "btn btn-primary btn-xs"

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

    var classes = options.classes || "btn btn-primary btn-xs"

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
    var f = () => {
     ResourceActions.list(options.name, query);
      return true;
    };

    return f;
  }

}
