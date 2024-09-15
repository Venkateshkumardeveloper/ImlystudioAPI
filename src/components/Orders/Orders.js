
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PrinterIcon from '@mui/icons-material/Print';
import { Edit } from '@mui/icons-material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import Box from '@mui/material/Box';
import StatusBadge from './Satus';
import FilterBar from './FilterBar';
import { styled } from '@mui/material/styles';
import {GlobalContext} from "../../Context/GlobalContext"

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
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Orders = () => {
  const { products, setProducts } = useContext(GlobalContext);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();

  const handleOrderUpdate = (orderId) => {
    navigate("/update-order", { state: { orderId } });
  };

  const handleCancel = (id) => {
    const newStatus = "Canceled";
    setProducts((prevItems) =>
      prevItems.map((item) =>
        item.OrderID === id ? { ...item, OrderStatus: newStatus } : item
      )
    );
  };

  const filteredOrders = products.filter(
    (product) =>
      selectedFilter === "All" || product.OrderStatus === selectedFilter
  );

  const paginatedData = filteredOrders.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
      <div className="px-4 sm:px-6 lg:px-8 pt-4 w-auto bg-white">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h2 className="text-xl mb-5 font-semibold">Orders</h2>
          </div>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              gap: { xs: 2, sm: 1 },
              mx: "auto",
            }}
          >
            <Button
              variant="contained"
              disableRipple
              sx={{
                backgroundColor: "#003375",
                color: "white",
                mx: { xs: 0, sm: 1 },
                mb: { xs: 1, sm: 0 },
                boxShadow: "none",
                textTransform: "capitalize",
                fontSize: "0.875rem",
                ":hover": {
                  backgroundColor: "#cadcfc",
                  color: "#374151",
                  boxShadow: "none",
                },
                width: { xs: "100%", sm: "auto" },
              }}
              startIcon={<HomeIcon />}
              href="/AddOrders"
            >
              Create Order
            </Button>
            <Button
              variant="contained"
              disableRipple
              sx={{
                backgroundColor: "#003375",
                color: "white",
                mr: { xs: 0, sm: 0 },
                boxShadow: "none",
                textTransform: "capitalize",
                fontSize: "0.875rem",
                ":hover": {
                  backgroundColor: "#cadcfc",
                  color: "#374151",
                  boxShadow: "none",
                },
                width: { xs: "100%", sm: "auto" },
              }}
              startIcon={<PrinterIcon />}
              href="/create-order"
            >
              Export Order
            </Button>
          </Box>
        </div>
        <div className="flex justify-center md:justify-end mb-4 px-4 md:px-0 mt-6">
          <div className="flex flex-wrap justify-center space-x-2 md:space-x-2 md:justify-end">
            <FilterBar
              selectedFilter={selectedFilter}
              onFilterChange={setSelectedFilter}
            />
          </div>
        </div>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Order Id</StyledTableCell>
                <StyledTableCell>Product Name</StyledTableCell>
                <StyledTableCell align="center">Price</StyledTableCell>
                <StyledTableCell align="center">
                  Payment Balance
                </StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
                <StyledTableCell align="center">Update</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((product) => (
                <StyledTableRow key={product.OrderID}>
                  <StyledTableCell>{product.OrderID}</StyledTableCell>
                  <StyledTableCell>
                    {product.CreatedBy || "N/A"}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    &#8377;{product.TotalAmount}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    &#8377;{product.TotalAmount - product.TotalQuantity}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <StatusBadge status={product.OrderStatus} />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <button
                      type="button"
                      className={`rounded-md p-[3px] h-9 text-xs font-semibold text-white shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2  ${
                        product.OrderStatus === "Dispatched"
                          ? "bg-gray-400 cursor-not-allowed"
                          : product.OrderStatus === "Canceled"
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-red-600 hover:bg-red-500 focus:ring-red-500"
                      } whitespace-normal`}
                      disabled={
                        product.OrderStatus === "Dispatched" ||
                        product.OrderStatus === "Canceled"
                      }
                      onClick={() => handleCancel(product.OrderID)}
                    >
                      {product.OrderStatus === "Dispatched" ? (
                        <>
                          Already <br /> Dispatched
                        </>
                      ) : product.OrderStatus === "Canceled" ? (
                        "Canceled"
                      ) : (
                        "Cancel Order"
                      )}
                    </button>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Button
                      onClick={() => handleOrderUpdate(product.OrderID)}
                      variant="contained"
                      startIcon={<Edit />}
                      sx={{
                        backgroundColor: "#2563eb",
                        color: "white",
                        fontSize: "0.75rem",
                        padding: "4px 8px",
                        borderRadius: "4px",
                        boxShadow: "none",
                        textTransform: "none",
                        ":hover": {
                          backgroundColor: "#3b82f6 ",
                          boxShadow: "none",
                        },
                      }}
                    >
                      Edit
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredOrders.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </div>
    </div>
  );
};

export default Orders;