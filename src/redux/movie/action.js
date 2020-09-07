import Axios from "axios";

import {
  fetchtrend,
  successtrend,
  failtrend,
  fetchpopular,
  successpopular,
  failpopular,
  fetchsinglemovie,
  passsinglemovie,
  failsinglemovie,
  fetchcredit,
  failcredit,
  passcredit,
  fetchvideo,
  successvideo,
  failvideo,
  tvfetchvideo,
  tvsuccessvideo,
  tvfailvideo,
  fetchsingletv,
  failsingletv,
  passsingletv
} from "./type";
export const requestsingletv=()=>{
  return{
    type : fetchsingletv,
 
  }
}
export const successsingletv=(data)=>{
  return{
    type:passsingletv,
    payload : data
  }
}
export const failsingleTV=(data)=>{
  return{
    type:failsingletv,
    payload : data
  }
}
export const requesttvvideo=()=>{
  return{
    type : tvfetchvideo,
 
  }
}
export const passtvvideo=(data)=>{
  return{
    type:tvsuccessvideo,
    payload : data
  }
}

export const errortvvideo=(data)=>{
  return{
    type:tvfailvideo,
    payload : data
  }
}
export const requestvideo=()=>{
  return{
    type : fetchvideo,
 
  }
}
export const passvideo=(data)=>{
  return{
    type:successvideo,
    payload : data
  }
}
export const errorvideo=(data)=>{
  return{
    type:failvideo,
    payload : data
  }
}
export const requestcredit=()=>{
  return{
    type : fetchsinglemovie,
 
  }
}
export const requestsingle=()=>{
  return{
    type : fetchcredit,
 
  }
}
export const successcredit=(data)=>{
  return{
    type:passcredit,
    payload : data
  }
}
export const errorcredit=(data)=>{
  return{
    type:failcredit,
    payload : data
  }
}
export const successsingle=(data)=>{
  return{
    type:passsinglemovie,
    payload : data
  }
}
export const failsingle=(data)=>{
  return{
    type:failsinglemovie,
    payload : data
  }
}
export const requesttrend = () => {
  return {
    type: fetchtrend,
  };
};
export const requestpopular = () => {
  return {
    type: fetchpopular,
  };
};
export const requestPasstrend = (data) => {
  return {
    type: successtrend,
    payload: data,
  };
};
export const requestPasspopular = (data) => {
  return {
    type: successpopular,
    payload: data,
  };
};
export const requestFailtrend = (error) => {
  return {
    type: failtrend,
    payload: error,
  };
};
export const requestFailpopular = (error) => {
  return {
    type: failpopular,
    payload: error,
  };
};
export const getTrending = () => {
  return (dispatch) => {
    // dispatch(requesttrend())
    return Axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_KEY}`
    )
      .then((res) => dispatch(requestPasstrend(res.data)))
      .catch((er) => dispatch(requestFailtrend("no network")));
  };
};

export const getPopular = () => {
  return (dispatch) => {
    // dispatch(requestpopular())
    return Axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`
    )
      .then((res) => dispatch(requestPasspopular(res.data)))
      .catch((er) => dispatch(requestFailpopular(er)));
  };
};
export const getSingular = (id) => {
  return (dispatch) => {
    // dispatch(requestsingle())
    return Axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_KEY}&language=en-US`
    )
      .then((res) => dispatch(successsingle(res.data)))
      .catch((er) => dispatch(failsinglemovie(er)));
  };
};
export const getCredit = (id) => {
  return (dispatch) => {
    // dispatch(requestcredit())
    return Axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_KEY}`
    )
      .then((res) => dispatch(successcredit(res.data)))
      .catch((er) => dispatch(errorcredit(er)));
  };
};
export const getVideo = (id) => {
  return (dispatch) => {
    // dispatch(requestcredit())
    return Axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=fcd5d6f43f641c10edc0fde7cfebb493&language=en-US`
    )
      .then((res) => dispatch(passvideo(res.data)))
      .catch((er) => dispatch(errorvideo(er)));
  };
};
export const getTV = (id) => {
  return (dispatch) => {
    // dispatch(requestcredit())
    return Axios.get(
      `
      https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`
    )
      .then((res) => dispatch(passvideo(res.data)))
      .catch((er) => dispatch(errorvideo(er)));
  };
};
export const getSingularTv = (id) => {
  return (dispatch) => {
    // dispatch(requestsingle())
    return Axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_KEY}&language=en-US`
    )
      .then((res) => dispatch(successsingletv(res.data)))
      .catch((er) => dispatch(failsingleTV(er)));
  };
};