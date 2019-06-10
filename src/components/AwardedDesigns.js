import React, { Component } from "react";
import { BuildingContext } from "../context";
import Loading from "./Loading";
import Building from "./Building";
import Title from "./Title";
export default class AwardedDesigns extends Component {
  static contextType = BuildingContext;
  render() {
    let { loading, awardedDesigns: designs } = this.context;
    designs = designs.map(design => {
      return <Building key={design.id} building={design} />;
    });
    //console.log(designs);
    return (
      <section className="awarded-designs">
        <Title title="Awarded Designs" />
        <div className="awarded-designs-center">
          {loading ? <Loading /> : designs}
        </div>
      </section>
    );
  }
}
