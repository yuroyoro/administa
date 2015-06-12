import assign          from 'object-assign';
import ResourceActions from 'actions/ResourceActions';
import ResourceStore   from 'stores/ResourceStore';

import DialogActions   from 'actions/DialogActions';
import PropertyMixin   from 'components/PropertyMixin';

import Selection       from 'components/list/Selection.react';

export default React.createClass({
  displayName: 'form/Association',

  mixins: [PropertyMixin],

  propTypes: {
    name:     React.PropTypes.string.isRequired,
    column:   React.PropTypes.object.isRequired,
    resource: React.PropTypes.object.isRequired,
    settings: React.PropTypes.object.isRequired,
    target:   React.PropTypes.object,
    buttons:  React.PropTypes.object,

  },

  getInitialState() {
    return {
      target: this.props.target,
      dirty: false,
    }
  },

  getFormValue() {
    var value = {};
    if( this.state.formdata ) {
      value[this.props.column.association.name] = this.state.formdata;
    }

    return value;
  },

  getResourceValue() {
    var value = {};
    value[this.props.column.association.name] = this.state.target;
    return value;
  },

  isDirty() {
    return this.state.dirty;
  },

  associationName() {
    return this.props.column.association.pluralized;
  },

  dialogName(prefix) {
    return prefix + ":" + this.associationName();
  },

  clear() {
    if(this.state.target) {
      this.setState({
        target: null,
        dirty:  true,
      });
    }
  },

  onSelect(selected) {
    this.setState({ target: selected, dirty: true, });

    DialogActions.close(this.dialogName("selection"));
  },

  openSelection() {
    var title = this.associationName();
    var name  = this.props.column.association.path;

    ResourceActions.list(name).then(() => {
      DialogActions.open(this.dialogName("selection"), Selection, { name: name, title: title, onselect: this.onSelect });
    });
  },

  settingsForForm(settings, action) {
    var modified=  assign({}, settings);
    var columns  = modified[action].columns;
    var atype  = this.props.column.association.type;
    if(atype == 'has_one' || atype == 'has_many'){
      var foreign_key = this.props.column.association.foreign_key;
      columns = columns.map((col) => {
        var res = col;
        if(col.name == foreign_key){
          col = assign({}, col);
          col.readonly = true;
        };
        return col;
      });
    }

    modified[action].columns = columns;
    return modified;
  },

  propsForForm(action, target, settings) {
    var name = this.associationName();
    var modified_settings = this.settingsForForm(settings, action);

    var modified_target = assign({}, target);
    var atype  = this.props.column.association.type;

    if(atype == 'has_one' || atype == 'has_many'){
      var foreign_key = this.props.column.association.foreign_key;
      var foreign_property = foreign_key.replace(/_id$/,  ""); // TODO: fix
      modified_target[foreign_key] = this.props.resource;
      modified_target[foreign_property] = this.props.resource;
    }
    var dirty = this.state.dirty;
    var props = {
      name:     name,
      id:       target.id,
      resource: modified_target,
      settings: modified_settings,
      onsubmit: this.onSubmit,
      classes:  ['dialog-body'],
      dirty:    dirty
    }

    return props;

  },

  openDialog(action, fetchmethod) {
    var name = this.associationName();
    var Form = require('./Form.react');

    if(this.state.dirty && this.state.formsettings) {
      var props = this.propsForForm(action, this.state.target, this.state.formsettings);
      DialogActions.open(this.dialogName(action), Form, props);
    } else {
      fetchmethod().then(() => {
        var state = ResourceStore.getState(name);
        var props = this.propsForForm(action, state.currentResource, state.settings);
        this.state.formsettings = state.settings;
        DialogActions.open(this.dialogName(action), Form, props);
      });
    }
  },

  openEdit() {
    var name = this.associationName();
    var id   = this.state.target.id;
    if(!id) {
      return false;
    }
    this.openDialog("edit", () => {
      return ResourceActions.fetch(name, id);
    });
  },

  openCreate() {
    var name = this.associationName();
    this.openDialog("create", () => {
      return ResourceActions.build(name);
    });
  },

  onSubmit(resource, data, dirty) {

    console.log('onSubmit');
    console.log(resource);
    console.log(data);

    if( dirty ) {
      this.setState({ target: resource, dirty: true, formdata: data });
    }

    DialogActions.close(this.dialogName("create"));
    DialogActions.close(this.dialogName("edit"));
  },

  buttons() {
    var default_buttons = {
      select: true,
      clear:  true,
      create: true,
      edit:   true,
    }
    var buttons = this.props.buttons || default_buttons;
    var result = [];

    if(this.props.disabled) {
      return result;
    }

    if(buttons.clear) {
      result.push(
        <button type="button" key='btn-clear' className="btn btn-default btn-flat btn-xs" onClick={ this.clear }>
          <i className="fa fa-close"/>
        </button>
      );
    }
    if(buttons.select) {
      result.push(
        <button type="button" key='btn-select' className="btn btn-default btn-flat btn-xs" onClick={ this.openSelection }>
          <i className="fa fa-list"/>
        </button>
      );
    }

    if(buttons.create) {
      result.push(
        <button type="button" key='btn-create' className="btn btn-primary btn-flat btn-xs" onClick={ this.openCreate }>
          <i className="fa fa-plus"/>
        </button>
      );
    }

    if(buttons.edit) {
      result.push(
        <button type="button" key='btn-edit' className="btn btn-primary btn-flat btn-xs" onClick={ this.openEdit } disabled={ !this.state.target }>
          <i className="fa fa-edit"/>
        </button>
      );
    }

    return result;
  },

  render() {
    var displayText = '';
    if(this.state.target) {
      displayText = this.extractLabel(this.associationName(), this.state.target, this.props.settings.search_columns);
    }

    var classes = "form-control input-sm";
    if(this.isDirty()){
      classes += " modified";
    }

    return(
     <div className='input-group input-group-sm'>
       <input type="text" className={ classes } disabled value={ displayText } />
       <span className='input-group-btn'>
         { this.buttons() }
       </span>
     </div>
    );
  },
})
