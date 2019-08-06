import React, {Component} from 'react';
import './App.css';
import Output from './Components/Output';
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
  render() {
    return (
      <div className="App">
      <Output value={this.state.text} />
      </div>
    );
  }
}

export default App;
