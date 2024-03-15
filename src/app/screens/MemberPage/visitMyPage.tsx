import React, { useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SettingsIcon from "@mui/icons-material/Settings";
import Button from "@mui/material/Button";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Tab from "@mui/material/Tab";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { MemberPosts } from "./memberPosts";
import { MemberFollowers } from "./memberFollowers";
import { MemberFollowing } from "./memberFollowing";
import { MySettings } from "./mySettings";
import { TabList } from "@material-ui/lab";
import TabPanel from "@material-ui/lab/TabPanel";
import TabContext from "@material-ui/lab/TabContext";

import { TuiEditor } from "../../components/tuiEditor/tuiEditor";
import TViewer from "../../components/tuiEditor/tViewer";

export function VisitMyPage(_props: any) {
  //INITIALIZIATION
  const [value, setValue] = useState("1");

  // HANDLERS
  const handleChange = (_event: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="my_page">
      <Container maxWidth="lg" sx={{ mt: "50px", mb: "50px" }}>
        <Stack className="my_page_frame">
          <TabContext value={value}>
            {/* My Page Left Side */}
            <Stack className="my_page_left">
              <Box display={"flex"} flexDirection={"column"}>
                <TabPanel value="1">
                  <Box className="menu_name">My Articles</Box>
                  <Box className="menu_content">
                    <MemberPosts />
                    <Stack
                      sx={{ my: "40px" }}
                      direction={"row"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Box className={"bottom_box"}>
                        <Pagination
                          count={3}
                          page={1}
                          renderItem={(item) => (
                            <PaginationItem
                              components={{
                                previous: ArrowBackIcon,
                                next: ArrowForwardIcon,
                              }}
                              {...item}
                              color="secondary"
                            />
                          )}
                        />
                      </Box>
                    </Stack>
                  </Box>
                </TabPanel>

                {/* Followers */}
                <TabPanel value={"2"}>
                  <Box className={"menu_name"}>Followers</Box>
                  <Box className={"menu_content"}>
                    <MemberFollowers actions_enabled={true} />
                  </Box>
                </TabPanel>

                {/* Following */}
                <TabPanel value={"3"}>
                  <Box className={"menu_name"}>Following</Box>
                  <Box className={"menu_content"}>
                    <MemberFollowing actions_enabled={true} />
                  </Box>
                </TabPanel>

                {/* Create an article */}
                <TabPanel value={"4"}>
                  <Box className={"menu_name"}>Create an Artice</Box>
                  <Box className={"write_content"}>
                    <TuiEditor />
                  </Box>
                </TabPanel>

                {/* Chosen Article */}
                <TabPanel value={"5"}>
                  <Box className={"menu_name"}>Chosen Article</Box>
                  <Box className={"menu_content"}>
                    <TViewer text={`<h3>Hello</h3>`} />
                  </Box>
                </TabPanel>

                {/* Setting */}
                <TabPanel value={"6"}>
                  <Box className={"menu_name"}>Settings</Box>
                  <Box className={"menu_content"}>
                    <MySettings />
                  </Box>
                </TabPanel>
              </Box>
            </Stack>

            {/* My Page Right Side */}
            <Stack className="my_page_right">
              <Box className="order_info_box">
                <a
                  href="#"
                  onClick={() => setValue("6")}
                  className="settings_btn"
                >
                  <SettingsIcon />
                </a>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <div className="order_user_img">
                    <img
                      src="/images/article/article_user.jpg"
                      className="order_user_avatar"
                      alt="Setting user img"
                    />
                    <div className="order_user_icon_box">
                      <AccountCircleOutlinedIcon sx={{ color: "#000" }} />
                    </div>
                  </div>
                  <span className="order_user_name">Max Mit</span>
                  <span className="order_user_prof">USER</span>
                </Box>
                <Box className={"user_media_box"}>
                  <FacebookIcon />
                  <InstagramIcon />
                  <TelegramIcon />
                  <YouTubeIcon />
                </Box>
                <Box className={"user_media_box"}>
                  <p className="follows">Followers: 3</p>
                  <p className="follows">Followings: 2</p>
                </Box>
                <p className="user_desc">"No additional info"</p>
                <Box
                  display={"flex"}
                  justifyContent={"flex-end"}
                  sx={{ mt: "10px" }}
                >
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab
                      style={{ flexDirection: "column" }}
                      value={"4"}
                      component={() => (
                        <Button
                          variant="contained"
                          onClick={() => setValue("4")}
                        >
                          Create an Article
                        </Button>
                      )}
                    />
                  </TabList>
                </Box>
              </Box>

              <Box className={"my_page_menu"}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Stack flexDirection={"column"} width={372}>
                    <Box width="100%">
                      <Tab
                        value={"1"}
                        component={() => (
                          <div
                            className={`menu_box ${value}`}
                            onClick={() => setValue("1")}
                          >
                            <CreateOutlinedIcon />
                            <span>My Articles</span>
                          </div>
                        )}
                      />
                    </Box>

                    <Box>
                      <Tab
                        style={{ flexDirection: "column" }}
                        value={"2"}
                        component={() => (
                          <div
                            className={`menu_box ${value}`}
                            onClick={() => setValue("2")}
                          >
                            <GroupOutlinedIcon />
                            <span>Follower</span>
                          </div>
                        )}
                      />
                    </Box>

                    <Box>
                      <Tab
                        style={{ flexDirection: "column" }}
                        value={"3"}
                        component={() => (
                          <div
                            className={`menu_box ${value}`}
                            onClick={() => setValue("3")}
                          >
                            <PersonOutlineOutlinedIcon />
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
