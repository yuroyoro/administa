import ResourceStore   from 'stores/ResourceStore';
import ResourceActions from 'actions/ResourceActions';
import ResourceItem    from './Item.react';
import Pagination      from './Pagination.react';
import SearchBox       from './SearchBox.react';

var PT = React.PropTypes

export default React.createClass({
  displayName: 'ResourceList',

  propTypes: {
    name:      PT.string,
    id:        PT.number,
    col:       PT.number,
    resources: PT.arrayOf(PT.object),
    settings:  PT.object.isRequired,
    pagination: PT.object,
  },

  render() {
    console.log('resource list render');

    let Item = ResourceItem;

    var classes = "resource-list" ;
    classes += " col-md-" + this.props.col;

    var settings = this.props.settings.index;
    var headers = settings.columns.map((col) => {
      return (<th key= { col } >{ col }</th>);
    });
    headers.push(<th key='administa-actions'>actions</th> );

    var items = this.props.resources.map((resource) => {
      var selected = resource.id == this.props.id;
      var attrs = {
        resource: resource,
        key: resource.id,
        selected: selected
      };

      return (<Item {...attrs} {...this.props} key={resource.id} />);
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
