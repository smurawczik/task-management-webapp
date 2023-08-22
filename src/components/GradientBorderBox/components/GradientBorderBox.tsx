"use client";

import { Box, keyframes } from "@mui/material";
import { FC, PropsWithChildren } from "react";

const gradientEffect = keyframes({
  "0%": {
    background:
      "linear-gradient(135deg, white 0%, hsla(244, 75%, 66%, 1) 50%, hsla(270, 91%, 82%, 1) 100%);",
  },
  "50%": {
    background:
      "linear-gradient(135deg, hsla(198, 92%, 90%, 1) 0%, hsla(244, 75%, 66%, 1) 50%, hsla(270, 91%, 82%, 1) 100%);",
  },
  "100%": {
    background:
      "linear-gradient(135deg, hsla(198, 92%, 90%, 1) 0%, hsla(244, 75%, 66%, 1) 50%, hsla(270, 91%, 82%, 1) 100%);",
  },
});

export const GradientBorderBox: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, hsla(198, 92%, 90%, 1) 0%, hsla(244, 75%, 66%, 1) 50%, hsla(270, 91%, 82%, 1) 100%);",
        padding: "2px",
        borderRadius: "10px",
        animation: `${gradientEffect} 10s ease infinite`,
        boxShadow: "0 0 60px 10px #8e6bff45",
      }}
    >
      <Box
        sx={{
          background: "rgba(16, 21, 29, .8)",
          borderRadius: "8px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
