Plan.md

Part 1
Create a github repo
First commmit
  - Readme file
  - This plan

Part 2 
What will this app do?
  - This app will create a workoutplan for you
  - There will be ready made workout plans for you to select based on number of days you plan to workout during the week
  - There will be the option to create your own workout plan
  - There will be logs you can create to see what you did on each workout day. 
      - You will be able to input any changes to the weight or reps for each workout
  
  - MVP for now you will be able to select from a list of preselected exercises

Part 3
Create a front end
  Setup Next.js
  - create a Next.js app - npx create-next-app@latest
  - initialise node.js project (create a basic package.json file) - npm init -y
  - install dependancies - npm install
  - cd into project folder (default my-app)
  - run server - npm run dev
Create a Header Component
  - create a Components folder in the src folder
  - create a Header folder in the component folder
  - create a HeaderComponent.tsx file
  - create a StylesHeader.module.css file
  - import StyleHeader folder in HeaderComponent file - import styles from "./StylesHeader.module.css"
  - create header component and add to page.tsx
Create a Main Component
Create a Footer Component
Create a Create Workout Plan Page
  - create a CreateWorkoutPlan folder
  - inside folder create a page.tsx file
  - add header and footer components to this file
Create a WorkoutLogs page
Create three navigation buttons in Header component. One button for each page
  - create a link array with href address and text as properties.
  - create a buttoncontainer child of headercomponent which will map the link array properties to each instance of a button component
  - create a button child component of buttoncontainer which will take the href and text props from button container
Create Pre selected Workouts buttons in CreateWorkoutPlan page
  - create a grid with 2 colums
    - first column will display your workout - My Workout Plan section
    - second column will display the exercises you can add to your workout - Pre-Selected Workouts section
    - create 4 buttons for 3day, 4day, 5day and 6day pre selected workout plans.
    - create a data.json file to hold data for the workout plan for now
    - create a textarea in my Workout Plan section. 

Part 4
Create a back-end 
  Create a Server folder
  Server folder
    - Install Express
    - Create a rest API using Express.
    - Create a database using render
    - Create a threedayworkout table in database
    - Connect API to database using pg module
    
  








 
