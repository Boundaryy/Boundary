<script>
  import { onMount } from 'svelte';

  let selectedGender = '남자'; 

  function handleGenderClick(gender) {
      selectedGender = gender;
  }

  function handleKeyDown(event, gender) {
      if (event.key === 'Enter' || event.key === ' ') {
          handleGenderClick(gender);
      }
  }

  onMount(() => {
      selectedGender = '남자';
  });
</script>

<style>
  .container {
      width: 375px;
      height: 100vh; 
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center; 
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
      border: none;
      border-bottom: 2px solid #5772FF;
      background: transparent;
      font-size: 16px;
      outline: none;
      color: #000;
  }

  .gender-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 40px; 
      width: 100%;
  }

  .gender-option-container {
      display: flex;
      gap: 10px;
  }

  .gender-option {
      padding: 10px 20px;
      border: 1px solid #808080;
      border-radius: 20px;
      font-size: 16px;
      cursor: pointer;
      outline: none;
      text-align: center;
      width: 80px;
  }

  .gender-option.selected {
      background-color: #5772FF;
      color: white;
      border: 1px solid #5772FF;
  }

  .submit-button {
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
      margin-top: 40px; /* Add margin to create space above the button */
      align-self: center; /* Center button horizontally */
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

  <div class="form-group">
      <label>성별을 선택해주세요.</label>
      <div class="gender-container">
          <div class="gender-option-container">
              <div
                  class="gender-option {selectedGender === '남자' ? 'selected' : ''}"
                  tabindex="0"
                  on:click={() => handleGenderClick('남자')}
                  on:keydown={(e) => handleKeyDown(e, '남자')}
              >
                  남자
              </div>
              <div
                  class="gender-option {selectedGender === '여자' ? 'selected' : ''}"
                  tabindex="0"
                  on:click={() => handleGenderClick('여자')}
                  on:keydown={(e) => handleKeyDown(e, '여자')}
              >
                  여자
              </div>
          </div>
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

  <button class="submit-button">가입하기</button>
</div>
