 // Initialize Lucide icons
        lucide.createIcons();

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Resume download functionality
        document.getElementById('download-resume').addEventListener('click', function (e) {
            e.preventDefault();
            const resumeContent = `Ritik Verma
Phone: +91 9834108571 | Email: rvritik4@gmail.com | LinkedIn: linkedin.com/in/ritik-verma-169296330

Objective
Motivated third-year B.Tech student specializing in Computer Science and Engineering,
seeking an internship to apply and enhance expertise in backend development, particularly
with the Spring Framework ecosystem. Passionate about building scalable applications and
implementing industry best practices in software development.

Education
Ajay Kumar Garg Engineering College, Ghaziabad, UP
Expected: June 2026
Bachelor of Technology (B.Tech), Computer Science and Engineering

Technical Skills
• Programming Languages: Java (Core, J2EE), Python, C++
• Frameworks & Technologies: Spring Framework, Spring Boot, Spring MVC, Spring Security, Hibernate/JPA
• Databases & Tools: MySQL, PostgreSQL, Maven, Git, GitHub, Postman, JUnit
• Web Technologies: RESTful APIs, JSON, XML, Microservices
• Methodologies: Agile, Scrum, Test-Driven Development (TDD)

Projects
E-commerce Backend API
• Developed a scalable RESTful API using Spring Boot with JWT authentication and Spring Security
• Integrated MySQL database using Spring Data JPA, achieving 40% faster query performance
• Designed a microservices architecture capable of handling 1000+ concurrent user requests
• Achieved 95% test coverage using JUnit and Mockito for unit and integration testing

Student Management System
• Engineered a robust Spring Boot application with role-based access control using Spring Security
• Integrated PostgreSQL database with JPA/Hibernate for efficient data persistence
• Implemented RESTful endpoints for student information, course enrollment, and grade management
• Utilized Spring MVC for clean architecture and separation of concerns

Certifications
• Java Programming Certification
• Backend Development with Spring Boot

Extracurricular Activities
• Active member of Coding Club, AKGEC - Participated in competitive programming and hackathons
• Technical Coordinator, Tech Fest Organization Committee - Led a team of 5 members in organizing technical events`;

            const blob = new Blob([resumeContent], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'Ritik_Verma_Resume.txt';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        });