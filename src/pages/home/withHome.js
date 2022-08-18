import React, { useEffect, useState } from "react";

import artDetails from "pages/art/util/artDetails";
import { useFetch } from "hooks";

const withHome = (Component) => (props) => {
  const [gameData, setGameData] = useState([{}]);
  const [musicData, setMusicData] = useState([{}]);

  const { fetchData } = useFetch();

  useEffect(() => {
    fetchData("games", (data) => setGameData(data));
    fetchData("music", (data) => setMusicData(data));

    document.title = "Selfish Dream";
  }, [fetchData]);

  const imagesCarousel = [
    gameData.map((item) => ({
      name: item?.title,
      img: item?.carouselImage,
      link: `games/${item?.links?.[0]}`,
    })),
    musicData.map((item) => ({
      name: item?.title,
      img: item?.cardImage,
      link: `music/${item?.links?.[0]}`,
    })),
    artDetails.map((item) => ({
      name: item.title,
      img: item.cardImage,
      link: "art",
    })),
  ];

  const newProps = {
    ...props,
    imagesCarousel,
  };

  return <Component {...newProps} />;
};

export { withHome };
export default withHome;
