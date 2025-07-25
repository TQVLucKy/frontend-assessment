Introduction
---
Thanks for taking the time to complete this frontend technical assessment. We will be focusing on software quality (scalability, readability, maintainability, etc.) and your eye for detail. You may include any libraries, but Vue.js is preferred and jQuery is not recommended. Along with following best practices, bonus points for following our [coding guidelines](https://github.com/mindarc/frontend-assessment/wiki/Coding-guidelines). 

Exercise 1
---
Build a responsive page based on the designs.

##### Requirements
1. Match the designs exactly.
2. Needs to be responsive.

##### Designs
* exercise1-desktop.png
* exercise1-mobile.png

##### Assets
* Desktop banner - https://via.placeholder.com/1920x650
* Mobile banner - https://via.placeholder.com/600x600
* Content images - https://via.placeholder.com/400x300

Exercise 2
---
Read the `data.json` file and display the data as tabs on desktop and an accordion on mobile.

##### Requirements
1. Display data in tabs on desktop.
2. Display data in an accordion on mobile.
3. Only 1 accordion/tab should be open at a time.
4. Open the first accordion/tab on load.
5. If the open accordion is selected, close it.

###### Bonus points
* Improve the user experience with meaningful animations/transitions.
* Design and styling.
* Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.

Submission
---
We recommend submitting your completed assessment as a forked repository. Please replace README content with instructions and relevant documentation.

###### Frontend Assessment Submission
This is my submission for the frontend assessment. The project is built using:
- Vue 3
- Vite
- Tailwind CSS
- SCSS (for reusable styling)

###### Folder Structure
- exercise1: Static responsive page built with Tailwind CSS based on the provided designs.
- exercise2: Vue 3 + Tailwind CSS with responsive UI - tabs on desktop, accordion on mobile.

###### Exercise 2 Details
- Responsive UI:
    - Tabs on desktop.
    - Accordion on mobile.
- Only 1 accordion/tab should be open at a time.
- Open the first accordion/tab on load.
- If the open accordion is selected, close it.

###### Bonus Point
- Add meaningful animations and transitions to enhance user experience.
- Improved visual design and consistent styling for a polished UI.
- **Why** `('b' + 'a' + + 'a' + 'a').toLowerCase()` results in `"banana"`:
    `'b' + 'a'` -> `"ba"`
    `+ 'a'` -> `NaN` (unary plus tries to convert `'a'` to a number)
    `"ba" + NaN` -> `"baNaN"`
    Adding `'a'` -> `"baNaNa"`
    `.toLowerCase()` -> `"banana"`

###### How to run

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`


###### Accessing Each Exercise

After running `npm run dev`, visit:

- **exercise1**: ["http://localhost:5173/exercise1"]
- **exercise2**: ["http://localhost:5173/exercise2"]