'use strict';

(1?null:require('./index.scss'));
var React = require('react');
var TestView = require('views/test_view');

React.render(
  <TestView />,
  document.getElementById('root-mount-point')
);
