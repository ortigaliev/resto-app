import MonetizationOn from "@mui/icons-material/MonetizationOn";
import { Box, Stack } from "@mui/joy";
import { Container } from "@mui/material";
import React from "react";

export function BestDishes() {
  return (
    <div className="best_dishes_frame">
      <Container>
        <Stack flexDirection={"column"} alignItems="center" sx={{ mt: "71px" }}>
          <Box className="category_title">Popular Menu</Box>
          <Stack sx={{ mt: "43px" }} flexDirection={"row"}>
            <Stack className="dish_box">
              <Stack
                className="dish_img"
                sx={{
                  backgroundImage: `url(https://images.pexels.com/photos/1339057/pexels-photo-1339057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                }}
              >
                <div className={"dish_sale"}>normal size</div>
                <div className={"view_btn"}>
                  See detail
                  <img
                    src={"/icons/dish_arrow.svg"}
                    style={{ marginLeft: "9px" }}
                  />
                </div>
              </Stack>
              <Stack className={"dish_desc"}>
                <span className={"dish_title_text"}>Spicy Meat</span>
                <span className={"dish_desc_text"}>
                  <MonetizationOn />
                  11
                </span>
              </Stack>
            </Stack>

            {/* DISH BOX 2 */}
            <Box className="dish_box">
              <Stack
                className="dish_img"
                sx={{
                  backgroundImage: `url(https://images.pexels.com/photos/1339057/pexels-photo-1339057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                }}
              >
                <div className={"dish_sale"}>normal size</div>
                <div className={"view_btn"}>
                  See detail
                  <img
                    src={"/icons/dish_arrow.svg"}
                    style={{ marginLeft: "9px" }}
                  />
                </div>
              </Stack>
              <Stack className={"dish_desc"}>
                <span className={"dish_title_text"}>Spicy Meat</span>
                <span className={"dish_desc_text"}>
                  <MonetizationOn />
                  11
                </span>
              </Stack>
            </Box>

            {/* DISH BOX 3 */}
            <Box className="dish_box">
              <Stack
                className="dish_img"
                sx={{
                  backgroundImage: `url(https://images.pexels.com/photos/1339057/pexels-photo-1339057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                }}
              >
                <div className={"dish_sale"}>normal size</div>
                <div className={"view_btn"}>
                  See detail
                  <img
                    src={"/icons/dish_arrow.svg"}
                    style={{ marginLeft: "9px" }}
                  />
                </div>
              </Stack>
              <Stack className={"dish_desc"}>
                <span className={"dish_title_text"}>Spicy Meat</span>
                <span className={"dish_desc_text"}>
                  <MonetizationOn />
                  11
                </span>
              </Stack>
            </Box>

            {/* DISH BOX 4 */}
            <Box className="dish_box">
              <Stack
                className="dish_img"
                sx={{
                  backgroundImage: `url(https://images.pexels.com/photos/1339057/pexels-photo-1339057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                }}
              >
                <div className={"dish_sale"}>normal size</div>
                <div className={"view_btn"}>
                  See detail
                  <img
                    src={"/icons/dish_arrow.svg"}
                    style={{ marginLeft: "9px" }}
                  />
                </div>
              </Stack>
              <Stack className={"dish_desc"}>
                <span className={"dish_title_text"}>Spicy Meat</span>
                <span className={"dish_desc_text"}>
                  <MonetizationOn />
                  11
                </span>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
