
const PriceConvert = ({ price }) => {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(price);
};

export default PriceConvert;
