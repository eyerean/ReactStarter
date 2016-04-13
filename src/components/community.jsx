var React = require('react');
var Thumbnail = require('./thumbnail');

module.exports = React.createClass({
  render: function(){
    return <div>
      <div className="row">
        <div className="col-md-4 col-md-offset-2">
          <Thumbnail
          src="http://www.helotesedc.com.php53-9.dfw1-1.websitetestlink.com/images/uploads/Partnership-logo1.gif"
          header="Partners"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          btnTitle="View list of Partners"
          link="community/partners"
          />
        </div>
        <div className="col-md-4">
          <Thumbnail
          src="http://www.ifla.org/files/assets/library-theory-and-research/images/blog-3.jpg"
          header="Blog"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          btnTitle="View Blog"
          link="community/blog"
          />
        </div>
      </div>
      </div>
  }
});
