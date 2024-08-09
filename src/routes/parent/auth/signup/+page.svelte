<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    let phoneNumber = '';
    let username = '';
    let password = '';
    let childUsername = '';

    function handleSubmit() {
        const formData = {
            phoneNumber,
            username,
            password,
            childUsername
        };
        console.log('Submitted data:', formData);

        goto('/welcome');
    }

    function formatPhoneNumber(event) {
        let input = event.target.value.replace(/\D/g, '');
        if (input.length > 3 && input.length <= 7) {
            input = input.replace(/(\d{3})(\d{1,4})/, '$1-$2');
        } else if (input.length > 7) {
            input = input.replace(/(\d{3})(\d{4})(\d{1,4})/, '$1-$2-$3');
        }
        phoneNumber = input;
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
    }

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

    .header p {
        color: #565656;
        font-size: 14px;
        margin: 5px 0;
    }

    .form-group {
        width: 100%;
        margin-bottom: 20px;
    }

    .form-group div {
        display: block;
        font-size: 18px;
        margin-bottom: 5px;
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
        margin-bottom: 20px;
    }

    .submit-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
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
        margin-top: 40px;
        line-height: 50px;
    }

    .submit-button:hover {
        background-color: #4a63d6;
    }
</style>

<div class="outer-container">
    <div class="container">
        <div class="header">
            <h1>Boundary</h1>
            <h2>회원가입</h2>
            <p>서비스에서 사용될 정보를 알려주세요.</p>
        </div>

        <div class="form-group">
            <div>전화 번호를 알려주세요.</div>
            <input type="text" placeholder="010-1234-5678" bind:value={phoneNumber} on:input={formatPhoneNumber} />
        </div>

        <div class="form-group">
            <div>사용할 아이디를 입력하세요.</div>
            <input type="text" placeholder="ex) boundary" bind:value={username} />
        </div>

        <div class="form-group">
            <div>사용할 비밀번호를 입력하세요.</div>
            <input type="password" bind:value={password} />
        </div>

        <div class="form-group">
            <div>아이의 아이디를 입력하세요.</div>
            <input type="text" placeholder="boundary_baby" bind:value={childUsername} />
        </div>

        <button class="submit-button" on:click={handleSubmit}>가입하기</button>
    </div>
</div>
