import React, { Component } from 'react';

interface IProps {
  num: number,
}

interface IState {
  provice: string,
}

class Plate extends Component<IProps, IState> {
  state = {
    provice: '云南',
    city: '123'
  }

  render() {
    return <div>Plate = {this.props.num} _ {this.state.provice} _ {this.state.city}</div>;
  }
}

export default Plate;