<script>
    let name = '김바운';

    function handleLoginClick() {
        window.location.href = '/child/training/resolve';
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
        background-color: #F3F4F6;
        font-family: 'Pretendard', sans-serif;
        margin: 0 auto;
        overflow: hidden;
        border-radius: 32px;
        padding: 20px;
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
        width: 300px;
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
        <div class="message">상황 대처 학습</div>
        <img src="/conv-image.svg" alt="Happy Emoji" class="emoji" />
        <div class="description">시작하면 상황이 제시됩니다. <br>상황에 맞춰 내가 친구에게 해야할<br>적절한 말을 해봅시다</div>
        <button class="login-button" on:click={handleLoginClick}>시작하기</button>
    </div>
</div>