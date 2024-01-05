import { useEffect, useState } from "react"

function Timer({ questionNumber, setTimedOut }) {
  const [time, setTime] = useState(30)

  useEffect(() => {
    if (time === 0) {
      setTimedOut(true)
    }
    const interval = setInterval(() => {
      setTime((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [time])

  useEffect(() => {
    setTime(30)
  }, [questionNumber])

  return time
}
export default Timer
