import React, { useState } from 'react'
import './Solutioncounter.css'
import { Input, Button } from 'antd';
import axios from 'axios';

function Solutioncounter() {
    const handleSubmit = async () => {
        const fields = { counter: '', title: '' }
        const [form, setForm] = useState(fields)
        const result = await axios.post('http://localhost:8000/api/v1/user/addSolutionCounter')
    }
    return (
        <div className='solutioncountermain'>
            <div className='solutioncounter'>
                <h1>Solution Counter</h1>
                <Input name='counter' placeholder="Count *" />
                <Input name='title' placeholder="Title *" />
                <Button type="primary">Submit</Button>
            </div>

        </div>
    )
}

export default Solutioncounter