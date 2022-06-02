import okImg from "../images/ok.svg";

const PriceTariffDiv = ({ price, isMobile, handleOrderSubmit }) => {
  if (isMobile) {
    return (
      <div className="price">
        <p className="price__name">{price.name}</p>
        <p>{price.priceDescription}</p>
        {Object.keys(price.features).map((item, i) => {
          return (
            <>
              <img src={okImg} alt="yes" />
              <li key={i}>{Object.keys(price.features)[i]}</li>
            </>
          );
        })}
        <p>{price.price} руб.</p>
        {price.priceOfMonth ? <p>{price.priceOfMonth} руб./месяц</p> : null}
        <form onSubmit={handleOrderSubmit}>
          <input type="submit" value="Отправить" />
        </form>
      </div>
    );
  } else {
    return;
  }
};

export default PriceTariffDiv;
