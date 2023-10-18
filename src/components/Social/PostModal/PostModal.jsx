import {
  Avatar,
  Box,
  Button,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { useModal, usePosts } from "../../../hooks/useContexts";
import CloseIcon from "@mui/icons-material/Close";
import { AddPhotoAlternate } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 1,
  p: 2,
};

const PostModal = () => {
  const { addPost } = usePosts();
  const { isOpen, toggleModal } = useModal();
  const [file, setFile] = useState(null);
  const ref = useRef(null);
  const textAreaRef = useRef(null);

  const handleFile = () => {
    if (ref.current) {
      ref.current.click();
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleClose = () => {
    setFile(null);
    toggleModal();
  };

  const handlePost = () => {
    const form = new FormData();
    form.append("post_image", file);
    form.append("post_caption", textAreaRef.current.value);
    const data = {
      user_name: "@cloves",
      user_profile: "",
      post_image: URL.createObjectURL(file),
      post_caption: textAreaRef.current.value,
    };
    addPost(data);
    handleClose();
  };
  return (
    <Modal
      open={isOpen}
      onClose={toggleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}>
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <Avatar sx={{ width: 30, height: 30 }} />
            <Box>
              <Typography variant="body1" fontSize={12} fontWeight={"bold"}>
                @Cloves
              </Typography>
            </Box>
          </Stack>
          <Button size="small" variant="contained" onClick={handleClose}>
            Close
          </Button>
        </Stack>

        {file ? (
          <Stack
            sx={{
              width: "100%",
              height: "100px",
              alignItems: "center",
              justifyContent: "center",
              mt: 2,
              borderRadius: 1,
              bgcolor: "#eee",
              padding: 1,
              position: "relative",
            }}>
            <img
              src={URL.createObjectURL(file)}
              alt="post"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
            <IconButton
              onClick={() => setFile(null)}
              size="small"
              sx={{
                position: "absolute",
                top: 1,
                right: 1,
              }}>
              <CloseIcon fontSize="8" />
            </IconButton>
          </Stack>
        ) : (
          <Button
            onClick={handleFile}
            sx={{
              width: "100%",
              height: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 2,
              borderRadius: 1,
              bgcolor: "#eee",
            }}>
            <AddPhotoAlternate />
            <input
              ref={ref}
              type="file"
              accept="image/*"
              hidden
              onChange={handleFileChange}
            />
          </Button>
        )}

        {/* Caption Input */}
        <Box mt={2}>
          <textarea
            ref={textAreaRef}
            placeholder="Enter Caption"
            style={{
              width: "100%",
              padding: "1rem 0",
              border: "none",
              outline: "none",
              fontSize: "10px",
            }}
          />
        </Box>
        {/* Post Button */}

        <Button
          onClick={handlePost}
          size="small"
          variant="contained"
          sx={{
            width: "100%",
          }}>
          Post
        </Button>
      </Box>
    </Modal>
  );
};

export default PostModal;
