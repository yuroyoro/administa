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
            <a href="#">
              <span>{ l.label }</span>
              <i className="fa fa-angle-left pull-right"></i><
              /a>
        );;
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
        return this.label(m);
      case "group":
        return this.group(m);
      case "menu":
        return this.menu(m);
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
      <!-- Left side column. contains the logo and sidebar -->
      <aside className="main-sidebar">

        <!-- sidebar: style can be found in sidebar.less -->
        <section className="sidebar">

          <!-- Sidebar user panel (optional) -->
          <div className="user-panel">
            <div className="pull-left image">
              <img src="http://www.gravatar.com/avatar/f9e7f1e6a9654f137e12cf84ce14e34d.png" className="img-circle" alt="User Image"/>
            </div>
            <div className="pull-left info">
              <p>yuroyoro</p>
              <!-- Status -->
              <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
            </div>
          </div>

          <!-- search form (Optional) -->
          <form action="#" method="get" className="sidebar-form">
            <div className="input-group">
              <input type="text" name="q" className="form-control" placeholder="Search..."/>
              <span className="input-group-btn">
                <button type='submit' name='search' id='search-btn' className="btn btn-flat"><i className="fa fa-search"></i></button>
              </span>
            </div>
          </form>
          <!-- /.search form -->

          <!-- Sidebar Menu -->
          <ul className="sidebar-menu">
            { this.menus() }
          </ul><!-- /.sidebar-menu -->
        </section>
        <!-- /.sidebar -->
      </aside>
    );
  },
})

/*
            <li className="header">HEADER</li>
            <!-- Optionally, you can add icons to the links -->
            <li className="active"><a href="#"><span>Link</span></a></li>
            <li><a href="#"><span>Another Link</span></a></li>
            <li className="treeview">
              <a href="#"><span>Multilevel</span> <i className="fa fa-angle-left pull-right"></i></a>
              <ul className="treeview-menu">
                <li><a href="#">Link in level 2</a></li>
                <li><a href="#">Link in level 2</a></li>
              </ul>
            </li>
*/
