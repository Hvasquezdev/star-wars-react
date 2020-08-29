import React from 'react';

import { useParams } from 'react-router-dom';
import { useFetch } from './useFetch';

import endpoint from './endpoint';

const CharacterView = () => {
  const { id } = useParams();
  const [response, loading] = useFetch(endpoint + '/characters/' + id )
  const character = (response && response.character) || {};

  return (
    <section className="CharacterView">
      {
        loading ? <p>Loading...</p> : (
          <>
            <h2>{character.name}</h2>
            <ul className="CharacterDetails">
              <li>
                <strong>Birth Year</strong>: {character.birthYear}
              </li>
              <li>
                <strong>Eye Color</strong>: {character.eyeColor}
              </li>
              <li>
                <strong>Gender</strong>: {character.gender}
              </li>
              <li>
                <strong>Hair Color</strong>: {character.hairColor}
              </li>
              <li>
                <strong>Heigh</strong>: {character.height}
              </li>
              <li>
                <strong>Mass</strong>: {character.mass}
              </li>
              <li>
                <strong>Skin Color</strong>: {character.skinColor}
              </li>
            </ul>
          </>
        )
      }
    </section>
  );
};

export default CharacterView;
