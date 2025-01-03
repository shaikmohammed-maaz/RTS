
import classRoom from './assets/classroom.jpg';
import mission from './assets/mission.jpg';
import vision from './assets/vision.jpg';
import photo from './assets/photo.jpg';
import values from './assets/values.jpg';


let cardsInfo = [
    {
        heading: "School History",
        subHead: "",
        content: "The Journey of Redmond Tamil School, established to offer quality education to Tamil-speaking children and the local community.",
    },
    {
        heading: "2000",
        subHead: "Foundation of Redmond",
        content: "A group of passionate parents and educators established the school to meet the educational needs of Tamil-speaking children in Redmond."
    },
    {
        heading: "2005",
        subHead: "Expansion and Growth",
        content: "The school expanded its programs to include a variety of extracurricular activities and language learning initiatives to support students’ cultural and linguistic development."
    },
    {
        heading: "2010",
        subHead: "New Campus",
        content: "The school moved to a larger campus with improved facilities, providing more space for classrooms, recreational activities, and student projects."
    },
    {
        heading: "2015",
        subHead: "Community Outreach",
        content: "Redmond Tamil School started various community outreach programs to engage with the local area and help Tamil-speaking families and individuals in the region."
    },
    {
        heading: "2020",
        subHead: "Technological Integration",
        content: "The school introduced digital learning tools and online platforms to enhance the learning experience for students and ensure continuity during the pandemic."
    }
]

export let imageWithContent = [
    {
        imageValue:  mission,
        headValue: "Our Mission",
        contentValue: ["As a non-profit organization, we aim to make Tamil education accessible to all, instilling a lifelong connection to the Tamil language and culture in our students."]
    },
    {
        imageValue:  vision ,
        headValue: "CORE AREA OF FOCUS",
        contentValue: ["Building foundational and advanced proficiency in Tamil through interactive and structured lessons",
            "Integrating lessons on Tamil heritage, literature, and traditions to create a holistic learning experience.",
            "Encouraging students to excel in academics through periodic evaluations and continuous feedback."
        ]
    },
    {
        imageValue:  values ,
        headValue: "OUR OBJECTIVES",
        subHead : "Students who successfully complete the final year will:",
        contentValue: ["Converse with each other in Tamil and exchange ideas without hesitation.",
            "Read, understand and write flawlessly Tamil.",
            "Interpret from English to Tamil and from Tamil to English smoothly.",
            "Knows the pride of Tamil language and Tamil language education",
            "Know the history of Tamil language and Tamil culture.",
            "Passionate about teaching Tamil to others."
        ]
    }
];

export let imageCardValues = [
    vision,
    mission,
    classRoom,
    photo
];

export let admissionImagesWithDetails = [
    {
        imagePath: photo,
        name: "John Doe",
        details: "An excellent student with a passion for science and technology."
    },
    {
        imagePath: photo,
        name: "Jane Smith",
        details: "A dedicated learner and enthusiastic participant in extracurricular activities."
    },
    {
        imagePath: photo,
        name: "Michael Johnson",
        details: "A talented artist known for his creativity and innovative thinking."
    },
    {
        imagePath: photo,
        name: "Emily Davis",
        details: "A top-performing student with exceptional skills in mathematics."
    },
    {
        imagePath: photo,
        name: "David Brown",
        details: "An aspiring athlete with numerous achievements in sports."
    },
    {
        imagePath: photo,
        name: "Sophia Wilson",
        details: "A compassionate and hardworking individual dedicated to community service."
    }
];

export let photoGallary = [
    classRoom,
    classRoom,
    classRoom,
    classRoom,
    classRoom,
    classRoom,
    classRoom,
    classRoom,
    classRoom,
    classRoom,
    classRoom,
    classRoom,
];

export let studentImageAndContent = [
    {
        imagePath: photo,
        name: "Science Olympiad Winner",
        details: "May 2024"
    },
    {
        imagePath: photo,
        name: "Art Exhibition Star",
        details: "April 2024"
    },
    {
        imagePath: photo,
        name: "Mathematics Genius Award",
        details: "March 2024"
    },
    {
        imagePath: photo,
        name: "Community Service Leader",
        details: "February 2024"
    },
    {
        imagePath: photo,
        name: "Athletics Champion",
        details: "January 2024"
    },
    {
        imagePath: photo,
        name: "Innovative Tech Creator",
        details: "December 2023"
    }
];


export let schoolTimings = [
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet consectetur."
];


export let commuincationProtocalsValues = [
    {
        emailValue: "john.doe@example.com",
        nameValue: "John Doe"
    },
    {
        emailValue: "jane.smith@example.com",
        nameValue: "Jane Smith"
    },
    {
        emailValue: "michael.brown@example.com",
        nameValue: "Michael Brown"
    },
    {
        emailValue: "emily.jones@example.com",
        nameValue: "Emily Jones"
    },
    {
        emailValue: "william.miller@example.com",
        nameValue: "William Miller"
    },
    {
        emailValue: "sarah.wilson@example.com",
        nameValue: "Sarah Wilson"
    }
];

export let libraryInformation = [
    {
        heading : "Welcome to our vibrant and comprehensive library, a cherished resource for our community! Managed and maintained by our dedicated RTS volunteers, our library boasts an extensive collection of over 1,000 titles, serving more than 450 students and their families.",
        subHeading : "Our library caters to a wide range of readers, ensuring there's something for everyone:",
        points : [
            "Younger Kids: Picture books, early readers, and engaging tales to spark the joy of reading.",
            "Older Kids: Chapter books, educational resources, and adventure stories to inspire and educate.",
            "Adults: A curated selection of novels, comedies, educational material, and stories for leisure or learning.",
            "We proudly offer books across diverse categories, including:",
            "Comedy: Lighthearted reads to brighten your day.",
            "Education: Informative resources to support academic growth and lifelong learning.",
            "Stories: Captivating narratives for readers of all ages.",
            "Our library is conveniently accessible every Sunday from 10:30 AM to 11:50 AM at the Bellevue College R Building lobby. During this time, our friendly library team will be available to assist you in exploring our collection, borrowing books, and answering any questions.",
            "Come visit us to discover a world of knowledge, laughter, and inspiration!"
        ]
    }
]
export default cardsInfo;
