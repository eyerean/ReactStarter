var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
  listenables: [Actions],
  getJobs: function(){
    return Api.get('Jobs')
    .then(function(data){
      this.jobs = data;
      this.triggerChange();
    }.bind(this));
  },
  getJob: function(jobId){
    return Api.get('Jobs/' + jobId)
    .then(function(data){
      this.jobs = data;
      this.triggerChange();
    }.bind(this));
  },
  triggerChange: function() {
    this.trigger('change', this.jobs);
  }
});
