import React from "react";
import Building from "./Building";

export default function BuildingList({ buildings }) {
  if (buildings.length === 0) {
    return (
      <div className="empty-search">
        <h3>no buildings matched</h3>
      </div>
    );
  }

  return (
    <section className="buildingslist">
      <div className="buildingslist-center">
        {buildings.map(item => {
          return <Building key={item.id} building={item} />;
        })}
      </div>
    </section>
  );
}
