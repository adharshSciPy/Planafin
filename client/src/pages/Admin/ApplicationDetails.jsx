import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, message } from 'antd';
import { Eye, Trash } from 'lucide-react';
import baseUrl from '../../baseUrl';
import './JobDetails.css'; // Ensure modal styles are here or add new CSS
import { useNavigate } from "react-router-dom";

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

  return (
    <>
      <Table
        columns={columns}
        dataSource={details}
        rowKey={(record, index) => record._id || index}
        loading={loading}
        pagination={{ pageSize: 10 }}
      />

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
