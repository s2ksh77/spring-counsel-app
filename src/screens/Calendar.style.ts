import styled from 'styled-components';

export const CalendarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  .fc {
    // 풀캘린더 전체
    //border-bottom: solid 1px #eeeeee;
    width: 100%;
    .fc-toolbar-title {
      font-size: 20px;
    }
    .fc-button {
        padding: 0.4em 0.5em;
        border: 0px solid #f1f3f4;
        &:active {
            background-color: #A9CE8E;   
            border: 0px solid #f1f3f4;
        }
        &:focus {
            box-shadow: none !important;
        }
        .fc-icon {
            font-size: 16px;
            vertical-align: middle;
        }
    }
    .fc-button-primary {
        background-color: #A9CE8E;
    }
        
  }
  .fc-header-toolbar {
    display: flex;
    margin-bottom: 0.5em !important;
    margin: 10px;
  }
  .fc-scrollgrid {
    // 풀캘린더 전체 스크롤틀
    border: none;
  }
  /* .fc-view:not(.fc-timegrid) .fc-col-header-cell-cushion {
    height: 1.813rem;
    padding: 0px;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.813rem;
    color: rgb(51, 51, 51);
    cursor: default;
  } */
  .fc-theme-standard .fc-daygrid tr {
    // 월 보기모드 header row & week row
  }
  .fc-theme-standard th {
    // 모든 보기모드 header cell
    border: none;
  }
  .fc-theme-standard .fc-daygrid td {
    // 월 보기모드 week cell
    border: 1px solid #e8eaed;
  }
  .fc-theme-standard .fc-daygrid td:first-of-type {
    // 월 보기모드 week cell
    border-left: none;
    border-bottom: none;
  }
  .fc-theme-standard .fc-daygrid td:last-of-type {
    // 월 보기모드 week cell
    border-right: none;
  }
  .fc-scrollgrid table {
    border-bottom-style: hidden;
  }
  .fc-col-header-cell-cushion {
    display: flex;
    font-size: 14px;
    padding: 12px 0px 7px 13px;
  }
  .fc-timegrid .fc-col-header-cell-cushion {
    display: flex;
    font-size: 14px;
    padding: 12px 6px 7px 8px;
  }
  .fc-daygrid-day-number {
    padding: 14px 0px 0px 16px;
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 700;
    font-size: 14px;
  }
  .fc-timegrid-divider {
    // 주/일 보기모드 종일/시간영역 분리자
    display: none;
  }
  .fc-daygrid-day-events {
    margin-top: 23px;
  }
  .fc-daygrid.fc-view {
    // 월 보기모드
    .fc-daygrid-day-top {
      // 월 보기모드 날짜 영역
      display: flex;
      justify-content: left;
      height: 18px;
    }
    .fc-day-today {
      // 오늘 daygrid
      background: inherit;
      .fc-daygrid-day-top {
        width: 26px;
        height: 26px;
        background-color: #ff6258;
        border-radius: 15px;
        transform: translate(11px, 11px);
        justify-content: center;
      }
      .fc-daygrid-day-events {
        margin-top: 15px;
      }
      .fc-daygrid-day-number {
        padding: 4px;
        color: white;
      }
      .MuiBox-root {
        // 날짜 숫자 박스
        position: relative;
        top: -3px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        //background-color: #ff6258;
        color: white;
      }
    }
    .fc-scroller {
      overflow: hidden !important;
    }
  }
  .fc-timegrid-axis-frame {
    justify-content: center;
  }
  .fc-day-sun {
    .fc-daygrid-day-number,
    .fc-col-header-cell-cushion {
      color: red;
    }
  }
  .fc-daygrid-day {
    .fc-highlight {
      background: #f1f3f4;
      z-index: -1;
    }
  }
  .fc-timeGridWeek-view {
    tr.fc-scrollgrid-section:first-of-type {
      .fc-daygrid-day-top {
        display: none;
      }
      .fc-daygrid-day-events {
        margin: 8px 0;
      }
      .fc-scroller {
        max-height: 165px;
      }
    }
  }
  .fc-scrollgrid-section-liquid {
    .fc-timegrid-event-harness {
      min-height: 20px;
    }
  }
  .fc-timegrid.fc-view {
    // 주/일 보기모드
    // 1. 요일영역
    // 2. 종일영역
    // 2-1. 종일텍스트영역
    // 2-2. 종일일정영역
    // 3. 시간영역
    // 3-1. 시간텍스트영역 (오전1시, 오전2시, etc)
    // 3-2. 시간일정영역
    .fc-timegrid-slot {
      height: 30px;
    }
    .fc-timegrid-slot-label {
      // 시간텍스트영역 cell (오전1시)
      border-top: none;
    }
    .fc-timegrid-slot-minor {
      // 30분 단위 시간일정영역 cell
      border: none;
    }
    .fc-scrollgrid-shrink-cushion {
      // 시간텍스트영역 cell 폰트
      font-family: 'Spoqa Han Sans Neo';
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 11px;
    }
    .fc-timegrid-slot-label-cushion {
      // 시간텍스트영역 cell wrapper
      position: relative;
      top: -14px;
      padding: 0 10px 0 0;
    }
    [data-time='00:00:00'] .fc-timegrid-slot-label-cushion {
      // 오전12시 시간텍스트영역 cell wrapper
      display: none;
    }
    .fc-timegrid-now-indicator-arrow {
      // 현재 시간대영역 표시 화살표
      display: none;
    }
    .fc-timegrid-now-indicator-container {
      overflow: visible;
    }
    .fc-timegrid-now-indicator-line {
      // 현재 시간일정영역 표시 선
      border-color: #202124;
      border-width: 1px 0px 0px;
      height: 1px;
      &::after {
        content: '';
        position: absolute;
        width: 7px;
        height: 7px;
        margin: 0;
        vertical-align: middle;
        background: #202124;
        border-radius: 50%;
        top: -4px;
        left: -4px;
      }
    }
    .fc-day-today .MuiBox-root {
      // 오늘 요일영역 날짜숫자 박스
      position: relative;
      top: -5px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background-color: #ff6258;
      color: white;
    }
    .fc-daygrid-day.fc-day-today {
      // 오늘 종일일정영역 cell
      background-color: #fafafa;
    }
    .fc-timegrid-col.fc-day-today {
      // 오늘 시간일정영역 cell
      background-color: #fafafa;
    }
    .fc-timegrid-event .fc-event-main {
      padding: 0;
    }
  }
  .fc-h-event {
    // 가로로 그려지는 일정 (월 보기모드 일정, 주/일 보기모드 종일 일정) 테두리
    border: none;
    background-color: transparent;
  }
  .fc-v-event {
    // 세로로 그려지는 일정 (주/일 보기모드 시간 일정) 테두리
    border: none;
    background-color: transparent;
  }
  .fc-col-header,
  .fc-daygrid-body,
  .fc-scrollgrid-sync-table {
    width: 100% !important;
  }
  .fc-daygrid-body tr {
    height: 16.6666%;
  }
  .fc-daygrid-more-link {
    float: right;
  }
  .fc-more-popover {
    visibility: hidden;
  }
`;

export const FullCalendarWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-right: 1px solid #eeeeee;
`;