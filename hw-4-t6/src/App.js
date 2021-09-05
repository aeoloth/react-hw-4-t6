import React, { Component, useState } from "react";
import "./App.css";

function Table(props) {
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
    // console.log(state);
    return { workers: props.workers };
  }

  renderTable() {
    return this.state.workers.map((worker) => {
      return (
        <Table 
          worker={worker}
          key={worker.name + worker.lastname + Math.random()}
        />
      );
    });
  }

  countSalary() {
    var initialValue = 0;
    return this.state.workers.reduce((accumulator, currentValue) => {
      // console.log(accumulator);
      // console.log(currentValue.days);
      // console.log(currentValue.stake);
      // console.log(currentValue);

      return +accumulator + currentValue.days * currentValue.stake;
    }, initialValue);
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
        </table>
        <h3>Общая сумма заработной платы: {this.countSalary()}</h3>
      </div>
    );
  }
}

export default App;
