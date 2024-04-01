import React from 'react'

export default function List() {
    const listData = [
        { id: 1, name: "Thor", age: 35 },
        { id: 2, name: "Captain America", age: 48 },
        { id: 3, name: "Ironman", age: 50 },
        { id: 4, name: "Ant man", age: 45 },
        { id: 5, name: "Groot", age: 32 },
    ];
    return (
        <div className='container mt-5'>
            <h1 className='mb-5'>List</h1>
            <ul>
                {listData.map((data) => (
                    <li key={data.id}>
                        Hii i am {data.name} and i am {data.age} years old
                    </li>
                ))}
            </ul>
        </div>
    )
}
