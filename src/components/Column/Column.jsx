import Card from "../Card/Card";
import * as S from "./Column.styled";

const Column = ({ title, cardList }) => {
  return (
    
    <div className="main__column column">
      <S.ColumnTitle>
        <S.ColumnTitleP>{title}</S.ColumnTitleP>
      </S.ColumnTitle>

      
      <S.Cards>  
        {cardList.map(({ id, topic, title, date }) => (
          <Card key={id} topic={topic} title={title} date={date} />
        ))}
      </S.Cards>
    </div>  
    
  );
};

export default Column;
