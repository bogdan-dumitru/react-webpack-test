require('./index.css');
var React = require('react');
var TestView = require('views/test_view');
var Meth = require('lib/meth');

React.render(
  <TestView test={Meth(4, 7)} />,
  document.getElementById('root-mount-point')
);
