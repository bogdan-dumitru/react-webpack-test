'use strict';

(1?null:require('./index.scss'));
var React = require('react/addons');

var TestView = React.createClass({
  getDefaultProps: function() {
    return { test: 2 };
  },

  render: function() {
    return (
      <div className="TestView">
        This is another test
        <br />
        {this.props.test}
      </div>
    );
  }
});

module.exports = TestView;
