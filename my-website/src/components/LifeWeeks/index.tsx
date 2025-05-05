import React from 'react';
import styles from './styles.module.css';

interface WeekCircleProps {
  isPast: boolean;
  isCurrent: boolean;
  date: Date;
}

const WeekCircle: React.FC<WeekCircleProps> = ({ isPast, isCurrent, date }) => (
  <div 
    className={`${styles.circle} ${isPast ? styles.past : ''} ${isCurrent ? styles.current : ''}`}
    title={date.toLocaleDateString('en-US', { 
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })}
  />
);

export default function LifeWeeks(): JSX.Element {
  const birthDate = new Date('2003-03-27');
  const today = new Date('2025-05-05');
  const totalWeeks = 4500;

  const getWeeksBetweenDates = (start: Date, end: Date): number => {
    return Math.floor((end.getTime() - start.getTime()) / (7 * 24 * 60 * 60 * 1000));
  };

  const getDateFromWeekOffset = (startDate: Date, weekOffset: number): Date => {
    const date = new Date(startDate);
    date.setDate(date.getDate() + weekOffset * 7);
    return date;
  };

  const weeksLived = getWeeksBetweenDates(birthDate, today);

    const weeks = Array.from({ length: totalWeeks }, (_, i) => {
        const currentDate = getDateFromWeekOffset(birthDate, i);
        const nextDate = getDateFromWeekOffset(birthDate, i+1);
        const afterMonth = 
            (nextDate.getMonth() > birthDate.getMonth()) ||
            (
                nextDate.getMonth() == birthDate.getMonth() && 
                nextDate.getDate() >= birthDate.getDate()
            )
        const yearsSinceBirth = nextDate.getFullYear() - birthDate.getFullYear() + Number(afterMonth);
        return {
            isPast: i < weeksLived,
            isCurrent: i === weeksLived,
            date: currentDate,
            endDate: getDateFromWeekOffset(birthDate, i + 1),
            year: yearsSinceBirth,
        };
    });

  return (
    <div className={styles.container}>
    <div className={styles.grid}>
      {Object.entries(
        weeks.reduce((acc, week) => {
        if (!acc[week.year]) acc[week.year] = [];
        acc[week.year].push(week);
        return acc;
        }, {} as Record<number, typeof weeks>)
      ).map(([year, yearWeeks]) => (
        <div key={year} className={styles.yearRow}>
        <span className={styles.yearLabel}>{year-1}</span>
        {yearWeeks.map((week, index) => (
          <WeekCircle
            key={index}
            isPast={week.isPast}
            isCurrent={week.isCurrent}
            date={week.date}
          />
        ))}
        </div>
      ))}
    </div>
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <WeekCircle isPast={true} isCurrent={false} date={new Date()} />
          <span>Past weeks</span>
        </div>
        <div className={styles.legendItem}>
          <WeekCircle isPast={false} isCurrent={true} date={new Date()} />
          <span>Current week</span>
        </div>
        <div className={styles.legendItem}>
          <WeekCircle isPast={false} isCurrent={false} date={new Date()} />
          <span>Future weeks</span>
        </div>
      </div>
    </div>
  );
}
