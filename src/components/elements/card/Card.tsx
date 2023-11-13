import { Text } from "../../ui-kit/text/StyledText";
import styled from "styled-components";
const Card = () => {
  return (
    <StyledCard>
      <Text tagName="h3" texttype="taskName">
        Всем привет
      </Text>
      <Text tagName="p" texttype="subtasks">
        Всем привет
      </Text>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  background-color: #f8f8f8;
  padding: 10px;
  border-radius: 8px;
  width: 250px;
`;

export default Card;
