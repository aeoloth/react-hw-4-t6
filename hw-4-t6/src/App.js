import React, { useState } from "react";
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
      <td>{days * stake}</td>
    </tr>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      workers: [
        { name: "Ivan", lastname: "Ivanov", days: 22, stake: 1500 },
        { name: "Petr", lastname: "Petrov", days: 21, stake: 1600 },
        { name: "Ivan", lastname: "Sidorov", days: 20, stake: 1400 },
        { name: "Sidor", lastname: "Kuznetsov", days: 24, stake: 1770 },
        { name: "Vasiliy", lastname: "Pupkin", days: 23, stake: 1600 },
        { name: "Valeriy", lastname: "Makarov", days: 22, stake: 1200 },
      ],
    };
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
      </div>
    );
  }
}

export default App;
