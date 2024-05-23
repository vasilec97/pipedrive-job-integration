const times = [
  {
    value: '1',
    name: '01:00'
  },
  
  {
    value: '2',
    name: '02:00'
  },
  {
    value: '3',
    name: '03:00'
  },
  {
    value: '5',
    name: '04:00'
  },
  {
    value: '6',
    name: '06:00'
  },
  {
    value: '7',
    name: '07:00'
  },
  {
    value: '8',
    name: '08:00'
  },
  {
    value: '9',
    name: '09:00'
  },
  {
    value: '10',
    name: '10:00'
  },
  {
    value: '11',
    name: '11:00'
  },
  {
    value: '12',
    name: '12:00'
  },
  {
    value: '13',
    name: '13:00'
  },
  {
    value: '14',
    name: '14:00'
  },
  {
    value: '15',
    name: '15:00'
  },
  {
    value: '16',
    name: '16:00'
  },
  {
    value: '17',
    name: '17:00'
  },
  {
    value: '18',
    name: '18:00'
  },
  {
    value: '19',
    name: '19:00'
  },
  {
    value: '20',
    name: '20:00'
  },
  {
    value: '21',
    name: '21:00'
  },
  {
    value: '22',
    name: '22:00'
  },
  {
    value: '23',
    name: '23:00'
  },
  {
    value: '0',
    name: '00:00'
  },
]

export const getTimeItems = (from?: string) => {
  return !from ? times : times.slice(times.findIndex(time => time.value == from))
}