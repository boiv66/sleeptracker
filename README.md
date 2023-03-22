--Readme document for *author(s)*, *email(s)*, *UCI id(s)*--

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

21/20
- 2/2 The ability to log overnight sleep
- 2/2 The ability to log sleepiness during the day
- 2/2 The ability to view these two categories of logged data
- 4/4 Either using a native device resource or backing up logged data
- 4/4 Following good principles of mobile design
- 4/4 Creating a compelling app
- 2/2 A readme and demo video which explains how these features were implemented and their design rationale
- 1/2 Doing analytic graph for the sleep data (allow user to compare their sleep over a week and analyze their sleepiness during the day)
2. How long, in hours, did it take you to complete this assignment?
- It took me approximately 20 hours to complete this assignment. 


3. What online resources did you consult when completing this assignment? (list specific URLs)
- W3school
- Stackoverflow 
- MDN 
- Ionic documentation 
- Chart.js documentation 
- Icolorpalette: https://icolorpalette.com/color/03b7a7
- Code.tutsplus.com : https://code.tutsplus.com/tutorials/getting-started-with-chartjs-radar-and-polar-area-charts--cms-28444
- Javascript Plain English: https://javascript.plainenglish.io/how-to-get-the-week-of-year-of-a-given-date-in-javascript-c8fe0d764b5d


4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
- No, I did it myself.



5. Is there anything special we need to know in order to run your code?
- Please refer to the zoom recording link I attatched to watch my demo video: https://uci.zoom.us/rec/share/nN88ey5x5Lln0tQnOBSknrsnsRCYqH_hrQAICgONPOqoLQbqudhUlQKryTWTP5o.HWT222PBkggBnq0Y?startTime=1669021212000


--Aim for no more than two sentences for each of the following questions.--


6. Did you design your app with a particular type of user in mind? If so, whom?
- User who use digital device quite frequently that able to log the data every day. 


7. Did you design your app specifically for iOS or Android, or both?
- I designed for both IOS and Android, even though the interface is a little bit different. 


8. How can a person log overnight sleep in your app? Why did you choose to support logging overnight sleep in this way?
- The person can logged the overight sleep real time when they start to sleep (hitting "Start sleep" button), and when they wake up, 
they can press "end sleep" button. Otherwise, when they forgot to log the sleep, they can enter it manually by logging the time they 
went to sleep (startTime) and time they woke up (endTime). 


9. How can a person log sleepiness during the day in your app? Why did you choose to support logging sleepiness in this way?
- After a person open the app and switch to sleepiness tab, they can choose their sleepiness 
from the provided description of scale. I chose to do it this way because it provides 
users'convenience. They can start to logged their sleepiness right away without manually entering 
the logged time.  


10. How can a person view the data they logged in your app? Why did you choose to support viewing logged data in this way?
- The person can view the data by switching to "profile" tab, and see their analyzed sleep data that is categorized
by day (today) and for that week. I illustrated the data as a graph so user can visualize their sleep 
information (not having to read the long boring table log text)


11. Which feature choose--using a native device resource, backing up logged data, or both?
- I chose the option backing up logged data. 


12. If you used a native device resource, what feature did you add? How does this feature change the app's experience for a user?
- I did not choose native device resource


13. If you backed up logged data, where does it back up to?
- I choose browser's local storage. 

14. How does your app implement or follow principles of good mobile design?
- I make the app simplified with a vivid task needed to be done.
- Consistent design with main theme color of purple.
- Minimize input (recognizing by choosing from the range of provided input rather than have to enter by their own, easy recall)
- Error prevention (with the invalid time input for start time and end time manually, show the error message)
