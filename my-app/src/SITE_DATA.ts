// This file contains all of the information that should be easily accessible by components of the site

// Importantly, all external links are stored here so that
// between course updates, this is the only file that needs to
// be checked for updates

// SECURITY NOTE:
/* 
This entire file is sent to the client,
Any links that appear here (even if commented
out or set to "go live" later) are technically
accessible to people who care to look for them.

If you happen to be one of the savvy students that
has discovered this "treasure trove" of unreleased
material, congratulations! Neat find ;) However, please
be aware that even if an unreleased link exists here, it's probably
not live for a reason, and you probably shouldn't use anything
that we didn't intend for you to use yet. 

This is a tradeoff we make by choosing to simplify hosting of
the website with no significant backend logic. Now, go take
a security class!
*/

// DON'T TOUCH THIS
// Able to reference content in the public folder (PUB + "/...")
export const PUB = process.env.PUBLIC_URL;

// ------ EDIT STUFF BELOW THIS LINE ------

export const announcementInfo = {
  // Appears at the top of the screen attached to navbar,
  // if an announcement exists
  message: "We'd love to hear what you think, submit anonymous feedback!",
  buttonText: "Give Feedback",
  buttonLink:
    "https://docs.google.com/forms/d/1KreaxonPm0yHkpdu0Pg9bagNk3ygip3K7fcQNIsajhQ/viewform?edit_requested=true",
  // Set & Forget tools:
  autoReleaseDate: "Feb 3, 2024 09:45:00 EST", // Automatically shows announcement on this date/time EST
  autoDismissDate: "Feb 4, 2024 09:00:00 EST", // Automatically removes announcement on this date/time EST
  // Announcement will be shown on page load and manually dismissable between the above two dates
};

