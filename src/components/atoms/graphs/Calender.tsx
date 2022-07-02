import FullCalendar, { EventClickArg } from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { useNavigate } from "react-router-dom";
import jaLocale from '@fullcalendar/core/locales/ja';
import { VFC } from "react";

type Props= {
    calenderList: never[]
}

export const Calender: VFC<Props> = (props) => {

    const { calenderList } = props
    const navigate = useNavigate();

   
    const onCLickDate = (arg: DateClickArg) => { 
        navigate("/balance-list", { state: { date: arg.dateStr as string }, replace: false })
    }

    const eventClick = (e: EventClickArg) => {
        console.log(e.event.groupId)
    } 

    return (
        <FullCalendar plugins={[dayGridPlugin, interactionPlugin]} height="600px"
            dateClick={onCLickDate}
            initialView="dayGridMonth"
            locales={[jaLocale]}         
            locale='ja'
            events={[{title: "hi",start:"2022-06-22",fixed:"1",groupId: "1"}]} eventClick={eventClick}/>
    )
}