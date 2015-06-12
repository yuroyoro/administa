import PropertyMixin   from 'components/PropertyMixin';

export default React.createClass({
  displayName: 'detail/Property',

  mixins: [PropertyMixin],

  propTypes: {
    column:   React.PropTypes.object.isRequired,
    resource: React.PropTypes.object.isRequired,
    settings: React.PropTypes.object.isRequired,

  },

  render() {
    var column   = this.props.column;
    var name = this.toProperyName(column);

    var resource = this.props.resource;

    var value = this.toLabel(column, resource, this.props.settings.search_columns);

    return(
      <div className="form-group" key={ name }>
         <label htmlFor={ name }>{ name }</label>
         <blockquote> { value }</blockquote>
      </div>
    );
  },
})
