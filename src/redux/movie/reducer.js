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
  failvideo
} from "./type";

const inittrendState = {
  load: true,
  dataTrend: [],
  err: "",
};
const initpopularState = {
  load: true,
  dataPopular: [],
  err: "",
};
const initCreditState = {
  load: true,
  credit: [],
  err: "",
};
const singleMovie = {
  load: true,
  movie: [],
  err: "",
};
const initVideo= {
  load: true,
 video: [],
  err: "",
};
export const reducervideo=(state=initVideo , action)=>{
  switch(action.type){
    case fetchvideo: return{
      ...state,
      load: true,
    }
    case successvideo : return{
      ...state,
        load: false,
        video: action.payload,
        err: "",
    }
    case failvideo:
      return {
        ...state,
        load: false,
        video: [],
        err: action.payload,
      };
    default:return state
  }
}
export const reducercredit=(state=initCreditState , action)=>{
  switch(action.type){
    case fetchcredit: return{
      ...state,
      load: true,
    }
    case passcredit : return{
      ...state,
        load: false,
        credit: action.payload,
        err: "",
    }
    case failcredit:
      return {
        ...state,
        load: false,
        credit: [],
        err: action.payload,
      };
    default:return state
  }
}
export const reducertrend = (state = inittrendState, action) => {
  switch (action.type) {
    case fetchtrend:
      return {
        ...state,
        load: true,
      };
    case successtrend:
      return {
        ...state,
        load: false,
        dataTrend: action.payload,
        err: "",
      };
    case failtrend:
      return {
        ...state,
        load: false,
        dataTrend: [],
        err: action.payload,
      };
    default:
      return state;
  }
};
export const reducerpopular = (state = initpopularState, action) => {
  switch (action.type) {
    case fetchpopular:
      return {
        ...state,
        load: true,
      };
    case successpopular:
      return {
        ...state,
        load: false,
        dataPopular: action.payload,
        err: "",
      };
    case failpopular:
      return {
        ...state,
        load: false,
        dataPopular: [],
        err: action.payload,
      };
    default:
      return state;
  }
};

export const singlereducer = (state = singleMovie, action) => {
  switch (action.type) {
    case fetchsinglemovie:
      return {
        ...state,
        load: true,
      };
    case passsinglemovie:
      return {
        ...state,
        load: false,
        movie: action.payload,
        err: "",
      };
    case failsinglemovie:
      return {
        ...state,
        load: false,
        movie: [],
        err: action.payload,
      };
    default:
      return state;
  }
};
