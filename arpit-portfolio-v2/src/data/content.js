import micpImage from "../assets/image1.png";
import peg400Image from "../assets/image2.png";

export const profile = {
  name: "Arpit Kumar Yadav",
  role: "Geotechnical Engineer & Researcher",
  tagline: ["Geotechnical Engineer", "Ground Improvement Researcher", "GATE 2025 Qualifier", "IIT (ISM) Dhanbad"],
  location: "Dhanbad, Jharkhand, India",
  email: "25mt0089@iitism.ac.in",
  phone: "+91-8052991399",
  linkedin: "https://www.linkedin.com/in/arpit-kumar-yadav-1208b6250/",
  admNo: "25MT0089",
  blurb:
    "Master's student in Geotechnical Engineering at IIT (ISM) Dhanbad, working on bio-cementation (MICP) and ground improvement, with hands-on research in landslide hazard assessment and sustainable concrete technology.",
};

export const stats = [
  { label: "CGPA (M.Tech)", value: 9.6, suffix: "", decimals: 1 },
  { label: "GATE 2025 Score", value: 415, suffix: "" },
  { label: "Dept. Rank (B.Tech)", value: 3, prefix: "Top ", suffix: "" },
  { label: "CGPA (B.Tech)", value: 8.8, suffix: "/10", decimals: 1 },
];

export const education = [
  {
    id: "edu-ism",
    type: "education",
    title: "Master in Geotechnical Engineering",
    org: "Indian Institute of Technology (ISM) Dhanbad",
    place: "Dhanbad, Jharkhand",
    date: "Expected May 2027",
    meta: "CGPA: 9.6",
    detail:
      "Coursework: Mechanics of Geomaterials, Advanced Foundation, Unsaturated Soil Mechanics, Numerical Methods in Civil Engineering, Ground Improvement & Geosynthetics, Computational Geomechanics.",
    logo: "/images/logo-ism.png",
  },
  {
    id: "edu-rmlau",
    type: "education",
    title: "B.Tech in Civil Engineering",
    org: "Dr. Rammanohar Lohiya Avadh University",
    place: "Ayodhya, Uttar Pradesh",
    date: "July 2025",
    meta: "CGPA: 8.8 / 10",
    detail:
      "Coursework: Construction Technology & Management, Structural Analysis, Soil Mechanics & Foundation Engineering, Surveying, Environmental Engineering, Transportation Engineering.",
    logo: "/images/logo-rmlau.png",
  },
];

export const experience = [
  {
    id: "exp-mandi",
    type: "experience",
    title: "Research Intern",
    org: "Indian Institute of Technology Mandi",
    place: "Mandi, Himachal Pradesh",
    date: "May – July 2024",
    meta: "Guide: Dr. Dericks P. Shukla",
    detail:
      "Landslide assessment in the Kamand–Mandi region — collected & analyzed geotechnical and topographical data, performed soil characterization (moisture content, grain size analysis), prepared ArcGIS thematic maps, and integrated field + GIS data for hazard assessment.",
    logo: "/images/logo-mandi.png",
    // gallery: ["/images/fieldwork-1.jpg", "/images/fieldwork-2.jpg", "/images/gis-map.jpg"],
  },
];

export const timeline = [...experience, ...education].sort((a, b) => 0);

export const projects = [
  {
    id: "proj-micp",
    title: "MICP Bio-Cementation of Overburden-Derived Sand",
    status: "Ongoing",
    tags: ["Ground Improvement", "Bio-Cementation", "Geotechnics"],
    summary:
      "Researching microbially induced calcite precipitation (MICP) for sustainable improvement of overburden-derived sand.",
    points: [
      "Geotechnical characterization of untreated sand: Sieve Analysis, Specific Gravity, Relative Density, Direct Shear Tests.",
      "Evaluated particle size distribution, density characteristics, and shear strength parameters to establish baseline soil behavior.",
      "Preparing MICP-treated specimens to study the influence of bio-cementation on static & dynamic engineering properties.",
    ],
    image: micpImage,
  },
  {
    id: "proj-peg400",
    title: "Self-Curing Concrete Using PEG 400",
    status: "Completed",
    tags: ["Concrete Technology", "Sustainable Construction"],
    summary:
      "Experimental study on Polyethylene Glycol (PEG 400) as a self-curing compound in M20 grade concrete to reduce external water-curing demand.",
    points: [
      "Prepared mixes at 1%, 1.5%, and 2% PEG 400 dosage by weight of cement; tested fresh & hardened properties.",
      "Evaluated compressive, split tensile, and flexural strength at 7, 14 and 28 days against conventionally cured concrete.",
      "Found 1% PEG 400 optimal — strong strength retention with reduced water demand, a viable option for water-scarce regions.",
    ],
    image: peg400Image,
  },
];

export const skillGroups = [
  {
    group: "Software & Tools",
    items: ["AutoCAD", "MIDAS", "GeoStudio", "ArcGIS", "MS Excel (Advanced)"],
  },
  {
    group: "Programming & Computation",
    items: ["C", "Java", "MATLAB"],
  },
  {
    group: "Laboratory & Field Testing",
    items: ["Direct Shear", "Triaxial", "Consolidation", "CBR", "Concrete Mix Design (IS Codes)", "Material Testing"],
  },
  {
    group: "Engineering Concepts",
    items: [
      "Foundation Design",
      "Ground Improvement Techniques",
      "Soil-Structure Interaction",
      "Rock Mechanics",
      "Retaining Structures",
    ],
  },
];

export const achievements = [
  { title: "GATE 2025 (Civil Engineering)", detail: "Score: 415", icon: "trophy" },
  { title: "L&T BIS Examination", detail: "Qualified — strong technical proficiency in civil engineering", icon: "medal" },
  { title: "Top 3, B.Tech Civil Engineering", detail: "Departmental academic excellence", icon: "star" },
  { title: "HACK4SUSTAIN 2025", detail: "National-level hackathon — sustainable & future-ready solutions", icon: "bulb" },
];

export const positions = [
  {
    title: "Student Placement Representative (SPR)",
    org: "IIT (ISM) Dhanbad",
    detail: "Coordinated between students and the Career Development Centre (CDC); facilitated placement activities and recruitment drives.",
  },
  {
    title: "Class Representative (CR)",
    org: "B.Tech & M.Tech",
    detail: "Coordinated between faculty and students, managing class communication and academic activities.",
  },
  {
    title: "Member",
    org: "RMLAU Club",
    detail: "Organized workshops, seminars, events, and hosted club meetings.",
  },
  {
    title: "Volunteer",
    org: "Deepotsav, Ayodhya",
    detail: "Supported large-scale cultural event organization and management.",
  },
];
