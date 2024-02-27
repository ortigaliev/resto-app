import Tab from "@mui/material/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import React from "react";
import { Box, Button, Stack } from "@mui/material";

import ClearIcon from "@mui/icons-material/Clear";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import AddIcon from "@mui/icons-material/Add";

const pausedOrders = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

export default function PausedOrders(props: any) {
  return (
    <TabPanel value={"1"}>
      <Stack>
        {pausedOrders?.map((order) => {
          return (
            <Box className={"order_main_box"}>
              <Box className={"order_box_scroll"}>
                {order.map((item) => {
                  const image_path = `/images/dish/lagmon.jpg`;
                  return (
                    <Box className={"ordersName_price"}>
                      <img src={image_path} className="orderDishImg" />
                      <p className="titleDish">Lagmon</p>
                      <Box className={"priceBox"}>
                        <p>$7</p>
                        <ClearIcon />
                        <p>3</p>
                        <DragHandleIcon />
                        <p style={{ marginLeft: "10px" }}>$21</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"total_price_box black_solid"}>
                <Box className={"boxTotal"}>
                  <p>Product Price: </p>
                  <p>$21</p>
                  <AddIcon style={{ marginLeft: "20px" }} />
                  <p>Delivary fee:</p>
                  <p>$2</p>
                  <DragHandleIcon style={{ marginLeft: "20px" }} />
                  <p>Total:</p>
                  <p>$23</p>
                </Box>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{
                    borderRadius: "10px",
                  }}
                >
                  Cencel
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    borderRadius: "10px",
                  }}
                >
                  Pay Now
                </Button>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}
