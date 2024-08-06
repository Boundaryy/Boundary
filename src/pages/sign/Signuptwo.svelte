<script>
    import { onMount } from 'svelte';
  
    let selectedGender = '남자'; // 기본 선택된 성별
  
    function handleGenderClick(gender) {
      selectedGender = gender;
    }
  
    function handleKeyDown(event, gender) {
      if (event.key === 'Enter' || event.key === ' ') {
        handleGenderClick(gender);
      }
    }
  
    onMount(() => {
      // 페이지가 로드되었을 때 선택된 상태를 초기화합니다.
      selectedGender = '남자';
    });
  </script>
  
  <style>
    .container {
      width: 375px;
      height: 812px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      background-color: #FFFFFF;
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
    }
  
    .header h1 {
      color: #5772FF;
      font-size: 24px;
      font-weight: 700;
      margin: 0;
    }
  
    .header h2 {
      font-size: 32px;
      font-weight: 700;
      margin: 10px 0;
    }
  
    .header p {
      color: #808080;
      font-size: 16px;
      margin: 5px 0;
    }
  
    .form-group {
      width: 100%;
      margin-bottom: 20px;
    }
  
    .form-group label {
      display: block;
      font-size: 16px;
      margin-bottom: 5px;
    }
  
    .form-group input {
      width: 100%;
      padding: 10px;
      border: 1px solid #5772FF;
      border-radius: 4px;
      font-size: 16px;
      outline: none;
    }
  
    .gender-container {
      display: flex;
      justify-content: space-around;
      margin-bottom: 20px;
    }
  
    .gender-option {
      padding: 10px 20px;
      border: 1px solid #808080;
      border-radius: 20px;
      font-size: 16px;
      cursor: pointer;
      outline: none;
    }
  
    .gender-option.selected {
      background-color: #5772FF;
      color: white;
      border: 1px solid #5772FF;
    }
  
    .submit-button {
      width: 100%;
      padding: 15px;
      background-color: #5772FF;
      border: none;
      border-radius: 8px;
      color: white;
      font-size: 18pt;
      font-weight: 600;
      cursor: pointer;
      text-align: center;
    }
  
    .submit-button:hover {
      background-color: #4a63d6;
    }
  </style>
  
  <div class="container">
    <div class="header">
      <h1>Boundary</h1>
      <h2>회원가입</h2>
      <p>서비스에서 사용될 정보를 알려주세요.</p>
    </div>
  
    <div class="form-group">
      <label>전화 번호를 알려주세요.</label>
      <input type="text" placeholder="010-1234-5678" />
    </div>
  
    <div class="form-group">
      <label>나이를 알려주세요.</label>
      <input type="text" placeholder="18세" />
    </div>
  
    <div class="form-group">
      <label>이름을 알려주세요.</label>
      <input type="text" placeholder="ex) 김바운" />
    </div>
  
    <div class="gender-container">
      <div>
        class="gender-option {selectedGender === '남자' ? 'selected' : ''}"
        tabindex="0"
        on:click={() => handleGenderClick('남자')}
        on:keydown={(e) => handleKeyDown(e, '남자')}
      
        남자
      </div>
      <div>
        class="gender-option {selectedGender === '여자' ? 'selected' : ''}"
        tabindex="0"
        on:click={() => handleGenderClick('여자')}
        on:keydown={(e) => handleKeyDown(e, '여자')}
    </div>
        여자
      </div>
    </div>
  
    <div class="form-group">
      <label>사용할 아이디를 입력하세요.</label>
      <input type="text" placeholder="ex) boundary_baby" />
    </div>
  
    <div class="form-group">
      <label>사용할 비밀번호를 입력하세요.</label>
      <input type="password" />
    </div>
  <div>
    <button class="submit-button">가입하기</button>
  </div>
  