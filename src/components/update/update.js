import { useState } from "react";
import styles from "./update.module.css";

export default function WorkUpdate() {
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbzZU8ToZUy5-wad5fLqIIiBfoho0QI-wC95XEVYV04N4jcw4Vx909h-8p82u2l2vH0tQg/exec';

    const [commuteResult, changeCommute] = useState("");
    const [restResult, changeRest] = useState("");
    const [noteResult, changeNote] = useState("");
    const [breakTime, changeBreakTime] = useState("0");
    const [note, updateNote] = useState("");

    function sendWork(type) {
        const url = `${scriptUrl}?type=${encodeURIComponent(type)}`;

        fetch(url)
            .then(response => response.text())
            .then(text => { changeCommute(text); })
            .catch(err => { changeCommute("통신 실패 : " + err.message); });
    }

    function sendNote() {
        const trimmed = note.trim();
        if (!trimmed) {
            changeNote("메모 내용을 입력해주세요.");
            return;
        }

        const url = `${scriptUrl}?type=비고&note=${encodeURIComponent(trimmed)}`;

        fetch(url)
            .then(response => response.text())
            .then(text => { changeNote(text); updateNote(""); })
            .catch(err => { changeNote("통신 실패 : " + err.message); });
    }

    const sendBreakTime = (e) => {
        const selected = e.target.value;
        changeBreakTime(selected);

        const url = `${scriptUrl}?type=휴게시간&breakTime=${encodeURIComponent(selected)}`;

        fetch(url)
            .then(response => response.text())
            .then(text => { changeRest(text); })
            .catch(err => { changeRest("통신 실패 : " + err.message); });
    }

    return (
        <div className={styles.workUpdate}>

            <div className={styles.commute}>
                <div className={styles.commuteTitle}>
                    <h1>01. 출퇴근 기록</h1>
                    <p id="result">{commuteResult}</p>
                </div>
                <p className={styles.describe}>출 · 퇴근 버튼을 누르면 현재시간이 기록됩니다. <br />
                ( ※ 한 번 기록하면 다시 기록할 수 없습니다. )</p>

                <div className={styles.commuteButton}>
                    <button onClick={() => sendWork('출근')}>출근</button>
                    <button onClick={() => sendWork('퇴근')}>퇴근</button>
                </div>
            </div>

            <div className={styles.rest}>
                <div className={styles.restTitle}>
                    <h1>02. 휴게시간</h1>
                    <p id="result">{restResult}</p>
                </div>
                <p className={styles.describe}>휴게시간을 선택하면 해당 시간이 기록됩니다.</p>

                <div className={styles.restSelect}>
                    <label htmlFor="breakTime">휴게시간 선택 : </label>
                    <select id="breakTime" value={breakTime} onChange={sendBreakTime}>
                        <option value="00:00">휴식 없음</option>
                        <option value="00:30">30분</option>
                        <option value="01:00">1시간</option>
                        <option value="01:30">1시간 30분</option>
                        <option value="02:00">2시간</option>
                    </select>
                </div>
            </div>

            <div className={styles.note}>
                <div className={styles.noteTitle}>
                    <h1>03. 메모작성</h1>
                    <p id="result">{noteResult}</p>
                </div>
                <p className={styles.describe}>비고란에 작성할 메모를 입력합니다. 근무 중 특이사항 혹은 작성해야할 내용을 적어주세요. <br />
                ( ※ 기존 작성된 내용이 있다면 자동으로 지워집니다. )</p>

                <textarea id="note-input" placeholder="근무 관련 메모를 입력해주세요." value={note} onChange={(e) => updateNote(e.target.value)}></textarea>
                <button id="btn-note" onClick={sendNote}>메모 작성</button>
            </div>

            <div className={styles.goto}>
                <div className={styles.gotoTitle}>
                    <h1>04. 근무 표 확인</h1>
                </div>
                <p className={styles.describe}>구글스프레드시트로 넘어갑니다. 근무 시간 등 수정사항이 있을 때 확인해주세요.</p>

                <div className={styles.link}>
                    <a href="https://docs.google.com/spreadsheets/d/1pav8UeB7yZdnFSEi_MQIVDnP-WE7C7eDRjlP-mSW1zQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer">엑셀 표로 이동</a>
                </div>
            </div>

            <p className={styles.copyright}>Designed and developed by JunHyeong. © 2025 All rights reserved.</p>
        </div>
    )
}

