import ResourceStore   from 'stores/ResourceStore';
import ResourceItem    from './Item.react';
import Pagination      from './Pagination.react';
import SearchBox       from './SearchBox.react';
import PropertyMixin   from 'components/PropertyMixin';

var PT = React.PropTypes

export default React.createClass({
  displayName: 'ResourceSelection',

  mixins: [PropertyMixin],

  propTypes: {
    name:       PT.string,
    onselect:   PT.func,
  },

  getInitialState() {
    console.log("Selection: getInitialState");
    return ResourceStore.getState(this.props.name);
  },

  componentDidMount() {
    console.log("Selection: componentDidMount");
    ResourceStore.addEventListener(this.props.name, this._onChange);
  },

  componentWillUnmount() {
    console.log("Selection: componentWillUnmount");
    ResourceStore.removeEventListener(this.props.name, this._onChange);
  },

  _onChange() {
    var st = ResourceStore.getState(this.props.name);
    console.log("Selection: _onChange");
    console.log(st);

    this.setState(st);
  },

  render() {
    console.log('resource selection render');

    let Item = ResourceItem;

    var classes = "dialog-body resource-list" ;
    classes += " col-md-2";

    var settings = this.state.settings;
    var index_settings = this.state.settings.index;

    var columns = [];
    var searchcols = settings.search_columns;
    console.log(searchcols);
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

    console.log(columns);
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
        showlink:       false,
        columns:        columns,
        search_columns: settings.search_columns,
        pagination:     this.state.pagination,
        onclick:        ()=> { this.props.onselect(resource) },
      };

      return (<Item {...attrs} {...this.props}  />);
    });

    return(

      <div className={ classes }>
        <div className="box box-primary">

          <div className="box-header with-border">
            <h3 className="box-title"> {this.props.name} </h3>
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
