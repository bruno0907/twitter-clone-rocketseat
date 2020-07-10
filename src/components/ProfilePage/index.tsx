import React from 'react';

import Feed from '../Feed'

import { 
    Container,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
            <Avatar />            
          </Banner>
          <ProfileData>
              <EditButton outlined>Editar perfil</EditButton>
              <h1>Bruno Mariani</h1>
              <h2>@bruno09070</h2>
              <p>
                  Pratical Project from <a href="https://twitter.com/rocketseat">@rocketseat</a>
              </p>

              <ul>
                  <li>
                      <LocationIcon />
                      Balneário Camboriú, SC - Brasil
                  </li>
                  <li>
                      <CakeIcon />
                      Nascido(a) em 09 de julho de 1983
                  </li>
              </ul>
              <Followage>
                <span>
                    seguindo <strong>120</strong>
                </span>
                <span>
                    <strong>80 </strong>
                    seguidores
                </span>
              </Followage>
          </ProfileData>
          <Feed />
      </Container>
  );
}

export default ProfilePage;