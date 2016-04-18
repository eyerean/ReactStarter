var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function(){
    return <div className="container-fluid">
      <div className="col-md-3 sidebar fix">
        <ul className="nav nav-sidebar">
          <li className="active"><Link to="careers/jobs">Jobs</Link></li>
          <li><Link to="careers/internships">Internships</Link></li>
        </ul>
      </div>
      <div className="container col-md-9">
        <h2>Jobs, internships and careers at Optis</h2>
        <p> Optis is young, dynamic and fast growing organization in Belgium.
          In 2007 we became a daughter company of the Cronos Group.
          We focus on open source (java) and JavaScript software development and that in combination with the best of IBM.
          We are always seeking committed, highly skilled and self-organizing individuals to join our team.</p>
        <p> If you are looking for challenging work, participate in a fast growing environment,
          send an email to jobs@optis.be or have a look at our open vacancies! </p>
        <p>We are always looking for great developers, architects, development leads and sales persons to strengthen our team !</p>
      </div>

  </div>
  }
});
