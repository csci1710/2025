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
  autoReleaseDate: "Mar 3, 2025 09:45:00 EST", // Automatically shows announcement on this date/time EST
  autoDismissDate: "Mar 4, 2025 09:00:00 EST", // Automatically removes announcement on this date/time EST
  // Announcement will be shown on page load and manually dismissable between the above two dates
};

export const lectures: Lecture[] = [
  {
    name: "What is LfS?",
    date: "Jan 22",
    notesLink:
      "https://tnelson.github.io/forgebook/chapters/manifesto/manifesto.html",
    recordingLink: "",
    otherLinks: [
      {
        name: "Amazon AWS Zelkova (Whitepaper)",
        link: "https://aws.amazon.com/blogs/security/protect-sensitive-data-in-the-cloud-with-automated-reasoning-zelkova/",
      },
      {
        name: "Some Industrial Applications",
        link: "https://github.com/ligurio/practical-fm",
      },
    ],
  },
  {
    name: "Properties and Testing",
    date: "Jan 24",
    notesLink:
      "https://tnelson.github.io/forgebook/chapters/properties/pbt.html",
    recordingLink: "",
    liveCodeLink: "",
  },
  {
    name: "Intro to Modeling in Froglet (Part 1, Basics)",
    date: "Jan 27",
    notesLink: "https://tnelson.github.io/forgebook/chapters/ttt/ttt.html",
    recordingLink: "",
    liveCodeLink:
      "https://github.com/csci1710/2025/blob/main/my-app/public/livecode/2025/jan27_ttt.frg",
  },
  {
    name: "Intro to Modeling (Part 2, Transitions); Showcase",
    date: "Jan 29",
    notesLink: "https://tnelson.github.io/forgebook/chapters/bst/bst.html",
    recordingLink: "",
    liveCodeLink:
      "https://github.com/csci1710/2025/blob/main/my-app/public/livecode/2025/jan29_ttt.frg",
  },
  {
    //name: "Design-Space Exploration and Constraint Solving",
    name: "Intro to Modeling (Part 3, Traces)",
    date: "Jan 31",
    notesLink: "https://tnelson.github.io/forgebook/chapters/adder/rca.html",
    recordingLink: "",
    liveCodeLink:
      "https://github.com/csci1710/2025/blob/main/my-app/public/livecode/2025/jan31_ttt.frg",
  },
  {
    //name: "Discrete Event Systems",
    name: "Intro to Modeling (Part 4, FAQ)",
    date: "Feb 03",
    notesLink: "https://tnelson.github.io/forgebook/chapters/qna/static.html",
    recordingLink: "",
    liveCodeLink:
      "https://github.com/csci1710/2025/blob/main/my-app/public/livecode/2025/feb03_ttt.frg",
  },
  {
    name: "Discrete Events and Traces (Part 1, Doing Nothing Productively)",
    date: "Feb 05",
    notesLink:
      "https://tnelson.github.io/forgebook/chapters/ttt/ttt_games.html",
    recordingLink: "",
    liveCodeLink: "",
  },
  {
    name: "Discrete Events and Traces (Part 2, Preservation)",
    date: "Feb 07",
    notesLink:
      "https://tnelson.github.io/forgebook/chapters/inductive/bsearch.html",
    recordingLink: "",
    liveCodeLink: "",
  },
  // {
  //   name: "Inductive Verification: Binary Search (Part 1)",
  //   date: "Feb 10",
  //   notesLink: "https://tnelson.github.io/forgebook/chapters/bst/descent.html",
  //   recordingLink: "",
  //   liveCodeLink:
  //     "https://csci1710.github.io/book/chapters/finite_and_inductive/binarysearch_template.frg",
  // },
  // {
  //   name: "Inductive Verification: Binary Search (Part 2)",
  //   date: "Feb 12",
  //   notesLink: "https://tnelson.github.io/forgebook/chapters/validation/validating_events.html",
  //   recordingLink: "",
  //   liveCodeLink:
  //     "https://csci1710.github.io/book/chapters/finite_and_inductive/binarysearch_template.frg",
  //   otherLinks: [
  //     {
  //       name: "Testing reachable",
  //       link: "https://csci1710.github.io/book/chapters/finite_and_inductive/testing_reachable.frg",
  //     },
  //   ],
  // },
  // {
  //   name: "Inductive Verification: Binary Search (Part 3)",
  //   date: "Feb 14",
  //   notesLink: "https://tnelson.github.io/forgebook/chapters/validation/validating_events.html",
  //   recordingLink: "",
  //   liveCodeLink:
  //     "https://csci1710.github.io/book/chapters/finite_and_inductive/binarysearch_inclass.frg",
  // },
  // {
  //   name: "Modeling syntax, semantics, and sets: Relational Forge",
  //   date: "Feb 19",
  //   notesLink: "https://tnelson.github.io/forgebook/chapters/qna/events.html",
  //   recordingLink: "",
  //   liveCodeLink: "",
  // },
  // {
  //   name: "Modeling syntax, semantics, and sets: Relational Forge",
  //   date: "Feb 21",
  //   notesLink: "https://tnelson.github.io/forgebook/chapters/qna/events.html",
  //   recordingLink: "",
  //   liveCodeLink:
  //     "https://csci1710.github.io/book/chapters/sets-and-boolean-logic/booleans-inclass-1.frg",
  // },
  // {
  //   name: "Join and Reachability",
  //   date: "Feb 24",
  //   notesLink: "https://tnelson.github.io/forgebook/chapters/relations/modeling-booleans-1.html",
  //   recordingLink: "",
  //   liveCodeLink:
  //     "https://csci1710.github.io/book/chapters/sets-and-boolean-logic/reach.frg",
  // },
  // {
  //   name: "Modeling Mutex (Part 1)",
  //   date: "Feb 26",
  //   notesLink: "https://tnelson.github.io/forgebook/chapters/relations/sets-induction-mutex.html",
  //   recordingLink: "",
  //   liveCodeLink:
  //     "https://csci1710.github.io/book/chapters/sets-and-boolean-logic/mutex.frg",
  // },
  // {
  //   name: "Modeling Mutex (Part 2)",
  //   date: "Feb 28",
  //   notesLink: "https://tnelson.github.io/forgebook/chapters/relations/sets-beyond-assertions.html",
  //   recordingLink: "",
  //   liveCodeLink:
  //     "https://csci1710.github.io/book/chapters/sets-and-boolean-logic/mutex.frg",
  // },
  // {
  //   name: "Liveness and Lassos",
  //   date: "Mar 03",
  //   notesLink: "https://tnelson.github.io/forgebook/chapters/temporal/liveness_and_lassos.html",
  //   recordingLink: "",
  //   liveCodeLink: "https://csci1710.github.io/book/chapters/temporal/mutex.frg",
  // },
  // {
  //   name: "Temporal Forge",
  //   date: "Mar 05",
  //   notesLink: "https://tnelson.github.io/forgebook/chapters/temporal/temporal_operators.html",
  //   recordingLink: "",
  //   liveCodeLink:
  //     "https://csci1710.github.io/book/chapters/temporal/mutex_temporal.frg",
  //   otherLinks: [
  //     {
  //       name: "Integer counter model",
  //       link: "https://csci1710.github.io/book/chapters/temporal/counter.frg",
  //     },
  //   ],
  // },
  // {
  //   name: "Modeling Mutex (Part 3, Temporally)",
  //   date: "Mar 07",
  //   notesLink: "https://tnelson.github.io/forgebook/chapters/temporal/temporal_operators_2.html",
  //   recordingLink: "",
  //   liveCodeLink:
  //     "https://csci1710.github.io/book/chapters/temporal/mutex_temporal.frg",
  // },
  // {
  //   name: "Obligations and the Past",
  //   date: "Mar 10",
  //   notesLink: "https://tnelson.github.io/forgebook/chapters/temporal/obligations_past.html",
  //   recordingLink: "",
  //   liveCodeLink:
  //     "https://csci1710.github.io/book/chapters/temporal/mutex_temporal.frg",
  //   otherLinks: [
  //     {
  //       name: "Traffic lights model",
  //       link: "https://csci1710.github.io/book/chapters/temporal/traffic.frg",
  //     },
  //   ],
  // },
  // {
  //   name: "MST, Temporally",
  //   date: "Mar 12",
  //   notesLink: "",
  //   recordingLink: "",
  //   liveCodeLink:
  //     "https://github.com/csci1710/public-examples/blob/main/2024/prim.frg",
  // },
  // {
  //   name: "Peterson's Lock (Part 1)",
  //   date: "Mar 14",
  //   notesLink: "https://tnelson.github.io/forgebook/chapters/temporal/fixing_lock_temporal.html",
  //   recordingLink: "",
  //   liveCodeLink:
  //     "https://csci1710.github.io/book/chapters/temporal/peterson.frg",
  // },
  // {
  //   name: "Peterson's Lock (Part 2), What was the problem in Prim's?",
  //   date: "Mar 17",
  //   notesLink: "https://tnelson.github.io/forgebook/chapters/temporal/fixing_lock_temporal.html",
  //   recordingLink: "",
  //   liveCodeLink:
  //     "https://csci1710.github.io/book/chapters/temporal/peterson.frg",
  //   otherLinks: [
  //     {
  //       name: "Prim's algorithm model",
  //       link: "https://github.com/csci1710/public-examples/blob/main/2024/prim.frg",
  //     },
  //   ],
  // },
  // {
  //   name: "How Forge Works (Part 1)",
  //   date: "Mar 19",
  //   notesLink:
  //     "https://csci1710.github.io/book/chapters/solvers/bounds_booleans_how_forge_works.html",
  //   recordingLink: "",
  //   liveCodeLink: "",
  // },
  // {
  //   name: "Q&A (No notes)",
  //   date: "Mar 21",
  //   notesLink: "",
  //   recordingLink: "",
  //   liveCodeLink: "",
  // },
  // {
  //   name: "Solving SAT (DPLL Part 1)",
  //   date: "Mar 31",
  //   notesLink:
  //     "https://csci1710.github.io/book/chapters/solvers/bounds_booleans_how_forge_works.html",
  //   recordingLink: "",
  //   liveCodeLink: "",
  // },
  // {
  //   name: "Solving SAT (DPLL Part 2)",
  //   date: "Apr 02",
  //   notesLink:
  //     "https://csci1710.github.io/book/chapters/solvers/bounds_booleans_how_forge_works.html",
  //   recordingLink: "",
  //   liveCodeLink: "",
  // },
  // {
  //   name: "Resolution (Part 1)",
  //   date: "Apr 04",
  //   notesLink: "",
  //   recordingLink: "",
  //   liveCodeLink: "",
  // },
  // {
  //   name: "Resolution (Part 2)",
  //   date: "Apr 07",
  //   notesLink: "",
  //   recordingLink: "",
  //   liveCodeLink: "",
  // },
  // {
  //   name: "Resolution (Part 3)",
  //   date: "Apr 09",
  //   notesLink: "",
  //   recordingLink: "",
  //   liveCodeLink: "",
  // },
  // {
  //   name: "(Optional) Future of 1710",
  //   date: "Apr 11",
  //   notesLink: "",
  //   recordingLink: "",
  //   liveCodeLink: "",
  // },
  // {
  //   name: "SMT (Whirlwind Tour)",
  //   date: "Apr 14",
  //   notesLink: "",
  //   recordingLink: "",
  //   liveCodeLink: "",
  // },
  // {
  //   name: "SMT (Applications)",
  //   date: "Apr 16",
  //   notesLink: "",
  //   recordingLink: "",
  //   liveCodeLink: "",
  // },
  // {
  //   name: "SMT (Algorithms)",
  //   date: "Apr 18",
  //   notesLink: "",
  //   recordingLink: "",
  //   liveCodeLink: "",
  // },
  // {
  //   name: "SMT (CEGIS and Synthesis)",
  //   date: "Apr 21",
  //   notesLink: "",
  //   recordingLink: "",
  //   liveCodeLink: "",
  // },
  // {
  //   name: "TBD (Topics by Request) or Guest",
  //   date: "Apr 23",
  //   notesLink: "",
  //   recordingLink: "",
  //   liveCodeLink: "",
  // },
  // {
  //   name: "Reading Period (Possible Guest)",
  //   date: "Apr 25",
  //   notesLink: "",
  //   recordingLink: "",
  //   liveCodeLink: "",
  // },
  // {
  //   name: "Reading Period (Possible Guest)",
  //   date: "Apr 28",
  //   notesLink: "",
  //   recordingLink: "",
  //   liveCodeLink: "",
  // },
  // {
  //   name: "Reading Period (Possible Guest)",
  //   date: "Apr 30",
  //   notesLink: "",
  //   recordingLink: "",
  //   liveCodeLink: "",
  // },
  // {
  //   name: "Reading Period (Possible Guest)",
  //   date: "May 02",
  //   notesLink: "",
  //   recordingLink: "",
  //   liveCodeLink: "",
  // },
  // {
  //   name: "Reading Period (Possible Guest)",
  //   date: "May 05",
  //   notesLink: "",
  //   recordingLink: "",
  //   liveCodeLink: "",
  // },
];