export const lectures: Lecture[] = [
  {
    name: "What is LfS?",
    date: "Jan 24",
    notesLink: "https://csci1710.github.io/book/chapters/manifesto.html",
    recordingLink:
      "",
    otherLinks: [{name: "Amazon AWS Zelkova (Whitepaper)", 
                  link: "https://aws.amazon.com/blogs/security/protect-sensitive-data-in-the-cloud-with-automated-reasoning-zelkova/"}, 
                 {name: "Some Industrial Applications", 
                  link: "https://github.com/ligurio/practical-fm"}]
  },
  {
    name: "Properties and Testing",
    date: "Jan 26",
    notesLink: "https://csci1710.github.io/book/chapters/properties.html",
    recordingLink:
      "https://canvas.brown.edu/courses/1094402/external_tools/33943",
    liveCodeLink:
      "https://csci1710.github.io/book/chapters/properties/pbt.py",
  },
  {
    name: "Intro to Modeling in Froglet (Part 1, Basics)",
    date: "Jan 29",
    notesLink: "https://csci1710.github.io/book/chapters/intro_modeling/intro_modeling_1.html",
    recordingLink:
      "https://canvas.brown.edu/courses/1094402/external_tools/33943",
    liveCodeLink:
      "https://csci1710.github.io/book/chapters/intro_modeling/intro_modeling_ttt_1.frg",
  },
  {
    name: "Intro to Modeling (Part 2, Transitions); Showcase",
    date: "Jan 31",
    notesLink: "https://csci1710.github.io/book/chapters/intro_modeling/intro_modeling_2.html",
    recordingLink:
      "https://canvas.brown.edu/courses/1094402/external_tools/33943",
    liveCodeLink:
      "https://csci1710.github.io/book/chapters/intro_modeling/intro_modeling_ttt_2_inclass.frg",
  },
  {
    //name: "Design-Space Exploration and Constraint Solving",
    name: "Intro to Modeling (Part 3, Traces)",
    date: "Feb 02",
    notesLink: "https://csci1710.github.io/book/chapters/intro_modeling/intro_modeling_3.html",
    recordingLink:
      "https://canvas.brown.edu/courses/1094402/external_tools/33943",
    liveCodeLink:
    "https://csci1710.github.io/book/chapters/intro_modeling/intro_modeling_ttt_3_inclass.frg",
  },
  {
    //name: "Discrete Event Systems",
    name: "Intro to Modeling (Part 4, FAQ)",
    date: "Feb 05",
    notesLink: "https://csci1710.github.io/book/chapters/intro_modeling/intro_modeling_4.html",
    recordingLink:
      "https://canvas.brown.edu/courses/1094402/external_tools/33943",
    liveCodeLink:
      "https://csci1710.github.io/book/chapters/intro_modeling/intro_modeling_ttt_4_inclass.frg",
  },
  {
    name: "Discrete Events and Traces (Part 1, Doing Nothing Productively)",
    date: "Feb 07",
    notesLink: "https://csci1710.github.io/book/chapters/finite_and_inductive/finite_and_inductive_1.html",
    recordingLink:
      "",
    liveCodeLink:
      "https://csci1710.github.io/book/chapters/finite_and_inductive/ttt_finite.frg",
  },
  {
    name: "Discrete Events and Traces (Part 2, Preservation)",
    date: "Feb 09",
    notesLink: "https://csci1710.github.io/book/chapters/finite_and_inductive/finite_and_inductive_2.html",
    recordingLink:
      "",
    liveCodeLink:
      "https://csci1710.github.io/book/chapters/finite_and_inductive/ttt_finite.frg",
  },
  {
    name: "Inductive Verification: Binary Search (Part 1)",
    date: "Feb 12",
    notesLink: "https://csci1710.github.io/book/chapters/finite_and_inductive/finite_and_inductive_3.html",
    recordingLink:
      "",
    liveCodeLink:
      "https://csci1710.github.io/book/chapters/finite_and_inductive/binarysearch_template.frg",
  },
  {
    name: "Inductive Verification: Binary Search (Part 2)",
    date: "Feb 14",
    notesLink: "https://csci1710.github.io/book/chapters/finite_and_inductive/finite_and_inductive_3.html",
    recordingLink:
      "",
    liveCodeLink:
      "https://csci1710.github.io/book/chapters/finite_and_inductive/binarysearch_template.frg",
    otherLinks: [
      {name: "Testing reachable", 
       link: "https://csci1710.github.io/book/chapters/finite_and_inductive/testing_reachable.frg"}
    ]
    
  },
  {
    name: "Inductive Verification: Binary Search (Part 3)",
    date: "Feb 16",
    notesLink: "https://csci1710.github.io/book/chapters/finite_and_inductive/finite_and_inductive_3.html",
    recordingLink:
      "",
    liveCodeLink:
      "https://csci1710.github.io/book/chapters/finite_and_inductive/binarysearch_inclass.frg",
  },
  {
    name: "Modeling syntax, semantics, and sets: Relational Forge",
    date: "Feb 21",
    notesLink: "https://csci1710.github.io/book/chapters/sets-and-boolean-logic/modeling-booleans-1.html",
    recordingLink:
      "",
    liveCodeLink:
      "",
  },
  {
    name: "Modeling syntax, semantics, and sets: Relational Forge",
    date: "Feb 23",
    notesLink: "https://csci1710.github.io/book/chapters/sets-and-boolean-logic/modeling-booleans-1.html",
    recordingLink:
      "",
    liveCodeLink:
      "https://csci1710.github.io/book/chapters/sets-and-boolean-logic/booleans-inclass-1.frg",
  },
  {
    name: "Join and Reachability",
    date: "Feb 26",
    notesLink: "https://csci1710.github.io/book/chapters/sets-and-boolean-logic/reachability.html",
    recordingLink:
      "",
    liveCodeLink:
      "https://csci1710.github.io/book/chapters/sets-and-boolean-logic/reach.frg",
  },
  {
    name: "Modeling Mutex (Part 1)",
    date: "Feb 28",
    notesLink: "https://csci1710.github.io/book/chapters/sets-and-boolean-logic/sets-induction-mutex.html",
    recordingLink:
      "",
    liveCodeLink:
      "https://csci1710.github.io/book/chapters/sets-and-boolean-logic/mutex.frg",
  },
  {
    name: "Modeling Mutex (Part 2)",
    date: "Mar 01",
    notesLink: "https://csci1710.github.io/book/chapters/sets-and-boolean-logic/sets-beyond-assertions.html",
    recordingLink:
      "",
    liveCodeLink:
      "https://csci1710.github.io/book/chapters/sets-and-boolean-logic/mutex.frg",
  },
  {
    name: "Liveness and Lassos",
    date: "Mar 04",
    notesLink: "https://csci1710.github.io/book/chapters/temporal/liveness_and_lassos.html",
    recordingLink:
      "",
    liveCodeLink:
      "https://csci1710.github.io/book/chapters/temporal/mutex.frg",
  },
  {
    name: "Temporal Forge",
    date: "Mar 06",
    notesLink: "https://csci1710.github.io/book/chapters/temporal/temporal_operators.html",
    recordingLink:
      "",
    liveCodeLink:
      "https://csci1710.github.io/book/chapters/temporal/mutex_temporal.frg",
    otherLinks: [
        {name: "Integer counter model", 
         link: "https://csci1710.github.io/book/chapters/temporal/counter.frg"}
      ]
  },
  {
    name: "Modeling Mutex (Part 3, Temporally)",
    date: "Mar 08",
    notesLink: "https://csci1710.github.io/book/chapters/temporal/temporal_operators_2.html",
    recordingLink:
      "",
    liveCodeLink:
      "https://csci1710.github.io/book/chapters/temporal/mutex_temporal.frg",
    
  },
  {
    name: "Obligations and the Past",
    date: "Mar 11",
    notesLink: "https://csci1710.github.io/book/chapters/temporal/obligations_past.html",
    recordingLink:
      "",
    liveCodeLink:
      "https://csci1710.github.io/book/chapters/temporal/mutex_temporal.frg",
    otherLinks: [
        {name: "Traffic lights model", 
         link: "https://csci1710.github.io/book/chapters/temporal/traffic.frg"}
    ]
  },
  {
    name: "MST, Temporally",
    date: "Mar 13",
    notesLink: "",
    recordingLink:
      "",
    liveCodeLink:
      "https://github.com/csci1710/public-examples/blob/main/2024/prim.frg",
  },
  {
    name: "Peterson's Lock (Part 1)",
    date: "Mar 15",
    notesLink: "https://csci1710.github.io/book/chapters/temporal/fixing_lock_temporal.html",
    recordingLink:
      "",
    liveCodeLink:
      "https://csci1710.github.io/book/chapters/temporal/peterson.frg",
  },
  {
    name: "Peterson's Lock (Part 2), What was the problem in Prim's?",
    date: "Mar 18",
    notesLink: "https://csci1710.github.io/book/chapters/temporal/fixing_lock_temporal.html",
    recordingLink:
      "",
    liveCodeLink:
      "https://csci1710.github.io/book/chapters/temporal/peterson.frg",
    otherLinks: [
        {name: "Prim's algorithm model", 
         link: "https://github.com/csci1710/public-examples/blob/main/2024/prim.frg"}
    ]
  },
  {
    name: "How Forge Works (Part 1)",
    date: "Mar 20",
    notesLink: "https://csci1710.github.io/book/chapters/solvers/bounds_booleans_how_forge_works.html",
    recordingLink:
      "",
    liveCodeLink:
      "",
  },
  {
    name: "Q&A (No notes)",
    date: "Mar 22",
    notesLink: "",
    recordingLink:
      "",
    liveCodeLink:
      "",
  },
  {
    name: "Solving SAT (DPLL Part 1)",
    date: "Apr 01",
    notesLink: "https://csci1710.github.io/book/chapters/solvers/bounds_booleans_how_forge_works.html",
    recordingLink:
      "",
    liveCodeLink:
      "",
  },
  {
    name: "Solving SAT (DPLL Part 2)",
    date: "Apr 03",
    notesLink: "https://csci1710.github.io/book/chapters/solvers/bounds_booleans_how_forge_works.html",
    recordingLink:
      "",
    liveCodeLink:
      "",
  },
  {
    name: "Resolution (Part 1)",
    date: "Apr 05",
    notesLink: "",
    recordingLink:
      "",
    liveCodeLink:
      "",
  },
  {
    name: "Resolution (Part 2)",
    date: "Apr 08",
    notesLink: "",
    recordingLink:
      "",
    liveCodeLink:
      "",
  },
  {
    name: "Resolution (Part 3)",
    date: "Apr 10",
    notesLink: "",
    recordingLink:
      "",
    liveCodeLink:
      "",
  },
  {
    name: "(Optional) Future of 1710",
    date: "Apr 12",
    notesLink: "",
    recordingLink:
      "",
    liveCodeLink:
      "",
  },
  {
    name: "SMT (Whirlwind Tour)",
    date: "Apr 15",
    notesLink: "",
    recordingLink:
      "",
    liveCodeLink:
      "",
  },
  {
    name: "SMT (Applications)",
    date: "Apr 17",
    notesLink: "",
    recordingLink:
      "",
    liveCodeLink:
      "",
  },
  {
    name: "SMT (Algorithms)",
    date: "Apr 19",
    notesLink: "",
    recordingLink:
      "",
    liveCodeLink:
      "",
  },
  {
    name: "SMT (CEGIS and Synthesis)",
    date: "Apr 22",
    notesLink: "",
    recordingLink:
      "",
    liveCodeLink:
      "",
  },
  {
    name: "TBD (Topics by Request) or Guest",
    date: "Apr 24",
    notesLink: "",
    recordingLink:
      "",
    liveCodeLink:
      "",
  },
  {
    name: "Reading Period (Possible Guest)",
    date: "Apr 26",
    notesLink: "",
    recordingLink:
      "",
    liveCodeLink:
      "",
  },
  {
    name: "Reading Period (Possible Guest)",
    date: "Apr 29",
    notesLink: "",
    recordingLink:
      "",
    liveCodeLink:
      "",
  },
  {
    name: "Reading Period (Possible Guest)",
    date: "May 01",
    notesLink: "",
    recordingLink:
      "",
    liveCodeLink:
      "",
  },
  {
    name: "Reading Period (Possible Guest)",
    date: "May 03",
    notesLink: "",
    recordingLink:
      "",
    liveCodeLink:
      "",
  },
  {
    name: "Reading Period (Possible Guest)",
    date: "May 06",
    notesLink: "",
    recordingLink:
      "",
    liveCodeLink:
      "",
  },
];

