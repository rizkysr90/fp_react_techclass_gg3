import React from "react";
import { Box } from "@chakra-ui/react";
function YoutubeEmbed({ videoId, width = "560", height = "315" }) {
  return (
    <Box>
      <iframe
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Box>
  );
}

export default YoutubeEmbed;
