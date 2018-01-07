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
                {link:'/#/', page: 'Početna'},
            ],

        }
    }
}
</script>

<style>
li {
    font-size:40px;
    text-shadow: white 3px 3px 3px;
    position: fixed;
    left: 68px;
    color: aliceblue;
}

    a {
       background-color: aliceblue;
    }



</style>