// For assignments, exclude HREF field to automatically disable the assignment
export const homeworkAssignments: Assignment[] = [
  {
    name: "PBT",
    dateRange: "Jan 26 → Feb 1, 2024",
    href: "https://hackmd.io/@csci1710/HkjlMXsYa",
    autoReleaseDate: "Jan 26, 2024 11:00:00 EST",
  },
  {
    name: "Modeling Intro",
    dateRange: "Feb 2 → Feb 8, 2024",
    href: "https://hackmd.io/@csci1710/B1NEG7jKa",
    autoReleaseDate: "Feb 02, 2024 11:00:00 EST",
  },
  {
    name: "Physical Keys",
    dateRange: "Feb 9 → Feb 15, 2024",
    href: "https://hackmd.io/@csci1710/ByLnzQstT",
    autoReleaseDate: "Feb 09, 2024 11:00:00 EST",
  },
  {
    name: "Hotel Locking",
    dateRange: "Feb 21 → Feb 27, 2024",
    href: "https://hackmd.io/@csci1710/B1CCmQjKa",
    autoReleaseDate: "Feb 21, 2024 11:00:00 EST",
  },
  {
    name: "Memory Management",
    dateRange: "Mar 1 → Mar 7, 2024",
    href: "https://hackmd.io/@csci1710/S1xVNmiK6",
    autoReleaseDate: "Mar 01, 2024 11:00:00 EST",
  },
  {
    name: "Temporal Modeling",
    dateRange: "Mar 08 → Mar 14, 2024",
    href: "https://hackmd.io/@csci1710/HJk8E7jFa",
    autoReleaseDate: "Mar 08, 2024 11:00:00 EST",
  },
  {
    name: "Hotel Locking (Lab Portion)",
    dateRange: "Mar 07 → Mar 10, 2024",
    href: "https://hackmd.io/@csci1710/B1UdLQjKp",
    autoReleaseDate: "Mar 07, 2024 20:30:00 EST",
  },
  {
    name: "Elevator Critique",
    dateRange: "Mar 15 → Mar 21, 2024",
    href: "https://hackmd.io/@csci1710/rJ3YVQoFT",
    autoReleaseDate: "Mar 15, 2024 11:00:00 EST",
  },
  {
    name: "SAT 1",
    dateRange: "Apr 5 → Apr 11, 2024",
    href: "https://hackmd.io/@csci1710/Sk8ANXiYT",
    autoReleaseDate: "Apr 5, 2024 11:00:00 EDT",
  },
  {
    name: "SAT 2",
    dateRange: "Apr 15 → Apr 21, 2024",
    href: "https://hackmd.io/@csci1710/BkMlBmoKa",
    autoReleaseDate: "Apr 15, 2024 11:00:00 EDT",
  },
  {
    name: "SMT",
    dateRange: "Apr 22 → Apr 28, 2024",
    href: "https://hackmd.io/@csci1710/rkzzBmoYa",
    autoReleaseDate: "Apr 22, 2024 11:00:00 EDT",
  },
  // {
  //   // Rickroll ;)
  //   name: "Hardest Assignment Ever...",
  //   dateRange: "Oct 25 → Oct 26, 2009",
  //   href: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
  //   autoReleaseDate: "Jan 25, 2024 21:28:59 EST",
  // },
  // ...
];

