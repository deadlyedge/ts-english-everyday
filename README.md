# About

This project is based on a python flask learning project which has been made years ago. At first, it is just a test for connecting to an API backend to collect some fun sentences. Thanks to `numbersapi.com`, I do have fun.

So, when I start learning reactjs, I think it's a good way to rewrite this little app with react to improve my understandings.

I'm really a beginner both in typescript and react, the codes may not seems smooth, I hope I could make it better with time I spend on them more in the future.

# Some personal thinking

- typescript is better than js, it may hard to start, but it could save plenty of time with the project's debug or growth
- tailwind is good, flowbite is good place to learn tailwind, especially when you want to do designing and coding at the same time.

# Some tips

main functions and states are in `CardList.tsx`, it calls `reducer.ts` for CRUD operations.

if you want to run it locally, you'll need a `.env` file presenting API keys, which needed by deepl and pixabay and maybe others, it should look like:
```env
VITE_KEY_OF_PIXABAY = ...
VITE_KEY_OF_AZURE = ...
VITE_KEY_OF_DEEPL = ...
```

# todo list

Someone think it's better to have some chinese to english translation functions, but I just can't find any free API for intereting chinese sentences, maybe later.

# Thanks

Thanks for these API developers, may they have long long life.
 - 'Today in history' from numbersapi.com 
 - 'Quotes' from quote-garden and favqs.com 
 - 'Images' from pixabay.com 
 - 'translate' by deepl.com and microsoft azure