// For assignments, exclude HREF field to automatically disable the assignment
export const homeworkAssignments: Assignment[] = [
  {
    name: "PBT",
    dateRange: "Jan 24 → Jan 30, 2025",
    href: "https://hackmd.io/@csci1710/HkjlMXsYa",
    autoReleaseDate: "Jan 24, 2025 11:00:00 EST",
  },
  {
    name: "Modeling Intro",
    dateRange: "Jan 31 → Feb 6, 2025",
    href: "https://hackmd.io/@csci1710/B1NEG7jKa",
    autoReleaseDate: "Jan 31, 2025 11:00:00 EST",
  },
  {
    name: "Physical Keys",
    dateRange: "Feb 7 → Feb 13, 2025",
    href: "https://hackmd.io/@csci1710/ByLnzQstT",
    autoReleaseDate: "Feb 07, 2025 11:00:00 EST",
  },
  {
    name: "Hotel Locking",
    dateRange: "Feb 19 → Feb 25, 2025",
    href: "https://hackmd.io/@csci1710/B1CCmQjKa",
    autoReleaseDate: "Feb 19, 2025 11:00:00 EST",
  },
  {
    name: "Memory Management",
    dateRange: "Feb 28 → Mar 6, 2025",
    href: "https://hackmd.io/@csci1710/S1xVNmiK6",
    autoReleaseDate: "Feb 28, 2025 11:00:00 EST",
  },
  {
    name: "Temporal Modeling",
    dateRange: "Mar 07 → Mar 13, 2025",
    href: "https://hackmd.io/@csci1710/HJk8E7jFa",
    autoReleaseDate: "Mar 07, 2025 11:00:00 EST",
  },
  {
    name: "Hotel Locking (Lab Portion)",
    dateRange: "Mar 06 → Mar 9, 2025",
    href: "https://hackmd.io/@csci1710/B1UdLQjKp",
    autoReleaseDate: "Mar 06, 2025 20:30:00 EST",
  },
  {
    name: "Elevator Critique",
    dateRange: "Mar 14 → Mar 20, 2025",
    href: "https://hackmd.io/@csci1710/rJ3YVQoFT",
    autoReleaseDate: "Mar 14, 2025 11:00:00 EST",
  },
  {
    name: "SAT 1",
    dateRange: "Apr 4 → Apr 10, 2025",
    href: "https://hackmd.io/@csci1710/Sk8ANXiYT",
    autoReleaseDate: "Apr 4, 2025 11:00:00 EDT",
  },
  {
    name: "SAT 2",
    dateRange: "Apr 14 → Apr 20, 2025",
    href: "https://hackmd.io/@csci1710/BkMlBmoKa",
    autoReleaseDate: "Apr 14, 2025 11:00:00 EDT",
  },
  {
    name: "SMT",
    dateRange: "Apr 21 → Apr 27, 2025",
    href: "https://hackmd.io/@csci1710/rkzzBmoYa",
    autoReleaseDate: "Apr 21, 2025 11:00:00 EDT",
  },
  // {
  //   // Rickroll ;)
  //   name: "Hardest Assignment Ever...",
  //   dateRange: "Oct 25 → Oct 26, 2009",
  //   href: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
  //   autoReleaseDate: "Jan 25, 2025 21:28:59 EST",
  // },
  // ...
];

