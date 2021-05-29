const Button = {
    //basestyle ปุ่มทุกปุ่มต้อง400
    baseStyle: {
        fontWeight: "400",
    },
    //ปุุ่มมันจะมีหลายขนาด sm, md,lg
    sizes: {
        sm: {
            minWidth: "150px",
            fontSize: "sm",
            padding: "4"
        },
        md:{
        minWidth: "150px",
        fontSize: "md",
        padding: "6"
        },
        lg: {
            fontSize: "lg",
            padding: "8",
            minWidth: "150px"
        }
    },
    //สร้างรูปแบบปุ่มเอง
    variants: {
        //variant เรากำหนดชือ primary
        primary: {
            bg: "primary.200",
            color: "white",
            ":hover": {
                bg: "primary.100"
            },
            ":focus": {
                boxShadow: "none"
            }
        }
    },
    defaultProps: {}
}
export default Button;