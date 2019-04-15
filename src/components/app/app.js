import React, {Component} from 'react';

import './app.css'
import Data from "../data/data";
import Api from "../../service/api";

const api = new Api();

export default class App extends Component {

    state = {
        data: {
            id: 123,
            dateTime: "1231"
        }
    };

    render() {
        const data = this.state.id === null ? null : <Data data={this.state.data}/>;

        return (
            <div>
                <div className="title">
                    Псс... Парень! Хочешь нажать кнопку без регистрации и смс?
                </div>
                <div className="title">
                    <button
                        className=" btn btn-outline-secondary"
                        onClick={() => api.saveEntry()}>
                        Нажать
                    </button>
                </div>
                <div className="title">
                    {data}
                </div>

            </div>
        );
    }
}