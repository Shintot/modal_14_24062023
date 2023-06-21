import React from 'react';
import Dropdown from './Dropdown';
import './App.css';
function App() {
  const options = [{
    value: 'option1',
    text: 'Option 1'
  }, {
    value: 'option2',
    text: 'Option 2'
  }, {
    value: 'option3',
    text: 'Option 3'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    options: options
  }));
}
export default App;