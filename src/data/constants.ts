interface BioInterface{
	name: string[],
	roles: string[],
	description: string,
	github: string,
	resume: string,
	linkedin: string,
	portfolio: string
}

interface SkillInterface{
	title: string,
	skills: {
		name: string,
		image: any
	}[]
}
export interface ExperienceInterface{
	id: number,
	img: any,
	role: string,
	company: string,
	date: string,
	desc: string,
	skills: string[],
	achievements: string[],
	links?: {
		title: string,
		address: string	
	}[]
}

interface EducationInterface{
	id: number,
	img: any,
	school: string,
	desc: {
		subTitle: string,
		content: string
	}[],
	skills: string[],
	degree: string
}

export interface ProjectsInterface{
	id: number,
	title: string,
	nickname: string,
	description: string[],
	image: any,
	tags: string[],
	category: string,
	links: {
		title: string,
		address: string
	}[],
}

export const Bio: BioInterface = {
    name: [
      "Chris Lee"
    ],
    roles: [
      "Full Stack Developer",
      "Software Engineer",
      "Web Developer",
      "Front-end Developer",
      "Back-end Developer",
      "Programmer",
    ],
    description: "I am a dedicated and self-driven software engineer with practical expertise in developing full-stack web applications and being part of the Agile teams.",
    github: "https://github.com/bigbigphone2",
    resume: "https://drive.google.com/file/d/1WMuEvBOnKK89nAqQGVgnRn_6yYr5RNuO/view?usp=sharing",
    linkedin: "http://linkedin.com/in/yat-hei-lee",
	  portfolio: 'https://www.yatheilee.xyz/'
};
  
export const skills: SkillInterface[] = [
  {
    title: "Languages",
    skills: [
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "TypeScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "VBA",
        image:
        require("../assets/game_images/skills/vba-icon.png"),
      },
      {
        name: "SQL",
        image:
          "https://db.cs.uni-tuebingen.de/teaching/ws2223/sql-is-a-programming-language/logo.svg",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
    ],
  },
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          require("../assets/game_images/skills/react-icon.png"),
      },
      {
        name: "Redux",
        image:
        "https://skillicons.dev/icons?i=redux",
      },
      {
        name: "Next Js",
        image:
          "https://skillicons.dev/icons?i=nextjs",
      },
      {
        name: "Material UI",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "jQuery",
        image:
        "https://skillicons.dev/icons?i=jquery",
      },
      {
        name: "Webpack",
        image:
        require("../assets/game_images/skills/webpack-icon.png"),
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Spring Boot",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Spring_Boot.svg",
      },
      {
        name: "Django",
        image: "https://skillicons.dev/icons?i=django",
      },
      {
        name: "Node Js",
        image: "https://skillicons.dev/icons?i=nodejs",
      },
      {
        name: "Kafka",
        image: "https://skillicons.dev/icons?i=kafka",
      },
      {
        name: "ROS",
        image: "https://skillicons.dev/icons?i=ros",
      },
      {
        name: "Graph Ql",
        image: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "Postgresql",
        image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
      {
        name: "Redis",
        image:
          "https://skillicons.dev/icons?i=redis",
      },
      {
        name: "Ignite",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAANlBMVEVHcEztGyPtHCTsGyPtHCTtHCTtHCTtHCTtHCTtGyPtHCPtHCTtHCTtHCTtHCPtGyPtHCTtHCRAZaeRAAAAEnRSTlMAFKkLlf/fTvgwXs687D0ienH1r4Z8AAAA3ElEQVR4AX3RQQ6FIAxF0Yd4ARRB97/Znx8hGhHPiEHTlld1zGT1ZWbSB+vAa8wGIGrM8V2w8LdowGvlL43GR3EyemFACoxbbGCUOHl1ErDIMxoSAZy0ctr0MNX/Gaq126B2jvC66NU5U81dxHWNEjhl3exUoUipFd8FmqWdhPL8Z5Ws4svRMpes2BeobPeK4xl4kjTTYOXA6uJZJJX1CmFn0s1cg/G0xCKmu8Vs2gtsWfQS1OprCG1+H1TYz6z1ZBzVZiw49fLkahuT2fXO5iMFNjmjD94dRd+ybn71eQnaJKxh5gAAAABJRU5ErkJggg=="      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Docker",
        image:
        "https://skillicons.dev/icons?i=docker",
      },
      {
        name: "K8s",
        image:
          "https://skillicons.dev/icons?i=kubernetes",
      },
      {
        name: "AWS",
        image:
          "https://skillicons.dev/icons?i=aws",
      },
      {
        name: "Junit",
        image: "https://asset.brandfetch.io/idD7RfhCFS/id3KSPzOxb.png?updated=1667605689688",
      },
      {
        name: "Unittest",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "Jest",
        image: "https://skillicons.dev/icons?i=jest",
      },
      {
        name: "Git",
        image:
          "https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "GitLab",
        image:
          require("../assets/game_images/skills/gitlab-icon.png"),
      },
      {
        name: "Jenkin",
        image:
        "https://skillicons.dev/icons?i=jenkins",
      },
      {
        name: "Figma",
        image:
          "https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667",
      },
      {
        name: "Linux",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/2560px-Tux.svg.png",
      },
      {
        name: "Raspberrypi",
        image:
          require("../assets/game_images/skills/raspberrry-pi-logo.png"),
      },
      {
        name: "Regax",
        image:
        require("../assets/game_images/skills/regex-icon.png"),
      },
      {
        name: "Selenium",
        image:
          "https://skillicons.dev/icons?i=selenium",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667",
      },
    ],
  },
];
  
