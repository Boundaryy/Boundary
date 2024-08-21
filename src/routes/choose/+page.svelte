<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import Button from "/src/components/button.svelte";
  
    let selectedOption = null; 
  
    function handleIconClick(option) {
        selectedOption = option;
    }
  
    function handleSubmit() {
        if (!selectedOption) {
            alert('이미지를 선택해 주세요.'); 
        } else {
            if (selectedOption === '아이') {
                goto('/child/auth/signup');
            } else if (selectedOption === '부모') {
                goto('/parent/auth/signup');
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
   
    .icon-container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        padding-top: 50%;
    }
  
    .icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: none;
        padding: 5px;
        border-radius: 12px;
        background-color: #e6e6e6;
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
        color: #000000;
        font-size: 18px;
        font-weight: 500;
        margin: 0;
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
    <!-- 이거 나중에 동적으로 바껴야함-->
    <Button desc="계속하기" href="/child/auth/signup" />
    <div class="footer">©Boundary</div>
  </div>
  