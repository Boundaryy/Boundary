<script>
    export let desc;
    export let href;
</script>
<style>
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
    text-decoration: none;
}

.signup-button:hover {
    background-color: #4a63d6;
}

</style>

<a href="{href}" class="signup-button">
    {desc}
</a>