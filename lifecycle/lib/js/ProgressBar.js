class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0
    }
  }
  
  componentWillReceiveProps() {
    let progress = Math.round(100 * this.props.completed / this.props.total)
    this.setState({progress: progress});
  }
  
  componentDidUpdate() {
    this.drow();
  }
  
  drow() {
    let canvas = document.getElementById('progressCanvas');
    let ctx = canvas.getContext('2d');
    let width = canvas.width;
    let height = canvas.height;
    let progressRadians = 2 * Math.PI - (2 * Math.PI * this.state.progress / 100);
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = 7;
    
    ctx.beginPath();
    ctx.strokeStyle = '#4ca89a';
    ctx.arc(width / 2, height / 2, 52, 0, 2 * Math.PI, false);
    ctx.moveTo(width / 2 + 45, height / 2 + 45);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle = '#96d6f4';
    ctx.arc(width / 2, height / 2, 45, 0, 2 * Math.PI * this.state.progress / 100, false);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.fillStyle = '#555';
    ctx.font = '30pt Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${this.state.progress}%`, 150, 75);
    
  }
  
  render() {
    return (
      <canvas id="progressCanvas" className="progress" />
    );
  }
  
  
}
