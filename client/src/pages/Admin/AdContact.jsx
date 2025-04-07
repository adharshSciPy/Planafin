import React from 'react'
import { Table, Button, message } from 'antd';
import { Trash } from 'lucide-react';

function AdContact() {
    // const [details, setDetails] = useState([]);
    // const [loading, setLoading] = useState(false);
  
    // useEffect(() => {
    //   const fetchDetails = async () => {
    //     setLoading(true);
    //     try {
    //     //   const response = await axios.get(`${baseUrl}/api/v1/user/joblisting`);
    //       setDetails(response.data.data);
    //       console.log(response.data.data)
    //     } catch (error) {
    //       console.error('Error fetching job details:', error);
    //     }
    //     setLoading(false);
    //   };
    //   fetchDetails();
    // }, []);
  
    const columns = [
      {
        title: 'Sl.No',
        dataIndex: 'index',
        key: 'index',
        render: (text, record, index) => index + 1,
      },
      {
        title: 'First Name',
        dataIndex: 'firstname',
        key: 'firstname',
      },
      {
        title: 'Last Name',
        dataIndex: 'lastname',
        key: 'lastname',
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
    //   {
    //     title: 'Action',
    //     key: 'action',
    //     render: (text, record) => (
    //       <Button type="text" danger onClick={() => handleDelete(record._id)}>
    //         <Trash size={20} color='red' />
    //       </Button>
    //     ),
    //   },
    ];
  
    return (
      <Table
        columns={columns}
        // dataSource={details}
        rowKey={(record, index) => record.id || index}
        // loading={loading}
        pagination={{ pageSize: 10 }}
      />
    );
}

export default AdContact