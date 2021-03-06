import React from 'react';

import { 
    Container,
    Topside,
    Logo,
    MenuButton,
    HomeIcon,
    BellIcon,
    EmailIcon,
    FavoriteIcon,
    ProfileIcon,
    BotSide,
    Avatar,
    ProfileData,
    ExitIcon
} from './styles';

import Button from '../Button/';

const MenuBar: React.FC = () => {
  return (
      <Container>
          <Topside>
              <Logo />

              <MenuButton>
                  <HomeIcon />
                  <span>Página Inicial</span>
              </MenuButton>
              
              <MenuButton>
                  <BellIcon />
                  <span>Notificações</span>
              </MenuButton>

              <MenuButton>
                  <EmailIcon />
                  <span>Mensagens</span>
              </MenuButton>

              <MenuButton>
                  <FavoriteIcon />
                  <span>Favoritados</span>
              </MenuButton>

              <MenuButton className="active">
                  <ProfileIcon />
                  <span>Perfil</span>
              </MenuButton>

              <Button>
                  <span>Twittar</span>
              </Button>

          </Topside>

          <BotSide>
              <Avatar />
              <ProfileData>
                  <strong>Bruno Mariani</strong>
                  <span>@bruno09070</span>
              </ProfileData>

              <ExitIcon />
          </BotSide>
      </Container>
  );
}

export default MenuBar;