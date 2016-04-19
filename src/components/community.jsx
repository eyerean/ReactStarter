var React = require('react');
var Thumbnail = require('./thumbnail');
var Router = require('react-router');
var Link = Router.Link;

var LoremIpsum = require('./lorem-ipsum');

module.exports = React.createClass({
  render: function(){
    return <div className="container-fluid">

         <div className="col-md-3 sidebar fix">
           <ul className="nav nav-sidebar">
             <li className="active"><Link to="community/partners">Partners</Link></li>
             <li><Link to="community/blog">Blog</Link></li>
           </ul>
         </div>

         <div className="container col-md-9">
           <h2>Community</h2>
           <LoremIpsum />
         </div>
      </div>
  }
});
