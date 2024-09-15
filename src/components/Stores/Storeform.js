// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { StoreContext } from '../../Context/storeContext';

// function Storeform() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { storeDetails } = useContext(StoreContext);

//   // Determine if in edit mode (only if store data exists)
//   const isEditMode = Boolean(location.state?.storeDetails?.store || storeDetails?.store);

//   const [formData, setFormData] = useState(location.state?.storeDetails || {
//     TenantID: 1,   // Set default value for TenantID
//     StoreID: null, // Set StoreID as null initially
//     StoreName: "",
//     Email: "",
//     Password: "",  // Added Password field to formData
//     Phone: "",
//     Address: "",   // Include Address field
//   });

//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (isEditMode) {
//       const store = location.state?.storeDetails?.store || storeDetails?.store;
//       setFormData({
//         TenantID: store.TenantID || 1,
//         StoreID: store.StoreID || null,
//         StoreName: store.StoreName || "",
//         Email: store.Email || "",
//         Phone: store.Phone || "",
//         Password: "",  // Clear password if in edit mode
//         Address: store.Address || "",
//       });
//     }
//   }, [isEditMode, location.state?.storeDetails?.store, storeDetails?.store]);

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // const handleFormSubmit = async (event) => {
//   //   event.preventDefault();
//   //   try {
//   //     console.log("Submitted details:", formData);

//   //     const response = await axios.post(
//   //       "https://imlystudios-backend-mqg4.onrender.com/api/stores/createStore",
//   //       formData
//   //     );
//   //     console.log("Submission successful:", response.data);
//   //     navigate("/Stores");
//   //   } catch (error) {
//   //     console.error("Submission failed:", error);
//   //     if (error.response) {
//   //       console.error("Response data:", error.response.data);
//   //       console.error("Response status:", error.response.status);
//   //       console.error("Response headers:", error.response.headers);
//   //       setError("Failed to create store: " + error.response.data.message);
//   //     } else if (error.request) {
//   //       console.error("No response received:", error.request);
//   //       setError("No response received from server.");
//   //     } else {
//   //       console.error("Error in setting up request:", error.message);
//   //       setError("Error: " + error.message);
//   //     }
//   //   }
//   // };

//   // const handleUpdateSubmit = async (event) => {
//   //   event.preventDefault();
//   //   try {
//   //     const storeId = formData.StoreID;
  
//   //     // Log formData to ensure StoreID is present
//   //     console.log("FormData before submission:", formData);
  
//   //     if (!storeId) {
//   //       console.error("Store ID is missing in formData");
//   //       setError("Store ID is missing.");
//   //       return;
//   //     }
  
//   //     console.log("Submitted details for update:", formData);
  
//   //     const response = await axios.put(
//   //       `https://imlystudios-backend-mqg4.onrender.com/api/stores/updateStore/${storeId}`,
//   //       formData
//   //     );
//   //     console.log("Update successful:", response.data);
  
//   //     navigate("/Stores");
//   //   } catch (error) {
//   //     console.error("Update failed:", error);
//   //     if (error.response) {
//   //       console.error("Update failed with response error:", error.response.data);
//   //       setError("Update failed: " + error.response.data.message);
//   //     } else if (error.request) {
//   //       console.error("Update failed with no response received:", error.request);
//   //       setError("No response received from server.");
//   //     } else {
//   //       console.error("Update failed with error:", error.message);
//   //       setError("Error: " + error.message);
//   //     }
//   //   }
//   // };

//   // const handleFormSubmit = async (event) => {
//   //   event.preventDefault();
  
//   //   const storeId = formData.StoreID; 
//   //   const isUpdate = !!storeId; 
  
//   //   try {
//   //     console.log(isUpdate ? "Updating store:" : "Creating store:", formData);
  
//   //     const response = await axios.post(
//   //       "https://imlystudios-backend-mqg4.onrender.com/api/stores/createOrUpdateStore",
//   //       formData
//   //     );
  
//   //     console.log(isUpdate ? "Update successful:" : "Creation successful:", response.data);
      
//   //     navigate("/Stores");
//   //   } catch (error) {
//   //     console.error(isUpdate ? "Update failed:" : "Creation failed:", error);
  
//   //     if (error.response) {
//   //       console.error("Response error:", error.response.data);
//   //       setError((isUpdate ? "Update" : "Creation") + " failed: " + error.response.data.message);
//   //     } else if (error.request) {
//   //       console.error("No response received:", error.request);
//   //       setError("No response received from server.");
//   //     } else {
//   //       console.error("Error in setting up request:", error.message);
//   //       setError("Error: " + error.message);
//   //     }
//   //   }
//   // };
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
  
//     const storeId = formData.StoreID; 
//     const isUpdate = !!storeId; 
    
//     try {
//       console.log(isUpdate ? "Updating store:" : "Creating store:", formData);
  
//       // Log formData and check if storeId is correctly set
//       console.log("Form Data:", formData);
  
//       const response = await axios.post(
//         "https://imlystudios-backend-mqg4.onrender.com/api/stores/createOrUpdateStore",
//         formData
//       );
  
//       console.log(isUpdate ? "Update successful:" : "Creation successful:", response.data);
  
//       navigate("/Stores");
//     } catch (error) {
//       console.error(isUpdate ? "Update failed:" : "Creation failed:", error);
  
//       // Log full error object
//       console.error("Full error object:", error);
  
//       if (error.response) {
//         console.error("Response error:", error.response.data);
//         setError((isUpdate ? "Update" : "Creation") + " failed: " + error.response.data.message);
//       } else if (error.request) {
//         console.error("No response received:", error.request);
//         setError("No response received from server.");
//       } else {
//         console.error("Error in setting up request:", error.message);
//         setError("Error: " + error.message);
//       }
//     }
//   };
  
  

//   const handleCancel = () => {
//     navigate("/Stores");
//   };

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//         {/* <form onSubmit={isEditMode ? handleUpdateSubmit : handleFormSubmit}> */}
//         <form onSubmit={handleFormSubmit}>
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-xl font-semibold mb-4 px-24">Stores</h2>
//           </div>
//           <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 px-16 md:px-24">
//             {/* Store Name */}
//             <div className="flex items-center">
//               <div className="w-full">
//                 <label htmlFor="StoreName" className="block text-sm font-medium text-gray-700">
//                   Store Name
//                 </label>
//                 <input
//                   type="text"
//                   id="StoreName"
//                   name="StoreName"
//                   value={formData.StoreName || ""}
//                   onChange={handleFormChange}
//                   required
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//             </div>

