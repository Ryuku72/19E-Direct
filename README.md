![GitHub last commit](https://img.shields.io/github/last-commit/Ryuku72/19E-Direct?style=for-the-badge)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/Ryuku72/19E-Direct?style=for-the-badge)
![GitHub contributors](https://img.shields.io/github/contributors/Ryuku72/19E-Direct?style=for-the-badge)

# 19E-direct
# Homework W19: Employee Directory
9th July 2020

### Working Project Example
https://jkbedirect.herokuapp.com/

### Aim
Create a Employee Directory with React that breaks up the application UI into components, manages component state and respond to user events.

## Contents

* [Introduction](#intro)
* [Build Process](#build)
* [Project Issues](#issues)
* [Installation](#install)
* [Additional Information](#add)

<a name="intro"></a>

## User Story
As a USER, I want to be able to view my entire employee directory at once so that I have quick access to their information.

## Business Context
An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter employees by name.

## Key Concepts for Employee Directory
* React
* Create React App
* Components
* JSX
* JSX variables
* Props
* React Hooks

<a name="build"></a>

## Build Process 

Employee Direct was designed under the backbone of Week19 Activities `Friend Refactor`, `PupSterApp` and `FunwithForms` as well as Week20 Activities `useEffect`, `PropDrilling` and `UseRef`. Week19 activites were used to understand the basic mindset of how to approach React through components, state and router whilst Week20 offered `React Hooks`. From there it was about reviewing past activites and how to utilize a database.

As this activity did not require the use of `Express` or a database like `MongoDB` or `mySql` I looked at old Homework activites in Week 11 where we used a `JSON` file for our Database. The next point of attack was as follows.

1. Build a database inside a JSON file that has properties that can be referenced
2. Create and research a number of functions to filter (`Some`, `Map`, `filter`, `Sort`, `Includes`, `IndexOf` and many others.)
3. Build page that uses a search feild to find information
4. Break down the components as the page is being built that are reusable 
5. Import `TailWindCSS` and start to style
6. Experiment further with `React Hooks` to make dynamic buttons and layouts

<a name="issues"></a>

## Project Issues

Filtering information, necessity behind breaking down components and using React Hooks were the main area of problem solving. Whilst I am very pleased with the outcome of this project a large portion of my time was spent filtering my JSON file for information then mapping those results to a new Object Array. The remaining problems are as follows.

1. Many functions are repeated. Need to implement `useContext`
2. Experimented with `useRef` and could go further
3. Want to make the drop down boxes actually drop downs upon hover using `useRef` but was unsucessful. Core issue was that once I hovered away from the button the menu would close. Adding a delay only caused futher problems and `onClick` did not look right in the end. Rolled back my changes and went with a simple `onClick` feature
4. Not mobile friendly
5. Not all transitions on elements work. For example `Cards` and `Pages`. Whilst I have reviewed how to approach this situation I am yet to experiment with `React Packages`. 
6. Want to add `Express.JS` and an actually database to this project
7. Does not use CRUD. Need to be able to Create and Update. Will do this at a later point

1. Download the repo from Github
```
https://github.com/Ryuku72/19e-direct.git
```
2. Inside the project folder
```
npm install
npm start 
```

Alternatively visit the Herokuy page @ https://jkbedirect.herokuapp.com/

<a name="add"></a>

## Additional Information
### Tests
* Eslint

### License
Licenses: MIT

### Resources
* NPMJS
* W3 Schools
* Medium
* Mozilla
* Stackoverflow
* Resources provided in Slack
* Youtube tutorials
* Dillinger
* React
* TailwindCSS

### Technology
* TailwindCSS
* React
* React Hooks
* Javascript
* Visual Studio Code
* GitHub
* Google Chrome


## Source
Code was originally supplied in the WAUS-CRAW-FSF-PT-02-2020-U-C-MW / Week 19 / Homework repository on GitLab https://waustralia.bootcampcontent.com/the-university-of-western-australia/WAUS-CRAW-FSF-PT-02-2020-U-C-MW/tree/master/Week%2019/Homework
<br>

### Joshua K Bader // Ryuku72 // jaybshinsen@hotmail.com
### Made with ReadMe.Md Generator 