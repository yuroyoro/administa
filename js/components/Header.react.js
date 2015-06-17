import UserStore   from 'stores/UserStore';

export default React.createClass({
  displayName: 'Header',

  getInitialState() {
    return { user: UserStore.getState() };
  },

  componentDidMount() {
    UserStore.addEventListener(this._onChange);
  },

  componentWillUnmount() {
    UserStore.removeEventListener(this._onChange);
  },

  _onChange() {
    var user = UserStore.getState();
    this.setState({ user: user});
  },

  render() {
    return(
      <!-- Main Header -->
      <header className="main-header">

        <!-- Logo -->
        <a href="index2.html" className="logo">Administa</a>

        <!-- Header Navbar -->
        <nav className="navbar navbar-static-top" role="navigation">
          <!-- Sidebar toggle button-->
          <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span className="sr-only">Toggle navigation</span>
          </a>
          <!-- Navbar Right User -->
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">

              <!-- User Account User -->
              <li className="dropdown user user-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <img src={ this.state.user.icon } className="user-image" alt="User Image"/>
                  <span className="hidden-xs">{ this.state.user.name }</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  },
})
