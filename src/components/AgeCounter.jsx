import { useEffect, useState } from "react";

const BIRTH_DATE = new Date("2002-09-27T00:00:00");

function calculateAge(birthDate, now) {
  let years = now.getFullYear() - birthDate.getFullYear();

  let anniversary = new Date(
    birthDate.getFullYear() + years,
    birthDate.getMonth(),
    birthDate.getDate(),
    birthDate.getHours(),
    birthDate.getMinutes(),
    birthDate.getSeconds(),
  );

  if (anniversary > now) {
    years -= 1;
    anniversary = new Date(
      birthDate.getFullYear() + years,
      birthDate.getMonth(),
      birthDate.getDate(),
      birthDate.getHours(),
      birthDate.getMinutes(),
      birthDate.getSeconds(),
    );
  }

  let months = now.getMonth() - anniversary.getMonth();
  const beforeMonthAnniversary =
    now.getDate() < anniversary.getDate() ||
    (now.getDate() === anniversary.getDate() &&
      (now.getHours() < anniversary.getHours() ||
        (now.getHours() === anniversary.getHours() &&
          (now.getMinutes() < anniversary.getMinutes() ||
            (now.getMinutes() === anniversary.getMinutes() &&
              now.getSeconds() < anniversary.getSeconds())))));

  if (beforeMonthAnniversary) months -= 1;
  if (months < 0) months += 12;

  const monthAnchor = new Date(
    anniversary.getFullYear(),
    anniversary.getMonth() + months,
    anniversary.getDate(),
    anniversary.getHours(),
    anniversary.getMinutes(),
    anniversary.getSeconds(),
  );

  let remaining = Math.max(0, now - monthAnchor);
  const SECOND = 1000;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;

  const days = Math.floor(remaining / DAY);
  remaining %= DAY;
  const hours = Math.floor(remaining / HOUR);
  remaining %= HOUR;
  const minutes = Math.floor(remaining / MINUTE);
  remaining %= MINUTE;
  const seconds = Math.floor(remaining / SECOND);

  return { years, months, days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, "0");
}

export default function AgeCounter() {
  const [age, setAge] = useState(() => calculateAge(BIRTH_DATE, new Date()));

  useEffect(() => {
    const timer = setInterval(() => {
      setAge(calculateAge(BIRTH_DATE, new Date()));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="age-section" id="age">
      <div className="section-label">THE AGE OF AN ICON</div>

      <div className="age-number">{age.years}</div>

      <div className="age-label">YEARS OLD</div>

      <div className="age-timer">
        <div><strong>{age.years}</strong><span>YEARS</span></div>
        <div><strong>{pad(age.months)}</strong><span>MONTHS</span></div>
        <div><strong>{pad(age.days)}</strong><span>DAYS</span></div>
        <div><strong>{pad(age.hours)}</strong><span>HOURS</span></div>
        <div><strong>{pad(age.minutes)}</strong><span>MINUTES</span></div>
        <div><strong>{pad(age.seconds)}</strong><span>SECONDS</span></div>
      </div>

      <p className="age-note">
        A live calendar age — continuously updated from September 27, 2002.
      </p>
    </section>
  );
}
