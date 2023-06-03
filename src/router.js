import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import PracticeChakra from './PracticeChakra';
import MyCalendar from './MyCalendar';
import MyChart from './MyChart';
import FirebaseTest from './firebase_practice';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <MyCalendar />,
      },
      {
        path: 'calendar',
        element: <MyCalendar />,
      },
      {
        path: 'cha',
        element: <PracticeChakra />,
      },
      {
        path: 'chart',
        element: <MyChart />,
      },
    ],
  },
  {
    path: 'cha-another',
    element: <PracticeChakra />,
  },
  {
    path: 'fb',
    element: <FirebaseTest />,
  },
]);

export default router;
