import React, { Component } from 'react';

import './post-status-filter.css';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'},
        ]
    }
    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props
            const active = filter === name;
            const clazz = active ? 'btn-info' : 'btn-outline-secondary' // динамический класс
            return (
                <button 
                    key={name} 
                    type='button' 
                    className={`btn ${clazz}`}
                    onClick={() => onFilterSelect(name)}>{label}</button> // когда будут create btn у нас create on и будет передовать name(уникальный ключ)
            )
        });
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}