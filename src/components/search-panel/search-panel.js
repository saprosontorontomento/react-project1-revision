import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this)
    }

    onUpdateSearch(e) {
        const term = e.target.value;
        this.setState({term}); // наш state независит от предыдущего. Что ввёл user то мы и вводим на страницу по его запросу
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="Поиск по записям"
                onChange={this.onUpdateSearch} // функция будет следить за тем, что вводит user и изменять наш state
            />
        )
    }
}