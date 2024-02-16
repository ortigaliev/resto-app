import { Avatar, Box, Stack } from "@mui/material";
import { Container } from "@mui/material";
import React from "react";

export function Recommendation() {
  return (
    <div className="top_article_frame">
      <Container
        maxWidth="lg"
        sx={{ mb: "50px", mt: "60px" }}
        style={{ position: "relative" }}
      >
        <Stack
          flexDirection={"column"}
          alignItems={"center"}
          sx={{ mt: "45px" }}
        >
          <Box className={"category_title"}>Reccomended articles</Box>
          <Stack className="article_main" flexDirection={"row"}>
            <Stack className="article_container">
              <Box className={"article_category"}>Most viewed</Box>

              <Stack className="article_box">
                <Box
                  className={"article_img"}
                  sx={{ backgroundImage: "url(/images/events_1.jpg)" }}
                ></Box>
                <Box className={"article_info"}>
                  <Box className={"article_main_info"}>
                    <div className="article_author">
                      <Avatar
                        alt="Author_photo"
                        src="/images/user.jpg"
                        sx={{ width: "35px", height: "35px" }}
                      />
                      <span className="author_username">Max</span>
                    </div>
                    <span className="article_title">
                      Interesting and delicus
                    </span>
                    <span className="article_desc"></span>
                  </Box>
                </Box>
              </Stack>

              <Stack className="article_box">
                <Box
                  className={"article_img"}
                  sx={{ backgroundImage: "url(/images/events_2.jpg)" }}
                ></Box>
                <Box className={"article_info"}>
                  <Box className={"article_main_info"}>
                    <div className="article_author">
                      <Avatar
                        alt="Author_photo"
                        src="/images/user.jpg"
                        sx={{ width: "35px", height: "35px" }}
                      />
                      <span className="author_username">Jonny</span>
                    </div>
                    <span className="article_title">
                      Interesting and delicus
                    </span>
                    <span className="article_desc"></span>
                  </Box>
                </Box>
              </Stack>
              <Box className={"article_category"}>Most liked</Box>

              <Stack className="article_box">
                <Box
                  className={"article_img"}
                  sx={{ backgroundImage: "url(/images/events_3.jpg)" }}
                ></Box>
                <Box className={"article_info"}>
                  <Box className={"article_main_info"}>
                    <div className="article_author">
                      <Avatar
                        alt="Author_photo"
                        src="/images/user.jpg"
                        sx={{ width: "35px", height: "35px" }}
                      />
                      <span className="author_username">John</span>
                    </div>
                    <span className="article_title">
                      Why Good Nutrition is Essential
                    </span>
                  </Box>
                </Box>
              </Stack>

              <Stack className="article_box">
                <Box
                  className={"article_img"}
                  sx={{ backgroundImage: "url(/images/events_4.jpg)" }}
                ></Box>
                <Box className={"article_info"}>
                  <Box className={"article_main_info"}>
                    <div className="article_author">
                      <Avatar
                        alt="Author_photo"
                        src="/images/user.jpg"
                        sx={{ width: "35px", height: "35px" }}
                      />
                      <span className="author_username">Khan</span>
                    </div>
                    <span className="article_title">
                      Sustainable Agriculture
                    </span>
                    <span className="article_desc"></span>
                  </Box>
                </Box>
              </Stack>
            </Stack>

            <Stack className="article_container">
              <Box className={"article_category"}>Celebrities</Box>
              <Box className={"article_news"}>
                <h1 style={{ color: "orange" }}>TViewer</h1>
              </Box>
              <Box className={"article_news"}>
                <h1 style={{ color: "orange" }}>TViewer</h1>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
