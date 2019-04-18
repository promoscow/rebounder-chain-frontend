import React, {Component} from 'react';

import './app.css'
import Data from "../data/data";
import Api from "../../service/api";
import {Title, TitleDone} from '../title';

const api = new Api();

export default class App extends Component {

    state = {
        data: {
            id: null,
            created: null
        },
        clicked: false,
        loading: true
    };

    render() {
        const data = this.state.data.id === null ? null : <Data data={this.state.data}/>;
        const title = this.state.clicked ? <TitleDone/> : <Title/>;

        return (
            <div>
                {title}
                <div className="main">
                    <button
                        className=" btn btn-outline-secondary"
                        onClick={() => {
                            this.setState(() => {
                                return {
                                    data: api.getResource(),
                                    clicked: true
                                };
                            });
                        }}>
                        Нажать
                    </button>
                </div>
                <div className="main">
                    {data}
                </div>

            </div>
        );
    }
}