export const labAssignments: Assignment[] = [
  {
    name: "(Optional) Async Python",
    dateRange: "Jan 27, 2024",
    href: "https://hackmd.io/@csci1710/By-lPmstT",
    autoReleaseDate: "Jan 23, 2024 09:45:00 EST",
  },
  {
    name: "Tic Tac Toe",
    dateRange: "Jan 31 → Feb 01, 2024",
    href: "https://hackmd.io/@csci1710/HkOLBXstT",
    autoReleaseDate: "Feb 01, 2024 20:30:00 EST",
  },
  {
    name: "N Queens",
    dateRange: "Feb 07 → Feb 08, 2024",
    href: "https://hackmd.io/@csci1710/BkYfImjKp",
    autoReleaseDate: "Feb 08, 2024 20:30:00 EST",
  },
  {
    name: "Ring Election",
    dateRange: "Feb 14 → Feb 15, 2024",
    href: "https://hackmd.io/@csci1710/ryC5S7jt6",
    autoReleaseDate: "Feb 15, 2024 20:30:00 EST",
  },
  {
    name: "Curiosity co-lab",
    dateRange: "Feb 21 → Feb 22, 2024",
    href: "https://hackmd.io/@csci1710/rJm6XmjKT",
  },
  {
    name: "Reference Counting",
    dateRange: "Feb 28 → Feb 29, 2024",
    href: "https://hackmd.io/@csci1710/S1LXKW2t6",
    autoReleaseDate: "Feb 29, 2024 20:30:00 EST",
  },
  {
    name: "Hotel Case Study",
    dateRange: "Mar 06 → Mar 07, 2024",
    href: "https://drive.google.com/file/d/1R6Lt2wQkR3hz1G6CDnE-tP9wkwJK8qT2/view?usp=sharing",
    autoReleaseDate: "Mar 07, 2024 20:30:00 EST",
  },
  {
    name: "Dining Blacksmiths",
    dateRange: "Mar 13 → Mar 14, 2024",
    href: "https://hackmd.io/@csci1710/HkbhU7sta",
    autoReleaseDate: "Mar 14, 2024 20:30:00 EST",
  },
  {
    name: "Proposal co-lab",
    dateRange: "Apr 03 → Apr 04, 2024",
    // href: "https://www.google.com",
  },
  {
    name: "SAT 2 co-lab",
    dateRange: "Apr 17 → Apr 18, 2024",
    // href: "https://www.google.com",
  },
];

