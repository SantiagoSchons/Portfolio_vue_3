<script>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary" style="background-color: #1b1b1b !important; border-radius: 0px 0px 10px 10px;">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <RouterLink :to="{ name: 'home' }" class="nav-link">Santiago Schons</RouterLink> 
                        <a href="https://www.linkedin.com/in/santiago-de-oliveira-6a4836231" class="nav-link" target="_blank">Linkedin</a>
                        <a href="https://github.com/SantiagoSchons" class="nav-link" target="_blank">Github</a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
header{
  margin-bottom: 50px;
}
a{
  color:#9C9C9C !important;
}
</style>

