const timeZone = [
    {
      "offset": -10,
      "text": "(UTC-10:00) Hawaii"
    },
    {
      "offset": -9,
      "text": "(UTC-09:00) Alaska"
    },
    {
      "offset": -8,
      "text": "(UTC-08:00) Pacific Time (US & Canada)"
    },
    {
      "offset": -7,
      "text": "(UTC-07:00) Mountain Time (US & Canada)"
    },
    {
      "offset": -6,
      "text": "(UTC-06:00) Central Time (US & Canada)"
    },
    {
      "offset": -5,
      "text": "(UTC-05:00) Eastern Time (US & Canada)"
    },
    {
      "offset": -4,
      "text": "(UTC-04:00) Atlantic Time (Canada)"
    },
    {
      "offset": -3,
      "text": "(UTC-03:00) Buenos Aires, Georgetown"
    },
    {
      "offset": -2,
      "text": "(UTC-02:00) Mid-Atlantic"
    },
    {
      "offset": -1,
      "text": "(UTC-01:00) Azores"
    },
    {
      "offset": 0,
      "text": "(UTC+00:00) London, Lisbon, Casablanca"
    },
    {
      "offset": 1,
      "text": "(UTC+01:00) Amsterdam, Berlin, Rome, Stockholm"
    },
    {
      "offset": 2,
      "text": "(UTC+02:00) Athens, Helsinki, Istanbul"
    },
    {
      "offset": 3,
      "text": "(UTC+03:00) Moscow, St. Petersburg, Volgograd"
    },
    {
      "offset": 4,
      "text": "(UTC+04:00) Dubai, Baku, Tbilisi"
    },
    {
      "offset": 5,
      "text": "(UTC+05:00) Islamabad, Karachi, Tashkent"
    },
    {
      "offset": 6,
      "text": "(UTC+06:00) Astana, Almaty, Dhaka"
    },
    {
      "offset": 7,
      "text": "(UTC+07:00) Bangkok, Jakarta, Hanoi"
    },
    {
      "offset": 8,
      "text": "(UTC+08:00) Beijing, Hong Kong, Perth"
    },
    {
      "offset": 9,
      "text": "(UTC+09:00) Tokyo, Seoul, Osaka"
    },
    {
      "offset": 10,
      "text": "(UTC+10:00) Brisbane, Sydney, Melbourne"
    }
  ];
  

const timeZoneContainer = document.getElementById('timeZone');
const ms_hour = 1000* 60 * 60;

for(const zone of timeZone){
    let datos = `${zone.text} `;
    let hour = `<span class="hour"> :${calculateTimeZone(zone.offset)} </span>`;
    timeZoneContainer.innerHTML += `<div class="timezone">${datos}${hour}</div>`;
  }

function calculateTimeZone(offset){
    const today = new Date();
    const utc = today.getTime();
    const zoneTime = new Date(utc +(offset * ms_hour));
    return zoneTime.toLocaleString();
}