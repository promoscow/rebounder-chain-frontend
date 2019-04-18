import React from 'react';

const Data = ({data}) => {
    return (
        <div>
            <div className="main">
                <div>Мы записали твоё нажатие в базу данных, дружок.</div>
                <div>Оно было записано под номером {data.id}. Время записи: {data.created}.</div>
                <div>Можешь нажать ещё раз!</div>
            </div>
        </div>
    );
};

export default Data;