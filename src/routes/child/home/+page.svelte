<script>
    import BarButton from "/src/components/bar-button.svelte";
  function onclickhandler() {
    window.location.href = "/child/training/explain"
  }
  function onclickhandler2() {
    window.location.href = "/child/mypage"
  }
</script>

<style>
  .container {
    width: 375px;
    height: 812px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: #F3F4F6;
    font-family: 'Pretendard', sans-serif;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 32px;
  }
    
  .header {
    text-align: left;
    margin: 40px 0 0px 0;
    width: 100%;
    padding-left: 85px;   

}
  
  .header h1 {
    color: #5772FF;
    font-size: 24px;
    font-weight: 700;
    margin: 0;
  }
  
  .header h2 {
    font-size: 30px;
    font-weight: 700;
    margin: 10px 0;
  }
  
  .header p {
    color: #808080;
    font-size: 14px;
    margin: 5px 0;
  }
  
  .calendar {
    margin-top: 20px;
    background-color: #808080;
    text-align: center;
    padding: 100px 106px;
  }

  .mypage-btn {
    position: absolute;
    display: flex;
    align-items: center;
    background-color: #5772FF;
    padding: 5px 7px 5px 15px;
    top: 30px;
    right: 30px;
    gap: 5px;
    border-radius: 100px;
  }

  .mypage-btn .text {
    display: inline;
    color: white;

  }

  .mypage-btn img {
    height: 30px;
    width: 30px;
    position: relative;
    margin: -3px 0 3px 0;
  }
</style>

<div class="container">
  <div class="mypage-btn">
    <span on:click={onclickhandler2}><div class="text">마이페이지</div></span>
    <img src="/user-icon.svg" alt="a" class="icon"/>
  </div>
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
  <div class="calendar">
    캘린더 자리
  </div>
</div>