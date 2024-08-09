<script>
  export let title
  export let explain
</script>

<style>
 .bar-btn {
    width: 220pt;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    margin: 10pt 0 0 0;
    background-color: #FFFFFF;
    border-radius: 20px;
    padding: 10px;
  }

  .icon-bg {
    background-color: #FFFFFF;
    height: 50pt;
    width: 50pt;
    border-radius: 100pt;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon-img {
    height: 40pt;
  }

  .text-bg .title .desc{
    display: inline-block;
  }

  .text-bg * {
    margin: 2pt 0;
  }

  .title {
    font-size: 16pt;
    font-weight: 600;
  }

  .desc {
    font-size: 10pt;
    color: #808080;
  }

  .arrow-box {
    position: absolute;
    right: 40px;
    margin-left: 12pt;
  }
  
</style>
<div class="bar-btn">
  <div class="icon-bg">
      <img src="/childIcon.png" class="icon-img" alt="">
  </div>
  <div class="text-bg">
      <div class="title">{title}</div>
      <div class="desc">{explain}</div>
  </div>
  <div class="arrow-box">
      <img src="/right_arrow.svg" alt="">
  </div>
</div>
