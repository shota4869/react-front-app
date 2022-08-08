import FullCalendar, { EventClickArg } from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { useNavigate } from "react-router-dom";
import jaLocale from '@fullcalendar/core/locales/ja';
import { useState, VFC } from "react";
import "../../styles/calendar.css"

type Props = {
    calenderList: never[]
}

export const Calender: VFC<Props> = (props) => {

    const { calenderList } = props
    const navigate = useNavigate();

    const [ monthYear, setMonthYear ] = useState("");

    const onCLickDate = (arg: DateClickArg) => {
        navigate("/balance-list", { state: { date: arg.dateStr as string , monthFlg: "0" as string}, replace: false })
    }

    const eventClick = (e: EventClickArg) => {
        navigate("/balance-list", { state: { date: e.event.startStr as string, monthFlg: "0" as string}, replace: false })
    }


    const customButtonClickHandler = (month: string) => {

        navigate("/balance-list", { state: { date: "",month: month as string , monthFlg: "1" as string}, replace: false })
  
    }

    return (
        <FullCalendar plugins={[dayGridPlugin, interactionPlugin]} height="500px"
            dateClick={onCLickDate}
            initialView="dayGridMonth"
            locales={[jaLocale]}
            datesSet={(dateInfo) => {
                setMonthYear(dateInfo.view.title)
            }}
            customButtons={{
                myCustomButton: {

                    text: '月の収支',
                    click: () => {

                        customButtonClickHandler(monthYear);
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