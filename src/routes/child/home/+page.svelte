<script>
    import BarButton from "/src/components/bar-button.svelte";
  function onclickhandler() {
    window.location.href = "/child/training/explain"
  }
  function onclickhandler2() {
    window.location.href = "/child/mypage"
  }
</script>

<style>
  .header {
    text-align: left;
    margin: 40px 0 0px 0;
    width: 100%;
    padding-left: 85px;   

}
  
  .header h1 {
    color: #5772FF;
    font-size: 24px;
    font-weight: 700;
    margin: 0;
  }
  
  .header h2 {
    font-size: 30px;
    font-weight: 700;
    margin: 10px 0;
  }
  
  .header p {
    color: #808080;
    font-size: 14px;
    margin: 5px 0;
  }
  
  .calendar {
    margin-top: 20px;
    background-color: #808080;
    text-align: center;
    padding: 100px 106px;
  }

  .mypage-btn {
    position: absolute;
    display: flex;
    align-items: center;
    background-color: #5772FF;
    padding: 5px 7px 5px 15px;
    top: 30px;
    right: 30px;
    gap: 5px;
    border-radius: 100px;
  }

  .mypage-btn .text {
    display: inline;
    color: white;

  }

  .mypage-btn img {
    height: 30px;
    width: 30px;
    position: relative;
    margin: -3px 0 3px 0;
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
</style>

<div class="container">
  <div class="mypage-btn">
    <span on:click={onclickhandler2}><div class="text">마이페이지</div></span>
    <img src="/user-icon.svg" alt="a" class="icon"/>
  </div>
  <div class="header">
    <h2>어렵지 않은 학습</h2>
    <p>상황 대처, 게임을 통한 학습으로 지능을 향상시켜요</p>
  </div>
  <div class="bar-btn-container">
    <span on:click={onclickhandler}><BarButton title="상황 대처 학습" explain="게임을 통한 학습능력 상승"/></span>
    <BarButton title="코그니션 트레이닝" explain="게임으로 트레이닝을 진행해요!"/>
  </div>
  <div class="header">
    <h2>꾸준히 함께해봐요</h2>
    <p>상황 대처, 게임을 통한 학습으로 지능을 향상시켜요</p>
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
</div>