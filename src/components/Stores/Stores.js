
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
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import * as XLSX from "xlsx";
import PropTypes from "prop-types";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { FaTable } from "react-icons/fa";
import axios from "axios";
import {StoreContext} from  "../../Context/storeContext"
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#003375',
    color: theme.palette.common.white,
    fontWeight: 'bold',
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
  const { count, page, rowsPerPage, onPageChange } = props;
  const theme = useTheme();

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
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
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

function Stores() {
  const [Stores, setStores] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchName, setSearchName] = useState("");
  const [totalStores, setTotalStores] = useState(0);
  const { setStoreDetails } = useContext(StoreContext); 
  const navigate = useNavigate();


  const getAllStores = async (pageNum, pageSize, search = "") => {
    try {
      const response = await axios.get(
        "https://imlystudios-backend-mqg4.onrender.com/api/stores/getAllStores",
        {
          params: {
            pageNumber: pageNum + 1,
            pageSize: pageSize,
            search: search
          }
        }
      );
      return {
        Stores: response.data.Stores,
        totalCount: response.data.totalItems
      };
    } catch (error) {
      console.error("Error fetching Stores:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchStores();
  }, [page, rowsPerPage, searchName]);

 
    const fetchStores = async () => {
      try {
        const {Stores,totalCount} = await getAllStores(page, rowsPerPage, searchName);
       
        setStores(Stores);
        setTotalStores(totalCount);
      } catch (error) {
        console.error("Failed to fetch Stores", error);
      }
    };

  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };



  const getStoreById = async (storeId) => {
    try {
      const response = await axios.get(
        
        `https://imlystudios-backend-mqg4.onrender.com/api/stores/getStoreById/${storeId}`
        
      );
     
      return response.data;
    } catch (error) {
      console.error("Error fetching store:", error);
      throw error;
    }
  };

// Function to delete a store
const deleteStoreById = async (storeId) => {
  try {
    const response = await axios.delete(
      `https://imlystudios-backend-mqg4.onrender.com/api/stores/deleteStore/${storeId}`  // Correct URL
    );
 
    return response.data; // Return the response data
  } catch (error) {
    console.error("Error deleting store:", error);
    throw error;
  }
};


  const handleEditClick = async (storeId) => {
    try {
      const storeDetails = await getStoreById(storeId); // Use getStoreById from context
      setStoreDetails(storeDetails);
      navigate('/Storeform');
    } catch (error) {
      console.error("Error fetching store details:", error);
    }
  };

 


