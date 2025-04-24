import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table, Button, message } from 'antd'
import { Trash } from 'lucide-react'
import baseUrl from '../../baseUrl'
import './WatchNowDetails.css'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

function WatchNowDetails() {
    const [details, setDetails] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchDetails = async () => {
            setLoading(true)
            try {
                const response = await axios.get(`${baseUrl}/api/v1/user/watchnowDetails`);
                setDetails(response.data.data)
                console.log(response.data.data)
            } catch (error) {
                console.log("Error fetching watch now details", error)
            }
            setLoading(false)
        }
        fetchDetails();
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${baseUrl}/api/v1/user/deleteWatchnow/${id}`);
            message.success("Watch Now Deleted");
            setDetails(details.filter(detail => detail._id !== id))
        } catch (error) {
            console.error('Error deleting job:', error);
            message.error('Failed to delete job');
        }
    }

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
            title: 'Business Email',
            dataIndex: 'businessEmail',
            key: 'businessEmail',
        },
        {
            title: 'Company Name',
            dataIndex: 'companyName',
            key: 'companyName',
        },
        {
            title: 'Designation',
            dataIndex: 'designation',
            key: 'designation',
        },
        {
            title: 'Country',
            dataIndex: 'selectCountry',
            key: 'selectCountry',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Button type="text" danger onClick={() => handleDelete(record._id)}>
                    <Trash size={20} color='red' />
                </Button>
            ),
        },
    ];

 const exportToExcel = () => {
    const formattedData = details.map((item, index) => ({
      'Sl. No': index + 1,
      'Name': `${item.firstName} ${item.lastName}`,
      'Business Email': item.businessEmail,
      'Country': item.selectCountry,
    
      'Designation': item.designation,
      'Company Name': item.companyName,
      
    }));
  
    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Contact Details');
  
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const file = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(file, 'ContactDetails.xlsx');
  };

    return (
        <>
        <div className="tableHeader">
               <Button type="primary" onClick={exportToExcel} className="exportBtn">
                 Export to Excel
               </Button>
             </div>
        <Table
            columns={columns}
            dataSource={details}
            rowKey={(record, index) => record.id || index}
            loading={loading}
            pagination={{ pageSize: 10 }}
        />
        </>

    )
}

export default WatchNowDetails