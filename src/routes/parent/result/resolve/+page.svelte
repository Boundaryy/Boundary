<script>
    import "/global.css"
    let results = [
        {
            date: "6월 29일",
            title: "상황 대처 학습",
            status: "correct",
            summary: "잘했어요 (10 문제중 9개 정답)",
            link: "#"
        },
        {
            date: "6월 28일",
            title: "상황 대처 학습",
            status: "incorrect",
            summary: "잘했어요 (10 문제중 9개 정답)",
            link: "#"
        }
    ];
</script>

<style>
    .header {
        text-align: left;
        width: 100%;
        margin-bottom: 20px;
        padding-top: 60px;
        font-size: 28px;
        font-weight: 700;
    }

    .header h1 {
        color: #000;
        font-size: 28px;
        font-weight: 700;
        margin: 0;
    }

    .header p {
        color: #898989;
        font-size: 14px;
        margin: 8px 0;
        font-weight: 200;
    }

    .result-item {
        width: 314px;
        display: flex;
        align-items: center;
        padding: 16px 0;
        border-bottom: 1px solid #E0E0E0;
    }

    .result-item:last-child {
        border-bottom: none;
    }

    .result-icon {
        width: 24px;
        height: 24px;
        margin-right: 12px;
    }

    .result-content {
        flex-grow: 1;
    }

    .result-title {
        font-size: 18px;
        font-weight: 700;
        color: #333;
    }

    .result-date {
        font-size: 14px;
        color: #5772FF;
        margin-top: 4px;
    }

    .result-summary {
        font-size: 14px;
        color: #4CAF50;
        margin-top: 4px;
    }

    .result-link {
        font-size: 16px;
        color: #CCC;
    }

    .result-icon.correct {
        background: url('/check-circle.svg') no-repeat center center;
        background-size: cover;
    }

    .result-icon.incorrect {
        background: url('/x-circle.svg') no-repeat center center;
        background-size: cover;
    }

    .result-image {
        width: 40px;
        height: 40px;
        margin-right: 10px;
    }
</style>

<div class="container">
    <div class="header">
        <h1>학습 결과</h1>
        <p>최근 학습 결과를 확인해보세요.</p>
    </div>

    {#each results as result}
    <div class="result-item">
        <img src="/Good.svg" class="result-image" alt="Result Image">
        <div class="result-icon {result.status}"></div>
        <div class="result-content">
            <div class="result-title">{result.title}</div>
            <div class="result-date">{result.date} 상황 대처 학습 결과</div>
            <div class="result-summary">{result.summary}</div>
        </div>
        <div class="result-link">></div>
    </div>
    {/each}
</div>
