export let games = [
    { id: 1, title: "The Witcher 3: Wild Hunt", platform: ["PlayStation 4", "Xbox One", "PC"] },
    { id: 2, title: "Grand Theft Auto V", platform: ["PlayStation 5", "Xbox Series X", "PC"] },
    { id: 3, title: "The Legend of Zelda: Breath of the Wild", platform: ["Nintendo Switch"] },
    { id: 4, title: "Red Dead Redemption 2", platform: ["PlayStation 4", "Xbox One", "PC"] },
    { id: 5, title: "Cyberpunk 2077", platform: ["PlayStation 4", "Xbox One", "PC"] },
    { id: 6, title: "Dark Souls III", platform: ["PlayStation 4", "Xbox One", "PC"] },
    { id: 7, title: "Super Mario Odyssey", platform: ["Nintendo Switch"] },
    { id: 8, title: "Horizon Zero Dawn", platform: ["PlayStation 4", "PC"] },
    { id: 9, title: "Assassin's Creed Valhalla", platform: ["PlayStation 5", "Xbox Series X", "PC"] },
    { id: 10, title: "Minecraft", platform: ["PlayStation 4", "Xbox One", "PC", "Nintendo Switch"] },
    { id: 11, title: "Fallout 4", platform: ["PlayStation 4", "Xbox One", "PC"] },
    { id: 12, title: "Overwatch", platform: ["PlayStation 4", "Xbox One", "PC"] },
    { id: 13, title: "The Elder Scrolls V: Skyrim", platform: ["PlayStation 4", "Xbox One", "PC"] },
    { id: 14, title: "FIFA 22", platform: ["PlayStation 5", "Xbox Series X", "PC"] },
    { id: 15, title: "League of Legends", platform: ["PC"] },
    { id: 16, title: "God of War", platform: ["PlayStation 4"] },
    { id: 17, title: "Among Us", platform: ["PC", "iOS", "Android"] },
    { id: 18, title: "Animal Crossing: New Horizons", platform: ["Nintendo Switch"] },
    { id: 19, title: "Call of Duty: Warzone", platform: ["PlayStation 4", "Xbox One", "PC"] },
    { id: 20, title: "Fortnite", platform: ["PlayStation 4", "Xbox One", "PC", "iOS", "Android"] }
];

export let authors = [
    { id: 1, name: "John Doe", verified: true },
    { id: 2, name: "Jane Smith", verified: false },
    { id: 3, name: "Alice Johnson", verified: true },
    { id: 4, name: "Bob Brown", verified: false },
    { id: 5, name: "Emma Davis", verified: true },
    { id: 6, name: "Michael Wilson", verified: false },
    { id: 7, name: "Sophia Martinez", verified: true },
    { id: 8, name: "Liam Anderson", verified: false },
    { id: 9, name: "Olivia Thomas", verified: true },
    { id: 10, name: "Noah White", verified: false },
    { id: 11, name: "Ava Garcia", verified: true },
    { id: 12, name: "William Rodriguez", verified: false },
    { id: 13, name: "Isabella Lopez", verified: true },
    { id: 14, name: "James Perez", verified: false },
    { id: 15, name: "Charlotte Lee", verified: true },
    { id: 16, name: "Benjamin Harris", verified: false },
    { id: 17, name: "Amelia Clark", verified: true },
    { id: 18, name: "Ethan Lewis", verified: false },
    { id: 19, name: "Mia Turner", verified: true },
    { id: 20, name: "Harper King", verified: false }
];

export let reviews = [
    { id: 1, rating: 8, content: "Great game, highly recommended!", authorId: 1, gameId: 1 },
    { id: 2, rating: 7, content: "Enjoyable experience overall.", authorId: 2, gameId: 2 },
    { id: 3, rating: 9, content: "Fantastic gameplay and story!", authorId: 3, gameId: 3 },
    { id: 4, rating: 6, content: "Decent game, but could be better.", authorId: 4, gameId: 4 },
    { id: 5, rating: 10, content: "Absolutely amazing, exceeded my expectations!", authorId: 5, gameId: 5 },
    { id: 6, rating: 5, content: "Mediocre at best, didn't live up to the hype.", authorId: 6, gameId: 6 },
    { id: 7, rating: 8, content: "Solid performance and engaging gameplay.", authorId: 7, gameId: 7 },
    { id: 8, rating: 3, content: "Disappointing, not worth the price.", authorId: 2, gameId: 8 },
    { id: 9, rating: 9, content: "Incredible graphics and immersive world.", authorId: 2, gameId: 9 },
    { id: 10, rating: 7, content: "Fun multiplayer experience.", authorId: 10, gameId: 10 },
    { id: 11, rating: 6, content: "Average game, nothing special.", authorId: 11, gameId: 11 },
    { id: 12, rating: 8, content: "Captivating storyline and memorable characters.", authorId: 12, gameId: 12 },
    { id: 13, rating: 4, content: "Buggy and unpolished, needs more updates.", authorId: 13, gameId: 13 },
    { id: 14, rating: 9, content: "Addictive gameplay and tons of replay value.", authorId: 14, gameId: 14 },
    { id: 15, rating: 7, content: "Enjoyed it, but some mechanics could be improved.", authorId: 15, gameId: 15 },
    { id: 16, rating: 10, content: "Best game I've played in years, a masterpiece!", authorId: 16, gameId: 16 },
    { id: 17, rating: 6, content: "Not bad, but not exceptional either.", authorId: 17, gameId: 17 },
    { id: 18, rating: 8, content: "Well-designed levels and challenging puzzles.", authorId: 18, gameId: 18 },
    { id: 19, rating: 5, content: "Uninspired and repetitive, got bored quickly.", authorId: 19, gameId: 2 },
    { id: 20, rating: 9, content: "Highly addictive, couldn't put it down!", authorId: 20, gameId: 2 }
];

var currentGameId = 21
// GAMES
export const addGame = (game:any) => {
    let newGame = {...game, id: currentGameId++}
    games.push(newGame)
    return newGame
};

export const deleteGame = (id: number): void => {
    games = games.filter((game) => game.id !== id);
    reviews = reviews.filter((review) => review.gameId !== id);
};

export const updateGame = (id: number, editGame:any ) => {
    games = games.map((game) => {
        if (game.id === id) {
            return {...game, ...editGame}
        }
        return game
    })
    
    return games.find((game) => game.id == id)
};