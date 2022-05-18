import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { useNavigate } from "react-router-dom";

export const Calender = () => {

    const navigate = useNavigate();


    const onCLickDate = (arg: DateClickArg) => { // bind with an arrow function
        // alert(arg.dateStr)
        navigate("/balance-list",{state: {date1: arg.dateStr as string}, replace: false })
    }

    return (
        <FullCalendar plugins={[dayGridPlugin, interactionPlugin]} height="500px"
                    dateClick={onCLickDate}
                    initialView="dayGridMonth" />
    )
}