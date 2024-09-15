// import React, { useState } from 'react';
// import * as XLSX from 'xlsx';
// import { FaTable, FaFilePdf, FaPrint } from 'react-icons/fa';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// const initialPayments = [
//   { 
//     name: 'Anil', 
//     mobileNo: '+91 9606032020',
//     itemType: 'Electronics',
//     advance: 1000,
//     total: 5000,
//     balanceAmount: 4000,
//     storeName: 'Store A'
//   },
//   { 
//     name: 'Peter', 
//     mobileNo: '+91 9606032021',
//     itemType: 'Furniture',
//     advance: 1500,
//     total: 6000,
//     balanceAmount: 4500,
//     storeName: 'Store B'
//   },
//   { 
//     name: 'Arief', 
//     mobileNo: '+91 9606032022',
//     itemType: 'Clothing',
//     advance: 2000,
//     total: 7000,
//     balanceAmount: 5000,
//     storeName: 'Store C'
//   },
//   { 
//     name: 'Ravi', 
//     mobileNo: '+91 9606032023',
//     itemType: 'Appliances',
//     advance: 2500,
//     total: 8000,
//     balanceAmount: 5500,
//     storeName: 'Store D'
//   },
//   { 
//     name: 'Ram', 
//     mobileNo: '+91 9606032024',
//     itemType: 'Books',
//     advance: 3000,
//     total: 9000,
//     balanceAmount: 6000,
//     storeName: 'Store E'
//   },
// ];

// export default function Payments() {
//   const [payments, setPayments] = useState(initialPayments);
//   const [newPayment, setNewPayment] = useState({
//     name: '',
//     mobileNo: '',
//     itemType: '',
//     advance: '',
//     total: '',
//     balanceAmount: '',
//     storeName: ''
//   });

//   const handleExportPaymentsData = () => {
//     exportToExcel(payments, 'Payments');
//   };

//   const handleExportToPDF = () => {
//     const doc = new jsPDF();
//     doc.text('Payments Report', 14, 16);
//     doc.autoTable({
//       head: [['Name', 'Mobile No', 'Item Type', 'Advance', 'Total', 'Balance Amount', 'Store Name']],
//       body: payments.map(payment => [
//         payment.name, 
//         payment.mobileNo, 
//         payment.itemType, 
//         payment.advance, 
//         payment.total, 
//         payment.balanceAmount,
//         payment.storeName
//       ]),
//       startY: 20,
//     });
//     doc.save('Payments_Report.pdf');
//   };

//   const handlePrint = () => {
//     const printableContent = document.getElementById('printableTable').innerHTML;
//     const newWindow = window.open('', '', 'height=600,width=800');
//     newWindow.document.write('<html><head><title>Print Payments Report</title></head><body>');
//     newWindow.document.write(printableContent);
//     newWindow.document.write('</body></html>');
//     newWindow.document.close();
//     newWindow.print();
//   };

//   const exportToExcel = (data, fileName) => {
//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
//     XLSX.writeFile(workbook, `${fileName}.xlsx`);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewPayment((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleCreate = () => {
//     setPayments((prev) => [...prev, newPayment]);
//     setNewPayment({
//       name: '',
//       mobileNo: '',
//       itemType: '',
//       advance: '',
//       total: '',
//       balanceAmount: '',
//       storeName: ''
//     });
//   };

