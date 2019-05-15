export default class Api {

    //todo укажите внешний путь к Вашему серверу и внешний порт
    _apiPath = 'внешний_путь:внешний_порт';
    _logUrl = '/log';

    getResource = async () => {
        const res = await fetch(`${this._apiPath}${this._logUrl}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._logUrl}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };
};