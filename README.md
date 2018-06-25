# food-truck-finder
Redfin Take Home Coding Challenge
## Overview

The goal of this is to write a simple command-line program that will print out a list of food trucks,
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
