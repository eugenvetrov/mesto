import prices from "../utils/prices.js";
import okImg from "../images/ok.svg";
import notIncluded from "../images/not-included.svg";

const PriceTariffTable = ({ priceList, handleOrderSubmit }) => {
  const longestFeaturesList = () => {
    let longestArray = [];
    prices.forEach((item) => {
      if (Object.keys(item.features).length > longestArray.length)
        longestArray = Object.keys(item.features);
    });
    return longestArray;
  };

  const makePriceTableHeaderArray = (prices) => {
    const tableHeader = [];
    tableHeader[0] = "";
    prices.forEach((price) => tableHeader.push(price.name));
    return tableHeader;
  };

  const tableHeaderArray = makePriceTableHeaderArray(priceList);

  const makePriceTableBodyArray = (prices) => {
    const tableBody = [];
    longestFeaturesList().forEach((feature) => {
      const row = [feature];
      prices.forEach((price) => {
        row.push(price.features[feature]);
      });
      tableBody.push(row);
    });
    return tableBody;
  };
  const tableBodyArray = makePriceTableBodyArray(priceList);

  const makePriceTableFooterArray = (prices) => {
    const tableFooter = [];
    tableFooter[0] = null;
    prices.forEach((price) => {
      tableFooter.push({
        price: price.price,
        priceOfMonth: price.priceOfMonth,
      });
    });
    return tableFooter;
  };

  const tableFooterArray = makePriceTableFooterArray(priceList);

  return (
    <table>
      <thead>
        <tr>
          {tableHeaderArray.map((cell, i) => {
            return <td key={i}>{cell}</td>;
          })}
        </tr>
      </thead>
      <tbody>
        {tableBodyArray.map((row, i) => {
          return (
            <tr key={i}>
              {row.map((cell, i) => {
                if (typeof cell === "string") {
                  return <td key={i}>{cell}</td>;
                } else if (typeof cell === "boolean" && cell === true) {
                  return (
                    <td key={i}>
                      <img src={okImg} alt="yes" />
                    </td>
                  );
                } else {
                  return (
                    <td key={i}>
                      <img src={notIncluded} alt="no" />
                    </td>
                  );
                }
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          {tableFooterArray.map((cell, i) => {
            if (!cell) {
              return <td key={i}></td>;
            } else {
              return (
                <td key={i}>
                  <p>{cell.price}</p>
                  <p>{cell.priceOfMonth}</p>
                  <form onSubmit={handleOrderSubmit}>
                    <input type="submit" value="Отправить" />
                  </form>
                </td>
              );
            }
          })}
        </tr>
      </tfoot>
    </table>
  );
};

export default PriceTariffTable;
