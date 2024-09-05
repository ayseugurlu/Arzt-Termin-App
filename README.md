# Arzt Termin App (Doctor Appointment App )

https://arzt-termin-app.netlify.app/

## Project Purpose

The primary objective of this project is to develop a practical application that helps manage doctor appointments. The "Doctor Appointment App" allows users to add, view, check, and delete appointments. This project focuses on understanding and implementing state management using `useState`, handling events, and storing data using Local Storage in a React application.

## Project Structure

|--Arzt-Termin-App
|
├── public
│     └── index.html
├── src
│    
│    
│    
│    
│    ├── components
│    │       ├── HastaEkle.jsx.jsx
│    │       ├── HastaListe.jsx
│    │       
│    ├── helper
│    │       ├── logo.png
│    │       ├── data.js
│    │----pages
|    |       |---Home.jsx
│    │       
│    ├── App.js
│    ├── App.css
│    ├── index.js
│    └── index.css
├── .gitignore
├── package-lock.json
├── package.json
└── README.md




## Project Features
- **Add Appointments**: Users can add new appointments, which are saved as objects in the state and displayed in a list.
- **View Appointments**: Appointments are displayed with their current status (completed or not).
- **Check/Uncheck Appointments**: Users can mark appointments as completed or uncompleted, with the UI updating accordingly.
- **Delete Appointments**: Users can remove appointments from the list.
- **Local Storage**: Appointments are persisted in Local Storage, ensuring that they remain even after the page is refreshed.
- **Responsive Design**: The app is styled using CSS to ensure it is responsive and user-friendly.

## Outcome
![arzt-termin-app](https://github.com/user-attachments/assets/10b6f922-6240-4965-a48c-b08c593c65b4)



## Technologies Used
- **HTML**: Minimal usage for structuring the React app.
- **CSS**: Employed for styling and enhancing the visual aspects of the app.
- **JavaScript (ReactJS)**: Utilized for building the user interface. Key React features include:
  - State management using `useState`
  - Event handling (`onClick`, `onChange`)
  - Local Storage for data persistence
  - Mapping through state arrays to dynamically render components
- **date-fns**: Utilized for formatting dates throughout the application.

## Skills Gained
By developing the “Doctor Appointment App,” I have gained practical experience in:
- Managing state with `useState` in React components.
- Handling user interactions such as adding, checking, and deleting appointments.
- Implementing persistent data storage using Local Storage in a React application.
- Formatting dates using date-fns to ensure consistency and readability.

These skills are essential for developing more complex and user-interactive applications in the future.

<p align="center"> 🏥 Happy Coding! 🩺 </p>
