import { extendTheme } from "@chakra-ui/react"

//aca customizamos los temas de chakra, mas info en https://chakra-ui.com/docs/styled-system/customize-theme

export const themes = extendTheme({
    colors: {
      brand: {
        100: '#06283D'
      },
    },
  })