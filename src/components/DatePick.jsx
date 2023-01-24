import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { getMonth, getYear } from 'date-fns'
import { Link } from 'react-router-dom'
var range = require('lodash.range')
const DatePick = (props) => {
  const [startDate, setStartDate] = useState(new Date())

  const years = range(1920, getYear(new Date()) + 1, 1)
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  return (
    <DatePicker
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div
          style={{
            margin: 10,
            display: 'flex',
            justifyContent: 'center',
            // marginRight: 4,
            // backgroundColor: 'red',
          }}
        >
          <Link
            style={{
              marginRight: 6,
              marginTop: 3,
              fontWeight: 'bolder',
              fontSize: 16,
            }}
            to='#'
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
          >
            {'<'}
          </Link>
          <select
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            value={months[getMonth(date)]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <Link
            style={{
              marginLeft: 6,
              marginTop: 3,
              fontWeight: 'bolder',
              fontSize: 16,
            }}
            to='#'
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
          >
            {'>'}
          </Link>
        </div>
      )}
      selected={props?.dob}
      onChange={(dob) => props?.setdob(dob)}
    />
  )
}

export default DatePick
