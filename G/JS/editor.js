function insertAtCursor(t, e) {
	var n = t.scrollTop,
	o = document.documentElement.scrollTop;
	if (document.selection) {
		t.focus();
		var s = document.selection.createRange();
		s.text = e,
		s.select()
	} else if (t.selectionStart || "0" == t.selectionStart) {
		var l = t.selectionStart,
		c = t.selectionEnd;
		t.value = t.value.substring(0, l) + e + t.value.substring(c, t.value.length),
		t.focus(),
		t.selectionStart = l + e.length,
		t.selectionEnd = l + e.length
	} else t.value += e,
	t.focus();
	t.scrollTop = n,
	document.documentElement.scrollTop = o
}
$(function() {

	Smilies = {
			dom: function(id) {
					return document.getElementById(id);
			},
			grin: function(tag) {
					tag = " "  + tag + " ";
					myField = this.dom("text");
					document.selection ? (myField.focus(), sel = document.selection.createRange(), sel.text = tag, myField.focus()) : this.insertTag(tag);
			},
			insertTag: function(tag) {
					myField = Smilies.dom("text");
					myField.selectionStart || myField.selectionStart == "0" ? (startPos = myField.selectionStart, endPos = myField.selectionEnd, cursorPos = startPos, myField.value = myField.value.substring(0, startPos) + tag + myField.value.substring(endPos, myField.value.length), cursorPos += tag.length, myField.focus(), myField.selectionStart = cursorPos, myField.selectionEnd = cursorPos) : (myField.value += tag, myField.focus());
			}
	}

	$("#wmd-button-row").append('<li class="wmd-spacer wmd-spacer1"></li><li class="wmd-button" id="wmd-sc-button" style="" title="插入短代码">短代码</li>');
	$("#wmd-button-row").append('<li class="wmd-spacer wmd-spacer1"></li><li class="wmd-button" id="wmd-owo-button" style="" title="插入表情">OWO</span></li>');
	$("#wmd-button-row").append(`
		<div id="OwO-editor" style="display:none"><div class="OwO OwO-open" id="qaq">
	   <div class="OwO-body" id="OwO-body">
	    <ul id="OwO-pp" class="OwO-items OwO-items-emoticon OwO-items-show" style="max-height: 197px;">
	      <li class="OwO-item" onclick="Smilies.grin('@(huaji_han)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/huaji_han.png" /></li>
	      <li class="OwO-item" onclick="Smilies.grin('@(huaji_mj)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/huaji_mj.png" /></li>
	      <li class="OwO-item" onclick="Smilies.grin('@(huaji_djy)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/huaji_djy.png" /></li>
	      <li class="OwO-item" onclick="Smilies.grin('@(huaji_pc)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/huaji_pc.png" /></li>
	      <li class="OwO-item" onclick="Smilies.grin('@(huaji_shang)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/huaji_shang.png" /></li>
	      <li class="OwO-item" onclick="Smilies.grin('@(huaji_xiao)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/huaji_xiao.png" /></li>
	      <li class="OwO-item" onclick="Smilies.grin('@(toukan)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/toukan.png" /></li>
	      <li class="OwO-item" onclick="Smilies.grin('@(biexiao)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/biexiao.png" /></li>
	      <li class="OwO-item" onclick="Smilies.grin('@(hemenjiu)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/hemenjiu.png" /></li>
	      <li class="OwO-item" onclick="Smilies.grin('@(chigua2)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/chigua2.png" /></li>
	      <li class="OwO-item" onclick="Smilies.grin('@(chaiquan_love)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.1.6/G/IMG/bq/chaiquan_love.png" /></li>
	      <li class="OwO-item" onclick="Smilies.grin('@(chaiquan_red_1)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/chaiquan_red_1.png" /></li>
	      <li class="OwO-item" onclick="Smilies.grin('@(chaiquan_melon)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/chaiquan_melon.png" /></li>
	      <li class="OwO-item" onclick="Smilies.grin('@(chaiquan_mask)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/chaiquan_mask.png" /></li>
	      <li class="OwO-item" onclick="Smilies.grin('@(chaiquan_hufen)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/chaiquan_hufen.png" /></li>
	      <li class="OwO-item" onclick="Smilies.grin('@(chaiquan_han)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/chaiquan_han.png" /></li>
	      <li class="OwO-item" onclick="Smilies.grin('@(chaiquan_gh)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/chaiquan_gh.png" /></li>
	      <li class="OwO-item" onclick="Smilies.grin('@(chaiquan_3)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/chaiquan_3.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(chaiquan)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/chaiquan.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(chaiquanbugaoxin)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/chaiquanbugaoxin.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(chaiquanzaijian)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/chaiquanzaijian.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(chaiquanku)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/chaiquanku.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(hehe)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/hehe.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(haha)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.1.6/G/IMG/bq/yo.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(tushe)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/tushe.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(taikaixin)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/taikaixin.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(xiaoyan)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/xiaoyan.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(huaxin)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/huaxin.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(xiaoguai)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/xiaoguai.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(guai)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/guai.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(wuzuixiao)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/wuzuixiao.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(huaji)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/huaji.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(nidongde)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/nidongde.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(bugaoxin)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/bugaoxin.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(nu)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/nu.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(han)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/han.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(heixian)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/heixian.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(lei)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/lei.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(zhenbang)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/zhenbang.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(pen)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/pen.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(jingku)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/jingku.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(yinxian)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/yinxian.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(bishi)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/bishi.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(ku)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/ku.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(a)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/a.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(kuanghan)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/kuanghan.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(what)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/what.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(yiwen)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/yiwen.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(suanshuang)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/suanshuang.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(yamiedie)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/yamiedie.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(weiqu)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/weiqu.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(jingya)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/jingya.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(shuijiao)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/shuijiao.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(xiaoniao)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/xiaoniao.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(wabi)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/wabi.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(tu)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/tu.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(xili)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/xili.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(xiaohonglian)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/xiaohonglian.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(landeli)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/landeli.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(mianqiang)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/mianqiang.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(aixin)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/aixin.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(xinsui)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/xinsui.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(meigui)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/meigui.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(liwu)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/liwu.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(caihong)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/caihong.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(taiyang)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/taiyang.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(xinxinyueliang)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/xinxinyueliang.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(qianbi)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/qianbi.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(chabei)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/chabei.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(dangao)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/dangao.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(damuzhi)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/damuzhi.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(shengli)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/shengli.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(haha)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/haha.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(OK)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/OK.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(shafa)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/shafa.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(shouzhi)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/shouzhi.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(xiangjiao)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/xiangjiao.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(bianbian)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/bianbian.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(yaowan)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/yaowan.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(hlj)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/hlj.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(lazhu)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/lazhu.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(yingyue)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/yingyue.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('@(dengpao)');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R@v1.0.3/G/IMG/bq/dengpao.png" /></li>
	     <li class="OwO-item" onclick="Smilies.grin('::ys:安详::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/ys/安详.png" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:不要啊::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/ys/不要啊.png" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:交给我吧::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/ys/交给我吧.png" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:你真幽默::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/ys/你真幽默.png" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:出货吧::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/ys/出货吧.png" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:吃惊::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/ys/吃惊.png" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:咕咕咕::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/ys/咕咕咕.png" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:哼哼::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/ys/哼哼.png" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:唔::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/ys/唔.png" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:大哭::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/ys/大哭.png" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:小事一桩::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/ys/小事一桩.png" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:干得漂亮::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/ys/干得漂亮.png" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:干杯::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/ys/干杯.png" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:愤怒::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/ys/愤怒.png" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:拜托::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/ys/拜托.png" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:救救我::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/ys/救救我.png" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:睡着了::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/ys/睡着了.png" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:给我走开::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/ys/给我走开.png" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:警觉::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/ys/警觉.png" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:该吃饭了::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/ys/该吃饭了.png" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:请投币::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/ys/请投币.png" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:问号::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/ys/问号.png" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::ys:黑线::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/ys/黑线.png" /></li>
		<li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[doge]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[doge].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[偷笑]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[偷笑].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[傲娇]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[傲娇].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[冷]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[冷].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[吃瓜]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[吃瓜].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[吐]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[吐].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[吓]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[吓].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[呆]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[呆].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[响指]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[响指].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[喜极而泣]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[喜极而泣].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[喜欢]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[喜欢].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[嘘声]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[嘘声].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[囧]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[囧].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[大哭]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[大哭].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[大笑]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[大笑].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[奸笑]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[奸笑].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[妙啊]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[妙啊].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[委屈]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[委屈].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[嫌弃]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[嫌弃].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[害羞]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[害羞].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[尴尬]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[尴尬].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[微笑]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[微笑].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[惊喜]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[惊喜].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[惊讶]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[惊讶].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[打call]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[打call].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[抠鼻]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[抠鼻].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[捂脸]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[捂脸].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[支持]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[支持].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[无语]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[无语].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[滑稽]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[滑稽].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[灵魂出窍]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[灵魂出窍].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[点赞]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[点赞].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[爱心]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[爱心].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[生气]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[生气].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[生病]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[生病].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[画风突变]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[画风突变].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[疼]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[疼].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[福]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[福].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[福到了]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[福到了].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[笑哭]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[笑哭].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[调皮]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[调皮].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[酸了]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[酸了].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[锦鲤]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[锦鲤].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[阴险]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[阴险].png" /></li>
                <li class="OwO-item" onclick="Smilies.grin('::xiaohuanglian:[黑洞]::');"><img src="https://cdn.jsdelivr.net/gh/youranreus/R/W/bq/xiaohuanglian/[黑洞].png" /></li>
	    </ul>
	   </div>
	  </div>
</div>`);
	$("#wmd-button-row").append(`
		<div id="g-shortcode" style="display:none">
			<a id="g-video">视频</a>
			<a id="g-collapse">折叠框</a>
			<a id="g-bili">B站视频</a>
			<a id="g-art">文章跳转</a>
			<a id="g-notice">提示框</a>
			<a id="g-warn">警告框</a>
			<a id="g-tag">标签</a>
			<a id="g-photos">相册</a>
	</div>
		`);

	function OwO_show(){
		if($("#OwO-editor").css("display")=='none'){
			 $("#OwO-editor").slideDown();
		}else{
			 $("#OwO-editor").slideUp();
		 }
	}
	function sc_show(){
		if($("#g-shortcode").css("display")=='none'){
			 $("#g-shortcode").slideDown();
		}else{
			 $("#g-shortcode").slideUp();
		 }
	}

	$(document).on("click", "#g-video",
	function() {
		myField = document.getElementById("text"),
		insertAtCursor(myField, '\n\n[dplayer id="" url="" pic=""]\n\n[/dplayer]\n\n')
	});

	$(document).on("click", "#g-collapse",
	function() {
		myField = document.getElementById("text"),
		insertAtCursor(myField, '\n\n[collapse title=""]\n\n[/collapse]')
	});

	$(document).on("click", "#g-art",
	function() {
		myField = document.getElementById("text"),
		insertAtCursor(myField, '[art]文章ID[/art]')
	});
	$(document).on("click", "#g-bili",
	function() {
		myField = document.getElementById("text"),
		insertAtCursor(myField, '[bili]BV/AV[/bili]')
	});
	$(document).on("click", "#g-notice",
	function() {
		myField = document.getElementById("text"),
		insertAtCursor(myField, '[notice]内容[/notice]')
	});
	$(document).on("click", "#g-warn",
	function() {
		myField = document.getElementById("text"),
		insertAtCursor(myField, '[warn]内容[/warn]')
	});
	$(document).on("click", "#g-tag",
	function() {
		myField = document.getElementById("text"),
		insertAtCursor(myField, '[tag]内容[/tag]')
	});
	$(document).on("click", "#g-photos",
	function() {
		myField = document.getElementById("text"),
		insertAtCursor(myField, '\n[photos]\n图片1描述,图片1链接|\n图片2描述,图片2链接|\n以此类推，以 | 符号分割\n[/photos]\n')
	});

	$(document).on("click","#wmd-owo-button",function(){OwO_show();});
	$(document).on("click","#wmd-sc-button",function(){sc_show();});




});
