import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { Slide } from "@mui/material";
import { BaseURL } from "../Contexts/Vars";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import { useForm } from "react-hook-form";

import axios from "axios";
import { toast } from "react-hot-toast";

const style = {
  width: 500,
  maxWidth: "90%",
  transition: "max-width 0.3s ease-in-out",
  marginTop: "6%",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 1,
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function CreateBook({ open, handleClose }) {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const handleCreateSubmit = (data) => {
    setLoading(true);
    axios
      .post(`${BaseURL}/books`, data)
      .then((res) => {
        setLoading(false);
        toast.success("Book created successfully");
        handleClose();
        reset();
        // window.location.reload();
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition
      BackdropProps={{
        timeout: 500,
      }}
      align="center"
    >
      <Transition in={open}>
        <Box sx={style}>
          <Box
            padding={2}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box align="left">
              <Button
                variant="text"
                onClick={() => {
                  handleClose();
                  reset();
                }}
                sx={{ p: "0", minWidth: "0px" }}
              >
                <span
                  style={{
                    color: "#000",
                    display: "flex",
                    padding: " 5px",
                    width: "30px",
                  }}
                >
                  <CloseIcon
                    style={{
                      padding: "0",
                      marging: "0",
                    }}
                  />
                </span>
              </Button>
            </Box>
            <form
              onSubmit={handleSubmit(handleCreateSubmit)}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0px",
              }}
            >
              <Stack
                sx={{
                  "& > :not(style)": {},
                }}
                autoComplete="off"
                display="flex"
                flexDirection="column"
                marginY={2}
                gap={2}
              >
                <Stack gap={1} alignItems="flex-start">
                  <Box sx={{ width: "70%", textAlign: "left" }}>
                    <TextField
                      label="Title"
                      id="outlined-size-small"
                      size="small"
                      fullWidth
                      {...register("title", {
                        required: true,
                      })}
                    />
                  </Box>

                  <Box sx={{ width: "70%", textAlign: "left" }}>
                    <TextField
                      label="Author"
                      id="outlined-size-small"
                      size="small"
                      fullWidth
                      {...register("author", { required: true })}
                    />
                  </Box>
                  <Box sx={{ width: "50%", textAlign: "left", marginTop: 3 }}>
                    <TextField
                      type="number"
                      label="Publish Year"
                      id="outlined-size-small"
                      size="small"
                      fullWidth
                      {...register("publishYear", {
                        required: true,
                        max: 2019,
                        min: 1500,
                      })}
                    />
                  </Box>
                </Stack>
                <Box textAlign="left" marginTop={2}>
                  <LoadingButton
                    size="medium"
                    loading={loading}
                    variant="contained"
                    type="submit"
                    sx={{
                      textTransform: "capitalize",
                      px: 4,
                    }}
                  >
                    <span>Create</span>
                  </LoadingButton>
                </Box>
              </Stack>
            </form>
          </Box>
        </Box>
      </Transition>
    </Modal>
  );
}
