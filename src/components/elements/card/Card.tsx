import { Text } from "../../ui-kit/text/StyledText";
import styled from "styled-components";
import { Task } from "../../../data/store/data";

const Card = ({ taskData }: { taskData: Task }) => {
  return (
    <StyledCard>
      <Text tagName="h3" texttype="taskName">
        {taskData.header}
      </Text>
      <Text tagName="p" texttype="subtasks">
        Сделано{" "}
        {taskData.subtasks.reduce((el, s) => (s.status ? el + 1 : el), 0)} из{" "}
        {taskData.subtasks.length} подзадач.
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
