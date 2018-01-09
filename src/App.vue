<template>
  <div id="app" class="container">
      <navbar> </navbar>
      <router-view></router-view>
      <footer-x class="foot"> </footer-x>
  </div>
</template>

<script>
    import Navbar from './components/Navbar.vue'
    import About from './components/About.vue'
    import Footer from './components/Footer.vue'
    import Gallery from './components/Gallery.vue'
    import Home from './components/Home.vue'
    import Contact from './components/Contact.vue'


export default {
    components:{
        'navbar': Navbar,
        'about': About,
        'contact': Contact,
        'footer-x': Footer,
        'gallery': Gallery,
        'home': Home
    },
}

</script>

<style>

    body {
        padding-top: 10px;
        padding-bottom: 10px;
        background-image: url("./assets/logo.png");
        background-repeat: repeat;
        background-position: center;
        opacity: 0.9;
        font-weight: 400;
        background-size: 36%;
        font-family: 'Caveat', cursive;


    }
    div>nav {
        width:100%;
        margin-left: -1%;

    }


    .header h3 {
        margin-top: 0;
        margin-bottom: 0;
        line-height: 30px;
    }

    /* Custom page footer */
    .footer {
        padding-top: 19px;
        color: black;
        border-top: 1px solid #e5e5e5;
    }

    /* Customize container */
    @media (min-width: 1000px) {
        .container {
            max-width: 700px;
        }
        #box {
           min-height: 300px;
        }

    }

    .container-narrow > hr {
        margin: 0 0;
    }

    /* Main marketing message and sign up button */
    .jumbotron {
        text-align: center;
        border-bottom: 1px solid #e5e5e5;
    }
    .jumbotron .btn {
        padding: 5px 5px;
        font-size: 21px;
    }

    /* Supporting marketing content */
    .marketing {
        margin: 40px 0;
    }


    /* Responsive: Portrait tablets and up */
    @media screen and (max-width: 700px) {
        /* Remove the padding we set earlier */
        .header,
        .marketing,
        .footer, body {
            padding-right: 0;
            padding-left: 0;
            background-repeat: repeat;
        }
        /* Space out the masthead */
        .header {
            margin-top: 15px;
        }

         /* Remove the bottom border on the jumbotron for visual effect */

       .box>h3 {

           padding: 10px;
       }
       div.box {
           width: 96%;
           margin-left: 4px;

           background-size: cover;
       }
       nav>ul>li {

           font-size: 40px;
           width: 150%;



       }
       div>nav {
           width:100%;
           margin-left: -35%;

       }
       div.image {
           margin-left: 25%;
       }
       div.gallery {
           width: 90%;
           margin-left: -1%;
       }

    }
    @media  screen and (max-height: 415px){


        img {
            max-width:110px;

        }
        div.box {
            width: 100%;

        }
        div>nav {
            width:200%;
            margin-left: -100%;
        }
        nav>ul>li {
            font-size: 40px;
            width: 100%;
        }
        div.gallery {
            width: 95%;
            margin-left: 10%;
        }
        div.image {
            width: 160px;
            height: 160px;
            margin: 5px;
        }

    }
    h3{
        color: black;
        text-shadow: white 3px 4px 3px;
        font-size: 46px;
        font-weight: 500;

    }
    a {
        color: black;
    }
    .box {
        border: solid 2px rgb(219,166,114);
        width: 100%;
        background-image: url('./assets/making-bakery-in-the-kitchen_1101-153.jpg');
        background-size: 115%;
        background-repeat: no-repeat;
        background-position: right bottom;
        text-align: right;
        box-shadow: brown 10px 8px 8px;
        padding-top: 2%;
        position: relative;
        margin-top: 20%;
        margin-left: 2%;

    }
   .gallery {
       width: 120%;
       margin-left: -1%;
   }
    .image {
        margin: 20px;
        width: 200px;
        height: 200px;
        text-align: center;
    }
</style>
