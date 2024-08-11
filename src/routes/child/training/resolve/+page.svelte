<script>
    import BarButton from "/src/components/bar-button.svelte";
    function handleLoginClick() {
        window.location.href = '/child/home';
    }
</script>

<style>
  .header {
    text-align: left;
    margin: 40px;
    width: 100%;
    display: inline;
  }
  .header h2 {
    font-size: 30px;
    font-weight: 700;
    margin: 10px 0;
  }

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

  .arrow {
    height: 60px;
    rotate: 180deg;
    top: 77px;
    left: 22px;
    position: absolute;
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
  
</style>

<div class="container">
    <img on:click={handleLoginClick} class="arrow" src="/right_arrow.svg" alt="">
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