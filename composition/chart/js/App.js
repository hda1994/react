function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function compareNumbers(a, b) {
  return a - b;
}

class App extends React.Component {
	componentWillMount() {
		this.setState({
			data: [],
			series: ['France', 'Italy', 'England', 'Sweden', 'Germany'],
			labels: ['cats', 'dogs', 'horses', 'ducks', 'cows'],
			colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']
		})
	}

	componentDidMount() {
		this.populateArray();
		setInterval(this.populateArray.bind(this), 2000);
	}

	populateArray() {
		const	series = 5;
		const serieLength = 5;

    let data = new Array(series).fill(new Array(serieLength).fill(0));
    data = data.map(serie => serie.map(item => getRandomInt(0, 20)));

		this.setState({ data });
	}

	render() {
		const { data, colors, labels, series } = this.state;
		const max = data.reduce((max, serie) => Math.max(max, serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)), 0);
    let tmp = [];
    tmp =  Array.from({ length: 4 }).map(elem => JSON.parse(JSON.stringify(this.state)))
    let newProps1 = Object.assign(tmp[0], {addClass: '', addSerieClass: '', max: max});
    let newProps2 = Object.assign(tmp[1], {addClass: '', addSerieClass: 'stacked', max: max});
    let newProps3 = Object.assign(tmp[2], {addClass: '', addSerieClass: 'layered', max: max});
    let newProps4 = Object.assign(tmp[3], {addClass: 'horizontal', addSerieClass: '', max: max});
		return (
			<section>
        <Charts {...newProps1} />
        <Charts {...newProps2} />
        <Charts {...newProps3} />
        <Charts {...newProps4} />
        <Legends>
            { labels.map((label, labelIndex) => (
    				  <Legend color={colors[labelIndex % colors.length]} label={label} lableIndex={labelIndex} />
    				)
    			)}
        </Legends>
			</section>
		);
	}
}

class Charts extends React.Component {
  
  cl() {
    if(this.props.addClass == 'horizontal') {
      this.props = Object.assign(this.props, {isStyle: true});
      return 'Charts ' + this.props.addClass;
    }
    return 'Charts';
  }
  
  create() {
    const {data, addClass} = this.props;
    return data.map((serie, serieIndex) => {
  		 	var sortedSerie = serie.slice(0),
  			sum;
        let styleHeight = addClass === 'horizontal'? 'auto' : 250;
  		 	sum = serie.reduce((carry, current) => carry + current, 0);
  		  sortedSerie.sort(compareNumbers);
        let newProps = Object.assign(this.props, {
          styleHeight: styleHeight,
          serieIndex: serieIndex,
          serie: serie,
          sortedSerie: sortedSerie,
          sum: sum
        })
     return (
        <Chart {...newProps} />
     );})
  }
  
  render() { 
    return(
    <div className={this.cl()}>
      {this.create()}
    </div>
    )
   }
}

class Chart extends React.Component {
  cl(text) {
    if(this.props.addSerieClass) {
      return text + ' ' + this.props.addSerieClass;
    }
    return text;
  }
  
  getStyle(color, item, max, sum, s, is, sortedSerie, serie) {
    let size = item / (max) * 100;;
    switch(s) {
       case 'layered':
          this.props = Object.assign(this.props, {style: {
  								backgroundColor: color,
  								opacity: (item/max + .05),
  								zIndex: item,
                  height: size + '%',
                  right: ((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) + '%'
  							}});
          break;
        case 'stacked':
          size = item / sum * 100;
          this.props = Object.assign(this.props, {style: {
  								backgroundColor: color,
  								opacity: 1,
  								zIndex: item,
                  height: size + '%'
  							}});
          break; 
      default:
        if(is){
          this.props = Object.assign(this.props, {style: {
                  backgroundColor: color,
  								opacity: (item/max + .05),
  								zIndex: item,
                  width: size + '%'
          }});
        } else {
          this.props = Object.assign(this.props, {style: {
                  backgroundColor: color,
                  opacity: item/max + .05,
                  zIndex: item,
                  height: size + '%'
                }}); 
        }
        
    }
  }
  
  create(max, sum, sortedSerie) {
      const {serie, colors, addSerieClass, isStyle} = this.props;
      return serie.map((item, itemIndex) => {
  		  var color = colors[itemIndex];
        this.getStyle(color, item, max, sum, addSerieClass, isStyle, sortedSerie, serie);

        return (
  				  <div
  				    className={this.cl('Charts--item')}
  				    style={ this.props.style }
  				    key={ itemIndex }
  				  >
  		        <b style={{ color: color }}>{ item }</b>
  		      </div>
  						);
  						}) 
  }
  
   render() {
     const {serieIndex, styleHeight, labels, max, sum, sortedSerie} = this.props;
     return (
        <div className={this.cl('Charts--serie')} key={ serieIndex } style={{ height: styleHeight }}>
          <label>{ labels[serieIndex] }</label>
          {this.create(max, sum, sortedSerie)}
        </div>
     );
   }
}

class Legends extends React.Component {
   render() {
     return (
       <div className="Legend">
    			{this.props.children}
    		</div>
     );
   }
}

class Legend extends React.Component {
   render() {
     return (
        <div>
    		  <span className="Legend--color" style={{ backgroundColor: this.props.color  }} />
          <span className="Legend--label">{ this.props.label }</span>
        </div>
     );
   }
}