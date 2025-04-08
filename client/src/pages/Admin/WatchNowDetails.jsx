// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import { Table, Button, message } from 'antd'
// import { Trash } from 'lucide-react'
// import baseUrl from '../../baseUrl'
// import './WatchNowDetails.css'

// function WatchNowDetails() {
//     const [watchNow, setwatchNow] = useState([]);
//     const [selectedMessage, setSelectedMessage] = useState('');
//     const [showModal, setShowModal] = useState(false);

//     useEffect(() => {
//         const fetchDetails = async () => {
//             try {
//                 const response = await axios.get(`${baseUrl}/api/v1/user/watchnowDetails`);
//                 setwatchNow(response.data.data)
//             } catch (error) {
//                 console.log("Error fetching watch now details", error)
//             }
//         }
//         fetchDetails();
//     }, [])

//     // const handleDelete = async (id) => {
//     //     try {
//     //         await axios.delete(`${baseUrl}/api/v1/user/deleteWatchnow/${id}`);
//     //         message.success("Watch Now Deleted");
//     //         setDetails(details.filter(detail => detail._id !== id))
//     //     } catch (error) {
//     //         console.error('Error deleting job:', error);
//     //         message.error('Failed to delete job');
//     //     }
//     // }

   



//     return (
//         <div className="table-container">
//               <h2>Watch Now Details</h2>
//               <table className="contact-table">
//                 <thead>
//                   <tr>
//                     <th>Sl No</th>
//                     <th>First Name</th>
//                     <th>Last Name</th>
//                     <th>Business Email</th>
//                     <th>Company Name</th>
//                     <th>Designation</th>
//                     <th>Country</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {watchNow.length > 0 ? (
//                     watchNow.map((item, index) => (
//                       <tr key={item._id || index}>
//                         <td data-label="Sl No">{index + 1}</td>
//                         <td data-label="First">{item.firstName}</td>
//                         <td data-label="Last">{item.lastName}</td>
//                         <td data-label="Email">{item.email}</td>
//                         <td data-label="Country">{item.country}</td>
//                         <td data-label="Phone">{item.phone}</td>
//                         <td data-label="Job Title">{item.jobTitle}</td>
//                         <td data-label="Company">{item.company}</td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="9" className="no-data">No contact data available</td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//     )
// }

// export default WatchNowDetails