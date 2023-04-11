import React, { useState, useEffect } from 'react'


const Clock = () => {

    const defaultState = {
        date: new Date(),
        name: 'Aarón',
        surname: 'Martínez',
        age: 0
    }

    const [user, setUser] = useState(defaultState);

    useEffect(() => {
        const intervalAge = setInterval(() => {
            updateUser();
        }, 1000)
        return () => {
            clearInterval(intervalAge)
        };
    });

    const updateUser = () => {
        return setUser({
                date: new Date(),
                name: user.name,
                surname: user.surname,
                age: user.age +1
            });
    };

    return (
        <div>
            <h2>
            Hora Actual: 
            {user.date.toLocaleTimeString()}
            </h2>
            <h3>
                {user.name} {user.surname}
            </h3>
            <h1>Edad: {user.age}</h1>
        </div>
    );
}

export default Clock;