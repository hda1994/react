'use strict';
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const withData = (Component) => class extends React.Component {
  constructor(...props) {
    super(...props);
  }
  
  getList() {
    return this.props.list.map(el => Object.assign(el, {year: el.date.substr(0, 4)}, {month: months[parseInt(el.date.substr(5, 2)) - 1]}));
  }
  
  render() {
    return <Component {...this.props} list={this.getList()}/>;  
  }
}
let M = withData(MonthTable);
let Y = withData(YearTable);
let S = withData(SortTable);


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