import React from "react";
import {
  Button,
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { CalendarContainer, FullCalendarWrapper } from "./Calendar.style";
import { DayCellContentArg } from "fullcalendar";

const CalendarScreen = () => {
  const renderDayContent = (content: DayCellContentArg) => (
    <span>{content.dayNumberText.slice(0, -1)}</span>
  );

  return (
    <View style={{ height: "100%" }}>
      <CalendarContainer>
        <FullCalendarWrapper>
          <FullCalendar
            locale="ko"
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            allDayText="종일"
            dayCellContent={renderDayContent}
            buttonText={{ today: "오늘" }}
          />
        </FullCalendarWrapper>
      </CalendarContainer>
    </View>
  );
};

export default CalendarScreen;
