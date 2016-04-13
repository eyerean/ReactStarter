var React = require('react');
var Button = require('./button');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function(){
    return <div className="thumbnail">
      <img src={this.props.src} />
      <div className="caption">
        <h3>{this.props.header}</h3>
        <p>{this.props.desc}</p>
        <p>
          <Link to={this.props.link}>
            <Button title={this.props.btnTitle} />
          </Link>
        </p>
      </div>
    </div>
  }
});
