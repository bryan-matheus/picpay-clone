import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Wrapper = styled.View`
  background-color: #000;
  flex: 1;
`;

export const Header = styled(LinearGradient)`
  height: 300px;
`;
export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
export const BalanceContainer = styled.View`
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  font-size: 38px;
  color: #fff;
  font-weight: 200;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
  margin-left: 10px;
`;
export const Info = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export const Actions = styled.View`
  margin-top: 40px;
  flex-direction: row;
`;
export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.6);
  width: 150px;
  height: 45px;
  border-radius: 20px;
  justify-content: center;
  margin: 0 10px;
`;
export const ActionLabel = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-left: 10px;
`;
export const UseBalance = styled.View`
  background-color: #1c1c1e;
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`;
export const UseBalanceTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;
export const PaymentMethods = styled.ScrollView``;

export const PaymentMethodsTitle = styled.Text`
  margin-top: 25px;
  padding: 0 16px;
  color: #8e8e93;
  text-transform: uppercase;
`;
export const Card = styled.View`
  background-color: #1e232a;
  padding: 20px;
  border-radius: 8px;
  margin-top: 10px;
  flex-direction: row;
`;
export const CardDetails = styled.View`
  flex: 1;
  margin-right: 20px;
`;
export const CardTitle = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;
export const CardInfo = styled.Text`
  font-size: 14px;
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.6);
`;
export const Img = styled.Image`
  width: 60px;
`;
export const AddButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 25px;
`;
export const AddLabel = styled.Text`
  color: #0db060;
  font-size: 18px;
  font-weight: bold;
  margin-left: 15px;
`;

export const UseTicketContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 25px 0;
`;
export const UseTicketButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
export const UseTicketLabel = styled.Text`
  color: #0db060;
  font-size: 14px;
  font-weight: bold;
  margin-left: 15px;
  text-decoration-line: underline;
`;
