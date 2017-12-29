<template>
<div id="box">
  <h3>{{intro}}</h3>

</div>
</template>

<script>
export default {
    data(){
        return {
            intro: 'U vreme poklona, toplih cajeva, kolacica i predivnih mirisa... ' +
            'Kolacici po vasoj zelji za bilo koju priliku se nalaze kod nas i lako mogu doci i do vas...' +
            'Predlozite izgled, ukus i ideje jer kod nas se sve vase zelje ostvaruju ' +
            ''

            }
        }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3{
    color: white;
    text-shadow: black 3px 3px 3px;
    font-size: 46px;
}
ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: black;
}
#box {
    border: solid 1px rgb(219,166,114);
    background-color: chocolate;
    padding: 12px;
    text-align: center;
    box-shadow: chocolate 10px 8px 8px;
    border-radius: 100%;
    padding-top: 6%;
    margin-top: 10%;
    color: rgb(114, 54, 62);
}
</style>
