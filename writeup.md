### What would you do to convert this into a full scale web application
- Build a beautiful interactive UI.
- Manage pagination in different tabs.
- Make use of excel like functionalities so that parsing of data should be simple.
- I will also make use of Redis cache database to make it faster to response.
- Cache decisions will be dependant upon time of the user query.
  - Example: If the query is at night, possibility of a food trucks location change is lower and so those events can be cached.
  - I can see that the database has not many food trucks that are open at odd hour, and thus I can probably have a scheduled job, that modifies my cache every 15 minutes and then when a user queries, instead of firing a network request, I can just render the cache.

### Differences between a command line program and a web application
- A web application is for people with no or less technical exposure where as command line program is for people with a little technical background
- A web application can be very interactive, we can add images related to food trucks and display. This will help generate revenue for the business and increase their earning as well.
- But in command line program it is very hard to render graphics on terminal, and the effort has no business value
- Its easy to scale and distrubite compared to a CMD utility.
