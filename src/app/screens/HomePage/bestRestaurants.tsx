import { Favorite } from "@mui/icons-material";
import {
  AspectRatio,
  Card,
  CardOverflow,
  CssVarsProvider,
  IconButton,
  Link,
  Typography,
} from "@mui/joy";
import { Box, Button, Container, Stack } from "@mui/material";
import React from "react";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CallIcon from "@mui/icons-material/Call";
import VisibilityIcon from "@mui/icons-material/Visibility";

export function BestRestaurants() {
  return (
<<<<<<< HEAD
    <div className="best_restaurant_frame">
=======
    <div className="top_restaurant_frame">
>>>>>>> 24ad6b7f568ce532fd8722d365e56b90925f9d6a
      <img
        src={"icons/best_icon.svg"}
        alt="BestRestaurantIcon"
        style={{
          position: "absolute",
          left: "6%",
          transform: "rotate(90 deg)",
        }}
      />
<<<<<<< HEAD
      <Container sx={{ paddingTop: "153px" }}>
=======
      <Container sx={{ mt: "153px" }}>
>>>>>>> 24ad6b7f568ce532fd8722d365e56b90925f9d6a
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box sx={{ mb: "45px" }} className="category_title">
            Best Restaurants
          </Box>
          <Stack sx={{ mt: "43px", flexDirection: "row" }}>
            <CssVarsProvider>
              <Card variant="outlined" sx={{ minWidth: 320, mr: "35px" }}>
                <CardOverflow>
                  <AspectRatio ratio="1">
                    <img src="/images/burak.jpg" alt="Best restaurantimg" />
                  </AspectRatio>
                  <IconButton
                    aria-label="Like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 0,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ color: "white" }} />
                  </IconButton>
                </CardOverflow>

                <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                  Uzum
                </Typography>
                <Typography sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                    Tashkent, Yunus Abad 4-1
                  </Link>
                </Typography>
                <Typography sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  >
                    +99890 7314578
                  </Link>
                </Typography>
                <CardOverflow
                  variant="soft"
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                    borderColor: "neutral.outlinedBorder",
                    bgcolor: "background.level1",
                  }}
                >
                  <Stack flexDirection={"row"}>
                    <Typography
                      sx={{
                        fontWeight: "md",
                        color: "neutral.300",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <div>100 </div>
                      <VisibilityIcon
                        sx={{ fontSize: 20, marginLeft: "5px" }}
                      />
                    </Typography>
                    <Box
                      sx={{
                        width: 2,
                        bgcolor: "divider",
                        ml: "11px",
                        mr: "11px",
                      }}
                    ></Box>
                    <Typography
                      sx={{
                        fontWeight: "md",
                        color: "neutral.300",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <div>50</div>
                      <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                    </Typography>
                  </Stack>
                </CardOverflow>
              </Card>

              <Card variant="outlined" sx={{ minWidth: 320, mr: "35px" }}>
                <CardOverflow>
                  <AspectRatio ratio="1">
                    <img src="/images/burak.jpg" alt="Best restaurantimg" />
                  </AspectRatio>
                  <IconButton
                    aria-label="Like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 0,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ color: "white" }} />
                  </IconButton>
                </CardOverflow>

                <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                  Uzum
                </Typography>
                <Typography sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                    Tashkent, Yunus Abad 4-1
                  </Link>
                </Typography>
                <Typography sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  >
                    +99890 7314578
                  </Link>
                </Typography>
                <CardOverflow
                  variant="soft"
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                    borderColor: "neutral.outlinedBorder",
                    bgcolor: "background.level1",
                  }}
                >
                  <Stack flexDirection={"row"}>
                    <Typography
                      sx={{
                        fontWeight: "md",
                        color: "neutral.300",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <div>100 </div>
                      <VisibilityIcon
                        sx={{ fontSize: 20, marginLeft: "5px" }}
                      />
                    </Typography>
                    <Box
                      sx={{
                        width: 2,
                        bgcolor: "divider",
                        ml: "11px",
                        mr: "11px",
                      }}
                    ></Box>
                    <Typography
                      sx={{
                        fontWeight: "md",
                        color: "neutral.300",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <div>50</div>
                      <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                    </Typography>
                  </Stack>
                </CardOverflow>
              </Card>

              <Card variant="outlined" sx={{ minWidth: 320, mr: "35px" }}>
                <CardOverflow>
                  <AspectRatio ratio="1">
                    <img src="/images/burak.jpg" alt="Best restaurantimg" />
                  </AspectRatio>
                  <IconButton
                    aria-label="Like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 0,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ color: "white" }} />
                  </IconButton>
                </CardOverflow>

                <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                  Uzum
                </Typography>
                <Typography sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                    Tashkent, Yunus Abad 4-1
                  </Link>
                </Typography>
                <Typography sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  >
                    +99890 7314578
                  </Link>
                </Typography>
                <CardOverflow
                  variant="soft"
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                    borderColor: "neutral.outlinedBorder",
                    bgcolor: "background.level1",
                  }}
                >
                  <Stack flexDirection={"row"}>
                    <Typography
                      sx={{
                        fontWeight: "md",
                        color: "neutral.300",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <div>100 </div>
                      <VisibilityIcon
                        sx={{ fontSize: 20, marginLeft: "5px" }}
                      />
                    </Typography>
                    <Box
                      sx={{
                        width: 2,
                        bgcolor: "divider",
                        ml: "11px",
                        mr: "11px",
                      }}
                    ></Box>
                    <Typography
                      sx={{
                        fontWeight: "md",
                        color: "neutral.300",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <div>50</div>
                      <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                    </Typography>
                  </Stack>
                </CardOverflow>
              </Card>

              <Card variant="outlined" sx={{ minWidth: 320, mr: "35px" }}>
                <CardOverflow>
                  <AspectRatio ratio="1">
                    <img src="/images/burak.jpg" alt="Best restaurantimg" />
                  </AspectRatio>
                  <IconButton
                    aria-label="Like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 0,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ color: "white" }} />
                  </IconButton>
                </CardOverflow>

                <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                  Uzum
                </Typography>
                <Typography sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                    Tashkent, Yunus Abad 4-1
                  </Link>
                </Typography>
                <Typography sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  >
                    +99890 7314578
                  </Link>
                </Typography>
                <CardOverflow
                  variant="soft"
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                    borderColor: "neutral.outlinedBorder",
                    bgcolor: "background.level1",
                  }}
                >
                  <Stack flexDirection={"row"}>
                    <Typography
                      sx={{
                        fontWeight: "md",
                        color: "neutral.300",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <div>100 </div>
                      <VisibilityIcon
                        sx={{ fontSize: 20, marginLeft: "5px" }}
                      />
                    </Typography>
                    <Box
                      sx={{
                        width: 2,
                        bgcolor: "divider",
                        ml: "11px",
                        mr: "11px",
                      }}
                    ></Box>
                    <Typography
                      sx={{
                        fontWeight: "md",
                        color: "neutral.300",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <div>50</div>
                      <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                    </Typography>
                  </Stack>
                </CardOverflow>
              </Card>
            </CssVarsProvider>
          </Stack>
          <Stack
            flexDirection={"row"}
            justifyContent={"flex-end"}
            style={{ width: "100%", marginTop: "16px" }}
          >
            <Button style={{ background: "#1976d2", color: "#fff" }}>
              See All
            </Button>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
