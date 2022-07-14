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
  id:string;
};
export const useUserStore = defineStore({
  id: "user",
  state: (): User => ({
    itemList: [],
    firstName: "",
    lastName: "",
    email: "",
    image: "",
    id:""
  }),
  getters: {},
  actions: {
    getUsers() {
      if (this.itemList.length > 0) this.itemList;
      else {
        axios(
          "https://dummyjson.com/users?limit=20&skip=0&select=firstName,lastName,email,image"
        ).then((response) => {
          this.itemList = response.data.users || [];
        });
      }
    },
    getDelete(payload: number) {
      axios
        .delete(`https://dummyjson.com/users/${payload}`)
        .then((response) => {
          this.itemList = this.itemList.filter((i:any) => i.id !== payload);
          toast.success("Deleted", {
            timeout: 2000,
          });
        })
        .catch((err) => {
          console.log(err, "SERVER RESPONDED WITH ERROR");
          // Newly added item is not added to mock server,remove it manually!
          const itemForDelete = this.itemList.find(
            (item:any) => item.id == payload
          );
          if (itemForDelete) {
            this.itemList = this.itemList.filter((item:any) => item.id !== payload);
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
          this.itemList = [newUser, ...this.itemList];
          toast.success("Successfully added", {
            timeout: 2000,
          });
          this.reset();
          return router.push("/");
        });
    },
    getOneUser(payload: number) {
      axios(`https://dummyjson.com/users/${payload}`).then((response) => {
        this.itemList = response.data;
      });
    },
    updateSubmit(payload: number) {
      axios
        .put(`https://dummyjson.com/users/${payload}`, {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          image: this.image,
        })
        .then((response) => {
          let newUser = response.data;
          console.log(newUser);
          this.itemList = [newUser, ...this.itemList];
          toast.success("Successfully updated", {
            timeout: 2000,
          });

          this.reset();
          return router.push("/");
        });
    },
    reset() {
      (this.firstName = ""),
        (this.lastName = ""),
        (this.email = ""),
        (this.image = "");
    },
  },
});
