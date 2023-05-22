// イーサンおまけ会話
{
  const ethantalk = document.getElementById('operaterethan');
  const ethanvoice = document.getElementById('ethanvoice');
  const ethanconversation = [
    "前はレユニオンにいたって何回も言ったじゃねぇか。素行調査なんかも喜んで付き合ってやったろ？つか、別にやましいことは何もやってきてねぇから、改心っつってもなぁ。　▼",
    "レユニオンの何が気に食わねぇって？メシだよメシ！俺がいたチームなんか、主食って言えるもんはライ麦パンくらいしかなくてさぁ、しかも石みてぇに固いから、スープにぶち込んで食うってわけ。そうでもしないと胃が痛くなっちまうよ。　▼",
    "レユニオンの「ゴースト隊」ってやつとはもう結構やりあったろ？俺も昔はあそこに所属してたんだぜ。まぁ偵察任務ばっかりで、ケンカはなかったけどな。退屈しのぎに、敵に発見された回数の少なさを競ったりしてさぁ。負けないって分かっててやってたし、今思えば俺ってひどいヤツだよなぁ。",
    "レユニオンに入る前の暮らし？そりゃ感染者狩りのヤツらと毎日鬼ごっこだったな。まぁ俺が本気で身を隠せば、ヤツらは手も足も出ないんだけどな、へへ……いつまでも隠れてるだけじゃ、感染者の待遇がよくならねぇってのもわかるけどよ。",
  ];

  ethantalk.addEventListener('click', () => {
    const ethanrandomText = Math.floor(Math.random() * 4);
    ethanvoice.textContent = ethanconversation[ethanrandomText];
  });
}