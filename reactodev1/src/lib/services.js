import axios from 'axios';

export default async function getData(userId) {
  try {
    // Kullanıcı verilerini çekiyoruz
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userData = userResponse.data;

    // Kullanıcının postlarını çekiyoruz
    const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const userPosts = postsResponse.data;

    // Kullanıcı verileri ve postları birleştiriyoruz
    const combinedData = {
      ...userData,
      posts: userPosts
    };

    // Birleştirilmiş veriyi döndürüyoruz
    return combinedData;
  } catch (error) {
    console.error("Error fetching user data or posts:", error);
    throw error;
  }
}
