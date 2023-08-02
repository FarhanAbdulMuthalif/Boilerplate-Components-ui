"use client";
import React, { createContext, useContext, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

import MuiAlert, { AlertProps } from "@mui/material/Alert";
type NextContextType = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  isFormDiaOpen: boolean;
  setIsFormDiaOpen: (value: boolean) => void;
};

export const NextContext = createContext<NextContextType>({
  isOpen: false,
  setIsOpen: () => {},
  isFormDiaOpen: false,
  setIsFormDiaOpen: () => {},
});
const MUIThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme({
    typography: {
      button: {
        fontWeight: "bold", // Set the button text to bold
        textTransform: "none", // Disable the uppercase transformation
        height: "36px",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          contained: {
            backgroundColor: "#0052CC", // Set your desired background color for contained buttons
            // You can also add more custom styles here like color, padding, etc.
            "&:hover": {
              backgroundColor: "#02409C", // Set the background color on hover
              // Add any other styles for hover effect here
            },
          },
          outlined: {
            "&:hover": {
              backgroundColor: "#0052CC", // Set the background color on hover
              color: "white",

              // Add any other styles for hover effect here
            },
          },
        },
      },

      MuiMenuItem: {
        styleOverrides: {
          root: {
            fontSize: "14px", // Set your desired font size for the MenuItem component
            color: "#0052CC",
          },
        },
      },

      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#89919A", // Set your desired color for the notched outline
              borderWidth: "1.5px", // Set your desired thickness for the notched outline
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#7a8087", // Set your desired border color for hover state
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#5b5c5e", // Set your desired border color for focus state
            },
            // width: "200px", // Set your desired width for the Select component
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            height: "40px", // Set your desired height for the input field

            // You can also add more custom styles here like padding, font-size, etc.
          },
          input: {
            fontSize: "14px",
            "::placeholder": {
              fontSize: "12px", // Set your desired font size for the placeholder text
            },
          },
        },
      },
    },
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isFormDiaOpen, setIsFormDiaOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <NextContext.Provider
        value={{ isOpen, setIsOpen, setIsFormDiaOpen, isFormDiaOpen }}
      >
        {children}
      </NextContext.Provider>
    </ThemeProvider>
  );
};

export default MUIThemeProvider;
export const useNextContext = () => {
  const context = useContext(NextContext);

  if (!context) {
    throw new Error("useNextContext must be used within a NextContextProvider");
  }

  return context;
};
