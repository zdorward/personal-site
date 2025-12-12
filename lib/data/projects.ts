import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "lumber-risk-sandbox",
    title: "Lumber Risk Sandbox",
    description:
      "A hedging and risk-analysis sandbox that models the impact of a trend-based partial hedge on a long lumber price exposure.",
    body: [
      "This project pulls historical lumber futures data, applies a moving-average trend rule, and simulates how a 70% hedge would have affected P&L and volatility.",
      "The platform includes a FastAPI backend, a Streamlit dashboard, and a Dockerized environment for easy demo deployment.",
      "Users can adjust moving-average windows and notional exposure to see how different hedge parameters influence returns and risk.",
    ],
    period: "Feb 2025",
    tech: ["FastAPI", "Streamlit", "Python", "Docker"],
    githubUrl: "https://github.com/zdorward/lumber-risk-sandbox",
    status: "wip",
  },
  {
    slug: "ama-demo",
    title: "AMA Member Tools",
    description:
      "A mobile app made with Flutter, pending approval to the App Store.",
    body: [
      "Demo Flutter app that helps AMA members request roadside assistance.",
    ],
    period: "Dec 2025",
    tech: ["Flutter", "Dart", "Android Studio", "XCode"],
    githubUrl: "https://github.com/zdorward/ama_mobile",
    status: "wip",
    logo: "/projects/ama.png",
  },
  {
    slug: "pro-drain-reports",
    title: "Pro Drain Reports",
    description:
      "A micro-SaaS for drain inspection companies to generate formatted pdf inspection reports.",
    body: [
      "I came up this project by cold knocking on the doors of business owners.",
      "I had a great conversation with Pro Drain Techs in Edmonton, and they showed me a problem that they've been actively trying to solve: generating formatted inspection reports. Their current process was ok, but it was time consuming inputting the same notes every time they filled out a report.",
      "They were looking for a program that let them check off a few boxes, and then a formatted pdf was generated. That's what I built.",
    ],
    period: "Nov 2025",
    tech: ["Next.js", "Supabase"],
    githubUrl: "https://github.com/zdorward/pro-drain-reports",
    prodUrl: "https://pro-drain-reports.vercel.app/login",
    status: "live",
  },
  {
    slug: "warm-welcome",
    title: "Warm Welcome",
    description:
      "An accountant facing platform to seamlessly onboard new clients, and better understand their accounting needs.",
    body: [
      "I come from a family of accountants. I broke the trend and become a software engineer.",
      "Talking with my family members, it become evident that the onboarding process for new clients was painful and cumbersome.",
      "I built Warm Welcome to help clarify what new clients are looking for in their accountant, leading to better communication, and a successful business relationship.",
    ],
    period: "Dec 2025",
    tech: ["Next.js", "Supabase"],
    githubUrl: "https://github.com/zdorward/warm-welcome",
    prodUrl: "https://warmwelcome-flame.vercel.app/login",
    status: "live",
  },

  {
    slug: "goal-getter",
    title: "Goal Getter",
    description:
      "2nd place in University of Alberta Engineering Competition (programming section).",
    body: ["An app designed to make meeting your goals fun."],
    period: "Nov 2024",
    tech: ["Next.js", "Python", "Firebase"],
    githubUrl: "https://github.com/owencooke/GoalGetter",
    prodUrl: "https://my-goal-getter.vercel.app",
    status: "live",
  },

  {
    slug: "alouette",
    title: "Alouette",
    description:
      "3rd place in Western Engineering Competition (programming section).",
    body: [
      "A Vue.js web game designed to educate you about BC wildlife, with an accompanying quiz to test your knowledge.",
      "Entrace to the competiton was granted based on winning the University of Alberta Competition (UAEC) programming section.",
    ],
    period: "Jan 2023",
    tech: ["Vue.js", "React.js"],
    githubUrl: "https://github.com/ericxiong1/Alouette-final",
    status: "archived",
  },
  {
    slug: "launchpad",
    title: "LaunchPad Employees Mobile App",
    description:
      "A mobile app that streamlines employee scheduling — allowing staff to view shifts, swap availability, and receive shift reminders.",
    body: [
      "I worked for LaunchPad Trampoline Park from September 2016 to September 2020. At the beginning of 2018, I noticed that our method of employee scheduling was inefficient and problematic at times. Each week, a picture of the schedule was uploaded to our employee Facebook group. There were many occasions where two employees tried to change shifts, but due to miscommunication, neither employee came to work.",
      "I thought it would be really cool to have an app where employees could switch shifts and have the schedule update in real-time. After experimenting with multiple programs and frameworks, I came across Flutter, a cross-platform mobile development framework that implements the Dart programming language. The framework also utilizes tools like Android Studio, Visual Studio Code, and XCode. I used Firebase as a backend data storage system.",
      "I developed the app for most of the summer of 2018, and finally published it to the Google Play Store on November 27, 2018. I later published the app on the Apple App Store in early 2019 (though it is only available through TestFlight).",
    ],
    period: "Aug 2019",
    tech: ["Flutter", "Dart", "Firebase", "Android Studio", "XCode"],
    status: "archived",
    githubUrl: "https://github.com/zdorward/launchpad",
    logo: "/projects/launchpad.png",
  },
];
