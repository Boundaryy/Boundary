<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    let selectedGender = '남자';
    let phoneNumber = '';
    let age = '';
    let name = '';
    let username = '';
    let password = '';

    function handleGenderClick(gender) {
        selectedGender = gender;
    }

    function handleKeyDown(event, gender) {
        if (event.key === 'Enter' || event.key === ' ') {
            handleGenderClick(gender);
        }
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

    function handleSubmit() {
        const formData = {
            phoneNumber,
            age,
            name,
            selectedGender,
            username,
            password
        };
        console.log('입력된 데이터:', formData);

        goto('/child/home');
    }

    onMount(() => {
        selectedGender = '남자';
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

    .header p {
        color: #808080;
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
    }

    .gender-container {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-bottom: 40px; 
        width: 100%;
    }

    .gender-option {
        display: flex; 
        align-items: center; 
        justify-content: center; 
        padding: 5px 10px; 
        border: 1px solid #808080;
        border-radius: 20px;
        font-size: 16px;
        cursor: pointer;
        outline: none;
        text-align: center;
        width: 60px; 
        height: 36px; 
    }

    .gender-option.selected {
        background-color: #5772FF;
        color: white;
        border: 1px solid #5772FF;
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
        margin-top: 40px; 
        line-height: 50px; 
    }

    .submit-button:hover {
        background-color: #4a63d6;
    }
</style>

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
        <div>나이를 알려주세요.</div>
        <input type="text" placeholder="18세" bind:value={age} />
    </div>

    <div class="form-group">
        <div>이름을 알려주세요.</div>
        <input type="text" placeholder="ex) 김바운" bind:value={name} />
    </div>

    <div class="form-group">
        <div>성별을 선택해주세요.</div>
        <div class="gender-container">
            <button
                class="gender-option {selectedGender === '남자' ? 'selected' : ''}"
                on:click={() => handleGenderClick('남자')}
                on:keydown={(e) => handleKeyDown(e, '남자')}
            >
                남자
            </button>
            <button
                class="gender-option {selectedGender === '여자' ? 'selected' : ''}"
                on:click={() => handleGenderClick('여자')}
                on:keydown={(e) => handleKeyDown(e, '여자')}
            >
                여자
            </button>
        </div>
    </div>

    <div class="form-group">
        <div>사용할 아이디를 입력하세요.</div>
        <input type="text" placeholder="ex) boundary_baby" bind:value={username} />
    </div>

    <div class="form-group">
        <div>사용할 비밀번호를 입력하세요.</div>
        <input type="password" bind:value={password} />
    </div>

    <button class="submit-button" on:click={handleSubmit}>가입하기</button>
</div>
