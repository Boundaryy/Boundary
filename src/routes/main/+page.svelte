<script>
    import BarButton from "/src/components/bar-button.svelte";
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
    margin-bottom: 40px;
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
  
  .next-button {
    width: 310px;
    height: 50px;
    background-color: #5772FF;
    border: none;
    border-radius: 8px;
    color: #FFFFFF;
    font-size: 18pt;
    font-family: 'Pretendard', sans-serif;
    font-weight: 600;
    cursor: pointer;
    position: absolute;
    bottom: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .next-button:hover {
    background-color: #4a63d6;
  }

  .footer {
    position: absolute;
    bottom: 20px;
    font-size: 14px;
    color: #808080;
  }

  .bar-btn-container {
  }
</style>

<div class="container">
  <div class="header">
    <h1>Boundary</h1>
    <h2>어렵지 않은 학습</h2>
    <p>상황 대처, 게임을 통한 학습으로 지능을 향상시켜요</p>
  </div>
  <div class="bar-btn-container">
    <BarButton/>
    <BarButton/>
  </div>
</div>