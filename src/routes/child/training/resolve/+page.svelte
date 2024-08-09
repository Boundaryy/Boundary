<script>
    import BarButton from "/src/components/bar-button.svelte";
    import "global.css"
</script>

<style>
  .container {
    width: 375px;
    height: 812px;
    display: flex;
    flex-direction: column;
    background-color: #F3F4F6;
    font-family: 'Pretendard', sans-serif;
    border-radius: 32px;
    padding: 30px;
  }
    
  .header {
    text-align: left;
    margin: 40px;
    width: 100%;
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
    height: 20px;
    background-color: aqua;
    width: 20px;
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
    height: 20px;
    background-color: aqua;
    width: 20px;
  }

  .my-speech-bubble .text {
    background-color: #ffffff;
    padding: 15px 30px;
    border-radius: 50px 0 50px 50px;
    font-size: 18px;
  }

  .chat-area * {
    margin-bottom: 10px;
  }
  
</style>

<div class="container">
  <div class="header">
    <h2>상황 대처 지능 테스트</h2>
  </div>
  <div class="chat-area">
     <div class="speech-bubble">
        <div class="icon"></div>
        <div class="text">으갸갸갸갸갸갹</div>
      </div>
      <div class="my-speech-bubble">
        <div class="text">오교교교굑교교교교교</div>
        <div class="icon"></div>
      </div>
  </div>
</div>