const handleDeleteClick = async (storeId) => {
  try {
    await deleteStoreById(storeId);
    fetchStores(); // Refresh the user list after deletion
  } catch (error) {
    console.error("Error deleting store:", error);
  }
};


  const exportToExcel = (data, fileName) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  const handleExportStoresData = async () => {
    try {
      const { stores } = await getAllStores(0, totalStores); // Fetch all users for export
      exportToExcel(stores, "Stores");
    } catch (error) {
      console.error("Error exporting users data:", error);
    }
  };
 
  const handleAddStoreClick = () => {
    // Clear the store details before navigating
    setStoreDetails(null); // Assuming setUserDetails is a method from UserContext to clear store details
    navigate('/Storeform');
  };

  return (

    <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
          <h2 className="text-xl font-semibold">Stores</h2>
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
                  onClick={handleAddStoreClick}
                >
                  <FaPlus aria-hidden="true" className="h-4 w-4" />
                  Add Stores
                </button>
              </li>
              <li className="w-full">
                <button
                  type="button"
                  className="w-full inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus:outline-none"
                  onClick={handleExportStoresData}
                >
                  <FaTable aria-hidden="true" className="h-4 w-4" />
                  Export Stores
                </button>
              </li>
            </ul>
          </div>
        </div>


        <TableContainer component={Paper} className="mt-4 rounded-lg shadow">
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Store Name</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Phone</StyledTableCell>
                <StyledTableCell>Location</StyledTableCell>
                <StyledTableCell>Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Stores.map((row) => (
                <StyledTableRow key={row.StoreID}>
                  <StyledTableCell>{row.StoreName}</StyledTableCell>
                  <StyledTableCell>{row.Email}</StyledTableCell>
                  <StyledTableCell>{row.Phone}</StyledTableCell>
                  <StyledTableCell>{row.Address}</StyledTableCell>
                  <StyledTableCell>
                <button
                  type="button"
                  onClick={() => handleEditClick(row.StoreID)}
                  className="inline-flex items-center gap-x-1 rounded-md bg-blue-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-blue-500"
                >
                  <AiOutlineEdit aria-hidden="true" className="h-4 w-4" />
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteClick(row.StoreID)}
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
                  count={totalStores}
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

export default Stores;



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
// import { FaEdit, FaTrash, FaPlus, FaTable } from "react-icons/fa";
// import { IoIosSearch } from "react-icons/io";
// import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
// import * as XLSX from "xlsx";
// import PropTypes from "prop-types";
// import { StoreContext } from '../../Context/storeContext';
// import axios from 'axios';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: '#003375',
//     color: theme.palette.common.white,
//     fontWeight: 'bold',
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
//       <IconButton
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

// function Stores() {
//   const [stores, setStores] = useState([]);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [searchName, setSearchName] = useState("");
//   const [totalStores, setTotalStores] = useState(0);
//   const { setStoreDetails } = useContext(StoreContext); 
//   const navigate = useNavigate();

//   const getAllStores = async (pageNum, pageSize, search = "") => {
//     try {
//       const response = await axios.get(
//         "https://imlystudios-backend-mqg4.onrender.com/api/stores/getAllStores",
//         {
//           params: {
//             page: pageNum + 1,
//             limit: pageSize,
//             search: search
//           }
//         }
//       );
  
//       // Log the entire API response to understand its structure
//       console.log("API Response:", response.data);
  
//       return {
//         stores: response.data.Stores || [], // Correctly access the 'Stores' field
//         totalCount: response.data.totalItems || 0 // Use 'totalItems' for total count
//       };
//     } catch (error) {
//       console.error("Error fetching stores:", error);
//       throw error;
//     }
//   };
  
//   const fetchStores = async () => {
//     try {
//       const { stores, totalCount } = await getAllStores(page, rowsPerPage, searchName);
//       console.log('Fetched stores:', stores); // Log fetched stores to verify
//       console.log('Total stores count:', totalCount); // Log total count to verify
//       setStores(stores); // Set the state with the fetched stores
//       setTotalStores(totalCount); // Set the total stores count
//     } catch (error) {
//       console.error('Failed to fetch stores', error);
//     }
//   };
  
//   useEffect(() => {
//     fetchStores();
//   }, [page, rowsPerPage, searchName]);
  

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const getStoreById = async (storeId) => {
//     try {
//       const response = await axios.get(
//         `https://imlystudios-backend-mqg4.onrender.com/api/stores/getStoreById/${storeId}`
//       );
//       return response.data;
//     } catch (error) {
//       console.error("Error fetching store:", error);
//       throw error;
//     }
//   };

//   const deleteStoreById = async (storeId) => {
//     try {
//       const response = await axios.delete(
//         `https://imlystudios-backend-mqg4.onrender.com/api/stores/deleteStore/${storeId}`
//       );
//       return response.data;
//     } catch (error) {
//       console.error("Error deleting store:", error);
//       throw error;
//     }
//   };

//   const handleEdit = async (storeId) => {
//     try {
//       const storeDetails = await getStoreById(storeId);
//       setStoreDetails(storeDetails);
//       // Navigate to the update page with the store ID
//       navigate(`/Stores/Update/${storeId}`);
//     } catch (error) {
//       console.error('Error handling edit:', error);
//     }
//   };

//   const handleDelete = async (storeId) => {
//     try {
//       await deleteStoreById(storeId);
//       fetchStores(); // Refresh store list after deletion
//     } catch (error) {
//       console.error('Error handling delete:', error);
//     }
//   };

//   const handleExportStoresData = () => {
//     const ws = XLSX.utils.json_to_sheet(stores);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Stores");
//     XLSX.writeFile(wb, "Stores.xlsx");
//   };

//   const handleAddStoreClick = () => {
//     navigate("/Storeform"); // Navigate to the add store page
//   };

//   const handleEditClick = (storeId) => {
//     handleEdit(storeId); // Call existing handleEdit function
//   };

//   const handleDeleteClick = (storeId) => {
//     handleDelete(storeId); // Call existing handleDelete function
//   };

//   return (
//     // <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
    
//     //     <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//     //       <div className="flex justify-between items-center">
//     //         <h2 className="text-xl font-semibold">Stores</h2>

//     //         <div className="flex items-center space-x-4">
//     //       <div className="relative flex flex-col w-[20rem] -ml-4">
//     //           <label htmlFor="searchName" className="text-sm font-medium"></label>
//     //           <input
//     //             id="searchName"
//     //             type="text"
//     //             placeholder="Search by Name or Email or Mobile"
//     //             value={searchName}
//     //             onChange={(e) => setSearchName(e.target.value)}
//     //             className="mt-1 p-2 pr-10 border border-gray-300 rounded-md"
//     //           />
//     //           <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
//     //           <IoIosSearch />
//     //           </div>
//     //         </div>
//     //         </div>
//     //         <ul className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex gap-2 list-none">
//     //           <li>
//     //             <button
//     //               type="button"
//     //               className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
//     //               onClick={handleAddStoreClick}
//     //             >
//     //               <FaPlus aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//     //               Add Stores
//     //             </button>
//     //           </li>
              
//     //           <li>
//     //             <button
//     //               type="button"
//     //               className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700"
//     //               onClick={handleExportStoresData}
//     //             >
//     //               <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//     //               Export Stores
//     //             </button>
//     //           </li>
//     //         </ul>
//     //       </div>

//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//         <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
//           <h2 className="text-xl font-semibold">Stores</h2>
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
//                   onClick={handleAddStoreClick}
//                 >
//                   <FaPlus aria-hidden="true" className="h-4 w-4" />
//                   Add Stores
//                 </button>
//               </li>
//               <li className="w-full">
//                 <button
//                   type="button"
//                   className="w-full inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus:outline-none"
//                   onClick={handleExportStoresData}
//                 >
//                   <FaTable aria-hidden="true" className="h-4 w-4" />
//                   Export Stores
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>


//         <TableContainer component={Paper} className="mt-4 rounded-lg shadow">
//       <Table>
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Store Name</StyledTableCell>
//             <StyledTableCell>Email</StyledTableCell>
//             <StyledTableCell>Phone</StyledTableCell>
//             <StyledTableCell>Location</StyledTableCell>
//             <StyledTableCell>Actions</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {(stores || []).map((store, index) => (
//             <StyledTableRow key={store.StoreID}>
//               <StyledTableCell>{store.StoreName}</StyledTableCell>
//               <StyledTableCell>{store.Email}</StyledTableCell>
//               <StyledTableCell>{store.Phone}</StyledTableCell>
//               <StyledTableCell>{store.Address}</StyledTableCell>
//               <StyledTableCell>
//                 <button
//                   type="button"
//                   onClick={() => handleEditClick(store.StoreID)}
//                   className="inline-flex items-center gap-x-1 rounded-md bg-blue-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-blue-500"
//                 >
//                   <AiOutlineEdit aria-hidden="true" className="h-4 w-4" />
//                   Edit
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => handleDeleteClick(store.StoreID)}
//                   className="inline-flex items-center gap-x-1 ml-2 rounded-md bg-red-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-red-500"
//                 >
//                   <AiOutlineDelete aria-hidden="true" className="h-4 w-4" />
//                   Delete
//                 </button>
//               </StyledTableCell>

//                 </StyledTableRow>
//               ))}
//             </TableBody>
//             <TableFooter>
//               <TableRow>
//               <TablePagination
//                   rowsPerPageOptions={[10, 20, 25]}
//                   colSpan={6}
//                   count={totalStores}
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

// export default Stores;
