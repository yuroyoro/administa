import PropertyMixin   from 'components/PropertyMixin';

export default React.createClass({
  displayName: 'ResourceEditProperty',

  mixins: [PropertyMixin],

  propTypes: {
    column:   React.PropTypes.object.isRequired,
    resource: React.PropTypes.object.isRequired,
    settings: React.PropTypes.object.isRequired,
  },

  getInitialState() {
    return { value: this.props.resource[this.props.column.name]}
  },

  handleChange(event) {
    this.setState({value: event.target.value});
  },

  render() {
    var column  = this.props.column.name;
    var value = this.state.value;

    var name = "resource[" + column + "]";
    return(
      <div className="form-group" key={ column }>
         <label htmlFor={ name } >{ column }</label>
         <input type="text" className="form-control input-sm"  name={ name } value={ value } onChange={ this.handleChange } />
      </div>
    );
  },
})
