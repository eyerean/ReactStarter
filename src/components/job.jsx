var React = require('react');
var Reflux = require('reflux');
var JobStore = require('../stores/job-store');
var Actions = require('../actions');
var JobDetails = require('./job-details');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(JobStore, 'onChange')
  ],
  getInitialState: function(){
    return {
      job: {}
    }
  },
  componentWillMount: function(){
    Actions.getJob(this.props.params.jobId);
  },
  render: function(){
    console.log('props: ', this.props);
    console.log('state: ', this.state);
    return <div>
      <JobDetails job={this.state.job} />
    </div>
  },
  onChange: function(event, job){
    this.setState({job: job})
  }
});
