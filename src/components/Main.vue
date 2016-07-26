<template>
	<div class="main">
			<div class="news">
				<div class="title">
					<h2>新闻中心</h2>
					<span><a href="#"v-link="{name: 'list'}">More &gt;&gt;</a>
					</span>
				</div>
				<div class="pic_news">
					<img src="../images/news.jpg">
					<h2><a href="#" v-link="{name:'list'}">520幕女神叫你来表白！</a></h2>
					<p>活动时间:5月20日——5月25日<br>
					获奖公布时间:5月26日<br>
					<a href="#"v-link="{name: 'list'}">Learn More &gt;&gt;</a>
					</p>
				</div>
				<div class="news_list">
					<ul>
						<li><a href="#"v-link="{name: 'list'}">【慕课访谈 用户篇】"有为屌丝"在路上</a><span>2014-06-01</span></li>
						<li><a href="#"v-link="{name: 'list'}">【有奖活动】给父亲的三行书信</a><span>2014-05-30</span></li>
						<li><a href="#"v-link="{name: 'list'}">《程序猿，请晒出你的童年》活动获奖公告</a><span>2014-05-29</span></li>
						<li><a href="#"v-link="{name: 'list'}">【慕课访谈】破茧成蝶—美女程序员的蜕变史</a><span>2014-05-28</span></li>
					</ul>
				</div>
			</div>
			<div class="course">
				<div class="course_title">
					<h2>课程中心</h2>
					<span><a href="#"v-link="{name: 'list'}">More&gt;&gt;</a></span>
				</div>
				<div class="course_pic">
					<img src="../images/css.jpg" alt="">
					<h2><a href="#"v-link="{name: 'list'}">css圆角进化论</a></h2>
					<p>css圆角的实现，经历了三大发展阶段：(背景图片方式、css2.0+HTML标签模拟、css3.0圆角属性)。本案例详细讲解每一种的实现方式，并对实现的优缺点进行对比分析。</p>
				</div>
				<div class="course_type">
					<ul>
						<li>PHP开发</li>
						<li>前端开发</li>
						<li>JAVA开发</li>
						<li>Android开发</li>
					</ul>
				</div>
				
			</div>
			<div class="sidebar">
				<div class="video">
					<div class="title">
						<h2>媒体聚焦</h2>
					</div>
					<div class="video_content">
						<embed src="http://player.youku.com/player.php/sid/XMTY0MDc4MjA3Mg==/v.swf" allowFullScreen="true" quality="high" width="220" height="140" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>
					</div>
				</div>
				<div class="sidebar_ad">
					<img src="../images/app.jpg" alt="">
				</div>
			</div>
		</div><!-- main结束 -->
</template>