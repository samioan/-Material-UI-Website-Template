import React, { useEffect, useState } from "react";
import { db } from "backend";
import { ref, child, get } from "firebase/database";
import artDetails from "pages/art/util/artDetails";

const withHome = (Component) => (props) => {
  const [gameData, setGameData] = useState([{}]);
  const [musicData, setMusicData] = useState([{}]);

  useEffect(() => {
    get(child(ref(db), `games`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          return setGameData(Object.values(snapshot.val()));
        } else setGameData([]);
      })
      .catch((error) => {
        setGameData([]);
      });
    get(child(ref(db), `music`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          return setMusicData(Object.values(snapshot.val()));
        } else setMusicData([]);
      })
      .catch((error) => {
        setMusicData([]);
      });

    document.title = "Selfish Dream";
  }, []);

  const sortFn = (a, b) => {
    const dateA = new Date(a?.released?.split("-").reverse().join("-"));
    const dateB = new Date(b?.released?.split("-").reverse().join("-"));
    return dateB - dateA;
  };

  const imagesCarousel = [
    gameData.sort(sortFn).map((item) => ({
      name: item?.title,
      img: item?.carouselImage,
      link: `games/${item?.links?.[0]}`,
    })),
    musicData.sort(sortFn).map((item) => ({
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
