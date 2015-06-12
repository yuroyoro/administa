import PropertyMixin   from 'components/PropertyMixin';
import Association     from './Association.react';

export default React.createClass({
  displayName: 'form/HasMany',

  mixins: [PropertyMixin],

  propTypes: {
    column:   React.PropTypes.object.isRequired,
    resource: React.PropTypes.object.isRequired,
    settings: React.PropTypes.object.isRequired,
    disabled: React.PropTypes.bool
  },

  getInitialState() {
    var targets = this.props.resource[this.props.column.association.name];
    return {
      targets: targets,
      dirty: false,
    }
  },

  getFormValue() {
    var keys = Object.keys(this.refs);
    var result = {};
    var targets = [];
    var name = this.props.column.association.name;

    for (var i = 0, len = keys.length; i < len; i++) {
      var key = keys[i];
      var property = this.refs[key];
      if(property.isDirty()) {
        var value = property.getFormValue();
        targets.push(value[name]);
      }
    }

    result[name] = targets;
    return result;
  },

  getResourceValue() {
    var keys = Object.keys(this.refs);
    var result = {};
    var targets = [];
    var name = this.props.column.association.name;

    for (var i = 0, len = keys.length; i < len; i++) {
      var key = keys[i];
      var property = this.refs[key];
      var value = property.getResourceValue();
      targets.push(value[name]);
    }

    result[name] = targets;
    return result;
  },

  isDirty() {
    if( this.props.dirty ) return true;

    var keys = Object.keys(this.refs);
    for (var i = 0, len = keys.length; i < len; i++) {
      var key = keys[i];
      var property = this.refs[key];
      if( property.isDirty() ) {
        return true
      }
    }
    return false;
  },

  add() {
    var targets = this.state.targets;
    targets.push(null);
    this.setState({
      targets: targets,
      dirty: false,
    });
  },

  render() {
    var column      = this.props.column;
    var name        = column.name;
    var label       = this.toProperyName(column);
    var association = this.props.column.association;
    var targets     = this.state.targets || [];
    if(targets.length == 0) {
      targets.push(null);  // append blank record if empty
    }

    var associations = targets.map((tgt, i) => {

      var attrs = {
        name:     name,
        column:   column,
        resource: this.props.resource,
        settings: this.props.settings,
        buttons:  { select: false, clear: true, create: true, edit: association.update },
        disabled: this.props.disabled,
        target:   tgt,
        key:      `${name}[${i}]`,
        ref:      i,
      }

      return  <Association {...attrs} />;
    });

    return(
      <div className="form-group" key={ name }>
         <label htmlFor={ name } >{ name }</label>

         { associations }
         <div>
           <button type="button" className="btn btn-flat btn-primary btn-xs" onClick={ this.add } >Add</button>
         </div>
      </div>
    );
  },
})
