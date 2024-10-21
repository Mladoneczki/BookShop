const konyvLista = [
    {
        title: "Ballad of Hate and Hope",
        author: "Kaylea Prime",
        genre: "Fantasy",
        image: `${process.env.PUBLIC_URL}/kepek/16.jpg`,
        price: 12.99,
        blurb: "An epic tale of conflict, emotions, and the balance between hatred and hope."
    },
    {
        title: "Fae from the Ashes",
        author: "Sophia LeRoux",
        genre: "Fantasy",
        image: `${process.env.PUBLIC_URL}/kepek/9.jpg`,
        price: 10.99,
        blurb: "A magical journey where fae rise from destruction, seeking to reclaim their destiny."
    },
    {
        title: "The Hurricane Wars",
        author: "Thea Guanzon",
        genre: "Fantasy",
        image: `${process.env.PUBLIC_URL}/kepek/24.jpg`,
        price: 15.99,
        blurb: "In the midst of catastrophic storms, battles rage for survival and dominance."
    },
    {
        title: "House of Marionne",
        author: "J. Elle",
        genre: "Fantasy",
        image: `${process.env.PUBLIC_URL}/kepek/18.jpg`,
        price: 14.99,
        blurb: "A tale of love, intrigue, and magic set in a dangerous world of elites."
    },
    {
        title: "Dark Reflections",
        author: "Samuel R. Delany",
        genre: "Dark Fantasy",
        image: `${process.env.PUBLIC_URL}/kepek/11.jpg`,
        price: 11.99,
        blurb: "A dark journey of self-discovery where shadows hold more than secrets."
    },
    {
        title: "Tarnished Empire",
        author: "Danielle L. Jensen",
        genre: "Fantasy",
        image: `${process.env.PUBLIC_URL}/kepek/10.jpg`,
        price: 9.99,
        blurb: "A story of rebellion, power struggles, and the fight for an empire’s soul."
    },
    {
        title: "Peter Pan in Wonderland",
        author: "Jeni Conrad",
        genre: "Fantasy",
        image: `${process.env.PUBLIC_URL}/kepek/12.jpg`,
        price: 10.49,
        blurb: "A crossover where Peter Pan meets Alice in an imaginative blend of worlds."
    },
    {
        title: "Godkiller",
        author: "Hannah Kaner",
        genre: "Fantasy",
        image: `${process.env.PUBLIC_URL}/kepek/13.jpg`,
        price: 13.99,
        blurb: "A gripping tale of mortals who dare to defy the gods in a battle for survival."
    },
    {
        title: "Novice Dragoneer",
        author: "E.E. Knight",
        genre: "Fantasy",
        image: `${process.env.PUBLIC_URL}/kepek/22.jpg`,
        price: 12.49,
        blurb: "A young dragon rider embarks on an adventurous journey to prove herself."
    },
    {
        title: "The Uncrowned Queen",
        author: "Nicola Tallis",
        genre: "Fantasy",
        image: `${process.env.PUBLIC_URL}/kepek/26.jpg`,
        price: 10.99,
        blurb: "A story of a lost heir who must reclaim her throne against all odds."
    },
    {
        title: "Shades of Fae",
        author: "Sophia LeRoux",
        genre: "Fantasy",
        image: `${process.env.PUBLIC_URL}/kepek/21.jpg`,
        price: 8.99,
        blurb: "In a world where fae and humans collide, hidden powers are about to emerge."
    },
    {
        title: "Jane Eyre",
        author: "Charlotte Brontë",
        genre: "Classic, Gothic Romance",
        image: `${process.env.PUBLIC_URL}/kepek/19.jpg`,
        price: 7.99,
        blurb: "An orphaned governess's journey of self-respect, love, and independence."
    },
    {
        title: "Macbeth",
        author: "William Shakespeare",
        genre: "Classic, Tragedy",
        image: `${process.env.PUBLIC_URL}/kepek/23.jpg`,
        price: 5.99,
        blurb: "The haunting tragedy of ambition and power that spirals into madness."
    },
    {
        title: "The Count of Monte Cristo",
        author: "Alexandre Dumas",
        genre: "Classic, Adventure",
        image: `${process.env.PUBLIC_URL}/kepek/20.jpg`,
        price: 9.99,
        blurb: "A timeless tale of betrayal and vengeance in 19th-century France."
    },
    {
        title: "The Metamorphosis",
        author: "Franz Kafka",
        genre: "Classic, Absurdism",
        image: `${process.env.PUBLIC_URL}/kepek/25.jpg`,
        price: 6.99,
        blurb: "A man wakes up to find himself transformed into a monstrous insect."
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic, Tragedy",
        image: `${process.env.PUBLIC_URL}/kepek/14.jpg`,
        price: 8.49,
        blurb: "A tragic love story set in the glitz and glam of the roaring 1920s."
    },
    {
        title: "Hamlet",
        author: "William Shakespeare",
        genre: "Classic, Tragedy",
        image: `${process.env.PUBLIC_URL}/kepek/4.jpg`,
        price: 5.99,
        blurb: "The story of a prince torn between vengeance and his moral conscience."
    },
    {
        title: "Great Expectations",
        author: "Charles Dickens",
        genre: "Classic, Coming of Age",
        image: `${process.env.PUBLIC_URL}/kepek/15.jpg`,
        price: 7.49,
        blurb: "The story of an orphan, Pip, and his journey through life and ambition."
    },
    {
        title: "If You Knew",
        author: "Emily Elgar",
        genre: "Thriller",
        image: `${process.env.PUBLIC_URL}/kepek/5.jpg`,
        price: 11.99,
        blurb: "A suspenseful thriller filled with secrets that unravel dangerous truths."
    },
    {
        title: "A Caller's Game",
        author: "J.D. Barker",
        genre: "Thriller",
        image: `${process.env.PUBLIC_URL}/kepek/27.jpg`,
        price: 13.49,
        blurb: "A radio show host gets pulled into a deadly game with a relentless caller."
    },
    {
        title: "Angel of Death",
        author: "J. T. Turner",
        genre: "Thriller",
        image: `${process.env.PUBLIC_URL}/kepek/7.jpg`,
        price: 10.99,
        blurb: "A chilling thriller about a serial killer who believes they are saving souls."
    },
    {
        title: "Nobody's Home",
        author: "D.M. Pulley",
        genre: "Horror",
        image: `${process.env.PUBLIC_URL}/kepek/17.jpg`,
        price: 12.99,
        blurb: "A family moves into a haunted house with a history of unspeakable horrors."
    },
    {
        title: "Crimson Rivers",
        author: "Jean-Christophe Grangé",
        genre: "Crime, Thriller",
        image: `${process.env.PUBLIC_URL}/kepek/3.jpg`,
        price: 10.49,
        blurb: "Two detectives uncover a chilling conspiracy in a remote French village."
    },
    {
        title: "Detective Stories",
        author: "Ken Adams",
        genre: "Crime, Mystery",
        image: `${process.env.PUBLIC_URL}/kepek/6.jpg`,
        price: 8.99,
        blurb: "A collection of gripping detective tales filled with mystery and suspense."
    },
    {
        title: "A Good Girl's Guide to Murder",
        author: "Holly Jackson",
        genre: "YA, Mystery",
        image: `${process.env.PUBLIC_URL}/kepek/2.jpg`,
        price: 9.99,
        blurb: "A high schooler investigates a cold case in this gripping YA mystery."
    },
    {
        title: "The Killer's Girl",
        author: "Helen Phifer",
        genre: "Crime, Thriller",
        image: `${process.env.PUBLIC_URL}/kepek/8.jpg`,
        price: 10.49,
        blurb: "A gripping thriller about a woman discovering her father's dark legacy."
    },
    {
        title: "Mr. Sherlock Holmes",
        author: "Arthur Conan Doyle",
        genre: "Classic, Mystery",
        image: `${process.env.PUBLIC_URL}/kepek/1.jpg`,
        price: 6.49,
        blurb: "The brilliant detective solves the most baffling mysteries in London."
    }
];

export default konyvLista;