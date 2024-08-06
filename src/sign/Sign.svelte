<script>
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

  .logo {
    width: 140px;
    height: auto;
    position: absolute;
    top: 350px;
  }

  .signup-button {
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
  }

  .signup-button:hover {
    background-color: #4a63d6;
  }

  .footer {
    position: absolute;
    bottom: 60px;
    font-size: 14px;
    color: #808080;
  }
</style>

<div class="container">
  <img src="../src/images/Mainlogo.png" alt="Logo" class="logo">
  <button class="signup-button">
    회원가입
  </button>
  <div class="footer">©Barder</div>
</div>
