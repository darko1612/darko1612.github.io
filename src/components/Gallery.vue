
<template>
    <div>
        <h1>Galerija</h1>
        <gallery :images="images" :index="index" @close="index = null" style="margin-top: 50px"></gallery>
        <div
                class="image img-thumbnail img-responsive pull-left"
                v-for="(image, imageIndex) in images"
                :key="imageIndex"
                @click="index = imageIndex"
        >
            <img class="pic" :src="image" alt="" style="width: 160px; margin: 10px;">
        </div>
        <div class="clearfix"></div>
    </div>
</template>

<script>
    import VueGallery from 'vue-gallery';

    export default {
        data: function () {
            return {
                images: [
                    "src/assets/IMG-4be968f05e87a07acc6b65f2b6b44c3e-V.jpg",
                    "src/assets/IMG-2b37bd15f2f10d12188b1829d79e14d9-V.jpg",
                    "src/assets/IMG-99cdfddcd985ed6b2856071395f6de65-V.jpg",
                    "src/assets/IMG-8854b23dd5f73db42efa87d6e4aa5c2b-V.jpg",
                    "src/assets/IMG-46639d5c65e23f26fe18bee795ebdc91-V.jpg",
                    "src/assets/IMG-a382a181769def0ada0f51d2767fbaeb-V.jpg",
                    "src/assets/IMG-b24bdd8485c135910b4945ae93e7429f-V.jpg",
                    "src/assets/IMG-d64551aeb90f1ed182f4cf8e0f349f1d-V.jpg",
                    "src/assets/IMG-e1d2201c6ba49a05a2b49262559367bb-V.jpg",
                    "src/assets/IMG-ee3f72eb27522c946dcf190b3521aacf-V.jpg",
                    "src/assets/IMG-eff7d3ad615e448945b64f7c7e38de6e-V.jpg",
                ],
                index: null
            };
        },

        components: {
            'gallery': VueGallery
        },
    }
</script>
<style>
.image {
    margin: 12px;
    margin-top: 40px;
    border: 1px solid black;
}
  .image:hover {
        cursor: pointer;
    }
</style>
