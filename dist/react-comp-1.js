"use strict";

var CommentBox = React.createClass({
  displayName: "CommentBox",

  render: function render() {
    return React.createElement(
      "div",
      { className: "commentBox" },
      React.createElement(
        "h2",
        null,
        "Hello, world! I am a CommentBox."
      )
    );
  }
});

ReactDOM.render(React.createElement(CommentBox, null), document.getElementById('react-comps'));