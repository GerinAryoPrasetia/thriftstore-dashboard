/* eslint-disable prefer-const */
/* eslint-disable object-shorthand */
import React, { useState } from "react";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";

// Material Dashboard 2 React components
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import MDInput from "components/MDInput";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
// import DataTable from "examples/Tables/DataTable";
// eslint-disable-next-line object-shorthand
function Upload() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [size, setSize] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8000/api/product", {
        method: "POST",
        body: JSON.stringify({
          prodoct_name: name,
          price: price,
          description: desc,
          size: size,
        }),
      });
      let resJson = await res.json();
      if (resJson.status === 200) {
        setMessage("Produk Berhasil Ditambahkan");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox display="flex" flexDirection="column" width="50%">
        <MDInput
          label="Product Name"
          marginBottom="30px"
          sx={{ marginBottom: "20px" }}
          onChange={(e) => setName(e.target.value)}
        />
        <MDInput
          label="Price"
          sx={{ marginBottom: "20px" }}
          onChange={(e) => setPrice(e.target.value)}
        />
        <MDInput
          label="Description"
          sx={{ marginBottom: "20px" }}
          onChange={(e) => setDesc(e.target.value)}
        />
        <MDInput
          label="Size"
          sx={{ marginBottom: "20px" }}
          onChange={(e) => setSize(e.target.value)}
        />
        {message ? <p>{message}</p> : ""}
        <MDButton onClick={handleSubmit}>Upload</MDButton>
      </MDBox>
    </DashboardLayout>
  );
}

export default Upload;
