
const end_date='2020-07-13'



/**
 * 
 * @param {*дата конца акции - дедлайна} end_date 
 * @param {*селекторы куда выводить данные (дата - заголовок)} renders 
 * @param {*возможность задать заголовки - не обязательный параметр} titles 
 */

const timer=(end_date, renders, titles={ days: 'День Дней Дни', hours: 'Час Часов Часы', minutes: 'Минута Минут Минуты', seconds: 'Секунда Секунд Секунды' }) => {

  function _getTitles(data) {
    return data.split(' ')
  }

  function _convertDateTime(num) {
    return num<=9? Number('0'+num):num
  }
  function _convertDateTimeTitle(num, one, them, many) {
    let stringArray=String(num).split('')
    const last=+stringArray[stringArray.length-1]

    if (num===0) return them
    if (num>=5&&num<=20||(num>20&&(last===0||last>=5&&last<=9))) return them
    if (num===1||last===1) return one
    return many
  }


  function _getTime() {

    const time=Date.parse(end_date)-Date.parse(new Date())

    const days=_convertDateTime(Math.floor(time/(1000*60*60*24)))
    const title_days=_convertDateTimeTitle(days, _getTitles(titles.days)[0], _getTitles(titles.days)[1], _getTitles(titles.days)[2])

    const hours=_convertDateTime(Math.floor((time/(1000*60*60))%24))
    const title_hours=_convertDateTimeTitle(hours, _getTitles(titles.hours)[0], _getTitles(titles.hours)[1], _getTitles(titles.hours)[2])

    const minute=_convertDateTime(Math.floor((time/(1000*60))%60))
    const title_minutes=_convertDateTimeTitle(minute, _getTitles(titles.minutes)[0], _getTitles(titles.minutes)[1], _getTitles(titles.minutes)[2])

    const second=_convertDateTime(Math.floor((time/1000)%60))
    const title_second=_convertDateTimeTitle(second, _getTitles(titles.seconds)[0], _getTitles(titles.seconds)[1], _getTitles(titles.seconds)[2])
    return {

      d: { days, title_days },
      h: { hours, title_hours },
      m: { minute, title_minutes },
      s: { second, title_second },
      time,

    }
  }

  function _render_to_dom(timer) {
    const days=document.querySelector(renders.days)
    const daysTitle=document.querySelector(renders.daysTitle)

    const hours=document.querySelector(renders.hours)
    const hoursTitle=document.querySelector(renders.hoursTitle)

    const minutes=document.querySelector(renders.minutes)
    const minutesTitle=document.querySelector(renders.minutesTitle)

    const seconds=document.querySelector(renders.seconds)
    const secondsTitle=document.querySelector(renders.secondsTitle)

    if (days&&daysTitle) {
      days.innerHTML=timer.d.days
      daysTitle.innerHTML=timer.d.title_days
    }

    if (hours&&hoursTitle) {
      hours.innerHTML=timer.h.hours
      hoursTitle.innerHTML=timer.h.title_hours
    }

    if (minutes&&minutesTitle) {
      minutes.innerHTML=timer.m.minute
      minutesTitle.innerHTML=timer.m.title_minutes
    }

    if (seconds&&secondsTitle) {
      seconds.innerHTML=timer.s.second
      secondsTitle.innerHTML=timer.s.title_second
    }
  }
  const time=_getTime()
  _render_to_dom(time)

  const interval=setInterval(() => {
    const timer=_getTime()
    _render_to_dom(timer)
  }, 1000);

  if (end_date<=0) clearInterval(interval)

}

