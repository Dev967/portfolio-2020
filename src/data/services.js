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
        certificates: [],
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
        certificates: [],
        index: 2
    },

]

export default skills;