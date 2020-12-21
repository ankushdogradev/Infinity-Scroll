//Unsplash API
const count = 10;
const apiKey = "AUq-6UdArn3p6iEYxnr24gktSKV8ZKZXq9CZl8VdoLM";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=&count=${apiKey}&count=${count}`;

//Get photos from unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    //Catch Error
  }
}

//on load
getPhotos();
