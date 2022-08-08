const config = {
    // base
    jobDescription: "Frontend Developer",
    profilePicture: "profile_picture.png",

    // personal details
    firstName: "FirstName",
    lastName: "LastName",
    phone: '+49 123 456 789 11',
    mail: 'my.mail@gmail.com',

    // profile links
    profileLinks: [
        {
            headline: 'LinkedIn',
            label: '@label-to-linkedIn',
            link: 'https://www.google.com/'
        },
        {
            headline: 'Xing',
            label: '@label-to-xing',
            link: 'https://www.google.com/'
        }
    ],

    // adress information
    address: {
        street: "Randomstr.",
        streetNumber: 1,
        zipCode: 10101,
        country: "Germany",
        city: "berlin",
    },

    sections: [
        {
            type: 'info',
            headline: 'Skills',
            content: [
                {
                    headline: 'Primary',
                    text: `HTML5, CSS3, SCSS, JavaScript, TypeScript, Node, Angular, Jquery,
                    Bootstrap, Angular Material UI, Webpack, Native Webcomponents, RxJs`
                },
                {
                    headline: 'Secondary',
                    text: `PHP, MongoDB, SQL, Wordpress, Drupal, Firebase, Express, React, React
                    Native, Vue3, Stencil, Twig, Handlebars, Mustache, Lit, Pug`
                },
                {
                    headline: 'Tools',
                    text: `VSCode, git, Figma, Sketch, Zeplin, Jira, Github, Gitlab, Ubuntu, MacOs,
                    Docker, Vagrant`
                }
            ]
        },
        {
            type: 'experience',
            headline: 'Experience',
            content: [
                {
                    company: 'Random Company',
                    task: 'React Trainer',
                    fromTo: '2022 - present',
                    location: 'Berlin',
                    tasks: [
                        'Task 1',
                        'Task 2',
                        'Task 3',
                        'Task 4',
                    ]
                },
                {
                    company: 'Other Random Company GmbH',
                    task: 'Frontend Developer',
                    fromTo: '2017 - 2022',
                    location: 'Berlin',
                    tasks: [
                        'Development of product A',
                        'Development of product B',
                    ]
                },
            ]
        },
        {
            type: 'info',
            headline: 'Languages',
            content: [
                {
                    text: `German, English`
                },
            ]
        },
        {
            type: 'info',
            headline: 'About Me',
            content: [
                {
                    text: `I am a passionate <u>Frontend-Developer</u> working mainly with <u>Angular</u>, but
                    also happy to work with other frameworks like <u>React</u> or <u>Vue</u> and of
                    course also with <u>native code</u>. Some of my traits are my <u>short onboarding
                    periods</u>, <u>high learning curves</u> and <u>adapting to current coding styles</u> of
                    already existing projects to maintain readability. I am also open minded to
                    learn new technologies to fulfill your needs.`
                },
            ]
        }
    ]
}

export default config;