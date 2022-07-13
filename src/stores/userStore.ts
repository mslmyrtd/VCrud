import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from "vue-toastification";
import router from "@/router";

const toast = useToast();

type User = {
  itemList: Array<object>;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
};
export const useUserStore = defineStore({
  id: "user",
  state: (): User => ({
    itemList: [],
    firstName: "",
    lastName: "",
    email: "",
    image: "",
  }),
  getters: {},
  actions: {
    getUsers() {
      if (this.itemList.length > 0) this.itemList;
      else {
        axios(
          "https://dummyjson.com/users?limit=200&skip=0&select=firstName,lastName,email,image"
        ).then((response) => {
          this.itemList = response.data.users.slice(0, 25) || [];
        });
      }
    },
    getDelete(payload: number) {
      axios
        .delete(`https://dummyjson.com/users/${payload}`)
        .then((response) => {
          this.itemList = this.itemList.filter((i) => i.id !== payload);
          toast.success("Deleted", {
            timeout: 2000,
          });
        })
        .catch((err) => {
          console.log(err, "SERVER RESPONDED WITH ERROR");
          // Newly added item is not added to mock server,remove it manually!
          const itemForDelete = this.itemList.find(
            (item) => item.id == payload
          );
          if (itemForDelete) {
            this.itemList = this.itemList.filter((item) => item.id !== payload);
            toast.success("Deleted", {
              timeout: 2000,
            });
          }
        });
    },
    getAdd() {
      axios
        .post("https://dummyjson.com/users/add", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          image: this.image,
        })
        .then((response) => {
          let newUser = response.data;
          this.itemList.push(newUser);
          return router.push("/");
        });
    },
  },
});
