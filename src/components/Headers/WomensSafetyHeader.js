import React from "react";
import WomensSafetyTableau from './WomensSafetyTableau';


// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  let pageHeader = React.createRef();
  return (
    <div style={{
      backgroundImage:
        "url(" + require("assets/img/pune.jpg").default + ")",
       
     
    }}
    className="page-header"
    data-parallax={true}
    ref={pageHeader}
    >

  

          <div style={{marginTop:100,justifyContent:'center',alignItems:'center',marginHorizontal:100}}  className="filter" />
        
           
         
         
          <Container>
       <div className="motto text-center" style={{marginTop:100}}>
        <WomensSafetyTableau />
        </div>
        </Container>


     </div>
           

  );
}

export default IndexHeader;