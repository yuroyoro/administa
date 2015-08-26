import ResourceStore   from 'stores/ResourceStore';
import ResourceItem    from './Item.react';
import Pagination      from './Pagination.react';
import SearchBox       from './SearchBox.react';
import PropertyMixin   from 'components/PropertyMixin';

var PT = React.PropTypes

export default React.createClass({
  displayName: 'list/Selection',

  mixins: [PropertyMixin],

  propTypes: {
    name:       PT.string,
    title:      PT.string,
    onselect:   PT.func,
  },

  getInitialState() {
    return ResourceStore.getState(this.props.name);
  },

  componentDidMount() {
    ResourceStore.addEventListener(this.props.name, this._onChange);
  },

  componentWillUnmount() {
    ResourceStore.removeEventListener(this.props.name, this._onChange);
  },

  _onChange() {
    var st = ResourceStore.getState(this.props.name);

    this.setState(st);
  },

  render() {
    let Item = ResourceItem;

    var classes = "dialog-body resource-list" ;
    classes += " col-md-2";

    var settings = this.state.settings;
    var index_settings = this.state.settings.index;

    var columns = [];
    var searchcols = settings.search_columns;
    var cols = index_settings.columns;
    for(var i = 0; i < cols.length; i++) {
      var col = cols[i];
      for(var j = 0; j < searchcols.length; j++) {
        if( col.name == 'id' || col.name == searchcols[j]) {
          columns.push(col);
          break;
        }
      }
    }
    if( columns.length == 1 ) {
      for(var i = 0; i < cols.length; i++) {
        var col = cols[i];
        if( col.name != 'id' && col.name != 'created_at' && col.name != 'updated_at') {
          columns.push(col);
          break;
        }
      }
    }

    var headers = columns.map((col) => {
      var name = this.toProperyName(col);
      return (<th key={ name } >{ name }</th>);
    });

    var items = this.state.resources.map((resource) => {
      let resource = resource;
      var attrs = {
        name:           this.props.name,
        resource:       resource,
        key:            resource.id,
        columns:        columns,
        search_columns: settings.search_columns,
        pagination:     this.state.pagination,
        onclick:        ()=> { this.props.onselect(resource) },
      };

      return (<Item {...attrs} {...this.props}  />);
    });

    var title = this.props.title || this.props.name;

    return(

      <div className={ classes }>
        <div className="box box-primary">

          <div className="box-header with-border">
            <h3 className="box-title"> { title } </h3>
            <div className="box-tools pull-right ">

              <SearchBox transition={ false } {...this.state}/>

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
             <Pagination transition={ false } {...this.state} />
          </div>
        </div>
      </div>
    );
  },
})
