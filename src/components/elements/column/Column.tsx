import styled from "styled-components";
import Card from "../card/Card";
import { Text } from "../../ui-kit/text/StyledText";
import { Column as ColumnType } from "../../../store/data";

const ColumnIcon = ({ color, ...rest }: { color: string }) => (
  <span color={color} {...rest}></span>
);

const Column = ({ columnData }: { columnData: ColumnType }) => {
  console.log(columnData);
  return (
    <StyledColumn>
      <StyledHeading>
        <ColoredSpan color={columnData.color} />
        <Text tagName="h3" texttype="columnName">
          {columnData.name}
        </Text>
      </StyledHeading>
      {Object.keys(columnData.tasks).map((el) => (
        <Card key={el} taskData={columnData.tasks[el]} />
      ))}
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
