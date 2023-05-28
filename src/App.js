import React, { useEffect, useState } from 'react';
// eslint-disable-next-line
import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Text,
  VStack,
  Center,
} from '@chakra-ui/react';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { AiFillPhone } from 'react-icons/ai';
import { FaAirbnb } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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

function App() {
  const [studyRecordState, setStudyRecordState] = useState([
    {
      title: '나와야됨!!!',
      allDay: true,
      start: new Date(2023, 5 - 1, 27),
      end: new Date(2023, 5 - 1, 27),
      pk: '1',
    },
    {
      title: '!!!',
      start: new Date(2023, 5 - 1, 28),
      end: new Date(2023, 5 - 1, 28),
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
  const [sqautEventsState, setSqautEventsState] = useState([
    {
      title: '스쿼트19회',
      allDay: true,
      start: new Date(2023, 5 - 1, 1),
      end: new Date(2023, 5 - 1, 1),
    },
    {
      title: '스쿼트2회',
      start: new Date('2023-05-20 09:10:20'),
      end: new Date('2023-05-20 09:10:20'),
    },
    {
      title: '테스트',
      start: Date.now(),
      end: Date.now(),
    },
  ]);

  return (
    <Box>
      <HStack
        justifyContent={'space-between'}
        py={5}
        px={10}
        borderBottomWidth={1}
      >
        <Box color="red.500">
          <FaAirbnb size={'48'} />
        </Box>
        <HStack spacing={2}>
          <Button>Log in</Button>
          <Button colorScheme={'red'}>Sign up</Button>
        </HStack>
      </HStack>

      <Calendar
        localizer={localizer}
        events={studyRecordState} //원래는 {events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: '50px' }}
      />
    </Box>
  );
}

export default App;
