import React from 'react';
import PropTypes from "prop-types";

const List = (props) => {
  const {people} = props;
  console.log(props);
  return (
    <>
      {people && people.map((person) => {
        const {id, name, age, image} = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt="Image of a person" />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

List.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired
}

List.defaultProps = {
  name: "Hello John",
  age: 99,
  image: "Default Image"
}

export default List;
