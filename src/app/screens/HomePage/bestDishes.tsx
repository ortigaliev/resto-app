import MonetizationOn from "@mui/icons-material/MonetizationOn";
import { Box, Stack } from "@mui/joy";
import { Container } from "@mui/material";
import React, { useEffect } from "react";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setTrendProducts } from "./slice";
import { retrieveTrendProducts } from "./selector";
import { Product } from "../../../types/product";
import ProductApiService from "../../apiServer/productApiServer";
import { serverApi } from "../../../lib/config";

const actionDispatch = (dispach: Dispatch) => ({
  setTrendProducts: (data: Product[]) => dispach(setTrendProducts(data)),
});

// REDUX SELECTOR
const trendProductsRetriever = createSelector(
  retrieveTrendProducts,
  (trendProducts) => ({
    trendProducts,
  })
);

export function BestDishes() {
  //INITIALIZATION
  const { setTrendProducts } = actionDispatch(useDispatch());
  const { trendProducts } = useSelector(trendProductsRetriever);
  useEffect(() => {
    const productService = new ProductApiService();
    productService
      .getTargetProducts({ order: "product_likes", page: 1, limit: 4 })
      .then((data) => setTrendProducts(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="best_dishes_frame">
      <Container>
        <Stack flexDirection={"column"} alignItems="center" sx={{ mt: "71px" }}>
          <Box className="category_title">Popular Menu</Box>
          <Stack sx={{ mt: "43px" }} flexDirection={"row"}>
            {trendProducts.map((product: Product) => {
              const image_path = `${serverApi}/${product.product_images[0]}`;
              const size_volume =
                product.product_collection === "drink"
                  ? product.product_volume + "l"
                  : product.product_size + " size";
              return (
                <Stack className="dish_box">
                  <Stack
                    className="dish_img"
                    sx={{
                      backgroundImage: `url(${image_path})`,
                    }}
                  >
                    <div className={"dish_sale"}>{size_volume}</div>
                    <div className={"view_btn"}>
                      See detail
                      <img
                        src={"/icons/dish_arrow.svg"}
                        style={{ marginLeft: "9px" }}
                      />
                    </div>
                  </Stack>
                  <Stack className={"dish_desc"}>
                    <span className={"dish_title_text"}>
                      {product.product_name}
                    </span>
                    <span className={"dish_desc_text"}>
                      <MonetizationOn />
                      {product.product_price}
                    </span>
                  </Stack>
                </Stack>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
