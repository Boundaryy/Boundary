<script>
    export let username = '@Boundary'; 
</script>

<style>
    .container {
        width: 375px;
        height: 890px; 
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

    .user-info {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        width: 100%;
        margin-left: 90px; 
    }

    .user-avatar {
        width: 86px;
        height: 80px;
        background-color: #5772FF;
        border-radius: 50%;
        margin-right: 15px;
    }

    .user-details {
        display: flex;
        flex-direction: column;
        align-items: left; 
        font-weight: 600;
    }

    .user-details div:first-child {
        font-size: 20px;
        color: #000000;
        font-weight: 700;
    }

    .user-details div:last-child {
        font-size: 14px;
        color: #4A4A4A;
    }

    .progress-bar-container {
        width: 274px;
        height: 32px;
        background-color: #FFFFFF;
        border-radius: 8px;
        margin-bottom: 20px;
        position: relative;
    }

    .progress-bar-fill {
        width: 70%;
        height: 100%;
        background: linear-gradient(to right, #5772FF, #6F86FF, #91A3FF);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center; 
        color: white;
        font-weight: Regular;
    }

    .calendar {
        width: 274px; 
        border: none;
        border-radius: 8px;
        padding: 15px;
        text-align: center;
        background-color: #F3F4F6;
    }

    .calendar-header {
        font-size: 16px;
        font-weight: 100;
        color: #565656;
        margin-bottom: 10px;
        text-align: left;
    }

    .calendar-days {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-gap: 10px;
        font-size: 14px;
        color: #000000;
    }

    .calendar-day {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }

    .calendar-day.active {
        background-color: #5772FF;
        color: #FFFFFF;
    }

    .calendar-day.inactive {
        color: #898989;
    }

    .calendar-legend {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 20px;
        font-size: 15px;
        color: #888888;
    }

    .calendar-legend div {
        display: flex;
        align-items: center;
        margin: 0 20px;
    }

    .calendar-legend span {
        width: 10px;
        height: 2px;
        background-color: #5772FF;
        margin-right: 5px;
    }

    .menu {
        width: 274px; 
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        font-size: 14px;
    }

    .menu-item {
        display: flex;
        align-items: center;
        justify-content: space-between; 
        padding: 15px 0;
        color: #000000;
        text-decoration: none;
        border-bottom: 1px solid #E5E7EB;
    }

    .menu-item-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .menu-item-text {
        font-size: 20px;
        font-weight: 500;
    }

    .menu-item-subtext {
        font-size: 14px;
        color: #898989;
        margin-top: 5px;
    }

    .menu-item-arrow {
        font-size: 20px;
        font-weight: 500;
        margin-left: auto; 
        color: #BCBCBC;
    }
</style>

<div class="container">
    <div class="header">
        <h1>아이의 학습을 확인하세요.</h1>
        <p>아이의 학습 결과를 확인하며 도와주세요.</p>
    </div>

    <div class="user-info">
        <div class="user-avatar"></div>
        <div class="user-details">
            <div>김바운</div>
            <div>{username}</div>
        </div>
    </div>

    <div class="progress-bar-container">
        <div class="progress-bar-fill">62%</div>
    </div>

    <div class="calendar">
        <div class="calendar-header">2024.07</div>
        <div class="calendar-days">
            <div class="calendar-day inactive">SUN</div>
            <div class="calendar-day inactive">MON</div>
            <div class="calendar-day inactive">TUE</div>
            <div class="calendar-day inactive">WED</div>
            <div class="calendar-day inactive">THU</div>
            <div class="calendar-day inactive">FRI</div>
            <div class="calendar-day inactive">SAT</div>
            <div class="calendar-day active">1</div>
            <div class="calendar-day active">2</div>
            <div class="calendar-day active">3</div>
            <div class="calendar-day">4</div>
            <div class="calendar-day active">5</div>
            <div class="calendar-day">6</div>
            <div class="calendar-day">7</div>
            <div class="calendar-day active">8</div>
            <div class="calendar-day active">9</div>
            <div class="calendar-day">10</div>
            <div class="calendar-day active">11</div>
            <div class="calendar-day active">12</div>
            <div class="calendar-day active">13</div>
            <div class="calendar-day">14</div>
            <div class="calendar-day">15</div>
            <div class="calendar-day active">16</div>
            <div class="calendar-day active">17</div>
            <div class="calendar-day active">18</div>
            <div class="calendar-day active">19</div>
            <div class="calendar-day active">20</div>
            <div class="calendar-day">21</div>
            <div class="calendar-day active">22</div>
            <div class="calendar-day active">23</div>
            <div class="calendar-day">24</div>/음하ㅏㅏㅏ//
            <div class="calendar-day">25</div>
            <div class="calendar-day active">26</div>
            <div class="calendar-day active">27</div>
            <div class="calendar-day active">28</div>
            <div class="calendar-day">29</div>
            <div class="calendar-day active">30</div>
            <div class="calendar-day active">31</div>
        </div>

        <div class="calendar-legend">
            <div><span></span> 학습한 날</div>
            <div><span style="background-color: #000;"></span> 학습하지 않은 날</div>
        </div>
    </div>

    <div class="menu">
        <a href="/parent/result" class="menu-item">
            <div class="menu-item-content">
                <span class="menu-item-text">결과</span>
                <div class="menu-item-subtext">최근 시험 결과 보기</div>
            </div>
            <span class="menu-item-arrow"></span>
        </a>
        <a href="/parent/result/resolve" class="menu-item">
            <div class="menu-item-content">
                <span class="menu-item-text">조언 상담</span>
                <div class="menu-item-subtext">상담사와 채팅하기</div>
            </div>
            <span class="menu-item-arrow"></span>
        </a>
    </div>
</div>
