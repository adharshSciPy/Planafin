import React,{useEffect,useState} from 'react'
import axios from 'axios';
import "./adcontact.css"
import baseUrl from '../../baseUrl';

function AdContact() {
    const [contactList, setContactList] = useState([]);

    useEffect(() => {
      axios.get(`${baseUrl}/api/v1/user/contactdetails`)
        .then((res) => {
          setContactList(res.data); 
        })
        .catch((err) => {
          console.error("Failed to fetch contacts:", err);
        });
    }, []);
  
    return (
      <div className="table-container">
        <h2>Submitted Contact Details</h2>
        <table className="contact-table">
          <thead>
            <tr>
              <th>#</th>
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
                  <td>{index + 1}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>{item.country}</td>
                  <td>{item.phone}</td>
                  <td>{item.jobTitle}</td>
                  <td>{item.company}</td>
                  <td>{item.message}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="no-data">No contact data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };
export default AdContact