import React, {Component} from 'react';
import './App.css';
import Output from './Components/Output';
import Select from './Components/Controls/Select';
import Text from './Components/Controls/Text';
import axios from 'axios';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'gibberish',
      format: 'p',
      num_elements: '5',
      min_words: '40',
      max_words: '100',
      text: ''
    };
    this.showType = this.showType.bind(this);
    this.changeElements = this.changeElements.bind(this);
  }

  componentWillMount() {
    this.getSampleText();
  }
  getSampleText() {
    axios.get('http://www.randomtext.me/api/'+this.state.type+'/'+this.state.format+'-'+this.state.num_elements+'/'+this.state.min_words+'-'+this.state.max_words, {crossdomain: true})
      .then((res) => {
      this.setState({
        text: res.data.text_out}, function() {
        console.log(this.state);
      });
    })
      .catch((err) => {
      console.log(err);
    });
  }
  
  showType(i) {
    this.setState({type: i}, this.getSampleText);
  }
  
  changeElements(num) {
    this.setState({num_elements: num}, this.getSampleText);
  }
  render() {
    return (
      <div className="App container">
      <h1 className="text-center">Sample Text Generator</h1>
      <hr />
      <form className="form-inline">
      <div className="form-group">
      <label>Type:</label>
      <Select value={this.state.type} onChange={this.showType}/>
      </div>
      <div className="form-group amount">
      <label>Number of Elements:</label>
      <Text value={this.state.num_elements} onChange={this.changeElements}/>
      </div>
      </form>
      <br /><br />
      <Output value={this.state.text} />
      </div>
    );
  }
}

export default App;