export const labAssignments: Assignment[] = [
  {
    name: "(Optional) Async Python",
    dateRange: "Jan 22, 2025",
    href: "https://hackmd.io/@csci1710/By-lPmstT",
    autoReleaseDate: "Jan 22, 2025 09:45:00 EST",
  },
  {
    name: "Tic Tac Toe",
    dateRange: "Jan 29 → Jan 30, 2025",
    href: "https://hackmd.io/@csci1710/HkOLBXstT",
    autoReleaseDate: "Jan 29, 2025 12:30:00 EST",
  },
  {
    name: "N Queens",
    dateRange: "Feb 05 → Feb 07, 2025",
    href: "https://hackmd.io/@csci1710/BkYfImjKp",
    autoReleaseDate: "Feb 05, 2025 12:30:00 EST",
  },
  {
    name: "Ring Election",
    dateRange: "Feb 12 → Feb 13, 2025",
    href: "https://hackmd.io/@csci1710/ryC5S7jt6",
    autoReleaseDate: "Feb 12, 2025 12:30:00 EST",
  },
  {
    name: "Curiosity co-lab",
    dateRange: "Feb 19 → Feb 20, 2025",
    // href: "https://hackmd.io/@csci1710/rJm6XmjKT",
  },
  {
    name: "Reference Counting",
    dateRange: "Feb 26 → Feb 27, 2025",
    href: "https://hackmd.io/@csci1710/S1LXKW2t6",
    autoReleaseDate: "Feb 26, 2025 12:30:00 EST",
  },
  {
    name: "Hotel Case Study",
    dateRange: "Mar 05 → Mar 06, 2025",
    href: "https://drive.google.com/file/d/1R6Lt2wQkR3hz1G6CDnE-tP9wkwJK8qT2/view?usp=sharing",
    autoReleaseDate: "Mar 05, 2025 12:30:00 EST",
  },
  {
    name: "Dining Blacksmiths",
    dateRange: "Mar 12 → Mar 13, 2025",
    href: "https://hackmd.io/@csci1710/HkbhU7sta",
    autoReleaseDate: "Mar 12, 2025 12:30:00 EST",
  },
  {
    name: "Proposal co-lab",
    dateRange: "Apr 02 → Apr 03, 2025",
    // href: "https://www.google.com",
  },
  {
    name: "SAT 2 co-lab",
    dateRange: "Apr 16 → Apr 17, 2025",
    // href: "https://www.google.com",
  },
];

