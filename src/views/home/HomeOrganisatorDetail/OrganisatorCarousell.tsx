import React from "react";
import { Image } from "@chakra-ui/react";

export const Carousell = (props: any) => {
  const CarousellData = {
    video: `${props.video}`,
    media: props.media,
  };

  props.setMaxIndex(Number(CarousellData.media?.length));

  if (props.index === 0)
    return <iframe title="video" src={CarousellData.video} allowFullScreen />;
  else
    return (
      <Image
        src={CarousellData.media[props.index - 1].linkMedia}
        alt="Photo"
        objectFit="cover"
      />
    );
};