//             {/* Email */}
//             <div>
//               <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="Email"
//                 name="Email"
//                 value={formData.Email || ""}
//                 onChange={handleFormChange}
//                 required
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <input
//                 id="Password"
//                 name="Password"
//                 type="password"
//                 value={formData.Password || ""}
//                 onChange={handleFormChange}
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             {/* Phone Number */}
//             <div>
//               <label htmlFor="Phone" className="block text-sm font-medium text-gray-700">
//                 Phone Number
//               </label>
//               <input
//                 type="text"
//                 id="Phone"
//                 name="Phone"
//                 value={formData.Phone || ""}
//                 onChange={handleFormChange}
//                 required
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             {/* Address */}
//             <div>
//               <label htmlFor="Address" className="block text-sm font-medium text-gray-700">
//                 Address
//               </label>
//               <input
//                 type="text"
//                 id="Address"
//                 name="Address"
//                 value={formData.Address || ""}
//                 onChange={handleFormChange}
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="mt-6 flex justify-end gap-4">
//             <button
//               type="submit"
//               className="inline-flex justify-center rounded-md border border-transparent bg-custom-darkblue py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-custom-lightblue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//             >
//               Save
//             </button>
//             <button
//               type="button"
//               onClick={handleCancel}
//               className="inline-flex justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-red-200"
//             >
//               Cancel
//             </button>
//           </div>

//           {/* Error Message */}
//           {error && <p className="mt-4 text-red-600">{error}</p>}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Storeform;

// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { StoreContext } from '../../Context/storeContext';

// function Storeform() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { storeDetails } = useContext(StoreContext);

//   const isEditMode = Boolean(location.state?.storeDetails?.store || storeDetails?.store);

//   const [formData, setFormData] = useState(location.state?.storeDetails || {
//     TenantID: 1,
//     StoreID: null, // StoreID should be null initially for creation
//     StoreName: "",
//     Email: "",
//     Password: "",
//     Phone: "",
//     Address: "",
//   });

//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (isEditMode) {
//       const store = location.state?.storeDetails?.store || storeDetails?.store;
//       setFormData({
//         TenantID: store.TenantID || 1,
//         StoreID: store.StoreID || null,
//         StoreName: store.StoreName || "",
//         Email: store.Email || "",
//         Phone: store.Phone || "",
//         Password: "",  // Password cleared for edit mode
//         Address: store.Address || "",
//       });
//     }
//   }, [isEditMode, location.state?.storeDetails?.store, storeDetails?.store]);

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
  
//     const storeId = formData.StoreID; 
//     const isUpdate = !!storeId; // Check if this is an update
  
//     try {
//       console.log(isUpdate ? "Updating store:" : "Creating store:", formData);

//       // Remove password if it's not being updated
//       const submitData = { ...formData };
//       if (isUpdate && !submitData.Password) {
//         delete submitData.Password;
//       }
      
//       // Log the final payload
//       console.log("Final form data:", submitData);
  
//       // Send the API request
//       const response = await axios.post(
//         "https://imlystudios-backend-mqg4.onrender.com/api/stores/createOrUpdateStore",
//         submitData
//       );
  
//       console.log(isUpdate ? "Update successful:" : "Creation successful:", response.data);
//       navigate("/Stores");
//     } catch (error) {
//       console.error(isUpdate ? "Update failed:" : "Creation failed:", error);
  
//       // Log full error object
//       console.error("Full error object:", error);
  
//       if (error.response) {
//         console.error("Response error:", error.response.data);
//         setError((isUpdate ? "Update" : "Creation") + " failed: " + error.response.data.message);
//       } else if (error.request) {
//         console.error("No response received:", error.request);
//         setError("No response received from server.");
//       } else {
//         console.error("Error in setting up request:", error.message);
//         setError("Error: " + error.message);
//       }
//     }
//   };

//   const handleCancel = () => {
//     navigate("/Stores");
//   };

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//         <form onSubmit={handleFormSubmit}>
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-xl font-semibold mb-4 px-24">Stores</h2>
//           </div>
//           <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 px-16 md:px-24">
//             {/* Store Name */}
//             <div className="flex items-center">
//               <div className="w-full">
//                 <label htmlFor="StoreName" className="block text-sm font-medium text-gray-700">
//                   Store Name
//                 </label>
//                 <input
//                   type="text"
//                   id="StoreName"
//                   name="StoreName"
//                   value={formData.StoreName || ""}
//                   onChange={handleFormChange}
//                   required
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//             </div>

//             {/* Email */}
//             <div>
//               <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="Email"
//                 name="Email"
//                 value={formData.Email || ""}
//                 onChange={handleFormChange}
//                 required
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <input
//                 id="Password"
//                 name="Password"
//                 type="password"
//                 value={formData.Password || ""}
//                 onChange={handleFormChange}
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             {/* Phone Number */}
//             <div>
//               <label htmlFor="Phone" className="block text-sm font-medium text-gray-700">
//                 Phone Number
//               </label>
//               <input
//                 type="text"
//                 id="Phone"
//                 name="Phone"
//                 value={formData.Phone || ""}
//                 onChange={handleFormChange}
//                 required
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             {/* Address */}
//             <div>
//               <label htmlFor="Address" className="block text-sm font-medium text-gray-700">
//                 Address
//               </label>
//               <input
//                 type="text"
//                 id="Address"
//                 name="Address"
//                 value={formData.Address || ""}
//                 onChange={handleFormChange}
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="mt-6 flex justify-end gap-4">
//             <button
//               type="submit"
//               className="inline-flex justify-center rounded-md border border-transparent bg-custom-darkblue py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-custom-lightblue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//             >
//               Save
//             </button>
//             <button
//               type="button"
//               onClick={handleCancel}
//               className="inline-flex justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-red-200"
//             >
//               Cancel
//             </button>
//           </div>

//           {/* Error Message */}
//           {error && <p className="mt-4 text-red-600">{error}</p>}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Storeform;



// import React, { useState, useContext, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { StoreContext } from "../../Context/storeContext";
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';
// import TableCell from '@mui/material/TableCell';
// import TableRow from '@mui/material/TableRow';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   backgroundColor: theme.palette.grey[100],
//   color: theme.palette.text.primary,
//   fontWeight: 'bold',
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
// }));

// const steps = ['Store Details', 'Store Users'];

// function StoreForm() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { storeDetails } = useContext(StoreContext);
//   const [storeUsers, setStoreUsers] = useState([]);
  
//   // Form state
//   const [formData, setFormData] = useState(location.state?.storeDetails || {
//     storeName: "",
//     email: "",
//     phoneNumber: "",
//     location: "",
//     comments: "",
//   });

