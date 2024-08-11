<script>
    import { goto } from '$app/navigation';
    function handleSignupClick() {
        goto('choose'); 
    }
</script>

<style>
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
    display: flex;
    align-items: center;
    justify-content: center;
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
    <img src="/Mainlogo.png" alt="Logo" class="logo">
    <button class="signup-button" on:click={handleSignupClick}>
        회원가입
    </button>
    <div class="footer">©Barder</div> 
</div>


