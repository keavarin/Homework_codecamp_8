import {Box, Heading, Button} from "@chakra-ui/react"


function DesignSystemPage(){
    return(
        <Box>
        <Box bg="primary.200" color="white" p="10" fontSize="4xl">
            App's Design System
        </Box>

        <Box bg="muted.300" p="5" borderRadius="xl">
            <Heading>Buttons</Heading>
            <Button colorScheme="blue" size="sm">Size sm</Button>
            <Button colorScheme="green" size="md">Size sm</Button>
            <Button colorScheme="blue" size="lg">Size sm</Button>
        </Box>

        <Box bg="muted.300" p="5" borderRadius="xl">
            <Heading>Variants</Heading>
            <Button variant="primary" size="sm">Variant primary</Button>
            
        </Box>
        </Box>
    )
}
export default DesignSystemPage;