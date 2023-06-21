import React from 'react';
function Dropdown({
  options
}) {
  return /*#__PURE__*/React.createElement("select", {
    className: "dropdown"
  }, options.map(option => /*#__PURE__*/React.createElement("option", {
    key: option.value,
    value: option.value
  }, option.text)));
}
export default Dropdown;