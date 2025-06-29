import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./adcontact.css";
import baseUrl from '../../baseUrl';
import { Table, Button, message } from 'antd';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { FaEye } from 'react-icons/fa'; 

function AdContact() {
  const [contactList, setContactList] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get(`${baseUrl}/api/v1/user/contactdetails`)
      .then((res) => {
        setContactList(res.data.data);
        // console.log(res.data.data, "eda");
      })
      .catch((err) => {
        console.error("Failed to fetch contacts:", err);
      });
  }, []);

  const handleViewMessage = (message) => {
    setSelectedMessage(message);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedMessage('');
  };
  const exportToExcel = () => {
    const formattedData = contactList.map((item, index) => ({
      'Sl. No': index + 1,
      'Name': `${item.firstName} ${item.lastName}`,
      'Email': item.email,
      'Country': item.country,
      'Phone': item.phone,
      'Job Title': item.jobTitle,
      'Company': item.company,
      'Message': item.message
    }));
  
    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Contact Details');
  
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const file = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(file, 'ContactDetails.xlsx');
  };
  
  return (
    <div className="table-container">
      <h2>Contact Details</h2>
      <div className="tableHeader">
       <Button type="primary" onClick={exportToExcel} className="exportBtn">
         Export to Excel
       </Button>
     </div>
      <table className="contact-table">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
            <th>Country</th>
            <th>Phone</th>
            <th>Job Title</th>
            <th>Company</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {contactList.length > 0 ? (
            contactList.map((item, index) => (
              <tr key={item._id || index}>
                <td data-label="Sl No">{index + 1}</td>
                <td data-label="First">{item.firstName}</td>
                <td data-label="Last">{item.lastName}</td>
                <td data-label="Email">{item.email}</td>
                <td data-label="Country">{item.country}</td>
                <td data-label="Phone">{item.phone}</td>
                <td data-label="Job Title">{item.jobTitle}</td>
                <td data-label="Company">{item.company}</td>
                <td data-label="Message">
                  <button onClick={() => handleViewMessage(item.message)} className="view-btn">
                    <FaEye />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="no-data">No contact data available</td>
            </tr>
          )}
        </tbody>
      </table>


      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Message</h3>
            <p>{selectedMessage}</p>
            <button onClick={closeModal} className="close-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdContact;