export const experiences: ExperienceInterface[] = [
  {
    id: 0,
    img: require("../assets/game_images/companies/RedCliff_logo.png"),
    role: "Software Engineer (Full Stack)",
    company: "Red Cliff Asset Management (AUM ~ US$ 1billion)",
    date: "2022 - 2023",
    desc: "I worked in a full-stack role, working primarily with the front office team. My main focus is to continuously improve the accuracy of the data and smooth the workflow of the research team and trading team by developing better tools.",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Java",
      "VBA",
      "Kafka",
      "Node JS",
      "React JS",
      "MUI",
      "MySQL",
      "Ignite",
      "Docker",
      "K8s",
    ],
    achievements: [
      "Implemented an upgrade to company's market data database structure, increased the storage capacity by 20 times, and improved the data retrieval speed by 10 times.",
      'Developed a generic Excel report-generation module, resulting in a 30% reduction in manual effort for custom reporting tasks.',
      'Enhanced a React JS, Node JS, Python & Java based Market Watch web app by incorporating Excel-like features, enabling traders to manipulate and analyze data more effectively.',
      'Developed a microservice module using Python to handle CSV file-based integrations.',
      'Developed a database administration tool using React JS and Python, empowering middle office teams to efficiently modify static data for companies, leading to a 300% increase in processing speed.',
      'Collaborated with the DevOps team to successfully migrate from VM-based deployment to a Kubernetes environment.'
    ],
  },
  {
    id: 1,
    img: "https://media.licdn.com/dms/image/C560BAQHvSmWT2U0Yrg/company-logo_100_100/0/1641954998506?e=2147483647&v=beta&t=A9WYOuXf2rzcdP4WnhWgOMr3uKsP-wclLSlxZYFKn9M",
    role: "Software Engineer (Full Stack)",
    company: "P L Technology Limited",
    date: "2021 - 2022",
    desc: "I worked in a full-stack role, providing valuable support to both front-end and back-end teams whenever additional manpower is needed.",
    skills: [
      "Python",
      "TypeScript",
      "Next JS",
      "MUI",
      "React Native",
      "Node JS",
      "Django",
      "PostgreSQL",
      "AWS",
    ],
    achievements: [
      'Developed a coupon redemption system utilising Next JS and Node JS, leading to a substantial increase in customer retention and doubling the participation of enterprises in collaborative partnerships.',
      'Implemented Selenium web crawlers to automate the extraction of digital marketing data, eliminating 2 manual workforce.',
      'Continuously improved features on a loan website using React JS and Django, resulting in a more user-friendly experience.',
      'Revamped and fixed over 200 unit test and integration test cases for migrating the loan website backend to microservices.',
    ],
    links: [
      {
        title: 'Company Website',
        address: 'https://www.zwap.hk'
      },
    ]
  },
  {
    id: 2,
    img: "https://media.licdn.com/dms/image/C560BAQEEegfXP3ZwxA/company-logo_100_100/0/1589593823601?e=2147483647&v=beta&t=c9R2Fjd-qQ64nOtp5vx-9Z7sTz3G3gwveGPoSu7WsJw",
    role: "Robotics Software Engineer Intern",
    company: "Yau Lee Holdings Limited",
    date: "2021",
    desc: "I worked on a R&D team, help develop a cleaning and disinfection robot.",
    skills: [
      "Python",
      "ROS (Robot Operating System)",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    achievements: [
      "Developed a dashboard website using pure HTML, CSS, and JavaScript that seamlessly connects to robot's API with WebSocket, enabling users to remotely control the robot and providing an intuitive interface for monitoring the robot’s state.",
      'Developed a work recording program using ROS and Python, enabling users to visualize the progress of robot tasks on a 3D map.'
    ],
    links: [
      {
        title: 'Company Website',
        address: 'http://www.yaulee.com'
      },
    ]
  }
];
  
export const education: EducationInterface[] = [
  {
    id: 0,
    img: "https://media.licdn.com/dms/image/C4D0BAQEubCTgcfA2sQ/company-logo_100_100/0/1519910081555?e=2147483647&v=beta&t=TiJJQSCVIGXAnoxRb2FzpW22OkoaAYZ99Bv-4X7ENvo",
    school: "The University of Hong Kong",
    desc: [
        {
          subTitle: 'Computer science related course work:',
          content: 'Java & Object-oriented programming (OOP), Data Structure & Algorithms, Linux Environment, Data Science.'
        },
        {
          subTitle: 'Programming course work in Electrical engineering major:',
          content: 'Arduino software coding, Matlab simulation for the solar panel.'
        },
        {
          subTitle: 'Large scale project:',
          content: 'Arduino automatic vehicle project, Mock algorithm trading with python.'
        },
        {
          subTitle: 'Final year project:',
          content: '"Training a robot to see and communicate" --- investigate the possibilities and limitation when adopting different latest object detection models into one of the most famous pre-built robot (NAO designed by SoftBank)',
        },
      ],
    skills: [
      "Python",
      "C++",
      "Java",
      "MATLAB",
      "Arduino",
      "TensorFlow",
      "Linux"
    ],
    degree: "Bachelor of Electrical Engineering",
  },
];
  
