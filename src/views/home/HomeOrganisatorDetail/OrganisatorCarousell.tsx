import React from "react";
import { Image } from "@chakra-ui/react";

const CarousellData = {
  video: "https://www.youtube.com/embed/xk--UgIan4Y",
  media: [
    {
      photoID: 1,
      linkMedia:
        "https://cdn0-production-images-kly.akamaized.net/74Qk8yE2ZRqgp_kch_mv5nD_sf4=/0x0/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1680656/original/88f6556f70c8c6559c96493c7e94e41d346_IMG_3480-01.jpeg",
    },
    {
      photoID: 2,
      linkMedia:
        "https://top10indonesia.com/main/content/2019/10/Isyana_at_Psithurism_2019_by_andrew_joe1503-e1569838708845.jpg",
    },
    {
      photoID: 3,
      linkMedia:
        "https://i.pinimg.com/564x/0f/0b/16/0f0b16e58ff253e4eb996d3a6cc4e739.jpg",
    },
    {
      photoID: 4,
      linkMedia:
        "https://i.pinimg.com/564x/67/b4/fc/67b4fc460a57d173179269be37ccd044.jpg",
    },
    {
      photoID: 5,
      linkMedia: "https://i.imgur.com/MixVWaZ.jpeg",
    },
    {
      photoID: 6,
      linkMedia:
        "https://d18nu206jtfjv5.cloudfront.net/wp-content/uploads/2019/09/Maxima-17-696x392.jpg",
    },
  ],
};

export const maxIndex = Number(CarousellData.media.length);

export const Carousell = (props: { index: number }) => {
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
