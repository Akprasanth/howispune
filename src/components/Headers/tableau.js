import React, { useEffect, useRef } from "react";
const { tableau } = window;
export const Tableau1 = () => {
  const ref = useRef(null);

  


  useEffect(() => {
    const url = "https://public.tableau.com/views/Health_update/MainView";
    var object={
        device:'desktop'
    }
    const viz = new tableau.Viz(ref.current, `${url}`,object
    )

    return viz;
  },[])

  return <div ref={ref}>
      <param name='device' value='phone'/> </div>;
};
export default Tableau1;
