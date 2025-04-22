import React, { useState } from 'react'
import './Solutioncounter.css'
import { Input, Button } from 'antd';
import axios from 'axios';
import baseUrl from '../../baseUrl';
import { ToastContainer, toast } from 'react-toastify';

function Solutioncounter() {
    const fields = { counter: '', title: '' }
    const [form, setForm] = useState(fields)

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const payload = {
                counter: form.counter,
                title: form.title
            }
            console.log("form", payload)
            const result = await axios.post(`${baseUrl}/api/v1/user/addSolutionCounter`, payload)
            if (result) {
                toast.success("Successfully Submitted")
                setForm(fields)
            }
        } catch (error) {
            console.log(error)
            toast.error("Something Went Wrong")
        }
    }
    return (
        <div>
            <ToastContainer />
            <div className='solutioncountermain'>
                <div className='solutioncounter'>
                    <h1>Service Counter</h1>
                    <Input name='counter' placeholder="Count *" onChange={handleChange} />
                    <Input name='title' placeholder="Title *" onChange={handleChange} />
                    <Button type="primary" onClick={handleSubmit}>Submit</Button>
                </div>
            </div>
        </div>
    )
}

export default Solutioncounter