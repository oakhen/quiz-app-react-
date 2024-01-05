import { useEffect, useMemo, useRef, useState } from "react"
import "./app.css"
import Trivia from "./components/Trivia"
import Timer from "./components/Timer"

function App() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [timedOut, setTimedOut] = useState(false)
  // const [earned, setEarned] = useState("$ 0")

  const earned = useRef("$ 0")

  const prices = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1000" },
        { id: 6, amount: "$ 2000" },
        { id: 7, amount: "$ 4000" },
        { id: 8, amount: "$ 8000" },
        { id: 9, amount: "$ 16000" },
        { id: 10, amount: "$ 32000" },
        { id: 11, amount: "$ 64000" },
        { id: 12, amount: "$ 125000" },
        { id: 13, amount: "$ 250000" },
        { id: 14, amount: "$ 500000" },
        { id: 15, amount: "$ 1000000" },
      ].reverse(),
    [],
  )

  useEffect(() => {
    if (questionNumber > 1) {
      earned.current = prices.find((p) => p.id === questionNumber - 1).amount
    }
  }, [questionNumber])

  return (
    <div className="app">
      <div className="main">
        {timedOut ? (
          <h1 className="endtext">You Earned: {earned.current} </h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">
                <Timer
                  questionNumber={questionNumber}
                  setTimedOut={setTimedOut}
                />
              </div>
            </div>
            <div className="bottom">
              <Trivia
                setTimedOut={setTimedOut}
                setQuestionNumber={setQuestionNumber}
                questionNumber={questionNumber}
              />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {prices.map((p) => (
            <li
              key={p.id}
              className={
                questionNumber == p.id
                  ? "moneyListItem  active "
                  : "moneyListItem  "
              }
            >
              <span className="moneyListNumber">{p.id}</span>
              <span className="moneyListAmount">{p.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default App
