import InputMixin      from './InputMixin';
import CollectionMixin from './CollectionMixin';
import PropertyMixin   from 'components/PropertyMixin';

export default React.createClass({
  displayName: 'form/HasMany',

  mixins: [PropertyMixin, InputMixin, CollectionMixin],

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

})
