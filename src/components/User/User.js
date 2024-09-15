// import React from 'react';
// import * as XLSX from 'xlsx';
// import { FaTable } from 'react-icons/fa';

// const people = [
//   // Example data structure
//   { name: 'Jane Smith', title: 'Chennai', email: 'jane.smith@example.com', role: '7702253548' },
//   { name: 'Alice Johnson', title: 'Hyderabad', email: 'alice.johnson@example.com', role: '7702253549' },
//   { name: 'Robert Brown', title: 'Mumbai', email: 'robert.brown@example.com', role: '7702253550' },
//   { name: 'Michael Davis', title: 'Delhi', email: 'michael.davis@example.com', role: '7702253551' },
//   { name: 'Emily Clark', title: 'Kolkata', email: 'emily.clark@example.com', role: '7702253552' },
//   { name: 'David Miller', title: 'Pune', email: 'david.miller@example.com', role: '7702253553' },
//   { name: 'Susan Wilson', title: 'Ahmedabad', email: 'susan.wilson@example.com', role: '7702253554' },
//   { name: 'James Taylor', title: 'Jaipur', email: 'james.taylor@example.com', role: '7702253555' },
//   { name: 'Patricia Martinez', title: 'Lucknow', email: 'patricia.martinez@example.com', role: '7702253556' },
//   // Add more people as needed
// ];

// export default function User() {

//   const handleExportUsersData =  () => {
//     exportToExcel(people, 'Customers');
//   };
//   const exportToExcel = (data, fileName) => {
//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
//     XLSX.writeFile(workbook, `${fileName}.xlsx`);
//   };
  
//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4  ml-10 lg:ml-72 w-auto">
//       <div className="sm:flex sm:items-center">
//         <div className="sm:flex-auto">
//           {/* <h1 className="text-base font-semibold leading-6 text-custom-heading">Users</h1> */}
//           <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-custom-heading">Users</h2>

