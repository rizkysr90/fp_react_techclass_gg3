import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { useFetch } from "../hooks/useFetch";
import YoutubeEmbed from "../components/YoutubeEmbed";
function Home() {
  const urlGetVideo = `${process.env.REACT_APP_API_URL}/api/v1/videos`;
  const { data: videos, loading, error: err } = useFetch(urlGetVideo);
  console.log(videos);
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Heading as={"h2"} mx={[4, 4, 14]} mt="0" w="min-w-screen">
        Live Videos
      </Heading>
      {loading && <Text mx={[4, , 4, 14]}>Loading ...</Text>}
      {/* {!loading &&
        !err &&
        videos?.data?.map((video) => {
          
          return (
            <YoutubeEmbed key={video?._id} videoId={videoId}></YoutubeEmbed>
          );
        })} */}
      <Flex p={[4, 4, 10]} w="full" flexWrap="wrap">
        {!loading &&
          !err &&
          videos?.data?.map((video) => {
            return <Card video={video} key={video._id}></Card>;
          })}
      </Flex>
    </>
  );
}

export default Home;
