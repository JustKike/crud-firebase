<template>
  <div class="card card-body mt-4">
    <h3>Editar Usuario</h3>
    <form @submit.prevent="update">
      <div class="form-group">
        <label>Name</label>
        <input v-model="form.name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Email</label>
        <input
          v-model="form.email"
          class="form-control"
          type="email"
          required
        />
      </div>

      <button type="submit" class="btn btn-primary mt-3">Update</button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { db } from "@/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore/lite";
import router from "../router/index";

export default {
  name: "Edit",
  data() {
    return {
      baseDatos: [],
    };
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const userId = computed(() => route.params.id);

    const form = reactive({ name: "", email: "" });

    onMounted(async () => {
      const usuarios = [];
      const docRef = doc(db, "users", userId.value);
      const docSnap = await getDoc(docRef);
      let usuario = docSnap.data();
      usuarios.push(usuario);
      agregar(usuarios);
    });
    function agregar(usuarios) {
      usuarios.forEach((item) => {
        form.name = item.name;
        form.email = item.email;
      });
    }

    const update = async () => {
      const docRef = doc(db, "users", userId.value);
      await updateDoc(docRef, {
        name: form.name,
        email: form.email,
      });
      router.push("/");
      form.name = "";
      form.email = "";
    };

    return { form, update };
  },
};
</script>