export const projectAssignments: Assignment[] = [
  {
    name: "Curiosity Modeling",
    dateRange: "Feb 16 → Feb 29, 2024",
    href: "https://hackmd.io/@csci1710/rJm6XmjKT",
    autoReleaseDate: "Feb 16, 2024 11:00:00 EST",
  },
  {
    name: "Final Project (Proposal)",
    dateRange: "Apr 04, 2024",
    href: "https://hackmd.io/@csci1710/ByCXUZ2KT",
  },
  {
    name: "Final Project",
    dateRange: "Apr 14 → May 11, 2024",
    href: "https://hackmd.io/@csci1710/ByCXUZ2KT",
    autoReleaseDate: "Apr 14, 2024 11:00:00 EST",
  },
];

// export const forgeDocsLink: string = "";
// export const EdStemLink: string = "";

export const FAQLink: string =
  "https://docs.google.com/document/d/e/2PACX-1vQek5FgRtgmr7rdxOnq5qzTIaRoVcc0dN4dERg5qu4oJ4hTCAmWJkrBbNWUdm_zsMRtQOmzpG17fWQK/pub";

export const policies: Resource[] = [
  {
    name: "Syllabus",
    href: "https://docs.google.com/document/d/1oX0zMFbLzYvUhUheEy1ak4AYdOlDhRbg97KvMHVt9MA/edit?usp=drive_link",
  },
   { name: "Collaboration Policy", 
     href: "https://docs.google.com/document/d/e/2PACX-1vQ7b5GLg6Kie0l4zzuLLQ7oaC89V931dqbHQl7Rgr7sVT05bIu1WrGTcNaGpn9gg5y9Tc7GvLS32vf1/pub" },
];

