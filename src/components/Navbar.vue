<template>

    <div class="header clearfix">
        <nav>
            <ul class="nav nav-pills pull-right" v-for="nav in navigation">
                        <li role="presentation" ><a :href="nav.link" ><img src="/src/assets/cracker.jpg" width="70px" alt="">{{ nav.page }}</a></li>
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

<style >
    li {
        font-size:40px;
        text-shadow: grey 3px 3px 3px;
        border: brown solid 1px;
        box-shadow: rgb(219,166,114) 3px 3px 3px;
        border-radius: 15px;
}
    a {
       background: aliceblue;
    }



</style>