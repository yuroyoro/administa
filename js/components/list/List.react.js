import Router          from 'react-router';

import ResourceActions from 'actions/ResourceActions';
import ResourceItem    from './Item.react';
import Pagination      from './Pagination.react';
import SearchBox       from './SearchBox.react';
import LinkMixin       from 'components/LinkMixin';
import PropertyMixin   from 'components/PropertyMixin';

var PT = React.PropTypes

export default React.createClass({
  displayName: 'ResourceList',

  mixins: [LinkMixin, PropertyMixin, Router.Navigation ],

  propTypes: {
    name:       PT.string,
    id:         PT.number,
    col:        PT.number,
    resources:  PT.arrayOf(PT.object),
    settings:   PT.object.isRequired,
    pagination: PT.object,
  },

  clickItem(resource) {
    let name       = this.props.name;
    let id         = resource.id;
    let pagination = this.props.pagination;

    let attrs      = this.linkAttrs(name, id, pagination);
    let query      = this.linkToListQuery(attrs);

    ResourceActions.fetch(name, id, query).then(() => {
      this.transitionToShow(name, id, pagination);
    });
  },

  render() {
    console.log('resource list render');

    let Item = ResourceItem;

    var classes = "resource-list" ;
    classes += " col-md-" + this.props.col;

    var index_settings = this.props.settings.index;
    var headers = index_settings.columns.map((col) => {
      var name = this.toProperyName(col);
      return (<th key= { name } >{ name }</th>);
    });
    headers.push(<th key='administa-actions'>actions</th> );

    var items = this.props.resources.map((resource) => {
      let resource = resource;
      var selected = resource.id == this.props.id;
      var attrs = {
        name:           this.props.name,
        resource:       resource,
        key:            resource.id,
        selected:       selected,
        showlink:       true,
        columns:        index_settings.columns,
        search_columns: this.props.settings.search_columns,
        pagination:     this.props.pagination,
        onclick:        () => { this.clickItem(resource) },
      };

      return (<Item {...attrs}  />);
    });

    return(
      <div className={ classes }>
        <div className="box box-primary">

          <div className="box-header with-border">
            <h3 className="box-title"> {this.props.name} </h3>
            <div className="box-tools pull-right ">

              <SearchBox {...this.props}/>

            </div>
          </div>
          <div className="box-body">

            <div className="table-responsive">
              <table className="table no-margin table-hover table-condensed">
                <thead>
                  <tr>
                    { headers }
                  </tr>
                </thead>

                <tbody>
                  { items }
                </tbody>
              </table>
            </div>
          </div>

          <div className="box-footer clearfix">
             <Pagination {...this.props} />
          </div>
        </div>
      </div>
    );
  },
})
