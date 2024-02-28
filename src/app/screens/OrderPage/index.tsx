import { Box, Container, Divider, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../../../css/order.css";

import Tab from "@mui/material/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";

import PausedOrders from "../../components/order/pausedOrder";

import FinishedOrders from "../../components/order/finishedOrder";
import { ProcessOrders } from "../../components/order/processOrder";

export function OrderPage() {
  // INITIALIZATIONS
  const [value, setValue] = useState("1");

  // HANDLERS
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="order_page">
      <Container
        maxWidth="lg"
        style={{ display: "flex", flexDirection: "row" }}
        sx={{ mt: "54px", mb: "54px" }}
      >
        <Stack className={"order_left"}>
          <TabContext value={value}>
            <Box className="order_nav_frame">
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#979797",
                  }}
                >
                  <Tab label="My orders" value={"1"} />
                  <Tab label="Order Process" value={"2"} />
                  <Tab label="Finished" value={"3"} />
                </TabList>
              </Box>
            </Box>
            <Stack className="order_main_content">
              <PausedOrders />
              <ProcessOrders />
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>

        <Stack className="order_right">
          <Box className="order_info_box">
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <div className="order_user_img">
                <img
                  src="/images/dish/dish_user.jpg"
                  className="order_user_avatar"
                />

                <Box className="order_user_icon_box">
                  <PersonIcon sx={{ color: "#ff5a3c" }} />
                </Box>
              </div>
              <h1 className="order_user_name">Muhammadjon</h1>
              <p className="order_user_prof">User</p>
            </Box>
            <Divider style={{ marginTop: "30px", width: "100%" }} />
            <Box
              className={"order_user_address"}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <LocationOnIcon />
              <p className="spec_address_text">Ansan</p>
            </Box>
          </Box>

          <Box className="payment_box">
            <div className="card_input">Card member 5243 0780 2042 2512</div>
            <Box className="twice_input">
              <div className="card_half_input">07/24</div>
              <div className="card_half_input">CVV:010</div>
            </Box>
            <div className="card_input">Ortigaliyev Muhammadjon</div>
            <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
              <Box
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"space-between"}
                marginTop={"35px"}
                gap="2"
              >
                <img
                  src="/icons/union.svg"
                  style={{ width: "38px", height: "25px" }}
                />
                <img
                  src="/icons/master.svg"
                  style={{ width: "38px", height: "25px" }}
                />
                <img
                  src="/icons/paypal.svg"
                  style={{ width: "38px", height: "25px" }}
                />
                <img
                  src="/icons/viza.svg"
                  style={{ width: "38px", height: "25px" }}
                />
              </Box>
            </Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
