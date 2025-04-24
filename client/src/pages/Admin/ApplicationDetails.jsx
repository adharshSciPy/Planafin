import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, message } from 'antd';
import { Eye, Trash } from 'lucide-react';
import baseUrl from '../../baseUrl';
import './JobDetails.css'; // Ensure modal styles are here or add new CSS
import { useNavigate } from "react-router-dom";
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

function ApplicationDetails() {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${baseUrl}/api/v1/user/applicationDetails`);
        setDetails(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
      setLoading(false);
    };
    fetchDetails();
  }, []);

  const confirmDelete = (id) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseUrl}/api/v1/user/deleteJobapplication/${id}`);
      message.success('Job deleted successfully');
      setDetails(details.filter(detail => detail._id !== id));
    } catch (error) {
      console.error('Error deleting job:', error);
      message.error('Failed to delete job');
    }
    setShowModal(false);
    setDeleteId(null);
  };

  const handleGetData = (id) => {
    navigate(`/employeeData/${id}`);
  };

  const columns = [
    {
      title: 'Sl.No',
      dataIndex: 'index',
      key: 'index',
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Name',
      key: 'name',
      render: (text, record) => `${record.firstName} ${record.lastName}`,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Current Company',
      dataIndex: 'currentCompany',
      key: 'currentCompany',
    },
    {
      title: 'GitHub URL',
      dataIndex: 'github',
      key: 'github',
    },
    {
      title: 'LinkedIn URL',
      dataIndex: 'linkedIn',
      key: 'linkedIn',
    },
    {
      title: 'Job Title',
      dataIndex: 'jobTitle',
      key: 'jobTitle',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Button type="text" onClick={() => handleGetData(record._id)}>
          <Eye size={25} />
        </Button>
      ),
    },
    {
      title: 'Delete',
      key: 'delete',
      render: (text, record) => (
        <Button type="text" danger onClick={() => confirmDelete(record._id)}>
          <Trash size={25} color="red" />
        </Button>
      ),
    },
  ];
  const exportToExcel = () => {
    const formattedData = details.map((item, index) => ({
      'Sl. No': index + 1,
      'Name': `${item.firstName} ${item.lastName}`,
      'Email': item.email,
      'Phone Number': item.phone,
      'Company':item.company,
      'Current Company':item.currentCompany,
      'GitHub URL':item.github,
      'LinkedIn URL': item.linkedIn,
      'Job Title':item.jobTitle,
      'Resume Download Link': item.resume
        ? `${baseUrl}/${item.resume}`
        : 'No Resume',
    }));
  
    const worksheet = XLSX.utils.json_to_sheet(formattedData);
  
    
    const range = XLSX.utils.decode_range(worksheet['!ref']);
    for (let row = 1; row <= range.e.r; ++row) {
      const cellRef = `F${row + 1}`; 
      const cell = worksheet[cellRef];
      if (cell && cell.v && cell.v.startsWith('http')) {
        worksheet[cellRef].l = { Target: cell.v, Tooltip: 'Download Resume' };
      }
    }
  
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Applications');
  
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, 'Job_Applications.xlsx');
  };
  

  return (
    <>
  <div className="tableHeader">
  <Button type="primary" onClick={exportToExcel} className="exportBtn">
    Export to Excel
  </Button>
</div>

<div className="tableWrapper">
      <Table
        columns={columns}
        dataSource={details}
        rowKey={(record, index) => record._id || index}
        loading={loading}
        pagination={{ pageSize: 10 }}
      />
</div>
      {showModal && (
        <div className="modalOverlayJD">
          <div className="modalContentJD">
            <h3>Confirm Deletion</h3>
            <p>Are you sure you want to delete this job?</p>
            <div className="modalActionsJD">
              <button className="confirmBtnJD" onClick={() => handleDelete(deleteId)}>
                OK
              </button>
              <button className="cancelBtnJD" onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ApplicationDetails;
