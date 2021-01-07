import icons from "./iconmap";

const skills = [
    {
        title: "Javascript Developer",
        icon: icons.JS,
        featured: [
            icons.Mongo,
            icons.Express,
            icons.React,
            icons.Node
        ],
        others: [
            icons.Bootstrap,
            icons.MaterialUI,
            icons.Mongoose,
            icons.Redux
        ],
        testing: [
            icons.Mocha,
            icons.Jest,
            icons.Chai
        ],
        word: "I am agile and can work with different Packages",
        certificates: [
            {
                link: "https://coursera.org/share/262eeb0bc018dc0002beae790360225c",
                path: icons.Certificate.path,
                alt: icons.Certificate.alt
            }
        ],
        index: 0
    },
    {
        title: "Java Developer",
        icon: icons.Java,
        featured: [
            icons.Spring,
            icons.Hibernate
        ],
        others: [],
        testing: [],
        word: "Aspiring java developer looking forward to learn more",
        certificates: [],
        index: 1
    },
    {
        title: "Python Developer",
        icon: icons.Python,
        featured: [
            icons.Pandas
            // "NumPy"
        ],
        testing: [],
        others: [],
        word: "Leanring data Scince using Python",
        certificates: [
            {
                link: "https://coursera.org/share/45e58be2d8e420ba11954a503514ab9c",
                path: icons.Certificate.path,
                alt: icons.Certificate.alt
            }
        ],
        index: 2
    },

]

export default skills;