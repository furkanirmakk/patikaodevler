import getData from './lib/services.js';

async function run() {
  try {
    const userId = 1; // Örnek userId
    const userData = await getData(userId);
    console.log(userData);
  } catch (error) {
    console.error("Error:", error);
  }
}

run();
