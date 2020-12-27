
let date = new Date();
let prevBtn = document.querySelector('.go-prev');
let nextBtn = document.querySelector('.go-next');
let thisBtn = document.querySelector('.go-tobdy');

const renderCalendar = () => {

  const myYear = date.getFullYear(); //현재 년도 가져오기
  const myMonth = date.getMonth(); //현재 월 가져오기

  const lastMonth = new Date(myYear, myMonth, 0);
  const thisMonth = new Date(myYear, myMonth + 1 , 0);

  // console.log(lastMonth);
  // console.log(thisMonth);

  // 지난 달 날짜 데이타
  const lmDate = lastMonth.getDate(); // 지난 달 마지막 날짜
  const lmDay = lastMonth.getDay();  //지난 달 마지막 요일

  // 이번 달 날짜 데이타
  const tmDate = thisMonth.getDate(); //이번 달 마지막 날짜
  const tmDay = thisMonth.getDay(); //이번 달 마지막 요일

  // 날짜를 담을 배열
  const preveDate = [];
  const thisDate = [...Array(tmDate + 1).keys()].slice(1); //배열에 주어지는 값은 0 ~ n-1이므로 + 1.배열의 첫 번째 값(0) 제거
  const nextDate = [];



  // ====================================================================================

  // 해당 년도 + 해당 월 자동 생성
  document.querySelector('.year-month').textContent = `${myYear}년 ${myMonth + 1}월` ;

  // ====================================================================================

  // 지난 달 날짜 계산하여 삽입
  if(lmDay !== 6) { //지난 달 마지막 요일 체크(토요일이 아닐 시 아래 구문 실행)
    for(let i = 0; i < lmDay + 1; i++) {
      preveDate.unshift(lmDate - i);
    }
  }

  //다음 달 날짜 계산하여 삽입
  for(let i = 1; i < 7 - tmDay; i++) {
    nextDate.push(i);
  }

  // ====================================================================================
  // 지난 달, 이번 달, 다음 달 배열 합치기
  const numbers = preveDate.concat(thisDate, nextDate);

  // console.log(preveDate);
  // console.log(thisDate);
  // console.log(nextDate);

  // ====================================================================================
  // innerHTML
  numbers.forEach((date, i) => {
    numbers[i] = `<div class="number">${date}</div>`
  });

  document.querySelector('.numbers').innerHTML = numbers.join(''); 

  // ====================================================================================
  // 지난 달/다음 달 구분
  const firstDateIdx = numbers.indexOf(1);
  const lastDateIdx = numbers.lastIndexOf(tmDate);
  numbers.forEach((date, i) => {
    const condition = i >= firstDateIdx && i < lastDateIdx + 1 ? 'this' : 'other' ;
    numbers[i] = `<div class="number"><span class="${condition}">${date}</span></div>`;
  })


  // ====================================================================================
  // 오늘 날짜 표시
  const today = new Date();
  if(myMonth === today.getMonth && myYear === today.getFullYear) { //현재 달과 현재 년도가 현재와 일치하는지 비교
    for(let date of document.querySelector('this')) { //조건 만족 시 this 클래스를 찾아내 반복
      if(+date.innerText === today.getDate()) { //+로 숫자로 바꿔주기
        date.classList.add('today'); //조건 만족 시 클래스 부여
        break;
      }
    }
  }

}

renderCalendar();

const prevMonth = () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
}

const nextMonth = () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
}

const toDay = () => {
  date = new Date();
  renderCalendar();
}

prevBtn.addEventListener('click', function(e) {
  e.preventDefault();
  prevMonth();
});

nextBtn.addEventListener('click', function(e) {
  e.preventDefault();
  nextMonth();
});

thisBtn.addEventListener('click', function(e) {
  e.preventDefault();
  toDay();
});