//   const [error, setError] = useState("");
//   const [activeStep, setActiveStep] = useState(0);
//   const isEditMode = Boolean(location.state?.storeDetails || storeDetails);
//   const [stores, setStores] = useState([]); // State for storing fetched stores
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (isEditMode) {
//       const store = location.state?.storeDetails || storeDetails;
//       setFormData({
//         storeName: store.storeName || "",
//         email: store.email || "",
//         phoneNumber: store.phoneNumber || "",
//         location: store.location || "",
//         comments: store.comments || "",
//       });
//     }
//   }, [isEditMode, location.state?.storeDetails, storeDetails]);

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   }; 

  

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
  
//     // Log the form data being sent to the API
//     console.log("FormData:", formData);
  
//     // Check if it's an update (based on StoreID presence)
//     const isUpdate = formData.StoreID ? true : false;
  
//     // Set the correct API endpoint
//     const apiUrl = "https://imlystudios-backend-mqg4.onrender.com/api/stores/createOrUpdateStore";
  
//     try {
//       // Send a POST request to the API (both create and update handled by same API)
//       const response = await axios.post(apiUrl, formData);
  
//       // Log the full response from the server for debugging purposes
//       console.log("Full Response:", response);
//       console.log("Response data:", response.data);
  
//       // Navigate to the stores page after successful submission
//       navigate("/Stores");
  
//     } catch (error) {
//       // Log error details for debugging
//       console.error("Submission failed:", error);
  
//       if (error.response) {
//         // Log specific details from the server response if available
//         console.error("Response data:", error.response.data);
//         console.error("Response status:", error.response.status);
//         console.error("Response headers:", error.response.headers);
  
//         // Set error message based on API response
//         setError(`Failed to ${isUpdate ? 'update' : 'create'} store: ` + error.response.data.message);
  
//       } else if (error.request) {
//         // If no response was received from the server
//         console.error("No response received:", error.request);
//         setError("No response received from server.");
  
//       } else {
//         // Handle errors that occurred during the request setup
//         console.error("Error in setting up request:", error.message);
//         setError("Error: " + error.message);
//       }
//     }
//   };
//   useEffect(() => {
//     const fetchStores = async () => {
//       try {
//         const storeId = formData.StoreID; // Use StoreID instead of CustomerID
  
//         if (!storeId) return; // Ensure storeId exists
  
//         // Make an API call to fetch the stores based on the store ID
//         const response = await axios.get(`https://imlystudios-backend-mqg4.onrender.com/api/stores/getStoreById/${storeId}`);
        
//         // Update the state with fetched stores
//         setStores(response.data.stores || []); 
//         console.log("Fetched Stores:", response.data.stores);
  
//       } catch (err) {
//         // Log and set an error if the request fails
//         console.error("Error fetching stores:", err);
//         setError("Failed to fetch stores.");
//       } finally {
//         // Stop the loading state after the request completes
//         setLoading(false);
//       }
//     };
  
//     fetchStores(); // Invoke the function
  
//   }, [formData.StoreID]); // Re-run when StoreID changes
  
  
  

//   const handleNext = () => {
//     setActiveStep((prevStep) => prevStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevStep) => prevStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//     setFormData({
//       storeName: "",
//       email: "",
//       phoneNumber: "",
//       location: "",
//       comments: "",
//     });
//   };

//   const isStepSkipped = (step) => false;

//   return (
//     <div className="p-6 mr-10 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-80 w-1/8 rounded-lg">
//       <ToastContainer />
//       <div className="p-6 mb-7 sm:px-6 lg:px-8 pt-4 bg-white shadow-lg rounded-lg">
//         <Box sx={{ width: '100%' }}>
//           <Stepper activeStep={activeStep} alternativeLabel>
//             {steps.map((label, index) => (
//               <Step key={label} completed={isStepSkipped(index) ? false : undefined}>
//                 <StepLabel>{label}</StepLabel>
//               </Step>
//             ))}
//           </Stepper>

//           {activeStep === steps.length ? (
//             <React.Fragment>
//               <Typography className="text-center text-xl mb-4">
//                 All steps completed - you're finished
//               </Typography>
//               <Box className="justify-center">
//                 <Button onClick={handleReset} className="bg-blue-500 text-white px-4 py-2 rounded">
//                   Reset
//                 </Button>
//               </Box>
//             </React.Fragment>
//           ) : (
//             <React.Fragment>
//               {activeStep === 0 && (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
//                   <div className="flex items-center gap-4">
//                     <label className="w-1/3 text-xs font-medium text-gray-700">Store Name</label>
//                     <input
//                       type="text"
//                       name="storeName"
//                       value={formData.storeName}
//                       onChange={handleFormChange}
//                       className="p-1 w-full border rounded-md"
//                     />
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <label className="w-1/3 text-xs font-medium text-gray-700">StoreID</label>
//                     <input
//                       type="storeID"
//                       name="storeID"
//                       value={formData.storeId}
//                       onChange={handleFormChange}
//                       className="p-1 w-full border rounded-md"
//                     />
//                   </div>

//                   <div className="flex items-center gap-4">
//                     <label className="w-1/3 text-xs font-medium text-gray-700">Email</label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleFormChange}
//                       className="p-1 w-full border rounded-md"
//                     />
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <label className="w-1/3 text-xs font-medium text-gray-700">PhoneNumber</label>
//                     <input
//                       type="phoneNumber"
//                       name="phoneNumber"
//                       value={formData.phoneNumber}
//                       onChange={handleFormChange}
//                       className="p-1 w-full border rounded-md"
//                     />
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <label className="w-1/3 text-xs font-medium text-gray-700">Location</label>
//                     <input
//                       type="location"
//                       name="location"
//                       value={formData.location}
//                       onChange={handleFormChange}
//                       className="p-1 w-full border rounded-md"
//                     />
//                   </div>

//                   {/* <div className="flex items-center gap-4">
//                     <label className="w-1/3 text-xs font-medium text-gray-700">Comments</label>
//                     <input
//                       type="comments"
//                       name="comments"
//                       value={formData.comments}
//                       onChange={handleFormChange}
//                       className="p-1 w-full border rounded-md"
//                     />
//                   </div> */}


//                 </div>
//               )}


// {activeStep === 1 && (
//                 <TableContainer component={Paper} className="mt-4 rounded-lg shadow">
//                   <Table>
//                     <TableHead>
//                       <TableRow>
//                         <StyledTableCell>Username</StyledTableCell>
//                         <StyledTableCell>Store ID</StyledTableCell>
//                         <StyledTableCell>Store Name</StyledTableCell>
//                         <StyledTableCell>Location</StyledTableCell>
//                       </TableRow>
//                     </TableHead>
//                     <TableBody>
//                       {(storeUsers || []).map((user) => (
//                         <StyledTableRow key={user.id}>
//                           <StyledTableCell>{user.username}</StyledTableCell>
//                           <StyledTableCell>{user.storeId}</StyledTableCell>
//                           <StyledTableCell>{user.storeName}</StyledTableCell>
//                           <StyledTableCell>{user.location}</StyledTableCell>
//                         </StyledTableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                 </TableContainer>
//               )}
              
