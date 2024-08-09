<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
  
    let selectedOption = null; 
  
    function handleIconClick(option) {
        selectedOption = option;
    }
  
    function handleSubmit() {
        if (!selectedOption) {
            alert('이미지를 선택해 주세요.'); 
        } else {
            if (selectedOption === '아이') {
                goto('/auth/signup/info');
            } else if (selectedOption === '부모') {
                goto('/auth/signup/parent');
            }
        }
    }
  
    function handleKeyDown(event, option) {
        if (event.key === 'Enter' || event.key === ' ') {
            handleIconClick(option);
        }
    }
  
    onMount(() => {
        selectedOption = null;
    });
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
        font-size: 18px;
        font-weight: 700;
        margin: 0;
    }
  
    .header h2 {
        font-size: 28px;
        font-weight: 700;
        margin: 10px 0;
    }
  
    .header p {
        color: #898989;
        font-size: 14px;
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
        cursor: pointer;
        transition: transform 0.3s, border 0.3s;
    }
  
    .icon img.selected {
        border: 3px solid #5772FF;
        transform: scale(1.1);
    }
  
    .icon p {
        color: #808080;
        font-size: 18px;
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
        text-decoration: none;
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
        <button class="icon" tabindex="0" on:click={() => handleIconClick('아이')} on:keydown={(e) => handleKeyDown(e, '아이')}>
            <img src="/childIcon.png" alt="아이 아이콘" class:selected={selectedOption === '아이'} />
            <p>아이로 회원가입</p>
        </button>
        <button class="icon" tabindex="0" on:click={() => handleIconClick('부모')} on:keydown={(e) => handleKeyDown(e, '부모')}>
            <img src="/parentIcon.png" alt="부모 아이콘" class:selected={selectedOption === '부모'} />
            <p>부모로 회원가입</p>
        </button>
    </div>
    <button class="next-button" on:click={handleSubmit}>다음으로</button>
    <div class="footer">©Boundary</div>
  </div>
  