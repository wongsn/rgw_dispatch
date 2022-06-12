import {
  Box,
  Flex,
  Stack,
  useBreakpointValue,
  useColorModeValue,
  Center,
  Container,
  Text,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import React from 'react'
import { PaymentInformation } from '../../../../components/checkout/PaymentInformation'
import { ShippingInformation } from '../../../../components/checkout/ShippingInformation'
import { ShippingMethod } from '../../../../components/checkout/ShippingMethod'
import { OrderSummary } from '../../../../components/checkout/OrderSummary'
import Layout from '../../../../components/Layout'
import Calendar from 'react-calendar'

const Checkout = () => {
  const router = useRouter()
  const encode = router.query
  console.log(encode)
  console.log(encode.code)
  console.log(encode.item)
  const items = JSON.parse(atob(encode.item))
  const [value, setValue] = useState(new Date())
  return (
    <Box
      height='100%'
      bgGradient={useColorModeValue(
        'linear(to-l, gray.50 50%, white 50%)',
        'linear(to-l, gray.700 50%, gray.800 50%)'
      )}
    >
      <Flex maxW='8xl' mx='auto' direction={{ base: 'column', md: 'row' }}>
        <Box
          flex='1'
          bg={useColorModeValue('white', 'gray.800')}
          px={{ base: '4', md: '8', lg: '12', xl: '20' }}
        >
          <Center>
            <Stack spacing={{ base: '16', lg: '20' }} textAlign={'center'}>
              {/* <ShippingInformation />
              <ShippingMethod />
              <PaymentInformation /> */}

              <Box>
                <div
                  as='section'
                  pt={{ base: '4', md: '8' }}
                  pb={{ base: '12', md: '24' }}
                >
                  <Container my={5}>
                    <Box
                      bg='bg-surface'
                      px={{ base: '4', md: '6' }}
                      py='5'
                      boxShadow={useColorModeValue('sm', 'sm-dark')}
                      borderTopWidth='4px'
                      borderColor='accent'
                    >
                      <Stack spacing="1">
                        <Text fontSize="lg" fontWeight="medium">
                          Delivery overview
                        </Text>
                        <Text color='muted' fontSize='sm'>
                          Summary of your delivery
                        </Text>
                      </Stack>
                    </Box>
                  </Container>
                </div>{' '}
                <strong>Your location:</strong> <br /> Lat: {encode.code[0]}{' '}
                <br /> Long: {encode.code[1]}
                <br />
                <br />
                {items.map((item, idx) => (
                  <div key={`${item.category}-${idx}`}>
                    <p>
                      <strong>Your Items:</strong>
                    </p>
                    <p>Description: {item.description}</p>
                    <p>Category: {item.category}</p>
                    <p>-</p>
                  </div>
                ))}
                <br />
                <div>
                  <span>
                    <strong>Date of collection:</strong>
                  </span>
                  <Calendar onChange={setValue} value={value}/>
                </div>
              </Box>
            </Stack>
          </Center>
        </Box>
        <Box
          flex='1'
          maxW={{ lg: 'md', xl: '40rem' }}
          bg={useBreakpointValue({
            base: useColorModeValue('white', 'gray.800'),
            md: 'inherit',
          })}
          px={{ base: '4', md: '8', lg: '12', xl: '20' }}
          py={{ base: '6', md: '8', lg: '12', xl: '20' }}
        >
          <OrderSummary />
        </Box>
      </Flex>
    </Box>
  )
}

Checkout.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Checkout