//               <Box className="flex justify-between">
//                 <Button
//                   disabled={activeStep === 0}
//                   onClick={handleBack}
//                   className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
//                 >
//                   Back
//                 </Button>
//                 <Button
//                   onClick={activeStep === steps.length - 1 ? handleFormSubmit : handleNext}
//                   className="bg-blue-500 text-white px-4 py-2 rounded"
//                 >
//                   {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
//                 </Button>
//               </Box>
//             </React.Fragment>
//           )}
//         </Box>
//       </div>
//     </div>
//   );
// }

// export default StoreForm;

// import React, { useState, useContext, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { StoreContext } from "../../Context/storeContext";
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';
// import TableCell from '@mui/material/TableCell';
// import TableRow from '@mui/material/TableRow';

// // Styled table components
// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   backgroundColor: theme.palette.grey[100],
//   color: theme.palette.text.primary,
//   fontWeight: 'bold',
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
// }));

// // Steps for stepper
// const steps = ['Store Details', 'Store Users'];

// function StoreForm() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { storeDetails } = useContext(StoreContext);
//   const [storeUsers, setStoreUsers] = useState([]);

//   const [activeStep, setActiveStep] = useState(0);
//   const [stores, setStores] = useState([]); // State for storing fetched stores
//   const [loading, setLoading] = useState(true);


//   const isEditMode = Boolean(location.state?.storeDetails?.store || storeDetails?.store);

//   const [formData, setFormData] = useState(location.state?.storeDetails || {
//     TenantID: 1,
//     StoreID: null, // StoreID should be null initially for creation
//     StoreName: "",
//     Email: "",
//     Password: "",
//     Phone: "",
//     Address: "",
//   });

//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (isEditMode) {
//       const store = location.state?.storeDetails?.store || storeDetails?.store;
//       setFormData({
//         TenantID: store.TenantID || 1,
//         StoreID: store.StoreID || null,
//         StoreName: store.StoreName || "",
//         Email: store.Email || "",
//         Phone: store.Phone || "",
//         Password: "",  // Password cleared for edit mode
//         Address: store.Address || "",
//       });
//     }
//   }, [isEditMode, location.state?.storeDetails?.store, storeDetails?.store]);

//   // Fetch store users based on StoreID
//   const fetchStoreUsers = async (storeId) => {
//     if (!storeId) return; // Exit if no storeId

//     try {
//       const response = await axios.get(`https://imlystudios-backend-mqg4.onrender.com/api/users/getUsersByStoreId/${storeId}`);
//       setStoreUsers(response.data.users || []); // Set the users in state
//       console.log("Fetched Users:", response.data.users);
//     } catch (err) {
//       console.error("Error fetching store users:", err);
//       setError("Failed to fetch store users.");
//     }
//   };

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
  
//     const isUpdate = formData.StoreID ? true : false;
//     const apiUrl = "https://imlystudios-backend-mqg4.onrender.com/api/stores/createOrUpdateStore";
  
//     try {
//       const response = await axios.post(apiUrl, formData);
//       console.log("Full Response:", response);
  
//       navigate("/Stores");
//     } catch (error) {
//       console.error("Submission failed:", error);
//       if (error.response) {
//         setError(`Failed to ${isUpdate ? 'update' : 'create'} store: ` + error.response.data.message);
//       } else if (error.request) {
//         setError("No response received from server.");
//       } else {
//         setError("Error: " + error.message);
//       }
//     }
//   };

//   const handleNext = () => {
//     setActiveStep((prevStep) => prevStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevStep) => prevStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//     setFormData({
//       StoreName: "",
//       Email: "",
//       PhoneNumber: "",
//       Location: "",
//       Comments: "",
//     });
//   };

//   const isStepSkipped = (step) => false;

//   return (
//     <div className="p-6 mr-10 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-80 w-1/8 rounded-lg">
//       <ToastContainer />
//       <div className="p-6 mb-7 sm:px-6 lg:px-8 pt-4 bg-white shadow-lg rounded-lg">
//         <Box sx={{ width: '100%' }}>
//           <Stepper activeStep={activeStep} alternativeLabel>
//             {steps.map((label, index) => (
//               <Step key={label} completed={isStepSkipped(index) ? false : undefined}>
//                 <StepLabel>{label}</StepLabel>
//               </Step>
//             ))}
//           </Stepper>

//           {activeStep === steps.length ? (
//             <React.Fragment>
//               <Typography className="text-center text-xl mb-4">
//                 All steps completed - you're finished
//               </Typography>
//               <Box className="justify-center">
//                 <Button onClick={handleReset} className="bg-blue-500 text-white px-4 py-2 rounded">
//                   Reset
//                 </Button>
//               </Box>
//             </React.Fragment>
//           ) : (
//             <React.Fragment>
//               {activeStep === 0 && (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
//                   <div className="flex items-center gap-4">
//                     <label className="w-1/3 text-xs font-medium text-gray-700">Store Name</label>
//                     <input
//                       type="text"
//                       name="StoreName"
//                       value={formData.StoreName}
//                       onChange={handleFormChange}
//                       className="p-1 w-full border rounded-md"
//                     />
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <label className="w-1/3 text-xs font-medium text-gray-700">StoreID</label>
//                     <input
//                       type="text"
//                       name="StoreID"
//                       value={formData.StoreID}
//                       onChange={handleFormChange}
//                       className="p-1 w-full border rounded-md"
//                     />
//                   </div>

//                   <div className="flex items-center gap-4">
//                     <label className="w-1/3 text-xs font-medium text-gray-700">Email</label>
//                     <input
//                       type="email"
//                       name="Email"
//                       value={formData.Email}
//                       onChange={handleFormChange}
//                       className="p-1 w-full border rounded-md"
//                     />
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <label className="w-1/3 text-xs font-medium text-gray-700">PhoneNumber</label>
//                     <input
//                       type="text"
//                       name="Phone"
//                       value={formData.Phone}
//                       onChange={handleFormChange}
//                       className="p-1 w-full border rounded-md"
//                     />
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <label className="w-1/3 text-xs font-medium text-gray-700">Location</label>
//                     <input
//                       type="text"
//                       name="Location"
//                       value={formData.Address}
//                       onChange={handleFormChange}
//                       className="p-1 w-full border rounded-md"
//                     />
//                   </div>
//                 </div>
//               )}

