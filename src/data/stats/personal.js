import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1992-11-09T07:00:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 2,
    link:
      '',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Toronto, ON, Canada',
  },
  {
    key: 'books',
    label: 'Books Read',
    value: '74',
    link: 'https://www.goodreads.com/review/list/13596881-akash-patel?ref=nav_mybooks&shelf=read',
  },
  {
    key: 'cycle',
    label: 'Kilometeres Bicycled',
    value: '10,146.8 km',
    link: 'https://www.strava.com/athletes/29223845',
  },
];

export default data;
