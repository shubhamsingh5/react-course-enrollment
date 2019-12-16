This app was built for UW-Madison's CS 639 - User Interface Design. The requirements for the assignment are below.

# Assignment: React 1 (2 Points Total)

This homework is meant to introduce you to more features of JavaScript, along with showing how a React project works. This project will be the beginning of a several part React project in which you will build a course scheduling application. This application uses a limited quantity of modified data from the UW Madison course information database.

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

## Problem 1 (0.75 points)

`src/Course.js`

For this problem, you will be creating and styling a way to represent the course data to the user.

There is an empty div currently being displayed for each course. You will display relevant information about each course instead of this empty div.

For the rest of the React unit, we will be using [react-bootstrap](https://react-bootstrap.github.io/) for styling, and it is already installed in the React project for your use. You may alternatively use [Bootstrap](https://getbootstrap.com/) or CSS for stlying if desired.

You will be graded on the content you display and the style in which you display it, as well as your code quality.

## Problem 2 (1.25 points)

`src/SearchAndFilter.js`

For this problem, you will be designing a search and filter method to decide which courses to display given a variety of inputs:

- **Credits**: only display courses that have an amount of credits within the selected credit range
- **Subject**: only display courses that match the selected subject
- **Search**: only display courses that have a keyword that has the search contents as a substring


Providing multiple fields (e.g. credits and subject) will return the intersection of the sets. You will be graded on the above functionality, and the code quality.

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

# Assignment: React 2 (2 Points Total)

This assignment is meant to introduce you to more features of React, e.g. states, props, more modularized components etc... This project is the 2nd of a 4 part React project. 

## Overview

You will be continuing building a **course enrolling/scheduling application** based on a limited number of modified data from the UW-Madison course information database.

Note that you could choose to use your **previous assignment** as a boilerplate/starting point for this assignment. But remember to copy them into this folder since you still need to commit to this react2 GitHub repository.

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
Your project must be able to accept any data(edge cases such as empty fields) that fits the above format with the data fetched from https://mysqlcs639.cs.wisc.edu:5000/classes/
```

`See Canvas for a deeper point breakdown`

## Problem 1 (1 point)

For this problem, you will be creating a cart that users can **add** courses to and **remove** courses from.

You will likely need to create new **React Component(s)** to complete this problem.

### Add to cart

The user should be able to add 3 slight variations of course information into the cart:
1. A course with **all sections and subsections**
2. A course with **one specific section** of a course with **all subsections**
3. A course with **one specific section** that contains **one sepcifc subsection**.

For example, if course `CS 639` has section `Section 1` with subsections `Subsection 1` and `Subsection 2`, the user should be able to add either of the following with the format of: course -> sections -> subsections with one action (such as a button click)
1. `CS 639` -> `All` -> `All`
2. `CS 639` -> `Section 1` -> `All`
3. `CS 639` -> `Section 1` -> `Subsection 1`

### Remove from cart

The user should be able to remove 3 slight variations of course information from the cart:
1. A course with **all sections and subsections**
2. A course with **one specific section** of a course with **all subsections**
3. A course with **one specific section** that contains **one sepcifc subsection**.

For example, if course `CS 639` has section `Section 1` with subsections `Subsection 1` and `Subsection 2`, the user should be able to remove either of the following with the format of: course -> sections -> subsections with one action (such as a button click)
1. `CS 639` -> `All` -> `All`
2. `CS 639` -> `Section 1` -> `All`
3. `CS 639` -> `Section 1` -> `Subsection 1`

### View courses in cart

The user should be able to view which courses are in the cart. From the cart, users should be able to remove courses as described above. For a course that only has some sections and/or subsections added to the cart, you can choose to display only these sections/subsections, or the data for the entire course while making it clear which sections/subsections the user has and has not added to the cart.

## Problem 2 (0.75 points)

For this problem, you will be creating a system for users to **add and remove tags**(corresponding to `keywords` in the given json data) and **search by these tags**.

For this problem, you should start by removing the current functionality of the search bar, as it will be replaced with the new functionality described below.

### Add tags

The user should be able to type in an input box(e.g. Search box) and hit 'Enter' to add a tag, upon which the tag will be added to a list of tags displayed to the user, and the search bar will be cleared. These tags should be displayed to the user in a collective fashion. For example, you can type in `computer` and `sciences` in your search box, each time you click enter, you add a tag with the same name into a box as your tag list.

### Remove tags

The user should be able to remove tags from the tag list.

### Search by tags

The application should search and filter courses by these tags. There are two differnt search by tags methods that we want to include:

1. We want to allow the user to filter results that fit all the tags (intersection of tags/and logic between tags). For example, if we have a course that only has `science` tag, but in our current tag list we have `computer` and `science` tags, we will filter out this course because it does not contain all the tags in our tag list.
2. We want to allow the user to filter results that fit at least one of the tags in the tag list (union of tags/or logic between tags). For example, if we have a course that only contains tag `science` and a course that only contains tag `computer`, and in our tag list we have both `computer` and `science`, neither of the courses will be filtered out because each of them have at least one tag that fits a tag in the tag lists.

For the entire search and filter process, the intersection between the result of the tag filtering and all of the other filters should be displayed.

### Switch tag logic

The user should be able to switch the tag logic between the two methods described above, and the current logic should be displayed to the user.

## General (0.25 points)

You will be graded on User Experience and Code Quality. See Canvas rubric for more details.

## Styling and npm packages

You are allowed and encouraged to use [react-bootstrap](https://react-bootstrap.github.io/) for styling, and it is already installed in the React project for your use. You may alternatively use [Bootstrap](https://getbootstrap.com/) or CSS for stlying if desired.

If you would like to use additional npm packages, ask one of the TAs or Peer Mentors for permission.

We do not have strict requirements for commenting or code styles. Rather, we have an expectation of general reasonable code. For example:
    
One-letter variables are generally not a good idea, unless it is an indexer like i.
    Every line doesn't have to be commented, but if you have a line that may be hard to understand, it is probably a good idea to say what it does. 
    Code does not have to be optimal in time complexity, but it shouldn't do superfluous or egregious things. 

Think about it in terms of working in a team, as many of you will be doing if you get jobs in industry. Being able to write things clearly will help others, as well as you in a couple days/weeks/months from now. Write the code as if you were in such a situation and you will be perfectly fine for the code quality component.

---

# Assignment: React 3 (6 Points Total)

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

## Problem 1 (1.25 points)

- Fetch data from server `https://mysqlcs639.cs.wisc.edu/students/5022025924/classes/completed`
- Create a new component to represent previously taken courses. This component might look somewhat like the Course component, but it will be simpler and won’t have options to add the course to the cart.
- Create a new component to hold the previously taken courses. Make this component accessible from the app.
  
## Problem 2 (1.25 points)

- Create a component for rating a specific course.
- Allow the user to rate courses they have already taken.

## Problem 3 (1.25 points)

- Generate a list of interest areas based on the course data (maybe look at subjects and keywords)
- Create a component for the user to select interest areas as defined in step 1.
- Make this component available to the user.

## Problem 4 (1.25 points)

- Create the recommender algorithm that takes in the rated courses and interest areas. Search through subjects and keywords to find the courses most similar to the highly rated courses and the courses that match the most interest areas
- Display the recommended courses to the user. (Maybe show a few recommended courses or sort all courses by their recommendation score)

## General (1 point)

- Projects will be graded on the general usability and design of the system. You should consider the way the users navigate around the application, and other concepts covered in design lecture.

---

# Planner

## Problem 1 (2 points)

- Create a new planner view
- Create a sidebar component for this planner view that displays all of the courses, sections, and subsections in the cart with with a way for the user to select each one
- Store the data of what is selected to make the selections related (if a course is selected, all of its sections and subsections will also be selected)

## Problem 2 (1 point)

- Create a function to generate all of the possible schedules based on the data from planner's sidebar

## Problem 3 (2 points)

- With the provided component, create a schedule component that displays a generated schedule
- Create a way for the user to view all generated schedules

## Pseudocode for schedule generation

![pseudocode](./docs/pseudocode.jpg)
- Now, timeBlocks contains a list for each course in which one of the section-subsection pairs must be selected to schedule. Iterate through all of these possibilities and add to schedules if there are no conflicts

## General (1 point)
- Projects will be graded on the general usability and design of the system. You should consider the way the users navigate around the application, and other concepts covered in design lecture.

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