//               {activeStep === 1 && (
//                 <TableContainer component={Paper} className="mt-4 rounded-lg shadow">
//                   <Table>
//                     <TableHead>
//                       <TableRow>
//                         <StyledTableCell>Username</StyledTableCell>
//                         <StyledTableCell>Store ID</StyledTableCell>
//                         <StyledTableCell>Store Name</StyledTableCell>
//                         <StyledTableCell>Location</StyledTableCell>
//                       </TableRow>
//                     </TableHead>
//                     <TableBody>
//                       {storeUsers.map((user) => (
//                         <StyledTableRow key={user.id}>
//                           <StyledTableCell>{user.name}</StyledTableCell>
//                           <StyledTableCell>{user.storeId}</StyledTableCell>
//                           <StyledTableCell>{user.storeName}</StyledTableCell>
//                           <StyledTableCell>{user.location}</StyledTableCell>
//                         </StyledTableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                 </TableContainer>
//               )}

//               <Box className="flex justify-between mt-4">
//                 <Button disabled={activeStep === 0} onClick={handleBack} className="bg-blue-500 text-white px-4 py-2 rounded">
//                   Back
//                 </Button>
//                 <Button onClick={activeStep === steps.length - 1 ? handleFormSubmit : handleNext} className="bg-blue-500 text-white px-4 py-2 rounded">
//                   {activeStep === steps.length - 1 ? "Finish" : "Next"}
//                 </Button>
//               </Box>
//             </React.Fragment>
//           )}
//         </Box>
//       </div>
//     </div>
//   );
// }

// export default StoreForm;

// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { StoreContext } from "../../Context/storeContext";
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';
// import TableCell from '@mui/material/TableCell';
// import TableRow from '@mui/material/TableRow';

// // Styled table components
// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   backgroundColor: theme.palette.grey[100],
//   color: theme.palette.text.primary,
//   fontWeight: 'bold',
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
// }));

// // Steps for stepper
// const steps = ['Store Details', 'Store Users'];

// function StoreForm() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { storeDetails } = useContext(StoreContext);
//   const [storeUsers, setStoreUsers] = useState([]);
//   const [formData, setFormData] = useState(location.state?.storeDetails || {
//     TenantID: 1,
//     StoreID: null,
//     StoreName: "",
//     Email: "",
//     Password: "",
//     Phone: "",
//     Address: "",
//   });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [activeStep, setActiveStep] = useState(0);

//   const isEditMode = Boolean(location.state?.storeDetails?.store || storeDetails?.store);

//   useEffect(() => {
//     if (isEditMode) {
//       const store = location.state?.storeDetails?.store || storeDetails?.store;
//       setFormData({
//         TenantID: store.TenantID || 1,
//         StoreID: store.StoreID || null,
//         StoreName: store.StoreName || "",
//         Email: store.Email || "",
//         Phone: store.Phone || "",
//         Password: "",  // Password cleared for edit mode
//         Address: store.Address || "",
//       });
//     }
//   }, [isEditMode, location.state?.storeDetails?.store, storeDetails?.store]);

//   // Fetch store users based on StoreID
//   useEffect(() => {
//     const fetchStoreUsers = async (storeId) => {
//       if (!storeId) return; // Exit if no storeId

//       try {
//         const response = await axios.get(`https://imlystudios-backend-mqg4.onrender.com/api/users/getUsersByStoreId/${storeId}`);
//         setStoreUsers(response.data.users || []); // Set the users in state
//         console.log("Fetched Users:", response.data.users);
//       } catch (err) {
//         console.error("Error fetching store users:", err);
//         setError("Failed to fetch store users.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     // Only call fetchStoreUsers if StoreID exists
//     if (formData.StoreID) {
//       fetchStoreUsers(formData.StoreID);
//     }
//   }, [formData.StoreID]);

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     const isUpdate = formData.StoreID ? true : false;
//     const apiUrl = "https://imlystudios-backend-mqg4.onrender.com/api/stores/createOrUpdateStore";

//     try {
//       const response = await axios.post(apiUrl, formData);
//       console.log("Full Response:", response);
//       navigate("/Stores");
//     } catch (error) {
//       console.error("Submission failed:", error);
//       if (error.response) {
//         setError(`Failed to ${isUpdate ? 'update' : 'create'} store: ` + error.response.data.message);
//       } else if (error.request) {
//         setError("No response received from server.");
//       } else {
//         setError("Error: " + error.message);
//       }
//     }
//   };

//   const handleNext = () => {
//     setActiveStep((prevStep) => prevStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevStep) => prevStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//     setFormData({
//       TenantID: 1,
//       StoreID: null,
//       StoreName: "",
//       Email: "",
//       Password: "",
//       Phone: "",
//       Address: "",
//     });
//   };

//   const isStepSkipped = (step) => false;

//   return (
//     <div className="p-6 mr-10 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-80 w-1/8 rounded-lg">
//       <ToastContainer />
//       <div className="p-6 mb-7 sm:px-6 lg:px-8 pt-4 bg-white shadow-lg rounded-lg">
//         <Box sx={{ width: '100%' }}>
//           <Stepper activeStep={activeStep} alternativeLabel>
//             {steps.map((label, index) => (
//               <Step key={label} completed={isStepSkipped(index) ? false : undefined}>
//                 <StepLabel>{label}</StepLabel>
//               </Step>
//             ))}
//           </Stepper>

//           {activeStep === steps.length ? (
//             <React.Fragment>
//               <Typography className="text-center text-xl mb-4">
//                 All steps completed - you're finished
//               </Typography>
//               <Box className="justify-center">
//                 <Button onClick={handleReset} className="bg-blue-500 text-white px-4 py-2 rounded">
//                   Reset
//                 </Button>
//               </Box>
//             </React.Fragment>
//           ) : (
//             <React.Fragment>
//               {activeStep === 0 && (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
//                   <div className="flex items-center gap-4">
//                     <label className="w-1/3 text-xs font-medium text-gray-700">Store Name</label>
//                     <input
//                       type="text"
//                       name="StoreName"
//                       value={formData.StoreName}
//                       onChange={handleFormChange}
//                       className="p-1 w-full border rounded-md"
//                     />
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <label className="w-1/3 text-xs font-medium text-gray-700">StoreID</label>
//                     <input
//                       type="text"
//                       name="StoreID"
//                       value={formData.StoreID} // Ensure consistency here
//                       onChange={handleFormChange}
//                       className="p-1 w-full border rounded-md"
//                     />
//                   </div>

