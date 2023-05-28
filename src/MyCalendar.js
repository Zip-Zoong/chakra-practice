import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { getUserForExport, getUserStudyRecordsForExport } from './Firebase';

function manageUserStudyRecord(r) {
  var calEvents = [];
  for (var i = 0; i < r.length; i++) {
    const studyTime = r[i].end.seconds - r[i].start.seconds;
    calEvents.push({
      title: studyTime + '초 공부함',
      // start: r[i].start.seconds,
      // end: r[i].end,
      start: new Date(r[i].start.seconds * 1000),
      end: new Date(r[i].start.seconds * 1000),
    });
  }

  console.log('calEvents', calEvents);
  return calEvents;
}

function MyCalendar() {
  const [studyRecordState, setStudyRecordState] = useState([
    {
      title: '테스트용',
      allDay: true,
      start: new Date(2023, 5 - 1, 27),
      end: new Date(2023, 5 - 1, 27),
      pk: '1',
    },
  ]);

  // getUserForExport();

  // rec을 처리하기
  useEffect(async () => {
    const rec = await getUserStudyRecordsForExport();
    var processed_rec = manageUserStudyRecord(rec);
    setStudyRecordState(processed_rec);
    console.log('hello');
  }, []);

  moment.locale('ko-KR');
  const localizer = momentLocalizer(moment);

  return (
    <Box>
      <Calendar
        localizer={localizer}
        events={studyRecordState}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: '50px' }}
      />
    </Box>
  );
}

export default MyCalendar;
