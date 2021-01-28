import React, { Component } from 'react';   

const ListGroup = ({items, textPropery, valuePropery, selectedItem, onItemSelect}) => {
    return (<ul className="list-group">
    {items.map(item =>
         <li onClick={() => onItemSelect(item)} key={item[valuePropery]} className={item === selectedItem ? "list-group-item active" : "list-group-item"}>{item[textPropery]}</li>
         )}
    
  </ul>  );
}

ListGroup.defaultProps = {
    textPropery: "name",
    valuePropery: "_id"
};
 
export default ListGroup;