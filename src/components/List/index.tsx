import React from 'react';

import { Container, Item, Title, ShowMore } from './styles';

interface Props {
  title: string;
  elements: React.ReactNode[];
  showMore: string;
}

const List: React.FC<Props> = ({ title, elements, showMore }) => {
  return (
    <Container>
      <Item>
        <Title>{title}</Title>
      </Item>
      {elements.map((element, index) => (
        <Item key={index}>{element}</Item>
      ))}
      <Item>
      <ShowMore>{showMore}</ShowMore>
      </Item>
    </Container>
  );
};

export default List;
