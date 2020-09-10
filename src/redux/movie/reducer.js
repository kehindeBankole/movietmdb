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
  passsingletv,
  fetchcredittv,
  failcredittv,
  passcredittv,
} from "./type";
const initCreditTvState = {
  load: true,
  creditTV: [],
  err: "",
};
const inittvState = {
  load: true,
  dataTv: [],
  err: "",
};
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
const singleTv = {
  load: true,
  TV: [],
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
export const reducertv = (state = inittvState, action) => {
  switch (action.type) {
    case tvfetchvideo:
      return {
        ...state,
        load: true,
      };
    case tvsuccessvideo:
      return {
        ...state,
        load: false,
        dataTv: action.payload,
        err: "",
      };
    case tvfailvideo:
      return {
        ...state,
        load: false,
        dataTv: [],
        err: action.payload,
      };
    default:
      return state;
  }
};

export const singletvreducer = (state = singleTv, action) => {
  switch (action.type) {
    case fetchsingletv:
      return {
        ...state,
        load: true,
      };
    case passsingletv:
      return {
        ...state,
        load: false,
        TV: action.payload,
        err: "",
      };
    case failsingletv:
      return {
        ...state,
        load: false,
        TV: [],
        err: action.payload,
      };
    default:
      return state;
  }
};

export const reducercredittv=(state=initCreditTvState , action)=>{
  switch(action.type){
    case fetchcredittv: return{
      ...state,
      load: true,
    }
    case passcredittv : return{
      ...state,
        load: false,
        creditTV: action.payload,
        err: "",
    }
    case failcredittv:
      return {
        ...state,
        load: false,
        creditTV: [],
        err: action.payload,
      };
    default:return state
  }
}