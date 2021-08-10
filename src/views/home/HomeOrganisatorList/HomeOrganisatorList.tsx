import React, { useEffect, useState } from "react";
import "./HomeOrganisatorList.scss";
import { Palette } from "../../../types/enums";
import { Flex, Image, Grid, Skeleton } from "@chakra-ui/react";
import {
  cat1,
  cat2,
  cat3,
  cat4,
  cat5,
  cat6,
  cat7,
  cat8,
  homeMaxiTalk,
} from "../../../assets/home";
import { MxmDivider } from "../../../shared/styled/input";
import { useHistory, useParams } from "react-router-dom";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { MxmButton } from "../../../shared/styled/buttons";
import homeService from "../../../services/home";
import Swal from "sweetalert2";

const HomeOrganisatorList = () => {
  const [data, setData] = useState<any>();
  const { homeChapter } = useParams<{ homeChapter: string }>();
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const history = useHistory();

  var images: any = [];

  images[0] = <Image src={cat1} alt="chapter logo" />;
  images[1] = <Image src={cat2} alt="chapter logo" />;
  images[2] = <Image src={cat3} alt="chapter logo" />;
  images[3] = <Image src={cat4} alt="chapter logo" />;
  images[4] = <Image src={cat5} alt="chapter logo" />;
  images[5] = <Image src={cat6} alt="chapter logo" />;
  images[6] = <Image src={cat7} alt="chapter logo" />;
  images[7] = <Image src={cat8} alt="chapter logo" />;

  useEffect(() => {
    document.title = `Organisator list ${homeChapter}`;
    setLoading(true);
    setImageLoading(true);
    const fetchData = async () => {
      try {
        const returnedData = await homeService.getChapterData(homeChapter);
        setData(returnedData[0]);
      } catch (error) {
        Swal.fire({
          title: "Perhatian!",
          text: error.response?.data.message,
          icon: "error",
          confirmButtonText: "Coba lagi",
        });
      }
    };
    setLoading(false);
    fetchData();
  }, []);

  var chapter: JSX.Element = images[Number(homeChapter?.slice(-1)) - 1];

  const findSearchKey = (IDhome: any) => {
    for (let homeDataX in data) {
      if (data[homeDataX]["homeID"] == IDhome) {
        return data[homeDataX]["search_key"];
      }
    }
  };

  const showSkeleton = () => {
    return (
      <Skeleton
        startColor={Palette.Cyan}
        endColor={Palette.Navy}
        height="100px"
        width="100px"
      />
    );
  };

  return (
    <Flex
      backgroundColor={Palette.Red}
      className="home-orglist-outer_container"
      justifyContent="center"
    >
      <Flex className="home-orglist-inner_container">
        <Grid className="home-orglist-grid-header">
          <div className="home-orglist-chap-logo">{chapter}</div>
          <div
            className="home-orglist-chap-desc"
            style={{ backgroundColor: Palette.Navy }}
          >
            <div
              className="chap-desc-image"
              style={{ backgroundColor: Palette.Yellow }}
            >
              <Image src={homeMaxiTalk} alt="maxi" width="100px" />
            </div>
            <div className="chap-desc-text">
              <p style={{ color: Palette.Yellow }}>{data?.message}</p>
            </div>
          </div>
          <MxmDivider
            color={Palette.Yellow}
            margin={"2rem 0 1rem 0"}
            height={"5px"}
            className="home-orglist-divider"
          />
        </Grid>
        <Flex className="home-orglist-content_container">
          {data?.home.map((item: any, index: any) => (
            <Grid className="home-orglist-content-grid" key={index}>
              <div
                className="content-org-logo"
                onClick={() => {
                  history.push(`/home/organisator-detail/${item?.search_key}`);
                }}
              >
                {imageLoading ? (
                  <Skeleton
                    startColor={Palette.Cyan}
                    endColor={Palette.Navy}
                    height="100px"
                    width="100px"
                  />
                ) : (
                  <Image src={item?.linkLogo} alt={`logo ${item?.name}`} />
                )}
                <Image
                  src={item?.linkLogo}
                  alt={`logo ${item?.name}`}
                  onLoad={() => setImageLoading(false)}
                  style={{ display: "none" }}
                />
              </div>
              <div
                className="content-org-desc"
                onClick={() => {
                  history.push(`/home/organisator-detail/${item?.search_key}`);
                }}
                style={{ backgroundColor: Palette.Yellow, color: Palette.Navy }}
              >
                <h3>{item?.name}</h3>
                <p>{item?.shortDesc}</p>
              </div>
              <div className="home-orglist-arrow_icon">
                <button
                  onClick={() => {
                    history.push(
                      `/home/organisator-detail/${item?.search_key}`
                    );
                  }}
                >
                  <PlayArrowIcon />
                </button>
              </div>
            </Grid>
          ))}
        </Flex>
        <MxmButton
          onClick={() => history.push("/home/category")}
          variant="rounded"
          colorScheme="cyan-navy"
          className="home-orglist-back-btn"
        >
          BACK
        </MxmButton>
      </Flex>
    </Flex>
  );
};

export default HomeOrganisatorList;
function useRemoteData(): { data: any; loading: any; error: any } {
  throw new Error("Function not implemented.");
}
