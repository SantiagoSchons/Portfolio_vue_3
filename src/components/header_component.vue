<script>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary" style="background-color: #1b1b1b !important; border-radius: 0px 0px 10px 10px;">
            <div class="container">
                <div id="navbarNavAltMarkup" style="flex-direction: row !important; ">
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

@media (max-width: 990px) {
    .navbar-nav{
        text-align: center;
    }
}
@media (min-width: 300px) {
    .navbar-expand-lg .navbar-nav {
        flex-direction: row;
    }
    a{
        padding: 8px !important;
    }
}

</style>

