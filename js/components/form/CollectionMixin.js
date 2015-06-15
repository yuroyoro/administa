export default {
  getInitialState() {
    var targets = this.props.resource[this.props.column.association.name];
    return {
      targets: targets,
      dirty: false,
    }
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

  hasError() {
    return this.props.invalid;
  },

  render() {
    var column      = this.props.column;
    var name        = column.name;
    var label       = this.toProperyName(column);
    var targets     = this.state.targets || [];
    if(targets.length == 0) {
      targets.push(null);  // append blank record if empty
    }
    var associations = targets.map((tgt, i) => {
      var attrs = {
        key: `${name}[${i}]`,
        ref: i,
      }
      return this.createAssociation(tgt, attrs);
    });

    return(
      <div className={ this.formClasses() } key={ name }>
         <label htmlFor={ name } >{ label }</label>

         { associations }
         <div>
           <button type="button" className="btn btn-flat btn-primary btn-xs" onClick={ this.add } >Add</button>
         </div>

         { this.errorsBlock(label) }
      </div>
    );
  },
}
