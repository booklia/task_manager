import styled from "styled-components";
import Card from "../card/Card";
import { Text } from "../../ui-kit/text/StyledText";

const ColumnIcon = ({ color, ...rest }: { color: string }) => (
  <span color={color} {...rest}></span>
);

const Column = () => {
  return (
    <StyledColumn>
      <StyledHeading>
        <ColoredSpan color="green" />
        <Text tagName="h3" texttype="columnName">
          Заголовок
        </Text>
      </StyledHeading>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </StyledColumn>
  );
};

const StyledColumn = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const ColoredSpan = styled(ColumnIcon)<{ color: string }>`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;
export default Column;
