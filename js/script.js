// JavaScript Document
$(function(){
		   
	var
	flag=true,
	aL=$(".left"),
	aR=$(".right"),
	box=$(".box"),
	banner=$(".banner"),
	allLi=$(".box li"),
	first=$(".box li").first(),
	last=$(".box li").last(),
	 btn=$(".v"),
	 lbtn=$(".left"),
	 rbtn=$(".right"),
	 img=$(".box li").length,
	 sliceLi=$(".box li").slice(1),
	 sliceSize=(sliceLi.length)/2,
	 rightLi=sliceLi.slice(0,sliceSize),
	 leftLi=sliceLi.slice(sliceSize),
	 scal=0.9,
	 boxheight=box.height(),
	 level=Math.floor(img/2);
	aR.css("width",firstLeft);
	aL.css("width",firstLeft);
	 var rw=first.width(),
	 	rh=first.height(),
		firstLeft=Math.round((banner.width()-first.width())/2),
		gap=firstLeft/level,
		fixoffsetLeft=firstLeft+rw;
	first.css({"left":firstLeft,
			  	"z-index":Math.floor(img/2),
			  	"top":0
			  
			  });
	rightLi.each(function(i){
				var j=i;
				
				level--;
				rw=rw*scal;
				rh=rh*scal;
			
				$(this).css({
					"z-index":level,
					"width":rw,
					"height":rh,		
					"left":fixoffsetLeft+(++i)*gap-rw,
					"opacity":1/(++j),
					"top":(boxheight-rh)/2
				
					
					})	  
						  
			});

	var lw=rightLi.last().width(),
		lh=rightLi.last().height(),
		opp=Math.floor(img/2);
		leftLi.each(function(i){
				
		
				$(this).css({
					"z-index":level,
					"width":lw,
					"height":lh,		
					"left":i*gap,
					"opacity":1/opp,
					"top":(boxheight-lh)/2
				
					
					})
				opp--;
				level++;
				lw=lw/scal;	
				lh=lh/scal;	 
			});
	btn.css("z-index",Math.ceil(img/2)); 
	lbtn.click(function(){
				if(flag){
				flag=false;
				move("left");		
				}
			})
	rbtn.click(function(){
				if(flag){
				flag=false;
				move("right");
				}
			})
	
	function move(dir){
		if(dir==="left"){
			var zIndexarr=[];
			allLi.each(function(){
				var	prev=$(this).prev().get(0)?$(this).prev():last;			
					width=prev.width(),			
					height=prev.height(),
					z=prev.css("z-index"),
					opacity=prev.css("opacity"),
					left=prev.css("left"),
					t=prev.css("top"),
					zIndexarr.push(z);
					$(this).animate({
								width:width,
								height:height,
								left:left,
								opacity:opacity,
								top:t
								},function(){
									
									flag=true;
									
									});
					
					})
			allLi.each(function(i){
								
						$(this).css("z-index",zIndexarr[i]);		
								
						})
				
			
			}else if(dir=="right"){
			var arr=[];
			allLi.each(function(){
				var	next=$(this).next().get(0)?$(this).next():first,		
					width=next.width(),			
					height=next.height(),
					z=next.css("z-index"),
					opacity=next.css("opacity"),
					left=next.css("left"),
					t=next.css("top");
					arr.push(z);
					$(this).animate({
								width:width,
								height:height,
								left:left,
								opacity:opacity,
								top:t
								},function(){
									flag=true;
									
									});
		
					})
				allLi.each(function(i){
									
							$(this).css("z-index",arr[i]);		
									
									
						})
			
				}
	}
	
	var timer=null;
	function autoplay(){
		
		timer=setInterval(function(){
						rbtn.click();		   
								   
						},2000)
	
		}
 autoplay();
 banner.hover(function(){
					  
					  clearInterval(timer);
					   },function(){
						   
						  autoplay();  
						   })
});