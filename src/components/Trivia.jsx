import { useEffect, useState } from "react"
import { questions } from "../data"

import play from "../sounds/play.mp3"

import correct from "../sounds/correct.mp3"
import wait from "../sounds/wait.mp3"
import wrong from "../sounds/wrong.mp3"
import useSound from "use-sound"

function Trivia({ setTimedOut, setQuestionNumber, questionNumber }) {
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [seletedAnswer, setSeletedAnswer] = useState(null)
  const [className, setClassName] = useState("answer ")

  const [letsplay] = useSound(play, { volume: 0.25 })
  const [correctAns] = useSound(correct, { volume: 0.25 })
  const [wrongAns] = useSound(wrong, { volume: 0.25 })
  const [waitabit] = useSound(wait, { volume: 0.25 })

  useEffect(() => {
    letsplay()
  }, [letsplay])

  useEffect(() => {
    setCurrentQuestion(questions[questionNumber - 1])
  }, [questionNumber, questions])

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback()
    }, duration)
  }

  return (
    <div className="trivia">
      <div className="question">{currentQuestion?.question}</div>

      <div className="answers">
        {currentQuestion?.answers.map((a, i) => (
          <div
            key={i}
            onClick={() => {
              setSeletedAnswer(a)
              setClassName("answer active")
              delay(1000, () =>
                setClassName(a.correct ? "answer correct" : "answer wrong"),
              )

              delay(2000, () => {
                if (a.correct) {
                  correctAns()
                  delay(2000, () => {
                    setQuestionNumber((prev) => prev + 1)
                    setSeletedAnswer(null)
                  })
                } else {
                  wrongAns()
                  delay(2000, () => {
                    setTimedOut(true)
                  })
                }
              })
            }}
            className={seletedAnswer === a ? className : "answer"}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  )
}
export default Trivia