//   return (
//     <div className="p-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       <div className="sm:flex sm:items-center">
//         <div className="sm:flex-auto">
//           <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900">Payments</h2>
//           <p className="mt-2 text-sm text-gray-700">
//             A list of all payment details including name, mobile number, item type, advance, total, balance amount, and store name.
//           </p>
//         </div>
//         <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
//           <div className="flex gap-x-4">
//             <button
//               type="button"
//               onClick={handleExportPaymentsData}
//               className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//               Export to Excel
//             </button>
//             <button
//               type="button"
//               onClick={handleExportToPDF}
//               className="inline-flex items-center gap-x-1.5 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               <FaFilePdf aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//               Export to PDF
//             </button>
//             <button
//               type="button"
//               onClick={handlePrint}
//               className="inline-flex items-center gap-x-1.5 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               <FaPrint aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//               Print
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="mt-8 flow-root">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div id="printableTable" className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <table className="min-w-full divide-y divide-gray-300">
//               <thead>
//                 <tr>
//                   <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Name</th>
//                   <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Mobile No</th>
//                   <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Item Type</th>
//                   <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Advance</th>
//                   <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Total</th>
//                   <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Balance Amount</th>
//                   <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Store Name</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {payments.map((payment, index) => (
//                   <tr key={index}>
//                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{payment.name}</td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{payment.mobileNo}</td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{payment.itemType}</td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">₹{payment.advance}</td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">₹{payment.total}</td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">₹{payment.balanceAmount}</td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{payment.storeName}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//       <div className="mt-8">
//         <h3 className="text-lg font-medium text-gray-900">Add New Payment</h3>
//         <div className="mt-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 value={newPayment.name}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border rounded p-2"
//               />
//             </div>
//             <div>
//               <label htmlFor="mobileNo" className="block text-sm font-medium text-gray-700">Mobile No</label>
//               <input
//                 type="text"
//                 name="mobileNo"
//                 id="mobileNo"
//                 value={newPayment.mobileNo}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border rounded p-2"
//               />
//             </div>
//             <div>
//               <label htmlFor="itemType" className="block text-sm font-medium text-gray-700">Item Type</label>
//               <input
//                 type="text"
//                 name="itemType"
//                 id="itemType"
//                 value={newPayment.itemType}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border rounded p-2"
//               />
//             </div>
//             <div>
//               <label htmlFor="advance" className="block text-sm font-medium text-gray-700">Advance</label>
//               <input
//                 type="number"
//                 name="advance"
//                 id="advance"
//                 value={newPayment.advance}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border rounded p-2"
//               />
//             </div>
//             <div>
//               <label htmlFor="total" className="block text-sm font-medium text-gray-700">Total</label>
//               <input
//                 type="number"
//                 name="total"
//                 id="total"
//                 value={newPayment.total}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border rounded p-2"
//               />
//             </div>
//             <div>
//               <label htmlFor="balanceAmount" className="block text-sm font-medium text-gray-700">Balance Amount</label>
//               <input
//                 type="number"
//                 name="balanceAmount"
//                 id="balanceAmount"
//                 value={newPayment.balanceAmount}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border rounded p-2"
//               />
//             </div>
//             <div>
//               <label htmlFor="storeName" className="block text-sm font-medium text-gray-700">Store Name</label>
//               <input
//                 type="text"
//                 name="storeName"
//                 id="storeName"
//                 value={newPayment.storeName}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border rounded p-2"
//               />
//             </div>
//             <div className="sm:col-span-2">
//               <button
//                 type="button"
//                 onClick={handleCreate}
//                 className="inline-flex justify-center w-1/2 rounded-md border border-transparent bg-custom-darkblue py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//               >
//                 Add Payment
//               </button>
//             </div>
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
// import * as XLSX from 'xlsx';
// import TableFooter from '@mui/material/TableFooter';
// import TablePagination from '@mui/material/TablePagination';
// import { FaTable, FaPlus, FaCreditCard, FaWallet, FaCashRegister } from 'react-icons/fa';
// import SearchIcon from '@mui/icons-material/Search';

// // Styled components
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

// // Sample data
// const initialPayments = [
//   {
//     paymentMethod: "Credit Card",
//     paymentDate: "06-09-2024",
//     orderNumber: "ORD123456",
//     customerName: "John Doe",
//     amount: "₹150.00",
//     icon: <FaCreditCard className="text-xl" /> // Add icon for Credit Card
//   },
//   {
//     paymentMethod: "UPI",
//     paymentDate: "06-09-2024",
//     orderNumber: "ORD163456",
//     customerName: "John",
//     amount: "₹156.00",
//     icon: <FaWallet className="text-xl" /> // Add icon for UPI
//   },
//   {
//     paymentMethod: "Credit Card",
//     paymentDate: "06-09-2024",
//     orderNumber: "ORD183456",
//     customerName: "Doe",
//     amount: "₹159.00",
//     icon: <FaCreditCard className="text-xl" /> // Add icon for Credit Card
//   },
//   {
//     paymentMethod: "Cash",
//     paymentDate: "06-09-2024",
//     orderNumber: "ORD193456",
//     customerName: "Tim",
//     amount: "₹157.00",
//     icon: <FaWallet className="text-xl" /> // Add icon for UPI
    
//   },
//   {
//     paymentMethod: "Credit Card",
//     paymentDate: "06-09-2024",
//     orderNumber: "ORD123956",
//     customerName: "Tod",
//     amount: "₹154.00",
//     icon: <FaCreditCard className="text-xl" /> // Add icon for Credit Card
//   },
// ];

