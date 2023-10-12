/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Yorkville University (YU)',
    position: 'Information Technology (IT) Project Manager',
    url: 'https://www.yorkvilleu.ca/',
    startDate: '2022-02-07',
    summary: 'Yorkville University is set to establish a national university that offers practitioner-oriented programs, leading to professionally rewarding careers that both benefit individuals and contribute to the betterment of society. I work within the Project Management Office as an IT Project Manager. As part of my role, I am responsible for overseeing various project management processes and artifacts. Additionally, I have been supervising the implementation of various IT Projects.',
    highlights: [
      'Led the creation of the Project Management Office (PMO) Toolkit to standardize the project management processes and practices at the organization.',
      'Led the design of centralized process to receive various ideas and prioritaztion of these new ideas received as new projects',
      'Delivered Application Tracking System(ATS) and Human Capital Management(HCM) system successfully within the committed budget, scope and time.',
    ],
  },
  {
    name: 'Springboard',
    position: 'Mentor - Software Engineering Career Track',
    url: 'https://www.springboard.com/',
    startDate: '2022-07-01',
    summary: 'Springboard is an online learning platform that prepares students for the tech industry’s most in-demand careers with comprehensive, mentor-led online programs in software engineering, data science, cybersecurity, UI/UX design, and more.Primarily focusing on to coach and mentor students pursuing software engineering bootcamp, evaluating their mini-projects, capstone, resolve blockers and set them for success in their Software Engineering journey.',
    highlights: [
      'Helped various students to complete the curriculum well before time successfully.',
    ],
  },
  {
    name: 'Project Management Institute (PMI) Toronto Chapter',
    position: 'Chair - Membership Portfolio',
    url: 'https://www.pmitoronto.ca/',
    startDate: '2021-06-01',
    summary: 'PMI Toronto is a volunteer driven organization who is dedicated to promoting the adoption, advancement and success​ of project management in our community and surrounding area. As a Chair of Membership Portfolio under the chapter I am responsible for operational aspects of portfolio (project plans), delivery & membership offerings. Membership survey/Engagement, KPIs. All day to day support of portfolio',
    highlights: [
      'As a team our mandate is to deliver value to our members ensuring member engagement and sense of belonging to the Project Management community.',
      'Organized various in-person networking events and virtual networking events using Kumospace platform.',
      'Created & Conducted annual membership survey to understand the pulse of the members and get their feedback.',
    ],
  },
  {
    name: 'Quantium Analytics',
    position: 'Senior Software Engineer',
    url: 'https://quantium.com/',
    startDate: '2017-05-09',
    endDate: '2021-04-04',
    summary: `At Quantium, we worked in cross-functional teams 
    like Data Warehousing (ETL), Business Intelligence and 
    Application Engineering to create products based on data 
    analytics to deliver value and evolve products for strategic 
    business initiatives for the Retail leader Woolworths group in Australia.`,
    highlights: [
      'Decreased the loading time for the report by 30% in the Q.CheckOut product by improving code execution, which resulted from using a cause and effect diagram.',
      'Documented regular updates like sprint retrospection and burndown chart report in the Confluence under the designated project and acted as a liaison for the project team and stakeholders by effective and efficient communications',
    ],
  },
  {
    name: 'Infosys Ltd.',
    position: 'Senior Systems Engineer',
    url: 'https://zenysis.com',
    startDate: '2014-10-20',
    endDate: '2017-05-08',
    summary: `Infosys is primarily a consulting company that serves clients across the globe.
    I worked on creating products by leveraging the latest technologies and transforming business processes and requirements to an efficient working solution for clients like Ricoh and Estee Lauder in the Electronics and Manufacturing industry.`,
    highlights: [
      'Redesigned and improved complex approval processes by leveraging technical solutions and workflows, reducing the turnaround time by 80%.',
      'Elicited business requirements for RICOH and Estée Lauder and translated them into a working product that leveraged the latest technology.',
    ],
  },
];

export default work;
