<script>
    let name = '김바운';
</script>

<style>
    .container {
        width: 375px;
        height: 812px; 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; 
        background-color: #F3F4F6;
        font-family: 'Pretendard', sans-serif;
        margin: 0 auto;
        overflow: hidden;
        border-radius: 32px;
        padding: 20px;
    }

    .welcome {
        color: #5772FF;
        font-size: 18px;
        font-weight: 700;
        margin: 0;
        text-align: left;
        width: 100%;
        padding-top: 40px;
        padding-left: 20px;
    }

    .message {
        color: #000;
        font-size: 28px;
        font-weight: 700;
        margin: 8px 0 0 0; 
        text-align: left;
        width: 100%;
        padding-left: 20px;
    }

    .emoji {
        width: 150px;
        height: 150px;
        margin: 20px 0;
    }

    .description {
        color: #565656;
        font-size: 18px;
        text-align: center;
        font-weight: 100;
        margin-bottom: 8px;
        margin-top: 20px; 
    }

    .login-button {
        display: flex; 
        align-items: center; 
        justify-content: center; 
        width: 310px; 
        height: 50px; 
        background-color: #5772FF;
        border: none;
        border-radius: 8px;
        color: #FFFFFF;
        font-size: 20px; 
        font-family: 'Pretendard', sans-serif;
        font-weight: 600;
        text-decoration-line: none;
        text-align: center;
        cursor: pointer;
        margin-top: 30px; 
        line-height: 50px; 
    }

    .login-button:hover {
        background-color: #4a63d6;
    }
</style>

<div class="main-container">
    <div class="container">
        <div class="welcome">Boundary</div>
        <div class="message">환영합니다, {name}</div>
        <img src="/happy.png" alt="Happy Emoji" class="emoji" />
        <div class="description">이제, 바운더리에서 <br>학습을 진행할 수 있어요!</div>
        <button class="login-button">로그인하기</button>
    </div>
</div>