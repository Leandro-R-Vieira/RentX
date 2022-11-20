import theme from '../../styles/theme';
import { MarkedDateProps, DayProps } from ".";
import { eachDayOfInterval, format, parseISO } from "date-fns";

export function generateInterval(start: DayProps, end: DayProps){
  let interval: MarkedDateProps = {};

 const teste = eachDayOfInterval({ start: parseISO(start.dateString), end: parseISO(end.dateString)}).forEach((item) => {
    const date = format((item), 'yyyy-MM-dd');
     console.log(teste);
    interval = {
      ...interval,
      [date]: {
        color: start.dateString === date || end.dateString === date
        ? theme.colors.main : theme.colors.main_light,
        textColor: start.dateString === date || end.dateString === date
        ? theme.colors.shape : theme.colors.main,        
      }
    }
  });
  
  return interval;
}