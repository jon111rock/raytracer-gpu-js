/**
 * gpu.js
 * http://gpu.rocks/
 *
 * GPU Accelerated JavaScript
 *
 * @version 2.15.2
 * @date Mon Mar 28 2022 10:51:10 GMT-0400 (Eastern Daylight Time)
 *
 * @license MIT
 * The MIT License
 *
 * Copyright (c) 2022 gpu.js Team
 */ !(function (e) {
  if ("object" == typeof exports && "undefined" != typeof module)
    module.exports = e();
  else if ("function" == typeof define && define.amd) define([], e);
  else {
    ("undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : this
    ).GPU = e();
  }
})(function () {
  return (function () {
    return function e(t, r, n) {
      function i(a, o) {
        if (!r[a]) {
          if (!t[a]) {
            var u = "function" == typeof require && require;
            if (!o && u) return u(a, !0);
            if (s) return s(a, !0);
            var l = new Error("Cannot find module '" + a + "'");
            throw ((l.code = "MODULE_NOT_FOUND"), l);
          }
          var h = (r[a] = { exports: {} });
          t[a][0].call(
            h.exports,
            function (e) {
              return i(t[a][1][e] || e);
            },
            h,
            h.exports,
            e,
            t,
            r,
            n
          );
        }
        return r[a].exports;
      }
      for (
        var s = "function" == typeof require && require, a = 0;
        a < n.length;
        a++
      )
        i(n[a]);
      return i;
    };
  })()(
    {
      1: [
        function (e, t, r) {
          var n;
          (n = this),
            (function (e) {
              "use strict";
              var t = {
                  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
                  5: "class enum extends super const export import",
                  6: "enum",
                  strict:
                    "implements interface let package private protected public static yield",
                  strictBind: "eval arguments",
                },
                r =
                  "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",
                n = {
                  5: r,
                  "5module": r + " export import",
                  6: r + " const class extends export import super",
                },
                i = /^in(stanceof)?$/,
                s =
                  "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
                a =
                  "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",
                o = new RegExp("[" + s + "]"),
                u = new RegExp("[" + s + a + "]");
              s = a = null;
              var l = [
                  0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268,
                  28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4,
                  43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7,
                  153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66,
                  18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2,
                  28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14,
                  17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28,
                  11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35,
                  30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17,
                  2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3,
                  21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21,
                  2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42,
                  14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2,
                  23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8,
                  0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29,
                  113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328,
                  18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582,
                  8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689,
                  63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43,
                  8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8,
                  9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6,
                  2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2,
                  339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24,
                  2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301,
                  196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2,
                  3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0,
                  2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2,
                  0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12,
                  221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938,
                ],
                h = [
                  509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5,
                  0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32,
                  9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13,
                  2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56,
                  1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9,
                  5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82,
                  12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2,
                  0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0,
                  10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4,
                  0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3,
                  19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0,
                  12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2,
                  1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6,
                  2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110,
                  6, 6, 9, 4759, 9, 787719, 239,
                ];
              function c(e, t) {
                for (var r = 65536, n = 0; n < t.length; n += 2) {
                  if ((r += t[n]) > e) return !1;
                  if ((r += t[n + 1]) >= e) return !0;
                }
              }
              function p(e, t) {
                return e < 65
                  ? 36 === e
                  : e < 91 ||
                      (e < 97
                        ? 95 === e
                        : e < 123 ||
                          (e <= 65535
                            ? e >= 170 && o.test(String.fromCharCode(e))
                            : !1 !== t && c(e, l)));
              }
              function d(e, t) {
                return e < 48
                  ? 36 === e
                  : e < 58 ||
                      (!(e < 65) &&
                        (e < 91 ||
                          (e < 97
                            ? 95 === e
                            : e < 123 ||
                              (e <= 65535
                                ? e >= 170 && u.test(String.fromCharCode(e))
                                : !1 !== t && (c(e, l) || c(e, h))))));
              }
              var m = function (e, t) {
                void 0 === t && (t = {}),
                  (this.label = e),
                  (this.keyword = t.keyword),
                  (this.beforeExpr = !!t.beforeExpr),
                  (this.startsExpr = !!t.startsExpr),
                  (this.isLoop = !!t.isLoop),
                  (this.isAssign = !!t.isAssign),
                  (this.prefix = !!t.prefix),
                  (this.postfix = !!t.postfix),
                  (this.binop = t.binop || null),
                  (this.updateContext = null);
              };
              function f(e, t) {
                return new m(e, { beforeExpr: !0, binop: t });
              }
              var g = { beforeExpr: !0 },
                x = { startsExpr: !0 },
                y = {};
              function b(e, t) {
                return (
                  void 0 === t && (t = {}),
                  (t.keyword = e),
                  (y[e] = new m(e, t))
                );
              }
              var T = {
                  num: new m("num", x),
                  regexp: new m("regexp", x),
                  string: new m("string", x),
                  name: new m("name", x),
                  eof: new m("eof"),
                  bracketL: new m("[", { beforeExpr: !0, startsExpr: !0 }),
                  bracketR: new m("]"),
                  braceL: new m("{", { beforeExpr: !0, startsExpr: !0 }),
                  braceR: new m("}"),
                  parenL: new m("(", { beforeExpr: !0, startsExpr: !0 }),
                  parenR: new m(")"),
                  comma: new m(",", g),
                  semi: new m(";", g),
                  colon: new m(":", g),
                  dot: new m("."),
                  question: new m("?", g),
                  questionDot: new m("?."),
                  arrow: new m("=>", g),
                  template: new m("template"),
                  invalidTemplate: new m("invalidTemplate"),
                  ellipsis: new m("...", g),
                  backQuote: new m("`", x),
                  dollarBraceL: new m("${", { beforeExpr: !0, startsExpr: !0 }),
                  eq: new m("=", { beforeExpr: !0, isAssign: !0 }),
                  assign: new m("_=", { beforeExpr: !0, isAssign: !0 }),
                  incDec: new m("++/--", {
                    prefix: !0,
                    postfix: !0,
                    startsExpr: !0,
                  }),
                  prefix: new m("!/~", {
                    beforeExpr: !0,
                    prefix: !0,
                    startsExpr: !0,
                  }),
                  logicalOR: f("||", 1),
                  logicalAND: f("&&", 2),
                  bitwiseOR: f("|", 3),
                  bitwiseXOR: f("^", 4),
                  bitwiseAND: f("&", 5),
                  equality: f("==/!=/===/!==", 6),
                  relational: f("</>/<=/>=", 7),
                  bitShift: f("<</>>/>>>", 8),
                  plusMin: new m("+/-", {
                    beforeExpr: !0,
                    binop: 9,
                    prefix: !0,
                    startsExpr: !0,
                  }),
                  modulo: f("%", 10),
                  star: f("*", 10),
                  slash: f("/", 10),
                  starstar: new m("**", { beforeExpr: !0 }),
                  coalesce: f("??", 1),
                  _break: b("break"),
                  _case: b("case", g),
                  _catch: b("catch"),
                  _continue: b("continue"),
                  _debugger: b("debugger"),
                  _default: b("default", g),
                  _do: b("do", { isLoop: !0, beforeExpr: !0 }),
                  _else: b("else", g),
                  _finally: b("finally"),
                  _for: b("for", { isLoop: !0 }),
                  _function: b("function", x),
                  _if: b("if"),
                  _return: b("return", g),
                  _switch: b("switch"),
                  _throw: b("throw", g),
                  _try: b("try"),
                  _var: b("var"),
                  _const: b("const"),
                  _while: b("while", { isLoop: !0 }),
                  _with: b("with"),
                  _new: b("new", { beforeExpr: !0, startsExpr: !0 }),
                  _this: b("this", x),
                  _super: b("super", x),
                  _class: b("class", x),
                  _extends: b("extends", g),
                  _export: b("export"),
                  _import: b("import", x),
                  _null: b("null", x),
                  _true: b("true", x),
                  _false: b("false", x),
                  _in: b("in", { beforeExpr: !0, binop: 7 }),
                  _instanceof: b("instanceof", { beforeExpr: !0, binop: 7 }),
                  _typeof: b("typeof", {
                    beforeExpr: !0,
                    prefix: !0,
                    startsExpr: !0,
                  }),
                  _void: b("void", {
                    beforeExpr: !0,
                    prefix: !0,
                    startsExpr: !0,
                  }),
                  _delete: b("delete", {
                    beforeExpr: !0,
                    prefix: !0,
                    startsExpr: !0,
                  }),
                },
                v = /\r\n?|\n|\u2028|\u2029/,
                S = new RegExp(v.source, "g");
              function A(e, t) {
                return (
                  10 === e || 13 === e || (!t && (8232 === e || 8233 === e))
                );
              }
              var _ = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
                E = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
                w = Object.prototype,
                k = w.hasOwnProperty,
                I = w.toString;
              function D(e, t) {
                return k.call(e, t);
              }
              var C =
                Array.isArray ||
                function (e) {
                  return "[object Array]" === I.call(e);
                };
              function $(e) {
                return new RegExp("^(?:" + e.replace(/ /g, "|") + ")$");
              }
              var L = function (e, t) {
                (this.line = e), (this.column = t);
              };
              L.prototype.offset = function (e) {
                return new L(this.line, this.column + e);
              };
              var R = function (e, t, r) {
                (this.start = t),
                  (this.end = r),
                  null !== e.sourceFile && (this.source = e.sourceFile);
              };
              function F(e, t) {
                for (var r = 1, n = 0; ; ) {
                  S.lastIndex = n;
                  var i = S.exec(e);
                  if (!(i && i.index < t)) return new L(r, t - n);
                  ++r, (n = i.index + i[0].length);
                }
              }
              var N = {
                ecmaVersion: 10,
                sourceType: "script",
                onInsertedSemicolon: null,
                onTrailingComma: null,
                allowReserved: null,
                allowReturnOutsideFunction: !1,
                allowImportExportEverywhere: !1,
                allowAwaitOutsideFunction: !1,
                allowHashBang: !1,
                locations: !1,
                onToken: null,
                onComment: null,
                ranges: !1,
                program: null,
                sourceFile: null,
                directSourceFile: null,
                preserveParens: !1,
              };
              function V(e) {
                var t = {};
                for (var r in N) t[r] = e && D(e, r) ? e[r] : N[r];
                if (
                  (t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009),
                  null == t.allowReserved &&
                    (t.allowReserved = t.ecmaVersion < 5),
                  C(t.onToken))
                ) {
                  var n = t.onToken;
                  t.onToken = function (e) {
                    return n.push(e);
                  };
                }
                return (
                  C(t.onComment) &&
                    (t.onComment = (function (e, t) {
                      return function (r, n, i, s, a, o) {
                        var u = {
                          type: r ? "Block" : "Line",
                          value: n,
                          start: i,
                          end: s,
                        };
                        e.locations && (u.loc = new R(this, a, o)),
                          e.ranges && (u.range = [i, s]),
                          t.push(u);
                      };
                    })(t, t.onComment)),
                  t
                );
              }
              var M = 2,
                O = 1 | M,
                z = 4,
                P = 8;
              function K(e, t) {
                return M | (e ? z : 0) | (t ? P : 0);
              }
              var G = function (e, r, i) {
                  (this.options = e = V(e)),
                    (this.sourceFile = e.sourceFile),
                    (this.keywords = $(
                      n[
                        e.ecmaVersion >= 6
                          ? 6
                          : "module" === e.sourceType
                          ? "5module"
                          : 5
                      ]
                    ));
                  var s = "";
                  if (!0 !== e.allowReserved) {
                    for (var a = e.ecmaVersion; !(s = t[a]); a--);
                    "module" === e.sourceType && (s += " await");
                  }
                  this.reservedWords = $(s);
                  var o = (s ? s + " " : "") + t.strict;
                  (this.reservedWordsStrict = $(o)),
                    (this.reservedWordsStrictBind = $(o + " " + t.strictBind)),
                    (this.input = String(r)),
                    (this.containsEsc = !1),
                    i
                      ? ((this.pos = i),
                        (this.lineStart =
                          this.input.lastIndexOf("\n", i - 1) + 1),
                        (this.curLine = this.input
                          .slice(0, this.lineStart)
                          .split(v).length))
                      : ((this.pos = this.lineStart = 0), (this.curLine = 1)),
                    (this.type = T.eof),
                    (this.value = null),
                    (this.start = this.end = this.pos),
                    (this.startLoc = this.endLoc = this.curPosition()),
                    (this.lastTokEndLoc = this.lastTokStartLoc = null),
                    (this.lastTokStart = this.lastTokEnd = this.pos),
                    (this.context = this.initialContext()),
                    (this.exprAllowed = !0),
                    (this.inModule = "module" === e.sourceType),
                    (this.strict =
                      this.inModule || this.strictDirective(this.pos)),
                    (this.potentialArrowAt = -1),
                    (this.yieldPos = this.awaitPos = this.awaitIdentPos = 0),
                    (this.labels = []),
                    (this.undefinedExports = {}),
                    0 === this.pos &&
                      e.allowHashBang &&
                      "#!" === this.input.slice(0, 2) &&
                      this.skipLineComment(2),
                    (this.scopeStack = []),
                    this.enterScope(1),
                    (this.regexpState = null);
                },
                U = {
                  inFunction: { configurable: !0 },
                  inGenerator: { configurable: !0 },
                  inAsync: { configurable: !0 },
                  allowSuper: { configurable: !0 },
                  allowDirectSuper: { configurable: !0 },
                  treatFunctionsAsVar: { configurable: !0 },
                };
              (G.prototype.parse = function () {
                var e = this.options.program || this.startNode();
                return this.nextToken(), this.parseTopLevel(e);
              }),
                (U.inFunction.get = function () {
                  return (this.currentVarScope().flags & M) > 0;
                }),
                (U.inGenerator.get = function () {
                  return (this.currentVarScope().flags & P) > 0;
                }),
                (U.inAsync.get = function () {
                  return (this.currentVarScope().flags & z) > 0;
                }),
                (U.allowSuper.get = function () {
                  return (64 & this.currentThisScope().flags) > 0;
                }),
                (U.allowDirectSuper.get = function () {
                  return (128 & this.currentThisScope().flags) > 0;
                }),
                (U.treatFunctionsAsVar.get = function () {
                  return this.treatFunctionsAsVarInScope(this.currentScope());
                }),
                (G.prototype.inNonArrowFunction = function () {
                  return (this.currentThisScope().flags & M) > 0;
                }),
                (G.extend = function () {
                  for (var e = [], t = arguments.length; t--; )
                    e[t] = arguments[t];
                  for (var r = this, n = 0; n < e.length; n++) r = e[n](r);
                  return r;
                }),
                (G.parse = function (e, t) {
                  return new this(t, e).parse();
                }),
                (G.parseExpressionAt = function (e, t, r) {
                  var n = new this(r, e, t);
                  return n.nextToken(), n.parseExpression();
                }),
                (G.tokenizer = function (e, t) {
                  return new this(t, e);
                }),
                Object.defineProperties(G.prototype, U);
              var B = G.prototype,
                W = /^(?:'((?:\\.|[^'])*?)'|"((?:\\.|[^"])*?)")/;
              function j() {
                this.shorthandAssign =
                  this.trailingComma =
                  this.parenthesizedAssign =
                  this.parenthesizedBind =
                  this.doubleProto =
                    -1;
              }
              (B.strictDirective = function (e) {
                for (;;) {
                  (E.lastIndex = e), (e += E.exec(this.input)[0].length);
                  var t = W.exec(this.input.slice(e));
                  if (!t) return !1;
                  if ("use strict" === (t[1] || t[2])) {
                    E.lastIndex = e + t[0].length;
                    var r = E.exec(this.input),
                      n = r.index + r[0].length,
                      i = this.input.charAt(n);
                    return (
                      ";" === i ||
                      "}" === i ||
                      (v.test(r[0]) &&
                        !(
                          /[(`.[+\-/*%<>=,?^&]/.test(i) ||
                          ("!" === i && "=" === this.input.charAt(n + 1))
                        ))
                    );
                  }
                  (e += t[0].length),
                    (E.lastIndex = e),
                    (e += E.exec(this.input)[0].length),
                    ";" === this.input[e] && e++;
                }
              }),
                (B.eat = function (e) {
                  return this.type === e && (this.next(), !0);
                }),
                (B.isContextual = function (e) {
                  return (
                    this.type === T.name &&
                    this.value === e &&
                    !this.containsEsc
                  );
                }),
                (B.eatContextual = function (e) {
                  return !!this.isContextual(e) && (this.next(), !0);
                }),
                (B.expectContextual = function (e) {
                  this.eatContextual(e) || this.unexpected();
                }),
                (B.canInsertSemicolon = function () {
                  return (
                    this.type === T.eof ||
                    this.type === T.braceR ||
                    v.test(this.input.slice(this.lastTokEnd, this.start))
                  );
                }),
                (B.insertSemicolon = function () {
                  if (this.canInsertSemicolon())
                    return (
                      this.options.onInsertedSemicolon &&
                        this.options.onInsertedSemicolon(
                          this.lastTokEnd,
                          this.lastTokEndLoc
                        ),
                      !0
                    );
                }),
                (B.semicolon = function () {
                  this.eat(T.semi) ||
                    this.insertSemicolon() ||
                    this.unexpected();
                }),
                (B.afterTrailingComma = function (e, t) {
                  if (this.type === e)
                    return (
                      this.options.onTrailingComma &&
                        this.options.onTrailingComma(
                          this.lastTokStart,
                          this.lastTokStartLoc
                        ),
                      t || this.next(),
                      !0
                    );
                }),
                (B.expect = function (e) {
                  this.eat(e) || this.unexpected();
                }),
                (B.unexpected = function (e) {
                  this.raise(null != e ? e : this.start, "Unexpected token");
                }),
                (B.checkPatternErrors = function (e, t) {
                  if (e) {
                    e.trailingComma > -1 &&
                      this.raiseRecoverable(
                        e.trailingComma,
                        "Comma is not permitted after the rest element"
                      );
                    var r = t ? e.parenthesizedAssign : e.parenthesizedBind;
                    r > -1 && this.raiseRecoverable(r, "Parenthesized pattern");
                  }
                }),
                (B.checkExpressionErrors = function (e, t) {
                  if (!e) return !1;
                  var r = e.shorthandAssign,
                    n = e.doubleProto;
                  if (!t) return r >= 0 || n >= 0;
                  r >= 0 &&
                    this.raise(
                      r,
                      "Shorthand property assignments are valid only in destructuring patterns"
                    ),
                    n >= 0 &&
                      this.raiseRecoverable(
                        n,
                        "Redefinition of __proto__ property"
                      );
                }),
                (B.checkYieldAwaitInDefaultParams = function () {
                  this.yieldPos &&
                    (!this.awaitPos || this.yieldPos < this.awaitPos) &&
                    this.raise(
                      this.yieldPos,
                      "Yield expression cannot be a default value"
                    ),
                    this.awaitPos &&
                      this.raise(
                        this.awaitPos,
                        "Await expression cannot be a default value"
                      );
                }),
                (B.isSimpleAssignTarget = function (e) {
                  return "ParenthesizedExpression" === e.type
                    ? this.isSimpleAssignTarget(e.expression)
                    : "Identifier" === e.type || "MemberExpression" === e.type;
                });
              var H = G.prototype;
              H.parseTopLevel = function (e) {
                var t = {};
                for (e.body || (e.body = []); this.type !== T.eof; ) {
                  var r = this.parseStatement(null, !0, t);
                  e.body.push(r);
                }
                if (this.inModule)
                  for (
                    var n = 0, i = Object.keys(this.undefinedExports);
                    n < i.length;
                    n += 1
                  ) {
                    var s = i[n];
                    this.raiseRecoverable(
                      this.undefinedExports[s].start,
                      "Export '" + s + "' is not defined"
                    );
                  }
                return (
                  this.adaptDirectivePrologue(e.body),
                  this.next(),
                  (e.sourceType = this.options.sourceType),
                  this.finishNode(e, "Program")
                );
              };
              var X = { kind: "loop" },
                q = { kind: "switch" };
              (H.isLet = function (e) {
                if (this.options.ecmaVersion < 6 || !this.isContextual("let"))
                  return !1;
                E.lastIndex = this.pos;
                var t = E.exec(this.input),
                  r = this.pos + t[0].length,
                  n = this.input.charCodeAt(r);
                if (91 === n) return !0;
                if (e) return !1;
                if (123 === n) return !0;
                if (p(n, !0)) {
                  for (var s = r + 1; d(this.input.charCodeAt(s), !0); ) ++s;
                  var a = this.input.slice(r, s);
                  if (!i.test(a)) return !0;
                }
                return !1;
              }),
                (H.isAsyncFunction = function () {
                  if (
                    this.options.ecmaVersion < 8 ||
                    !this.isContextual("async")
                  )
                    return !1;
                  E.lastIndex = this.pos;
                  var e = E.exec(this.input),
                    t = this.pos + e[0].length;
                  return !(
                    v.test(this.input.slice(this.pos, t)) ||
                    "function" !== this.input.slice(t, t + 8) ||
                    (t + 8 !== this.input.length && d(this.input.charAt(t + 8)))
                  );
                }),
                (H.parseStatement = function (e, t, r) {
                  var n,
                    i = this.type,
                    s = this.startNode();
                  switch ((this.isLet(e) && ((i = T._var), (n = "let")), i)) {
                    case T._break:
                    case T._continue:
                      return this.parseBreakContinueStatement(s, i.keyword);
                    case T._debugger:
                      return this.parseDebuggerStatement(s);
                    case T._do:
                      return this.parseDoStatement(s);
                    case T._for:
                      return this.parseForStatement(s);
                    case T._function:
                      return (
                        e &&
                          (this.strict || ("if" !== e && "label" !== e)) &&
                          this.options.ecmaVersion >= 6 &&
                          this.unexpected(),
                        this.parseFunctionStatement(s, !1, !e)
                      );
                    case T._class:
                      return e && this.unexpected(), this.parseClass(s, !0);
                    case T._if:
                      return this.parseIfStatement(s);
                    case T._return:
                      return this.parseReturnStatement(s);
                    case T._switch:
                      return this.parseSwitchStatement(s);
                    case T._throw:
                      return this.parseThrowStatement(s);
                    case T._try:
                      return this.parseTryStatement(s);
                    case T._const:
                    case T._var:
                      return (
                        (n = n || this.value),
                        e && "var" !== n && this.unexpected(),
                        this.parseVarStatement(s, n)
                      );
                    case T._while:
                      return this.parseWhileStatement(s);
                    case T._with:
                      return this.parseWithStatement(s);
                    case T.braceL:
                      return this.parseBlock(!0, s);
                    case T.semi:
                      return this.parseEmptyStatement(s);
                    case T._export:
                    case T._import:
                      if (this.options.ecmaVersion > 10 && i === T._import) {
                        E.lastIndex = this.pos;
                        var a = E.exec(this.input),
                          o = this.pos + a[0].length,
                          u = this.input.charCodeAt(o);
                        if (40 === u || 46 === u)
                          return this.parseExpressionStatement(
                            s,
                            this.parseExpression()
                          );
                      }
                      return (
                        this.options.allowImportExportEverywhere ||
                          (t ||
                            this.raise(
                              this.start,
                              "'import' and 'export' may only appear at the top level"
                            ),
                          this.inModule ||
                            this.raise(
                              this.start,
                              "'import' and 'export' may appear only with 'sourceType: module'"
                            )),
                        i === T._import
                          ? this.parseImport(s)
                          : this.parseExport(s, r)
                      );
                    default:
                      if (this.isAsyncFunction())
                        return (
                          e && this.unexpected(),
                          this.next(),
                          this.parseFunctionStatement(s, !0, !e)
                        );
                      var l = this.value,
                        h = this.parseExpression();
                      return i === T.name &&
                        "Identifier" === h.type &&
                        this.eat(T.colon)
                        ? this.parseLabeledStatement(s, l, h, e)
                        : this.parseExpressionStatement(s, h);
                  }
                }),
                (H.parseBreakContinueStatement = function (e, t) {
                  var r = "break" === t;
                  this.next(),
                    this.eat(T.semi) || this.insertSemicolon()
                      ? (e.label = null)
                      : this.type !== T.name
                      ? this.unexpected()
                      : ((e.label = this.parseIdent()), this.semicolon());
                  for (var n = 0; n < this.labels.length; ++n) {
                    var i = this.labels[n];
                    if (null == e.label || i.name === e.label.name) {
                      if (null != i.kind && (r || "loop" === i.kind)) break;
                      if (e.label && r) break;
                    }
                  }
                  return (
                    n === this.labels.length &&
                      this.raise(e.start, "Unsyntactic " + t),
                    this.finishNode(
                      e,
                      r ? "BreakStatement" : "ContinueStatement"
                    )
                  );
                }),
                (H.parseDebuggerStatement = function (e) {
                  return (
                    this.next(),
                    this.semicolon(),
                    this.finishNode(e, "DebuggerStatement")
                  );
                }),
                (H.parseDoStatement = function (e) {
                  return (
                    this.next(),
                    this.labels.push(X),
                    (e.body = this.parseStatement("do")),
                    this.labels.pop(),
                    this.expect(T._while),
                    (e.test = this.parseParenExpression()),
                    this.options.ecmaVersion >= 6
                      ? this.eat(T.semi)
                      : this.semicolon(),
                    this.finishNode(e, "DoWhileStatement")
                  );
                }),
                (H.parseForStatement = function (e) {
                  this.next();
                  var t =
                    this.options.ecmaVersion >= 9 &&
                    (this.inAsync ||
                      (!this.inFunction &&
                        this.options.allowAwaitOutsideFunction)) &&
                    this.eatContextual("await")
                      ? this.lastTokStart
                      : -1;
                  if (
                    (this.labels.push(X),
                    this.enterScope(0),
                    this.expect(T.parenL),
                    this.type === T.semi)
                  )
                    return t > -1 && this.unexpected(t), this.parseFor(e, null);
                  var r = this.isLet();
                  if (this.type === T._var || this.type === T._const || r) {
                    var n = this.startNode(),
                      i = r ? "let" : this.value;
                    return (
                      this.next(),
                      this.parseVar(n, !0, i),
                      this.finishNode(n, "VariableDeclaration"),
                      (this.type === T._in ||
                        (this.options.ecmaVersion >= 6 &&
                          this.isContextual("of"))) &&
                      1 === n.declarations.length
                        ? (this.options.ecmaVersion >= 9 &&
                            (this.type === T._in
                              ? t > -1 && this.unexpected(t)
                              : (e.await = t > -1)),
                          this.parseForIn(e, n))
                        : (t > -1 && this.unexpected(t), this.parseFor(e, n))
                    );
                  }
                  var s = new j(),
                    a = this.parseExpression(!0, s);
                  return this.type === T._in ||
                    (this.options.ecmaVersion >= 6 && this.isContextual("of"))
                    ? (this.options.ecmaVersion >= 9 &&
                        (this.type === T._in
                          ? t > -1 && this.unexpected(t)
                          : (e.await = t > -1)),
                      this.toAssignable(a, !1, s),
                      this.checkLVal(a),
                      this.parseForIn(e, a))
                    : (this.checkExpressionErrors(s, !0),
                      t > -1 && this.unexpected(t),
                      this.parseFor(e, a));
                }),
                (H.parseFunctionStatement = function (e, t, r) {
                  return (
                    this.next(), this.parseFunction(e, Z | (r ? 0 : J), !1, t)
                  );
                }),
                (H.parseIfStatement = function (e) {
                  return (
                    this.next(),
                    (e.test = this.parseParenExpression()),
                    (e.consequent = this.parseStatement("if")),
                    (e.alternate = this.eat(T._else)
                      ? this.parseStatement("if")
                      : null),
                    this.finishNode(e, "IfStatement")
                  );
                }),
                (H.parseReturnStatement = function (e) {
                  return (
                    this.inFunction ||
                      this.options.allowReturnOutsideFunction ||
                      this.raise(this.start, "'return' outside of function"),
                    this.next(),
                    this.eat(T.semi) || this.insertSemicolon()
                      ? (e.argument = null)
                      : ((e.argument = this.parseExpression()),
                        this.semicolon()),
                    this.finishNode(e, "ReturnStatement")
                  );
                }),
                (H.parseSwitchStatement = function (e) {
                  var t;
                  this.next(),
                    (e.discriminant = this.parseParenExpression()),
                    (e.cases = []),
                    this.expect(T.braceL),
                    this.labels.push(q),
                    this.enterScope(0);
                  for (var r = !1; this.type !== T.braceR; )
                    if (this.type === T._case || this.type === T._default) {
                      var n = this.type === T._case;
                      t && this.finishNode(t, "SwitchCase"),
                        e.cases.push((t = this.startNode())),
                        (t.consequent = []),
                        this.next(),
                        n
                          ? (t.test = this.parseExpression())
                          : (r &&
                              this.raiseRecoverable(
                                this.lastTokStart,
                                "Multiple default clauses"
                              ),
                            (r = !0),
                            (t.test = null)),
                        this.expect(T.colon);
                    } else
                      t || this.unexpected(),
                        t.consequent.push(this.parseStatement(null));
                  return (
                    this.exitScope(),
                    t && this.finishNode(t, "SwitchCase"),
                    this.next(),
                    this.labels.pop(),
                    this.finishNode(e, "SwitchStatement")
                  );
                }),
                (H.parseThrowStatement = function (e) {
                  return (
                    this.next(),
                    v.test(this.input.slice(this.lastTokEnd, this.start)) &&
                      this.raise(
                        this.lastTokEnd,
                        "Illegal newline after throw"
                      ),
                    (e.argument = this.parseExpression()),
                    this.semicolon(),
                    this.finishNode(e, "ThrowStatement")
                  );
                });
              var Y = [];
              (H.parseTryStatement = function (e) {
                if (
                  (this.next(),
                  (e.block = this.parseBlock()),
                  (e.handler = null),
                  this.type === T._catch)
                ) {
                  var t = this.startNode();
                  if ((this.next(), this.eat(T.parenL))) {
                    t.param = this.parseBindingAtom();
                    var r = "Identifier" === t.param.type;
                    this.enterScope(r ? 32 : 0),
                      this.checkLVal(t.param, r ? 4 : 2),
                      this.expect(T.parenR);
                  } else
                    this.options.ecmaVersion < 10 && this.unexpected(),
                      (t.param = null),
                      this.enterScope(0);
                  (t.body = this.parseBlock(!1)),
                    this.exitScope(),
                    (e.handler = this.finishNode(t, "CatchClause"));
                }
                return (
                  (e.finalizer = this.eat(T._finally)
                    ? this.parseBlock()
                    : null),
                  e.handler ||
                    e.finalizer ||
                    this.raise(e.start, "Missing catch or finally clause"),
                  this.finishNode(e, "TryStatement")
                );
              }),
                (H.parseVarStatement = function (e, t) {
                  return (
                    this.next(),
                    this.parseVar(e, !1, t),
                    this.semicolon(),
                    this.finishNode(e, "VariableDeclaration")
                  );
                }),
                (H.parseWhileStatement = function (e) {
                  return (
                    this.next(),
                    (e.test = this.parseParenExpression()),
                    this.labels.push(X),
                    (e.body = this.parseStatement("while")),
                    this.labels.pop(),
                    this.finishNode(e, "WhileStatement")
                  );
                }),
                (H.parseWithStatement = function (e) {
                  return (
                    this.strict &&
                      this.raise(this.start, "'with' in strict mode"),
                    this.next(),
                    (e.object = this.parseParenExpression()),
                    (e.body = this.parseStatement("with")),
                    this.finishNode(e, "WithStatement")
                  );
                }),
                (H.parseEmptyStatement = function (e) {
                  return this.next(), this.finishNode(e, "EmptyStatement");
                }),
                (H.parseLabeledStatement = function (e, t, r, n) {
                  for (var i = 0, s = this.labels; i < s.length; i += 1) {
                    s[i].name === t &&
                      this.raise(
                        r.start,
                        "Label '" + t + "' is already declared"
                      );
                  }
                  for (
                    var a = this.type.isLoop
                        ? "loop"
                        : this.type === T._switch
                        ? "switch"
                        : null,
                      o = this.labels.length - 1;
                    o >= 0;
                    o--
                  ) {
                    var u = this.labels[o];
                    if (u.statementStart !== e.start) break;
                    (u.statementStart = this.start), (u.kind = a);
                  }
                  return (
                    this.labels.push({
                      name: t,
                      kind: a,
                      statementStart: this.start,
                    }),
                    (e.body = this.parseStatement(
                      n
                        ? -1 === n.indexOf("label")
                          ? n + "label"
                          : n
                        : "label"
                    )),
                    this.labels.pop(),
                    (e.label = r),
                    this.finishNode(e, "LabeledStatement")
                  );
                }),
                (H.parseExpressionStatement = function (e, t) {
                  return (
                    (e.expression = t),
                    this.semicolon(),
                    this.finishNode(e, "ExpressionStatement")
                  );
                }),
                (H.parseBlock = function (e, t, r) {
                  for (
                    void 0 === e && (e = !0),
                      void 0 === t && (t = this.startNode()),
                      t.body = [],
                      this.expect(T.braceL),
                      e && this.enterScope(0);
                    this.type !== T.braceR;

                  ) {
                    var n = this.parseStatement(null);
                    t.body.push(n);
                  }
                  return (
                    r && (this.strict = !1),
                    this.next(),
                    e && this.exitScope(),
                    this.finishNode(t, "BlockStatement")
                  );
                }),
                (H.parseFor = function (e, t) {
                  return (
                    (e.init = t),
                    this.expect(T.semi),
                    (e.test =
                      this.type === T.semi ? null : this.parseExpression()),
                    this.expect(T.semi),
                    (e.update =
                      this.type === T.parenR ? null : this.parseExpression()),
                    this.expect(T.parenR),
                    (e.body = this.parseStatement("for")),
                    this.exitScope(),
                    this.labels.pop(),
                    this.finishNode(e, "ForStatement")
                  );
                }),
                (H.parseForIn = function (e, t) {
                  var r = this.type === T._in;
                  return (
                    this.next(),
                    "VariableDeclaration" === t.type &&
                    null != t.declarations[0].init &&
                    (!r ||
                      this.options.ecmaVersion < 8 ||
                      this.strict ||
                      "var" !== t.kind ||
                      "Identifier" !== t.declarations[0].id.type)
                      ? this.raise(
                          t.start,
                          (r ? "for-in" : "for-of") +
                            " loop variable declaration may not have an initializer"
                        )
                      : "AssignmentPattern" === t.type &&
                        this.raise(
                          t.start,
                          "Invalid left-hand side in for-loop"
                        ),
                    (e.left = t),
                    (e.right = r
                      ? this.parseExpression()
                      : this.parseMaybeAssign()),
                    this.expect(T.parenR),
                    (e.body = this.parseStatement("for")),
                    this.exitScope(),
                    this.labels.pop(),
                    this.finishNode(e, r ? "ForInStatement" : "ForOfStatement")
                  );
                }),
                (H.parseVar = function (e, t, r) {
                  for (e.declarations = [], e.kind = r; ; ) {
                    var n = this.startNode();
                    if (
                      (this.parseVarId(n, r),
                      this.eat(T.eq)
                        ? (n.init = this.parseMaybeAssign(t))
                        : "const" !== r ||
                          this.type === T._in ||
                          (this.options.ecmaVersion >= 6 &&
                            this.isContextual("of"))
                        ? "Identifier" === n.id.type ||
                          (t &&
                            (this.type === T._in || this.isContextual("of")))
                          ? (n.init = null)
                          : this.raise(
                              this.lastTokEnd,
                              "Complex binding patterns require an initialization value"
                            )
                        : this.unexpected(),
                      e.declarations.push(
                        this.finishNode(n, "VariableDeclarator")
                      ),
                      !this.eat(T.comma))
                    )
                      break;
                  }
                  return e;
                }),
                (H.parseVarId = function (e, t) {
                  (e.id = this.parseBindingAtom()),
                    this.checkLVal(e.id, "var" === t ? 1 : 2, !1);
                });
              var Z = 1,
                J = 2;
              (H.parseFunction = function (e, t, r, n) {
                this.initFunction(e),
                  (this.options.ecmaVersion >= 9 ||
                    (this.options.ecmaVersion >= 6 && !n)) &&
                    (this.type === T.star && t & J && this.unexpected(),
                    (e.generator = this.eat(T.star))),
                  this.options.ecmaVersion >= 8 && (e.async = !!n),
                  t & Z &&
                    ((e.id =
                      4 & t && this.type !== T.name ? null : this.parseIdent()),
                    !e.id ||
                      t & J ||
                      this.checkLVal(
                        e.id,
                        this.strict || e.generator || e.async
                          ? this.treatFunctionsAsVar
                            ? 1
                            : 2
                          : 3
                      ));
                var i = this.yieldPos,
                  s = this.awaitPos,
                  a = this.awaitIdentPos;
                return (
                  (this.yieldPos = 0),
                  (this.awaitPos = 0),
                  (this.awaitIdentPos = 0),
                  this.enterScope(K(e.async, e.generator)),
                  t & Z ||
                    (e.id = this.type === T.name ? this.parseIdent() : null),
                  this.parseFunctionParams(e),
                  this.parseFunctionBody(e, r, !1),
                  (this.yieldPos = i),
                  (this.awaitPos = s),
                  (this.awaitIdentPos = a),
                  this.finishNode(
                    e,
                    t & Z ? "FunctionDeclaration" : "FunctionExpression"
                  )
                );
              }),
                (H.parseFunctionParams = function (e) {
                  this.expect(T.parenL),
                    (e.params = this.parseBindingList(
                      T.parenR,
                      !1,
                      this.options.ecmaVersion >= 8
                    )),
                    this.checkYieldAwaitInDefaultParams();
                }),
                (H.parseClass = function (e, t) {
                  this.next();
                  var r = this.strict;
                  (this.strict = !0),
                    this.parseClassId(e, t),
                    this.parseClassSuper(e);
                  var n = this.startNode(),
                    i = !1;
                  for (
                    n.body = [], this.expect(T.braceL);
                    this.type !== T.braceR;

                  ) {
                    var s = this.parseClassElement(null !== e.superClass);
                    s &&
                      (n.body.push(s),
                      "MethodDefinition" === s.type &&
                        "constructor" === s.kind &&
                        (i &&
                          this.raise(
                            s.start,
                            "Duplicate constructor in the same class"
                          ),
                        (i = !0)));
                  }
                  return (
                    (this.strict = r),
                    this.next(),
                    (e.body = this.finishNode(n, "ClassBody")),
                    this.finishNode(
                      e,
                      t ? "ClassDeclaration" : "ClassExpression"
                    )
                  );
                }),
                (H.parseClassElement = function (e) {
                  var t = this;
                  if (this.eat(T.semi)) return null;
                  var r = this.startNode(),
                    n = function (e, n) {
                      void 0 === n && (n = !1);
                      var i = t.start,
                        s = t.startLoc;
                      return (
                        !!t.eatContextual(e) &&
                        (!(
                          t.type === T.parenL ||
                          (n && t.canInsertSemicolon())
                        ) ||
                          (r.key && t.unexpected(),
                          (r.computed = !1),
                          (r.key = t.startNodeAt(i, s)),
                          (r.key.name = e),
                          t.finishNode(r.key, "Identifier"),
                          !1))
                      );
                    };
                  (r.kind = "method"), (r.static = n("static"));
                  var i = this.eat(T.star),
                    s = !1;
                  i ||
                    (this.options.ecmaVersion >= 8 && n("async", !0)
                      ? ((s = !0),
                        (i = this.options.ecmaVersion >= 9 && this.eat(T.star)))
                      : n("get")
                      ? (r.kind = "get")
                      : n("set") && (r.kind = "set")),
                    r.key || this.parsePropertyName(r);
                  var a = r.key,
                    o = !1;
                  return (
                    r.computed ||
                    r.static ||
                    !(
                      ("Identifier" === a.type && "constructor" === a.name) ||
                      ("Literal" === a.type && "constructor" === a.value)
                    )
                      ? r.static &&
                        "Identifier" === a.type &&
                        "prototype" === a.name &&
                        this.raise(
                          a.start,
                          "Classes may not have a static property named prototype"
                        )
                      : ("method" !== r.kind &&
                          this.raise(
                            a.start,
                            "Constructor can't have get/set modifier"
                          ),
                        i &&
                          this.raise(
                            a.start,
                            "Constructor can't be a generator"
                          ),
                        s &&
                          this.raise(
                            a.start,
                            "Constructor can't be an async method"
                          ),
                        (r.kind = "constructor"),
                        (o = e)),
                    this.parseClassMethod(r, i, s, o),
                    "get" === r.kind &&
                      0 !== r.value.params.length &&
                      this.raiseRecoverable(
                        r.value.start,
                        "getter should have no params"
                      ),
                    "set" === r.kind &&
                      1 !== r.value.params.length &&
                      this.raiseRecoverable(
                        r.value.start,
                        "setter should have exactly one param"
                      ),
                    "set" === r.kind &&
                      "RestElement" === r.value.params[0].type &&
                      this.raiseRecoverable(
                        r.value.params[0].start,
                        "Setter cannot use rest params"
                      ),
                    r
                  );
                }),
                (H.parseClassMethod = function (e, t, r, n) {
                  return (
                    (e.value = this.parseMethod(t, r, n)),
                    this.finishNode(e, "MethodDefinition")
                  );
                }),
                (H.parseClassId = function (e, t) {
                  this.type === T.name
                    ? ((e.id = this.parseIdent()),
                      t && this.checkLVal(e.id, 2, !1))
                    : (!0 === t && this.unexpected(), (e.id = null));
                }),
                (H.parseClassSuper = function (e) {
                  e.superClass = this.eat(T._extends)
                    ? this.parseExprSubscripts()
                    : null;
                }),
                (H.parseExport = function (e, t) {
                  if ((this.next(), this.eat(T.star)))
                    return (
                      this.options.ecmaVersion >= 11 &&
                        (this.eatContextual("as")
                          ? ((e.exported = this.parseIdent(!0)),
                            this.checkExport(
                              t,
                              e.exported.name,
                              this.lastTokStart
                            ))
                          : (e.exported = null)),
                      this.expectContextual("from"),
                      this.type !== T.string && this.unexpected(),
                      (e.source = this.parseExprAtom()),
                      this.semicolon(),
                      this.finishNode(e, "ExportAllDeclaration")
                    );
                  if (this.eat(T._default)) {
                    var r;
                    if (
                      (this.checkExport(t, "default", this.lastTokStart),
                      this.type === T._function || (r = this.isAsyncFunction()))
                    ) {
                      var n = this.startNode();
                      this.next(),
                        r && this.next(),
                        (e.declaration = this.parseFunction(n, 4 | Z, !1, r));
                    } else if (this.type === T._class) {
                      var i = this.startNode();
                      e.declaration = this.parseClass(i, "nullableID");
                    } else
                      (e.declaration = this.parseMaybeAssign()),
                        this.semicolon();
                    return this.finishNode(e, "ExportDefaultDeclaration");
                  }
                  if (this.shouldParseExportStatement())
                    (e.declaration = this.parseStatement(null)),
                      "VariableDeclaration" === e.declaration.type
                        ? this.checkVariableExport(
                            t,
                            e.declaration.declarations
                          )
                        : this.checkExport(
                            t,
                            e.declaration.id.name,
                            e.declaration.id.start
                          ),
                      (e.specifiers = []),
                      (e.source = null);
                  else {
                    if (
                      ((e.declaration = null),
                      (e.specifiers = this.parseExportSpecifiers(t)),
                      this.eatContextual("from"))
                    )
                      this.type !== T.string && this.unexpected(),
                        (e.source = this.parseExprAtom());
                    else {
                      for (var s = 0, a = e.specifiers; s < a.length; s += 1) {
                        var o = a[s];
                        this.checkUnreserved(o.local),
                          this.checkLocalExport(o.local);
                      }
                      e.source = null;
                    }
                    this.semicolon();
                  }
                  return this.finishNode(e, "ExportNamedDeclaration");
                }),
                (H.checkExport = function (e, t, r) {
                  e &&
                    (D(e, t) &&
                      this.raiseRecoverable(r, "Duplicate export '" + t + "'"),
                    (e[t] = !0));
                }),
                (H.checkPatternExport = function (e, t) {
                  var r = t.type;
                  if ("Identifier" === r) this.checkExport(e, t.name, t.start);
                  else if ("ObjectPattern" === r)
                    for (var n = 0, i = t.properties; n < i.length; n += 1) {
                      var s = i[n];
                      this.checkPatternExport(e, s);
                    }
                  else if ("ArrayPattern" === r)
                    for (var a = 0, o = t.elements; a < o.length; a += 1) {
                      var u = o[a];
                      u && this.checkPatternExport(e, u);
                    }
                  else
                    "Property" === r
                      ? this.checkPatternExport(e, t.value)
                      : "AssignmentPattern" === r
                      ? this.checkPatternExport(e, t.left)
                      : "RestElement" === r
                      ? this.checkPatternExport(e, t.argument)
                      : "ParenthesizedExpression" === r &&
                        this.checkPatternExport(e, t.expression);
                }),
                (H.checkVariableExport = function (e, t) {
                  if (e)
                    for (var r = 0, n = t; r < n.length; r += 1) {
                      var i = n[r];
                      this.checkPatternExport(e, i.id);
                    }
                }),
                (H.shouldParseExportStatement = function () {
                  return (
                    "var" === this.type.keyword ||
                    "const" === this.type.keyword ||
                    "class" === this.type.keyword ||
                    "function" === this.type.keyword ||
                    this.isLet() ||
                    this.isAsyncFunction()
                  );
                }),
                (H.parseExportSpecifiers = function (e) {
                  var t = [],
                    r = !0;
                  for (this.expect(T.braceL); !this.eat(T.braceR); ) {
                    if (r) r = !1;
                    else if (
                      (this.expect(T.comma), this.afterTrailingComma(T.braceR))
                    )
                      break;
                    var n = this.startNode();
                    (n.local = this.parseIdent(!0)),
                      (n.exported = this.eatContextual("as")
                        ? this.parseIdent(!0)
                        : n.local),
                      this.checkExport(e, n.exported.name, n.exported.start),
                      t.push(this.finishNode(n, "ExportSpecifier"));
                  }
                  return t;
                }),
                (H.parseImport = function (e) {
                  return (
                    this.next(),
                    this.type === T.string
                      ? ((e.specifiers = Y), (e.source = this.parseExprAtom()))
                      : ((e.specifiers = this.parseImportSpecifiers()),
                        this.expectContextual("from"),
                        (e.source =
                          this.type === T.string
                            ? this.parseExprAtom()
                            : this.unexpected())),
                    this.semicolon(),
                    this.finishNode(e, "ImportDeclaration")
                  );
                }),
                (H.parseImportSpecifiers = function () {
                  var e = [],
                    t = !0;
                  if (this.type === T.name) {
                    var r = this.startNode();
                    if (
                      ((r.local = this.parseIdent()),
                      this.checkLVal(r.local, 2),
                      e.push(this.finishNode(r, "ImportDefaultSpecifier")),
                      !this.eat(T.comma))
                    )
                      return e;
                  }
                  if (this.type === T.star) {
                    var n = this.startNode();
                    return (
                      this.next(),
                      this.expectContextual("as"),
                      (n.local = this.parseIdent()),
                      this.checkLVal(n.local, 2),
                      e.push(this.finishNode(n, "ImportNamespaceSpecifier")),
                      e
                    );
                  }
                  for (this.expect(T.braceL); !this.eat(T.braceR); ) {
                    if (t) t = !1;
                    else if (
                      (this.expect(T.comma), this.afterTrailingComma(T.braceR))
                    )
                      break;
                    var i = this.startNode();
                    (i.imported = this.parseIdent(!0)),
                      this.eatContextual("as")
                        ? (i.local = this.parseIdent())
                        : (this.checkUnreserved(i.imported),
                          (i.local = i.imported)),
                      this.checkLVal(i.local, 2),
                      e.push(this.finishNode(i, "ImportSpecifier"));
                  }
                  return e;
                }),
                (H.adaptDirectivePrologue = function (e) {
                  for (
                    var t = 0;
                    t < e.length && this.isDirectiveCandidate(e[t]);
                    ++t
                  )
                    e[t].directive = e[t].expression.raw.slice(1, -1);
                }),
                (H.isDirectiveCandidate = function (e) {
                  return (
                    "ExpressionStatement" === e.type &&
                    "Literal" === e.expression.type &&
                    "string" == typeof e.expression.value &&
                    ('"' === this.input[e.start] || "'" === this.input[e.start])
                  );
                });
              var Q = G.prototype;
              (Q.toAssignable = function (e, t, r) {
                if (this.options.ecmaVersion >= 6 && e)
                  switch (e.type) {
                    case "Identifier":
                      this.inAsync &&
                        "await" === e.name &&
                        this.raise(
                          e.start,
                          "Cannot use 'await' as identifier inside an async function"
                        );
                      break;
                    case "ObjectPattern":
                    case "ArrayPattern":
                    case "RestElement":
                      break;
                    case "ObjectExpression":
                      (e.type = "ObjectPattern"),
                        r && this.checkPatternErrors(r, !0);
                      for (var n = 0, i = e.properties; n < i.length; n += 1) {
                        var s = i[n];
                        this.toAssignable(s, t),
                          "RestElement" !== s.type ||
                            ("ArrayPattern" !== s.argument.type &&
                              "ObjectPattern" !== s.argument.type) ||
                            this.raise(s.argument.start, "Unexpected token");
                      }
                      break;
                    case "Property":
                      "init" !== e.kind &&
                        this.raise(
                          e.key.start,
                          "Object pattern can't contain getter or setter"
                        ),
                        this.toAssignable(e.value, t);
                      break;
                    case "ArrayExpression":
                      (e.type = "ArrayPattern"),
                        r && this.checkPatternErrors(r, !0),
                        this.toAssignableList(e.elements, t);
                      break;
                    case "SpreadElement":
                      (e.type = "RestElement"),
                        this.toAssignable(e.argument, t),
                        "AssignmentPattern" === e.argument.type &&
                          this.raise(
                            e.argument.start,
                            "Rest elements cannot have a default value"
                          );
                      break;
                    case "AssignmentExpression":
                      "=" !== e.operator &&
                        this.raise(
                          e.left.end,
                          "Only '=' operator can be used for specifying default value."
                        ),
                        (e.type = "AssignmentPattern"),
                        delete e.operator,
                        this.toAssignable(e.left, t);
                    case "AssignmentPattern":
                      break;
                    case "ParenthesizedExpression":
                      this.toAssignable(e.expression, t, r);
                      break;
                    case "ChainExpression":
                      this.raiseRecoverable(
                        e.start,
                        "Optional chaining cannot appear in left-hand side"
                      );
                      break;
                    case "MemberExpression":
                      if (!t) break;
                    default:
                      this.raise(e.start, "Assigning to rvalue");
                  }
                else r && this.checkPatternErrors(r, !0);
                return e;
              }),
                (Q.toAssignableList = function (e, t) {
                  for (var r = e.length, n = 0; n < r; n++) {
                    var i = e[n];
                    i && this.toAssignable(i, t);
                  }
                  if (r) {
                    var s = e[r - 1];
                    6 === this.options.ecmaVersion &&
                      t &&
                      s &&
                      "RestElement" === s.type &&
                      "Identifier" !== s.argument.type &&
                      this.unexpected(s.argument.start);
                  }
                  return e;
                }),
                (Q.parseSpread = function (e) {
                  var t = this.startNode();
                  return (
                    this.next(),
                    (t.argument = this.parseMaybeAssign(!1, e)),
                    this.finishNode(t, "SpreadElement")
                  );
                }),
                (Q.parseRestBinding = function () {
                  var e = this.startNode();
                  return (
                    this.next(),
                    6 === this.options.ecmaVersion &&
                      this.type !== T.name &&
                      this.unexpected(),
                    (e.argument = this.parseBindingAtom()),
                    this.finishNode(e, "RestElement")
                  );
                }),
                (Q.parseBindingAtom = function () {
                  if (this.options.ecmaVersion >= 6)
                    switch (this.type) {
                      case T.bracketL:
                        var e = this.startNode();
                        return (
                          this.next(),
                          (e.elements = this.parseBindingList(
                            T.bracketR,
                            !0,
                            !0
                          )),
                          this.finishNode(e, "ArrayPattern")
                        );
                      case T.braceL:
                        return this.parseObj(!0);
                    }
                  return this.parseIdent();
                }),
                (Q.parseBindingList = function (e, t, r) {
                  for (var n = [], i = !0; !this.eat(e); )
                    if (
                      (i ? (i = !1) : this.expect(T.comma),
                      t && this.type === T.comma)
                    )
                      n.push(null);
                    else {
                      if (r && this.afterTrailingComma(e)) break;
                      if (this.type === T.ellipsis) {
                        var s = this.parseRestBinding();
                        this.parseBindingListItem(s),
                          n.push(s),
                          this.type === T.comma &&
                            this.raise(
                              this.start,
                              "Comma is not permitted after the rest element"
                            ),
                          this.expect(e);
                        break;
                      }
                      var a = this.parseMaybeDefault(this.start, this.startLoc);
                      this.parseBindingListItem(a), n.push(a);
                    }
                  return n;
                }),
                (Q.parseBindingListItem = function (e) {
                  return e;
                }),
                (Q.parseMaybeDefault = function (e, t, r) {
                  if (
                    ((r = r || this.parseBindingAtom()),
                    this.options.ecmaVersion < 6 || !this.eat(T.eq))
                  )
                    return r;
                  var n = this.startNodeAt(e, t);
                  return (
                    (n.left = r),
                    (n.right = this.parseMaybeAssign()),
                    this.finishNode(n, "AssignmentPattern")
                  );
                }),
                (Q.checkLVal = function (e, t, r) {
                  switch ((void 0 === t && (t = 0), e.type)) {
                    case "Identifier":
                      2 === t &&
                        "let" === e.name &&
                        this.raiseRecoverable(
                          e.start,
                          "let is disallowed as a lexically bound name"
                        ),
                        this.strict &&
                          this.reservedWordsStrictBind.test(e.name) &&
                          this.raiseRecoverable(
                            e.start,
                            (t ? "Binding " : "Assigning to ") +
                              e.name +
                              " in strict mode"
                          ),
                        r &&
                          (D(r, e.name) &&
                            this.raiseRecoverable(
                              e.start,
                              "Argument name clash"
                            ),
                          (r[e.name] = !0)),
                        0 !== t &&
                          5 !== t &&
                          this.declareName(e.name, t, e.start);
                      break;
                    case "ChainExpression":
                      this.raiseRecoverable(
                        e.start,
                        "Optional chaining cannot appear in left-hand side"
                      );
                      break;
                    case "MemberExpression":
                      t &&
                        this.raiseRecoverable(
                          e.start,
                          "Binding member expression"
                        );
                      break;
                    case "ObjectPattern":
                      for (var n = 0, i = e.properties; n < i.length; n += 1) {
                        var s = i[n];
                        this.checkLVal(s, t, r);
                      }
                      break;
                    case "Property":
                      this.checkLVal(e.value, t, r);
                      break;
                    case "ArrayPattern":
                      for (var a = 0, o = e.elements; a < o.length; a += 1) {
                        var u = o[a];
                        u && this.checkLVal(u, t, r);
                      }
                      break;
                    case "AssignmentPattern":
                      this.checkLVal(e.left, t, r);
                      break;
                    case "RestElement":
                      this.checkLVal(e.argument, t, r);
                      break;
                    case "ParenthesizedExpression":
                      this.checkLVal(e.expression, t, r);
                      break;
                    default:
                      this.raise(
                        e.start,
                        (t ? "Binding" : "Assigning to") + " rvalue"
                      );
                  }
                });
              var ee = G.prototype;
              (ee.checkPropClash = function (e, t, r) {
                if (
                  !(
                    (this.options.ecmaVersion >= 9 &&
                      "SpreadElement" === e.type) ||
                    (this.options.ecmaVersion >= 6 &&
                      (e.computed || e.method || e.shorthand))
                  )
                ) {
                  var n,
                    i = e.key;
                  switch (i.type) {
                    case "Identifier":
                      n = i.name;
                      break;
                    case "Literal":
                      n = String(i.value);
                      break;
                    default:
                      return;
                  }
                  var s = e.kind;
                  if (this.options.ecmaVersion >= 6)
                    "__proto__" === n &&
                      "init" === s &&
                      (t.proto &&
                        (r
                          ? r.doubleProto < 0 && (r.doubleProto = i.start)
                          : this.raiseRecoverable(
                              i.start,
                              "Redefinition of __proto__ property"
                            )),
                      (t.proto = !0));
                  else {
                    var a = t[(n = "$" + n)];
                    if (a)
                      ("init" === s
                        ? (this.strict && a.init) || a.get || a.set
                        : a.init || a[s]) &&
                        this.raiseRecoverable(
                          i.start,
                          "Redefinition of property"
                        );
                    else a = t[n] = { init: !1, get: !1, set: !1 };
                    a[s] = !0;
                  }
                }
              }),
                (ee.parseExpression = function (e, t) {
                  var r = this.start,
                    n = this.startLoc,
                    i = this.parseMaybeAssign(e, t);
                  if (this.type === T.comma) {
                    var s = this.startNodeAt(r, n);
                    for (s.expressions = [i]; this.eat(T.comma); )
                      s.expressions.push(this.parseMaybeAssign(e, t));
                    return this.finishNode(s, "SequenceExpression");
                  }
                  return i;
                }),
                (ee.parseMaybeAssign = function (e, t, r) {
                  if (this.isContextual("yield")) {
                    if (this.inGenerator) return this.parseYield(e);
                    this.exprAllowed = !1;
                  }
                  var n = !1,
                    i = -1,
                    s = -1;
                  t
                    ? ((i = t.parenthesizedAssign),
                      (s = t.trailingComma),
                      (t.parenthesizedAssign = t.trailingComma = -1))
                    : ((t = new j()), (n = !0));
                  var a = this.start,
                    o = this.startLoc;
                  (this.type !== T.parenL && this.type !== T.name) ||
                    (this.potentialArrowAt = this.start);
                  var u = this.parseMaybeConditional(e, t);
                  if ((r && (u = r.call(this, u, a, o)), this.type.isAssign)) {
                    var l = this.startNodeAt(a, o);
                    return (
                      (l.operator = this.value),
                      (l.left =
                        this.type === T.eq ? this.toAssignable(u, !1, t) : u),
                      n ||
                        (t.parenthesizedAssign =
                          t.trailingComma =
                          t.doubleProto =
                            -1),
                      t.shorthandAssign >= l.left.start &&
                        (t.shorthandAssign = -1),
                      this.checkLVal(u),
                      this.next(),
                      (l.right = this.parseMaybeAssign(e)),
                      this.finishNode(l, "AssignmentExpression")
                    );
                  }
                  return (
                    n && this.checkExpressionErrors(t, !0),
                    i > -1 && (t.parenthesizedAssign = i),
                    s > -1 && (t.trailingComma = s),
                    u
                  );
                }),
                (ee.parseMaybeConditional = function (e, t) {
                  var r = this.start,
                    n = this.startLoc,
                    i = this.parseExprOps(e, t);
                  if (this.checkExpressionErrors(t)) return i;
                  if (this.eat(T.question)) {
                    var s = this.startNodeAt(r, n);
                    return (
                      (s.test = i),
                      (s.consequent = this.parseMaybeAssign()),
                      this.expect(T.colon),
                      (s.alternate = this.parseMaybeAssign(e)),
                      this.finishNode(s, "ConditionalExpression")
                    );
                  }
                  return i;
                }),
                (ee.parseExprOps = function (e, t) {
                  var r = this.start,
                    n = this.startLoc,
                    i = this.parseMaybeUnary(t, !1);
                  return this.checkExpressionErrors(t)
                    ? i
                    : i.start === r && "ArrowFunctionExpression" === i.type
                    ? i
                    : this.parseExprOp(i, r, n, -1, e);
                }),
                (ee.parseExprOp = function (e, t, r, n, i) {
                  var s = this.type.binop;
                  if (null != s && (!i || this.type !== T._in) && s > n) {
                    var a =
                        this.type === T.logicalOR || this.type === T.logicalAND,
                      o = this.type === T.coalesce;
                    o && (s = T.logicalAND.binop);
                    var u = this.value;
                    this.next();
                    var l = this.start,
                      h = this.startLoc,
                      c = this.parseExprOp(
                        this.parseMaybeUnary(null, !1),
                        l,
                        h,
                        s,
                        i
                      ),
                      p = this.buildBinary(t, r, e, c, u, a || o);
                    return (
                      ((a && this.type === T.coalesce) ||
                        (o &&
                          (this.type === T.logicalOR ||
                            this.type === T.logicalAND))) &&
                        this.raiseRecoverable(
                          this.start,
                          "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"
                        ),
                      this.parseExprOp(p, t, r, n, i)
                    );
                  }
                  return e;
                }),
                (ee.buildBinary = function (e, t, r, n, i, s) {
                  var a = this.startNodeAt(e, t);
                  return (
                    (a.left = r),
                    (a.operator = i),
                    (a.right = n),
                    this.finishNode(
                      a,
                      s ? "LogicalExpression" : "BinaryExpression"
                    )
                  );
                }),
                (ee.parseMaybeUnary = function (e, t) {
                  var r,
                    n = this.start,
                    i = this.startLoc;
                  if (
                    this.isContextual("await") &&
                    (this.inAsync ||
                      (!this.inFunction &&
                        this.options.allowAwaitOutsideFunction))
                  )
                    (r = this.parseAwait()), (t = !0);
                  else if (this.type.prefix) {
                    var s = this.startNode(),
                      a = this.type === T.incDec;
                    (s.operator = this.value),
                      (s.prefix = !0),
                      this.next(),
                      (s.argument = this.parseMaybeUnary(null, !0)),
                      this.checkExpressionErrors(e, !0),
                      a
                        ? this.checkLVal(s.argument)
                        : this.strict &&
                          "delete" === s.operator &&
                          "Identifier" === s.argument.type
                        ? this.raiseRecoverable(
                            s.start,
                            "Deleting local variable in strict mode"
                          )
                        : (t = !0),
                      (r = this.finishNode(
                        s,
                        a ? "UpdateExpression" : "UnaryExpression"
                      ));
                  } else {
                    if (
                      ((r = this.parseExprSubscripts(e)),
                      this.checkExpressionErrors(e))
                    )
                      return r;
                    for (; this.type.postfix && !this.canInsertSemicolon(); ) {
                      var o = this.startNodeAt(n, i);
                      (o.operator = this.value),
                        (o.prefix = !1),
                        (o.argument = r),
                        this.checkLVal(r),
                        this.next(),
                        (r = this.finishNode(o, "UpdateExpression"));
                    }
                  }
                  return !t && this.eat(T.starstar)
                    ? this.buildBinary(
                        n,
                        i,
                        r,
                        this.parseMaybeUnary(null, !1),
                        "**",
                        !1
                      )
                    : r;
                }),
                (ee.parseExprSubscripts = function (e) {
                  var t = this.start,
                    r = this.startLoc,
                    n = this.parseExprAtom(e);
                  if (
                    "ArrowFunctionExpression" === n.type &&
                    ")" !== this.input.slice(this.lastTokStart, this.lastTokEnd)
                  )
                    return n;
                  var i = this.parseSubscripts(n, t, r);
                  return (
                    e &&
                      "MemberExpression" === i.type &&
                      (e.parenthesizedAssign >= i.start &&
                        (e.parenthesizedAssign = -1),
                      e.parenthesizedBind >= i.start &&
                        (e.parenthesizedBind = -1)),
                    i
                  );
                }),
                (ee.parseSubscripts = function (e, t, r, n) {
                  for (
                    var i =
                        this.options.ecmaVersion >= 8 &&
                        "Identifier" === e.type &&
                        "async" === e.name &&
                        this.lastTokEnd === e.end &&
                        !this.canInsertSemicolon() &&
                        e.end - e.start == 5 &&
                        this.potentialArrowAt === e.start,
                      s = !1;
                    ;

                  ) {
                    var a = this.parseSubscript(e, t, r, n, i, s);
                    if (
                      (a.optional && (s = !0),
                      a === e || "ArrowFunctionExpression" === a.type)
                    ) {
                      if (s) {
                        var o = this.startNodeAt(t, r);
                        (o.expression = a),
                          (a = this.finishNode(o, "ChainExpression"));
                      }
                      return a;
                    }
                    e = a;
                  }
                }),
                (ee.parseSubscript = function (e, t, r, n, i, s) {
                  var a = this.options.ecmaVersion >= 11,
                    o = a && this.eat(T.questionDot);
                  n &&
                    o &&
                    this.raise(
                      this.lastTokStart,
                      "Optional chaining cannot appear in the callee of new expressions"
                    );
                  var u = this.eat(T.bracketL);
                  if (
                    u ||
                    (o &&
                      this.type !== T.parenL &&
                      this.type !== T.backQuote) ||
                    this.eat(T.dot)
                  ) {
                    var l = this.startNodeAt(t, r);
                    (l.object = e),
                      (l.property = u
                        ? this.parseExpression()
                        : this.parseIdent(
                            "never" !== this.options.allowReserved
                          )),
                      (l.computed = !!u),
                      u && this.expect(T.bracketR),
                      a && (l.optional = o),
                      (e = this.finishNode(l, "MemberExpression"));
                  } else if (!n && this.eat(T.parenL)) {
                    var h = new j(),
                      c = this.yieldPos,
                      p = this.awaitPos,
                      d = this.awaitIdentPos;
                    (this.yieldPos = 0),
                      (this.awaitPos = 0),
                      (this.awaitIdentPos = 0);
                    var m = this.parseExprList(
                      T.parenR,
                      this.options.ecmaVersion >= 8,
                      !1,
                      h
                    );
                    if (
                      i &&
                      !o &&
                      !this.canInsertSemicolon() &&
                      this.eat(T.arrow)
                    )
                      return (
                        this.checkPatternErrors(h, !1),
                        this.checkYieldAwaitInDefaultParams(),
                        this.awaitIdentPos > 0 &&
                          this.raise(
                            this.awaitIdentPos,
                            "Cannot use 'await' as identifier inside an async function"
                          ),
                        (this.yieldPos = c),
                        (this.awaitPos = p),
                        (this.awaitIdentPos = d),
                        this.parseArrowExpression(this.startNodeAt(t, r), m, !0)
                      );
                    this.checkExpressionErrors(h, !0),
                      (this.yieldPos = c || this.yieldPos),
                      (this.awaitPos = p || this.awaitPos),
                      (this.awaitIdentPos = d || this.awaitIdentPos);
                    var f = this.startNodeAt(t, r);
                    (f.callee = e),
                      (f.arguments = m),
                      a && (f.optional = o),
                      (e = this.finishNode(f, "CallExpression"));
                  } else if (this.type === T.backQuote) {
                    (o || s) &&
                      this.raise(
                        this.start,
                        "Optional chaining cannot appear in the tag of tagged template expressions"
                      );
                    var g = this.startNodeAt(t, r);
                    (g.tag = e),
                      (g.quasi = this.parseTemplate({ isTagged: !0 })),
                      (e = this.finishNode(g, "TaggedTemplateExpression"));
                  }
                  return e;
                }),
                (ee.parseExprAtom = function (e) {
                  this.type === T.slash && this.readRegexp();
                  var t,
                    r = this.potentialArrowAt === this.start;
                  switch (this.type) {
                    case T._super:
                      return (
                        this.allowSuper ||
                          this.raise(
                            this.start,
                            "'super' keyword outside a method"
                          ),
                        (t = this.startNode()),
                        this.next(),
                        this.type !== T.parenL ||
                          this.allowDirectSuper ||
                          this.raise(
                            t.start,
                            "super() call outside constructor of a subclass"
                          ),
                        this.type !== T.dot &&
                          this.type !== T.bracketL &&
                          this.type !== T.parenL &&
                          this.unexpected(),
                        this.finishNode(t, "Super")
                      );
                    case T._this:
                      return (
                        (t = this.startNode()),
                        this.next(),
                        this.finishNode(t, "ThisExpression")
                      );
                    case T.name:
                      var n = this.start,
                        i = this.startLoc,
                        s = this.containsEsc,
                        a = this.parseIdent(!1);
                      if (
                        this.options.ecmaVersion >= 8 &&
                        !s &&
                        "async" === a.name &&
                        !this.canInsertSemicolon() &&
                        this.eat(T._function)
                      )
                        return this.parseFunction(
                          this.startNodeAt(n, i),
                          0,
                          !1,
                          !0
                        );
                      if (r && !this.canInsertSemicolon()) {
                        if (this.eat(T.arrow))
                          return this.parseArrowExpression(
                            this.startNodeAt(n, i),
                            [a],
                            !1
                          );
                        if (
                          this.options.ecmaVersion >= 8 &&
                          "async" === a.name &&
                          this.type === T.name &&
                          !s
                        )
                          return (
                            (a = this.parseIdent(!1)),
                            (!this.canInsertSemicolon() && this.eat(T.arrow)) ||
                              this.unexpected(),
                            this.parseArrowExpression(
                              this.startNodeAt(n, i),
                              [a],
                              !0
                            )
                          );
                      }
                      return a;
                    case T.regexp:
                      var o = this.value;
                      return (
                        ((t = this.parseLiteral(o.value)).regex = {
                          pattern: o.pattern,
                          flags: o.flags,
                        }),
                        t
                      );
                    case T.num:
                    case T.string:
                      return this.parseLiteral(this.value);
                    case T._null:
                    case T._true:
                    case T._false:
                      return (
                        ((t = this.startNode()).value =
                          this.type === T._null ? null : this.type === T._true),
                        (t.raw = this.type.keyword),
                        this.next(),
                        this.finishNode(t, "Literal")
                      );
                    case T.parenL:
                      var u = this.start,
                        l = this.parseParenAndDistinguishExpression(r);
                      return (
                        e &&
                          (e.parenthesizedAssign < 0 &&
                            !this.isSimpleAssignTarget(l) &&
                            (e.parenthesizedAssign = u),
                          e.parenthesizedBind < 0 && (e.parenthesizedBind = u)),
                        l
                      );
                    case T.bracketL:
                      return (
                        (t = this.startNode()),
                        this.next(),
                        (t.elements = this.parseExprList(
                          T.bracketR,
                          !0,
                          !0,
                          e
                        )),
                        this.finishNode(t, "ArrayExpression")
                      );
                    case T.braceL:
                      return this.parseObj(!1, e);
                    case T._function:
                      return (
                        (t = this.startNode()),
                        this.next(),
                        this.parseFunction(t, 0)
                      );
                    case T._class:
                      return this.parseClass(this.startNode(), !1);
                    case T._new:
                      return this.parseNew();
                    case T.backQuote:
                      return this.parseTemplate();
                    case T._import:
                      return this.options.ecmaVersion >= 11
                        ? this.parseExprImport()
                        : this.unexpected();
                    default:
                      this.unexpected();
                  }
                }),
                (ee.parseExprImport = function () {
                  var e = this.startNode();
                  this.containsEsc &&
                    this.raiseRecoverable(
                      this.start,
                      "Escape sequence in keyword import"
                    );
                  var t = this.parseIdent(!0);
                  switch (this.type) {
                    case T.parenL:
                      return this.parseDynamicImport(e);
                    case T.dot:
                      return (e.meta = t), this.parseImportMeta(e);
                    default:
                      this.unexpected();
                  }
                }),
                (ee.parseDynamicImport = function (e) {
                  if (
                    (this.next(),
                    (e.source = this.parseMaybeAssign()),
                    !this.eat(T.parenR))
                  ) {
                    var t = this.start;
                    this.eat(T.comma) && this.eat(T.parenR)
                      ? this.raiseRecoverable(
                          t,
                          "Trailing comma is not allowed in import()"
                        )
                      : this.unexpected(t);
                  }
                  return this.finishNode(e, "ImportExpression");
                }),
                (ee.parseImportMeta = function (e) {
                  this.next();
                  var t = this.containsEsc;
                  return (
                    (e.property = this.parseIdent(!0)),
                    "meta" !== e.property.name &&
                      this.raiseRecoverable(
                        e.property.start,
                        "The only valid meta property for import is 'import.meta'"
                      ),
                    t &&
                      this.raiseRecoverable(
                        e.start,
                        "'import.meta' must not contain escaped characters"
                      ),
                    "module" !== this.options.sourceType &&
                      this.raiseRecoverable(
                        e.start,
                        "Cannot use 'import.meta' outside a module"
                      ),
                    this.finishNode(e, "MetaProperty")
                  );
                }),
                (ee.parseLiteral = function (e) {
                  var t = this.startNode();
                  return (
                    (t.value = e),
                    (t.raw = this.input.slice(this.start, this.end)),
                    110 === t.raw.charCodeAt(t.raw.length - 1) &&
                      (t.bigint = t.raw.slice(0, -1).replace(/_/g, "")),
                    this.next(),
                    this.finishNode(t, "Literal")
                  );
                }),
                (ee.parseParenExpression = function () {
                  this.expect(T.parenL);
                  var e = this.parseExpression();
                  return this.expect(T.parenR), e;
                }),
                (ee.parseParenAndDistinguishExpression = function (e) {
                  var t,
                    r = this.start,
                    n = this.startLoc,
                    i = this.options.ecmaVersion >= 8;
                  if (this.options.ecmaVersion >= 6) {
                    this.next();
                    var s,
                      a = this.start,
                      o = this.startLoc,
                      u = [],
                      l = !0,
                      h = !1,
                      c = new j(),
                      p = this.yieldPos,
                      d = this.awaitPos;
                    for (
                      this.yieldPos = 0, this.awaitPos = 0;
                      this.type !== T.parenR;

                    ) {
                      if (
                        (l ? (l = !1) : this.expect(T.comma),
                        i && this.afterTrailingComma(T.parenR, !0))
                      ) {
                        h = !0;
                        break;
                      }
                      if (this.type === T.ellipsis) {
                        (s = this.start),
                          u.push(this.parseParenItem(this.parseRestBinding())),
                          this.type === T.comma &&
                            this.raise(
                              this.start,
                              "Comma is not permitted after the rest element"
                            );
                        break;
                      }
                      u.push(this.parseMaybeAssign(!1, c, this.parseParenItem));
                    }
                    var m = this.start,
                      f = this.startLoc;
                    if (
                      (this.expect(T.parenR),
                      e && !this.canInsertSemicolon() && this.eat(T.arrow))
                    )
                      return (
                        this.checkPatternErrors(c, !1),
                        this.checkYieldAwaitInDefaultParams(),
                        (this.yieldPos = p),
                        (this.awaitPos = d),
                        this.parseParenArrowList(r, n, u)
                      );
                    (u.length && !h) || this.unexpected(this.lastTokStart),
                      s && this.unexpected(s),
                      this.checkExpressionErrors(c, !0),
                      (this.yieldPos = p || this.yieldPos),
                      (this.awaitPos = d || this.awaitPos),
                      u.length > 1
                        ? (((t = this.startNodeAt(a, o)).expressions = u),
                          this.finishNodeAt(t, "SequenceExpression", m, f))
                        : (t = u[0]);
                  } else t = this.parseParenExpression();
                  if (this.options.preserveParens) {
                    var g = this.startNodeAt(r, n);
                    return (
                      (g.expression = t),
                      this.finishNode(g, "ParenthesizedExpression")
                    );
                  }
                  return t;
                }),
                (ee.parseParenItem = function (e) {
                  return e;
                }),
                (ee.parseParenArrowList = function (e, t, r) {
                  return this.parseArrowExpression(this.startNodeAt(e, t), r);
                });
              var te = [];
              (ee.parseNew = function () {
                this.containsEsc &&
                  this.raiseRecoverable(
                    this.start,
                    "Escape sequence in keyword new"
                  );
                var e = this.startNode(),
                  t = this.parseIdent(!0);
                if (this.options.ecmaVersion >= 6 && this.eat(T.dot)) {
                  e.meta = t;
                  var r = this.containsEsc;
                  return (
                    (e.property = this.parseIdent(!0)),
                    "target" !== e.property.name &&
                      this.raiseRecoverable(
                        e.property.start,
                        "The only valid meta property for new is 'new.target'"
                      ),
                    r &&
                      this.raiseRecoverable(
                        e.start,
                        "'new.target' must not contain escaped characters"
                      ),
                    this.inNonArrowFunction() ||
                      this.raiseRecoverable(
                        e.start,
                        "'new.target' can only be used in functions"
                      ),
                    this.finishNode(e, "MetaProperty")
                  );
                }
                var n = this.start,
                  i = this.startLoc,
                  s = this.type === T._import;
                return (
                  (e.callee = this.parseSubscripts(
                    this.parseExprAtom(),
                    n,
                    i,
                    !0
                  )),
                  s &&
                    "ImportExpression" === e.callee.type &&
                    this.raise(n, "Cannot use new with import()"),
                  this.eat(T.parenL)
                    ? (e.arguments = this.parseExprList(
                        T.parenR,
                        this.options.ecmaVersion >= 8,
                        !1
                      ))
                    : (e.arguments = te),
                  this.finishNode(e, "NewExpression")
                );
              }),
                (ee.parseTemplateElement = function (e) {
                  var t = e.isTagged,
                    r = this.startNode();
                  return (
                    this.type === T.invalidTemplate
                      ? (t ||
                          this.raiseRecoverable(
                            this.start,
                            "Bad escape sequence in untagged template literal"
                          ),
                        (r.value = { raw: this.value, cooked: null }))
                      : (r.value = {
                          raw: this.input
                            .slice(this.start, this.end)
                            .replace(/\r\n?/g, "\n"),
                          cooked: this.value,
                        }),
                    this.next(),
                    (r.tail = this.type === T.backQuote),
                    this.finishNode(r, "TemplateElement")
                  );
                }),
                (ee.parseTemplate = function (e) {
                  void 0 === e && (e = {});
                  var t = e.isTagged;
                  void 0 === t && (t = !1);
                  var r = this.startNode();
                  this.next(), (r.expressions = []);
                  var n = this.parseTemplateElement({ isTagged: t });
                  for (r.quasis = [n]; !n.tail; )
                    this.type === T.eof &&
                      this.raise(this.pos, "Unterminated template literal"),
                      this.expect(T.dollarBraceL),
                      r.expressions.push(this.parseExpression()),
                      this.expect(T.braceR),
                      r.quasis.push(
                        (n = this.parseTemplateElement({ isTagged: t }))
                      );
                  return this.next(), this.finishNode(r, "TemplateLiteral");
                }),
                (ee.isAsyncProp = function (e) {
                  return (
                    !e.computed &&
                    "Identifier" === e.key.type &&
                    "async" === e.key.name &&
                    (this.type === T.name ||
                      this.type === T.num ||
                      this.type === T.string ||
                      this.type === T.bracketL ||
                      this.type.keyword ||
                      (this.options.ecmaVersion >= 9 &&
                        this.type === T.star)) &&
                    !v.test(this.input.slice(this.lastTokEnd, this.start))
                  );
                }),
                (ee.parseObj = function (e, t) {
                  var r = this.startNode(),
                    n = !0,
                    i = {};
                  for (r.properties = [], this.next(); !this.eat(T.braceR); ) {
                    if (n) n = !1;
                    else if (
                      (this.expect(T.comma),
                      this.options.ecmaVersion >= 5 &&
                        this.afterTrailingComma(T.braceR))
                    )
                      break;
                    var s = this.parseProperty(e, t);
                    e || this.checkPropClash(s, i, t), r.properties.push(s);
                  }
                  return this.finishNode(
                    r,
                    e ? "ObjectPattern" : "ObjectExpression"
                  );
                }),
                (ee.parseProperty = function (e, t) {
                  var r,
                    n,
                    i,
                    s,
                    a = this.startNode();
                  if (this.options.ecmaVersion >= 9 && this.eat(T.ellipsis))
                    return e
                      ? ((a.argument = this.parseIdent(!1)),
                        this.type === T.comma &&
                          this.raise(
                            this.start,
                            "Comma is not permitted after the rest element"
                          ),
                        this.finishNode(a, "RestElement"))
                      : (this.type === T.parenL &&
                          t &&
                          (t.parenthesizedAssign < 0 &&
                            (t.parenthesizedAssign = this.start),
                          t.parenthesizedBind < 0 &&
                            (t.parenthesizedBind = this.start)),
                        (a.argument = this.parseMaybeAssign(!1, t)),
                        this.type === T.comma &&
                          t &&
                          t.trailingComma < 0 &&
                          (t.trailingComma = this.start),
                        this.finishNode(a, "SpreadElement"));
                  this.options.ecmaVersion >= 6 &&
                    ((a.method = !1),
                    (a.shorthand = !1),
                    (e || t) && ((i = this.start), (s = this.startLoc)),
                    e || (r = this.eat(T.star)));
                  var o = this.containsEsc;
                  return (
                    this.parsePropertyName(a),
                    !e &&
                    !o &&
                    this.options.ecmaVersion >= 8 &&
                    !r &&
                    this.isAsyncProp(a)
                      ? ((n = !0),
                        (r = this.options.ecmaVersion >= 9 && this.eat(T.star)),
                        this.parsePropertyName(a, t))
                      : (n = !1),
                    this.parsePropertyValue(a, e, r, n, i, s, t, o),
                    this.finishNode(a, "Property")
                  );
                }),
                (ee.parsePropertyValue = function (e, t, r, n, i, s, a, o) {
                  if (
                    ((r || n) && this.type === T.colon && this.unexpected(),
                    this.eat(T.colon))
                  )
                    (e.value = t
                      ? this.parseMaybeDefault(this.start, this.startLoc)
                      : this.parseMaybeAssign(!1, a)),
                      (e.kind = "init");
                  else if (
                    this.options.ecmaVersion >= 6 &&
                    this.type === T.parenL
                  )
                    t && this.unexpected(),
                      (e.kind = "init"),
                      (e.method = !0),
                      (e.value = this.parseMethod(r, n));
                  else if (
                    t ||
                    o ||
                    !(this.options.ecmaVersion >= 5) ||
                    e.computed ||
                    "Identifier" !== e.key.type ||
                    ("get" !== e.key.name && "set" !== e.key.name) ||
                    this.type === T.comma ||
                    this.type === T.braceR ||
                    this.type === T.eq
                  )
                    this.options.ecmaVersion >= 6 &&
                    !e.computed &&
                    "Identifier" === e.key.type
                      ? ((r || n) && this.unexpected(),
                        this.checkUnreserved(e.key),
                        "await" !== e.key.name ||
                          this.awaitIdentPos ||
                          (this.awaitIdentPos = i),
                        (e.kind = "init"),
                        t
                          ? (e.value = this.parseMaybeDefault(i, s, e.key))
                          : this.type === T.eq && a
                          ? (a.shorthandAssign < 0 &&
                              (a.shorthandAssign = this.start),
                            (e.value = this.parseMaybeDefault(i, s, e.key)))
                          : (e.value = e.key),
                        (e.shorthand = !0))
                      : this.unexpected();
                  else {
                    (r || n) && this.unexpected(),
                      (e.kind = e.key.name),
                      this.parsePropertyName(e),
                      (e.value = this.parseMethod(!1));
                    var u = "get" === e.kind ? 0 : 1;
                    if (e.value.params.length !== u) {
                      var l = e.value.start;
                      "get" === e.kind
                        ? this.raiseRecoverable(
                            l,
                            "getter should have no params"
                          )
                        : this.raiseRecoverable(
                            l,
                            "setter should have exactly one param"
                          );
                    } else
                      "set" === e.kind &&
                        "RestElement" === e.value.params[0].type &&
                        this.raiseRecoverable(
                          e.value.params[0].start,
                          "Setter cannot use rest params"
                        );
                  }
                }),
                (ee.parsePropertyName = function (e) {
                  if (this.options.ecmaVersion >= 6) {
                    if (this.eat(T.bracketL))
                      return (
                        (e.computed = !0),
                        (e.key = this.parseMaybeAssign()),
                        this.expect(T.bracketR),
                        e.key
                      );
                    e.computed = !1;
                  }
                  return (e.key =
                    this.type === T.num || this.type === T.string
                      ? this.parseExprAtom()
                      : this.parseIdent(
                          "never" !== this.options.allowReserved
                        ));
                }),
                (ee.initFunction = function (e) {
                  (e.id = null),
                    this.options.ecmaVersion >= 6 &&
                      (e.generator = e.expression = !1),
                    this.options.ecmaVersion >= 8 && (e.async = !1);
                }),
                (ee.parseMethod = function (e, t, r) {
                  var n = this.startNode(),
                    i = this.yieldPos,
                    s = this.awaitPos,
                    a = this.awaitIdentPos;
                  return (
                    this.initFunction(n),
                    this.options.ecmaVersion >= 6 && (n.generator = e),
                    this.options.ecmaVersion >= 8 && (n.async = !!t),
                    (this.yieldPos = 0),
                    (this.awaitPos = 0),
                    (this.awaitIdentPos = 0),
                    this.enterScope(64 | K(t, n.generator) | (r ? 128 : 0)),
                    this.expect(T.parenL),
                    (n.params = this.parseBindingList(
                      T.parenR,
                      !1,
                      this.options.ecmaVersion >= 8
                    )),
                    this.checkYieldAwaitInDefaultParams(),
                    this.parseFunctionBody(n, !1, !0),
                    (this.yieldPos = i),
                    (this.awaitPos = s),
                    (this.awaitIdentPos = a),
                    this.finishNode(n, "FunctionExpression")
                  );
                }),
                (ee.parseArrowExpression = function (e, t, r) {
                  var n = this.yieldPos,
                    i = this.awaitPos,
                    s = this.awaitIdentPos;
                  return (
                    this.enterScope(16 | K(r, !1)),
                    this.initFunction(e),
                    this.options.ecmaVersion >= 8 && (e.async = !!r),
                    (this.yieldPos = 0),
                    (this.awaitPos = 0),
                    (this.awaitIdentPos = 0),
                    (e.params = this.toAssignableList(t, !0)),
                    this.parseFunctionBody(e, !0, !1),
                    (this.yieldPos = n),
                    (this.awaitPos = i),
                    (this.awaitIdentPos = s),
                    this.finishNode(e, "ArrowFunctionExpression")
                  );
                }),
                (ee.parseFunctionBody = function (e, t, r) {
                  var n = t && this.type !== T.braceL,
                    i = this.strict,
                    s = !1;
                  if (n)
                    (e.body = this.parseMaybeAssign()),
                      (e.expression = !0),
                      this.checkParams(e, !1);
                  else {
                    var a =
                      this.options.ecmaVersion >= 7 &&
                      !this.isSimpleParamList(e.params);
                    (i && !a) ||
                      ((s = this.strictDirective(this.end)) &&
                        a &&
                        this.raiseRecoverable(
                          e.start,
                          "Illegal 'use strict' directive in function with non-simple parameter list"
                        ));
                    var o = this.labels;
                    (this.labels = []),
                      s && (this.strict = !0),
                      this.checkParams(
                        e,
                        !i && !s && !t && !r && this.isSimpleParamList(e.params)
                      ),
                      this.strict && e.id && this.checkLVal(e.id, 5),
                      (e.body = this.parseBlock(!1, void 0, s && !i)),
                      (e.expression = !1),
                      this.adaptDirectivePrologue(e.body.body),
                      (this.labels = o);
                  }
                  this.exitScope();
                }),
                (ee.isSimpleParamList = function (e) {
                  for (var t = 0, r = e; t < r.length; t += 1) {
                    if ("Identifier" !== r[t].type) return !1;
                  }
                  return !0;
                }),
                (ee.checkParams = function (e, t) {
                  for (var r = {}, n = 0, i = e.params; n < i.length; n += 1) {
                    var s = i[n];
                    this.checkLVal(s, 1, t ? null : r);
                  }
                }),
                (ee.parseExprList = function (e, t, r, n) {
                  for (var i = [], s = !0; !this.eat(e); ) {
                    if (s) s = !1;
                    else if (
                      (this.expect(T.comma), t && this.afterTrailingComma(e))
                    )
                      break;
                    var a = void 0;
                    r && this.type === T.comma
                      ? (a = null)
                      : this.type === T.ellipsis
                      ? ((a = this.parseSpread(n)),
                        n &&
                          this.type === T.comma &&
                          n.trailingComma < 0 &&
                          (n.trailingComma = this.start))
                      : (a = this.parseMaybeAssign(!1, n)),
                      i.push(a);
                  }
                  return i;
                }),
                (ee.checkUnreserved = function (e) {
                  var t = e.start,
                    r = e.end,
                    n = e.name;
                  (this.inGenerator &&
                    "yield" === n &&
                    this.raiseRecoverable(
                      t,
                      "Cannot use 'yield' as identifier inside a generator"
                    ),
                  this.inAsync &&
                    "await" === n &&
                    this.raiseRecoverable(
                      t,
                      "Cannot use 'await' as identifier inside an async function"
                    ),
                  this.keywords.test(n) &&
                    this.raise(t, "Unexpected keyword '" + n + "'"),
                  this.options.ecmaVersion < 6 &&
                    -1 !== this.input.slice(t, r).indexOf("\\")) ||
                    ((this.strict
                      ? this.reservedWordsStrict
                      : this.reservedWords
                    ).test(n) &&
                      (this.inAsync ||
                        "await" !== n ||
                        this.raiseRecoverable(
                          t,
                          "Cannot use keyword 'await' outside an async function"
                        ),
                      this.raiseRecoverable(
                        t,
                        "The keyword '" + n + "' is reserved"
                      )));
                }),
                (ee.parseIdent = function (e, t) {
                  var r = this.startNode();
                  return (
                    this.type === T.name
                      ? (r.name = this.value)
                      : this.type.keyword
                      ? ((r.name = this.type.keyword),
                        ("class" !== r.name && "function" !== r.name) ||
                          (this.lastTokEnd === this.lastTokStart + 1 &&
                            46 === this.input.charCodeAt(this.lastTokStart)) ||
                          this.context.pop())
                      : this.unexpected(),
                    this.next(!!e),
                    this.finishNode(r, "Identifier"),
                    e ||
                      (this.checkUnreserved(r),
                      "await" !== r.name ||
                        this.awaitIdentPos ||
                        (this.awaitIdentPos = r.start)),
                    r
                  );
                }),
                (ee.parseYield = function (e) {
                  this.yieldPos || (this.yieldPos = this.start);
                  var t = this.startNode();
                  return (
                    this.next(),
                    this.type === T.semi ||
                    this.canInsertSemicolon() ||
                    (this.type !== T.star && !this.type.startsExpr)
                      ? ((t.delegate = !1), (t.argument = null))
                      : ((t.delegate = this.eat(T.star)),
                        (t.argument = this.parseMaybeAssign(e))),
                    this.finishNode(t, "YieldExpression")
                  );
                }),
                (ee.parseAwait = function () {
                  this.awaitPos || (this.awaitPos = this.start);
                  var e = this.startNode();
                  return (
                    this.next(),
                    (e.argument = this.parseMaybeUnary(null, !1)),
                    this.finishNode(e, "AwaitExpression")
                  );
                });
              var re = G.prototype;
              (re.raise = function (e, t) {
                var r = F(this.input, e);
                t += " (" + r.line + ":" + r.column + ")";
                var n = new SyntaxError(t);
                throw ((n.pos = e), (n.loc = r), (n.raisedAt = this.pos), n);
              }),
                (re.raiseRecoverable = re.raise),
                (re.curPosition = function () {
                  if (this.options.locations)
                    return new L(this.curLine, this.pos - this.lineStart);
                });
              var ne = G.prototype,
                ie = function (e) {
                  (this.flags = e),
                    (this.var = []),
                    (this.lexical = []),
                    (this.functions = []);
                };
              (ne.enterScope = function (e) {
                this.scopeStack.push(new ie(e));
              }),
                (ne.exitScope = function () {
                  this.scopeStack.pop();
                }),
                (ne.treatFunctionsAsVarInScope = function (e) {
                  return e.flags & M || (!this.inModule && 1 & e.flags);
                }),
                (ne.declareName = function (e, t, r) {
                  var n = !1;
                  if (2 === t) {
                    var i = this.currentScope();
                    (n =
                      i.lexical.indexOf(e) > -1 ||
                      i.functions.indexOf(e) > -1 ||
                      i.var.indexOf(e) > -1),
                      i.lexical.push(e),
                      this.inModule &&
                        1 & i.flags &&
                        delete this.undefinedExports[e];
                  } else if (4 === t) {
                    this.currentScope().lexical.push(e);
                  } else if (3 === t) {
                    var s = this.currentScope();
                    (n = this.treatFunctionsAsVar
                      ? s.lexical.indexOf(e) > -1
                      : s.lexical.indexOf(e) > -1 || s.var.indexOf(e) > -1),
                      s.functions.push(e);
                  } else
                    for (var a = this.scopeStack.length - 1; a >= 0; --a) {
                      var o = this.scopeStack[a];
                      if (
                        (o.lexical.indexOf(e) > -1 &&
                          !(32 & o.flags && o.lexical[0] === e)) ||
                        (!this.treatFunctionsAsVarInScope(o) &&
                          o.functions.indexOf(e) > -1)
                      ) {
                        n = !0;
                        break;
                      }
                      if (
                        (o.var.push(e),
                        this.inModule &&
                          1 & o.flags &&
                          delete this.undefinedExports[e],
                        o.flags & O)
                      )
                        break;
                    }
                  n &&
                    this.raiseRecoverable(
                      r,
                      "Identifier '" + e + "' has already been declared"
                    );
                }),
                (ne.checkLocalExport = function (e) {
                  -1 === this.scopeStack[0].lexical.indexOf(e.name) &&
                    -1 === this.scopeStack[0].var.indexOf(e.name) &&
                    (this.undefinedExports[e.name] = e);
                }),
                (ne.currentScope = function () {
                  return this.scopeStack[this.scopeStack.length - 1];
                }),
                (ne.currentVarScope = function () {
                  for (var e = this.scopeStack.length - 1; ; e--) {
                    var t = this.scopeStack[e];
                    if (t.flags & O) return t;
                  }
                }),
                (ne.currentThisScope = function () {
                  for (var e = this.scopeStack.length - 1; ; e--) {
                    var t = this.scopeStack[e];
                    if (t.flags & O && !(16 & t.flags)) return t;
                  }
                });
              var se = function (e, t, r) {
                  (this.type = ""),
                    (this.start = t),
                    (this.end = 0),
                    e.options.locations && (this.loc = new R(e, r)),
                    e.options.directSourceFile &&
                      (this.sourceFile = e.options.directSourceFile),
                    e.options.ranges && (this.range = [t, 0]);
                },
                ae = G.prototype;
              function oe(e, t, r, n) {
                return (
                  (e.type = t),
                  (e.end = r),
                  this.options.locations && (e.loc.end = n),
                  this.options.ranges && (e.range[1] = r),
                  e
                );
              }
              (ae.startNode = function () {
                return new se(this, this.start, this.startLoc);
              }),
                (ae.startNodeAt = function (e, t) {
                  return new se(this, e, t);
                }),
                (ae.finishNode = function (e, t) {
                  return oe.call(
                    this,
                    e,
                    t,
                    this.lastTokEnd,
                    this.lastTokEndLoc
                  );
                }),
                (ae.finishNodeAt = function (e, t, r, n) {
                  return oe.call(this, e, t, r, n);
                });
              var ue = function (e, t, r, n, i) {
                  (this.token = e),
                    (this.isExpr = !!t),
                    (this.preserveSpace = !!r),
                    (this.override = n),
                    (this.generator = !!i);
                },
                le = {
                  b_stat: new ue("{", !1),
                  b_expr: new ue("{", !0),
                  b_tmpl: new ue("${", !1),
                  p_stat: new ue("(", !1),
                  p_expr: new ue("(", !0),
                  q_tmpl: new ue("`", !0, !0, function (e) {
                    return e.tryReadTemplateToken();
                  }),
                  f_stat: new ue("function", !1),
                  f_expr: new ue("function", !0),
                  f_expr_gen: new ue("function", !0, !1, null, !0),
                  f_gen: new ue("function", !1, !1, null, !0),
                },
                he = G.prototype;
              (he.initialContext = function () {
                return [le.b_stat];
              }),
                (he.braceIsBlock = function (e) {
                  var t = this.curContext();
                  return (
                    t === le.f_expr ||
                    t === le.f_stat ||
                    (e !== T.colon || (t !== le.b_stat && t !== le.b_expr)
                      ? e === T._return || (e === T.name && this.exprAllowed)
                        ? v.test(this.input.slice(this.lastTokEnd, this.start))
                        : e === T._else ||
                          e === T.semi ||
                          e === T.eof ||
                          e === T.parenR ||
                          e === T.arrow ||
                          (e === T.braceL
                            ? t === le.b_stat
                            : e !== T._var &&
                              e !== T._const &&
                              e !== T.name &&
                              !this.exprAllowed)
                      : !t.isExpr)
                  );
                }),
                (he.inGeneratorContext = function () {
                  for (var e = this.context.length - 1; e >= 1; e--) {
                    var t = this.context[e];
                    if ("function" === t.token) return t.generator;
                  }
                  return !1;
                }),
                (he.updateContext = function (e) {
                  var t,
                    r = this.type;
                  r.keyword && e === T.dot
                    ? (this.exprAllowed = !1)
                    : (t = r.updateContext)
                    ? t.call(this, e)
                    : (this.exprAllowed = r.beforeExpr);
                }),
                (T.parenR.updateContext = T.braceR.updateContext =
                  function () {
                    if (1 !== this.context.length) {
                      var e = this.context.pop();
                      e === le.b_stat &&
                        "function" === this.curContext().token &&
                        (e = this.context.pop()),
                        (this.exprAllowed = !e.isExpr);
                    } else this.exprAllowed = !0;
                  }),
                (T.braceL.updateContext = function (e) {
                  this.context.push(
                    this.braceIsBlock(e) ? le.b_stat : le.b_expr
                  ),
                    (this.exprAllowed = !0);
                }),
                (T.dollarBraceL.updateContext = function () {
                  this.context.push(le.b_tmpl), (this.exprAllowed = !0);
                }),
                (T.parenL.updateContext = function (e) {
                  var t =
                    e === T._if ||
                    e === T._for ||
                    e === T._with ||
                    e === T._while;
                  this.context.push(t ? le.p_stat : le.p_expr),
                    (this.exprAllowed = !0);
                }),
                (T.incDec.updateContext = function () {}),
                (T._function.updateContext = T._class.updateContext =
                  function (e) {
                    !e.beforeExpr ||
                    e === T.semi ||
                    e === T._else ||
                    (e === T._return &&
                      v.test(this.input.slice(this.lastTokEnd, this.start))) ||
                    ((e === T.colon || e === T.braceL) &&
                      this.curContext() === le.b_stat)
                      ? this.context.push(le.f_stat)
                      : this.context.push(le.f_expr),
                      (this.exprAllowed = !1);
                  }),
                (T.backQuote.updateContext = function () {
                  this.curContext() === le.q_tmpl
                    ? this.context.pop()
                    : this.context.push(le.q_tmpl),
                    (this.exprAllowed = !1);
                }),
                (T.star.updateContext = function (e) {
                  if (e === T._function) {
                    var t = this.context.length - 1;
                    this.context[t] === le.f_expr
                      ? (this.context[t] = le.f_expr_gen)
                      : (this.context[t] = le.f_gen);
                  }
                  this.exprAllowed = !0;
                }),
                (T.name.updateContext = function (e) {
                  var t = !1;
                  this.options.ecmaVersion >= 6 &&
                    e !== T.dot &&
                    (("of" === this.value && !this.exprAllowed) ||
                      ("yield" === this.value && this.inGeneratorContext())) &&
                    (t = !0),
                    (this.exprAllowed = t);
                });
              var ce =
                  "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",
                pe = ce + " Extended_Pictographic",
                de = {
                  9: ce,
                  10: pe,
                  11: "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS Extended_Pictographic",
                },
                me =
                  "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu",
                fe =
                  "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",
                ge =
                  fe +
                  " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd",
                xe = {
                  9: fe,
                  10: ge,
                  11: "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho",
                },
                ye = {};
              function be(e) {
                var t = (ye[e] = {
                  binary: $(de[e] + " " + me),
                  nonBinary: { General_Category: $(me), Script: $(xe[e]) },
                });
                (t.nonBinary.Script_Extensions = t.nonBinary.Script),
                  (t.nonBinary.gc = t.nonBinary.General_Category),
                  (t.nonBinary.sc = t.nonBinary.Script),
                  (t.nonBinary.scx = t.nonBinary.Script_Extensions);
              }
              be(9), be(10), be(11);
              var Te = G.prototype,
                ve = function (e) {
                  (this.parser = e),
                    (this.validFlags =
                      "gim" +
                      (e.options.ecmaVersion >= 6 ? "uy" : "") +
                      (e.options.ecmaVersion >= 9 ? "s" : "")),
                    (this.unicodeProperties =
                      ye[
                        e.options.ecmaVersion >= 11 ? 11 : e.options.ecmaVersion
                      ]),
                    (this.source = ""),
                    (this.flags = ""),
                    (this.start = 0),
                    (this.switchU = !1),
                    (this.switchN = !1),
                    (this.pos = 0),
                    (this.lastIntValue = 0),
                    (this.lastStringValue = ""),
                    (this.lastAssertionIsQuantifiable = !1),
                    (this.numCapturingParens = 0),
                    (this.maxBackReference = 0),
                    (this.groupNames = []),
                    (this.backReferenceNames = []);
                };
              function Se(e) {
                return e <= 65535
                  ? String.fromCharCode(e)
                  : ((e -= 65536),
                    String.fromCharCode(55296 + (e >> 10), 56320 + (1023 & e)));
              }
              function Ae(e) {
                return (
                  36 === e ||
                  (e >= 40 && e <= 43) ||
                  46 === e ||
                  63 === e ||
                  (e >= 91 && e <= 94) ||
                  (e >= 123 && e <= 125)
                );
              }
              function _e(e) {
                return (e >= 65 && e <= 90) || (e >= 97 && e <= 122);
              }
              function Ee(e) {
                return _e(e) || 95 === e;
              }
              function we(e) {
                return Ee(e) || ke(e);
              }
              function ke(e) {
                return e >= 48 && e <= 57;
              }
              function Ie(e) {
                return (
                  (e >= 48 && e <= 57) ||
                  (e >= 65 && e <= 70) ||
                  (e >= 97 && e <= 102)
                );
              }
              function De(e) {
                return e >= 65 && e <= 70
                  ? e - 65 + 10
                  : e >= 97 && e <= 102
                  ? e - 97 + 10
                  : e - 48;
              }
              function Ce(e) {
                return e >= 48 && e <= 55;
              }
              (ve.prototype.reset = function (e, t, r) {
                var n = -1 !== r.indexOf("u");
                (this.start = 0 | e),
                  (this.source = t + ""),
                  (this.flags = r),
                  (this.switchU = n && this.parser.options.ecmaVersion >= 6),
                  (this.switchN = n && this.parser.options.ecmaVersion >= 9);
              }),
                (ve.prototype.raise = function (e) {
                  this.parser.raiseRecoverable(
                    this.start,
                    "Invalid regular expression: /" + this.source + "/: " + e
                  );
                }),
                (ve.prototype.at = function (e, t) {
                  void 0 === t && (t = !1);
                  var r = this.source,
                    n = r.length;
                  if (e >= n) return -1;
                  var i = r.charCodeAt(e);
                  if (
                    (!t && !this.switchU) ||
                    i <= 55295 ||
                    i >= 57344 ||
                    e + 1 >= n
                  )
                    return i;
                  var s = r.charCodeAt(e + 1);
                  return s >= 56320 && s <= 57343
                    ? (i << 10) + s - 56613888
                    : i;
                }),
                (ve.prototype.nextIndex = function (e, t) {
                  void 0 === t && (t = !1);
                  var r = this.source,
                    n = r.length;
                  if (e >= n) return n;
                  var i,
                    s = r.charCodeAt(e);
                  return (!t && !this.switchU) ||
                    s <= 55295 ||
                    s >= 57344 ||
                    e + 1 >= n ||
                    (i = r.charCodeAt(e + 1)) < 56320 ||
                    i > 57343
                    ? e + 1
                    : e + 2;
                }),
                (ve.prototype.current = function (e) {
                  return void 0 === e && (e = !1), this.at(this.pos, e);
                }),
                (ve.prototype.lookahead = function (e) {
                  return (
                    void 0 === e && (e = !1),
                    this.at(this.nextIndex(this.pos, e), e)
                  );
                }),
                (ve.prototype.advance = function (e) {
                  void 0 === e && (e = !1),
                    (this.pos = this.nextIndex(this.pos, e));
                }),
                (ve.prototype.eat = function (e, t) {
                  return (
                    void 0 === t && (t = !1),
                    this.current(t) === e && (this.advance(t), !0)
                  );
                }),
                (Te.validateRegExpFlags = function (e) {
                  for (
                    var t = e.validFlags, r = e.flags, n = 0;
                    n < r.length;
                    n++
                  ) {
                    var i = r.charAt(n);
                    -1 === t.indexOf(i) &&
                      this.raise(e.start, "Invalid regular expression flag"),
                      r.indexOf(i, n + 1) > -1 &&
                        this.raise(
                          e.start,
                          "Duplicate regular expression flag"
                        );
                  }
                }),
                (Te.validateRegExpPattern = function (e) {
                  this.regexp_pattern(e),
                    !e.switchN &&
                      this.options.ecmaVersion >= 9 &&
                      e.groupNames.length > 0 &&
                      ((e.switchN = !0), this.regexp_pattern(e));
                }),
                (Te.regexp_pattern = function (e) {
                  (e.pos = 0),
                    (e.lastIntValue = 0),
                    (e.lastStringValue = ""),
                    (e.lastAssertionIsQuantifiable = !1),
                    (e.numCapturingParens = 0),
                    (e.maxBackReference = 0),
                    (e.groupNames.length = 0),
                    (e.backReferenceNames.length = 0),
                    this.regexp_disjunction(e),
                    e.pos !== e.source.length &&
                      (e.eat(41) && e.raise("Unmatched ')'"),
                      (e.eat(93) || e.eat(125)) &&
                        e.raise("Lone quantifier brackets")),
                    e.maxBackReference > e.numCapturingParens &&
                      e.raise("Invalid escape");
                  for (
                    var t = 0, r = e.backReferenceNames;
                    t < r.length;
                    t += 1
                  ) {
                    var n = r[t];
                    -1 === e.groupNames.indexOf(n) &&
                      e.raise("Invalid named capture referenced");
                  }
                }),
                (Te.regexp_disjunction = function (e) {
                  for (this.regexp_alternative(e); e.eat(124); )
                    this.regexp_alternative(e);
                  this.regexp_eatQuantifier(e, !0) &&
                    e.raise("Nothing to repeat"),
                    e.eat(123) && e.raise("Lone quantifier brackets");
                }),
                (Te.regexp_alternative = function (e) {
                  for (; e.pos < e.source.length && this.regexp_eatTerm(e); );
                }),
                (Te.regexp_eatTerm = function (e) {
                  return this.regexp_eatAssertion(e)
                    ? (e.lastAssertionIsQuantifiable &&
                        this.regexp_eatQuantifier(e) &&
                        e.switchU &&
                        e.raise("Invalid quantifier"),
                      !0)
                    : !(e.switchU
                        ? !this.regexp_eatAtom(e)
                        : !this.regexp_eatExtendedAtom(e)) &&
                        (this.regexp_eatQuantifier(e), !0);
                }),
                (Te.regexp_eatAssertion = function (e) {
                  var t = e.pos;
                  if (
                    ((e.lastAssertionIsQuantifiable = !1),
                    e.eat(94) || e.eat(36))
                  )
                    return !0;
                  if (e.eat(92)) {
                    if (e.eat(66) || e.eat(98)) return !0;
                    e.pos = t;
                  }
                  if (e.eat(40) && e.eat(63)) {
                    var r = !1;
                    if (
                      (this.options.ecmaVersion >= 9 && (r = e.eat(60)),
                      e.eat(61) || e.eat(33))
                    )
                      return (
                        this.regexp_disjunction(e),
                        e.eat(41) || e.raise("Unterminated group"),
                        (e.lastAssertionIsQuantifiable = !r),
                        !0
                      );
                  }
                  return (e.pos = t), !1;
                }),
                (Te.regexp_eatQuantifier = function (e, t) {
                  return (
                    void 0 === t && (t = !1),
                    !!this.regexp_eatQuantifierPrefix(e, t) && (e.eat(63), !0)
                  );
                }),
                (Te.regexp_eatQuantifierPrefix = function (e, t) {
                  return (
                    e.eat(42) ||
                    e.eat(43) ||
                    e.eat(63) ||
                    this.regexp_eatBracedQuantifier(e, t)
                  );
                }),
                (Te.regexp_eatBracedQuantifier = function (e, t) {
                  var r = e.pos;
                  if (e.eat(123)) {
                    var n = 0,
                      i = -1;
                    if (
                      this.regexp_eatDecimalDigits(e) &&
                      ((n = e.lastIntValue),
                      e.eat(44) &&
                        this.regexp_eatDecimalDigits(e) &&
                        (i = e.lastIntValue),
                      e.eat(125))
                    )
                      return (
                        -1 !== i &&
                          i < n &&
                          !t &&
                          e.raise("numbers out of order in {} quantifier"),
                        !0
                      );
                    e.switchU && !t && e.raise("Incomplete quantifier"),
                      (e.pos = r);
                  }
                  return !1;
                }),
                (Te.regexp_eatAtom = function (e) {
                  return (
                    this.regexp_eatPatternCharacters(e) ||
                    e.eat(46) ||
                    this.regexp_eatReverseSolidusAtomEscape(e) ||
                    this.regexp_eatCharacterClass(e) ||
                    this.regexp_eatUncapturingGroup(e) ||
                    this.regexp_eatCapturingGroup(e)
                  );
                }),
                (Te.regexp_eatReverseSolidusAtomEscape = function (e) {
                  var t = e.pos;
                  if (e.eat(92)) {
                    if (this.regexp_eatAtomEscape(e)) return !0;
                    e.pos = t;
                  }
                  return !1;
                }),
                (Te.regexp_eatUncapturingGroup = function (e) {
                  var t = e.pos;
                  if (e.eat(40)) {
                    if (e.eat(63) && e.eat(58)) {
                      if ((this.regexp_disjunction(e), e.eat(41))) return !0;
                      e.raise("Unterminated group");
                    }
                    e.pos = t;
                  }
                  return !1;
                }),
                (Te.regexp_eatCapturingGroup = function (e) {
                  if (e.eat(40)) {
                    if (
                      (this.options.ecmaVersion >= 9
                        ? this.regexp_groupSpecifier(e)
                        : 63 === e.current() && e.raise("Invalid group"),
                      this.regexp_disjunction(e),
                      e.eat(41))
                    )
                      return (e.numCapturingParens += 1), !0;
                    e.raise("Unterminated group");
                  }
                  return !1;
                }),
                (Te.regexp_eatExtendedAtom = function (e) {
                  return (
                    e.eat(46) ||
                    this.regexp_eatReverseSolidusAtomEscape(e) ||
                    this.regexp_eatCharacterClass(e) ||
                    this.regexp_eatUncapturingGroup(e) ||
                    this.regexp_eatCapturingGroup(e) ||
                    this.regexp_eatInvalidBracedQuantifier(e) ||
                    this.regexp_eatExtendedPatternCharacter(e)
                  );
                }),
                (Te.regexp_eatInvalidBracedQuantifier = function (e) {
                  return (
                    this.regexp_eatBracedQuantifier(e, !0) &&
                      e.raise("Nothing to repeat"),
                    !1
                  );
                }),
                (Te.regexp_eatSyntaxCharacter = function (e) {
                  var t = e.current();
                  return !!Ae(t) && ((e.lastIntValue = t), e.advance(), !0);
                }),
                (Te.regexp_eatPatternCharacters = function (e) {
                  for (
                    var t = e.pos, r = 0;
                    -1 !== (r = e.current()) && !Ae(r);

                  )
                    e.advance();
                  return e.pos !== t;
                }),
                (Te.regexp_eatExtendedPatternCharacter = function (e) {
                  var t = e.current();
                  return (
                    !(
                      -1 === t ||
                      36 === t ||
                      (t >= 40 && t <= 43) ||
                      46 === t ||
                      63 === t ||
                      91 === t ||
                      94 === t ||
                      124 === t
                    ) && (e.advance(), !0)
                  );
                }),
                (Te.regexp_groupSpecifier = function (e) {
                  if (e.eat(63)) {
                    if (this.regexp_eatGroupName(e))
                      return (
                        -1 !== e.groupNames.indexOf(e.lastStringValue) &&
                          e.raise("Duplicate capture group name"),
                        void e.groupNames.push(e.lastStringValue)
                      );
                    e.raise("Invalid group");
                  }
                }),
                (Te.regexp_eatGroupName = function (e) {
                  if (((e.lastStringValue = ""), e.eat(60))) {
                    if (this.regexp_eatRegExpIdentifierName(e) && e.eat(62))
                      return !0;
                    e.raise("Invalid capture group name");
                  }
                  return !1;
                }),
                (Te.regexp_eatRegExpIdentifierName = function (e) {
                  if (
                    ((e.lastStringValue = ""),
                    this.regexp_eatRegExpIdentifierStart(e))
                  ) {
                    for (
                      e.lastStringValue += Se(e.lastIntValue);
                      this.regexp_eatRegExpIdentifierPart(e);

                    )
                      e.lastStringValue += Se(e.lastIntValue);
                    return !0;
                  }
                  return !1;
                }),
                (Te.regexp_eatRegExpIdentifierStart = function (e) {
                  var t = e.pos,
                    r = this.options.ecmaVersion >= 11,
                    n = e.current(r);
                  return (
                    e.advance(r),
                    92 === n &&
                      this.regexp_eatRegExpUnicodeEscapeSequence(e, r) &&
                      (n = e.lastIntValue),
                    (function (e) {
                      return p(e, !0) || 36 === e || 95 === e;
                    })(n)
                      ? ((e.lastIntValue = n), !0)
                      : ((e.pos = t), !1)
                  );
                }),
                (Te.regexp_eatRegExpIdentifierPart = function (e) {
                  var t = e.pos,
                    r = this.options.ecmaVersion >= 11,
                    n = e.current(r);
                  return (
                    e.advance(r),
                    92 === n &&
                      this.regexp_eatRegExpUnicodeEscapeSequence(e, r) &&
                      (n = e.lastIntValue),
                    (function (e) {
                      return (
                        d(e, !0) ||
                        36 === e ||
                        95 === e ||
                        8204 === e ||
                        8205 === e
                      );
                    })(n)
                      ? ((e.lastIntValue = n), !0)
                      : ((e.pos = t), !1)
                  );
                }),
                (Te.regexp_eatAtomEscape = function (e) {
                  return (
                    !!(
                      this.regexp_eatBackReference(e) ||
                      this.regexp_eatCharacterClassEscape(e) ||
                      this.regexp_eatCharacterEscape(e) ||
                      (e.switchN && this.regexp_eatKGroupName(e))
                    ) ||
                    (e.switchU &&
                      (99 === e.current() && e.raise("Invalid unicode escape"),
                      e.raise("Invalid escape")),
                    !1)
                  );
                }),
                (Te.regexp_eatBackReference = function (e) {
                  var t = e.pos;
                  if (this.regexp_eatDecimalEscape(e)) {
                    var r = e.lastIntValue;
                    if (e.switchU)
                      return (
                        r > e.maxBackReference && (e.maxBackReference = r), !0
                      );
                    if (r <= e.numCapturingParens) return !0;
                    e.pos = t;
                  }
                  return !1;
                }),
                (Te.regexp_eatKGroupName = function (e) {
                  if (e.eat(107)) {
                    if (this.regexp_eatGroupName(e))
                      return e.backReferenceNames.push(e.lastStringValue), !0;
                    e.raise("Invalid named reference");
                  }
                  return !1;
                }),
                (Te.regexp_eatCharacterEscape = function (e) {
                  return (
                    this.regexp_eatControlEscape(e) ||
                    this.regexp_eatCControlLetter(e) ||
                    this.regexp_eatZero(e) ||
                    this.regexp_eatHexEscapeSequence(e) ||
                    this.regexp_eatRegExpUnicodeEscapeSequence(e, !1) ||
                    (!e.switchU &&
                      this.regexp_eatLegacyOctalEscapeSequence(e)) ||
                    this.regexp_eatIdentityEscape(e)
                  );
                }),
                (Te.regexp_eatCControlLetter = function (e) {
                  var t = e.pos;
                  if (e.eat(99)) {
                    if (this.regexp_eatControlLetter(e)) return !0;
                    e.pos = t;
                  }
                  return !1;
                }),
                (Te.regexp_eatZero = function (e) {
                  return (
                    48 === e.current() &&
                    !ke(e.lookahead()) &&
                    ((e.lastIntValue = 0), e.advance(), !0)
                  );
                }),
                (Te.regexp_eatControlEscape = function (e) {
                  var t = e.current();
                  return 116 === t
                    ? ((e.lastIntValue = 9), e.advance(), !0)
                    : 110 === t
                    ? ((e.lastIntValue = 10), e.advance(), !0)
                    : 118 === t
                    ? ((e.lastIntValue = 11), e.advance(), !0)
                    : 102 === t
                    ? ((e.lastIntValue = 12), e.advance(), !0)
                    : 114 === t && ((e.lastIntValue = 13), e.advance(), !0);
                }),
                (Te.regexp_eatControlLetter = function (e) {
                  var t = e.current();
                  return (
                    !!_e(t) && ((e.lastIntValue = t % 32), e.advance(), !0)
                  );
                }),
                (Te.regexp_eatRegExpUnicodeEscapeSequence = function (e, t) {
                  void 0 === t && (t = !1);
                  var r,
                    n = e.pos,
                    i = t || e.switchU;
                  if (e.eat(117)) {
                    if (this.regexp_eatFixedHexDigits(e, 4)) {
                      var s = e.lastIntValue;
                      if (i && s >= 55296 && s <= 56319) {
                        var a = e.pos;
                        if (
                          e.eat(92) &&
                          e.eat(117) &&
                          this.regexp_eatFixedHexDigits(e, 4)
                        ) {
                          var o = e.lastIntValue;
                          if (o >= 56320 && o <= 57343)
                            return (
                              (e.lastIntValue =
                                1024 * (s - 55296) + (o - 56320) + 65536),
                              !0
                            );
                        }
                        (e.pos = a), (e.lastIntValue = s);
                      }
                      return !0;
                    }
                    if (
                      i &&
                      e.eat(123) &&
                      this.regexp_eatHexDigits(e) &&
                      e.eat(125) &&
                      (r = e.lastIntValue) >= 0 &&
                      r <= 1114111
                    )
                      return !0;
                    i && e.raise("Invalid unicode escape"), (e.pos = n);
                  }
                  return !1;
                }),
                (Te.regexp_eatIdentityEscape = function (e) {
                  if (e.switchU)
                    return (
                      !!this.regexp_eatSyntaxCharacter(e) ||
                      (!!e.eat(47) && ((e.lastIntValue = 47), !0))
                    );
                  var t = e.current();
                  return (
                    !(99 === t || (e.switchN && 107 === t)) &&
                    ((e.lastIntValue = t), e.advance(), !0)
                  );
                }),
                (Te.regexp_eatDecimalEscape = function (e) {
                  e.lastIntValue = 0;
                  var t = e.current();
                  if (t >= 49 && t <= 57) {
                    do {
                      (e.lastIntValue = 10 * e.lastIntValue + (t - 48)),
                        e.advance();
                    } while ((t = e.current()) >= 48 && t <= 57);
                    return !0;
                  }
                  return !1;
                }),
                (Te.regexp_eatCharacterClassEscape = function (e) {
                  var t = e.current();
                  if (
                    (function (e) {
                      return (
                        100 === e ||
                        68 === e ||
                        115 === e ||
                        83 === e ||
                        119 === e ||
                        87 === e
                      );
                    })(t)
                  )
                    return (e.lastIntValue = -1), e.advance(), !0;
                  if (
                    e.switchU &&
                    this.options.ecmaVersion >= 9 &&
                    (80 === t || 112 === t)
                  ) {
                    if (
                      ((e.lastIntValue = -1),
                      e.advance(),
                      e.eat(123) &&
                        this.regexp_eatUnicodePropertyValueExpression(e) &&
                        e.eat(125))
                    )
                      return !0;
                    e.raise("Invalid property name");
                  }
                  return !1;
                }),
                (Te.regexp_eatUnicodePropertyValueExpression = function (e) {
                  var t = e.pos;
                  if (this.regexp_eatUnicodePropertyName(e) && e.eat(61)) {
                    var r = e.lastStringValue;
                    if (this.regexp_eatUnicodePropertyValue(e)) {
                      var n = e.lastStringValue;
                      return (
                        this.regexp_validateUnicodePropertyNameAndValue(
                          e,
                          r,
                          n
                        ),
                        !0
                      );
                    }
                  }
                  if (
                    ((e.pos = t),
                    this.regexp_eatLoneUnicodePropertyNameOrValue(e))
                  ) {
                    var i = e.lastStringValue;
                    return (
                      this.regexp_validateUnicodePropertyNameOrValue(e, i), !0
                    );
                  }
                  return !1;
                }),
                (Te.regexp_validateUnicodePropertyNameAndValue = function (
                  e,
                  t,
                  r
                ) {
                  D(e.unicodeProperties.nonBinary, t) ||
                    e.raise("Invalid property name"),
                    e.unicodeProperties.nonBinary[t].test(r) ||
                      e.raise("Invalid property value");
                }),
                (Te.regexp_validateUnicodePropertyNameOrValue = function (
                  e,
                  t
                ) {
                  e.unicodeProperties.binary.test(t) ||
                    e.raise("Invalid property name");
                }),
                (Te.regexp_eatUnicodePropertyName = function (e) {
                  var t = 0;
                  for (e.lastStringValue = ""; Ee((t = e.current())); )
                    (e.lastStringValue += Se(t)), e.advance();
                  return "" !== e.lastStringValue;
                }),
                (Te.regexp_eatUnicodePropertyValue = function (e) {
                  var t = 0;
                  for (e.lastStringValue = ""; we((t = e.current())); )
                    (e.lastStringValue += Se(t)), e.advance();
                  return "" !== e.lastStringValue;
                }),
                (Te.regexp_eatLoneUnicodePropertyNameOrValue = function (e) {
                  return this.regexp_eatUnicodePropertyValue(e);
                }),
                (Te.regexp_eatCharacterClass = function (e) {
                  if (e.eat(91)) {
                    if ((e.eat(94), this.regexp_classRanges(e), e.eat(93)))
                      return !0;
                    e.raise("Unterminated character class");
                  }
                  return !1;
                }),
                (Te.regexp_classRanges = function (e) {
                  for (; this.regexp_eatClassAtom(e); ) {
                    var t = e.lastIntValue;
                    if (e.eat(45) && this.regexp_eatClassAtom(e)) {
                      var r = e.lastIntValue;
                      !e.switchU ||
                        (-1 !== t && -1 !== r) ||
                        e.raise("Invalid character class"),
                        -1 !== t &&
                          -1 !== r &&
                          t > r &&
                          e.raise("Range out of order in character class");
                    }
                  }
                }),
                (Te.regexp_eatClassAtom = function (e) {
                  var t = e.pos;
                  if (e.eat(92)) {
                    if (this.regexp_eatClassEscape(e)) return !0;
                    if (e.switchU) {
                      var r = e.current();
                      (99 === r || Ce(r)) && e.raise("Invalid class escape"),
                        e.raise("Invalid escape");
                    }
                    e.pos = t;
                  }
                  var n = e.current();
                  return 93 !== n && ((e.lastIntValue = n), e.advance(), !0);
                }),
                (Te.regexp_eatClassEscape = function (e) {
                  var t = e.pos;
                  if (e.eat(98)) return (e.lastIntValue = 8), !0;
                  if (e.switchU && e.eat(45)) return (e.lastIntValue = 45), !0;
                  if (!e.switchU && e.eat(99)) {
                    if (this.regexp_eatClassControlLetter(e)) return !0;
                    e.pos = t;
                  }
                  return (
                    this.regexp_eatCharacterClassEscape(e) ||
                    this.regexp_eatCharacterEscape(e)
                  );
                }),
                (Te.regexp_eatClassControlLetter = function (e) {
                  var t = e.current();
                  return (
                    !(!ke(t) && 95 !== t) &&
                    ((e.lastIntValue = t % 32), e.advance(), !0)
                  );
                }),
                (Te.regexp_eatHexEscapeSequence = function (e) {
                  var t = e.pos;
                  if (e.eat(120)) {
                    if (this.regexp_eatFixedHexDigits(e, 2)) return !0;
                    e.switchU && e.raise("Invalid escape"), (e.pos = t);
                  }
                  return !1;
                }),
                (Te.regexp_eatDecimalDigits = function (e) {
                  var t = e.pos,
                    r = 0;
                  for (e.lastIntValue = 0; ke((r = e.current())); )
                    (e.lastIntValue = 10 * e.lastIntValue + (r - 48)),
                      e.advance();
                  return e.pos !== t;
                }),
                (Te.regexp_eatHexDigits = function (e) {
                  var t = e.pos,
                    r = 0;
                  for (e.lastIntValue = 0; Ie((r = e.current())); )
                    (e.lastIntValue = 16 * e.lastIntValue + De(r)), e.advance();
                  return e.pos !== t;
                }),
                (Te.regexp_eatLegacyOctalEscapeSequence = function (e) {
                  if (this.regexp_eatOctalDigit(e)) {
                    var t = e.lastIntValue;
                    if (this.regexp_eatOctalDigit(e)) {
                      var r = e.lastIntValue;
                      t <= 3 && this.regexp_eatOctalDigit(e)
                        ? (e.lastIntValue = 64 * t + 8 * r + e.lastIntValue)
                        : (e.lastIntValue = 8 * t + r);
                    } else e.lastIntValue = t;
                    return !0;
                  }
                  return !1;
                }),
                (Te.regexp_eatOctalDigit = function (e) {
                  var t = e.current();
                  return Ce(t)
                    ? ((e.lastIntValue = t - 48), e.advance(), !0)
                    : ((e.lastIntValue = 0), !1);
                }),
                (Te.regexp_eatFixedHexDigits = function (e, t) {
                  var r = e.pos;
                  e.lastIntValue = 0;
                  for (var n = 0; n < t; ++n) {
                    var i = e.current();
                    if (!Ie(i)) return (e.pos = r), !1;
                    (e.lastIntValue = 16 * e.lastIntValue + De(i)), e.advance();
                  }
                  return !0;
                });
              var $e = function (e) {
                  (this.type = e.type),
                    (this.value = e.value),
                    (this.start = e.start),
                    (this.end = e.end),
                    e.options.locations &&
                      (this.loc = new R(e, e.startLoc, e.endLoc)),
                    e.options.ranges && (this.range = [e.start, e.end]);
                },
                Le = G.prototype;
              function Re(e) {
                return "function" != typeof BigInt
                  ? null
                  : BigInt(e.replace(/_/g, ""));
              }
              function Fe(e) {
                return e <= 65535
                  ? String.fromCharCode(e)
                  : ((e -= 65536),
                    String.fromCharCode(55296 + (e >> 10), 56320 + (1023 & e)));
              }
              (Le.next = function (e) {
                !e &&
                  this.type.keyword &&
                  this.containsEsc &&
                  this.raiseRecoverable(
                    this.start,
                    "Escape sequence in keyword " + this.type.keyword
                  ),
                  this.options.onToken && this.options.onToken(new $e(this)),
                  (this.lastTokEnd = this.end),
                  (this.lastTokStart = this.start),
                  (this.lastTokEndLoc = this.endLoc),
                  (this.lastTokStartLoc = this.startLoc),
                  this.nextToken();
              }),
                (Le.getToken = function () {
                  return this.next(), new $e(this);
                }),
                "undefined" != typeof Symbol &&
                  (Le[Symbol.iterator] = function () {
                    var e = this;
                    return {
                      next: function () {
                        var t = e.getToken();
                        return { done: t.type === T.eof, value: t };
                      },
                    };
                  }),
                (Le.curContext = function () {
                  return this.context[this.context.length - 1];
                }),
                (Le.nextToken = function () {
                  var e = this.curContext();
                  return (
                    (e && e.preserveSpace) || this.skipSpace(),
                    (this.start = this.pos),
                    this.options.locations &&
                      (this.startLoc = this.curPosition()),
                    this.pos >= this.input.length
                      ? this.finishToken(T.eof)
                      : e.override
                      ? e.override(this)
                      : void this.readToken(this.fullCharCodeAtPos())
                  );
                }),
                (Le.readToken = function (e) {
                  return p(e, this.options.ecmaVersion >= 6) || 92 === e
                    ? this.readWord()
                    : this.getTokenFromCode(e);
                }),
                (Le.fullCharCodeAtPos = function () {
                  var e = this.input.charCodeAt(this.pos);
                  return e <= 55295 || e >= 57344
                    ? e
                    : (e << 10) +
                        this.input.charCodeAt(this.pos + 1) -
                        56613888;
                }),
                (Le.skipBlockComment = function () {
                  var e,
                    t = this.options.onComment && this.curPosition(),
                    r = this.pos,
                    n = this.input.indexOf("*/", (this.pos += 2));
                  if (
                    (-1 === n &&
                      this.raise(this.pos - 2, "Unterminated comment"),
                    (this.pos = n + 2),
                    this.options.locations)
                  )
                    for (
                      S.lastIndex = r;
                      (e = S.exec(this.input)) && e.index < this.pos;

                    )
                      ++this.curLine, (this.lineStart = e.index + e[0].length);
                  this.options.onComment &&
                    this.options.onComment(
                      !0,
                      this.input.slice(r + 2, n),
                      r,
                      this.pos,
                      t,
                      this.curPosition()
                    );
                }),
                (Le.skipLineComment = function (e) {
                  for (
                    var t = this.pos,
                      r = this.options.onComment && this.curPosition(),
                      n = this.input.charCodeAt((this.pos += e));
                    this.pos < this.input.length && !A(n);

                  )
                    n = this.input.charCodeAt(++this.pos);
                  this.options.onComment &&
                    this.options.onComment(
                      !1,
                      this.input.slice(t + e, this.pos),
                      t,
                      this.pos,
                      r,
                      this.curPosition()
                    );
                }),
                (Le.skipSpace = function () {
                  e: for (; this.pos < this.input.length; ) {
                    var e = this.input.charCodeAt(this.pos);
                    switch (e) {
                      case 32:
                      case 160:
                        ++this.pos;
                        break;
                      case 13:
                        10 === this.input.charCodeAt(this.pos + 1) &&
                          ++this.pos;
                      case 10:
                      case 8232:
                      case 8233:
                        ++this.pos,
                          this.options.locations &&
                            (++this.curLine, (this.lineStart = this.pos));
                        break;
                      case 47:
                        switch (this.input.charCodeAt(this.pos + 1)) {
                          case 42:
                            this.skipBlockComment();
                            break;
                          case 47:
                            this.skipLineComment(2);
                            break;
                          default:
                            break e;
                        }
                        break;
                      default:
                        if (
                          !(
                            (e > 8 && e < 14) ||
                            (e >= 5760 && _.test(String.fromCharCode(e)))
                          )
                        )
                          break e;
                        ++this.pos;
                    }
                  }
                }),
                (Le.finishToken = function (e, t) {
                  (this.end = this.pos),
                    this.options.locations &&
                      (this.endLoc = this.curPosition());
                  var r = this.type;
                  (this.type = e), (this.value = t), this.updateContext(r);
                }),
                (Le.readToken_dot = function () {
                  var e = this.input.charCodeAt(this.pos + 1);
                  if (e >= 48 && e <= 57) return this.readNumber(!0);
                  var t = this.input.charCodeAt(this.pos + 2);
                  return this.options.ecmaVersion >= 6 && 46 === e && 46 === t
                    ? ((this.pos += 3), this.finishToken(T.ellipsis))
                    : (++this.pos, this.finishToken(T.dot));
                }),
                (Le.readToken_slash = function () {
                  var e = this.input.charCodeAt(this.pos + 1);
                  return this.exprAllowed
                    ? (++this.pos, this.readRegexp())
                    : 61 === e
                    ? this.finishOp(T.assign, 2)
                    : this.finishOp(T.slash, 1);
                }),
                (Le.readToken_mult_modulo_exp = function (e) {
                  var t = this.input.charCodeAt(this.pos + 1),
                    r = 1,
                    n = 42 === e ? T.star : T.modulo;
                  return (
                    this.options.ecmaVersion >= 7 &&
                      42 === e &&
                      42 === t &&
                      (++r,
                      (n = T.starstar),
                      (t = this.input.charCodeAt(this.pos + 2))),
                    61 === t
                      ? this.finishOp(T.assign, r + 1)
                      : this.finishOp(n, r)
                  );
                }),
                (Le.readToken_pipe_amp = function (e) {
                  var t = this.input.charCodeAt(this.pos + 1);
                  if (t === e) {
                    if (this.options.ecmaVersion >= 12)
                      if (61 === this.input.charCodeAt(this.pos + 2))
                        return this.finishOp(T.assign, 3);
                    return this.finishOp(
                      124 === e ? T.logicalOR : T.logicalAND,
                      2
                    );
                  }
                  return 61 === t
                    ? this.finishOp(T.assign, 2)
                    : this.finishOp(124 === e ? T.bitwiseOR : T.bitwiseAND, 1);
                }),
                (Le.readToken_caret = function () {
                  return 61 === this.input.charCodeAt(this.pos + 1)
                    ? this.finishOp(T.assign, 2)
                    : this.finishOp(T.bitwiseXOR, 1);
                }),
                (Le.readToken_plus_min = function (e) {
                  var t = this.input.charCodeAt(this.pos + 1);
                  return t === e
                    ? 45 !== t ||
                      this.inModule ||
                      62 !== this.input.charCodeAt(this.pos + 2) ||
                      (0 !== this.lastTokEnd &&
                        !v.test(this.input.slice(this.lastTokEnd, this.pos)))
                      ? this.finishOp(T.incDec, 2)
                      : (this.skipLineComment(3),
                        this.skipSpace(),
                        this.nextToken())
                    : 61 === t
                    ? this.finishOp(T.assign, 2)
                    : this.finishOp(T.plusMin, 1);
                }),
                (Le.readToken_lt_gt = function (e) {
                  var t = this.input.charCodeAt(this.pos + 1),
                    r = 1;
                  return t === e
                    ? ((r =
                        62 === e && 62 === this.input.charCodeAt(this.pos + 2)
                          ? 3
                          : 2),
                      61 === this.input.charCodeAt(this.pos + r)
                        ? this.finishOp(T.assign, r + 1)
                        : this.finishOp(T.bitShift, r))
                    : 33 !== t ||
                      60 !== e ||
                      this.inModule ||
                      45 !== this.input.charCodeAt(this.pos + 2) ||
                      45 !== this.input.charCodeAt(this.pos + 3)
                    ? (61 === t && (r = 2), this.finishOp(T.relational, r))
                    : (this.skipLineComment(4),
                      this.skipSpace(),
                      this.nextToken());
                }),
                (Le.readToken_eq_excl = function (e) {
                  var t = this.input.charCodeAt(this.pos + 1);
                  return 61 === t
                    ? this.finishOp(
                        T.equality,
                        61 === this.input.charCodeAt(this.pos + 2) ? 3 : 2
                      )
                    : 61 === e && 62 === t && this.options.ecmaVersion >= 6
                    ? ((this.pos += 2), this.finishToken(T.arrow))
                    : this.finishOp(61 === e ? T.eq : T.prefix, 1);
                }),
                (Le.readToken_question = function () {
                  var e = this.options.ecmaVersion;
                  if (e >= 11) {
                    var t = this.input.charCodeAt(this.pos + 1);
                    if (46 === t) {
                      var r = this.input.charCodeAt(this.pos + 2);
                      if (r < 48 || r > 57)
                        return this.finishOp(T.questionDot, 2);
                    }
                    if (63 === t) {
                      if (e >= 12)
                        if (61 === this.input.charCodeAt(this.pos + 2))
                          return this.finishOp(T.assign, 3);
                      return this.finishOp(T.coalesce, 2);
                    }
                  }
                  return this.finishOp(T.question, 1);
                }),
                (Le.getTokenFromCode = function (e) {
                  switch (e) {
                    case 46:
                      return this.readToken_dot();
                    case 40:
                      return ++this.pos, this.finishToken(T.parenL);
                    case 41:
                      return ++this.pos, this.finishToken(T.parenR);
                    case 59:
                      return ++this.pos, this.finishToken(T.semi);
                    case 44:
                      return ++this.pos, this.finishToken(T.comma);
                    case 91:
                      return ++this.pos, this.finishToken(T.bracketL);
                    case 93:
                      return ++this.pos, this.finishToken(T.bracketR);
                    case 123:
                      return ++this.pos, this.finishToken(T.braceL);
                    case 125:
                      return ++this.pos, this.finishToken(T.braceR);
                    case 58:
                      return ++this.pos, this.finishToken(T.colon);
                    case 96:
                      if (this.options.ecmaVersion < 6) break;
                      return ++this.pos, this.finishToken(T.backQuote);
                    case 48:
                      var t = this.input.charCodeAt(this.pos + 1);
                      if (120 === t || 88 === t)
                        return this.readRadixNumber(16);
                      if (this.options.ecmaVersion >= 6) {
                        if (111 === t || 79 === t)
                          return this.readRadixNumber(8);
                        if (98 === t || 66 === t)
                          return this.readRadixNumber(2);
                      }
                    case 49:
                    case 50:
                    case 51:
                    case 52:
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 57:
                      return this.readNumber(!1);
                    case 34:
                    case 39:
                      return this.readString(e);
                    case 47:
                      return this.readToken_slash();
                    case 37:
                    case 42:
                      return this.readToken_mult_modulo_exp(e);
                    case 124:
                    case 38:
                      return this.readToken_pipe_amp(e);
                    case 94:
                      return this.readToken_caret();
                    case 43:
                    case 45:
                      return this.readToken_plus_min(e);
                    case 60:
                    case 62:
                      return this.readToken_lt_gt(e);
                    case 61:
                    case 33:
                      return this.readToken_eq_excl(e);
                    case 63:
                      return this.readToken_question();
                    case 126:
                      return this.finishOp(T.prefix, 1);
                  }
                  this.raise(this.pos, "Unexpected character '" + Fe(e) + "'");
                }),
                (Le.finishOp = function (e, t) {
                  var r = this.input.slice(this.pos, this.pos + t);
                  return (this.pos += t), this.finishToken(e, r);
                }),
                (Le.readRegexp = function () {
                  for (var e, t, r = this.pos; ; ) {
                    this.pos >= this.input.length &&
                      this.raise(r, "Unterminated regular expression");
                    var n = this.input.charAt(this.pos);
                    if (
                      (v.test(n) &&
                        this.raise(r, "Unterminated regular expression"),
                      e)
                    )
                      e = !1;
                    else {
                      if ("[" === n) t = !0;
                      else if ("]" === n && t) t = !1;
                      else if ("/" === n && !t) break;
                      e = "\\" === n;
                    }
                    ++this.pos;
                  }
                  var i = this.input.slice(r, this.pos);
                  ++this.pos;
                  var s = this.pos,
                    a = this.readWord1();
                  this.containsEsc && this.unexpected(s);
                  var o = this.regexpState || (this.regexpState = new ve(this));
                  o.reset(r, i, a),
                    this.validateRegExpFlags(o),
                    this.validateRegExpPattern(o);
                  var u = null;
                  try {
                    u = new RegExp(i, a);
                  } catch (e) {}
                  return this.finishToken(T.regexp, {
                    pattern: i,
                    flags: a,
                    value: u,
                  });
                }),
                (Le.readInt = function (e, t, r) {
                  for (
                    var n = this.options.ecmaVersion >= 12 && void 0 === t,
                      i = r && 48 === this.input.charCodeAt(this.pos),
                      s = this.pos,
                      a = 0,
                      o = 0,
                      u = 0,
                      l = null == t ? 1 / 0 : t;
                    u < l;
                    ++u, ++this.pos
                  ) {
                    var h = this.input.charCodeAt(this.pos),
                      c = void 0;
                    if (n && 95 === h)
                      i &&
                        this.raiseRecoverable(
                          this.pos,
                          "Numeric separator is not allowed in legacy octal numeric literals"
                        ),
                        95 === o &&
                          this.raiseRecoverable(
                            this.pos,
                            "Numeric separator must be exactly one underscore"
                          ),
                        0 === u &&
                          this.raiseRecoverable(
                            this.pos,
                            "Numeric separator is not allowed at the first of digits"
                          ),
                        (o = h);
                    else {
                      if (
                        (c =
                          h >= 97
                            ? h - 97 + 10
                            : h >= 65
                            ? h - 65 + 10
                            : h >= 48 && h <= 57
                            ? h - 48
                            : 1 / 0) >= e
                      )
                        break;
                      (o = h), (a = a * e + c);
                    }
                  }
                  return (
                    n &&
                      95 === o &&
                      this.raiseRecoverable(
                        this.pos - 1,
                        "Numeric separator is not allowed at the last of digits"
                      ),
                    this.pos === s || (null != t && this.pos - s !== t)
                      ? null
                      : a
                  );
                }),
                (Le.readRadixNumber = function (e) {
                  var t = this.pos;
                  this.pos += 2;
                  var r = this.readInt(e);
                  return (
                    null == r &&
                      this.raise(
                        this.start + 2,
                        "Expected number in radix " + e
                      ),
                    this.options.ecmaVersion >= 11 &&
                    110 === this.input.charCodeAt(this.pos)
                      ? ((r = Re(this.input.slice(t, this.pos))), ++this.pos)
                      : p(this.fullCharCodeAtPos()) &&
                        this.raise(
                          this.pos,
                          "Identifier directly after number"
                        ),
                    this.finishToken(T.num, r)
                  );
                }),
                (Le.readNumber = function (e) {
                  var t = this.pos;
                  e ||
                    null !== this.readInt(10, void 0, !0) ||
                    this.raise(t, "Invalid number");
                  var r = this.pos - t >= 2 && 48 === this.input.charCodeAt(t);
                  r && this.strict && this.raise(t, "Invalid number");
                  var n = this.input.charCodeAt(this.pos);
                  if (!r && !e && this.options.ecmaVersion >= 11 && 110 === n) {
                    var i = Re(this.input.slice(t, this.pos));
                    return (
                      ++this.pos,
                      p(this.fullCharCodeAtPos()) &&
                        this.raise(
                          this.pos,
                          "Identifier directly after number"
                        ),
                      this.finishToken(T.num, i)
                    );
                  }
                  r && /[89]/.test(this.input.slice(t, this.pos)) && (r = !1),
                    46 !== n ||
                      r ||
                      (++this.pos,
                      this.readInt(10),
                      (n = this.input.charCodeAt(this.pos))),
                    (69 !== n && 101 !== n) ||
                      r ||
                      ((43 !== (n = this.input.charCodeAt(++this.pos)) &&
                        45 !== n) ||
                        ++this.pos,
                      null === this.readInt(10) &&
                        this.raise(t, "Invalid number")),
                    p(this.fullCharCodeAtPos()) &&
                      this.raise(this.pos, "Identifier directly after number");
                  var s,
                    a =
                      ((s = this.input.slice(t, this.pos)),
                      r ? parseInt(s, 8) : parseFloat(s.replace(/_/g, "")));
                  return this.finishToken(T.num, a);
                }),
                (Le.readCodePoint = function () {
                  var e;
                  if (123 === this.input.charCodeAt(this.pos)) {
                    this.options.ecmaVersion < 6 && this.unexpected();
                    var t = ++this.pos;
                    (e = this.readHexChar(
                      this.input.indexOf("}", this.pos) - this.pos
                    )),
                      ++this.pos,
                      e > 1114111 &&
                        this.invalidStringToken(t, "Code point out of bounds");
                  } else e = this.readHexChar(4);
                  return e;
                }),
                (Le.readString = function (e) {
                  for (var t = "", r = ++this.pos; ; ) {
                    this.pos >= this.input.length &&
                      this.raise(this.start, "Unterminated string constant");
                    var n = this.input.charCodeAt(this.pos);
                    if (n === e) break;
                    92 === n
                      ? ((t += this.input.slice(r, this.pos)),
                        (t += this.readEscapedChar(!1)),
                        (r = this.pos))
                      : (A(n, this.options.ecmaVersion >= 10) &&
                          this.raise(
                            this.start,
                            "Unterminated string constant"
                          ),
                        ++this.pos);
                  }
                  return (
                    (t += this.input.slice(r, this.pos++)),
                    this.finishToken(T.string, t)
                  );
                });
              var Ne = {};
              (Le.tryReadTemplateToken = function () {
                this.inTemplateElement = !0;
                try {
                  this.readTmplToken();
                } catch (e) {
                  if (e !== Ne) throw e;
                  this.readInvalidTemplateToken();
                }
                this.inTemplateElement = !1;
              }),
                (Le.invalidStringToken = function (e, t) {
                  if (this.inTemplateElement && this.options.ecmaVersion >= 9)
                    throw Ne;
                  this.raise(e, t);
                }),
                (Le.readTmplToken = function () {
                  for (var e = "", t = this.pos; ; ) {
                    this.pos >= this.input.length &&
                      this.raise(this.start, "Unterminated template");
                    var r = this.input.charCodeAt(this.pos);
                    if (
                      96 === r ||
                      (36 === r && 123 === this.input.charCodeAt(this.pos + 1))
                    )
                      return this.pos !== this.start ||
                        (this.type !== T.template &&
                          this.type !== T.invalidTemplate)
                        ? ((e += this.input.slice(t, this.pos)),
                          this.finishToken(T.template, e))
                        : 36 === r
                        ? ((this.pos += 2), this.finishToken(T.dollarBraceL))
                        : (++this.pos, this.finishToken(T.backQuote));
                    if (92 === r)
                      (e += this.input.slice(t, this.pos)),
                        (e += this.readEscapedChar(!0)),
                        (t = this.pos);
                    else if (A(r)) {
                      switch (
                        ((e += this.input.slice(t, this.pos)), ++this.pos, r)
                      ) {
                        case 13:
                          10 === this.input.charCodeAt(this.pos) && ++this.pos;
                        case 10:
                          e += "\n";
                          break;
                        default:
                          e += String.fromCharCode(r);
                      }
                      this.options.locations &&
                        (++this.curLine, (this.lineStart = this.pos)),
                        (t = this.pos);
                    } else ++this.pos;
                  }
                }),
                (Le.readInvalidTemplateToken = function () {
                  for (; this.pos < this.input.length; this.pos++)
                    switch (this.input[this.pos]) {
                      case "\\":
                        ++this.pos;
                        break;
                      case "$":
                        if ("{" !== this.input[this.pos + 1]) break;
                      case "`":
                        return this.finishToken(
                          T.invalidTemplate,
                          this.input.slice(this.start, this.pos)
                        );
                    }
                  this.raise(this.start, "Unterminated template");
                }),
                (Le.readEscapedChar = function (e) {
                  var t = this.input.charCodeAt(++this.pos);
                  switch ((++this.pos, t)) {
                    case 110:
                      return "\n";
                    case 114:
                      return "\r";
                    case 120:
                      return String.fromCharCode(this.readHexChar(2));
                    case 117:
                      return Fe(this.readCodePoint());
                    case 116:
                      return "\t";
                    case 98:
                      return "\b";
                    case 118:
                      return "\v";
                    case 102:
                      return "\f";
                    case 13:
                      10 === this.input.charCodeAt(this.pos) && ++this.pos;
                    case 10:
                      return (
                        this.options.locations &&
                          ((this.lineStart = this.pos), ++this.curLine),
                        ""
                      );
                    case 56:
                    case 57:
                      if (e) {
                        var r = this.pos - 1;
                        return (
                          this.invalidStringToken(
                            r,
                            "Invalid escape sequence in template string"
                          ),
                          null
                        );
                      }
                    default:
                      if (t >= 48 && t <= 55) {
                        var n = this.input
                            .substr(this.pos - 1, 3)
                            .match(/^[0-7]+/)[0],
                          i = parseInt(n, 8);
                        return (
                          i > 255 &&
                            ((n = n.slice(0, -1)), (i = parseInt(n, 8))),
                          (this.pos += n.length - 1),
                          (t = this.input.charCodeAt(this.pos)),
                          ("0" === n && 56 !== t && 57 !== t) ||
                            (!this.strict && !e) ||
                            this.invalidStringToken(
                              this.pos - 1 - n.length,
                              e
                                ? "Octal literal in template string"
                                : "Octal literal in strict mode"
                            ),
                          String.fromCharCode(i)
                        );
                      }
                      return A(t) ? "" : String.fromCharCode(t);
                  }
                }),
                (Le.readHexChar = function (e) {
                  var t = this.pos,
                    r = this.readInt(16, e);
                  return (
                    null === r &&
                      this.invalidStringToken(
                        t,
                        "Bad character escape sequence"
                      ),
                    r
                  );
                }),
                (Le.readWord1 = function () {
                  this.containsEsc = !1;
                  for (
                    var e = "",
                      t = !0,
                      r = this.pos,
                      n = this.options.ecmaVersion >= 6;
                    this.pos < this.input.length;

                  ) {
                    var i = this.fullCharCodeAtPos();
                    if (d(i, n)) this.pos += i <= 65535 ? 1 : 2;
                    else {
                      if (92 !== i) break;
                      (this.containsEsc = !0),
                        (e += this.input.slice(r, this.pos));
                      var s = this.pos;
                      117 !== this.input.charCodeAt(++this.pos) &&
                        this.invalidStringToken(
                          this.pos,
                          "Expecting Unicode escape sequence \\uXXXX"
                        ),
                        ++this.pos;
                      var a = this.readCodePoint();
                      (t ? p : d)(a, n) ||
                        this.invalidStringToken(s, "Invalid Unicode escape"),
                        (e += Fe(a)),
                        (r = this.pos);
                    }
                    t = !1;
                  }
                  return e + this.input.slice(r, this.pos);
                }),
                (Le.readWord = function () {
                  var e = this.readWord1(),
                    t = T.name;
                  return (
                    this.keywords.test(e) && (t = y[e]), this.finishToken(t, e)
                  );
                }),
                (G.acorn = {
                  Parser: G,
                  version: "7.4.0",
                  defaultOptions: N,
                  Position: L,
                  SourceLocation: R,
                  getLineInfo: F,
                  Node: se,
                  TokenType: m,
                  tokTypes: T,
                  keywordTypes: y,
                  TokContext: ue,
                  tokContexts: le,
                  isIdentifierChar: d,
                  isIdentifierStart: p,
                  Token: $e,
                  isNewLine: A,
                  lineBreak: v,
                  lineBreakG: S,
                  nonASCIIwhitespace: _,
                }),
                (e.Node = se),
                (e.Parser = G),
                (e.Position = L),
                (e.SourceLocation = R),
                (e.TokContext = ue),
                (e.Token = $e),
                (e.TokenType = m),
                (e.defaultOptions = N),
                (e.getLineInfo = F),
                (e.isIdentifierChar = d),
                (e.isIdentifierStart = p),
                (e.isNewLine = A),
                (e.keywordTypes = y),
                (e.lineBreak = v),
                (e.lineBreakG = S),
                (e.nonASCIIwhitespace = _),
                (e.parse = function (e, t) {
                  return G.parse(e, t);
                }),
                (e.parseExpressionAt = function (e, t, r) {
                  return G.parseExpressionAt(e, t, r);
                }),
                (e.tokContexts = le),
                (e.tokTypes = T),
                (e.tokenizer = function (e, t) {
                  return G.tokenizer(e, t);
                }),
                (e.version = "7.4.0"),
                Object.defineProperty(e, "__esModule", { value: !0 });
            })(
              "object" == typeof r && void 0 !== t
                ? r
                : ((n = n || self).acorn = {})
            );
        },
        {},
      ],
      2: [function (e, t, r) {}, {}],
      3: [
        function (e, t, r) {
          function n(e, t = {}) {
            const {
                contextName: r = "gl",
                throwGetError: n,
                useTrackablePrimitives: o,
                readPixelsFile: u,
                recording: l = [],
                variables: h = {},
                onReadPixels: c,
                onUnrecognizedArgumentLookup: p,
              } = t,
              d = new Proxy(e, {
                get: function (t, d) {
                  switch (d) {
                    case "addComment":
                      return E;
                    case "checkThrowError":
                      return w;
                    case "getReadPixelsVariableName":
                      return g;
                    case "insertVariable":
                      return v;
                    case "reset":
                      return T;
                    case "setIndent":
                      return A;
                    case "toString":
                      return b;
                    case "getContextVariableName":
                      return I;
                  }
                  if ("function" == typeof e[d])
                    return function () {
                      switch (d) {
                        case "getError":
                          return (
                            n
                              ? l.push(
                                  `${y}if (${r}.getError() !== ${r}.NONE) throw new Error('error');`
                                )
                              : l.push(`${y}${r}.getError();`),
                            e.getError()
                          );
                        case "getExtension": {
                          const t = `${r}Variables${m.length}`;
                          l.push(
                            `${y}const ${t} = ${r}.getExtension('${arguments[0]}');`
                          );
                          const n = e.getExtension(arguments[0]);
                          if (n && "object" == typeof n) {
                            const e = i(n, {
                              getEntity: S,
                              useTrackablePrimitives: o,
                              recording: l,
                              contextName: t,
                              contextVariables: m,
                              variables: h,
                              indent: y,
                              onUnrecognizedArgumentLookup: p,
                            });
                            return m.push(e), e;
                          }
                          return m.push(null), n;
                        }
                        case "readPixels":
                          const t = m.indexOf(arguments[6]);
                          let a;
                          if (-1 === t) {
                            const e = (function (e) {
                              if (h)
                                for (const t in h) if (h[t] === e) return t;
                              return null;
                            })(arguments[6]);
                            e
                              ? ((a = e), l.push(`${y}${e}`))
                              : ((a = `${r}Variable${m.length}`),
                                m.push(arguments[6]),
                                l.push(
                                  `${y}const ${a} = new ${arguments[6].constructor.name}(${arguments[6].length});`
                                ));
                          } else a = `${r}Variable${t}`;
                          g = a;
                          const f = [
                            arguments[0],
                            arguments[1],
                            arguments[2],
                            arguments[3],
                            S(arguments[4]),
                            S(arguments[5]),
                            a,
                          ];
                          return (
                            l.push(`${y}${r}.readPixels(${f.join(", ")});`),
                            u &&
                              (function (e, t) {
                                const n = `${r}Variable${m.length}`,
                                  i = `imageDatum${x}`;
                                l.push(
                                  `${y}let ${i} = ["P3\\n# ${u}.ppm\\n", ${e}, ' ', ${t}, "\\n255\\n"].join("");`
                                ),
                                  l.push(
                                    `${y}for (let i = 0; i < ${i}.length; i += 4) {`
                                  ),
                                  l.push(
                                    `${y}  ${i} += ${n}[i] + ' ' + ${n}[i + 1] + ' ' + ${n}[i + 2] + ' ';`
                                  ),
                                  l.push(`${y}}`),
                                  l.push(
                                    `${y}if (typeof require !== "undefined") {`
                                  ),
                                  l.push(
                                    `${y}  require('fs').writeFileSync('./${u}.ppm', ${i});`
                                  ),
                                  l.push(`${y}}`),
                                  x++;
                              })(arguments[2], arguments[3]),
                            c && c(a, f),
                            e.readPixels.apply(e, arguments)
                          );
                        case "drawBuffers":
                          return (
                            l.push(
                              `${y}${r}.drawBuffers([${s(arguments[0], {
                                contextName: r,
                                contextVariables: m,
                                getEntity: S,
                                addVariable: _,
                                variables: h,
                                onUnrecognizedArgumentLookup: p,
                              })}]);`
                            ),
                            e.drawBuffers(arguments[0])
                          );
                      }
                      let t = e[d].apply(e, arguments);
                      switch (typeof t) {
                        case "undefined":
                          return void l.push(`${y}${k(d, arguments)};`);
                        case "number":
                        case "boolean":
                          if (o && -1 === m.indexOf(a(t))) {
                            l.push(
                              `${y}const ${r}Variable${m.length} = ${k(
                                d,
                                arguments
                              )};`
                            ),
                              m.push((t = a(t)));
                            break;
                          }
                        default:
                          null === t
                            ? l.push(`${k(d, arguments)};`)
                            : l.push(
                                `${y}const ${r}Variable${m.length} = ${k(
                                  d,
                                  arguments
                                )};`
                              ),
                            m.push(t);
                      }
                      return t;
                    };
                  return (f[e[d]] = d), e[d];
                },
              }),
              m = [],
              f = {};
            let g,
              x = 0,
              y = "";
            return d;
            function b() {
              return l.join("\n");
            }
            function T() {
              for (; l.length > 0; ) l.pop();
            }
            function v(e, t) {
              h[e] = t;
            }
            function S(e) {
              const t = f[e];
              return t ? r + "." + t : e;
            }
            function A(e) {
              y = " ".repeat(e);
            }
            function _(e, t) {
              const n = `${r}Variable${m.length}`;
              return l.push(`${y}const ${n} = ${t};`), m.push(e), n;
            }
            function E(e) {
              l.push(`${y}// ${e}`);
            }
            function w() {
              l.push(
                `${y}(() => {\n${y}const error = ${r}.getError();\n${y}if (error !== ${r}.NONE) {\n${y}  const names = Object.getOwnPropertyNames(gl);\n${y}  for (let i = 0; i < names.length; i++) {\n${y}    const name = names[i];\n${y}    if (${r}[name] === error) {\n${y}      throw new Error('${r} threw ' + name);\n${y}    }\n${y}  }\n${y}}\n${y}})();`
              );
            }
            function k(e, t) {
              return `${r}.${e}(${s(t, {
                contextName: r,
                contextVariables: m,
                getEntity: S,
                addVariable: _,
                variables: h,
                onUnrecognizedArgumentLookup: p,
              })})`;
            }
            function I(e) {
              const t = m.indexOf(e);
              return -1 !== t ? `${r}Variable${t}` : null;
            }
          }
          function i(e, t) {
            const r = new Proxy(e, {
                get: function (t, r) {
                  if ("function" == typeof t[r])
                    return function () {
                      switch (r) {
                        case "drawBuffersWEBGL":
                          return (
                            h.push(
                              `${p}${i}.drawBuffersWEBGL([${s(arguments[0], {
                                contextName: i,
                                contextVariables: o,
                                getEntity: m,
                                addVariable: g,
                                variables: c,
                                onUnrecognizedArgumentLookup: d,
                              })}]);`
                            ),
                            e.drawBuffersWEBGL(arguments[0])
                          );
                      }
                      let t = e[r].apply(e, arguments);
                      switch (typeof t) {
                        case "undefined":
                          return void h.push(`${p}${f(r, arguments)};`);
                        case "number":
                        case "boolean":
                          l && -1 === o.indexOf(a(t))
                            ? (h.push(
                                `${p}const ${i}Variable${o.length} = ${f(
                                  r,
                                  arguments
                                )};`
                              ),
                              o.push((t = a(t))))
                            : (h.push(
                                `${p}const ${i}Variable${o.length} = ${f(
                                  r,
                                  arguments
                                )};`
                              ),
                              o.push(t));
                          break;
                        default:
                          null === t
                            ? h.push(`${f(r, arguments)};`)
                            : h.push(
                                `${p}const ${i}Variable${o.length} = ${f(
                                  r,
                                  arguments
                                )};`
                              ),
                            o.push(t);
                      }
                      return t;
                    };
                  return (n[e[r]] = r), e[r];
                },
              }),
              n = {},
              {
                contextName: i,
                contextVariables: o,
                getEntity: u,
                useTrackablePrimitives: l,
                recording: h,
                variables: c,
                indent: p,
                onUnrecognizedArgumentLookup: d,
              } = t;
            return r;
            function m(e) {
              return n.hasOwnProperty(e) ? `${i}.${n[e]}` : u(e);
            }
            function f(e, t) {
              return `${i}.${e}(${s(t, {
                contextName: i,
                contextVariables: o,
                getEntity: m,
                addVariable: g,
                variables: c,
                onUnrecognizedArgumentLookup: d,
              })})`;
            }
            function g(e, t) {
              const r = `${i}Variable${o.length}`;
              return o.push(e), h.push(`${p}const ${r} = ${t};`), r;
            }
          }
          function s(e, t) {
            const { variables: r, onUnrecognizedArgumentLookup: n } = t;
            return Array.from(e)
              .map((e) => {
                const i = (function (e) {
                  if (r)
                    for (const t in r)
                      if (r.hasOwnProperty(t) && r[t] === e) return t;
                  if (n) return n(e);
                  return null;
                })(e);
                return (
                  i ||
                  (function (e, t) {
                    const {
                      contextName: r,
                      contextVariables: n,
                      getEntity: i,
                      addVariable: s,
                      onUnrecognizedArgumentLookup: a,
                    } = t;
                    if (void 0 === e) return "undefined";
                    if (null === e) return "null";
                    const o = n.indexOf(e);
                    if (o > -1) return `${r}Variable${o}`;
                    switch (e.constructor.name) {
                      case "String":
                        const t = /\n/.test(e),
                          r = /'/.test(e),
                          n = /"/.test(e);
                        return t
                          ? "`" + e + "`"
                          : r && !n
                          ? '"' + e + '"'
                          : "'" + e + "'";
                      case "Number":
                      case "Boolean":
                        return i(e);
                      case "Array":
                        return s(
                          e,
                          `new ${e.constructor.name}([${Array.from(e).join(
                            ","
                          )}])`
                        );
                      case "Float32Array":
                      case "Uint8Array":
                      case "Uint16Array":
                      case "Int32Array":
                        return s(
                          e,
                          `new ${e.constructor.name}(${JSON.stringify(
                            Array.from(e)
                          )})`
                        );
                      default:
                        if (a) {
                          const t = a(e);
                          if (t) return t;
                        }
                        throw new Error(
                          `unrecognized argument type ${e.constructor.name}`
                        );
                    }
                  })(e, t)
                );
              })
              .join(", ");
          }
          function a(e) {
            return new e.constructor(e);
          }
          void 0 !== t && (t.exports = { glWiretap: n, glExtensionWiretap: i }),
            "undefined" != typeof window &&
              ((n.glExtensionWiretap = i), (window.glWiretap = n));
        },
        {},
      ],
      4: [
        function (e, t, r) {
          function n(e) {
            const t = new Array(e.length);
            for (let r = 0; r < e.length; r++) {
              const n = e[r];
              n.toArray ? (t[r] = n.toArray()) : (t[r] = n);
            }
            return t;
          }
          function i(e) {
            (e.setOutput = (t) => {
              (e.output = a(t)), e.graphical && s(e);
            }),
              (e.toJSON = () => {
                throw new Error("Not usable with gpuMock");
              }),
              (e.setConstants = (t) => ((e.constants = t), e)),
              (e.setGraphical = (t) => ((e.graphical = t), e)),
              (e.setCanvas = (t) => ((e.canvas = t), e)),
              (e.setContext = (t) => ((e.context = t), e)),
              (e.destroy = () => {}),
              (e.validateSettings = () => {}),
              e.graphical && e.output && s(e),
              (e.exec = function () {
                return new Promise((t, r) => {
                  try {
                    t(e.apply(e, arguments));
                  } catch (e) {
                    r(e);
                  }
                });
              }),
              (e.getPixels = (t) => {
                const { x: r, y: n } = e.output;
                return t
                  ? (function (e, t, r) {
                      const n = (r / 2) | 0,
                        i = 4 * t,
                        s = new Uint8ClampedArray(4 * t),
                        a = e.slice(0);
                      for (let e = 0; e < n; ++e) {
                        const t = e * i,
                          n = (r - e - 1) * i;
                        s.set(a.subarray(t, t + i)),
                          a.copyWithin(t, n, n + i),
                          a.set(s, n);
                      }
                      return a;
                    })(e._imageData.data, r, n)
                  : e._imageData.data.slice(0);
              }),
              (e.color = function (t, r, n, i) {
                void 0 === i && (i = 1),
                  (t = Math.floor(255 * t)),
                  (r = Math.floor(255 * r)),
                  (n = Math.floor(255 * n)),
                  (i = Math.floor(255 * i));
                const s = e.output.x,
                  a = e.output.y,
                  o = e.thread.x + (a - e.thread.y - 1) * s;
                (e._colorData[4 * o + 0] = t),
                  (e._colorData[4 * o + 1] = r),
                  (e._colorData[4 * o + 2] = n),
                  (e._colorData[4 * o + 3] = i);
              });
            const t = () => e,
              r = [
                "setWarnVarUsage",
                "setArgumentTypes",
                "setTactic",
                "setOptimizeFloatMemory",
                "setDebug",
                "setLoopMaxIterations",
                "setConstantTypes",
                "setFunctions",
                "setNativeFunctions",
                "setInjectedNative",
                "setPipeline",
                "setPrecision",
                "setOutputToTexture",
                "setImmutable",
                "setStrictIntegers",
                "setDynamicOutput",
                "setHardcodeConstants",
                "setDynamicArguments",
                "setUseLegacyEncoder",
                "setWarnVarUsage",
                "addSubKernel",
              ];
            for (let n = 0; n < r.length; n++) e[r[n]] = t;
            return e;
          }
          function s(e) {
            const { x: t, y: r } = e.output;
            if (e.context && e.context.createImageData) {
              const n = new Uint8ClampedArray(t * r * 4);
              (e._imageData = e.context.createImageData(t, r)),
                (e._colorData = n);
            } else {
              const n = new Uint8ClampedArray(t * r * 4);
              (e._imageData = { data: n }), (e._colorData = n);
            }
          }
          function a(e) {
            let t = null;
            if (e.length)
              if (3 === e.length) {
                const [r, n, i] = e;
                t = { x: r, y: n, z: i };
              } else if (2 === e.length) {
                const [r, n] = e;
                t = { x: r, y: n };
              } else {
                const [r] = e;
                t = { x: r };
              }
            else t = e;
            return t;
          }
          t.exports = {
            gpuMock: function (e, t = {}) {
              const r = t.output ? a(t.output) : null;
              function s() {
                return s.output.z
                  ? function () {
                      const e = n(arguments),
                        t = new Array(this.output.z);
                      for (let r = 0; r < this.output.z; r++) {
                        const n = new Array(this.output.y);
                        for (let t = 0; t < this.output.y; t++) {
                          const i = new Float32Array(this.output.x);
                          for (let n = 0; n < this.output.x; n++)
                            (this.thread.x = n),
                              (this.thread.y = t),
                              (this.thread.z = r),
                              (i[n] = this._fn.apply(this, e));
                          n[t] = i;
                        }
                        t[r] = n;
                      }
                      return t;
                    }.apply(s, arguments)
                  : s.output.y
                  ? s.graphical
                    ? function () {
                        const e = n(arguments);
                        for (let t = 0; t < this.output.y; t++)
                          for (let r = 0; r < this.output.x; r++)
                            (this.thread.x = r),
                              (this.thread.y = t),
                              (this.thread.z = 0),
                              this._fn.apply(this, e);
                      }.apply(s, arguments)
                    : function () {
                        const e = n(arguments),
                          t = new Array(this.output.y);
                        for (let r = 0; r < this.output.y; r++) {
                          const n = new Float32Array(this.output.x);
                          for (let t = 0; t < this.output.x; t++)
                            (this.thread.x = t),
                              (this.thread.y = r),
                              (this.thread.z = 0),
                              (n[t] = this._fn.apply(this, e));
                          t[r] = n;
                        }
                        return t;
                      }.apply(s, arguments)
                  : function () {
                      const e = n(arguments),
                        t = new Float32Array(this.output.x);
                      for (let r = 0; r < this.output.x; r++)
                        (this.thread.x = r),
                          (this.thread.y = 0),
                          (this.thread.z = 0),
                          (t[r] = this._fn.apply(this, e));
                      return t;
                    }.apply(s, arguments);
              }
              return (
                (s._fn = e),
                (s.constants = t.constants || null),
                (s.context = t.context || null),
                (s.canvas = t.canvas || null),
                (s.graphical = t.graphical || !1),
                (s._imageData = null),
                (s._colorData = null),
                (s.output = r),
                (s.thread = { x: 0, y: 0, z: 0 }),
                i(s)
              );
            },
          };
        },
        {},
      ],
      5: [
        function (e, t, r) {
          const { utils: n } = e("./utils");
          t.exports = {
            alias: function (e, t) {
              const r = t.toString();
              return new Function(
                `return function ${e} (${n
                  .getArgumentNamesFromString(r)
                  .join(", ")}) {\n  ${n.getFunctionBodyFromString(r)}\n}`
              )();
            },
          };
        },
        { "./utils": 114 },
      ],
      6: [
        function (e, t, r) {
          const { FunctionNode: n } = e("../function-node");
          t.exports = {
            CPUFunctionNode: class extends n {
              astFunction(e, t) {
                if (!this.isRootKernel) {
                  t.push("function"),
                    t.push(" "),
                    t.push(this.name),
                    t.push("(");
                  for (let e = 0; e < this.argumentNames.length; ++e) {
                    const r = this.argumentNames[e];
                    e > 0 && t.push(", "), t.push("user_"), t.push(r);
                  }
                  t.push(") {\n");
                }
                for (let r = 0; r < e.body.body.length; ++r)
                  this.astGeneric(e.body.body[r], t), t.push("\n");
                return this.isRootKernel || t.push("}\n"), t;
              }
              astReturnStatement(e, t) {
                const r = this.returnType || this.getType(e.argument);
                return (
                  this.returnType || (this.returnType = r),
                  this.isRootKernel
                    ? (t.push(this.leadingReturnStatement),
                      this.astGeneric(e.argument, t),
                      t.push(";\n"),
                      t.push(this.followingReturnStatement),
                      t.push("continue;\n"))
                    : this.isSubKernel
                    ? (t.push(`subKernelResult_${this.name} = `),
                      this.astGeneric(e.argument, t),
                      t.push(";"),
                      t.push(`return subKernelResult_${this.name};`))
                    : (t.push("return "),
                      this.astGeneric(e.argument, t),
                      t.push(";")),
                  t
                );
              }
              astLiteral(e, t) {
                if (isNaN(e.value))
                  throw this.astErrorOutput(
                    "Non-numeric literal not supported : " + e.value,
                    e
                  );
                return t.push(e.value), t;
              }
              astBinaryExpression(e, t) {
                return (
                  t.push("("),
                  this.astGeneric(e.left, t),
                  t.push(e.operator),
                  this.astGeneric(e.right, t),
                  t.push(")"),
                  t
                );
              }
              astIdentifierExpression(e, t) {
                if ("Identifier" !== e.type)
                  throw this.astErrorOutput(
                    "IdentifierExpression - not an Identifier",
                    e
                  );
                switch (e.name) {
                  case "Infinity":
                    t.push("Infinity");
                    break;
                  default:
                    this.constants && this.constants.hasOwnProperty(e.name)
                      ? t.push("constants_" + e.name)
                      : t.push("user_" + e.name);
                }
                return t;
              }
              astForStatement(e, t) {
                if ("ForStatement" !== e.type)
                  throw this.astErrorOutput("Invalid for statement", e);
                const r = [],
                  n = [],
                  i = [],
                  s = [];
                let a = null;
                if (e.init) {
                  this.pushState("in-for-loop-init"),
                    this.astGeneric(e.init, r);
                  for (let e = 0; e < r.length; e++)
                    r[e].includes && r[e].includes(",") && (a = !1);
                  this.popState("in-for-loop-init");
                } else a = !1;
                if (
                  (e.test ? this.astGeneric(e.test, n) : (a = !1),
                  e.update ? this.astGeneric(e.update, i) : (a = !1),
                  e.body &&
                    (this.pushState("loop-body"),
                    this.astGeneric(e.body, s),
                    this.popState("loop-body")),
                  null === a &&
                    (a = this.isSafe(e.init) && this.isSafe(e.test)),
                  a)
                )
                  t.push(`for (${r.join("")};${n.join("")};${i.join("")}){\n`),
                    t.push(s.join("")),
                    t.push("}\n");
                else {
                  const e = this.getInternalVariableName("safeI");
                  r.length > 0 && t.push(r.join(""), ";\n"),
                    t.push(`for (let ${e}=0;${e}<LOOP_MAX;${e}++){\n`),
                    n.length > 0 && t.push(`if (!${n.join("")}) break;\n`),
                    t.push(s.join("")),
                    t.push(`\n${i.join("")};`),
                    t.push("}\n");
                }
                return t;
              }
              astWhileStatement(e, t) {
                if ("WhileStatement" !== e.type)
                  throw this.astErrorOutput("Invalid while statement", e);
                return (
                  t.push("for (let i = 0; i < LOOP_MAX; i++) {"),
                  t.push("if ("),
                  this.astGeneric(e.test, t),
                  t.push(") {\n"),
                  this.astGeneric(e.body, t),
                  t.push("} else {\n"),
                  t.push("break;\n"),
                  t.push("}\n"),
                  t.push("}\n"),
                  t
                );
              }
              astDoWhileStatement(e, t) {
                if ("DoWhileStatement" !== e.type)
                  throw this.astErrorOutput("Invalid while statement", e);
                return (
                  t.push("for (let i = 0; i < LOOP_MAX; i++) {"),
                  this.astGeneric(e.body, t),
                  t.push("if (!"),
                  this.astGeneric(e.test, t),
                  t.push(") {\n"),
                  t.push("break;\n"),
                  t.push("}\n"),
                  t.push("}\n"),
                  t
                );
              }
              astAssignmentExpression(e, t) {
                const r = this.getDeclaration(e.left);
                if (r && !r.assignable)
                  throw this.astErrorOutput(
                    `Variable ${e.left.name} is not assignable here`,
                    e
                  );
                return (
                  this.astGeneric(e.left, t),
                  t.push(e.operator),
                  this.astGeneric(e.right, t),
                  t
                );
              }
              astBlockStatement(e, t) {
                if (this.isState("loop-body")) {
                  this.pushState("block-body");
                  for (let r = 0; r < e.body.length; r++)
                    this.astGeneric(e.body[r], t);
                  this.popState("block-body");
                } else {
                  t.push("{\n");
                  for (let r = 0; r < e.body.length; r++)
                    this.astGeneric(e.body[r], t);
                  t.push("}\n");
                }
                return t;
              }
              astVariableDeclaration(e, t) {
                t.push(`${e.kind} `);
                const { declarations: r } = e;
                for (let e = 0; e < r.length; e++) {
                  e > 0 && t.push(",");
                  const n = r[e],
                    i = this.getDeclaration(n.id);
                  i.valueType || (i.valueType = this.getType(n.init)),
                    this.astGeneric(n, t);
                }
                return this.isState("in-for-loop-init") || t.push(";"), t;
              }
              astIfStatement(e, t) {
                return (
                  t.push("if ("),
                  this.astGeneric(e.test, t),
                  t.push(")"),
                  "BlockStatement" === e.consequent.type
                    ? this.astGeneric(e.consequent, t)
                    : (t.push(" {\n"),
                      this.astGeneric(e.consequent, t),
                      t.push("\n}\n")),
                  e.alternate &&
                    (t.push("else "),
                    "BlockStatement" === e.alternate.type ||
                    "IfStatement" === e.alternate.type
                      ? this.astGeneric(e.alternate, t)
                      : (t.push(" {\n"),
                        this.astGeneric(e.alternate, t),
                        t.push("\n}\n"))),
                  t
                );
              }
              astSwitchStatement(e, t) {
                const { discriminant: r, cases: n } = e;
                t.push("switch ("), this.astGeneric(r, t), t.push(") {\n");
                for (let e = 0; e < n.length; e++)
                  null !== n[e].test
                    ? (t.push("case "),
                      this.astGeneric(n[e].test, t),
                      t.push(":\n"),
                      n[e].consequent &&
                        n[e].consequent.length > 0 &&
                        (this.astGeneric(n[e].consequent, t),
                        t.push("break;\n")))
                    : (t.push("default:\n"),
                      this.astGeneric(n[e].consequent, t),
                      n[e].consequent &&
                        n[e].consequent.length > 0 &&
                        t.push("break;\n"));
                t.push("\n}");
              }
              astThisExpression(e, t) {
                return t.push("_this"), t;
              }
              astMemberExpression(e, t) {
                const {
                  signature: r,
                  type: n,
                  property: i,
                  xProperty: s,
                  yProperty: a,
                  zProperty: o,
                  name: u,
                  origin: l,
                } = this.getMemberExpressionDetails(e);
                switch (r) {
                  case "this.thread.value":
                    return t.push(`_this.thread.${u}`), t;
                  case "this.output.value":
                    switch (u) {
                      case "x":
                        t.push("outputX");
                        break;
                      case "y":
                        t.push("outputY");
                        break;
                      case "z":
                        t.push("outputZ");
                        break;
                      default:
                        throw this.astErrorOutput("Unexpected expression", e);
                    }
                    return t;
                  case "value":
                    throw this.astErrorOutput("Unexpected expression", e);
                  case "value[]":
                  case "value[][]":
                  case "value[][][]":
                  case "value.value":
                    if ("Math" === l) return t.push(Math[u]), t;
                    switch (i) {
                      case "r":
                        return t.push(`user_${u}[0]`), t;
                      case "g":
                        return t.push(`user_${u}[1]`), t;
                      case "b":
                        return t.push(`user_${u}[2]`), t;
                      case "a":
                        return t.push(`user_${u}[3]`), t;
                    }
                    break;
                  case "this.constants.value":
                  case "this.constants.value[]":
                  case "this.constants.value[][]":
                  case "this.constants.value[][][]":
                    break;
                  case "fn()[]":
                    return (
                      this.astGeneric(e.object, t),
                      t.push("["),
                      this.astGeneric(e.property, t),
                      t.push("]"),
                      t
                    );
                  case "fn()[][]":
                    return (
                      this.astGeneric(e.object.object, t),
                      t.push("["),
                      this.astGeneric(e.object.property, t),
                      t.push("]"),
                      t.push("["),
                      this.astGeneric(e.property, t),
                      t.push("]"),
                      t
                    );
                  default:
                    throw this.astErrorOutput("Unexpected expression", e);
                }
                if (!e.computed)
                  switch (n) {
                    case "Number":
                    case "Integer":
                    case "Float":
                    case "Boolean":
                      return t.push(`${l}_${u}`), t;
                  }
                const h = `${l}_${u}`;
                switch (n) {
                  case "Array(2)":
                  case "Array(3)":
                  case "Array(4)":
                  case "Matrix(2)":
                  case "Matrix(3)":
                  case "Matrix(4)":
                  case "HTMLImageArray":
                  case "ArrayTexture(1)":
                  case "ArrayTexture(2)":
                  case "ArrayTexture(3)":
                  case "ArrayTexture(4)":
                  case "HTMLImage":
                  default:
                    let e, r;
                    if ("constants" === l) {
                      const t = this.constants[u];
                      e = (r = "Input" === this.constantTypes[u])
                        ? t.size
                        : null;
                    } else
                      e = (r = this.isInput(u))
                        ? this.argumentSizes[this.argumentNames.indexOf(u)]
                        : null;
                    t.push(`${h}`),
                      o && a
                        ? r
                          ? (t.push("[("),
                            this.astGeneric(o, t),
                            t.push(
                              `*${
                                this.dynamicArguments
                                  ? "(outputY * outputX)"
                                  : e[1] * e[0]
                              })+(`
                            ),
                            this.astGeneric(a, t),
                            t.push(
                              `*${this.dynamicArguments ? "outputX" : e[0]})+`
                            ),
                            this.astGeneric(s, t),
                            t.push("]"))
                          : (t.push("["),
                            this.astGeneric(o, t),
                            t.push("]"),
                            t.push("["),
                            this.astGeneric(a, t),
                            t.push("]"),
                            t.push("["),
                            this.astGeneric(s, t),
                            t.push("]"))
                        : a
                        ? r
                          ? (t.push("[("),
                            this.astGeneric(a, t),
                            t.push(
                              `*${this.dynamicArguments ? "outputX" : e[0]})+`
                            ),
                            this.astGeneric(s, t),
                            t.push("]"))
                          : (t.push("["),
                            this.astGeneric(a, t),
                            t.push("]"),
                            t.push("["),
                            this.astGeneric(s, t),
                            t.push("]"))
                        : void 0 !== s &&
                          (t.push("["), this.astGeneric(s, t), t.push("]"));
                }
                return t;
              }
              astCallExpression(e, t) {
                if ("CallExpression" !== e.type)
                  throw this.astErrorOutput("Unknown CallExpression", e);
                let r = this.astMemberExpressionUnroll(e.callee);
                this.calledFunctions.indexOf(r) < 0 &&
                  this.calledFunctions.push(r),
                  this.isAstMathFunction(e),
                  this.onFunctionCall &&
                    this.onFunctionCall(this.name, r, e.arguments),
                  t.push(r),
                  t.push("(");
                const n = this.lookupFunctionArgumentTypes(r) || [];
                for (let i = 0; i < e.arguments.length; ++i) {
                  const s = e.arguments[i];
                  let a = this.getType(s);
                  n[i] || this.triggerImplyArgumentType(r, i, a, this),
                    i > 0 && t.push(", "),
                    this.astGeneric(s, t);
                }
                return t.push(")"), t;
              }
              astArrayExpression(e, t) {
                const r = this.getType(e),
                  n = e.elements.length,
                  i = [];
                for (let t = 0; t < n; ++t) {
                  const r = [];
                  this.astGeneric(e.elements[t], r), i.push(r.join(""));
                }
                switch (r) {
                  case "Matrix(2)":
                  case "Matrix(3)":
                  case "Matrix(4)":
                    t.push(`[${i.join(", ")}]`);
                    break;
                  default:
                    t.push(`new Float32Array([${i.join(", ")}])`);
                }
                return t;
              }
              astDebuggerStatement(e, t) {
                return t.push("debugger;"), t;
              }
            },
          };
        },
        { "../function-node": 10 },
      ],
      7: [
        function (e, t, r) {
          const { utils: n } = e("../../utils");
          t.exports = {
            cpuKernelString: function (e, t) {
              const r = [],
                i = [],
                s = [],
                a = !/^function/.test(e.color.toString());
              if (
                (r.push(
                  "  const { context, canvas, constants: incomingConstants } = settings;",
                  `  const output = new Int32Array(${JSON.stringify(
                    Array.from(e.output)
                  )});`,
                  `  const _constantTypes = ${JSON.stringify(
                    e.constantTypes
                  )};`,
                  `  const _constants = ${(function (e, t) {
                    const r = [];
                    for (const n in t) {
                      if (!t.hasOwnProperty(n)) continue;
                      const i = t[n],
                        s = e[n];
                      switch (i) {
                        case "Number":
                        case "Integer":
                        case "Float":
                        case "Boolean":
                          r.push(`${n}:${s}`);
                          break;
                        case "Array(2)":
                        case "Array(3)":
                        case "Array(4)":
                        case "Matrix(2)":
                        case "Matrix(3)":
                        case "Matrix(4)":
                          r.push(
                            `${n}:new ${s.constructor.name}(${JSON.stringify(
                              Array.from(s)
                            )})`
                          );
                      }
                    }
                    return `{ ${r.join()} }`;
                  })(e.constants, e.constantTypes)};`
                ),
                i.push(
                  "    constants: _constants,",
                  "    context,",
                  "    output,",
                  "    thread: {x: 0, y: 0, z: 0},"
                ),
                e.graphical)
              ) {
                r.push(
                  `  const _imageData = context.createImageData(${e.output[0]}, ${e.output[1]});`
                ),
                  r.push(
                    `  const _colorData = new Uint8ClampedArray(${e.output[0]} * ${e.output[1]} * 4);`
                  );
                const t = n.flattenFunctionToString(
                    (a ? "function " : "") + e.color.toString(),
                    {
                      thisLookup: (t) => {
                        switch (t) {
                          case "_colorData":
                            return "_colorData";
                          case "_imageData":
                            return "_imageData";
                          case "output":
                            return "output";
                          case "thread":
                            return "this.thread";
                        }
                        return JSON.stringify(e[t]);
                      },
                      findDependency: (e, t) => null,
                    }
                  ),
                  o = n.flattenFunctionToString(
                    (a ? "function " : "") + e.getPixels.toString(),
                    {
                      thisLookup: (t) => {
                        switch (t) {
                          case "_colorData":
                            return "_colorData";
                          case "_imageData":
                            return "_imageData";
                          case "output":
                            return "output";
                          case "thread":
                            return "this.thread";
                        }
                        return JSON.stringify(e[t]);
                      },
                      findDependency: () => null,
                    }
                  );
                i.push(
                  "    _imageData,",
                  "    _colorData,",
                  `    color: ${t},`
                ),
                  s.push(`  kernel.getPixels = ${o};`);
              }
              const o = [],
                u = Object.keys(e.constantTypes);
              for (let t = 0; t < u.length; t++) o.push(e.constantTypes[u]);
              if (
                -1 !== e.argumentTypes.indexOf("HTMLImageArray") ||
                -1 !== o.indexOf("HTMLImageArray")
              ) {
                const t = n.flattenFunctionToString(
                  (a ? "function " : "") + e._imageTo3DArray.toString(),
                  {
                    doNotDefine: ["canvas"],
                    findDependency: (t, r) =>
                      "this" === t
                        ? (a ? "function " : "") + e[r].toString()
                        : null,
                    thisLookup: (e) => {
                      switch (e) {
                        case "canvas":
                          return;
                        case "context":
                          return "context";
                      }
                    },
                  }
                );
                s.push(t),
                  i.push("    _mediaTo2DArray,"),
                  i.push("    _imageTo3DArray,");
              } else if (
                -1 !== e.argumentTypes.indexOf("HTMLImage") ||
                -1 !== o.indexOf("HTMLImage")
              ) {
                const t = n.flattenFunctionToString(
                  (a ? "function " : "") + e._mediaTo2DArray.toString(),
                  {
                    findDependency: (e, t) => null,
                    thisLookup: (e) => {
                      switch (e) {
                        case "canvas":
                          return "settings.canvas";
                        case "context":
                          return "settings.context";
                      }
                      throw new Error("unhandled thisLookup");
                    },
                  }
                );
                s.push(t), i.push("    _mediaTo2DArray,");
              }
              return `function(settings) {\n${r.join(
                "\n"
              )}\n  for (const p in _constantTypes) {\n    if (!_constantTypes.hasOwnProperty(p)) continue;\n    const type = _constantTypes[p];\n    switch (type) {\n      case 'Number':\n      case 'Integer':\n      case 'Float':\n      case 'Boolean':\n      case 'Array(2)':\n      case 'Array(3)':\n      case 'Array(4)':\n      case 'Matrix(2)':\n      case 'Matrix(3)':\n      case 'Matrix(4)':\n        if (incomingConstants.hasOwnProperty(p)) {\n          console.warn('constant ' + p + ' of type ' + type + ' cannot be resigned');\n        }\n        continue;\n    }\n    if (!incomingConstants.hasOwnProperty(p)) {\n      throw new Error('constant ' + p + ' not found');\n    }\n    _constants[p] = incomingConstants[p];\n  }\n  const kernel = (function() {\n${
                e._kernelString
              }\n  })\n    .apply({ ${i.join("\n")} });\n  ${s.join(
                "\n"
              )}\n  return kernel;\n}`;
            },
          };
        },
        { "../../utils": 114 },
      ],
      8: [
        function (e, t, r) {
          const { Kernel: n } = e("../kernel"),
            { FunctionBuilder: i } = e("../function-builder"),
            { CPUFunctionNode: s } = e("./function-node"),
            { utils: a } = e("../../utils"),
            { cpuKernelString: o } = e("./kernel-string");
          t.exports = {
            CPUKernel: class extends n {
              static getFeatures() {
                return this.features;
              }
              static get features() {
                return Object.freeze({
                  kernelMap: !0,
                  isIntegerDivisionAccurate: !0,
                });
              }
              static get isSupported() {
                return !0;
              }
              static isContextMatch(e) {
                return !1;
              }
              static get mode() {
                return "cpu";
              }
              static nativeFunctionArguments() {
                return null;
              }
              static nativeFunctionReturnType() {
                throw new Error(
                  `Looking up native function return type not supported on ${this.name}`
                );
              }
              static combineKernels(e) {
                return e;
              }
              static getSignature(e, t) {
                return "cpu" + (t.length > 0 ? ":" + t.join(",") : "");
              }
              constructor(e, t) {
                super(e, t),
                  this.mergeSettings(e.settings || t),
                  (this._imageData = null),
                  (this._colorData = null),
                  (this._kernelString = null),
                  (this._prependedString = []),
                  (this.thread = { x: 0, y: 0, z: 0 }),
                  (this.translatedSources = null);
              }
              initCanvas() {
                return "undefined" != typeof document
                  ? document.createElement("canvas")
                  : "undefined" != typeof OffscreenCanvas
                  ? new OffscreenCanvas(0, 0)
                  : void 0;
              }
              initContext() {
                return this.canvas ? this.canvas.getContext("2d") : null;
              }
              initPlugins(e) {
                return [];
              }
              validateSettings(e) {
                if (!this.output || 0 === this.output.length) {
                  if (1 !== e.length)
                    throw new Error(
                      "Auto output only supported for kernels with only one input"
                    );
                  const t = a.getVariableType(e[0], this.strictIntegers);
                  if ("Array" === t) this.output = a.getDimensions(t);
                  else {
                    if ("NumberTexture" !== t && "ArrayTexture(4)" !== t)
                      throw new Error(
                        "Auto output not supported for input type: " + t
                      );
                    this.output = e[0].output;
                  }
                }
                if (this.graphical && 2 !== this.output.length)
                  throw new Error(
                    "Output must have 2 dimensions on graphical mode"
                  );
                this.checkOutput();
              }
              translateSource() {
                if (
                  ((this.leadingReturnStatement =
                    this.output.length > 1 ? "resultX[x] = " : "result[x] = "),
                  this.subKernels)
                ) {
                  const e = [];
                  for (let t = 0; t < this.subKernels.length; t++) {
                    const { name: r } = this.subKernels[t];
                    e.push(
                      this.output.length > 1
                        ? `resultX_${r}[x] = subKernelResult_${r};\n`
                        : `result_${r}[x] = subKernelResult_${r};\n`
                    );
                  }
                  this.followingReturnStatement = e.join("");
                }
                const e = i.fromKernel(this, s);
                (this.translatedSources = e.getPrototypes("kernel")),
                  this.graphical ||
                    this.returnType ||
                    (this.returnType = e.getKernelResultType());
              }
              build() {
                if (this.built) return;
                if (
                  (this.setupConstants(),
                  this.setupArguments(arguments),
                  this.validateSettings(arguments),
                  this.translateSource(),
                  this.graphical)
                ) {
                  const { canvas: e, output: t } = this;
                  if (!e)
                    throw new Error(
                      "no canvas available for using graphical output"
                    );
                  const r = t[0],
                    n = t[1] || 1;
                  (e.width = r),
                    (e.height = n),
                    (this._imageData = this.context.createImageData(r, n)),
                    (this._colorData = new Uint8ClampedArray(r * n * 4));
                }
                const e = this.getKernelString();
                (this.kernelString = e),
                  this.debug &&
                    (console.log("Function output:"), console.log(e));
                try {
                  this.run = new Function([], e).bind(this)();
                } catch (e) {
                  console.error(
                    "An error occurred compiling the javascript: ",
                    e
                  );
                }
                this.buildSignature(arguments), (this.built = !0);
              }
              color(e, t, r, n) {
                void 0 === n && (n = 1),
                  (e = Math.floor(255 * e)),
                  (t = Math.floor(255 * t)),
                  (r = Math.floor(255 * r)),
                  (n = Math.floor(255 * n));
                const i = this.output[0],
                  s = this.output[1],
                  a = this.thread.x + (s - this.thread.y - 1) * i;
                (this._colorData[4 * a + 0] = e),
                  (this._colorData[4 * a + 1] = t),
                  (this._colorData[4 * a + 2] = r),
                  (this._colorData[4 * a + 3] = n);
              }
              getKernelString() {
                if (null !== this._kernelString) return this._kernelString;
                let e = null,
                  { translatedSources: t } = this;
                return (
                  t.length > 1
                    ? (t = t.filter((t) =>
                        /^function/.test(t) ? t : ((e = t), !1)
                      ))
                    : (e = t.shift()),
                  (this._kernelString = `  const LOOP_MAX = ${this._getLoopMaxString()};\n  ${
                    this.injectedNative || ""
                  }\n  const _this = this;\n  ${this._resultKernelHeader()}\n  ${this._processConstants()}\n  return (${this.argumentNames
                    .map((e) => "user_" + e)
                    .join(", ")}) => {\n    ${this._prependedString.join(
                    ""
                  )}\n    ${this._earlyThrows()}\n    ${this._processArguments()}\n    ${
                    this.graphical
                      ? this._graphicalKernelBody(e)
                      : this._resultKernelBody(e)
                  }\n    ${t.length > 0 ? t.join("\n") : ""}\n  };`)
                );
              }
              toString() {
                return o(this);
              }
              _getLoopMaxString() {
                return this.loopMaxIterations
                  ? ` ${parseInt(this.loopMaxIterations)};`
                  : " 1000;";
              }
              _processConstants() {
                if (!this.constants) return "";
                const e = [];
                for (let t in this.constants)
                  switch (this.constantTypes[t]) {
                    case "HTMLCanvas":
                    case "OffscreenCanvas":
                    case "HTMLImage":
                    case "ImageBitmap":
                    case "ImageData":
                    case "HTMLVideo":
                      e.push(
                        `    const constants_${t} = this._mediaTo2DArray(this.constants.${t});\n`
                      );
                      break;
                    case "HTMLImageArray":
                      e.push(
                        `    const constants_${t} = this._imageTo3DArray(this.constants.${t});\n`
                      );
                      break;
                    case "Input":
                      e.push(
                        `    const constants_${t} = this.constants.${t}.value;\n`
                      );
                      break;
                    default:
                      e.push(
                        `    const constants_${t} = this.constants.${t};\n`
                      );
                  }
                return e.join("");
              }
              _earlyThrows() {
                if (this.graphical) return "";
                if (this.immutable) return "";
                if (!this.pipeline) return "";
                const e = [];
                for (let t = 0; t < this.argumentTypes.length; t++)
                  "Array" === this.argumentTypes[t] &&
                    e.push(this.argumentNames[t]);
                if (0 === e.length) return "";
                const t = [];
                for (let r = 0; r < e.length; r++) {
                  const n = e[r],
                    i = this._mapSubKernels(
                      (e) => `user_${n} === result_${e.name}`
                    ).join(" || ");
                  t.push(`user_${n} === result${i ? ` || ${i}` : ""}`);
                }
                return `if (${t.join(
                  " || "
                )}) throw new Error('Source and destination arrays are the same.  Use immutable = true');`;
              }
              _processArguments() {
                const e = [];
                for (let t = 0; t < this.argumentTypes.length; t++) {
                  const r = `user_${this.argumentNames[t]}`;
                  switch (this.argumentTypes[t]) {
                    case "HTMLCanvas":
                    case "OffscreenCanvas":
                    case "HTMLImage":
                    case "ImageBitmap":
                    case "ImageData":
                    case "HTMLVideo":
                      e.push(`    ${r} = this._mediaTo2DArray(${r});\n`);
                      break;
                    case "HTMLImageArray":
                      e.push(`    ${r} = this._imageTo3DArray(${r});\n`);
                      break;
                    case "Input":
                      e.push(`    ${r} = ${r}.value;\n`);
                      break;
                    case "ArrayTexture(1)":
                    case "ArrayTexture(2)":
                    case "ArrayTexture(3)":
                    case "ArrayTexture(4)":
                    case "NumberTexture":
                    case "MemoryOptimizedNumberTexture":
                      e.push(
                        `\n    if (${r}.toArray) {\n      if (!_this.textureCache) {\n        _this.textureCache = [];\n        _this.arrayCache = [];\n      }\n      const textureIndex = _this.textureCache.indexOf(${r});\n      if (textureIndex !== -1) {\n        ${r} = _this.arrayCache[textureIndex];\n      } else {\n        _this.textureCache.push(${r});\n        ${r} = ${r}.toArray();\n        _this.arrayCache.push(${r});\n      }\n    }`
                      );
                  }
                }
                return e.join("");
              }
              _mediaTo2DArray(e) {
                const t = this.canvas,
                  r = e.width > 0 ? e.width : e.videoWidth,
                  n = e.height > 0 ? e.height : e.videoHeight;
                t.width < r && (t.width = r), t.height < n && (t.height = n);
                const i = this.context;
                let s;
                e.constructor === ImageData
                  ? (s = e.data)
                  : (i.drawImage(e, 0, 0, r, n),
                    (s = i.getImageData(0, 0, r, n).data));
                const a = new Array(n);
                let o = 0;
                for (let e = n - 1; e >= 0; e--) {
                  const t = (a[e] = new Array(r));
                  for (let e = 0; e < r; e++) {
                    const r = new Float32Array(4);
                    (r[0] = s[o++] / 255),
                      (r[1] = s[o++] / 255),
                      (r[2] = s[o++] / 255),
                      (r[3] = s[o++] / 255),
                      (t[e] = r);
                  }
                }
                return a;
              }
              getPixels(e) {
                const [t, r] = this.output;
                return e
                  ? a.flipPixels(this._imageData.data, t, r)
                  : this._imageData.data.slice(0);
              }
              _imageTo3DArray(e) {
                const t = new Array(e.length);
                for (let r = 0; r < e.length; r++)
                  t[r] = this._mediaTo2DArray(e[r]);
                return t;
              }
              _resultKernelHeader() {
                if (this.graphical) return "";
                if (this.immutable) return "";
                if (!this.pipeline) return "";
                switch (this.output.length) {
                  case 1:
                    return this._mutableKernel1DResults();
                  case 2:
                    return this._mutableKernel2DResults();
                  case 3:
                    return this._mutableKernel3DResults();
                }
              }
              _resultKernelBody(e) {
                switch (this.output.length) {
                  case 1:
                    return (
                      (!this.immutable && this.pipeline
                        ? this._resultMutableKernel1DLoop(e)
                        : this._resultImmutableKernel1DLoop(e)) +
                      this._kernelOutput()
                    );
                  case 2:
                    return (
                      (!this.immutable && this.pipeline
                        ? this._resultMutableKernel2DLoop(e)
                        : this._resultImmutableKernel2DLoop(e)) +
                      this._kernelOutput()
                    );
                  case 3:
                    return (
                      (!this.immutable && this.pipeline
                        ? this._resultMutableKernel3DLoop(e)
                        : this._resultImmutableKernel3DLoop(e)) +
                      this._kernelOutput()
                    );
                  default:
                    throw new Error("unsupported size kernel");
                }
              }
              _graphicalKernelBody(e) {
                switch (this.output.length) {
                  case 2:
                    return (
                      this._graphicalKernel2DLoop(e) + this._graphicalOutput()
                    );
                  default:
                    throw new Error("unsupported size kernel");
                }
              }
              _graphicalOutput() {
                return "\n    this._imageData.data.set(this._colorData);\n    this.context.putImageData(this._imageData, 0, 0);\n    return;";
              }
              _getKernelResultTypeConstructorString() {
                switch (this.returnType) {
                  case "LiteralInteger":
                  case "Number":
                  case "Integer":
                  case "Float":
                    return "Float32Array";
                  case "Array(2)":
                  case "Array(3)":
                  case "Array(4)":
                    return "Array";
                  default:
                    if (this.graphical) return "Float32Array";
                    throw new Error(`unhandled returnType ${this.returnType}`);
                }
              }
              _resultImmutableKernel1DLoop(e) {
                const t = this._getKernelResultTypeConstructorString();
                return `  const outputX = _this.output[0];\n    const result = new ${t}(outputX);\n    ${this._mapSubKernels(
                  (e) => `const result_${e.name} = new ${t}(outputX);\n`
                ).join("    ")}\n    ${this._mapSubKernels(
                  (e) => `let subKernelResult_${e.name};\n`
                ).join(
                  "    "
                )}\n    for (let x = 0; x < outputX; x++) {\n      this.thread.x = x;\n      this.thread.y = 0;\n      this.thread.z = 0;\n      ${e}\n    }`;
              }
              _mutableKernel1DResults() {
                const e = this._getKernelResultTypeConstructorString();
                return `  const outputX = _this.output[0];\n    const result = new ${e}(outputX);\n    ${this._mapSubKernels(
                  (t) => `const result_${t.name} = new ${e}(outputX);\n`
                ).join("    ")}\n    ${this._mapSubKernels(
                  (e) => `let subKernelResult_${e.name};\n`
                ).join("    ")}`;
              }
              _resultMutableKernel1DLoop(e) {
                return `  const outputX = _this.output[0];\n    for (let x = 0; x < outputX; x++) {\n      this.thread.x = x;\n      this.thread.y = 0;\n      this.thread.z = 0;\n      ${e}\n    }`;
              }
              _resultImmutableKernel2DLoop(e) {
                const t = this._getKernelResultTypeConstructorString();
                return `  const outputX = _this.output[0];\n    const outputY = _this.output[1];\n    const result = new Array(outputY);\n    ${this._mapSubKernels(
                  (e) => `const result_${e.name} = new Array(outputY);\n`
                ).join("    ")}\n    ${this._mapSubKernels(
                  (e) => `let subKernelResult_${e.name};\n`
                ).join(
                  "    "
                )}\n    for (let y = 0; y < outputY; y++) {\n      this.thread.z = 0;\n      this.thread.y = y;\n      const resultX = result[y] = new ${t}(outputX);\n      ${this._mapSubKernels(
                  (e) =>
                    `const resultX_${e.name} = result_${e.name}[y] = new ${t}(outputX);\n`
                ).join(
                  ""
                )}\n      for (let x = 0; x < outputX; x++) {\n        this.thread.x = x;\n        ${e}\n      }\n    }`;
              }
              _mutableKernel2DResults() {
                const e = this._getKernelResultTypeConstructorString();
                return `  const outputX = _this.output[0];\n    const outputY = _this.output[1];\n    const result = new Array(outputY);\n    ${this._mapSubKernels(
                  (e) => `const result_${e.name} = new Array(outputY);\n`
                ).join("    ")}\n    ${this._mapSubKernels(
                  (e) => `let subKernelResult_${e.name};\n`
                ).join(
                  "    "
                )}\n    for (let y = 0; y < outputY; y++) {\n      const resultX = result[y] = new ${e}(outputX);\n      ${this._mapSubKernels(
                  (t) =>
                    `const resultX_${t.name} = result_${t.name}[y] = new ${e}(outputX);\n`
                ).join("")}\n    }`;
              }
              _resultMutableKernel2DLoop(e) {
                const t = this._getKernelResultTypeConstructorString();
                return `  const outputX = _this.output[0];\n    const outputY = _this.output[1];\n    for (let y = 0; y < outputY; y++) {\n      this.thread.z = 0;\n      this.thread.y = y;\n      const resultX = result[y];\n      ${this._mapSubKernels(
                  (e) =>
                    `const resultX_${e.name} = result_${e.name}[y] = new ${t}(outputX);\n`
                ).join(
                  ""
                )}\n      for (let x = 0; x < outputX; x++) {\n        this.thread.x = x;\n        ${e}\n      }\n    }`;
              }
              _graphicalKernel2DLoop(e) {
                return `  const outputX = _this.output[0];\n    const outputY = _this.output[1];\n    for (let y = 0; y < outputY; y++) {\n      this.thread.z = 0;\n      this.thread.y = y;\n      for (let x = 0; x < outputX; x++) {\n        this.thread.x = x;\n        ${e}\n      }\n    }`;
              }
              _resultImmutableKernel3DLoop(e) {
                const t = this._getKernelResultTypeConstructorString();
                return `  const outputX = _this.output[0];\n    const outputY = _this.output[1];\n    const outputZ = _this.output[2];\n    const result = new Array(outputZ);\n    ${this._mapSubKernels(
                  (e) => `const result_${e.name} = new Array(outputZ);\n`
                ).join("    ")}\n    ${this._mapSubKernels(
                  (e) => `let subKernelResult_${e.name};\n`
                ).join(
                  "    "
                )}\n    for (let z = 0; z < outputZ; z++) {\n      this.thread.z = z;\n      const resultY = result[z] = new Array(outputY);\n      ${this._mapSubKernels(
                  (e) =>
                    `const resultY_${e.name} = result_${e.name}[z] = new Array(outputY);\n`
                ).join(
                  "      "
                )}\n      for (let y = 0; y < outputY; y++) {\n        this.thread.y = y;\n        const resultX = resultY[y] = new ${t}(outputX);\n        ${this._mapSubKernels(
                  (e) =>
                    `const resultX_${e.name} = resultY_${e.name}[y] = new ${t}(outputX);\n`
                ).join(
                  "        "
                )}\n        for (let x = 0; x < outputX; x++) {\n          this.thread.x = x;\n          ${e}\n        }\n      }\n    }`;
              }
              _mutableKernel3DResults() {
                const e = this._getKernelResultTypeConstructorString();
                return `  const outputX = _this.output[0];\n    const outputY = _this.output[1];\n    const outputZ = _this.output[2];\n    const result = new Array(outputZ);\n    ${this._mapSubKernels(
                  (e) => `const result_${e.name} = new Array(outputZ);\n`
                ).join("    ")}\n    ${this._mapSubKernels(
                  (e) => `let subKernelResult_${e.name};\n`
                ).join(
                  "    "
                )}\n    for (let z = 0; z < outputZ; z++) {\n      const resultY = result[z] = new Array(outputY);\n      ${this._mapSubKernels(
                  (e) =>
                    `const resultY_${e.name} = result_${e.name}[z] = new Array(outputY);\n`
                ).join(
                  "      "
                )}\n      for (let y = 0; y < outputY; y++) {\n        const resultX = resultY[y] = new ${e}(outputX);\n        ${this._mapSubKernels(
                  (t) =>
                    `const resultX_${t.name} = resultY_${t.name}[y] = new ${e}(outputX);\n`
                ).join("        ")}\n      }\n    }`;
              }
              _resultMutableKernel3DLoop(e) {
                return `  const outputX = _this.output[0];\n    const outputY = _this.output[1];\n    const outputZ = _this.output[2];\n    for (let z = 0; z < outputZ; z++) {\n      this.thread.z = z;\n      const resultY = result[z];\n      for (let y = 0; y < outputY; y++) {\n        this.thread.y = y;\n        const resultX = resultY[y];\n        for (let x = 0; x < outputX; x++) {\n          this.thread.x = x;\n          ${e}\n        }\n      }\n    }`;
              }
              _kernelOutput() {
                return this.subKernels
                  ? `\n    return {\n      result: result,\n      ${this.subKernels
                      .map((e) => `${e.property}: result_${e.name}`)
                      .join(",\n      ")}\n    };`
                  : "\n    return result;";
              }
              _mapSubKernels(e) {
                return null === this.subKernels ? [""] : this.subKernels.map(e);
              }
              destroy(e) {
                e && delete this.canvas;
              }
              static destroyContext(e) {}
              toJSON() {
                const e = super.toJSON();
                return (e.functionNodes = i.fromKernel(this, s).toJSON()), e;
              }
              setOutput(e) {
                super.setOutput(e);
                const [t, r] = this.output;
                this.graphical &&
                  ((this._imageData = this.context.createImageData(t, r)),
                  (this._colorData = new Uint8ClampedArray(t * r * 4)));
              }
              prependString(e) {
                if (this._kernelString) throw new Error("Kernel already built");
                this._prependedString.push(e);
              }
              hasPrependString(e) {
                return this._prependedString.indexOf(e) > -1;
              }
            },
          };
        },
        {
          "../../utils": 114,
          "../function-builder": 9,
          "../kernel": 36,
          "./function-node": 6,
          "./kernel-string": 7,
        },
      ],
      9: [
        function (e, t, r) {
          class n {
            static fromKernel(e, t, r) {
              const {
                  kernelArguments: i,
                  kernelConstants: s,
                  argumentNames: a,
                  argumentSizes: o,
                  argumentBitRatios: u,
                  constants: l,
                  constantBitRatios: h,
                  debug: c,
                  loopMaxIterations: p,
                  nativeFunctions: d,
                  output: m,
                  optimizeFloatMemory: f,
                  precision: g,
                  plugins: x,
                  source: y,
                  subKernels: b,
                  functions: T,
                  leadingReturnStatement: v,
                  followingReturnStatement: S,
                  dynamicArguments: A,
                  dynamicOutput: _,
                } = e,
                E = new Array(i.length),
                w = {};
              for (let e = 0; e < i.length; e++) E[e] = i[e].type;
              for (let e = 0; e < s.length; e++) {
                const t = s[e];
                w[t.name] = t.type;
              }
              const k = (e, t) => G.needsArgumentType(e, t),
                I = (e, t, r) => {
                  G.assignArgumentType(e, t, r);
                },
                D = (e, t, r) => G.lookupReturnType(e, t, r),
                C = (e) => G.lookupFunctionArgumentTypes(e),
                $ = (e, t) => G.lookupFunctionArgumentName(e, t),
                L = (e, t) => G.lookupFunctionArgumentBitRatio(e, t),
                R = (e, t, r, n) => {
                  G.assignArgumentType(e, t, r, n);
                },
                F = (e, t, r, n) => {
                  G.assignArgumentBitRatio(e, t, r, n);
                },
                N = (e, t, r) => {
                  G.trackFunctionCall(e, t, r);
                },
                V = (e, r) => {
                  const n = [];
                  for (let t = 0; t < e.params.length; t++)
                    n.push(e.params[t].name);
                  const i = new t(
                    r,
                    Object.assign({}, M, {
                      returnType: null,
                      ast: e,
                      name: e.id.name,
                      argumentNames: n,
                      lookupReturnType: D,
                      lookupFunctionArgumentTypes: C,
                      lookupFunctionArgumentName: $,
                      lookupFunctionArgumentBitRatio: L,
                      needsArgumentType: k,
                      assignArgumentType: I,
                      triggerImplyArgumentType: R,
                      triggerImplyArgumentBitRatio: F,
                      onFunctionCall: N,
                    })
                  );
                  i.traceFunctionAST(e), G.addFunctionNode(i);
                },
                M = Object.assign(
                  {
                    isRootKernel: !1,
                    onNestedFunction: V,
                    lookupReturnType: D,
                    lookupFunctionArgumentTypes: C,
                    lookupFunctionArgumentName: $,
                    lookupFunctionArgumentBitRatio: L,
                    needsArgumentType: k,
                    assignArgumentType: I,
                    triggerImplyArgumentType: R,
                    triggerImplyArgumentBitRatio: F,
                    onFunctionCall: N,
                    optimizeFloatMemory: f,
                    precision: g,
                    constants: l,
                    constantTypes: w,
                    constantBitRatios: h,
                    debug: c,
                    loopMaxIterations: p,
                    output: m,
                    plugins: x,
                    dynamicArguments: A,
                    dynamicOutput: _,
                  },
                  r || {}
                ),
                O = Object.assign({}, M, {
                  isRootKernel: !0,
                  name: "kernel",
                  argumentNames: a,
                  argumentTypes: E,
                  argumentSizes: o,
                  argumentBitRatios: u,
                  leadingReturnStatement: v,
                  followingReturnStatement: S,
                });
              if ("object" == typeof y && y.functionNodes)
                return new n().fromJSON(y.functionNodes, t);
              const z = new t(y, O);
              let P = null;
              T &&
                (P = T.map(
                  (e) =>
                    new t(e.source, {
                      returnType: e.returnType,
                      argumentTypes: e.argumentTypes,
                      output: m,
                      plugins: x,
                      constants: l,
                      constantTypes: w,
                      constantBitRatios: h,
                      optimizeFloatMemory: f,
                      precision: g,
                      lookupReturnType: D,
                      lookupFunctionArgumentTypes: C,
                      lookupFunctionArgumentName: $,
                      lookupFunctionArgumentBitRatio: L,
                      needsArgumentType: k,
                      assignArgumentType: I,
                      triggerImplyArgumentType: R,
                      triggerImplyArgumentBitRatio: F,
                      onFunctionCall: N,
                      onNestedFunction: V,
                    })
                ));
              let K = null;
              b &&
                (K = b.map((e) => {
                  const { name: r, source: n } = e;
                  return new t(
                    n,
                    Object.assign({}, M, {
                      name: r,
                      isSubKernel: !0,
                      isRootKernel: !1,
                    })
                  );
                }));
              const G = new n({
                kernel: e,
                rootNode: z,
                functionNodes: P,
                nativeFunctions: d,
                subKernelNodes: K,
              });
              return G;
            }
            constructor(e) {
              if (
                ((e = e || {}),
                (this.kernel = e.kernel),
                (this.rootNode = e.rootNode),
                (this.functionNodes = e.functionNodes || []),
                (this.subKernelNodes = e.subKernelNodes || []),
                (this.nativeFunctions = e.nativeFunctions || []),
                (this.functionMap = {}),
                (this.nativeFunctionNames = []),
                (this.lookupChain = []),
                (this.functionNodeDependencies = {}),
                (this.functionCalls = {}),
                this.rootNode && (this.functionMap.kernel = this.rootNode),
                this.functionNodes)
              )
                for (let e = 0; e < this.functionNodes.length; e++)
                  this.functionMap[this.functionNodes[e].name] =
                    this.functionNodes[e];
              if (this.subKernelNodes)
                for (let e = 0; e < this.subKernelNodes.length; e++)
                  this.functionMap[this.subKernelNodes[e].name] =
                    this.subKernelNodes[e];
              if (this.nativeFunctions)
                for (let e = 0; e < this.nativeFunctions.length; e++) {
                  const t = this.nativeFunctions[e];
                  this.nativeFunctionNames.push(t.name);
                }
            }
            addFunctionNode(e) {
              if (!e.name) throw new Error("functionNode.name needs set");
              (this.functionMap[e.name] = e),
                e.isRootKernel && (this.rootNode = e);
            }
            traceFunctionCalls(e, t) {
              if (
                ((e = e || "kernel"),
                (t = t || []),
                this.nativeFunctionNames.indexOf(e) > -1)
              ) {
                const r = t.indexOf(e);
                if (-1 === r) t.push(e);
                else {
                  const e = t.splice(r, 1)[0];
                  t.push(e);
                }
                return t;
              }
              const r = this.functionMap[e];
              if (r) {
                const n = t.indexOf(e);
                if (-1 === n) {
                  t.push(e), r.toString();
                  for (let e = 0; e < r.calledFunctions.length; ++e)
                    this.traceFunctionCalls(r.calledFunctions[e], t);
                } else {
                  const e = t.splice(n, 1)[0];
                  t.push(e);
                }
              }
              return t;
            }
            getPrototypeString(e) {
              return this.getPrototypes(e).join("\n");
            }
            getPrototypes(e) {
              return (
                this.rootNode && this.rootNode.toString(),
                e
                  ? this.getPrototypesFromFunctionNames(
                      this.traceFunctionCalls(e, []).reverse()
                    )
                  : this.getPrototypesFromFunctionNames(
                      Object.keys(this.functionMap)
                    )
              );
            }
            getStringFromFunctionNames(e) {
              const t = [];
              for (let r = 0; r < e.length; ++r) {
                this.functionMap[e[r]] &&
                  t.push(this.functionMap[e[r]].toString());
              }
              return t.join("\n");
            }
            getPrototypesFromFunctionNames(e) {
              const t = [];
              for (let r = 0; r < e.length; ++r) {
                const n = e[r],
                  i = this.nativeFunctionNames.indexOf(n);
                if (i > -1) {
                  t.push(this.nativeFunctions[i].source);
                  continue;
                }
                const s = this.functionMap[n];
                s && t.push(s.toString());
              }
              return t;
            }
            toJSON() {
              return this.traceFunctionCalls(this.rootNode.name)
                .reverse()
                .map((e) => {
                  const t = this.nativeFunctions.indexOf(e);
                  if (t > -1)
                    return { name: e, source: this.nativeFunctions[t].source };
                  if (this.functionMap[e]) return this.functionMap[e].toJSON();
                  throw new Error(`function ${e} not found`);
                });
            }
            fromJSON(e, t) {
              this.functionMap = {};
              for (let r = 0; r < e.length; r++) {
                const n = e[r];
                this.functionMap[n.settings.name] = new t(n.ast, n.settings);
              }
              return this;
            }
            getString(e) {
              return e
                ? this.getStringFromFunctionNames(
                    this.traceFunctionCalls(e).reverse()
                  )
                : this.getStringFromFunctionNames(
                    Object.keys(this.functionMap)
                  );
            }
            lookupReturnType(e, t, r) {
              if ("CallExpression" !== t.type)
                throw new Error(
                  `expected ast type of "CallExpression", but is ${t.type}`
                );
              if (this._isNativeFunction(e))
                return this._lookupNativeFunctionReturnType(e);
              if (this._isFunction(e)) {
                const n = this._getFunction(e);
                if (n.returnType) return n.returnType;
                {
                  for (let e = 0; e < this.lookupChain.length; e++)
                    if (this.lookupChain[e].ast === t) {
                      if (
                        0 === n.argumentTypes.length &&
                        t.arguments.length > 0
                      ) {
                        const i = t.arguments;
                        for (let t = 0; t < i.length; t++)
                          this.lookupChain.push({
                            name: r.name,
                            ast: i[e],
                            requestingNode: r,
                          }),
                            (n.argumentTypes[t] = r.getType(i[t])),
                            this.lookupChain.pop();
                        return (n.returnType = n.getType(n.getJsAST()));
                      }
                      throw new Error("circlical logic detected!");
                    }
                  this.lookupChain.push({
                    name: r.name,
                    ast: t,
                    requestingNode: r,
                  });
                  const e = n.getType(n.getJsAST());
                  return this.lookupChain.pop(), (n.returnType = e);
                }
              }
              return null;
            }
            _getFunction(e) {
              return (
                this._isFunction(e) || new Error(`Function ${e} not found`),
                this.functionMap[e]
              );
            }
            _isFunction(e) {
              return Boolean(this.functionMap[e]);
            }
            _getNativeFunction(e) {
              for (let t = 0; t < this.nativeFunctions.length; t++)
                if (this.nativeFunctions[t].name === e)
                  return this.nativeFunctions[t];
              return null;
            }
            _isNativeFunction(e) {
              return Boolean(this._getNativeFunction(e));
            }
            _lookupNativeFunctionReturnType(e) {
              let t = this._getNativeFunction(e);
              if (t) return t.returnType;
              throw new Error(`Native function ${e} not found`);
            }
            lookupFunctionArgumentTypes(e) {
              return this._isNativeFunction(e)
                ? this._getNativeFunction(e).argumentTypes
                : this._isFunction(e)
                ? this._getFunction(e).argumentTypes
                : null;
            }
            lookupFunctionArgumentName(e, t) {
              return this._getFunction(e).argumentNames[t];
            }
            lookupFunctionArgumentBitRatio(e, t) {
              if (!this._isFunction(e)) throw new Error("function not found");
              if (this.rootNode.name === e) {
                const e = this.rootNode.argumentNames.indexOf(t);
                if (-1 !== e) return this.rootNode.argumentBitRatios[e];
              }
              const r = this._getFunction(e),
                n = r.argumentNames.indexOf(t);
              if (-1 === n) throw new Error("argument not found");
              const i = r.argumentBitRatios[n];
              if ("number" != typeof i)
                throw new Error("argument bit ratio not found");
              return i;
            }
            needsArgumentType(e, t) {
              if (!this._isFunction(e)) return !1;
              return !this._getFunction(e).argumentTypes[t];
            }
            assignArgumentType(e, t, r, n) {
              if (!this._isFunction(e)) return;
              const i = this._getFunction(e);
              i.argumentTypes[t] || (i.argumentTypes[t] = r);
            }
            assignArgumentBitRatio(e, t, r, n) {
              const i = this._getFunction(e);
              if (this._isNativeFunction(r)) return null;
              const s = this._getFunction(r),
                a = i.argumentNames.indexOf(t);
              if (-1 === a)
                throw new Error(
                  `Argument ${t} not found in arguments from function ${e}`
                );
              const o = i.argumentBitRatios[a];
              if ("number" != typeof o)
                throw new Error(
                  `Bit ratio for argument ${t} not found in function ${e}`
                );
              s.argumentBitRatios ||
                (s.argumentBitRatios = new Array(s.argumentNames.length));
              const u = s.argumentBitRatios[a];
              if ("number" == typeof u) {
                if (u !== o)
                  throw new Error(
                    `Incompatible bit ratio found at function ${e} at argument ${t}`
                  );
                return u;
              }
              return (s.argumentBitRatios[a] = o), o;
            }
            trackFunctionCall(e, t, r) {
              this.functionNodeDependencies[e] ||
                ((this.functionNodeDependencies[e] = new Set()),
                (this.functionCalls[e] = [])),
                this.functionNodeDependencies[e].add(t),
                this.functionCalls[e].push(r);
            }
            getKernelResultType() {
              return (
                this.rootNode.returnType ||
                this.rootNode.getType(this.rootNode.ast)
              );
            }
            getSubKernelResultType(e) {
              const t = this.subKernelNodes[e];
              let r = !1;
              for (let e = 0; e < this.rootNode.functionCalls.length; e++) {
                this.rootNode.functionCalls[e].ast.callee.name === t.name &&
                  (r = !0);
              }
              if (!r)
                throw new Error(`SubKernel ${t.name} never called by kernel`);
              return t.returnType || t.getType(t.getJsAST());
            }
            getReturnTypes() {
              const e = {
                  [this.rootNode.name]: this.rootNode.getType(
                    this.rootNode.ast
                  ),
                },
                t = this.traceFunctionCalls(this.rootNode.name);
              for (let r = 0; r < t.length; r++) {
                const n = t[r],
                  i = this.functionMap[n];
                e[n] = i.getType(i.ast);
              }
              return e;
            }
          }
          t.exports = { FunctionBuilder: n };
        },
        {},
      ],
      10: [
        function (e, t, r) {
          const n = e("acorn"),
            { utils: i } = e("../utils"),
            { FunctionTracer: s } = e("./function-tracer");
          const a = {
            Number: "Number",
            Float: "Float",
            Integer: "Integer",
            Array: "Number",
            "Array(2)": "Number",
            "Array(3)": "Number",
            "Array(4)": "Number",
            "Matrix(2)": "Number",
            "Matrix(3)": "Number",
            "Matrix(4)": "Number",
            Array2D: "Number",
            Array3D: "Number",
            Input: "Number",
            HTMLCanvas: "Array(4)",
            OffscreenCanvas: "Array(4)",
            HTMLImage: "Array(4)",
            ImageBitmap: "Array(4)",
            ImageData: "Array(4)",
            HTMLVideo: "Array(4)",
            HTMLImageArray: "Array(4)",
            NumberTexture: "Number",
            MemoryOptimizedNumberTexture: "Number",
            "Array1D(2)": "Array(2)",
            "Array1D(3)": "Array(3)",
            "Array1D(4)": "Array(4)",
            "Array2D(2)": "Array(2)",
            "Array2D(3)": "Array(3)",
            "Array2D(4)": "Array(4)",
            "Array3D(2)": "Array(2)",
            "Array3D(3)": "Array(3)",
            "Array3D(4)": "Array(4)",
            "ArrayTexture(1)": "Number",
            "ArrayTexture(2)": "Array(2)",
            "ArrayTexture(3)": "Array(3)",
            "ArrayTexture(4)": "Array(4)",
          };
          t.exports = {
            FunctionNode: class {
              constructor(e, t) {
                if (!e && !t.ast)
                  throw new Error("source parameter is missing");
                if (
                  ((t = t || {}),
                  (this.source = e),
                  (this.ast = null),
                  (this.name =
                    "string" == typeof e
                      ? t.isRootKernel
                        ? "kernel"
                        : t.name || i.getFunctionNameFromString(e)
                      : null),
                  (this.calledFunctions = []),
                  (this.constants = {}),
                  (this.constantTypes = {}),
                  (this.constantBitRatios = {}),
                  (this.isRootKernel = !1),
                  (this.isSubKernel = !1),
                  (this.debug = null),
                  (this.functions = null),
                  (this.identifiers = null),
                  (this.contexts = null),
                  (this.functionCalls = null),
                  (this.states = []),
                  (this.needsArgumentType = null),
                  (this.assignArgumentType = null),
                  (this.lookupReturnType = null),
                  (this.lookupFunctionArgumentTypes = null),
                  (this.lookupFunctionArgumentBitRatio = null),
                  (this.triggerImplyArgumentType = null),
                  (this.triggerImplyArgumentBitRatio = null),
                  (this.onNestedFunction = null),
                  (this.onFunctionCall = null),
                  (this.optimizeFloatMemory = null),
                  (this.precision = null),
                  (this.loopMaxIterations = null),
                  (this.argumentNames =
                    "string" == typeof this.source
                      ? i.getArgumentNamesFromString(this.source)
                      : null),
                  (this.argumentTypes = []),
                  (this.argumentSizes = []),
                  (this.argumentBitRatios = null),
                  (this.returnType = null),
                  (this.output = []),
                  (this.plugins = null),
                  (this.leadingReturnStatement = null),
                  (this.followingReturnStatement = null),
                  (this.dynamicOutput = null),
                  (this.dynamicArguments = null),
                  (this.strictTypingChecking = !1),
                  (this.fixIntegerDivisionAccuracy = null),
                  t)
                )
                  for (const e in t)
                    t.hasOwnProperty(e) &&
                      this.hasOwnProperty(e) &&
                      (this[e] = t[e]);
                (this.literalTypes = {}),
                  this.validate(),
                  (this._string = null),
                  (this._internalVariableNames = {});
              }
              validate() {
                if ("string" != typeof this.source && !this.ast)
                  throw new Error("this.source not a string");
                if (!this.ast && !i.isFunctionString(this.source))
                  throw new Error("this.source not a function string");
                if (!this.name) throw new Error("this.name could not be set");
                if (
                  this.argumentTypes.length > 0 &&
                  this.argumentTypes.length !== this.argumentNames.length
                )
                  throw new Error(
                    `argumentTypes count of ${this.argumentTypes.length} exceeds ${this.argumentNames.length}`
                  );
                if (this.output.length < 1)
                  throw new Error("this.output is not big enough");
              }
              isIdentifierConstant(e) {
                return !!this.constants && this.constants.hasOwnProperty(e);
              }
              isInput(e) {
                return (
                  "Input" === this.argumentTypes[this.argumentNames.indexOf(e)]
                );
              }
              pushState(e) {
                this.states.push(e);
              }
              popState(e) {
                if (this.state !== e)
                  throw new Error(`Cannot popState ${e} when in ${this.state}`);
                this.states.pop();
              }
              isState(e) {
                return this.state === e;
              }
              get state() {
                return this.states[this.states.length - 1];
              }
              astMemberExpressionUnroll(e) {
                if ("Identifier" === e.type) return e.name;
                if ("ThisExpression" === e.type) return "this";
                if ("MemberExpression" === e.type && e.object && e.property)
                  return e.object.hasOwnProperty("name") &&
                    "Math" !== e.object.name
                    ? this.astMemberExpressionUnroll(e.property)
                    : this.astMemberExpressionUnroll(e.object) +
                        "." +
                        this.astMemberExpressionUnroll(e.property);
                if (e.hasOwnProperty("expressions")) {
                  const t = e.expressions[0];
                  if (
                    "Literal" === t.type &&
                    0 === t.value &&
                    2 === e.expressions.length
                  )
                    return this.astMemberExpressionUnroll(e.expressions[1]);
                }
                throw this.astErrorOutput(
                  "Unknown astMemberExpressionUnroll",
                  e
                );
              }
              getJsAST(e) {
                if (this.ast) return this.ast;
                if ("object" == typeof this.source)
                  return (
                    this.traceFunctionAST(this.source), (this.ast = this.source)
                  );
                if (null === (e = e || n))
                  throw new Error("Missing JS to AST parser");
                const t = Object.freeze(
                    e.parse(`const parser_${this.name} = ${this.source};`, {
                      locations: !0,
                    })
                  ),
                  r = t.body[0].declarations[0].init;
                if ((this.traceFunctionAST(r), !t))
                  throw new Error("Failed to parse JS code");
                return (this.ast = r);
              }
              traceFunctionAST(e) {
                const {
                  contexts: t,
                  declarations: r,
                  functions: n,
                  identifiers: i,
                  functionCalls: a,
                } = new s(e);
                (this.contexts = t),
                  (this.identifiers = i),
                  (this.functionCalls = a),
                  (this.functions = n);
                for (let e = 0; e < r.length; e++) {
                  const t = r[e],
                    { ast: n, inForLoopInit: i, inForLoopTest: s } = t,
                    { init: a } = n,
                    o = this.getDependencies(a);
                  let u = null;
                  if (i && s) u = "Integer";
                  else if (a) {
                    const e = this.getType(a);
                    switch (e) {
                      case "Integer":
                      case "Float":
                      case "Number":
                        u = "MemberExpression" === a.type ? e : "Number";
                        break;
                      case "LiteralInteger":
                        u = "Number";
                        break;
                      default:
                        u = e;
                    }
                  }
                  (t.valueType = u),
                    (t.dependencies = o),
                    (t.isSafe = this.isSafeDependencies(o));
                }
                for (let e = 0; e < n.length; e++)
                  this.onNestedFunction(n[e], this.source);
              }
              getDeclaration(e) {
                for (let t = 0; t < this.identifiers.length; t++) {
                  const r = this.identifiers[t];
                  if (e === r.ast) return r.declaration;
                }
                return null;
              }
              getVariableType(e) {
                if ("Identifier" !== e.type)
                  throw new Error(`ast of ${e.type} not "Identifier"`);
                let t = null;
                const r = this.argumentNames.indexOf(e.name);
                if (-1 === r) {
                  const t = this.getDeclaration(e);
                  if (t) return t.valueType;
                } else {
                  const e = this.argumentTypes[r];
                  e && (t = e);
                }
                if (!t && this.strictTypingChecking)
                  throw new Error(`Declaration of ${name} not found`);
                return t;
              }
              getLookupType(e) {
                if (!a.hasOwnProperty(e))
                  throw new Error(`unknown typeLookupMap ${e}`);
                return a[e];
              }
              getConstantType(e) {
                if (this.constantTypes[e]) {
                  const t = this.constantTypes[e];
                  return "Float" === t ? "Number" : t;
                }
                throw new Error(`Type for constant "${e}" not declared`);
              }
              toString() {
                return this._string
                  ? this._string
                  : (this._string = this.astGeneric(this.getJsAST(), [])
                      .join("")
                      .trim());
              }
              toJSON() {
                const e = {
                  source: this.source,
                  name: this.name,
                  constants: this.constants,
                  constantTypes: this.constantTypes,
                  isRootKernel: this.isRootKernel,
                  isSubKernel: this.isSubKernel,
                  debug: this.debug,
                  output: this.output,
                  loopMaxIterations: this.loopMaxIterations,
                  argumentNames: this.argumentNames,
                  argumentTypes: this.argumentTypes,
                  argumentSizes: this.argumentSizes,
                  returnType: this.returnType,
                  leadingReturnStatement: this.leadingReturnStatement,
                  followingReturnStatement: this.followingReturnStatement,
                };
                return { ast: this.ast, settings: e };
              }
              getType(e) {
                if (Array.isArray(e)) return this.getType(e[e.length - 1]);
                switch (e.type) {
                  case "BlockStatement":
                    return this.getType(e.body);
                  case "ArrayExpression":
                    switch (this.getType(e.elements[0])) {
                      case "Array(2)":
                      case "Array(3)":
                      case "Array(4)":
                        return `Matrix(${e.elements.length})`;
                    }
                    return `Array(${e.elements.length})`;
                  case "Literal":
                    const t = this.astKey(e);
                    return this.literalTypes[t]
                      ? this.literalTypes[t]
                      : Number.isInteger(e.value)
                      ? "LiteralInteger"
                      : !0 === e.value || !1 === e.value
                      ? "Boolean"
                      : "Number";
                  case "AssignmentExpression":
                    return this.getType(e.left);
                  case "CallExpression":
                    if (this.isAstMathFunction(e)) return "Number";
                    if (!e.callee || !e.callee.name) {
                      if (
                        "SequenceExpression" === e.callee.type &&
                        e.callee.expressions[e.callee.expressions.length - 1]
                          .property.name
                      ) {
                        const t =
                          e.callee.expressions[e.callee.expressions.length - 1]
                            .property.name;
                        return (
                          this.inferArgumentTypesIfNeeded(t, e.arguments),
                          this.lookupReturnType(t, e, this)
                        );
                      }
                      if (
                        "this.color" === this.getVariableSignature(e.callee, !0)
                      )
                        return null;
                      if (
                        "MemberExpression" === e.callee.type &&
                        e.callee.object &&
                        e.callee.property &&
                        e.callee.property.name &&
                        e.arguments
                      ) {
                        const t = e.callee.property.name;
                        return (
                          this.inferArgumentTypesIfNeeded(t, e.arguments),
                          this.lookupReturnType(t, e, this)
                        );
                      }
                      throw this.astErrorOutput("Unknown call expression", e);
                    }
                    if (e.callee && e.callee.name) {
                      const t = e.callee.name;
                      return (
                        this.inferArgumentTypesIfNeeded(t, e.arguments),
                        this.lookupReturnType(t, e, this)
                      );
                    }
                    throw this.astErrorOutput(
                      `Unhandled getType Type "${e.type}"`,
                      e
                    );
                  case "LogicalExpression":
                    return "Boolean";
                  case "BinaryExpression":
                    switch (e.operator) {
                      case "%":
                      case "/":
                        if (this.fixIntegerDivisionAccuracy) return "Number";
                        break;
                      case ">":
                      case "<":
                        return "Boolean";
                      case "&":
                      case "|":
                      case "^":
                      case "<<":
                      case ">>":
                      case ">>>":
                        return "Integer";
                    }
                    const r = this.getType(e.left);
                    if (this.isState("skip-literal-correction")) return r;
                    if ("LiteralInteger" === r) {
                      const t = this.getType(e.right);
                      return "LiteralInteger" === t
                        ? e.left.value % 1 == 0
                          ? "Integer"
                          : "Float"
                        : t;
                    }
                    return a[r] || r;
                  case "UpdateExpression":
                    return this.getType(e.argument);
                  case "UnaryExpression":
                    return "~" === e.operator
                      ? "Integer"
                      : this.getType(e.argument);
                  case "VariableDeclaration": {
                    const t = e.declarations;
                    let r;
                    for (let e = 0; e < t.length; e++) {
                      const n = t[e];
                      r = this.getType(n);
                    }
                    if (!r)
                      throw this.astErrorOutput(
                        "Unable to find type for declaration",
                        e
                      );
                    return r;
                  }
                  case "VariableDeclarator":
                    const n = this.getDeclaration(e.id);
                    if (!n)
                      throw this.astErrorOutput("Unable to find declarator", e);
                    if (!n.valueType)
                      throw this.astErrorOutput(
                        "Unable to find declarator valueType",
                        e
                      );
                    return n.valueType;
                  case "Identifier":
                    if ("Infinity" === e.name) return "Number";
                    if (
                      this.isAstVariable(e) &&
                      "value" === this.getVariableSignature(e)
                    )
                      return this.getCheckVariableType(e);
                    const i = this.findIdentifierOrigin(e);
                    return i && i.init ? this.getType(i.init) : null;
                  case "ReturnStatement":
                    return this.getType(e.argument);
                  case "MemberExpression":
                    if (this.isAstMathFunction(e)) {
                      switch (e.property.name) {
                        case "ceil":
                        case "floor":
                        case "round":
                          return "Integer";
                      }
                      return "Number";
                    }
                    if (this.isAstVariable(e)) {
                      switch (this.getVariableSignature(e)) {
                        case "value[]":
                          return this.getLookupType(
                            this.getCheckVariableType(e.object)
                          );
                        case "value[][]":
                          return this.getLookupType(
                            this.getCheckVariableType(e.object.object)
                          );
                        case "value[][][]":
                          return this.getLookupType(
                            this.getCheckVariableType(e.object.object.object)
                          );
                        case "value[][][][]":
                          return this.getLookupType(
                            this.getCheckVariableType(
                              e.object.object.object.object
                            )
                          );
                        case "value.thread.value":
                        case "this.thread.value":
                          return "Integer";
                        case "this.output.value":
                          return this.dynamicOutput
                            ? "Integer"
                            : "LiteralInteger";
                        case "this.constants.value":
                          return this.getConstantType(e.property.name);
                        case "this.constants.value[]":
                          return this.getLookupType(
                            this.getConstantType(e.object.property.name)
                          );
                        case "this.constants.value[][]":
                          return this.getLookupType(
                            this.getConstantType(e.object.object.property.name)
                          );
                        case "this.constants.value[][][]":
                          return this.getLookupType(
                            this.getConstantType(
                              e.object.object.object.property.name
                            )
                          );
                        case "this.constants.value[][][][]":
                          return this.getLookupType(
                            this.getConstantType(
                              e.object.object.object.object.property.name
                            )
                          );
                        case "fn()[]":
                        case "fn()[][]":
                        case "fn()[][][]":
                          return this.getLookupType(this.getType(e.object));
                        case "value.value":
                          if (this.isAstMathVariable(e)) return "Number";
                          switch (e.property.name) {
                            case "r":
                            case "g":
                            case "b":
                            case "a":
                              return this.getLookupType(
                                this.getCheckVariableType(e.object)
                              );
                          }
                        case "[][]":
                          return "Number";
                      }
                      throw this.astErrorOutput(
                        "Unhandled getType MemberExpression",
                        e
                      );
                    }
                    throw this.astErrorOutput(
                      "Unhandled getType MemberExpression",
                      e
                    );
                  case "ConditionalExpression":
                    return this.getType(e.consequent);
                  case "FunctionDeclaration":
                  case "FunctionExpression":
                    const s = this.findLastReturn(e.body);
                    return s ? this.getType(s) : null;
                  case "IfStatement":
                    return this.getType(e.consequent);
                  case "SequenceExpression":
                    return this.getType(
                      e.expressions[e.expressions.length - 1]
                    );
                  default:
                    throw this.astErrorOutput(
                      `Unhandled getType Type "${e.type}"`,
                      e
                    );
                }
              }
              getCheckVariableType(e) {
                const t = this.getVariableType(e);
                if (!t)
                  throw this.astErrorOutput(`${e.type} is not defined`, e);
                return t;
              }
              inferArgumentTypesIfNeeded(e, t) {
                for (let r = 0; r < t.length; r++) {
                  if (!this.needsArgumentType(e, r)) continue;
                  const n = this.getType(t[r]);
                  if (!n)
                    throw this.astErrorOutput(
                      `Unable to infer argument ${r}`,
                      t[r]
                    );
                  this.assignArgumentType(e, r, n);
                }
              }
              isAstMathVariable(e) {
                return (
                  "MemberExpression" === e.type &&
                  e.object &&
                  "Identifier" === e.object.type &&
                  "Math" === e.object.name &&
                  e.property &&
                  "Identifier" === e.property.type &&
                  [
                    "E",
                    "PI",
                    "SQRT2",
                    "SQRT1_2",
                    "LN2",
                    "LN10",
                    "LOG2E",
                    "LOG10E",
                  ].indexOf(e.property.name) > -1
                );
              }
              isAstMathFunction(e) {
                return (
                  "CallExpression" === e.type &&
                  e.callee &&
                  "MemberExpression" === e.callee.type &&
                  e.callee.object &&
                  "Identifier" === e.callee.object.type &&
                  "Math" === e.callee.object.name &&
                  e.callee.property &&
                  "Identifier" === e.callee.property.type &&
                  [
                    "abs",
                    "acos",
                    "acosh",
                    "asin",
                    "asinh",
                    "atan",
                    "atan2",
                    "atanh",
                    "cbrt",
                    "ceil",
                    "clz32",
                    "cos",
                    "cosh",
                    "expm1",
                    "exp",
                    "floor",
                    "fround",
                    "imul",
                    "log",
                    "log2",
                    "log10",
                    "log1p",
                    "max",
                    "min",
                    "pow",
                    "random",
                    "round",
                    "sign",
                    "sin",
                    "sinh",
                    "sqrt",
                    "tan",
                    "tanh",
                    "trunc",
                  ].indexOf(e.callee.property.name) > -1
                );
              }
              isAstVariable(e) {
                return "Identifier" === e.type || "MemberExpression" === e.type;
              }
              isSafe(e) {
                return this.isSafeDependencies(this.getDependencies(e));
              }
              isSafeDependencies(e) {
                return !e || !e.every || e.every((e) => e.isSafe);
              }
              getDependencies(e, t, r) {
                if ((t || (t = []), !e)) return null;
                if (Array.isArray(e)) {
                  for (let n = 0; n < e.length; n++)
                    this.getDependencies(e[n], t, r);
                  return t;
                }
                switch (e.type) {
                  case "AssignmentExpression":
                    return (
                      this.getDependencies(e.left, t, r),
                      this.getDependencies(e.right, t, r),
                      t
                    );
                  case "ConditionalExpression":
                    return (
                      this.getDependencies(e.test, t, r),
                      this.getDependencies(e.alternate, t, r),
                      this.getDependencies(e.consequent, t, r),
                      t
                    );
                  case "Literal":
                    t.push({
                      origin: "literal",
                      value: e.value,
                      isSafe:
                        !0 !== r &&
                        e.value > -1 / 0 &&
                        e.value < 1 / 0 &&
                        !isNaN(e.value),
                    });
                    break;
                  case "VariableDeclarator":
                    return this.getDependencies(e.init, t, r);
                  case "Identifier":
                    const n = this.getDeclaration(e);
                    if (n)
                      t.push({
                        name: e.name,
                        origin: "declaration",
                        isSafe: !r && this.isSafeDependencies(n.dependencies),
                      });
                    else if (this.argumentNames.indexOf(e.name) > -1)
                      t.push({ name: e.name, origin: "argument", isSafe: !1 });
                    else if (this.strictTypingChecking)
                      throw new Error(
                        `Cannot find identifier origin "${e.name}"`
                      );
                    break;
                  case "FunctionDeclaration":
                    return this.getDependencies(
                      e.body.body[e.body.body.length - 1],
                      t,
                      r
                    );
                  case "ReturnStatement":
                    return this.getDependencies(e.argument, t);
                  case "BinaryExpression":
                  case "LogicalExpression":
                    return (
                      (r = "/" === e.operator || "*" === e.operator),
                      this.getDependencies(e.left, t, r),
                      this.getDependencies(e.right, t, r),
                      t
                    );
                  case "UnaryExpression":
                  case "UpdateExpression":
                    return this.getDependencies(e.argument, t, r);
                  case "VariableDeclaration":
                    return this.getDependencies(e.declarations, t, r);
                  case "ArrayExpression":
                    return t.push({ origin: "declaration", isSafe: !0 }), t;
                  case "CallExpression":
                    return t.push({ origin: "function", isSafe: !0 }), t;
                  case "MemberExpression":
                    const i = this.getMemberExpressionDetails(e);
                    switch (i.signature) {
                      case "value[]":
                        this.getDependencies(e.object, t, r);
                        break;
                      case "value[][]":
                        this.getDependencies(e.object.object, t, r);
                        break;
                      case "value[][][]":
                        this.getDependencies(e.object.object.object, t, r);
                        break;
                      case "this.output.value":
                        this.dynamicOutput &&
                          t.push({
                            name: i.name,
                            origin: "output",
                            isSafe: !1,
                          });
                    }
                    if (i)
                      return (
                        i.property && this.getDependencies(i.property, t, r),
                        i.xProperty && this.getDependencies(i.xProperty, t, r),
                        i.yProperty && this.getDependencies(i.yProperty, t, r),
                        i.zProperty && this.getDependencies(i.zProperty, t, r),
                        t
                      );
                  case "SequenceExpression":
                    return this.getDependencies(e.expressions, t, r);
                  default:
                    throw this.astErrorOutput(
                      `Unhandled type ${e.type} in getDependencies`,
                      e
                    );
                }
                return t;
              }
              getVariableSignature(e, t) {
                if (!this.isAstVariable(e))
                  throw new Error(
                    `ast of type "${e.type}" is not a variable signature`
                  );
                if ("Identifier" === e.type) return "value";
                const r = [];
                for (; e; )
                  e.computed
                    ? r.push("[]")
                    : "ThisExpression" === e.type
                    ? r.unshift("this")
                    : e.property && e.property.name
                    ? "x" === e.property.name ||
                      "y" === e.property.name ||
                      "z" === e.property.name
                      ? r.unshift(t ? "." + e.property.name : ".value")
                      : "constants" === e.property.name ||
                        "thread" === e.property.name ||
                        "output" === e.property.name
                      ? r.unshift("." + e.property.name)
                      : r.unshift(t ? "." + e.property.name : ".value")
                    : e.name
                    ? r.unshift(t ? e.name : "value")
                    : e.callee && e.callee.name
                    ? r.unshift(t ? e.callee.name + "()" : "fn()")
                    : e.elements
                    ? r.unshift("[]")
                    : r.unshift("unknown"),
                    (e = e.object);
                const n = r.join("");
                return t
                  ? n
                  : [
                      "value",
                      "value[]",
                      "value[][]",
                      "value[][][]",
                      "value[][][][]",
                      "value.value",
                      "value.thread.value",
                      "this.thread.value",
                      "this.output.value",
                      "this.constants.value",
                      "this.constants.value[]",
                      "this.constants.value[][]",
                      "this.constants.value[][][]",
                      "this.constants.value[][][][]",
                      "fn()[]",
                      "fn()[][]",
                      "fn()[][][]",
                      "[][]",
                    ].indexOf(n) > -1
                  ? n
                  : null;
              }
              build() {
                return this.toString().length > 0;
              }
              astGeneric(e, t) {
                if (null === e) throw this.astErrorOutput("NULL ast", e);
                if (Array.isArray(e)) {
                  for (let r = 0; r < e.length; r++) this.astGeneric(e[r], t);
                  return t;
                }
                switch (e.type) {
                  case "FunctionDeclaration":
                    return this.astFunctionDeclaration(e, t);
                  case "FunctionExpression":
                    return this.astFunctionExpression(e, t);
                  case "ReturnStatement":
                    return this.astReturnStatement(e, t);
                  case "Literal":
                    return this.astLiteral(e, t);
                  case "BinaryExpression":
                    return this.astBinaryExpression(e, t);
                  case "Identifier":
                    return this.astIdentifierExpression(e, t);
                  case "AssignmentExpression":
                    return this.astAssignmentExpression(e, t);
                  case "ExpressionStatement":
                    return this.astExpressionStatement(e, t);
                  case "EmptyStatement":
                    return this.astEmptyStatement(e, t);
                  case "BlockStatement":
                    return this.astBlockStatement(e, t);
                  case "IfStatement":
                    return this.astIfStatement(e, t);
                  case "SwitchStatement":
                    return this.astSwitchStatement(e, t);
                  case "BreakStatement":
                    return this.astBreakStatement(e, t);
                  case "ContinueStatement":
                    return this.astContinueStatement(e, t);
                  case "ForStatement":
                    return this.astForStatement(e, t);
                  case "WhileStatement":
                    return this.astWhileStatement(e, t);
                  case "DoWhileStatement":
                    return this.astDoWhileStatement(e, t);
                  case "VariableDeclaration":
                    return this.astVariableDeclaration(e, t);
                  case "VariableDeclarator":
                    return this.astVariableDeclarator(e, t);
                  case "ThisExpression":
                    return this.astThisExpression(e, t);
                  case "SequenceExpression":
                    return this.astSequenceExpression(e, t);
                  case "UnaryExpression":
                    return this.astUnaryExpression(e, t);
                  case "UpdateExpression":
                    return this.astUpdateExpression(e, t);
                  case "LogicalExpression":
                    return this.astLogicalExpression(e, t);
                  case "MemberExpression":
                    return this.astMemberExpression(e, t);
                  case "CallExpression":
                    return this.astCallExpression(e, t);
                  case "ArrayExpression":
                    return this.astArrayExpression(e, t);
                  case "DebuggerStatement":
                    return this.astDebuggerStatement(e, t);
                  case "ConditionalExpression":
                    return this.astConditionalExpression(e, t);
                }
                throw this.astErrorOutput("Unknown ast type : " + e.type, e);
              }
              astErrorOutput(e, t) {
                if ("string" != typeof this.source) return new Error(e);
                const r = i.getAstString(this.source, t),
                  n = this.source.substr(t.start).split(/\n/),
                  s = n.length > 0 ? n[n.length - 1] : 0;
                return new Error(
                  `${e} on line ${n.length}, position ${s.length}:\n ${r}`
                );
              }
              astDebuggerStatement(e, t) {
                return t;
              }
              astConditionalExpression(e, t) {
                if ("ConditionalExpression" !== e.type)
                  throw this.astErrorOutput("Not a conditional expression", e);
                return (
                  t.push("("),
                  this.astGeneric(e.test, t),
                  t.push("?"),
                  this.astGeneric(e.consequent, t),
                  t.push(":"),
                  this.astGeneric(e.alternate, t),
                  t.push(")"),
                  t
                );
              }
              astFunction(e, t) {
                throw new Error(
                  `"astFunction" not defined on ${this.constructor.name}`
                );
              }
              astFunctionDeclaration(e, t) {
                return this.isChildFunction(e) ? t : this.astFunction(e, t);
              }
              astFunctionExpression(e, t) {
                return this.isChildFunction(e) ? t : this.astFunction(e, t);
              }
              isChildFunction(e) {
                for (let t = 0; t < this.functions.length; t++)
                  if (this.functions[t] === e) return !0;
                return !1;
              }
              astReturnStatement(e, t) {
                return t;
              }
              astLiteral(e, t) {
                return (this.literalTypes[this.astKey(e)] = "Number"), t;
              }
              astBinaryExpression(e, t) {
                return t;
              }
              astIdentifierExpression(e, t) {
                return t;
              }
              astAssignmentExpression(e, t) {
                return t;
              }
              astExpressionStatement(e, t) {
                return this.astGeneric(e.expression, t), t.push(";"), t;
              }
              astEmptyStatement(e, t) {
                return t;
              }
              astBlockStatement(e, t) {
                return t;
              }
              astIfStatement(e, t) {
                return t;
              }
              astSwitchStatement(e, t) {
                return t;
              }
              astBreakStatement(e, t) {
                return t.push("break;"), t;
              }
              astContinueStatement(e, t) {
                return t.push("continue;\n"), t;
              }
              astForStatement(e, t) {
                return t;
              }
              astWhileStatement(e, t) {
                return t;
              }
              astDoWhileStatement(e, t) {
                return t;
              }
              astVariableDeclarator(e, t) {
                return (
                  this.astGeneric(e.id, t),
                  null !== e.init && (t.push("="), this.astGeneric(e.init, t)),
                  t
                );
              }
              astThisExpression(e, t) {
                return t;
              }
              astSequenceExpression(e, t) {
                const { expressions: r } = e,
                  n = [];
                for (let e = 0; e < r.length; e++) {
                  const t = r[e],
                    i = [];
                  this.astGeneric(t, i), n.push(i.join(""));
                }
                return (
                  n.length > 1 ? t.push("(", n.join(","), ")") : t.push(n[0]), t
                );
              }
              astUnaryExpression(e, t) {
                return this.checkAndUpconvertBitwiseUnary(e, t)
                  ? t
                  : (e.prefix
                      ? (t.push(e.operator), this.astGeneric(e.argument, t))
                      : (this.astGeneric(e.argument, t), t.push(e.operator)),
                    t);
              }
              checkAndUpconvertBitwiseUnary(e, t) {}
              astUpdateExpression(e, t) {
                return (
                  e.prefix
                    ? (t.push(e.operator), this.astGeneric(e.argument, t))
                    : (this.astGeneric(e.argument, t), t.push(e.operator)),
                  t
                );
              }
              astLogicalExpression(e, t) {
                return (
                  t.push("("),
                  this.astGeneric(e.left, t),
                  t.push(e.operator),
                  this.astGeneric(e.right, t),
                  t.push(")"),
                  t
                );
              }
              astMemberExpression(e, t) {
                return t;
              }
              astCallExpression(e, t) {
                return t;
              }
              astArrayExpression(e, t) {
                return t;
              }
              getMemberExpressionDetails(e) {
                if ("MemberExpression" !== e.type)
                  throw this.astErrorOutput(
                    `Expression ${e.type} not a MemberExpression`,
                    e
                  );
                let t = null,
                  r = null;
                const n = this.getVariableSignature(e);
                switch (n) {
                  case "value":
                    return null;
                  case "value.thread.value":
                  case "this.thread.value":
                  case "this.output.value":
                    return {
                      signature: n,
                      type: "Integer",
                      name: e.property.name,
                    };
                  case "value[]":
                    if ("string" != typeof e.object.name)
                      throw this.astErrorOutput("Unexpected expression", e);
                    return {
                      name: (t = e.object.name),
                      origin: "user",
                      signature: n,
                      type: this.getVariableType(e.object),
                      xProperty: e.property,
                    };
                  case "value[][]":
                    if ("string" != typeof e.object.object.name)
                      throw this.astErrorOutput("Unexpected expression", e);
                    return {
                      name: (t = e.object.object.name),
                      origin: "user",
                      signature: n,
                      type: this.getVariableType(e.object.object),
                      yProperty: e.object.property,
                      xProperty: e.property,
                    };
                  case "value[][][]":
                    if ("string" != typeof e.object.object.object.name)
                      throw this.astErrorOutput("Unexpected expression", e);
                    return {
                      name: (t = e.object.object.object.name),
                      origin: "user",
                      signature: n,
                      type: this.getVariableType(e.object.object.object),
                      zProperty: e.object.object.property,
                      yProperty: e.object.property,
                      xProperty: e.property,
                    };
                  case "value[][][][]":
                    if ("string" != typeof e.object.object.object.object.name)
                      throw this.astErrorOutput("Unexpected expression", e);
                    return {
                      name: (t = e.object.object.object.object.name),
                      origin: "user",
                      signature: n,
                      type: this.getVariableType(e.object.object.object.object),
                      zProperty: e.object.object.property,
                      yProperty: e.object.property,
                      xProperty: e.property,
                    };
                  case "value.value":
                    if ("string" != typeof e.property.name)
                      throw this.astErrorOutput("Unexpected expression", e);
                    if (this.isAstMathVariable(e))
                      return {
                        name: (t = e.property.name),
                        origin: "Math",
                        type: "Number",
                        signature: n,
                      };
                    switch (e.property.name) {
                      case "r":
                      case "g":
                      case "b":
                      case "a":
                        return {
                          name: (t = e.object.name),
                          property: e.property.name,
                          origin: "user",
                          signature: n,
                          type: "Number",
                        };
                      default:
                        throw this.astErrorOutput("Unexpected expression", e);
                    }
                  case "this.constants.value":
                    if ("string" != typeof e.property.name)
                      throw this.astErrorOutput("Unexpected expression", e);
                    if (((t = e.property.name), !(r = this.getConstantType(t))))
                      throw this.astErrorOutput("Constant has no type", e);
                    return {
                      name: t,
                      type: r,
                      origin: "constants",
                      signature: n,
                    };
                  case "this.constants.value[]":
                    if ("string" != typeof e.object.property.name)
                      throw this.astErrorOutput("Unexpected expression", e);
                    if (
                      ((t = e.object.property.name),
                      !(r = this.getConstantType(t)))
                    )
                      throw this.astErrorOutput("Constant has no type", e);
                    return {
                      name: t,
                      type: r,
                      origin: "constants",
                      signature: n,
                      xProperty: e.property,
                    };
                  case "this.constants.value[][]":
                    if ("string" != typeof e.object.object.property.name)
                      throw this.astErrorOutput("Unexpected expression", e);
                    if (
                      ((t = e.object.object.property.name),
                      !(r = this.getConstantType(t)))
                    )
                      throw this.astErrorOutput("Constant has no type", e);
                    return {
                      name: t,
                      type: r,
                      origin: "constants",
                      signature: n,
                      yProperty: e.object.property,
                      xProperty: e.property,
                    };
                  case "this.constants.value[][][]":
                    if ("string" != typeof e.object.object.object.property.name)
                      throw this.astErrorOutput("Unexpected expression", e);
                    if (
                      ((t = e.object.object.object.property.name),
                      !(r = this.getConstantType(t)))
                    )
                      throw this.astErrorOutput("Constant has no type", e);
                    return {
                      name: t,
                      type: r,
                      origin: "constants",
                      signature: n,
                      zProperty: e.object.object.property,
                      yProperty: e.object.property,
                      xProperty: e.property,
                    };
                  case "fn()[]":
                  case "fn()[][]":
                  case "[][]":
                    return { signature: n, property: e.property };
                  default:
                    throw this.astErrorOutput("Unexpected expression", e);
                }
              }
              findIdentifierOrigin(e) {
                const t = [this.ast];
                for (; t.length > 0; ) {
                  const r = t[0];
                  if (
                    "VariableDeclarator" === r.type &&
                    r.id &&
                    r.id.name &&
                    r.id.name === e.name
                  )
                    return r;
                  if ((t.shift(), r.argument)) t.push(r.argument);
                  else if (r.body) t.push(r.body);
                  else if (r.declarations) t.push(r.declarations);
                  else if (Array.isArray(r))
                    for (let e = 0; e < r.length; e++) t.push(r[e]);
                }
                return null;
              }
              findLastReturn(e) {
                const t = [e || this.ast];
                for (; t.length > 0; ) {
                  const e = t.pop();
                  if ("ReturnStatement" === e.type) return e;
                  if ("FunctionDeclaration" !== e.type)
                    if (e.argument) t.push(e.argument);
                    else if (e.body) t.push(e.body);
                    else if (e.declarations) t.push(e.declarations);
                    else if (Array.isArray(e))
                      for (let r = 0; r < e.length; r++) t.push(e[r]);
                    else
                      e.consequent
                        ? t.push(e.consequent)
                        : e.cases && t.push(e.cases);
                }
                return null;
              }
              getInternalVariableName(e) {
                return (
                  this._internalVariableNames.hasOwnProperty(e) ||
                    (this._internalVariableNames[e] = 0),
                  this._internalVariableNames[e]++,
                  1 === this._internalVariableNames[e]
                    ? e
                    : e + this._internalVariableNames[e]
                );
              }
              astKey(e, t = ",") {
                if (!e.start || !e.end)
                  throw new Error("AST start and end needed");
                return `${e.start}${t}${e.end}`;
              }
            },
          };
        },
        { "../utils": 114, "./function-tracer": 11, acorn: 1 },
      ],
      11: [
        function (e, t, r) {
          const { utils: n } = e("../utils");
          function i(e) {
            return e.length > 0 ? e[e.length - 1] : null;
          }
          const s = {
            trackIdentifiers: "trackIdentifiers",
            memberExpression: "memberExpression",
            inForLoopInit: "inForLoopInit",
          };
          t.exports = {
            FunctionTracer: class {
              constructor(e) {
                (this.runningContexts = []),
                  (this.functionContexts = []),
                  (this.contexts = []),
                  (this.functionCalls = []),
                  (this.declarations = []),
                  (this.identifiers = []),
                  (this.functions = []),
                  (this.returnStatements = []),
                  (this.trackedIdentifiers = null),
                  (this.states = []),
                  this.newFunctionContext(),
                  this.scan(e);
              }
              isState(e) {
                return this.states[this.states.length - 1] === e;
              }
              hasState(e) {
                return this.states.indexOf(e) > -1;
              }
              pushState(e) {
                this.states.push(e);
              }
              popState(e) {
                if (!this.isState(e))
                  throw new Error(`Cannot pop the non-active state "${e}"`);
                this.states.pop();
              }
              get currentFunctionContext() {
                return i(this.functionContexts);
              }
              get currentContext() {
                return i(this.runningContexts);
              }
              newFunctionContext() {
                const e = { "@contextType": "function" };
                this.contexts.push(e), this.functionContexts.push(e);
              }
              newContext(e) {
                const t = Object.assign(
                  { "@contextType": "const/let" },
                  this.currentContext
                );
                this.contexts.push(t), this.runningContexts.push(t), e();
                const { currentFunctionContext: r } = this;
                for (const e in r)
                  r.hasOwnProperty(e) && !t.hasOwnProperty(e) && (t[e] = r[e]);
                return this.runningContexts.pop(), t;
              }
              useFunctionContext(e) {
                const t = i(this.functionContexts);
                this.runningContexts.push(t), e(), this.runningContexts.pop();
              }
              getIdentifiers(e) {
                const t = (this.trackedIdentifiers = []);
                return (
                  this.pushState(s.trackIdentifiers),
                  e(),
                  (this.trackedIdentifiers = null),
                  this.popState(s.trackIdentifiers),
                  t
                );
              }
              getDeclaration(e) {
                const {
                    currentContext: t,
                    currentFunctionContext: r,
                    runningContexts: n,
                  } = this,
                  i = t[e] || r[e] || null;
                if (!i && t === r && n.length > 0) {
                  const t = n[n.length - 2];
                  if (t[e]) return t[e];
                }
                return i;
              }
              scan(e) {
                if (e)
                  if (Array.isArray(e))
                    for (let t = 0; t < e.length; t++) this.scan(e[t]);
                  else
                    switch (e.type) {
                      case "Program":
                        this.useFunctionContext(() => {
                          this.scan(e.body);
                        });
                        break;
                      case "BlockStatement":
                        this.newContext(() => {
                          this.scan(e.body);
                        });
                        break;
                      case "AssignmentExpression":
                      case "LogicalExpression":
                      case "BinaryExpression":
                        this.scan(e.left), this.scan(e.right);
                        break;
                      case "UpdateExpression":
                        if ("++" === e.operator) {
                          const t = this.getDeclaration(e.argument.name);
                          t && (t.suggestedType = "Integer");
                        }
                        this.scan(e.argument);
                        break;
                      case "UnaryExpression":
                        this.scan(e.argument);
                        break;
                      case "VariableDeclaration":
                        "var" === e.kind
                          ? this.useFunctionContext(() => {
                              (e.declarations = n.normalizeDeclarations(e)),
                                this.scan(e.declarations);
                            })
                          : ((e.declarations = n.normalizeDeclarations(e)),
                            this.scan(e.declarations));
                        break;
                      case "VariableDeclarator": {
                        const { currentContext: t } = this,
                          r = this.hasState(s.inForLoopInit),
                          n = {
                            ast: e,
                            context: t,
                            name: e.id.name,
                            origin: "declaration",
                            inForLoopInit: r,
                            inForLoopTest: null,
                            assignable:
                              t === this.currentFunctionContext ||
                              (!r && !t.hasOwnProperty(e.id.name)),
                            suggestedType: null,
                            valueType: null,
                            dependencies: null,
                            isSafe: null,
                          };
                        t[e.id.name] || (t[e.id.name] = n),
                          this.declarations.push(n),
                          this.scan(e.id),
                          this.scan(e.init);
                        break;
                      }
                      case "FunctionExpression":
                      case "FunctionDeclaration":
                        0 === this.runningContexts.length
                          ? this.scan(e.body)
                          : this.functions.push(e);
                        break;
                      case "IfStatement":
                        this.scan(e.test),
                          this.scan(e.consequent),
                          e.alternate && this.scan(e.alternate);
                        break;
                      case "ForStatement": {
                        let t;
                        const r = this.newContext(() => {
                          this.pushState(s.inForLoopInit),
                            this.scan(e.init),
                            this.popState(s.inForLoopInit),
                            (t = this.getIdentifiers(() => {
                              this.scan(e.test);
                            })),
                            this.scan(e.update),
                            this.newContext(() => {
                              this.scan(e.body);
                            });
                        });
                        if (t)
                          for (const e in r)
                            "@contextType" !== e &&
                              t.indexOf(e) > -1 &&
                              (r[e].inForLoopTest = !0);
                        break;
                      }
                      case "DoWhileStatement":
                      case "WhileStatement":
                        this.newContext(() => {
                          this.scan(e.body), this.scan(e.test);
                        });
                        break;
                      case "Identifier":
                        this.isState(s.trackIdentifiers) &&
                          this.trackedIdentifiers.push(e.name),
                          this.identifiers.push({
                            context: this.currentContext,
                            declaration: this.getDeclaration(e.name),
                            ast: e,
                          });
                        break;
                      case "ReturnStatement":
                        this.returnStatements.push(e), this.scan(e.argument);
                        break;
                      case "MemberExpression":
                        this.pushState(s.memberExpression),
                          this.scan(e.object),
                          this.scan(e.property),
                          this.popState(s.memberExpression);
                        break;
                      case "ExpressionStatement":
                        this.scan(e.expression);
                        break;
                      case "SequenceExpression":
                        this.scan(e.expressions);
                        break;
                      case "CallExpression":
                        this.functionCalls.push({
                          context: this.currentContext,
                          ast: e,
                        }),
                          this.scan(e.arguments);
                        break;
                      case "ArrayExpression":
                        this.scan(e.elements);
                        break;
                      case "ConditionalExpression":
                        this.scan(e.test),
                          this.scan(e.alternate),
                          this.scan(e.consequent);
                        break;
                      case "SwitchStatement":
                        this.scan(e.discriminant), this.scan(e.cases);
                        break;
                      case "SwitchCase":
                        this.scan(e.test), this.scan(e.consequent);
                        break;
                      case "ThisExpression":
                      case "Literal":
                      case "DebuggerStatement":
                      case "EmptyStatement":
                      case "BreakStatement":
                      case "ContinueStatement":
                        break;
                      default:
                        throw new Error(`unhandled type "${e.type}"`);
                    }
              }
            },
          };
        },
        { "../utils": 114 },
      ],
      12: [
        function (e, t, r) {
          const { glWiretap: n } = e("gl-wiretap"),
            { utils: i } = e("../../utils");
          function s(e) {
            return e
              .toString()
              .replace("=>", "")
              .replace(/^function /, "")
              .replace(/utils[.]/g, "/*utils.*/");
          }
          function a(e, t) {
            const r =
              "single" === t.precision ? e : `new Float32Array(${e}.buffer)`;
            return t.output[2]
              ? `renderOutput(${r}, ${t.output[0]}, ${t.output[1]}, ${t.output[2]})`
              : t.output[1]
              ? `renderOutput(${r}, ${t.output[0]}, ${t.output[1]})`
              : `renderOutput(${r}, ${t.output[0]})`;
          }
          function o(e, t, r) {
            const n = e.toArray.toString(),
              s = !/^function/.test(n);
            return `() => {\n  function framebuffer() { return ${r}; };\n  ${i.flattenFunctionToString(
              `${s ? "function " : ""}${n}`,
              {
                findDependency: (t, r) => {
                  if ("utils" === t) return `const ${r} = ${i[r].toString()};`;
                  if ("this" === t)
                    return "framebuffer" === r
                      ? ""
                      : `${s ? "function " : ""}${e[r].toString()}`;
                  throw new Error("unhandled fromObject");
                },
                thisLookup: (r, n) => {
                  if ("texture" === r) return t;
                  if ("context" === r) return n ? null : "gl";
                  if (e.hasOwnProperty(r)) return JSON.stringify(e[r]);
                  throw new Error(`unhandled thisLookup ${r}`);
                },
              }
            )}\n  return toArray();\n  }`;
          }
          function u(e, t, r, n, i) {
            if (null === e) return null;
            if (null === t) return null;
            switch (typeof e) {
              case "boolean":
              case "number":
                return null;
            }
            if (
              "undefined" != typeof HTMLImageElement &&
              e instanceof HTMLImageElement
            )
              for (let i = 0; i < t.length; i++) {
                const s = t[i];
                if ("HTMLImageArray" !== s.type && s) continue;
                if (s.uploadValue !== e) continue;
                const a = r[i].indexOf(e);
                if (-1 === a) continue;
                const o = `uploadValue_${s.name}[${a}]`;
                return n.insertVariable(o, e), o;
              }
            for (let r = 0; r < t.length; r++) {
              const i = t[r];
              if (e !== i.uploadValue) continue;
              const s = `uploadValue_${i.name}`;
              return n.insertVariable(s, i), s;
            }
            return null;
          }
          t.exports = {
            glKernelString: function (e, t, r, l, h) {
              r.built || r.build.apply(r, t),
                (t = t
                  ? Array.from(t).map((e) => {
                      switch (typeof e) {
                        case "boolean":
                          return new Boolean(e);
                        case "number":
                          return new Number(e);
                        default:
                          return e;
                      }
                    })
                  : null);
              const c = [],
                p = n(r.context, {
                  useTrackablePrimitives: !0,
                  onReadPixels: (e) => {
                    if (F.subKernels) {
                      if (d) {
                        const t = F.subKernels[m++].property;
                        c.push(
                          `    result${isNaN(t) ? "." + t : `[${t}]`} = ${a(
                            e,
                            F
                          )};`
                        );
                      } else
                        c.push(`    const result = { result: ${a(e, F)} };`),
                          (d = !0);
                      m === F.subKernels.length && c.push("    return result;");
                    } else
                      e
                        ? c.push(`    return ${a(e, F)};`)
                        : c.push("    return null;");
                  },
                  onUnrecognizedArgumentLookup: (e) => {
                    const t = u(e, F.kernelArguments, [], p);
                    if (t) return t;
                    const r = u(
                      e,
                      F.kernelConstants,
                      v ? Object.keys(v).map((e) => v[e]) : [],
                      p
                    );
                    return r || null;
                  },
                });
              let d = !1,
                m = 0;
              const {
                  source: f,
                  canvas: g,
                  output: x,
                  pipeline: y,
                  graphical: b,
                  loopMaxIterations: T,
                  constants: v,
                  optimizeFloatMemory: S,
                  precision: A,
                  fixIntegerDivisionAccuracy: _,
                  functions: E,
                  nativeFunctions: w,
                  subKernels: k,
                  immutable: I,
                  argumentTypes: D,
                  constantTypes: C,
                  kernelArguments: $,
                  kernelConstants: L,
                  tactic: R,
                } = r,
                F = new e(f, {
                  canvas: g,
                  context: p,
                  checkContext: !1,
                  output: x,
                  pipeline: y,
                  graphical: b,
                  loopMaxIterations: T,
                  constants: v,
                  optimizeFloatMemory: S,
                  precision: A,
                  fixIntegerDivisionAccuracy: _,
                  functions: E,
                  nativeFunctions: w,
                  subKernels: k,
                  immutable: I,
                  argumentTypes: D,
                  constantTypes: C,
                  tactic: R,
                });
              let N = [];
              if (
                (p.setIndent(2),
                F.build.apply(F, t),
                N.push(p.toString()),
                p.reset(),
                F.kernelArguments.forEach((e, r) => {
                  switch (e.type) {
                    case "Integer":
                    case "Boolean":
                    case "Number":
                    case "Float":
                    case "Array":
                    case "Array(2)":
                    case "Array(3)":
                    case "Array(4)":
                    case "HTMLCanvas":
                    case "HTMLImage":
                    case "HTMLVideo":
                      p.insertVariable(`uploadValue_${e.name}`, e.uploadValue);
                      break;
                    case "HTMLImageArray":
                      for (let n = 0; n < t[r].length; n++) {
                        const i = t[r];
                        p.insertVariable(`uploadValue_${e.name}[${n}]`, i[n]);
                      }
                      break;
                    case "Input":
                      p.insertVariable(`uploadValue_${e.name}`, e.uploadValue);
                      break;
                    case "MemoryOptimizedNumberTexture":
                    case "NumberTexture":
                    case "Array1D(2)":
                    case "Array1D(3)":
                    case "Array1D(4)":
                    case "Array2D(2)":
                    case "Array2D(3)":
                    case "Array2D(4)":
                    case "Array3D(2)":
                    case "Array3D(3)":
                    case "Array3D(4)":
                    case "ArrayTexture(1)":
                    case "ArrayTexture(2)":
                    case "ArrayTexture(3)":
                    case "ArrayTexture(4)":
                      p.insertVariable(`uploadValue_${e.name}`, t[r].texture);
                      break;
                    default:
                      throw new Error(
                        `unhandled kernelArgumentType insertion for glWiretap of type ${e.type}`
                      );
                  }
                }),
                N.push("/** start of injected functions **/"),
                N.push(`function ${s(i.flattenTo)}`),
                N.push(`function ${s(i.flatten2dArrayTo)}`),
                N.push(`function ${s(i.flatten3dArrayTo)}`),
                N.push(`function ${s(i.flatten4dArrayTo)}`),
                N.push(`function ${s(i.isArray)}`),
                F.renderOutput !== F.renderTexture &&
                  F.formatValues &&
                  N.push(
                    `  const renderOutput = function ${s(F.formatValues)};`
                  ),
                N.push("/** end of injected functions **/"),
                N.push(
                  `  const innerKernel = function (${F.kernelArguments
                    .map((e) => e.varName)
                    .join(", ")}) {`
                ),
                p.setIndent(4),
                F.run.apply(F, t),
                F.renderKernels
                  ? F.renderKernels()
                  : F.renderOutput && F.renderOutput(),
                N.push("    /** start setup uploads for kernel values **/"),
                F.kernelArguments.forEach((e) => {
                  N.push(
                    "    " +
                      e.getStringValueHandler().split("\n").join("\n    ")
                  );
                }),
                N.push("    /** end setup uploads for kernel values **/"),
                N.push(p.toString()),
                F.renderOutput === F.renderTexture)
              ) {
                p.reset();
                const e = p.getContextVariableName(F.framebuffer);
                if (F.renderKernels) {
                  const t = F.renderKernels(),
                    r = p.getContextVariableName(F.texture.texture);
                  N.push(
                    `    return {\n      result: {\n        texture: ${r},\n        type: '${
                      t.result.type
                    }',\n        toArray: ${o(t.result, r, e)}\n      },`
                  );
                  const { subKernels: n, mappedTextures: i } = F;
                  for (let r = 0; r < n.length; r++) {
                    const s = i[r],
                      a = n[r],
                      u = t[a.property],
                      l = p.getContextVariableName(s.texture);
                    N.push(
                      `\n      ${
                        a.property
                      }: {\n        texture: ${l},\n        type: '${
                        u.type
                      }',\n        toArray: ${o(u, l, e)}\n      },`
                    );
                  }
                  N.push("    };");
                } else {
                  const t = F.renderOutput(),
                    r = p.getContextVariableName(F.texture.texture);
                  N.push(
                    `    return {\n        texture: ${r},\n        type: '${
                      t.type
                    }',\n        toArray: ${o(t, r, e)}\n      };`
                  );
                }
              }
              N.push(`    ${h ? "\n" + h + "    " : ""}`),
                N.push(c.join("\n")),
                N.push("  };"),
                F.graphical &&
                  (N.push(
                    (function (e) {
                      const t = e.getPixels.toString(),
                        r = !/^function/.test(t);
                      return i.flattenFunctionToString(
                        `${r ? "function " : ""}${t}`,
                        {
                          findDependency: (e, t) =>
                            "utils" === e
                              ? `const ${t} = ${i[t].toString()};`
                              : null,
                          thisLookup: (t) => {
                            if ("context" === t) return null;
                            if (e.hasOwnProperty(t))
                              return JSON.stringify(e[t]);
                            throw new Error(`unhandled thisLookup ${t}`);
                          },
                        }
                      );
                    })(F)
                  ),
                  N.push("  innerKernel.getPixels = getPixels;")),
                N.push("  return innerKernel;");
              let V = [];
              return (
                L.forEach((e) => {
                  V.push(`${e.getStringValueHandler()}`);
                }),
                `function kernel(settings) {\n  const { context, constants } = settings;\n  ${V.join(
                  ""
                )}\n  ${l || ""}\n${N.join("\n")}\n}`
              );
            },
          };
        },
        { "../../utils": 114, "gl-wiretap": 3 },
      ],
      13: [
        function (e, t, r) {
          const { Kernel: n } = e("../kernel"),
            { utils: i } = e("../../utils"),
            { GLTextureArray2Float: s } = e("./texture/array-2-float"),
            { GLTextureArray2Float2D: a } = e("./texture/array-2-float-2d"),
            { GLTextureArray2Float3D: o } = e("./texture/array-2-float-3d"),
            { GLTextureArray3Float: u } = e("./texture/array-3-float"),
            { GLTextureArray3Float2D: l } = e("./texture/array-3-float-2d"),
            { GLTextureArray3Float3D: h } = e("./texture/array-3-float-3d"),
            { GLTextureArray4Float: c } = e("./texture/array-4-float"),
            { GLTextureArray4Float2D: p } = e("./texture/array-4-float-2d"),
            { GLTextureArray4Float3D: d } = e("./texture/array-4-float-3d"),
            { GLTextureFloat: m } = e("./texture/float"),
            { GLTextureFloat2D: f } = e("./texture/float-2d"),
            { GLTextureFloat3D: g } = e("./texture/float-3d"),
            { GLTextureMemoryOptimized: x } = e("./texture/memory-optimized"),
            { GLTextureMemoryOptimized2D: y } = e(
              "./texture/memory-optimized-2d"
            ),
            { GLTextureMemoryOptimized3D: b } = e(
              "./texture/memory-optimized-3d"
            ),
            { GLTextureUnsigned: T } = e("./texture/unsigned"),
            { GLTextureUnsigned2D: v } = e("./texture/unsigned-2d"),
            { GLTextureUnsigned3D: S } = e("./texture/unsigned-3d"),
            { GLTextureGraphical: A } = e("./texture/graphical");
          const _ = {
            int: "Integer",
            float: "Number",
            vec2: "Array(2)",
            vec3: "Array(3)",
            vec4: "Array(4)",
          };
          t.exports = {
            GLKernel: class extends n {
              static get mode() {
                return "gpu";
              }
              static getIsFloatRead() {
                const e = new this(
                  "function kernelFunction() {\n      return 1;\n    }",
                  {
                    context: this.testContext,
                    canvas: this.testCanvas,
                    validate: !1,
                    output: [1],
                    precision: "single",
                    returnType: "Number",
                    tactic: "speed",
                  }
                );
                e.build(), e.run();
                const t = e.renderOutput();
                return e.destroy(!0), 1 === t[0];
              }
              static getIsIntegerDivisionAccurate() {
                const e = new this(
                    function (e, t) {
                      return e[this.thread.x] / t[this.thread.x];
                    }.toString(),
                    {
                      context: this.testContext,
                      canvas: this.testCanvas,
                      validate: !1,
                      output: [2],
                      returnType: "Number",
                      precision: "unsigned",
                      tactic: "speed",
                    }
                  ),
                  t = [
                    [6, 6030401],
                    [3, 3991],
                  ];
                e.build.apply(e, t), e.run.apply(e, t);
                const r = e.renderOutput();
                return e.destroy(!0), 2 === r[0] && 1511 === r[1];
              }
              static getIsSpeedTacticSupported() {
                const e = new this(
                    function (e) {
                      return e[this.thread.x];
                    }.toString(),
                    {
                      context: this.testContext,
                      canvas: this.testCanvas,
                      validate: !1,
                      output: [4],
                      returnType: "Number",
                      precision: "unsigned",
                      tactic: "speed",
                    }
                  ),
                  t = [[0, 1, 2, 3]];
                e.build.apply(e, t), e.run.apply(e, t);
                const r = e.renderOutput();
                return (
                  e.destroy(!0),
                  0 === Math.round(r[0]) &&
                    1 === Math.round(r[1]) &&
                    2 === Math.round(r[2]) &&
                    3 === Math.round(r[3])
                );
              }
              static get testCanvas() {
                throw new Error(`"testCanvas" not defined on ${this.name}`);
              }
              static get testContext() {
                throw new Error(`"testContext" not defined on ${this.name}`);
              }
              static getFeatures() {
                const e = this.testContext,
                  t = this.getIsDrawBuffers();
                return Object.freeze({
                  isFloatRead: this.getIsFloatRead(),
                  isIntegerDivisionAccurate:
                    this.getIsIntegerDivisionAccurate(),
                  isSpeedTacticSupported: this.getIsSpeedTacticSupported(),
                  isTextureFloat: this.getIsTextureFloat(),
                  isDrawBuffers: t,
                  kernelMap: t,
                  channelCount: this.getChannelCount(),
                  maxTextureSize: this.getMaxTextureSize(),
                  lowIntPrecision: e.getShaderPrecisionFormat(
                    e.FRAGMENT_SHADER,
                    e.LOW_INT
                  ),
                  lowFloatPrecision: e.getShaderPrecisionFormat(
                    e.FRAGMENT_SHADER,
                    e.LOW_FLOAT
                  ),
                  mediumIntPrecision: e.getShaderPrecisionFormat(
                    e.FRAGMENT_SHADER,
                    e.MEDIUM_INT
                  ),
                  mediumFloatPrecision: e.getShaderPrecisionFormat(
                    e.FRAGMENT_SHADER,
                    e.MEDIUM_FLOAT
                  ),
                  highIntPrecision: e.getShaderPrecisionFormat(
                    e.FRAGMENT_SHADER,
                    e.HIGH_INT
                  ),
                  highFloatPrecision: e.getShaderPrecisionFormat(
                    e.FRAGMENT_SHADER,
                    e.HIGH_FLOAT
                  ),
                });
              }
              static setupFeatureChecks() {
                throw new Error(
                  `"setupFeatureChecks" not defined on ${this.name}`
                );
              }
              static getSignature(e, t) {
                return (
                  e.getVariablePrecisionString() +
                  (t.length > 0 ? ":" + t.join(",") : "")
                );
              }
              setFixIntegerDivisionAccuracy(e) {
                return (this.fixIntegerDivisionAccuracy = e), this;
              }
              setPrecision(e) {
                return (this.precision = e), this;
              }
              setFloatTextures(e) {
                return (
                  i.warnDeprecated(
                    "method",
                    "setFloatTextures",
                    "setOptimizeFloatMemory"
                  ),
                  (this.floatTextures = e),
                  this
                );
              }
              static nativeFunctionArguments(e) {
                const t = [],
                  r = [],
                  n = [],
                  i = /^[a-zA-Z_]/,
                  s = /[a-zA-Z_0-9]/;
                let a = 0,
                  o = null,
                  u = null;
                for (; a < e.length; ) {
                  const l = e[a],
                    h = e[a + 1],
                    c = n.length > 0 ? n[n.length - 1] : null;
                  if ("FUNCTION_ARGUMENTS" !== c || "/" !== l || "*" !== h)
                    if ("MULTI_LINE_COMMENT" !== c || "*" !== l || "/" !== h)
                      if ("FUNCTION_ARGUMENTS" !== c || "/" !== l || "/" !== h)
                        if ("COMMENT" !== c || "\n" !== l)
                          if (null !== c || "(" !== l) {
                            if ("FUNCTION_ARGUMENTS" === c) {
                              if (")" === l) {
                                n.pop();
                                break;
                              }
                              if (
                                "f" === l &&
                                "l" === h &&
                                "o" === e[a + 2] &&
                                "a" === e[a + 3] &&
                                "t" === e[a + 4] &&
                                " " === e[a + 5]
                              ) {
                                n.push("DECLARE_VARIABLE"),
                                  (u = "float"),
                                  (o = ""),
                                  (a += 6);
                                continue;
                              }
                              if (
                                "i" === l &&
                                "n" === h &&
                                "t" === e[a + 2] &&
                                " " === e[a + 3]
                              ) {
                                n.push("DECLARE_VARIABLE"),
                                  (u = "int"),
                                  (o = ""),
                                  (a += 4);
                                continue;
                              }
                              if (
                                "v" === l &&
                                "e" === h &&
                                "c" === e[a + 2] &&
                                "2" === e[a + 3] &&
                                " " === e[a + 4]
                              ) {
                                n.push("DECLARE_VARIABLE"),
                                  (u = "vec2"),
                                  (o = ""),
                                  (a += 5);
                                continue;
                              }
                              if (
                                "v" === l &&
                                "e" === h &&
                                "c" === e[a + 2] &&
                                "3" === e[a + 3] &&
                                " " === e[a + 4]
                              ) {
                                n.push("DECLARE_VARIABLE"),
                                  (u = "vec3"),
                                  (o = ""),
                                  (a += 5);
                                continue;
                              }
                              if (
                                "v" === l &&
                                "e" === h &&
                                "c" === e[a + 2] &&
                                "4" === e[a + 3] &&
                                " " === e[a + 4]
                              ) {
                                n.push("DECLARE_VARIABLE"),
                                  (u = "vec4"),
                                  (o = ""),
                                  (a += 5);
                                continue;
                              }
                            } else if ("DECLARE_VARIABLE" === c) {
                              if ("" === o) {
                                if (" " === l) {
                                  a++;
                                  continue;
                                }
                                if (!i.test(l))
                                  throw new Error(
                                    "variable name is not expected string"
                                  );
                              }
                              (o += l),
                                s.test(h) || (n.pop(), r.push(o), t.push(_[u]));
                            }
                            a++;
                          } else n.push("FUNCTION_ARGUMENTS"), a++;
                        else n.pop(), a++;
                      else n.push("COMMENT"), (a += 2);
                    else n.pop(), (a += 2);
                  else n.push("MULTI_LINE_COMMENT"), (a += 2);
                }
                if (n.length > 0)
                  throw new Error("GLSL function was not parsable");
                return { argumentNames: r, argumentTypes: t };
              }
              static nativeFunctionReturnType(e) {
                return _[e.match(/int|float|vec[2-4]/)[0]];
              }
              static combineKernels(e, t) {
                e.apply(null, arguments);
                const { texSize: r, context: n, threadDim: s } = t.texSize;
                let a;
                if ("single" === t.precision) {
                  const e = r[0],
                    t = Math.ceil(r[1] / 4);
                  (a = new Float32Array(e * t * 4 * 4)),
                    n.readPixels(0, 0, e, 4 * t, n.RGBA, n.FLOAT, a);
                } else {
                  const e = new Uint8Array(r[0] * r[1] * 4);
                  n.readPixels(0, 0, r[0], r[1], n.RGBA, n.UNSIGNED_BYTE, e),
                    (a = new Float32Array(e.buffer));
                }
                return (
                  (a = a.subarray(0, s[0] * s[1] * s[2])),
                  1 === t.output.length
                    ? a
                    : 2 === t.output.length
                    ? i.splitArray(a, t.output[0])
                    : 3 === t.output.length
                    ? i
                        .splitArray(a, t.output[0] * t.output[1])
                        .map(function (e) {
                          return i.splitArray(e, t.output[0]);
                        })
                    : void 0
                );
              }
              constructor(e, t) {
                super(e, t),
                  (this.transferValues = null),
                  (this.formatValues = null),
                  (this.TextureConstructor = null),
                  (this.renderOutput = null),
                  (this.renderRawOutput = null),
                  (this.texSize = null),
                  (this.translatedSource = null),
                  (this.compiledFragmentShader = null),
                  (this.compiledVertexShader = null),
                  (this.switchingKernels = null),
                  (this._textureSwitched = null),
                  (this._mappedTextureSwitched = null);
              }
              checkTextureSize() {
                const { features: e } = this.constructor;
                if (
                  this.texSize[0] > e.maxTextureSize ||
                  this.texSize[1] > e.maxTextureSize
                )
                  throw new Error(
                    `Texture size [${this.texSize[0]},${this.texSize[1]}] generated by kernel is larger than supported size [${e.maxTextureSize},${e.maxTextureSize}]`
                  );
              }
              translateSource() {
                throw new Error(
                  `"translateSource" not defined on ${this.constructor.name}`
                );
              }
              pickRenderStrategy(e) {
                if (this.graphical)
                  return (
                    (this.renderRawOutput = this.readPackedPixelsToUint8Array),
                    (this.transferValues = (e) => e),
                    (this.TextureConstructor = A),
                    null
                  );
                if ("unsigned" === this.precision)
                  if (
                    ((this.renderRawOutput = this.readPackedPixelsToUint8Array),
                    (this.transferValues = this.readPackedPixelsToFloat32Array),
                    this.pipeline)
                  )
                    switch (
                      ((this.renderOutput = this.renderTexture),
                      null !== this.subKernels &&
                        (this.renderKernels = this.renderKernelsToTextures),
                      this.returnType)
                    ) {
                      case "LiteralInteger":
                      case "Float":
                      case "Number":
                      case "Integer":
                        return this.output[2] > 0
                          ? ((this.TextureConstructor = S), null)
                          : this.output[1] > 0
                          ? ((this.TextureConstructor = v), null)
                          : ((this.TextureConstructor = T), null);
                      case "Array(2)":
                      case "Array(3)":
                      case "Array(4)":
                        return this.requestFallback(e);
                    }
                  else
                    switch (
                      (null !== this.subKernels &&
                        (this.renderKernels = this.renderKernelsToArrays),
                      this.returnType)
                    ) {
                      case "LiteralInteger":
                      case "Float":
                      case "Number":
                      case "Integer":
                        return (
                          (this.renderOutput = this.renderValues),
                          this.output[2] > 0
                            ? ((this.TextureConstructor = S),
                              (this.formatValues = i.erect3DPackedFloat),
                              null)
                            : this.output[1] > 0
                            ? ((this.TextureConstructor = v),
                              (this.formatValues = i.erect2DPackedFloat),
                              null)
                            : ((this.TextureConstructor = T),
                              (this.formatValues = i.erectPackedFloat),
                              null)
                        );
                      case "Array(2)":
                      case "Array(3)":
                      case "Array(4)":
                        return this.requestFallback(e);
                    }
                else {
                  if ("single" !== this.precision)
                    throw new Error(
                      `unhandled precision of "${this.precision}"`
                    );
                  if (
                    ((this.renderRawOutput =
                      this.readFloatPixelsToFloat32Array),
                    (this.transferValues = this.readFloatPixelsToFloat32Array),
                    this.pipeline)
                  )
                    switch (
                      ((this.renderOutput = this.renderTexture),
                      null !== this.subKernels &&
                        (this.renderKernels = this.renderKernelsToTextures),
                      this.returnType)
                    ) {
                      case "LiteralInteger":
                      case "Float":
                      case "Number":
                      case "Integer":
                        return this.optimizeFloatMemory
                          ? this.output[2] > 0
                            ? ((this.TextureConstructor = b), null)
                            : this.output[1] > 0
                            ? ((this.TextureConstructor = y), null)
                            : ((this.TextureConstructor = x), null)
                          : this.output[2] > 0
                          ? ((this.TextureConstructor = g), null)
                          : this.output[1] > 0
                          ? ((this.TextureConstructor = f), null)
                          : ((this.TextureConstructor = m), null);
                      case "Array(2)":
                        return this.output[2] > 0
                          ? ((this.TextureConstructor = o), null)
                          : this.output[1] > 0
                          ? ((this.TextureConstructor = a), null)
                          : ((this.TextureConstructor = s), null);
                      case "Array(3)":
                        return this.output[2] > 0
                          ? ((this.TextureConstructor = h), null)
                          : this.output[1] > 0
                          ? ((this.TextureConstructor = l), null)
                          : ((this.TextureConstructor = u), null);
                      case "Array(4)":
                        return this.output[2] > 0
                          ? ((this.TextureConstructor = d), null)
                          : this.output[1] > 0
                          ? ((this.TextureConstructor = p), null)
                          : ((this.TextureConstructor = c), null);
                    }
                  if (
                    ((this.renderOutput = this.renderValues),
                    null !== this.subKernels &&
                      (this.renderKernels = this.renderKernelsToArrays),
                    this.optimizeFloatMemory)
                  )
                    switch (this.returnType) {
                      case "LiteralInteger":
                      case "Float":
                      case "Number":
                      case "Integer":
                        return this.output[2] > 0
                          ? ((this.TextureConstructor = b),
                            (this.formatValues = i.erectMemoryOptimized3DFloat),
                            null)
                          : this.output[1] > 0
                          ? ((this.TextureConstructor = y),
                            (this.formatValues = i.erectMemoryOptimized2DFloat),
                            null)
                          : ((this.TextureConstructor = x),
                            (this.formatValues = i.erectMemoryOptimizedFloat),
                            null);
                      case "Array(2)":
                        return this.output[2] > 0
                          ? ((this.TextureConstructor = o),
                            (this.formatValues = i.erect3DArray2),
                            null)
                          : this.output[1] > 0
                          ? ((this.TextureConstructor = a),
                            (this.formatValues = i.erect2DArray2),
                            null)
                          : ((this.TextureConstructor = s),
                            (this.formatValues = i.erectArray2),
                            null);
                      case "Array(3)":
                        return this.output[2] > 0
                          ? ((this.TextureConstructor = h),
                            (this.formatValues = i.erect3DArray3),
                            null)
                          : this.output[1] > 0
                          ? ((this.TextureConstructor = l),
                            (this.formatValues = i.erect2DArray3),
                            null)
                          : ((this.TextureConstructor = u),
                            (this.formatValues = i.erectArray3),
                            null);
                      case "Array(4)":
                        return this.output[2] > 0
                          ? ((this.TextureConstructor = d),
                            (this.formatValues = i.erect3DArray4),
                            null)
                          : this.output[1] > 0
                          ? ((this.TextureConstructor = p),
                            (this.formatValues = i.erect2DArray4),
                            null)
                          : ((this.TextureConstructor = c),
                            (this.formatValues = i.erectArray4),
                            null);
                    }
                  else
                    switch (this.returnType) {
                      case "LiteralInteger":
                      case "Float":
                      case "Number":
                      case "Integer":
                        return this.output[2] > 0
                          ? ((this.TextureConstructor = g),
                            (this.formatValues = i.erect3DFloat),
                            null)
                          : this.output[1] > 0
                          ? ((this.TextureConstructor = f),
                            (this.formatValues = i.erect2DFloat),
                            null)
                          : ((this.TextureConstructor = m),
                            (this.formatValues = i.erectFloat),
                            null);
                      case "Array(2)":
                        return this.output[2] > 0
                          ? ((this.TextureConstructor = o),
                            (this.formatValues = i.erect3DArray2),
                            null)
                          : this.output[1] > 0
                          ? ((this.TextureConstructor = a),
                            (this.formatValues = i.erect2DArray2),
                            null)
                          : ((this.TextureConstructor = s),
                            (this.formatValues = i.erectArray2),
                            null);
                      case "Array(3)":
                        return this.output[2] > 0
                          ? ((this.TextureConstructor = h),
                            (this.formatValues = i.erect3DArray3),
                            null)
                          : this.output[1] > 0
                          ? ((this.TextureConstructor = l),
                            (this.formatValues = i.erect2DArray3),
                            null)
                          : ((this.TextureConstructor = u),
                            (this.formatValues = i.erectArray3),
                            null);
                      case "Array(4)":
                        return this.output[2] > 0
                          ? ((this.TextureConstructor = d),
                            (this.formatValues = i.erect3DArray4),
                            null)
                          : this.output[1] > 0
                          ? ((this.TextureConstructor = p),
                            (this.formatValues = i.erect2DArray4),
                            null)
                          : ((this.TextureConstructor = c),
                            (this.formatValues = i.erectArray4),
                            null);
                    }
                }
                throw new Error(`unhandled return type "${this.returnType}"`);
              }
              getKernelString() {
                throw new Error("abstract method call");
              }
              getMainResultTexture() {
                switch (this.returnType) {
                  case "LiteralInteger":
                  case "Float":
                  case "Integer":
                  case "Number":
                    return this.getMainResultNumberTexture();
                  case "Array(2)":
                    return this.getMainResultArray2Texture();
                  case "Array(3)":
                    return this.getMainResultArray3Texture();
                  case "Array(4)":
                    return this.getMainResultArray4Texture();
                  default:
                    throw new Error(
                      `unhandled returnType type ${this.returnType}`
                    );
                }
              }
              getMainResultKernelNumberTexture() {
                throw new Error("abstract method call");
              }
              getMainResultSubKernelNumberTexture() {
                throw new Error("abstract method call");
              }
              getMainResultKernelArray2Texture() {
                throw new Error("abstract method call");
              }
              getMainResultSubKernelArray2Texture() {
                throw new Error("abstract method call");
              }
              getMainResultKernelArray3Texture() {
                throw new Error("abstract method call");
              }
              getMainResultSubKernelArray3Texture() {
                throw new Error("abstract method call");
              }
              getMainResultKernelArray4Texture() {
                throw new Error("abstract method call");
              }
              getMainResultSubKernelArray4Texture() {
                throw new Error("abstract method call");
              }
              getMainResultGraphical() {
                throw new Error("abstract method call");
              }
              getMainResultMemoryOptimizedFloats() {
                throw new Error("abstract method call");
              }
              getMainResultPackedPixels() {
                throw new Error("abstract method call");
              }
              getMainResultString() {
                return this.graphical
                  ? this.getMainResultGraphical()
                  : "single" === this.precision
                  ? this.optimizeFloatMemory
                    ? this.getMainResultMemoryOptimizedFloats()
                    : this.getMainResultTexture()
                  : this.getMainResultPackedPixels();
              }
              getMainResultNumberTexture() {
                return (
                  i.linesToString(this.getMainResultKernelNumberTexture()) +
                  i.linesToString(this.getMainResultSubKernelNumberTexture())
                );
              }
              getMainResultArray2Texture() {
                return (
                  i.linesToString(this.getMainResultKernelArray2Texture()) +
                  i.linesToString(this.getMainResultSubKernelArray2Texture())
                );
              }
              getMainResultArray3Texture() {
                return (
                  i.linesToString(this.getMainResultKernelArray3Texture()) +
                  i.linesToString(this.getMainResultSubKernelArray3Texture())
                );
              }
              getMainResultArray4Texture() {
                return (
                  i.linesToString(this.getMainResultKernelArray4Texture()) +
                  i.linesToString(this.getMainResultSubKernelArray4Texture())
                );
              }
              getFloatTacticDeclaration() {
                return `precision ${this.getVariablePrecisionString(
                  this.texSize,
                  this.tactic
                )} float;\n`;
              }
              getIntTacticDeclaration() {
                return `precision ${this.getVariablePrecisionString(
                  this.texSize,
                  this.tactic,
                  !0
                )} int;\n`;
              }
              getSampler2DTacticDeclaration() {
                return `precision ${this.getVariablePrecisionString(
                  this.texSize,
                  this.tactic
                )} sampler2D;\n`;
              }
              getSampler2DArrayTacticDeclaration() {
                return `precision ${this.getVariablePrecisionString(
                  this.texSize,
                  this.tactic
                )} sampler2DArray;\n`;
              }
              renderTexture() {
                return this.immutable ? this.texture.clone() : this.texture;
              }
              readPackedPixelsToUint8Array() {
                if ("unsigned" !== this.precision)
                  throw new Error('Requires this.precision to be "unsigned"');
                const { texSize: e, context: t } = this,
                  r = new Uint8Array(e[0] * e[1] * 4);
                return (
                  t.readPixels(0, 0, e[0], e[1], t.RGBA, t.UNSIGNED_BYTE, r), r
                );
              }
              readPackedPixelsToFloat32Array() {
                return new Float32Array(
                  this.readPackedPixelsToUint8Array().buffer
                );
              }
              readFloatPixelsToFloat32Array() {
                if ("single" !== this.precision)
                  throw new Error('Requires this.precision to be "single"');
                const { texSize: e, context: t } = this,
                  r = e[0],
                  n = e[1],
                  i = new Float32Array(r * n * 4);
                return t.readPixels(0, 0, r, n, t.RGBA, t.FLOAT, i), i;
              }
              getPixels(e) {
                const { context: t, output: r } = this,
                  [n, s] = r,
                  a = new Uint8Array(n * s * 4);
                return (
                  t.readPixels(0, 0, n, s, t.RGBA, t.UNSIGNED_BYTE, a),
                  new Uint8ClampedArray((e ? a : i.flipPixels(a, n, s)).buffer)
                );
              }
              renderKernelsToArrays() {
                const e = { result: this.renderOutput() };
                for (let t = 0; t < this.subKernels.length; t++)
                  e[this.subKernels[t].property] =
                    this.mappedTextures[t].toArray();
                return e;
              }
              renderKernelsToTextures() {
                const e = { result: this.renderOutput() };
                if (this.immutable)
                  for (let t = 0; t < this.subKernels.length; t++)
                    e[this.subKernels[t].property] =
                      this.mappedTextures[t].clone();
                else
                  for (let t = 0; t < this.subKernels.length; t++)
                    e[this.subKernels[t].property] = this.mappedTextures[t];
                return e;
              }
              resetSwitchingKernels() {
                const e = this.switchingKernels;
                return (this.switchingKernels = null), e;
              }
              setOutput(e) {
                const t = this.toKernelOutput(e);
                if (this.program) {
                  if (!this.dynamicOutput)
                    throw new Error(
                      "Resizing a kernel with dynamicOutput: false is not possible"
                    );
                  const r = [t[0], t[1] || 1, t[2] || 1],
                    n = i.getKernelTextureSize(
                      {
                        optimizeFloatMemory: this.optimizeFloatMemory,
                        precision: this.precision,
                      },
                      r
                    ),
                    s = this.texSize;
                  if (s) {
                    const t = this.getVariablePrecisionString(s, this.tactic),
                      r = this.getVariablePrecisionString(n, this.tactic);
                    if (t !== r)
                      return (
                        this.debug &&
                          console.warn(
                            "Precision requirement changed, asking GPU instance to recompile"
                          ),
                        void this.switchKernels({
                          type: "outputPrecisionMismatch",
                          precision: r,
                          needed: e,
                        })
                      );
                  }
                  (this.output = t), (this.threadDim = r), (this.texSize = n);
                  const { context: a } = this;
                  if (
                    (a.bindFramebuffer(a.FRAMEBUFFER, this.framebuffer),
                    this.updateMaxTexSize(),
                    (this.framebuffer.width = this.texSize[0]),
                    (this.framebuffer.height = this.texSize[1]),
                    a.viewport(0, 0, this.maxTexSize[0], this.maxTexSize[1]),
                    (this.canvas.width = this.maxTexSize[0]),
                    (this.canvas.height = this.maxTexSize[1]),
                    this.texture && this.texture.delete(),
                    (this.texture = null),
                    this._setupOutputTexture(),
                    this.mappedTextures && this.mappedTextures.length > 0)
                  ) {
                    for (let e = 0; e < this.mappedTextures.length; e++)
                      this.mappedTextures[e].delete();
                    (this.mappedTextures = null),
                      this._setupSubOutputTextures();
                  }
                } else this.output = t;
                return this;
              }
              renderValues() {
                return this.formatValues(
                  this.transferValues(),
                  this.output[0],
                  this.output[1],
                  this.output[2]
                );
              }
              switchKernels(e) {
                this.switchingKernels
                  ? this.switchingKernels.push(e)
                  : (this.switchingKernels = [e]);
              }
              getVariablePrecisionString(
                e = this.texSize,
                t = this.tactic,
                r = !1
              ) {
                if (!t) {
                  if (!this.constructor.features.isSpeedTacticSupported)
                    return "highp";
                  const t =
                      this.constructor.features[
                        r ? "lowIntPrecision" : "lowFloatPrecision"
                      ],
                    n =
                      this.constructor.features[
                        r ? "mediumIntPrecision" : "mediumFloatPrecision"
                      ],
                    i =
                      this.constructor.features[
                        r ? "highIntPrecision" : "highFloatPrecision"
                      ],
                    s = Math.log2(e[0] * e[1]);
                  if (s <= t.rangeMax) return "lowp";
                  if (s <= n.rangeMax) return "mediump";
                  if (s <= i.rangeMax) return "highp";
                  throw new Error(
                    "The required size exceeds that of the ability of your system"
                  );
                }
                switch (t) {
                  case "speed":
                    return "lowp";
                  case "balanced":
                    return "mediump";
                  case "precision":
                    return "highp";
                  default:
                    throw new Error(
                      `Unknown tactic "${t}" use "speed", "balanced", "precision", or empty for auto`
                    );
                }
              }
              updateTextureArgumentRefs(e, t) {
                if (this.immutable)
                  if (this.texture.texture === t.texture) {
                    const { prevArg: r } = e;
                    r &&
                      (1 === r.texture._refs &&
                        (this.texture.delete(),
                        (this.texture = r.clone()),
                        (this._textureSwitched = !0)),
                      r.delete()),
                      (e.prevArg = t.clone());
                  } else if (
                    this.mappedTextures &&
                    this.mappedTextures.length > 0
                  ) {
                    const { mappedTextures: r } = this;
                    for (let n = 0; n < r.length; n++) {
                      const i = r[n];
                      if (i.texture === t.texture) {
                        const { prevArg: s } = e;
                        return (
                          s &&
                            (1 === s.texture._refs &&
                              (i.delete(),
                              (r[n] = s.clone()),
                              (this._mappedTextureSwitched[n] = !0)),
                            s.delete()),
                          void (e.prevArg = t.clone())
                        );
                      }
                    }
                  }
              }
              onActivate(e) {
                if (
                  ((this._textureSwitched = !0),
                  (this.texture = e.texture),
                  this.mappedTextures)
                ) {
                  for (let e = 0; e < this.mappedTextures.length; e++)
                    this._mappedTextureSwitched[e] = !0;
                  this.mappedTextures = e.mappedTextures;
                }
              }
              initCanvas() {}
            },
          };
        },
        {
          "../../utils": 114,
          "../kernel": 36,
          "./texture/array-2-float": 16,
          "./texture/array-2-float-2d": 14,
          "./texture/array-2-float-3d": 15,
          "./texture/array-3-float": 19,
          "./texture/array-3-float-2d": 17,
          "./texture/array-3-float-3d": 18,
          "./texture/array-4-float": 22,
          "./texture/array-4-float-2d": 20,
          "./texture/array-4-float-3d": 21,
          "./texture/float": 25,
          "./texture/float-2d": 23,
          "./texture/float-3d": 24,
          "./texture/graphical": 26,
          "./texture/memory-optimized": 30,
          "./texture/memory-optimized-2d": 28,
          "./texture/memory-optimized-3d": 29,
          "./texture/unsigned": 33,
          "./texture/unsigned-2d": 31,
          "./texture/unsigned-3d": 32,
        },
      ],
      14: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { GLTextureFloat: i } = e("./float");
          t.exports = {
            GLTextureArray2Float2D: class extends i {
              constructor(e) {
                super(e), (this.type = "ArrayTexture(2)");
              }
              toArray() {
                return n.erect2DArray2(
                  this.renderValues(),
                  this.output[0],
                  this.output[1]
                );
              }
            },
          };
        },
        { "../../../utils": 114, "./float": 25 },
      ],
      15: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { GLTextureFloat: i } = e("./float");
          t.exports = {
            GLTextureArray2Float3D: class extends i {
              constructor(e) {
                super(e), (this.type = "ArrayTexture(2)");
              }
              toArray() {
                return n.erect3DArray2(
                  this.renderValues(),
                  this.output[0],
                  this.output[1],
                  this.output[2]
                );
              }
            },
          };
        },
        { "../../../utils": 114, "./float": 25 },
      ],
      16: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { GLTextureFloat: i } = e("./float");
          t.exports = {
            GLTextureArray2Float: class extends i {
              constructor(e) {
                super(e), (this.type = "ArrayTexture(2)");
              }
              toArray() {
                return n.erectArray2(
                  this.renderValues(),
                  this.output[0],
                  this.output[1]
                );
              }
            },
          };
        },
        { "../../../utils": 114, "./float": 25 },
      ],
      17: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { GLTextureFloat: i } = e("./float");
          t.exports = {
            GLTextureArray3Float2D: class extends i {
              constructor(e) {
                super(e), (this.type = "ArrayTexture(3)");
              }
              toArray() {
                return n.erect2DArray3(
                  this.renderValues(),
                  this.output[0],
                  this.output[1]
                );
              }
            },
          };
        },
        { "../../../utils": 114, "./float": 25 },
      ],
      18: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { GLTextureFloat: i } = e("./float");
          t.exports = {
            GLTextureArray3Float3D: class extends i {
              constructor(e) {
                super(e), (this.type = "ArrayTexture(3)");
              }
              toArray() {
                return n.erect3DArray3(
                  this.renderValues(),
                  this.output[0],
                  this.output[1],
                  this.output[2]
                );
              }
            },
          };
        },
        { "../../../utils": 114, "./float": 25 },
      ],
      19: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { GLTextureFloat: i } = e("./float");
          t.exports = {
            GLTextureArray3Float: class extends i {
              constructor(e) {
                super(e), (this.type = "ArrayTexture(3)");
              }
              toArray() {
                return n.erectArray3(this.renderValues(), this.output[0]);
              }
            },
          };
        },
        { "../../../utils": 114, "./float": 25 },
      ],
      20: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { GLTextureFloat: i } = e("./float");
          t.exports = {
            GLTextureArray4Float2D: class extends i {
              constructor(e) {
                super(e), (this.type = "ArrayTexture(4)");
              }
              toArray() {
                return n.erect2DArray4(
                  this.renderValues(),
                  this.output[0],
                  this.output[1]
                );
              }
            },
          };
        },
        { "../../../utils": 114, "./float": 25 },
      ],
      21: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { GLTextureFloat: i } = e("./float");
          t.exports = {
            GLTextureArray4Float3D: class extends i {
              constructor(e) {
                super(e), (this.type = "ArrayTexture(4)");
              }
              toArray() {
                return n.erect3DArray4(
                  this.renderValues(),
                  this.output[0],
                  this.output[1],
                  this.output[2]
                );
              }
            },
          };
        },
        { "../../../utils": 114, "./float": 25 },
      ],
      22: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { GLTextureFloat: i } = e("./float");
          t.exports = {
            GLTextureArray4Float: class extends i {
              constructor(e) {
                super(e), (this.type = "ArrayTexture(4)");
              }
              toArray() {
                return n.erectArray4(this.renderValues(), this.output[0]);
              }
            },
          };
        },
        { "../../../utils": 114, "./float": 25 },
      ],
      23: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { GLTextureFloat: i } = e("./float");
          t.exports = {
            GLTextureFloat2D: class extends i {
              constructor(e) {
                super(e), (this.type = "ArrayTexture(1)");
              }
              toArray() {
                return n.erect2DFloat(
                  this.renderValues(),
                  this.output[0],
                  this.output[1]
                );
              }
            },
          };
        },
        { "../../../utils": 114, "./float": 25 },
      ],
      24: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { GLTextureFloat: i } = e("./float");
          t.exports = {
            GLTextureFloat3D: class extends i {
              constructor(e) {
                super(e), (this.type = "ArrayTexture(1)");
              }
              toArray() {
                return n.erect3DFloat(
                  this.renderValues(),
                  this.output[0],
                  this.output[1],
                  this.output[2]
                );
              }
            },
          };
        },
        { "../../../utils": 114, "./float": 25 },
      ],
      25: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { GLTexture: i } = e("./index");
          t.exports = {
            GLTextureFloat: class extends i {
              get textureType() {
                return this.context.FLOAT;
              }
              constructor(e) {
                super(e), (this.type = "ArrayTexture(1)");
              }
              renderRawOutput() {
                const e = this.context,
                  t = this.size;
                e.bindFramebuffer(e.FRAMEBUFFER, this.framebuffer()),
                  e.framebufferTexture2D(
                    e.FRAMEBUFFER,
                    e.COLOR_ATTACHMENT0,
                    e.TEXTURE_2D,
                    this.texture,
                    0
                  );
                const r = new Float32Array(t[0] * t[1] * 4);
                return e.readPixels(0, 0, t[0], t[1], e.RGBA, e.FLOAT, r), r;
              }
              renderValues() {
                return this._deleted ? null : this.renderRawOutput();
              }
              toArray() {
                return n.erectFloat(this.renderValues(), this.output[0]);
              }
            },
          };
        },
        { "../../../utils": 114, "./index": 27 },
      ],
      26: [
        function (e, t, r) {
          const { GLTextureUnsigned: n } = e("./unsigned");
          t.exports = {
            GLTextureGraphical: class extends n {
              constructor(e) {
                super(e), (this.type = "ArrayTexture(4)");
              }
              toArray() {
                return this.renderValues();
              }
            },
          };
        },
        { "./unsigned": 33 },
      ],
      27: [
        function (e, t, r) {
          const { Texture: n } = e("../../../texture");
          function i(e, t) {
            e.activeTexture(e.TEXTURE15),
              e.bindTexture(e.TEXTURE_2D, t),
              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST),
              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST);
          }
          t.exports = {
            GLTexture: class extends n {
              get textureType() {
                throw new Error(
                  `"textureType" not implemented on ${this.name}`
                );
              }
              clone() {
                return new this.constructor(this);
              }
              beforeMutate() {
                return this.texture._refs > 1 && (this.newTexture(), !0);
              }
              cloneTexture() {
                this.texture._refs--;
                const { context: e, size: t, texture: r, kernel: n } = this;
                n.debug && console.warn("cloning internal texture"),
                  e.bindFramebuffer(e.FRAMEBUFFER, this.framebuffer()),
                  i(e, r),
                  e.framebufferTexture2D(
                    e.FRAMEBUFFER,
                    e.COLOR_ATTACHMENT0,
                    e.TEXTURE_2D,
                    r,
                    0
                  );
                const s = e.createTexture();
                i(e, s),
                  e.texImage2D(
                    e.TEXTURE_2D,
                    0,
                    this.internalFormat,
                    t[0],
                    t[1],
                    0,
                    this.textureFormat,
                    this.textureType,
                    null
                  ),
                  e.copyTexSubImage2D(e.TEXTURE_2D, 0, 0, 0, 0, 0, t[0], t[1]),
                  (s._refs = 1),
                  (this.texture = s);
              }
              newTexture() {
                this.texture._refs--;
                const e = this.context,
                  t = this.size;
                this.kernel.debug && console.warn("new internal texture");
                const r = e.createTexture();
                i(e, r),
                  e.texImage2D(
                    e.TEXTURE_2D,
                    0,
                    this.internalFormat,
                    t[0],
                    t[1],
                    0,
                    this.textureFormat,
                    this.textureType,
                    null
                  ),
                  (r._refs = 1),
                  (this.texture = r);
              }
              clear() {
                if (this.texture._refs) {
                  this.texture._refs--;
                  const e = this.context,
                    t = (this.texture = e.createTexture());
                  i(e, t);
                  const r = this.size;
                  (t._refs = 1),
                    e.texImage2D(
                      e.TEXTURE_2D,
                      0,
                      this.internalFormat,
                      r[0],
                      r[1],
                      0,
                      this.textureFormat,
                      this.textureType,
                      null
                    );
                }
                const { context: e, texture: t } = this;
                e.bindFramebuffer(e.FRAMEBUFFER, this.framebuffer()),
                  e.bindTexture(e.TEXTURE_2D, t),
                  i(e, t),
                  e.framebufferTexture2D(
                    e.FRAMEBUFFER,
                    e.COLOR_ATTACHMENT0,
                    e.TEXTURE_2D,
                    t,
                    0
                  ),
                  e.clearColor(0, 0, 0, 0),
                  e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT);
              }
              delete() {
                this._deleted ||
                  ((this._deleted = !0),
                  (this.texture._refs &&
                    (this.texture._refs--, this.texture._refs)) ||
                    this.context.deleteTexture(this.texture));
              }
              framebuffer() {
                return (
                  this._framebuffer ||
                    (this._framebuffer = this.kernel.getRawValueFramebuffer(
                      this.size[0],
                      this.size[1]
                    )),
                  this._framebuffer
                );
              }
            },
          };
        },
        { "../../../texture": 113 },
      ],
      28: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { GLTextureFloat: i } = e("./float");
          t.exports = {
            GLTextureMemoryOptimized2D: class extends i {
              constructor(e) {
                super(e), (this.type = "MemoryOptimizedNumberTexture");
              }
              toArray() {
                return n.erectMemoryOptimized2DFloat(
                  this.renderValues(),
                  this.output[0],
                  this.output[1]
                );
              }
            },
          };
        },
        { "../../../utils": 114, "./float": 25 },
      ],
      29: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { GLTextureFloat: i } = e("./float");
          t.exports = {
            GLTextureMemoryOptimized3D: class extends i {
              constructor(e) {
                super(e), (this.type = "MemoryOptimizedNumberTexture");
              }
              toArray() {
                return n.erectMemoryOptimized3DFloat(
                  this.renderValues(),
                  this.output[0],
                  this.output[1],
                  this.output[2]
                );
              }
            },
          };
        },
        { "../../../utils": 114, "./float": 25 },
      ],
      30: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { GLTextureFloat: i } = e("./float");
          t.exports = {
            GLTextureMemoryOptimized: class extends i {
              constructor(e) {
                super(e), (this.type = "MemoryOptimizedNumberTexture");
              }
              toArray() {
                return n.erectMemoryOptimizedFloat(
                  this.renderValues(),
                  this.output[0]
                );
              }
            },
          };
        },
        { "../../../utils": 114, "./float": 25 },
      ],
      31: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { GLTextureUnsigned: i } = e("./unsigned");
          t.exports = {
            GLTextureUnsigned2D: class extends i {
              constructor(e) {
                super(e), (this.type = "NumberTexture");
              }
              toArray() {
                return n.erect2DPackedFloat(
                  this.renderValues(),
                  this.output[0],
                  this.output[1]
                );
              }
            },
          };
        },
        { "../../../utils": 114, "./unsigned": 33 },
      ],
      32: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { GLTextureUnsigned: i } = e("./unsigned");
          t.exports = {
            GLTextureUnsigned3D: class extends i {
              constructor(e) {
                super(e), (this.type = "NumberTexture");
              }
              toArray() {
                return n.erect3DPackedFloat(
                  this.renderValues(),
                  this.output[0],
                  this.output[1],
                  this.output[2]
                );
              }
            },
          };
        },
        { "../../../utils": 114, "./unsigned": 33 },
      ],
      33: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { GLTexture: i } = e("./index");
          t.exports = {
            GLTextureUnsigned: class extends i {
              get textureType() {
                return this.context.UNSIGNED_BYTE;
              }
              constructor(e) {
                super(e), (this.type = "NumberTexture");
              }
              renderRawOutput() {
                const { context: e } = this;
                e.bindFramebuffer(e.FRAMEBUFFER, this.framebuffer()),
                  e.framebufferTexture2D(
                    e.FRAMEBUFFER,
                    e.COLOR_ATTACHMENT0,
                    e.TEXTURE_2D,
                    this.texture,
                    0
                  );
                const t = new Uint8Array(this.size[0] * this.size[1] * 4);
                return (
                  e.readPixels(
                    0,
                    0,
                    this.size[0],
                    this.size[1],
                    e.RGBA,
                    e.UNSIGNED_BYTE,
                    t
                  ),
                  t
                );
              }
              renderValues() {
                return this._deleted
                  ? null
                  : new Float32Array(this.renderRawOutput().buffer);
              }
              toArray() {
                return n.erectPackedFloat(this.renderValues(), this.output[0]);
              }
            },
          };
        },
        { "../../../utils": 114, "./index": 27 },
      ],
      34: [
        function (e, t, r) {
          const n = e("gl"),
            { WebGLKernel: i } = e("../web-gl/kernel"),
            { glKernelString: s } = e("../gl/kernel-string");
          let a = null,
            o = null,
            u = null,
            l = null,
            h = null;
          t.exports = {
            HeadlessGLKernel: class extends i {
              static get isSupported() {
                return null !== a
                  ? a
                  : (this.setupFeatureChecks(), (a = null !== u));
              }
              static setupFeatureChecks() {
                if (((o = null), (l = null), "function" == typeof n))
                  try {
                    if (
                      !(u = n(2, 2, { preserveDrawingBuffer: !0 })) ||
                      !u.getExtension
                    )
                      return;
                    (l = {
                      STACKGL_resize_drawingbuffer: u.getExtension(
                        "STACKGL_resize_drawingbuffer"
                      ),
                      STACKGL_destroy_context: u.getExtension(
                        "STACKGL_destroy_context"
                      ),
                      OES_texture_float: u.getExtension("OES_texture_float"),
                      OES_texture_float_linear: u.getExtension(
                        "OES_texture_float_linear"
                      ),
                      OES_element_index_uint: u.getExtension(
                        "OES_element_index_uint"
                      ),
                      WEBGL_draw_buffers: u.getExtension("WEBGL_draw_buffers"),
                      WEBGL_color_buffer_float: u.getExtension(
                        "WEBGL_color_buffer_float"
                      ),
                    }),
                      (h = this.getFeatures());
                  } catch (e) {
                    console.warn(e);
                  }
              }
              static isContextMatch(e) {
                try {
                  return "ANGLE" === e.getParameter(e.RENDERER);
                } catch (e) {
                  return !1;
                }
              }
              static getIsTextureFloat() {
                return Boolean(l.OES_texture_float);
              }
              static getIsDrawBuffers() {
                return Boolean(l.WEBGL_draw_buffers);
              }
              static getChannelCount() {
                return l.WEBGL_draw_buffers
                  ? u.getParameter(l.WEBGL_draw_buffers.MAX_DRAW_BUFFERS_WEBGL)
                  : 1;
              }
              static getMaxTextureSize() {
                return u.getParameter(u.MAX_TEXTURE_SIZE);
              }
              static get testCanvas() {
                return o;
              }
              static get testContext() {
                return u;
              }
              static get features() {
                return h;
              }
              initCanvas() {
                return {};
              }
              initContext() {
                return n(2, 2, { preserveDrawingBuffer: !0 });
              }
              initExtensions() {
                this.extensions = {
                  STACKGL_resize_drawingbuffer: this.context.getExtension(
                    "STACKGL_resize_drawingbuffer"
                  ),
                  STACKGL_destroy_context: this.context.getExtension(
                    "STACKGL_destroy_context"
                  ),
                  OES_texture_float:
                    this.context.getExtension("OES_texture_float"),
                  OES_texture_float_linear: this.context.getExtension(
                    "OES_texture_float_linear"
                  ),
                  OES_element_index_uint: this.context.getExtension(
                    "OES_element_index_uint"
                  ),
                  WEBGL_draw_buffers:
                    this.context.getExtension("WEBGL_draw_buffers"),
                };
              }
              build() {
                super.build.apply(this, arguments),
                  this.fallbackRequested ||
                    this.extensions.STACKGL_resize_drawingbuffer.resize(
                      this.maxTexSize[0],
                      this.maxTexSize[1]
                    );
              }
              destroyExtensions() {
                (this.extensions.STACKGL_resize_drawingbuffer = null),
                  (this.extensions.STACKGL_destroy_context = null),
                  (this.extensions.OES_texture_float = null),
                  (this.extensions.OES_texture_float_linear = null),
                  (this.extensions.OES_element_index_uint = null),
                  (this.extensions.WEBGL_draw_buffers = null);
              }
              static destroyContext(e) {
                const t = e.getExtension("STACKGL_destroy_context");
                t && t.destroy && t.destroy();
              }
              toString() {
                return s(
                  this.constructor,
                  arguments,
                  this,
                  "const gl = context || require('gl')(1, 1);\n",
                  "    if (!context) { gl.getExtension('STACKGL_destroy_context').destroy(); }\n"
                );
              }
              setOutput(e) {
                return (
                  super.setOutput(e),
                  this.graphical &&
                    this.extensions.STACKGL_resize_drawingbuffer &&
                    this.extensions.STACKGL_resize_drawingbuffer.resize(
                      this.maxTexSize[0],
                      this.maxTexSize[1]
                    ),
                  this
                );
              }
            },
          };
        },
        { "../gl/kernel-string": 12, "../web-gl/kernel": 70, gl: 2 },
      ],
      35: [
        function (e, t, r) {
          t.exports = {
            KernelValue: class {
              constructor(e, t) {
                const {
                  name: r,
                  kernel: n,
                  context: i,
                  checkContext: s,
                  onRequestContextHandle: a,
                  onUpdateValueMismatch: o,
                  origin: u,
                  strictIntegers: l,
                  type: h,
                  tactic: c,
                } = t;
                if (!r) throw new Error("name not set");
                if (!h) throw new Error("type not set");
                if (!u) throw new Error("origin not set");
                if ("user" !== u && "constants" !== u)
                  throw new Error(
                    `origin must be "user" or "constants" value is "${u}"`
                  );
                if (!a) throw new Error("onRequestContextHandle is not set");
                (this.name = r),
                  (this.origin = u),
                  (this.tactic = c),
                  (this.varName = "constants" === u ? `constants.${r}` : r),
                  (this.kernel = n),
                  (this.strictIntegers = l),
                  (this.type = e.type || h),
                  (this.size = e.size || null),
                  (this.index = null),
                  (this.context = i),
                  (this.checkContext = null == s || s),
                  (this.contextHandle = null),
                  (this.onRequestContextHandle = a),
                  (this.onUpdateValueMismatch = o),
                  (this.forceUploadEachRun = null);
              }
              get id() {
                return `${this.origin}_${name}`;
              }
              getSource() {
                throw new Error(
                  `"getSource" not defined on ${this.constructor.name}`
                );
              }
              updateValue(e) {
                throw new Error(
                  `"updateValue" not defined on ${this.constructor.name}`
                );
              }
            },
          };
        },
        {},
      ],
      36: [
        function (e, t, r) {
          const { utils: n } = e("../utils"),
            { Input: i } = e("../input");
          t.exports = {
            Kernel: class {
              static get isSupported() {
                throw new Error(
                  `"isSupported" not implemented on ${this.name}`
                );
              }
              static isContextMatch(e) {
                throw new Error(
                  `"isContextMatch" not implemented on ${this.name}`
                );
              }
              static getFeatures() {
                throw new Error(
                  `"getFeatures" not implemented on ${this.name}`
                );
              }
              static destroyContext(e) {
                throw new Error(`"destroyContext" called on ${this.name}`);
              }
              static nativeFunctionArguments() {
                throw new Error(
                  `"nativeFunctionArguments" called on ${this.name}`
                );
              }
              static nativeFunctionReturnType() {
                throw new Error(
                  `"nativeFunctionReturnType" called on ${this.name}`
                );
              }
              static combineKernels() {
                throw new Error(`"combineKernels" called on ${this.name}`);
              }
              constructor(e, t) {
                if ("object" != typeof e) {
                  if ("string" != typeof e)
                    throw new Error("source not a string");
                  if (!n.isFunctionString(e))
                    throw new Error("source not a function string");
                }
                (this.useLegacyEncoder = !1),
                  (this.fallbackRequested = !1),
                  (this.onRequestFallback = null),
                  (this.argumentNames =
                    "string" == typeof e
                      ? n.getArgumentNamesFromString(e)
                      : null),
                  (this.argumentTypes = null),
                  (this.argumentSizes = null),
                  (this.argumentBitRatios = null),
                  (this.kernelArguments = null),
                  (this.kernelConstants = null),
                  (this.forceUploadKernelConstants = null),
                  (this.source = e),
                  (this.output = null),
                  (this.debug = !1),
                  (this.graphical = !1),
                  (this.loopMaxIterations = 0),
                  (this.constants = null),
                  (this.constantTypes = null),
                  (this.constantBitRatios = null),
                  (this.dynamicArguments = !1),
                  (this.dynamicOutput = !1),
                  (this.canvas = null),
                  (this.context = null),
                  (this.checkContext = null),
                  (this.gpu = null),
                  (this.functions = null),
                  (this.nativeFunctions = null),
                  (this.injectedNative = null),
                  (this.subKernels = null),
                  (this.validate = !0),
                  (this.immutable = !1),
                  (this.pipeline = !1),
                  (this.precision = null),
                  (this.tactic = null),
                  (this.plugins = null),
                  (this.returnType = null),
                  (this.leadingReturnStatement = null),
                  (this.followingReturnStatement = null),
                  (this.optimizeFloatMemory = null),
                  (this.strictIntegers = !1),
                  (this.fixIntegerDivisionAccuracy = null),
                  (this.built = !1),
                  (this.signature = null);
              }
              mergeSettings(e) {
                for (let t in e)
                  if (e.hasOwnProperty(t) && this.hasOwnProperty(t)) {
                    switch (t) {
                      case "output":
                        if (!Array.isArray(e.output)) {
                          this.setOutput(e.output);
                          continue;
                        }
                        break;
                      case "functions":
                        this.functions = [];
                        for (let t = 0; t < e.functions.length; t++)
                          this.addFunction(e.functions[t]);
                        continue;
                      case "graphical":
                        e[t] &&
                          !e.hasOwnProperty("precision") &&
                          (this.precision = "unsigned"),
                          (this[t] = e[t]);
                        continue;
                      case "nativeFunctions":
                        if (!e.nativeFunctions) continue;
                        this.nativeFunctions = [];
                        for (let t = 0; t < e.nativeFunctions.length; t++) {
                          const r = e.nativeFunctions[t],
                            { name: n, source: i } = r;
                          this.addNativeFunction(n, i, r);
                        }
                        continue;
                    }
                    this[t] = e[t];
                  }
                this.canvas || (this.canvas = this.initCanvas()),
                  this.context || (this.context = this.initContext()),
                  this.plugins || (this.plugins = this.initPlugins(e));
              }
              build() {
                throw new Error(
                  `"build" not defined on ${this.constructor.name}`
                );
              }
              run() {
                throw new Error(
                  `"run" not defined on ${this.constructor.name}`
                );
              }
              initCanvas() {
                throw new Error(
                  `"initCanvas" not defined on ${this.constructor.name}`
                );
              }
              initContext() {
                throw new Error(
                  `"initContext" not defined on ${this.constructor.name}`
                );
              }
              initPlugins(e) {
                throw new Error(
                  `"initPlugins" not defined on ${this.constructor.name}`
                );
              }
              addFunction(e, t = {}) {
                if (e.name && e.source && e.argumentTypes && "returnType" in e)
                  this.functions.push(e);
                else if ("settings" in e && "source" in e)
                  this.functions.push(
                    this.functionToIGPUFunction(e.source, e.settings)
                  );
                else {
                  if ("string" != typeof e && "function" != typeof e)
                    throw new Error("function not properly defined");
                  this.functions.push(this.functionToIGPUFunction(e, t));
                }
                return this;
              }
              addNativeFunction(e, t, r = {}) {
                const { argumentTypes: n, argumentNames: i } = r.argumentTypes
                  ? (function (e) {
                      const t = Object.keys(e),
                        r = [];
                      for (let n = 0; n < t.length; n++) {
                        const i = t[n];
                        r.push(e[i]);
                      }
                      return { argumentTypes: r, argumentNames: t };
                    })(r.argumentTypes)
                  : this.constructor.nativeFunctionArguments(t) || {};
                return (
                  this.nativeFunctions.push({
                    name: e,
                    source: t,
                    settings: r,
                    argumentTypes: n,
                    argumentNames: i,
                    returnType:
                      r.returnType ||
                      this.constructor.nativeFunctionReturnType(t),
                  }),
                  this
                );
              }
              setupArguments(e) {
                if (((this.kernelArguments = []), this.argumentTypes))
                  for (let e = 0; e < this.argumentTypes.length; e++)
                    this.kernelArguments.push({ type: this.argumentTypes[e] });
                else if (!this.argumentTypes) {
                  this.argumentTypes = [];
                  for (let t = 0; t < e.length; t++) {
                    const r = n.getVariableType(e[t], this.strictIntegers),
                      i = "Integer" === r ? "Number" : r;
                    this.argumentTypes.push(i),
                      this.kernelArguments.push({ type: i });
                  }
                }
                (this.argumentSizes = new Array(e.length)),
                  (this.argumentBitRatios = new Int32Array(e.length));
                for (let t = 0; t < e.length; t++) {
                  const r = e[t];
                  (this.argumentSizes[t] = r.constructor === i ? r.size : null),
                    (this.argumentBitRatios[t] = this.getBitRatio(r));
                }
                if (this.argumentNames.length !== e.length)
                  throw new Error("arguments are miss-aligned");
              }
              setupConstants() {
                this.kernelConstants = [];
                let e = null === this.constantTypes;
                if (
                  (e && (this.constantTypes = {}),
                  (this.constantBitRatios = {}),
                  this.constants)
                )
                  for (let t in this.constants) {
                    if (e) {
                      const e = n.getVariableType(
                        this.constants[t],
                        this.strictIntegers
                      );
                      (this.constantTypes[t] = e),
                        this.kernelConstants.push({ name: t, type: e });
                    } else
                      this.kernelConstants.push({
                        name: t,
                        type: this.constantTypes[t],
                      });
                    this.constantBitRatios[t] = this.getBitRatio(
                      this.constants[t]
                    );
                  }
              }
              setOptimizeFloatMemory(e) {
                return (this.optimizeFloatMemory = e), this;
              }
              toKernelOutput(e) {
                return e.hasOwnProperty("x")
                  ? e.hasOwnProperty("y")
                    ? e.hasOwnProperty("z")
                      ? [e.x, e.y, e.z]
                      : [e.x, e.y]
                    : [e.x]
                  : e;
              }
              setOutput(e) {
                return (this.output = this.toKernelOutput(e)), this;
              }
              setDebug(e) {
                return (this.debug = e), this;
              }
              setGraphical(e) {
                return (
                  (this.graphical = e), (this.precision = "unsigned"), this
                );
              }
              setLoopMaxIterations(e) {
                return (this.loopMaxIterations = e), this;
              }
              setConstants(e) {
                return (this.constants = e), this;
              }
              setConstantTypes(e) {
                return (this.constantTypes = e), this;
              }
              setFunctions(e) {
                for (let t = 0; t < e.length; t++) this.addFunction(e[t]);
                return this;
              }
              setNativeFunctions(e) {
                for (let t = 0; t < e.length; t++) {
                  const r = e[t],
                    { name: n, source: i } = r;
                  this.addNativeFunction(n, i, r);
                }
                return this;
              }
              setInjectedNative(e) {
                return (this.injectedNative = e), this;
              }
              setPipeline(e) {
                return (this.pipeline = e), this;
              }
              setPrecision(e) {
                return (this.precision = e), this;
              }
              setDimensions(e) {
                return (
                  n.warnDeprecated("method", "setDimensions", "setOutput"),
                  (this.output = e),
                  this
                );
              }
              setOutputToTexture(e) {
                return (
                  n.warnDeprecated(
                    "method",
                    "setOutputToTexture",
                    "setPipeline"
                  ),
                  (this.pipeline = e),
                  this
                );
              }
              setImmutable(e) {
                return (this.immutable = e), this;
              }
              setCanvas(e) {
                return (this.canvas = e), this;
              }
              setStrictIntegers(e) {
                return (this.strictIntegers = e), this;
              }
              setDynamicOutput(e) {
                return (this.dynamicOutput = e), this;
              }
              setHardcodeConstants(e) {
                return (
                  n.warnDeprecated("method", "setHardcodeConstants"),
                  this.setDynamicOutput(e),
                  this.setDynamicArguments(e),
                  this
                );
              }
              setDynamicArguments(e) {
                return (this.dynamicArguments = e), this;
              }
              setUseLegacyEncoder(e) {
                return (this.useLegacyEncoder = e), this;
              }
              setWarnVarUsage(e) {
                return n.warnDeprecated("method", "setWarnVarUsage"), this;
              }
              getCanvas() {
                return n.warnDeprecated("method", "getCanvas"), this.canvas;
              }
              getWebGl() {
                return n.warnDeprecated("method", "getWebGl"), this.context;
              }
              setContext(e) {
                return (this.context = e), this;
              }
              setArgumentTypes(e) {
                if (Array.isArray(e)) this.argumentTypes = e;
                else {
                  this.argumentTypes = [];
                  for (const t in e) {
                    if (!e.hasOwnProperty(t)) continue;
                    const r = this.argumentNames.indexOf(t);
                    if (-1 === r)
                      throw new Error(`unable to find argument ${t}`);
                    this.argumentTypes[r] = e[t];
                  }
                }
                return this;
              }
              setTactic(e) {
                return (this.tactic = e), this;
              }
              requestFallback(e) {
                if (!this.onRequestFallback)
                  throw new Error(
                    `"onRequestFallback" not defined on ${this.constructor.name}`
                  );
                return (this.fallbackRequested = !0), this.onRequestFallback(e);
              }
              validateSettings() {
                throw new Error(
                  `"validateSettings" not defined on ${this.constructor.name}`
                );
              }
              addSubKernel(e) {
                if (
                  (null === this.subKernels && (this.subKernels = []),
                  !e.source)
                )
                  throw new Error('subKernel missing "source" property');
                if (!e.property && isNaN(e.property))
                  throw new Error('subKernel missing "property" property');
                if (!e.name)
                  throw new Error('subKernel missing "name" property');
                return this.subKernels.push(e), this;
              }
              destroy(e) {
                throw new Error(`"destroy" called on ${this.constructor.name}`);
              }
              getBitRatio(e) {
                if ("single" === this.precision) return 4;
                if (Array.isArray(e[0])) return this.getBitRatio(e[0]);
                if (e.constructor === i) return this.getBitRatio(e.value);
                switch (e.constructor) {
                  case Uint8ClampedArray:
                  case Uint8Array:
                  case Int8Array:
                    return 1;
                  case Uint16Array:
                  case Int16Array:
                    return 2;
                  case Float32Array:
                  case Int32Array:
                  default:
                    return 4;
                }
              }
              getPixels(e) {
                throw new Error(
                  `"getPixels" called on ${this.constructor.name}`
                );
              }
              checkOutput() {
                if (!this.output || !n.isArray(this.output))
                  throw new Error("kernel.output not an array");
                if (this.output.length < 1)
                  throw new Error(
                    "kernel.output is empty, needs at least 1 value"
                  );
                for (let e = 0; e < this.output.length; e++)
                  if (isNaN(this.output[e]) || this.output[e] < 1)
                    throw new Error(
                      `${this.constructor.name}.output[${e}] incorrectly defined as \`${this.output[e]}\`, needs to be numeric, and greater than 0`
                    );
              }
              prependString(e) {
                throw new Error(
                  `"prependString" called on ${this.constructor.name}`
                );
              }
              hasPrependString(e) {
                throw new Error(
                  `"hasPrependString" called on ${this.constructor.name}`
                );
              }
              toJSON() {
                return {
                  settings: {
                    output: this.output,
                    pipeline: this.pipeline,
                    argumentNames: this.argumentNames,
                    argumentsTypes: this.argumentTypes,
                    constants: this.constants,
                    pluginNames: this.plugins
                      ? this.plugins.map((e) => e.name)
                      : null,
                    returnType: this.returnType,
                  },
                };
              }
              buildSignature(e) {
                const t = this.constructor;
                this.signature = t.getSignature(
                  this,
                  t.getArgumentTypes(this, e)
                );
              }
              static getArgumentTypes(e, t) {
                const r = new Array(t.length);
                for (let i = 0; i < t.length; i++) {
                  const s = t[i],
                    a = e.argumentTypes[i];
                  if (s.type) r[i] = s.type;
                  else
                    switch (a) {
                      case "Number":
                      case "Integer":
                      case "Float":
                      case "ArrayTexture(1)":
                        r[i] = n.getVariableType(s);
                        break;
                      default:
                        r[i] = a;
                    }
                }
                return r;
              }
              static getSignature(e, t) {
                throw new Error(
                  `"getSignature" not implemented on ${this.name}`
                );
              }
              functionToIGPUFunction(e, t = {}) {
                if ("string" != typeof e && "function" != typeof e)
                  throw new Error("source not a string or function");
                const r = "string" == typeof e ? e : e.toString();
                let i = [];
                return (
                  (i = Array.isArray(t.argumentTypes)
                    ? t.argumentTypes
                    : "object" == typeof t.argumentTypes
                    ? n
                        .getArgumentNamesFromString(r)
                        .map((e) => t.argumentTypes[e]) || []
                    : t.argumentTypes || []),
                  {
                    name: n.getFunctionNameFromString(r) || null,
                    source: r,
                    argumentTypes: i,
                    returnType: t.returnType || null,
                  }
                );
              }
              onActivate(e) {}
            },
          };
        },
        { "../input": 110, "../utils": 114 },
      ],
      37: [
        function (e, t, r) {
          const n = `__HEADER__;\n__FLOAT_TACTIC_DECLARATION__;\n__INT_TACTIC_DECLARATION__;\n__SAMPLER_2D_TACTIC_DECLARATION__;\n\nconst int LOOP_MAX = __LOOP_MAX__;\n\n__PLUGINS__;\n__CONSTANTS__;\n\nvarying vec2 vTexCoord;\n\nfloat acosh(float x) {\n  return log(x + sqrt(x * x - 1.0));\n}\n\nfloat sinh(float x) {\n  return (pow(${Math.E}, x) - pow(${Math.E}, -x)) / 2.0;\n}\n\nfloat asinh(float x) {\n  return log(x + sqrt(x * x + 1.0));\n}\n\nfloat atan2(float v1, float v2) {\n  if (v1 == 0.0 || v2 == 0.0) return 0.0;\n  return atan(v1 / v2);\n}\n\nfloat atanh(float x) {\n  x = (x + 1.0) / (x - 1.0);\n  if (x < 0.0) {\n    return 0.5 * log(-x);\n  }\n  return 0.5 * log(x);\n}\n\nfloat cbrt(float x) {\n  if (x >= 0.0) {\n    return pow(x, 1.0 / 3.0);\n  } else {\n    return -pow(x, 1.0 / 3.0);\n  }\n}\n\nfloat cosh(float x) {\n  return (pow(${Math.E}, x) + pow(${Math.E}, -x)) / 2.0; \n}\n\nfloat expm1(float x) {\n  return pow(${Math.E}, x) - 1.0; \n}\n\nfloat fround(highp float x) {\n  return x;\n}\n\nfloat imul(float v1, float v2) {\n  return float(int(v1) * int(v2));\n}\n\nfloat log10(float x) {\n  return log2(x) * (1.0 / log2(10.0));\n}\n\nfloat log1p(float x) {\n  return log(1.0 + x);\n}\n\nfloat _pow(float v1, float v2) {\n  if (v2 == 0.0) return 1.0;\n  return pow(v1, v2);\n}\n\nfloat tanh(float x) {\n  float e = exp(2.0 * x);\n  return (e - 1.0) / (e + 1.0);\n}\n\nfloat trunc(float x) {\n  if (x >= 0.0) {\n    return floor(x); \n  } else {\n    return ceil(x);\n  }\n}\n\nvec4 _round(vec4 x) {\n  return floor(x + 0.5);\n}\n\nfloat _round(float x) {\n  return floor(x + 0.5);\n}\n\nconst int BIT_COUNT = 32;\nint modi(int x, int y) {\n  return x - y * (x / y);\n}\n\nint bitwiseOr(int a, int b) {\n  int result = 0;\n  int n = 1;\n  \n  for (int i = 0; i < BIT_COUNT; i++) {\n    if ((modi(a, 2) == 1) || (modi(b, 2) == 1)) {\n      result += n;\n    }\n    a = a / 2;\n    b = b / 2;\n    n = n * 2;\n    if(!(a > 0 || b > 0)) {\n      break;\n    }\n  }\n  return result;\n}\nint bitwiseXOR(int a, int b) {\n  int result = 0;\n  int n = 1;\n  \n  for (int i = 0; i < BIT_COUNT; i++) {\n    if ((modi(a, 2) == 1) != (modi(b, 2) == 1)) {\n      result += n;\n    }\n    a = a / 2;\n    b = b / 2;\n    n = n * 2;\n    if(!(a > 0 || b > 0)) {\n      break;\n    }\n  }\n  return result;\n}\nint bitwiseAnd(int a, int b) {\n  int result = 0;\n  int n = 1;\n  for (int i = 0; i < BIT_COUNT; i++) {\n    if ((modi(a, 2) == 1) && (modi(b, 2) == 1)) {\n      result += n;\n    }\n    a = a / 2;\n    b = b / 2;\n    n = n * 2;\n    if(!(a > 0 && b > 0)) {\n      break;\n    }\n  }\n  return result;\n}\nint bitwiseNot(int a) {\n  int result = 0;\n  int n = 1;\n  \n  for (int i = 0; i < BIT_COUNT; i++) {\n    if (modi(a, 2) == 0) {\n      result += n;    \n    }\n    a = a / 2;\n    n = n * 2;\n  }\n  return result;\n}\nint bitwiseZeroFillLeftShift(int n, int shift) {\n  int maxBytes = BIT_COUNT;\n  for (int i = 0; i < BIT_COUNT; i++) {\n    if (maxBytes >= n) {\n      break;\n    }\n    maxBytes *= 2;\n  }\n  for (int i = 0; i < BIT_COUNT; i++) {\n    if (i >= shift) {\n      break;\n    }\n    n *= 2;\n  }\n\n  int result = 0;\n  int byteVal = 1;\n  for (int i = 0; i < BIT_COUNT; i++) {\n    if (i >= maxBytes) break;\n    if (modi(n, 2) > 0) { result += byteVal; }\n    n = int(n / 2);\n    byteVal *= 2;\n  }\n  return result;\n}\n\nint bitwiseSignedRightShift(int num, int shifts) {\n  return int(floor(float(num) / pow(2.0, float(shifts))));\n}\n\nint bitwiseZeroFillRightShift(int n, int shift) {\n  int maxBytes = BIT_COUNT;\n  for (int i = 0; i < BIT_COUNT; i++) {\n    if (maxBytes >= n) {\n      break;\n    }\n    maxBytes *= 2;\n  }\n  for (int i = 0; i < BIT_COUNT; i++) {\n    if (i >= shift) {\n      break;\n    }\n    n /= 2;\n  }\n  int result = 0;\n  int byteVal = 1;\n  for (int i = 0; i < BIT_COUNT; i++) {\n    if (i >= maxBytes) break;\n    if (modi(n, 2) > 0) { result += byteVal; }\n    n = int(n / 2);\n    byteVal *= 2;\n  }\n  return result;\n}\n\nvec2 integerMod(vec2 x, float y) {\n  vec2 res = floor(mod(x, y));\n  return res * step(1.0 - floor(y), -res);\n}\n\nvec3 integerMod(vec3 x, float y) {\n  vec3 res = floor(mod(x, y));\n  return res * step(1.0 - floor(y), -res);\n}\n\nvec4 integerMod(vec4 x, vec4 y) {\n  vec4 res = floor(mod(x, y));\n  return res * step(1.0 - floor(y), -res);\n}\n\nfloat integerMod(float x, float y) {\n  float res = floor(mod(x, y));\n  return res * (res > floor(y) - 1.0 ? 0.0 : 1.0);\n}\n\nint integerMod(int x, int y) {\n  return x - (y * int(x / y));\n}\n\n__DIVIDE_WITH_INTEGER_CHECK__;\n\n// Here be dragons!\n// DO NOT OPTIMIZE THIS CODE\n// YOU WILL BREAK SOMETHING ON SOMEBODY'S MACHINE\n// LEAVE IT AS IT IS, LEST YOU WASTE YOUR OWN TIME\nconst vec2 MAGIC_VEC = vec2(1.0, -256.0);\nconst vec4 SCALE_FACTOR = vec4(1.0, 256.0, 65536.0, 0.0);\nconst vec4 SCALE_FACTOR_INV = vec4(1.0, 0.00390625, 0.0000152587890625, 0.0); // 1, 1/256, 1/65536\nfloat decode32(vec4 texel) {\n  __DECODE32_ENDIANNESS__;\n  texel *= 255.0;\n  vec2 gte128;\n  gte128.x = texel.b >= 128.0 ? 1.0 : 0.0;\n  gte128.y = texel.a >= 128.0 ? 1.0 : 0.0;\n  float exponent = 2.0 * texel.a - 127.0 + dot(gte128, MAGIC_VEC);\n  float res = exp2(_round(exponent));\n  texel.b = texel.b - 128.0 * gte128.x;\n  res = dot(texel, SCALE_FACTOR) * exp2(_round(exponent-23.0)) + res;\n  res *= gte128.y * -2.0 + 1.0;\n  return res;\n}\n\nfloat decode16(vec4 texel, int index) {\n  int channel = integerMod(index, 2);\n  if (channel == 0) return texel.r * 255.0 + texel.g * 65280.0;\n  if (channel == 1) return texel.b * 255.0 + texel.a * 65280.0;\n  return 0.0;\n}\n\nfloat decode8(vec4 texel, int index) {\n  int channel = integerMod(index, 4);\n  if (channel == 0) return texel.r * 255.0;\n  if (channel == 1) return texel.g * 255.0;\n  if (channel == 2) return texel.b * 255.0;\n  if (channel == 3) return texel.a * 255.0;\n  return 0.0;\n}\n\nvec4 legacyEncode32(float f) {\n  float F = abs(f);\n  float sign = f < 0.0 ? 1.0 : 0.0;\n  float exponent = floor(log2(F));\n  float mantissa = (exp2(-exponent) * F);\n  // exponent += floor(log2(mantissa));\n  vec4 texel = vec4(F * exp2(23.0-exponent)) * SCALE_FACTOR_INV;\n  texel.rg = integerMod(texel.rg, 256.0);\n  texel.b = integerMod(texel.b, 128.0);\n  texel.a = exponent*0.5 + 63.5;\n  texel.ba += vec2(integerMod(exponent+127.0, 2.0), sign) * 128.0;\n  texel = floor(texel);\n  texel *= 0.003921569; // 1/255\n  __ENCODE32_ENDIANNESS__;\n  return texel;\n}\n\n// https://github.com/gpujs/gpu.js/wiki/Encoder-details\nvec4 encode32(float value) {\n  if (value == 0.0) return vec4(0, 0, 0, 0);\n\n  float exponent;\n  float mantissa;\n  vec4  result;\n  float sgn;\n\n  sgn = step(0.0, -value);\n  value = abs(value);\n\n  exponent = floor(log2(value));\n\n  mantissa = value*pow(2.0, -exponent)-1.0;\n  exponent = exponent+127.0;\n  result   = vec4(0,0,0,0);\n\n  result.a = floor(exponent/2.0);\n  exponent = exponent - result.a*2.0;\n  result.a = result.a + 128.0*sgn;\n\n  result.b = floor(mantissa * 128.0);\n  mantissa = mantissa - result.b / 128.0;\n  result.b = result.b + exponent*128.0;\n\n  result.g = floor(mantissa*32768.0);\n  mantissa = mantissa - result.g/32768.0;\n\n  result.r = floor(mantissa*8388608.0);\n  return result/255.0;\n}\n// Dragons end here\n\nint index;\nivec3 threadId;\n\nivec3 indexTo3D(int idx, ivec3 texDim) {\n  int z = int(idx / (texDim.x * texDim.y));\n  idx -= z * int(texDim.x * texDim.y);\n  int y = int(idx / texDim.x);\n  int x = int(integerMod(idx, texDim.x));\n  return ivec3(x, y, z);\n}\n\nfloat get32(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  int index = x + texDim.x * (y + texDim.y * z);\n  int w = texSize.x;\n  vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n  vec4 texel = texture2D(tex, st / vec2(texSize));\n  return decode32(texel);\n}\n\nfloat get16(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  int index = x + texDim.x * (y + texDim.y * z);\n  int w = texSize.x * 2;\n  vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n  vec4 texel = texture2D(tex, st / vec2(texSize.x * 2, texSize.y));\n  return decode16(texel, index);\n}\n\nfloat get8(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  int index = x + texDim.x * (y + texDim.y * z);\n  int w = texSize.x * 4;\n  vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n  vec4 texel = texture2D(tex, st / vec2(texSize.x * 4, texSize.y));\n  return decode8(texel, index);\n}\n\nfloat getMemoryOptimized32(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  int index = x + texDim.x * (y + texDim.y * z);\n  int channel = integerMod(index, 4);\n  index = index / 4;\n  int w = texSize.x;\n  vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n  vec4 texel = texture2D(tex, st / vec2(texSize));\n  if (channel == 0) return texel.r;\n  if (channel == 1) return texel.g;\n  if (channel == 2) return texel.b;\n  if (channel == 3) return texel.a;\n  return 0.0;\n}\n\nvec4 getImage2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  int index = x + texDim.x * (y + texDim.y * z);\n  int w = texSize.x;\n  vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n  return texture2D(tex, st / vec2(texSize));\n}\n\nfloat getFloatFromSampler2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  vec4 result = getImage2D(tex, texSize, texDim, z, y, x);\n  return result[0];\n}\n\nvec2 getVec2FromSampler2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  vec4 result = getImage2D(tex, texSize, texDim, z, y, x);\n  return vec2(result[0], result[1]);\n}\n\nvec2 getMemoryOptimizedVec2(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  int index = x + (texDim.x * (y + (texDim.y * z)));\n  int channel = integerMod(index, 2);\n  index = index / 2;\n  int w = texSize.x;\n  vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n  vec4 texel = texture2D(tex, st / vec2(texSize));\n  if (channel == 0) return vec2(texel.r, texel.g);\n  if (channel == 1) return vec2(texel.b, texel.a);\n  return vec2(0.0, 0.0);\n}\n\nvec3 getVec3FromSampler2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  vec4 result = getImage2D(tex, texSize, texDim, z, y, x);\n  return vec3(result[0], result[1], result[2]);\n}\n\nvec3 getMemoryOptimizedVec3(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  int fieldIndex = 3 * (x + texDim.x * (y + texDim.y * z));\n  int vectorIndex = fieldIndex / 4;\n  int vectorOffset = fieldIndex - vectorIndex * 4;\n  int readY = vectorIndex / texSize.x;\n  int readX = vectorIndex - readY * texSize.x;\n  vec4 tex1 = texture2D(tex, (vec2(readX, readY) + 0.5) / vec2(texSize));\n  \n  if (vectorOffset == 0) {\n    return tex1.xyz;\n  } else if (vectorOffset == 1) {\n    return tex1.yzw;\n  } else {\n    readX++;\n    if (readX >= texSize.x) {\n      readX = 0;\n      readY++;\n    }\n    vec4 tex2 = texture2D(tex, vec2(readX, readY) / vec2(texSize));\n    if (vectorOffset == 2) {\n      return vec3(tex1.z, tex1.w, tex2.x);\n    } else {\n      return vec3(tex1.w, tex2.x, tex2.y);\n    }\n  }\n}\n\nvec4 getVec4FromSampler2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  return getImage2D(tex, texSize, texDim, z, y, x);\n}\n\nvec4 getMemoryOptimizedVec4(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  int index = x + texDim.x * (y + texDim.y * z);\n  int channel = integerMod(index, 2);\n  int w = texSize.x;\n  vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n  vec4 texel = texture2D(tex, st / vec2(texSize));\n  return vec4(texel.r, texel.g, texel.b, texel.a);\n}\n\nvec4 actualColor;\nvoid color(float r, float g, float b, float a) {\n  actualColor = vec4(r,g,b,a);\n}\n\nvoid color(float r, float g, float b) {\n  color(r,g,b,1.0);\n}\n\nvoid color(sampler2D image) {\n  actualColor = texture2D(image, vTexCoord);\n}\n\nfloat modulo(float number, float divisor) {\n  if (number < 0.0) {\n    number = abs(number);\n    if (divisor < 0.0) {\n      divisor = abs(divisor);\n    }\n    return -mod(number, divisor);\n  }\n  if (divisor < 0.0) {\n    divisor = abs(divisor);\n  }\n  return mod(number, divisor);\n}\n\n__INJECTED_NATIVE__;\n__MAIN_CONSTANTS__;\n__MAIN_ARGUMENTS__;\n__KERNEL__;\n\nvoid main(void) {\n  index = int(vTexCoord.s * float(uTexSize.x)) + int(vTexCoord.t * float(uTexSize.y)) * uTexSize.x;\n  __MAIN_RESULT__;\n}`;
          t.exports = { fragmentShader: n };
        },
        {},
      ],
      38: [
        function (e, t, r) {
          const { utils: n } = e("../../utils"),
            { FunctionNode: i } = e("../function-node");
          const s = {
              Array: "sampler2D",
              "Array(2)": "vec2",
              "Array(3)": "vec3",
              "Array(4)": "vec4",
              "Matrix(2)": "mat2",
              "Matrix(3)": "mat3",
              "Matrix(4)": "mat4",
              Array2D: "sampler2D",
              Array3D: "sampler2D",
              Boolean: "bool",
              Float: "float",
              Input: "sampler2D",
              Integer: "int",
              Number: "float",
              LiteralInteger: "float",
              NumberTexture: "sampler2D",
              MemoryOptimizedNumberTexture: "sampler2D",
              "ArrayTexture(1)": "sampler2D",
              "ArrayTexture(2)": "sampler2D",
              "ArrayTexture(3)": "sampler2D",
              "ArrayTexture(4)": "sampler2D",
              HTMLVideo: "sampler2D",
              HTMLCanvas: "sampler2D",
              OffscreenCanvas: "sampler2D",
              HTMLImage: "sampler2D",
              ImageBitmap: "sampler2D",
              ImageData: "sampler2D",
              HTMLImageArray: "sampler2DArray",
            },
            a = { "===": "==", "!==": "!=" };
          t.exports = {
            WebGLFunctionNode: class extends i {
              constructor(e, t) {
                super(e, t),
                  t &&
                    t.hasOwnProperty("fixIntegerDivisionAccuracy") &&
                    (this.fixIntegerDivisionAccuracy =
                      t.fixIntegerDivisionAccuracy);
              }
              astConditionalExpression(e, t) {
                if ("ConditionalExpression" !== e.type)
                  throw this.astErrorOutput("Not a conditional expression", e);
                const r = this.getType(e.consequent),
                  n = this.getType(e.alternate);
                return null === r && null === n
                  ? (t.push("if ("),
                    this.astGeneric(e.test, t),
                    t.push(") {"),
                    this.astGeneric(e.consequent, t),
                    t.push(";"),
                    t.push("} else {"),
                    this.astGeneric(e.alternate, t),
                    t.push(";"),
                    t.push("}"),
                    t)
                  : (t.push("("),
                    this.astGeneric(e.test, t),
                    t.push("?"),
                    this.astGeneric(e.consequent, t),
                    t.push(":"),
                    this.astGeneric(e.alternate, t),
                    t.push(")"),
                    t);
              }
              astFunction(e, t) {
                if (this.isRootKernel) t.push("void");
                else {
                  this.returnType ||
                    (this.findLastReturn() &&
                      ((this.returnType = this.getType(e.body)),
                      "LiteralInteger" === this.returnType &&
                        (this.returnType = "Number")));
                  const { returnType: r } = this;
                  if (r) {
                    const e = s[r];
                    if (!e) throw new Error(`unknown type ${r}`);
                    t.push(e);
                  } else t.push("void");
                }
                if (
                  (t.push(" "),
                  t.push(this.name),
                  t.push("("),
                  !this.isRootKernel)
                )
                  for (let r = 0; r < this.argumentNames.length; ++r) {
                    const i = this.argumentNames[r];
                    r > 0 && t.push(", ");
                    let a = this.argumentTypes[this.argumentNames.indexOf(i)];
                    if (!a)
                      throw this.astErrorOutput(
                        `Unknown argument ${i} type`,
                        e
                      );
                    "LiteralInteger" === a &&
                      (this.argumentTypes[r] = a = "Number");
                    const o = s[a];
                    if (!o)
                      throw this.astErrorOutput("Unexpected expression", e);
                    const u = n.sanitizeName(i);
                    "sampler2D" === o || "sampler2DArray" === o
                      ? t.push(
                          `${o} user_${u},ivec2 user_${u}Size,ivec3 user_${u}Dim`
                        )
                      : t.push(`${o} user_${u}`);
                  }
                t.push(") {\n");
                for (let r = 0; r < e.body.body.length; ++r)
                  this.astGeneric(e.body.body[r], t), t.push("\n");
                return t.push("}\n"), t;
              }
              astReturnStatement(e, t) {
                if (!e.argument)
                  throw this.astErrorOutput("Unexpected return statement", e);
                this.pushState("skip-literal-correction");
                const r = this.getType(e.argument);
                this.popState("skip-literal-correction");
                const n = [];
                switch (
                  (this.returnType ||
                    (this.returnType =
                      "LiteralInteger" === r || "Integer" === r ? "Number" : r),
                  this.returnType)
                ) {
                  case "LiteralInteger":
                  case "Number":
                  case "Float":
                    switch (r) {
                      case "Integer":
                        n.push("float("),
                          this.astGeneric(e.argument, n),
                          n.push(")");
                        break;
                      case "LiteralInteger":
                        this.castLiteralToFloat(e.argument, n),
                          "Integer" === this.getType(e) &&
                            (n.unshift("float("), n.push(")"));
                        break;
                      default:
                        this.astGeneric(e.argument, n);
                    }
                    break;
                  case "Integer":
                    switch (r) {
                      case "Float":
                      case "Number":
                        this.castValueToInteger(e.argument, n);
                        break;
                      case "LiteralInteger":
                        this.castLiteralToInteger(e.argument, n);
                        break;
                      default:
                        this.astGeneric(e.argument, n);
                    }
                    break;
                  case "Array(4)":
                  case "Array(3)":
                  case "Array(2)":
                  case "Matrix(2)":
                  case "Matrix(3)":
                  case "Matrix(4)":
                  case "Input":
                    this.astGeneric(e.argument, n);
                    break;
                  default:
                    throw this.astErrorOutput(
                      `unhandled return type ${this.returnType}`,
                      e
                    );
                }
                return (
                  this.isRootKernel
                    ? (t.push(`kernelResult = ${n.join("")};`),
                      t.push("return;"))
                    : this.isSubKernel
                    ? (t.push(`subKernelResult_${this.name} = ${n.join("")};`),
                      t.push(`return subKernelResult_${this.name};`))
                    : t.push(`return ${n.join("")};`),
                  t
                );
              }
              astLiteral(e, t) {
                if (isNaN(e.value))
                  throw this.astErrorOutput(
                    "Non-numeric literal not supported : " + e.value,
                    e
                  );
                const r = this.astKey(e);
                return (
                  Number.isInteger(e.value)
                    ? this.isState("casting-to-integer") ||
                      this.isState("building-integer")
                      ? ((this.literalTypes[r] = "Integer"),
                        t.push(`${e.value}`))
                      : (this.isState("casting-to-float") ||
                          this.isState("building-float"),
                        (this.literalTypes[r] = "Number"),
                        t.push(`${e.value}.0`))
                    : this.isState("casting-to-integer") ||
                      this.isState("building-integer")
                    ? ((this.literalTypes[r] = "Integer"),
                      t.push(Math.round(e.value)))
                    : ((this.literalTypes[r] = "Number"), t.push(`${e.value}`)),
                  t
                );
              }
              astBinaryExpression(e, t) {
                if (this.checkAndUpconvertOperator(e, t)) return t;
                if (this.fixIntegerDivisionAccuracy && "/" === e.operator) {
                  switch (
                    (t.push("divWithIntCheck("),
                    this.pushState("building-float"),
                    this.getType(e.left))
                  ) {
                    case "Integer":
                      this.castValueToFloat(e.left, t);
                      break;
                    case "LiteralInteger":
                      this.castLiteralToFloat(e.left, t);
                      break;
                    default:
                      this.astGeneric(e.left, t);
                  }
                  switch ((t.push(", "), this.getType(e.right))) {
                    case "Integer":
                      this.castValueToFloat(e.right, t);
                      break;
                    case "LiteralInteger":
                      this.castLiteralToFloat(e.right, t);
                      break;
                    default:
                      this.astGeneric(e.right, t);
                  }
                  return this.popState("building-float"), t.push(")"), t;
                }
                t.push("(");
                const r = this.getType(e.left) || "Number",
                  n = this.getType(e.right) || "Number";
                if (!r || !n)
                  throw this.astErrorOutput("Unhandled binary expression", e);
                const i = r + " & " + n;
                switch (i) {
                  case "Integer & Integer":
                    this.pushState("building-integer"),
                      this.astGeneric(e.left, t),
                      t.push(a[e.operator] || e.operator),
                      this.astGeneric(e.right, t),
                      this.popState("building-integer");
                    break;
                  case "Number & Float":
                  case "Float & Number":
                  case "Float & Float":
                  case "Number & Number":
                    this.pushState("building-float"),
                      this.astGeneric(e.left, t),
                      t.push(a[e.operator] || e.operator),
                      this.astGeneric(e.right, t),
                      this.popState("building-float");
                    break;
                  case "LiteralInteger & LiteralInteger":
                    this.isState("casting-to-integer") ||
                    this.isState("building-integer")
                      ? (this.pushState("building-integer"),
                        this.astGeneric(e.left, t),
                        t.push(a[e.operator] || e.operator),
                        this.astGeneric(e.right, t),
                        this.popState("building-integer"))
                      : (this.pushState("building-float"),
                        this.castLiteralToFloat(e.left, t),
                        t.push(a[e.operator] || e.operator),
                        this.castLiteralToFloat(e.right, t),
                        this.popState("building-float"));
                    break;
                  case "Integer & Float":
                  case "Integer & Number":
                    if (
                      (">" === e.operator ||
                        ("<" === e.operator && "Literal" === e.right.type)) &&
                      !Number.isInteger(e.right.value)
                    ) {
                      this.pushState("building-float"),
                        this.castValueToFloat(e.left, t),
                        t.push(a[e.operator] || e.operator),
                        this.astGeneric(e.right, t),
                        this.popState("building-float");
                      break;
                    }
                    if (
                      (this.pushState("building-integer"),
                      this.astGeneric(e.left, t),
                      t.push(a[e.operator] || e.operator),
                      this.pushState("casting-to-integer"),
                      "Literal" === e.right.type)
                    ) {
                      const r = [];
                      if (
                        (this.astGeneric(e.right, r),
                        "Integer" !== this.getType(e.right))
                      )
                        throw this.astErrorOutput(
                          "Unhandled binary expression with literal",
                          e
                        );
                      t.push(r.join(""));
                    } else
                      t.push("int("), this.astGeneric(e.right, t), t.push(")");
                    this.popState("casting-to-integer"),
                      this.popState("building-integer");
                    break;
                  case "Integer & LiteralInteger":
                    this.pushState("building-integer"),
                      this.astGeneric(e.left, t),
                      t.push(a[e.operator] || e.operator),
                      this.castLiteralToInteger(e.right, t),
                      this.popState("building-integer");
                    break;
                  case "Number & Integer":
                    this.pushState("building-float"),
                      this.astGeneric(e.left, t),
                      t.push(a[e.operator] || e.operator),
                      this.castValueToFloat(e.right, t),
                      this.popState("building-float");
                    break;
                  case "Float & LiteralInteger":
                  case "Number & LiteralInteger":
                    this.pushState("building-float"),
                      this.astGeneric(e.left, t),
                      t.push(a[e.operator] || e.operator),
                      this.castLiteralToFloat(e.right, t),
                      this.popState("building-float");
                    break;
                  case "LiteralInteger & Float":
                  case "LiteralInteger & Number":
                    this.isState("casting-to-integer")
                      ? (this.pushState("building-integer"),
                        this.castLiteralToInteger(e.left, t),
                        t.push(a[e.operator] || e.operator),
                        this.castValueToInteger(e.right, t),
                        this.popState("building-integer"))
                      : (this.pushState("building-float"),
                        this.astGeneric(e.left, t),
                        t.push(a[e.operator] || e.operator),
                        this.pushState("casting-to-float"),
                        this.astGeneric(e.right, t),
                        this.popState("casting-to-float"),
                        this.popState("building-float"));
                    break;
                  case "LiteralInteger & Integer":
                    this.pushState("building-integer"),
                      this.castLiteralToInteger(e.left, t),
                      t.push(a[e.operator] || e.operator),
                      this.astGeneric(e.right, t),
                      this.popState("building-integer");
                    break;
                  case "Boolean & Boolean":
                    this.pushState("building-boolean"),
                      this.astGeneric(e.left, t),
                      t.push(a[e.operator] || e.operator),
                      this.astGeneric(e.right, t),
                      this.popState("building-boolean");
                    break;
                  case "Float & Integer":
                    this.pushState("building-float"),
                      this.astGeneric(e.left, t),
                      t.push(a[e.operator] || e.operator),
                      this.castValueToFloat(e.right, t),
                      this.popState("building-float");
                    break;
                  default:
                    throw this.astErrorOutput(
                      `Unhandled binary expression between ${i}`,
                      e
                    );
                }
                return t.push(")"), t;
              }
              checkAndUpconvertOperator(e, t) {
                const r = this.checkAndUpconvertBitwiseOperators(e, t);
                if (r) return r;
                const n = {
                  "%": this.fixIntegerDivisionAccuracy
                    ? "integerCorrectionModulo"
                    : "modulo",
                  "**": "pow",
                }[e.operator];
                if (!n) return null;
                switch ((t.push(n), t.push("("), this.getType(e.left))) {
                  case "Integer":
                    this.castValueToFloat(e.left, t);
                    break;
                  case "LiteralInteger":
                    this.castLiteralToFloat(e.left, t);
                    break;
                  default:
                    this.astGeneric(e.left, t);
                }
                switch ((t.push(","), this.getType(e.right))) {
                  case "Integer":
                    this.castValueToFloat(e.right, t);
                    break;
                  case "LiteralInteger":
                    this.castLiteralToFloat(e.right, t);
                    break;
                  default:
                    this.astGeneric(e.right, t);
                }
                return t.push(")"), t;
              }
              checkAndUpconvertBitwiseOperators(e, t) {
                const r = {
                  "&": "bitwiseAnd",
                  "|": "bitwiseOr",
                  "^": "bitwiseXOR",
                  "<<": "bitwiseZeroFillLeftShift",
                  ">>": "bitwiseSignedRightShift",
                  ">>>": "bitwiseZeroFillRightShift",
                }[e.operator];
                if (!r) return null;
                switch ((t.push(r), t.push("("), this.getType(e.left))) {
                  case "Number":
                  case "Float":
                    this.castValueToInteger(e.left, t);
                    break;
                  case "LiteralInteger":
                    this.castLiteralToInteger(e.left, t);
                    break;
                  default:
                    this.astGeneric(e.left, t);
                }
                switch ((t.push(","), this.getType(e.right))) {
                  case "Number":
                  case "Float":
                    this.castValueToInteger(e.right, t);
                    break;
                  case "LiteralInteger":
                    this.castLiteralToInteger(e.right, t);
                    break;
                  default:
                    this.astGeneric(e.right, t);
                }
                return t.push(")"), t;
              }
              checkAndUpconvertBitwiseUnary(e, t) {
                const r = { "~": "bitwiseNot" }[e.operator];
                if (!r) return null;
                switch ((t.push(r), t.push("("), this.getType(e.argument))) {
                  case "Number":
                  case "Float":
                    this.castValueToInteger(e.argument, t);
                    break;
                  case "LiteralInteger":
                    this.castLiteralToInteger(e.argument, t);
                    break;
                  default:
                    this.astGeneric(e.argument, t);
                }
                return t.push(")"), t;
              }
              castLiteralToInteger(e, t) {
                return (
                  this.pushState("casting-to-integer"),
                  this.astGeneric(e, t),
                  this.popState("casting-to-integer"),
                  t
                );
              }
              castLiteralToFloat(e, t) {
                return (
                  this.pushState("casting-to-float"),
                  this.astGeneric(e, t),
                  this.popState("casting-to-float"),
                  t
                );
              }
              castValueToInteger(e, t) {
                return (
                  this.pushState("casting-to-integer"),
                  t.push("int("),
                  this.astGeneric(e, t),
                  t.push(")"),
                  this.popState("casting-to-integer"),
                  t
                );
              }
              castValueToFloat(e, t) {
                return (
                  this.pushState("casting-to-float"),
                  t.push("float("),
                  this.astGeneric(e, t),
                  t.push(")"),
                  this.popState("casting-to-float"),
                  t
                );
              }
              astIdentifierExpression(e, t) {
                if ("Identifier" !== e.type)
                  throw this.astErrorOutput(
                    "IdentifierExpression - not an Identifier",
                    e
                  );
                const r = this.getType(e),
                  i = n.sanitizeName(e.name);
                return (
                  "Infinity" === e.name
                    ? t.push("3.402823466e+38")
                    : "Boolean" === r && this.argumentNames.indexOf(i) > -1
                    ? t.push(`bool(user_${i})`)
                    : t.push(`user_${i}`),
                  t
                );
              }
              astForStatement(e, t) {
                if ("ForStatement" !== e.type)
                  throw this.astErrorOutput("Invalid for statement", e);
                const r = [],
                  n = [],
                  i = [],
                  s = [];
                let a = null;
                if (e.init) {
                  const { declarations: t } = e.init;
                  t.length > 1 && (a = !1), this.astGeneric(e.init, r);
                  for (let e = 0; e < t.length; e++)
                    t[e].init && "Literal" !== t[e].init.type && (a = !1);
                } else a = !1;
                if (
                  (e.test ? this.astGeneric(e.test, n) : (a = !1),
                  e.update ? this.astGeneric(e.update, i) : (a = !1),
                  e.body &&
                    (this.pushState("loop-body"),
                    this.astGeneric(e.body, s),
                    this.popState("loop-body")),
                  null === a &&
                    (a = this.isSafe(e.init) && this.isSafe(e.test)),
                  a)
                ) {
                  const e = r.join(""),
                    a = ";" !== e[e.length - 1];
                  t.push(
                    `for (${e}${a ? ";" : ""}${n.join("")};${i.join("")}){\n`
                  ),
                    t.push(s.join("")),
                    t.push("}\n");
                } else {
                  const e = this.getInternalVariableName("safeI");
                  r.length > 0 && t.push(r.join(""), "\n"),
                    t.push(`for (int ${e}=0;${e}<LOOP_MAX;${e}++){\n`),
                    n.length > 0 && t.push(`if (!${n.join("")}) break;\n`),
                    t.push(s.join("")),
                    t.push(`\n${i.join("")};`),
                    t.push("}\n");
                }
                return t;
              }
              astWhileStatement(e, t) {
                if ("WhileStatement" !== e.type)
                  throw this.astErrorOutput("Invalid while statement", e);
                const r = this.getInternalVariableName("safeI");
                return (
                  t.push(`for (int ${r}=0;${r}<LOOP_MAX;${r}++){\n`),
                  t.push("if (!"),
                  this.astGeneric(e.test, t),
                  t.push(") break;\n"),
                  this.astGeneric(e.body, t),
                  t.push("}\n"),
                  t
                );
              }
              astDoWhileStatement(e, t) {
                if ("DoWhileStatement" !== e.type)
                  throw this.astErrorOutput("Invalid while statement", e);
                const r = this.getInternalVariableName("safeI");
                return (
                  t.push(`for (int ${r}=0;${r}<LOOP_MAX;${r}++){\n`),
                  this.astGeneric(e.body, t),
                  t.push("if (!"),
                  this.astGeneric(e.test, t),
                  t.push(") break;\n"),
                  t.push("}\n"),
                  t
                );
              }
              astAssignmentExpression(e, t) {
                if ("%=" === e.operator)
                  this.astGeneric(e.left, t),
                    t.push("="),
                    t.push("mod("),
                    this.astGeneric(e.left, t),
                    t.push(","),
                    this.astGeneric(e.right, t),
                    t.push(")");
                else {
                  if ("**=" !== e.operator) {
                    const r = this.getType(e.left),
                      n = this.getType(e.right);
                    return (
                      this.astGeneric(e.left, t),
                      t.push(e.operator),
                      "Integer" !== r && "Integer" === n
                        ? (t.push("float("),
                          this.astGeneric(e.right, t),
                          t.push(")"))
                        : this.astGeneric(e.right, t),
                      t
                    );
                  }
                  this.astGeneric(e.left, t),
                    t.push("="),
                    t.push("pow("),
                    this.astGeneric(e.left, t),
                    t.push(","),
                    this.astGeneric(e.right, t),
                    t.push(")");
                }
              }
              astBlockStatement(e, t) {
                if (this.isState("loop-body")) {
                  this.pushState("block-body");
                  for (let r = 0; r < e.body.length; r++)
                    this.astGeneric(e.body[r], t);
                  this.popState("block-body");
                } else {
                  t.push("{\n");
                  for (let r = 0; r < e.body.length; r++)
                    this.astGeneric(e.body[r], t);
                  t.push("}\n");
                }
                return t;
              }
              astVariableDeclaration(e, t) {
                const r = e.declarations;
                if (!r || !r[0] || !r[0].init)
                  throw this.astErrorOutput("Unexpected expression", e);
                const i = [];
                let a = null;
                const o = [];
                let u = [];
                for (let t = 0; t < r.length; t++) {
                  const i = r[t],
                    l = i.init,
                    h = this.getDeclaration(i.id),
                    c = this.getType(i.init);
                  let p = c;
                  "LiteralInteger" === p &&
                    (p = "Integer" === h.suggestedType ? "Integer" : "Number");
                  const d = s[p];
                  if (!d)
                    throw this.astErrorOutput(
                      `Markup type ${p} not handled`,
                      e
                    );
                  const m = [];
                  if ("Integer" === c && "Integer" === p) {
                    if (((h.valueType = "Number"), 0 === t || null === a))
                      m.push("float ");
                    else if (p !== a) throw new Error("Unhandled declaration");
                    (a = p),
                      m.push(`user_${n.sanitizeName(i.id.name)}=`),
                      m.push("float("),
                      this.astGeneric(l, m),
                      m.push(")");
                  } else
                    (h.valueType = p),
                      0 === t || null === a
                        ? m.push(`${d} `)
                        : p !== a &&
                          (o.push(u.join(",")), (u = []), m.push(`${d} `)),
                      (a = p),
                      m.push(`user_${n.sanitizeName(i.id.name)}=`),
                      "Number" === c && "Integer" === p
                        ? l.left && "Literal" === l.left.type
                          ? this.astGeneric(l, m)
                          : (m.push("int("), this.astGeneric(l, m), m.push(")"))
                        : "LiteralInteger" === c && "Integer" === p
                        ? this.castLiteralToInteger(l, m)
                        : this.astGeneric(l, m);
                  u.push(m.join(""));
                }
                return (
                  u.length > 0 && o.push(u.join(",")),
                  i.push(o.join(";")),
                  t.push(i.join("")),
                  t.push(";"),
                  t
                );
              }
              astIfStatement(e, t) {
                return (
                  t.push("if ("),
                  this.astGeneric(e.test, t),
                  t.push(")"),
                  "BlockStatement" === e.consequent.type
                    ? this.astGeneric(e.consequent, t)
                    : (t.push(" {\n"),
                      this.astGeneric(e.consequent, t),
                      t.push("\n}\n")),
                  e.alternate &&
                    (t.push("else "),
                    "BlockStatement" === e.alternate.type ||
                    "IfStatement" === e.alternate.type
                      ? this.astGeneric(e.alternate, t)
                      : (t.push(" {\n"),
                        this.astGeneric(e.alternate, t),
                        t.push("\n}\n"))),
                  t
                );
              }
              astSwitchStatement(e, t) {
                if ("SwitchStatement" !== e.type)
                  throw this.astErrorOutput("Invalid switch statement", e);
                const { discriminant: r, cases: n } = e,
                  i = this.getType(r),
                  s = `switchDiscriminant${this.astKey(e, "_")}`;
                switch (i) {
                  case "Float":
                  case "Number":
                    t.push(`float ${s} = `),
                      this.astGeneric(r, t),
                      t.push(";\n");
                    break;
                  case "Integer":
                    t.push(`int ${s} = `), this.astGeneric(r, t), t.push(";\n");
                }
                if (1 === n.length && !n[0].test)
                  return this.astGeneric(n[0].consequent, t), t;
                let a = !1,
                  o = [],
                  u = !1,
                  l = !1;
                for (let e = 0; e < n.length; e++) {
                  if (n[e].test) {
                    if (
                      (0 !== e && l
                        ? a
                          ? (t.push(`${s} == `), (a = !1))
                          : t.push(` else if (${s} == `)
                        : ((l = !0), t.push(`if (${s} == `)),
                      "Integer" === i)
                    )
                      switch (this.getType(n[e].test)) {
                        case "Number":
                        case "Float":
                          this.castValueToInteger(n[e].test, t);
                          break;
                        case "LiteralInteger":
                          this.castLiteralToInteger(n[e].test, t);
                      }
                    else {
                      if ("Float" !== i) throw new Error("unhanlded");
                      switch (this.getType(n[e].test)) {
                        case "LiteralInteger":
                          this.castLiteralToFloat(n[e].test, t);
                          break;
                        case "Integer":
                          this.castValueToFloat(n[e].test, t);
                      }
                    }
                    if (!n[e].consequent || 0 === n[e].consequent.length) {
                      (a = !0), t.push(" || ");
                      continue;
                    }
                    t.push(") {\n");
                  } else {
                    if (n.length > e + 1) {
                      (u = !0), this.astGeneric(n[e].consequent, o);
                      continue;
                    }
                    t.push(" else {\n");
                  }
                  this.astGeneric(n[e].consequent, t), t.push("\n}");
                }
                return (
                  u && (t.push(" else {"), t.push(o.join("")), t.push("}")), t
                );
              }
              astThisExpression(e, t) {
                return t.push("this"), t;
              }
              astMemberExpression(e, t) {
                const {
                  property: r,
                  name: i,
                  signature: s,
                  origin: a,
                  type: o,
                  xProperty: u,
                  yProperty: l,
                  zProperty: h,
                } = this.getMemberExpressionDetails(e);
                switch (s) {
                  case "value.thread.value":
                  case "this.thread.value":
                    if ("x" !== i && "y" !== i && "z" !== i)
                      throw this.astErrorOutput(
                        "Unexpected expression, expected `this.thread.x`, `this.thread.y`, or `this.thread.z`",
                        e
                      );
                    return t.push(`threadId.${i}`), t;
                  case "this.output.value":
                    if (this.dynamicOutput)
                      switch (i) {
                        case "x":
                          this.isState("casting-to-float")
                            ? t.push("float(uOutputDim.x)")
                            : t.push("uOutputDim.x");
                          break;
                        case "y":
                          this.isState("casting-to-float")
                            ? t.push("float(uOutputDim.y)")
                            : t.push("uOutputDim.y");
                          break;
                        case "z":
                          this.isState("casting-to-float")
                            ? t.push("float(uOutputDim.z)")
                            : t.push("uOutputDim.z");
                          break;
                        default:
                          throw this.astErrorOutput("Unexpected expression", e);
                      }
                    else
                      switch (i) {
                        case "x":
                          this.isState("casting-to-integer")
                            ? t.push(this.output[0])
                            : t.push(this.output[0], ".0");
                          break;
                        case "y":
                          this.isState("casting-to-integer")
                            ? t.push(this.output[1])
                            : t.push(this.output[1], ".0");
                          break;
                        case "z":
                          this.isState("casting-to-integer")
                            ? t.push(this.output[2])
                            : t.push(this.output[2], ".0");
                          break;
                        default:
                          throw this.astErrorOutput("Unexpected expression", e);
                      }
                    return t;
                  case "value":
                    throw this.astErrorOutput("Unexpected expression", e);
                  case "value[]":
                  case "value[][]":
                  case "value[][][]":
                  case "value[][][][]":
                  case "value.value":
                    if ("Math" === a) return t.push(Math[i]), t;
                    const l = n.sanitizeName(i);
                    switch (r) {
                      case "r":
                        return t.push(`user_${l}.r`), t;
                      case "g":
                        return t.push(`user_${l}.g`), t;
                      case "b":
                        return t.push(`user_${l}.b`), t;
                      case "a":
                        return t.push(`user_${l}.a`), t;
                    }
                    break;
                  case "this.constants.value":
                    if (void 0 === u)
                      switch (o) {
                        case "Array(2)":
                        case "Array(3)":
                        case "Array(4)":
                          return t.push(`constants_${n.sanitizeName(i)}`), t;
                      }
                  case "this.constants.value[]":
                  case "this.constants.value[][]":
                  case "this.constants.value[][][]":
                  case "this.constants.value[][][][]":
                    break;
                  case "fn()[]":
                    return (
                      this.astCallExpression(e.object, t),
                      t.push("["),
                      t.push(this.memberExpressionPropertyMarkup(r)),
                      t.push("]"),
                      t
                    );
                  case "fn()[][]":
                    return (
                      this.astCallExpression(e.object.object, t),
                      t.push("["),
                      t.push(
                        this.memberExpressionPropertyMarkup(e.object.property)
                      ),
                      t.push("]"),
                      t.push("["),
                      t.push(this.memberExpressionPropertyMarkup(e.property)),
                      t.push("]"),
                      t
                    );
                  case "[][]":
                    return (
                      this.astArrayExpression(e.object, t),
                      t.push("["),
                      t.push(this.memberExpressionPropertyMarkup(r)),
                      t.push("]"),
                      t
                    );
                  default:
                    throw this.astErrorOutput("Unexpected expression", e);
                }
                if (!1 === e.computed)
                  switch (o) {
                    case "Number":
                    case "Integer":
                    case "Float":
                    case "Boolean":
                      return t.push(`${a}_${n.sanitizeName(i)}`), t;
                  }
                const c = `${a}_${n.sanitizeName(i)}`;
                switch (o) {
                  case "Array(2)":
                  case "Array(3)":
                  case "Array(4)":
                    this.astGeneric(e.object, t),
                      t.push("["),
                      t.push(this.memberExpressionPropertyMarkup(u)),
                      t.push("]");
                    break;
                  case "HTMLImageArray":
                    t.push(`getImage3D(${c}, ${c}Size, ${c}Dim, `),
                      this.memberExpressionXYZ(u, l, h, t),
                      t.push(")");
                    break;
                  case "ArrayTexture(1)":
                    t.push(`getFloatFromSampler2D(${c}, ${c}Size, ${c}Dim, `),
                      this.memberExpressionXYZ(u, l, h, t),
                      t.push(")");
                    break;
                  case "Array1D(2)":
                  case "Array2D(2)":
                  case "Array3D(2)":
                    t.push(`getMemoryOptimizedVec2(${c}, ${c}Size, ${c}Dim, `),
                      this.memberExpressionXYZ(u, l, h, t),
                      t.push(")");
                    break;
                  case "ArrayTexture(2)":
                    t.push(`getVec2FromSampler2D(${c}, ${c}Size, ${c}Dim, `),
                      this.memberExpressionXYZ(u, l, h, t),
                      t.push(")");
                    break;
                  case "Array1D(3)":
                  case "Array2D(3)":
                  case "Array3D(3)":
                    t.push(`getMemoryOptimizedVec3(${c}, ${c}Size, ${c}Dim, `),
                      this.memberExpressionXYZ(u, l, h, t),
                      t.push(")");
                    break;
                  case "ArrayTexture(3)":
                    t.push(`getVec3FromSampler2D(${c}, ${c}Size, ${c}Dim, `),
                      this.memberExpressionXYZ(u, l, h, t),
                      t.push(")");
                    break;
                  case "Array1D(4)":
                  case "Array2D(4)":
                  case "Array3D(4)":
                    t.push(`getMemoryOptimizedVec4(${c}, ${c}Size, ${c}Dim, `),
                      this.memberExpressionXYZ(u, l, h, t),
                      t.push(")");
                    break;
                  case "ArrayTexture(4)":
                  case "HTMLCanvas":
                  case "OffscreenCanvas":
                  case "HTMLImage":
                  case "ImageBitmap":
                  case "ImageData":
                  case "HTMLVideo":
                    t.push(`getVec4FromSampler2D(${c}, ${c}Size, ${c}Dim, `),
                      this.memberExpressionXYZ(u, l, h, t),
                      t.push(")");
                    break;
                  case "NumberTexture":
                  case "Array":
                  case "Array2D":
                  case "Array3D":
                  case "Array4D":
                  case "Input":
                  case "Number":
                  case "Float":
                  case "Integer":
                    if ("single" === this.precision)
                      t.push(`getMemoryOptimized32(${c}, ${c}Size, ${c}Dim, `),
                        this.memberExpressionXYZ(u, l, h, t),
                        t.push(")");
                    else {
                      const e =
                        "user" === a
                          ? this.lookupFunctionArgumentBitRatio(this.name, i)
                          : this.constantBitRatios[i];
                      switch (e) {
                        case 1:
                          t.push(`get8(${c}, ${c}Size, ${c}Dim, `);
                          break;
                        case 2:
                          t.push(`get16(${c}, ${c}Size, ${c}Dim, `);
                          break;
                        case 4:
                        case 0:
                          t.push(`get32(${c}, ${c}Size, ${c}Dim, `);
                          break;
                        default:
                          throw new Error(`unhandled bit ratio of ${e}`);
                      }
                      this.memberExpressionXYZ(u, l, h, t), t.push(")");
                    }
                    break;
                  case "MemoryOptimizedNumberTexture":
                    t.push(`getMemoryOptimized32(${c}, ${c}Size, ${c}Dim, `),
                      this.memberExpressionXYZ(u, l, h, t),
                      t.push(")");
                    break;
                  case "Matrix(2)":
                  case "Matrix(3)":
                  case "Matrix(4)":
                    t.push(`${c}[${this.memberExpressionPropertyMarkup(l)}]`),
                      l &&
                        t.push(`[${this.memberExpressionPropertyMarkup(u)}]`);
                    break;
                  default:
                    throw new Error(`unhandled member expression "${o}"`);
                }
                return t;
              }
              astCallExpression(e, t) {
                if (!e.callee)
                  throw this.astErrorOutput("Unknown CallExpression", e);
                let r = null;
                const i = this.isAstMathFunction(e);
                if (
                  !(r =
                    i ||
                    (e.callee.object &&
                      "ThisExpression" === e.callee.object.type)
                      ? e.callee.property.name
                      : "SequenceExpression" !== e.callee.type ||
                        "Literal" !== e.callee.expressions[0].type ||
                        isNaN(e.callee.expressions[0].raw)
                      ? e.callee.name
                      : e.callee.expressions[1].property.name)
                )
                  throw this.astErrorOutput(
                    "Unhandled function, couldn't find name",
                    e
                  );
                switch (r) {
                  case "pow":
                    r = "_pow";
                    break;
                  case "round":
                    r = "_round";
                }
                if (
                  (this.calledFunctions.indexOf(r) < 0 &&
                    this.calledFunctions.push(r),
                  "random" === r && this.plugins && this.plugins.length > 0)
                )
                  for (let e = 0; e < this.plugins.length; e++) {
                    const r = this.plugins[e];
                    if (
                      "Math.random()" === r.functionMatch &&
                      r.functionReplace
                    )
                      return t.push(r.functionReplace), t;
                  }
                if (
                  (this.onFunctionCall &&
                    this.onFunctionCall(this.name, r, e.arguments),
                  t.push(r),
                  t.push("("),
                  i)
                )
                  for (let r = 0; r < e.arguments.length; ++r) {
                    const n = e.arguments[r],
                      i = this.getType(n);
                    switch ((r > 0 && t.push(", "), i)) {
                      case "Integer":
                        this.castValueToFloat(n, t);
                        break;
                      default:
                        this.astGeneric(n, t);
                    }
                  }
                else {
                  const i = this.lookupFunctionArgumentTypes(r) || [];
                  for (let s = 0; s < e.arguments.length; ++s) {
                    const a = e.arguments[s];
                    let o = i[s];
                    s > 0 && t.push(", ");
                    const u = this.getType(a);
                    switch (
                      (o ||
                        (this.triggerImplyArgumentType(r, s, u, this), (o = u)),
                      u)
                    ) {
                      case "Boolean":
                        this.astGeneric(a, t);
                        continue;
                      case "Number":
                      case "Float":
                        if ("Integer" === o) {
                          t.push("int("), this.astGeneric(a, t), t.push(")");
                          continue;
                        }
                        if ("Number" === o || "Float" === o) {
                          this.astGeneric(a, t);
                          continue;
                        }
                        if ("LiteralInteger" === o) {
                          this.castLiteralToFloat(a, t);
                          continue;
                        }
                        break;
                      case "Integer":
                        if ("Number" === o || "Float" === o) {
                          t.push("float("), this.astGeneric(a, t), t.push(")");
                          continue;
                        }
                        if ("Integer" === o) {
                          this.astGeneric(a, t);
                          continue;
                        }
                        break;
                      case "LiteralInteger":
                        if ("Integer" === o) {
                          this.castLiteralToInteger(a, t);
                          continue;
                        }
                        if ("Number" === o || "Float" === o) {
                          this.castLiteralToFloat(a, t);
                          continue;
                        }
                        if ("LiteralInteger" === o) {
                          this.astGeneric(a, t);
                          continue;
                        }
                        break;
                      case "Array(2)":
                      case "Array(3)":
                      case "Array(4)":
                        if (o === u) {
                          if ("Identifier" === a.type)
                            t.push(`user_${n.sanitizeName(a.name)}`);
                          else {
                            if (
                              "ArrayExpression" !== a.type &&
                              "MemberExpression" !== a.type &&
                              "CallExpression" !== a.type
                            )
                              throw this.astErrorOutput(
                                `Unhandled argument type ${a.type}`,
                                e
                              );
                            this.astGeneric(a, t);
                          }
                          continue;
                        }
                        break;
                      case "HTMLCanvas":
                      case "OffscreenCanvas":
                      case "HTMLImage":
                      case "ImageBitmap":
                      case "ImageData":
                      case "HTMLImageArray":
                      case "HTMLVideo":
                      case "ArrayTexture(1)":
                      case "ArrayTexture(2)":
                      case "ArrayTexture(3)":
                      case "ArrayTexture(4)":
                      case "Array":
                      case "Input":
                        if (o === u) {
                          if ("Identifier" !== a.type)
                            throw this.astErrorOutput(
                              `Unhandled argument type ${a.type}`,
                              e
                            );
                          this.triggerImplyArgumentBitRatio(
                            this.name,
                            a.name,
                            r,
                            s
                          );
                          const i = n.sanitizeName(a.name);
                          t.push(`user_${i},user_${i}Size,user_${i}Dim`);
                          continue;
                        }
                    }
                    throw this.astErrorOutput(
                      `Unhandled argument combination of ${u} and ${o} for argument named "${a.name}"`,
                      e
                    );
                  }
                }
                return t.push(")"), t;
              }
              astArrayExpression(e, t) {
                const r = this.getType(e),
                  n = e.elements.length;
                switch (r) {
                  case "Matrix(2)":
                  case "Matrix(3)":
                  case "Matrix(4)":
                    t.push(`mat${n}(`);
                    break;
                  default:
                    t.push(`vec${n}(`);
                }
                for (let r = 0; r < n; ++r) {
                  r > 0 && t.push(", ");
                  const n = e.elements[r];
                  this.astGeneric(n, t);
                }
                return t.push(")"), t;
              }
              memberExpressionXYZ(e, t, r, n) {
                return (
                  r
                    ? n.push(this.memberExpressionPropertyMarkup(r), ", ")
                    : n.push("0, "),
                  t
                    ? n.push(this.memberExpressionPropertyMarkup(t), ", ")
                    : n.push("0, "),
                  n.push(this.memberExpressionPropertyMarkup(e)),
                  n
                );
              }
              memberExpressionPropertyMarkup(e) {
                if (!e) throw new Error("Property not set");
                const t = [];
                switch (this.getType(e)) {
                  case "Number":
                  case "Float":
                    this.castValueToInteger(e, t);
                    break;
                  case "LiteralInteger":
                    this.castLiteralToInteger(e, t);
                    break;
                  default:
                    this.astGeneric(e, t);
                }
                return t.join("");
              }
            },
          };
        },
        { "../../utils": 114, "../function-node": 10 },
      ],
      39: [
        function (e, t, r) {
          const { WebGLKernelValueBoolean: n } = e("./kernel-value/boolean"),
            { WebGLKernelValueFloat: i } = e("./kernel-value/float"),
            { WebGLKernelValueInteger: s } = e("./kernel-value/integer"),
            { WebGLKernelValueHTMLImage: a } = e("./kernel-value/html-image"),
            { WebGLKernelValueDynamicHTMLImage: o } = e(
              "./kernel-value/dynamic-html-image"
            ),
            { WebGLKernelValueHTMLVideo: u } = e("./kernel-value/html-video"),
            { WebGLKernelValueDynamicHTMLVideo: l } = e(
              "./kernel-value/dynamic-html-video"
            ),
            { WebGLKernelValueSingleInput: h } = e(
              "./kernel-value/single-input"
            ),
            { WebGLKernelValueDynamicSingleInput: c } = e(
              "./kernel-value/dynamic-single-input"
            ),
            { WebGLKernelValueUnsignedInput: p } = e(
              "./kernel-value/unsigned-input"
            ),
            { WebGLKernelValueDynamicUnsignedInput: d } = e(
              "./kernel-value/dynamic-unsigned-input"
            ),
            { WebGLKernelValueMemoryOptimizedNumberTexture: m } = e(
              "./kernel-value/memory-optimized-number-texture"
            ),
            { WebGLKernelValueDynamicMemoryOptimizedNumberTexture: f } = e(
              "./kernel-value/dynamic-memory-optimized-number-texture"
            ),
            { WebGLKernelValueNumberTexture: g } = e(
              "./kernel-value/number-texture"
            ),
            { WebGLKernelValueDynamicNumberTexture: x } = e(
              "./kernel-value/dynamic-number-texture"
            ),
            { WebGLKernelValueSingleArray: y } = e(
              "./kernel-value/single-array"
            ),
            { WebGLKernelValueDynamicSingleArray: b } = e(
              "./kernel-value/dynamic-single-array"
            ),
            { WebGLKernelValueSingleArray1DI: T } = e(
              "./kernel-value/single-array1d-i"
            ),
            { WebGLKernelValueDynamicSingleArray1DI: v } = e(
              "./kernel-value/dynamic-single-array1d-i"
            ),
            { WebGLKernelValueSingleArray2DI: S } = e(
              "./kernel-value/single-array2d-i"
            ),
            { WebGLKernelValueDynamicSingleArray2DI: A } = e(
              "./kernel-value/dynamic-single-array2d-i"
            ),
            { WebGLKernelValueSingleArray3DI: _ } = e(
              "./kernel-value/single-array3d-i"
            ),
            { WebGLKernelValueDynamicSingleArray3DI: E } = e(
              "./kernel-value/dynamic-single-array3d-i"
            ),
            { WebGLKernelValueArray2: w } = e("./kernel-value/array2"),
            { WebGLKernelValueArray3: k } = e("./kernel-value/array3"),
            { WebGLKernelValueArray4: I } = e("./kernel-value/array4"),
            { WebGLKernelValueUnsignedArray: D } = e(
              "./kernel-value/unsigned-array"
            ),
            { WebGLKernelValueDynamicUnsignedArray: C } = e(
              "./kernel-value/dynamic-unsigned-array"
            ),
            $ = {
              unsigned: {
                dynamic: {
                  Boolean: n,
                  Integer: s,
                  Float: i,
                  Array: C,
                  "Array(2)": w,
                  "Array(3)": k,
                  "Array(4)": I,
                  "Array1D(2)": !1,
                  "Array1D(3)": !1,
                  "Array1D(4)": !1,
                  "Array2D(2)": !1,
                  "Array2D(3)": !1,
                  "Array2D(4)": !1,
                  "Array3D(2)": !1,
                  "Array3D(3)": !1,
                  "Array3D(4)": !1,
                  Input: d,
                  NumberTexture: x,
                  "ArrayTexture(1)": x,
                  "ArrayTexture(2)": x,
                  "ArrayTexture(3)": x,
                  "ArrayTexture(4)": x,
                  MemoryOptimizedNumberTexture: f,
                  HTMLCanvas: o,
                  OffscreenCanvas: o,
                  HTMLImage: o,
                  ImageBitmap: o,
                  ImageData: o,
                  HTMLImageArray: !1,
                  HTMLVideo: l,
                },
                static: {
                  Boolean: n,
                  Float: i,
                  Integer: s,
                  Array: D,
                  "Array(2)": w,
                  "Array(3)": k,
                  "Array(4)": I,
                  "Array1D(2)": !1,
                  "Array1D(3)": !1,
                  "Array1D(4)": !1,
                  "Array2D(2)": !1,
                  "Array2D(3)": !1,
                  "Array2D(4)": !1,
                  "Array3D(2)": !1,
                  "Array3D(3)": !1,
                  "Array3D(4)": !1,
                  Input: p,
                  NumberTexture: g,
                  "ArrayTexture(1)": g,
                  "ArrayTexture(2)": g,
                  "ArrayTexture(3)": g,
                  "ArrayTexture(4)": g,
                  MemoryOptimizedNumberTexture: m,
                  HTMLCanvas: a,
                  OffscreenCanvas: a,
                  HTMLImage: a,
                  ImageBitmap: a,
                  ImageData: a,
                  HTMLImageArray: !1,
                  HTMLVideo: u,
                },
              },
              single: {
                dynamic: {
                  Boolean: n,
                  Integer: s,
                  Float: i,
                  Array: b,
                  "Array(2)": w,
                  "Array(3)": k,
                  "Array(4)": I,
                  "Array1D(2)": v,
                  "Array1D(3)": v,
                  "Array1D(4)": v,
                  "Array2D(2)": A,
                  "Array2D(3)": A,
                  "Array2D(4)": A,
                  "Array3D(2)": E,
                  "Array3D(3)": E,
                  "Array3D(4)": E,
                  Input: c,
                  NumberTexture: x,
                  "ArrayTexture(1)": x,
                  "ArrayTexture(2)": x,
                  "ArrayTexture(3)": x,
                  "ArrayTexture(4)": x,
                  MemoryOptimizedNumberTexture: f,
                  HTMLCanvas: o,
                  OffscreenCanvas: o,
                  HTMLImage: o,
                  ImageBitmap: o,
                  ImageData: o,
                  HTMLImageArray: !1,
                  HTMLVideo: l,
                },
                static: {
                  Boolean: n,
                  Float: i,
                  Integer: s,
                  Array: y,
                  "Array(2)": w,
                  "Array(3)": k,
                  "Array(4)": I,
                  "Array1D(2)": T,
                  "Array1D(3)": T,
                  "Array1D(4)": T,
                  "Array2D(2)": S,
                  "Array2D(3)": S,
                  "Array2D(4)": S,
                  "Array3D(2)": _,
                  "Array3D(3)": _,
                  "Array3D(4)": _,
                  Input: h,
                  NumberTexture: g,
                  "ArrayTexture(1)": g,
                  "ArrayTexture(2)": g,
                  "ArrayTexture(3)": g,
                  "ArrayTexture(4)": g,
                  MemoryOptimizedNumberTexture: m,
                  HTMLCanvas: a,
                  OffscreenCanvas: a,
                  HTMLImage: a,
                  ImageBitmap: a,
                  ImageData: a,
                  HTMLImageArray: !1,
                  HTMLVideo: u,
                },
              },
            };
          t.exports = {
            lookupKernelValueType: function (e, t, r, n) {
              if (!e) throw new Error("type missing");
              if (!t) throw new Error("dynamic missing");
              if (!r) throw new Error("precision missing");
              n.type && (e = n.type);
              const i = $[r][t];
              if (!1 === i[e]) return null;
              if (void 0 === i[e])
                throw new Error(`Could not find a KernelValue for ${e}`);
              return i[e];
            },
            kernelValueMaps: $,
          };
        },
        {
          "./kernel-value/array2": 41,
          "./kernel-value/array3": 42,
          "./kernel-value/array4": 43,
          "./kernel-value/boolean": 44,
          "./kernel-value/dynamic-html-image": 45,
          "./kernel-value/dynamic-html-video": 46,
          "./kernel-value/dynamic-memory-optimized-number-texture": 47,
          "./kernel-value/dynamic-number-texture": 48,
          "./kernel-value/dynamic-single-array": 49,
          "./kernel-value/dynamic-single-array1d-i": 50,
          "./kernel-value/dynamic-single-array2d-i": 51,
          "./kernel-value/dynamic-single-array3d-i": 52,
          "./kernel-value/dynamic-single-input": 53,
          "./kernel-value/dynamic-unsigned-array": 54,
          "./kernel-value/dynamic-unsigned-input": 55,
          "./kernel-value/float": 56,
          "./kernel-value/html-image": 57,
          "./kernel-value/html-video": 58,
          "./kernel-value/integer": 60,
          "./kernel-value/memory-optimized-number-texture": 61,
          "./kernel-value/number-texture": 62,
          "./kernel-value/single-array": 63,
          "./kernel-value/single-array1d-i": 64,
          "./kernel-value/single-array2d-i": 65,
          "./kernel-value/single-array3d-i": 66,
          "./kernel-value/single-input": 67,
          "./kernel-value/unsigned-array": 68,
          "./kernel-value/unsigned-input": 69,
        },
      ],
      40: [
        function (e, t, r) {
          const { WebGLKernelValue: n } = e("./index"),
            { Input: i } = e("../../../input");
          t.exports = {
            WebGLKernelArray: class extends n {
              checkSize(e, t) {
                if (!this.kernel.validate) return;
                const { maxTextureSize: r } = this.kernel.constructor.features;
                if (e > r || t > r)
                  throw e > t
                    ? new Error(
                        `Argument texture width of ${e} larger than maximum size of ${r} for your GPU`
                      )
                    : e < t
                    ? new Error(
                        `Argument texture height of ${t} larger than maximum size of ${r} for your GPU`
                      )
                    : new Error(
                        `Argument texture height and width of ${t} larger than maximum size of ${r} for your GPU`
                      );
              }
              setup() {
                this.requestTexture(),
                  this.setupTexture(),
                  this.defineTexture();
              }
              requestTexture() {
                this.texture = this.onRequestTexture();
              }
              defineTexture() {
                const { context: e } = this;
                e.activeTexture(this.contextHandle),
                  e.bindTexture(e.TEXTURE_2D, this.texture),
                  e.texParameteri(
                    e.TEXTURE_2D,
                    e.TEXTURE_WRAP_S,
                    e.CLAMP_TO_EDGE
                  ),
                  e.texParameteri(
                    e.TEXTURE_2D,
                    e.TEXTURE_WRAP_T,
                    e.CLAMP_TO_EDGE
                  ),
                  e.texParameteri(
                    e.TEXTURE_2D,
                    e.TEXTURE_MIN_FILTER,
                    e.NEAREST
                  ),
                  e.texParameteri(
                    e.TEXTURE_2D,
                    e.TEXTURE_MAG_FILTER,
                    e.NEAREST
                  );
              }
              setupTexture() {
                (this.contextHandle = this.onRequestContextHandle()),
                  (this.index = this.onRequestIndex()),
                  (this.dimensionsId = this.id + "Dim"),
                  (this.sizeId = this.id + "Size");
              }
              getBitRatio(e) {
                if (Array.isArray(e[0])) return this.getBitRatio(e[0]);
                if (e.constructor === i) return this.getBitRatio(e.value);
                switch (e.constructor) {
                  case Uint8ClampedArray:
                  case Uint8Array:
                  case Int8Array:
                    return 1;
                  case Uint16Array:
                  case Int16Array:
                    return 2;
                  case Float32Array:
                  case Int32Array:
                  default:
                    return 4;
                }
              }
              destroy() {
                this.prevArg && this.prevArg.delete(),
                  this.context.deleteTexture(this.texture);
              }
            },
          };
        },
        { "../../../input": 110, "./index": 59 },
      ],
      41: [
        function (e, t, r) {
          const { WebGLKernelValue: n } = e("./index");
          t.exports = {
            WebGLKernelValueArray2: class extends n {
              constructor(e, t) {
                super(e, t), (this.uploadValue = e);
              }
              getSource(e) {
                return "constants" === this.origin
                  ? `const vec2 ${this.id} = vec2(${e[0]},${e[1]});\n`
                  : `uniform vec2 ${this.id};\n`;
              }
              getStringValueHandler() {
                return "constants" === this.origin
                  ? ""
                  : `const uploadValue_${this.name} = ${this.varName};\n`;
              }
              updateValue(e) {
                "constants" !== this.origin &&
                  this.kernel.setUniform2fv(this.id, (this.uploadValue = e));
              }
            },
          };
        },
        { "./index": 59 },
      ],
      42: [
        function (e, t, r) {
          const { WebGLKernelValue: n } = e("./index");
          t.exports = {
            WebGLKernelValueArray3: class extends n {
              constructor(e, t) {
                super(e, t), (this.uploadValue = e);
              }
              getSource(e) {
                return "constants" === this.origin
                  ? `const vec3 ${this.id} = vec3(${e[0]},${e[1]},${e[2]});\n`
                  : `uniform vec3 ${this.id};\n`;
              }
              getStringValueHandler() {
                return "constants" === this.origin
                  ? ""
                  : `const uploadValue_${this.name} = ${this.varName};\n`;
              }
              updateValue(e) {
                "constants" !== this.origin &&
                  this.kernel.setUniform3fv(this.id, (this.uploadValue = e));
              }
            },
          };
        },
        { "./index": 59 },
      ],
      43: [
        function (e, t, r) {
          const { WebGLKernelValue: n } = e("./index");
          t.exports = {
            WebGLKernelValueArray4: class extends n {
              constructor(e, t) {
                super(e, t), (this.uploadValue = e);
              }
              getSource(e) {
                return "constants" === this.origin
                  ? `const vec4 ${this.id} = vec4(${e[0]},${e[1]},${e[2]},${e[3]});\n`
                  : `uniform vec4 ${this.id};\n`;
              }
              getStringValueHandler() {
                return "constants" === this.origin
                  ? ""
                  : `const uploadValue_${this.name} = ${this.varName};\n`;
              }
              updateValue(e) {
                "constants" !== this.origin &&
                  this.kernel.setUniform4fv(this.id, (this.uploadValue = e));
              }
            },
          };
        },
        { "./index": 59 },
      ],
      44: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelValue: i } = e("./index");
          t.exports = {
            WebGLKernelValueBoolean: class extends i {
              constructor(e, t) {
                super(e, t), (this.uploadValue = e);
              }
              getSource(e) {
                return "constants" === this.origin
                  ? `const bool ${this.id} = ${e};\n`
                  : `uniform bool ${this.id};\n`;
              }
              getStringValueHandler() {
                return `const uploadValue_${this.name} = ${this.varName};\n`;
              }
              updateValue(e) {
                "constants" !== this.origin &&
                  this.kernel.setUniform1i(this.id, (this.uploadValue = e));
              }
            },
          };
        },
        { "../../../utils": 114, "./index": 59 },
      ],
      45: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelValueHTMLImage: i } = e("./html-image");
          t.exports = {
            WebGLKernelValueDynamicHTMLImage: class extends i {
              getSource() {
                return n.linesToString([
                  `uniform sampler2D ${this.id}`,
                  `uniform ivec2 ${this.sizeId}`,
                  `uniform ivec3 ${this.dimensionsId}`,
                ]);
              }
              updateValue(e) {
                const { width: t, height: r } = e;
                this.checkSize(t, r),
                  (this.dimensions = [t, r, 1]),
                  (this.textureSize = [t, r]),
                  this.kernel.setUniform3iv(this.dimensionsId, this.dimensions),
                  this.kernel.setUniform2iv(this.sizeId, this.textureSize),
                  super.updateValue(e);
              }
            },
          };
        },
        { "../../../utils": 114, "./html-image": 57 },
      ],
      46: [
        function (e, t, r) {
          const { WebGLKernelValueDynamicHTMLImage: n } = e(
            "./dynamic-html-image"
          );
          t.exports = { WebGLKernelValueDynamicHTMLVideo: class extends n {} };
        },
        { "./dynamic-html-image": 45 },
      ],
      47: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelValueMemoryOptimizedNumberTexture: i } = e(
              "./memory-optimized-number-texture"
            );
          t.exports = {
            WebGLKernelValueDynamicMemoryOptimizedNumberTexture: class extends i {
              getSource() {
                return n.linesToString([
                  `uniform sampler2D ${this.id}`,
                  `uniform ivec2 ${this.sizeId}`,
                  `uniform ivec3 ${this.dimensionsId}`,
                ]);
              }
              updateValue(e) {
                (this.dimensions = e.dimensions),
                  this.checkSize(e.size[0], e.size[1]),
                  (this.textureSize = e.size),
                  this.kernel.setUniform3iv(this.dimensionsId, this.dimensions),
                  this.kernel.setUniform2iv(this.sizeId, this.textureSize),
                  super.updateValue(e);
              }
            },
          };
        },
        { "../../../utils": 114, "./memory-optimized-number-texture": 61 },
      ],
      48: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelValueNumberTexture: i } = e("./number-texture");
          t.exports = {
            WebGLKernelValueDynamicNumberTexture: class extends i {
              getSource() {
                return n.linesToString([
                  `uniform sampler2D ${this.id}`,
                  `uniform ivec2 ${this.sizeId}`,
                  `uniform ivec3 ${this.dimensionsId}`,
                ]);
              }
              updateValue(e) {
                (this.dimensions = e.dimensions),
                  this.checkSize(e.size[0], e.size[1]),
                  (this.textureSize = e.size),
                  this.kernel.setUniform3iv(this.dimensionsId, this.dimensions),
                  this.kernel.setUniform2iv(this.sizeId, this.textureSize),
                  super.updateValue(e);
              }
            },
          };
        },
        { "../../../utils": 114, "./number-texture": 62 },
      ],
      49: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelValueSingleArray: i } = e("./single-array");
          t.exports = {
            WebGLKernelValueDynamicSingleArray: class extends i {
              getSource() {
                return n.linesToString([
                  `uniform sampler2D ${this.id}`,
                  `uniform ivec2 ${this.sizeId}`,
                  `uniform ivec3 ${this.dimensionsId}`,
                ]);
              }
              updateValue(e) {
                (this.dimensions = n.getDimensions(e, !0)),
                  (this.textureSize = n.getMemoryOptimizedFloatTextureSize(
                    this.dimensions,
                    this.bitRatio
                  )),
                  (this.uploadArrayLength =
                    this.textureSize[0] * this.textureSize[1] * this.bitRatio),
                  this.checkSize(this.textureSize[0], this.textureSize[1]),
                  (this.uploadValue = new Float32Array(this.uploadArrayLength)),
                  this.kernel.setUniform3iv(this.dimensionsId, this.dimensions),
                  this.kernel.setUniform2iv(this.sizeId, this.textureSize),
                  super.updateValue(e);
              }
            },
          };
        },
        { "../../../utils": 114, "./single-array": 63 },
      ],
      50: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelValueSingleArray1DI: i } = e("./single-array1d-i");
          t.exports = {
            WebGLKernelValueDynamicSingleArray1DI: class extends i {
              getSource() {
                return n.linesToString([
                  `uniform sampler2D ${this.id}`,
                  `uniform ivec2 ${this.sizeId}`,
                  `uniform ivec3 ${this.dimensionsId}`,
                ]);
              }
              updateValue(e) {
                this.setShape(e),
                  this.kernel.setUniform3iv(this.dimensionsId, this.dimensions),
                  this.kernel.setUniform2iv(this.sizeId, this.textureSize),
                  super.updateValue(e);
              }
            },
          };
        },
        { "../../../utils": 114, "./single-array1d-i": 64 },
      ],
      51: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelValueSingleArray2DI: i } = e("./single-array2d-i");
          t.exports = {
            WebGLKernelValueDynamicSingleArray2DI: class extends i {
              getSource() {
                return n.linesToString([
                  `uniform sampler2D ${this.id}`,
                  `uniform ivec2 ${this.sizeId}`,
                  `uniform ivec3 ${this.dimensionsId}`,
                ]);
              }
              updateValue(e) {
                this.setShape(e),
                  this.kernel.setUniform3iv(this.dimensionsId, this.dimensions),
                  this.kernel.setUniform2iv(this.sizeId, this.textureSize),
                  super.updateValue(e);
              }
            },
          };
        },
        { "../../../utils": 114, "./single-array2d-i": 65 },
      ],
      52: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelValueSingleArray3DI: i } = e("./single-array3d-i");
          t.exports = {
            WebGLKernelValueDynamicSingleArray3DI: class extends i {
              getSource() {
                return n.linesToString([
                  `uniform sampler2D ${this.id}`,
                  `uniform ivec2 ${this.sizeId}`,
                  `uniform ivec3 ${this.dimensionsId}`,
                ]);
              }
              updateValue(e) {
                this.setShape(e),
                  this.kernel.setUniform3iv(this.dimensionsId, this.dimensions),
                  this.kernel.setUniform2iv(this.sizeId, this.textureSize),
                  super.updateValue(e);
              }
            },
          };
        },
        { "../../../utils": 114, "./single-array3d-i": 66 },
      ],
      53: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelValueSingleInput: i } = e("./single-input");
          t.exports = {
            WebGLKernelValueDynamicSingleInput: class extends i {
              getSource() {
                return n.linesToString([
                  `uniform sampler2D ${this.id}`,
                  `uniform ivec2 ${this.sizeId}`,
                  `uniform ivec3 ${this.dimensionsId}`,
                ]);
              }
              updateValue(e) {
                let [t, r, i] = e.size;
                (this.dimensions = new Int32Array([t || 1, r || 1, i || 1])),
                  (this.textureSize = n.getMemoryOptimizedFloatTextureSize(
                    this.dimensions,
                    this.bitRatio
                  )),
                  (this.uploadArrayLength =
                    this.textureSize[0] * this.textureSize[1] * this.bitRatio),
                  this.checkSize(this.textureSize[0], this.textureSize[1]),
                  (this.uploadValue = new Float32Array(this.uploadArrayLength)),
                  this.kernel.setUniform3iv(this.dimensionsId, this.dimensions),
                  this.kernel.setUniform2iv(this.sizeId, this.textureSize),
                  super.updateValue(e);
              }
            },
          };
        },
        { "../../../utils": 114, "./single-input": 67 },
      ],
      54: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelValueUnsignedArray: i } = e("./unsigned-array");
          t.exports = {
            WebGLKernelValueDynamicUnsignedArray: class extends i {
              getSource() {
                return n.linesToString([
                  `uniform sampler2D ${this.id}`,
                  `uniform ivec2 ${this.sizeId}`,
                  `uniform ivec3 ${this.dimensionsId}`,
                ]);
              }
              updateValue(e) {
                (this.dimensions = n.getDimensions(e, !0)),
                  (this.textureSize = n.getMemoryOptimizedPackedTextureSize(
                    this.dimensions,
                    this.bitRatio
                  )),
                  (this.uploadArrayLength =
                    this.textureSize[0] *
                    this.textureSize[1] *
                    (4 / this.bitRatio)),
                  this.checkSize(this.textureSize[0], this.textureSize[1]);
                const t = this.getTransferArrayType(e);
                (this.preUploadValue = new t(this.uploadArrayLength)),
                  (this.uploadValue = new Uint8Array(
                    this.preUploadValue.buffer
                  )),
                  this.kernel.setUniform3iv(this.dimensionsId, this.dimensions),
                  this.kernel.setUniform2iv(this.sizeId, this.textureSize),
                  super.updateValue(e);
              }
            },
          };
        },
        { "../../../utils": 114, "./unsigned-array": 68 },
      ],
      55: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelValueUnsignedInput: i } = e("./unsigned-input");
          t.exports = {
            WebGLKernelValueDynamicUnsignedInput: class extends i {
              getSource() {
                return n.linesToString([
                  `uniform sampler2D ${this.id}`,
                  `uniform ivec2 ${this.sizeId}`,
                  `uniform ivec3 ${this.dimensionsId}`,
                ]);
              }
              updateValue(e) {
                let [t, r, i] = e.size;
                (this.dimensions = new Int32Array([t || 1, r || 1, i || 1])),
                  (this.textureSize = n.getMemoryOptimizedPackedTextureSize(
                    this.dimensions,
                    this.bitRatio
                  )),
                  (this.uploadArrayLength =
                    this.textureSize[0] *
                    this.textureSize[1] *
                    (4 / this.bitRatio)),
                  this.checkSize(this.textureSize[0], this.textureSize[1]);
                const s = this.getTransferArrayType(e.value);
                (this.preUploadValue = new s(this.uploadArrayLength)),
                  (this.uploadValue = new Uint8Array(
                    this.preUploadValue.buffer
                  )),
                  this.kernel.setUniform3iv(this.dimensionsId, this.dimensions),
                  this.kernel.setUniform2iv(this.sizeId, this.textureSize),
                  super.updateValue(e);
              }
            },
          };
        },
        { "../../../utils": 114, "./unsigned-input": 69 },
      ],
      56: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelValue: i } = e("./index");
          t.exports = {
            WebGLKernelValueFloat: class extends i {
              constructor(e, t) {
                super(e, t), (this.uploadValue = e);
              }
              getStringValueHandler() {
                return `const uploadValue_${this.name} = ${this.varName};\n`;
              }
              getSource(e) {
                return "constants" === this.origin
                  ? Number.isInteger(e)
                    ? `const float ${this.id} = ${e}.0;\n`
                    : `const float ${this.id} = ${e};\n`
                  : `uniform float ${this.id};\n`;
              }
              updateValue(e) {
                "constants" !== this.origin &&
                  this.kernel.setUniform1f(this.id, (this.uploadValue = e));
              }
            },
          };
        },
        { "../../../utils": 114, "./index": 59 },
      ],
      57: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelArray: i } = e("./array");
          t.exports = {
            WebGLKernelValueHTMLImage: class extends i {
              constructor(e, t) {
                super(e, t);
                const { width: r, height: n } = e;
                this.checkSize(r, n),
                  (this.dimensions = [r, n, 1]),
                  (this.textureSize = [r, n]),
                  (this.uploadValue = e);
              }
              getStringValueHandler() {
                return `const uploadValue_${this.name} = ${this.varName};\n`;
              }
              getSource() {
                return n.linesToString([
                  `uniform sampler2D ${this.id}`,
                  `ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`,
                  `ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`,
                ]);
              }
              updateValue(e) {
                if (e.constructor !== this.initialValueConstructor)
                  return void this.onUpdateValueMismatch(e.constructor);
                const { context: t } = this;
                t.activeTexture(this.contextHandle),
                  t.bindTexture(t.TEXTURE_2D, this.texture),
                  t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !0),
                  t.texImage2D(
                    t.TEXTURE_2D,
                    0,
                    t.RGBA,
                    t.RGBA,
                    t.UNSIGNED_BYTE,
                    (this.uploadValue = e)
                  ),
                  this.kernel.setUniform1i(this.id, this.index);
              }
            },
          };
        },
        { "../../../utils": 114, "./array": 40 },
      ],
      58: [
        function (e, t, r) {
          const { WebGLKernelValueHTMLImage: n } = e("./html-image");
          t.exports = { WebGLKernelValueHTMLVideo: class extends n {} };
        },
        { "./html-image": 57 },
      ],
      59: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { KernelValue: i } = e("../../kernel-value");
          t.exports = {
            WebGLKernelValue: class extends i {
              constructor(e, t) {
                super(e, t),
                  (this.dimensionsId = null),
                  (this.sizeId = null),
                  (this.initialValueConstructor = e.constructor),
                  (this.onRequestTexture = t.onRequestTexture),
                  (this.onRequestIndex = t.onRequestIndex),
                  (this.uploadValue = null),
                  (this.textureSize = null),
                  (this.bitRatio = null),
                  (this.prevArg = null);
              }
              get id() {
                return `${this.origin}_${n.sanitizeName(this.name)}`;
              }
              setup() {}
              getTransferArrayType(e) {
                if (Array.isArray(e[0])) return this.getTransferArrayType(e[0]);
                switch (e.constructor) {
                  case Array:
                  case Int32Array:
                  case Int16Array:
                  case Int8Array:
                    return Float32Array;
                  case Uint8ClampedArray:
                  case Uint8Array:
                  case Uint16Array:
                  case Uint32Array:
                  case Float32Array:
                  case Float64Array:
                    return e.constructor;
                }
                return (
                  console.warn(
                    "Unfamiliar constructor type.  Will go ahead and use, but likley this may result in a transfer of zeros"
                  ),
                  e.constructor
                );
              }
              getStringValueHandler() {
                throw new Error(
                  `"getStringValueHandler" not implemented on ${this.constructor.name}`
                );
              }
              getVariablePrecisionString() {
                return this.kernel.getVariablePrecisionString(
                  this.textureSize || void 0,
                  this.tactic || void 0
                );
              }
              destroy() {}
            },
          };
        },
        { "../../../utils": 114, "../../kernel-value": 35 },
      ],
      60: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelValue: i } = e("./index");
          t.exports = {
            WebGLKernelValueInteger: class extends i {
              constructor(e, t) {
                super(e, t), (this.uploadValue = e);
              }
              getStringValueHandler() {
                return `const uploadValue_${this.name} = ${this.varName};\n`;
              }
              getSource(e) {
                return "constants" === this.origin
                  ? `const int ${this.id} = ${parseInt(e)};\n`
                  : `uniform int ${this.id};\n`;
              }
              updateValue(e) {
                "constants" !== this.origin &&
                  this.kernel.setUniform1i(this.id, (this.uploadValue = e));
              }
            },
          };
        },
        { "../../../utils": 114, "./index": 59 },
      ],
      61: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelArray: i } = e("./array"),
            s =
              "Source and destination textures are the same.  Use immutable = true and manually cleanup kernel output texture memory with texture.delete()";
          t.exports = {
            WebGLKernelValueMemoryOptimizedNumberTexture: class extends i {
              constructor(e, t) {
                super(e, t);
                const [r, n] = e.size;
                this.checkSize(r, n),
                  (this.dimensions = e.dimensions),
                  (this.textureSize = e.size),
                  (this.uploadValue = e.texture),
                  (this.forceUploadEachRun = !0);
              }
              setup() {
                this.setupTexture();
              }
              getStringValueHandler() {
                return `const uploadValue_${this.name} = ${this.varName}.texture;\n`;
              }
              getSource() {
                return n.linesToString([
                  `uniform sampler2D ${this.id}`,
                  `ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`,
                  `ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`,
                ]);
              }
              updateValue(e) {
                if (e.constructor !== this.initialValueConstructor)
                  return void this.onUpdateValueMismatch(e.constructor);
                if (this.checkContext && e.context !== this.context)
                  throw new Error(
                    `Value ${this.name} (${this.type}) must be from same context`
                  );
                const { kernel: t, context: r } = this;
                if (t.pipeline)
                  if (t.immutable) t.updateTextureArgumentRefs(this, e);
                  else {
                    if (t.texture && t.texture.texture === e.texture)
                      throw new Error(s);
                    if (t.mappedTextures) {
                      const { mappedTextures: r } = t;
                      for (let t = 0; t < r.length; t++)
                        if (r[t].texture === e.texture) throw new Error(s);
                    }
                  }
                r.activeTexture(this.contextHandle),
                  r.bindTexture(r.TEXTURE_2D, (this.uploadValue = e.texture)),
                  this.kernel.setUniform1i(this.id, this.index);
              }
            },
            sameError: s,
          };
        },
        { "../../../utils": 114, "./array": 40 },
      ],
      62: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelArray: i } = e("./array"),
            { sameError: s } = e("./memory-optimized-number-texture");
          t.exports = {
            WebGLKernelValueNumberTexture: class extends i {
              constructor(e, t) {
                super(e, t);
                const [r, n] = e.size;
                this.checkSize(r, n);
                const { size: i, dimensions: s } = e;
                (this.bitRatio = this.getBitRatio(e)),
                  (this.dimensions = s),
                  (this.textureSize = i),
                  (this.uploadValue = e.texture),
                  (this.forceUploadEachRun = !0);
              }
              setup() {
                this.setupTexture();
              }
              getStringValueHandler() {
                return `const uploadValue_${this.name} = ${this.varName}.texture;\n`;
              }
              getSource() {
                return n.linesToString([
                  `uniform sampler2D ${this.id}`,
                  `ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`,
                  `ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`,
                ]);
              }
              updateValue(e) {
                if (e.constructor !== this.initialValueConstructor)
                  return void this.onUpdateValueMismatch(e.constructor);
                if (this.checkContext && e.context !== this.context)
                  throw new Error(
                    `Value ${this.name} (${this.type}) must be from same context`
                  );
                const { kernel: t, context: r } = this;
                if (t.pipeline)
                  if (t.immutable) t.updateTextureArgumentRefs(this, e);
                  else {
                    if (t.texture && t.texture.texture === e.texture)
                      throw new Error(s);
                    if (t.mappedTextures) {
                      const { mappedTextures: r } = t;
                      for (let t = 0; t < r.length; t++)
                        if (r[t].texture === e.texture) throw new Error(s);
                    }
                  }
                r.activeTexture(this.contextHandle),
                  r.bindTexture(r.TEXTURE_2D, (this.uploadValue = e.texture)),
                  this.kernel.setUniform1i(this.id, this.index);
              }
            },
          };
        },
        {
          "../../../utils": 114,
          "./array": 40,
          "./memory-optimized-number-texture": 61,
        },
      ],
      63: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelArray: i } = e("./array");
          t.exports = {
            WebGLKernelValueSingleArray: class extends i {
              constructor(e, t) {
                super(e, t),
                  (this.bitRatio = 4),
                  (this.dimensions = n.getDimensions(e, !0)),
                  (this.textureSize = n.getMemoryOptimizedFloatTextureSize(
                    this.dimensions,
                    this.bitRatio
                  )),
                  (this.uploadArrayLength =
                    this.textureSize[0] * this.textureSize[1] * this.bitRatio),
                  this.checkSize(this.textureSize[0], this.textureSize[1]),
                  (this.uploadValue = new Float32Array(this.uploadArrayLength));
              }
              getStringValueHandler() {
                return n.linesToString([
                  `const uploadValue_${this.name} = new Float32Array(${this.uploadArrayLength})`,
                  `flattenTo(${this.varName}, uploadValue_${this.name})`,
                ]);
              }
              getSource() {
                return n.linesToString([
                  `uniform sampler2D ${this.id}`,
                  `ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`,
                  `ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`,
                ]);
              }
              updateValue(e) {
                if (e.constructor !== this.initialValueConstructor)
                  return void this.onUpdateValueMismatch(e.constructor);
                const { context: t } = this;
                n.flattenTo(e, this.uploadValue),
                  t.activeTexture(this.contextHandle),
                  t.bindTexture(t.TEXTURE_2D, this.texture),
                  t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !1),
                  t.texImage2D(
                    t.TEXTURE_2D,
                    0,
                    t.RGBA,
                    this.textureSize[0],
                    this.textureSize[1],
                    0,
                    t.RGBA,
                    t.FLOAT,
                    this.uploadValue
                  ),
                  this.kernel.setUniform1i(this.id, this.index);
              }
            },
          };
        },
        { "../../../utils": 114, "./array": 40 },
      ],
      64: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelArray: i } = e("./array");
          t.exports = {
            WebGLKernelValueSingleArray1DI: class extends i {
              constructor(e, t) {
                super(e, t), (this.bitRatio = 4), this.setShape(e);
              }
              setShape(e) {
                const t = n.getDimensions(e, !0);
                (this.textureSize = n.getMemoryOptimizedFloatTextureSize(
                  t,
                  this.bitRatio
                )),
                  (this.dimensions = new Int32Array([t[1], 1, 1])),
                  (this.uploadArrayLength =
                    this.textureSize[0] * this.textureSize[1] * this.bitRatio),
                  this.checkSize(this.textureSize[0], this.textureSize[1]),
                  (this.uploadValue = new Float32Array(this.uploadArrayLength));
              }
              getStringValueHandler() {
                return n.linesToString([
                  `const uploadValue_${this.name} = new Float32Array(${this.uploadArrayLength})`,
                  `flattenTo(${this.varName}, uploadValue_${this.name})`,
                ]);
              }
              getSource() {
                return n.linesToString([
                  `uniform sampler2D ${this.id}`,
                  `ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`,
                  `ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`,
                ]);
              }
              updateValue(e) {
                if (e.constructor !== this.initialValueConstructor)
                  return void this.onUpdateValueMismatch(e.constructor);
                const { context: t } = this;
                n.flatten2dArrayTo(e, this.uploadValue),
                  t.activeTexture(this.contextHandle),
                  t.bindTexture(t.TEXTURE_2D, this.texture),
                  t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !1),
                  t.texImage2D(
                    t.TEXTURE_2D,
                    0,
                    t.RGBA,
                    this.textureSize[0],
                    this.textureSize[1],
                    0,
                    t.RGBA,
                    t.FLOAT,
                    this.uploadValue
                  ),
                  this.kernel.setUniform1i(this.id, this.index);
              }
            },
          };
        },
        { "../../../utils": 114, "./array": 40 },
      ],
      65: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelArray: i } = e("./array");
          t.exports = {
            WebGLKernelValueSingleArray2DI: class extends i {
              constructor(e, t) {
                super(e, t), (this.bitRatio = 4), this.setShape(e);
              }
              setShape(e) {
                const t = n.getDimensions(e, !0);
                (this.textureSize = n.getMemoryOptimizedFloatTextureSize(
                  t,
                  this.bitRatio
                )),
                  (this.dimensions = new Int32Array([t[1], t[2], 1])),
                  (this.uploadArrayLength =
                    this.textureSize[0] * this.textureSize[1] * this.bitRatio),
                  this.checkSize(this.textureSize[0], this.textureSize[1]),
                  (this.uploadValue = new Float32Array(this.uploadArrayLength));
              }
              getStringValueHandler() {
                return n.linesToString([
                  `const uploadValue_${this.name} = new Float32Array(${this.uploadArrayLength})`,
                  `flattenTo(${this.varName}, uploadValue_${this.name})`,
                ]);
              }
              getSource() {
                return n.linesToString([
                  `uniform sampler2D ${this.id}`,
                  `ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`,
                  `ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`,
                ]);
              }
              updateValue(e) {
                if (e.constructor !== this.initialValueConstructor)
                  return void this.onUpdateValueMismatch(e.constructor);
                const { context: t } = this;
                n.flatten3dArrayTo(e, this.uploadValue),
                  t.activeTexture(this.contextHandle),
                  t.bindTexture(t.TEXTURE_2D, this.texture),
                  t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !1),
                  t.texImage2D(
                    t.TEXTURE_2D,
                    0,
                    t.RGBA,
                    this.textureSize[0],
                    this.textureSize[1],
                    0,
                    t.RGBA,
                    t.FLOAT,
                    this.uploadValue
                  ),
                  this.kernel.setUniform1i(this.id, this.index);
              }
            },
          };
        },
        { "../../../utils": 114, "./array": 40 },
      ],
      66: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelArray: i } = e("./array");
          t.exports = {
            WebGLKernelValueSingleArray3DI: class extends i {
              constructor(e, t) {
                super(e, t), (this.bitRatio = 4), this.setShape(e);
              }
              setShape(e) {
                const t = n.getDimensions(e, !0);
                (this.textureSize = n.getMemoryOptimizedFloatTextureSize(
                  t,
                  this.bitRatio
                )),
                  (this.dimensions = new Int32Array([t[1], t[2], t[3]])),
                  (this.uploadArrayLength =
                    this.textureSize[0] * this.textureSize[1] * this.bitRatio),
                  this.checkSize(this.textureSize[0], this.textureSize[1]),
                  (this.uploadValue = new Float32Array(this.uploadArrayLength));
              }
              getStringValueHandler() {
                return n.linesToString([
                  `const uploadValue_${this.name} = new Float32Array(${this.uploadArrayLength})`,
                  `flattenTo(${this.varName}, uploadValue_${this.name})`,
                ]);
              }
              getSource() {
                return n.linesToString([
                  `uniform sampler2D ${this.id}`,
                  `ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`,
                  `ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`,
                ]);
              }
              updateValue(e) {
                if (e.constructor !== this.initialValueConstructor)
                  return void this.onUpdateValueMismatch(e.constructor);
                const { context: t } = this;
                n.flatten4dArrayTo(e, this.uploadValue),
                  t.activeTexture(this.contextHandle),
                  t.bindTexture(t.TEXTURE_2D, this.texture),
                  t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !1),
                  t.texImage2D(
                    t.TEXTURE_2D,
                    0,
                    t.RGBA,
                    this.textureSize[0],
                    this.textureSize[1],
                    0,
                    t.RGBA,
                    t.FLOAT,
                    this.uploadValue
                  ),
                  this.kernel.setUniform1i(this.id, this.index);
              }
            },
          };
        },
        { "../../../utils": 114, "./array": 40 },
      ],
      67: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelArray: i } = e("./array");
          t.exports = {
            WebGLKernelValueSingleInput: class extends i {
              constructor(e, t) {
                super(e, t), (this.bitRatio = 4);
                let [r, i, s] = e.size;
                (this.dimensions = new Int32Array([r || 1, i || 1, s || 1])),
                  (this.textureSize = n.getMemoryOptimizedFloatTextureSize(
                    this.dimensions,
                    this.bitRatio
                  )),
                  (this.uploadArrayLength =
                    this.textureSize[0] * this.textureSize[1] * this.bitRatio),
                  this.checkSize(this.textureSize[0], this.textureSize[1]),
                  (this.uploadValue = new Float32Array(this.uploadArrayLength));
              }
              getStringValueHandler() {
                return n.linesToString([
                  `const uploadValue_${this.name} = new Float32Array(${this.uploadArrayLength})`,
                  `flattenTo(${this.varName}.value, uploadValue_${this.name})`,
                ]);
              }
              getSource() {
                return n.linesToString([
                  `uniform sampler2D ${this.id}`,
                  `ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`,
                  `ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`,
                ]);
              }
              updateValue(e) {
                if (e.constructor !== this.initialValueConstructor)
                  return void this.onUpdateValueMismatch(e.constructor);
                const { context: t } = this;
                n.flattenTo(e.value, this.uploadValue),
                  t.activeTexture(this.contextHandle),
                  t.bindTexture(t.TEXTURE_2D, this.texture),
                  t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !1),
                  t.texImage2D(
                    t.TEXTURE_2D,
                    0,
                    t.RGBA,
                    this.textureSize[0],
                    this.textureSize[1],
                    0,
                    t.RGBA,
                    t.FLOAT,
                    this.uploadValue
                  ),
                  this.kernel.setUniform1i(this.id, this.index);
              }
            },
          };
        },
        { "../../../utils": 114, "./array": 40 },
      ],
      68: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelArray: i } = e("./array");
          t.exports = {
            WebGLKernelValueUnsignedArray: class extends i {
              constructor(e, t) {
                super(e, t),
                  (this.bitRatio = this.getBitRatio(e)),
                  (this.dimensions = n.getDimensions(e, !0)),
                  (this.textureSize = n.getMemoryOptimizedPackedTextureSize(
                    this.dimensions,
                    this.bitRatio
                  )),
                  (this.uploadArrayLength =
                    this.textureSize[0] *
                    this.textureSize[1] *
                    (4 / this.bitRatio)),
                  this.checkSize(this.textureSize[0], this.textureSize[1]),
                  (this.TranserArrayType = this.getTransferArrayType(e)),
                  (this.preUploadValue = new this.TranserArrayType(
                    this.uploadArrayLength
                  )),
                  (this.uploadValue = new Uint8Array(
                    this.preUploadValue.buffer
                  ));
              }
              getStringValueHandler() {
                return n.linesToString([
                  `const preUploadValue_${this.name} = new ${this.TranserArrayType.name}(${this.uploadArrayLength})`,
                  `const uploadValue_${this.name} = new Uint8Array(preUploadValue_${this.name}.buffer)`,
                  `flattenTo(${this.varName}, preUploadValue_${this.name})`,
                ]);
              }
              getSource() {
                return n.linesToString([
                  `uniform sampler2D ${this.id}`,
                  `ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`,
                  `ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`,
                ]);
              }
              updateValue(e) {
                if (e.constructor !== this.initialValueConstructor)
                  return void this.onUpdateValueMismatch(e.constructor);
                const { context: t } = this;
                n.flattenTo(e, this.preUploadValue),
                  t.activeTexture(this.contextHandle),
                  t.bindTexture(t.TEXTURE_2D, this.texture),
                  t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !1),
                  t.texImage2D(
                    t.TEXTURE_2D,
                    0,
                    t.RGBA,
                    this.textureSize[0],
                    this.textureSize[1],
                    0,
                    t.RGBA,
                    t.UNSIGNED_BYTE,
                    this.uploadValue
                  ),
                  this.kernel.setUniform1i(this.id, this.index);
              }
            },
          };
        },
        { "../../../utils": 114, "./array": 40 },
      ],
      69: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelArray: i } = e("./array");
          t.exports = {
            WebGLKernelValueUnsignedInput: class extends i {
              constructor(e, t) {
                super(e, t), (this.bitRatio = this.getBitRatio(e));
                const [r, i, s] = e.size;
                (this.dimensions = new Int32Array([r || 1, i || 1, s || 1])),
                  (this.textureSize = n.getMemoryOptimizedPackedTextureSize(
                    this.dimensions,
                    this.bitRatio
                  )),
                  (this.uploadArrayLength =
                    this.textureSize[0] *
                    this.textureSize[1] *
                    (4 / this.bitRatio)),
                  this.checkSize(this.textureSize[0], this.textureSize[1]),
                  (this.TranserArrayType = this.getTransferArrayType(e.value)),
                  (this.preUploadValue = new this.TranserArrayType(
                    this.uploadArrayLength
                  )),
                  (this.uploadValue = new Uint8Array(
                    this.preUploadValue.buffer
                  ));
              }
              getStringValueHandler() {
                return n.linesToString([
                  `const preUploadValue_${this.name} = new ${this.TranserArrayType.name}(${this.uploadArrayLength})`,
                  `const uploadValue_${this.name} = new Uint8Array(preUploadValue_${this.name}.buffer)`,
                  `flattenTo(${this.varName}.value, preUploadValue_${this.name})`,
                ]);
              }
              getSource() {
                return n.linesToString([
                  `uniform sampler2D ${this.id}`,
                  `ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`,
                  `ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`,
                ]);
              }
              updateValue(e) {
                if (e.constructor !== this.initialValueConstructor)
                  return void this.onUpdateValueMismatch(value.constructor);
                const { context: t } = this;
                n.flattenTo(e.value, this.preUploadValue),
                  t.activeTexture(this.contextHandle),
                  t.bindTexture(t.TEXTURE_2D, this.texture),
                  t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !1),
                  t.texImage2D(
                    t.TEXTURE_2D,
                    0,
                    t.RGBA,
                    this.textureSize[0],
                    this.textureSize[1],
                    0,
                    t.RGBA,
                    t.UNSIGNED_BYTE,
                    this.uploadValue
                  ),
                  this.kernel.setUniform1i(this.id, this.index);
              }
            },
          };
        },
        { "../../../utils": 114, "./array": 40 },
      ],
      70: [
        function (e, t, r) {
          const { GLKernel: n } = e("../gl/kernel"),
            { FunctionBuilder: i } = e("../function-builder"),
            { WebGLFunctionNode: s } = e("./function-node"),
            { utils: a } = e("../../utils"),
            o = e("../../plugins/math-random-uniformly-distributed"),
            { fragmentShader: u } = e("./fragment-shader"),
            { vertexShader: l } = e("./vertex-shader"),
            { glKernelString: h } = e("../gl/kernel-string"),
            { lookupKernelValueType: c } = e("./kernel-value-maps");
          let p = null,
            d = null,
            m = null,
            f = null,
            g = null;
          const x = [o],
            y = [],
            b = {};
          t.exports = {
            WebGLKernel: class extends n {
              static get isSupported() {
                return null !== p
                  ? p
                  : (this.setupFeatureChecks(), (p = this.isContextMatch(m)));
              }
              static setupFeatureChecks() {
                "undefined" != typeof document
                  ? (d = document.createElement("canvas"))
                  : "undefined" != typeof OffscreenCanvas &&
                    (d = new OffscreenCanvas(0, 0)),
                  d &&
                    (m =
                      d.getContext("webgl") ||
                      d.getContext("experimental-webgl")) &&
                    m.getExtension &&
                    ((f = {
                      OES_texture_float: m.getExtension("OES_texture_float"),
                      OES_texture_float_linear: m.getExtension(
                        "OES_texture_float_linear"
                      ),
                      OES_element_index_uint: m.getExtension(
                        "OES_element_index_uint"
                      ),
                      WEBGL_draw_buffers: m.getExtension("WEBGL_draw_buffers"),
                    }),
                    (g = this.getFeatures()));
              }
              static isContextMatch(e) {
                return (
                  "undefined" != typeof WebGLRenderingContext &&
                  e instanceof WebGLRenderingContext
                );
              }
              static getIsTextureFloat() {
                return Boolean(f.OES_texture_float);
              }
              static getIsDrawBuffers() {
                return Boolean(f.WEBGL_draw_buffers);
              }
              static getChannelCount() {
                return f.WEBGL_draw_buffers
                  ? m.getParameter(f.WEBGL_draw_buffers.MAX_DRAW_BUFFERS_WEBGL)
                  : 1;
              }
              static getMaxTextureSize() {
                return m.getParameter(m.MAX_TEXTURE_SIZE);
              }
              static lookupKernelValueType(e, t, r, n) {
                return c(e, t, r, n);
              }
              static get testCanvas() {
                return d;
              }
              static get testContext() {
                return m;
              }
              static get features() {
                return g;
              }
              static get fragmentShader() {
                return u;
              }
              static get vertexShader() {
                return l;
              }
              constructor(e, t) {
                super(e, t),
                  (this.program = null),
                  (this.pipeline = t.pipeline),
                  (this.endianness = a.systemEndianness()),
                  (this.extensions = {}),
                  (this.argumentTextureCount = 0),
                  (this.constantTextureCount = 0),
                  (this.fragShader = null),
                  (this.vertShader = null),
                  (this.drawBuffersMap = null),
                  (this.maxTexSize = null),
                  (this.onRequestSwitchKernel = null),
                  (this.texture = null),
                  (this.mappedTextures = null),
                  this.mergeSettings(e.settings || t),
                  (this.threadDim = null),
                  (this.framebuffer = null),
                  (this.buffer = null),
                  (this.textureCache = []),
                  (this.programUniformLocationCache = {}),
                  (this.uniform1fCache = {}),
                  (this.uniform1iCache = {}),
                  (this.uniform2fCache = {}),
                  (this.uniform2fvCache = {}),
                  (this.uniform2ivCache = {}),
                  (this.uniform3fvCache = {}),
                  (this.uniform3ivCache = {}),
                  (this.uniform4fvCache = {}),
                  (this.uniform4ivCache = {});
              }
              initCanvas() {
                if ("undefined" != typeof document) {
                  const e = document.createElement("canvas");
                  return (e.width = 2), (e.height = 2), e;
                }
                if ("undefined" != typeof OffscreenCanvas)
                  return new OffscreenCanvas(0, 0);
              }
              initContext() {
                const e = { alpha: !1, depth: !1, antialias: !1 };
                return (
                  this.canvas.getContext("webgl", e) ||
                  this.canvas.getContext("experimental-webgl", e)
                );
              }
              initPlugins(e) {
                const t = [],
                  { source: r } = this;
                if ("string" == typeof r)
                  for (let e = 0; e < x.length; e++) {
                    const n = x[e];
                    r.match(n.functionMatch) && t.push(n);
                  }
                else if ("object" == typeof r && e.pluginNames)
                  for (let r = 0; r < x.length; r++) {
                    const n = x[r];
                    e.pluginNames.some((e) => e === n.name) && t.push(n);
                  }
                return t;
              }
              initExtensions() {
                this.extensions = {
                  OES_texture_float:
                    this.context.getExtension("OES_texture_float"),
                  OES_texture_float_linear: this.context.getExtension(
                    "OES_texture_float_linear"
                  ),
                  OES_element_index_uint: this.context.getExtension(
                    "OES_element_index_uint"
                  ),
                  WEBGL_draw_buffers:
                    this.context.getExtension("WEBGL_draw_buffers"),
                  WEBGL_color_buffer_float: this.context.getExtension(
                    "WEBGL_color_buffer_float"
                  ),
                };
              }
              validateSettings(e) {
                if (!this.validate)
                  return void (this.texSize = a.getKernelTextureSize(
                    {
                      optimizeFloatMemory: this.optimizeFloatMemory,
                      precision: this.precision,
                    },
                    this.output
                  ));
                const { features: t } = this.constructor;
                if (!0 === this.optimizeFloatMemory && !t.isTextureFloat)
                  throw new Error("Float textures are not supported");
                if ("single" === this.precision && !t.isFloatRead)
                  throw new Error("Single precision not supported");
                if (
                  (!this.graphical &&
                    null === this.precision &&
                    t.isTextureFloat &&
                    (this.precision = t.isFloatRead ? "single" : "unsigned"),
                  this.subKernels &&
                    this.subKernels.length > 0 &&
                    !this.extensions.WEBGL_draw_buffers)
                )
                  throw new Error(
                    "could not instantiate draw buffers extension"
                  );
                if (
                  (null === this.fixIntegerDivisionAccuracy
                    ? (this.fixIntegerDivisionAccuracy =
                        !t.isIntegerDivisionAccurate)
                    : this.fixIntegerDivisionAccuracy &&
                      t.isIntegerDivisionAccurate &&
                      (this.fixIntegerDivisionAccuracy = !1),
                  this.checkOutput(),
                  !this.output || 0 === this.output.length)
                ) {
                  if (1 !== e.length)
                    throw new Error(
                      "Auto output only supported for kernels with only one input"
                    );
                  const t = a.getVariableType(e[0], this.strictIntegers);
                  switch (t) {
                    case "Array":
                      this.output = a.getDimensions(t);
                      break;
                    case "NumberTexture":
                    case "MemoryOptimizedNumberTexture":
                    case "ArrayTexture(1)":
                    case "ArrayTexture(2)":
                    case "ArrayTexture(3)":
                    case "ArrayTexture(4)":
                      this.output = e[0].output;
                      break;
                    default:
                      throw new Error(
                        "Auto output not supported for input type: " + t
                      );
                  }
                }
                if (this.graphical) {
                  if (2 !== this.output.length)
                    throw new Error(
                      "Output must have 2 dimensions on graphical mode"
                    );
                  return (
                    "precision" === this.precision &&
                      ((this.precision = "unsigned"),
                      console.warn(
                        "Cannot use graphical mode and single precision at the same time"
                      )),
                    void (this.texSize = a.clone(this.output))
                  );
                }
                null === this.precision &&
                  t.isTextureFloat &&
                  (this.precision = "single"),
                  (this.texSize = a.getKernelTextureSize(
                    {
                      optimizeFloatMemory: this.optimizeFloatMemory,
                      precision: this.precision,
                    },
                    this.output
                  )),
                  this.checkTextureSize();
              }
              updateMaxTexSize() {
                const { texSize: e, canvas: t } = this;
                if (null === this.maxTexSize) {
                  let r = y.indexOf(t);
                  -1 === r &&
                    ((r = y.length), y.push(t), (b[r] = [e[0], e[1]])),
                    (this.maxTexSize = b[r]);
                }
                this.maxTexSize[0] < e[0] && (this.maxTexSize[0] = e[0]),
                  this.maxTexSize[1] < e[1] && (this.maxTexSize[1] = e[1]);
              }
              setupArguments(e) {
                (this.kernelArguments = []), (this.argumentTextureCount = 0);
                const t = null === this.argumentTypes;
                if (
                  (t && (this.argumentTypes = []),
                  (this.argumentSizes = []),
                  (this.argumentBitRatios = []),
                  e.length < this.argumentNames.length)
                )
                  throw new Error("not enough arguments for kernel");
                if (e.length > this.argumentNames.length)
                  throw new Error("too many arguments for kernel");
                const { context: r } = this;
                let n = 0;
                const i = () => this.createTexture(),
                  s = () => this.constantTextureCount + n++,
                  o = (e) => {
                    this.switchKernels({ type: "argumentMismatch", needed: e });
                  },
                  u = () =>
                    r.TEXTURE0 +
                    this.constantTextureCount +
                    this.argumentTextureCount++;
                for (let n = 0; n < e.length; n++) {
                  const l = e[n],
                    h = this.argumentNames[n];
                  let c;
                  t
                    ? ((c = a.getVariableType(l, this.strictIntegers)),
                      this.argumentTypes.push(c))
                    : (c = this.argumentTypes[n]);
                  const p = this.constructor.lookupKernelValueType(
                    c,
                    this.dynamicArguments ? "dynamic" : "static",
                    this.precision,
                    e[n]
                  );
                  if (null === p) return this.requestFallback(e);
                  const d = new p(l, {
                    name: h,
                    type: c,
                    tactic: this.tactic,
                    origin: "user",
                    context: r,
                    checkContext: this.checkContext,
                    kernel: this,
                    strictIntegers: this.strictIntegers,
                    onRequestTexture: i,
                    onRequestIndex: s,
                    onUpdateValueMismatch: o,
                    onRequestContextHandle: u,
                  });
                  this.kernelArguments.push(d),
                    d.setup(),
                    this.argumentSizes.push(d.textureSize),
                    (this.argumentBitRatios[n] = d.bitRatio);
                }
              }
              createTexture() {
                const e = this.context.createTexture();
                return this.textureCache.push(e), e;
              }
              setupConstants(e) {
                const { context: t } = this;
                (this.kernelConstants = []),
                  (this.forceUploadKernelConstants = []);
                let r = null === this.constantTypes;
                r && (this.constantTypes = {}), (this.constantBitRatios = {});
                let n = 0;
                for (const i in this.constants) {
                  const s = this.constants[i];
                  let o;
                  r
                    ? ((o = a.getVariableType(s, this.strictIntegers)),
                      (this.constantTypes[i] = o))
                    : (o = this.constantTypes[i]);
                  const u = this.constructor.lookupKernelValueType(
                    o,
                    "static",
                    this.precision,
                    s
                  );
                  if (null === u) return this.requestFallback(e);
                  const l = new u(s, {
                    name: i,
                    type: o,
                    tactic: this.tactic,
                    origin: "constants",
                    context: this.context,
                    checkContext: this.checkContext,
                    kernel: this,
                    strictIntegers: this.strictIntegers,
                    onRequestTexture: () => this.createTexture(),
                    onRequestIndex: () => n++,
                    onRequestContextHandle: () =>
                      t.TEXTURE0 + this.constantTextureCount++,
                  });
                  (this.constantBitRatios[i] = l.bitRatio),
                    this.kernelConstants.push(l),
                    l.setup(),
                    l.forceUploadEachRun &&
                      this.forceUploadKernelConstants.push(l);
                }
              }
              build() {
                if (this.built) return;
                if (
                  (this.initExtensions(),
                  this.validateSettings(arguments),
                  this.setupConstants(arguments),
                  this.fallbackRequested)
                )
                  return;
                if ((this.setupArguments(arguments), this.fallbackRequested))
                  return;
                this.updateMaxTexSize(), this.translateSource();
                const e = this.pickRenderStrategy(arguments);
                if (e) return e;
                const { texSize: t, context: r, canvas: n } = this;
                r.enable(r.SCISSOR_TEST),
                  this.pipeline && this.precision,
                  r.viewport(0, 0, this.maxTexSize[0], this.maxTexSize[1]),
                  (n.width = this.maxTexSize[0]),
                  (n.height = this.maxTexSize[1]);
                const i = (this.threadDim = Array.from(this.output));
                for (; i.length < 3; ) i.push(1);
                const s = this.getVertexShader(arguments),
                  a = r.createShader(r.VERTEX_SHADER);
                r.shaderSource(a, s), r.compileShader(a), (this.vertShader = a);
                const o = this.getFragmentShader(arguments),
                  u = r.createShader(r.FRAGMENT_SHADER);
                if (
                  (r.shaderSource(u, o),
                  r.compileShader(u),
                  (this.fragShader = u),
                  this.debug &&
                    (console.log("GLSL Shader Output:"), console.log(o)),
                  !r.getShaderParameter(a, r.COMPILE_STATUS))
                )
                  throw new Error(
                    "Error compiling vertex shader: " + r.getShaderInfoLog(a)
                  );
                if (!r.getShaderParameter(u, r.COMPILE_STATUS))
                  throw new Error(
                    "Error compiling fragment shader: " + r.getShaderInfoLog(u)
                  );
                const l = (this.program = r.createProgram());
                r.attachShader(l, a),
                  r.attachShader(l, u),
                  r.linkProgram(l),
                  (this.framebuffer = r.createFramebuffer()),
                  (this.framebuffer.width = t[0]),
                  (this.framebuffer.height = t[1]),
                  (this.rawValueFramebuffers = {});
                const h = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
                  c = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]),
                  p = h.byteLength;
                let d = this.buffer;
                d
                  ? r.bindBuffer(r.ARRAY_BUFFER, d)
                  : ((d = this.buffer = r.createBuffer()),
                    r.bindBuffer(r.ARRAY_BUFFER, d),
                    r.bufferData(
                      r.ARRAY_BUFFER,
                      h.byteLength + c.byteLength,
                      r.STATIC_DRAW
                    )),
                  r.bufferSubData(r.ARRAY_BUFFER, 0, h),
                  r.bufferSubData(r.ARRAY_BUFFER, p, c);
                const m = r.getAttribLocation(this.program, "aPos");
                r.enableVertexAttribArray(m),
                  r.vertexAttribPointer(m, 2, r.FLOAT, !1, 0, 0);
                const f = r.getAttribLocation(this.program, "aTexCoord");
                r.enableVertexAttribArray(f),
                  r.vertexAttribPointer(f, 2, r.FLOAT, !1, 0, p),
                  r.bindFramebuffer(r.FRAMEBUFFER, this.framebuffer);
                let g = 0;
                r.useProgram(this.program);
                for (let e in this.constants)
                  this.kernelConstants[g++].updateValue(this.constants[e]);
                this._setupOutputTexture(),
                  null !== this.subKernels &&
                    this.subKernels.length > 0 &&
                    ((this._mappedTextureSwitched = {}),
                    this._setupSubOutputTextures()),
                  this.buildSignature(arguments),
                  (this.built = !0);
              }
              translateSource() {
                const e = i.fromKernel(this, s, {
                  fixIntegerDivisionAccuracy: this.fixIntegerDivisionAccuracy,
                });
                (this.translatedSource = e.getPrototypeString("kernel")),
                  this.setupReturnTypes(e);
              }
              setupReturnTypes(e) {
                if (
                  (this.graphical ||
                    this.returnType ||
                    (this.returnType = e.getKernelResultType()),
                  this.subKernels && this.subKernels.length > 0)
                )
                  for (let t = 0; t < this.subKernels.length; t++) {
                    const r = this.subKernels[t];
                    r.returnType ||
                      (r.returnType = e.getSubKernelResultType(t));
                  }
              }
              run() {
                const {
                  kernelArguments: e,
                  texSize: t,
                  forceUploadKernelConstants: r,
                  context: n,
                } = this;
                n.useProgram(this.program),
                  n.scissor(0, 0, t[0], t[1]),
                  this.dynamicOutput &&
                    (this.setUniform3iv(
                      "uOutputDim",
                      new Int32Array(this.threadDim)
                    ),
                    this.setUniform2iv("uTexSize", t)),
                  this.setUniform2f(
                    "ratio",
                    t[0] / this.maxTexSize[0],
                    t[1] / this.maxTexSize[1]
                  );
                for (let e = 0; e < r.length; e++) {
                  const t = r[e];
                  if (
                    (t.updateValue(this.constants[t.name]),
                    this.switchingKernels)
                  )
                    return;
                }
                for (let t = 0; t < e.length; t++)
                  if ((e[t].updateValue(arguments[t]), this.switchingKernels))
                    return;
                if (this.plugins)
                  for (let e = 0; e < this.plugins.length; e++) {
                    const t = this.plugins[e];
                    t.onBeforeRun && t.onBeforeRun(this);
                  }
                if (this.graphical)
                  return this.pipeline
                    ? (n.bindRenderbuffer(n.RENDERBUFFER, null),
                      n.bindFramebuffer(n.FRAMEBUFFER, this.framebuffer),
                      this.immutable && this._replaceOutputTexture(),
                      n.drawArrays(n.TRIANGLE_STRIP, 0, 4),
                      this.immutable ? this.texture.clone() : this.texture)
                    : (n.bindRenderbuffer(n.RENDERBUFFER, null),
                      n.bindFramebuffer(n.FRAMEBUFFER, null),
                      void n.drawArrays(n.TRIANGLE_STRIP, 0, 4));
                n.bindFramebuffer(n.FRAMEBUFFER, this.framebuffer),
                  this.immutable && this._replaceOutputTexture(),
                  null !== this.subKernels &&
                    (this.immutable && this._replaceSubOutputTextures(),
                    this.drawBuffers()),
                  n.drawArrays(n.TRIANGLE_STRIP, 0, 4);
              }
              drawBuffers() {
                this.extensions.WEBGL_draw_buffers.drawBuffersWEBGL(
                  this.drawBuffersMap
                );
              }
              getInternalFormat() {
                return this.context.RGBA;
              }
              getTextureFormat() {
                const { context: e } = this;
                switch (this.getInternalFormat()) {
                  case e.RGBA:
                    return e.RGBA;
                  default:
                    throw new Error("Unknown internal format");
                }
              }
              _replaceOutputTexture() {
                if (this.texture.beforeMutate() || this._textureSwitched) {
                  const e = this.context;
                  e.framebufferTexture2D(
                    e.FRAMEBUFFER,
                    e.COLOR_ATTACHMENT0,
                    e.TEXTURE_2D,
                    this.texture.texture,
                    0
                  ),
                    (this._textureSwitched = !1);
                }
              }
              _setupOutputTexture() {
                const e = this.context,
                  t = this.texSize;
                if (this.texture)
                  return void e.framebufferTexture2D(
                    e.FRAMEBUFFER,
                    e.COLOR_ATTACHMENT0,
                    e.TEXTURE_2D,
                    this.texture.texture,
                    0
                  );
                const r = this.createTexture();
                e.activeTexture(
                  e.TEXTURE0 +
                    this.constantTextureCount +
                    this.argumentTextureCount
                ),
                  e.bindTexture(e.TEXTURE_2D, r),
                  e.texParameteri(
                    e.TEXTURE_2D,
                    e.TEXTURE_WRAP_S,
                    e.CLAMP_TO_EDGE
                  ),
                  e.texParameteri(
                    e.TEXTURE_2D,
                    e.TEXTURE_WRAP_T,
                    e.CLAMP_TO_EDGE
                  ),
                  e.texParameteri(
                    e.TEXTURE_2D,
                    e.TEXTURE_MIN_FILTER,
                    e.NEAREST
                  ),
                  e.texParameteri(
                    e.TEXTURE_2D,
                    e.TEXTURE_MAG_FILTER,
                    e.NEAREST
                  );
                const n = this.getInternalFormat();
                "single" === this.precision
                  ? e.texImage2D(
                      e.TEXTURE_2D,
                      0,
                      n,
                      t[0],
                      t[1],
                      0,
                      e.RGBA,
                      e.FLOAT,
                      null
                    )
                  : e.texImage2D(
                      e.TEXTURE_2D,
                      0,
                      n,
                      t[0],
                      t[1],
                      0,
                      n,
                      e.UNSIGNED_BYTE,
                      null
                    ),
                  e.framebufferTexture2D(
                    e.FRAMEBUFFER,
                    e.COLOR_ATTACHMENT0,
                    e.TEXTURE_2D,
                    r,
                    0
                  ),
                  (this.texture = new this.TextureConstructor({
                    texture: r,
                    size: t,
                    dimensions: this.threadDim,
                    output: this.output,
                    context: this.context,
                    internalFormat: this.getInternalFormat(),
                    textureFormat: this.getTextureFormat(),
                    kernel: this,
                  }));
              }
              _replaceSubOutputTextures() {
                const e = this.context;
                for (let t = 0; t < this.mappedTextures.length; t++) {
                  const r = this.mappedTextures[t];
                  (r.beforeMutate() || this._mappedTextureSwitched[t]) &&
                    (e.framebufferTexture2D(
                      e.FRAMEBUFFER,
                      e.COLOR_ATTACHMENT0 + t + 1,
                      e.TEXTURE_2D,
                      r.texture,
                      0
                    ),
                    (this._mappedTextureSwitched[t] = !1));
                }
              }
              _setupSubOutputTextures() {
                const e = this.context;
                if (this.mappedTextures) {
                  for (let t = 0; t < this.subKernels.length; t++)
                    e.framebufferTexture2D(
                      e.FRAMEBUFFER,
                      e.COLOR_ATTACHMENT0 + t + 1,
                      e.TEXTURE_2D,
                      this.mappedTextures[t].texture,
                      0
                    );
                  return;
                }
                const t = this.texSize;
                (this.drawBuffersMap = [e.COLOR_ATTACHMENT0]),
                  (this.mappedTextures = []);
                for (let r = 0; r < this.subKernels.length; r++) {
                  const n = this.createTexture();
                  this.drawBuffersMap.push(e.COLOR_ATTACHMENT0 + r + 1),
                    e.activeTexture(
                      e.TEXTURE0 +
                        this.constantTextureCount +
                        this.argumentTextureCount +
                        r
                    ),
                    e.bindTexture(e.TEXTURE_2D, n),
                    e.texParameteri(
                      e.TEXTURE_2D,
                      e.TEXTURE_WRAP_S,
                      e.CLAMP_TO_EDGE
                    ),
                    e.texParameteri(
                      e.TEXTURE_2D,
                      e.TEXTURE_WRAP_T,
                      e.CLAMP_TO_EDGE
                    ),
                    e.texParameteri(
                      e.TEXTURE_2D,
                      e.TEXTURE_MIN_FILTER,
                      e.NEAREST
                    ),
                    e.texParameteri(
                      e.TEXTURE_2D,
                      e.TEXTURE_MAG_FILTER,
                      e.NEAREST
                    ),
                    "single" === this.precision
                      ? e.texImage2D(
                          e.TEXTURE_2D,
                          0,
                          e.RGBA,
                          t[0],
                          t[1],
                          0,
                          e.RGBA,
                          e.FLOAT,
                          null
                        )
                      : e.texImage2D(
                          e.TEXTURE_2D,
                          0,
                          e.RGBA,
                          t[0],
                          t[1],
                          0,
                          e.RGBA,
                          e.UNSIGNED_BYTE,
                          null
                        ),
                    e.framebufferTexture2D(
                      e.FRAMEBUFFER,
                      e.COLOR_ATTACHMENT0 + r + 1,
                      e.TEXTURE_2D,
                      n,
                      0
                    ),
                    this.mappedTextures.push(
                      new this.TextureConstructor({
                        texture: n,
                        size: t,
                        dimensions: this.threadDim,
                        output: this.output,
                        context: this.context,
                        internalFormat: this.getInternalFormat(),
                        textureFormat: this.getTextureFormat(),
                        kernel: this,
                      })
                    );
                }
              }
              setUniform1f(e, t) {
                if (
                  this.uniform1fCache.hasOwnProperty(e) &&
                  t === this.uniform1fCache[e]
                )
                  return;
                this.uniform1fCache[e] = t;
                const r = this.getUniformLocation(e);
                this.context.uniform1f(r, t);
              }
              setUniform1i(e, t) {
                if (
                  this.uniform1iCache.hasOwnProperty(e) &&
                  t === this.uniform1iCache[e]
                )
                  return;
                this.uniform1iCache[e] = t;
                const r = this.getUniformLocation(e);
                this.context.uniform1i(r, t);
              }
              setUniform2f(e, t, r) {
                if (this.uniform2fCache.hasOwnProperty(e)) {
                  const n = this.uniform2fCache[e];
                  if (t === n[0] && r === n[1]) return;
                }
                this.uniform2fCache[e] = [t, r];
                const n = this.getUniformLocation(e);
                this.context.uniform2f(n, t, r);
              }
              setUniform2fv(e, t) {
                if (this.uniform2fvCache.hasOwnProperty(e)) {
                  const r = this.uniform2fvCache[e];
                  if (t[0] === r[0] && t[1] === r[1]) return;
                }
                this.uniform2fvCache[e] = t;
                const r = this.getUniformLocation(e);
                this.context.uniform2fv(r, t);
              }
              setUniform2iv(e, t) {
                if (this.uniform2ivCache.hasOwnProperty(e)) {
                  const r = this.uniform2ivCache[e];
                  if (t[0] === r[0] && t[1] === r[1]) return;
                }
                this.uniform2ivCache[e] = t;
                const r = this.getUniformLocation(e);
                this.context.uniform2iv(r, t);
              }
              setUniform3fv(e, t) {
                if (this.uniform3fvCache.hasOwnProperty(e)) {
                  const r = this.uniform3fvCache[e];
                  if (t[0] === r[0] && t[1] === r[1] && t[2] === r[2]) return;
                }
                this.uniform3fvCache[e] = t;
                const r = this.getUniformLocation(e);
                this.context.uniform3fv(r, t);
              }
              setUniform3iv(e, t) {
                if (this.uniform3ivCache.hasOwnProperty(e)) {
                  const r = this.uniform3ivCache[e];
                  if (t[0] === r[0] && t[1] === r[1] && t[2] === r[2]) return;
                }
                this.uniform3ivCache[e] = t;
                const r = this.getUniformLocation(e);
                this.context.uniform3iv(r, t);
              }
              setUniform4fv(e, t) {
                if (this.uniform4fvCache.hasOwnProperty(e)) {
                  const r = this.uniform4fvCache[e];
                  if (
                    t[0] === r[0] &&
                    t[1] === r[1] &&
                    t[2] === r[2] &&
                    t[3] === r[3]
                  )
                    return;
                }
                this.uniform4fvCache[e] = t;
                const r = this.getUniformLocation(e);
                this.context.uniform4fv(r, t);
              }
              setUniform4iv(e, t) {
                if (this.uniform4ivCache.hasOwnProperty(e)) {
                  const r = this.uniform4ivCache[e];
                  if (
                    t[0] === r[0] &&
                    t[1] === r[1] &&
                    t[2] === r[2] &&
                    t[3] === r[3]
                  )
                    return;
                }
                this.uniform4ivCache[e] = t;
                const r = this.getUniformLocation(e);
                this.context.uniform4iv(r, t);
              }
              getUniformLocation(e) {
                return this.programUniformLocationCache.hasOwnProperty(e)
                  ? this.programUniformLocationCache[e]
                  : (this.programUniformLocationCache[e] =
                      this.context.getUniformLocation(this.program, e));
              }
              _getFragShaderArtifactMap(e) {
                return {
                  HEADER: this._getHeaderString(),
                  LOOP_MAX: this._getLoopMaxString(),
                  PLUGINS: this._getPluginsString(),
                  CONSTANTS: this._getConstantsString(),
                  DECODE32_ENDIANNESS: this._getDecode32EndiannessString(),
                  ENCODE32_ENDIANNESS: this._getEncode32EndiannessString(),
                  DIVIDE_WITH_INTEGER_CHECK:
                    this._getDivideWithIntegerCheckString(),
                  INJECTED_NATIVE: this._getInjectedNative(),
                  MAIN_CONSTANTS: this._getMainConstantsString(),
                  MAIN_ARGUMENTS: this._getMainArgumentsString(e),
                  KERNEL: this.getKernelString(),
                  MAIN_RESULT: this.getMainResultString(),
                  FLOAT_TACTIC_DECLARATION: this.getFloatTacticDeclaration(),
                  INT_TACTIC_DECLARATION: this.getIntTacticDeclaration(),
                  SAMPLER_2D_TACTIC_DECLARATION:
                    this.getSampler2DTacticDeclaration(),
                  SAMPLER_2D_ARRAY_TACTIC_DECLARATION:
                    this.getSampler2DArrayTacticDeclaration(),
                };
              }
              _getVertShaderArtifactMap(e) {
                return {
                  FLOAT_TACTIC_DECLARATION: this.getFloatTacticDeclaration(),
                  INT_TACTIC_DECLARATION: this.getIntTacticDeclaration(),
                  SAMPLER_2D_TACTIC_DECLARATION:
                    this.getSampler2DTacticDeclaration(),
                  SAMPLER_2D_ARRAY_TACTIC_DECLARATION:
                    this.getSampler2DArrayTacticDeclaration(),
                };
              }
              _getHeaderString() {
                return null !== this.subKernels
                  ? "#extension GL_EXT_draw_buffers : require\n"
                  : "";
              }
              _getLoopMaxString() {
                return this.loopMaxIterations
                  ? ` ${parseInt(this.loopMaxIterations)};\n`
                  : " 1000;\n";
              }
              _getPluginsString() {
                return this.plugins
                  ? this.plugins
                      .map((e) =>
                        e.source && this.source.match(e.functionMatch)
                          ? e.source
                          : ""
                      )
                      .join("\n")
                  : "\n";
              }
              _getConstantsString() {
                const e = [],
                  { threadDim: t, texSize: r } = this;
                return (
                  this.dynamicOutput
                    ? e.push(
                        "uniform ivec3 uOutputDim",
                        "uniform ivec2 uTexSize"
                      )
                    : e.push(
                        `ivec3 uOutputDim = ivec3(${t[0]}, ${t[1]}, ${t[2]})`,
                        `ivec2 uTexSize = ivec2(${r[0]}, ${r[1]})`
                      ),
                  a.linesToString(e)
                );
              }
              _getTextureCoordinate() {
                const e = this.subKernels;
                return null === e || e.length < 1
                  ? "varying vec2 vTexCoord;\n"
                  : "out vec2 vTexCoord;\n";
              }
              _getDecode32EndiannessString() {
                return "LE" === this.endianness
                  ? ""
                  : "  texel.rgba = texel.abgr;\n";
              }
              _getEncode32EndiannessString() {
                return "LE" === this.endianness
                  ? ""
                  : "  texel.rgba = texel.abgr;\n";
              }
              _getDivideWithIntegerCheckString() {
                return this.fixIntegerDivisionAccuracy
                  ? "float divWithIntCheck(float x, float y) {\n  if (floor(x) == x && floor(y) == y && integerMod(x, y) == 0.0) {\n    return float(int(x) / int(y));\n  }\n  return x / y;\n}\n\nfloat integerCorrectionModulo(float number, float divisor) {\n  if (number < 0.0) {\n    number = abs(number);\n    if (divisor < 0.0) {\n      divisor = abs(divisor);\n    }\n    return -(number - (divisor * floor(divWithIntCheck(number, divisor))));\n  }\n  if (divisor < 0.0) {\n    divisor = abs(divisor);\n  }\n  return number - (divisor * floor(divWithIntCheck(number, divisor)));\n}"
                  : "";
              }
              _getMainArgumentsString(e) {
                const t = [],
                  { argumentNames: r } = this;
                for (let n = 0; n < r.length; n++)
                  t.push(this.kernelArguments[n].getSource(e[n]));
                return t.join("");
              }
              _getInjectedNative() {
                return this.injectedNative || "";
              }
              _getMainConstantsString() {
                const e = [],
                  { constants: t } = this;
                if (t) {
                  let r = 0;
                  for (const n in t)
                    this.constants.hasOwnProperty(n) &&
                      e.push(
                        this.kernelConstants[r++].getSource(this.constants[n])
                      );
                }
                return e.join("");
              }
              getRawValueFramebuffer(e, t) {
                if (
                  (this.rawValueFramebuffers[e] ||
                    (this.rawValueFramebuffers[e] = {}),
                  !this.rawValueFramebuffers[e][t])
                ) {
                  const r = this.context.createFramebuffer();
                  (r.width = e),
                    (r.height = t),
                    (this.rawValueFramebuffers[e][t] = r);
                }
                return this.rawValueFramebuffers[e][t];
              }
              getKernelResultDeclaration() {
                switch (this.returnType) {
                  case "Array(2)":
                    return "vec2 kernelResult";
                  case "Array(3)":
                    return "vec3 kernelResult";
                  case "Array(4)":
                    return "vec4 kernelResult";
                  case "LiteralInteger":
                  case "Float":
                  case "Number":
                  case "Integer":
                    return "float kernelResult";
                  default:
                    if (this.graphical) return "float kernelResult";
                    throw new Error(
                      `unrecognized output type "${this.returnType}"`
                    );
                }
              }
              getKernelString() {
                const e = [this.getKernelResultDeclaration()],
                  { subKernels: t } = this;
                if (null !== t)
                  switch (this.returnType) {
                    case "Number":
                    case "Float":
                    case "Integer":
                      for (let r = 0; r < t.length; r++) {
                        const n = t[r];
                        e.push(
                          "Integer" === n.returnType
                            ? `int subKernelResult_${n.name} = 0`
                            : `float subKernelResult_${n.name} = 0.0`
                        );
                      }
                      break;
                    case "Array(2)":
                      for (let r = 0; r < t.length; r++)
                        e.push(`vec2 subKernelResult_${t[r].name}`);
                      break;
                    case "Array(3)":
                      for (let r = 0; r < t.length; r++)
                        e.push(`vec3 subKernelResult_${t[r].name}`);
                      break;
                    case "Array(4)":
                      for (let r = 0; r < t.length; r++)
                        e.push(`vec4 subKernelResult_${t[r].name}`);
                  }
                return a.linesToString(e) + this.translatedSource;
              }
              getMainResultGraphical() {
                return a.linesToString([
                  "  threadId = indexTo3D(index, uOutputDim)",
                  "  kernel()",
                  "  gl_FragColor = actualColor",
                ]);
              }
              getMainResultPackedPixels() {
                switch (this.returnType) {
                  case "LiteralInteger":
                  case "Number":
                  case "Integer":
                  case "Float":
                    return (
                      this.getMainResultKernelPackedPixels() +
                      this.getMainResultSubKernelPackedPixels()
                    );
                  default:
                    throw new Error(
                      `packed output only usable with Numbers, "${this.returnType}" specified`
                    );
                }
              }
              getMainResultKernelPackedPixels() {
                return a.linesToString([
                  "  threadId = indexTo3D(index, uOutputDim)",
                  "  kernel()",
                  `  gl_FragData[0] = ${
                    this.useLegacyEncoder ? "legacyEncode32" : "encode32"
                  }(kernelResult)`,
                ]);
              }
              getMainResultSubKernelPackedPixels() {
                const e = [];
                if (!this.subKernels) return "";
                for (let t = 0; t < this.subKernels.length; t++)
                  "Integer" === this.subKernels[t].returnType
                    ? e.push(
                        `  gl_FragData[${t + 1}] = ${
                          this.useLegacyEncoder ? "legacyEncode32" : "encode32"
                        }(float(subKernelResult_${this.subKernels[t].name}))`
                      )
                    : e.push(
                        `  gl_FragData[${t + 1}] = ${
                          this.useLegacyEncoder ? "legacyEncode32" : "encode32"
                        }(subKernelResult_${this.subKernels[t].name})`
                      );
                return a.linesToString(e);
              }
              getMainResultMemoryOptimizedFloats() {
                const e = ["  index *= 4"];
                switch (this.returnType) {
                  case "Number":
                  case "Integer":
                  case "Float":
                    const t = ["r", "g", "b", "a"];
                    for (let r = 0; r < t.length; r++) {
                      const n = t[r];
                      this.getMainResultKernelMemoryOptimizedFloats(e, n),
                        this.getMainResultSubKernelMemoryOptimizedFloats(e, n),
                        r + 1 < t.length && e.push("  index += 1");
                    }
                    break;
                  default:
                    throw new Error(
                      `optimized output only usable with Numbers, ${this.returnType} specified`
                    );
                }
                return a.linesToString(e);
              }
              getMainResultKernelMemoryOptimizedFloats(e, t) {
                e.push(
                  "  threadId = indexTo3D(index, uOutputDim)",
                  "  kernel()",
                  `  gl_FragData[0].${t} = kernelResult`
                );
              }
              getMainResultSubKernelMemoryOptimizedFloats(e, t) {
                if (!this.subKernels) return e;
                for (let r = 0; r < this.subKernels.length; r++)
                  "Integer" === this.subKernels[r].returnType
                    ? e.push(
                        `  gl_FragData[${r + 1}].${t} = float(subKernelResult_${
                          this.subKernels[r].name
                        })`
                      )
                    : e.push(
                        `  gl_FragData[${r + 1}].${t} = subKernelResult_${
                          this.subKernels[r].name
                        }`
                      );
              }
              getMainResultKernelNumberTexture() {
                return [
                  "  threadId = indexTo3D(index, uOutputDim)",
                  "  kernel()",
                  "  gl_FragData[0][0] = kernelResult",
                ];
              }
              getMainResultSubKernelNumberTexture() {
                const e = [];
                if (!this.subKernels) return e;
                for (let t = 0; t < this.subKernels.length; ++t) {
                  const r = this.subKernels[t];
                  "Integer" === r.returnType
                    ? e.push(
                        `  gl_FragData[${t + 1}][0] = float(subKernelResult_${
                          r.name
                        })`
                      )
                    : e.push(
                        `  gl_FragData[${t + 1}][0] = subKernelResult_${r.name}`
                      );
                }
                return e;
              }
              getMainResultKernelArray2Texture() {
                return [
                  "  threadId = indexTo3D(index, uOutputDim)",
                  "  kernel()",
                  "  gl_FragData[0][0] = kernelResult[0]",
                  "  gl_FragData[0][1] = kernelResult[1]",
                ];
              }
              getMainResultSubKernelArray2Texture() {
                const e = [];
                if (!this.subKernels) return e;
                for (let t = 0; t < this.subKernels.length; ++t)
                  e.push(
                    `  gl_FragData[${t + 1}][0] = subKernelResult_${
                      this.subKernels[t].name
                    }[0]`,
                    `  gl_FragData[${t + 1}][1] = subKernelResult_${
                      this.subKernels[t].name
                    }[1]`
                  );
                return e;
              }
              getMainResultKernelArray3Texture() {
                return [
                  "  threadId = indexTo3D(index, uOutputDim)",
                  "  kernel()",
                  "  gl_FragData[0][0] = kernelResult[0]",
                  "  gl_FragData[0][1] = kernelResult[1]",
                  "  gl_FragData[0][2] = kernelResult[2]",
                ];
              }
              getMainResultSubKernelArray3Texture() {
                const e = [];
                if (!this.subKernels) return e;
                for (let t = 0; t < this.subKernels.length; ++t)
                  e.push(
                    `  gl_FragData[${t + 1}][0] = subKernelResult_${
                      this.subKernels[t].name
                    }[0]`,
                    `  gl_FragData[${t + 1}][1] = subKernelResult_${
                      this.subKernels[t].name
                    }[1]`,
                    `  gl_FragData[${t + 1}][2] = subKernelResult_${
                      this.subKernels[t].name
                    }[2]`
                  );
                return e;
              }
              getMainResultKernelArray4Texture() {
                return [
                  "  threadId = indexTo3D(index, uOutputDim)",
                  "  kernel()",
                  "  gl_FragData[0] = kernelResult",
                ];
              }
              getMainResultSubKernelArray4Texture() {
                const e = [];
                if (!this.subKernels) return e;
                switch (this.returnType) {
                  case "Number":
                  case "Float":
                  case "Integer":
                    for (let t = 0; t < this.subKernels.length; ++t)
                      "Integer" === this.subKernels[t].returnType
                        ? e.push(
                            `  gl_FragData[${t + 1}] = float(subKernelResult_${
                              this.subKernels[t].name
                            })`
                          )
                        : e.push(
                            `  gl_FragData[${t + 1}] = subKernelResult_${
                              this.subKernels[t].name
                            }`
                          );
                    break;
                  case "Array(2)":
                    for (let t = 0; t < this.subKernels.length; ++t)
                      e.push(
                        `  gl_FragData[${t + 1}][0] = subKernelResult_${
                          this.subKernels[t].name
                        }[0]`,
                        `  gl_FragData[${t + 1}][1] = subKernelResult_${
                          this.subKernels[t].name
                        }[1]`
                      );
                    break;
                  case "Array(3)":
                    for (let t = 0; t < this.subKernels.length; ++t)
                      e.push(
                        `  gl_FragData[${t + 1}][0] = subKernelResult_${
                          this.subKernels[t].name
                        }[0]`,
                        `  gl_FragData[${t + 1}][1] = subKernelResult_${
                          this.subKernels[t].name
                        }[1]`,
                        `  gl_FragData[${t + 1}][2] = subKernelResult_${
                          this.subKernels[t].name
                        }[2]`
                      );
                    break;
                  case "Array(4)":
                    for (let t = 0; t < this.subKernels.length; ++t)
                      e.push(
                        `  gl_FragData[${t + 1}][0] = subKernelResult_${
                          this.subKernels[t].name
                        }[0]`,
                        `  gl_FragData[${t + 1}][1] = subKernelResult_${
                          this.subKernels[t].name
                        }[1]`,
                        `  gl_FragData[${t + 1}][2] = subKernelResult_${
                          this.subKernels[t].name
                        }[2]`,
                        `  gl_FragData[${t + 1}][3] = subKernelResult_${
                          this.subKernels[t].name
                        }[3]`
                      );
                }
                return e;
              }
              replaceArtifacts(e, t) {
                return e.replace(
                  /[ ]*__([A-Z]+[0-9]*([_]?[A-Z]*[0-9]?)*)__;\n/g,
                  (e, r) => {
                    if (t.hasOwnProperty(r)) return t[r];
                    throw `unhandled artifact ${r}`;
                  }
                );
              }
              getFragmentShader(e) {
                return null !== this.compiledFragmentShader
                  ? this.compiledFragmentShader
                  : (this.compiledFragmentShader = this.replaceArtifacts(
                      this.constructor.fragmentShader,
                      this._getFragShaderArtifactMap(e)
                    ));
              }
              getVertexShader(e) {
                return null !== this.compiledVertexShader
                  ? this.compiledVertexShader
                  : (this.compiledVertexShader = this.replaceArtifacts(
                      this.constructor.vertexShader,
                      this._getVertShaderArtifactMap(e)
                    ));
              }
              toString() {
                const e = a.linesToString(["const gl = context"]);
                return h(this.constructor, arguments, this, e);
              }
              destroy(e) {
                if (!this.context) return;
                this.buffer && this.context.deleteBuffer(this.buffer),
                  this.framebuffer &&
                    this.context.deleteFramebuffer(this.framebuffer);
                for (const e in this.rawValueFramebuffers) {
                  for (const t in this.rawValueFramebuffers[e])
                    this.context.deleteFramebuffer(
                      this.rawValueFramebuffers[e][t]
                    ),
                      delete this.rawValueFramebuffers[e][t];
                  delete this.rawValueFramebuffers[e];
                }
                if (
                  (this.vertShader &&
                    this.context.deleteShader(this.vertShader),
                  this.fragShader && this.context.deleteShader(this.fragShader),
                  this.program && this.context.deleteProgram(this.program),
                  this.texture)
                ) {
                  this.texture.delete();
                  const e = this.textureCache.indexOf(this.texture.texture);
                  e > -1 && this.textureCache.splice(e, 1),
                    (this.texture = null);
                }
                if (this.mappedTextures && this.mappedTextures.length) {
                  for (let e = 0; e < this.mappedTextures.length; e++) {
                    const t = this.mappedTextures[e];
                    t.delete();
                    const r = this.textureCache.indexOf(t.texture);
                    r > -1 && this.textureCache.splice(r, 1);
                  }
                  this.mappedTextures = null;
                }
                if (this.kernelArguments)
                  for (let e = 0; e < this.kernelArguments.length; e++)
                    this.kernelArguments[e].destroy();
                if (this.kernelConstants)
                  for (let e = 0; e < this.kernelConstants.length; e++)
                    this.kernelConstants[e].destroy();
                for (; this.textureCache.length > 0; ) {
                  const e = this.textureCache.pop();
                  this.context.deleteTexture(e);
                }
                if (e) {
                  const e = y.indexOf(this.canvas);
                  e >= 0 && ((y[e] = null), (b[e] = null));
                }
                if (
                  (this.destroyExtensions(),
                  delete this.context,
                  delete this.canvas,
                  !this.gpu)
                )
                  return;
                const t = this.gpu.kernels.indexOf(this);
                -1 !== t && this.gpu.kernels.splice(t, 1);
              }
              destroyExtensions() {
                (this.extensions.OES_texture_float = null),
                  (this.extensions.OES_texture_float_linear = null),
                  (this.extensions.OES_element_index_uint = null),
                  (this.extensions.WEBGL_draw_buffers = null);
              }
              static destroyContext(e) {
                const t = e.getExtension("WEBGL_lose_context");
                t && t.loseContext();
              }
              toJSON() {
                const e = super.toJSON();
                return (
                  (e.functionNodes = i.fromKernel(this, s).toJSON()),
                  (e.settings.threadDim = this.threadDim),
                  e
                );
              }
            },
          };
        },
        {
          "../../plugins/math-random-uniformly-distributed": 112,
          "../../utils": 114,
          "../function-builder": 9,
          "../gl/kernel": 13,
          "../gl/kernel-string": 12,
          "./fragment-shader": 37,
          "./function-node": 38,
          "./kernel-value-maps": 39,
          "./vertex-shader": 71,
        },
      ],
      71: [
        function (e, t, r) {
          t.exports = {
            vertexShader:
              "__FLOAT_TACTIC_DECLARATION__;\n__INT_TACTIC_DECLARATION__;\n__SAMPLER_2D_TACTIC_DECLARATION__;\n\nattribute vec2 aPos;\nattribute vec2 aTexCoord;\n\nvarying vec2 vTexCoord;\nuniform vec2 ratio;\n\nvoid main(void) {\n  gl_Position = vec4((aPos + vec2(1)) * ratio + vec2(-1), 0, 1);\n  vTexCoord = aTexCoord;\n}",
          };
        },
        {},
      ],
      72: [
        function (e, t, r) {
          const n = `#version 300 es\n__HEADER__;\n__FLOAT_TACTIC_DECLARATION__;\n__INT_TACTIC_DECLARATION__;\n__SAMPLER_2D_TACTIC_DECLARATION__;\n__SAMPLER_2D_ARRAY_TACTIC_DECLARATION__;\n\nconst int LOOP_MAX = __LOOP_MAX__;\n\n__PLUGINS__;\n__CONSTANTS__;\n\nin vec2 vTexCoord;\n\nfloat atan2(float v1, float v2) {\n  if (v1 == 0.0 || v2 == 0.0) return 0.0;\n  return atan(v1 / v2);\n}\n\nfloat cbrt(float x) {\n  if (x >= 0.0) {\n    return pow(x, 1.0 / 3.0);\n  } else {\n    return -pow(x, 1.0 / 3.0);\n  }\n}\n\nfloat expm1(float x) {\n  return pow(${Math.E}, x) - 1.0; \n}\n\nfloat fround(highp float x) {\n  return x;\n}\n\nfloat imul(float v1, float v2) {\n  return float(int(v1) * int(v2));\n}\n\nfloat log10(float x) {\n  return log2(x) * (1.0 / log2(10.0));\n}\n\nfloat log1p(float x) {\n  return log(1.0 + x);\n}\n\nfloat _pow(float v1, float v2) {\n  if (v2 == 0.0) return 1.0;\n  return pow(v1, v2);\n}\n\nfloat _round(float x) {\n  return floor(x + 0.5);\n}\n\n\nconst int BIT_COUNT = 32;\nint modi(int x, int y) {\n  return x - y * (x / y);\n}\n\nint bitwiseOr(int a, int b) {\n  int result = 0;\n  int n = 1;\n  \n  for (int i = 0; i < BIT_COUNT; i++) {\n    if ((modi(a, 2) == 1) || (modi(b, 2) == 1)) {\n      result += n;\n    }\n    a = a / 2;\n    b = b / 2;\n    n = n * 2;\n    if(!(a > 0 || b > 0)) {\n      break;\n    }\n  }\n  return result;\n}\nint bitwiseXOR(int a, int b) {\n  int result = 0;\n  int n = 1;\n  \n  for (int i = 0; i < BIT_COUNT; i++) {\n    if ((modi(a, 2) == 1) != (modi(b, 2) == 1)) {\n      result += n;\n    }\n    a = a / 2;\n    b = b / 2;\n    n = n * 2;\n    if(!(a > 0 || b > 0)) {\n      break;\n    }\n  }\n  return result;\n}\nint bitwiseAnd(int a, int b) {\n  int result = 0;\n  int n = 1;\n  for (int i = 0; i < BIT_COUNT; i++) {\n    if ((modi(a, 2) == 1) && (modi(b, 2) == 1)) {\n      result += n;\n    }\n    a = a / 2;\n    b = b / 2;\n    n = n * 2;\n    if(!(a > 0 && b > 0)) {\n      break;\n    }\n  }\n  return result;\n}\nint bitwiseNot(int a) {\n  int result = 0;\n  int n = 1;\n  \n  for (int i = 0; i < BIT_COUNT; i++) {\n    if (modi(a, 2) == 0) {\n      result += n;    \n    }\n    a = a / 2;\n    n = n * 2;\n  }\n  return result;\n}\nint bitwiseZeroFillLeftShift(int n, int shift) {\n  int maxBytes = BIT_COUNT;\n  for (int i = 0; i < BIT_COUNT; i++) {\n    if (maxBytes >= n) {\n      break;\n    }\n    maxBytes *= 2;\n  }\n  for (int i = 0; i < BIT_COUNT; i++) {\n    if (i >= shift) {\n      break;\n    }\n    n *= 2;\n  }\n\n  int result = 0;\n  int byteVal = 1;\n  for (int i = 0; i < BIT_COUNT; i++) {\n    if (i >= maxBytes) break;\n    if (modi(n, 2) > 0) { result += byteVal; }\n    n = int(n / 2);\n    byteVal *= 2;\n  }\n  return result;\n}\n\nint bitwiseSignedRightShift(int num, int shifts) {\n  return int(floor(float(num) / pow(2.0, float(shifts))));\n}\n\nint bitwiseZeroFillRightShift(int n, int shift) {\n  int maxBytes = BIT_COUNT;\n  for (int i = 0; i < BIT_COUNT; i++) {\n    if (maxBytes >= n) {\n      break;\n    }\n    maxBytes *= 2;\n  }\n  for (int i = 0; i < BIT_COUNT; i++) {\n    if (i >= shift) {\n      break;\n    }\n    n /= 2;\n  }\n  int result = 0;\n  int byteVal = 1;\n  for (int i = 0; i < BIT_COUNT; i++) {\n    if (i >= maxBytes) break;\n    if (modi(n, 2) > 0) { result += byteVal; }\n    n = int(n / 2);\n    byteVal *= 2;\n  }\n  return result;\n}\n\nvec2 integerMod(vec2 x, float y) {\n  vec2 res = floor(mod(x, y));\n  return res * step(1.0 - floor(y), -res);\n}\n\nvec3 integerMod(vec3 x, float y) {\n  vec3 res = floor(mod(x, y));\n  return res * step(1.0 - floor(y), -res);\n}\n\nvec4 integerMod(vec4 x, vec4 y) {\n  vec4 res = floor(mod(x, y));\n  return res * step(1.0 - floor(y), -res);\n}\n\nfloat integerMod(float x, float y) {\n  float res = floor(mod(x, y));\n  return res * (res > floor(y) - 1.0 ? 0.0 : 1.0);\n}\n\nint integerMod(int x, int y) {\n  return x - (y * int(x/y));\n}\n\n__DIVIDE_WITH_INTEGER_CHECK__;\n\n// Here be dragons!\n// DO NOT OPTIMIZE THIS CODE\n// YOU WILL BREAK SOMETHING ON SOMEBODY'S MACHINE\n// LEAVE IT AS IT IS, LEST YOU WASTE YOUR OWN TIME\nconst vec2 MAGIC_VEC = vec2(1.0, -256.0);\nconst vec4 SCALE_FACTOR = vec4(1.0, 256.0, 65536.0, 0.0);\nconst vec4 SCALE_FACTOR_INV = vec4(1.0, 0.00390625, 0.0000152587890625, 0.0); // 1, 1/256, 1/65536\nfloat decode32(vec4 texel) {\n  __DECODE32_ENDIANNESS__;\n  texel *= 255.0;\n  vec2 gte128;\n  gte128.x = texel.b >= 128.0 ? 1.0 : 0.0;\n  gte128.y = texel.a >= 128.0 ? 1.0 : 0.0;\n  float exponent = 2.0 * texel.a - 127.0 + dot(gte128, MAGIC_VEC);\n  float res = exp2(round(exponent));\n  texel.b = texel.b - 128.0 * gte128.x;\n  res = dot(texel, SCALE_FACTOR) * exp2(round(exponent-23.0)) + res;\n  res *= gte128.y * -2.0 + 1.0;\n  return res;\n}\n\nfloat decode16(vec4 texel, int index) {\n  int channel = integerMod(index, 2);\n  return texel[channel*2] * 255.0 + texel[channel*2 + 1] * 65280.0;\n}\n\nfloat decode8(vec4 texel, int index) {\n  int channel = integerMod(index, 4);\n  return texel[channel] * 255.0;\n}\n\nvec4 legacyEncode32(float f) {\n  float F = abs(f);\n  float sign = f < 0.0 ? 1.0 : 0.0;\n  float exponent = floor(log2(F));\n  float mantissa = (exp2(-exponent) * F);\n  // exponent += floor(log2(mantissa));\n  vec4 texel = vec4(F * exp2(23.0-exponent)) * SCALE_FACTOR_INV;\n  texel.rg = integerMod(texel.rg, 256.0);\n  texel.b = integerMod(texel.b, 128.0);\n  texel.a = exponent*0.5 + 63.5;\n  texel.ba += vec2(integerMod(exponent+127.0, 2.0), sign) * 128.0;\n  texel = floor(texel);\n  texel *= 0.003921569; // 1/255\n  __ENCODE32_ENDIANNESS__;\n  return texel;\n}\n\n// https://github.com/gpujs/gpu.js/wiki/Encoder-details\nvec4 encode32(float value) {\n  if (value == 0.0) return vec4(0, 0, 0, 0);\n\n  float exponent;\n  float mantissa;\n  vec4  result;\n  float sgn;\n\n  sgn = step(0.0, -value);\n  value = abs(value);\n\n  exponent = floor(log2(value));\n\n  mantissa = value*pow(2.0, -exponent)-1.0;\n  exponent = exponent+127.0;\n  result   = vec4(0,0,0,0);\n\n  result.a = floor(exponent/2.0);\n  exponent = exponent - result.a*2.0;\n  result.a = result.a + 128.0*sgn;\n\n  result.b = floor(mantissa * 128.0);\n  mantissa = mantissa - result.b / 128.0;\n  result.b = result.b + exponent*128.0;\n\n  result.g = floor(mantissa*32768.0);\n  mantissa = mantissa - result.g/32768.0;\n\n  result.r = floor(mantissa*8388608.0);\n  return result/255.0;\n}\n// Dragons end here\n\nint index;\nivec3 threadId;\n\nivec3 indexTo3D(int idx, ivec3 texDim) {\n  int z = int(idx / (texDim.x * texDim.y));\n  idx -= z * int(texDim.x * texDim.y);\n  int y = int(idx / texDim.x);\n  int x = int(integerMod(idx, texDim.x));\n  return ivec3(x, y, z);\n}\n\nfloat get32(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  int index = x + texDim.x * (y + texDim.y * z);\n  int w = texSize.x;\n  vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n  vec4 texel = texture(tex, st / vec2(texSize));\n  return decode32(texel);\n}\n\nfloat get16(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  int index = x + (texDim.x * (y + (texDim.y * z)));\n  int w = texSize.x * 2;\n  vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n  vec4 texel = texture(tex, st / vec2(texSize.x * 2, texSize.y));\n  return decode16(texel, index);\n}\n\nfloat get8(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  int index = x + (texDim.x * (y + (texDim.y * z)));\n  int w = texSize.x * 4;\n  vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n  vec4 texel = texture(tex, st / vec2(texSize.x * 4, texSize.y));\n  return decode8(texel, index);\n}\n\nfloat getMemoryOptimized32(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  int index = x + (texDim.x * (y + (texDim.y * z)));\n  int channel = integerMod(index, 4);\n  index = index / 4;\n  int w = texSize.x;\n  vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n  index = index / 4;\n  vec4 texel = texture(tex, st / vec2(texSize));\n  return texel[channel];\n}\n\nvec4 getImage2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  int index = x + texDim.x * (y + texDim.y * z);\n  int w = texSize.x;\n  vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n  return texture(tex, st / vec2(texSize));\n}\n\nvec4 getImage3D(sampler2DArray tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  int index = x + texDim.x * (y + texDim.y * z);\n  int w = texSize.x;\n  vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n  return texture(tex, vec3(st / vec2(texSize), z));\n}\n\nfloat getFloatFromSampler2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  vec4 result = getImage2D(tex, texSize, texDim, z, y, x);\n  return result[0];\n}\n\nvec2 getVec2FromSampler2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  vec4 result = getImage2D(tex, texSize, texDim, z, y, x);\n  return vec2(result[0], result[1]);\n}\n\nvec2 getMemoryOptimizedVec2(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  int index = x + texDim.x * (y + texDim.y * z);\n  int channel = integerMod(index, 2);\n  index = index / 2;\n  int w = texSize.x;\n  vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n  vec4 texel = texture(tex, st / vec2(texSize));\n  if (channel == 0) return vec2(texel.r, texel.g);\n  if (channel == 1) return vec2(texel.b, texel.a);\n  return vec2(0.0, 0.0);\n}\n\nvec3 getVec3FromSampler2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  vec4 result = getImage2D(tex, texSize, texDim, z, y, x);\n  return vec3(result[0], result[1], result[2]);\n}\n\nvec3 getMemoryOptimizedVec3(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  int fieldIndex = 3 * (x + texDim.x * (y + texDim.y * z));\n  int vectorIndex = fieldIndex / 4;\n  int vectorOffset = fieldIndex - vectorIndex * 4;\n  int readY = vectorIndex / texSize.x;\n  int readX = vectorIndex - readY * texSize.x;\n  vec4 tex1 = texture(tex, (vec2(readX, readY) + 0.5) / vec2(texSize));\n\n  if (vectorOffset == 0) {\n    return tex1.xyz;\n  } else if (vectorOffset == 1) {\n    return tex1.yzw;\n  } else {\n    readX++;\n    if (readX >= texSize.x) {\n      readX = 0;\n      readY++;\n    }\n    vec4 tex2 = texture(tex, vec2(readX, readY) / vec2(texSize));\n    if (vectorOffset == 2) {\n      return vec3(tex1.z, tex1.w, tex2.x);\n    } else {\n      return vec3(tex1.w, tex2.x, tex2.y);\n    }\n  }\n}\n\nvec4 getVec4FromSampler2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  return getImage2D(tex, texSize, texDim, z, y, x);\n}\n\nvec4 getMemoryOptimizedVec4(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  int index = x + texDim.x * (y + texDim.y * z);\n  int channel = integerMod(index, 2);\n  int w = texSize.x;\n  vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n  vec4 texel = texture(tex, st / vec2(texSize));\n  return vec4(texel.r, texel.g, texel.b, texel.a);\n}\n\nvec4 actualColor;\nvoid color(float r, float g, float b, float a) {\n  actualColor = vec4(r,g,b,a);\n}\n\nvoid color(float r, float g, float b) {\n  color(r,g,b,1.0);\n}\n\nfloat modulo(float number, float divisor) {\n  if (number < 0.0) {\n    number = abs(number);\n    if (divisor < 0.0) {\n      divisor = abs(divisor);\n    }\n    return -mod(number, divisor);\n  }\n  if (divisor < 0.0) {\n    divisor = abs(divisor);\n  }\n  return mod(number, divisor);\n}\n\n__INJECTED_NATIVE__;\n__MAIN_CONSTANTS__;\n__MAIN_ARGUMENTS__;\n__KERNEL__;\n\nvoid main(void) {\n  index = int(vTexCoord.s * float(uTexSize.x)) + int(vTexCoord.t * float(uTexSize.y)) * uTexSize.x;\n  __MAIN_RESULT__;\n}`;
          t.exports = { fragmentShader: n };
        },
        {},
      ],
      73: [
        function (e, t, r) {
          const { utils: n } = e("../../utils"),
            { WebGLFunctionNode: i } = e("../web-gl/function-node");
          t.exports = {
            WebGL2FunctionNode: class extends i {
              astIdentifierExpression(e, t) {
                if ("Identifier" !== e.type)
                  throw this.astErrorOutput(
                    "IdentifierExpression - not an Identifier",
                    e
                  );
                const r = this.getType(e),
                  i = n.sanitizeName(e.name);
                return (
                  "Infinity" === e.name
                    ? t.push("intBitsToFloat(2139095039)")
                    : "Boolean" === r && this.argumentNames.indexOf(i) > -1
                    ? t.push(`bool(user_${i})`)
                    : t.push(`user_${i}`),
                  t
                );
              }
            },
          };
        },
        { "../../utils": 114, "../web-gl/function-node": 38 },
      ],
      74: [
        function (e, t, r) {
          const { WebGL2KernelValueBoolean: n } = e("./kernel-value/boolean"),
            { WebGL2KernelValueFloat: i } = e("./kernel-value/float"),
            { WebGL2KernelValueInteger: s } = e("./kernel-value/integer"),
            { WebGL2KernelValueHTMLImage: a } = e("./kernel-value/html-image"),
            { WebGL2KernelValueDynamicHTMLImage: o } = e(
              "./kernel-value/dynamic-html-image"
            ),
            { WebGL2KernelValueHTMLImageArray: u } = e(
              "./kernel-value/html-image-array"
            ),
            { WebGL2KernelValueDynamicHTMLImageArray: l } = e(
              "./kernel-value/dynamic-html-image-array"
            ),
            { WebGL2KernelValueHTMLVideo: h } = e("./kernel-value/html-video"),
            { WebGL2KernelValueDynamicHTMLVideo: c } = e(
              "./kernel-value/dynamic-html-video"
            ),
            { WebGL2KernelValueSingleInput: p } = e(
              "./kernel-value/single-input"
            ),
            { WebGL2KernelValueDynamicSingleInput: d } = e(
              "./kernel-value/dynamic-single-input"
            ),
            { WebGL2KernelValueUnsignedInput: m } = e(
              "./kernel-value/unsigned-input"
            ),
            { WebGL2KernelValueDynamicUnsignedInput: f } = e(
              "./kernel-value/dynamic-unsigned-input"
            ),
            { WebGL2KernelValueMemoryOptimizedNumberTexture: g } = e(
              "./kernel-value/memory-optimized-number-texture"
            ),
            { WebGL2KernelValueDynamicMemoryOptimizedNumberTexture: x } = e(
              "./kernel-value/dynamic-memory-optimized-number-texture"
            ),
            { WebGL2KernelValueNumberTexture: y } = e(
              "./kernel-value/number-texture"
            ),
            { WebGL2KernelValueDynamicNumberTexture: b } = e(
              "./kernel-value/dynamic-number-texture"
            ),
            { WebGL2KernelValueSingleArray: T } = e(
              "./kernel-value/single-array"
            ),
            { WebGL2KernelValueDynamicSingleArray: v } = e(
              "./kernel-value/dynamic-single-array"
            ),
            { WebGL2KernelValueSingleArray1DI: S } = e(
              "./kernel-value/single-array1d-i"
            ),
            { WebGL2KernelValueDynamicSingleArray1DI: A } = e(
              "./kernel-value/dynamic-single-array1d-i"
            ),
            { WebGL2KernelValueSingleArray2DI: _ } = e(
              "./kernel-value/single-array2d-i"
            ),
            { WebGL2KernelValueDynamicSingleArray2DI: E } = e(
              "./kernel-value/dynamic-single-array2d-i"
            ),
            { WebGL2KernelValueSingleArray3DI: w } = e(
              "./kernel-value/single-array3d-i"
            ),
            { WebGL2KernelValueDynamicSingleArray3DI: k } = e(
              "./kernel-value/dynamic-single-array3d-i"
            ),
            { WebGL2KernelValueArray2: I } = e("./kernel-value/array2"),
            { WebGL2KernelValueArray3: D } = e("./kernel-value/array3"),
            { WebGL2KernelValueArray4: C } = e("./kernel-value/array4"),
            { WebGL2KernelValueUnsignedArray: $ } = e(
              "./kernel-value/unsigned-array"
            ),
            { WebGL2KernelValueDynamicUnsignedArray: L } = e(
              "./kernel-value/dynamic-unsigned-array"
            ),
            R = {
              unsigned: {
                dynamic: {
                  Boolean: n,
                  Integer: s,
                  Float: i,
                  Array: L,
                  "Array(2)": I,
                  "Array(3)": D,
                  "Array(4)": C,
                  "Array1D(2)": !1,
                  "Array1D(3)": !1,
                  "Array1D(4)": !1,
                  "Array2D(2)": !1,
                  "Array2D(3)": !1,
                  "Array2D(4)": !1,
                  "Array3D(2)": !1,
                  "Array3D(3)": !1,
                  "Array3D(4)": !1,
                  Input: f,
                  NumberTexture: b,
                  "ArrayTexture(1)": b,
                  "ArrayTexture(2)": b,
                  "ArrayTexture(3)": b,
                  "ArrayTexture(4)": b,
                  MemoryOptimizedNumberTexture: x,
                  HTMLCanvas: o,
                  OffscreenCanvas: o,
                  HTMLImage: o,
                  ImageBitmap: o,
                  ImageData: o,
                  HTMLImageArray: l,
                  HTMLVideo: c,
                },
                static: {
                  Boolean: n,
                  Float: i,
                  Integer: s,
                  Array: $,
                  "Array(2)": I,
                  "Array(3)": D,
                  "Array(4)": C,
                  "Array1D(2)": !1,
                  "Array1D(3)": !1,
                  "Array1D(4)": !1,
                  "Array2D(2)": !1,
                  "Array2D(3)": !1,
                  "Array2D(4)": !1,
                  "Array3D(2)": !1,
                  "Array3D(3)": !1,
                  "Array3D(4)": !1,
                  Input: m,
                  NumberTexture: y,
                  "ArrayTexture(1)": y,
                  "ArrayTexture(2)": y,
                  "ArrayTexture(3)": y,
                  "ArrayTexture(4)": y,
                  MemoryOptimizedNumberTexture: x,
                  HTMLCanvas: a,
                  OffscreenCanvas: a,
                  HTMLImage: a,
                  ImageBitmap: a,
                  ImageData: a,
                  HTMLImageArray: u,
                  HTMLVideo: h,
                },
              },
              single: {
                dynamic: {
                  Boolean: n,
                  Integer: s,
                  Float: i,
                  Array: v,
                  "Array(2)": I,
                  "Array(3)": D,
                  "Array(4)": C,
                  "Array1D(2)": A,
                  "Array1D(3)": A,
                  "Array1D(4)": A,
                  "Array2D(2)": E,
                  "Array2D(3)": E,
                  "Array2D(4)": E,
                  "Array3D(2)": k,
                  "Array3D(3)": k,
                  "Array3D(4)": k,
                  Input: d,
                  NumberTexture: b,
                  "ArrayTexture(1)": b,
                  "ArrayTexture(2)": b,
                  "ArrayTexture(3)": b,
                  "ArrayTexture(4)": b,
                  MemoryOptimizedNumberTexture: x,
                  HTMLCanvas: o,
                  OffscreenCanvas: o,
                  HTMLImage: o,
                  ImageBitmap: o,
                  ImageData: o,
                  HTMLImageArray: l,
                  HTMLVideo: c,
                },
                static: {
                  Boolean: n,
                  Float: i,
                  Integer: s,
                  Array: T,
                  "Array(2)": I,
                  "Array(3)": D,
                  "Array(4)": C,
                  "Array1D(2)": S,
                  "Array1D(3)": S,
                  "Array1D(4)": S,
                  "Array2D(2)": _,
                  "Array2D(3)": _,
                  "Array2D(4)": _,
                  "Array3D(2)": w,
                  "Array3D(3)": w,
                  "Array3D(4)": w,
                  Input: p,
                  NumberTexture: y,
                  "ArrayTexture(1)": y,
                  "ArrayTexture(2)": y,
                  "ArrayTexture(3)": y,
                  "ArrayTexture(4)": y,
                  MemoryOptimizedNumberTexture: g,
                  HTMLCanvas: a,
                  OffscreenCanvas: a,
                  HTMLImage: a,
                  ImageBitmap: a,
                  ImageData: a,
                  HTMLImageArray: u,
                  HTMLVideo: h,
                },
              },
            };
          t.exports = {
            kernelValueMaps: R,
            lookupKernelValueType: function (e, t, r, n) {
              if (!e) throw new Error("type missing");
              if (!t) throw new Error("dynamic missing");
              if (!r) throw new Error("precision missing");
              n.type && (e = n.type);
              const i = R[r][t];
              if (!1 === i[e]) return null;
              if (void 0 === i[e])
                throw new Error(`Could not find a KernelValue for ${e}`);
              return i[e];
            },
          };
        },
        {
          "./kernel-value/array2": 75,
          "./kernel-value/array3": 76,
          "./kernel-value/array4": 77,
          "./kernel-value/boolean": 78,
          "./kernel-value/dynamic-html-image": 80,
          "./kernel-value/dynamic-html-image-array": 79,
          "./kernel-value/dynamic-html-video": 81,
          "./kernel-value/dynamic-memory-optimized-number-texture": 82,
          "./kernel-value/dynamic-number-texture": 83,
          "./kernel-value/dynamic-single-array": 84,
          "./kernel-value/dynamic-single-array1d-i": 85,
          "./kernel-value/dynamic-single-array2d-i": 86,
          "./kernel-value/dynamic-single-array3d-i": 87,
          "./kernel-value/dynamic-single-input": 88,
          "./kernel-value/dynamic-unsigned-array": 89,
          "./kernel-value/dynamic-unsigned-input": 90,
          "./kernel-value/float": 91,
          "./kernel-value/html-image": 93,
          "./kernel-value/html-image-array": 92,
          "./kernel-value/html-video": 94,
          "./kernel-value/integer": 95,
          "./kernel-value/memory-optimized-number-texture": 96,
          "./kernel-value/number-texture": 97,
          "./kernel-value/single-array": 98,
          "./kernel-value/single-array1d-i": 99,
          "./kernel-value/single-array2d-i": 100,
          "./kernel-value/single-array3d-i": 101,
          "./kernel-value/single-input": 102,
          "./kernel-value/unsigned-array": 103,
          "./kernel-value/unsigned-input": 104,
        },
      ],
      75: [
        function (e, t, r) {
          const { WebGLKernelValueArray2: n } = e(
            "../../web-gl/kernel-value/array2"
          );
          t.exports = { WebGL2KernelValueArray2: class extends n {} };
        },
        { "../../web-gl/kernel-value/array2": 41 },
      ],
      76: [
        function (e, t, r) {
          const { WebGLKernelValueArray3: n } = e(
            "../../web-gl/kernel-value/array3"
          );
          t.exports = { WebGL2KernelValueArray3: class extends n {} };
        },
        { "../../web-gl/kernel-value/array3": 42 },
      ],
      77: [
        function (e, t, r) {
          const { WebGLKernelValueArray4: n } = e(
            "../../web-gl/kernel-value/array4"
          );
          t.exports = { WebGL2KernelValueArray4: class extends n {} };
        },
        { "../../web-gl/kernel-value/array4": 43 },
      ],
      78: [
        function (e, t, r) {
          const { WebGLKernelValueBoolean: n } = e(
            "../../web-gl/kernel-value/boolean"
          );
          t.exports = { WebGL2KernelValueBoolean: class extends n {} };
        },
        { "../../web-gl/kernel-value/boolean": 44 },
      ],
      79: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGL2KernelValueHTMLImageArray: i } = e("./html-image-array");
          t.exports = {
            WebGL2KernelValueDynamicHTMLImageArray: class extends i {
              getSource() {
                const e = this.getVariablePrecisionString();
                return n.linesToString([
                  `uniform ${e} sampler2DArray ${this.id}`,
                  `uniform ${e} ivec2 ${this.sizeId}`,
                  `uniform ${e} ivec3 ${this.dimensionsId}`,
                ]);
              }
              updateValue(e) {
                const { width: t, height: r } = e[0];
                this.checkSize(t, r),
                  (this.dimensions = [t, r, e.length]),
                  (this.textureSize = [t, r]),
                  this.kernel.setUniform3iv(this.dimensionsId, this.dimensions),
                  this.kernel.setUniform2iv(this.sizeId, this.textureSize),
                  super.updateValue(e);
              }
            },
          };
        },
        { "../../../utils": 114, "./html-image-array": 92 },
      ],
      80: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelValueDynamicHTMLImage: i } = e(
              "../../web-gl/kernel-value/dynamic-html-image"
            );
          t.exports = {
            WebGL2KernelValueDynamicHTMLImage: class extends i {
              getSource() {
                const e = this.getVariablePrecisionString();
                return n.linesToString([
                  `uniform ${e} sampler2D ${this.id}`,
                  `uniform ${e} ivec2 ${this.sizeId}`,
                  `uniform ${e} ivec3 ${this.dimensionsId}`,
                ]);
              }
            },
          };
        },
        {
          "../../../utils": 114,
          "../../web-gl/kernel-value/dynamic-html-image": 45,
        },
      ],
      81: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGL2KernelValueDynamicHTMLImage: i } = e(
              "./dynamic-html-image"
            );
          t.exports = { WebGL2KernelValueDynamicHTMLVideo: class extends i {} };
        },
        { "../../../utils": 114, "./dynamic-html-image": 80 },
      ],
      82: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelValueDynamicMemoryOptimizedNumberTexture: i } = e(
              "../../web-gl/kernel-value/dynamic-memory-optimized-number-texture"
            );
          t.exports = {
            WebGL2KernelValueDynamicMemoryOptimizedNumberTexture: class extends i {
              getSource() {
                return n.linesToString([
                  `uniform sampler2D ${this.id}`,
                  `uniform ivec2 ${this.sizeId}`,
                  `uniform ivec3 ${this.dimensionsId}`,
                ]);
              }
            },
          };
        },
        {
          "../../../utils": 114,
          "../../web-gl/kernel-value/dynamic-memory-optimized-number-texture": 47,
        },
      ],
      83: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelValueDynamicNumberTexture: i } = e(
              "../../web-gl/kernel-value/dynamic-number-texture"
            );
          t.exports = {
            WebGL2KernelValueDynamicNumberTexture: class extends i {
              getSource() {
                const e = this.getVariablePrecisionString();
                return n.linesToString([
                  `uniform ${e} sampler2D ${this.id}`,
                  `uniform ${e} ivec2 ${this.sizeId}`,
                  `uniform ${e} ivec3 ${this.dimensionsId}`,
                ]);
              }
            },
          };
        },
        {
          "../../../utils": 114,
          "../../web-gl/kernel-value/dynamic-number-texture": 48,
        },
      ],
      84: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGL2KernelValueSingleArray: i } = e(
              "../../web-gl2/kernel-value/single-array"
            );
          t.exports = {
            WebGL2KernelValueDynamicSingleArray: class extends i {
              getSource() {
                const e = this.getVariablePrecisionString();
                return n.linesToString([
                  `uniform ${e} sampler2D ${this.id}`,
                  `uniform ${e} ivec2 ${this.sizeId}`,
                  `uniform ${e} ivec3 ${this.dimensionsId}`,
                ]);
              }
              updateValue(e) {
                (this.dimensions = n.getDimensions(e, !0)),
                  (this.textureSize = n.getMemoryOptimizedFloatTextureSize(
                    this.dimensions,
                    this.bitRatio
                  )),
                  (this.uploadArrayLength =
                    this.textureSize[0] * this.textureSize[1] * this.bitRatio),
                  this.checkSize(this.textureSize[0], this.textureSize[1]),
                  (this.uploadValue = new Float32Array(this.uploadArrayLength)),
                  this.kernel.setUniform3iv(this.dimensionsId, this.dimensions),
                  this.kernel.setUniform2iv(this.sizeId, this.textureSize),
                  super.updateValue(e);
              }
            },
          };
        },
        {
          "../../../utils": 114,
          "../../web-gl2/kernel-value/single-array": 98,
        },
      ],
      85: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGL2KernelValueSingleArray1DI: i } = e(
              "../../web-gl2/kernel-value/single-array1d-i"
            );
          t.exports = {
            WebGL2KernelValueDynamicSingleArray1DI: class extends i {
              getSource() {
                const e = this.getVariablePrecisionString();
                return n.linesToString([
                  `uniform ${e} sampler2D ${this.id}`,
                  `uniform ${e} ivec2 ${this.sizeId}`,
                  `uniform ${e} ivec3 ${this.dimensionsId}`,
                ]);
              }
              updateValue(e) {
                this.setShape(e),
                  this.kernel.setUniform3iv(this.dimensionsId, this.dimensions),
                  this.kernel.setUniform2iv(this.sizeId, this.textureSize),
                  super.updateValue(e);
              }
            },
          };
        },
        {
          "../../../utils": 114,
          "../../web-gl2/kernel-value/single-array1d-i": 99,
        },
      ],
      86: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGL2KernelValueSingleArray2DI: i } = e(
              "../../web-gl2/kernel-value/single-array2d-i"
            );
          t.exports = {
            WebGL2KernelValueDynamicSingleArray2DI: class extends i {
              getSource() {
                const e = this.getVariablePrecisionString();
                return n.linesToString([
                  `uniform ${e} sampler2D ${this.id}`,
                  `uniform ${e} ivec2 ${this.sizeId}`,
                  `uniform ${e} ivec3 ${this.dimensionsId}`,
                ]);
              }
              updateValue(e) {
                this.setShape(e),
                  this.kernel.setUniform3iv(this.dimensionsId, this.dimensions),
                  this.kernel.setUniform2iv(this.sizeId, this.textureSize),
                  super.updateValue(e);
              }
            },
          };
        },
        {
          "../../../utils": 114,
          "../../web-gl2/kernel-value/single-array2d-i": 100,
        },
      ],
      87: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGL2KernelValueSingleArray3DI: i } = e(
              "../../web-gl2/kernel-value/single-array3d-i"
            );
          t.exports = {
            WebGL2KernelValueDynamicSingleArray3DI: class extends i {
              getSource() {
                const e = this.getVariablePrecisionString();
                return n.linesToString([
                  `uniform ${e} sampler2D ${this.id}`,
                  `uniform ${e} ivec2 ${this.sizeId}`,
                  `uniform ${e} ivec3 ${this.dimensionsId}`,
                ]);
              }
              updateValue(e) {
                this.setShape(e),
                  this.kernel.setUniform3iv(this.dimensionsId, this.dimensions),
                  this.kernel.setUniform2iv(this.sizeId, this.textureSize),
                  super.updateValue(e);
              }
            },
          };
        },
        {
          "../../../utils": 114,
          "../../web-gl2/kernel-value/single-array3d-i": 101,
        },
      ],
      88: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGL2KernelValueSingleInput: i } = e(
              "../../web-gl2/kernel-value/single-input"
            );
          t.exports = {
            WebGL2KernelValueDynamicSingleInput: class extends i {
              getSource() {
                const e = this.getVariablePrecisionString();
                return n.linesToString([
                  `uniform ${e} sampler2D ${this.id}`,
                  `uniform ${e} ivec2 ${this.sizeId}`,
                  `uniform ${e} ivec3 ${this.dimensionsId}`,
                ]);
              }
              updateValue(e) {
                let [t, r, i] = e.size;
                (this.dimensions = new Int32Array([t || 1, r || 1, i || 1])),
                  (this.textureSize = n.getMemoryOptimizedFloatTextureSize(
                    this.dimensions,
                    this.bitRatio
                  )),
                  (this.uploadArrayLength =
                    this.textureSize[0] * this.textureSize[1] * this.bitRatio),
                  this.checkSize(this.textureSize[0], this.textureSize[1]),
                  (this.uploadValue = new Float32Array(this.uploadArrayLength)),
                  this.kernel.setUniform3iv(this.dimensionsId, this.dimensions),
                  this.kernel.setUniform2iv(this.sizeId, this.textureSize),
                  super.updateValue(e);
              }
            },
          };
        },
        {
          "../../../utils": 114,
          "../../web-gl2/kernel-value/single-input": 102,
        },
      ],
      89: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelValueDynamicUnsignedArray: i } = e(
              "../../web-gl/kernel-value/dynamic-unsigned-array"
            );
          t.exports = {
            WebGL2KernelValueDynamicUnsignedArray: class extends i {
              getSource() {
                const e = this.getVariablePrecisionString();
                return n.linesToString([
                  `uniform ${e} sampler2D ${this.id}`,
                  `uniform ${e} ivec2 ${this.sizeId}`,
                  `uniform ${e} ivec3 ${this.dimensionsId}`,
                ]);
              }
            },
          };
        },
        {
          "../../../utils": 114,
          "../../web-gl/kernel-value/dynamic-unsigned-array": 54,
        },
      ],
      90: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelValueDynamicUnsignedInput: i } = e(
              "../../web-gl/kernel-value/dynamic-unsigned-input"
            );
          t.exports = {
            WebGL2KernelValueDynamicUnsignedInput: class extends i {
              getSource() {
                const e = this.getVariablePrecisionString();
                return n.linesToString([
                  `uniform ${e} sampler2D ${this.id}`,
                  `uniform ${e} ivec2 ${this.sizeId}`,
                  `uniform ${e} ivec3 ${this.dimensionsId}`,
                ]);
              }
            },
          };
        },
        {
          "../../../utils": 114,
          "../../web-gl/kernel-value/dynamic-unsigned-input": 55,
        },
      ],
      91: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelValueFloat: i } = e("../../web-gl/kernel-value/float");
          t.exports = { WebGL2KernelValueFloat: class extends i {} };
        },
        { "../../../utils": 114, "../../web-gl/kernel-value/float": 56 },
      ],
      92: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelArray: i } = e("../../web-gl/kernel-value/array");
          t.exports = {
            WebGL2KernelValueHTMLImageArray: class extends i {
              constructor(e, t) {
                super(e, t),
                  this.checkSize(e[0].width, e[0].height),
                  (this.dimensions = [e[0].width, e[0].height, e.length]),
                  (this.textureSize = [e[0].width, e[0].height]);
              }
              defineTexture() {
                const { context: e } = this;
                e.activeTexture(this.contextHandle),
                  e.bindTexture(e.TEXTURE_2D_ARRAY, this.texture),
                  e.texParameteri(
                    e.TEXTURE_2D_ARRAY,
                    e.TEXTURE_MAG_FILTER,
                    e.NEAREST
                  ),
                  e.texParameteri(
                    e.TEXTURE_2D_ARRAY,
                    e.TEXTURE_MIN_FILTER,
                    e.NEAREST
                  );
              }
              getStringValueHandler() {
                return `const uploadValue_${this.name} = ${this.varName};\n`;
              }
              getSource() {
                const e = this.getVariablePrecisionString();
                return n.linesToString([
                  `uniform ${e} sampler2DArray ${this.id}`,
                  `${e} ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`,
                  `${e} ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`,
                ]);
              }
              updateValue(e) {
                const { context: t } = this;
                t.activeTexture(this.contextHandle),
                  t.bindTexture(t.TEXTURE_2D_ARRAY, this.texture),
                  t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !0),
                  t.texImage3D(
                    t.TEXTURE_2D_ARRAY,
                    0,
                    t.RGBA,
                    e[0].width,
                    e[0].height,
                    e.length,
                    0,
                    t.RGBA,
                    t.UNSIGNED_BYTE,
                    null
                  );
                for (let r = 0; r < e.length; r++) {
                  const n = 0,
                    i = 0,
                    s = 1;
                  t.texSubImage3D(
                    t.TEXTURE_2D_ARRAY,
                    0,
                    n,
                    i,
                    r,
                    e[r].width,
                    e[r].height,
                    s,
                    t.RGBA,
                    t.UNSIGNED_BYTE,
                    (this.uploadValue = e[r])
                  );
                }
                this.kernel.setUniform1i(this.id, this.index);
              }
            },
          };
        },
        { "../../../utils": 114, "../../web-gl/kernel-value/array": 40 },
      ],
      93: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelValueHTMLImage: i } = e(
              "../../web-gl/kernel-value/html-image"
            );
          t.exports = {
            WebGL2KernelValueHTMLImage: class extends i {
              getSource() {
                const e = this.getVariablePrecisionString();
                return n.linesToString([
                  `uniform ${e} sampler2D ${this.id}`,
                  `${e} ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`,
                  `${e} ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`,
                ]);
              }
            },
          };
        },
        { "../../../utils": 114, "../../web-gl/kernel-value/html-image": 57 },
      ],
      94: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGL2KernelValueHTMLImage: i } = e("./html-image");
          t.exports = { WebGL2KernelValueHTMLVideo: class extends i {} };
        },
        { "../../../utils": 114, "./html-image": 93 },
      ],
      95: [
        function (e, t, r) {
          const { WebGLKernelValueInteger: n } = e(
            "../../web-gl/kernel-value/integer"
          );
          t.exports = {
            WebGL2KernelValueInteger: class extends n {
              getSource(e) {
                const t = this.getVariablePrecisionString();
                return "constants" === this.origin
                  ? `const ${t} int ${this.id} = ${parseInt(e)};\n`
                  : `uniform ${t} int ${this.id};\n`;
              }
              updateValue(e) {
                "constants" !== this.origin &&
                  this.kernel.setUniform1i(this.id, (this.uploadValue = e));
              }
            },
          };
        },
        { "../../web-gl/kernel-value/integer": 60 },
      ],
      96: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelValueMemoryOptimizedNumberTexture: i } = e(
              "../../web-gl/kernel-value/memory-optimized-number-texture"
            );
          t.exports = {
            WebGL2KernelValueMemoryOptimizedNumberTexture: class extends i {
              getSource() {
                const {
                    id: e,
                    sizeId: t,
                    textureSize: r,
                    dimensionsId: i,
                    dimensions: s,
                  } = this,
                  a = this.getVariablePrecisionString();
                return n.linesToString([
                  `uniform sampler2D ${e}`,
                  `${a} ivec2 ${t} = ivec2(${r[0]}, ${r[1]})`,
                  `${a} ivec3 ${i} = ivec3(${s[0]}, ${s[1]}, ${s[2]})`,
                ]);
              }
            },
          };
        },
        {
          "../../../utils": 114,
          "../../web-gl/kernel-value/memory-optimized-number-texture": 61,
        },
      ],
      97: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelValueNumberTexture: i } = e(
              "../../web-gl/kernel-value/number-texture"
            );
          t.exports = {
            WebGL2KernelValueNumberTexture: class extends i {
              getSource() {
                const {
                    id: e,
                    sizeId: t,
                    textureSize: r,
                    dimensionsId: i,
                    dimensions: s,
                  } = this,
                  a = this.getVariablePrecisionString();
                return n.linesToString([
                  `uniform ${a} sampler2D ${e}`,
                  `${a} ivec2 ${t} = ivec2(${r[0]}, ${r[1]})`,
                  `${a} ivec3 ${i} = ivec3(${s[0]}, ${s[1]}, ${s[2]})`,
                ]);
              }
            },
          };
        },
        {
          "../../../utils": 114,
          "../../web-gl/kernel-value/number-texture": 62,
        },
      ],
      98: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelValueSingleArray: i } = e(
              "../../web-gl/kernel-value/single-array"
            );
          t.exports = {
            WebGL2KernelValueSingleArray: class extends i {
              getSource() {
                const e = this.getVariablePrecisionString();
                return n.linesToString([
                  `uniform ${e} sampler2D ${this.id}`,
                  `${e} ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`,
                  `${e} ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`,
                ]);
              }
              updateValue(e) {
                if (e.constructor !== this.initialValueConstructor)
                  return void this.onUpdateValueMismatch(e.constructor);
                const { context: t } = this;
                n.flattenTo(e, this.uploadValue),
                  t.activeTexture(this.contextHandle),
                  t.bindTexture(t.TEXTURE_2D, this.texture),
                  t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !1),
                  t.texImage2D(
                    t.TEXTURE_2D,
                    0,
                    t.RGBA32F,
                    this.textureSize[0],
                    this.textureSize[1],
                    0,
                    t.RGBA,
                    t.FLOAT,
                    this.uploadValue
                  ),
                  this.kernel.setUniform1i(this.id, this.index);
              }
            },
          };
        },
        { "../../../utils": 114, "../../web-gl/kernel-value/single-array": 63 },
      ],
      99: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelValueSingleArray1DI: i } = e(
              "../../web-gl/kernel-value/single-array1d-i"
            );
          t.exports = {
            WebGL2KernelValueSingleArray1DI: class extends i {
              updateValue(e) {
                if (e.constructor !== this.initialValueConstructor)
                  return void this.onUpdateValueMismatch(e.constructor);
                const { context: t } = this;
                n.flattenTo(e, this.uploadValue),
                  t.activeTexture(this.contextHandle),
                  t.bindTexture(t.TEXTURE_2D, this.texture),
                  t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !1),
                  t.texImage2D(
                    t.TEXTURE_2D,
                    0,
                    t.RGBA32F,
                    this.textureSize[0],
                    this.textureSize[1],
                    0,
                    t.RGBA,
                    t.FLOAT,
                    this.uploadValue
                  ),
                  this.kernel.setUniform1i(this.id, this.index);
              }
            },
          };
        },
        {
          "../../../utils": 114,
          "../../web-gl/kernel-value/single-array1d-i": 64,
        },
      ],
      100: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelValueSingleArray2DI: i } = e(
              "../../web-gl/kernel-value/single-array2d-i"
            );
          t.exports = {
            WebGL2KernelValueSingleArray2DI: class extends i {
              updateValue(e) {
                if (e.constructor !== this.initialValueConstructor)
                  return void this.onUpdateValueMismatch(e.constructor);
                const { context: t } = this;
                n.flattenTo(e, this.uploadValue),
                  t.activeTexture(this.contextHandle),
                  t.bindTexture(t.TEXTURE_2D, this.texture),
                  t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !1),
                  t.texImage2D(
                    t.TEXTURE_2D,
                    0,
                    t.RGBA32F,
                    this.textureSize[0],
                    this.textureSize[1],
                    0,
                    t.RGBA,
                    t.FLOAT,
                    this.uploadValue
                  ),
                  this.kernel.setUniform1i(this.id, this.index);
              }
            },
          };
        },
        {
          "../../../utils": 114,
          "../../web-gl/kernel-value/single-array2d-i": 65,
        },
      ],
      101: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelValueSingleArray3DI: i } = e(
              "../../web-gl/kernel-value/single-array3d-i"
            );
          t.exports = {
            WebGL2KernelValueSingleArray3DI: class extends i {
              updateValue(e) {
                if (e.constructor !== this.initialValueConstructor)
                  return void this.onUpdateValueMismatch(e.constructor);
                const { context: t } = this;
                n.flattenTo(e, this.uploadValue),
                  t.activeTexture(this.contextHandle),
                  t.bindTexture(t.TEXTURE_2D, this.texture),
                  t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !1),
                  t.texImage2D(
                    t.TEXTURE_2D,
                    0,
                    t.RGBA32F,
                    this.textureSize[0],
                    this.textureSize[1],
                    0,
                    t.RGBA,
                    t.FLOAT,
                    this.uploadValue
                  ),
                  this.kernel.setUniform1i(this.id, this.index);
              }
            },
          };
        },
        {
          "../../../utils": 114,
          "../../web-gl/kernel-value/single-array3d-i": 66,
        },
      ],
      102: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelValueSingleInput: i } = e(
              "../../web-gl/kernel-value/single-input"
            );
          t.exports = {
            WebGL2KernelValueSingleInput: class extends i {
              getSource() {
                const e = this.getVariablePrecisionString();
                return n.linesToString([
                  `uniform ${e} sampler2D ${this.id}`,
                  `${e} ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`,
                  `${e} ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`,
                ]);
              }
              updateValue(e) {
                const { context: t } = this;
                n.flattenTo(e.value, this.uploadValue),
                  t.activeTexture(this.contextHandle),
                  t.bindTexture(t.TEXTURE_2D, this.texture),
                  t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !1),
                  t.texImage2D(
                    t.TEXTURE_2D,
                    0,
                    t.RGBA32F,
                    this.textureSize[0],
                    this.textureSize[1],
                    0,
                    t.RGBA,
                    t.FLOAT,
                    this.uploadValue
                  ),
                  this.kernel.setUniform1i(this.id, this.index);
              }
            },
          };
        },
        { "../../../utils": 114, "../../web-gl/kernel-value/single-input": 67 },
      ],
      103: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelValueUnsignedArray: i } = e(
              "../../web-gl/kernel-value/unsigned-array"
            );
          t.exports = {
            WebGL2KernelValueUnsignedArray: class extends i {
              getSource() {
                const e = this.getVariablePrecisionString();
                return n.linesToString([
                  `uniform ${e} sampler2D ${this.id}`,
                  `${e} ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`,
                  `${e} ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`,
                ]);
              }
            },
          };
        },
        {
          "../../../utils": 114,
          "../../web-gl/kernel-value/unsigned-array": 68,
        },
      ],
      104: [
        function (e, t, r) {
          const { utils: n } = e("../../../utils"),
            { WebGLKernelValueUnsignedInput: i } = e(
              "../../web-gl/kernel-value/unsigned-input"
            );
          t.exports = {
            WebGL2KernelValueUnsignedInput: class extends i {
              getSource() {
                const e = this.getVariablePrecisionString();
                return n.linesToString([
                  `uniform ${e} sampler2D ${this.id}`,
                  `${e} ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`,
                  `${e} ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`,
                ]);
              }
            },
          };
        },
        {
          "../../../utils": 114,
          "../../web-gl/kernel-value/unsigned-input": 69,
        },
      ],
      105: [
        function (e, t, r) {
          const { WebGLKernel: n } = e("../web-gl/kernel"),
            { WebGL2FunctionNode: i } = e("./function-node"),
            { FunctionBuilder: s } = e("../function-builder"),
            { utils: a } = e("../../utils"),
            { fragmentShader: o } = e("./fragment-shader"),
            { vertexShader: u } = e("./vertex-shader"),
            { lookupKernelValueType: l } = e("./kernel-value-maps");
          let h = null,
            c = null,
            p = null,
            d = null,
            m = null;
          t.exports = {
            WebGL2Kernel: class extends n {
              static get isSupported() {
                return null !== h
                  ? h
                  : (this.setupFeatureChecks(), (h = this.isContextMatch(p)));
              }
              static setupFeatureChecks() {
                "undefined" != typeof document
                  ? (c = document.createElement("canvas"))
                  : "undefined" != typeof OffscreenCanvas &&
                    (c = new OffscreenCanvas(0, 0)),
                  c &&
                    (p = c.getContext("webgl2")) &&
                    p.getExtension &&
                    ((d = {
                      EXT_color_buffer_float: p.getExtension(
                        "EXT_color_buffer_float"
                      ),
                      OES_texture_float_linear: p.getExtension(
                        "OES_texture_float_linear"
                      ),
                    }),
                    (m = this.getFeatures()));
              }
              static isContextMatch(e) {
                return (
                  "undefined" != typeof WebGL2RenderingContext &&
                  e instanceof WebGL2RenderingContext
                );
              }
              static getFeatures() {
                const e = this.testContext;
                return Object.freeze({
                  isFloatRead: this.getIsFloatRead(),
                  isIntegerDivisionAccurate:
                    this.getIsIntegerDivisionAccurate(),
                  isSpeedTacticSupported: this.getIsSpeedTacticSupported(),
                  kernelMap: !0,
                  isTextureFloat: !0,
                  isDrawBuffers: !0,
                  channelCount: this.getChannelCount(),
                  maxTextureSize: this.getMaxTextureSize(),
                  lowIntPrecision: e.getShaderPrecisionFormat(
                    e.FRAGMENT_SHADER,
                    e.LOW_INT
                  ),
                  lowFloatPrecision: e.getShaderPrecisionFormat(
                    e.FRAGMENT_SHADER,
                    e.LOW_FLOAT
                  ),
                  mediumIntPrecision: e.getShaderPrecisionFormat(
                    e.FRAGMENT_SHADER,
                    e.MEDIUM_INT
                  ),
                  mediumFloatPrecision: e.getShaderPrecisionFormat(
                    e.FRAGMENT_SHADER,
                    e.MEDIUM_FLOAT
                  ),
                  highIntPrecision: e.getShaderPrecisionFormat(
                    e.FRAGMENT_SHADER,
                    e.HIGH_INT
                  ),
                  highFloatPrecision: e.getShaderPrecisionFormat(
                    e.FRAGMENT_SHADER,
                    e.HIGH_FLOAT
                  ),
                });
              }
              static getIsTextureFloat() {
                return !0;
              }
              static getChannelCount() {
                return p.getParameter(p.MAX_DRAW_BUFFERS);
              }
              static getMaxTextureSize() {
                return p.getParameter(p.MAX_TEXTURE_SIZE);
              }
              static lookupKernelValueType(e, t, r, n) {
                return l(e, t, r, n);
              }
              static get testCanvas() {
                return c;
              }
              static get testContext() {
                return p;
              }
              static get features() {
                return m;
              }
              static get fragmentShader() {
                return o;
              }
              static get vertexShader() {
                return u;
              }
              initContext() {
                return this.canvas.getContext("webgl2", {
                  alpha: !1,
                  depth: !1,
                  antialias: !1,
                });
              }
              initExtensions() {
                this.extensions = {
                  EXT_color_buffer_float: this.context.getExtension(
                    "EXT_color_buffer_float"
                  ),
                  OES_texture_float_linear: this.context.getExtension(
                    "OES_texture_float_linear"
                  ),
                };
              }
              validateSettings(e) {
                if (!this.validate)
                  return void (this.texSize = a.getKernelTextureSize(
                    {
                      optimizeFloatMemory: this.optimizeFloatMemory,
                      precision: this.precision,
                    },
                    this.output
                  ));
                const { features: t } = this.constructor;
                if ("single" === this.precision && !t.isFloatRead)
                  throw new Error("Float texture outputs are not supported");
                if (
                  (this.graphical ||
                    null !== this.precision ||
                    (this.precision = t.isFloatRead ? "single" : "unsigned"),
                  null === this.fixIntegerDivisionAccuracy
                    ? (this.fixIntegerDivisionAccuracy =
                        !t.isIntegerDivisionAccurate)
                    : this.fixIntegerDivisionAccuracy &&
                      t.isIntegerDivisionAccurate &&
                      (this.fixIntegerDivisionAccuracy = !1),
                  this.checkOutput(),
                  !this.output || 0 === this.output.length)
                ) {
                  if (1 !== e.length)
                    throw new Error(
                      "Auto output only supported for kernels with only one input"
                    );
                  const t = a.getVariableType(e[0], this.strictIntegers);
                  switch (t) {
                    case "Array":
                      this.output = a.getDimensions(t);
                      break;
                    case "NumberTexture":
                    case "MemoryOptimizedNumberTexture":
                    case "ArrayTexture(1)":
                    case "ArrayTexture(2)":
                    case "ArrayTexture(3)":
                    case "ArrayTexture(4)":
                      this.output = e[0].output;
                      break;
                    default:
                      throw new Error(
                        "Auto output not supported for input type: " + t
                      );
                  }
                }
                if (this.graphical) {
                  if (2 !== this.output.length)
                    throw new Error(
                      "Output must have 2 dimensions on graphical mode"
                    );
                  return (
                    "single" === this.precision &&
                      (console.warn(
                        "Cannot use graphical mode and single precision at the same time"
                      ),
                      (this.precision = "unsigned")),
                    void (this.texSize = a.clone(this.output))
                  );
                }
                !this.graphical &&
                  null === this.precision &&
                  t.isTextureFloat &&
                  (this.precision = "single"),
                  (this.texSize = a.getKernelTextureSize(
                    {
                      optimizeFloatMemory: this.optimizeFloatMemory,
                      precision: this.precision,
                    },
                    this.output
                  )),
                  this.checkTextureSize();
              }
              translateSource() {
                const e = s.fromKernel(this, i, {
                  fixIntegerDivisionAccuracy: this.fixIntegerDivisionAccuracy,
                });
                (this.translatedSource = e.getPrototypeString("kernel")),
                  this.setupReturnTypes(e);
              }
              drawBuffers() {
                this.context.drawBuffers(this.drawBuffersMap);
              }
              getTextureFormat() {
                const { context: e } = this;
                switch (this.getInternalFormat()) {
                  case e.R32F:
                    return e.RED;
                  case e.RG32F:
                    return e.RG;
                  case e.RGBA32F:
                  case e.RGBA:
                    return e.RGBA;
                  default:
                    throw new Error("Unknown internal format");
                }
              }
              getInternalFormat() {
                const { context: e } = this;
                if ("single" === this.precision) {
                  if (this.pipeline)
                    switch (this.returnType) {
                      case "Number":
                      case "Float":
                      case "Integer":
                        return this.optimizeFloatMemory ? e.RGBA32F : e.R32F;
                      case "Array(2)":
                        return e.RG32F;
                      case "Array(3)":
                      case "Array(4)":
                        return e.RGBA32F;
                      default:
                        throw new Error("Unhandled return type");
                    }
                  return e.RGBA32F;
                }
                return e.RGBA;
              }
              _setupOutputTexture() {
                const e = this.context;
                if (this.texture)
                  return void e.framebufferTexture2D(
                    e.FRAMEBUFFER,
                    e.COLOR_ATTACHMENT0,
                    e.TEXTURE_2D,
                    this.texture.texture,
                    0
                  );
                e.bindFramebuffer(e.FRAMEBUFFER, this.framebuffer);
                const t = e.createTexture(),
                  r = this.texSize;
                e.activeTexture(
                  e.TEXTURE0 +
                    this.constantTextureCount +
                    this.argumentTextureCount
                ),
                  e.bindTexture(e.TEXTURE_2D, t),
                  e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.REPEAT),
                  e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.REPEAT),
                  e.texParameteri(
                    e.TEXTURE_2D,
                    e.TEXTURE_MIN_FILTER,
                    e.NEAREST
                  ),
                  e.texParameteri(
                    e.TEXTURE_2D,
                    e.TEXTURE_MAG_FILTER,
                    e.NEAREST
                  );
                const n = this.getInternalFormat();
                "single" === this.precision
                  ? e.texStorage2D(e.TEXTURE_2D, 1, n, r[0], r[1])
                  : e.texImage2D(
                      e.TEXTURE_2D,
                      0,
                      n,
                      r[0],
                      r[1],
                      0,
                      n,
                      e.UNSIGNED_BYTE,
                      null
                    ),
                  e.framebufferTexture2D(
                    e.FRAMEBUFFER,
                    e.COLOR_ATTACHMENT0,
                    e.TEXTURE_2D,
                    t,
                    0
                  ),
                  (this.texture = new this.TextureConstructor({
                    texture: t,
                    size: r,
                    dimensions: this.threadDim,
                    output: this.output,
                    context: this.context,
                    internalFormat: this.getInternalFormat(),
                    textureFormat: this.getTextureFormat(),
                    kernel: this,
                  }));
              }
              _setupSubOutputTextures() {
                const e = this.context;
                if (this.mappedTextures) {
                  for (let t = 0; t < this.subKernels.length; t++)
                    e.framebufferTexture2D(
                      e.FRAMEBUFFER,
                      e.COLOR_ATTACHMENT0 + t + 1,
                      e.TEXTURE_2D,
                      this.mappedTextures[t].texture,
                      0
                    );
                  return;
                }
                const t = this.texSize;
                (this.drawBuffersMap = [e.COLOR_ATTACHMENT0]),
                  (this.mappedTextures = []);
                for (let r = 0; r < this.subKernels.length; r++) {
                  const n = this.createTexture();
                  this.drawBuffersMap.push(e.COLOR_ATTACHMENT0 + r + 1),
                    e.activeTexture(
                      e.TEXTURE0 +
                        this.constantTextureCount +
                        this.argumentTextureCount +
                        r
                    ),
                    e.bindTexture(e.TEXTURE_2D, n),
                    e.texParameteri(
                      e.TEXTURE_2D,
                      e.TEXTURE_WRAP_S,
                      e.CLAMP_TO_EDGE
                    ),
                    e.texParameteri(
                      e.TEXTURE_2D,
                      e.TEXTURE_WRAP_T,
                      e.CLAMP_TO_EDGE
                    ),
                    e.texParameteri(
                      e.TEXTURE_2D,
                      e.TEXTURE_MIN_FILTER,
                      e.NEAREST
                    ),
                    e.texParameteri(
                      e.TEXTURE_2D,
                      e.TEXTURE_MAG_FILTER,
                      e.NEAREST
                    );
                  const i = this.getInternalFormat();
                  "single" === this.precision
                    ? e.texStorage2D(e.TEXTURE_2D, 1, i, t[0], t[1])
                    : e.texImage2D(
                        e.TEXTURE_2D,
                        0,
                        e.RGBA,
                        t[0],
                        t[1],
                        0,
                        e.RGBA,
                        e.UNSIGNED_BYTE,
                        null
                      ),
                    e.framebufferTexture2D(
                      e.FRAMEBUFFER,
                      e.COLOR_ATTACHMENT0 + r + 1,
                      e.TEXTURE_2D,
                      n,
                      0
                    ),
                    this.mappedTextures.push(
                      new this.TextureConstructor({
                        texture: n,
                        size: t,
                        dimensions: this.threadDim,
                        output: this.output,
                        context: this.context,
                        internalFormat: this.getInternalFormat(),
                        textureFormat: this.getTextureFormat(),
                        kernel: this,
                      })
                    );
                }
              }
              _getHeaderString() {
                return "";
              }
              _getTextureCoordinate() {
                const e = this.subKernels,
                  t = this.getVariablePrecisionString(
                    this.texSize,
                    this.tactic
                  );
                return null === e || e.length < 1
                  ? `in ${t} vec2 vTexCoord;\n`
                  : `out ${t} vec2 vTexCoord;\n`;
              }
              _getMainArgumentsString(e) {
                const t = [],
                  r = this.argumentNames;
                for (let n = 0; n < r.length; n++)
                  t.push(this.kernelArguments[n].getSource(e[n]));
                return t.join("");
              }
              getKernelString() {
                const e = [this.getKernelResultDeclaration()],
                  t = this.subKernels;
                if (null !== t)
                  switch (
                    (e.push("layout(location = 0) out vec4 data0"),
                    this.returnType)
                  ) {
                    case "Number":
                    case "Float":
                    case "Integer":
                      for (let r = 0; r < t.length; r++) {
                        const n = t[r];
                        e.push(
                          "Integer" === n.returnType
                            ? `int subKernelResult_${n.name} = 0`
                            : `float subKernelResult_${n.name} = 0.0`,
                          `layout(location = ${r + 1}) out vec4 data${r + 1}`
                        );
                      }
                      break;
                    case "Array(2)":
                      for (let r = 0; r < t.length; r++)
                        e.push(
                          `vec2 subKernelResult_${t[r].name}`,
                          `layout(location = ${r + 1}) out vec4 data${r + 1}`
                        );
                      break;
                    case "Array(3)":
                      for (let r = 0; r < t.length; r++)
                        e.push(
                          `vec3 subKernelResult_${t[r].name}`,
                          `layout(location = ${r + 1}) out vec4 data${r + 1}`
                        );
                      break;
                    case "Array(4)":
                      for (let r = 0; r < t.length; r++)
                        e.push(
                          `vec4 subKernelResult_${t[r].name}`,
                          `layout(location = ${r + 1}) out vec4 data${r + 1}`
                        );
                  }
                else e.push("out vec4 data0");
                return a.linesToString(e) + this.translatedSource;
              }
              getMainResultGraphical() {
                return a.linesToString([
                  "  threadId = indexTo3D(index, uOutputDim)",
                  "  kernel()",
                  "  data0 = actualColor",
                ]);
              }
              getMainResultPackedPixels() {
                switch (this.returnType) {
                  case "LiteralInteger":
                  case "Number":
                  case "Integer":
                  case "Float":
                    return (
                      this.getMainResultKernelPackedPixels() +
                      this.getMainResultSubKernelPackedPixels()
                    );
                  default:
                    throw new Error(
                      `packed output only usable with Numbers, "${this.returnType}" specified`
                    );
                }
              }
              getMainResultKernelPackedPixels() {
                return a.linesToString([
                  "  threadId = indexTo3D(index, uOutputDim)",
                  "  kernel()",
                  `  data0 = ${
                    this.useLegacyEncoder ? "legacyEncode32" : "encode32"
                  }(kernelResult)`,
                ]);
              }
              getMainResultSubKernelPackedPixels() {
                const e = [];
                if (!this.subKernels) return "";
                for (let t = 0; t < this.subKernels.length; t++)
                  "Integer" === this.subKernels[t].returnType
                    ? e.push(
                        `  data${t + 1} = ${
                          this.useLegacyEncoder ? "legacyEncode32" : "encode32"
                        }(float(subKernelResult_${this.subKernels[t].name}))`
                      )
                    : e.push(
                        `  data${t + 1} = ${
                          this.useLegacyEncoder ? "legacyEncode32" : "encode32"
                        }(subKernelResult_${this.subKernels[t].name})`
                      );
                return a.linesToString(e);
              }
              getMainResultKernelMemoryOptimizedFloats(e, t) {
                e.push(
                  "  threadId = indexTo3D(index, uOutputDim)",
                  "  kernel()",
                  `  data0.${t} = kernelResult`
                );
              }
              getMainResultSubKernelMemoryOptimizedFloats(e, t) {
                if (!this.subKernels) return e;
                for (let r = 0; r < this.subKernels.length; r++) {
                  const n = this.subKernels[r];
                  "Integer" === n.returnType
                    ? e.push(
                        `  data${r + 1}.${t} = float(subKernelResult_${n.name})`
                      )
                    : e.push(`  data${r + 1}.${t} = subKernelResult_${n.name}`);
                }
              }
              getMainResultKernelNumberTexture() {
                return [
                  "  threadId = indexTo3D(index, uOutputDim)",
                  "  kernel()",
                  "  data0[0] = kernelResult",
                ];
              }
              getMainResultSubKernelNumberTexture() {
                const e = [];
                if (!this.subKernels) return e;
                for (let t = 0; t < this.subKernels.length; ++t) {
                  const r = this.subKernels[t];
                  "Integer" === r.returnType
                    ? e.push(
                        `  data${t + 1}[0] = float(subKernelResult_${r.name})`
                      )
                    : e.push(`  data${t + 1}[0] = subKernelResult_${r.name}`);
                }
                return e;
              }
              getMainResultKernelArray2Texture() {
                return [
                  "  threadId = indexTo3D(index, uOutputDim)",
                  "  kernel()",
                  "  data0[0] = kernelResult[0]",
                  "  data0[1] = kernelResult[1]",
                ];
              }
              getMainResultSubKernelArray2Texture() {
                const e = [];
                if (!this.subKernels) return e;
                for (let t = 0; t < this.subKernels.length; ++t) {
                  const r = this.subKernels[t];
                  e.push(
                    `  data${t + 1}[0] = subKernelResult_${r.name}[0]`,
                    `  data${t + 1}[1] = subKernelResult_${r.name}[1]`
                  );
                }
                return e;
              }
              getMainResultKernelArray3Texture() {
                return [
                  "  threadId = indexTo3D(index, uOutputDim)",
                  "  kernel()",
                  "  data0[0] = kernelResult[0]",
                  "  data0[1] = kernelResult[1]",
                  "  data0[2] = kernelResult[2]",
                ];
              }
              getMainResultSubKernelArray3Texture() {
                const e = [];
                if (!this.subKernels) return e;
                for (let t = 0; t < this.subKernels.length; ++t) {
                  const r = this.subKernels[t];
                  e.push(
                    `  data${t + 1}[0] = subKernelResult_${r.name}[0]`,
                    `  data${t + 1}[1] = subKernelResult_${r.name}[1]`,
                    `  data${t + 1}[2] = subKernelResult_${r.name}[2]`
                  );
                }
                return e;
              }
              getMainResultKernelArray4Texture() {
                return [
                  "  threadId = indexTo3D(index, uOutputDim)",
                  "  kernel()",
                  "  data0 = kernelResult",
                ];
              }
              getMainResultSubKernelArray4Texture() {
                const e = [];
                if (!this.subKernels) return e;
                for (let t = 0; t < this.subKernels.length; ++t)
                  e.push(
                    `  data${t + 1} = subKernelResult_${
                      this.subKernels[t].name
                    }`
                  );
                return e;
              }
              destroyExtensions() {
                (this.extensions.EXT_color_buffer_float = null),
                  (this.extensions.OES_texture_float_linear = null);
              }
              toJSON() {
                const e = super.toJSON();
                return (
                  (e.functionNodes = s.fromKernel(this, i).toJSON()),
                  (e.settings.threadDim = this.threadDim),
                  e
                );
              }
            },
          };
        },
        {
          "../../utils": 114,
          "../function-builder": 9,
          "../web-gl/kernel": 70,
          "./fragment-shader": 72,
          "./function-node": 73,
          "./kernel-value-maps": 74,
          "./vertex-shader": 106,
        },
      ],
      106: [
        function (e, t, r) {
          t.exports = {
            vertexShader:
              "#version 300 es\n__FLOAT_TACTIC_DECLARATION__;\n__INT_TACTIC_DECLARATION__;\n__SAMPLER_2D_TACTIC_DECLARATION__;\n\nin vec2 aPos;\nin vec2 aTexCoord;\n\nout vec2 vTexCoord;\nuniform vec2 ratio;\n\nvoid main(void) {\n  gl_Position = vec4((aPos + vec2(1)) * ratio + vec2(-1), 0, 1);\n  vTexCoord = aTexCoord;\n}",
          };
        },
        {},
      ],
      107: [
        function (e, t, r) {
          const n = e("./index"),
            i = n.GPU;
          for (const e in n)
            n.hasOwnProperty(e) && "GPU" !== e && (i[e] = n[e]);
          function s(e) {
            e.GPU || Object.defineProperty(e, "GPU", { get: () => i });
          }
          "undefined" != typeof window && s(window),
            "undefined" != typeof self && s(self),
            (t.exports = n);
        },
        { "./index": 109 },
      ],
      108: [
        function (e, t, r) {
          const { gpuMock: n } = e("gpu-mock.js"),
            { utils: i } = e("./utils"),
            { Kernel: s } = e("./backend/kernel"),
            { CPUKernel: a } = e("./backend/cpu/kernel"),
            { HeadlessGLKernel: o } = e("./backend/headless-gl/kernel"),
            { WebGL2Kernel: u } = e("./backend/web-gl2/kernel"),
            { WebGLKernel: l } = e("./backend/web-gl/kernel"),
            { kernelRunShortcut: h } = e("./kernel-run-shortcut"),
            c = [o, u, l],
            p = ["gpu", "cpu"],
            d = { headlessgl: o, webgl2: u, webgl: l };
          let m = !0;
          function f(e) {
            if (!e) return {};
            const t = Object.assign({}, e);
            return (
              e.hasOwnProperty("floatOutput") &&
                (i.warnDeprecated("setting", "floatOutput", "precision"),
                (t.precision = e.floatOutput ? "single" : "unsigned")),
              e.hasOwnProperty("outputToTexture") &&
                (i.warnDeprecated("setting", "outputToTexture", "pipeline"),
                (t.pipeline = Boolean(e.outputToTexture))),
              e.hasOwnProperty("outputImmutable") &&
                (i.warnDeprecated("setting", "outputImmutable", "immutable"),
                (t.immutable = Boolean(e.outputImmutable))),
              e.hasOwnProperty("floatTextures") &&
                (i.warnDeprecated(
                  "setting",
                  "floatTextures",
                  "optimizeFloatMemory"
                ),
                (t.optimizeFloatMemory = Boolean(e.floatTextures))),
              t
            );
          }
          t.exports = {
            GPU: class {
              static disableValidation() {
                m = !1;
              }
              static enableValidation() {
                m = !0;
              }
              static get isGPUSupported() {
                return c.some((e) => e.isSupported);
              }
              static get isKernelMapSupported() {
                return c.some((e) => e.isSupported && e.features.kernelMap);
              }
              static get isOffscreenCanvasSupported() {
                return (
                  ("undefined" != typeof Worker &&
                    "undefined" != typeof OffscreenCanvas) ||
                  "undefined" != typeof importScripts
                );
              }
              static get isWebGLSupported() {
                return l.isSupported;
              }
              static get isWebGL2Supported() {
                return u.isSupported;
              }
              static get isHeadlessGLSupported() {
                return o.isSupported;
              }
              static get isCanvasSupported() {
                return "undefined" != typeof HTMLCanvasElement;
              }
              static get isGPUHTMLImageArraySupported() {
                return u.isSupported;
              }
              static get isSinglePrecisionSupported() {
                return c.some(
                  (e) =>
                    e.isSupported &&
                    e.features.isFloatRead &&
                    e.features.isTextureFloat
                );
              }
              constructor(e) {
                if (
                  ((e = e || {}),
                  (this.canvas = e.canvas || null),
                  (this.context = e.context || null),
                  (this.mode = e.mode),
                  (this.Kernel = null),
                  (this.kernels = []),
                  (this.functions = []),
                  (this.nativeFunctions = []),
                  (this.injectedNative = null),
                  "dev" !== this.mode)
                ) {
                  if ((this.chooseKernel(), e.functions))
                    for (let t = 0; t < e.functions.length; t++)
                      this.addFunction(e.functions[t]);
                  if (e.nativeFunctions)
                    for (const t in e.nativeFunctions) {
                      if (!e.nativeFunctions.hasOwnProperty(t)) continue;
                      const r = e.nativeFunctions[t],
                        { name: n, source: i } = r;
                      this.addNativeFunction(n, i, r);
                    }
                }
              }
              chooseKernel() {
                if (this.Kernel) return;
                let e = null;
                if (this.context) {
                  for (let t = 0; t < c.length; t++) {
                    const r = c[t];
                    if (r.isContextMatch(this.context)) {
                      if (!r.isSupported)
                        throw new Error(`Kernel type ${r.name} not supported`);
                      e = r;
                      break;
                    }
                  }
                  if (null === e) throw new Error("unknown Context");
                } else if (this.mode) {
                  if (this.mode in d)
                    (m && !d[this.mode].isSupported) || (e = d[this.mode]);
                  else if ("gpu" === this.mode) {
                    for (let t = 0; t < c.length; t++)
                      if (c[t].isSupported) {
                        e = c[t];
                        break;
                      }
                  } else "cpu" === this.mode && (e = a);
                  if (!e)
                    throw new Error(
                      `A requested mode of "${this.mode}" and is not supported`
                    );
                } else {
                  for (let t = 0; t < c.length; t++)
                    if (c[t].isSupported) {
                      e = c[t];
                      break;
                    }
                  e || (e = a);
                }
                this.mode || (this.mode = e.mode), (this.Kernel = e);
              }
              createKernel(e, t) {
                if (void 0 === e) throw new Error("Missing source parameter");
                if (
                  "object" != typeof e &&
                  !i.isFunction(e) &&
                  "string" != typeof e
                )
                  throw new Error("source parameter not a function");
                const r = this.kernels;
                if ("dev" === this.mode) {
                  const i = n(e, f(t));
                  return r.push(i), i;
                }
                e = "function" == typeof e ? e.toString() : e;
                const s = {},
                  o = f(t) || {};
                function u(t) {
                  console.warn("Falling back to CPU");
                  const r = new a(e, {
                    argumentTypes: p.argumentTypes,
                    constantTypes: p.constantTypes,
                    graphical: p.graphical,
                    loopMaxIterations: p.loopMaxIterations,
                    constants: p.constants,
                    dynamicOutput: p.dynamicOutput,
                    dynamicArgument: p.dynamicArguments,
                    output: p.output,
                    precision: p.precision,
                    pipeline: p.pipeline,
                    immutable: p.immutable,
                    optimizeFloatMemory: p.optimizeFloatMemory,
                    fixIntegerDivisionAccuracy: p.fixIntegerDivisionAccuracy,
                    functions: p.functions,
                    nativeFunctions: p.nativeFunctions,
                    injectedNative: p.injectedNative,
                    subKernels: p.subKernels,
                    strictIntegers: p.strictIntegers,
                    debug: p.debug,
                  });
                  r.build.apply(r, t);
                  const n = r.run.apply(r, t);
                  return p.replaceKernel(r), n;
                }
                t &&
                  "object" == typeof t.argumentTypes &&
                  (o.argumentTypes = Object.keys(t.argumentTypes).map(
                    (e) => t.argumentTypes[e]
                  ));
                const l = Object.assign(
                    {
                      context: this.context,
                      canvas: this.canvas,
                      functions: this.functions,
                      nativeFunctions: this.nativeFunctions,
                      injectedNative: this.injectedNative,
                      gpu: this,
                      validate: m,
                      onRequestFallback: u,
                      onRequestSwitchKernel: function t(n, i, a) {
                        a.debug && console.warn("Switching kernels");
                        let o = null;
                        if (
                          (a.signature &&
                            !s[a.signature] &&
                            (s[a.signature] = a),
                          a.dynamicOutput)
                        )
                          for (let e = n.length - 1; e >= 0; e--) {
                            const t = n[e];
                            "outputPrecisionMismatch" === t.type &&
                              (o = t.needed);
                          }
                        const l = a.constructor,
                          h = l.getArgumentTypes(a, i),
                          c = l.getSignature(a, h),
                          d = s[c];
                        if (d) return d.onActivate(a), d;
                        const f = (s[c] = new l(e, {
                          argumentTypes: h,
                          constantTypes: a.constantTypes,
                          graphical: a.graphical,
                          loopMaxIterations: a.loopMaxIterations,
                          constants: a.constants,
                          dynamicOutput: a.dynamicOutput,
                          dynamicArgument: a.dynamicArguments,
                          context: a.context,
                          canvas: a.canvas,
                          output: o || a.output,
                          precision: a.precision,
                          pipeline: a.pipeline,
                          immutable: a.immutable,
                          optimizeFloatMemory: a.optimizeFloatMemory,
                          fixIntegerDivisionAccuracy:
                            a.fixIntegerDivisionAccuracy,
                          functions: a.functions,
                          nativeFunctions: a.nativeFunctions,
                          injectedNative: a.injectedNative,
                          subKernels: a.subKernels,
                          strictIntegers: a.strictIntegers,
                          debug: a.debug,
                          gpu: a.gpu,
                          validate: m,
                          returnType: a.returnType,
                          tactic: a.tactic,
                          onRequestFallback: u,
                          onRequestSwitchKernel: t,
                          texture: a.texture,
                          mappedTextures: a.mappedTextures,
                          drawBuffersMap: a.drawBuffersMap,
                        }));
                        return (
                          f.build.apply(f, i), p.replaceKernel(f), r.push(f), f
                        );
                      },
                    },
                    o
                  ),
                  c = new this.Kernel(e, l),
                  p = h(c);
                return (
                  this.canvas || (this.canvas = c.canvas),
                  this.context || (this.context = c.context),
                  r.push(c),
                  p
                );
              }
              createKernelMap() {
                let e, t;
                const r = typeof arguments[arguments.length - 2];
                if (
                  ("function" === r || "string" === r
                    ? ((e = arguments[arguments.length - 2]),
                      (t = arguments[arguments.length - 1]))
                    : (e = arguments[arguments.length - 1]),
                  "dev" !== this.mode &&
                    (!this.Kernel.isSupported ||
                      !this.Kernel.features.kernelMap) &&
                    this.mode &&
                    p.indexOf(this.mode) < 0)
                )
                  throw new Error(
                    `kernelMap not supported on ${this.Kernel.name}`
                  );
                const n = f(t);
                if (
                  (t &&
                    "object" == typeof t.argumentTypes &&
                    (n.argumentTypes = Object.keys(t.argumentTypes).map(
                      (e) => t.argumentTypes[e]
                    )),
                  Array.isArray(arguments[0]))
                ) {
                  n.subKernels = [];
                  const e = arguments[0];
                  for (let t = 0; t < e.length; t++) {
                    const r = e[t].toString(),
                      s = i.getFunctionNameFromString(r);
                    n.subKernels.push({ name: s, source: r, property: t });
                  }
                } else {
                  n.subKernels = [];
                  const e = arguments[0];
                  for (let t in e) {
                    if (!e.hasOwnProperty(t)) continue;
                    const r = e[t].toString(),
                      s = i.getFunctionNameFromString(r);
                    n.subKernels.push({ name: s || t, source: r, property: t });
                  }
                }
                return this.createKernel(e, n);
              }
              combineKernels() {
                const e = arguments[0],
                  t = arguments[arguments.length - 1];
                if ("cpu" === e.kernel.constructor.mode) return t;
                const r = arguments[0].canvas,
                  n = arguments[0].context,
                  i = arguments.length - 1;
                for (let e = 0; e < i; e++)
                  arguments[e].setCanvas(r).setContext(n).setPipeline(!0);
                return function () {
                  const e = t.apply(this, arguments);
                  return e.toArray ? e.toArray() : e;
                };
              }
              setFunctions(e) {
                return (this.functions = e), this;
              }
              setNativeFunctions(e) {
                return (this.nativeFunctions = e), this;
              }
              addFunction(e, t) {
                return this.functions.push({ source: e, settings: t }), this;
              }
              addNativeFunction(e, t, r) {
                if (this.kernels.length > 0)
                  throw new Error(
                    'Cannot call "addNativeFunction" after "createKernels" has been called.'
                  );
                return (
                  this.nativeFunctions.push(
                    Object.assign({ name: e, source: t }, r)
                  ),
                  this
                );
              }
              injectNative(e) {
                return (this.injectedNative = e), this;
              }
              destroy() {
                return new Promise((e, t) => {
                  this.kernels || e(),
                    setTimeout(() => {
                      try {
                        for (let e = 0; e < this.kernels.length; e++)
                          this.kernels[e].destroy(!0);
                        let e = this.kernels[0];
                        e &&
                          (e.kernel && (e = e.kernel),
                          e.constructor.destroyContext &&
                            e.constructor.destroyContext(this.context));
                      } catch (e) {
                        t(e);
                      }
                      e();
                    }, 0);
                });
              }
            },
            kernelOrder: c,
            kernelTypes: p,
          };
        },
        {
          "./backend/cpu/kernel": 8,
          "./backend/headless-gl/kernel": 34,
          "./backend/kernel": 36,
          "./backend/web-gl/kernel": 70,
          "./backend/web-gl2/kernel": 105,
          "./kernel-run-shortcut": 111,
          "./utils": 114,
          "gpu-mock.js": 4,
        },
      ],
      109: [
        function (e, t, r) {
          const { GPU: n } = e("./gpu"),
            { alias: i } = e("./alias"),
            { utils: s } = e("./utils"),
            { Input: a, input: o } = e("./input"),
            { Texture: u } = e("./texture"),
            { FunctionBuilder: l } = e("./backend/function-builder"),
            { FunctionNode: h } = e("./backend/function-node"),
            { CPUFunctionNode: c } = e("./backend/cpu/function-node"),
            { CPUKernel: p } = e("./backend/cpu/kernel"),
            { HeadlessGLKernel: d } = e("./backend/headless-gl/kernel"),
            { WebGLFunctionNode: m } = e("./backend/web-gl/function-node"),
            { WebGLKernel: f } = e("./backend/web-gl/kernel"),
            { kernelValueMaps: g } = e("./backend/web-gl/kernel-value-maps"),
            { WebGL2FunctionNode: x } = e("./backend/web-gl2/function-node"),
            { WebGL2Kernel: y } = e("./backend/web-gl2/kernel"),
            { kernelValueMaps: b } = e("./backend/web-gl2/kernel-value-maps"),
            { GLKernel: T } = e("./backend/gl/kernel"),
            { Kernel: v } = e("./backend/kernel"),
            { FunctionTracer: S } = e("./backend/function-tracer"),
            A = e("./plugins/math-random-uniformly-distributed");
          t.exports = {
            alias: i,
            CPUFunctionNode: c,
            CPUKernel: p,
            GPU: n,
            FunctionBuilder: l,
            FunctionNode: h,
            HeadlessGLKernel: d,
            Input: a,
            input: o,
            Texture: u,
            utils: s,
            WebGL2FunctionNode: x,
            WebGL2Kernel: y,
            webGL2KernelValueMaps: b,
            WebGLFunctionNode: m,
            WebGLKernel: f,
            webGLKernelValueMaps: g,
            GLKernel: T,
            Kernel: v,
            FunctionTracer: S,
            plugins: { mathRandom: A },
          };
        },
        {
          "./alias": 5,
          "./backend/cpu/function-node": 6,
          "./backend/cpu/kernel": 8,
          "./backend/function-builder": 9,
          "./backend/function-node": 10,
          "./backend/function-tracer": 11,
          "./backend/gl/kernel": 13,
          "./backend/headless-gl/kernel": 34,
          "./backend/kernel": 36,
          "./backend/web-gl/function-node": 38,
          "./backend/web-gl/kernel": 70,
          "./backend/web-gl/kernel-value-maps": 39,
          "./backend/web-gl2/function-node": 73,
          "./backend/web-gl2/kernel": 105,
          "./backend/web-gl2/kernel-value-maps": 74,
          "./gpu": 108,
          "./input": 110,
          "./plugins/math-random-uniformly-distributed": 112,
          "./texture": 113,
          "./utils": 114,
        },
      ],
      110: [
        function (e, t, r) {
          class n {
            constructor(e, t) {
              (this.value = e),
                Array.isArray(t)
                  ? (this.size = t)
                  : ((this.size = new Int32Array(3)),
                    t.z
                      ? (this.size = new Int32Array([t.x, t.y, t.z]))
                      : t.y
                      ? (this.size = new Int32Array([t.x, t.y]))
                      : (this.size = new Int32Array([t.x])));
              const [r, n, i] = this.size;
              if (i) {
                if (this.value.length !== r * n * i)
                  throw new Error(
                    `Input size ${
                      this.value.length
                    } does not match ${r} * ${n} * ${i} = ${n * r * i}`
                  );
              } else if (n) {
                if (this.value.length !== r * n)
                  throw new Error(
                    `Input size ${
                      this.value.length
                    } does not match ${r} * ${n} = ${n * r}`
                  );
              } else if (this.value.length !== r)
                throw new Error(
                  `Input size ${this.value.length} does not match ${r}`
                );
            }
            toArray() {
              const { utils: t } = e("./utils"),
                [r, n, i] = this.size;
              return i
                ? t.erectMemoryOptimized3DFloat(
                    this.value.subarray
                      ? this.value
                      : new Float32Array(this.value),
                    r,
                    n,
                    i
                  )
                : n
                ? t.erectMemoryOptimized2DFloat(
                    this.value.subarray
                      ? this.value
                      : new Float32Array(this.value),
                    r,
                    n
                  )
                : this.value;
            }
          }
          t.exports = {
            Input: n,
            input: function (e, t) {
              return new n(e, t);
            },
          };
        },
        { "./utils": 114 },
      ],
      111: [
        function (e, t, r) {
          const { utils: n } = e("./utils");
          function i(e, t) {
            if (t.kernel) return void (t.kernel = e);
            const r = n.allPropertiesOf(e);
            for (let n = 0; n < r.length; n++) {
              const i = r[n];
              ("_" === i[0] && "_" === i[1]) ||
                ("function" == typeof e[i]
                  ? "add" === i.substring(0, 3) || "set" === i.substring(0, 3)
                    ? (t[i] = function () {
                        return t.kernel[i].apply(t.kernel, arguments), t;
                      })
                    : (t[i] = function () {
                        return t.kernel[i].apply(t.kernel, arguments);
                      })
                  : (t.__defineGetter__(i, () => t.kernel[i]),
                    t.__defineSetter__(i, (e) => {
                      t.kernel[i] = e;
                    })));
            }
            t.kernel = e;
          }
          t.exports = {
            kernelRunShortcut: function (e) {
              let t = function () {
                return (
                  e.build.apply(e, arguments),
                  (t = function () {
                    let t = e.run.apply(e, arguments);
                    if (e.switchingKernels) {
                      const n = e.resetSwitchingKernels(),
                        i = e.onRequestSwitchKernel(n, arguments, e);
                      (r.kernel = e = i), (t = i.run.apply(i, arguments));
                    }
                    return e.renderKernels
                      ? e.renderKernels()
                      : e.renderOutput
                      ? e.renderOutput()
                      : t;
                  }).apply(e, arguments)
                );
              };
              const r = function () {
                return t.apply(e, arguments);
              };
              return (
                (r.exec = function () {
                  return new Promise((e, r) => {
                    try {
                      e(t.apply(this, arguments));
                    } catch (e) {
                      r(e);
                    }
                  });
                }),
                (r.replaceKernel = function (t) {
                  i((e = t), r);
                }),
                i(e, r),
                r
              );
            },
          };
        },
        { "./utils": 114 },
      ],
      112: [
        function (e, t, r) {
          const n = {
            name: "math-random-uniformly-distributed",
            onBeforeRun: (e) => {
              e.setUniform1f("randomSeed1", Math.random()),
                e.setUniform1f("randomSeed2", Math.random());
            },
            functionMatch: "Math.random()",
            functionReplace: "nrand(vTexCoord)",
            functionReturnType: "Number",
            source:
              "// https://www.shadertoy.com/view/4t2SDh\n//note: uniformly distributed, normalized rand, [0,1]\nhighp float randomSeedShift = 1.0;\nhighp float slide = 1.0;\nuniform highp float randomSeed1;\nuniform highp float randomSeed2;\n\nhighp float nrand(highp vec2 n) {\n  highp float result = fract(sin(dot((n.xy + 1.0) * vec2(randomSeed1 * slide, randomSeed2 * randomSeedShift), vec2(12.9898, 78.233))) * 43758.5453);\n  randomSeedShift = result;\n  if (randomSeedShift > 0.5) {\n    slide += 0.00009; \n  } else {\n    slide += 0.0009;\n  }\n  return result;\n}",
          };
          t.exports = n;
        },
        {},
      ],
      113: [
        function (e, t, r) {
          t.exports = {
            Texture: class {
              constructor(e) {
                const {
                  texture: t,
                  size: r,
                  dimensions: n,
                  output: i,
                  context: s,
                  type: a = "NumberTexture",
                  kernel: o,
                  internalFormat: u,
                  textureFormat: l,
                } = e;
                if (!i) throw new Error('settings property "output" required.');
                if (!s)
                  throw new Error('settings property "context" required.');
                if (!t)
                  throw new Error('settings property "texture" required.');
                if (!o) throw new Error('settings property "kernel" required.');
                (this.texture = t),
                  t._refs ? t._refs++ : (t._refs = 1),
                  (this.size = r),
                  (this.dimensions = n),
                  (this.output = i),
                  (this.context = s),
                  (this.kernel = o),
                  (this.type = a),
                  (this._deleted = !1),
                  (this.internalFormat = u),
                  (this.textureFormat = l);
              }
              toArray() {
                throw new Error(`Not implemented on ${this.constructor.name}`);
              }
              clone() {
                throw new Error(`Not implemented on ${this.constructor.name}`);
              }
              delete() {
                throw new Error(`Not implemented on ${this.constructor.name}`);
              }
              clear() {
                throw new Error(`Not implemented on ${this.constructor.name}`);
              }
            },
          };
        },
        {},
      ],
      114: [
        function (e, t, r) {
          const n = e("acorn"),
            { Input: i } = e("./input"),
            { Texture: s } = e("./texture"),
            a = /function ([^(]*)/,
            o = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
            u = /([^\s,]+)/g,
            l = {
              systemEndianness: () => d,
              getSystemEndianness() {
                const e = new ArrayBuffer(4),
                  t = new Uint32Array(e),
                  r = new Uint8Array(e);
                if (((t[0] = 3735928559), 239 === r[0])) return "LE";
                if (222 === r[0]) return "BE";
                throw new Error("unknown endianness");
              },
              isFunction: (e) => "function" == typeof e,
              isFunctionString: (e) =>
                "string" == typeof e &&
                "function" === e.slice(0, "function".length).toLowerCase(),
              getFunctionNameFromString(e) {
                const t = a.exec(e);
                return t && 0 !== t.length ? t[1].trim() : null;
              },
              getFunctionBodyFromString: (e) =>
                e.substring(e.indexOf("{") + 1, e.lastIndexOf("}")),
              getArgumentNamesFromString(e) {
                const t = e.replace(o, "");
                let r = t.slice(t.indexOf("(") + 1, t.indexOf(")")).match(u);
                return null === r && (r = []), r;
              },
              clone(e) {
                if (
                  null === e ||
                  "object" != typeof e ||
                  e.hasOwnProperty("isActiveClone")
                )
                  return e;
                const t = e.constructor();
                for (let r in e)
                  Object.prototype.hasOwnProperty.call(e, r) &&
                    ((e.isActiveClone = null),
                    (t[r] = l.clone(e[r])),
                    delete e.isActiveClone);
                return t;
              },
              isArray: (e) => !isNaN(e.length),
              getVariableType(e, t) {
                if (l.isArray(e))
                  return e.length > 0 && "IMG" === e[0].nodeName
                    ? "HTMLImageArray"
                    : "Array";
                switch (e.constructor) {
                  case Boolean:
                    return "Boolean";
                  case Number:
                    return t && Number.isInteger(e) ? "Integer" : "Float";
                  case s:
                    return e.type;
                  case i:
                    return "Input";
                }
                if ("nodeName" in e)
                  switch (e.nodeName) {
                    case "IMG":
                    case "CANVAS":
                      return "HTMLImage";
                    case "VIDEO":
                      return "HTMLVideo";
                  }
                else {
                  if (e.hasOwnProperty("type")) return e.type;
                  if (
                    "undefined" != typeof OffscreenCanvas &&
                    e instanceof OffscreenCanvas
                  )
                    return "OffscreenCanvas";
                  if (
                    "undefined" != typeof ImageBitmap &&
                    e instanceof ImageBitmap
                  )
                    return "ImageBitmap";
                  if ("undefined" != typeof ImageData && e instanceof ImageData)
                    return "ImageData";
                }
                return "Unknown";
              },
              getKernelTextureSize(e, t) {
                let [r, n, i] = t,
                  s = (r || 1) * (n || 1) * (i || 1);
                return (
                  e.optimizeFloatMemory &&
                    "single" === e.precision &&
                    (r = s = Math.ceil(s / 4)),
                  n > 1 && r * n === s
                    ? new Int32Array([r, n])
                    : l.closestSquareDimensions(s)
                );
              },
              closestSquareDimensions(e) {
                const t = Math.sqrt(e);
                let r = Math.ceil(t),
                  n = Math.floor(t);
                for (; r * n < e; ) r--, (n = Math.ceil(e / r));
                return new Int32Array([n, Math.ceil(e / n)]);
              },
              getMemoryOptimizedFloatTextureSize(e, t) {
                const r =
                  l.roundTo(
                    (e[0] || 1) * (e[1] || 1) * (e[2] || 1) * (e[3] || 1),
                    4
                  ) / t;
                return l.closestSquareDimensions(r);
              },
              getMemoryOptimizedPackedTextureSize(e, t) {
                const [r, n, i] = e,
                  s = l.roundTo((r || 1) * (n || 1) * (i || 1), 4) / (4 / t);
                return l.closestSquareDimensions(s);
              },
              roundTo: (e, t) => Math.floor((e + t - 1) / t) * t,
              getDimensions(e, t) {
                let r;
                if (l.isArray(e)) {
                  const t = [];
                  let n = e;
                  for (; l.isArray(n); ) t.push(n.length), (n = n[0]);
                  r = t.reverse();
                } else if (e instanceof s) r = e.output;
                else {
                  if (!(e instanceof i))
                    throw new Error(`Unknown dimensions of ${e}`);
                  r = e.size;
                }
                if (t) for (r = Array.from(r); r.length < 3; ) r.push(1);
                return new Int32Array(r);
              },
              flatten2dArrayTo(e, t) {
                let r = 0;
                for (let n = 0; n < e.length; n++)
                  t.set(e[n], r), (r += e[n].length);
              },
              flatten3dArrayTo(e, t) {
                let r = 0;
                for (let n = 0; n < e.length; n++)
                  for (let i = 0; i < e[n].length; i++)
                    t.set(e[n][i], r), (r += e[n][i].length);
              },
              flatten4dArrayTo(e, t) {
                let r = 0;
                for (let n = 0; n < e.length; n++)
                  for (let i = 0; i < e[n].length; i++)
                    for (let s = 0; s < e[n][i].length; s++)
                      t.set(e[n][i][s], r), (r += e[n][i][s].length);
              },
              flattenTo(e, t) {
                l.isArray(e[0])
                  ? l.isArray(e[0][0])
                    ? l.isArray(e[0][0][0])
                      ? l.flatten4dArrayTo(e, t)
                      : l.flatten3dArrayTo(e, t)
                    : l.flatten2dArrayTo(e, t)
                  : t.set(e);
              },
              splitArray(e, t) {
                const r = [];
                for (let n = 0; n < e.length; n += t)
                  r.push(new e.constructor(e.buffer, 4 * n + e.byteOffset, t));
                return r;
              },
              getAstString(e, t) {
                const r = Array.isArray(e) ? e : e.split(/\r?\n/g),
                  n = t.loc.start,
                  i = t.loc.end,
                  s = [];
                if (n.line === i.line)
                  s.push(r[n.line - 1].substring(n.column, i.column));
                else {
                  s.push(r[n.line - 1].slice(n.column));
                  for (let e = n.line; e < i.line; e++) s.push(r[e]);
                  s.push(r[i.line - 1].slice(0, i.column));
                }
                return s.join("\n");
              },
              allPropertiesOf(e) {
                const t = [];
                do {
                  t.push.apply(t, Object.getOwnPropertyNames(e));
                } while ((e = Object.getPrototypeOf(e)));
                return t;
              },
              linesToString: (e) =>
                e.length > 0 ? e.join(";\n") + ";\n" : "\n",
              warnDeprecated(e, t, r) {
                r
                  ? console.warn(
                      `You are using a deprecated ${e} "${t}". It has been replaced with "${r}". Fixing, but please upgrade as it will soon be removed.`
                    )
                  : console.warn(
                      `You are using a deprecated ${e} "${t}". It has been removed. Fixing, but please upgrade as it will soon be removed.`
                    );
              },
              flipPixels: (e, t, r) => {
                const n = (r / 2) | 0,
                  i = 4 * t,
                  s = new Uint8ClampedArray(4 * t),
                  a = e.slice(0);
                for (let e = 0; e < n; ++e) {
                  const t = e * i,
                    n = (r - e - 1) * i;
                  s.set(a.subarray(t, t + i)),
                    a.copyWithin(t, n, n + i),
                    a.set(s, n);
                }
                return a;
              },
              erectPackedFloat: (e, t) => e.subarray(0, t),
              erect2DPackedFloat: (e, t, r) => {
                const n = new Array(r);
                for (let i = 0; i < r; i++) {
                  const r = i * t,
                    s = r + t;
                  n[i] = e.subarray(r, s);
                }
                return n;
              },
              erect3DPackedFloat: (e, t, r, n) => {
                const i = new Array(n);
                for (let s = 0; s < n; s++) {
                  const n = new Array(r);
                  for (let i = 0; i < r; i++) {
                    const a = s * r * t + i * t,
                      o = a + t;
                    n[i] = e.subarray(a, o);
                  }
                  i[s] = n;
                }
                return i;
              },
              erectMemoryOptimizedFloat: (e, t) => e.subarray(0, t),
              erectMemoryOptimized2DFloat: (e, t, r) => {
                const n = new Array(r);
                for (let i = 0; i < r; i++) {
                  const r = i * t;
                  n[i] = e.subarray(r, r + t);
                }
                return n;
              },
              erectMemoryOptimized3DFloat: (e, t, r, n) => {
                const i = new Array(n);
                for (let s = 0; s < n; s++) {
                  const n = new Array(r);
                  for (let i = 0; i < r; i++) {
                    const a = s * r * t + i * t;
                    n[i] = e.subarray(a, a + t);
                  }
                  i[s] = n;
                }
                return i;
              },
              erectFloat: (e, t) => {
                const r = new Float32Array(t);
                let n = 0;
                for (let i = 0; i < t; i++) (r[i] = e[n]), (n += 4);
                return r;
              },
              erect2DFloat: (e, t, r) => {
                const n = new Array(r);
                let i = 0;
                for (let s = 0; s < r; s++) {
                  const r = new Float32Array(t);
                  for (let n = 0; n < t; n++) (r[n] = e[i]), (i += 4);
                  n[s] = r;
                }
                return n;
              },
              erect3DFloat: (e, t, r, n) => {
                const i = new Array(n);
                let s = 0;
                for (let a = 0; a < n; a++) {
                  const n = new Array(r);
                  for (let i = 0; i < r; i++) {
                    const r = new Float32Array(t);
                    for (let n = 0; n < t; n++) (r[n] = e[s]), (s += 4);
                    n[i] = r;
                  }
                  i[a] = n;
                }
                return i;
              },
              erectArray2: (e, t) => {
                const r = new Array(t),
                  n = 4 * t;
                let i = 0;
                for (let t = 0; t < n; t += 4) r[i++] = e.subarray(t, t + 2);
                return r;
              },
              erect2DArray2: (e, t, r) => {
                const n = new Array(r),
                  i = 4 * t;
                for (let s = 0; s < r; s++) {
                  const r = new Array(t),
                    a = s * i;
                  let o = 0;
                  for (let t = 0; t < i; t += 4)
                    r[o++] = e.subarray(t + a, t + a + 2);
                  n[s] = r;
                }
                return n;
              },
              erect3DArray2: (e, t, r, n) => {
                const i = 4 * t,
                  s = new Array(n);
                for (let a = 0; a < n; a++) {
                  const n = new Array(r);
                  for (let s = 0; s < r; s++) {
                    const o = new Array(t),
                      u = a * i * r + s * i;
                    let l = 0;
                    for (let t = 0; t < i; t += 4)
                      o[l++] = e.subarray(t + u, t + u + 2);
                    n[s] = o;
                  }
                  s[a] = n;
                }
                return s;
              },
              erectArray3: (e, t) => {
                const r = new Array(t),
                  n = 4 * t;
                let i = 0;
                for (let t = 0; t < n; t += 4) r[i++] = e.subarray(t, t + 3);
                return r;
              },
              erect2DArray3: (e, t, r) => {
                const n = 4 * t,
                  i = new Array(r);
                for (let s = 0; s < r; s++) {
                  const r = new Array(t),
                    a = s * n;
                  let o = 0;
                  for (let t = 0; t < n; t += 4)
                    r[o++] = e.subarray(t + a, t + a + 3);
                  i[s] = r;
                }
                return i;
              },
              erect3DArray3: (e, t, r, n) => {
                const i = 4 * t,
                  s = new Array(n);
                for (let a = 0; a < n; a++) {
                  const n = new Array(r);
                  for (let s = 0; s < r; s++) {
                    const o = new Array(t),
                      u = a * i * r + s * i;
                    let l = 0;
                    for (let t = 0; t < i; t += 4)
                      o[l++] = e.subarray(t + u, t + u + 3);
                    n[s] = o;
                  }
                  s[a] = n;
                }
                return s;
              },
              erectArray4: (e, t) => {
                const r = new Array(e),
                  n = 4 * t;
                let i = 0;
                for (let t = 0; t < n; t += 4) r[i++] = e.subarray(t, t + 4);
                return r;
              },
              erect2DArray4: (e, t, r) => {
                const n = 4 * t,
                  i = new Array(r);
                for (let s = 0; s < r; s++) {
                  const r = new Array(t),
                    a = s * n;
                  let o = 0;
                  for (let t = 0; t < n; t += 4)
                    r[o++] = e.subarray(t + a, t + a + 4);
                  i[s] = r;
                }
                return i;
              },
              erect3DArray4: (e, t, r, n) => {
                const i = 4 * t,
                  s = new Array(n);
                for (let a = 0; a < n; a++) {
                  const n = new Array(r);
                  for (let s = 0; s < r; s++) {
                    const o = new Array(t),
                      u = a * i * r + s * i;
                    let l = 0;
                    for (let t = 0; t < i; t += 4)
                      o[l++] = e.subarray(t + u, t + u + 4);
                    n[s] = o;
                  }
                  s[a] = n;
                }
                return s;
              },
              flattenFunctionToString: (e, t) => {
                const { findDependency: r, thisLookup: i, doNotDefine: s } = t;
                let a = t.flattened;
                a || (a = t.flattened = {});
                const o = n.parse(e),
                  u = [];
                let h = 0;
                const c = (function e(t) {
                  if (Array.isArray(t)) {
                    const r = [];
                    for (let n = 0; n < t.length; n++) r.push(e(t[n]));
                    return r.join("");
                  }
                  switch (t.type) {
                    case "Program":
                      return (
                        e(t.body) +
                        ("VariableDeclaration" === t.body[0].type ? ";" : "")
                      );
                    case "FunctionDeclaration":
                      return `function ${t.id.name}(${t.params
                        .map(e)
                        .join(", ")}) ${e(t.body)}`;
                    case "BlockStatement": {
                      const r = [];
                      h += 2;
                      for (let n = 0; n < t.body.length; n++) {
                        const i = e(t.body[n]);
                        i && r.push(" ".repeat(h) + i, ";\n");
                      }
                      return (h -= 2), `{\n${r.join("")}}`;
                    }
                    case "VariableDeclaration":
                      const n = l
                        .normalizeDeclarations(t)
                        .map(e)
                        .filter((e) => null !== e);
                      return n.length < 1 ? "" : `${t.kind} ${n.join(",")}`;
                    case "VariableDeclarator":
                      return t.init.object &&
                        "ThisExpression" === t.init.object.type
                        ? i(t.init.property.name, !0)
                          ? `${t.id.name} = ${e(t.init)}`
                          : null
                        : `${t.id.name} = ${e(t.init)}`;
                    case "CallExpression":
                      if ("subarray" === t.callee.property.name)
                        return `${e(t.callee.object)}.${e(
                          t.callee.property
                        )}(${t.arguments.map((t) => e(t)).join(", ")})`;
                      if (
                        "gl" === t.callee.object.name ||
                        "context" === t.callee.object.name
                      )
                        return `${e(t.callee.object)}.${e(
                          t.callee.property
                        )}(${t.arguments.map((t) => e(t)).join(", ")})`;
                      if ("ThisExpression" === t.callee.object.type)
                        return (
                          u.push(r("this", t.callee.property.name)),
                          `${t.callee.property.name}(${t.arguments
                            .map((t) => e(t))
                            .join(", ")})`
                        );
                      if (t.callee.object.name) {
                        const n = r(
                          t.callee.object.name,
                          t.callee.property.name
                        );
                        return null === n
                          ? `${t.callee.object.name}.${
                              t.callee.property.name
                            }(${t.arguments.map((t) => e(t)).join(", ")})`
                          : (u.push(n),
                            `${t.callee.property.name}(${t.arguments
                              .map((t) => e(t))
                              .join(", ")})`);
                      }
                      if ("MemberExpression" === t.callee.object.type)
                        return `${e(t.callee.object)}.${
                          t.callee.property.name
                        }(${t.arguments.map((t) => e(t)).join(", ")})`;
                      throw new Error("unknown ast.callee");
                    case "ReturnStatement":
                      return `return ${e(t.argument)}`;
                    case "BinaryExpression":
                      return `(${e(t.left)}${t.operator}${e(t.right)})`;
                    case "UnaryExpression":
                      return t.prefix
                        ? `${t.operator} ${e(t.argument)}`
                        : `${e(t.argument)} ${t.operator}`;
                    case "ExpressionStatement":
                      return `${e(t.expression)}`;
                    case "SequenceExpression":
                      return `(${e(t.expressions)})`;
                    case "ArrowFunctionExpression":
                      return `(${t.params.map(e).join(", ")}) => ${e(t.body)}`;
                    case "Literal":
                      return t.raw;
                    case "Identifier":
                      return t.name;
                    case "MemberExpression":
                      return "ThisExpression" === t.object.type
                        ? i(t.property.name)
                        : t.computed
                        ? `${e(t.object)}[${e(t.property)}]`
                        : e(t.object) + "." + e(t.property);
                    case "ThisExpression":
                      return "this";
                    case "NewExpression":
                      return `new ${e(t.callee)}(${t.arguments
                        .map((t) => e(t))
                        .join(", ")})`;
                    case "ForStatement":
                      return `for (${e(t.init)};${e(t.test)};${e(
                        t.update
                      )}) ${e(t.body)}`;
                    case "AssignmentExpression":
                      return `${e(t.left)}${t.operator}${e(t.right)}`;
                    case "UpdateExpression":
                      return `${e(t.argument)}${t.operator}`;
                    case "IfStatement":
                      return `if (${e(t.test)}) ${e(t.consequent)}`;
                    case "ThrowStatement":
                      return `throw ${e(t.argument)}`;
                    case "ObjectPattern":
                      return t.properties.map(e).join(", ");
                    case "ArrayPattern":
                      return t.elements.map(e).join(", ");
                    case "DebuggerStatement":
                      return "debugger;";
                    case "ConditionalExpression":
                      return `${e(t.test)}?${e(t.consequent)}:${e(
                        t.alternate
                      )}`;
                    case "Property":
                      if ("init" === t.kind) return e(t.key);
                  }
                  throw new Error(`unhandled ast.type of ${t.type}`);
                })(o);
                if (u.length > 0) {
                  const e = [];
                  for (let r = 0; r < u.length; r++) {
                    const n = u[r];
                    a[n] || (a[n] = !0),
                      n && e.push(l.flattenFunctionToString(n, t) + "\n");
                  }
                  return e.join("") + c;
                }
                return c;
              },
              normalizeDeclarations: (e) => {
                if ("VariableDeclaration" !== e.type)
                  throw new Error('Ast is not of type "VariableDeclaration"');
                const t = [];
                for (let r = 0; r < e.declarations.length; r++) {
                  const n = e.declarations[r];
                  if (
                    n.id &&
                    "ObjectPattern" === n.id.type &&
                    n.id.properties
                  ) {
                    const { properties: e } = n.id;
                    for (let r = 0; r < e.length; r++) {
                      const i = e[r];
                      if (
                        "ObjectPattern" === i.value.type &&
                        i.value.properties
                      )
                        for (let e = 0; e < i.value.properties.length; e++) {
                          const r = i.value.properties[e];
                          if ("Property" !== r.type)
                            throw new Error("unexpected state");
                          t.push({
                            type: "VariableDeclarator",
                            id: { type: "Identifier", name: r.key.name },
                            init: {
                              type: "MemberExpression",
                              object: {
                                type: "MemberExpression",
                                object: n.init,
                                property: {
                                  type: "Identifier",
                                  name: i.key.name,
                                },
                                computed: !1,
                              },
                              property: {
                                type: "Identifier",
                                name: r.key.name,
                              },
                              computed: !1,
                            },
                          });
                        }
                      else {
                        if ("Identifier" !== i.value.type)
                          throw new Error("unexpected state");
                        t.push({
                          type: "VariableDeclarator",
                          id: {
                            type: "Identifier",
                            name:
                              i.value && i.value.name
                                ? i.value.name
                                : i.key.name,
                          },
                          init: {
                            type: "MemberExpression",
                            object: n.init,
                            property: { type: "Identifier", name: i.key.name },
                            computed: !1,
                          },
                        });
                      }
                    }
                  } else if (
                    n.id &&
                    "ArrayPattern" === n.id.type &&
                    n.id.elements
                  ) {
                    const { elements: e } = n.id;
                    for (let r = 0; r < e.length; r++) {
                      const i = e[r];
                      if ("Identifier" !== i.type)
                        throw new Error("unexpected state");
                      t.push({
                        type: "VariableDeclarator",
                        id: { type: "Identifier", name: i.name },
                        init: {
                          type: "MemberExpression",
                          object: n.init,
                          property: {
                            type: "Literal",
                            value: r,
                            raw: r.toString(),
                            start: i.start,
                            end: i.end,
                          },
                          computed: !0,
                        },
                      });
                    }
                  } else t.push(n);
                }
                return t;
              },
              splitHTMLImageToRGB: (e, t) => {
                const r = e.createKernel(
                    function (e) {
                      return 255 * e[this.thread.y][this.thread.x].r;
                    },
                    {
                      output: [t.width, t.height],
                      precision: "unsigned",
                      argumentTypes: { a: "HTMLImage" },
                    }
                  ),
                  n = e.createKernel(
                    function (e) {
                      return 255 * e[this.thread.y][this.thread.x].g;
                    },
                    {
                      output: [t.width, t.height],
                      precision: "unsigned",
                      argumentTypes: { a: "HTMLImage" },
                    }
                  ),
                  i = e.createKernel(
                    function (e) {
                      return 255 * e[this.thread.y][this.thread.x].b;
                    },
                    {
                      output: [t.width, t.height],
                      precision: "unsigned",
                      argumentTypes: { a: "HTMLImage" },
                    }
                  ),
                  s = e.createKernel(
                    function (e) {
                      return 255 * e[this.thread.y][this.thread.x].a;
                    },
                    {
                      output: [t.width, t.height],
                      precision: "unsigned",
                      argumentTypes: { a: "HTMLImage" },
                    }
                  ),
                  a = [r(t), n(t), i(t), s(t)];
                return (
                  (a.rKernel = r),
                  (a.gKernel = n),
                  (a.bKernel = i),
                  (a.aKernel = s),
                  (a.gpu = e),
                  a
                );
              },
              splitRGBAToCanvases: (e, t, r, n) => {
                const i = e.createKernel(
                  function (e) {
                    const t = e[this.thread.y][this.thread.x];
                    this.color(t.r / 255, 0, 0, 255);
                  },
                  {
                    output: [r, n],
                    graphical: !0,
                    argumentTypes: { v: "Array2D(4)" },
                  }
                );
                i(t);
                const s = e.createKernel(
                  function (e) {
                    const t = e[this.thread.y][this.thread.x];
                    this.color(0, t.g / 255, 0, 255);
                  },
                  {
                    output: [r, n],
                    graphical: !0,
                    argumentTypes: { v: "Array2D(4)" },
                  }
                );
                s(t);
                const a = e.createKernel(
                  function (e) {
                    const t = e[this.thread.y][this.thread.x];
                    this.color(0, 0, t.b / 255, 255);
                  },
                  {
                    output: [r, n],
                    graphical: !0,
                    argumentTypes: { v: "Array2D(4)" },
                  }
                );
                a(t);
                const o = e.createKernel(
                  function (e) {
                    const t = e[this.thread.y][this.thread.x];
                    this.color(255, 255, 255, t.a / 255);
                  },
                  {
                    output: [r, n],
                    graphical: !0,
                    argumentTypes: { v: "Array2D(4)" },
                  }
                );
                return o(t), [i.canvas, s.canvas, a.canvas, o.canvas];
              },
              getMinifySafeName: (e) => {
                try {
                  const t = n.parse(`const value = ${e.toString()}`),
                    { init: r } = t.body[0].declarations[0];
                  return r.body.name || r.body.body[0].argument.name;
                } catch (e) {
                  throw new Error(
                    "Unrecognized function type.  Please use `() => yourFunctionVariableHere` or function() { return yourFunctionVariableHere; }"
                  );
                }
              },
              sanitizeName: function (e) {
                return (
                  h.test(e) && (e = e.replace(h, "S_S")),
                  c.test(e)
                    ? (e = e.replace(c, "U_U"))
                    : p.test(e) && (e = e.replace(p, "u_u")),
                  e
                );
              },
            },
            h = /\$/,
            c = /__/,
            p = /_/,
            d = l.getSystemEndianness();
          t.exports = { utils: l };
        },
        { "./input": 110, "./texture": 113, acorn: 1 },
      ],
    },
    {},
    [107]
  )(107);
});
