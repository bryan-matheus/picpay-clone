import React from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import {
  Wrapper,
  Header,
  Container,
  BalanceContainer,
  BalanceTitle,
  Balance,
} from "./styles";

import Sugestions from "../../components/Sugestions";
import Activities from "../../components/Activities";
import Tips from "../../components/Tips";
import Banner from "../../components/Banner";

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons
            name="qrcode-scan"
            color="#10c86e"
            size={30}
          />
          <BalanceContainer>
            <BalanceTitle>Meu saldo</BalanceTitle>
            <Balance>R$ 0,00</Balance>
          </BalanceContainer>
          <AntDesign name="gift" color="#10c86e" size={30} />
        </Header>
        <Sugestions />
        <Activities />
        <Tips />
        <Banner />
      </Container>
    </Wrapper>
  );
}
