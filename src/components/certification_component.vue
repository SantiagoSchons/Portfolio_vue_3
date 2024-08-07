<script setup>
defineProps({
  event: {
    type: Object,
    required: true,
  },
})
</script>

<template>
    <div id="certificados">
        <div class="row">
            <div class="col">
                <h5>{{ event.title }}</h5>
                <p style="margin-top: 32px;"><a :href="event.url" target="_blank">Ver credencial</a></p>
                <img :src="event.image" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
div#certificados{
    margin-bottom: 20px;
    /* background-color: aquamarine; */
    flex: 1;

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