import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  chakra,
  Tooltip,
  Avatar,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Card({ video }) {
  //   console.log("Ini video", video);
  const getVideoId = video?.video_url.split("/");
  const data = {
    isNew: true,
    imageURL: video?.thumbnail_video_url,
    name: video?.title_video,
    sellerAva: video?.seller?.avatar_url,
    sellerName: video?.seller?.username,
    storeUrl: video?.seller?.store_url,
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
    videoId: getVideoId[getVideoId.length - 1],
  };
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      w={["100%", "100%", "xs"]}
      mx={[0, 0, 4]}
      mt={[4, 0]}
      flexGrow={[1, 1, 0]}
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
    >
      <Link to={`watch/${video._id}`}>
        {data.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}
        <Box w={["100%"]} h={["200px"]}>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${data?.videoId}`}
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
        {/* <Image
          src={data.imageURL}
          alt={`Picture of ${data.name}`}
          roundedTop="lg"
        /> */}

        <Box px="4" py="6">
          <Box display="flex" alignItems="baseline">
            {data.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                Live
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="sm"
              height="40px"
              fontWeight="semibold"
              as="h4"
              overflow={"hidden"}
              lineHeight="tight"
            >
              {data.name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra.a href={"#"} display={"flex"}></chakra.a>
            </Tooltip>
          </Flex>

          <Flex alignContent="center" alignItems="center" mt={2}>
            <Avatar size={"sm"} mr={2} src={data?.sellerAva} />
            <Box fontSize="sm" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="sm"></Box>
              {data?.sellerName}
            </Box>
          </Flex>
        </Box>
      </Link>
    </Box>
  );
}

export default Card;
