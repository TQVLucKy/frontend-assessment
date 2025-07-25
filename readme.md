###### Frontend Assessment Submission
This is my submission for the frontend assessment. The project is built using:
- Vue 3
- Vite
- Tailwind CSS
- SCSS (for reusable styling)

###### Folder Structure

Both exercises were completed as individual components in a single Vue 3 + Vite setup.

- `src/components/Exercise1.vue`: A static responsive page built with Tailwind CSS, based on the provided designs.
- `src/components/Exercise2.vue`: A responsive UI component that displays data using tabs on desktop and accordion on mobile.

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
    `'b' + 'a'` -> `'ba'`  
    `'ba' + + 'a'` -> `'ba' + NaN` -> `'baNaN'` (unary plus tries to convert `'a'` to a number)  
    `'baNaN' + 'a'` -> `'baNaNa'`  
    `'baNaNa'.toLowerCase()` -> `'banana'`   

###### How To Run

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`


###### Live Demo

You can access each exercise directly here:

- **exercise1**: ["https://vinhtran.pages.dev/exercise1"]
- **exercise2**: ["https://vinhtran.pages.dev/exercise2"]