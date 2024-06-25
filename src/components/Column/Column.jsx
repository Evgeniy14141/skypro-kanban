import Card from "../Card/Card";
import * as S from "./Column.styled";

const Column = ({ title, taskList }) => {
  return (
    <S.MainColumnColumn>
      <S.ColumnTitle>
        <S.ColumnTitleP>{title}</S.ColumnTitleP>
      </S.ColumnTitle>

      <S.Cards>
        {taskList.map((card) => (
          <Card
            key={card._id}
            topic={card.topic}
            title={card.title}
            date={card.date}
            id={card._id}
          />
        ))}
      </S.Cards>
    </S.MainColumnColumn>
  );
};

export default Column;
