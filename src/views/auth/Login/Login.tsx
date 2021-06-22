import React from 'react';
import { 
  Flex, 
  Box,
  Center,
  VStack,
  HStack, 
  Heading,
  Input,
  Button,
} from "@chakra-ui/react"
// import { MxmContainers } from "../../../shared/styled/containers"

const Login: React.FC = () => {
  return (
    <div>
        <Flex height="100vh" alignItems="center" justifyContent="center">
          <Flex direction="column" background="#41ceba" p={12} rounded={6}>
            <Heading mb={6} color="white">Masuk</Heading>
            <Input placeholder="Masukkan NIM Anda" variant="filled" mb={3}/>
            <Input placeholder="Masukkan password Anda" variant="filled" mb={6} type="password"/>
            <Button colorScheme="linkedin" type="submit">Masuk</Button>
          </Flex>
        </Flex>
    </div>
  )
}

export default Login;