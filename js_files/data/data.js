
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
        this.videoInfo = course.videoInfo;
        this.type = course.type;
    }
    getVideoLength() {
        return ` ${(this.videoInfo.videoLength / 3600).toFixed(1)}`
    }
    courseInfo() {
        return `<div class="marker"><span class="courseType">#${this.type} </span>
        </div>`
    }
    timeAgo() {
        const todayDate = new Date();
        const uploadDate = new Date(this.videoInfo.uploadDate);
        const diffInMs = todayDate - uploadDate;
        const yearDiff = todayDate.getFullYear() - uploadDate.getFullYear(); // Yıl farkı
        const monthDiff = todayDate.getMonth() - uploadDate.getMonth(); // Ay farkı
        const diffInMonths = (yearDiff * 12) + monthDiff; // Toplam ay farkı
        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24)); // Gün cinsine çevir
        const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60)); // Saat cinsine çevir
        const diffInMinutes = Math.floor(diffInMs / (1000 * 60)); // Dakika cinsine çevir
        if (diffInMonths > 0) {
            return `${monthDiff} month ago`;
        }
        else if (diffInDays > 0) {
            return `${diffInDays} days ago`;
        }
        else if (diffInHours > 0) {
            return `${diffInHours} hours ago`;
        }
        else {
            return `${diffInMinutes} minutes ago`;
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
        <span class="courseTypeSpecification">#${this.programingLanguage}</span></div>`
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
        <span class="courseTypeSpecification">#${this.field}</span></div>`
    }
}
export let courses = [
    {
        name: "The Complete Python Programming Course",
        id: "1234567890",
        instructor: {
            name: 'Papuna Qarchava',
            aboutInstructor: 'https://computing.tsu.ge/ka/structures/24',
            img: './images_/tutors/OV5kTaE5Z0CW0SHf.jpg'
        },
        videoSrc: './videos/1%20ლექცია%20-%20მოდელირება%20და%20სიმულაცია.mp4',
        thumbnail: './images_/thumbnails/operating-system-t.jpg',
        videoInfo: {
            viewCount: 8000,
            uploadDate: "2024-12-31T16:00:00",
            videoLength: 43200
        },
        type: 'Programing',
        programingLanguage: 'Pyton'
    },
    {
        name: "Discrete Mathematics Tutorial",
        id: "1234567891",
        instructor: {
            name: 'Revaz Grigolia',
            aboutInstructor: 'https://computing.tsu.ge/ka/structures/40',
            img: './images_/tutors/revaz_grigolia.jpg'
        },
        videoSrc: './videos/Discrete-Mathematics-Tutorial.mp4',
        thumbnail: './images_/thumbnails/Discrete-Mathematics-Tutorial.jpg',
        videoInfo: {
            viewCount: 8500,
            uploadDate: "2024-01-31T10:00:00",
            videoLength: 36000
        },
        type: 'Mathematics',
        field: 'Discrete structures'
    },
    {
        name: "Introduction to Linear Algebra",
        id: "1234567892",
        instructor: {
            name: 'Vaxtang Lomadze',
            aboutInstructor: 'https://computing.tsu.ge/ka/structures/41',
            img: './images_/tutors/vaxtang_lomadze.png'
        },
        videoSrc: './videos/Linear-Algebra.mp4',
        thumbnail: './images_/thumbnails/Linear-Algebra-in-Machine-Learning.png',
        videoInfo: {
            viewCount: 9400,
            uploadDate: "2024-10-31T11:00:00",
            videoLength: 42000
        },
        type: 'Mathematics',
        field: 'Linear Algebra'
    },
    {
        name: "Haskell Programming Essentials",
        id: "1234567893",
        instructor: {
            name: 'Natela Archvadze',
            aboutInstructor: 'https://computing.tsu.ge/ka/structures/42',
            img: './images_/tutors/natela_archvadze.jpg'
        },
        videoSrc: './videos/Haskell-Programming.mp4',
        thumbnail: './images_/thumbnails/haskell.jpg',
        videoInfo: {
            viewCount: 7800,
            uploadDate: "2024-07-31T10:30:00",
            videoLength: 48000
        },
        type: 'Programing',
        programingLanguage: 'Haskell'
    },
    {
        name: "Statistics for Data Science",
        id: "1234567894",
        instructor: {
            name: 'Gia Sirbiladze',
            aboutInstructor: 'https://computing.tsu.ge/ka/structures/43',
            img: './images_/tutors/gia_sirbiladze.jpg',
        },
        videoSrc: './videos/Statistics-Basics.mp4',
        thumbnail: './images_/thumbnails/statistics.jpg',
        videoInfo: {
            viewCount: 10200,
            uploadDate: "2024-02-21T15:00:00",
            videoLength: 54000
        },
        type: 'Mathematics',
        field: 'Data Analysis and Statistics'
    },
    {
        name: "The Science of Stress  Essentials of Teenage Health",
        id: "1234567896",
        instructor: {
            name: 'Sriteja Kataru',
            aboutInstructor: 'https://computing.tsu.ge/ka/structures/43',
            img: './images_/tutors/NAGA5570.webp',
        },
        videoSrc: './videos/Statistics-Basics.mp4',
        thumbnail: './images_/thumbnails/stressMenegment.webp',
        videoInfo: {
            viewCount: 456,
            uploadDate: "2024-02-01T10:00:00",
            videoLength: 11000
        },
        type: 'Psychology'
    },
    {
        name: "The Complete C++ Developer Course",
        id: "1234567801",
        instructor: {
            name: 'Irina Xuchishvili',
            aboutInstructor: 'https://computing.tsu.ge/ka/structures/43',
            img: './images_/tutors/xuchishvili.jpg',
        },
        videoSrc: './videos/Statistics-Basics.mp4',
        thumbnail: './images_/thumbnails/c++.png',
        videoInfo: {
            viewCount: 1200,
            uploadDate: "2024-04-01T15:01:00",
            videoLength: 44000
        },
        type: 'Programing',
        programingLanguage: 'C++'
    },
    {
        name: "	IСT Literacy",
        id: "1234567800",
        instructor: {
            name: 'Maia Archuadze',
            aboutInstructor: 'https://computing.tsu.ge/ka/structures/43',
            img: './images_/tutors/Maia-Archuadze-2.png',
        },
        videoSrc: './videos/Statistics-Basics.mp4',
        thumbnail: './images_/thumbnails/Office365-all-icons-750x500.png',
        videoInfo: {
            viewCount: 9290,
            uploadDate: "2024-10-11T10:00:00",
            videoLength: 24000
        },
        type: 'Programing',
        programingLanguage: 'Microsoft Office 365'
    }
].map((course) => {
    if (course.type === 'Mathematics') {
        return new MathematicsCourse(course);
    }
    else if (course.type === 'Programing') {
        return new ProgramingCourse(course);
    }
    else return new Course(course);
})

