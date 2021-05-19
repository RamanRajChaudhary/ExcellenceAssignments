import React from "react";
export default function Item(props) {
  const list = props.list;
  return (
    <div className="Item">
      <table>
        {list &&
          list.map((item) => (
            <tr>
              <td>{item.name}</td>
            </tr>
          ))}
      </table>
    </div>
  );
}
