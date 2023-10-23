import { Box, Button, ButtonText, Center, FormControl, FormControlLabel, FormControlLabelText, HStack, Heading, Input, InputField, Switch, Text } from "@gluestack-ui/themed";

export default function Main(){
    return (
        <Box bg="$primary100" p="$5"  h={300} w={300} borderRadius="$3xl">
            <Center h={"$full"}>
                <Heading>Peso Ideal</Heading>
                <FormControl>
                    <FormControlLabel>
                        <FormControlLabelText>Peso</FormControlLabelText>
                    </FormControlLabel>
                    <Input w={"$full"}>
                        <InputField />
                    </Input>
                    <FormControlLabel>
                        <FormControlLabelText>Altura</FormControlLabelText>
                    </FormControlLabel>
                    <Input w={"$full"}>
                        <InputField />
                    </Input>
                    <FormControlLabel>
                        <FormControlLabelText>Sexo</FormControlLabelText>
                    </FormControlLabel>
                    <HStack width={"$full"} space="md" justifyContent="center" alignItems="center">
                        <FormControlLabelText>Homem</FormControlLabelText>
                        <Switch/>
                        <FormControlLabelText>Mulher</FormControlLabelText>
                    </HStack>
                    <Button py='$5'>
                        <ButtonText >Calcular</ButtonText>
                    </Button>
                </FormControl>
            </Center>
        </Box>
    )
}