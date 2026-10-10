/**
 * サロエレ関連イベントデータ
 *
 * イベントを追加・修正するときは、基本的にこのファイルを編集してください。
 * type: "official" = 公式イベント / "unofficial" = 非公式イベント
 * date: YYYY-MM-DD
 * 時間や場所が不明な場合は空文字にできます。
 *
 * 過去のイベントも削除せず、このファイルに残しておくと記録として参照できます。
 */

export type EventType = "official" | "unofficial";

export type CalendarEvent = {
  id: number;
  type: EventType;
  name: string;
  date: string;
  start: string;
  end: string;
  country: string;
  town: string;
  audience: string;
  overview: string;
  organizer: string;
  notes: string;
  url: string;
};

export const events: CalendarEvent[] = [
  {
    id: 1,
    type: "unofficial",
    name: "アルカナ学院関係者限定 ハーベストパーティ",
    date: "2026-10-20",
    start: "22:00",
    end: "23:00",
    country: "ベルギア",
    town: "アルカナ学院第四広間",
    audience: "アルカナ学院関係者限定。知り合いや保護者の方は10月21日の開催へご参加ください。",
    overview:
      "アルカナ学院関係者限定のハーベストパーティ。在学中の学生・教員・用務員などに加え、卒業・中退した方も参加できます。",
    organizer: "時雨狐雪",
    notes:
      "【参加上の注意】\nアバター容量は50MB以下。武器・魔法の使用、武器の持ち込み、パーティクル・オーディオ、配信・録画は禁止です。\n\n仮装の一部や学院生の杖は持ち込み可能ですが、使用は禁止です。写真撮影は可能です。\n\n透明アバターでの見学も可能ですが、インスタンスが満員に近い場合はキャラクターを優先してください。公式キャラクターでの参加も歓迎（任意）です。\n\n仮装は必須ではなく、仮装していない方に変更を強要しないでください。",
    url: "",
  },
  {
    id: 2,
    type: "unofficial",
    name: "アルカナ学院関係者限定 ハーベストパーティ",
    date: "2026-10-21",
    start: "22:00",
    end: "23:00",
    country: "ベルギア",
    town: "アルカナ学院第四広間",
    audience: "誰でも参加可能。アルカナ学院関係者以外も歓迎です。",
    overview:
      "アルカナ学院関係者限定のハーベストパーティ。在学中の学生・教員・用務員などに加え、卒業・中退した方も参加できます。",
    organizer: "時雨狐雪",
    notes:
      "【参加上の注意】\nアバター容量は50MB以下。武器・魔法の使用、武器の持ち込み、パーティクル・オーディオ、配信・録画は禁止です。\n\n仮装の一部や学院生の杖は持ち込み可能ですが、使用は禁止です。写真撮影は可能です。\n\n透明アバターでの見学も可能ですが、インスタンスが満員に近い場合はキャラクターを優先してください。公式キャラクターでの参加も歓迎（任意）です。\n\n仮装は必須ではなく、仮装していない方に変更を強要しないでください。",
    url: "",
  },

  {
    id: 3,
    type: "unofficial",
    name: "アルカナ学院関係者限定 飛行訓練授業",
    date: "2026-10-15",
    start: "22:00",
    end: "23:00",
    country: "ベルギア",
    town: "アルカナ学院飛行訓練場",
    audience: "アルカナ学院関係者限定",
    overview:
      "実践形式の飛行訓練授業を行います",
    organizer: "トワさん（X：@towasan_vrc）",
    notes:
      "【参加条件・注意事項】\n実践授業のため、目の届く範囲にいること。勝手な行動は控えてください。\nVRChatで期間限定無料配布されているほうきを、事前にアイテムに入れておいてください。\n\n【禁止事項】\nダウンロードサイズ50MB以上のアバターの使用\n無許可での録画・録音・配信\nNSFWに該当する行為やアバターの使用\n絵文字・ステッカー・ドローン・Propの使用\n視覚・聴覚に負荷のかかるアバターの使用（大音量のオーディオソース・視界ジャックなど）\nVRC貴族サロン公式への問い合わせ",
    url: "https://x.com/towasan_vrc/status/2107657984335897054?s=20",
  },

  {
    id: 4,
    type: "unofficial",
    name: "イリュミナ・ハーベストパーティー!! in グレイヴ",
    date: "2026-10-18",
    start: "22:00",
    end: "23:00",
    country: "アストラヴェール",
    town: "グレイヴ家",
    audience:
      "グレイヴ家関係者・セリオと関わりがない方も歓迎",
    overview:
      "イリュミナ・ハーベストパーティー。RPでの交流や写真撮影を楽しむ非公式イベントです。",
    organizer: "トワさん（X：@towasan_vrc）",
    notes:
      "【参加条件・注意事項】\nグレイヴ家関係者やセリオと関わりがない方も歓迎です。\n\n【禁止事項】\nダウンロードサイズ50MB以上のアバターの使用。\n無許可での録画・録音・配信。\nNSFWに該当する行為やアバターの使用。\n絵文字・ステッカー・ドローン・Propの使用。\n視覚・聴覚に負荷のかかるアバターの使用（大音量のオーディオソース・視界ジャックなど）。\nVRC貴族サロン公式への問い合わせ。",
    url: "https://x.com/towasan_vrc/status/2107860357591212526?s=20",
  },
  {
    id: 5,
    type: "unofficial",
    name: "性別不詳・無性別 非公式キャラクター集会",
    date: "2026-10-24",
    start: "22:00",
    end: "23:00",
    country: "ベルギア",
    town: "陽光の酒場 ミモザ",
    audience:
      "キャラクターシートの性別欄が「男性」「女性」ではないキャラクター",
    overview:
      "ミモザにたまたま訪れた貴方。そこに集まったのはなんだかミステリアスな者たちばかりで……？",
    organizer: "hi_gara（X：@hi_gara）",
    notes:
      "【禁止事項】\nダウンロードサイズ50MB以上のアバターの使用\n無許可での録画・録音・配信\nNSFWに該当する行為やアバターの使用\nVRC貴族サロン公式への問い合わせ\n絵文字・ステッカー・ドローンなどの使用\n視覚・聴覚に負荷のかかるアバターの使用\n高負荷のパーティクル・大音量のオーディオ・視界ジャックなどの使用",
    url: "https://x.com/hi_gara/status/2108115067460088183?s=20",
  },
  {
    id: 6,
    type: "unofficial",
    name: "アルカナ学院 占い学特別公開授業",
    date: "2026-10-28",
    start: "22:00",
    end: "23:00",
    country: "ベルギア",
    town: "アルカナ学院 占い学研究室",
    audience: "占いの知識がない方も参加可能",
    overview:
      "アルカナ学院の占い学研究室にて開催される特別公開授業。「ワンオラクル」と「逆位置」の読み方を学び、実際にカードを引いて参加者同士で読み解きます。予習不要で参加でき、グループワークも用意されています。",
    organizer: "初雪ざくろ（X：@VRC_Zakuro）",
    notes:
      "注意事項】\n・参加アバターの容量は50MB以下でお願いします。\n・他の参加者の迷惑となるパーティクルはお控えください。\n・他の参加者の迷惑となる発言や言動はお控えください。\n・互いに敬意を払ってRPをしましょう。\n・授業で行われる占いは「あくまでもソフィア先生流」です。正位置・逆位置の解釈に唯一の正解があるというものではありません。\n・グループワーク時、相手を不安にさせるRPはお控えください。",
    url: "https://x.com/VRC_Zakuro/status/2108244676881043847?s=20",
  },
  {
    id: 7,
    type: "official",
    name: "花綴のお茶会",
    date: "2026-10-13",
    start: "21:55",
    end: "",
    country: "ベルギア",
    town: "エレガンティア",
    audience: "",
    overview: "",
    organizer: "公式運営",
    notes: "21:55からリクイン受付。今月で従来の形態でのイベントは終了します。",
    url: "",
  },
  {
    id: 8,
    type: "official",
    name: "ビギナーズデイ",
    date: "2026-10-14",
    start: "22:00",
    end: "",
    country: "",
    town: "",
    audience: "",
    overview: "初心者向け説明会イベント",
    organizer: "公式運営",
    notes: "22:00にインスタンスOPEN",
    url: "",
  },
  {
    id: 9,
    type: "official",
    name: "杖選び体験",
    date: "2026-10-16",
    start: "22:00",
    end: "",
    country: "",
    town: "",
    audience: "",
    overview: "",
    organizer: "公式運営",
    notes: "22:00開始。入れ替え制",
    url: "",
  },
  {
    id: 10,
    type: "official",
    name: "はじまりの酒場",
    date: "2026-10-22",
    start: "22:00",
    end: "",
    country: "",
    town: "",
    audience: "参加したばかりの方、RPに慣れていない方、不安がある方向け",
    overview: "ロールプレイ練習イベント",
    organizer: "公式運営",
    notes: "22:00にインスタンスOPEN、GroupOnly",
    url: "",
  },
  {
    id: 11,
    type: "official",
    name: "仮面舞踏会：RP交流会",
    date: "2026-10-29",
    start: "22:00",
    end: "",
    country: "",
    town: "",
    audience: "",
    overview: "Groupインスタンスにて開催",
    organizer: "公式運営",
    notes: "仮面の着用は必須です。公式種族ではないことが明確なキャラクターは入場できません。",
    url: "",
  },
  {
    id: 12,
    type: "official",
    name: "仮面舞踏会：RP舞踏会",
    date: "2026-10-30",
    start: "22:00",
    end: "",
    country: "",
    town: "",
    audience: "人型アバター限定",
    overview: "22:00にインスタンスOPEN",
    organizer: "公式運営",
    notes: "Groupインスタンスにて開催。ドレスコードがあります。仮面の着用は必須です。公式種族ではないことが明確なキャラクターは入場できません。",
    url: "",
  },
];
