import sf from '/public/image/sf.png';
import sm from '/public/image/sm.png';
import ofo from '/public/image/ofo.png';
import ai from '/public/image/ai.png';
import ec from '/public/image/ec.png';
import zc from '/public/image/zc.png';
import pf from '/public/image/pf.png';
import mashai from '/public/image/mashai.png';


export const projectsData = [
    {
        id: 1,
        name: 'Secure File Sharing Platform',
        description: "Built full-stack file management application with Spring Boot REST APIs leveraging 3-layer MVC architecture, JPA/Hibernate ORM, comprehensive exception handling, and rate limiting to prevent brute-force attacks. Implemented enterprise security: JWT + OAuth2 authentication, AES-256-CBC file encryption, BCrypt password hashing, CORS/CSRF protection, and secure token-based sharing with configurable access limits and expiration.",
        tools: ['Spring Boot', 'React.js', 'MySQL', 'JWT', 'OAuth2', 'AES-256-CBC Encryption', 'Hibernate', 'REST APIs', 'Spring Security', 'JPA'],
        role: 'Full Stack Developer',
        code: 'https://github.com/mdmashoodalam/secure-file-sharing#-live-demo',
        demo: '',
        image: sf,
    },
    {
        id: 2,
        name: 'Student Management System',
        description: "Built end-to-end CRUD application with Spring Boot REST APIs (3-layer architecture, JPA, DTO validation, exception handling) and React frontend featuring search, pagination, and form validation. Developed a responsive UI using React Router and Bootstrap, with Axios-based API integration.",
        tools: ['Spring Boot', 'React.js', 'Bootstrap', 'MySQL', 'REST APIs', 'JPA', 'React Router', 'Axios', 'DTO Validation'],
        role: 'Full Stack Developer',
        code: 'https://github.com/mdmashoodalam/student-management-system  ',
        demo: 'https://student-management-system-five-gray.vercel.app/',
        image: sm,
    },
    {
        id: 3,
        name: 'Online Food Order Application',
        description: "Engineered a scalable online food ordering application using Spring Boot, RESTful APIs, and MySQL, enabling seamless order management, secure and efficient restaurant–customer interactions.",
        tools: ['Spring Boot', 'REST APIs', 'MySQL', 'Postman', 'Spring MVC', 'Hibernate', 'Spring Security'],
        role: 'Backend Developer',
        code: 'https://github.com/mdmashoodalam/OnlineFoodOrderApp',
        demo: 'https://github.com/mdmashoodalam/OnlineFoodOrderApp',
        image: ofo,
    },
    {
        id: 4,
        name: 'E-Commerce Website',
        description: "This project is a fully responsive e-commerce platform where users can browse products, manage carts, and securely complete purchases. Admins can manage products and view orders. The platform includes user authentication, product filtering, and payment gateway integration for seamless transactions. It is designed to offer an intuitive and smooth shopping experience.. This project utilizes a full-stack development approach with modern web technologies such as HTML, CSS, JavaScript, ReactJS, ExpressJS, NodeJS, and MongoDB. The goal is to simulate a seamless and responsive trading experience for users.",
        tools: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'ExpressJS', 'NodeJS', 'MongoDB', 'JWT (JSON Web Tokens)','Render', 'Payment Gateway Integration ','Git/GitHub'],
        role: ' Full Stack Developer',
        code: 'https://github.com/mdmashoodalam/ECommerece-web',
        demo: 'https://ecommerece-web-md-alam.onrender.com/auth/login',
        image: ec,
    },
    {
        id: 2,
        name: 'PortFolio WebApp',
        description: "I designed and developed a personal portfolio website to showcase my skills, projects, and professional experience. The website features a clean and user-friendly interface, allowing visitors to easily navigate through sections like About Me, Projects, Skills, and Contact. It’s fully responsive, ensuring smooth performance across different devices and screen sizes. The contact form is integrated with EmailJS to allow seamless communication.",
        tools: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'ExpressJS', 'NodeJS','Git/GitHub', 'Netlify'],
        role: ' Full Stack Developer',
        code: 'https://github.com/mdmashoodalam/Portfolio',
        demo: 'https://mdmashoodalam.netlify.app',
        image: pf,
    },
    {
        id: 3,
        name: 'Zerodha Clone - Stock Trading Platform',
        description: "The Zerodha Clone is a stock trading web application designed to replicate the core features of the popular Zerodha platform. This project utilizes a full-stack development approach with modern web technologies such as HTML, CSS, JavaScript, ReactJS, ExpressJS, NodeJS, and MongoDB. The goal is to simulate a seamless and responsive trading experience for users.",
        tools: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'ExpressJS', 'NodeJS', 'MongoDB', 'OpenAI API','AWS Amplify', 'AWS S3 ','Git/GitHub'],
        role: ' Full Stack Developer',
        code: '',
        demo: 'https://github.com/mdmashoodalam/zerodha-Clone',
        image: zc,
    },
    {
        id: 4,
  name: 'AI Interview Mocker – AI-Driven Interview Practice App',
  description:"A full-stack mock interview platform that uses the Google Gemini API to generate role-specific technical and behavioral questions and provide feedback. Built with a modular React UI, MySQL-backed REST APIs, and client-side authentication (login, signup, protected routes) with secure token and session management.",
  tools: ['React', 'MySQL', 'Google Gemini API', 'Auth (JWT/session)', 'REST APIs'],
  role: 'Full Stack Developer',
  code: 'https://github.com/mdmashoodalam/Ai-Interview-Mocker',
  demo: 'https://mashsubai.vercel.app',
  image: mashai,
}
];
