"use strict";

// App
var App = React.createClass({
  displayName: "App",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(Nav, null),
      React.createElement(Header, null)
    );
  }
});

// Navigation
var Nav = React.createClass({
  displayName: "Nav",

  render: function render() {
    return React.createElement(
      "ul",
      { className: "main-nav" },
      React.createElement(
        "li",
        null,
        React.createElement(
          "a",
          { href: "#" },
          "Home"
        )
      ),
      React.createElement(
        "li",
        null,
        React.createElement(
          "a",
          { href: "#" },
          "About Us"
        )
      ),
      React.createElement(
        "li",
        null,
        React.createElement(
          "a",
          { href: "#" },
          "Contact Us"
        )
      )
    );
  }
});

// Header
var Header = React.createClass({
  displayName: "Header",

  render: function render() {
    return React.createElement(
      "div",
      { className: "foo" },
      "This is testing foo"
    );
  }
});

// Blog Post
var Post = React.createClass({
  displayName: "Post",

  tryClick: function tryClick() {
    console.log("I have clicked link.");
  },
  render: function render() {
    var comt = "comments";

    return React.createElement(
      "div",
      { className: "blog-post" },
      React.createElement(
        "h3",
        { className: "ptitle" },
        this.props.ptitle,
        React.createElement(
          "small",
          null,
          this.props.date
        )
      ),
      React.createElement("img", { className: "thumbnail", src: this.props.pimg }),
      React.createElement(
        "p",
        null,
        this.props.postbody
      ),
      React.createElement(
        "div",
        { className: "callout callout-post" },
        React.createElement(
          "ul",
          { className: "menu simple" },
          React.createElement(
            "li",
            null,
            "Author: ",
            this.props.author
          ),
          React.createElement(
            "li",
            null,
            comt,
            ": ",
            this.props.comments
          ),
          React.createElement(
            "li",
            null,
            "Tags: ",
            h.getTaggedName()
          )
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app-wrapper'));