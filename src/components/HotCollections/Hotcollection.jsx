import classes from "./HotCollection.module.css";
import ProductCard from "../ProductCard/ProductCard";
import LandRoverLogo from "../../image/land-rover-logo.svg";
import Evoque from "../../image/evoque.png";
import NissanLogo from "../../image/nissan-logo.svg";
import GTR from "../../image/gtr.png";

const HotCollection = () => {
    const products = [
      {
        brandLogo: LandRoverLogo,
        brandTitle: "Range Rover",
        modelName: "Evoque",
        modelImage: Evoque,
        price: "38,700",
        cc: "1997 CC",
        bhp: "246.74 BHP",
        speed: "6 Speed",
        cylinders: "4 Cylinder",
        totalRun: "12500km",
        style: { backgroundColor: "#FE785B" },
        bhpStyle: { width: "30%", height: "29%", backgroundColor: "#C1EBA1" },
        totalRunStyle: {
          width: "100%",
          height: "20%",
          backgroundColor: "#EBA1A1",
          flexDirection: "row",
        },
      },
      {
        brandLogo: NissanLogo,
        brandTitle: "Nissan GTR",
        modelName: "R35 Nismo",
        modelImage: GTR,
        price: "187,900",
        cc: "3799 CC",
        bhp: "591.4 BHP",
        speed: "6 Speed",
        cylinders: "6 Cylinder",
        totalRun: "9254km",
        style: { backgroundColor: "#EBE6A1" },
        bhpStyle: { width: "30%", height: "29%", backgroundColor: "#E5EBFB" },
        totalRunStyle: {
          width: "100%",
          height: "20%",
          backgroundColor: "#A1EBD7",
          flexDirection: "row",
        },
      },
    ];
    return (
      <div className={classes.mainContainer}>
        <h3>🔥 Hot Collections</h3>
        <div className={classes.cardContainer}>
          {products.map(
            (
              {
                brandLogo,
                brandTitle,
                modelName,
                modelImage,
                price,
                cc,
                bhp,
                speed,
                cylinders,
                totalRun,
                style,
                bhpStyle,
                totalRunStyle,
              },
              index
            ) => (
              <ProductCard
                key={index}
                logo={brandLogo}
                title={brandTitle}
                name={modelName}
                image={modelImage}
                price={price}
                cc={cc}
                bhp={bhp}
                speed={speed}
                cylinders={cylinders}
                total={totalRun}
                style={style}
                bhpStyle={bhpStyle}
                runStyle={totalRunStyle}
              />
            )
          )}
        </div>
      </div>
    );
  };
  
  export default HotCollection;
  