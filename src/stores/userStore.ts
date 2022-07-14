import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from "vue-toastification";
import router from "@/router";
import { toRaw } from "vue";

const toast = useToast();

interface currentItem {
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  id: number;
}
type User = {
  itemList: currentItem[] | null;
  currentItem?: currentItem;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  id: string;
};
export const useUserStore = defineStore({
  id: "user",
  state: (): User => ({
    itemList: [],
    firstName: "",
    lastName: "",
    email: "",
    image: "",
    id: "",
    currentItem: {
      firstName: "",
      lastName: "",
      email: "",
      image: "",
      id: 0,
    },
  }),
  getters: {},
  actions: {
    getUsers() {
      if (this?.itemList && this?.itemList?.length > 0) this.itemList;
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
          const newList = this?.itemList?.filter((i: any) => i.id !== payload);
          if (newList) this.itemList = newList;
          toast.success("Deleted", {
            timeout: 2000,
          });
        })
        .catch((err) => {
          console.log(err, "SERVER RESPONDED WITH ERROR");
          // Newly added item is not added to mock server,remove it manually!
          if (this.itemList) {
            const itemForDelete = this.itemList.find(
              (item: any) => item.id == payload
            );
            if (itemForDelete) {
              this.itemList = this.itemList.filter(
                (item: any) => item.id !== payload
              );
              toast.success("Deleted", {
                timeout: 2000,
              });
            }
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
          this.itemList = this.itemList
            ? [newUser, ...this?.itemList]
            : [newUser];
          toast.success("Successfully added", {
            timeout: 2000,
          });
          this.reset();
          return router.push("/");
        });
    },
    getOneUser(payload: number) {
      if (this.itemList && this.itemList.length > 0) {
        const elem = toRaw(this.itemList).find(
          (item) => item.id === Number(payload)
        );
        if (elem) this.currentItem = elem;
      } else {
        axios(`https://dummyjson.com/users/${payload}`).then((response) => {
          this.itemList = [response.data];
          this.currentItem = response.data;
        });
      }
    },
    updateSubmit(payload: number) {
      const items = toRaw(this.itemList);
      axios
        .put(`https://dummyjson.com/users/${payload}`, {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          image: this.image,
        })
        .then((response) => {
          let updatedUser = response.data;
          const prevItem = items?.find((item) => item.id == Number(this.id));
          if (prevItem) {
            const idx = items?.indexOf(prevItem);
            if (items && idx && items[idx]) items[idx] = updatedUser;
            this.itemList = items;
            toast.success("Successfully updated", {
              timeout: 2000,
            });
          }
        })
        .catch((err) => {
          console.log(err, "API REQUEST ERROR");
          const updatedUser = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            image: this.image,
            id: payload,
          };
          const prevItem = items?.find((item) => item.id == Number(this.id));
          if (prevItem) {
            const idx = items?.indexOf(prevItem);
            if (items && idx && items[idx]) items[idx] = updatedUser;
            this.itemList = items;
            toast.success("Successfully updated", {
              timeout: 2000,
            });
          }
          toast.success("Successfully updated", {
            timeout: 2000,
          });
        });
      this.reset();
      return router.push("/");
    },
    reset() {
      (this.firstName = ""),
        (this.lastName = ""),
        (this.email = ""),
        (this.image = "");
    },
  },
});
