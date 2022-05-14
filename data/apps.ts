interface AppLink {
  label: string;
  url: string;
  iconClassName: string;
}

interface App {
  name: string;
  description: string;
  tech: string[];
  image: string;
  links: [AppLink, AppLink?];
}

const apps: App[] = [
  {
    name: "NiceFeed",
    description:
      "Android RSS feed reader with feed searching capability and automatic background sync",
    tech: ["Kotlin", "Android", "Feedly API", "Retrofit", "RomeTools"],
    image: "/images/projects/nicefeed.jpg",
    links: [
      {
        label: "Source",
        url: "https://github.com/joshuacerdenia/nicefeed",
        iconClassName: "bi bi-github",
      },
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.joshuacerdenia.android.nicefeed",
        iconClassName: "bi bi-google",
      },
    ],
  },
  {
    name: "Planito",
    description:
      "Flexible scheduling Android app for recurring events with calendar sync",
    tech: ["Kotlin", "Android", "Calendar Provider API"],
    image: "/images/projects/planito.jpg",
    links: [
      {
        label: "Source",
        url: "https://github.com/joshuacerdenia/planito",
        iconClassName: "bi bi-github",
      },
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.cerdenia.android.planito",
        iconClassName: "bi bi-google",
      },
    ],
  },
  {
    name: "music.cerdenia.com",
    description: "Personal music portfolio website built with Next.js",
    tech: ["TypeScript", "Next.js", "Bootstrap"],
    image: "/images/projects/cerdenia-music.jpg",
    links: [
      {
        label: "Source",
        url: "https://github.com/joshuacerdenia/music.cerdenia.com",
        iconClassName: "bi bi-github",
      },
      {
        label: "Live",
        url: "https://music.cerdenia.com",
        iconClassName: "bi bi-link-45deg",
      },
    ],
  },
  {
    name: "Full Cup",
    description: "Self-care scheduling and habit-tracking Android app",
    tech: ["Kotlin", "Android", "Calendar Provider API"],
    image: "images/projects/fullcup.jpg",
    links: [
      {
        label: "Source",
        url: "https://github.com/joshuacerdenia/fullcup-android",
        iconClassName: "bi bi-github",
      },
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.cerdenia.android.fullcup",
        iconClassName: "bi bi-google",
      },
    ],
  },
  {
    name: "Amazing Scoreboard",
    description: "Score-keeping Android app for 2-8 players, for any game",
    tech: ["Kotlin", "Android"],
    image: "/images/projects/amazingscoreboard.jpg",
    links: [
      {
        label: "Source",
        url: "https://github.com/joshuacerdenia/AmazingScoreboard",
        iconClassName: "bi bi-github",
      },
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.joshuacerdenia.amazingscoreboard",
        iconClassName: "bi bi-google",
      },
    ],
  },
  {
    name: "Easy Notepad",
    description: "Simple notes app for Android",
    tech: ["Kotlin", "Android"],
    image: "/images/projects/easynotepad.jpg",
    links: [
      {
        label: "Source",
        url: "https://github.com/joshuacerdenia/EasyNotepad",
        iconClassName: "bi bi-github",
      },
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.joshuacerdenia.android.easynotepad",
        iconClassName: "bi bi-google",
      },
    ],
  },
  {
    name: "poor-mans-ssg",
    description: "A poor man's static site generator",
    tech: ["Node", "JavaScript", "HTML"],
    image: "/images/projects/poor-mans-ssg.jpg",
    links: [
      {
        label: "Source",
        url: "https://github.com/joshuacerdenia/poor-mans-ssg",
        iconClassName: "bi bi-github",
      },
    ],
  },
];

export default apps;
