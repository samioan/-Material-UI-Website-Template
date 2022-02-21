import React from "react";

import { Scrollbars } from "react-custom-scrollbars";

const withScrollbars = (Component) => (props) =>
  (
    <Scrollbars
      style={{ height: "100vh" }}
      renderTrackVertical={(props) => (
        <div
          {...props}
          style={{
            width: 8,
            position: "absolute",
            right: 0,
            bottom: 0,
            top: 0,
          }}
        />
      )}
      renderThumbVertical={(props) => (
        <div
          {...props}
          style={{
            borderRadius: 3,
            background: "rgba(255, 255, 255, 0.5)",
          }}
        />
      )}
    >
      <Component {...props} />
    </Scrollbars>
  );

export { withScrollbars };
export default withScrollbars;