export const projectAssignments: Assignment[] = [
  {
    name: "Curiosity Modeling",
    dateRange: "Feb 14 → Feb 27, 2025",
    href: "https://hackmd.io/@csci1710/rJm6XmjKT",
    autoReleaseDate: "Feb 16, 2025 11:00:00 EST",
  },
  {
    name: "Final Project (Proposal)",
    dateRange: "Apr 03, 2025",
    href: "https://hackmd.io/@csci1710/ByCXUZ2KT",
    autoReleaseDate: "Apr 03, 2025 11:00:00 EST",
  },
  {
    name: "Final Project",
    dateRange: "Apr 12 → May 09, 2025",
    href: "https://hackmd.io/@csci1710/ByCXUZ2KT",
    autoReleaseDate: "Apr 12, 2025 11:00:00 EST",
  },
];

// export const forgeDocsLink: string = "";
// export const EdStemLink: string = "";

export const FAQLink: string =
  "https://docs.google.com/document/d/e/2PACX-1vQek5FgRtgmr7rdxOnq5qzTIaRoVcc0dN4dERg5qu4oJ4hTCAmWJkrBbNWUdm_zsMRtQOmzpG17fWQK/pub";

export const policies: Resource[] = [
  {
    name: "Syllabus",
    href: "https://docs.google.com/document/d/1tk0HNlvfhKPG8qVTdeZkbNdr1riRtZelWzsGt1NyZ7g/edit?usp=sharing",
  },
  {
    name: "Collaboration Policy",
    href: "https://docs.google.com/document/d/e/2PACX-1vQ7b5GLg6Kie0l4zzuLLQ7oaC89V931dqbHQl7Rgr7sVT05bIu1WrGTcNaGpn9gg5y9Tc7GvLS32vf1/pub",
  },
];

