import React, { Component, useState } from "react";
import "./App.css";

function Table(props) {
  console.log(props.boolfalse); // false
  const [days, setDays] = useState(props.worker.days);
  const [stake, setStake] = useState(props.worker.stake);

  return (
    <tr>
      <td>{props.worker.name}</td>
      <td>{props.worker.lastname}</td>
      <td>
        <input
          type="text"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={stake}
          onChange={(e) => setStake(e.target.value)}
        />
      </td>
      <td>{+days * +stake}</td>
    </tr>
  );
}

class App extends Component {

  static getDerivedStateFromProps(props, state) {
    console.log(state);
    return {workers: props.workers}
  }
 
  
  constructor(props) {
    super(props);
    this.state = {
      whoAmI: 'ok'
    }
  }

  renderTable() {
    return this.state.workers.map((worker) => {
      return (
        <Table boolfalse={false}
          worker={worker}
          key={worker.name + worker.lastname + Math.random()}
        />
        
      );
    });
  }


  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Имя</td>
              <td>Фамилия</td>
              <td>Отработано дней</td>
              <td>Ставка в день, руб.</td>
              <td>Заработная плата, руб.</td>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
          <tfooter>{}</tfooter>
        </table>
      </div>
    );
  }
}

export default App;
