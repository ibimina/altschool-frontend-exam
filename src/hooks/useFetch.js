import { useReducer, useEffect } from "react";
import { useErrorHandler } from "react-error-boundary";


let initial = { docs: [], loading: false };
const fetchReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: action.payload };
    case "SETDATA":
      return { docs: action.payload, loading: false };
      default:
        return state
  }
};
export default function useFetch(url) {

  const [state, dispatch] = useReducer(fetchReducer, initial);
  const errorhook = useErrorHandler();

  useEffect(() => {
    const abortConst =new AbortController()
    const fetchData = async()=> {
      try {
        dispatch({ type: "LOADING", payload: true });

        const res = await fetch(url,{signal:abortConst.signal});
     
        if (!res.ok) {
          throw new Error(res.statusText);
        }

        const data = await res.json();
        dispatch({ type: "SETDATA", payload: data });
      } catch (error) {
        if (error==="AbortError") {
          dispatch({ type: "LOADING", payload: false });   
          console.log("Abort")
        }
        dispatch({ type: "LOADING",payload:false });
        errorhook(error);
      }
    };

    fetchData();
    return () => abortConst.abort
    
  }, [url]);

  return { state };
}