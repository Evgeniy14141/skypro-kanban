import Card from "../Card/Card";
import * as S from "./Column.styled";

const Column = ({ title, cardList }) => {
  return (
    
    
      <S.MainColumnColumn>
      <S.ColumnTitle>
        <S.ColumnTitleP>{title}</S.ColumnTitleP>
      </S.ColumnTitle>

      
      <S.Cards>  
        {cardList.map(({ id, topic, title, date }) => (
          <Card key={id} topic={topic} title={title} date={date} />
        ))}
      </S.Cards>
    </S.MainColumnColumn>  
    
  );
};

export default Column;
