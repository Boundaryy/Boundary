<script>
    import { link } from "svelte-routing";
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
    font-size: 32px;
    font-weight: 700;
    margin: 10px 0;
  }
  
  .header p {
    color: #808080;
    font-size: 16px;
    margin: 5px 0;
  }
  
  .icon-container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 40px;
  }
  
  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .icon img {
    width: 100px;
    height: auto;
    margin-bottom: 10px;
  }
  
  .icon p {
    color: #808080;
    font-size: 16px;
    font-weight: 500;
    margin: 0;
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
</style>

<div class="container">
  <div class="header">
    <h1>Boundary</h1>
    <h2>회원가입</h2>
    <p>아이와 부모님을 선택해 주세요.</p>
  </div>
  <div class="icon-container">
    <div class="icon">
      <img src="" alt="아이콘" />
      <p>아이로 회원가입</p>
    </div>
    <div class="icon">
      <img src="" alt="부모 아이콘" />
      <p>부모로 회원가입</p>
    </div>
  </div>
  <a href="/signup" use:link class="next-button">다음으로</a>
  <div class="footer">©Barder</div>
</div>
