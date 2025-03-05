import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { videoLengthFormat } from "../utils/videoTime.js";
class Course {
  name;
  id;
  instructor;
  videoSrc;
  thumbnail;
  videoInfo;
  #type;
  constructor(course) {
    this.name = course.name;
    this.id = course.id;
    this.instructor = course.instructor;
    this.videoSrc = course.videoSrc;
    this.thumbnail = course.thumbnail;
    this.rating = course.rating;
    this.videoInfo = course.videoInfo;
    this.price = course.price;
    this.type = course.type;
  }
  getVideoLength() {
    return videoLengthFormat(this.videoInfo.videoLength);
  }
  courseInfo() {
    return `<div class="marker"><span class="courseType">#${this.type} </span>
        </div>`;
  }
  timeAgo() {
    const today = dayjs();
    const uploadDate = dayjs(this.videoInfo.uploadDate);
    const diffYear = today.diff(uploadDate, "year");
    const diffMonth = today.diff(uploadDate, "month");
    const diffWeek = today.diff(uploadDate, "week");
    const diffDay = today.diff(uploadDate, "day");
    const diffHour = today.diff(uploadDate, "hour");
    const diffMinute = today.diff(uploadDate, "minute");
    const diffSecond = today.diff(uploadDate, "second");
    if (diffYear > 0) {
      return `${diffYear} year${diffYear > 1 ? "s" : ""} ago`;
    } else if (diffMonth > 0) {
      return `${diffMonth} month${diffMonth > 1 ? "s" : ""} ago`;
    } else if (diffWeek > 0) {
      return `${diffWeek} week${diffWeek > 1 ? "s" : ""} ago`;
    } else if (diffDay > 0) {
      return `${diffDay} day${diffDay > 1 ? "s" : ""} ago`;
    } else if (diffHour > 0) {
      return `${diffHour} hour${diffHour > 1 ? "s" : ""} ago`;
    } else if (diffMinute > 0) {
      return `${diffMinute} minute${diffMinute > 1 ? "s" : ""} ago`;
    } else {
      return `${diffSecond} second${diffSecond > 1 ? "s" : ""} ago`;
    }
  }
}
class ProgramingCourse extends Course {
  programingLanguage;
  constructor(p_course) {
    super(p_course);
    this.programingLanguage = p_course.programingLanguage;
  }
  courseInfo() {
    return `<div class="marker"><span class="courseType">#${this.type} </span>
        <span class="courseTypeSpecification">#${this.programingLanguage}</span></div>`;
  }
}
class MathematicsCourse extends Course {
  field;
  constructor(m_course) {
    super(m_course);
    this.field = m_course.field;
  }
  courseInfo() {
    return `<div class="marker"><span class="courseType">#${this.type} </span>
        <span class="courseTypeSpecification">#${this.field}</span></div>`;
  }
}
export let courses = [
  {
    name: "The Complete Python Programming Course",
    id: "1234567890",
    instructor: {
      name: "Papuna Qarchava",
      aboutInstructor: "https://computing.tsu.ge/ka/structures/24",
      img: "./images_/tutors/OV5kTaE5Z0CW0SHf.jpg",
    },
    videoSrc: "./videos/1%20ლექცია%20-%20მოდელირება%20და%20სიმულაცია.mp4",
    thumbnail: "./images_/thumbnails/operating-system-t.jpg",
    rating: 45,
    videoInfo: {
      viewCount: 8000,
      uploadDate: "2025-01-04T20:28:00",
      videoLength: 43205,
    },
    price: 0,
    type: "Programing",
    programingLanguage: "Pyton",
  },
  {
    name: "Discrete Mathematics Tutorial",
    id: "1234567891",
    instructor: {
      name: "Revaz Grigolia",
      aboutInstructor: "https://computing.tsu.ge/ka/structures/40",
      img: "./images_/tutors/revaz_grigolia.jpg",
    },
    videoSrc: "./videos/Discrete-Mathematics-Tutorial.mp4",
    thumbnail: "./images_/thumbnails/Discrete-Mathematics-Tutorial.jpg",
    rating: 45,
    videoInfo: {
      viewCount: 8500,
      uploadDate: "2024-01-31T10:00:00",
      videoLength: 36000,
    },
    price: 1000,
    type: "Mathematics",
    field: "Discrete structures",
  },
  {
    name: "Introduction to Linear Algebra",
    id: "1234567892",
    instructor: {
      name: "Vaxtang Lomadze",
      aboutInstructor: "https://computing.tsu.ge/ka/structures/41",
      img: "./images_/tutors/vaxtang_lomadze.png",
    },
    videoSrc: "./videos/Linear-Algebra.mp4",
    thumbnail: "./images_/thumbnails/Linear-Algebra-in-Machine-Learning.png",
    rating: 40,
    videoInfo: {
      viewCount: 9400,
      uploadDate: "2024-10-31T11:00:00",
      videoLength: 42000,
    },
    price: 3000,
    type: "Mathematics",
    field: "Linear Algebra",
  },
  {
    name: "Haskell Programming Essentials",
    id: "1234567893",
    instructor: {
      name: "Natela Archvadze",
      aboutInstructor: "https://computing.tsu.ge/ka/structures/42",
      img: "./images_/tutors/natela_archvadze.jpg",
    },
    videoSrc: "./videos/Haskell-Programming.mp4",
    thumbnail: "./images_/thumbnails/haskell.jpg",
    rating: 40,
    videoInfo: {
      viewCount: 7800,
      uploadDate: "2024-07-31T10:30:00",
      videoLength: 48000,
    },
    price: 1000,
    type: "Programing",
    programingLanguage: "Haskell",
  },
  {
    name: "Statistics for Data Science",
    id: "1234567894",
    instructor: {
      name: "Gia Sirbiladze",
      aboutInstructor: "https://computing.tsu.ge/ka/structures/43",
      img: "./images_/tutors/gia_sirbiladze.jpg",
    },
    videoSrc: "./videos/Statistics-Basics.mp4",
    thumbnail: "./images_/thumbnails/statistics.jpg",
    rating: 50,
    videoInfo: {
      viewCount: 10200,
      uploadDate: "2024-02-21T15:00:00",
      videoLength: 54000,
    },
    price: 10000,
    type: "Mathematics",
    field: "Data Analysis and Statistics",
  },
  {
    name: "The Science of Stress  Essentials of Teenage Health",
    id: "1234567896",
    instructor: {
      name: "Sriteja Kataru",
      aboutInstructor: "https://computing.tsu.ge/ka/structures/43",
      img: "./images_/tutors/NAGA5570.webp",
    },
    videoSrc: "./videos/Statistics-Basics.mp4",
    thumbnail: "./images_/thumbnails/stressMenegment.webp",
    rating: 35,
    videoInfo: {
      viewCount: 456,
      uploadDate: "2024-02-01T10:00:00",
      videoLength: 11000,
    },
    price: 0,
    type: "Psychology",
  },
  {
    name: "The Complete C++ Developer Course",
    id: "1234567801",
    instructor: {
      name: "Irina Xuchishvili",
      aboutInstructor: "https://computing.tsu.ge/ka/structures/43",
      img: "./images_/tutors/xuchishvili.jpg",
    },
    videoSrc: "./videos/Statistics-Basics.mp4",
    thumbnail: "./images_/thumbnails/c++.png",
    rating: 50,
    videoInfo: {
      viewCount: 1200,
      uploadDate: "2024-04-01T15:01:00",
      videoLength: 44000,
    },
    price: 3000,
    type: "Programing",
    programingLanguage: "C++",
  },
  {
    name: "	IСT Literacy",
    id: "1234567800",
    instructor: {
      name: "Maia Archuadze",
      aboutInstructor: "https://computing.tsu.ge/ka/structures/43",
      img: "./images_/tutors/Maia-Archuadze-2.png",
    },
    videoSrc: "./videos/Statistics-Basics.mp4",
    thumbnail: "./images_/thumbnails/Office365-all-icons-750x500.png",
    rating: 45,
    videoInfo: {
      viewCount: 9290,
      uploadDate: "2024-10-11T10:00:00",
      videoLength: 24000,
    },
    price: 3000,
    type: "Programing",
    programingLanguage: "Microsoft Office 365",
  },
].map((course) => {
  if (course.type === "Mathematics") {
    return new MathematicsCourse(course);
  } else if (course.type === "Programing") {
    return new ProgramingCourse(course);
  } else return new Course(course);
});
