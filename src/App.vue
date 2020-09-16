<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
  @import url('./assets/less/reset');
  @import url('./assets/less/fonts');
  @import url('./assets/less/main');

  @media (max-width: 1450px) {
    zoom: .75;
  }
</style>