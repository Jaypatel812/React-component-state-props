import React, { useState } from 'react'


export default function Counter() {
    const [data, setdata] = useState({
        number: 1
    })

    const minus = () => {
        if (data.number > 0) {
            setdata({ ...data, number: data.number - 1 })
        }
    }

    return (
        <div className='container mt-5'>
            <h1 className='mb-5'>Counter</h1>
            <button className='btn btn-danger me-2' onClick={() => setdata({ ...data, number: data.number + 1 })}>+</button>
            {data.number}
            <button className='btn btn-danger ms-2' onClick={minus}>-</button>
            <button className='btn btn-warning ms-2' onClick={() => setdata({ ...data, number: data.number = 0 })}>Reset</button>
        </div>
    )
}
