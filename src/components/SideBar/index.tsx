import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSugestion from '../FollowSuggestion';
import News from '../News';

import { 
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body,  
} from './styles';



const SideBar: React.FC = () => {
  return (
      <Container>
          <SearchWrapper>
              <SearchInput placeholder="Buscar no Twitter" />
              <SearchIcon />
          </SearchWrapper>

        <StickyBox>
            <Body>
                <List 
                    title="Talvez você curta"
                    elements={[
                        <FollowSugestion 
                            name="Fulano da Silva"
                            nickname="@dasilvafulano"
                        />,
                        <FollowSugestion 
                            name="Ciclano da Cruz"
                            nickname="@ciclanocruzda"
                        />,
                        <FollowSugestion 
                            name="John Doe"
                            nickname="@anonymousjohn"
                        />,                                        
                        <FollowSugestion 
                            name="Jane Doe"
                            nickname="@anonymousjane"
                        />,                                        
                    ]}
                    showMore="Mostrar Mais"            
                />
                <List 
                    title="O que está acontecendo"
                    elements={[
                        <News />,
                        <News />,
                        <News />,
                    ]}
                    showMore="Mostrar Mais"
                />
                <List 
                    title="O que está acontecendo"
                    elements={[
                        <News />,
                        <News />,
                        <News />,
                    ]}
                    showMore="Mostrar Mais"
                />
                <List 
                    title="O que está acontecendo"
                    elements={[
                        <News />,
                        <News />,
                        <News />,
                    ]}
                    showMore="Mostrar Mais"
                />
            </Body>
        </StickyBox>

      </Container>
  );
}

export default SideBar;