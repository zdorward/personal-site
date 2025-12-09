import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "pro-drain-reports",
    title: "Pro Drain Reports",
    description:
      "An experimental micro-SaaS to test ideas around tiny tools, pricing, and onboarding friction.",
    body: [
      "A breakdown of the micro‑SaaS experiment, including onboarding experiments, pricing tests, and what I learned from user feedback.",
    ],
    period: "2025",
    tech: ["Next.js", "TypeScript", "Supabase"],
    githubUrl: "https://github.com/zdorward/pro-drain-reports",
    prodUrl: "https://pro-drain-reports.vercel.app/login",
    status: "live",
  },
  {
    slug: "ama-demo",
    title: "AMA Member Tools",
    description:
      "A mobile app made with Flutter, pending approval to the App Store.",
    body: [
      "Demo Flutter app that helps AMA members request roadside assistance",
    ],
    period: "2025",
    tech: ["Flutter", "Dart", "XCode"],
    githubUrl: "https://github.com/zdorward/ama_mobile",
    status: "wip",
    image: "/projects/ama.png",
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
    period: "2019",
    tech: ["Flutter", "Dart", "Firebase", "Android Studio", "XCode"],
    status: "archived",
    githubUrl: "https://github.com/zdorward/launchpad",
    image: "/projects/launchpad.png",
  },
];
