import React from "react";
import { Box, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";

const followings = [
  { mb_nick: "Martin" },
  { mb_nick: "Jonny" },
  { mb_nick: "Khan" },
];

export function MemberFollowing(props: any) {
  return (
    <Stack>
      {followings.map((follower) => {
        const image_url = "/images/article/article_user.jpg";
        return (
          <Box className={"follow_box"}>
            <Avatar src={image_url} sx={{ width: 89, height: 89 }} />
            <div
              style={{
                width: "400px",
                display: "flex",
                flexDirection: "column",
                marginLeft: "25px",
                height: "85%",
              }}
            >
              <span className="username_text">USER</span>
              <span className="name_text">{follower.mb_nick}</span>
            </div>
            {props.actions_enabled && (
              <Button
                variant="contained"
                startIcon={<PersonAddAltOutlinedIcon />}
                className="follow_cancel_btn"
              >
                Unfollow
              </Button>
            )}
          </Box>
        );
      })}
    </Stack>
  );
}
