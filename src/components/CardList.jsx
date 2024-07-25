import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const CardList = ({ cocktails }) => {
  if (!cocktails || cocktails.length === 0) {
    return <p>No cocktails available</p>;
  }

  return (
    <section>
      {cocktails.map(({ idDrink, strDrink, strDrinkThumb }) => (
        <Card key={idDrink} name={strDrink} src={strDrinkThumb} />
      ))}
    </section>
  );
};

CardList.propTypes = {
  cocktails: PropTypes.arrayOf(
    PropTypes.shape({
      idDrink: PropTypes.string.isRequired,
      strDrink: PropTypes.string.isRequired,
      strDrinkThumb: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default React.memo(CardList);
