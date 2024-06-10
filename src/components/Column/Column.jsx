import Card from "../Card/Card";
import * as S from "./Column.styled";
//import { Cards } from "../Card/Card.styled";

const Column = ({ title, cardList }) => {
  return (
    
    
      <S.MainColumnColumn>
      <S.ColumnTitle>
        <S.ColumnTitleP>{title}</S.ColumnTitleP>
      </S.ColumnTitle>

      
      <S.Cards>  
        {cardList.map(({ id, topic, title, date }) => (
          <Card key={id} topic={topic} title={title} date={date} id={id}/>
        ))}
      </S.Cards>
    </S.MainColumnColumn>  
    
  );
};

export default Column;