export const importantLinks: Resource[] = [
  {
    name: "EdStem",
    href: "https://edstem.org/us/courses/54376/discussion/",
  },
  { name: "Hours", href: "https://hours.cs.brown.edu/login" },
  {
    name: "Collaboration Form",
    href: "https://forms.gle/dHaaedpVFh7k4D1x9",
  },
  {
    name: "Brown CS Health and Wellness",
    href: "https://browncs-health-and-wellness.github.io/",
  },
];

export const guides: Resource[] = [
  {
    name: "Setup & Installation",
    href: "https://hackmd.io/@csci1710/r1rZAWeo6",
  },
  {
    name: "Forge Documentation",
    href: "https://csci1710.github.io/forge-documentation/",
  },
  {
    name: "Toadus Ponens Guide",
    href: "https://docs.google.com/document/d/1zdv6uF7jdC8CR-d73AojsH68jaLmNG3MwlcZ9R2lWpc/edit?usp=sharing",
  },
  {
    // Goes live later in semester
    name: "Python Z3",
    href: "", // Greyed out for now
    // href: "https://docs.google.com/document/d/1ri_-SadZ-IWqrg3ZNY6tJRB_0OSDdwJRYNtdHkSehuc/preview",
  },
];

export const professor: staffMember = {
  name: "Tim Nelson",
  image: PUB + "/images/staff/tim.jpeg",
  alt_image: PUB + "/images/staff/tim_frog.jpeg",
  alt_objectPosition: "90% 50%",
  pronouns: "he/they",
  bio: 'I’m a first-generation college student who attended community college, a state college, the "college" of an industry job, and a STEM university. Now I teach at Brown. You might call this a collage of colleges, although not quite a universe of universities.',
  favorite_amphibian:
    "Neutral (as a professor, I can't play favorites!)",
  role: "Professor",
  // favorite_amphibian_image: "",
};

