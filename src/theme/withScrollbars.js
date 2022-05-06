import React, { useRef, useState, useEffect } from "react";

import { Scrollbars } from "react-custom-scrollbars";

const withScrollbars = (Component) => (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollbarsRef = useRef(null);

  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);

  const onScrollFrame = () => {
    if (scrollbarsRef.current.viewScrollTop > 200) {
      setShowScrollToTopButton(true);
    } else {
      setShowScrollToTopButton(false);
    }
  };

  const scrollToTop = () => {
    scrollbarsRef.current.view.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    scrollbarsRef.current.view.scroll({
      top: scrollbarsRef?.current?.view?.scrollHeight,
      behavior: "smooth",
    });
  };

  const newProps = {
    ...props,
    showScrollToTopButton,
    scrollToTop,
    scrollToBottom,
  };

  return (
    <Scrollbars
      autoHeight
      autoHeightMin={"100vh"}
      ref={scrollbarsRef}
      onScrollFrame={onScrollFrame}
      renderTrackVertical={(props) => (
        <div
          {...props}
          style={{
            width: 8,
            position: "absolute",
            right: 0,
            bottom: 0,
            top: 0,
            zIndex: 2000,
          }}
        />
      )}
      renderThumbVertical={(props) => (
        <div
          {...props}
          style={{
            borderRadius: 3,
            background: "rgba(255, 255, 255, 0.5)",
            zIndex: 2000,
          }}
        />
      )}
    >
      <Component {...newProps} />
    </Scrollbars>
  );
};

export { withScrollbars };
export default withScrollbars;
