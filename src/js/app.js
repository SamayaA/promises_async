import GameSavingLoader from './GameSavingLoader';

const main = async () => {
  try {
    const obj = await GameSavingLoader.load();
    console.log(obj);
  } catch (error) {
    console.log(error);
  }
};
