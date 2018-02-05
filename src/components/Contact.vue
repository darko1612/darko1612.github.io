<template>
<div class="box">
    <h1>Kontakt</h1>
    <h3 v-for="con in contact"><a :href="con.link" target="_blank">{{con.info}}</a></h3>
</div>
</template>

<script>
    export default {
        data() {
            return {
                contact:[
                    {info : 'Instagram : cookies_d', link: 'https://www.instagram.com/cookies__d/?hl=en'},
                    {info : 'Facebook : #######'},
                    {info : 'Telefon : 063 716 20 61'},
                    {info : 'Email : coja.ns.89@gmail.com'}
                ]
            }
        }
    }
</script>
<style >
h3 {
    padding-right: 10%;
}
</style>