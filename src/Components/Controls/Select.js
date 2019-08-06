import React, {Component} from 'react';

class Select extends Component {
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
            <select className="form-control" onChange={this.handleChange}>
            <option value="gibbersh">Gibberish</option>
            <option value="lorem">Lorem</option>
            </select>
        );
    }
}

export default Select;