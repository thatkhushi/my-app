import Pagination from "@mui/material/Pagination";
import React from "react";
import {  ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core";
const darKTheme=createTheme({
    palette: {
        type: "dark",
        
      },
})



const CustomPagination = ({ setPage, numOfPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={darKTheme}>
        <Pagination
          count={numOfPages}
          onChange={(e) => handlePageChange(e.target.textContent)}
          color="primary"
          hideNextButton
          hidePrevButton
          
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