//                   <div className="flex items-center gap-4">
//                     <label className="w-1/3 text-xs font-medium text-gray-700">Email</label>
//                     <input
//                       type="email"
//                       name="Email"
//                       value={formData.Email}
//                       onChange={handleFormChange}
//                       className="p-1 w-full border rounded-md"
//                     />
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <label className="w-1/3 text-xs font-medium text-gray-700">Phone</label>
//                     <input
//                       type="text"
//                       name="Phone"
//                       value={formData.Phone}
//                       onChange={handleFormChange}
//                       className="p-1 w-full border rounded-md"
//                     />
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <label className="w-1/3 text-xs font-medium text-gray-700">Address</label>
//                     <input
//                       type="text"
//                       name="Address"
//                       value={formData.Address}
//                       onChange={handleFormChange}
//                       className="p-1 w-full border rounded-md"
//                     />
//                   </div>
//                 </div>
//               )}

//               {activeStep === 1 && (
//                 <TableContainer component={Paper} className="mt-4 rounded-lg shadow">
//                   <Table>
//                     <TableHead>
//                       <TableRow>
//                         <StyledTableCell>Username</StyledTableCell>
//                         <StyledTableCell>Store ID</StyledTableCell>
//                         <StyledTableCell>Email</StyledTableCell>
//                         <StyledTableCell>Phone</StyledTableCell>
//                       </TableRow>
//                     </TableHead>
//                     <TableBody>
//                       {storeUsers.map((user) => (
//                         <StyledTableRow key={user.id}>
//                           <StyledTableCell>{user.username}</StyledTableCell>
//                           <StyledTableCell>{user.storeId}</StyledTableCell>
//                           <StyledTableCell>{user.email}</StyledTableCell>
//                           <StyledTableCell>{user.phone}</StyledTableCell>
//                         </StyledTableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                 </TableContainer>
//               )}

//               <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
//                 <Button
//                   disabled={activeStep === 0}
//                   onClick={handleBack}
//                   className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
//                 >
//                   Back
//                 </Button>
//                 <Button
//                   onClick={activeStep === steps.length - 1 ? handleFormSubmit : handleNext}
//                   className="bg-blue-500 text-white px-4 py-2 rounded"
//                 >
//                   {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//                 </Button>
//               </Box>
//             </React.Fragment>
//           )}
//         </Box>
//       </div>
//     </div>
//   );
// }

// export default StoreForm;

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { StoreContext } from "../../Context/storeContext";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Combobox } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/24/solid';
import { CheckIcon } from '@heroicons/react/24/solid';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';



// Styled table components
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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

// Steps for stepper
const steps = ["Store Details", "Store Users"];

function StoreForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { storeDetails } = useContext(StoreContext);
  const [storeUsers, setStoreUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [countryMap, setCountryMap] = useState({});
  const [stateMap, setStateMap] = useState({});
  const [cityMap, setCityMap] = useState({});
  const [formData, setFormData] = useState(
    location.state?.storeDetails || {
      TenantID: 1,
      StoreID: null,
      StoreName: "",
      Email: "",
      // Password: "",
      Phone: "",
      AddressLine1: "",
      AddressLine2: "",
      CityID: "",
      StateID: "",
      CountryID:"",
      ZipCode: "",
    }
  );

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [activeStep, setActiveStep] = useState(0);

  const isEditMode = Boolean(
    location.state?.storeDetails?.store || storeDetails?.store
  );

  useEffect(() => {
    if (isEditMode) {
      const store = location.state?.storeDetails?.store || storeDetails?.store;
      setFormData({
        TenantID: store.TenantID || 1,
        StoreID: store.StoreID || null,
        StoreName: store.StoreName || "",
        Email: store.Email || "",
        Phone: store.Phone || "",
        // Password: "", // Password cleared for edit mode
        CityID: store?.Addresses?.[0]?.CityID || "",
        StateID: store?.Addresses?.[0]?.StateID || "",
        CountryID: store?.Addresses?.[0]?.CountryID || "",
        ZipCode: store?.Addresses?.[0]?.ZipCode || "",
        Address: store.Address || "",
      });
    }
  }, [isEditMode, location.state?.storeDetails?.store, storeDetails?.store]);

  // Fetch store users based on StoreID
  useEffect(() => {
    const fetchStoreUsers = async (storeId) => {
      if (!storeId) return; // Exit if no storeId

      try {
        const response = await axios.get(
          `https://imlystudios-backend-mqg4.onrender.com/api/mapstoreusers/mapstoreuser/${storeId}`
        );
        setStoreUsers(response.data.users || []); // Set the users in state
      } catch (err) {
        console.error("Error fetching store users:", err);
        setError("Failed to fetch store users.");
      } finally {
        setLoading(false);
      }
    };

    // Only call fetchStoreUsers if StoreID exists
    if (formData.StoreID) {
      fetchStoreUsers(formData.StoreID);
    }
  }, [formData.StoreID]);

  // Handle search input changes
  //   const handleSearchChange = (e) => {
  //     setSearchQuery(e.target.value);
  //   };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const isUpdate = formData.StoreID ? true : false;
    const apiUrl =
      "https://imlystudios-backend-mqg4.onrender.com/api/stores/createOrUpdateStore";

    try {
      const response = await axios.post(apiUrl, formData);
      navigate("/Stores");
    } catch (error) {
      console.error("Submission failed:", error);
      if (error.response) {
        setError(
          `Failed to ${isUpdate ? "update" : "create"} store: ` +
          error.response.data.message
        );
      } else if (error.request) {
        setError("No response received from server.");
      } else {
        setError("Error: " + error.message);
      }
    }
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };
  

  const handleReset = () => {
    setActiveStep(0);
    setFormData({
      TenantID: 1,
      StoreID: null,
      StoreName: "",
      Email: "",
      // Password: "",
      Phone: "",
      AddressLine1: "",
      AddressLine2: "",
      CityID: "",
      StateID: "",
      CountryID:"",
      ZipCode: "",
    });
  };



  const isStepSkipped = (step) => false;
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const [users, setUsers] = useState([]); // All users from the API
  const [filteredUsers, setFilteredUsers] = useState([]); // Users after filtering
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [query, setQuery] = useState('');

  // Filter store users by search query
  //   const filteredUsers = storeUsers.filter(user =>
  //     user.username.toLowerCase().includes(searchQuery.toLowerCase())
  //   );

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await fetch('https://imlystudios-backend-mqg4.onrender.com/api/mapstoreusers/getallmapstoreuser');  // Replace with actual API URL
  //       const data = await response.json();
  //       // **Changed Line**: Map both User and StoreID
  //       const usersData = data.data.map((item) => ({
  //         ...item.User,  // Extract User details
  //         StoreID: item.StoreID  // Include StoreID
  //       }));
  //       setUsers(usersData);  // Store all users data
  //     } catch (error) {
  //       console.error('Error fetching users:', error);
  //     }
  //   };
  //   fetchUsers();
  // }, []);

  // const handleSearchChange = (e) => {
  //   const query = e.target.value.toLowerCase();
  //   setSearchQuery(query);

  //   // **Changed line**
  //   if (query.trim()) {  // Only filter users if there's a search query
  //     const filtered = users.filter((user) =>
  //       user.FirstName.toLowerCase().includes(query) ||
  //       user.LastName.toLowerCase().includes(query) ||
  //       user.Email.toLowerCase().includes(query)
  //     );
  //     setFilteredUsers(filtered);  // Update the filtered users based on the search query
  //   } else {
  //     setFilteredUsers([]);  // Clear the filtered users if the search query is empty
  //   }
  // }; // Update the filtered users

  
  const [tableUsers, setTableUsers] = useState([]); // Users added to the table
  const [selectedUsers, setSelectedUsers] = useState([]); // Users selected in the popup
  const [isModalOpen, setIsModalOpen] = useState(false); // Control the modal state

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://imlystudios-backend-mqg4.onrender.com/api/mapstoreusers/getallmapstoreuser"
        );
        const data = await response.json();
        const usersData = data.data.map((item) => ({
          ...item.User,
          StoreID: item.StoreID,
        }));
        setUsers(usersData); // Store all users data
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.trim()) {
      const filtered = users.filter(
        (user) =>
          user.FirstName.toLowerCase().includes(query) ||
          user.LastName.toLowerCase().includes(query) ||
          user.Email.toLowerCase().includes(query)
      );
      setFilteredUsers(filtered);
      setIsModalOpen(true); // Open the modal to show filtered results
    } else {
      setFilteredUsers([]); // Clear filtered users if the search query is empty
    }
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Handle the addition of filtered users to the table
  const handleAddUsers = () => {
    setTableUsers((prevUsers) => [...prevUsers, ...selectedUsers]); // Add selected users to the table
    setSelectedUsers([]); // Clear selected users
    setIsModalOpen(false); // Close the modal after adding users
  };

  // Handle user selection in the popup (you can make this more complex to allow selecting multiple users)
  const handleSelectUser = (user) => {
    setSelectedUsers([user]); // Select the user to be added
  };


  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://imlystudios-backend-mqg4.onrender.com/api/cities/getCountries');
        const countryData = response.data.data;
        setCountries(countryData);

        // Create countryMap
        const countryMapData = countryData.reduce((map, country) => {
          map[country.CountryName] = country.CountryID;
          return map;
        }, {});
        setCountryMap(countryMapData);

        console.log("Fetched countries:", countryData);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const fetchStatesByCountry = async (countryId) => {
    if (!countryId) return;

    try {
      const response = await axios.get(`https://imlystudios-backend-mqg4.onrender.com/api/cities/getStatesByCountry?$filter=CountryID eq ${countryId}`);
      if (response.data.status === "SUCCESS") {
        const stateData = response.data.data;
        setStates(stateData);

        // Create stateMap
        const stateMapData = stateData.reduce((map, state) => {
          map[state.StateName] = state.StateID;
          return map;
        }, {});
        setStateMap(stateMapData);

        console.log("Fetched states:", stateData);
      }
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  const fetchCitiesByState = async (stateId) => {
    if (!stateId) return;

    try {
      const response = await axios.get(`https://imlystudios-backend-mqg4.onrender.com/api/cities/getCitiesByState?$filter=StateID eq ${stateId}`);
      if (response.data.status === "SUCCESS") {
        const cityData = response.data.data;
        setCities(cityData);

        // Create cityMap
        const cityMapData = cityData.reduce((map, city) => {
          map[city.CityName] = city.CityID;
          return map;
        }, {});
        setCityMap(cityMapData);

        console.log("Fetched cities:", cityData);
      }
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };
  const handleCountryChange = (selectedCountry) => {
    if (!selectedCountry) return;

    const countryID = countryMap[selectedCountry.CountryName] || selectedCountry.CountryID;

    setSelectedCountry(selectedCountry);
    setFormData({
      ...formData,
      CountryID: countryID,
      CountryName: selectedCountry.CountryName
    });
    fetchStatesByCountry(countryID);

  };

  const handleStateChange = (state) => {
    if (!state) return;

    const stateID = stateMap[state.StateName] || state.StateID;

    setSelectedState(state);
    setFormData({
      ...formData,
      StateID: stateID,
      StateName: state.StateName
    });
    fetchCitiesByState(stateID);
  };

 
  const handleCancel = () => {
    // Example: Reset form or navigate to a different page
    console.log('Cancel clicked');
    // If you want to navigate away from the form, for example:
    navigate('/Stores');  // This assumes you're using `react-router-dom` for navigation
  };

  const handleCityChange = (city) => {
    if (!city) return;

    const cityID = cityMap[city.CityName] || city.CityID;

    setSelectedCity(city);
    setFormData({
      ...formData,
      CityID: cityID,
      CityName: city.CityName
    });
  };


  return (
    <div className="p-6 mr-10 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-80 w-1/8 rounded-lg">
      <ToastContainer />
      <div className="p-6 mb-7 sm:px-6 lg:px-8 pt-4 bg-white shadow-lg rounded-lg">
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
              <Step
                key={label}
                completed={isStepSkipped(index) ? false : undefined}
              >
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography className="text-center text-xl mb-4">
                All steps completed - you're finished
              </Typography>
              <Box className="justify-center">
                <Button
                  onClick={handleReset}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Reset
                </Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {activeStep === 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  {/* Store Details Form */}
                  <div className="flex items-center gap-4">
                    <label className="w-1/3 text-xs font-medium text-gray-700">StoreName</label>
                    <input
                      type="text"
                      name="StoreName"
                      value={formData.StoreName}
                      onChange={handleFormChange}
                      className={`p-1 mt-2 mb-1 w-full border rounded-md ${error ? 'border-red-500' : 'border-gray-400'}`}
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <label className="w-1/3 text-xs font-medium text-gray-700">Address Line 1</label>
                    <input
                      type="text"
                      name="AddressLine1"
                      value={formData.AddressLine1}
                      onChange={handleFormChange}
                      className={`p-1 w-full border rounded-md ${error ? 'border-red-500' : 'border-gray-400'}`}
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <label className="w-1/3 text-xs font-medium text-gray-700">StoreCode</label>
                    <input
                      type="text"
                      name="StoreCode"
                      value={formData.StoreCode}
                      onChange={handleFormChange}
                      className={`p-1 w-full border rounded-md ${error ? 'border-red-500' : 'border-gray-400'}`}
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <label className="w-1/3 text-xs font-medium text-gray-700">Address Line 2</label>
                    <input
                      type="text"
                      name="AddressLine2"
                      value={formData.AddressLine2}
                      onChange={handleFormChange}
                      className={`p-1 mt-2 mb-1 w-full border rounded-md ${error ? 'border-red-500' : 'border-gray-400'}`}
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <label className="w-1/3 text-xs font-medium text-gray-700">Email</label>
                    <input
                      type="text"
                      name="Email"
                      value={formData.Email}
                      onChange={handleFormChange}
                      className={`p-1 w-full border rounded-md ${error ? 'border-red-500' : 'border-gray-400'}`}
                    />
                  </div>

                 

                  <div className="flex items-center gap-4">
                    <label className="w-1/3 text-xs font-medium text-gray-700">Country</label>
                    <div className="w-full">
                      <Combobox as="div" value={selectedCountry} onChange={handleCountryChange}>
                        <div className="relative">
                          <Combobox.Input
                            className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                            onChange={(event) => setQuery(event.target.value)} // Set the query for filtering
                            displayValue={(country) => country?.CountryName || ''} // Display selected country name
                          />
                          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </Combobox.Button>

                          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {countries
                              .filter((country) =>
                                country.CountryName.toLowerCase().includes(query.toLowerCase())
                              )
                              .map((country) => (
                                <Combobox.Option
                                  key={country.CountryID}
                                  value={country} // Pass the full country object to onChange
                                  className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
                                >
                                  <span className="block truncate font-normal group-data-[selected]:font-semibold">
                                    {country.CountryName}
                                  </span>
                                  <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                  </span>
                                </Combobox.Option>
                              ))}
                          </Combobox.Options>
                        </div>
                      </Combobox>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <label className="w-1/3 text-xs font-medium text-gray-700">Contact</label>
                    <input
                      type="text"
                      name="Phone"
                      value={formData.Phone}
                      onChange={handleFormChange}
                      className={`p-1 w-full border rounded-md ${error ? 'border-red-500' : 'border-gray-400'}`}
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <label className="w-1/3 text-xs font-medium text-gray-700">State</label>
                    <div className="w-full">
                      <Combobox as="div" value={selectedState} onChange={handleStateChange}>
                        <div className="relative">
                          <Combobox.Input
                            className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                            onChange={(event) => setQuery(event.target.value)} // Handle the search query
                            displayValue={(state) => state?.StateName || ''} // Show the selected state name
                          />
                          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </Combobox.Button>

                          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {states
                              .filter((state) => state.StateName.toLowerCase().includes(query.toLowerCase())) // Filter based on query
                              .map((state) => (
                                <Combobox.Option
                                  key={state.StateID}
                                  value={state}
                                  className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
                                >
                                  <span className="block truncate font-normal group-data-[selected]:font-semibold">
                                    {state.StateName}
                                  </span>
                                  <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                  </span>
                                </Combobox.Option>
                              ))}
                          </Combobox.Options>
                        </div>
                      </Combobox>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <label className="w-1/3 text-xs font-medium text-gray-700">Zip Code</label>
                    <input
                      type="text"
                      name="ZipCode"
                      value={formData.ZipCode}
                      onChange={handleFormChange}
                      className={`p-1 w-full border rounded-md ${error ? 'border-red-500' : 'border-gray-400'}`}
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <label className="w-1/3 text-xs font-medium text-gray-700">City</label>
                    <div className="w-full">
                      <Combobox as="div" value={selectedCity} onChange={handleCityChange}>
                        <div className="relative">
                          <Combobox.Input
                            className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                            onChange={(event) => setQuery(event.target.value)} // Handle the search query
                            displayValue={(city) => city?.CityName || ''} // Show the selected city name
                          />
                          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </Combobox.Button>

                          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {cities
                              .filter((city) => city.CityName.toLowerCase().includes(query.toLowerCase())) // Filter based on query
                              .map((city) => (
                                <Combobox.Option
                                  key={city.CityID}
                                  value={city}
                                  className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
                                >
                                  <span className="block truncate font-normal group-data-[selected]:font-semibold">
                                    {city.CityName}
                                  </span>
                                  <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                  </span>
                                </Combobox.Option>
                              ))}
                          </Combobox.Options>
                        </div>
                      </Combobox>
                    </div>
                  </div>

                 
                
                  <div className="mt-6 flex justify-end gap-4">
                    <button
                      type="submit"
                      onClick={handleFormSubmit}
                      className="inline-flex justify-center rounded-md border border-transparent bg-custom-darkblue py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-custom-lightblue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-red-200"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              {activeStep === 1 && (
                <div>
                    <div>
      {/* Search bar */}
      <div className="flex items-center justify-center mb-4">
        <input
          type="text"
          placeholder="Search by username"
          value={searchQuery}
          onChange={handleSearchChange}
          className="border rounded p-2 w-64"
        />
      </div>

      {/* Table displaying stored users */}
      <TableContainer component={Paper}>
        <Table aria-label="store users table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Username</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Phone</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableUsers.map((user, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell>
                  {user.FirstName} {user.LastName}
                </StyledTableCell>
                <StyledTableCell>{user.Email}</StyledTableCell>
                <StyledTableCell>{user.PhoneNumber}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal to show filtered users */}
      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogTitle>Filtered Users</DialogTitle>
        <DialogContent>
          <TableContainer component={Paper}>
            <Table aria-label="filtered users table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Username</StyledTableCell>
                  <StyledTableCell>Email</StyledTableCell>
                  <StyledTableCell>Phone</StyledTableCell>
                  <StyledTableCell>Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsers.map((user) => (
                  <StyledTableRow key={user.UserID}>
                    <StyledTableCell>
                      {user.FirstName} {user.LastName}
                    </StyledTableCell>
                    <StyledTableCell>{user.Email}</StyledTableCell>
                    <StyledTableCell>{user.PhoneNumber}</StyledTableCell>
                    <StyledTableCell>
                      <Button
                        onClick={() => handleSelectUser(user)}
                        variant="contained"
                      >
                        Select
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancel</Button>
          <Button
            onClick={handleAddUsers}
            variant="contained"
            disabled={selectedUsers.length === 0} // Disable Add if no user is selected
          >
            Add Users
          </Button>
        </DialogActions>
      </Dialog>
    </div>
                </div>
              )}

              <Box className="flex justify-between mt-4">
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </div>
    </div>
  );
}

export default StoreForm;