export const importantLinks: Resource[] = [
  {
    name: "EdStem",
    href: "https://edstem.org/us/courses/73930/discussion",
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
  favorite_amphibian: "Neutral (as a professor, I can't play favorites!)",
  role: "Professor",
  // favorite_amphibian_image: "",
};

export const htas: staffMember[] = [
  {
    name: "Mathilde Kermorgant",
    image: PUB + "/images/staff/mathilde.jpeg",
    objectPosition: "center 35%",
    // alt_image: PUB + "/images/staff/david_frog.jpeg",
    alt_objectPosition: "80% 50%",
    pronouns: "she/her",
    bio: "I'm a senior concentrating in math and CS (reluctantly) hailing from Paris. My two passions are purple and goats (not frogs sorry), and I am really excited for this year's iteration of LfS!",
    favorite_amphibian: "Team Toad",
    role: "HTA",
  },
  {
    name: "Sarah Ridley",
    image: PUB + "/images/staff/sarah.jpeg",
    objectPosition: "center 65%",
    // alt_image: PUB + "/images/staff/megan_frog.jpeg",
    pronouns: "she/her",
    bio: "Hi! I'm a junior from North Carolina studying computer science. I'm so excited to be an HTA for 1710! Outside of cs, I love sewing, baking, my cat, and doing jigsaw puzzles!",
    favorite_amphibian: "Team Frog",
    role: "HTA",
  },
];

export const utas: staffMember[] = [
  {
    name: "Komron Aripov",
    image: PUB + "/images/staff/komron.jpeg",
    // alt_image: PUB + "/images/staff/yihao_frog.jpeg",
    alt_objectPosition: "center 65%",
    pronouns: "he/him",
    bio: "Hi! I'm a senior from Samarkand, Uzbekistan studying CS. I love building electronics and software projects, including skateboards, homelabs, lamps and much more. Feel free to ask me anything about how to set up your very own streaming service :)",
    favorite_amphibian: "Team Frog",
    role: "UTA",
  },

  {
    name: "Zeeshan Bhalwani",
    image: PUB + "/images/staff/zeeshan.jpg",
    objectPosition: "center 15%",
    // alt_image: PUB + "/images/staff/conrad_frog.jpeg",
    alt_objectPosition: "center 25%",
    pronouns: "he/him",
    bio: "Hey everyone! I'm a senior from Michigan studying CS. In my free time, I enjoy playing basketball, practicing archery, and watching cricket and F1.",
    favorite_amphibian: "Team Frog",
    role: "UTA",
  },
  {
    name: "Lucy Gramley",
    image: PUB + "/images/staff/lucy.jpg",
    objectPosition: "center 35%",
    // alt_image: PUB + "/images/staff/kendra_frog.jpeg",
    pronouns: "she/her",
    bio: "Hi! I’m from Oregon and concentrating in computer science. Outside of school, I love skiing, swimming, hiking, board games, and hot chocolate.",
    favorite_amphibian: "Team Toad",
    role: "UTA",
  },
  {
    name: "Matthew Prenovitz",
    image: PUB + "/images/staff/matt.png",
    pronouns: "he/him",
    // alt_image: PUB + "/images/staff/ese_frog.jpeg",
    bio: "Hi, I'm Matt! I'm a senior from Erie, Pennsylvania concentrating in CS. In my free time I love to cook, or play board games and video games.",
    favorite_amphibian: "Team Toad",
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
  "https://calendar.google.com/calendar/u/0/embed?src=c_3004d5dc66b378769c57d834a6bfe8f5961ca733bf66163c91094293a79d0d81@group.calendar.google.com&ctz=America/New_York";

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
