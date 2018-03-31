'use strict';
let str1 = 'Каждый компонент являются законченной частью пользовательского интерфейса и сам управляет своим состоянием, а композиция компонентов (соединение) позволяет создавать более сложные компоненты. Таким образом, создается иерархия компонентов, причем каждый отдельно взятый компонент независим сам по себе. Такой подход позволяет строить сложные интерфейсы, где есть множество состояний, и взаимодействовать между собой.';
let str2 = 'После изучения React вы сможете использовать его концепции не только в браузере, но также и при разработке мобильных приложений с использованием React Native.';
let str3 = 'JSX является языком, расширяющим синтаксис стандартного Javascript. По факту он позволяет писать HTML-код в JS-скриптах. Такой подход упрощает разработку компонентов и повышает читаемость кода.';

let global = {
  title: 'React',
  sections: [
    {
      title: 'Компоненты',
      article: str1,
      open: true
    },
    {
      title: 'Выучил раз, используй везде!',
      article: str2,
      open: false
    },
    {
      title: 'Использование JSX',
      article: str3,
      open: false
    }
  ]
}

const AccordionTitle = props => (
  <h2 className="title">{props.title}
    </h2>
)

class Accordion extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render(){
    return(
      <main className='main'>
        <AccordionTitle title={this.props.title}/>  
        {this.props.children}
      </main>
    );
  }
}

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open
    };
  }
  
  onClickButton() {
    this.setState({open: !this.state.open});
  }
  
  render(){
    return (
      <section className={`section${this.state.open? ' open' : ''}`}  onClick={this.onClickButton.bind(this)}>
      <button>toggle</button>
      <h3 className="sectionhead">{this.props.title}</h3>
      <div className="articlewrap">
        <div className="article">{this.props.article}</div>
      </div>
      </section>
    );
  }
}

ReactDOM.render(
  <Accordion title={global.title}>
    {global.sections?global.sections.map(section => (
        <Section {...section}>
        </Section>
      ) 
    ): null}
  </Accordion>,
  document.getElementById('accordian')
)