import axios from "axios"
import { v4 as uuid } from "uuid"

// get 'today in history' from numbersapi.com
const getToday = async (): Promise<string> => {
  const API = "https://numbers.zick.me/"
  // const API = "http://numbersapi.com/"
  const TODAY = new Date()
  const ask = API + (TODAY.getMonth() + 1) + "/" + TODAY.getDate() + "/date"

  try {
    const response = await axios.get(ask)
    return response.data
  } catch (error) {
    return ("some today wrong! " + error)
  }
}

// get quotes from quote-garden
const getQuotes = async (): Promise<string> => {
  const API = "https://quote-garden.herokuapp.com/api/v3/quotes/random"

  try {
    const response = await axios.get(API)
    let { data: [{ quoteText: quote, quoteAuthor: author }] } = response.data
    return quote + ' -- ' + author
  } catch (error) {
    return ("some dogs wrong! " + error)
  }
}

// another quotes api from favqs.com... 
// sorry I just can't find any funny sentences else
const getQuotes2 = async (): Promise<string> => {
  const API = "https://favqs.com/api/qotd"

  try {
    const response = await axios.get(API)
    let { quote: { body: quote, author: author } } = response.data
    return quote + ' -- ' + author
  } catch (error) {
    return ("some dogs wrong! " + error)
  }
}

// get image from pixabay.com
const getImage = async (ask: string): Promise<string> => {
  const API = "https://pixabay.com/api/"
  const key = import.meta.env.VITE_KEY_OF_PIXABAY
  const params = {
    key,
    q: ask,
    orientation: "horizontal",
    editors_choice: true,
    safesearch: true,
    order: "latest",
    per_page: 5,
  }
  console.log("ask for word: ", ask)

  try {
    const response = await axios.get(API, { params })
    let { hits: [imageList], } = response.data
    console.log("imageURL: ", imageList.webformatURL)
    return imageList.webformatURL
  } catch (error) {
    return ("/images/just-art.jpg")
    // return ("something wrong! " + error)
  }
}

// use deepL translate api
const getDeepLTranslate = async (ask: string): Promise<string> => {
  const auth_key = import.meta.env.VITE_KEY_OF_DEEPL
  const API = "https://api-free.deepl.com/v2/translate"
  const params = {
    auth_key,
    text: ask,
    target_lang: "ZH",
  }
  console.log("to be translated: ", ask)
  try {
    const response = await axios.get(API, { params })
    let {
      translations: [{ text: returnData }], } = response.data
    console.log("deepL translated: ", returnData)
    return returnData
  } catch (error) {
    return ("something wrong! " + error)
  }
}

// use microsoft azure translate api
const getAzureTranslate = async (ask: string): Promise<string> => {
  const subscriptionKey = import.meta.env.VITE_KEY_OF_AZURE
  const location = "japaneast"
  const endpoint = "https://api.cognitive.microsofttranslator.com"

  try {
    const response = await axios({
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
    })
    let [
      {
        translations: [{ text: returnData }],
      },
    ] = response.data // 解构赋值
    console.log("azure translated: ", returnData)
    return returnData
  } catch (error) {
    return ("something wrong! " + error)
  }
}

export {
  getDeepLTranslate,
  // getAzureTranslate,
  getToday,
  getImage,
  getQuotes,
  getQuotes2,
}