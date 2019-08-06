import React, {Component} from 'react';

class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        this.setState({value: e.target.value}, function() {
            this.props.onChange(this.state.value);
        });
    }
    render() {
        return (
            <input type="number" value={this.props.value} className="form-control" onChange={this.handleChange} />
        );
    }
}

export default Text;