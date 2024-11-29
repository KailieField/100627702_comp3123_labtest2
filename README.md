COMP 3123 | LAB TEST 2 | WEATHER APP

For this Full-Stack Lab Test, we were tasked with creating a weather application that was: simple, user friendly and allowed users to input a city of their choice and have the weather details returned to them. 

Our focus was to implement our learnings with reference to ReactJS, API Integration, Axios or Fetch to handle said API calls, functions and class component (if desired both), React features and give the application a look by implementing our UI/UX flare. 

There were a few challenges that I had faced and by 
‘a few’… I mean…I faced more errors than I had anticipate… which ultimately took a toll on my UI/UX implementations and intentions… and as someone who thoroughly prefers to work within the Front-End of development…my plans were foiled and I myself flustered. 


 
[My Application & Logic]

I prefer structure, I need to have direct eyes on what it is that I am working with, without issue…which has posed a great learning curve most certainly. 

Let’s start with the basic logic. 

Search & Debouncing Logic
I knew that there was a limit on API calls out the gate, it says so on the website when it tries to convince you to buy a plan. 
So I implemented a custom hook ‘useWeatherDebounce’ that’s main functionality was and is to handle delays while triggering the API call as SOON as the user stops typing. Then the query is updated, creating a reduced load on the API requests being sent and responsive searches. 

Component Logic
Reusibility. Reusibility. Reusibility.
Found throughout the application more notably within WeatherReport and ForecastReport where both handle states and errors respectively as each component focuses on its individual tasking – this helped most certainly with debugging as I have to do that a lot and with that – readability.

Error Handling Logic
I wanted to prevent crashing as much as possible, I know that I tend to go head first into code and by way of that, often bring more turmoil to myself. That said, I have become very accustomed to QA and error handling, providing return messages to communicate with user ad ensure the app remained functional even during those API errors that I brought upon myself. 

API Integration Logic
I used axios to simplify the API requests with a centralized configuration in the API.js, this allowed for me to dynamically construct URLs with query parameters (like DEFAULT_CITY and API_KEY)

Centralized Constants
By centralizing my constants I avoided hardcoding values entirely, mostly because it makes more sense…it is also the very essence of object oriented programming and thus, why not assign the things you need the most and store them and use them when you need? Also… reducing errors is something I prefer. 




[ERRORS FACED]

‘onError Not a Function’
Originally this was intended to be a callback in the useWeatherDebounce hook. I thought I would create something that handled API errors dynamically.

By separating this concern, I had intended to provide flexibility to other components within the project creating a more robust and refined way for each component to ultimately tackle their own error handling logic. 

onError ultimately caused a runtime error when it wasn’t properly passed as a function, this also went in line with the exact reason I ended up getting blocked on the API Key website…it not only wasn’t being passed properly but my query itself was continuously being queried…which meant that the calls were constant and nothing was being stopped or effectively…handled.

In the end, I had to refactor the useWeatherDebounce hook and simplify the error handling to the point where it almost felt moot to begin with…a hit to my pride. 

I had to sacrifice said flexibility, considering I had spent way too long on the rest of my errors and was now facing a time constraint. 

I now understand that while separating concerns is ideal for things such as scalability…simplicity is often the most affective avenue. 

API KEY ISSUES
This became the bane of my existence. 
‘Invalid API Key’ or ‘Rate Limit Exceeded’ instilled a new sense of trauma, but ultimately, I had to get crafty and employ an alternative email approach…ditching the original that I had signed up with and issue a brand new key without red on its ledger. 

But luckily, considering I had simplified my debounce hook, I was able to limit API calls and avoid exceeding the rate limit... I also learned my lesson when it came to getting too excited about separating concerns.

A few notable mentions:
-	Debounce Logic Errors
-	Missing Data Handling
-	Styling and Layout Issues (ultimately ditching the idea of a pretty CSS)
-	Console Logs Behaving erratically (tipping me off to the constant API calls)

thank you very much for this lab. it was good. I do wish I didnt cause myself so much trouble and would be able to really get the CSS integrated more seamlessly and with a more visually appealing look, but I sacrificed this as I felt the logic and functionality 
should always take precedence. 

![image](https://github.com/user-attachments/assets/845555bf-54e1-4797-a7a6-3aee00b3e2f5)
