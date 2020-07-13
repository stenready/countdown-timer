# countdown-timer


<p>
  Countdown timer until the end of the promotion
</p>
<p>
  Таймер обратного отсчёта до конца акции
</p>

## Installation

```bash
npm i timer_sten_ready
```

## Usage
<h3>@params</h3>
<p>
  date - promotion end date (string)
</p>
<p>
  renderer - where to draw (object)
</p>
<p>
  headers - DEFAULT  { days: 'День Дней Дни', hours: 'Час Часов Часы', minutes: 'Минута Минут Минуты', seconds: 'Секунда Секунд Секунды' } (object)
</p>

```javascript
timer(
  '2020-08-10',
  {
    days: '.days',
    daysTitle: '.days_title',
  
    hours: '.hours',
    hoursTitle: '.hours_title',
  
    minutes: '.minutes',
    minutesTitle: '.minutes_title',
  
    seconds: '.seconds',
    secondsTitle: '.seconds_title',
  
  }
)
```

## Contributing
<p>
  We also convert the headers into an understandable timer, depending on the number.
</p>
<p>
  Заголовки конвертируются в понятный вид. У Вас не будет 2 дней 8 минуты
</p>

##Author
<p>
  https://github.com/stenready
</p>
<p>
  mastars2319@gmail.com
</p>

