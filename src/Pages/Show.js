import { useQuery } from "@tanstack/react-query";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { getShowsById } from "../Api/ApiService";
import { TextCenter } from "../Components/common/TextCenter";
import Cast from "../Components/Shows and actors/Cast";
import Details from "../Components/Shows and actors/Details";
import Seasons from "../Components/Shows and actors/Seasons";
import ShowMainData from "../Components/Shows and actors/ShowMainData";

const Show = () => {
  const { showId } = useParams();
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
    return <TextCenter>We have an error : {showDataError.message}</TextCenter>;
  }
  if (showData) {
    return (
      <>
        <ShowPageWrapper>
          <BackHomeWrapper>
            <Link to="/">Go back to home</Link>
          </BackHomeWrapper>

          <ShowMainData
            image={showData.image}
            rating={showData.rating}
            summary={showData.summary}
            genres={showData.genres}
          />

          <InfoBlock>
            <h2>Details</h2>
            <Details
              status={showData.status}
              premiered={showData.premiered}
              network={showData.network}
            />
          </InfoBlock>
          <InfoBlock>
            <h2>Seasons</h2>
            <Seasons seasons={showData._embedded.seasons} />
          </InfoBlock>
          <InfoBlock>
            <h2>Cast</h2>
            <Cast cast={showData._embedded.cast} />
          </InfoBlock>
        </ShowPageWrapper>
      </>
    );
  }

  return <TextCenter>Data is loading</TextCenter>;
};

export default Show;

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;
