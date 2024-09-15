// // 

// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// export default function AddEditProduct({ products, setProducts }) {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [product, setProduct] = useState({
//     name: '',
//     price: '',
//     discount: '',
//     size: '',
//     stock: '',
//     image: ''
//   });

//   useEffect(() => {
//     if (location.state && location.state.product) {
//       setProduct(location.state.product);
//     }
//   }, [location.state]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct((prevProduct) => ({
//       ...prevProduct,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (location.state && location.state.product) {
//       setProducts(products.map(p => p.name === product.name ? product : p));
//     } else {
//       setProducts([...products, product]);
//     }
//     navigate('/products');
//   };

//   return (
//     <div className="max-w-lg mx-auto my-10">
//       <h2 className="text-2xl font-semibold mb-6">{product.name ? 'Edit Product' : 'Add Product'}</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700" htmlFor="name">Product Name</label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             value={product.name}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700" htmlFor="price">Price</label>
//           <input
//             type="text"
//             name="price"
//             id="price"
//             value={product.price}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700" htmlFor="discount">Discount</label>
//           <input
//             type="text"
//             name="discount"
//             id="discount"
//             value={product.discount}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700" htmlFor="size">Size</label>
//           <input
//             type="text"
//             name="size"
//             id="size"
//             value={product.size}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700" htmlFor="stock">Stock</label>
//           <input
//             type="number"
//             name="stock"
//             id="stock"
//             value={product.stock}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700" htmlFor="image">Image URL</label>
//           <input
//             type="text"
//             name="image"
//             id="image"
//             value={product.image}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             required
//           />
//         </div>
//         <div className="mt-6">
//           <button
//             type="submit"
//             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             {product.name ? 'Update Product' : 'Add Product'}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaPen, FaTrash, FaPlus } from 'react-icons/fa';
// import * as XLSX from 'xlsx';
// import shirtImage from "../../assests/Images/Tshrit2.jpg";
// import Shirt2 from "../../assests/Images/Tshrit3.png";
// import Shirt3 from "../../assests/Images/similar product.jpg";
// import Shirt4 from "../../assests/Images/denimjacket.png";
// import Shirt5 from "../../assests/Images/Hoodie.png";
// import Shirt6 from "../../assests/Images/polo.png";
// import jeans from "../../assests/Images/jeans.png";
// import sweatshirt from '../../assests/Images/Sweatshirt.png';

// const products = [
//   { name: 'T-Shirt', price: '₹1000', discount: '10%', size: 'M', stock: 50, image: shirtImage, category: 'Clothing', description: 'Comfortable cotton T-shirt' },
//   { name: 'Casual Shirt', price: '₹1200', discount: '15%', size: 'L', stock: 30, image: Shirt2, category: 'Clothing', description: 'Stylish casual shirt' },
//   { name: 'Formal Shirt', price: '₹1500', discount: '20%', size: 'S', stock: 20, image: Shirt3, category: 'Clothing', description: 'Elegant formal shirt' },
//   { name: 'Denim Jacket', price: '₹2500', discount: '25%', size: 'XL', stock: 10, image: Shirt4, category: 'Clothing', description: 'Trendy denim jacket' },
//   { name: 'Hoodie', price: '₹2000', discount: '30%', size: 'M', stock: 5, image: Shirt5, category: 'Clothing', description: 'Warm and cozy hoodie' },
//   { name: 'Polo Shirt', price: '₹800', discount: '35%', size: 'L', stock: 15, image: Shirt6, category: 'Clothing', description: 'Classic polo shirt' },
//   { name: 'Jeans', price: '₹1800', discount: '40%', size: 'S', stock: 25, image: jeans, category: 'Clothing', description: 'Comfortable jeans' },
//   { name: 'Sweatshirt', price: '₹1500', discount: '45%', size: 'XL', stock: 35, image: sweatshirt, category: 'Clothing', description: 'Casual sweatshirt' },
// ];

