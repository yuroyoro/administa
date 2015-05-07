
export default React.createClass({
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
          <!-- Navbar Right Menu -->
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">

              <!-- User Account Menu -->
              <li className="dropdown user user-menu">
                <!-- Menu Toggle Button -->
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <!-- The user image in the navbar-->
                  <img src="http://www.gravatar.com/avatar/f9e7f1e6a9654f137e12cf84ce14e34d.png" className="user-image" alt="User Image"/>
                  <!-- hidden-xs hides the username on small devices so only the image appears. -->
                  <span className="hidden-xs">yuroyoro</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  },
})
