var CommentBox = React.createClass({
  render : function() {
    return (
      <div className="commentBox">
        <h2>Hello, world! I am a CommentBox.</h2>
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />, document.getElementById('react-comps')
);
