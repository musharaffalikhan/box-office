import { useQuery } from "@tanstack/react-query";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getShowsById } from "../Api/ApiService";

const Show = () => {
  const { showId } = useParams();
  const {data:showData , error:showDataError} = useQuery({
    queryKey:['show' , showId],
    queryFn:()=>getShowsById(showId),
  })
  


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




  if(showDataError){
    return <div>We have an error : {showDataError.message}</div>
  }
   if(showData){
    return <div>Got Show Data : {showData.name}</div>
   }

  return <div>Data is loading</div>;
};

export default Show;
