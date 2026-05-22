import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  zh: {
    translation: {
      appTitle: '🎙 聲優活動追蹤',
      appSubtitle: '日本聲優最新活動資訊',
      filterAll: '全部',
      filterConcert: '演唱會',
      filterMeet: '見面會',
      filterHandshake: '握手會',
      filterRadio: '廣播',
      filterStage: '舞台劇',
      filterOther: '其他',
      loading: '載入中...',
      noData: '目前沒有活動資料',
      detail: '詳細資訊 →',
    }
  },
  ja: {
    translation: {
      appTitle: '🎙 声優イベント追跡',
      appSubtitle: '日本声優の最新イベント情報',
      filterAll: 'すべて',
      filterConcert: 'ライブ',
      filterMeet: '会いに行こう',
      filterHandshake: '握手会',
      filterRadio: 'ラジオ',
      filterStage: '舞台',
      filterOther: 'その他',
      loading: '読み込み中...',
      noData: 'イベント情報がありません',
      detail: '詳細情報 →',
    }
  },
  en: {
    translation: {
      appTitle: '🎙 VA Event Tracker',
      appSubtitle: 'Latest Japanese Voice Actor Events',
      filterAll: 'All',
      filterConcert: 'Concert',
      filterMeet: 'Meet & Greet',
      filterHandshake: 'Handshake',
      filterRadio: 'Radio',
      filterStage: 'Stage',
      filterOther: 'Other',
      loading: 'Loading...',
      noData: 'No events found',
      detail: 'Details →',
    }
  },
  ko: {
    translation: {
      appTitle: '🎙 성우 이벤트 트래커',
      appSubtitle: '일본 성우 최신 이벤트 정보',
      filterAll: '전체',
      filterConcert: '콘서트',
      filterMeet: '팬미팅',
      filterHandshake: '악수회',
      filterRadio: '라디오',
      filterStage: '무대',
      filterOther: '기타',
      loading: '로딩 중...',
      noData: '이벤트 정보가 없습니다',
      detail: '자세히 보기 →',
    }
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh',
    fallbackLng: 'zh',
    interpolation: { escapeValue: false },
  })

export default i18n