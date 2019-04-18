export default class Api {

    _apiPath = 'http://localhost:8099';
    _logUrl = '/log';

    getResource = async () => {
        const res = await fetch(`${this._apiPath}${this._logUrl}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._logUrl}` +
                `, received ${res.status}`)
        }
        let json = res.json();
        console.log("===>");
        console.log(json);
        return await json;
    };

    getData = async () => {
        await fetch(`${this._apiPath}${this._logUrl}`)
            .then(response => {
                console.log('response.json()');
                return response.json()
            })
            .then(data => {
                console.log('data:');
                console.log(data);
                return data;
            })
            .catch(err => {
                throw new Error(`Could not fetch`)
            })
    };
};