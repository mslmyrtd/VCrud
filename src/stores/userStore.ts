import { defineStore } from 'pinia'
import axios from 'axios';
import { useToast } from "vue-toastification";
const toast = useToast();
export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    itemList:[]
    
  }),
  getters: {
   
  },
  actions: {
    getUsers(){
      axios(
        "https://dummyjson.com/users?limit=200&skip=0&select=firstName,lastName,email,image"
      ).then((response) => {
        console.log(response.data.users);
        this.itemList = response.data.users || [];
      });
    },
    getDelete(payload:number){
    axios.delete(`https://dummyjson.com/users/${payload}`).then((response) => {
    this.itemList = this.itemList.filter((i) => i.id !== payload);
    toast.success("Deleted", {
      timeout: 2000,
    });
  });
    }
  }
})
