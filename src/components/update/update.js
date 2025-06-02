import { useState } from "react";
import styles from "./update.module.css";

export default function WorkUpdate() {
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbzZU8ToZUy5-wad5fLqIIiBfoho0QI-wC95XEVYV04N4jcw4Vx909h-8p82u2l2vH0tQg/exec';

    const [resultText, changeResult] = useState("");
    const [breakTime, changeBreakTime] = useState("0");
    const [note, changeNote] = useState("");

    function sendWork(type) {
        const url = `${scriptUrl}?type=${encodeURIComponent(type)}`;

        fetch(url)
            .then(response => response.text())
            .then(text => { changeResult(text); })
            .catch(err => { changeResult("통신 실패 : " + err.message); });
    }

    function sendNote() {
        const trimmed = note.trim();
        if (!trimmed) {
            changeResult("메모 내용을 입력해주세요.");
            return;
        }

        const url = `${scriptUrl}?type=비고&note=${encodeURIComponent(trimmed)}`;

        fetch(url)
            .then(response => response.text())
            .then(text => { changeResult(text); changeNote(""); })
            .catch(err => { changeResult("통신 실패 : " + err.message); });
    }

    const sendBreakTime = (e) => {
        const selected = e.target.value;
        changeBreakTime(selected);

        const url = `${scriptUrl}?type=휴게시간&breakTime=${encodeURIComponent(selected)}`;

        fetch(url)
            .then(response => response.text())
            .then(text => { changeResult(text); })
            .catch(err => { changeResult("통신 실패 : " + err.message); });
    }

    return (
        <div className={styles.workUpdate}>
            <div className={styles.title}>
                <h1>근태 기록</h1>
                <p id="result">{resultText}</p>
            </div>

            <div className={styles.commute}>
                <button onClick={() => sendWork('출근')}>출근</button>
                <button onClick={() => sendWork('퇴근')}>퇴근</button>
            </div>

            <div className={styles.rest}>
                <label htmlFor="breakTime">휴게시간 선택:</label>
                <select id="breakTime" value={breakTime} onChange={sendBreakTime}>
                    <option value="0">0 시간</option>
                    <option value="0.5">0.5 시간</option>
                    <option value="1">1 시간</option>
                    <option value="1.5">1.5 시간</option>
                    <option value="2">2 시간</option>
                </select>
            </div>

            <div class={styles.note}>
                <textarea id="note-input" placeholder="근무 관련 메모를 입력해주세요." value={note} onChange={(e) => changeNote(e.target.value)}></textarea>
                <button id="btn-note" onClick={sendNote}>메모 작성</button>
            </div>

            <a href="https://docs.google.com/spreadsheets/d/1pav8UeB7yZdnFSEi_MQIVDnP-WE7C7eDRjlP-mSW1zQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.link}>엑셀 표로 이동</a>
        </div>
    )
}