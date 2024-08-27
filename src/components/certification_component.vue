<script setup>
import { ref, onMounted } from 'vue'
import axios from '@/services/axios.js'

const events = ref(null)

onMounted(() => {
  axios.getEvents()
    .then((response) => {
      events.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})

</script>

<template>
    <div class="container">
        <div class="row"><div class="col"><h2>Certificações</h2></div></div>
        <div class="event-container">
            <div v-for="event in events" :key="event.id" class="certificado">
                <div class="event-content">
                    <h5>{{ event.title }}</h5>
                    <p><a :href="event.url" target="_blank" >Ver credencial</a></p>
                    <img :src="event.image" :alt="`Image for ${event.title}`">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
h2{
    margin-bottom: 28px;
    color: #ffffff;
}
p{
    margin-top: 32px;
}

.event-container {
    display: flex;
    flex-wrap: wrap;
}
.event-content{
    padding: 0;
}
.certificado {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.certificado img {
    height: 150px;
    display: block;
    margin: 0 auto;
}

.certificado h5 {
    color: #9C9C9C;
}

.certificado a {
    text-decoration: none;
    color: #ffffff;
    margin-top: 16px;
}

@media (max-width: 1400px) {
    .certificado {
        flex: 1 1 calc(50% - 20px);
        margin-bottom: 20px;
    }
}

@media (max-width: 990px) {
    .certificado {
        flex: 1 100%;
        margin-bottom: 20px;
    }
}
</style>