export const htas: staffMember[] = [
  {
    name: "Bisheshank C Aryal",
    image: PUB + "/images/staff/bisheshank.jpeg",
    objectPosition: "center 35%",
   // alt_image: PUB + "/images/staff/david_frog.jpeg",
    alt_objectPosition: "80% 50%",
    pronouns: "he/him",
    bio: "Hihi! I'm a sophmore studying cs and trying my best at math ;-; Other than that, I'm hoping to convince people I'm an artist by just owning a sketchbook. Apparently waving it around dramatically helps. Happy forging, and may Nim Telson bless your code <3",
    favorite_amphibian: "Team Toad",
    role: "HTA",
  },
  {
    name: "Karis Ma",
    image: PUB + "/images/staff/karis.jpeg",
    objectPosition: "center 65%",
   // alt_image: PUB + "/images/staff/megan_frog.jpeg",
    pronouns: "she/her",
    bio: "Hi! I'm Karis, and I'm a junior from Singapore concentrating in CS and Sociology. Outside of classes, I'm involved with Fusion Dance Company, the Curricular Resource Center, and also have a deep passion for naps in the rare moments I can have them. I love talking to students, so feel free to say hi whenever! Welcome to LfS – it's a wonderful place :)",
    favorite_amphibian: "Team Toad",
    role: "HTA",
  },
  {
    name: "Karim Mouline",
    image: PUB + "/images/staff/karim.jpeg",
    objectPosition: "center 85%",
   // alt_image: PUB + "/images/staff/megan_frog.jpeg",
    pronouns: "he/him",
    bio: "Hi everyone! I'm a junior studying Math-CS (heavy on the CS part) who likes to run and swim. I am also Ethel Cain's #1 fan. I'm excited to meet you all!",
    favorite_amphibian: "Team Frog",
    role: "HTA",
  },
];

export const utas: staffMember[] = [
  {
    name: "Brandon Diaz",
    image: PUB + "/images/staff/brandon.jpeg",
   // alt_image: PUB + "/images/staff/yihao_frog.jpeg",
    alt_objectPosition: "center 65%",
    pronouns: "he/him",
    bio: "Hi everyone! I'm a senior studying CS and IAPA and I'm from Atlanta, GA. I love spontaneous trips and listening to music. Can’t wait to meet everyone! :)",
    favorite_amphibian: "Team Frog",
    role: "UTA",
  },

  {
    name: "Maya Fleischer",
    image: PUB + "/images/staff/maya.jpeg",
    objectPosition: "center 15%",
   // alt_image: PUB + "/images/staff/conrad_frog.jpeg",
    alt_objectPosition: "center 25%",
    pronouns: "she/her",
    bio: "I am a senior studying Computer Science from South Africa. <a nice message about how excited I am>!",
    favorite_amphibian: "Team Frog",
    role: "UTA",
  },
  {
    name: "Valentina Lin",
    image: PUB + "/images/staff/valentina.jpeg",
    objectPosition: "center 35%",
   // alt_image: PUB + "/images/staff/kendra_frog.jpeg",
    pronouns: "she/they",
    bio: "Hello! I'm Valentina, a junior from SoCal concentrating in Computer Science. I have a remarkable talent for running into strange bugs, and outside of CS, you'll probably find me singing or (hopefully) rock climbing. Talk to me about Studio Ghibli, your favorite foods, or cool places around campus!",
    favorite_amphibian: "Team Toad",
    role: "UTA",
  },
  {
    name: "Ezra Rocha",
    image: PUB + "/images/staff/ezra.jpeg",
    pronouns: "he/him",
   // alt_image: PUB + "/images/staff/ese_frog.jpeg",
    bio: "Hey y'all! I'm Ezra, a senior from Dallas, TX studying CS. In my free time, I'm binging shows, playing board games or practicing violin (shoutout to AVGE). Be sure to axolotl questions at my hours!",
    favorite_amphibian: "Team Toad",
    role: "UTA",
  },
  {
    name: "Conrad Zimmerman",
    image: PUB + "/images/staff/conrad.jpg",
    //alt_image: PUB + "/images/staff/ezra_frog.jpeg",
    pronouns: "she/her",
    bio: "I'm a RUE student who studies math and plays Pokemon Go! Before that I graduated from a community college, developed software, and taught school. I love coffee, formal methods, cute dogs, and first order logic.",
    favorite_amphibian: "Team Frog",
    role: "UTA",
  },
  {
    name: "Snoop Frogg",
    image: PUB + "/images/staff/snoop.jpg",
    objectPosition: "center 40%",
    alt_image: PUB + "/images/staff/snoop_alt.jpg",
    pronouns: "he/they",
    bio: '"Rapper, producer, formal method and modeler."',
    favorite_amphibian: "Team Frog, duh",
    role: "UTA",
  },
];

