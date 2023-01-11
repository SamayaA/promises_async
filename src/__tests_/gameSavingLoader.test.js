import GameSavingLoader from '../js/GameSavingLoader';

test('test GameSavingLoader', async () => {
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  const response = await GameSavingLoader.load();
  expect(response).toEqual(expected);
});
