import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, message } from 'antd';
import { Eye } from 'lucide-react';
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