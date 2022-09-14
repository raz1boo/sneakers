import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks/redux";
import { fetchSneakers } from "../store/reducers/actionCreators";

const Logo = () => {
  const [visible, setvisible] = useState(false);
  return (
    <Box
      onMouseEnter={() => setvisible(true)}
      onMouseLeave={() => setvisible(false)}
      sx={{
        display: "flex",
        maxHeight: 80,
        gap: 2,
        maxWidth: 210,
        cursor: "pointer",
        alignItems: "center",
      }}
    >
      {visible ? (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path d="M0 0H64V64H0V0Z" fill="url(#pattern0)" />
          <path d="M48 3H49V4H48V3Z" fill="#373737" />
          <path d="M47 3H48V4H47V3Z" fill="#373737" />
          <path d="M49 4H50V5H49V4Z" fill="#373737" />
          <path d="M49 5H50V6H49V5Z" fill="#373737" />
          <path d="M48 4H49V5H48V4Z" fill="#373737" />
          <path d="M48 5H49V6H48V5Z" fill="#3B4E63" />
          <path d="M47 4H48V5H47V4Z" fill="#3B4E63" />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_8_71" transform="scale(0.015625)" />
            </pattern>
            <image
              id="image0_8_71"
              width="64"
              height="64"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      ) : (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="64" height="64" fill="url(#pattern0)" />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_6_5" transform="scale(0.015625)" />
            </pattern>
            <image
              id="image0_6_5"
              width="64"
              height="64"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      )}

      <Typography variant="h4" sx={{ lineHeight: 0.9 }}>
        Sneaker <br />
        <Typography
          sx={{ fontWeight: 700, lineHeight: 0.9 }}
          variant="h4"
          component="span"
        >
          Heads
        </Typography>
      </Typography>
    </Box>
  );
};

export default Logo;
