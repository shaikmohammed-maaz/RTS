
import photo from './assets/photo.jpg';
import classRoom from './assets/classroom.jpg';

let detailsObj = [
    {
        image: photo,
        info: "Understanding Components in React. Components are the building blocks of any React application, allowing you to split the UI into reusable pieces."
    },
    {
        image: classRoom,
        info: "Configuration in React: Learn how to configure your React project with tools like Webpack and Babel, and how to set up the development environment."
    },
    {
        image: photo,
        info: "State Management in React. Dive deep into managing the state in a React app using `useState`, `useContext`, or more complex solutions like Redux."
    },
    {
        image: classRoom,
        info: "JSX and UI in React. JSX allows you to write HTML structures in the same file as JavaScript code, making it easier to work with UI components in React."
    }
];

export let numWithText = [
    {
        dateValue: "1st November 2024",
        headValue: "School Reopening Announcement",
        contentValue: "We're excited to welcome our students back! The school reopens on November 25th for the new term.",
        numValue: 1
    },
    {
        dateValue: "15th October 2024",
        headValue: "Parent-Teacher Meeting",
        contentValue: "Join us for the Parent-Teacher Meeting on October 20th to discuss student progress.",
        numValue: 2
    },
    {
        dateValue: "5th September 2024",
        headValue: "Teacher's Day Celebration",
        contentValue: "We celebrated Teacher's Day to honor and appreciate the hard work of our educators.",
        numValue: 3
    }
];


export default detailsObj;