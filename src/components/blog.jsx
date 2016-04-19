var React = require('react');
var LoremIpsum = require('./lorem-ipsum');

module.exports = React.createClass({
  render: function(){
    return <div>
      <h2>Blog</h2>
      <LoremIpsum />
      <LoremIpsum />
    </div>
  }
});
