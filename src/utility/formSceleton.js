import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

export default () => {
  return (
    <>
      <Skeleton width={350} height={57} animation="wave" />
      <Skeleton width={350} height={57} animation="wave" />
      <Skeleton width={350} height={57} animation="wave" />
      <Skeleton width={350} height={57} animation="wave" />
      <Skeleton
        style={{ border: "2px dashed #c7c7c7" }}
        width={350}
        height={97}
        animation={false}
      />
      <Skeleton width={100} height={57} animation="wave" />
    </>
  );
};