// export default function AddEditProduct({ initialProduct }) {
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(initialProduct || {
//     name: '',
//     price: '',
//     discount: '',
//     size: '',
//     stock: '',
//     image: '',
//     category: '',
//     description: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct({ ...product, [name]: value });
//   };

//   const handleSave = () => {
//     // Handle save functionality here (e.g., updating the product list)
//     console.log('Product saved:', product);
//     navigate('/products');
//   };

//   const handleCancel = () => {
//     navigate('/products');
//   };

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       <div className="sm:flex sm:items-center">
//         <div className="sm:flex-auto">
//           <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-custom-heading">
//             {initialProduct ? 'Edit Product' : 'Add Product'}
//           </h2>
//           <p className="mt-2 text-sm text-gray-700">
//             {initialProduct ? 'Edit the product details below.' : 'Fill in the product details below.'}
//           </p>
//         </div>
//       </div>
//       <div className="mt-8 flow-root">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <form>
//               <div className="shadow sm:rounded-md sm:overflow-hidden">
//                 <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
//                   <div className="grid grid-cols-6 gap-6">
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                         Product Name
//                       </label>
//                       <input
//                         type="text"
//                         name="name"
//                         id="name"
//                         value={product.name}
//                         onChange={handleChange}
//                         className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="price" className="block text-sm font-medium text-gray-700">
//                         Price
//                       </label>
//                       <input
//                         type="text"
//                         name="price"
//                         id="price"
//                         value={product.price}
//                         onChange={handleChange}
//                         className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="discount" className="block text-sm font-medium text-gray-700">
//                         Discount
//                       </label>
//                       <input
//                         type="text"
//                         name="discount"
//                         id="discount"
//                         value={product.discount}
//                         onChange={handleChange}
//                         className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="size" className="block text-sm font-medium text-gray-700">
//                         Size
//                       </label>
//                       <input
//                         type="text"
//                         name="size"
//                         id="size"
//                         value={product.size}
//                         onChange={handleChange}
//                         className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
//                         Stock
//                       </label>
//                       <input
//                         type="text"
//                         name="stock"
//                         id="stock"
//                         value={product.stock}
//                         onChange={handleChange}
//                         className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="image" className="block text-sm font-medium text-gray-700">
//                         Image URL
//                       </label>
//                       <input
//                         type="text"
//                         name="image"
//                         id="image"
//                         value={product.image}
//                         onChange={handleChange}
//                         className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="category" className="block text-sm font-medium text-gray-700">
//                         Category
//                       </label>
//                       <input
//                         type="text"
//                         name="category"
//                         id="category"
//                         value={product.category}
//                         onChange={handleChange}
//                         className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6">
//                       <label htmlFor="description" className="block text-sm font-medium text-gray-700">
//                         Description
//                       </label>
//                       <textarea
//                         name="description"
//                         id="description"
//                         value={product.description}
//                         onChange={handleChange}
//                         rows="3"
//                         className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       ></textarea>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
//                   <button
//                     type="button"
//                     onClick={handleCancel}
//                     className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-3"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="button"
//                     onClick={handleSave}
//                     className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   >
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import shirtImage from "../../assests/Images/Tshrit2.jpg";
// import Shirt2 from "../../assests/Images/Tshrit3.png";
// import Shirt3 from "../../assests/Images/similar product.jpg";
// import Shirt4 from "../../assests/Images/denimjacket.png";
// import Shirt5 from "../../assests/Images/Hoodie.png";
// import Shirt6 from "../../assests/Images/polo.png";
// import jeans from "../../assests/Images/jeans.png";
// import sweatshirt from '../../assests/Images/Sweatshirt.png';

// export default function AddEditProduct() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const initialProduct = location.state?.product || {
//     name: '',
//     price: '',
//     discount: '',
//     size: '',
//     stock: '',
//     image: '',
//     category: '',
//     description: ''
//   };

//   const [product, setProduct] = useState(initialProduct);

//   useEffect(() => {
//     setProduct(initialProduct);
//   }, [initialProduct]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct({ ...product, [name]: value });
//   };

//   const handleSave = () => {
//     // Handle save functionality here (e.g., updating the product list)
//     console.log('Product saved:', product);
//     navigate('/products');
//   };

//   const handleCancel = () => {
//     navigate('/products');
//   };

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       <div className="sm:flex sm:items-center">
//         <div className="sm:flex-auto">
//           <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-custom-heading">
//             {initialProduct ? 'Edit Product' : 'Add Product'}
//           </h2>
//           <p className="mt-2 text-sm text-gray-700">
//             {initialProduct ? 'Edit the product details below.' : 'Fill in the product details below.'}
//           </p>
//         </div>
//       </div>
//       <div className="mt-8 flow-root">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <form>
//               <div className="shadow sm:rounded-md sm:overflow-hidden">
//                 <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
//                   <div className="grid grid-cols-6 gap-6">
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                         Product Name
//                       </label>
//                       <input
//                         type="text"
//                         name="name"
//                         id="name"
//                         value={product.name}
//                         onChange={handleChange}
//                         className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="price" className="block text-sm font-medium text-gray-700">
//                         Price
//                       </label>
//                       <input
//                         type="text"
//                         name="price"
//                         id="price"
//                         value={product.price}
//                         onChange={handleChange}
//                         className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="discount" className="block text-sm font-medium text-gray-700">
//                         Discount
//                       </label>
//                       <input
//                         type="text"
//                         name="discount"
//                         id="discount"
//                         value={product.discount}
//                         onChange={handleChange}
//                         className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="size" className="block text-sm font-medium text-gray-700">
//                         Size
//                       </label>
//                       <input
//                         type="text"
//                         name="size"
//                         id="size"
//                         value={product.size}
//                         onChange={handleChange}
//                         className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
//                         Stock
//                       </label>
//                       <input
//                         type="text"
//                         name="stock"
//                         id="stock"
//                         value={product.stock}
//                         onChange={handleChange}
//                         className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="image" className="block text-sm font-medium text-gray-700">
//                         Image URL
//                       </label>
//                       <input
//                         type="text"
//                         name="image"
//                         id="image"
//                         value={product.image}
//                         onChange={handleChange}
//                         className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="category" className="block text-sm font-medium text-gray-700">
//                         Category
//                       </label>
//                       <input
//                         type="text"
//                         name="category"
//                         id="category"
//                         value={product.category}
//                         onChange={handleChange}
//                         className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6">
//                       <label htmlFor="description" className="block text-sm font-medium text-gray-700">
//                         Description
//                       </label>
//                       <textarea
//                         name="description"
//                         id="description"
//                         value={product.description}
//                         onChange={handleChange}
//                         rows="3"
//                         className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       ></textarea>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
//                   <button
//                     type="button"
//                     onClick={handleCancel}
//                     className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-3"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="button"
//                     onClick={handleSave}
//                     className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   >
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import {
//   Combobox,
//   ComboboxButton,
//   ComboboxInput,
//   ComboboxOption,
//   ComboboxOptions,
// } from '@headlessui/react';
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// const categories = [
//   { id: 1, name: 'Tops' },
//   { id: 2, name: 'Bottoms' },
//   { id: 3, name: 'Accessories' },
//   // Add more categories as needed
// ];
// export default function AddEditProduct() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const initialProduct = location.state?.product || {
//     name: '',
//     price: '',
//     discount: '',
//     size: '',
//     stock: '',
//     image: '',
//     category: '',
//     description: ''
//   };

//   const [product, setProduct] = useState(initialProduct);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [query, setQuery] = useState('');

//   const filteredCategories = query === ''
//     ? categories
//     : categories.filter((category) => category.name.toLowerCase().includes(query.toLowerCase()));


//   useEffect(() => {
//     setProduct(initialProduct);
//   }, [initialProduct]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct({ ...product, [name]: value });
//   };

//   const handleSave = () => {
//     // Handle save functionality here (e.g., updating the product list)
//     console.log('Product saved:', product);
//     navigate('/products');
//   };

//   const handleCancel = () => {
//     navigate('/products');
//   };

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       <div className="sm:flex sm:items-center">
//         <div className="sm:flex-auto">
//           <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-custom-heading">
//             {initialProduct ? 'Edit Product' : 'Add Product'}
//           </h2>
//           <p className="mt-2 text-sm text-gray-700">
//             {initialProduct ? 'Edit the product details below.' : 'Fill in the product details below.'}
//           </p>
//         </div>
//       </div>
//       <div className="mt-8 flow-root">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <form>
//               <div className="shadow sm:rounded-md sm:overflow-hidden">
//                 <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
//                   <div className="grid grid-cols-6 gap-6">
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                         Product Name
//                       </label>
//                       <input
//                         type="text"
//                         name="name"
//                         id="name"
//                         value={product.name}
//                         onChange={handleChange}
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="price" className="block text-sm font-medium text-gray-700">
//                         Price
//                       </label>
//                       <input
//                         type="text"
//                         name="price"
//                         id="price"
//                         value={product.price}
//                         onChange={handleChange}
//                         // className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"

//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="discount" className="block text-sm font-medium text-gray-700">
//                         Discount
//                       </label>
//                       <input
//                         type="text"
//                         name="discount"
//                         id="discount"
//                         value={product.discount}
//                         onChange={handleChange}
//                         // className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"

//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="size" className="block text-sm font-medium text-gray-700">
//                         Size
//                       </label>
//                       <input
//                         type="text"
//                         name="size"
//                         id="size"
//                         value={product.size}
//                         onChange={handleChange}
//                         // className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"

//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
//                         Stock
//                       </label>
//                       <input
//                         type="text"
//                         name="stock"
//                         id="stock"
//                         value={product.stock}
//                         onChange={handleChange}
//                         // className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"

//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="image" className="block text-sm font-medium text-gray-700">
//                         Image URL
//                       </label>
//                       <input
//                         type="text"
//                         name="image"
//                         id="image"
//                         value={product.image}
//                         onChange={handleChange}
//                         // className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"

//                       />
//                     </div>
//                     {/* <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="category" className="block text-sm font-medium text-gray-700">
//                         Category
//                       </label>
//                       <input
//                         type="text"
//                         name="category"
//                         id="category"
//                         value={product.category}
//                         onChange={handleChange}
//                         // className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"

//                       />
//                     </div> */}
                     
//                     <div className="col-span-6">
//                       <label htmlFor="description" className="block text-sm font-medium text-gray-700">
//                         Description
//                       </label>
//                       <textarea
//                         name="description"
//                         id="description"
//                         value={product.description}
//                         onChange={handleChange}
//                         rows="3"
//                         // className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"

//                       ></textarea>
//                     </div>
                    
//                   </div>
//                   <div className="mb-4 ">
//             <label className="block text-sm font-medium text-gray-700">Category</label>
//             <Combobox
//               as="div"
//               value={selectedCategory}

//               onChange={(category) => {
//                 setQuery('');
//                 setSelectedCategory(category);
             
//               }}
//             >
//               <div className="relative mt-2">
//                 <ComboboxInput

//                   className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   onChange={(event) => setQuery(event.target.value)}
//                   displayValue={(category) => category?.name}
//                 />
//                 <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">

//                   <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />

//                 </ComboboxButton>

//                 {filteredCategories.length > 0 && (
//                   <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">

//                     {filteredCategories.map((category) => (
//                       <ComboboxOption
//                         key={category.id}
//                         value={category}
//                         className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
//                       >
//                         <span className="block truncate group-data-[selected]:font-semibold">{category.name}</span>

//                         <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                           <CheckIcon className="h-5 w-5" aria-hidden="true" />

//                         </span>
//                       </ComboboxOption>
//                     ))}
//                   </ComboboxOptions>
//                 )}
//               </div>
//             </Combobox>
//           </div>
        
//                 </div>
                
//                 <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
//                   <button
//                     type="button"
//                     onClick={handleCancel}
//                     className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-3"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="button"
//                     onClick={handleSave}
//                     className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   >
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






// import {
//   Combobox,
//   ComboboxButton,
//   ComboboxInput,
//   ComboboxOption,
//   ComboboxOptions,
// } from '@headlessui/react';
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// const categories = [
//   { id: 1, name: 'Tops' },
//   { id: 2, name: 'Bottoms' },
//   { id: 3, name: 'Accessories' },
//   // Add more categories as needed
// ];

// export default function AddEditProduct() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const initialProduct = location.state?.product || {
//     name: '',
//     price: '',
//     discount: '',
//     size: '',
//     sizeType: '',
//     stock: '',
//     image: '',
//     category: '',
//     description: '',
//     gender: ''
//   };

//   const [product, setProduct] = useState(initialProduct);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [query, setQuery] = useState('');

//   const filteredCategories = query === ''
//     ? categories
//     : categories.filter((category) => category.name.toLowerCase().includes(query.toLowerCase()));

//   useEffect(() => {
//     setProduct(initialProduct);
//   }, [initialProduct]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct({ ...product, [name]: value });
//   };

//   const handleSave = () => {
//     // Handle save functionality here (e.g., updating the product list)
//     console.log('Product saved:', product);
//     navigate('/products');
//   };

//   const handleCancel = () => {
//     navigate('/products');
//   };

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       <div className="sm:flex sm:items-center">
//         <div className="sm:flex-auto">
//           <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-custom-heading">
//             {initialProduct ? 'Edit Product' : 'Add Product'}
//           </h2>
//           <p className="mt-2 text-sm text-gray-700">
//             {initialProduct ? 'Edit the product details below.' : 'Fill in the product details below.'}
//           </p>
//         </div>
//       </div>
//       <div className="mt-8 flow-root">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <form>
//               <div className="shadow sm:rounded-md sm:overflow-hidden">
//                 <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
//                   <div className="grid grid-cols-6 gap-6">
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                         Product Name
//                       </label>
//                       <input
//                         type="text"
//                         name="name"
//                         id="name"
//                         value={product.name}
//                         onChange={handleChange}
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="price" className="block text-sm font-medium text-gray-700">
//                         Price
//                       </label>
//                       <input
//                         type="text"
//                         name="price"
//                         id="price"
//                         value={product.price}
//                         onChange={handleChange}
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="discount" className="block text-sm font-medium text-gray-700">
//                         Discount
//                       </label>
//                       <input
//                         type="text"
//                         name="discount"
//                         id="discount"
//                         value={product.discount}
//                         onChange={handleChange}
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="size" className="block text-sm font-medium text-gray-700">
//                         Size
//                       </label>
//                       <input
//                         type="text"
//                         name="size"
//                         id="size"
//                         value={product.size}
//                         onChange={handleChange}
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="sizeType" className="block text-sm font-medium text-gray-700">
//                         Size Type
//                       </label>
//                       <input
//                         type="text"
//                         name="sizeType"
//                         id="sizeType"
//                         value={product.sizeType}
//                         onChange={handleChange}
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
//                         Stock
//                       </label>
//                       <input
//                         type="text"
//                         name="stock"
//                         id="stock"
//                         value={product.stock}
//                         onChange={handleChange}
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="image" className="block text-sm font-medium text-gray-700">
//                         Image URL
//                       </label>
//                       <input
//                         type="text"
//                         name="image"
//                         id="image"
//                         value={product.image}
//                         onChange={handleChange}
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6">
//                       <label htmlFor="description" className="block text-sm font-medium text-gray-700">
//                         Description
//                       </label>
//                       <textarea
//                         name="description"
//                         id="description"
//                         value={product.description}
//                         onChange={handleChange}
//                         rows="3"
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"
//                       ></textarea>
//                     </div>
//                     <div className="col-span-6">
//                       <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
//                         Gender
//                       </label>
//                       <input
//                         type="text"
//                         name="gender"
//                         id="gender"
//                         value={product.gender}
//                         onChange={handleChange}
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6">
//                       <label className="block text-sm font-medium text-gray-700">Category</label>
//                       <Combobox
//                         as="div"
//                         value={selectedCategory}
//                         onChange={(category) => {
//                           setQuery('');
//                           setSelectedCategory(category);
//                           setProduct({ ...product, category: category?.name });
//                         }}
//                       >
//                         <div className="relative mt-2">
//                           <ComboboxInput
//                             className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                             onChange={(event) => setQuery(event.target.value)}
//                             displayValue={(category) => category?.name}
//                           />
//                           <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//                             <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//                           </ComboboxButton>
//                           {filteredCategories.length > 0 && (
//                             <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                               {filteredCategories.map((category) => (
//                                 <ComboboxOption
//                                   key={category.id}
//                                   value={category}
//                                   className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
//                                 >
//                                   <span className="block truncate group-data-[selected]:font-semibold">{category.name}</span>
//                                   <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                                     <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                                   </span>
//                                 </ComboboxOption>
//                               ))}
//                             </ComboboxOptions>
//                           )}
//                         </div>
//                       </Combobox>
//                     </div>
//                   </div>
//                   <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
//                     <button
//                       type="button"
//                       onClick={handleCancel}
//                       className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-3"
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       type="button"
//                       onClick={handleSave}
//                       className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                     >
//                       Save
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// import {
//   Combobox,
//   ComboboxButton,
//   ComboboxInput,
//   ComboboxOption,
//   ComboboxOptions,
// } from '@headlessui/react';
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// const categories = [
//   { id: 1, name: 'Tops' },
//   { id: 2, name: 'Bottoms' },
//   { id: 3, name: 'Accessories' },
//   // Add more categories as needed
// ];

// export default function AddEditProduct() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const initialProduct = location.state?.product || {
//     name: '',
//     price: '',
//     discount: '',
//     size: '',
//     sizeType: '',
//     stock: '',
//     image: '',
//     category: '',
//     description: '',
//     gender: ''
//   };

//   const [product, setProduct] = useState(initialProduct);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [query, setQuery] = useState('');

//   const filteredCategories = query === ''
//     ? categories
//     : categories.filter((category) => category.name.toLowerCase().includes(query.toLowerCase()));

//   useEffect(() => {
//     setProduct(initialProduct);
//   }, [initialProduct]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct({ ...product, [name]: value });
//   };

//   const handleSave = () => {
//     // Handle save functionality here (e.g., updating the product list)
//     console.log('Product saved:', product);
//     navigate('/products');
//   };

//   const handleCancel = () => {
//     navigate('/products');
//   };

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       <div className="sm:flex sm:items-center">
//         <div className="sm:flex-auto">
//           <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-custom-heading">
//             {initialProduct ? 'Edit Product' : 'Add Product'}
//           </h2>
//           <p className="mt-2 text-sm text-gray-700">
//             {initialProduct ? 'Edit the product details below.' : 'Fill in the product details below.'}
//           </p>
//         </div>
//       </div>
//       <div className="mt-8 flow-root">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <form>
//               <div className="shadow sm:rounded-md sm:overflow-hidden">
//                 <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
//                   <div className="grid grid-cols-6 gap-6">
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                         Product Name
//                       </label>
//                       <input
//                         type="text"
//                         name="name"
//                         id="name"
//                         value={product.name}
//                         onChange={handleChange}
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"
//                         required
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="price" className="block text-sm font-medium text-gray-700">
//                         Price
//                       </label>
//                       <input
//                         type="number"
//                         name="price"
//                         id="price"
//                         value={product.price}
//                         onChange={handleChange}
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"
//                         required
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="discount" className="block text-sm font-medium text-gray-700">
//                         Discount
//                       </label>
//                       <input
//                         type="number"
//                         name="discount"
//                         id="discount"
//                         value={product.discount}
//                         onChange={handleChange}
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"
//                         required
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="size" className="block text-sm font-medium text-gray-700">
//                         Size
//                       </label>
//                       <input
//                         type="text"
//                         name="size"
//                         id="size"
//                         value={product.size}
//                         onChange={handleChange}
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="sizeType" className="block text-sm font-medium text-gray-700">
//                         Size Type
//                       </label>
//                       <input
//                         type="text"
//                         name="sizeType"
//                         id="sizeType"
//                         value={product.sizeType}
//                         onChange={handleChange}
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
//                         Stock
//                       </label>
//                       <input
//                         type="number"
//                         name="stock"
//                         id="stock"
//                         value={product.stock}
//                         onChange={handleChange}
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"
//                         required
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="image" className="block text-sm font-medium text-gray-700">
//                         Image URL
//                       </label>
//                       <input
//                         type="text"
//                         name="image"
//                         id="image"
//                         value={product.image}
//                         onChange={handleChange}
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6">
//                       <label htmlFor="description" className="block text-sm font-medium text-gray-700">
//                         Description
//                       </label>
//                       <textarea
//                         name="description"
//                         id="description"
//                         value={product.description}
//                         onChange={handleChange}
//                         rows="3"
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"
//                       ></textarea>
//                     </div>
//                     <div className="col-span-6">
//                       <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
//                         Gender
//                       </label>
//                       <input
//                         type="text"
//                         name="gender"
//                         id="gender"
//                         value={product.gender}
//                         onChange={handleChange}
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6">
//                       <label className="block text-sm font-medium text-gray-700">Category</label>
//                       <Combobox
//                         as="div"
//                         value={selectedCategory}
//                         onChange={(category) => {
//                           setQuery('');
//                           setSelectedCategory(category);
//                           setProduct({ ...product, category: category?.name });
//                         }}
//                       >
//                         <div className="relative mt-2">
//                           <ComboboxInput
//                             className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                             onChange={(event) => setQuery(event.target.value)}
//                             displayValue={(category) => category?.name}
//                           />
//                           <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//                             <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//                           </ComboboxButton>
//                           {filteredCategories.length > 0 && (
//                             <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                               {filteredCategories.map((category) => (
//                                 <ComboboxOption
//                                   key={category.id}
//                                   value={category}
//                                   className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
//                                 >
//                                   <span className="block truncate group-data-[selected]:font-semibold">{category.name}</span>
//                                   <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                                     <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                                   </span>
//                                 </ComboboxOption>
//                               ))}
//                             </ComboboxOptions>
//                           )}
//                         </div>
//                       </Combobox>
//                     </div>
//                   </div>
//                   <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
//                     <button
//                       type="button"
//                       onClick={handleCancel}
//                       className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-3"
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       type="button"
//                       onClick={handleSave}
//                       className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                     >
//                       Save
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





// import React, { useEffect, useState } from 'react';
// import {
//   Combobox,
//   ComboboxButton,
//   ComboboxInput,
//   ComboboxOption,
//   ComboboxOptions,
// } from '@headlessui/react';
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
// import { useLocation, useNavigate } from 'react-router-dom';

// // Sample data for categories, size types, genders, and colors
// const categories = [
//   { id: 1, name: 'Tops' },
//   { id: 2, name: 'Bottoms' },
//   { id: 3, name: 'Accessories' },
//   // Add more categories as needed
// ];

// const sizeTypes = [
//   { id: 1, name: 'Alphabetical' },
//   { id: 2, name: 'Numerical' },
//   // Add more size types as needed
// ];

// const genders = [
//   { id: 1, name: 'Male' },
//   { id: 2, name: 'Female' },
//   { id: 3, name: 'Kids' },
// ];

// const colors = [
//   { id: 1, name: 'Red' },
//   { id: 2, name: 'Blue' },
//   { id: 3, name: 'Green' },
//   // Add more colors as needed
// ];

// function AddEditProduct() {
//   const [variants, setVariants] = useState([{ color: '', sizes: [], images: [] }]);
//   const [productDetails, setProductDetails] = useState({
//     name: '',
//     description: '',
//     category: '',
//     sizeType: '',
    
//     gender: '',
//     images: []
//   });
//   const navigate = useNavigate();
//   const location = useLocation();

//   const initialProduct = location.state?.product || {
//     name: '',
//     price: '',
//     discount: '',
//     size: '',
//     sizeType: '',
//     stock: '',
//     image: '',
//     category: '',
//     description: '',
//     gender: ''
//   };

//   const [product, setProduct] = useState(initialProduct);


  

//   useEffect(() => {
//     setProduct(initialProduct);
//   }, [initialProduct]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct({ ...product, [name]: value });
//   };

//   const handleSave = () => {
//     // Handle save functionality here (e.g., updating the product list)
//     console.log('Product saved:', product);
//     navigate('/products');
//   };

//   const handleCancel = () => {
//     navigate('/products');
//   };

  
//   const [productData, setProductData] = useState(null);
//   const [error, setError] = useState('');
//   const [query, setQuery] = useState('');
//   const [colorQuery, setColorQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [selectedSizeType, setSelectedSizeType] = useState(null);
//   const [selectedGender, setSelectedGender] = useState(null);

//   const filteredCategories = query === ''
//     ? categories
//     : categories.filter((category) => category.name.toLowerCase().includes(query.toLowerCase()));

//   const filteredSizeTypes = query === ''
//     ? sizeTypes
//     : sizeTypes.filter((sizeType) => sizeType.name.toLowerCase().includes(query.toLowerCase()));

//   const filteredGenders = query === ''
//     ? genders
//     : genders.filter((gender) => gender.name.toLowerCase().includes(query.toLowerCase()));

//   const filteredColors = colorQuery === ''
//     ? colors
//     : colors.filter((color) => color.name.toLowerCase().includes(colorQuery.toLowerCase()));

//   const handleAddVariant = () => {
//     const sizes = productDetails.sizeType === 'Alphabetical'
//       ? ['S', 'M', 'L', 'XL', 'XXL'].map(size => ({ size, quantity: 1, price: 0, discount: 0, finalPrice: 0 }))
//       : Array.from({ length: 19 }, (_, i) => ({ size: (28 + i).toString(), quantity: 1, price: 0, discount: 0, finalPrice: 0 }));

//     setVariants([...variants, { color: '', sizes, images: [] }]);
//   };

//   const handleRemoveVariant = (variantIndex) => {
//     setVariants(variants.filter((_, index) => index !== variantIndex));
//   };

//   const handleVariantChange = (variantIndex, sizeIndex, field, value) => {
//     const newVariants = [...variants];
//     newVariants[variantIndex].sizes[sizeIndex][field] = value;
//     setVariants(newVariants);
//   };

//   const handleColorChange = (variantIndex, color) => {
//     const updatedVariants = [...variants];
//     updatedVariants[variantIndex].color = color;
//     setVariants(updatedVariants);
//   };

//   const handleImageUpload = (variantIndex, files) => {
//     const newVariants = [...variants];
//     newVariants[variantIndex].images.push(...Array.from(files).map(file => URL.createObjectURL(file)));
//     setVariants(newVariants);
//   };

//   const handleRemoveImage = (variantIndex, imgIndex) => {
//     const newVariants = [...variants];
//     newVariants[variantIndex].images.splice(imgIndex, 1);
//     setVariants(newVariants);
//   };

//   const handleProductDetailsChange = (field, value) => {
//     setProductDetails({ ...productDetails, [field]: value });
//     if (field === 'sizeType') {
//       const newVariants = variants.map(variant => ({
//         ...variant,
//         sizes: value === 'Numerical'
//           ? Array.from({ length: 19 }, (_, i) => ({
//             size: (28 + i).toString(),
//             quantity: 1,
//             price: 0,
//             discount: 0,
//             finalPrice: 0
//           }))
//           : ['S', 'M', 'L', 'XL', 'XXL'].map(size => ({
//             size,
//             quantity: 1,
//             price: 0,
//             discount: 0,
//             finalPrice: 0
//           }))
//       }));
//       setVariants(newVariants);
//     }
//   };

//   const handleProductImageUpload = (files) => {
//     setProductDetails({
//       ...productDetails,
//       images: [...productDetails.images, ...Array.from(files).map(file => URL.createObjectURL(file))]
//     });
//   };

//   const handleSubmit = () => {
//     const { name, description, gender } = productDetails;

//     if (!name || !description || !selectedCategory || !gender) {
//       setError('Please fill in all required fields.');
//       return;
//     }

//     const data = { ...productDetails, category: selectedCategory.name, sizeType: selectedSizeType.name, gender: selectedGender.name, variants };
//     setProductData(data);
//     setError('');
//     console.log('Submitting data:', data);
//   };

//   return (
//     <div className="p-4 lg:ml-10 xl:ml-80 m-5 sm:p-6 bg-white shadow rounded-md">
//       <div className="flex flex-col lg:flex-row">
//         <div className="w-full lg:w-1/2 p-4">
//           <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-custom-heading">Edit Product</h2>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Product Name</label>
//             <input
//               type="text"
//               className="mt-1 p-2 w-full border rounded-md"
//               value={product.name}
//               onChange={(e) => handleProductDetailsChange('name', e.target.value)}
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Price</label>
//             <input
//               type="text"
//               className="mt-1 p-2 w-full border rounded-md"
//               value={product.price}
//               onChange={(e) => handleProductDetailsChange('price', e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Discount</label>
//             <input
//               type="text"
//               className="mt-1 p-2 w-full border rounded-md"
//               value={product.discount}
//               onChange={(e) => handleProductDetailsChange('discount', e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">SizeType</label>
//             <input
//               type="text"
//               className="mt-1 p-2 w-full border rounded-md"
//               value={product.sizeType}
//               onChange={(e) => handleProductDetailsChange('name', e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Stock</label>
//             <input
//               type="text"
//               className="mt-1 p-2 w-full border rounded-md"
//               value={product.stock}
//               onChange={(e) => handleProductDetailsChange('name', e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Image Url</label>
//             <input
//               type="text"
//               className="mt-1 p-2 w-full border rounded-md"
//               value={product.imageurl}
//               onChange={(e) => handleProductDetailsChange('name', e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Description</label>
//             <textarea
//               className="mt-1 p-2 w-full border rounded-md"
//               value={productDetails.description}
//               onChange={(e) => handleProductDetailsChange('description', e.target.value)}
//             ></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Category</label>
//             <Combobox
//               as="div"
//               value={selectedCategory}
//               onChange={(category) => setSelectedCategory(category)}
//             >
//               <div className="relative mt-2">
//                 <ComboboxInput
//                   className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   onChange={(event) => setQuery(event.target.value)}
//                   displayValue={(category) => category?.name}
//                 />
//                 <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//                   <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//                 </ComboboxButton>
//                 <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                   {filteredCategories.length === 0 && query !== '' && (
//                     <ComboboxOption
//                       value={query}
//                       disabled
//                       className="cursor-default select-none px-4 py-2 text-gray-700"
//                     >
//                       Nothing found for "{query}"
//                     </ComboboxOption>
//                   )}
//                   {filteredCategories.map((category) => (
//                     <ComboboxOption
//                       key={category.id}
//                       value={category}
//                       className={({ active }) =>
//                         `relative cursor-pointer select-none px-4 py-2 ${
//                           active ? 'bg-indigo-600 text-white' : 'text-gray-900'
//                         }`
//                       }
//                     >
//                       {({ active }) => (
//                         <>
//                           <span className={`block truncate ${active ? 'font-semibold' : 'font-normal'}`}>
//                             {category.name}
//                           </span>
//                           {active && (
//                             <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
//                               <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                             </span>
//                           )}
//                         </>
//                       )}
//                     </ComboboxOption>
//                   ))}
//                 </ComboboxOptions>
//               </div>
//             </Combobox>
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Size Type</label>
//             <Combobox
//               as="div"
//               value={selectedSizeType}
//               onChange={(sizeType) => handleProductDetailsChange('sizeType', sizeType.name)}
//             >
//               <div className="relative mt-2">
//                 <ComboboxInput
//                   className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   onChange={(event) => setQuery(event.target.value)}
//                   displayValue={(sizeType) => sizeType?.name}
//                 />
//                 <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//                   <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//                 </ComboboxButton>
//                 <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                   {filteredSizeTypes.length === 0 && query !== '' && (
//                     <ComboboxOption
//                       value={query}
//                       disabled
//                       className="cursor-default select-none px-4 py-2 text-gray-700"
//                     >
//                       Nothing found for "{query}"
//                     </ComboboxOption>
//                   )}
//                   {filteredSizeTypes.map((sizeType) => (
//                     <ComboboxOption
//                       key={sizeType.id}
//                       value={sizeType}
//                       className={({ active }) =>
//                         `relative cursor-pointer select-none px-4 py-2 ${
//                           active ? 'bg-indigo-600 text-white' : 'text-gray-900'
//                         }`
//                       }
//                     >
//                       {({ active }) => (
//                         <>
//                           <span className={`block truncate ${active ? 'font-semibold' : 'font-normal'}`}>
//                             {sizeType.name}
//                           </span>
//                           {active && (
//                             <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
//                               <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                             </span>
//                           )}
//                         </>
//                       )}
//                     </ComboboxOption>
//                   ))}
//                 </ComboboxOptions>
//               </div>
//             </Combobox>
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Gender</label>
//             <Combobox
//               as="div"
//               value={selectedGender}
//               onChange={(gender) => setSelectedGender(gender)}
//             >
//               <div className="relative mt-2">
//                 <ComboboxInput
//                   className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   onChange={(event) => setQuery(event.target.value)}
//                   displayValue={(gender) => gender?.name}
//                 />
//                 <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//                   <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//                 </ComboboxButton>
//                 <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                   {filteredGenders.length === 0 && query !== '' && (
//                     <ComboboxOption
//                       value={query}
//                       disabled
//                       className="cursor-default select-none px-4 py-2 text-gray-700"
//                     >
//                       Nothing found for "{query}"
//                     </ComboboxOption>
//                   )}
//                   {filteredGenders.map((gender) => (
//                     <ComboboxOption
//                       key={gender.id}
//                       value={gender}
//                       className={({ active }) =>
//                         `relative cursor-pointer select-none px-4 py-2 ${
//                           active ? 'bg-indigo-600 text-white' : 'text-gray-900'
//                         }`
//                       }
//                     >
//                       {({ active }) => (
//                         <>
//                           <span className={`block truncate ${active ? 'font-semibold' : 'font-normal'}`}>
//                             {gender.name}
//                           </span>
//                           {active && (
//                             <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
//                               <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                             </span>
//                           )}
//                         </>
//                       )}
//                     </ComboboxOption>
//                   ))}
//                 </ComboboxOptions>
//               </div>
//             </Combobox>
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Images</label>
//             <input
//               type="file"
//               multiple
//               onChange={(e) => handleProductImageUpload(e.target.files)}
//               className="mt-1 w-full"
//             />
//             <div className="mt-2 flex flex-wrap gap-2">
//               {productDetails.images.map((image, index) => (
//                 <div key={index} className="relative w-24 h-24">
//                   <img src={image} alt={`product-image-${index}`} className="object-cover w-full h-full rounded-md" />
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setProductDetails({
//                         ...productDetails,
//                         images: productDetails.images.filter((_, i) => i !== index),
//                       });
//                     }}
//                     className="absolute top-0 right-0 p-1 bg-red-600 text-white rounded-full"
//                   >
//                     ×
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="mb-4">
//             <button
//               type="button"
//               onClick={handleSubmit}
//               className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//             >
//               Submit
//             </button>
//           </div>
//           {error && <p className="text-red-500">{error}</p>}
//         </div>
//         <div className="w-full lg:w-1/2 p-4">
//           <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-custom-heading">Variants</h2>
//           {variants.map((variant, variantIndex) => (
//             <div key={variantIndex} className="border rounded-md p-4 mb-4">
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Color</label>
//                 <Combobox
//                   as="div"
//                   value={variant.color}
//                   onChange={(color) => handleColorChange(variantIndex, color.name)}
//                 >
//                   <div className="relative mt-2">
//                     <ComboboxInput
//                       className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                       onChange={(event) => setColorQuery(event.target.value)}
//                       displayValue={(color) => color?.name}
//                     />
//                     <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//                       <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//                     </ComboboxButton>
//                     <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                       {filteredColors.length === 0 && colorQuery !== '' && (
//                         <ComboboxOption
//                           value={colorQuery}
//                           disabled
//                           className="cursor-default select-none px-4 py-2 text-gray-700"
//                         >
//                           Nothing found for "{colorQuery}"
//                         </ComboboxOption>
//                       )}
//                       {filteredColors.map((color) => (
//                         <ComboboxOption
//                           key={color.id}
//                           value={color}
//                           className={({ active }) =>
//                             `relative cursor-pointer select-none px-4 py-2 ${
//                               active ? 'bg-indigo-600 text-white' : 'text-gray-900'
//                             }`
//                           }
//                         >
//                           {({ active }) => (
//                             <>
//                               <span className={`block truncate ${active ? 'font-semibold' : 'font-normal'}`}>
//                                 {color.name}
//                               </span>
//                               {active && (
//                                 <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
//                                   <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                                 </span>
//                               )}
//                             </>
//                           )}
//                         </ComboboxOption>
//                       ))}
//                     </ComboboxOptions>
//                   </div>
//                 </Combobox>
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Images</label>
//                 <input
//                   type="file"
//                   multiple
//                   onChange={(e) => handleImageUpload(variantIndex, e.target.files)}
//                   className="mt-1 w-full"
//                 />
//                 <div className="mt-2 flex flex-wrap gap-2">
//                   {variant.images.map((image, imgIndex) => (
//                     <div key={imgIndex} className="relative w-24 h-24">
//                       <img src={image} alt={`variant-image-${imgIndex}`} className="object-cover w-full h-full rounded-md" />
//                       <button
//                         type="button"
//                         onClick={() => handleRemoveImage(variantIndex, imgIndex)}
//                         className="absolute top-0 right-0 p-1 bg-red-600 text-white rounded-full"
//                       >
//                         ×
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div>
//                 <button
//                   type="button"
//                   onClick={() => handleRemoveVariant(variantIndex)}
//                   className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
//                 >
//                   Remove Variant
//                 </button>
//               </div>
//             </div>
//           ))}
//           <div className="mt-4">
//             <button
//               type="button"
//               onClick={handleAddVariant}
//               className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//             >
//               Add Variant
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddEditProduct;



import React, { useEffect, useState } from 'react';
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { useLocation, useNavigate } from 'react-router-dom';

// Sample data for categories, size types, genders, and colors
const categories = [
  { id: 1, name: 'Tops' },
  { id: 2, name: 'Bottoms' },
  { id: 3, name: 'Accessories' },
];

const sizeTypes = [
  { id: 1, name: 'Alphabetical' },
  { id: 2, name: 'Numerical' },
];

const genders = [
  { id: 1, name: 'Male' },
  { id: 2, name: 'Female' },
  { id: 3, name: 'Kids' },
];

const colors = [
  { id: 1, name: 'Red' },
  { id: 2, name: 'Blue' },
  { id: 3, name: 'Green' },
];

function AddEditProduct() {
  const [variants, setVariants] = useState([{ color: '', sizes: [], images: [] }]);
  const [productDetails, setProductDetails] = useState({
    name: '',
    description: '',
    category: '',
    sizeType: '',
    gender: '',
    images: []
  });

  const navigate = useNavigate();
  const location = useLocation();

  const initialProduct = location.state?.product || {
    name: '',
    price: '',
    discount: '',
    size: '',
    sizeType: '',
    stock: '',
    imageurl: '',
    category: '',
    description: '',
    gender: ''
  };

  const [product, setProduct] = useState(initialProduct);

  useEffect(() => {
    setProduct(initialProduct);
  }, [initialProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSave = () => {
    console.log('Product saved:', product);
    navigate('/products');
  };

  const handleCancel = () => {
    navigate('/products');
  };

  const [productData, setProductData] = useState(null);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [colorQuery, setColorQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSizeType, setSelectedSizeType] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);

  const filteredCategories = query === ''
    ? categories
    : categories.filter((category) => category.name.toLowerCase().includes(query.toLowerCase()));

  const filteredSizeTypes = query === ''
    ? sizeTypes
    : sizeTypes.filter((sizeType) => sizeType.name.toLowerCase().includes(query.toLowerCase()));

  const filteredGenders = query === ''
    ? genders
    : genders.filter((gender) => gender.name.toLowerCase().includes(query.toLowerCase()));

  const filteredColors = colorQuery === ''
    ? colors
    : colors.filter((color) => color.name.toLowerCase().includes(colorQuery.toLowerCase()));

  const handleAddVariant = () => {
    const sizes = productDetails.sizeType === 'Alphabetical'
      ? ['S', 'M', 'L', 'XL', 'XXL'].map(size => ({ size, quantity: 1, price: 0, discount: 0, finalPrice: 0 }))
      : Array.from({ length: 19 }, (_, i) => ({ size: (28 + i).toString(), quantity: 1, price: 0, discount: 0, finalPrice: 0 }));

    setVariants([...variants, { color: '', sizes, images: [] }]);
  };

  const handleRemoveVariant = (variantIndex) => {
    setVariants(variants.filter((_, index) => index !== variantIndex));
  };

  const handleVariantChange = (variantIndex, sizeIndex, field, value) => {
    const newVariants = [...variants];
    newVariants[variantIndex].sizes[sizeIndex][field] = value;
    setVariants(newVariants);
  };

  const handleColorChange = (variantIndex, color) => {
    const updatedVariants = [...variants];
    updatedVariants[variantIndex].color = color;
    setVariants(updatedVariants);
  };

  const handleImageUpload = (variantIndex, files) => {
    const newVariants = [...variants];
    newVariants[variantIndex].images.push(...Array.from(files).map(file => URL.createObjectURL(file)));
    setVariants(newVariants);
  };

  const handleRemoveImage = (variantIndex, imgIndex) => {
    const newVariants = [...variants];
    newVariants[variantIndex].images.splice(imgIndex, 1);
    setVariants(newVariants);
  };

  const handleProductDetailsChange = (field, value) => {
    setProductDetails({ ...productDetails, [field]: value });
    if (field === 'sizeType') {
      const newVariants = variants.map(variant => ({
        ...variant,
        sizes: value === 'Numerical'
          ? Array.from({ length: 19 }, (_, i) => ({
            size: (28 + i).toString(),
            quantity: 1,
            price: 0,
            discount: 0,
            finalPrice: 0
          }))
          : ['S', 'M', 'L', 'XL', 'XXL'].map(size => ({
            size,
            quantity: 1,
            price: 0,
            discount: 0,
            finalPrice: 0
          }))
      }));
      setVariants(newVariants);
    }
  };

  const handleProductImageUpload = (files) => {
    setProductDetails({
      ...productDetails,
      images: [...productDetails.images, ...Array.from(files).map(file => URL.createObjectURL(file))]
    });
  };

  const handleSubmit = () => {
    const { name, description, gender } = productDetails;

    if (!name || !description || !selectedCategory || !gender) {
      setError('Please fill in all required fields.');
      return;
    }

    const data = { ...productDetails, category: selectedCategory.name, sizeType: selectedSizeType.name, gender: selectedGender.name, variants };
    setProductData(data);
    setError('');
    console.log('Submitting data:', data);
  };

  return (
    <div className="p-4 lg:ml-10 xl:ml-80 m-5 sm:p-6 bg-white shadow rounded-md">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-4">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-custom-heading">Edit Product</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              value={product.name}
              onChange={(e) => handleProductDetailsChange('name', e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              value={product.price}
              onChange={(e) => handleProductDetailsChange('price', e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Discount</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              value={product.discount}
              onChange={(e) => handleProductDetailsChange('discount', e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Size Type</label>
            <Combobox
              as="div"
              value={selectedSizeType}
              onChange={(sizeType) => handleProductDetailsChange('sizeType', sizeType.name)}
            >
              <div className="relative mt-2">
                <ComboboxInput
                  className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(event) => setQuery(event.target.value)}
                  displayValue={(sizeType) => sizeType?.name}
                />
                <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </ComboboxButton>
                <ComboboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredSizeTypes.map((sizeType) => (
                    <ComboboxOption
                      key={sizeType.id}
                      value={sizeType}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-3 pr-9 ${active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                        }`
                      }
                    >
                      {({ selected, active }) => (
                        <>
                          <span className={`block truncate ${selected ? 'font-semibold' : ''}`}>
                            {sizeType.name}
                          </span>
                          {selected && (
                            <span
                              className={`absolute inset-y-0 right-0 flex items-center pr-4 ${active ? 'text-white' : 'text-indigo-600'
                                }`}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          )}
                        </>
                      )}
                    </ComboboxOption>
                  ))}
                </ComboboxOptions>
              </div>
            </Combobox>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Stock</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              value={product.stock}
              onChange={(e) => handleProductDetailsChange('stock', e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <Combobox
              as="div"
              value={selectedCategory}
              onChange={(category) => handleProductDetailsChange('category', category.name)}
            >
              <div className="relative mt-2">
                <ComboboxInput
                  className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(event) => setQuery(event.target.value)}
                  displayValue={(category) => category?.name}
                />
                <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </ComboboxButton>
                <ComboboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredCategories.map((category) => (
                    <ComboboxOption
                      key={category.id}
                      value={category}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-3 pr-9 ${active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                        }`
                      }
                    >
                      {({ selected, active }) => (
                        <>
                          <span className={`block truncate ${selected ? 'font-semibold' : ''}`}>
                            {category.name}
                          </span>
                          {selected && (
                            <span
                              className={`absolute inset-y-0 right-0 flex items-center pr-4 ${active ? 'text-white' : 'text-indigo-600'
                                }`}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          )}
                        </>
                      )}
                    </ComboboxOption>
                  ))}
                </ComboboxOptions>
              </div>
            </Combobox>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              className="mt-1 p-2 w-full border rounded-md"
              value={product.description}
              onChange={(e) => handleProductDetailsChange('description', e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <Combobox
              as="div"
              value={product.gender}
              onChange={(gender) => handleProductDetailsChange('gender', gender.name)}
            >
              <div className="relative mt-2">
                <ComboboxInput
                  className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(event) => setQuery(event.target.value)}
                  displayValue={(gender) => gender?.name}
                />
                <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </ComboboxButton>
                <ComboboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredGenders.map((gender) => (
                    <ComboboxOption
                      key={gender.id}
                      value={gender}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-3 pr-9 ${active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                        }`
                      }
                    >
                      {({ selected, active }) => (
                        <>
                          <span className={`block truncate ${selected ? 'font-semibold' : ''}`}>
                            {gender.name}
                          </span>
                          {selected && (
                            <span
                              className={`absolute inset-y-0 right-0 flex items-center pr-4 ${active ? 'text-white' : 'text-indigo-600'
                                }`}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          )}
                        </>
                      )}
                    </ComboboxOption>
                  ))}
                </ComboboxOptions>
              </div>
            </Combobox>
          </div>
        </div>

        <div className="w-full lg:w-1/2 p-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Product Images</label>
            <input
              type="file"
              className="mt-1 p-2 w-full border rounded-md"
              multiple
              onChange={(e) => handleProductImageUpload(e.target.files)}
            />
            <div className="mt-2 grid grid-cols-3 gap-2">
              {productDetails.images.map((img, index) => (
                <div key={index} className="relative">
                  <img src={img} alt={`Product ${index + 1}`} className="w-full h-auto rounded-md" />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 text-xs"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Variants</label>
            {variants.map((variant, variantIndex) => (
              <div key={variantIndex} className="border rounded-md p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold">Variant {variantIndex + 1}</span>
                  <button
                    type="button"
                    className="text-red-600"
                    onClick={() => handleRemoveVariant(variantIndex)}
                  >
                    Remove
                  </button>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Color</label>
                  <Combobox
                    as="div"
                    value={variant.color}
                    onChange={(color) => handleColorChange(variantIndex, color)}
                  >
                    <div className="relative mt-2">
                      <ComboboxInput
                        className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(event) => setColorQuery(event.target.value)}
                        displayValue={(color) => color?.name}
                      />
                      <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </ComboboxButton>
                      <ComboboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {filteredColors.map((color) => (
                          <ComboboxOption
                            key={color.id}
                            value={color}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-3 pr-9 ${active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                              }`
                            }
                          >
                            {({ selected, active }) => (
                              <>
                                <span className={`block truncate ${selected ? 'font-semibold' : ''}`}>
                                  {color.name}
                                </span>
                                {selected && (
                                  <span
                                    className={`absolute inset-y-0 right-0 flex items-center pr-4 ${active ? 'text-white' : 'text-indigo-600'
                                      }`}
                                  >
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                  </span>
                                )}
                              </>
                            )}
                          </ComboboxOption>
                        ))}
                      </ComboboxOptions>
                    </div>
                  </Combobox>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Sizes</label>
                  {variant.sizes.map((size, sizeIndex) => (
                    <div key={sizeIndex} className="grid grid-cols-4 gap-4 mb-2">
                      <div>
                        <input
                          type="text"
                          className="mt-1 p-2 w-full border rounded-md"
                          value={size.size}
                          readOnly
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          className="mt-1 p-2 w-full border rounded-md"
                          placeholder="Quantity"
                          value={size.quantity}
                          onChange={(e) => handleVariantChange(variantIndex, sizeIndex, 'quantity', e.target.value)}
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          className="mt-1 p-2 w-full border rounded-md"
                          placeholder="Price"
                          value={size.price}
                          onChange={(e) => handleVariantChange(variantIndex, sizeIndex, 'price', e.target.value)}
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          className="mt-1 p-2 w-full border rounded-md"
                          placeholder="Discount"
                          value={size.discount}
                          onChange={(e) => handleVariantChange(variantIndex, sizeIndex, 'discount', e.target.value)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Images</label>
                  <input
                    type="file"
                    className="mt-1 p-2 w-full border rounded-md"
                    multiple
                    onChange={(e) => handleImageUpload(variantIndex, e.target.files)}
                  />
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {variant.images.map((img, imgIndex) => (
                      <div key={imgIndex} className="relative">
                        <img src={img} alt={`Variant ${variantIndex + 1} Image ${imgIndex + 1}`} className="w-full h-auto rounded-md" />
                        <button
                          type="button"
                          onClick={() => handleRemoveImage(variantIndex, imgIndex)}
                          className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 text-xs"
                        >
                          X
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddVariant}
              className="bg-blue-600 text-white p-2 rounded-md"
            >
              Add Variant
            </button>
          </div>
        </div>
      </div>

      {error && <div className="text-red-600 mb-4">{error}</div>}

      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleCancel}
          className="mr-4 bg-gray-300 text-gray-700 p-2 rounded-md"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-green-600 text-white p-2 rounded-md"
        >
          Save Product
        </button>
      </div>
    </div>
  );
}

export default AddEditProduct;



// import React, { useEffect, useState } from 'react';
// import {
//   Combobox,
//   ComboboxButton,
//   ComboboxInput,
//   ComboboxOption,
//   ComboboxOptions,
// } from '@headlessui/react';
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
// import { useLocation, useNavigate } from 'react-router-dom';

// // Sample data for categories, size types, genders, and colors
// const categories = [
//   { id: 1, name: 'Tops' },
//   { id: 2, name: 'Bottoms' },
//   { id: 3, name: 'Accessories' },
// ];

// const sizeTypes = [
//   { id: 1, name: 'Alphabetical' },
//   { id: 2, name: 'Numerical' },
// ];

// const genders = [
//   { id: 1, name: 'Male' },
//   { id: 2, name: 'Female' },
//   { id: 3, name: 'Kids' },
// ];

// const colors = [
//   { id: 1, name: 'Red' },
//   { id: 2, name: 'Blue' },
//   { id: 3, name: 'Green' },
// ];

// function AddEditProduct() {
//   const [variants, setVariants] = useState([{ color: '', sizes: [], images: [] }]);
//   const [productDetails, setProductDetails] = useState({
//     name: '',
//     description: '',
//     category: '',
//     sizeType: '',
//     gender: '',
//     color: '',
//     images: []
//   });

//   const navigate = useNavigate();
//   const location = useLocation();

//   const initialProduct = location.state?.product || {
//     name: '',
//     price: '',
//     discount: '',
//     size: '',
//     sizeType: '',
//     stock: '',
//     imageurl: '',
//     category: '',
//     description: '',
//     gender: '',
//   };

//   const [product, setProduct] = useState(initialProduct);

//   useEffect(() => {
//     setProduct(initialProduct);
//   }, [initialProduct]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct({ ...product, [name]: value });
//   };

//   const handleSave = () => {
//     console.log('Product saved:', product);
//     navigate('/products');
//   };

//   const handleCancel = () => {
//     navigate('/products');
//   };

//   const [productData, setProductData] = useState(null);
//   const [error, setError] = useState('');
//   const [query, setQuery] = useState('');
//   const [colorQuery, setColorQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [selectedSizeType, setSelectedSizeType] = useState(null);
//   const [selectedGender, setSelectedGender] = useState(null);

//   const filteredCategories = query === ''
//     ? categories
//     : categories.filter((category) => category.name.toLowerCase().includes(query.toLowerCase()));

//   const filteredSizeTypes = query === ''
//     ? sizeTypes
//     : sizeTypes.filter((sizeType) => sizeType.name.toLowerCase().includes(query.toLowerCase()));

//   const filteredGenders = query === ''
//     ? genders
//     : genders.filter((gender) => gender.name.toLowerCase().includes(query.toLowerCase()));

//   const filteredColors = colorQuery === ''
//     ? colors
//     : colors.filter((color) => color.name.toLowerCase().includes(colorQuery.toLowerCase()));

//   const handleAddVariant = () => {
//     const sizes = productDetails.sizeType === 'Alphabetical'
//       ? ['S', 'M', 'L', 'XL', 'XXL'].map(size => ({ size, quantity: 1, price: 0, discount: 0, finalPrice: 0 }))
//       : Array.from({ length: 19 }, (_, i) => ({ size: (28 + i).toString(), quantity: 1, price: 0, discount: 0, finalPrice: 0 }));

//     setVariants([...variants, { color: '', sizes, images: [] }]);
//   };

//   const handleRemoveVariant = (variantIndex) => {
//     setVariants(variants.filter((_, index) => index !== variantIndex));
//   };

//   const handleVariantChange = (variantIndex, sizeIndex, field, value) => {
//     const newVariants = [...variants];
//     newVariants[variantIndex].sizes[sizeIndex][field] = value;
//     setVariants(newVariants);
//   };

//   const handleColorChange = (variantIndex, color) => {
//     const updatedVariants = [...variants];
//     updatedVariants[variantIndex].color = color;
//     setVariants(updatedVariants);
//   };

//   const handleImageUpload = (variantIndex, files) => {
//     const newVariants = [...variants];
//     newVariants[variantIndex].images.push(...Array.from(files).map(file => URL.createObjectURL(file)));
//     setVariants(newVariants);
//   };

//   const handleRemoveImage = (variantIndex, imgIndex) => {
//     const newVariants = [...variants];
//     newVariants[variantIndex].images.splice(imgIndex, 1);
//     setVariants(newVariants);
//   };
 
  

//   const handleProductDetailsChange = (field, value) => {
//     setProduct({ ...product, [field]: value });

//     setProductDetails({ ...productDetails, [field]: value });
//     if (field === 'sizeType') {
//       const newVariants = variants.map(variant => ({
//         ...variant,
//         sizes: value === 'Numerical'
//           ? Array.from({ length: 19 }, (_, i) => ({
//             size: (28 + i).toString(),
//             quantity: 1,
//             price: 0,
//             discount: 0,
//             finalPrice: 0
//           }))
//           : ['S', 'M', 'L', 'XL', 'XXL'].map(size => ({
//             size,
//             quantity: 1,
//             price: 0,
//             discount: 0,
//             finalPrice: 0
//           }))
//       }));
//       setVariants(newVariants);
//     }
//   };

//   const handleProductImageUpload = (files) => {
//     setProductDetails({
//       ...productDetails,
//       images: [...productDetails.images, ...Array.from(files).map(file => URL.createObjectURL(file))]
//     });
//   };

//   const handleSubmit = () => {
//     const { name, description, gender } = productDetails;

//     if (!name || !description || !selectedCategory || !gender) {
//       setError('Please fill in all required fields.');
//       return;
//     }

//     const data = { ...productDetails, category: selectedCategory.name, sizeType: selectedSizeType.name, gender: selectedGender.name, variants };
//     setProductData(data);
//     setError('');
//     console.log('Submitting data:', data);
//   };

//   return (
//     <div className="p-4 lg:ml-10 xl:ml-80 m-5 sm:p-6 bg-white shadow rounded-md">
//       <div className="flex flex-col lg:flex-row">
//         <div className="w-full lg:w-1/2 p-4">
//           <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-custom-heading">Edit Product</h2>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Product Name</label>
//             <input
//               type="text"
//               className="mt-1 p-2 w-full border rounded-md"
//               value={product.name}
//               onChange={(e) => handleProductDetailsChange('name', e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Price</label>
//             <input
//               type="text"
//               className="mt-1 p-2 w-full border rounded-md"
//               value={product.price}
//               onChange={(e) => handleProductDetailsChange('price', e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Discount</label>
//             <input
//               type="text"
//               className="mt-1 p-2 w-full border rounded-md"
//               value={product.discount}
//               onChange={(e) => handleProductDetailsChange('discount', e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Size</label>
//             <input
//               type="text"
//               className="mt-1 p-2 w-full border rounded-md"
//               value={product.sizeType|| ''}
//               onChange={(e) => handleProductDetailsChange('sizeType', e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//   <label className="block text-sm font-medium text-gray-700">Stock</label>
//   <input
//     type="text"
//     name="stock"
//     className="mt-1 p-2 w-full border rounded-md"
//     value={product.stock || ''}  // Ensure a default empty string if value is undefined
//     onChange={(e) => handleProductDetailsChange('stock', e.target.value)}
//   />
// </div>
// <div className="mb-4">
//   <label className="block text-sm font-medium text-gray-700">color</label>
//   <input
//     type="text"
//     name="stock"
//     className="mt-1 p-2 w-full border rounded-md"
//     value={product.color || ''}  // Ensure a default empty string if value is undefined
//     onChange={(e) => handleProductDetailsChange('color', e.target.value)}
//   />
// </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Size Type</label>
//             <Combobox
//               as="div"
//               value={selectedSizeType}
//               onChange={(sizeType) => handleProductDetailsChange('sizeType', sizeType.name)}
//             >
//               <div className="relative mt-2">
//                 <ComboboxInput
//                   className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   onChange={(event) => setQuery(event.target.value)}
//                   displayValue={(sizeType) => sizeType?.name}
//                 />
//                 <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//                   <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//                 </ComboboxButton>
//                 <ComboboxOptions className="absolute mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                   {filteredSizeTypes.length === 0 && query !== '' ? (
//                     <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
//                       Nothing found.
//                     </div>
//                   ) : (
//                     filteredSizeTypes.map((sizeType) => (
//                       <ComboboxOption
//                         key={sizeType.id}
//                         value={sizeType}
//                         className={({ active }) =>
//                           `relative cursor-default select-none py-2 pl-3 pr-4 ${active ? 'bg-indigo-600 text-white' : 'text-gray-900'}`
//                         }
//                       >
//                         {sizeType.name}
//                         {sizeType === selectedSizeType && (
//                           <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
//                             <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                           </span>
//                         )}
//                       </ComboboxOption>
//                     ))
//                   )}
//                 </ComboboxOptions>
//               </div>
//             </Combobox>
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Category</label>
//             <Combobox
//               as="div"
//               value={selectedCategory}
//               onChange={(category) => setSelectedCategory(category)}
//             >
//               <div className="relative mt-2">
//                 <ComboboxInput
//                   className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   onChange={(event) => setQuery(event.target.value)}
//                   displayValue={(category) => category?.name}
//                 />
//                 <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//                   <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//                 </ComboboxButton>
//                 <ComboboxOptions className="absolute mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                   {filteredCategories.length === 0 && query !== '' ? (
//                     <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
//                       Nothing found.
//                     </div>
//                   ) : (
//                     filteredCategories.map((category) => (
//                       <ComboboxOption
//                         key={category.id}
//                         value={category}
//                         className={({ active }) =>
//                           `relative cursor-default select-none py-2 pl-3 pr-4 ${active ? 'bg-indigo-600 text-white' : 'text-gray-900'}`
//                         }
//                       >
//                         {category.name}
//                         {category === selectedCategory && (
//                           <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
//                             <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                           </span>
//                         )}
//                       </ComboboxOption>
//                     ))
//                   )}
//                 </ComboboxOptions>
//               </div>
//             </Combobox>
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Gender</label>
//             <Combobox
//               as="div"
//               value={selectedGender}
//               onChange={(gender) => setSelectedGender(gender)}
//             >
//               <div className="relative mt-2">
//                 <ComboboxInput
//                   className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   onChange={(event) => setQuery(event.target.value)}
//                   displayValue={(gender) => gender?.name}
//                 />
//                 <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//                   <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//                 </ComboboxButton>
//                 <ComboboxOptions className="absolute mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                   {filteredGenders.length === 0 && query !== '' ? (
//                     <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
//                       Nothing found.
//                     </div>
//                   ) : (
//                     filteredGenders.map((gender) => (
//                       <ComboboxOption
//                         key={gender.id}
//                         value={gender}
//                         className={({ active }) =>
//                           `relative cursor-default select-none py-2 pl-3 pr-4 ${active ? 'bg-indigo-600 text-white' : 'text-gray-900'}`
//                         }
//                       >
//                         {gender.name}
//                         {gender === selectedGender && (
//                           <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
//                             <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                           </span>
//                         )}
//                       </ComboboxOption>
//                     ))
//                   )}
//                 </ComboboxOptions>
//               </div>
//             </Combobox>
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Description</label>
//             <textarea
//               className="mt-1 p-2 w-full border rounded-md"
//               value={product.description}
//               onChange={(e) => handleProductDetailsChange('description', e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Product Images</label>
//             <input
//               type="file"
//               multiple
//               className="mt-1"
//               onChange={(e) => handleProductImageUpload(e.target.files)}
//             />
//             <div className="flex flex-wrap mt-2">
//               {productDetails.images.map((image, index) => (
//                 <div key={index} className="relative mr-2 mb-2">
//                   <img src={image} alt={`Product Image ${index + 1}`} className="w-20 h-20 object-cover" />
//                   <button
//                     type="button"
//                     className="absolute top-0 right-0 p-1 bg-red-600 text-white rounded-full"
//                     onClick={() => setProductDetails({
//                       ...productDetails,
//                       images: productDetails.images.filter((_, i) => i !== index)
//                     })}
//                   >
//                     &times;
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//           {error && <div className="text-red-500 mb-4">{error}</div>}
//           <button
//             type="button"
//             className="mr-2 p-2 bg-blue-600 text-white rounded"
//             onClick={handleSave}
//           >
//             Save
//           </button>
//           <button
//             type="button"
//             className="p-2 bg-gray-400 text-white rounded"
//             onClick={handleCancel}
//           >
//             Cancel
//           </button>
//         </div>
//         <div className="w-full lg:w-1/2 p-4">
//           <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-custom-heading">Variants</h2>
//           {variants.map((variant, index) => (
//             <div key={index} className="mb-4 p-4 border rounded-md">
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Color</label>
//                 <Combobox
//                   as="div"
//                   value={variant.color}
//                   onChange={(color) => handleColorChange(index, color.name)}
//                 >
//                   <div className="relative mt-2">
//                     <ComboboxInput
//                       className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                       onChange={(event) => setColorQuery(event.target.value)}
//                       displayValue={(color) => color?.name}
//                     />
//                     <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//                       <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//                     </ComboboxButton>
//                     <ComboboxOptions className="absolute mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                       {filteredColors.length === 0 && colorQuery !== '' ? (
//                         <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
//                           Nothing found.
//                         </div>
//                       ) : (
//                         filteredColors.map((color) => (
//                           <ComboboxOption
//                             key={color.id}
//                             value={color}
//                             className={({ active }) =>
//                               `relative cursor-default select-none py-2 pl-3 pr-4 ${active ? 'bg-indigo-600 text-white' : 'text-gray-900'}`
//                             }
//                           >
//                             {color.name}
//                             {color.name === variant.color && (
//                               <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
//                                 <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                               </span>
//                             )}
//                           </ComboboxOption>
//                         ))
//                       )}
//                     </ComboboxOptions>
//                   </div>
//                 </Combobox>
//               </div>
//               <div className="mb-4">
//                 <h3 className="text-lg font-medium text-gray-900">Sizes</h3>
//                 {variant.sizes.map((size, sizeIndex) => (
//                   <div key={sizeIndex} className="flex items-center mb-2">
//                     <input
//                       type="text"
//                       value={size.size}
//                       className="p-2 w-16 border rounded-md mr-2"
//                       readOnly
//                     />
//                     <input
//                       type="number"
//                       value={size.quantity}
//                       className="p-2 w-16 border rounded-md mr-2"
//                       onChange={(e) => handleVariantChange(index, sizeIndex, 'quantity', e.target.value)}
//                       placeholder="Quantity"
//                     />
//                     <input
//                       type="number"
//                       value={size.price}
//                       className="p-2 w-24 border rounded-md mr-2"
//                       onChange={(e) => handleVariantChange(index, sizeIndex, 'price', e.target.value)}
//                       placeholder="Price"
//                     />
//                     <input
//                       type="number"
//                       value={size.discount}
//                       className="p-2 w-24 border rounded-md mr-2"
//                       onChange={(e) => handleVariantChange(index, sizeIndex, 'discount', e.target.value)}
//                       placeholder="Discount"
//                     />
//                     <input
//                       type="number"
//                       value={size.finalPrice}
//                       className="p-2 w-24 border rounded-md mr-2"
//                       readOnly
//                     />
//                   </div>
//                 ))}
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Images</label>
//                 <input
//                   type="file"
//                   multiple
//                   className="mt-1"
//                   onChange={(e) => handleImageUpload(index, e.target.files)}
//                 />
//                 <div className="flex flex-wrap mt-2">
//                   {variant.images.map((image, imgIndex) => (
//                     <div key={imgIndex} className="relative mr-2 mb-2">
//                       <img src={image} alt={`Variant Image ${imgIndex + 1}`} className="w-20 h-20 object-cover" />
//                       <button
//                         type="button"
//                         className="absolute top-0 right-0 p-1 bg-red-600 text-white rounded-full"
//                         onClick={() => handleRemoveImage(index, imgIndex)}
//                       >
//                         &times;
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <button
//                 type="button"
//                 className="p-2 bg-red-600 text-white rounded"
//                 onClick={() => handleRemoveVariant(index)}
//               >
//                 Remove Variant
//               </button>
//             </div>
//           ))}
//           <button
//             type="button"
//             className="p-2 bg-blue-600 text-white rounded"
//             onClick={handleAddVariant}
//           >
//             Add Variant
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddEditProduct;
