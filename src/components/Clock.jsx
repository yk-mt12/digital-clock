import {
  Box,
  Center,
  Heading,
  Container,
  Flex,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const Clock = () => {
  const date = new Date();
  const [dateTime, setDateTime] = useState({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();

      setDateTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box width="100%" height="300px" m={0}>
      <Container>
        <Flex mb={2} backgroundColor="gray.500">
          <Heading as="h1" size="2xl" color="#333">
            時計App
          </Heading>
        </Flex>
        <Flex>
          <Center>
            <Text fontSize="6xl">
              {dateTime.hours}:{dateTime.minutes}:{dateTime.seconds}
            </Text>
          </Center>
        </Flex>
      </Container>
    </Box>
  );
};
