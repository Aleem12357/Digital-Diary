import React from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { HiHome } from "react-icons/hi";

const bgColor = "#8760B2"; // Default color for the breadcrumb links

export default function CustomSeparator({ exclude = [] }) {
  const location = useLocation();
  const rawSegments = location.pathname.split("/").filter(Boolean);
  const userRole = rawSegments[0] || "";
  const pathSegments = rawSegments.slice(1).filter(
    (segment) =>
      segment.toLowerCase() !== "dashboard" &&
      !exclude.map((e) => e.toLowerCase()).includes(segment.toLowerCase())
  );

  const commonLinkStyles = {
    color: bgColor,
    textDecoration: "none",
    outline: "none",
    boxShadow: "none",
    cursor: "pointer", 

    "&:hover": {
      color: "#5e3d99", // a darker purple shade on hover
      textDecoration: "none",
      outline: "none",
      boxShadow: "none",
    },
    "&:focus": {
      outline: "none",
      boxShadow: "none",
    },
  };
  
  const breadcrumbItems = [
    // Home icon
    <Link
      key="home-icon"
      component={RouterLink}
      to={`/${userRole}/dashboard`}
      underline="none"
      sx={{ ...commonLinkStyles, display: "flex", alignItems: "center" }}
    >
      <HiHome />
    </Link>,
    // Dashboard label
    <Link
      key="dashboard"
      component={RouterLink}
      to={`/${userRole}/dashboard`}
      underline="none"
      sx={{ ...commonLinkStyles, fontWeight: 600 }}
    >
      Dashboard
    </Link>,
    // Dynamic path segments
    ...pathSegments.map((segment, index) => {
      const label = segment
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
      const to = `/${userRole}/dashboard/${pathSegments
        .slice(0, index + 1)
        .join("/")}`;
      const isLast = index === pathSegments.length - 1;

      return isLast ? (
        <Typography
        component={RouterLink}
          key={index}
          sx={{ color: bgColor, fontWeight: "bold", textTransform: "capitalize" }}
        >
          {label}
        </Typography>
      ) : (
        <Link
          key={index}
          component={RouterLink}
          to={to}
          underline="none"
          sx={{ ...commonLinkStyles, textTransform: "capitalize" }}
        >
          {label}
        </Link>
      );
    }),
  ];

  return (
    <Stack spacing={2} px={2} py={1}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbItems}
      </Breadcrumbs>
    </Stack>
  );
}
