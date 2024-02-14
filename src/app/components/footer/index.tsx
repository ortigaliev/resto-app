import { Box, Container, Stack } from "@mui/material";
import React from "react";

export function Footer() {
  return (
    <div className="footer_config">
      <Container>
        <Stack className="footer_box">
          <Stack className="footer_main_stack" flexDirection={"row"}>
            <Stack className="footer_about">
              <Box>
                <img
                  className="footer_icon"
                  src="/icons/papay_logo.svg"
                  alt="Footer Logo"
                />
              </Box>
              <Box className="footer_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor Sed ut perspiciatis unde omnis iste{" "}
              </Box>

              {/* Social Icons section */}
              <Box className="footer_social_icons">
                <Box className="footer_social_item">
                  <img src="/icons/facebook.svg" alt="facebook" />
                </Box>

                <Box className="footer_social_item">
                  <img src="/icons/twit.svg" alt="twit" />
                </Box>

                <Box className="footer_social_item">
                  <img src="/icons/insta.svg" alt="insta" />
                </Box>

                <Box className="footer_social_item">
                  <img src="/icons/youtube.svg" alt="youtube" />
                </Box>
              </Box>
            </Stack>
            <Stack className="footer_section">
              <Box className="footer_title">Sections</Box>
              <Box className="devider"></Box>
              <Stack className="footer_text_wrapper">
                <Box className="footer_text">Home</Box>
                <Box className="footer_text">Restaurants</Box>
                <Box className="footer_text">Community</Box>
                <Box className="footer_text">Help</Box>
              </Stack>
            </Stack>
            <Stack className="footer_find_us">
              <Box className="footer_title">Find Us</Box>
              <Box className="devider"></Box>
              <Stack className="footer_text_wrapper">
                <Box className="footer_text">Uzbekistan</Box>
                <Box className="footer_text"></Box>
                <Box className="footer_text">+998 - 99 266 25 62</Box>
                <Box className="footer_text">Papays@restaurant.com</Box>
              </Stack>
            </Stack>
          </Stack>
          <Box className="liner"></Box>
          <Box className="footer_text">
            Copyright Papays 2022, All right reserved.
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
