const mockListOfJokes = {
  type: 'success',
  value: [
    {
      id: 1,
      joke: 'I am a joke',
      categories: [],
    },
    {
      id: 2,
      joke: 'I am another joke',
      categories: [],
    },
  ],
};

const mockRandomJoke = {
  type: 'success',
  value: {
    id: 115,
    joke: 'I am a random joke',
    categories: [],
  },
};

const mockPersonalJoke = {
  type: 'success',
  value: {
    id: 141,
    joke: 'random joke about manchester codes',
    categories: [],
  },
};

module.exports = { mockListOfJokes, mockRandomJoke, mockPersonalJoke };
