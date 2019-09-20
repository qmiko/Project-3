import axios from "axios";

export default {
 // Gets books from the Google API
 getItems: function(q) {
   return axios.get("/api/items", {});
 },

 // Saves an book to the database
 saveItem: function(itemData) {
     console.log('API got sent ', itemData);
   return axios.post("/api/items", itemData);
 }
};