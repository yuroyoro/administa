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
    var tag = null;

    switch( this.props.column.type ) {
      case "file" :
        var imgtag = null;
        if( value.url ) {
          tag = <span><img src={ value.url } />{ value.url }</span>;
        }
         break;
      case "boolean" :
         tag = 'on';
         if(!value) tag = 'off';
         break;
      default:
         tag = value;
    }

    return(
      <div className="form-group" key={ name }>
         <label htmlFor={ name }>{ name }</label>
         <blockquote>{ tag }</blockquote>
      </div>
    );
  },
})
