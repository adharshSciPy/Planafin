import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, message } from 'antd';
import { Eye, Trash } from 'lucide-react';
import baseUrl from '../../baseUrl';
import './JobDetails.css';

function ApplicationDetails() {
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchDetails = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${baseUrl}/api/v1/user/applicationDetails`);
                setDetails(response.data.data);
                console.log(response.data.data)
            } catch (error) {
                console.error('Error fetching job details:', error);
            }
            setLoading(false);
        };
        fetchDetails();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${baseUrl}/api/v1/user/deleteJobapplication/${id}`);
            message.success('Job deleted successfully');
            setDetails(details.filter(detail => detail._id !== id));
        } catch (error) {
            console.error('Error deleting job:', error);
            message.error('Failed to delete job');
        }
    };

    const columns = [
        {
            title: 'Sl.No',
            dataIndex: 'index',
            key: 'index',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Button type="text">
                    <Eye size={25} />
                </Button>
            ),
        },
        {
            title: 'Delete',
            key: 'action',
            render: (text, record) => (
                <Button type="text" danger onClick={() => handleDelete(record._id)}>
                    <Trash size={25} color='red' />
                </Button>
            ),
        },
    ];

    return (
        <Table
            columns={columns}
            dataSource={details}
            rowKey={(record, index) => record.id || index}
            loading={loading}
            pagination={{ pageSize: 10 }}
        />
    )
}

export default ApplicationDetails