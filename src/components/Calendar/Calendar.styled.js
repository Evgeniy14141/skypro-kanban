import styled from "styled-components";
import { DayPicker } from "react-day-picker";

export const Calendar = styled.div`
  margin-bottom: 20px;
`;

export const CalendarTitle = styled.p`
  margin-bottom: 14px;
  padding-left: 21px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const StyledDayPicker = styled(DayPicker)``;

export const CalendarTitleBottom = styled.p`
  color: #94a6be;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  padding-left: 21px;
`;

export const FormatDate = styled.span`
  color: black;
  font-weight: 400;
  line-height: 12px;
`;
