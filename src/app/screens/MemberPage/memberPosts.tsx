import React, { ChangeEvent, useRef, useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import moment from "moment";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

export function MemberPosts(props: any) {
  return (
    <Box className={"post_content"}>
      {["1", "2", "3"].map((article) => {
        return (
          <Stack className="all_article_box" sx={{ cursor: "pointer" }}>
            <Box
              className={"all_article_img"}
              sx={{ backgroundImage: `url('/images/article/article_bg.jpg')` }}
            ></Box>
            <Box className={"all_article_container"}>
              <Box alignItems={"center"} display={"flex"}>
                <img
                  src="/images/article/article_user.jpg"
                  width={"35px"}
                  style={{ borderRadius: "50%", backgroundSize: "cover" }}
                />
                <span className="all_article_author_user">Khan</span>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                sx={{ mt: "15px" }}
              >
                <span className="all_article_title">Restaurants rataing</span>
                <p className="all_article_desc">Burak is Turkish Restaurant</p>
              </Box>
              <Box>
                <Box
                  className={"article_share"}
                  style={{ width: "100%", height: "auto" }}
                  sx={{ mb: "10px" }}
                >
                  <Box
                    className={"article_share_main"}
                    style={{
                      color: "#fff",
                      marginLeft: "150px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span>moment().format('MMMM Do YYYY, h:mm:ss a')</span>
                    <Checkbox
                      sx={{ ml: "40px" }}
                      icon={<Favorite />}
                      checkedIcon={<Favorite style={{ color: "red" }} />}
                      checked={false}
                    />
                    <span style={{ marginRight: "10px" }}>100</span>
                    <RemoveRedEyeIcon />
                    <span style={{ marginLeft: "10px" }}>1000</span>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Stack>
        );
      })}
    </Box>
  );
}
