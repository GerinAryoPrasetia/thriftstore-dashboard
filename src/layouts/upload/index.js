import React from "react";
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

function Upload() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox display="flex" flexDirection="column" width="50%">
        <MDInput label="Product Name" marginBottom="30px" sx={{ marginBottom: "20px" }} />
        <MDInput label="Price" sx={{ marginBottom: "20px" }} />
        <MDInput label="Description" sx={{ marginBottom: "20px" }} />
        <MDInput label="Size" sx={{ marginBottom: "20px" }} />
        <MDButton>Save</MDButton>
      </MDBox>
    </DashboardLayout>
  );
}

export default Upload;
