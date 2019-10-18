# Assignment: React 3 (2 Points Total)

This assignment is meant to introduce you to more features of React. This project is the third of a four part React project in which you will build a course scheduling application. This application uses a limited quantity of modified data from the UW Madison course information database.

With this assignment, you have two options for the project you build. Option 1 is a recommender system and Option 2 is a planner system.

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

Load in a json file of previous courses located at `https://mysqlcs639.cs.wisc.edu:5000/previouscourses/`. The user should be able to view the contents at this url as courses that the user has previously taken.
  
## Problem 2

Create a rating system for previously taken courses. The user should be able to rate some or all of the previously taken courses loaded from the json file.

## Problem 3

Create a way for the user to select areas of interest that you define. These areas can be general or specific. Some examples might be `computer science`, `artificial intelligence`, or `science`.

## Problem 4

Recommend courses to the user based off of the rated previously taken courses and the user's specified interest areas

---

# Planner

## Problem 1

Based on the courses that the user has added to the cart, allow the user to select any subset of courses, sections, and subsections to later generate all possible schedules for.

The user should be able to select 3 slight variations of course information for planning:
1. A course with **all sections and subsections**
2. A course with **one specific section** of a course with **all subsections**
3. A course with **one specific section** that contains **one sepcifc subsection**.

For example, if course `CS 639` has section `Section 1` with subsections `Subsection 1` and `Subsection 2`, the user should be able to select either of the following with the format of: course -> sections -> subsections with one action (such as a button click)
1. `CS 639` -> `All` -> `All`
2. `CS 639` -> `Section 1` -> `All`
3. `CS 639` -> `Section 1` -> `Subsection 1`

## Problem 2

Based on the selections from problem 1, generate all possible schedules for the courses.

## Problem 3

Create a way for the user to go through and view all of the possible schedules generated.

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
