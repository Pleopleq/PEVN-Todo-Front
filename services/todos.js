const baseUrl = "http://localhost:5000/todos";

async function getAll() {
  try {
    let response = await fetch(baseUrl);
    let data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export default {
  getAll,
};
