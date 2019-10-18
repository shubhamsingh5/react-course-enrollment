# Assignment: React 4 (4 Points Total)

This assignment is meant to introduce you to more features of React. This project is the fourth of a four part React project in which you will build a course scheduling application. This application uses a limited quantity of modified data from the UW Madison course information database.

With this assignment, you have two options for the project you build. Option 1 is a recommender system and Option 2 is a planner system. You must continue with the option you chose in the React 3 assignment.

## Course data

The course data is being fetched from `https://mysqlcs639.cs.wisc.edu:5000/classes/` and is formatted as follows:

```
{
  <alpha-numeric key of length 3>: {
    "credits": <number of credits for the course>,
    "description": <course description>,
    "keywords": <1D list of string keywords>,
    "name": <course name>,
    "number": <course number>,
    "requisites": <2D list of course requisites>,
    "sections": {
      <section number>: {
        "instructor": <instructor name>,
        "location": <section location>,
        "subsections": {
          <subsection number>: {
            "location": <subsection location>,
            "time": {
              <weekday>: <time range>, ...
            }
          }, ...
        },
        "time": {
          <weekday>: <time range>, ...
        }
      }, ...
    },
    "subject": <course subject>
  }
}
```

- The list of course requisites consists of 1D lists with AND operations between them. Each 1D list has OR operations between elements. For example: `[[A, B], [C, D, E], [F]]` means that the requisites are `(A OR B) AND (C OR D OR E) AND (F)`. The requisites will be represented as the course's alpha-numeric key used in the outermost object.
- A course can have any number of sections, and each section can have any number of subsections. If the course contains subsections, the user must schedule exactly one subsection with its parent section.
- Sections and subsections can have any number of times. Each time's key is a weekday in all lowercase ("monday", "tuesday", "wednesday", ...). Each time's value is a string with the following format: `"<12 hour time><am or pm> - <12 hour time><am or pm>"`. An example of this would be `"11:45am - 12:35pm"`.
- Each course has exactly one subject

```
Your project must be able to accept any data with the same format as above and the data located at https://mysqlcs639.cs.wisc.edu:5000/classes/
```

# Recommender

## Problem 1

Before or during the action of a user adding a course to the cart, design a way to let the user know if they are able to take the course based off of the requisites and the user's previously taken courses.
  
## Problem 2

If the user is not able to take a course in the cart because the user does not meet the requisites, design a way to show the user the possible course paths to take to be able to take the desired course.

## Problem 3

Create a way for user to select courses they would like to take in the future from the courses they are currently unable to take in the cart (because of requisites). Factor these courses into the recommendation algorithm, giving a larger bias to the courses needed for the selected interest courses.

---

# Planner

## Problem 1

Create a way for the user to add and name blank blocks in the planner. Treat these added blocks like classes, and don't show schedules that overlap with these blocks.

## Problem 2

Create a way for the user to add preferences for classes on certain days and at certain times, and sort the generated schedules by schedules that match these preferences.

## Problem 3

Allow the user to lock classes within a plan, which will refresh the generated schedules to only include the locked class in the locked position. Also allow users to unlock locked classes, which will revert the constraint and refresh the generated schedules.

---

## Styling and npm packages

You are allowed and encouraged to use [react-bootstrap](https://react-bootstrap.github.io/) for styling, and it is already installed in the React project for your use. You may alternatively use [Bootstrap](https://getbootstrap.com/) or CSS for stlying if desired.

If you would like to use additional npm packages, ask one of the TAs or Peer Mentors for permission.

You will be graded on the content you display and the style in which you display it, as well as your code quality.

---

**Run `npm install` in the terminal after cloning to automatically install needed npm packages such as react-bootstrap**

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
