# countdown-timer
простой таймер на Ваш сайт
Делает обратный отсчёт до акции

timer(end_date, {
  days: '.days',
  daysTitle: '.days_title',

  hours: '.hours',
  hoursTitle: '.hours_title',

  minutes: '.minutes',
  minutesTitle: '.minutes_title',

  seconds: '.seconds',
  secondsTitle: '.seconds_title',

})

timer(дата конца акции, куда рендерим заголовок и таймер, заголовки DEFAULT: { days: 'День Дней Дни', hours: 'Час Часов Часы', minutes: 'Минута Минут Минуты', seconds: 'Секунда Секунд Секунды' })

Также таймер конвертируем заголовки в понятный вид в зависимости от числа. У вас не будет 2 дни, 10 минуты
