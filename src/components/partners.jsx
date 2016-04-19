var React = require('react');
var Thumbnail = require('./thumbnail');

module.exports = React.createClass({
  render: function(){

{/*    var thumbnailData: [{
        src: "http://3.bp.blogspot.com/-Kgc5sBaFJ0Q/VQg6udRbBHI/AAAAAAAAAI8/fi75SQn3MeE/s1600/IS4U_logo.gif",
        header: "IS4U",
        link: "http://www.is4u.be/"
      },{
        src: "http://www.iperform.be/sites/www.iperform.be/files/iperform_logo.png",
        header: "iPerform",
        link: "http://www.iperform.be/"
      }]

    var list = this.props.thumbnailData.map(function(thumbnailProps){
      return <Thumbnail {...thumbnailProps} />
    });
  */}

    return <div>
      <h2>Partners</h2>
        <div className="row">
          <div className="col-md-4">
            <Thumbnail
            src="http://www.clker.com/cliparts/O/v/c/b/i/6/generic-logo.svg"
            header="companyName"
            link="example.com/"
            />
          </div>
          <div className="col-md-4">
            <Thumbnail
            src="http://www.clker.com/cliparts/O/v/c/b/i/6/generic-logo.svg"
            header="companyName"
            link="example.com/"
            />
          </div>
          <div className="col-md-4">
            <Thumbnail
            src="http://www.clker.com/cliparts/O/v/c/b/i/6/generic-logo.svg"
            header="companyName"
            link="example.com/"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Thumbnail
            src="http://www.clker.com/cliparts/O/v/c/b/i/6/generic-logo.svg"
            header="companyName"
            link="example.com/"
            />
          </div>
          <div className="col-md-4">
            <Thumbnail
            src="http://www.clker.com/cliparts/O/v/c/b/i/6/generic-logo.svg"
            header="companyName"
            link="example.com/"
            />
          </div>
        </div>
      </div>

  }
});
