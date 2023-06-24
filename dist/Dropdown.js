import React from 'react';
function Dropdown({
  options,
  value,
  onChange
}) {
  // Gestion de l'événement onChange pour créer un objet avec la propriété value
  const handleChange = event => {
    onChange({
      value: event.target.value
    });
  };
  return /*#__PURE__*/React.createElement("select", {
    className: "dropdown",
    value: value,
    onChange: handleChange
  }, options.map(option => /*#__PURE__*/React.createElement("option", {
    key: option.value,
    value: option.value
  }, option.text)));
}
export default Dropdown;