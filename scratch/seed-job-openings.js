const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'flymedia_db',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || 'Root@123',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: false,
  }
);

// Define model locally to ensure perfect schema alignment
const Career = sequelize.define('Career', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  post: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  vacancies: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  experience: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  requirements: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'OPEN',
  },
}, {
  tableName: 'careers'
});

const jobsData = [
  {
    title: "SEO",
    post: "SEO (Search Engine Optimization)",
    vacancies: "2",
    experience: "0-3 years",
    description: "We are looking for talented SEO Specialists to join our dynamic marketing team and execute successful organic search campaigns for our clients.",
    requirements: [
      "Knowledge of SEO on-page & off page, Google updates, ranking factors and Search Engine Marketing Techniques.",
      "The candidate must be able to perform all off-page and on pages tasks successfully, including article/press release/directory submissions, RSS feeds, blog posts, social bookmarking and commenting on social networks.",
      "Good Knowledge of on page SEO activities like meta tags, sitemap, header tags, URl optimization etc.",
      "Develop and implementation of the best strategies to improve the ranking of the clients' business.",
      "Suggest the required changes in timely manner to upgrade the website architecture, designing and content.",
      "Research on Google Analytic, Search Engine Ranking monitoring and latest web trends for effective optimization.",
      "Manage the SEO and PPC campaigns"
    ].join('\n'),
    status: "OPEN"
  },
  {
    title: "Marketing Manager",
    post: "Marketing Manager",
    vacancies: "2",
    experience: "1+ years",
    description: "We are seeking an energetic Marketing Manager to lead our lead generation, cold calling campaigns, prospect emails, and client relationships.",
    requirements: [
      "Generate leads through cold calling which should lead to Conversion.",
      "Follow-up calls, E-mail to prospects clients.",
      "Complete knowledge of MS- Excel.",
      "Market research to establish initial contact and gathering information.",
      "Constantly updating the knowledge of the latest technologies and industries trend.",
      "Gathering requirement and providing the right solution.",
      "Corporate level marketing to manage sales pipeline.",
      "Client interaction/presentation.",
      "Managing new as well as existing clients",
      "Possess high energy and enthusiasm.",
      "Self motivated & goal-oriented.",
      "Excellent verbal, written & interpersonal communication skills."
    ].join('\n'),
    status: "OPEN"
  },
  {
    title: "Business Development Manager (Online Bidder)",
    post: "Online Bidder",
    vacancies: "2",
    experience: "1-3 years",
    description: "Responsible for acquiring new business, deal negotiations, proposal writing, and relationship building on platforms like Upwork and Freelancer.",
    requirements: [
      "Should have 1-3 years of work experience as an Online Bidder.",
      "Responsible for acquiring business & achieving sales target.",
      "Requirement analysis",
      "Write proposals for projects.",
      "Deal negotiations, finalizing deals with clients",
      "Client interaction",
      "Build and maintain client relationships",
      "Candidate should have hand on experience in lead generation, business development & services selling.",
      "Generate Business from Online Bidding Portals (Up work / Freelancer) and from other websites.",
      "Should be able to generate leads and can maintain track record of communication.",
      "To be involved in Pre - Bids, Follow ups, Competition Analysis",
      "E-Mail Marketing, Finding New Business Opportunities",
      "Able to propose project budgeting to client.",
      "Expertise on web technologies, mobile and IT domain",
      "Excellent communication skills & written skills.",
      "Must have understanding of market and searching the new market strategy and making agents to the foreign countries."
    ].join('\n'),
    status: "OPEN"
  },
  {
    title: "PHP Developer",
    post: "PHP Developer",
    vacancies: "2",
    experience: "1+ years",
    description: "Talented smart candidate in PHP technology ready to work from scratch, open minded, and able to work in a fast-paced startup culture.",
    requirements: [
      "Must have good knowledge of developing applications using Apache and PHP.",
      "Should have strong web development fundamentals.",
      "Strong in PHP 5.x object-oriented design and programming.",
      "Strong jQuery, JavaScript and HTML/CSS Skills.",
      "Strong AJAX skills.",
      "Keyskills - CSS, Javascript, HTML, JQuery, MySQL, Ajax, PHP, Web Development."
    ].join('\n'),
    status: "OPEN"
  },
  {
    title: "Content Writer(Experienced)",
    post: "Content Writer",
    vacancies: "3",
    experience: "6 months - 1 year",
    description: "Experienced Content Writer possessing excellent command over English and looking to create outstanding original articles and creative marketing copies.",
    requirements: [
      "Candidate must possess skills to write very high quality content in English.",
      "Should have a good understanding of internet based terms and technologies.",
      "Responsible for writing Web content; maintaining and updating Web pages/blogs",
      "Ability to write creative content for social media postings.",
      "Research industry-related topics (combining online sources, interviews and studies)",
      "Write clear marketing copy to promote our products/services",
      "Prepare well-structured drafts using Content Management Systems",
      "Proofread and edit blog posts before publication",
      "Submit work to editors for input and approval",
      "Coordinate with marketing and design teams to illustrate articles",
      "Conduct simple keyword research and use SEO guidelines to increase web traffic",
      "Promote content on social media",
      "Excellent command over English language and ability to think out-of-the-box, play-with-words and write in a simple, concise and accurate manner.",
      "Creating original articles.",
      "Creative writing.",
      "Good knowledge of MS-Word."
    ].join('\n'),
    status: "OPEN"
  },
  {
    title: "Content Writer Fresher",
    post: "Content Writer Fresher",
    vacancies: "2",
    experience: "Fresher",
    description: "Fresh graduate with exceptional English communication skills and eagerness to learn copy and web content writing in a professional digital agency setting.",
    requirements: [
      "Excellent command at writing skill in English language",
      "Creative and innovative thinker and planner",
      "Great research, organizational, and learning skill",
      "Ability to understand complex writing requirements and deliver quality content",
      "Self motivated",
      "Zeal to learn new things"
    ].join('\n'),
    status: "OPEN"
  },
  {
    title: "WordPress Developer",
    post: "WordPress Developer",
    vacancies: "3",
    experience: "6 Months - 2 years",
    description: "WordPress Developer to design and implement new features, responsive layouts, plugins, and guide overall website architecture.",
    requirements: [
      "Designing and implementing new features and functionality",
      "Establishing and guiding the website's architecture",
      "Ensuring high-performance and availability, and managing all technical aspects of the CMS",
      "Helping formulate an effective, responsive design and turning it into a working theme and plugin.",
      "Self motivated.",
      "Zeal to learn new things.",
      "Must be proficient in PHP, MySQL, CSS, HTML, Javascript, AJAX",
      "Should have experience with WordPress.",
      "Knowledge of PHP web frameworks like CodeIgniter is a plus."
    ].join('\n'),
    status: "OPEN"
  },
  {
    title: "IOS and Android Developer",
    post: "IOS and Android Developer",
    vacancies: "3",
    experience: "6 Months to 3 years",
    description: "Mobile app developer with hands-on experience in full life cycle mobile applications across Android and iOS.",
    requirements: [
      "Android: Excellent knowledge in core Java",
      "Hands on experience in the full life cycle of Android application development",
      "Strong knowledge in RESTful web services and Android SDKs",
      "Experience with Push Notifications, Eclipse, ANT, Android Studio, Gradle",
      "iOS: Very good experience with Objective-C and iOS SDK",
      "Good working knowledge in Cocoa Touch",
      "Experience with memory management and caching mechanisms specific to mobile devices",
      "Experience working with iOS frameworks such as Core Data, Core Animation, Core Graphics and Core Text"
    ].join('\n'),
    status: "OPEN"
  },
  {
    title: "Laravel Developer",
    post: "Laravel Developer",
    vacancies: "1",
    experience: "Min 1.5 to 4 Years",
    description: "Senior Laravel Developer responsible for Laravel, MySQL, PHP development, speed, scalability, and API integrations.",
    requirements: [
      "Laravel, MySQL, PHP and related technology development",
      "Coming up with ideas on how to improve speed, scalability and finding new ways to track how visitors are using our solutions",
      "Comfortable with Facebook, Twitter, Instagram, Yelp and Google APIs",
      "Understanding of search and social advertising platform APIs",
      "Understanding of HTML, CSS, JS, JQuery, AWS, Redis, Web Services",
      "Knowledge of basic customization of wordpress is a plus.",
      "Salary Range: 12k to 20k, Location: Vishal Nagar Ludhiana."
    ].join('\n'),
    status: "OPEN"
  }
];

async function seed() {
  try {
    console.log('Connecting to database...');
    await sequelize.authenticate();
    console.log('Connected successfully! Seeding job openings...');

    // Clear existing open careers to avoid duplicates (optional, or just create new ones)
    console.log('Cleaning up existing careers...');
    await Career.destroy({ where: {} });

    console.log('Inserting 9 new job openings...');
    await Career.bulkCreate(jobsData);
    
    console.log('SUCCESS: All 9 job openings seeded perfectly!');
    process.exit(0);
  } catch (error) {
    console.error('ERROR seeding careers:', error);
    process.exit(1);
  }
}

seed();
