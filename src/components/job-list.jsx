var React = require('react');
var Reflux = require('reflux');
var JobStore = require('../stores/job-store');
var Actions = require('../actions');
var Router = require('react-router');
var Link = Router.Link;

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
    return <div>
      <p>Jobs List:</p>
      {this.renderJobs()}
    </div>
  },
  renderJobs: function(){
    return this.state.jobs.map(function(job){
      return <li key={job.slug} > {/* use your id as a key here */}
      <Link to={'careers/jobs/' + job.slug}> {job.name} at {job.companyId} </Link>
      </li>
    });
  },
  onChange: function(event, jobs){
    this.setState({jobs: jobs});
  }
});
