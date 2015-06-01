import ResourceActions from 'actions/ResourceActions';
import DialogActions   from 'actions/DialogActions';
import PropertyMixin   from 'components/PropertyMixin';

export default React.createClass({
  displayName: 'ResourceAssociationProperty',

  mixins: [PropertyMixin],

  propTypes: {
    column:   React.PropTypes.object.isRequired,
    resource: React.PropTypes.object.isRequired,
    settings: React.PropTypes.object.isRequired,
  },

  getInitialState() {
    return { target: this.props.resource[this.props.column.association.name] }
  },

  associationName() {
    return this.props.column.association.pluralized;
  },

  dialogName() {
    return "selection:" + this.associationName();
  },

  clear() {
    this.setState({ target: null });
  },

  onSelect(resource) {
    this.setState({ target: resource });

    DialogActions.close(this.dialogName());
  },

  openSelection(event) {
    var name = this.associationName();

    ResourceActions.list(name).then(() => {

      DialogActions.open(this.dialogName(), Selection, { name: name, onselect: this.onSelect });
    });
  },

  render() {
    var column      = this.props.column;
    var key         = column.name;
    var label       = this.toProperyName(column);
    var name        = "resource[" + key + "]";
    var value = null;
    var displayText = '';
    if(this.state.target) {
      value       = this.state.target.id;
      displayText = this.extractLabel(this.associationName(), this.state.target, this.props.settings.search_columns);
    }

    return(
      <div className="form-group" key={ key }>
         <label htmlFor={ name } >{ key }</label>
         <div className='input-group input-group-sm'>
           <input type="text" className="form-control input-sm" disabled value={ displayText } />
           <input type="hidden" name={ name } value={ value } />
           <span className='input-group-btn'>
             <button type="button" className="btn btn-default btn-flat btn-xs" onClick={ this.clear }>
               <i className="fa fa-close"/>
             </button>
             <button type="button" className="btn btn-default btn-flat btn-xs" onClick={ this.openSelection }>
               <i className="fa fa-list"/>
             </button>
             <button type="button" className="btn btn-primary btn-flat btn-xs">
               <i className="fa fa-edit"/>
             </button>
           </span>
         </div>
      </div>
    );
  },
})
