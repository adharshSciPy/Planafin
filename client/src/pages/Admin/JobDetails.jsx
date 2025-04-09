import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, message } from 'antd';
import { Trash } from 'lucide-react';
import baseUrl from '../../baseUrl';
import './JobDetails.css';



function JobDetails() {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${baseUrl}/api/v1/user/joblisting`);
        setDetails(response.data.data);
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

  const handleDeleteConfirmed = async () => {
    try {
      await axios.delete(`${baseUrl}/api/v1/user/deleteJobopening/${deleteId}`);
      message.success('Job deleted successfully');
      setDetails(details.filter(detail => detail._id !== deleteId));
    } catch (error) {
      console.error('Error deleting job:', error);
      message.error('Failed to delete job');
    }
    setShowModal(false);
    setDeleteId(null);
  };

  const columns = [
    {
      title: 'Sl.No',
      dataIndex: 'index',
      key: 'index',
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Job Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Button type="text" danger onClick={() => confirmDelete(record._id)}>
          <Trash size={20} color='red' />
        </Button>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={details}
        rowKey={(record) => record._id}
        loading={loading}
        pagination={{ pageSize: 10 }}
        locale={{ emptyText: 'No job listings found.' }}
      />

      {showModal && (
        <div className="modalOverlayJD">
          <div className="modalContentJD">
            <h3>Confirm Deletion</h3>
            <p>Are you sure you want to delete this job?</p>
            <div className="modalActionsJD">
              <button className="confirmBtnJD" onClick={handleDeleteConfirmed}>
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

export default JobDetails;
