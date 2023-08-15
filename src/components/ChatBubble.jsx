import { Avatar, Flex, Text } from "@chakra-ui/react";
import React from "react";

function ChatBubble({ username = "Player 1", comment = "Hello World" }) {
  return (
    <Flex alignItems={"center"} my={1}>
      <Avatar
        size="xs"
        mr={2}
        name="Kola Tioluwani"
        src="https://bit.ly/tioluwani-kolawole"
      />
      <Text fontSize={"xs"} fontWeight={"bold"} mr={1}>
        {username}
      </Text>
      <Text fontSize={"xs"}>{comment}</Text>
    </Flex>
  );
}

export default ChatBubble;
