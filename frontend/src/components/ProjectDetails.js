import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css'; // Link to your CSS file

const ProjectDetails = () => {
  const { id } = useParams(); // Get the project ID from the URL

  // Sample project data with images and descriptions
  const projects = {
    1: {
      title: "Introduction to AWS Projects",
      description: 'This series of projects was created due to the lack of step by step documentation I found while learning Amazon Web Services by myself.',
      details: `
        By using AWS, VSCode, Open-Source Tools, and Github, we can do many projects to learn the various concepts behind AWS. Most importantly we can do this for free in the free tier!
        We will cover several projects that I shared on Gitbook, including:
      `,
      bulletPoints: [
        "Project 1: Beginner's Guide to KIND",
        "This is the first project you should start with, it goes over simulating a multi-node Kubernetes cluster on AWS using Kubernetes in Docker. I removed the complexity for setting up multi-node clusters and focuses on the core of Kubernetes features like deployments, scaling, and service management.",
        "Project 2: Ubuntu Server Monitoring on the Cloud with Open-Source Monitoring Tools",
        "This project introduces launching EC2 Instances (Ubuntu Servers) hosted on AWS. We will integrate open source tools such as Prometheus for metrics collection and Grafana to visualize the collected data with customized dashboards.",
        "Project 3: Automated Infrastructure Deployment with Terraform",
        "This project introduces automated infrastructure deployments with an IaC tool called Terraform. We will go over how to deploy a basic cloud environment on AWS using Terraform and learn about the benefits of using IaC for reproducibility and scalability.",
        "Project 4: Deploy Multi-Node Kubernetes Cluster on AWS (might cost pennies to a couple of $)",
        "This project is a work in progress, but it's a great start working out how to deploy a multi-node Kubernetes cluster on AWS and GCP.",
        "Please feel free to look at my Gitbook for technical documentation on how to do each of these projects and happy learning!"
      ],
      Link: 'https://zoes-documentation-homebase.gitbook.io/zoes-documentation-homebase-1'
    },
    2: {
      title: "Low Noise Amplifier",
      description: 'This project was completed as part of my Active RF & Microwaves course at the Colorado School of Mines.',
      details: `
        Here we discuss a low-noise amplifier (LNA), which is an important device used to boost weak signals without adding much noise, a crucial device for clear signal reception.
        We will cover several topics, including:
      `,
      bulletPoints: [
        "What's an LNA? An LNA is equivalent to a microphone for singals in wireless devices. It makes weak signals stronger so they can be processed.",
        "Why are LNAs important? LNAs are used in everyday devices like Wi-Fi routers and cell phones to help pick up and boost signals over long distances.",
        "What does this paper cover? The team designed an LNA to work best at a specific frequency, and amplify a signal by a specific degree while adding minimal static to the signal.",
        "Specifically, the design constraints for this LNA are operation at a frequency of 2.5 GHz, commonly used in wireless communications (e.g., WLAN), a noise figure (NF) of 1.6 dB - a measure of how much noise the amplifier adds to the signal (this needs to be low to preserve the clarity of the signal), and a gain of 16dB to increase the signal strength without introducing any distortion.",
        "The selection of amplifier components: the team chose an ATF-52189 low noise transistor and SOT-89 package for the design, based on its specification like power range and operational frequency.",
        "Simulation tools: The team used ADS (Keysight Advanced Design System) software for simulations to predict how the amplifier would behave at 2.5 GHz. The initial design was tested and fine tuned to produce the correct output.",
        "From the simulations ran, the team analyzed: S-parameters - measurements of the amplifier's behavior to see how much signal is reflected (S11), while how much of the signal is actually transmitted out (S21), Smith charts - tools used for matching the amplifier's impedance (resistance) to ensure efficient signal transfer, RF choke - a component that will block high frequency signals and allow DC signals to pass through, and inductor/capacitor optimization - adjusting values of the inductors (store energy in magnetic field, resist changes in current) and capactitors (store energy in electric field, resist changes in voltage) to ensure optimal performance.",
        "In summary, the amplifier was made by creating an initial design, running tests in the software, adjusting parts like capacitors and inductors to meet the goals, optimize and make it efficient through ADS, and designing the physical layout with the substrate material to simulate what the amplifier would look like in real life.",
        "As such, the final design amplified signals as needed, kept the static low, and was ready for manufacturing after extensive testing."
      ],
      pdf: '/LNA_Zoe_Sano.pdf',
      video: 'https://my-portfolio-media.s3.us-east-2.amazonaws.com/LowNoiseAmplifier.mp4'
    },

    /*2: {
      title: "Coupled Line Coupler",
      description: 'This project was completed as part of my Passive RF & Microwaves course at the Colorado School of Mines.',
      details: `
        This project explores the design and simulation of a Coupled Line Coupler (CLC), a passive radio frequency (RF) component commonly used to split power, combine signals, or monitor the operation of other devices.
        If you're unfamiliar with RF concepts, think of it like this: the CLC is a tool that "listens" to energy traveling through a system and helps us measure or manage it, without interrupting the main flow of that energy. CLC are often used in many everyday devices like Wi-Fi routers, broadcast equipment for TV and radio, cell phones, radar systems in cars, and in medical imaging devices like MRI machines. 
        Let's go over some of the concepts behind this paper and the design process behind my CLC. If you understand RF engineering concepts, you may skip to the paper and video presentation.
      `,
      bulletPoints: [
        "Electromagnetic Fields: Think of electromagnetic fields as invisible forces created by charged particles, like the Earth's magnetic field that shields us from harmful solar particles. This magnetic field allows us to be able to live on Earth! Similarly, power lines generate man-made electromagnetic fields that enable electricity to flow. These fields are the foundation of RF systems.",
        "So what really is a CLC?   Imagine the CLC as a bypass lane on the highway of energy. It allows some of the energy (a small fraction) to travel into a side lane to be measured or controlled, while the rest of the energy continues travelling on the highway. So think of the CLC as the traffic director for the energy moving through the system (highway).",
        "In this paper, I designed a backward wave coupler (there are forward wave couplers as well) that is a specific type of CLC that sends the measured energy to a port near the input energy, which makes it useful for tasks like monitoring RF power levels." ,

        "The Design Process: Using theory and calculations, I used mathematical models to design the CLC.",
        "Keeping in mind that I want the CLC to split or monitor the energy efficiently while maintaining specific performance standards, I calculated the necessary impedance, which is like the 'resistance' that the energy feels as it moves through the device. Think of it like designing a water pipe where the width of the pipe has to be just right so the water flows exactly where it needs to go.",
        "In addition to other design specifications based on the set coupling requirements, I designed the coupler on paper and then tested it in two different virtual environments on a computer software to predict how the CLC would perform",
        "I ran S-Parameter simulations for both a schematic simulation, which is equivalent to building a digital prototype using ideal conditions to prove that my hand calculations were correct, and a momentum simulation, which is similar to including material properties and how the environment might affect the CLC in a realistic test.",
        "After, the results were analyzed by using S-parameters, which are measurements that show how well energy moves through the coupler. The S-parameters will tell us if the energy is flowing in the right direction and whether the coupler is properly splitting or monitoring it as intended. The S-parameters also serve as a performance report for the device (Is the coupler worrking as expected? Or is there leaks or losses of energy?",
        "Upon analysis of the results, I verified that the coupler met the design goals. It behaved exactly as we desired in theory and realistically. Therefore, this design of a coupled line coupler, which is designed to be used in radio frequency power meters or voltage standing wave ratio (VSWR) meters, can be fabricated for real life usage."
      ],
      pdf: '/CLC.pdf',
      video: 'https://my-portfolio-media.s3.us-east-2.amazonaws.com/CoupledLineCoupler.mp4'
    },*/

    3: {
      title: "Magnetic Fields From Power Lines and Their Potential Interference with Pacemakers",
      description: `This project was completed as part of my Introduction to Electromagnetics course at the Colorado School of Mines.
       I want to give a special shoutout to my partner, Brennen Ward, who was an incredibly smart Electrical Engineering student and a good friend. He passed away just shy of graduation, but his cheerful energy and intelligence will always be remembered by those who were lucky to know him.
      `,
      details: `
        This paper explores whether the magnetic fields produced by high-voltage power lines interferes with pacemaker functionality.
        My partner and I were insterested after seeing a 1979 study linking high power transmission lines to childhood leukemia. Although the scientific consensus dismisses a causal relationship between electromagnetic fields (EMF) from these lines and serious health conditions, the interaction with sensitive medical devices like pacemakers, which approximately 1.5 million Americans have pacemakers, warrants an investigation.
        We will cover several topics, including:
      `,
      bulletPoints: [
        "Biot-Savart Law: law that describes how electric currents create magnetic fields, employed here to calculate the magnetic field strength around transmission lines and determined that fields exceeding 10 Gauss (G) are hazardous to pacemaker function",
        "Pacemaker Functionality: Pacemakers are designed to withstand certain levels of EMI but may experience malfunction if exposed to frequencies typical of high-power lines, specifically around 60 Hz",
        "Faraday's Law:  The study utilized Faraday's Law to demonstrate how the induced voltage in circuits is influenced by the distance from EMF sources and the duration of exposure",
        "Results: Matlab simulations revealed  that a power line carrying 2 kA of current can create magnetic fields hazardous to pacemakers within approximately 4 cm. Further analysis showed that at greater distances (e.g., 60 ft and beyond), the magnetic field strength drops significantly, reducing potential risks.",
      ],
      pdf: '/EENG386_paper.pdf'
    },
    4: {
      title: "Meta Full Stack Project - Little Lemon Restaurant Website",
      description: `This project is a culmination of the Meta Front-End and Back-End Developer Professional Certificate programs, earning me my full-stack certification. The front-end capstone focused on creating a responsive and visually engaging website using HTML, CSS, JavaScript, and React, while integrating design principles for user interface and user experience (UI/UX). The back-end capstone emphasized building server-side functionality with Python, Django, and SQL, and working with APIs, data structures, and cloud hosting.

      Combining these skills, I developed the Little Lemon restaurant website, a mock restaurant application, implementing both client-facing features and backend systems.`,
      details: `
        The project showcases a fully functional website for an imaginary restaurant, Little Lemon. The design aligns with the provided style guide and emphasizes a seamless user experience.
      `,
      bulletPoints: [
        "A problem statement, a persona (ideal user), and a journey map for the user experience (UX) design",
        "A responsive and interactive front-end designed with React, adhering to a provided style guide.",
        "Menu browsing feature with dynamic filtering and sorting options.",
        "A table booking system that allows users to select a date, time, and party size, with real-time availability checks powered by the Django backend.",
        "User authentication for account creation, login, and booking history management.",
        "Integration of a secure and scalable back-end with Django and RESTful APIs for seamless data handling.",
        "Applied version control practices with Git and GitHub throughout development. Please feel free to visit my GitHub (link below) and view the repositories 'meta-frontend-capstone' & 'meta-backend-capstone'."
      ],
      images: [
        {src: '/style_guide.png', caption: 'Brand Style Guide for Little Lemon'},
      ],
      pdf: '/Little_Lemon_Wireframes.pdf',
      Link: "https://github.com/zoesano8",
      video: '/Frontend.mp4'
    },
    5: {
      title: "Kakehashi 2024: Reflection on Identifying as a Japanese-American",
      description: `Read about my experience being apart of the Kakehashi Project, a government funded exchange program between the Japanese Americans Citizens League (JACL) and the Japan's Ministry of Foreign Affairs (MOFA).
       I was apart of a group of Japanese Americans from across the country, selected to participate in an exchange program called Kakehashi. Kakehashi (かけはし) can be translated as “bridge”, and reflects the mission to create meaningful and long lasting relationships between Japan and the United States.
      `,
      details:
      `
        The Japanese American Citizens League (JACL) is the oldest and largest Asian American civil rights organization in the United States. Their historic efforts, such as lobbying for the Civil Liberties Act of 1988, have played a pivotal role in acknowledging the injustices faced by Japanese Americans during World War II. As part of their ongoing mission, the JACL selected approximately 70 Japanese Americans from across the United States to participate in the Kakehashi Project. Each participant carries a unique family legacy, reflecting the resilience and struggles of Japanese Americans across generations.
        When I applied for this experience, I thought deeply about my grandparents, who lived through the turmoil of World War II. On one side of my family, my grandmother was born in Canada and, at just eight years old, was forcibly relocated to a concentration camp called Lemon Creek in British Columbia. She vividly remembers being loaded onto a train with her family and other Japanese Canadians, despite their legal citizenship, and enduring years of discrimination. She spent her teenage years in the camp with poor living conditions before moving to Japan to assist extended family members affected by the war's devastation.
        Meanwhile, my other grandparents resided in Hawaii during WWII. As children of Japanese immigrant farmers working on Hawaii's pineapple and sugar cane plantations, they faced intense scrutiny after the bombing of Pearl Harbor. My grandmother recalls the terrifying sounds of planes crashing and gunfire on December 7th, 1941, despite being only 6 years old at the time, forcing her to hide inside her home. Shortly after, military officials regularly visited the plantations, interrogating workers and taking men away in droves for questioning. Despite being U.S. citizens and abandoning all connections to their homeland, my grandparents endured immense hardship simply because of their Japanese heritage.
        Hearing these stories from my grandparents and others fills me with deep sadness for the discrimination they endured. These experiences have attributed to a great loss of Japanese culture due to the struggle to assimilate in their new country. It also reminds me of how many people around the world face similar injustices and are affected by war, even when they are not directly involved in the fighting. Although I am just one individual—one Japanese American, a local girl born and raised on the island of Oahu—I have the opportunity to reclaim my heritage, share these stories, and advocate for understanding various cultures.
        While in Japan, I explored the bustling streets of Tokyo, visited the Museum of Japanese Emigration to Hawaii (where I discovered my great-grandparents' passport records for their early 1900s emigration to work on Hawaiian plantations), experienced island life during a homestay in Suo-Oshima, and paid my respects at the Hiroshima Peace Memorial Museum. Throughout my trip, I witnessed the kindness of the Japanese people, the hard work of Japan's society—from rural communities to urban centers—and the promising leaders in government at the Ministry of Foreign Affairs of Japan. With members of my cohort, I visited historical landmarks, shared family histories, bonded over our Japanese American identities, chatted with locals to exchange perspectives on life, and savored a variety of traditional Japanese foods.
        This once-in-a-lifetime experience deepened my understanding of my heritage and the broader importance of cultural and historical awareness. It also made me realize the critical role we each have in advocating for civil, human, and political rights. We all have a part to play in standing up for our communities and for those whose voices may not be heard.
        If you've read this far, I hope my journey inspires you to reflect on your own cultural experiences and take action for what you believe in. Please feel free to reach out if you'd like to discuss the Kakehashi Project or share your own story—I'd love to connect with you!
        `
      ,
      bulletPoints: [
        "Please take a moment to see some photos of my experience and read about it in the JACL newsletter!"
      ],
      images: [
        {src: '/group_photo.jpeg', caption: 'Group B Photo' },
        {src: '/yanai_photo.jpeg', caption: 'Goldfish making in Yanai'},
        {src: '/emigration_museum.png', caption: 'Emigration Museum in Yamaguchi Prefecture'},
      ],
      pdf: '/Kakehashi_article.pdf'
    },

  };

  const project = projects[id]; // Get the project data based on the ID

  // If the project doesn't exist, you could show a 404 message or similar
  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="project-details">
      <h1>{project.title}</h1>
      <br />
      <p>{project.description}</p>
      <br />
      <div className="details">
        {project.details.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>

      {/* Render bullet points if they exist */}
      {project.bulletPoints && project.bulletPoints.length > 0 && (
        <ul className="details">
          {project.bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}
      <br />
      {/* Conditionally render the link */}
      {project.Link && (
          <p className="link">
            View the full documentation {' '}
            <a href={project.Link} target="_blank" rel="noopener noreferrer">
              here
            </a>
          </p>
        )}

      <br />

      {/* Conditionally Render Images */}
      {project.images && project.images.length > 0 && (
        <div className="project-images">
          {project.images.map((image, index) => (
            <div className="image-container" key={index}>
              <img src={image.src} alt={`${project.title} - ${index + 1}`} />
              <p className="image-description">{image.caption}</p>
            </div>
          ))}
          <br />
        </div>
      )}

      {/* Render the second set of bullet points after images */}
      {project.bulletPoints2 && project.bulletPoints2.length > 0 && (
        <ul className="details2">
          <h3>Project Features</h3>
          {project.bulletPoints2.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}

      {/* Conditionally Render PDF viewer */}
      {project.pdf && (
        <div className="project-pdf" style={{ margin: '30px' }}>
          <h2>Project Documentation</h2>
          <iframe
            className="pdf"
            src={project.pdf}
            width="100%"
            height="800px"
            style={{ border: 'none', overflow: 'auto' }}
            title="Project PDF Viewer"
          ></iframe>
        </div>
      )}

      {/* Conditionally Render Video */}
      {project.video && (
        <div className="project-video" style={{ margin: '30px' }}>
          <h2>Project Video</h2>
          <video className="vid" width="100%" height="auto" controls>
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <br />
    </div>

      );
    };

export default ProjectDetails;
