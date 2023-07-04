// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: "600$ в місяць",
  address: "Ukraine, Kyiv",
}
var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: "mailto:dmytro@mail.com",
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}
var title = {
  big: true

}
// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})
// ================================================================
//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Summary',
    },
    header,
    main: {

      summary: {
        title: 'Summary',
        text: 'Open-minded for new technologies, with 1 years of experience in development.Whenever I start towork on a new project I learn the domain and try       to understand the idea of the project.Good team      player, every colleague is a friend to me.',
      },
      expirience: {
        title: 'Other experience',
        text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics ( tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
      },

    },
    footer,
  })
})
// ================================================================
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Skills',
    },
    header,
    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true
        },
        {
          name: 'Handlebars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VS Code',
          point: 10,
          isTop: true,
        },
        {
          name: 'Git',
          point: 10,
          isTop: true,
        },
        {
          name: 'Terminal',
          point: 10,
          isTop: false,
        },
        {
          name: 'NPM',
          point: 10,
          isTop: false,
        },
        {
          name: 'React.js',
          point: 0,
          isTop: false,
        },
        {
          name: 'PHP',
          point: null,
          isTop: false,
        },
      ],
      hobbies: [
        {
          name: "yoga",
          isMain: true,
        },
        {
          name: "travelling",
          isMain: true,
        },
        {
          name: "dance",
          isMain: false,
        },
      ]
    },






    footer,
  })
})

// ================================================================
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Education',
    },
    header,
    main: {
      educations: [{
        name: `Secondary school №31 in Dnipro`,
        isEnd: true,
      },
      {
        name: `Prydniprovska State Academy of Civil Engineering
      and Architecture`,
        isEnd: false,
      },],
      certificates: [
        {
          name: "English",
          id: "B2",
        },
        {
          name: "Polish",
          id: "C1",
        },
        {
          name: "Spain",
          id: "A1",
        },




      ]
    },
    footer,
  })
})
// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',

    page: {
      title: 'Resume | Work',
    },
    header,
    main: {
      works: [
        {
          position: 'Junior Fullstack developer',
          company:
          {
            name: 'IT Brains',
            url: null,
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,
          projects: [{
            name: 'Resume',
            url: 'https://it-brains.com.ua',
            about: 'Airbnb competitor',
            stacks: [
              {
                name: 'React.js',

              },
              {
                name: 'HTML / CSS',

              },
              {
                name: 'Node.js',
              },
            ],
            stackAmount: 2,
            awards: [
              {
                name: 'Background verification - is a feature provides users  that they are real persons.  ',

              },
              {
                name: 'Preparing SEO optimized pages. The automated process  ',

              },

            ],
            stackAwards: 2,
          }

          ],


        }

      ],
    },
    footer,
  })
})


router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layout: 'person',
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education:
      {
        degree: 'Bachelor of Science',
        major: 'Computer Science',
        university:
          'Massachusetts Institute of Technology',
        graduationYear: 2012,
      },

      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================


// Підключаємо роутер до бек-енду
module.exports = router
