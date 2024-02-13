import {
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export function NavbarResturant(props: any) {
  return (
    <div className="format_restaurant home_navbar">
      <Container>
        <Stack
          flexDirection={"row"}
          className="navbar_config"
          justifyContent={"space-between"}
        >
          <Box>
            {" "}
            <img src="/icons/papay_logo.svg" alt="papayLogo" />{" "}
          </Box>

          <Stack
            className="navbar_links"
            flexDirection={"row"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
          >
            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/">Home</NavLink>
            </Box>

            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/restaurant" activeClassName="underline">
                Restaurant
              </NavLink>
            </Box>

            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/order" activeClassName="underline">
                Order
              </NavLink>
            </Box>

            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/community" activeClassName="underline">
                Community
              </NavLink>
            </Box>

            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/help" activeClassName="underline">
                Help
              </NavLink>
            </Box>

            {/* Shopping Cart  */}
            <Box className="hover_line">
              <IconButton
                aria-label="cart"
                id="basic-button"
                aria-controls={undefined}
                aria-haspopup="true"
                aria-expanded={undefined}
                //onClick={handleClick}
              />
              <Badge badgeContent={3} color="secondary">
                <img src="/icons/shopping_cart.svg" alt="Shopping Cart" />
              </Badge>
            </Box>
            <Box>
              <Button
                className="hover-line"
                variant="contained"
                style={{
                  width: "77pxpx",
                  height: "36px",
                  background: "#1976d2",
                  color: "#fff",
                }}
              >
                SIGN IN
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
