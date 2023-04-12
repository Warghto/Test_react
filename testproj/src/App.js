import {Component} from "react";




class WhoAmI extends Component{
  constructor(props) {
    super(props);
    this.state = {
        years:27
    }
  }
  nextYear = () => {
      console.log('+++')
  }
  render() {
    const {name, surname, link} = this.props;
    return(
        <div>
            <button onClick={this.nextYear}>+++</button>
          <h1>My name is{name}, surname - {surname}, age -{this.state.years}</h1>
          <a href={link}>My profile</a>
        </div>
    )
  }
}
function App() {
  return (
   <div className="App">
       <WhoAmI name="John" surname="Smith" link ="facebook.com" />
       <WhoAmI name="Carl" surname="Joks" link ="instagram.com" />
   </div>
  );
}

export default App;
