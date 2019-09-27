import axios from "axios";
import Buffer from "buffer";

export default {
 // Gets books from the Google API
 getItems: function(q) {
   return axios.get("/api/items");
 },

 // Saves an book to the database
 saveItem: function(itemData) {
     console.log('API got sent ', itemData);
   return axios.post("/api/items", itemData);
 },

 imageUpload: function(data, title=Date.now()){
  console.log('API got sent ', data);

   return axios.post("/api/upload/"+title, data);
 },

 getImage: function(img){
   //https://stackoverflow.com/questions/41846669/download-an-image-using-axios-and-convert-it-to-base64
   console.log('sending req to ', __dirname + "/api/images/"+img)
   return axios.get("/api/images/"+img, { responseType:"blob" })
    
    
 }
};