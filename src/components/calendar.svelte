<style>
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
        width: 32px;
        height: 32px;
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
</style>

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
        <div class="calendar-day">24</div>
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