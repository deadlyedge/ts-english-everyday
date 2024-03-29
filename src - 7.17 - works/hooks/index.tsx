import axios from "axios"
import { v4 as uuid } from "uuid"
import { useEffect, useState } from "react"

function useTranslate(ask: string): string {
  // use microsoft azure translate api
  const subscriptionKey = ''
  const location = "japaneast"
  const endpoint = "https://api.cognitive.microsofttranslator.com"

  const [answer, setAnswer] = useState("")

  const getAnswer = () => {
    axios({
      baseURL: endpoint,
      url: "/translate",
      method: "post",
      headers: {
        "Ocp-Apim-Subscription-Key": subscriptionKey,
        "Ocp-Apim-Subscription-Region": location,
        "Content-type": "application/json",
        "X-ClientTraceId": uuid(),
      },
      params: {
        "api-version": "3.0",
        to: "zh-Hans",
      },
      data: [
        {
          text: ask,
        },
      ],
      responseType: "json",
    }).then((response) => {
      const [
        {
          translations: [{ text: data }],
        },
      ] = response.data // 解构赋值
      setAnswer(data)
    })
  }

  useEffect(() => {
    getAnswer()
  }, [ask])

  return answer
}

function useToday(id: string = uuid()): string {
  const API = "http://numbersapi.com/"
  const TODAY = new Date()
  const ask = API + (TODAY.getMonth() + 1) + "/" + TODAY.getDate() + "/date"

  const [answer, setAnswer] = useState("")

  const getAnswer = () => {
    axios
      .get(ask)
      .then((response) => {
        setAnswer(response.data)
      })
      .catch((error) => console.error(`Error: ${error}`))
  }

  useEffect(() => {
    getAnswer()
  }, [id])

  return answer
}

function useImage(ask: string): string {
  const API = "https://pixabay.com/api/"
  const key = ''
  const params = {
    key,
    q: ask,
    orientation: "horizontal",
    editors_choice: true,
    safesearch: true,
    order: "latest",
    per_page: 5,
  }
  const [answer, setAnswer] = useState("")
  console.log("ask for word: ", ask)

  const getAnswer = () => {
    axios
      .get(API, { params })
      .then((response) => {
        let {
          hits: [imageList],
        } = response.data
        // console.log("imageURL: ", imageList.webformatURL)
        setAnswer(imageList.webformatURL)
      })
      .catch(() => {
        setAnswer("/images/just-art.jpg")
      })
  }

  useEffect(() => {
    getAnswer()
  }, [ask])

  return answer as string
}

function useDeepLTranslate(ask: string): string {
  const auth_key = ''
  const API = "https://api-free.deepl.com/v2/translate"
  const params = {
    auth_key,
    text: ask,
    target_lang: "ZH",
  }
  const [answer, setAnswer] = useState("")
  console.log("to be translated: ", ask)

  const getAnswer = () => {
    axios
      .get(API, { params })
      .then((response) => {
        let {
          translations: [{ text: data }],
        } = response.data
        setAnswer(data)
      })
      .catch(() => {
        setAnswer("something wrong!")
      })
  }
  useEffect(() => {
    getAnswer()
  }, [ask])

  return answer
}

export { useTranslate, useToday, useImage, useDeepLTranslate }
