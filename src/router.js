import { createBrowserRouter } from 'react-router-dom';
import MyCalendar from './MyCalendar';
import PracticeChakra from './PracticeChakra';
import Root from './Root';

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
        path: 'cha',
        element: <PracticeChakra />,
      },
    ],
  },
  {
    path: 'cha-another',
    element: <PracticeChakra />,
  },
]);

export default router;
