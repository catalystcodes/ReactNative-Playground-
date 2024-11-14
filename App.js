import { StatusBar } from "expo-status-bar";
import styled from "styled-components";
import { Styled } from "styled-components/native";
import PressableButton from "./src/components/atoms/PressableButton";
import Header from "./src/components/atoms/header";
import Avatar from "./src/components/atoms/avatar";

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />
      <Header headerTitle="social" />
      <RowContainer>
        <Avatar imageSource={require("./src/assets/avatar1.png")} />
      </RowContainer>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;
const RowContainer = styled.View`
  width: 100%;
  padding-horizontal: 10px;
  flex-direction: row;
`;
