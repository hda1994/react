'use strict';
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const withData = (Component, filt) => class extends React.Component {
  constructor(...props) {
    super(...props);
  }
  
  getList() {
    return filt(this.props.list);
  }
  
  render() {
    return <Component {...this.props} list={this.getList()}/>;  
  }
}

function monthFilt(list) {
  let tmpList = months.map(el => Object.assign({}, {month: el}, {amount: 0}));
  list.forEach(el => tmpList[parseInt(el.date.substr(5, 2)) - 1].amount += el.amount);
  return tmpList;
}

function yearFilt(list) {
  let tmp = [];
  list.forEach(el => {
    let check = parseInt(el.date.substr(0, 4));
    if(!tmp.some(elem => elem.year === check)) {
      tmp.push({year: check, amount: el.amount});
    } else {
      tmp.forEach(element => {
        if(element.year === check) {
          element.amount += el.amount;
        }
      });
    }
  });
  return tmp;
}

function dateFilt(list) {
  let tmp = [];
  list.forEach(el => {
    let check = el.date;
    if(!tmp.some(elem => elem.date === check)) {
      tmp.push({date: check, amount: el.amount});
    } else {
      tmp.forEach(element => {
        if(element.date === check) {
          element.amount += el.amount;
        }
      });
    }
  });
  return tmp;
}

let M = withData(MonthTable, monthFilt);
let Y = withData(YearTable, yearFilt);
let S = withData(SortTable, dateFilt);



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/l2s9l').then(response => {
            this.setState(response.data);
        });
    }

    render() {
        return (
            <div id="app">
                <M list={this.state.list} />
                <Y list={this.state.list} />
                <S list={this.state.list} />
            </div>
        );
    }
};