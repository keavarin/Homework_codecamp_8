import {extendTheme} from "@chakra-ui/react"
import Button from "./Button";
//สร้าง config โดยสร้าง themeขึ้นมา
export const theme = extendTheme({
    //กำหนด globaได้
    styles: {
        global: {
            "html, body": {
                padding: 0,
                margin: 0,
                fontSize: "16px",
                color: "primary.200"
            },
            "*": {
                boxSizing: "border-box"
            }
        }
    },
    //กำหนดfontได้
    colors: {
        primary: {
            200: "#424642", //ตัวแปรที่เก็บค่าสี
            100: "#536162"
        },
        secondary: "#C06014",
        highlight: {
                100: "#F27D19",     
        },
        muted: {
            300: "#F3F4ED",
            200: "FCFCFC",
            100: "FFFFFF"
        },
   },
   fonts: {
       heading: "Prompt", //ชื่อของ fontface
       body: "Prompt"
   },
   //customizeตัว component
   components: {
    Button,
  },
})
