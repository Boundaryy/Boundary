<script>
    import BarState from "/src/components/bar-state.svelte";
    import Button from "/src/components/button.svelte"
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
</style>

<div class="container">
  <div class="header">
    <img src="/sunglasses.svg" alt="a">
    <h2>트레이닝을 완료했어요.</h2>
    <p>학습 성공률은 3/3입니다</p>
  </div>
  <div class="bar-btn-container">
    <BarState/>
    <BarState/>
  </div>
  <Button>다음으로</Button>
</div>