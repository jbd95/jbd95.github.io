import React from 'react';
import utaIcon from '../images/uta-mavs-icon.png';
const catalogURL = `https://catalog.uta.edu/search/?P=`;

export const EducationData = [
    {
        name: 'uta',
        icon: {
            link: 'https://www.uta.edu/engineering/_downloads/degree_plans/2017-cs-f.pdf',
            image: <img alt='' src={utaIcon} style={{width: '60%', height: '62%', maxWidth: '16px', maxHeight: '18px', paddingBottom: '1px'}}></img>,
            tooltip: 'Degree Plan'           
        },
        title: `Bachelor's of Science in Computer Science`,
        description: 'Education Description',
        place: 'The University of Texas at Arlington',
        placelink: 'https://www.uta.edu/uta/',
        gpa: '4.0 GPA',
        time: 'Graduating Spring 2021',
        classification: 'Junior',
        awards: [
            {
                name: `Nokia Outstanding Professional CS Student`,
                date: `2019`,
                link: 'https://cse.uta.edu/future-students/scholarships.php'
            },
            {
                name: `Dean's List`,
                date: `2018-2019`,
                link: 'https://www.uta.edu/engineering/current-students/deans-list/index.php'
            }
        ],
        organizations: [
            {
                name: 'Kalpana Chawla Hall Council',
                date: '2018-2019',
                position: 'President',
                description: `Hall Council serves as  representative body for students 
                to provide input for the running of their residence hall, to organize 
                and implement activities for the hall, and to provide for the needs 
                of residents`,  
            },
            {
                name: 'Honors College',
                date: '2017-Present',
                position: 'Member',
                description: `The Honors College is a diverse community of student
                scholars from all majors who are dedicated to academics, research
                and service.`,  
            },
            {
                name: 'Leadership Honors Program',
                date: '2017-Present',
                position: 'Member',
                description: `The Leadership Honors Program is a multi-year, flexible 
                leadership development program that emphasizes and facilitates on-campus 
                involvement and leadership growth. The program ensures that students have 
                a comprehensive leadership experience that prepares them to be ethical, 
                global-minded leaders`,  
            },
            {
                name: 'Kalpana Chawla Hall Council',
                date: '2017-2018',
                position: '3rd Floor Representative',
                description: `Hall Council serves as  representative body for students 
                to provide input for the running of their residence hall, to organize 
                and implement activities for the hall, and to provide for the needs 
                of residents`,  
            },
            {
                name: 'Freshman Leaders on Campus',
                date: '2017-2018',
                position: 'Member',
                description: `Freshman Leaders on Campus is a leadership organization made of 
                exclusively incoming freshman. FLOC strives to promote freshman involvement, 
                community service, and campus pride. FLOC also prepares freshman for Student 
                Governance and other leadership roles at the University of Texas at Arlington`,  
            }
        ],
        courses: [
        {
            name: 'Algorithms & Data Structures',
            number: 'CSE 2320',
            hours: '3',
            description: `Design and analysis of algorithms 
            with an emphasis on data structures. Approaches 
            to analyzing lower bounds on problems and upper 
            bounds on algorithms. Classical algorithm design 
            techniques including algorithms for sorting, searching, 
            and other operations on data structures such as hash 
            tables, trees, graphs, strings, and advanced data 
            structures, dynamic programming and greedy approaches.`,
            parentlink: catalogURL
        },
        {
            name: 'Fundamentals of Software Engineering',
            number: 'CSE 3310',
            hours: '3',
            description: `Software engineering principles, 
            processes, and techniques; software development 
            approaches focusing on functional analysis and 
            functional design methods. Configuration management, 
            implementation strategies, and testing.`,
            parentlink: catalogURL
        },
        {
            name: 'Database Systems and File Structures',
            number: 'CSE 3330',
            hours: '3',
            description: `Database system architecture; 
            file structures for databases, including 
            indexing hashing, and B+-trees; the relational 
            model and algebra; the SQL database language; 
            Entity-Relationship data modeling; functional 
            dependencies and basic normalization.`,
            parentlink: catalogURL
        },
        {
            name: 'Object-Oriented Programming',
            number: 'CSE 1325',
            hours: '3',
            description: `Object-oriented concepts, class diagrams, 
            collection classes, generics, polymorphism, and reusability. 
            Projects involve extensive programming and include graphical 
            user interfaces and multithreading.`,
            parentlink: catalogURL
        },
        {
            name: 'Linear Algebra for CSE',
            number: 'CSE 3330',
            hours: '3',
            description: `Solving systems of equations, 
            matrix algebra, determinants, vector spaces, 
            orthogonality and least squares, with applications 
            to computer science.`,
            parentlink: catalogURL
        },
        {
            name: 'Engineering Probability',
            number: 'IE 3301',
            hours: '3',
            description: `Topics in engineering that 
            involve random processes. Applications 
            and backgrounds for topics in reliability, 
            inventory systems, and queuing problems, 
            including absolute and conditional probabilities, 
            discrete and continuous random variables, parameter 
            estimation, hypothesis testing, and an introduction 
            to linear regression, experimental design, and 
            analysis of variance.`,
            parentlink: catalogURL
        },
        {
            name: 'Intermediate Programming',
            number: 'CSE 1320',
            hours: '3',
            description: `Programming concepts beyond basic 
            control and data structures. Emphasis is given 
            to data structures including linked-lists and 
            trees as well as modular design consistent with 
            software engineering principles.`,
            parentlink: catalogURL
        },
        {
            name: 'Computer Organization & Assembly Language Programming',
            number: 'CSE 2312',
            hours: '3',
            description: `Computer organization from the viewpoint of software, 
            including: the memory hierarchy, instruction set architectures, 
            memory addressing, input-output, integer and floating-point 
            representation and arithmetic. The relationship of higher-level 
            programming languages to the operating system and to instruction 
            set architecture are explored. Some programming in an assembly language.`,
            parentlink: catalogURL
        },
        {
            name: 'Discrete Structures',
            number: 'CSE 2315',
            hours: '3',
            description: `Propositional and predicate logic, mathematical 
            proof techniques, sets, combinatorics, functions and relations, 
            graphs, and graph algorithms.`,
            parentlink: catalogURL
        },
        {
            name: 'Practical Computer Hardware/Software Systems',
            number: 'CSE 2100',
            hours: '1',
            description: `A practical approach to hands-on 
            computer hardware and software systems in a laboratory 
            environment. Students will be exposed to basic design 
            concepts using off-the-shelf hardware components and 
            to tools that enable the design of complex software systems.`,
            parentlink: catalogURL
        }
    ]   
    },
];