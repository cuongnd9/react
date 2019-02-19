import React from "react";

import { FamilyProvider, FamilyConsumer } from "./FamilyContext";

class Grandmother extends React.Component {
  state = {
    firstName: "Nguyen"
  };

  render() {
    return (
      <FamilyProvider value={this.state.firstName}>
        <h1>{this.state.firstName}</h1>
        <Mother firstName={this.state.firstName} />
      </FamilyProvider>
    );
  }
}

const Mother = ({ firstName }) => {
  return (
    <div>
      <h2>{firstName}</h2>
      <Child />
    </div>
  );
};

const Child = () => {
  return <FamilyConsumer>{context => <h3>{context}</h3>}</FamilyConsumer>;
};

export default Grandmother;
