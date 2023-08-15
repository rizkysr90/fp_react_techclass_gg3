import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import {
  Text,
  Flex,
  Heading,
  Box,
  Stack,
  Input,
  Button,
} from "@chakra-ui/react";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import { useLocation } from "react-router-dom";
import CardProduct from "../../components/CardProduct";
import Navbar from "../../components/Navbar";
import ChatBubble from "../../components/ChatBubble";
import { useCommentList } from "../../hooks/useCommentList";
function VideoDetail() {
  const location = useLocation();
  let { video_id } = useParams();
  const videoId = location.state?.youtubeId;
  const urlGetVideo = `${process.env.REACT_APP_API_URL}/api/v1/videos/${video_id}`;
  const { data: video, loading } = useFetch(urlGetVideo);
  const [sentComment, setSentComment] = useState({
    username: "",
    comment: "",
    is_comment: false,
    video_id: video_id,
    is_loading: false,
    is_success: false,
  });
  const { data: comments } = useCommentList(
    sentComment.is_success,
    video_id,
    sentComment.is_comment
  );
  //   const {
  //     data: comments,
  //     error,
  //     isLoading,
  //   } = useSWR(
  //     `${process.env.REACT_APP_API_URL}/api/v1/comments/${video_id}`,
  //     fetcher
  //   );
  const handleSubmitComment = async () => {
    try {
      setSentComment({
        ...sentComment,
        is_comment: true,
        is_loading: true,
        is_success: false,
      });
      const requestOptions = {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(sentComment),
      };
      let endpoint = `${process.env.REACT_APP_API_URL}/api/v1/comments`;

      await fetch(endpoint, requestOptions).then((res) => res.json());
      setSentComment({
        ...sentComment,
        comment: "",
        is_loading: false,
        is_success: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {!loading ? (
        <>
          <Navbar title={video?.data?.title_video}></Navbar>
          <Flex w={"100%"} bg="gray.100">
            <Flex flexDirection={"column"} flexBasis={"70%"}>
              <YoutubeEmbed
                //  Split youtubeId string into an array, select last element which is embedId
                videoId={videoId}
                width="100%"
                height="500px"
              ></YoutubeEmbed>
              <Heading as={"h2"} size={"md"} ml={6} mt={4} w="min-w-screen">
                Produk yang dijual
              </Heading>
              <Flex>
                {video?.data.products.map((product) => {
                  return <CardProduct product={product}></CardProduct>;
                })}
              </Flex>
            </Flex>
            <Flex
              flexDirection={"column"}
              px={4}
              py={8}
              bg="white"
              flexGrow={1}
            >
              <Text size={"lg"} fontWeight={"bold"}>
                Komentar
              </Text>
              <Flex
                flexDirection={"column"}
                border={"1px solid black"}
                mt={2}
                p={2}
                h={"350px"}
                overflowY={"scroll"}
              >
                <Box>
                  {comments?.data?.map((comment) => {
                    return (
                      <ChatBubble
                        key={comment?._id}
                        username={comment?.username}
                        comment={comment?.comment}
                      ></ChatBubble>
                    );
                  })}
                </Box>
              </Flex>
              <Stack spacing={2} py={2}>
                <label htmlFor="username">
                  <Text fontSize={"xs"}>Username :</Text>
                </label>
                <Input
                  placeholder="Masukkan username untuk bisa komentar"
                  size="xs"
                  id="username"
                  value={sentComment?.username}
                  name="username"
                  onChange={(e) =>
                    setSentComment({ ...sentComment, username: e.target.value })
                  }
                />
                <label htmlFor="comment">
                  <Text fontSize={"xs"}>Komentar anda :</Text>
                </label>
                <Input
                  placeholder="Mau bilang apa ke yang jualan?"
                  value={sentComment?.comment}
                  size="xs"
                  id="comment"
                  name="comment"
                  onChange={(e) => {
                    setSentComment({ ...sentComment, comment: e.target.value });
                  }}
                />
                <Button
                  colorScheme="teal"
                  size="sm"
                  onClick={handleSubmitComment}
                >
                  {sentComment?.is_loading ? "Mengirim..." : "Submit"}
                </Button>
              </Stack>
            </Flex>
          </Flex>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default VideoDetail;
