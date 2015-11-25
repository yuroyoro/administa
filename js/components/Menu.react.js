import MenuStore   from 'stores/MenuStore';

export default React.createClass({
  displayName: 'Menu',

  getInitialState() {
    return { menus: MenuStore.getState() };
  },

  componentDidMount() {
    MenuStore.addEventListener(this._onChange);
  },

  componentWillUnmount() {
    MenuStore.removeEventListener(this._onChange);
  },

  _onChange() {
    var menus = MenuStore.getState();
    this.setState({ menus: menus });
  },

  label(m, key) {
    return <li className="header" key={ key }>{ m.label }</li>;
  },

  group(m, key) {
    var l = m.label;
    var title = null;

    switch(l.type){
      case "label":
        title = (
            <a href="#" onClick={ (e) => {console.log('onlick preventDefault');e.preventDefault() } }>
              <span>{ l.label }</span>
              <i className="fa fa-angle-left pull-right"></i><
              /a>
        );
        break;
      case "menu":
        var f = (e) => {
          e.preventDefault();
          e.stopPropagation();
          window.location.href = l.path;
          return false;
        };
        var iconstyle = "fa fa-circle-o";
        if(l.selected) iconstyle += " text-aqua";

        title = (
          <a href={ l.path }>
            <i className={ iconstyle }></i>
            <span onClick={ f }>{ l.label }</span>
            <i className= "fa fa-angle-left pull-right"></i>
          </a>
        );
        break;
    }

    var children = m.menus.map((c, i) => {
      return this.generate(c, `${key}_${i}`);
    });

    var listyle = "";
    var ulstyle = "treeview-menu";
    if(m.opened){
      listyle = "active";
      ulstyle += " menu-open";
    }
    if(!m.visible) {
      listyle += " hide";
    }

    return (
      <li key={key} className={ listyle }>
        { title }
        <ul className={ ulstyle }>
          { children }
        </ul>
      </li>
    );
  },

  menu(m, key) {
    var className="";
    var iconstyle = "fa fa-circle-o";

    if(m.selected) {
      className = "active";
      iconstyle += " text-aqua";
    }
    if(!m.visible) {
      className += " hide";
    }

    return (
      <li className={ className } key={ key }>
        <a href={ m.path }>
          <i className={ iconstyle }></i>
          <span>{ m.label }</span>
        </a>
      </li>
    );
  },

  generate(m, key) {
    switch(m.type) {
      case "label":
        return this.label(m, key);
      case "group":
        return this.group(m, key);
      case "menu":
        return this.menu(m, key);
      default:
        //noop
    }
  },

  menus() {
    return this.state.menus.map((m, i) => {
      return this.generate(m, i);
    });
  },

  render() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <ul className="sidebar-menu">
            { this.menus() }
          </ul>
        </section>
      </aside>
    );
  },
})
