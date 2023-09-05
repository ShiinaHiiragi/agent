import { styled } from "@mui/joy/styles";
import Card from "@mui/joy/Card";

const Division = styled('div')(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2, 2, 1, 2),
  overflow: "auto",
}));

const PaddingDivision = styled('div')(({ theme }) => ({
  paddingBottom: theme.spacing(2)
}));

const DialogueCard = styled(Card)(({ theme }) => ({
}));

const Bubble = (fromSelf, content) => {
  return (
    <PaddingDivision
      sx={(theme) => ({
        alignSelf: fromSelf ? "flex-end" : "flex-start",
        maxWidth: "750px",
        [theme.breakpoints.only("sm")]: {
          [fromSelf ? "paddingLeft" : "paddingRight"]: "min(40px, 10%)"
        },
        [theme.breakpoints.up("sm")]: {
          [fromSelf ? "paddingLeft" : "paddingRight"]: "9%",
        }
      })}
    >
      <DialogueCard
        color={fromSelf ? "neutral" : "primary"}
        orientation="vertical"
        size="md"
        variant="soft"
      >
        {content}
      </DialogueCard>
    </PaddingDivision>
  );
}

function Session() {
  return (
    <Division>
      {Bubble(true, "千字文是什么？")}
      {Bubble(false, "《千字文》原名为《次韵王羲之书千字》，南朝梁（502年─549年）周兴嗣所作的一首长韵文。它是一篇由一千个不重复的汉字组成的文章。据说是梁武帝取了王羲之写的一千个字体，令其亲人练习书法，而后觉得杂乱无章，于是又命周兴嗣（470年─521年）编为一篇文章。《千字文》全篇主题清晰，章句文理一脉相承，层层推进，语言优美，词​​藻华丽，几乎是句句引经，字字用典。出典包括《易经》、《淮南子》、《诗经》、《尚书》、《礼记》、《春秋》、《论语》、《孝经》、《孟子》、《史记》、《神农本草经》、《管子》、《韩非子》、《庄子》、《汉书》。《千字文》以儒家思想为主体，兼纳自然、历史、社会常识，寓意深刻、结构清晰、语言简明优美，可以说是一首四言长诗。是用来教授儿童基本汉字之重要启蒙读物，和《三字经》、《百家姓》、《千家诗》合称“三百千千”。《千字文》是其他几篇也公认为不错的训蒙读物不能比的。所以历代书法家都竞相书写，如智永、怀素、欧阳询、赵佶、赵孟𫖯、文徵明等都有留传至今的帖本。同时在汉字文化圈各国也受到重视。")}
    </Division>
  );
}

export default Session;