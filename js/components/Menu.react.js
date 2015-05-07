export default React.createClass({
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
          </ul><!-- /.sidebar-menu -->
        </section>
        <!-- /.sidebar -->
      </aside>
    );
  },
})
