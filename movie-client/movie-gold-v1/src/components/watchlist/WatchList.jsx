import React, { useEffect, useState } from "react";
import "./watchList.css";
import Loading from "../loading/Loading";

const WatchList = ({ movies, loading }) => {
  return (
    <div className="movie-carousel-container">
      {loading ? (
        <>
          <Loading/>
        </>
      ) : (
        <>
          {movies?.map((e) => {
            return (
              <>
                <div style={{ color: "white" }} key={e}>
                  {e.title}
                </div>
              </>
            );
          })}
        </>
      )}
    </div>
  );
};

export default WatchList;
