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
        padding-top: 20px;
        padding-bottom: 20px;
        background-image: url("./assets/logo.png");
        background-repeat: repeat;
        background-position: center;
        opacity: 0.8;
        font-weight: 400;
        background-size: 36%;
        font-family: 'Indie Flower', cursive;


    }

    .header h3 {
        margin-top: 0;
        margin-bottom: 0;
        line-height: 40px;
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
        margin: 5px 0;
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
    .marketing p + h4 {
        margin-top: 28px;
    }

    /* Responsive: Portrait tablets and up */
    @media screen and (max-width: 800px) {
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



    }
    h3{
        color: white;
        text-shadow: black 3px 3px 3px;
        font-size: 46px;
    }
    a {
        color: black;
    }
    .box {
        border: solid 1px rgb(219,166,114);
        background-color: chocolate;
        padding: 20px;
        text-align: center;
        box-shadow: chocolate 10px 8px 8px;
        border-radius: 100%;
        padding-top: 6%;
        margin-top: 10%;
        color: rgb(114, 54, 62);
    }
</style>
