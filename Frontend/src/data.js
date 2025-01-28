const lessonsData = {
  frontend: {
    title: "Frontend Development",
    content: "Welcome to the Frontend Development course. Here you will learn about HTML, CSS, JavaScript, and various frontend frameworks like React, Angular, and Vue.",
    courses: [
      { title: "Basic Frontend Concepts", description: "Learn the basics of frontend development, including HTML structure and semantic elements." },
      { title: "HTML Syntax", description: "Understand HTML tags, attributes, and how to structure web pages." },
      { title: "CSS Fundamentals", description: "Learn how to style web pages using CSS, including selectors, properties, and the box model." },
      { title: "Introduction to JavaScript", description: "Dive into JavaScript basics and understand how to make web pages interactive." },
      { title: "Frontend Frameworks Overview", description: "Get introduced to popular frontend frameworks like React, Angular, and Vue." }
    ],
  },
  backend: {
    title: "Backend Development",
    content: "Welcome to the Backend Development course. Here you will learn about server-side programming, databases, and backend frameworks like Node.js, Django, and Flask.",
    courses: [
      { title: "Introduction to Backend Development", description: "Learn the basics of server-side programming and backend architecture." },
      { title: "Node.js Basics", description: "Understand how to build scalable server-side applications using Node.js." },
      { title: "RESTful API Design", description: "Learn how to design and implement RESTful APIs for web applications." },
      { title: "Databases for Backend", description: "Explore database management and integration with backend systems." },
      { title: "Introduction to Django and Flask", description: "Discover Python frameworks for building backend applications." }
    ],
  },
  database: {
    title: "Database Management",
    content: "Welcome to the Database Management course. Here you will learn about relational and non-relational databases, SQL, and database design principles.",
    courses: [
      { title: "Introduction to Databases",   notionLink:"https://youtu.be/_20qqjSmikI"},
      { title: "Advantages of Databases ",   notionLink:"https://youtu.be/vX91NHzNcmY"},
      { title: "Database vs File-based system",   notionLink:"https://youtu.be/TOHNjY6Is-Y"},
      { title: "Classification of Databases", notionLink: "https://youtu.be/QLc6ny0LvPs"},
      { title: "Database Structures",  notionLink:"https://youtu.be/2ee3pFbNGA0"},
      { title: "Applications of Databases ", notionLink:"https://youtu.be/HAaI2LyrDnM"},
      { title: "Database Tools and Utilities  ", notionLink:"https://youtu.be/In534rEC6Po"},
      { title: "Introduction to SQL Language  ",  notionLink:"https://youtu.be/Mi25ujRQtbE"},
      { title: "Create Database  ",  notionLink:"https://youtu.be/P0jKvGt0c1o"}    
    ],
  },
  programming: {
    title: "Programming Fundamentals",
    content: "Welcome to the Programming Fundamentals course. Here you will learn about basic programming concepts, data structures, and algorithms using languages like Python, Java, and C++.",
    courses: [
      { title: " Basics Programming", description: "Dr. Kriangkrai" },
      { title: "Data Structures Introduction", description: "Understand arrays, lists, stacks, and queues." },
      { title: "Algorithm Basics", description: "Learn about sorting, searching, and problem-solving techniques." },
      { title: "Python for Beginners", description: "Start programming with Python, one of the most beginner-friendly languages." },
      { title: "Object-Oriented Programming", description: "Understand the principles of OOP using Java or C++." }
    ],
  },
  uxui: {
    title: "UX/UI Design",
    content: "Welcome to the UX/UI Design course. Here you will learn about user experience design, user interface design, and tools like Figma and Adobe XD.",
    courses: [
      { title: "Introduction to UX/UI", description: "Learn the basics of user experience and interface design." },
      { title: "Design Principles", description: "Understand typography, color theory, and layout design." },
      { title: "Prototyping with Figma", description: "Create interactive prototypes using Figma." },
      { title: "User Research Basics", description: "Learn how to conduct user interviews and usability tests." },
      { title: "Advanced UX/UI Tools", description: "Explore advanced tools like Adobe XD and Sketch." }
    ],
  },
  devops: {
    title: "DevOps",
    content: "Welcome to the DevOps course. Here you will learn about continuous integration, continuous deployment, and tools like Docker, Kubernetes, and Jenkins.",
    courses: [
      { title: "Introduction to DevOps", description: "Learn the basics of DevOps and its importance in modern software development." },
      { title: "CI/CD Pipelines", description: "Understand how to set up continuous integration and deployment pipelines." },
      { title: "Docker Fundamentals", description: "Learn how to containerize applications using Docker." },
      { title: "Kubernetes Basics", description: "Get introduced to Kubernetes for container orchestration." },
      { title: "Infrastructure as Code", description: "Understand tools like Terraform and Ansible for infrastructure management." }
    ],
  },
  networking: {
    title: "Networking",
    content: "Welcome to the Networking course. Here you will learn about network protocols, network security, and tools like Wireshark and Cisco Packet Tracer.",
    courses: [
      { title: "Networking Basics", description: "Understand the fundamentals of computer networking and protocols." , notionLink: "https://www.notion.so/Network-17becd059e428064a253ca784effaa0d",},
      { title: "Network Security", description: "Learn how to secure networks against threats and vulnerabilities." },
      { title: "Wireshark for Beginners", description: "Analyze network traffic using Wireshark." },
      { title: "Cisco Packet Tracer", description: "Simulate and visualize network setups with Cisco Packet Tracer." },
      { title: "Advanced Networking Concepts", description: "Dive into topics like VPNs, firewalls, and load balancers." }
    ],
  },
  security: {
    title: "Cybersecurity",
    content: "Welcome to the Cybersecurity course. Here you will learn about cybersecurity principles, threat analysis, and tools like Metasploit and Wireshark.",
    courses: [
      { title: "Cybersecurity Fundamentals", description: "Learn the basics of securing systems and networks." },
      { title: "Threat Analysis", description: "Understand how to identify and respond to cyber threats." },
      { title: "Introduction to Metasploit", description: "Learn penetration testing with Metasploit." },
      { title: "Security Tools Overview", description: "Explore essential tools like Wireshark and Nessus." },
      { title: "Advanced Cybersecurity Techniques", description: "Dive into ethical hacking, cryptography, and incident response." }
    ],
  },
};

export default lessonsData;
