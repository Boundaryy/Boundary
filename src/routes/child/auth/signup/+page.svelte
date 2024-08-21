<script>
    import Button from "/src/components/button.svelte";
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
   
    .form-group {
        width: 100%;
        margin: 10px 0;
    }

    .form-group div {
        display: block;
        font-size: 18px;
    }

    .form-group input {
        width: 100%;
        padding: 10px;
        border: none;
        border-bottom: 2px solid #5772FF;
        background: transparent;
        font-size: 20px;
        outline: none;
        color: #5772FF;
        height: 22px;
        max-width: 248px; 
    }

    .gender-container {
        display: flex;
        justify-content: center;
        row-gap: 30px; /* 간격을 좀 더 늘립니다 */
        width: 100%;
    }

    .gender-option {
        margin-top: 5px;
        border: 1px solid #808080;
        border-radius: 20px;
        font-size: 16px;
        cursor: pointer;
        outline: none;
        text-align: center;
        min-width: 80px; /* 최소 너비를 설정합니다 */
        height: 40px; /* 높이를 약간 늘립니다 */
    }

    .gender-option.selected {
        background-color: #5772FF;
        color: white;
        border: 1px solid #5772FF;
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
        <input type="password" placeholder="ex) qwer!1234" bind:value={password} />
    </div>
    <Button desc="가입하기" href="/child/home" />
</div>
