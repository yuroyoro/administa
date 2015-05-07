import Router          from 'react-router';
import ResourceActions from 'actions/ResourceActions';
import LinkMixin       from 'components/LinkMixin';

var Link = Router.Link;
var PT = React.PropTypes

export default React.createClass({
  displayName: 'ResourceItem',

  mixins: [LinkMixin],

  propTypes: {
    resource: PT.object.isRequired,
    settings: PT.object.isRequired
  },

  showLink(resource){
    let name = this.props.name;
    let id   = resource.id;

    var linkAttrs = {
      name:  name,
      id:    id,
      label: 'show',
      page:  this.props.pagination.page,
      limit: this.props.pagination.limit,
      order: this.props.pagination.order,
      q:     this.props.pagination.q
    }

    return this.linkToShow(linkAttrs);
  },

  render() {
    var resource = this.props.resource;
    var classes = this.props.selected ? "info" : "";

    var settings = this.props.settings.index;
    var cols = settings.columns.map((col) => {
      return (<td key={ col } >{ resource[col] }</td>);
    });
    cols.push( <td key='administa-resource-action'>{ this.showLink(resource) }</td> );

    return(
      <tr key={ resource.id } className={ classes }>
        { cols }
      </tr>
    );
  },
})
