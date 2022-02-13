<template>
  <div class="card card-body mt-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, id) in usuarios" :key="id">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>
            <router-link :to="`/edit/${item.id}`"> 
              <button class="btn btn-primary btn-sm me-2">Edit</button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click.prevent="deleteUser(item.id )">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { collection, getDocs, doc, onSnapshot, deleteDoc } from "firebase/firestore/lite";
import { db } from "../firebase";
import router from '../router/index'

export default {
  name: "UserList",
   data() {
    return {
      usuarios: []
    }
  },
  methods: {
    async obtenerDatos() {
      const querySnapshot = await getDocs(collection(db, "users"));
      const usuarios = [];
      querySnapshot.forEach((doc) => {
        let usuario = doc.data();
        usuario.id = doc.id;
        usuarios.push(usuario);
        this.usuarios = usuarios;
      });
        console.log(usuarios);
    },
    async deleteUser(id){
      await deleteDoc(doc(db, "users", id ));
      router.go('/')
    },
  },
  mounted(){
      this.obtenerDatos();
      
  },
};
</script>
