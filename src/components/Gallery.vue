<template>
<div id="gallery">
    <h1>{{gallery}}</h1>
    <div v-for="img in image">
        <img class="pull-left img img-responsive" :src="img.source" alt="">
    </div>
    <div class="clearfix"></div>
</div>

</template>

<script>
    export default {
        data() {
            return {
                image:[
                    {source :"src/assets/IMG-4be968f05e87a07acc6b65f2b6b44c3e-V.jpg"},
                    {source :"src/assets/IMG-2b37bd15f2f10d12188b1829d79e14d9-V.jpg"},
                    {source :"src/assets/IMG-99cdfddcd985ed6b2856071395f6de65-V.jpg"},
                    {source :"src/assets/IMG-8854b23dd5f73db42efa87d6e4aa5c2b-V.jpg"},
                    {source :"src/assets/IMG-46639d5c65e23f26fe18bee795ebdc91-V.jpg"},
                    {source :"src/assets/IMG-a382a181769def0ada0f51d2767fbaeb-V.jpg"},
                    {source :"src/assets/IMG-b24bdd8485c135910b4945ae93e7429f-V.jpg"},
                    {source :"src/assets/IMG-d64551aeb90f1ed182f4cf8e0f349f1d-V.jpg"},
                    {source :"src/assets/IMG-e1d2201c6ba49a05a2b49262559367bb-V.jpg"},
                    {source :"src/assets/IMG-ee3f72eb27522c946dcf190b3521aacf-V.jpg"},
                    {source :"src/assets/IMG-eff7d3ad615e448945b64f7c7e38de6e-V.jpg"},
                ],
                gallery: 'Galerija'
            }
        }
    }
</script>

<style scoped="Gallery.vue">
    img {
        width: 200px;
        border: 2px solid black;
        margin: 5px;
        opacity: 1.0;

    }
    #gallery {
       margin-top: 40px;
        margin-bottom: 40px;
    }


</style>
