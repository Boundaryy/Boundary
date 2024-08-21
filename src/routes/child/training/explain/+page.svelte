<script>
    import Button from "/src/components/button.svelte";
    let name = '김바운';

    function handleLoginClick() {
        window.location.href = '/child/training/resolve';
    }
</script>

<style>
    .emoji {
        width: 300px;
        height: 150px;
        margin: 160px 0;
    }

    .description {
        color: #565656;
        font-size: 18px;
        text-align: center;
        font-weight: 100;
        margin-bottom: 8px;
        margin-top: 20px; 
    }
</style>

<div class="main-container">
    <div class="container">
        <div class="header">상황 대처 학습</div>
        <img src="/conv-image.svg" alt="Happy Emoji" class="emoji" />
        <div class="description">시작하면 상황이 제시됩니다. <br>상황에 맞춰 내가 친구에게 해야할<br>적절한 말을 해봅시다</div>
        <Button desc="시작하기" href="/child/training/resolve"/>
    </div>
</div>