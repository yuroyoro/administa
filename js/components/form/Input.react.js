import InputMixin      from './InputMixin';
import PropertyMixin   from 'components/PropertyMixin';


export default React.createClass({
  displayName: 'form/Input',

  mixins: [PropertyMixin, InputMixin],

  getState(resource) {
    return {
      value: resource[this.props.column.name],
      dirty: false,
    };
  },

  getInitialState() {
    var value = this.props.resource[this.props.column.name];
    var dirty = false;

    if( !this.props.resource.id ) { // cordinate itinial values for creation
      if ( this.props.column.default && !value) {
        value = this.props.column.default;
        dirty = true;
      }

      if ( this.props.column.type == 'enum' && value ) {
        // this filed is considered as 'edited' if enum type has default value on creation
        dirty = true;
      }
    }
    if( value && this.props.column.type == 'datetime' ) {
      value = value.replace(/ [+-]\d+/, "");
    }

    return {
      value: value,
      dirty: dirty,
    };
  },

  componentDidMount() {
    if ( this.props.column.type == "datetime") {
      var options = {
        lang:       this.props.settings.locale,
        format:     'Y/m/d H:i',
        defaultDate:new Date()
      };
      var str_min_sec = "00:00";
      var the_value = this.props.resource[this.props.column.name];
      if(the_value) {
        var arr = /\d+\/\d+\/\d+ \d+:(\d+):(\d+)/.exec(the_value);
        if(arr) {
          str_min_sec = "" + arr[1] + ":" + arr[2];
        }
      }
      options['onClose'] = (current_time, input, event) => {
        var determined_value = jQuery(input).val();
        var matched = /^\d+\/\d+\/\d+ \d+:/.exec(determined_value);
        if(matched) {
          determined_value = matched[0] + str_min_sec;
        }
        this.handleChange(event, determined_value);
      }

      // in moment.js, default timezone offset is detected by Date.prototype.getTimezoneOffset
      jQuery("input[name='" + this.props.column.name + "'].datetimepicker").datetimepicker(options);
    }
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.resource && nextProps.resource.id != this.props.resource.id) {
      this.setState(this.getState(nextProps.resource));
    }
  },

  handleChange(event, value) {
    var initial = this.props.resource[this.props.column.name];
    // set null value that represents "blank"
    var value  = event.target.value || value || null;
    if ( this.props.column.type == 'file') {
      value  = jQuery(event.target).prop('files')[0];
    }
    if ( this.props.column.type == 'boolean') {
      value = event.target.checked;
    }
    this.setState({
      value: value,
      dirty: (value != initial),
    });
  },

  getFormValue() {
    return this.getResourceValue();
  },

  getResourceValue() {
    var value = {};
    value[this.props.column.name] = this.state.value;
    return value;
  },

  isDirty() {
    return this.state.dirty;
  },

  hasError() {
    return this.props.invalid;
  },

  inputField() {
    var name   = this.props.column.name;
    var value  = this.state.value;

    // TODO: refactor
    switch( this.props.column.type ) {
      case "file" :
        var imgtag = null;
        if( value.url ) {
          imgtag = <img src={ value.url } />;
        }

        return (
          <div>
            { imgtag }
            <input type="file"  className={ this.inputClasses() } name={ name } disabled={this.props.disabled} onChange={ this.handleChange } />
          </div>
         );
      case "boolean" :
        var text = 'on';
        if(!this.state.value) text = 'off';

        return <div className="checkbox"><label><input type="checkbox"  className={ this.inputStatusClasses() } name={ name } checked={ !!value } disabled={this.props.disabled} onChange={ this.handleChange } />{ text }</label></div>
      case "enum":
        var options = this.props.column.enums.map((e) => {
          var val = e;
          var label = e;
          if(Array.isArray(e)){
            label = e[0];
            val   = e[1];
          }
          return <option value={ val } key={ val }>{ label }</option>;
        });

        if ( this.props.column.nullable ) {
          options.unshift(<option key="blank"></option>);
        }

        return <select className={ "form-control "  + this.inputStatusClasses() }name={ name } disabled={this.props.disabled} onChange={ this.handleChange } value={ value }>
          { options }
        </select>
          break;
      case "text":
        return <textarea className={ this.inputClasses() } name={ name } value={ value } disabled={this.props.disabled} onChange={ this.handleChange } cols="56" rows="5"/>
      case "integer":
        return <input type="number"  className={ this.inputClasses() } name={ name } value={ value } disabled={this.props.disabled} onChange={ this.handleChange } />
      case "datetime":
        return <input type="text"  className={ this.inputClasses() + " datetimepicker"} name={ name } value={ value } disabled={this.props.disabled} onChange={ this.handleChange } />

      default:
        return <input type="text"  className={ this.inputClasses() } name={ name } value={ value } disabled={this.props.disabled} onChange={ this.handleChange } />
    }

  },

  render() {
    var name   = this.props.column.name;
    var column = this.props.column;
    var label  = this.toProperyName(column);

    return(
      <div className={ this.formClasses() } key={ name }>
         <label htmlFor={ name } >{ label }</label>
         { this.inputField() }
         { this.errorsBlock(label) }
      </div>
    );
  },
})
