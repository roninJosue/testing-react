import {useState, useEffect} from "react"

const APICall = () => {
  const [text, setText] = useState("")

  useEffect(() => {
    async function getSomeActivity() {
      try {
        let res = await fetch('http://www.boredapi.com/api/activity')
        let activity = await res.json()
        setText(activity.activity)
      } catch (e) {
        setText("=== Error while querying the API ===")
      }
    }

    getSomeActivity()
  }, [])

  return(
    <p data-testid='activity'>
      {text}
    </p>
  )
}

export default APICall