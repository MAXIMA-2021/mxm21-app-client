import React from 'react';
import { useForm } from "react-hook-form"
import { 
  Flex, 
  Box,
  Center,
  VStack,
  HStack, 
  Heading,
  Input,
  Button,
  FormLabel,
  NumberInput,
  NumberInputField,
  FormControl,
  FormErrorMessage,
  FormErrorIcon,
} from "@chakra-ui/react"
// import { MxmContainers } from "../../../shared/styled/containers"

const RegisterMaba: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => {
    window.confirm(JSON.stringify(data))
  }

  return (
    <div>
        <Flex height="100vh" alignItems="center" justifyContent="center">
          <Flex direction="column" background="#41ceba" p={12} rounded={6}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Heading mb={6} color="white">Daftar</Heading>
              <FormControl isInvalid={errors.nimMahasiswa} mb={3}>
                <FormLabel>NIM Anda</FormLabel>
                <NumberInput variant="filled">
                  <NumberInputField 
                    {...register("nimMahasiswa", {
                      required: 'Tidak boleh kosong',
                      minLength: {
                        value: 5,
                        message: 'Input harus 5 angka'
                      },
                      maxLength: {
                        value: 5,
                        message: 'Input harus 5 angka'
                      }
                    })}/>
                </NumberInput>
                <FormErrorMessage>
                  {errors.nimMahasiswa && ( <p><FormErrorIcon/>{errors.nimMahasiswa.message}</p> )}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.password} mb={6}>
                <FormLabel>Password Anda</FormLabel>
                <Input placeholder="Masukkan password Anda" variant="filled" type="password" {...register("password", {required: 'Tidak boleh kosong'})}/>
                <FormErrorMessage>
                  {errors.password && ( <p><FormErrorIcon/>{errors.password.message}</p> )}
                </FormErrorMessage>
              </FormControl>
              <Button colorScheme="linkedin" type="submit">Daftar</Button>
            </form>
          </Flex>
        </Flex>
    </div>
  )
}

export default RegisterMaba;