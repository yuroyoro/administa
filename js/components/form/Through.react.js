import InputMixin      from './InputMixin';
import CollectionMixin from './CollectionMixin';
import PropertyMixin   from 'components/PropertyMixin';

export default React.createClass({
  displayName: 'form/Through',

  mixins: [PropertyMixin, InputMixin, CollectionMixin],

  getFormValue() {
    var keys = Object.keys(this.refs);
    var result = {};
    var targets = [];
    var ids     = [];
    var name = this.props.column.association.name;
    var dirty   = false;

    for (var i = 0, len = keys.length; i < len; i++) {
      var key = keys[i];
      var property = this.refs[key];
      var target = property.state.target;
      if(target && target.id) {
        ids.push(target.id);
      }
      if(property.isDirty()) {
        dirty = true
        switch (property.state.reason) {
          case 'created':
          case 'edited':
            var value = property.getFormValue();
            targets.push(value[name]);
            break;
          case 'selected':
            break;
          case 'cleared':
            if( property.state.destroy ) {
              targets.push(property.state.destroy);
            }
        }
      }
    }

    if( targets.length > 0) {
      result[name] = targets;
    }
    if(dirty) {
      result[this.props.column.association.foreign_key] = ids;
    }
    return result;
  },
})
