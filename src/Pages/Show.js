import { useQuery } from "@tanstack/react-query";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getShowsById } from "../Api/ApiService";
import Cast from "../Components/Shows and actors/Cast";
import Details from "../Components/Shows and actors/Details";
import Seasons from "../Components/Shows and actors/Seasons";
import ShowMainData from "../Components/Shows and actors/ShowMainData";

const Show = () => {
  const { showId } = useParams();
  const navigate = useNavigate();
  const { data: showData, error: showDataError } = useQuery({
    queryKey: ["show", showId],
    queryFn: () => getShowsById(showId),
    refetchOnWindowFocus: false,
  });

  //   const [showData, setShowData] = useState(null);
  //   const [showDataError, setShowDataError] = useState(null);
  //   const getData= useCallback(async()=> {
  //     setShowDataError(null)
  //     try {
  //       const data = await getShowsById(showId);
  //       setShowData(data);
  //     } catch (error) {
  //         setShowDataError(error);
  //     }
  //   },[showId]);

  //   useEffect(() => {
  //     getData();
  //   }, []);

  if (showDataError) {
    return <div>We have an error : {showDataError.message}</div>;
  }
  if (showData) {
    return (
      <>
        <div>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Back
          </button>
        </div>
        <div>
          <ShowMainData
            image={showData.image}
            rating={showData.rating}
            summary={showData.summary}
            genres={showData.genres}
          />
        </div>
        <div>
          <h2>Details</h2>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </div>
        <div>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </div>
        <div>
          <h2>Cast</h2>
          <Cast cast={showData._embedded.cast} />
        </div>
      </>
    );
  }

  return <div>Data is loading</div>;
};

export default Show;
