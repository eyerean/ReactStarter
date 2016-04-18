var React = require('react');
var Reflux = require('reflux');
var JobStore = require('../stores/job-store');
var Actions = require('../actions');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(JobStore, 'onChange')
  ],
  getInitialState: function() {
    return {
      jobs: []
    }
  },
  componentWillMount: function(){
    Actions.getJobs();
  },
  render: function(){
    return <div className='list-group'>
      <p>Job List:</p>
      {this.renderJobs()}
    </div>
  },
  renderJobs: function(){
    return this.state.jobs.map(function(job){
      return <li key={job.slug} > {/* use your id as a key here */}
        {job.name} at {job.companyId}
      </li>
    });
  },
  onChange: function(event, jobs){
    this.setState({jobs: jobs});
  }
});
