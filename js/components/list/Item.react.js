import Router          from 'react-router';
import ResourceActions from 'actions/ResourceActions';
import LinkMixin       from 'components/LinkMixin';
import PropertyMixin   from 'components/PropertyMixin';

var Link = Router.Link;
var PT = React.PropTypes

export default React.createClass({
  displayName: 'list/Item',

  mixins: [LinkMixin, PropertyMixin, Router.Navigation ],

  propTypes: {
    name:           PT.string.isRequired,
    resource:       PT.object.isRequired,
    columns:        PT.array.isRequired,
    search_columns: PT.array.isRequired,
    pagination:     PT.object.isRequired,
    onclick:        PT.func,
  },

  showLink(resource){

    var attrs = this.linkAttrs(this.props.name, resource.id, this.props.pagination);
    attrs.label = 'show';

    return this.linkToShow(attrs);
  },

  render() {
    var resource = this.props.resource;
    var classes = this.props.selected ? "info" : "";


    var cols = this.props.columns.map((col) => {
      var label = this.toLabel( col, resource,
        { search_columns: this.props.search_columns, wrap_tag: true, ellipsis: true }
      );
      var title = this.toLabel( col, resource,
        { search_columns: this.props.search_columns, wrap_tag: false, ellipsis: true}
      );

      return (<td key={ col.name } alt={ title } title={ title }>{ label }</td>);
    });

    return(
      <tr key={ resource.id } className={ classes } onClick={ this.props.onclick} >
        { cols }
      </tr>
    );
  },
})
