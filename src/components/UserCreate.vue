<template>
    <div class="card card-body mt-4">
        <form @submit.prevent="onSubmit">
            <div class="form-group">
                <label>Name</label>
                <input v-model="form.name" class="form-control" required />
            </div>

            <div class="form-group mt-3">
                <label>Email</label>
                <input 
                v-model="form.email"
                type="email"
                class="form-control" 
                required />
            </div>

            <button type="submit" class="btn btn-success mt-3">
                Create User
            </button>

        </form>
    </div>
</template>
<script>
import { reactive } from 'vue'
import { collection, addDoc } from 'firebase/firestore/lite';
import { db } from '../firebase'
import router from '../router/index'

export default{
    name: 'UserCreate',
    setup() {
        
        const form = reactive({ 
            name: '', 
            email: ''
            })
        const onSubmit = async () => {
            const docRef = await addDoc(collection(db,'users'),{ ...form })
            form.name = ''
            form.email = ''
                console.log("Document written with ID: ", docRef.id);
            router.go('/')
        }
        return { form, onSubmit }
    },
}
</script>
