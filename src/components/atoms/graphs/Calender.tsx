import FullCalendar, { EventClickArg } from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { useNavigate } from "react-router-dom";
import jaLocale from '@fullcalendar/core/locales/ja';
import { useState, VFC } from "react";


type Props = {
    calenderList: never[]
}

export const Calender: VFC<Props> = (props) => {

    const { calenderList } = props
    const navigate = useNavigate();

    const [ monthYear, setMonthYear ] = useState("");

    const onCLickDate = (arg: DateClickArg) => {
        navigate("/balance-list", { state: { date: arg.dateStr as string }, replace: false })
    }

    const eventClick = (e: EventClickArg) => {
        console.log(e.event.startStr)
    }


    const dateClickHandler = (month: string) => {

        navigate("/balance-list", { state: { date: month as string }, replace: false })
  
    }
    console.log("hi")
    return (
        <FullCalendar plugins={[dayGridPlugin, interactionPlugin]} height="600px"
            dateClick={onCLickDate}
            initialView="dayGridMonth"
            locales={[jaLocale]}
            datesSet={(dateInfo) => {
                setMonthYear(dateInfo.view.title)
                console.log(dateInfo.view.title) //start of the range the calendar date
            }}
            customButtons={{

                myCustomButton: {

                    text: '月の収支',
                    click: () => {

                        dateClickHandler(monthYear);
                    },
                },
            }}
            headerToolbar={{
                center: 'myCustomButton'
            }}
            titleFormat={{
                year: 'numeric',
                month: '2-digit'
            }}
            locale='ja'
            events={calenderList} eventClick={eventClick} />
    )
}