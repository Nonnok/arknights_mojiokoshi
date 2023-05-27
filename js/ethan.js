// イーサンおまけ会話
{
  const talk = document.getElementById('operater');
  const voice = document.getElementById('voice');
  const conversation = [
    "前はレユニオンにいたって何回も言ったじゃねぇか。素行調査なんかも喜んで付き合ってやったろ？つか、別にやましいことは何もやってきてねぇから、改心っつってもなぁ。　▼",
    "レユニオンの何が気に食わねぇって？メシだよメシ！俺がいたチームなんか、主食って言えるもんはライ麦パンくらいしかなくてさぁ、しかも石みてぇに固いから、スープにぶち込んで食うってわけ。そうでもしないと胃が痛くなっちまうよ。　▼",
    "レユニオンの「ゴースト隊」ってやつとはもう結構やりあったろ？俺も昔はあそこに所属してたんだぜ。まぁ偵察任務ばっかりで、ケンカはなかったけどな。退屈しのぎに、敵に発見された回数の少なさを競ったりしてさぁ。負けないって分かっててやってたし、今思えば俺ってひどいヤツだよなぁ。　▼",
    "レユニオンに入る前の暮らし？そりゃ感染者狩りのヤツらと毎日鬼ごっこだったな。まぁ俺が本気で身を隠せば、ヤツらは手も足も出ないんだけどな、へへ……いつまでも隠れてるだけじゃ、感染者の待遇がよくならねぇってのもわかるけどよ。　▼",
    "当時はあの闇組織に潜り込んで、他の感染者を助けてやろうなんて考えてたこともあるけど、いろいろやってるうちに心まで汚れちまってな。でも今はスッキリした。意味がわからない？いいって、気にするな。　▼",
    "これが今回の任務の配置か？なるほど、理解理解。つかあんたってすげぇよ。よくこんなうまい戦術を毎回考えられるよな。道理でレユニオンがいつも無残にボコられるわけだ。んじゃ、ちょっと行ってくるわ。　▼",
    "俺はどこってここだよここ。いるじゃねぇか、この左上の隅っこのとこ。そう、画面の左上！　▼",
    "はは、言ったろ、俺の働きは絶対気に入るって。　▼",
    "なぁ、ドクター。俺らのことは忘れないでくれよ。特に俺みたいなヤツ、戦場で死んでも気づかれないからな。俺になんかあったら、あんたがなんとかしてくれよ。頼んだぜ。　▼",
  ];
  const face = [
    "img/character/Ethan/Ethan-default.png",
    "img/character/Ethan/Ethan-default.png",
    "img/character/Ethan/Ethan-toboke.png",
    "img/character/Ethan/Ethan-default.png",
    "img/character/Ethan/Ethan-ninmari.png",
    "img/character/Ethan/Ethan-odoroki.png",
    "img/character/Ethan/Ethan-left.png",
    "img/character/Ethan/Ethan-tere.png",
    "img/character/Ethan/Ethan-default.png",
  ];
  
  talk.addEventListener('click', () => {
    const randomText = Math.floor(Math.random() * 9);
    voice.textContent = conversation[randomText];
    talk.src = face[randomText];
  });
}