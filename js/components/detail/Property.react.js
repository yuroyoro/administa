export default React.createClass({
  displayName: 'ResourceDetailProperty',

  propTypes: {
    column:  React.PropTypes.string
  },

  render() {
    var column = this.props.column;
    var value = this.props.value;
    return(
      <div className="form-group" key={ column }>
         <label htmlFor={ column }>{ column }</label>
         <blockquote> { value }</blockquote>
      </div>
    );
  },
})
