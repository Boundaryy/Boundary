<script>
    let messages = [
        { text: "안녕하세요, 학부모님 속상하시죠?", from: "left" },
        { text: "괜찮아요. 오히려 이 서비스 덕에 행복해요", from: "right" },
        { text: "정말 다행이에요.", from: "left" },
        { text: "매우감사합니당", from: "right" }
    ];

    let newMessage = '';
    const sendMessage = () => {
        if (newMessage.trim() !== '') {
            messages.push({ text: newMessage, from: "right" });
            newMessage = '';
        }
    }
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

    .chat {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        gap: 10px;
        overflow-y: auto;
        margin-bottom: 20px; 
        border-radius: 30px;
}

    .message {
        max-width: 70%;
        padding: 12px 15px;
        border-radius: 20px;
        font-size: 16px;
        line-height: 1.4;
    }

    .message.left {
        background-color: #FFFFFF;
        color: #515151;
        align-self: flex-start;
        border-radius: 25px 25px 25px 0;
    }

    .message.right {
        background-color: #5772FF;
        color: #FFFFFF;
        align-self: flex-end;
        border-radius: 25px 25px 0 25px;
    }

    .input-area {
        width: 333px;
        height: 38px;
        display: flex;
        align-items: center;
        padding: 10px;
        background-color: #FFFFFF;
        border-radius: 30px;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        bottom: 10px;
}

    .input-area input {
        flex-grow: 1;
        border: none;
        outline: none;
        padding: 10px;
        border-radius: 30px;
        font-size: 16px;
        color: #565656;
    }

    .input-area button {
        background-color: #5772FF;
        border: none;
        color: #FFFFFF;
        border-radius: 30px;
        padding: 10px;
        margin-left: 10px;
        cursor: pointer;
    }

    .input-area button:hover {
        background-color: #4a63d6;
    }
</style>

<div class="container">
    <div class="header">
        조언 상담
    </div>

    <div class="chat">
        {#each messages as message}
            <div class="message {message.from}">
                {message.text}
            </div>
        {/each}
    </div>

    <div class="input-area">
        <input 
            type="text" 
            placeholder="여기에 메시지를 입력하세요." 
            bind:value={newMessage} 
            on:keydown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button on:click={sendMessage}>➤</button>
    </div>
</div>
