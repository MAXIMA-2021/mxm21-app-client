import React from "react";
import { Flex, Image } from "@chakra-ui/react";

export const Carousell = (props: any) => {
  const CarousellData = {
    video: `${props.video}`,
    media: props.media,
  };

  props.setMaxIndex(Number(CarousellData.media?.length));

  const validator =
    /(http:|https:)?\/\/(www\.)?(youtube.com|youtu.be)\/(watch)?(\?v=)?(\S+)?/;
  const validation = CarousellData.video.match(validator);

  if (props.index === 0)
    return validation !== null ? (
      <iframe title="video" src={CarousellData.video} allowFullScreen />
    ) : (
      <Flex w="100%" h="100%" bgColor="grey">
        Video tidak dapat dimuat
      </Flex>
    );
  else
    return (
      <Image
        src={CarousellData.media[props.index - 1].linkMedia}
        alt="Photo"
        objectFit="cover"
      />
    );
};
