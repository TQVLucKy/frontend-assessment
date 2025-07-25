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