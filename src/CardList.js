import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const CardList = ({ robots }) => {
  if (!robots || robots.length === 0) {
    return <p>No robots available</p>;
  }

  return (
    <section>
      {robots.map(({ id, name, email }) => (
        <Card key={id} id={id} name={name} email={email} />
      ))}
    </section>
  );
}

CardList.propTypes = {
  robots: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  })).isRequired
};

export default React.memo(CardList);
