import PriceTariffDiv from "./PriceTariffDiv.js";
import PriceTariffTable from "./PriceTariffTable.js";
import prices from "../utils/prices.js";
import useDeviceDetect from "../customHooks/useDeviceDetect.js";

const App = () => {
  const deviceDetect = useDeviceDetect();
  const isMobile = deviceDetect.isMobile;
  const getItemPriceTariff = (itemName) => {
    const getItem = prices.filter((item) => {
      return item.name === itemName;
    });
    return getItem[0];
  };

  const priceXS = getItemPriceTariff("XS");
  const priceM = getItemPriceTariff("M");
  const priceL = getItemPriceTariff("L");

  const handleOrderSubmit = (event) => {
    event.preventDefault();
    console.log("Submit");
  };

  if (isMobile) {
    return (
      <>
        <div className="page">
          <h1 className="price__title">Тарифы</h1>

          <PriceTariffDiv
            price={priceXS}
            isMobile={isMobile}
            handleOrderSubmit={handleOrderSubmit}
          />
          <PriceTariffDiv
            price={priceM}
            isMobile={isMobile}
            handleOrderSubmit={handleOrderSubmit}
          />
          <PriceTariffDiv
            price={priceL}
            isMobile={isMobile}
            handleOrderSubmit={handleOrderSubmit}
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="page">
          <h1 className="price__title">Тарифы</h1>
          <PriceTariffTable
            priceList={[priceXS, priceM, priceL]}
            handleOrderSubmit={handleOrderSubmit}
          />
        </div>
      </>
    );
  }
};

export default App;
