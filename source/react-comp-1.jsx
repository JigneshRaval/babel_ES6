// App
var App = React.createClass({
  render : function() {
    return (
      <div>
        <Nav />
        <Header />
      </div>
    );
  }
});

// Navigation
var Nav = React.createClass({
  render : function() {
    return (
      <ul className="main-nav">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    );
  }
});

// Header
var Header = React.createClass({
  render : function() {
    return (
      <div className="foo">This is testing foo</div>
    );
  }
});

// Blog Post
var Post = React.createClass({
  tryClick : function() {
    console.log("I have clicked link.")
  },
  render : function() {
    var comt = "comments";

    return (
      <div className="blog-post">
        <h3 className="ptitle">{this.props.ptitle}<small>{this.props.date}</small></h3>
        <img className="thumbnail" src={this.props.pimg} />
        <p>{this.props.postbody}</p>
        <div className="callout callout-post">
          <ul className="menu simple">
          <li>Author: {this.props.author}</li>
          <li>{comt}: {this.props.comments}</li>
          <li>Tags: {h.getTaggedName()}</li>
          </ul>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app-wrapper')
);
