var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function(){
    return <nav className="navbar navbar-default header">
      <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Company Website
          </Link>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/">Home</Link></li>
            <li><a>Company</a></li>
            <li><a>What we do</a></li>
            <li><a>How we do it</a></li>
            <li><a>Careers</a></li>
            <li><Link to="community">Community</Link></li>
          </ul>
        </div>
    </nav>
  }
});