export const gradtas: staffMember[] = [
  {
    name: "Siddhartha Prasad",
    image: PUB + "/images/staff/siddhartha.jpeg",
    alt_image: PUB + "/images/staff/siddhartha_frog.jpeg",
    bio: "“Frog pushed a coat down over the top of Toad. Frog pulled snowpants up over the bottom of Toad. He put a hat and scarf on Toad’s head. ‘Help!’ cried Toad. ‘My best friend is trying to kill me!’ ‘I’m only getting you ready for winter,’ said Frog. ”",
    pronouns: "he/him",
    favorite_amphibian: "Team Toad",
    role: "Grad TA",
  },
  {
    name: "Toadus Ponens",
    image: PUB + "/images/staff/algo_ribbit.jpeg",
    //alt_image: PUB + "/images/staff/algo_ribbit_alt.jpeg",
    bio: "Croak",
    pronouns: "he/they",
    favorite_amphibian: "Team Toad, obviously",
    role: "Grad TA",
  },
];

export const calendarLink =
  "https://calendar.google.com/calendar/embed?src=c_b8bddcf512bfb38a4aeb75f2bde1e1ac7a408e070171ef5c915ff161fe459616%40group.calendar.google.com&ctz=America%2FNew_York";

// Type definitions

export type Resource = {
  name: string;
  href: string;
};

export type Lecture = {
  name: string;
  date: string; // Jan 28
  description?: string; // Short 1-2 sentence lecture description, optional
  notesLink?: string;
  recordingLink?: string;
  liveCodeLink?: string;
  // Arbitrary links with arbitrary names:
  otherLinks?: { name: string; link: string }[]; // NOTE: Nothing preventing name conflict between notes/recording/livecode name
};

// export type LectureWeek = {
//   name: string; // week X
//   dailyLectures: Lecture[];
// };

export type Assignment = {
  name: string;
  dateRange: string;
  href?: string; // If left blank, assignment appears as disabled
  autoReleaseDate?: string; // Will treat href as "blank" until this date/time (EST)
};

export type staffMember = {
  name: string;
  image: string;
  objectPosition?: string; // Fix image alignment if necessary (on mobile wrong part of image gets cut off)
  alt_image?: string; // On image hover, the image changes to alt image
  alt_objectPosition?: string; // Same as objectPosition but for alt image
  pronouns: string;
  bio: string;
  favorite_amphibian: string;
  role: string; // prof/hta/uta/sta...
  // favorite_amphibian_image: string;
};
