var React = require('react');

module.exports = React.createClass({
  render: function(){
    console.log('props inside details: ', this.props);
    return <div>
      <h2>Job Information</h2>
      <p><b>Job Name: {this.props.job.name}</b></p>
      <p><b>Intro: </b> {this.props.job.intro}</p>
      <p><b>Requirements: </b> {this.props.job.requirements}</p>
      <p><b>Tasks: </b> {this.props.job.tasks}</p>
      <p><b>Personality: </b> {this.props.job.personality}</p>
      <p><b>Offer: </b> {this.props.job.offer}</p>
    </div>
  }
});
