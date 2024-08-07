<script setup>
import { ref, onMounted } from 'vue'
import certification_component from '@/components/certification_component.vue';
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
    <div id="certificados">
        <div class="row"><div class="col"><h2>Certificações</h2></div></div>
        <div class="events">
            <certification_component v-for="event in events" :key="event.id" :event="event"/>
        </div>
    </div>
</template>

<style scoped>

.events{
    display: flex;
}
div#certificados{
    margin-bottom: 20px;
    /* background-color: aquamarine; */
    display: block;


}
div#certificados h2{
    margin-bottom: 28px;
    color: #ffffff;
}

div#certificados h5{
    color: #9C9C9C;
}
div#certificados a{
    text-decoration: none;
    color: #ffffff;
}
img, .a{
    height: 150px;
    display: block;
    margin:0 auto;
}
</style>