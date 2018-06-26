# food-truck-finder
Redfin Take Home Coding Challenge
## Overview

The goal of this is to write a simple command-line JavaScript program that will print out a list of food trucks,
given a source of food truck data from the San Francisco government’s API.

## The Task
### Data
The San Francisco government’s website has a public data source of food trucks
(https://data.sfgov.org/Economy-and-Community/Mobile-Food-Schedule/jjew-r69b). The data
can be accessed in a number of forms, including JSON, CSV, and XML. How you access the
data is up to you, but you can find some useful information about making an API request to this
data source here (https://dev.socrata.com/foundry/data.sfgov.org/bbb8-hzi6).
### The Problem
Write a command line program that prints out a list of food trucks that are open at the current
date, when the program is being run. So if I run the program at noon on a Friday, I should see a
list of all the food trucks that are open then.

### Example
```
$ show-open-food-trucks
NAME                  ADDRESS
Mang Hang Catering    1 Thomas More Way
Steve’s Mobile Deli   145 King Street
```
## Steps to use this program

- make sure you have working version of node installed
  - use ` node -v` to check the version
  - If you have node not installed please install it.
  - Please upgrade your node and npm as well to the latest version from their websites
  - you can also try this command as well to upgrade your node `npm-windows-upgrade` or `npm i -g npm`. Please visit their website for more information
  - Ideally the node version should be v8.9.4 and npm version should be v6.1.0 or better
  
- The API usage is quantified and thus you will need to get the token for heavy usage from API website [here](https://dev.socrata.com/docs/app-tokens.html)

- git clone this repository

- make sure you have sudo rights on your machine

- go to the project directory and run `npm link`

- use the command `show-open-food-trucks` from anywhere in the terminal, you will find result on the terminal.
  - the displayed result has pagination involved and thus you will see 10 records in alphabetical order, press any button to fetch next 10 records.
  - repeat till last record is displayed
  
- If you want to no longer use this command in your linux terminal, go to project directory and use `npm unlink`

## Potential Modification
- We can modify this CMD script in such a way that it can accpt any time instead of systime, and we can produce the result of open food trucks at that time.
- we can extend command pool to include `open $FOOD_TRUCK_NAME` and then can redirect to vendor website.
