import {
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

export function NavbarOthers(props: any) {
  return (
    <div className="format_others home_navbar">
      <Container>
        <Stack
          flexDirection={"row"}
          className="navbar_config"
          justifyContent={"space-between"}
        >
          <Box>
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
            {props.verifiedMemberData ? (
              <Box className="hover-line" onClick={props.setPath}>
                <NavLink to="/member-page" activeClassName="underline">
                  My page
                </NavLink>
              </Box>
            ) : null}

            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to={"/help"} activeClassName="underline">
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
            {!props.verifiedMemberData ? (
              <Box>
                <Button
                  variant="contained"
                  style={{ color: "#ffffff", background: "#1976d2" }}
                  onClick={props.handleLoginOpen}
                >
                  Sign In
                </Button>
              </Box>
            ) : (
              <img
                style={{ width: "48px", height: "48px", borderRadius: "24px" }}
                src={props.verifiedMemberData.mb_image}
                onClick={props.handleLogOutClick}
              />
            )}

            <Menu
              anchorEl={props.anchorEl}
              open={props.open}
              onClose={props.handleCloseLogOut}
              onClick={props.handleCloseLogOut}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={props.handleLogOutRequest}>
                <ListItemIcon>
                  <LogoutIcon fontSize="small" style={{ color: "blue" }} />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
