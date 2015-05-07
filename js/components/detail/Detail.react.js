import Router          from 'react-router';
import LinkMixin       from 'components/LinkMixin';
import Property        from './Property.react';

export default React.createClass({
  displayName: 'ResourceDetail',

  mixins: [LinkMixin],

  propTypes: {
    name: React.PropTypes.string,
    id:   React.PropTypes.number,
    col:  React.PropTypes.number,
    resource: React.PropTypes.object.isRequired,
    pagination: React.PropTypes.object,
    settings: React.PropTypes.object
  },

  shouldComponentUpdate(nextProps, nextState) {
    return !!nextProps.resource;
  },


  editLink(resource){
    let name = this.props.name;
    let id   = resource.id;

    var linkAttrs = {
      name:  name,
      id:    id,
      label: 'edit',
      page:  this.props.pagination.page,
      limit: this.props.pagination.limit,
      order: this.props.pagination.order,
      q:     this.props.pagination.q
    }

    return this.linkToEdit(linkAttrs);
  },

  properties() {
    return this.props.settings.show.columns.map((col) => {
      return <Property column={ col } value={ this.props.resource[col] } key={ col }/>;
    });
  },

  render() {
    console.log("resource detail render");
    var resource = this.props.resource;
    var classes = "resource-detail" ;
    classes += " col-md-" + this.props.col;

    if (!resource) {
      return <div className={ classes } />
    }

    var properties = this.properties();

    return(
      <div className={ classes }>
        <div className="box box-primary">
          <div className="box-header with-border">
            <h3 className='box-title'> Detail : {this.props.name}({this.props.id})</h3>
            <div className="box-tools pull-right">
              { this.editLink(resource) }
            </div>
          </div>
          <div className="box-body">
            { properties }
          </div>
        </div>
      </div>
    );
  },
})
