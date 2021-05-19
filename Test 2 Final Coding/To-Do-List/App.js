import React from "react";
import "./styles.css";
import Item from "./components/item";
import EditComponent from "./components/EditComponent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }

  handleAdd = (item) => {
    console.log(item);
    let data = this.state.list.concat({ name: item });
    this.setState({ list: data });
  };

  render() {
    return (
      <div className="App">
        <EditComponent addItem={this.handleAdd} />
        <Item list={this.state.list} />
      </div>
    );
  }
}
export default App;
