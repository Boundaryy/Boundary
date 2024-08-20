<script>
    import BarButton from "/src/components/bar-button.svelte";
    function handleLoginClick() {
        window.location.href = '/child/home';
    }
</script>

<style>
  .speech-bubble {
    display: flex;
    justify-content: flex-start;
    gap: 10px;
  }

  .speech-bubble .icon {
    height: 40px;
  }

  .speech-bubble .text {
    background-color: #ffffff;
    padding: 15px 30px;
    border-radius: 0 50px 50px 50px;
    font-size: 18px;
  }
  .my-speech-bubble {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }

  .my-speech-bubble .icon {
    height: 40px;
  }

  .my-speech-bubble .text {
    background-color: #5772FF;
    color: white;
    padding: 15px 30px;
    border-radius: 50px 0 50px 50px;
    font-size: 18px;
  }

  .chat-area * {
    margin-bottom: 10px;
  }


  .send-box{
    position: absolute;
    top: 800px;
    width: 330px;
    height: 50px;
    border-radius: 100px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
  }

  .send-box .text {
    color: #6a6a6a;
    font-size: 20px;
    text-decoration: none;
    border: none;
    width: 100%;
  }

  .send-box .text:focus {
    outline: none;
  }

  .send-box .icon {
    height: 26px;
  }
  
  .arrow {
    rotate: 180deg;
    height: 42px;
  }
  .arrow-box {
    width: 110%;
    display: flex;
    align-items: center;
    height: 32px;
    font-size: 18px;
    color: #808080;
    top: 20px;
    left: 22px;
  }
  
</style>

<div class="container">
  <div class="arrow-box">
    <img on:click={handleLoginClick} class="arrow"  src="/right_arrow.svg" alt="">
    돌아가기
  </div>
  <div class="header">
    <h2>상황 대처 지능 테스트</h2>
  </div>
  <div class="chat-area">
     <div class="speech-bubble">
        <img src="/happy.png" alt="a" class="icon"/>
        <div class="text">으갸갸갸갸갸갹</div>
      </div>
      <div class="my-speech-bubble">
        <div class="text">오교교교굑교교교교교</div>
        <img src="/happy.png" alt="a" class="icon"/>
      </div>
    </div>
    <div class="send-box">
        <input type="text" placeholder="여기에 메세지를 입력하세요" class="text"/>
        <img class="icon" src="/send.svg" alt="a">
      </div>
</div>