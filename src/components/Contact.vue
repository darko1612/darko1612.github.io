<template>
<div class="box">
    <h1>Kontakt</h1>
    <h3 v-for="con in contact">{{con.info}}</h3>
</div>
</template>

<script>
    export default {
        data() {
            return {
                contact:[
                    {info : 'Instagram : ######'},
                    {info : 'Facebook : #######'},
                    {info : 'Telefon : 063 716 20 61'},
                    {info : 'Email : ######'}
                ]
            }
        }
    }
</script>
<style>

</style>