<template>

    <div class="header clearfix">
        <nav>
            <ul class="nav nav-pills pull-right" v-for="nav in navigation">
                <li role="presentation" ><a :href="nav.link" >{{ nav.page }}</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return{
            navigation: [
                {link:'/#/kontakt', page: 'Kontakt'},
                {link:'/#/galerija', page: 'Galerija'},
                {link:'/#/', page: 'Pocetna'},
            ],

        }
    }
}
</script>

<style>
li {
    font-size:38px;
    text-shadow: white 3px 3px 3px;
    position: fixed;
    left: 38px;
    color: aliceblue;
}
    ul {
        font-size: 20px;


    }
    a {
       background-color: aliceblue;
    }



</style>