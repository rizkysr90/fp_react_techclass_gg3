import React from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Box,
} from "@chakra-ui/react";
import formatRupiah from "../utility/formatRupiah";
function CardProduct({ product }) {
  return (
    <Card w="3xs" m={[0, "2"]}>
      <CardBody p={4}>
        <Box>
          <Image
            border={"1px solid green"}
            h={"200px"}
            w={"100%"}
            objectFit={"cover"}
            src={product?.thumbnail_product_url}
            alt="foto produk"
            borderRadius="lg"
          />
        </Box>
        <Stack mt="2" spacing="0">
          <Heading size="xs" h={"50px"}>
            {product?.title_product}
          </Heading>
          <Text color="green.400" fontWeight={"bold"} fontSize="sm">
            Rp{formatRupiah(product?.price_product)}
          </Text>
        </Stack>
        <a
          href={product?.product_url}
          referrerPolicy="no-referrer"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="solid" colorScheme="green" w={"100%"} mt={2}>
            Buy now
          </Button>
        </a>
      </CardBody>
    </Card>
  );
}

export default CardProduct;