// export default function PaymentList() {
//   const [payments, setPayments] = useState(initialPayments);
//   const [formData, setFormData] = useState(null);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [searchName, setSearchName] = useState('');

//   // Handle form changes
//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle form submission
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (editingIndex !== null) {
//       const updatedPayments = [...payments];
//       updatedPayments[editingIndex] = formData;
//       setPayments(updatedPayments);
//       setEditingIndex(null);
//     } else {
//       setPayments([...payments, formData]);
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

//   // Handle add payment button click
//   const handleAddPaymentClick = () => {
//     setFormData({
//       paymentMethod: "",
//       paymentDate: "",
//       orderNumber: "",
//       customerName: "",
//       amount: "",
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

//   const handleExportPaymentsData = () => {
//     exportToExcel(payments, 'Payments');
//   };

//   // Handle search functionality
//   const handleSearch = () => {
//     const filteredPayments = payments.filter(payment =>
//       payment.customerName.toLowerCase().includes(searchName.toLowerCase())
//     );
//     setPaginatedPayments(filteredPayments.slice(0, rowsPerPage));
//   };

//   // Pagination calculations
//   const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - payments.length) : 0;

//   // Handle page change
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   // Handle rows per page change
//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const [paginatedPayments, setPaginatedPayments] = useState([]);

//   // Initial pagination setup or when data changes
//   useEffect(() => {
//     setPaginatedPayments(
//       payments.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//     );
//   }, [payments, page, rowsPerPage]);

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       {!isFormVisible ? (
//         <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-semibold">Payments</h2>
//             <div className="flex items-center space-x-4">
//               <div className="relative flex flex-col w-[20rem]">
//                 <label htmlFor="searchName" className="text-sm font-medium"></label>
//                 <input
//                   id="searchName"
//                   type="text"
//                   placeholder="Search by Customer Name"
//                   value={searchName}
//                   onChange={(e) => setSearchName(e.target.value)}
//                   className="mt-1 p-2 pr-10 border border-gray-300 rounded-md"
//                 />
//                 <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
//                   <SearchIcon />
//                 </div>
//               </div>
//               <button
//                 type="button"
//                 className="inline-flex items-center gap-x-1 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700"
//                 onClick={handleAddPaymentClick}
//               >
//                 <FaPlus aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//                 Add Payment
//               </button>
//               <button
//                 type="button"
//                 className="inline-flex items-center gap-x-1 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700"
//                 onClick={handleExportPaymentsData}
//               >
//                 <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//                 Export Payments
//               </button>
//             </div>
//           </div>

//           <TableContainer component={Paper} className="mt-4">
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <StyledTableCell>Payment Method</StyledTableCell>
//                   <StyledTableCell>Payment Date</StyledTableCell>
//                   <StyledTableCell>Order Number</StyledTableCell>
//                   <StyledTableCell>Customer Name</StyledTableCell>
//                   <StyledTableCell>Amount</StyledTableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {paginatedPayments.map((payment, index) => (
//                   <StyledTableRow key={index}>
//                     <StyledTableCell>
//                       <div className="flex justify-center items-center">
//                         {payment.icon}
//                       </div>
//                     </StyledTableCell>
//                     <StyledTableCell>{payment.paymentDate}</StyledTableCell>
//                     <StyledTableCell>{payment.orderNumber}</StyledTableCell>
//                     <StyledTableCell>{payment.customerName}</StyledTableCell>
//                     <StyledTableCell>{payment.amount}</StyledTableCell>
//                   </StyledTableRow>
//                 ))}
//                 {emptyRows > 0 && (
//                   <StyledTableRow style={{ height: 53 * emptyRows }}>
//                     <StyledTableCell colSpan={5} />
//                   </StyledTableRow>
//                 )}
//               </TableBody>
//               <TableFooter>
//                 <TableRow>
//                   <TablePagination
//                     rowsPerPageOptions={[5, 10, 25]}
//                     component="td"
//                     count={payments.length}
//                     rowsPerPage={rowsPerPage}
//                     page={page}
//                     onPageChange={handleChangePage}
//                     onRowsPerPageChange={handleChangeRowsPerPage}
//                   />
//                 </TableRow>
//               </TableFooter>
//             </Table>
//           </TableContainer>
//         </div>
//       ) : (
//         <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//           <form onSubmit={handleFormSubmit}>
//             <div className="flex flex-col space-y-4">
//               <div>
//                 <label htmlFor="paymentMethod" className="block text-sm font-medium">Payment Method</label>
//                 <input
//                   id="paymentMethod"
//                   name="paymentMethod"
//                   type="text"
//                   value={formData.paymentMethod || ''}
//                   onChange={handleFormChange}
//                   className="mt-1 p-2 border border-gray-300 rounded-md"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="paymentDate" className="block text-sm font-medium">Payment Date</label>
//                 <input
//                   id="paymentDate"
//                   name="paymentDate"
//                   type="date"
//                   value={formData.paymentDate || ''}
//                   onChange={handleFormChange}
//                   className="mt-1 p-2 border border-gray-300 rounded-md"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="orderNumber" className="block text-sm font-medium">Order Number</label>
//                 <input
//                   id="orderNumber"
//                   name="orderNumber"
//                   type="text"
//                   value={formData.orderNumber || ''}
//                   onChange={handleFormChange}
//                   className="mt-1 p-2 border border-gray-300 rounded-md"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="customerName" className="block text-sm font-medium">Customer Name</label>
//                 <input
//                   id="customerName"
//                   name="customerName"
//                   type="text"
//                   value={formData.customerName || ''}
//                   onChange={handleFormChange}
//                   className="mt-1 p-2 border border-gray-300 rounded-md"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="amount" className="block text-sm font-medium">Amount</label>
//                 <input
//                   id="amount"
//                   name="amount"
//                   type="text"
//                   value={formData.amount || ''}
//                   onChange={handleFormChange}
//                   className="mt-1 p-2 border border-gray-300 rounded-md"
//                 />
//               </div>
//             </div>
//             <div className="flex justify-end space-x-4 mt-4">
//               <button
//                 type="submit"
//                 className="inline-flex items-center gap-x-1 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700"
//               >
//                 {editingIndex !== null ? 'Save Changes' : 'Add Payment'}
//               </button>
//               <button
//                 type="button"
//                 className="inline-flex items-center gap-x-1 rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-400"
//                 onClick={handleCancel}
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


// import React, { useState, useEffect } from "react";
// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import PayPal from "../../assests/Images/PayPal.png";
// import GPay from "../../assests/Images/GPay.png";
// import mastercard from "../../assests/Images/mastercard.png";
// import amazonpay from "../../assests/Images/amazonpay.png";
// import * as XLSX from 'xlsx';
// import TableFooter from '@mui/material/TableFooter';
// import TablePagination from '@mui/material/TablePagination';
// import { FaTable, FaPlus } from 'react-icons/fa';
// import SearchIcon from '@mui/icons-material/Search';

// // Styled components
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

// // Sample data with images
// const initialPayments = [
//   {
//     paymentMethod: "PayPal",
//     paymentDate: "06-09-2024",
//     orderNumber: "ORD123456",
//     customerName: "John Doe",
//     amount: "₹150.00",
//     icon: PayPal,
//   },
//   {
//     paymentMethod: "GPay",
//     paymentDate: "06-09-2024",
//     orderNumber: "ORD163456",
//     customerName: "John",
//     amount: "₹156.00",
//     icon: GPay,
//   },
//   {
//     paymentMethod: "Mastercard",
//     paymentDate: "06-09-2024",
//     orderNumber: "ORD183456",
//     customerName: "Doe",
//     amount: "₹159.00",
//     icon: mastercard,
//   },
//   {
//     paymentMethod: "Amazon Pay",
//     paymentDate: "06-09-2024",
//     orderNumber: "ORD193456",
//     customerName: "Tim",
//     amount: "₹157.00",
//     icon: amazonpay,
//   },
// ];

// export default function PaymentList() {
//   const [payments, setPayments] = useState(initialPayments);
//   const [formData, setFormData] = useState(null);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [searchName, setSearchName] = useState('');

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (editingIndex !== null) {
//       const updatedPayments = [...payments];
//       updatedPayments[editingIndex] = formData;
//       setPayments(updatedPayments);
//       setEditingIndex(null);
//     } else {
//       setPayments([...payments, formData]);
//     }
//     setFormData(null);
//     setIsFormVisible(false);
//   };

//   const handleCancel = () => {
//     setFormData(null);
//     setEditingIndex(null);
//     setIsFormVisible(false);
//   };

//   const handleAddPaymentClick = () => {
//     setFormData({
//       paymentMethod: "",
//       paymentDate: "",
//       orderNumber: "",
//       customerName: "",
//       amount: "",
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

//   const handleExportPaymentsData = () => {
//     exportToExcel(payments, 'Payments');
//   };

//   const handleSearch = () => {
//     const filteredPayments = payments.filter(payment =>
//       payment.customerName.toLowerCase().includes(searchName.toLowerCase())
//     );
//     setPaginatedPayments(filteredPayments.slice(0, rowsPerPage));
//   };

//   const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - payments.length) : 0;

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const [paginatedPayments, setPaginatedPayments] = useState([]);

//   useEffect(() => {
//     setPaginatedPayments(
//       payments.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//     );
//   }, [payments, page, rowsPerPage]);

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       {!isFormVisible ? (
//         <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-semibold">Payments</h2>
//             <div className="flex items-center space-x-4">
//               <div className="relative flex flex-col w-[20rem]">
//                 <label htmlFor="searchName" className="text-sm font-medium"></label>
//                 <input
//                   id="searchName"
//                   type="text"
//                   placeholder="Search by Customer Name"
//                   value={searchName}
//                   onChange={(e) => setSearchName(e.target.value)}
//                   className="mt-1 p-2 pr-10 border border-gray-300 rounded-md"
//                 />
//                 <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
//                   <SearchIcon />
//                 </div>
//               </div>
//               <button
//                 type="button"
//                 className="inline-flex items-center gap-x-1 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700"
//                 onClick={handleAddPaymentClick}
//               >
//                 <FaPlus aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//                 Add Payment
//               </button>
//               <button
//                 type="button"
//                 className="inline-flex items-center gap-x-1 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700"
//                 onClick={handleExportPaymentsData}
//               >
//                 <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//                 Export Payments
//               </button>
//             </div>
//           </div>

//           <TableContainer component={Paper} className="mt-4">
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <StyledTableCell>Payment Method</StyledTableCell>
//                   <StyledTableCell>Payment Date</StyledTableCell>
//                   <StyledTableCell>Order Number</StyledTableCell>
//                   <StyledTableCell>Customer Name</StyledTableCell>
//                   <StyledTableCell>Amount</StyledTableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {paginatedPayments.map((payment, index) => (
//                   <StyledTableRow key={index}>
//                     <StyledTableCell>
//                       <div className="flex items-center">
//                         <img src={payment.icon} alt={payment.paymentMethod} className="h-6 w-6 mr-2"  />
//                         <span class="py-4 px-6 text-sm text-gray-500">                         {payment.paymentMethod}
//                         </span>
//                       </div>
//                     </StyledTableCell>
//                     <td className="py-4 px-6 text-sm text-gray-500">{payment.paymentDate}</td>
//                     <td class="py-4 px-6 text-sm text-gray-500">{payment.orderNumber}</td>

//                     <StyledTableCell class="py-4 px-6 text-sm text-gray-500">{payment.customerName}</StyledTableCell>
//                     <StyledTableCell class="py-4 px-6 text-sm text-gray-500">{payment.amount}</StyledTableCell>
//                   </StyledTableRow>
//                 ))}
//                 {emptyRows > 0 && (
//                   <StyledTableRow style={{ height: 53 * emptyRows }}>
//                     <StyledTableCell colSpan={5} />
//                   </StyledTableRow>
//                 )}
//               </TableBody>
//               <TableFooter>
//                 <TableRow>
//                   <TablePagination
//                   class="py-4 px-6 text-sm text-gray-500"
//                     rowsPerPageOptions={[5, 10, 25]}
//                     component="td"
//                     count={payments.length}
//                     rowsPerPage={rowsPerPage}
//                     page={page}
//                     onPageChange={handleChangePage}
//                     onRowsPerPageChange={handleChangeRowsPerPage}
//                   />
//                 </TableRow>
//               </TableFooter>
//             </Table>
//           </TableContainer>
//         </div>
//       ) : (
//         <form
//           className="bg-white p-6 rounded-lg shadow-md"
//           onSubmit={handleFormSubmit}
//         >
//           <h2 className="text-xl font-semibold mb-4">
//             {editingIndex !== null ? "Edit Payment" : "Add Payment"}
//           </h2>
//           <div className="mb-4">
//             <label htmlFor="paymentMethod" className="block text-sm font-medium">
//               Payment Method
//             </label>
//             <input
//               type="text"
//               id="paymentMethod"
//               name="paymentMethod"
//               value={formData.paymentMethod}
//               onChange={handleFormChange}
//               className="mt-1 p-2 pr-10 border border-gray-300 rounded-md w-full"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="paymentDate" className="block text-sm font-medium">
//               Payment Date
//             </label>
//             <input
//               type="text"
//               id="paymentDate"
//               name="paymentDate"
//               value={formData.paymentDate}
//               onChange={handleFormChange}
//               className="mt-1 p-2 pr-10 border border-gray-300 rounded-md w-full"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="orderNumber" className="block text-sm font-medium">
//               Order Number
//             </label>
//             <input
//               type="text"
//               id="orderNumber"
//               name="orderNumber"
//               value={formData.orderNumber}
//               onChange={handleFormChange}
//               className="mt-1 p-2 pr-10 border border-gray-300 rounded-md w-full"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="customerName" className="block text-sm font-medium">
//               Customer Name
//             </label>
//             <input
//               type="text"
//               id="customerName"
//               name="customerName"
//               value={formData.customerName}
//               onChange={handleFormChange}
//               className="mt-1 p-2 pr-10 border border-gray-300 rounded-md w-full"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="amount" className="block text-sm font-medium">
//               Amount
//             </label>
//             <input
//               type="text"
//               id="amount"
//               name="amount"
//               value={formData.amount}
//               onChange={handleFormChange}
//               className="mt-1 p-2 pr-10 border border-gray-300 rounded-md w-full"
//             />
//           </div>
//           <div className="flex justify-end">
//             <button
//               type="button"
//               className="mr-2 inline-flex items-center gap-x-1 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700"
//               onClick={handleCancel}
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="inline-flex items-center gap-x-1 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700"
//             >
//               {editingIndex !== null ? "Update" : "Add Payment"}
//             </button>
//           </div>
//         </form>
//       )}
//     </div>
//   );
// }


// import React, { useState, useEffect, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import IconButton from "@mui/material/IconButton";
// import TableFooter from "@mui/material/TableFooter";
// import TablePagination from "@mui/material/TablePagination";
// import FirstPageIcon from "@mui/icons-material/FirstPage";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// import LastPageIcon from "@mui/icons-material/LastPage";
// import { useTheme } from "@mui/material/styles";
// import { FaPlus, FaTable } from "react-icons/fa";
// import * as XLSX from "xlsx";
// import PropTypes from "prop-types";
// import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
// import { IoIosSearch } from "react-icons/io";
// import axios from "axios";
// import { PaymentContext } from "../../Context/paymentContext";

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: "#003375",
//     color: theme.palette.common.white,
//     fontWeight: "bold",
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
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

// function TablePaginationActions(props) {
//   const theme = useTheme();
//   const { count, page, rowsPerPage, onPageChange } = props;

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
//         {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
//       </IconButton>
//       <IconButton
//         onClick={handleBackButtonClick}
//         disabled={page === 0}
//         aria-label="previous page"
//       >
//         {theme.direction === "rtl" ? (
//           <KeyboardArrowRight />
//         ) : (
//           <KeyboardArrowLeft />
//         )}
//       </IconButton>
//       <IconButton
//         onClick={handleNextButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="next page"
//       >
//         {theme.direction === "rtl" ? (
//           <KeyboardArrowLeft />
//         ) : (
//           <KeyboardArrowRight />
//         )}
//       </IconButton>
//       <IconButton
//         onClick={handleLastPageButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="last page"
//       >
//         {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
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

// function Payment() {
//   const [payments, setPayments] = useState([]);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [totalPayments, setTotalPayments] = useState(0);
//   const [searchName, setSearchName] = useState("");
//   const navigate = useNavigate();
//   const { setPaymentDetails } = useContext(PaymentContext);

//   const fetchPayments = async () => {
//     try {
//       const { payments, totalCount } = await getAllPayments(
//         page,
//         rowsPerPage,
//         searchName
//       );
//       setPayments(payments);
//       setTotalPayments(totalCount);
//     } catch (error) {
//       console.error("Failed to fetch payments", error);
//     }
//   };

//   const getAllPayments = async (pageNum, pageSize, search = "") => {
//     try {
//       const response = await axios.get(
//         "https://imlystudios-backend-mqg4.onrender.com/api/payments/payments", 
//         {
//           params: {
//             page: pageNum + 1,
//             pageSize: pageSize,
//             search: search,
//           },
//         }
//       );
//       return {
//         payments: response.data.payments || [],
//         totalCount: response.data.totalItems || 0,
//       };
//     } catch (error) {
//       console.error("Error fetching payments:", error);
//       throw error;
//     }
//   };

//   useEffect(() => {
//     fetchPayments();
//   }, [page, rowsPerPage, searchName]);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleAddPaymentClick = () => {
//     setPaymentDetails(null);
//     navigate("/paymentform"); // Make sure this matches the route path defined
//   };

//   const getPaymentsById = async (OrderId) => {
//     try {
//       const response = await axios.get(
//         `https://imlystudios-backend-mqg4.onrender.com/api/payments/payment/${OrderId}`
//       );
//       return response.data;
//     } catch (error) {
//       console.error("Error fetching Payment:", error);
//       throw error;
//     }
//   };

//   const exportToExcel = (data, fileName) => {
//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
//     XLSX.writeFile(workbook, `${fileName}.xlsx`);
//   };

//   const handleExportPaymentsData = async () => {
//     try {
//       const { payments } = await getAllPayments(0, totalPayments);
//       exportToExcel(payments, "Payments");
//     } catch (error) {
//       console.error("Error exporting payments data:", error);
//     }
//   };

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//         <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
//           <h2 className="text-xl font-semibold">Payments</h2>
//           <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
//             <div className="relative flex w-full sm:w-[20rem]">
//               <label htmlFor="searchName" className="sr-only">
//                 Search
//               </label>
//               <input
//                 id="searchName"
//                 type="text"
//                 placeholder="Search by Name or Email or Mobile"
//                 value={searchName}
//                 onChange={(e) => setSearchName(e.target.value)}
//                 className="w-full p-2 pr-10 border border-gray-300 rounded-md"
//               />
//               <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
//                 <IoIosSearch />
//               </div>
//             </div>

//             <ul className="flex flex-col sm:flex-row gap-2 list-none w-full sm:w-[20rem]">
//               <li className="w-full">
//                 <button
//                   type="button"
//                   className="w-full inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus:outline-none"
//                   onClick={handleAddPaymentClick}
//                 >
//                   <FaPlus aria-hidden="true" className="h-4 w-4" />
//                   Add Payments
//                 </button>
//               </li>
//               <li className="w-full">
//                 <button
//                   type="button"
//                   className="w-full inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus:outline-none"
//                   onClick={handleExportPaymentsData}
//                 >
//                   <FaTable aria-hidden="true" className="h-4 w-4" />
//                   Export Payments
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <TableContainer component={Paper} className="mt-4">
//           <Table>
//           <TableHead>
//                  <TableRow>
//                    <StyledTableCell>Payment Method</StyledTableCell>
//                    <StyledTableCell>Payment Date</StyledTableCell>
//                    <StyledTableCell>Order Number</StyledTableCell>
//                    <StyledTableCell>Customer Name</StyledTableCell>
//                    <StyledTableCell>Amount</StyledTableCell>
//                  </TableRow>
//                </TableHead>
//                <TableBody>
//                  {payments.map((payment, index) => (
//                   <StyledTableRow key={index}>
//                     <StyledTableCell>
//                       <div className="flex items-center">
//                         <img src={payment.icon} alt={payment.paymentMethod} className="h-6 w-6 mr-2" />
//                         {payment.paymentMethod}
//                       </div>
//                     </StyledTableCell>
//                     <StyledTableCell>{payment.paymentDate}</StyledTableCell>
//                     <StyledTableCell>{payment.orderNumber}</StyledTableCell>
//                     <StyledTableCell>{payment.customerName}</StyledTableCell>
//                     <StyledTableCell>{payment.amount}</StyledTableCell>
//                   </StyledTableRow>
//                 ))}
              
//               </TableBody>
//             <TableFooter>
//               <TableRow>
//                 <TablePagination
//                   rowsPerPageOptions={[10, 20, 25]}
//                   colSpan={6}
//                   count={totalPayments}
//                   rowsPerPage={rowsPerPage}
//                   page={page}
//                   onPageChange={handleChangePage}
//                   onRowsPerPageChange={handleChangeRowsPerPage}
//                   ActionsComponent={TablePaginationActions}
//                 />
//               </TableRow>
//             </TableFooter>
//           </Table>
//         </TableContainer>
//       </div>
//     </div>
//   );
// }

// export default Payment;


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
import { PaymentContext } from "../../Context/paymentContext";


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
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
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

function Payment() {
  const [payments, setPayments] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalPayments, setTotalPayments] = useState(0);
  const [searchName, setSearchName] = useState("");
  const navigate = useNavigate();
  const { setPaymentDetails } = useContext(PaymentContext);

  const fetchPayments = async () => {
    try {
      const { payments, totalCount } = await getAllPayments(page, rowsPerPage, searchName);
      setPayments(payments);
      setTotalPayments(totalCount);
    } catch (error) {
      console.error('Failed to fetch payments', error);
    }
  };

  const getAllPayments = async (pageNum, pageSize, search = "") => {
    try {
      const response = await axios.get(
        "https://imlystudios-backend-mqg4.onrender.com/api/payments/payments", 
        {
          params: {
            page: pageNum + 1,
            limit: pageSize,
            search: search
          }
        }
      );
      return {
        payments: response.data.data || [],
        totalCount: response.data.totalRecords || 0
      };
    } catch (error) {
      console.error("Error fetching payments:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchPayments();
  }, [page, rowsPerPage, searchName]);

  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleAddPaymentClick = () => {
    setPaymentDetails(null);
    navigate("/paymentform"); // Make sure this matches the route path defined
  };

  const getPaymentsById = async (OrderId) => {
    try {
      const response = await axios.get(
        `https://imlystudios-backend-mqg4.onrender.com/api/payments/payment/${OrderId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching Payment:", error);
      throw error;
    }
  };

  const exportToExcel = (data, fileName) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  const handleExportPaymentsData = async () => {
    try {
      const { payments } = await getAllPayments(0, totalPayments);
      exportToExcel(payments, "Payments");
    } catch (error) {
      console.error("Error exporting payments data:", error);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
          <h2 className="text-xl font-semibold">Payments</h2>
          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative flex w-full sm:w-[20rem]">
              <label htmlFor="searchName" className="sr-only">
                Search
              </label>
              <input
                id="searchName"
                type="text"
                placeholder="Search by Name or Email or Mobile"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                className="w-full p-2 pr-10 border border-gray-300 rounded-md"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <IoIosSearch />
              </div>
            </div>

            <ul className="flex flex-col sm:flex-row gap-2 list-none w-full sm:w-[20rem]">
              <li className="w-full">
                <button
                  type="button"
                  className="w-full inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus:outline-none"
                  onClick={handleAddPaymentClick}
                >
                  <FaPlus aria-hidden="true" className="h-4 w-4" />
                  Add Payments
                </button>
              </li>
              <li className="w-full">
                <button
                  type="button"
                  className="w-full inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus:outline-none"
                  onClick={handleExportPaymentsData}
                >
                  <FaTable aria-hidden="true" className="h-4 w-4" />
                  Export Payments
                </button>
              </li>
            </ul>
          </div>
        </div>

        <TableContainer component={Paper} className="mt-4">
          <Table>
          <TableHead>
              <TableRow>
                <StyledTableCell>Payment Method</StyledTableCell>
                <StyledTableCell>Payment Date</StyledTableCell>
                <StyledTableCell>Order ID</StyledTableCell>
                <StyledTableCell>Customer ID</StyledTableCell>
                <StyledTableCell>Total Amount</StyledTableCell>
                <StyledTableCell>Payment Status</StyledTableCell>
              </TableRow>
            </TableHead>
               <TableBody>
              {payments.map((payment) => (
                <StyledTableRow key={payment.PaymentID}>
                  <StyledTableCell>{payment.PaymentMethod}</StyledTableCell>
                  <StyledTableCell>{new Date(payment.PaymentDate).toLocaleDateString()}</StyledTableCell>
                  <StyledTableCell>{payment.OrderID ?? 'Not available'}</StyledTableCell>
                  <StyledTableCell>{payment.CustomerID ?? 'Not available'}</StyledTableCell>
                  <StyledTableCell>{payment.TotalAmount ? `$${payment.TotalAmount}` : '0.00'}</StyledTableCell>
                  <StyledTableCell>{payment.PaymentStatus ?? 'Pending'}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[10, 20, 25]}
                  colSpan={6}
                  count={totalPayments}
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

export default Payment;

