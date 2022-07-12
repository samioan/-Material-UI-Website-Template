import React, { useState, useEffect } from "react";

import debounce from "lodash/debounce";

const withScrollbars = (Component) => (props) => {
  useEffect(() => {
    const debounced = debounce(() => {
      if (window.scrollY > 200) {
        setShowScrollToTopButton(true);
      } else {
        setShowScrollToTopButton(false);
      }
    }, 250);

    return () => {
      window.removeEventListener(`scroll`, debounced);
    };
  }, []);

  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);

  useEffect(() => {
    const debounced = debounce(() => {
      if (window.scrollY > 200) {
        setShowScrollToTopButton(true);
      } else {
        setShowScrollToTopButton(false);
      }
    }, 250);

    window.addEventListener("scroll", debounced);

    return () => {
      window.removeEventListener(`scroll`, debounced);
    };
  }, []);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  const newProps = {
    ...props,
    showScrollToTopButton,
    scrollToTop,
  };

  return <Component {...newProps} />;
};

export { withScrollbars };
export default withScrollbars;
