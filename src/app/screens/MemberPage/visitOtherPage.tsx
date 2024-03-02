import React, { ChangeEvent, useEffect, useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SettingsIcon from "@mui/icons-material/Settings";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { MemberPosts } from "./memberPosts";
import { MemberFollowers } from "./memberFollowers";
import { MemberFollowing } from "./memberFollowing";

import TabContext from "@material-ui/lab/TabContext";
import TabPanel from "@material-ui/lab/TabPanel";
import TabList from "@material-ui/lab/TabList";
import PersonIcon from "@mui/icons-material/Person";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PeopleIcon from "@mui/icons-material/People";

import TViewer from "../../components/tuiEditor/tViewer";

export function VisitOtherPage(_props: any) {
  //INITIALIZIATION
  const [value, setValue] = useState("4");

  // HANDLERS
  const handleChange = (_event: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="my_page">
      <Container maxWidth="lg" sx={{ mt: "50px", mb: "50px" }}>
        <Stack className="my_page_frame">
          <TabContext value={value}>
            <Stack className="my_page_left">
              <Box display={"flex"} flexDirection={"column"}>
                <TabPanel value="1">
                  <Box className="menu_name">Articles</Box>
                  <Box className="menu_content">
                    <MemberPosts />
                  </Box>
                </TabPanel>
                <TabPanel value={"2"}>
                  <Box className={"menu_name"}>Followers</Box>
                  <Box className={"menu_content"}>
                    <MemberFollowers actions_enabled={false} />
                  </Box>
                </TabPanel>

                <TabPanel value={"3"}>
                  <Box className={"menu_name"}>Following</Box>
                  <Box className={"menu_content"}>
                    <MemberFollowing actions_enabled={false} />
                  </Box>
                </TabPanel>

                <TabPanel value={"4"}>
                  <Box className={"menu_name"}>Chosen Article</Box>
                  <Box className={"menu_content"}>
                    <TViewer text={`<h3>Hello</h3>`} />
                  </Box>
                </TabPanel>
              </Box>
            </Stack>

            <Stack className="my_page_right">
              <Box className="order_info_box">
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <div className="order_user_img">
                    <img
                      src="/images/article/article_user.jpg"
                      className="order_user_avatar"
                      alt="otherPage user"
                    />
                    <div className="order_user_icon_box">
                      <PersonIcon />
                    </div>
                  </div>
                  <span className="order_user_name">Khan Mit</span>
                  <span className="order_user_prof">USER</span>
                </Box>
                <Box className={"user_media_box"}>
                  <FacebookIcon />
                  <InstagramIcon />
                  <TelegramIcon />
                  <YouTubeIcon />
                </Box>
                <Box className={"user_media_box"}>
                  <p className="follows">Followers: 5</p>
                  <p className="follows">Followings: 6</p>
                </Box>
                <p className="user_desc">"There is no other information"</p>
                <Box
                  display={"flex"}
                  justifyContent={"flex-end"}
                  sx={{ mt: "10px" }}
                >
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    {true ? (
                      <Tab
                        style={{ flexDirection: "column" }}
                        value={"4"}
                        component={() => (
                          <Button
                            variant="contained"
                            style={{ backgroundColor: "#f70909b8" }}
                          >
                            Unfollow
                          </Button>
                        )}
                      />
                    ) : (
                      <Tab
                        style={{ flexDirection: "column" }}
                        value={"4"}
                        component={() => (
                          <Button
                            variant="contained"
                            style={{ backgroundColor: "#30945e" }}
                          >
                            Follow
                          </Button>
                        )}
                      />
                    )}
                  </TabList>
                </Box>
              </Box>

              <Box className={"my_page_menu"}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Stack width={372}>
                    <Box>
                      <Tab
                        value={"1"}
                        component={() => (
                          <div
                            className={`menu_box ${value}`}
                            onClick={() => setValue("1")}
                          >
                            <BorderColorIcon />
                            <span>Articles</span>
                          </div>
                        )}
                      />
                    </Box>
                    <Box>
                      <Tab
                        value={"2"}
                        component={() => (
                          <div
                            className={`menu_box ${value}`}
                            onClick={() => setValue("2")}
                          >
                            <PeopleIcon />
                            <span>Followers</span>
                          </div>
                        )}
                      />
                    </Box>
                    <Box>
                      <Tab
                        value={"3"}
                        component={() => (
                          <div
                            className={`menu_box ${value}`}
                            onClick={() => setValue("3")}
                          >
                            <PersonIcon />
                            <span>Following</span>
                          </div>
                        )}
                      />
                    </Box>
                  </Stack>
                </TabList>
              </Box>
            </Stack>
          </TabContext>
        </Stack>
      </Container>
    </div>
  );
}
