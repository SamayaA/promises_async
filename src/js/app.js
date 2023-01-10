import GameSavingLoader from './GameSavingLoader';

const main = async () => {
  try {
    const inst = await GameSavingLoader.load();
    const obj = JSON.parse(inst);
    console.log(obj);
  } catch (error) {
    console.log(error);
  }
};
