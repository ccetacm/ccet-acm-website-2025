// import React from 'react';
// import { VectorMap } from '@react-jvectormap/core';
// import { worldMill } from "@react-jvectormap/world";

// const WorldMap = () => {
//   return (
    // <div className='m-auto w-[700px] h-[600px] relative'>
    //   <style>
    //     {`

    //       .jvectormap-tip {
    //         position: absolute;
    //         display: none;
    //         border: solid 1px #AD6CFF;
    //         border-radius: 3px;
    //         background: #AD6CFF;
    //         color: white;
    //         font-family: sans-serif, Verdana;
    //         font-size: smaller;
    //         padding: 3px;
    //         z-index: 9999;
    //       }
    //       .jvectormap-zoomin, .jvectormap-zoomout {
    //         display: none;
    //       }
    //     `}
    //   </style>
//       <VectorMap
//         map={worldMill}
//         backgroundColor='#161425'
//         containerStyle={{
//           width: "700px",
//           height: "600px",
//         }}
//       />
//     </div>
//   );
// };

// export default WorldMap;

import React from "react";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
const WorldMap = () => {
  return (
    

       <div className='m-auto w-[700px] h-[600px] relative'>
      <style>
        {`

          .jvectormap-tip {
            position: absolute;
            display: none;
            border: solid 1px #AD6CFF;
            border-radius: 3px;
            background: #AD6CFF;
            color: white;
            font-family: sans-serif, Verdana;
            font-size: smaller;
            padding: 3px;
            z-index: 9999;
          }
          .jvectormap-zoomin, .jvectormap-zoomout {
            display: none;
          }
        `}
      </style>
      <VectorMap
        map={worldMill}
        containerStyle={{
          width: "700px",
          height: "600px",
        }}
        backgroundColor="#0E0C15"

        zoomOnScroll={false}
        zoomButtons={false}

        regionStyle={{
          hover:{
            fill:'#2761EA'
          }
        }}
      />
    </div>
  );
};
export default WorldMap;
