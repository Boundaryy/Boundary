  <main class="container">
    <h1>마이페이지</h1>
    <div class="profile">
      <img src="/happy.png" alt="Profile" class="profile-image"/>
      <div class="profile-info">
        <h2>신희성</h2>
        <p>tlsgmltjd00@gmail.com</p>
      </div>
    </div>
    <div class="line"></div>
    <div class="calendar">
        캘린더 자리
      </div>
  </main>
  
  <style>
    .container {
        box-sizing: border-box;
        padding: 40px;
        width: 375px;
        height: 812px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        background-color: #F3F4F6;
        font-family: 'Pretendard', sans-serif;
        margin: 0 auto;
        
        overflow: hidden;
        border-radius: 32px;
    }
  
    h1 {
      font-size: 24px;
      margin-bottom: 20px;
    }
  
    .profile {
      display: flex;
      align-items: center;
      padding: 10px;
    }
  
    .profile-image {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-right: 20px;
    }
  
    .profile-info h2 {
      font-size: 24px;
      margin: 0 0 5px 0;
    }
  
    .profile-info p {
      font-size: 14px;
      color: #666;
      margin: 0;
    }

    .line {
        height: 2px;
        width: 100%;
        margin-top: 20px;
        background-color: rgb(201, 201, 201);
    }

    .calendar {
    margin-top: 20px;
    background-color: #808080;
    text-align: center;
    padding: 100px 106px;
  }
  </style>