export const projects: ProjectsInterface[] = [
	{
		id: 0,
		title: "GameHub",
		nickname: "GameHub",
		description: [
			'Developed an intuitive web application using TypeScript and Next JS, aimed at streamlining the process of selling used video games.',
			'Engineered the back-end system using Java Spring Boot and Hibernate ORM, and emphasized unit testing with JUnit.'
		],
		image:
			require("../assets/game_images/projects/gamehub.png"),
		tags: [
			"TypeScript",
			"Java",
			"Next JS",
			"MUI",
			"Spring Boot",
			"Redis",
			"PostgreSQL",
			"AWS",
		],
		category: "web app",
		links: [
			{
				title: 'Website',
				address: 'https://stupendous-stroopwafel-452aba.netlify.app'
			},
		]
	},
	{
		id: 1,
		title: "Poker Game (Big Two)",
		nickname: "BigTwo",
		description: [
		  'Utilized Swing (Java) for the GUI interface and integrated WebSocket to facilitate an online multiplayer poker game.'
		],
		image:
		"https://github.com/bigbigphone2/BigTwoGame/raw/main/Screenshot%202021-12-13%20at%2010.12.58%20PM.png",
		tags: [
			"Java",
			"Swing",
			"Websocket"
		],
		category: "computer app",
		links: [
			{
				title: 'Download link',
				address: 'https://github.com/bigbigphone2/BigTwoGame'
			}
		]
	},
	{
		id: 2,
		title: "Character GPT",
		nickname: "CharacterGPT",
		description: [
			"Enabled tailored responses for varied audiences while simplifying role assignment, saving time, and ensuring consistency.",
			'Utilized React JS and OpenAI API to achieve a ChatCPT clone.'
		],
		image:
			require("../assets/game_images/projects/characterGPT.png"),
		tags: [
			"TypeScript",
			"React JS",
			"MUI",
			"OpenAI Api"
		],
		category: "web app",
		links: [
		{
			title: 'Website',
			address: 'https://character-gpt-mu.vercel.app'
		}
		]
	},
	{
		id: 3,
		title: "Sudoku Game",
		nickname: "Sudoku",
		description: [
			'Developed a web sudoku game using React JS',
			'Adopted backtracking algorithm in the game to solve any valid sudoku.'
		],
		image: require('../assets/game_images/projects/sudoku.png'),
		tags: [
			"JavaScript",
			"React JS",
			"CSS",
			"Algorithm"
		],
		category: "web app",
		links: [
			{
				title: 'Website',
				address: 'https://sudoku-solver-eta-sage.vercel.app/'
			}
		]
	},
	{
		id: 4,
		title: "Training a robot to see and communicate",
		nickname: "FinalYearProject",
		description: [
			'Explored possibilities and limitations of integrating object detection models into the renowned NAO robot by SoftBank.'
		],
		image: require('../assets/game_images/projects/nao.png'),
		tags: [
			"Python",
			"Tensorflow",
			"Linux"
		],
		category: "hardware related project",
		links: [
			{
				title: 'Details',
				address: 'https://drive.google.com/file/d/1jILEBS0tGNkRe-7FSYtKusFWTCU7qsrm/view?usp=sharing'
			}
		]
	},
	{
		id: 5,
		title: "Arduino automatic vehicle",
		nickname: "ArduinoCar",
		description: [
			'Developed a vehicle capable of driving straight with low-quality motors.',
			'Implemented precise distance measurement during travel.',
			'Enabling automatic steering in response to specific color signals.',
			'Created an auto-parking system for wireless charging stations.',
			'Designed a disinfection function with an alcohol spraying mechanism.'
		],
		image: require('../assets/game_images/projects/arduino_car.jpeg'),
		tags: [
		"Arduino",
		"C++"
		],
		category: "hardware related project",
		links: [
		{
			title: 'Demo video',
			address: 'https://drive.google.com/file/d/1OvMWq3sPGyeoHTSIq73u85NknHGclBdc/view?usp=sharing'
		}
		]
	},
	{
		id: 6,
		title: "Portfolio Game",
		nickname: "ThisGame",
		description: [
			'Crafted a 2D web game engine using TypeScript, React JS, Material UI',
			'Offering an engaging journey to explore my personal experiences.'
		],
		image: require('../assets/game_images/projects/portfolioGame.png'),
		tags: [
			"TypeScript",
			"React JS",
			"MUI"
		],
		category: "web app",
		links: [
			{
				title: 'Website',
				address: 'https://portfolio-game-three.vercel.app'
			}
		]
	},
];
