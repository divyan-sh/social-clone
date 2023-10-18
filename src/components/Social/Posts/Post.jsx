import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import React from "react";
import { ThumbDown } from "@mui/icons-material";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";

const Post = ({ data }) => {
  return (
    <Box sx={{ background: "#eee", padding: 1, borderRadius: 1, mt: 3 }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}>
        <Stack direction={"row"} alignItems={"center"} gap={1}>
          <Avatar src={data.user_profile} sx={{ width: 30, height: 30 }} />
          <Box>
            <Typography variant="body1" fontSize={12} fontWeight={"bold"}>
              {data.user_name}
            </Typography>
            <Typography variant="body1" fontSize={10} color={"GrayText"}>
              Indore
            </Typography>
          </Box>
        </Stack>
        <IconButton size="small">
          <MoreVertIcon fontSize="14" />
        </IconButton>
      </Stack>
      <Box sx={{ width: "100%", height: "300px", mb: 1 }}>
        <img
          alt="social"
          src={data.post_image}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}>
        <Stack direction={"row"} gap={1}>
          <IconButton size="small">
            <ThumbUpIcon fontSize={"14"} />
            <Typography fontSize={14}>1</Typography>
          </IconButton>
          <IconButton size="small">
            <ThumbDown fontSize={"14"} />
            <Typography fontSize={14}>1</Typography>
          </IconButton>
          <IconButton size="small">
            <CommentIcon fontSize={"14"} />
          </IconButton>
        </Stack>
        <IconButton size="small">
          <ShareIcon fontSize={"14"} />
        </IconButton>
      </Stack>
      <Typography variant="caption" color="GrayText">
        {data.post_caption}
      </Typography>
    </Box>
  );
};

export default Post;
