# Issue list for Angular GitHub project

#### In this task you should implement an application similar to the issue list of “angular/angular” GitHub repo (https://github.com/angular/angular/issues). Feel free to implement your own simplified design and unique approach to this problem. There is no right or wrong solution. Your code should be self explanatory, but feel free to write comments if you feel that some part of the code is not that easily readable or understandable.
You can write it in Angular, React or in plain Javascript.

## Description:
First screen should show all available issues of “angular/angular” GitHub repo with these information shown:
state
title
comment count
issue number (starting with #)
valid date information, created at or closed at depends on state
These issues should be filterable by state and sortable by number of comments.

You should be able to visit any issue after clicking on it. There need to be this information shown:
state
title
body
comment count
issue number (starting with #)
valid date information, created at or closed at depends on state
optional: comments, all comments sorted from the newest to oldest with these information shown:
user photo
username
comment text

## Requirements:
- Issues need to be paginated.
- Issues need to be filterable by state.
- Issues need to be sortable by number of comments.
- There needs to be a README.md file with instructions on how to run your project.

# How to use this project

## Requirements
- computer
- node and npm
- angular/cli

## How to run
### npm install
### ng serve
### open ``localhost:4200``

## Room for improvement

- unit tests
- add search
- the project uses "search" api to find total count of issues and then uses different api to get the issues because of bug in GitHub api returning issues in "search" api in wrong order. So this could be maybe done different way, if GitHub fixes their api
- mobile support, right now due to time constraints the mobile lacks better support, but it should be working just fine
