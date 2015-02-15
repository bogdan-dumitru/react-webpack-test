'use strict';

global.JESTING=true;
jest.dontMock('../index.jsx');
var React, TestUtils;

describe('TestView', () => {
  it('should render some text', () => {
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var TestView = require('../index.jsx');
    var view = TestUtils.renderIntoDocument(
      <TestView test={4+5} />
    );

    expect(view.getDOMNode().textContent).toContain('This is another test');
    expect(view.getDOMNode().textContent).toContain('9');
  });
});
