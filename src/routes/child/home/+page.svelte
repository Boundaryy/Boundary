<script>
    import BarButton from "/src/components/bar-button.svelte";
    import Calendar from "/src/components/calendar.svelte";

  function onclickhandler() {
    window.location.href = "/child/training/explain"
  }
  function onclickhandler2() {
    window.location.href = "/child/mypage"
  }
</script>

<style>

</style>

<div class="container">
  <!-- <div class="mypage-btn">
    <span on:click={onclickhandler2}><div class="text">나의 정보</div></span>
    <img src="/user-icon.svg" alt="a" class="icon"/>
  </div> -->
  <div class="header">
    <h2>어렵지 않은 학습</h2>
    <p>상황 대처, 게임을 통한 학습으로 지능을 향상시켜요</p>
  </div>
  <div class="bar-btn-container">
    <span on:click={onclickhandler}><BarButton title="상황 대처 학습" explain="게임을 통한 학습능력 상승"/></span>
    <BarButton title="코그니션 트레이닝" explain="게임으로 트레이닝을 진행해요!"/>
  </div>
  <div class="header">
    <h2>꾸준히 함께해봐요</h2>
    <p>상황 대처, 게임을 통한 학습으로 지능을 향상시켜요</p>
  </div>
  <Calendar/>
</div>