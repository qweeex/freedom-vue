<template>
  <div class="contact-img">

    <div class="block">
      <div class="block-wrapper">
        <div class="block-map"></div>
        <div class="block-map"></div>
        <div class="block-map"></div>
        <div class="block-map"></div>
        <div class="block-map"></div>
        <div class="block-map"></div>
        <div class="block-map"></div>
        <div class="block-map"></div>
        <div class="block-map"></div>
        <div class="block-map"></div>
        <div class="block-map"></div>
        <div class="block-map"></div>
        <div class="block-map"></div>
        <div class="block-map"></div>
        <div class="block-map"></div>
        <div class="block-map"></div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "ContactBlock",
    methods: {
      BlockAnimate(){
        let blocks = document.querySelectorAll('.block-map');
        blocks.forEach(element => {
          /*element.addEventListener('mouseover', () => {
            //element.classList.add('block-active');
            setInterval(() => {
              this.TransformBox(element, this.randomInteger(-5,5), this.randomInteger(-5, 5));
            }, 90);
          });
          element.addEventListener('mouseout', () => {
            element.classList.remove('block-active');
          })*/
          setInterval(() => {
            this.TransformBox(element, this.randomInteger(-15,15), this.randomInteger(-15, 15));
          }, 90);
        })
      },
      randomInteger(min, max) {
        // получить случайное число от (min-0.5) до (max+0.5)
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
      },
      TransformBox (elem, x, y){
        elem.style.transform = "skew(" + x + "deg, " + y +"deg)";
      }
    },
    mounted() {
      this.BlockAnimate();
    }
  }
</script>

<style scoped lang="less">
  .block{
    width: 600px;
    &-wrapper{
       display: grid;
       grid-template-columns: 1fr 1fr 1fr 1fr;
       grid-template-rows: 1fr 1fr 1fr 1fr;
       grid-gap: 30px;
     }
    &-map{
       width: 116px;
       height: 116px;
       background: #1A51A4;
       display: block;
       margin-left: auto;
       margin-right: auto;
       transform: skew(0, 0);
       transition: all 0.5s;

    }
    &-active{
       background: transparent !important;
       transform: skew(0, 0);
      &::before{
         opacity: 1;
       }
    }
  }
</style>