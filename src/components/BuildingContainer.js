import React from "react";
import BuildingFilter from "./BuildingFilter";
import BuildingList from "./BuildingList";
import { withBuildingConsumer } from "../context";
import Loading from "./Loading";

function BuildingContainer({ context }) {
  const { loading, sortedBuildings, buildings } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <BuildingFilter buildings={buildings} />
      <BuildingList buildings={sortedBuildings} />
    </>
  );
}

export default withBuildingConsumer(BuildingContainer);

// import React from "react";
// import BuildingFilter from "./BuildingFilter";
// import BuildingList from "./BuildingList";
// import { BuildingConsumer } from "../context";
// import Loading from "./Loading";

// export default function BuildingContainer() {
//   return (
//     <BuildingConsumer>
//       {value => {
//         const { loading, sortedBuildings, buildings } = value;

//         if (loading) {
//           return <Loading />;
//         }

//         return (
//           <div>
//             BuildingContainer
//             <BuildingFilter buildings={buildings} />
//             <BuildingList buildings={sortedBuildings} />
//           </div>
//         );
//       }}
//     </BuildingConsumer>
//   );
// }
