import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Rating,
  Stack,
  colors,
} from "@mui/material";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "../../../css/swiper.css";
import "../../../css/dish.css";
import { Navigation } from "swiper/modules";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const image_list = Array.from(Array(3).keys());
const small_img_list = Array.from(Array(6).keys());

export function ChosenDish() {
  return (
    <div>
      <Container>
        <Stack flexDirection={"row"} pt={6} pb={4} gap={5}>
          <Stack maxWidth={"611px"}>
            <Box sx={{ width: "611px", height: "452px", mb: 2 }}>
              <Swiper
                className="dish_navigation"
                navigation={true}
                modules={[Navigation]}
                loop={true}
              >
                {image_list.map((ele, index) => {
                  const image_path = `/images/dish/dish_stack.jpg`;
                  return (
                    <SwiperSlide>
                      <img src={image_path} alt="Chosen dish img" />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "auto",
                marginRight: "auto",
                width: "500px",
                height: "107px",
              }}
            >
              <Swiper
                slidesPerView={3}
                spaceBetween={10}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                className="mySwiper"
              >
                {small_img_list.map((ele, index) => {
                  const small_swiper_img = `/images/dish/dish_stack.jpg`;
                  return (
                    <SwiperSlide style={{ borderRadius: "10px" }}>
                      <img src={small_swiper_img} alt="Small swiper Img" />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Box>
          </Stack>
          <Stack>
            <Card sx={{ maxWidth: 623 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div">
                    Beef Stack
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Burak
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Rating
                        name="half-rating"
                        defaultValue={2.5}
                        precision={0.5}
                      />
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mr: 2 }}
                      >
                        {" "}
                        <Checkbox
                          {...label}
                          icon={<FavoriteIcon />}
                          checkedIcon={
                            <FavoriteIcon style={{ color: "red" }} />
                          }
                        />
                        5
                      </Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <VisibilityIcon /> 10
                      </Box>
                    </Box>
                  </Box>
                  <Typography variant="body2" color="text.secondary" mb={6}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores vel ex sed. Et aspernatur accusamus nihil? Veritatis
                    adipisci dolores omnis assumenda inventore voluptates cum
                    modi, nulla cupiditate placeat eos rem laborum delectus
                    architecto ipsa facilis! Aliquid beatae ea sed aliquam.
                  </Typography>
                  <Divider
                    color="#ccc"
                    sx={{ mt: 2, mb: 2, borderBottomWidth: 2 }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: 3,
                    }}
                  >
                    <Box>Narx</Box>
                    <Box>$ 15</Box>
                  </Box>
                  <Button
                    sx={{
                      display: "flex",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    variant="contained"
                  >
                    Add Bascet
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
