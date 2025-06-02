const scriptUrl = 'https://script.google.com/macros/s/AKfycbzZU8ToZUy5-wad5fLqIIiBfoho0QI-wC95XEVYV04N4jcw4Vx909h-8p82u2l2vH0tQg/exec';

const resultDiv = document.getElementById('result');
const breakTimeSelect = document.getElementById('breakTime');

document.getElementById('btn-start').addEventListener('click', () => {
  sendWorkType('출근');
});

document.getElementById('btn-end').addEventListener('click', () => {
  sendWorkType('퇴근');
});

breakTimeSelect.addEventListener('change', () => {
  const breakTimeValue = breakTimeSelect.value;
  sendBreakTime(breakTimeValue);
});

function sendWorkType(type) {
  const url = `${scriptUrl}?type=${encodeURIComponent(type)}`;

  fetch(url)
    .then(response => response.text())
    .then(text => {
      resultDiv.textContent = text;
    })
    .catch(err => {
      resultDiv.textContent = '통신 실패: ' + err.message;
    });
}

function sendBreakTime(breakTime) {
  const url = `${scriptUrl}?type=휴게시간&breakTime=${encodeURIComponent(breakTime)}`;

  fetch(url)
    .then(response => response.text())
    .then(text => {
      resultDiv.textContent = text;
    })
    .catch(err => {
      resultDiv.textContent = '통신 실패: ' + err.message;
    });
}

document.getElementById('btn-note').addEventListener('click', () => {
  const note = document.getElementById('note-input').value.trim();
  if (!note) {
    resultDiv.textContent = "메모 내용을 입력해주세요.";
    return;
  }

  const url = `${scriptUrl}?type=비고&note=${encodeURIComponent(note)}`;

  fetch(url)
    .then(response => response.text())
    .then(text => {
      resultDiv.textContent = text;
      document.getElementById('note-input').value = ''; // 저장 후 입력칸 비움
    })
    .catch(err => {
      resultDiv.textContent = '통신 실패: ' + err.message;
    });
});

document.getElementById('btn-external').addEventListener('click', () => {
  window.open('https://docs.google.com/spreadsheets/d/1pav8UeB7yZdnFSEi_MQIVDnP-WE7C7eDRjlP-mSW1zQ/edit?usp=sharing', '_blank');
});