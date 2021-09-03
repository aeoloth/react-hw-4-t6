import React from "react";
import "./App.css";

function Table(props) {
  return (
      <tr>
        <td>{props.worker.name}</td>
        <td>{props.worker.lastname}</td>
        <td>
          <input type="text" value={props.worker.days} onChange={props.onChangeDays} />
        </td>
        <td>
        <input type="text" value={props.worker.stake} onChange={props.onChangeStake} />
        </td>
        <td>
          {props.worker.days * props.worker.stake}
        </td>
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

  handleDays(name, lastname) {
    const workers = this.state.workers.concat()

    const worker = workers.find(c => c.name === name & c.lastname === lastname)
    worker.days = 1

    this.setState({worker})
  }

  handleStake(name, lastname) {
    const workers = this.state.workers.concat()

    const worker = workers.find(c => c.name === name & c.lastname === lastname)
    worker.stake = 3

    this.setState({worker})
  }

  renderTable() {
    return this.state.workers.map((worker) => {
      return (
        <Table
          worker={worker}
          key={worker.name + worker.lastname + Math.random()}
          onChangeDays={this.handleDays.bind(this, worker.name, worker.lastname)}
          onChangeStake={this.handleStake.bind(this, worker.name, worker.lastname)}
        />
      );
    });
  }

//   renderTable() {
//   return( this.state.workers.map((worker) => {
//     return (
//     <tr>
//         <td>{worker.name}</td>
//         <td>{worker.lastname}</td>
//         <td>
//           <input type="text" value={worker.days}  onChange/>
//         </td>
//         <td>
//           {worker.stake}
//         </td>
//         <td>
//           {worker.days * worker.stake}
//         </td>
//       </tr>
//         )
// } ) )}

  render() {
    return (
    <div><table>
      <thead>
        <tr>
          <td>Имя</td>
          <td>Фамилия</td>
          <td>Отработано дней</td>
          <td>Ставка в день, руб.</td>
          <td>Заработная плата, руб.</td>
        </tr>
      </thead>
      <tbody>
          {this.renderTable()}
      </tbody>
    </table></div>
    )
  }
}

export default App;
