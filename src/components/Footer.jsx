import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"28"}
      px={"16"}
      py={["12", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            "Discover the power of CryptoExpress - the all-in-one crypto app that
            simplifies managing, trading, and staying informed about digital
            assets. Track real-time market prices, securely store your
            cryptocurrencies, execute trades effortlessly, and receive
            personalized alerts. Stay ahead with comprehensive news updates and
            charts. Join the crypto revolution today with CryptoExpress."
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
