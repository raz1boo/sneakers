import { Box, Container } from "@mui/material";
import { useEffect } from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAppDispatch, useAppSelector } from "../store/hooks/redux";
import { fetchSneakers } from "../store/reducers/actionCreators";
import { ISneakersProps, ISneakersVariants } from "../types/IData";
import { SiNike } from "react-icons/si";
import { CgAdidas } from "react-icons/cg";
import { MdOutlineClear } from "react-icons/md";
import "swiper/css";
import "swiper/css/pagination";

const MainSwiper = () => {
  const dispatch = useAppDispatch();
  const { sneakers } = useAppSelector((state) => state.sneakersReducer);
  useEffect(() => {
    dispatch(fetchSneakers());
  }, [dispatch]);
  const bestSellers = sneakers.filter((item: ISneakersProps) =>
    item.variants.find((i: ISneakersVariants) => i.bestSeller)
  );
  console.log(
    bestSellers.filter(({ variants }: any) =>
      variants.filter((i: any) => i.bestSeller)
    )
  );

  return (
    <Swiper
      speed={450}
      loop={true}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
    >
      {/* {bestSellers?.map(
        (card: ISneakersProps | undefined) =>
          card?.variants?.filter((i: ISneakersVariants) => i?.bestSeller) && (
            <SwiperSlide key={card?.id} color="black">
              <Container
                sx={{ display: "flex", flexDirection: "column", gap: 3 }}
              >
                <Box>
                  {(card?.brand === "Nike" && <SiNike />) ||
                    (card?.brand === "Adidas" && <CgAdidas />)}
                  {card?.variants.map((i) => i.colaboration)}
                </Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
              </Container>
              <Container>{card?.name}</Container>
            </SwiperSlide>
          )
      )} */}
    </Swiper>
  );
};

export default MainSwiper;
