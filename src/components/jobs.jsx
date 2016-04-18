var React = require('react');
var JobList = require('./job-list');

module.exports = React.createClass({
  render: function(){
    return <div>
      <p>Lalalal jobs.</p>
      <JobList />
    </div>
  }
});