//           <p className="mt-2 text-sm text-gray-700">
//             A list of all the users in your account including their name, location, email, and mobileno.
//           </p>
//         </div>
//         <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
//           <button
//         type="button"
//         className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2  text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//         onClick={handleExportUsersData}
//       >
//         <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//         Export Users
//       </button>
//         </div>
//       </div>
//       <div className="mt-8 flow-root">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <table className="min-w-full divide-y divide-gray-300">
//               <thead>
//                 <tr>
//                   <th
//                     scope="col"
//                     className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
//                   >
//                     Name
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >Location   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Email
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Mobile No
//                   </th>
//                   {/* <th
//                     scope="col"
//                     className="relative py-3.5 pl-3 pr-4 sm:pr-0"
//                   >
//                      <span className="sr-only">Edit</span> 
//                   </th> */}
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {people.map((person) => (
//                   <tr key={person.email}>
//                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
//                       {person.name}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {person.title}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {person.email}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {person.role}
//                     </td>
//                     {/* <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
//                       <a href="#" className="text-indigo-600 hover:text-indigo-900">
//                         Edit <span className="sr-only">, {person.name}</span>
//                       </a>
//                     </td> */}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import * as XLSX from 'xlsx';
// import { FaTable } from 'react-icons/fa';

// export default function User() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('https://your-api-endpoint.com/users'); // Replace with your API endpoint
//         setUsers(response.data);
//       } catch (err) {
//         setError('Failed to fetch user data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleExportUsersData = () => {
//     exportToExcel(users, 'Customers');
//   };

//   const exportToExcel = (data, fileName) => {
//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
//     XLSX.writeFile(workbook, `${fileName}.xlsx`);
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       <div className="sm:flex sm:items-center">
//         <div className="sm:flex-auto">
//           <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-custom-heading">Users</h2>
//           <p className="mt-2 text-sm text-gray-700">
//             A list of all the users in your account including their name, location, email, and mobileno.
//           </p>
//         </div>
//         <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
//           <button
//             type="button"
//             className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             onClick={handleExportUsersData}
//           >
//             <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//             Export Users
//           </button>
//         </div>
//       </div>
//       <div className="mt-8 flow-root">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <table className="min-w-full divide-y divide-gray-300">
//               <thead>
//                 <tr>
//                   <th
//                     scope="col"
//                     className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
//                   >
//                     Name
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Location
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Email
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Mobile No
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {users.map((user) => (
//                   <tr key={user.email}>
//                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
//                       {user.name}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {user.title}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {user.email}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {user.role}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// import React, { useState } from 'react';
// import * as XLSX from 'xlsx';
// import { FaTable, FaEdit, FaTrash } from 'react-icons/fa';
 
// const initialPeople = [
//   { name: 'Jane Smith', title: 'Chennai', email: 'jane.smith@example.com', role: '7702253548' },
//   { name: 'Alice Johnson', title: 'Hyderabad', email: 'alice.johnson@example.com', role: '7702253549' },
//   { name: 'Robert Brown', title: 'Mumbai', email: 'robert.brown@example.com', role: '7702253550' },
//   { name: 'Michael Davis', title: 'Delhi', email: 'michael.davis@example.com', role: '7702253551' },
//   { name: 'Emily Clark', title: 'Kolkata', email: 'emily.clark@example.com', role: '7702253552' },
//   { name: 'David Miller', title: 'Pune', email: 'david.miller@example.com', role: '7702253553' },
//   { name: 'Susan Wilson', title: 'Ahmedabad', email: 'susan.wilson@example.com', role: '7702253554' },
//   { name: 'James Taylor', title: 'Jaipur', email: 'james.taylor@example.com', role: '7702253555' },
//   { name: 'Patricia Martinez', title: 'Lucknow', email: 'patricia.martinez@example.com', role: '7702253556' },
// ];
 
// export default function User() {
//   const [people, setPeople] = useState(initialPeople);
//   const [formData, setFormData] = useState({
//     name: '',
//     title: '',
//     email: '',
//     role: ''
//   });
//   const [isFormVisible, setIsFormVisible] = useState(false);
 
//   const handleExportUsersData = () => {
//     exportToExcel(people, 'Customers');
//   };
 
//   const exportToExcel = (data, fileName) => {
//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
//     XLSX.writeFile(workbook, `${fileName}.xlsx`);
//   };
 
//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
 
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setPeople([...people, formData]);
//     setFormData({
//       name: '',
//       title: '',
//       email: '',
//       role: ''
//     });
//     setIsFormVisible(false); // Hide the form after submission
//   };
 
//   const handleAddUserClick = () => {
//     setIsFormVisible(true); // Show the form when Add Users button is clicked
//   };
 
//   const handleEditUser = (index) => {
//     const userToEdit = people[index];
//     setFormData(userToEdit);
//     handleDeleteUser(index);
//     setIsFormVisible(true); // Show the form when editing
//   };
 
//   const handleDeleteUser = (index) => {
//     const updatedPeople = people.filter((_, i) => i !== index);
//     setPeople(updatedPeople);
//   };
 
//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4  ml-10 lg:ml-72 w-auto">
//       <div className="sm:flex sm:items-center">
//         <div className="sm:flex-auto">
//           <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-custom-heading">Users</h2>
//           <p className="mt-2 text-sm text-gray-700">
//             A list of all the users in your account including their name, location, email, and mobile no.
//           </p>
//         </div>
//         <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex gap-2">
//           <button
//             type="button"
//             className="inline-flex items-center gap-x-1.5 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
//             onClick={handleAddUserClick}
//           >
//             Add Users
//           </button>
//           <button
//             type="button"
//             className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2  text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             onClick={handleExportUsersData}
//           >
//             <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//             Export Users
//           </button>
//         </div>
//       </div>
     
//       {/* Only show the form if isFormVisible is true */}
//       {isFormVisible && (
//         <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//           <form onSubmit={handleFormSubmit}>
//             <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleFormChange}
//                   required
//                   pattern="[A-Za-z\s]+"
//                   title="Name should only contain letters and spaces."
//                   className="mt-1 p-2 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="title" className="block text-sm font-medium text-gray-700">
//                   Location
//                 </label>
//                 <input
//                   type="text"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleFormChange}
//                   required
//                   pattern="[A-Za-z\s]+"
//                   title="Location should only contain letters and spaces."
//                   className="mt-1 p-2 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleFormChange}
//                   required
//                   className="mt-1 p-2 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="role" className="block text-sm font-medium text-gray-700">
//                   Mobile No
//                 </label>
//                 <input
//                   type="text"
//                   name="role"
//                   value={formData.role}
//                   onChange={handleFormChange}
//                   required
//                   pattern="\d{10}"
//                   title="Mobile number should be 10 digits."
//                   className="mt-1 p-2 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//             </div>
//             <div className="mt-4 flex justify-end">
//               <button
//                 type="submit"
//                 className="inline-flex items-center gap-x-1.5 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
//               >
//                 Save
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
 
//       <div className="mt-8 flow-root">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <table className="min-w-full divide-y divide-gray-300">
//               <thead>
//                 <tr>
//                   <th
//                     scope="col"
//                     className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
//                   >
//                     Name
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Location
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Email
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Mobile No
//                   </th>
//                   <th
//                     scope="col"
//                     className="relative py-3.5 pl-3 pr-4 sm:pr-0"
//                   >
//                     <span className="sr-only">Edit</span>
//                   </th>
//                   <th
//                     scope="col"
//                     className="relative py-3.5 pl-3 pr-4 sm:pr-0"
//                   >
//                     <span className="sr-only">Delete</span>
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {people.map((person, index) => (
//                   <tr key={index}>
//                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
//                       {person.name}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {person.title}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {person.email}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {person.role}
//                     </td>
//                     <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
//                       <button
//                         onClick={() => handleEditUser(index)}
//                         className="text-indigo-600 hover:text-indigo-900"
//                       >
//                         <FaEdit />
//                       </button>
//                     </td>
//                     <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
//                       <button
//                         onClick={() => handleDeleteUser(index)}
//                         className="text-red-600 hover:text-red-900"
//                       >
//                         <FaTrash />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
 
 
 
 
// import React, { useState, useEffect } from "react";
// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Avatar from "@mui/material/Avatar";
// import p1 from "../../assests/Images/Happy.png";
// import p2 from "../../assests/Images/Happy.png";
// import p3 from "../../assests/Images/Happy.png";
// import { FaTable, FaEdit, FaTrash } from "react-icons/fa";
// import { FaPlus } from "react-icons/fa";
// import * as XLSX from 'xlsx';
// import TableFooter from '@mui/material/TableFooter';
// import TablePagination from '@mui/material/TablePagination';
// import { FaFilter } from 'react-icons/fa';




// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: '#003375', // Dark blue color
//     color: theme.palette.common.white,
//     fontWeight: 'bold',
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));
// const initialPeople = [
//   {
//     name: "Jane Smith",
//     title: "Chennai",
//     email: "jane.smith@example.com",
//     role: "7702253548",
//     gender: "Male",
//     profileImg: p1,
//     addressLine1: "123 Main St",
//     addressLine2: "Apt 4B",
//     city: "Chennai",
//     state: "Tamil Nadu",
//     country: "India",
//   },
//   {
//     name: "Alice Johnson",
//     title: "Hyderabad",
//     email: "alice.johnson@example.com",
//     role: "7702253549",
//     gender: "Female",
//     profileImg: p2,
//     addressLine1: "456 Oak St",
//     addressLine2: "Suite 12",
//     city: "Hyderabad",
//     state: "Telangana",
//     country: "India",
//   },
//   {
//     name: "Robert Brown",
//     title: "Mumbai",
//     email: "robert.brown@example.com",
//     role: "7702253550",
//     gender: "Female",
//     profileImg: p3,
//     addressLine1: "789 Pine St",
//     addressLine2: "",
//     city: "Mumbai",
//     state: "Maharashtra",
//     country: "India",
//   },
//   {
//     name: "Michael Davis",
//     title: "Delhi",
//     email: "michael.davis@example.com",
//     role: "7702253551",
//     gender: "Male",
//     addressLine1: "101 Maple St",
//     addressLine2: "Apt 3C",
//     city: "Delhi",
//     state: "Delhi",
//     country: "India",
//   },
// ];

// export default function User(props) {
//   const [people, setPeople] = useState(initialPeople);
//   const [formData, setFormData] = useState(null);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [searchName, setSearchName] = useState('');
//   const [searchEmail, setSearchEmail] = useState('');


//   // Handle form changes
//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle image upload
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setFormData({
//           ...formData,
//           profileImg: reader.result,
//         });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle form submission
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (editingIndex !== null) {
//       const updatedPeople = [...people];
//       updatedPeople[editingIndex] = formData;
//       setPeople(updatedPeople);
//       setEditingIndex(null);
//     } else {
//       setPeople([...people, formData]);
//     }
//     setFormData(null);
//     setIsFormVisible(false);
//   };

//   // Handle cancel button click
//   const handleCancel = () => {
//     setFormData(null);
//     setEditingIndex(null);
//     setIsFormVisible(false);
//   };

//   // Handle add user button click
//   const handleAddUserClick = () => {
//     setFormData({
//       name: "",
//       title: "",
//       email: "",
//       role: "",
//       gender: "",
//       profileImg: "",
//       addressLine1: "",
//       addressLine2: "",
//       city: "",
//       state: "",
//       country: "",
//     });
//     setEditingIndex(null);
//     setIsFormVisible(true);
//   };
//   const exportToExcel = (data, fileName) => {
//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
//     XLSX.writeFile(workbook, `${fileName}.xlsx`);
//   };
//   const handleExportUsersData = () => {
//     exportToExcel(people, 'Customers');
//   };

//   // Handle edit button click
//   const handleEditClick = (index) => {
//     setFormData(people[index]);
//     setEditingIndex(index);
//     setIsFormVisible(true);
//   };

//   // Handle delete button click
//   const handleDeleteClick = (index) => {
//     const updatedPeople = people.filter((_, i) => i !== index);
//     setPeople(updatedPeople);
//   };

//   // Handle page change
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   // Handle rows per page change
//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   //   // Example if using useState
//   const [paginatedPeople, setPaginatedPeople] = useState([]);

//   // Pagination calculations
//   const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - people.length) : 0;

//   // Handle search functionality
//   const handleSearch = () => {
//     const filteredPeople = people.filter(person =>
//       person.name.toLowerCase().includes(searchName.toLowerCase()) &&
//       person.email.toLowerCase().includes(searchEmail.toLowerCase())
//     );
//     setPaginatedPeople(filteredPeople.slice(0, rowsPerPage));
//   };

//   // Handle page change (e.g., when user clicks to go to the next page)
//   const handlePageChange = (newPage) => {
//     setPage(newPage);
//     setPaginatedPeople(
//       people.slice(newPage * rowsPerPage, newPage * rowsPerPage + rowsPerPage)
//     );
//   };

//   // Handle rows per page change (if you're allowing the user to change this)
//   const handleRowsPerPageChange = (newRowsPerPage) => {
//     setRowsPerPage(newRowsPerPage);
//     setPaginatedPeople(
//       people.slice(page * newRowsPerPage, page * newRowsPerPage + newRowsPerPage)
//     );
//   };

//   // Initial pagination setup or when data changes
//   useEffect(() => {
//     setPaginatedPeople(
//       people.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//     );
//   }, [people, page, rowsPerPage]);

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       {/* Conditional Rendering */}
//       {!isFormVisible ? (
//         <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//           <div className="flex justify-between items-center">
//             <h2 className="text-xl font-semibold">User List</h2>
//             <ul className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex gap-2 list-none">
//               <li>
//                 <button
//                   type="button"
//                   className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
//                   onClick={handleAddUserClick}
//                 >
//                   <FaPlus aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//                   Add Users
//                 </button>
//               </li>
//               <li>
//                 <button
//                   type="button"
//                   className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700"
//                   onClick={handleExportUsersData}
//                 >
//                   <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//                   Export Users
//                 </button>
//               </li>
//             </ul>
//           </div>

//           <div className="mt-4">
//             <div className="flex items-center space-x-8">
//               <div className="flex flex-col w-[35rem]">
//                 <label
//                   htmlFor="searchName"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Search Customer Name
//                 </label>
//                 <input
//                   id="searchName"
//                   type="text"
//                   placeholder="Search by name"
//                   value={searchName}
//                   onChange={(e) => setSearchName(e.target.value)}
//                   className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div className="flex flex-col w-[25rem]">
//                 <label
//                   htmlFor="searchEmail"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Search by Email
//                 </label>
//                 <input
//                   id="searchEmail"
//                   type="text"
//                   placeholder="Search by email"
//                   value={searchEmail}
//                   onChange={(e) => setSearchEmail(e.target.value)}
//                   className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div className="flex-shrink-0">
//                 <button
//                   type="button"
//                   className="px-6 py-3 flex items-center space-x-2 rounded-md bg-indigo-600 text-white text-sm font-medium"
//                   onClick={handleSearch}
//                 >
//                   <FaFilter className="h-3 w-3" />
//                   <span>Filter</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//           <TableContainer component={Paper} className="mt-4">
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <StyledTableCell>Name</StyledTableCell>
//                   <StyledTableCell>Email</StyledTableCell>
//                   <StyledTableCell>Mobile No</StyledTableCell>
//                   <StyledTableCell>Address</StyledTableCell>
//                   <StyledTableCell>Gender</StyledTableCell>
//                   <StyledTableCell>Edit</StyledTableCell>
//                   <StyledTableCell>Delete</StyledTableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {paginatedPeople.map((person, index) => (
//                   <StyledTableRow key={index}>
//                     <StyledTableCell>
//                       <div className="flex items-center space-x-4">
//                         <Avatar src={person.profileImg} />
//                         <span>{person.name}</span>
//                       </div>
//                     </StyledTableCell>
//                     <StyledTableCell>{person.email}</StyledTableCell>
//                     <StyledTableCell>{person.role}</StyledTableCell>
//                     <StyledTableCell>
//                       {person.addressLine1}
//                       {person.addressLine2 && `, ${person.addressLine2}`}
//                       <br />
//                       {person.city}, {person.state}, {person.country}
//                     </StyledTableCell>
//                     {/* <StyledTableCell>{person.gender}</StyledTableCell> */}
//                     <StyledTableCell>
//                       <span
//                         className={`inline-block px-3 py-2 text-xs font-semibold rounded-full ${person.gender === "Male"
//                             ? "bg-green-100 text-green-800 shadow-md"
//                             : person.gender === "Female"
//                               ? "bg-pink-100 text-pink-800 shadow-md"
//                               : "bg-gray-100 text-gray-800 shadow-md"
//                           }`}
//                       >
//                         {person.gender}
//                       </span>
//                     </StyledTableCell>


//                     <StyledTableCell>

//                       <div
//                         className="inline-flex items-center justify-center w-14 h-7 cursor-pointer rounded-lg bg-blue-100 text-blue-800 shadow-md"
//                         onClick={() => handleEditClick(index)}
//                       >
//                         <FaEdit className="w-4 h-4" />
//                       </div>



//                     </StyledTableCell>
//                     <StyledTableCell>

//                       <div
//                         className="inline-flex items-center justify-center w-14 h-7 cursor-pointer rounded-lg bg-pink-100 text-red-500 shadow-md"
//                         onClick={() => handleDeleteClick(index)}
//                       >
//                         <FaTrash className="w-4 h-4" />
//                       </div>

//                       {/* </Tooltip> */}
//                     </StyledTableCell>
//                   </StyledTableRow>
//                 ))}
//                 {emptyRows > 0 && (
//                   <StyledTableRow style={{ height: 53 * emptyRows }}>
//                     <StyledTableCell colSpan={6} />
//                   </StyledTableRow>
//                 )}
//               </TableBody>
//               <TableFooter>
//                 <TableRow>
//                   <TablePagination
//                     rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
//                     colSpan={3}
//                     count={people.length}
//                     rowsPerPage={rowsPerPage}
//                     page={page}
//                     onPageChange={handleChangePage}
//                     onRowsPerPageChange={handleChangeRowsPerPage}
//                   // ActionsComponent={TablePaginationActions}
//                   />
//                 </TableRow>
//               </TableFooter>
//             </Table>
//           </TableContainer>
//         </div>
//       ) : (

//         <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//           <form onSubmit={handleFormSubmit}>
//             <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
//               {/* Form Fields */}
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData?.name || ""}
//                   onChange={handleFormChange}
//                   required
//                   pattern="[A-Za-z\s]+"
//                   title="Name should only contain letters and spaces."
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData?.email || ""}
//                   onChange={handleFormChange}
//                   required
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="role"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Mobile No
//                 </label>
//                 <input
//                   type="text"
//                   name="role"
//                   value={formData?.role || ""}
//                   onChange={handleFormChange}
//                   required
//                   pattern="\d{10}"
//                   title="Mobile No should be 10 digits."
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="gender" className="block text-sm font-medium">
//                   Gender
//                 </label>
//                 <select
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleFormChange}
//                   required
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 sm:text-sm"
//                 >
//                   <option value="">Select Gender</option>
//                   <option
//                     value="Male"
//                     className="bg-green-100 text-green-800 shadow-sm"
//                   >
//                     Male
//                   </option>
//                   <option
//                     value="Female"
//                     className="bg-pink-100 text-pink-800 shadow-sm"
//                   >
//                     Female
//                   </option>
//                 </select>
//               </div>

//               {/* Additional fields for address */}
//               <div>
//                 <label
//                   htmlFor="addressLine1"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Address Line 1
//                 </label>
//                 <input
//                   type="text"
//                   name="addressLine1"
//                   value={formData?.addressLine1 || ""}
//                   onChange={handleFormChange}
//                   required
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="addressLine2"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Address Line 2
//                 </label>
//                 <input
//                   type="text"
//                   name="addressLine2"
//                   value={formData?.addressLine2 || ""}
//                   onChange={handleFormChange}
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="city"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   City
//                 </label>
//                 <input
//                   type="text"
//                   name="city"
//                   value={formData?.city || ""}
//                   onChange={handleFormChange}
//                   required
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="state"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   State
//                 </label>
//                 <input
//                   type="text"
//                   name="state"
//                   value={formData?.state || ""}
//                   onChange={handleFormChange}
//                   required
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="country"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Country
//                 </label>
//                 <input
//                   type="text"
//                   name="country"
//                   value={formData?.country || ""}
//                   onChange={handleFormChange}
//                   required
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="profileImg"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Profile Image
//                 </label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                   className="mt-1 block w-full text-sm text-gray-500"
//                 />
//                 {formData?.profileImg && (
//                   <img
//                     src={formData.profileImg}
//                     alt="Profile"
//                     className="mt-2 w-24 h-24 object-cover rounded-md"
//                   />
//                 )}
//               </div>
//             </div>
//             <div className="mt-6 flex justify-end gap-4">
//               <button
//                 type="submit"
//                 className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               >

//                 Save
//               </button>
//               <button
//                 type="button"
//                 onClick={handleCancel}
//                 className="inline-flex justify-center rounded-md border border-transparent bg-gray-300 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }

 
 
 
 


// import React, { useState,useEffect} from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
// import TableFooter from "@mui/material/TableFooter";
// import TablePagination from "@mui/material/TablePagination";
// import FirstPageIcon from "@mui/icons-material/FirstPage";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// import LastPageIcon from "@mui/icons-material/LastPage";
// import { useTheme } from "@mui/material/styles";
// import p1 from "../../assests/profile/p1.jpeg";
// import p2 from "../../assests/profile/p2.jpeg";
// import p3 from "../../assests/profile/p3.jpeg";
// import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
// import * as XLSX from "xlsx";
// import PropTypes from "prop-types";
// import { FaTable } from "react-icons/fa";
// import { FaFilter } from 'react-icons/fa';
// import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
// import { IoIosSearch } from "react-icons/io";
// import UserRoleForm from "./UserRole";


// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     // backgroundColor: theme.palette.grey[200],
//     // color: theme.palette.common.black,
//     // fontWeight: 'bold',
//     [`&.${tableCellClasses.head}`]: {
//       backgroundColor: '#003375', // Dark blue color
//       color: theme.palette.common.white,
//       fontWeight: 'bold',
//     },
//     [`&.${tableCellClasses.body}`]: {
//       fontSize: 14,
//     },
//   },
  
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(even)": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

// const initialPeople = [
//   {
//     firstName: "Jane",
//     lastName: "Smith",
//     title: "Chennai",
//     email: "jane.smith@example.com",
//     phoneNumber: "7702253548",
//     gender: "Male",
//     profileImg: p1,
//     addressLine1: "123 Main St",
//     addressLine2: "Apt 4B",
//     city: "Chennai",
//     state: "Tamil Nadu",
//     country: "India",
//   },
//   {
//     firstName: "Alice",
//     lastName: "Johnson",
//     title: "Hyderabad",
//     email: "alice.johnson@example.com",
//     phoneNumber: "7702253549",
//     gender: "Female",
//     profileImg: p2,
//     addressLine1: "456 Oak St",
//     addressLine2: "Suite 12",
//     city: "Hyderabad",
//     state: "Telangana",
//     country: "India",
//   },
//   {
//     firstName: "Robert",
//     lastName: "Brown",
//     title: "Mumbai",
//     email: "robert.brown@example.com",
//     phoneNumber: "7702253550",
//     gender: "Female",
//     profileImg: p3,
//     addressLine1: "789 Pine St",
//     addressLine2: "",
//     city: "Mumbai",
//     state: "Maharashtra",
//     country: "India",
//   },
//   {
//     firstName: "Michael",
//     lastName: "Davis",
//     title: "Delhi",
//     email: "michael.davis@example.com",
//     phoneNumber: "7702253551",
//     gender: "Male",
//     addressLine1: "101 Maple St",
//     addressLine2: "Apt 3C",
//     city: "Delhi",
//     state: "Delhi",
//     country: "India",
//   },
// ];

// function TablePaginationActions(props) {
//   const { count, page, rowsPerPage, onPageChange } = props;
//   const theme = useTheme();

//   const handleFirstPageButtonClick = (event) => {
//     onPageChange(event, 0);
//   };

//   const handleBackButtonClick = (event) => {
//     onPageChange(event, page - 1);
//   };

//   const handleNextButtonClick = (event) => {
//     onPageChange(event, page + 1);
//   };

//   const handleLastPageButtonClick = (event) => {
//     onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
//   };

//   return (
//     <Box sx={{ flexShrink: 0, ml: 2.5 }}>
//       <IconButton
//         onClick={handleFirstPageButtonClick}
//         disabled={page === 0}
//         aria-label="first page"
//       >
//         {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
       
//       </IconButton>
//         <IconButton
//         onClick={handleBackButtonClick}
//         disabled={page === 0}
//         aria-label="previous page"
//       >
//         {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//       </IconButton>
//       <IconButton
//         onClick={handleNextButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="next page"
//       >
//         {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//       </IconButton>
//       <IconButton
//         onClick={handleLastPageButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="last page"
//       >
//         {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
//       </IconButton>
//     </Box>
//   );
// }

// TablePaginationActions.propTypes = {
//   count: PropTypes.number.isRequired,
//   onPageChange: PropTypes.func.isRequired,
//   page: PropTypes.number.isRequired,
//   rowsPerPage: PropTypes.number.isRequired,
// };

// function User() {
//   const [people, setPeople] = useState(initialPeople);
//   const [formData, setFormData] = useState(null);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [searchName, setSearchName] = useState("");
//   const [searchEmail, setSearchEmail] = useState("");

//   const [role, setRole] = useState('');
//   const [showDropdown, setShowDropdown] = useState(false);

//   const handleRoleChange = (event) => {
//     setRole(event.target.value);
//   };

//   const handleStatusChange = (event) => {
//     setStatus(event.target.value);
//   };

  

//   // Handle form changes
//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle image upload
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setFormData({
//           ...formData,
//           profileImg: reader.result,
//         });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle form submission
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (editingIndex !== null) {
//       const updatedPeople = [...people];
//       updatedPeople[editingIndex] = formData;
//       setPeople(updatedPeople);
//       setEditingIndex(null);
//     } else {
//       setPeople([...people, formData]);
//     }
//     setFormData(null);
//     setIsFormVisible(false);
//   };

//   // Handle cancel button click
//   const handleCancel = () => {
//     setFormData(null);
//     setEditingIndex(null);
//     setIsFormVisible(false);
//   };

//   // Handle add user button click
//   const handleAddUserClick = () => {
//     setFormData({
//       name: "",
//       title: "",
//       email: "",
//       role: "",
//       gender: "",
//       profileImg: "",
//       addressLine1: "",
//       addressLine2: "",
//       city: "",
//       state: "",
//       country: "",
//     });
//     setEditingIndex(null);
//     setIsFormVisible(true);
//   };

//   // const handleSearch = (event) => {
//   //   const { name, value } = event.target;
//   //   if (name === "searchName") {
//   //     setSearchName(value);
//   //   } else if (name === "searchEmail") {
//   //     setSearchEmail(value);
//   //   }
//   // };
//   //   // Example if using useState
// const [paginatedPeople, setPaginatedPeople] = useState([]);


// // Handle search functionality
// const handleSearch = () => {
//   const filteredPeople = people.filter(person =>
//     person.name.toLowerCase().includes(searchName.toLowerCase()) &&
//     person.email.toLowerCase().includes(searchEmail.toLowerCase())
//   );
//   setPaginatedPeople(filteredPeople.slice(0, rowsPerPage));
// };

  
//   const exportToExcel = (data, fileName) => {
//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
//     XLSX.writeFile(workbook, `${fileName}.xlsx`);
//   };

//   const handleExportUsersData = () => {
//     exportToExcel(people, "Customers");
//   };

//   // Handle page change
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   // Handle edit button click
//   const handleEditClick = (index) => {
//     const realIndex = page * rowsPerPage + index;
//     setFormData(people[realIndex]);
//     setEditingIndex(realIndex);
//     setIsFormVisible(true);
//   };

//   // Handle delete button click
//   const handleDeleteClick = (index) => {
//     const realIndex = page * rowsPerPage + index;
//     const updatedPeople = people.filter((_, i) => i !== realIndex);
//     setPeople(updatedPeople);

//     // Adjust the page if necessary
//     if (updatedPeople.length <= page * rowsPerPage && page > 0) {
//       setPage(page - 1);
//     }
//   };

//   // Handle rows per page change
//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };
//   useEffect(() => {
//     setPaginatedPeople(
//       people.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//     );
//   }, [people, page, rowsPerPage]);
  


//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - people.length) : 0;
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [selectedRole, setSelectedRole] = useState('');
//     const [status, setStatus] = useState('');
  
//     // const toggleDropdown = () => {
//     //   setIsDropdownOpen(!isDropdownOpen);
//     // };
  
//     // const handleRoleSelect = (role) => {
//     //   setSelectedRole(role);
//     //   setIsDropdownOpen(false);
//     // };
//     // const [showUserRoleForm, setShowUserRoleForm] = useState(false);

//     const toggleDropdown = () => {
//       setShowUserRoleForm(!showUserRoleForm);
//     };
//     const [isRoleFormVisible, setRoleFormVisible] = useState(false);

//     // const handleAddUserRole = () => {
//     //   setRoleFormVisible(true);
//     // };
  
//     // const handleCloseForm = () => {
//     //   setRoleFormVisible(false);
//     // };
  
//     // const handleSaveRole = (role, status) => {
//     //   console.log('Role:', role);
//     //   console.log('Status:', status);
//     //   // Implement role saving logic here
//     //   setRoleFormVisible(false);
//     // };
//     const [showUserRoleForm, setShowUserRoleForm] = useState(false);

//     const handleRoleSave = (role, status) => {
//       // Logic to save the role and status
//       console.log('Saved Role:', role);
//       console.log('Saved Status:', status);
  
//       // Close the form after saving
//       setShowUserRoleForm(false);
//     };
  
//     const handleRoleCancel = () => {
//       // Close the form without saving
//       setShowUserRoleForm(false);
//     };
//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       {!isFormVisible ? (
//         <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//           <div className="flex justify-between items-center">
//             <h2 className="text-xl font-semibold">Users</h2>

//             <div className="flex items-center space-x-4">
//           <div className="relative flex flex-col w-[20rem] -ml-4">
//               <label htmlFor="searchName" className="text-sm font-medium"></label>
//               <input
//                 id="searchName"
//                 type="text"
//                 placeholder="Search by Name or Email or Mobile"
//                 value={searchName}
//                 onChange={(e) => setSearchName(e.target.value)}
//                 className="mt-1 p-2 pr-10 border border-gray-300 rounded-md"
//               />
//               <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
//               <IoIosSearch />
//               </div>
//             </div>
//             </div>
//             <ul className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex gap-2 list-none">
//               <li>
//                 <button
//                   type="button"
//                   className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
//                   onClick={handleAddUserClick}
//                 >
//                   <FaPlus aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//                   Add Users
//                 </button>
//               </li>
//               <li>
//                 <button
//                   type="button"
//                   className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700"
//                   onClick={handleExportUsersData}
//                 >
//                   <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//                   Export Users
//                 </button>
//               </li>
//             </ul>
//           </div>

  

//             <TableContainer component={Paper} className="mt-4">
//               <Table>
//                 <TableHead>
//                   <TableRow>
//                     <StyledTableCell>Name</StyledTableCell>
//                     <StyledTableCell>Email</StyledTableCell>
//                     <StyledTableCell>Mobile No</StyledTableCell>
//                     <StyledTableCell>Address</StyledTableCell>
//                     <StyledTableCell>Gender</StyledTableCell>
//                     <StyledTableCell>Actions</StyledTableCell>
//                   </TableRow>
//                 </TableHead>

//                 <TableBody>
//                   {paginatedPeople.map((person, index) => (
//                     <StyledTableRow key={index}>
//                    <StyledTableCell>
//   <div className="flex items-center space-x-2">
//     <Avatar src={person.profileImg} />
//     <span>{person.firstName}</span>
//     <span>{person.lastName}</span>
//   </div>
// </StyledTableCell>


//                       <StyledTableCell>{person.email}</StyledTableCell>
//                       <StyledTableCell>{person.phoneNumber}</StyledTableCell>
//                       <StyledTableCell>
//                         {person.addressLine1}
//                         {person.addressLine2 && `, ${person.addressLine2}`}
//                         <br />
//                         {person.city}, {person.state}, {person.zipCode}
//                       </StyledTableCell>
//                       <StyledTableCell>{person.gender}</StyledTableCell>
//                       {/* <StyledTableCell>
//                         <span
//                           className={`inline-block px-3 py-2 text-xs font-semibold rounded-full ${
//                             person.gender === "Male"
//                               ? "bg-green-100 text-green-800 shadow-md"
//                               : person.gender === "Female"
//                               ? "bg-pink-100 text-pink-800 shadow-md"
//                               : "bg-gray-100 text-gray-800 shadow-md"
//                           }`}
//                         >
//                           {person.gender}
//                         </span>
//                       </StyledTableCell> */}
//                       {/* <StyledTableCell>
//                         <div
//                           className="inline-flex items-center justify-center w-14 h-7 cursor-pointer rounded-lg bg-blue-100 text-blue-800 shadow-md"
//                           onClick={() => handleEditClick(index)}
//                         >
//                           <FaEdit className="w-4 h-4" />
//                         </div>
//                       </StyledTableCell>
//                       <StyledTableCell>
//                         <div
//                           className="inline-flex items-center justify-center w-14 h-7 cursor-pointer rounded-lg bg-pink-100 text-red-500 shadow-md"
//                           onClick={() => handleDeleteClick(index)}
//                         >
//                           <FaTrash className="w-4 h-4" />
//                         </div>

                       
//                       </StyledTableCell> */}
//                       {/* <StyledTableCell>
                     
//                         <button
//                           type="button"
//                           onClick={() => handleEditClick(index)}
//                           className="inline-flex items-center gap-x-1 rounded-md bg-blue-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-blue-500"
//                         >
//                           <AiOutlineEdit aria-hidden="true" className="h-4 w-4" />
//                           Edit
//                         </button>
                    
                     
// </StyledTableCell>
// <StyledTableCell>
// <button
//                           type="button"
//                           onClick={() => handleDeleteClick(index)}
//                           className="inline-flex items-center gap-x-1 ml-2 rounded-md bg-red-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-red-500"
//                         >
//                           <AiOutlineDelete aria-hidden="true" className="h-4 w-4" />
//                           Delete
//                         </button>
// </StyledTableCell> */}

// <StyledTableCell>
//                         <button
//                           type="button"
//                           onClick={() => handleEditClick(index)}
//                           className="inline-flex items-center gap-x-1 rounded-md bg-blue-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-blue-500"
//                         >
//                           <AiOutlineEdit aria-hidden="true" className="h-4 w-4" />
//                           Edit
//                         </button>
//                         <button
//                           type="button"
//                           onClick={() => handleDeleteClick(index)}
//                           className="inline-flex items-center gap-x-1 ml-2 rounded-md bg-red-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-red-500"
//                         >
//                           <AiOutlineDelete aria-hidden="true" className="h-4 w-4" />
//                           Delete
//                         </button>
//                       </StyledTableCell>
//                     </StyledTableRow>
//                   ))}
//                   {emptyRows > 0 && (
//                     <StyledTableRow style={{ height: 53 * emptyRows }}>
//                       <StyledTableCell colSpan={6} />
//                     </StyledTableRow>
//                   )}
//                 </TableBody>
//                 <TableFooter>
//                   <TableRow>
//                     <TablePagination
//                       rowsPerPageOptions={[5, 10, 25]}
//                       colSpan={6}
//                       count={people.length}
//                       rowsPerPage={rowsPerPage}
//                       page={page}
//                       SelectProps={{
//                         inputProps: {
//                           "aria-label": "rows per page",
//                         },
//                         native: true,
//                       }}
//                       onPageChange={handleChangePage}
//                       onRowsPerPageChange={handleChangeRowsPerPage}
//                       ActionsComponent={TablePaginationActions}
//                     />
//                   </TableRow>
//                 </TableFooter>
//               </Table>
//             </TableContainer>
//           </div>
       
//       ) : (
//         <div className="mt-6 bg-white p-6 rounded-lg shadow-md">

// <form onSubmit={handleFormSubmit}>
//   {/* <h2 className="text-xl font-semibold">Users</h2> */}
  
//   <div className="flex justify-between items-center mb-6">
//   <h2 className="text-xl font-semibold mb-4 px-24">Users</h2>
 
//       {/* <button
//         onClick={() => setShowUserRoleForm(true)}
//         // className="bg-blue-500 text-white px-4 py-2 rounded"
//          className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
//       >
//           <FaPlus aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//         User Role
//       </button> */}
// </div>
//     <div>

//       {showUserRoleForm && (
//         <div className="px-16">
//           <UserRoleForm onSave={handleRoleSave} onCancel={handleRoleCancel} />
//         </div>
//       )}
//     </div>

//   <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 px-16 md:px-24">
//     {/* First Name */}
//     <div className="flex items-center">
//       <div className="w-full">
//         <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
//           First Name
//         </label>
//         <input
//           type="text"
//           name="firstName"
//           value={formData?.firstName || ""}
//           onChange={handleFormChange}
//           required
//           className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//         />
//       </div>
//     </div>

//     {/* Address Line 1 */}
//     <div className="flex items-center">
//       <div className="w-full">
//         <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700">
//           Address Line 1
//         </label>
//         <input
//           type="text"
//           name="addressLine1"
//           value={formData?.addressLine1 || ""}
//           onChange={handleFormChange}
//           required
//           className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//         />
//       </div>
//     </div>

//     {/* Last Name */}
//     <div>
//       <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
//         Last Name
//       </label>
//       <input
//         type="text"
//         name="lastName"
//         value={formData?.lastName || ""}
//         onChange={handleFormChange}
//         required
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//       />
//     </div>

//     {/* Address Line 2 */}
//     <div>
//       <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700">
//         Address Line 2
//       </label>
//       <input
//         type="text"
//         name="addressLine2"
//         value={formData?.addressLine2 || ""}
//         onChange={handleFormChange}
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//       />
//     </div>

//     {/* Email */}
//     <div>
//       <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//         Email
//       </label>
//       <input
//         type="email"
//         name="email"
//         value={formData?.email || ""}
//         onChange={handleFormChange}
//         required
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//       />
//     </div>

//     {/* City */}
//     <div>
//       <label htmlFor="city" className="block text-sm font-medium text-gray-700">
//         City
//       </label>
//       <input
//         type="text"
//         name="city"
//         value={formData?.city || ""}
//         onChange={handleFormChange}
//         required
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//       />
//     </div>

//     {/* Phone Number */}
//     <div>
//       <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
//         Phone Number
//       </label>
//       <input
//         type="text"
//         name="phoneNumber"
//         value={formData?.phoneNumber || ""}
//         onChange={handleFormChange}
//         required
//         pattern="\d{10}"
//         title="Phone Number should be 10 digits."
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//       />
//     </div>

//     {/* State */}
//     <div>
//       <label htmlFor="state" className="block text-sm font-medium text-gray-700">
//         State
//       </label>
//       <input
//         type="text"
//         name="state"
//         value={formData?.state || ""}
//         onChange={handleFormChange}
//         required
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//       />
//     </div>

//     {/* Gender */}
//     <div>
//       <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
//         Gender
//       </label>
//       <select
//         name="gender"
//         value={formData?.gender || ""}
//         onChange={handleFormChange}
//         required
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 sm:text-sm"
//       >
//         <option value="">Select Gender</option>
//         <option value="Male">Male</option>
//         <option value="Female">Female</option>
//       </select>
//     </div>

//     {/* Zip Code */}
//     <div>
//       <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
//         Zip Code
//       </label>
//       <input
//         type="text"
//         name="zipCode"
//         value={formData?.zipCode || ""}
//         onChange={handleFormChange}
//         required
//         pattern="\d{5,6}"
//         title="Zip Code should be 5 or 6 digits."
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//       />
//     </div>

//     {/* Role ID */}
//     <div>
//       <label htmlFor="roleId" className="block text-sm font-medium text-gray-700">
//         Role ID
//       </label>
//       <select
//         name="roleId"
//         value={formData?.roleId || ""}
//         onChange={handleFormChange}
//         required
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//       >
//         <option value="" disabled>Select a role</option>
//         <option value="admin">Admin</option>
//         <option value="store user">Store User</option>
//         <option value="finance">Finance</option>
//         <option value="production">Production</option>
//         <option value="technical">Technical</option>
//       </select>
//     </div>

//    {/* Profile Image */}
// <div className="flex items-center">
//   <div>
//     <label htmlFor="profileImg" className="block text-sm font-medium text-gray-700">
//       Profile Image
//     </label>
//     <input
//       type="file"
//       accept="image/*"
//       onChange={handleImageChange}
//       className="mt-1 block w-auto text-sm text-gray-500"
//     />
//   </div>

//   {formData?.profileImg && (
//     <img
//       src={formData.profileImg}
//       alt="Profile"
//       className="w-20 h-20 object-cover rounded-full"
//     />
//   )}
// </div>



//     {/* Comments */}
//     <div>
//       <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
//         Comments
//       </label>
//       <textarea
//         name="comments"
//         value={formData?.comments || ""}
//         onChange={handleFormChange}
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//         rows="3"
//       />
//     </div>
//   </div>

//   <div className="mt-6 flex justify-end gap-4">
//     <button
//       type="submit"
//       className="inline-flex justify-center rounded-md border border-transparent bg-custom-darkblue py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-custom-lightblue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//     >
//       Save
//     </button>
//     <button
//                 type="button"
//                 onClick={handleCancel}
//                 className="inline-flex justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-red-200"
//               >
//                 Cancel
//               </button>
//   </div>
// </form>


//         </div>
//       )}
//     </div>
//   );
// }
// export default User;



// import React, { useState,useEffect} from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
// import TableFooter from "@mui/material/TableFooter";
// import TablePagination from "@mui/material/TablePagination";
// import FirstPageIcon from "@mui/icons-material/FirstPage";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// import LastPageIcon from "@mui/icons-material/LastPage";
// import { useTheme } from "@mui/material/styles";
// import p1 from "../../assests/profile/p1.jpeg";
// import p2 from "../../assests/profile/p2.jpeg";
// import p3 from "../../assests/profile/p3.jpeg";
// import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
// import * as XLSX from "xlsx";
// import PropTypes from "prop-types";
// import { FaTable } from "react-icons/fa";
// import { FaFilter } from 'react-icons/fa';
// import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
// import { IoIosSearch } from "react-icons/io";
// // import UserRoleForm from "./UserRole";


// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     // backgroundColor: theme.palette.grey[200],
//     // color: theme.palette.common.black,
//     // fontWeight: 'bold',
//     [`&.${tableCellClasses.head}`]: {
//       backgroundColor: '#003375', // Dark blue color
//       color: theme.palette.common.white,
//       fontWeight: 'bold',
//     },
//     [`&.${tableCellClasses.body}`]: {
//       fontSize: 14,
//     },
//   },
  
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(even)": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

// const initialPeople = [
//   {
//     firstName: "Jane",
//     lastName: "Smith",
//     title: "Chennai",
//     email: "jane.smith@example.com",
//     phoneNumber: "7702253548",
//     gender: "Male",
//     profileImg: p1,
//     addressLine1: "123 Main St",
//     addressLine2: "Apt 4B",
//     city: "Chennai",
//     state: "Tamil Nadu",
//     country: "India",
//   },
//   {
//     firstName: "Alice",
//     lastName: "Johnson",
//     title: "Hyderabad",
//     email: "alice.johnson@example.com",
//     phoneNumber: "7702253549",
//     gender: "Female",
//     profileImg: p2,
//     addressLine1: "456 Oak St",
//     addressLine2: "Suite 12",
//     city: "Hyderabad",
//     state: "Telangana",
//     country: "India",
//   },
//   {
//     firstName: "Robert",
//     lastName: "Brown",
//     title: "Mumbai",
//     email: "robert.brown@example.com",
//     phoneNumber: "7702253550",
//     gender: "Female",
//     profileImg: p3,
//     addressLine1: "789 Pine St",
//     addressLine2: "",
//     city: "Mumbai",
//     state: "Maharashtra",
//     country: "India",
//   },
//   {
//     firstName: "Michael",
//     lastName: "Davis",
//     title: "Delhi",
//     email: "michael.davis@example.com",
//     phoneNumber: "7702253551",
//     gender: "Male",
//     addressLine1: "101 Maple St",
//     addressLine2: "Apt 3C",
//     city: "Delhi",
//     state: "Delhi",
//     country: "India",
//   },
// ];

// function TablePaginationActions(props) {
//   const { count, page, rowsPerPage, onPageChange } = props;
//   const theme = useTheme();

//   const handleFirstPageButtonClick = (event) => {
//     onPageChange(event, 0);
//   };

//   const handleBackButtonClick = (event) => {
//     onPageChange(event, page - 1);
//   };

//   const handleNextButtonClick = (event) => {
//     onPageChange(event, page + 1);
//   };

//   const handleLastPageButtonClick = (event) => {
//     onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
//   };

//   return (
//     <Box sx={{ flexShrink: 0, ml: 2.5 }}>
//       <IconButton
//         onClick={handleFirstPageButtonClick}
//         disabled={page === 0}
//         aria-label="first page"
//       >
//         {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
       
//       </IconButton>
//         <IconButton
//         onClick={handleBackButtonClick}
//         disabled={page === 0}
//         aria-label="previous page"
//       >
//         {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//       </IconButton>
//       <IconButton
//         onClick={handleNextButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="next page"
//       >
//         {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//       </IconButton>
//       <IconButton
//         onClick={handleLastPageButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="last page"
//       >
//         {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
//       </IconButton>
//     </Box>
//   );
// }

// TablePaginationActions.propTypes = {
//   count: PropTypes.number.isRequired,
//   onPageChange: PropTypes.func.isRequired,
//   page: PropTypes.number.isRequired,
//   rowsPerPage: PropTypes.number.isRequired,
// };

// function User() {
//   const [people, setPeople] = useState(initialPeople);
//   const [formData, setFormData] = useState(null);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [searchName, setSearchName] = useState("");
//   const [searchEmail, setSearchEmail] = useState("");

//   const [role, setRole] = useState('');
//   const [showDropdown, setShowDropdown] = useState(false);

//   const handleRoleChange = (event) => {
//     setRole(event.target.value);
//   };

//   const handleStatusChange = (event) => {
//     setStatus(event.target.value);
//   };

  

//   // Handle form changes
//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle image upload
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setFormData({
//           ...formData,
//           profileImg: reader.result,
//         });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle form submission
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (editingIndex !== null) {
//       const updatedPeople = [...people];
//       updatedPeople[editingIndex] = formData;
//       setPeople(updatedPeople);
//       setEditingIndex(null);
//     } else {
//       setPeople([...people, formData]);
//     }
//     setFormData(null);
//     setIsFormVisible(false);
//   };

//   // Handle cancel button click
//   const handleCancel = () => {
//     setFormData(null);
//     setEditingIndex(null);
//     setIsFormVisible(false);
//   };

//   // Handle add user button click
//   const handleAddUserClick = () => {
//     setFormData({
//       name: "",
//       title: "",
//       email: "",
//       role: "",
//       gender: "",
//       profileImg: "",
//       addressLine1: "",
//       addressLine2: "",
//       city: "",
//       state: "",
//       country: "",
//     });
//     setEditingIndex(null);
//     setIsFormVisible(true);
//   };

//   // const handleSearch = (event) => {
//   //   const { name, value } = event.target;
//   //   if (name === "searchName") {
//   //     setSearchName(value);
//   //   } else if (name === "searchEmail") {
//   //     setSearchEmail(value);
//   //   }
//   // };
//   //   // Example if using useState
// const [paginatedPeople, setPaginatedPeople] = useState([]);


// // Handle search functionality
// const handleSearch = () => {
//   const filteredPeople = people.filter(person =>
//     person.name.toLowerCase().includes(searchName.toLowerCase()) &&
//     person.email.toLowerCase().includes(searchEmail.toLowerCase())
//   );
//   setPaginatedPeople(filteredPeople.slice(0, rowsPerPage));
// };

  
//   const exportToExcel = (data, fileName) => {
//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
//     XLSX.writeFile(workbook, `${fileName}.xlsx`);
//   };

//   const handleExportUsersData = () => {
//     exportToExcel(people, "Customers");
//   };

//   // Handle page change
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   // Handle edit button click
//   const handleEditClick = (index) => {
//     const realIndex = page * rowsPerPage + index;
//     setFormData(people[realIndex]);
//     setEditingIndex(realIndex);
//     setIsFormVisible(true);
//   };

//   // Handle delete button click
//   const handleDeleteClick = (index) => {
//     const realIndex = page * rowsPerPage + index;
//     const updatedPeople = people.filter((_, i) => i !== realIndex);
//     setPeople(updatedPeople);

//     // Adjust the page if necessary
//     if (updatedPeople.length <= page * rowsPerPage && page > 0) {
//       setPage(page - 1);
//     }
//   };

//   // Handle rows per page change
//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };
//   useEffect(() => {
//     setPaginatedPeople(
//       people.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//     );
//   }, [people, page, rowsPerPage]);
  


//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - people.length) : 0;
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [selectedRole, setSelectedRole] = useState('');
//     const [status, setStatus] = useState('');
  
//     // const toggleDropdown = () => {
//     //   setIsDropdownOpen(!isDropdownOpen);
//     // };
  
//     // const handleRoleSelect = (role) => {
//     //   setSelectedRole(role);
//     //   setIsDropdownOpen(false);
//     // };
//     // const [showUserRoleForm, setShowUserRoleForm] = useState(false);

//     const toggleDropdown = () => {
//       setShowUserRoleForm(!showUserRoleForm);
//     };
//     const [isRoleFormVisible, setRoleFormVisible] = useState(false);

//     // const handleAddUserRole = () => {
//     //   setRoleFormVisible(true);
//     // };
  
//     // const handleCloseForm = () => {
//     //   setRoleFormVisible(false);
//     // };
  
//     // const handleSaveRole = (role, status) => {
//     //   console.log('Role:', role);
//     //   console.log('Status:', status);
//     //   // Implement role saving logic here
//     //   setRoleFormVisible(false);
//     // };
//     const [showUserRoleForm, setShowUserRoleForm] = useState(false);

//     const handleRoleSave = (role, status) => {
//       // Logic to save the role and status
//       console.log('Saved Role:', role);
//       console.log('Saved Status:', status);
  
//       // Close the form after saving
//       setShowUserRoleForm(false);
//     };
  
//     const handleRoleCancel = () => {
//       // Close the form without saving
//       setShowUserRoleForm(false);
//     };
//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       {!isFormVisible ? (
//         <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//           <div className="flex justify-between items-center">
//             <h2 className="text-xl font-semibold">Users</h2>

//             <div className="flex items-center space-x-4">
//           <div className="relative flex flex-col w-[20rem] -ml-4">
//               <label htmlFor="searchName" className="text-sm font-medium"></label>
//               <input
//                 id="searchName"
//                 type="text"
//                 placeholder="Search by Name or Email or Mobile"
//                 value={searchName}
//                 onChange={(e) => setSearchName(e.target.value)}
//                 className="mt-1 p-2 pr-10 border border-gray-300 rounded-md"
//               />
//               <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
//               <IoIosSearch />
//               </div>
//             </div>
//             </div>
//             <ul className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex gap-2 list-none">
//               <li>
//                 <button
//                   type="button"
//                   className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
//                   onClick={handleAddUserClick}
//                 >
//                   <FaPlus aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//                   Add Users
//                 </button>
//               </li>
//               <li>
//                 <button
//                   type="button"
//                   className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700"
//                   onClick={handleExportUsersData}
//                 >
//                   <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//                   Export Users
//                 </button>
//               </li>
//             </ul>
//           </div>

  

//             <TableContainer component={Paper} className="mt-4">
//               <Table>
//                 <TableHead>
//                   <TableRow>
//                     <StyledTableCell>Name</StyledTableCell>
//                     <StyledTableCell>Email</StyledTableCell>
//                     <StyledTableCell>Mobile No</StyledTableCell>
//                     <StyledTableCell>Address</StyledTableCell>
//                     <StyledTableCell>Gender</StyledTableCell>
//                     <StyledTableCell>Actions</StyledTableCell>
//                   </TableRow>
//                 </TableHead>

//                 <TableBody>
//                   {paginatedPeople.map((person, index) => (
//                     <StyledTableRow key={index}>
//                    <StyledTableCell>
//   <div className="flex items-center space-x-2">
//     <Avatar src={person.profileImg} />
//     <span class="py-4  text-sm text-gray-500">{person.firstName}</span>
//     <span class="py-4  text-sm text-gray-500">{person.lastName}</span>
//   </div>
// </StyledTableCell>


//                       <StyledTableCell class="py-4 px-6 text-sm text-gray-500">{person.email}</StyledTableCell>
//                       <StyledTableCell class="py-4 px-6 text-sm text-gray-500">{person.phoneNumber}</StyledTableCell>
//                       <StyledTableCell class="py-4 px-6 text-sm text-gray-500">
//                         {person.addressLine1}
//                         {person.addressLine2 && `, ${person.addressLine2}`}
//                         <br />
//                         {person.city}, {person.state}, {person.zipCode}
//                       </StyledTableCell>
//                       {/* <StyledTableCell>{person.gender}</StyledTableCell> */}
//                       <StyledTableCell>
//                         <span
//                           className={`inline-block px-3 py-2 text-xs font-semibold rounded-full ${
//                             person.gender === "Male"
//                               ? "bg-green-100 text-green-800 shadow-md"
//                               : person.gender === "Female"
//                               ? "bg-pink-100 text-pink-800 shadow-md"
//                               : "bg-gray-100 text-gray-800 shadow-md"
//                           }`}
//                         >
//                           {person.gender}
//                         </span>
//                       </StyledTableCell>
//                       {/* <StyledTableCell>
//                         <div
//                           className="inline-flex items-center justify-center w-14 h-7 cursor-pointer rounded-lg bg-blue-100 text-blue-800 shadow-md"
//                           onClick={() => handleEditClick(index)}
//                         >
//                           <FaEdit className="w-4 h-4" />
//                         </div>
//                       </StyledTableCell>
//                       <StyledTableCell>
//                         <div
//                           className="inline-flex items-center justify-center w-14 h-7 cursor-pointer rounded-lg bg-pink-100 text-red-500 shadow-md"
//                           onClick={() => handleDeleteClick(index)}
//                         >
//                           <FaTrash className="w-4 h-4" />
//                         </div>

                       
//                       </StyledTableCell> */}
//                       {/* <StyledTableCell>
                     
//                         <button
//                           type="button"
//                           onClick={() => handleEditClick(index)}
//                           className="inline-flex items-center gap-x-1 rounded-md bg-blue-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-blue-500"
//                         >
//                           <AiOutlineEdit aria-hidden="true" className="h-4 w-4" />
//                           Edit
//                         </button>
                    
                     
// </StyledTableCell>
// <StyledTableCell>
// <button
//                           type="button"
//                           onClick={() => handleDeleteClick(index)}
//                           className="inline-flex items-center gap-x-1 ml-2 rounded-md bg-red-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-red-500"
//                         >
//                           <AiOutlineDelete aria-hidden="true" className="h-4 w-4" />
//                           Delete
//                         </button>
// </StyledTableCell> */}

// <StyledTableCell>
//                         <button
//                           type="button"
//                           onClick={() => handleEditClick(index)}
//                           className="inline-flex items-center gap-x-1 rounded-md bg-blue-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-blue-500"
//                         >
//                           <AiOutlineEdit aria-hidden="true" className="h-4 w-4" />
//                           Edit
//                         </button>
//                         <button
//                           type="button"
//                           onClick={() => handleDeleteClick(index)}
//                           className="inline-flex items-center gap-x-1 ml-2 rounded-md bg-red-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-red-500"
//                         >
//                           <AiOutlineDelete aria-hidden="true" className="h-4 w-4" />
//                           Delete
//                         </button>
//                       </StyledTableCell>
//                     </StyledTableRow>
//                   ))}
//                   {emptyRows > 0 && (
//                     <StyledTableRow style={{ height: 53 * emptyRows }}>
//                       <StyledTableCell colSpan={6} />
//                     </StyledTableRow>
//                   )}
//                 </TableBody>
//                 <TableFooter>
//                   <TableRow>
//                     <TablePagination
//                     class="py-4 px-6 text-sm text-gray-500"
//                       rowsPerPageOptions={[5, 10, 25]}
//                       colSpan={6}
//                       count={people.length}
//                       rowsPerPage={rowsPerPage}
//                       page={page}
//                       SelectProps={{
//                         inputProps: {
//                           "aria-label": "rows per page",
//                         },
//                         native: true,
//                       }}
//                       onPageChange={handleChangePage}
//                       onRowsPerPageChange={handleChangeRowsPerPage}
//                       ActionsComponent={TablePaginationActions}
//                     />
//                   </TableRow>
//                 </TableFooter>
//               </Table>
//             </TableContainer>
//           </div>
       
//       ) : (
//         <div className="mt-6 bg-white p-6 rounded-lg shadow-md">

// <form onSubmit={handleFormSubmit}>
//   {/* <h2 className="text-xl font-semibold">Users</h2> */}
  
//   <div className="flex justify-between items-center mb-6">
//   <h2 className="text-xl font-semibold mb-4 px-24">Users</h2>
 
//       {/* <button
//         onClick={() => setShowUserRoleForm(true)}
//         // className="bg-blue-500 text-white px-4 py-2 rounded"
//          className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
//       >
//           <FaPlus aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//         User Role
//       </button> */}
// </div>
//     {/* <div>

//       {showUserRoleForm && (
//         <div className="px-16">
//           <UserRoleForm onSave={handleRoleSave} onCancel={handleRoleCancel} />
//         </div>
//       )}
//     </div> */}

//   <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 px-16 md:px-24">
//     {/* First Name */}
//     <div className="flex items-center">
//       <div className="w-full">
//         <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
//           First Name
//         </label>
//         <input
//           type="text"
//           name="firstName"
//           value={formData?.firstName || ""}
//           onChange={handleFormChange}
//           required
//           className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//         />
//       </div>
//     </div>

//     {/* Address Line 1 */}
//     <div className="flex items-center">
//       <div className="w-full">
//         <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700">
//           Address Line 1
//         </label>
//         <input
//           type="text"
//           name="addressLine1"
//           value={formData?.addressLine1 || ""}
//           onChange={handleFormChange}
//           required
//           className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//         />
//       </div>
//     </div>

//     {/* Last Name */}
//     <div>
//       <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
//         Last Name
//       </label>
//       <input
//         type="text"
//         name="lastName"
//         value={formData?.lastName || ""}
//         onChange={handleFormChange}
//         required
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//       />
//     </div>

//     {/* Address Line 2 */}
//     <div>
//       <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700">
//         Address Line 2
//       </label>
//       <input
//         type="text"
//         name="addressLine2"
//         value={formData?.addressLine2 || ""}
//         onChange={handleFormChange}
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//       />
//     </div>

//     {/* Email */}
//     <div>
//       <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//         Email
//       </label>
//       <input
//         type="email"
//         name="email"
//         value={formData?.email || ""}
//         onChange={handleFormChange}
//         required
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//       />
//     </div>

//     {/* City */}
//     <div>
//       <label htmlFor="city" className="block text-sm font-medium text-gray-700">
//         City
//       </label>
//       <input
//         type="text"
//         name="city"
//         value={formData?.city || ""}
//         onChange={handleFormChange}
//         required
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//       />
//     </div>

//     {/* Phone Number */}
//     <div>
//       <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
//         Phone Number
//       </label>
//       <input
//         type="text"
//         name="phoneNumber"
//         value={formData?.phoneNumber || ""}
//         onChange={handleFormChange}
//         required
//         pattern="\d{10}"
//         title="Phone Number should be 10 digits."
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//       />
//     </div>

//     {/* State */}
//     <div>
//       <label htmlFor="state" className="block text-sm font-medium text-gray-700">
//         State
//       </label>
//       <input
//         type="text"
//         name="state"
//         value={formData?.state || ""}
//         onChange={handleFormChange}
//         required
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//       />
//     </div>

//     {/* Gender */}
//     <div>
//       <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
//         Gender
//       </label>
//       <select
//         name="gender"
//         value={formData?.gender || ""}
//         onChange={handleFormChange}
//         required
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 sm:text-sm"
//       >
//         <option value="">Select Gender</option>
//         <option value="Male">Male</option>
//         <option value="Female">Female</option>
//       </select>
//     </div>

//     {/* Zip Code */}
//     <div>
//       <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
//         Zip Code
//       </label>
//       <input
//         type="text"
//         name="zipCode"
//         value={formData?.zipCode || ""}
//         onChange={handleFormChange}
//         required
//         pattern="\d{5,6}"
//         title="Zip Code should be 5 or 6 digits."
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//       />
//     </div>

//     {/* Role ID */}
//     <div>
//       <label htmlFor="roleId" className="block text-sm font-medium text-gray-700">
//         Role ID
//       </label>
//       <select
//         name="roleId"
//         value={formData?.roleId || ""}
//         onChange={handleFormChange}
//         required
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//       >
//         <option value="" disabled>Select a role</option>
//         <option value="admin">Admin</option>
//         <option value="store user">Store User</option>
//         <option value="finance">Finance</option>
//         <option value="production">Production</option>
//         <option value="technical">Technical</option>
//       </select>
//     </div>

//    {/* Profile Image */}
// <div className="flex items-center">
//   <div>
//     <label htmlFor="profileImg" className="block text-sm font-medium text-gray-700">
//       Profile Image
//     </label>
//     <input
//       type="file"
//       accept="image/*"
//       onChange={handleImageChange}
//       className="mt-1 block w-auto text-sm text-gray-500"
//     />
//   </div>

//   {formData?.profileImg && (
//     <img
//       src={formData.profileImg}
//       alt="Profile"
//       className="w-20 h-20 object-cover rounded-full"
//     />
//   )}
// </div>



//     {/* Comments */}
//     <div>
//       <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
//         Comments
//       </label>
//       <textarea
//         name="comments"
//         value={formData?.comments || ""}
//         onChange={handleFormChange}
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//         rows="3"
//       />
//     </div>
//   </div>

//   <div className="mt-6 flex justify-end gap-4">
//     <button
//       type="submit"
//       className="inline-flex justify-center rounded-md border border-transparent bg-custom-darkblue py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-custom-lightblue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//     >
//       Save
//     </button>
//     <button
//                 type="button"
//                 onClick={handleCancel}
//                 className="inline-flex justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-red-200"
//               >
//                 Cancel
//               </button>
//   </div>
// </form>


//         </div>
//       )}
//     </div>
//   );
// }
// export default User;




import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { useTheme } from "@mui/material/styles";
import { FaPlus, FaTable } from "react-icons/fa";
import * as XLSX from "xlsx";
import PropTypes from "prop-types";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import axios from "axios";
import { UserContext } from "../../Context/userContext";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#003375",
    color: theme.palette.common.white,
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function User() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalUsers, setTotalUsers] = useState(0);
  const [searchName, setSearchName] = useState("");
  const navigate = useNavigate();
  const { setUserDetails } = useContext(UserContext);
  const [selectedStore, setSelectedStore] = useState('');

  // Mock data for store names
  const storeNames = [
    { id: '1', name: 'Admin' },
  { id: '2', name: 'Store User' },
  { id: '3', name: ' Finance' },
  { id: '4', name: 'Production' },
  { id: '5', name: 'Techinical' },
  ];

  // const getAllUsers = async (pageNum, pageSize, search = "") => {
  //   try {
  //     const response = await axios.get(
  //       "https://imlystudios-backend-mqg4.onrender.com/api/users/getAllUsers",
  //       {
  //         params: {
  //           page: pageNum + 1,
  //           limit: pageSize,
  //           SearchText: search
  //         }
  //       }
  //     );
  //     return {
  //       users: response.data.users,
  //       totalCount: response.data.totalItems
  //     };
  //   } catch (error) {
  //     console.error("Error fetching users:", error);
  //     throw error;
  //   }
  // };
  const getAllUsers = async (pageNum, pageSize, search = "") => {
    try {
      // Retrieve the token from localStorage
      const token = localStorage.getItem('token');
      console.log(token);
      if (!token) {
        throw new Error('No authentication token found');
      }
  
      const response = await axios.get(
        "https://imlystudios-backend-mqg4.onrender.com/api/users/getAllUsers",
        {
          params: {
            page: pageNum + 1,
            limit: pageSize,
            SearchText: search
          },
          headers: {
            'Authorization': `Bearer ${token}`, // Add the token to the request
            'Content-Type': 'application/json'
          }
        }
      );
  
      return {
        users: response.data.users,
        totalCount: response.data.totalItems
      };
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  };
  
  useEffect(() => {
    fetchUsers();
  }, [page, rowsPerPage, searchName]);

  const fetchUsers = async () => {
    try {
      const { users, totalCount } = await getAllUsers(page, rowsPerPage, searchName);
      setUsers(users);
      setTotalUsers(totalCount);
    } catch (error) {
      console.error("Failed to fetch users", error);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const getUserById = async (userId) => {
  //   try {
  //     const response = await axios.get(
  //       `https://imlystudios-backend-mqg4.onrender.com/api/users/getUserById/${userId}`
  //     );
  //     return response.data;
  //   } catch (error) {
  //     console.error("Error fetching user:", error);
  //     throw error;
  //   }
  // };

  const getUserById = async (userId) => {
    try {
      // Retrieve the token from localStorage
      const token = localStorage.getItem('token');
      console.log(token);
      if (!token) {
        throw new Error('No authentication token found');
      }
  
      const response = await axios.get(
        `https://imlystudios-backend-mqg4.onrender.com/api/users/getUserById/${userId}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`, // Pass token in the headers
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  };
  

  // const deleteUserById = async (userId) => {
  //   try {
   
  //     const response = await axios.delete(
  //       `https://imlystudios-backend-mqg4.onrender.com/api/users/deleteUser/${userId}`
  //     );
  //     return response.data;
  //   } catch (error) {
  //     console.error("Error deleting user:", error);
  //     throw error;
  //   }
  // };

  const deleteUserById = async (userId) => {
    try {
      // Retrieve the token from localStorage
      const token = localStorage.getItem('token');
      console.log(token);
      if (!token) {
        throw new Error('No authentication token found');
      }
  
      const response = await axios.delete(
        `https://imlystudios-backend-mqg4.onrender.com/api/users/deleteUser/${userId}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`, // Pass token in the headers
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  };
  

  const handleEditClick = async (userId) => {
    try {
      const userDetails = await getUserById(userId);
      setUserDetails(userDetails);
      navigate("/userform");
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const handleDeleteClick = async (userId) => {
    try {
      await deleteUserById(userId);
      fetchUsers(); // Refresh the user list after deletion
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleAddUserClick = () => {
    setUserDetails(null);
    navigate("/userform");
  };

  const exportToExcel = (data, fileName) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  const handleExportUsersData = async () => {
    try {
      const { users } = await getAllUsers(0, totalUsers); // Fetch all users for export
      exportToExcel(users, "Customers");
    } catch (error) {
      console.error("Error exporting users data:", error);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Users</h2>

          <div className="flex items-center space-x-4">
            <div className="relative flex flex-col w-[20rem] -ml-4">
              <input
                id="searchName"
                type="text"
                placeholder="Search by Name, Email or Mobile"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                className="mt-1 p-2 pr-10 border border-gray-300 rounded-md"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <IoIosSearch />
              </div>
            </div>
            <div className="ml-4">
  <label htmlFor="storeName" className="text-sm font-medium"></label>
  <select
    id="storeName"
    value={selectedStore}
    onChange={(e) => setSelectedStore(e.target.value)}
    className="mt-1 p-2 border border-gray-300 rounded-md w-64" // Updated width
  >
    <option value="">Select Store Name</option>
    {storeNames.map((store) => (
      <option key={store.id} value={store.name}>
        {store.name}
      </option>
    ))}
  </select>
</div>

          </div>
          <ul className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex gap-2 list-none">
            <li>
              <button
                type="button"
                className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                onClick={handleAddUserClick}
              >
                <FaPlus aria-hidden="true" className="-ml-0.5 h-4 w-4" />
                Add Users
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700"
                onClick={handleExportUsersData}
              >
                <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
                Export Users
              </button>
            </li>
          </ul>
        </div>
        <TableContainer component={Paper} className="mt-4">
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Mobile No</StyledTableCell>
                <StyledTableCell>Address</StyledTableCell>
                <StyledTableCell>Gender</StyledTableCell>
                <StyledTableCell>Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((person) => (
                <StyledTableRow key={person.UserID}>
                  <StyledTableCell>
                    <div className="flex items-center space-x-2">
                      <img
                        src={person.ProfileImage}
                        alt="Profile"
                        className="h-24 w-24 rounded-full object-cover"
                      />
                      <span>{person.FirstName}</span>
                      <span>{person.LastName}</span>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell>{person.Email}</StyledTableCell>
                  <StyledTableCell>{person.PhoneNumber}</StyledTableCell>
                  <StyledTableCell>
                    {person.Address?.AddressLine1}
                    {person.Address?.AddressLine2 && `, ${person.Address.AddressLine2}`}
                    <br />
                    {person.Address?.CityID}, {person.Address?.StateID}, {person.Address?.ZipCode}
                  </StyledTableCell>
                  <StyledTableCell>
                    <span
                      className={`inline-block px-3 py-2 text-xs font-semibold rounded-full ${
                        person.Gender === "M"
                          ? "bg-green-100 text-green-800 shadow-md"
                          : person.Gender === "F"
                          ? "bg-pink-100 text-pink-800 shadow-md"
                          : "bg-gray-100 text-gray-800 shadow-md"
                      }`}
                    >
                      {person.Gender}
                    </span>
                  </StyledTableCell>
                  <StyledTableCell>
                    <button
                      type="button"
                      onClick={() => handleEditClick(person.UserID)}
                      className="inline-flex items-center gap-x-1 rounded-md bg-blue-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-blue-500"
                    >
                      <AiOutlineEdit aria-hidden="true" className="h-4 w-4" />
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteClick(person.UserID)}
                      className="inline-flex items-center gap-x-1 ml-2 rounded-md bg-red-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-red-500"
                    >
                      <AiOutlineDelete aria-hidden="true" className="h-4 w-4" />
                      Delete
                    </button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[10, 20, 25]}
                  colSpan={6}
                  count={totalUsers}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default User;