import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import PressableButton from "./src/components/atoms/PressableButton";
import Header from "./src/components/atoms/header";
import Avatar from "./src/components/atoms/avatar";
import InputContainer from "./src/components/atoms/inputContainer";
import Card from "./src/components/atoms/card";
import { DATA } from "./src/components/atoms/data";
import { Text } from "react-native";

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />
      <Header headerTitle="social" />
      <RowContainer>
        <Avatar imageSource={require("./src/assets/avatar1.png")} />
        <InputContainer />
      </RowContainer>
      <Card data={DATA} />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: red;
`;
const RowContainer = styled.View`
  width: 100%;
  padding-horizontal: 10px;
  flex-direction: row;
`;
