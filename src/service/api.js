export default class Api {

    _apiPath = 'http://localhost:8099';
    _logUrl = '/log';

    getResource = async () => {
        const res = await fetch(`${this._apiPath}${this._logUrl}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._logUrl}` +
                `, received ${res.status}`)
        }
        console.log(res.clone().json());
        return await res.clone().json();
    };

    saveEntry = () => {
        return this.getResource;
    };
};