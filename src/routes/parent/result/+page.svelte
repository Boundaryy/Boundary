<script>
    import { onMount } from 'svelte';

    function handleSubmit() {
        console.log('완료 버튼이 클릭되었습니다.');
    }

    onMount(() => {
    });
</script>

<style>
    .container {
        width: 375px;
        height: 812px; 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start; 
        background-color: #F3F4F6;
        font-family: 'Pretendard', sans-serif;
        margin: 0 auto;
        overflow: hidden;
        border-radius: 32px;
        padding: 20px;
        position: relative;
    }

    .header {
        text-align: left;
        width: 100%;
        margin-bottom: 20px;
        padding-top: 60px;
        display: flex;
        align-items: center;
        font-size: 28px;
        font-weight: 700;
    }

    .header h1 {
        color: #000;
        font-size: 28px;
        font-weight: 700;
        margin: 0;
        margin-right: 8px; 
    }

    .header p {
        color: #898989;
        font-size: 14px;
        margin: 0;
        font-weight: 200;
    }
    
    .message-box {
        width: 294px;
        height: 177px;
        background-color: #FFFFFF;
        border-radius: 10px;
        padding: 16px;
        margin-top: 20px;
        margin-bottom: 30px; 
        color: #565656;
        font-size: 16px;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        position: relative; 
    }

    .message-box span {
        color: #5772FF;
    }

    .image-container {
        width: 60px; 
        height: 60px; 
        position: relative; 
        top: -50px; 
        z-index: 10; 
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .image-container img {
        width: 100%; 
        height: 100%;
        border-radius: 10px;
    }

    .suggestions {
        width: 294px;
        height: 177px;
        background-color: #ECF7FF;
        border-radius: 10px;
        padding: 16px;
        margin-top: -70px; 
        color: #565656;
        font-size: 16px;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .suggestions ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
        color: #565656;
    }

    .suggestions ul li {
        margin-bottom: 8px;
        font-size: 16px;
    }

    .footer {
        width: 100%;
        text-align: center;
        position: absolute;
        bottom: 100px; 
    }

    .footer p {
        color: #909090;
        font-size: 16px;
        margin-bottom: 16px;
    }

    .submit-button {
        width: 310px;
        height: 50px;
        background-color: #5772FF;
        border: none;
        border-radius: 8px;
        color: #FFFFFF;
        font-size: 18px; 
        font-family: 'Pretendard', sans-serif;
        font-weight: 600;
        text-align: center;
        cursor: pointer;
    }

    .submit-button:hover {
        background-color: #4a63d6;
    }
</style>

<div class="container">
    <div class="header">
        <h1>결과</h1>
        <p>7월 17일 결과에요</p>
    </div>

    <div class="message-box">
        <ul>
            <li>희성아, 빨리 나아서 학교에서 보자.</li>
            <li>희성아, 많이 <span>아프질 않길</span> 바래 폭쉬어</li>
            <li>희성아, 필요할게 있으면 언제든 말해</li>
        </ul>
    </div>

    <div class="image-container">
        <img src="/Result.png" alt="Result" class="resultlogo">
    </div>

    <div class="suggestions">
        <ul>
            <li>희성아, 빨리 나아서 학교에서 보자.</li>
            <li>희성아, 많이 <span>아프질 않길</span> 바래 폭쉬어</li>
            <li>희성아, 필요할게 있으면 언제든 말해</li>
        </ul>
    </div>

    <div class="footer">
        <p>테스트에서<br> 희성이를 걱정 하는 말을 해주셔야해요.</p>
        <button class="submit-button" on:click={handleSubmit}>완료</button>
    </div>
</div>
