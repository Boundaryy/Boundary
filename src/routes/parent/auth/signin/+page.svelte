<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    let username = '';
    let password = '';

    function handleSubmit() {
        const formData = {
            username,
            password
        };
        console.log('입력된 데이터:', formData);

        goto('/home');
    }

    onMount(() => {
    });
</script>

<style>
    .header {
        text-align: left;
        width: 100%;
        margin-bottom: 20px;
        padding-top: 60px;
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

    p {
        color: #565656;
        font-size: 16px;
        margin: 5px 0;
        font-weight: 200;
    }

    .form-group {
        width: 100%;
        margin-bottom: 20px;
    }

    .form-group div {
        display: block;
        font-size: 18px;
        margin-bottom: 5px;
        font-weight: 100;
    }

    .form-group input {
        width: 100%;
        padding: 10px;
        border: none;
        border-bottom: 2px solid #5772FF;
        background: transparent;
        font-size: 18px;
        outline: none;
        color: #5772FF;
        max-width: 248px; 
    }

    .submit-button {
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
        margin-top: 150px; 
        line-height: 50px; 
    }

    .submit-button:hover {
        background-color: #4a63d6;
    }

    .signup-link {
        color: #565656;
        font-size: 16px;
        margin: 5px 0;
        font-weight: 200;
        text-decoration: none;
        cursor: pointer;
    }

    .signup-link:hover {
        text-decoration: underline;
    }
</style>

<div class="container">
    <div class="header">
        <h1>Boundary</h1>
        <h2>로그인</h2>
    </div>

    <div class="form-group">
        <div>아이디를 입력하세요.</div>
        <input type="text" placeholder="ex) boundary_baby" bind:value={username} />
    </div>

    <div class="form-group">
        <div>비밀번호를 입력하세요.</div>
        <input type="password" placeholder="비밀번호" bind:value={password} />
    </div>

    <button class="submit-button" on:click={handleSubmit}>로그인</button>
    <a class="signup-link" href="/auth/signup">아직 회원가입을 하지 않았다면?</a>
</div>
