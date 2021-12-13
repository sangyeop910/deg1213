//슬라이드바 기능 개선

document.getElementsByClassName("icol-3 ")[0].children[0].addEventListener('click',shopHanlder);
document.getElementsByClassName("icol-3 ")[0].children[1].addEventListener('click',downloadHandler);
document.getElementsByClassName("icol-3 ")[0].children[2].addEventListener('click',configureHandler);
document.getElementsByClassName("plus_btn")[0].addEventListener('click', AddMenuPop);

function shopHanlder(){ alert('set'); }
function configureHandler(){
	const configureModal = document.getElementsByClassName("pro_li_plot_pop pop01")[0];
	configureModal.setAttribute('style','display:block;')
}

let idxs1 = 0;
let idxs2 = 1;
let data2 = new Array();
let datas = {};
let X_mod, Y_mod;
let Menu = new Array();
let attrs, opt_list, p_val, topic, userinput;
let x_min, x_max, y_min, y_max;
let pv_floor, fc_floor, cpm_floor;

let loading = document.getElementsByClassName('loading');

function btn(e){
	console.log(pv_floor/1000, fc_floor, cpm_floor);
	let conf = document.getElementsByClassName('pro_li_plot_pop pop01');
	let datx = datas[1];
	let daty = datas[0];
	let datp = datas[2];
	
	for(let i=0; i<c1.length; i++){
		if(datp[i]<pv_floor/1000){
			if(datx[i]<cpm_floor && daty[i]<fc_floor){			
				c1[i].style.fill = 'blue';
				c1[i].style.stroke = 'blue';
			}else{
				c1[i].style.fill = 'red';
				c1[i].style.stroke = 'red';
			}
		}else{
			c1[i].style.fill = 'black';
			c1[i].style.stroke = 'black';
		}
	}
	conf[0].style.display = 'none';
}

//==========================================//p-value 위치 슬라이드바

/*const sld_p = document.getElementById("pval_slider");
const sld_fc = document.getElementById("fc_slider");
const sld_cpm = document.getElementById("cpm_slider");
sld_p.addEventListener('input', slide_p);
sld_fc.addEventListener('input', slide_fc);
sld_cpm.addEventListener('input', slide_cpm);*/


//======================//메뉴 변경 시 그래프 변경
/*function changeGraph(e){
	topic = e.target.innerHTML;
	d3.select("svg").remove();
	loading[0].style.display = 'block';
	console.log('topic', topic)
	
		let xa = topic.split(':')[0];
	    let ya = topic.split(':')[1];	

		X_mod = xa.slice(0, -1);
    	Y_mod = ya.slice(1);
	
		let num_columns_len = attrs.length;
	
		for (let i = 0; i < num_columns_len; i++) {
	        if (attrs[i] === X_mod) {
    	        idxs1 = i;
        	   	break;
        	}
    	}
   		for (let i = 0; i < num_columns_len; i++) {
	        if (attrs[i] === Y_mod) {
    	    	idxs2 = i;
            	break;
       		}
    	}
	setTimeout(function(){
		loading[0].style.display = 'none';    	
   		draw(datas[idxs1], datas[idxs2]);
	}, 1);	
//메뉴 변경 시 p-value 상태 초기로 돌려놓기
}*///======================//메뉴 변경 시 그래프 변경
/*
const menu_input = document.getElementById('menu_input');

function btn_mn(){	
	bg_opa = document.getElementsByClassName('bg_opacity1');
	add_mnp = document.getElementsByClassName('add_menu_pop');
	userinput = menu_input.value;
	console.log(userinput)
	AddMenu();
	bg_opa[0].style.display = 'none';
	add_mnp[0].style.display = 'none';
}

function AddMenu(){//=================================//add menu
	console.log('addmenu')
	var indx;//userinput과 Menu가 일치하는 Menu[]의 인덱스 위치
	console.log(userinput);
	for(let i=0; i<Menu.length; i++){
		if (userinput == Menu[i]){//input값이 Menu[]에 존재하는 지 검사
			indx = i;
			break;
		}	
	}
	if(indx!=undefined && userinput!=undefined){
		const div = document.createElement('div');
		const button = document.createElement('img');
		const span = document.createElement('span');
	
		div.setAttribute('class', 'pro_option');
		button.setAttribute('class', 'del_icon')
		button.setAttribute('src', '/rdap/images/del_icon.png/');
		
		span.setAttribute('class', 'change_graph');
		span.innerHTML = Menu[indx];
		
		span.addEventListener('click', changeGraph)
		button.addEventListener('click', deleteGene)
		
		div.appendChild(span);
		div.appendChild(button);
		opt_list.appendChild(div);
		
		del_i[del_i.length-1].value = Menu[indx];//휴지통에 value넣기
		let pro_opt = document.getElementsByClassName('pro_option');
		pro_opt[opt_list.childElementCount-1].style.fontSize = '14px';
	}
	indx = -1;
	userinput = 'none';
	
}//=======================================================//add menu
*/

//===============================================================//메뉴 삭제
/*
const del_i = document.getElementsByClassName('del_icon');
function deleteGene(e){
	let del_target = e.target.value;
	console.log(del_target);
	for(let i=0; i<del_i.length; i++){
		if(opt_list.children[i].innerText == del_target){
			opt_list.children[i].remove();
		}
	}
}//==============================================================//메뉴 삭제

function Gene_For_Analysis(condition='init'){//=====Gene_For_Analysis======//
/*
1. gene for analysis - menu 부분 html 태그 할당
2. 최초 메뉴 3개 활성화
3. 메뉴 추가 및 삭제 위한 이벤트 리스너 할당 
--pro_option_list 하위에 'span'과 'button'을 포함한 div를 생성하고, 그 div를 opt_list(==pro_option_list)의 하위에 등록한다.
*/
/*	let init;
	let max_i;
	if(condition=='init'){
		init=0;
		max_i=3;
	} else{
		init = del_i.length;
		max_i = Menu.length;
	}
	
	opt_list = document.getElementById('pro_option_list');
	
	for(let i = init; i<max_i; i++){
		const div = document.createElement('div');
		const button = document.createElement('img');
		const span = document.createElement('span');
		
		div.setAttribute('class', 'pro_option');
		button.setAttribute('class', 'del_icon')
		button.setAttribute('src', '/rdap/images/del_icon.png/');
		
		span.setAttribute('class', 'change_graph');
		span.innerHTML = Menu[i];
		
		span.addEventListener('click', changeGraph)
		button.addEventListener('click', deleteGene)
		
		div.appendChild(span);
		div.appendChild(button);
		opt_list.appendChild(div);
		
		del_i[i].value = Menu[i];//휴지통에 value넣기
		
		document.getElementsByClassName('pro_option')[i].style.fontSize = '14px';
	}
}//========================Gene_For_Analysis=========================//
*/

//===========================================//d3.tsv
d3.tsv("/rdap/deg/deg_data").then(result => {
	da = result;
	let pv = document.getElementById("pv");
	let fc = document.getElementById("fc");
	let cpm = document.getElementById("cpm");
	let btn_apply = document.getElementById("apply");
	let pvv = [50, 10, 1];
	let fcv = [1, 2, 3];
	let cpmv = [0, 1, 2];
	
	btn_apply.addEventListener('click', btn);
	pv.addEventListener('click', pval);
	fc.addEventListener('click', log_fc);
	cpm.addEventListener('click', log_cpm);
	
	for(let i=0; i<pv.children.length; i++){
		pv.children[i].value = pvv[i];
		fc.children[i].value = fcv[i];
		cpm.children[i].value = cpmv[i];
	}
	function pval(e){//pval
		pv_floor = e.target.value;
	}
	function log_fc(e){//log fc
		fc_floor = e.target.value;
	}
	function log_cpm(e){//log cpm
		cpm_floor = e.target.value;
	}
    
	attrs = Object.keys(result[0]).filter(a => {
        let test1 = Number(result[0][a]);
        if (isNaN(test1) != true) {
            return (typeof test1 === "number")
        }
    });
    name_tag = Object.keys(result[0]).filter(a => {
        let test2 = Number(result[0][a]);
        if (isNaN(test2) == true) {
            return (typeof test2 === "number")
        }
    });

    data1 = result.map(d => name_tag.map((a, i) => d[a]));//Symbols
    data2 = result.map(d => attrs.map((a, i) => d[a]));//data(자료형은 string)
 
    let num_columns_len = attrs.length;

    for (let i = 0; i < num_columns_len; i++) {//Menu배열에 모든 경우의 수 할당
        for (let j = 0; j < num_columns_len; j++) {
            if (attrs[i] != attrs[j])
                Menu.push(attrs[i] + " : " + attrs[j])
        }
    }

    for (let i = 0; i < num_columns_len; i++) {//datas 선언
        datas[i] = new Array();
    }

	//Gene_For_Analysis('init');//call menu

    for (let i = 0; i < data2.length; i++) {//datas에 데이터 할당
        for (let j = 0; j < num_columns_len; j++) {
            datas[j].push(data2[i][j]);
        }
    }
	
    let xa = Menu[0].split(':')[0];//앞 gene
    let ya = Menu[0].split(':')[1];//뒤 gene

    X_mod = xa.slice(0, -1);//공백 제거
    Y_mod = ya.slice(1);//공백 제거

    draw(datas[1], datas[0]);

	if(c1[0] != undefined){
		loading[0].style.display ='none';
	}
}).catch(e => {
    console.log(e)
});//======================================//d3.tsv

function draw(q, p) {//================================//draw 함수
	x_min = Math.min.apply(null, q);
	x_max = Math.max.apply(null, q);
	y_min = Math.min.apply(null, p);
	y_max = Math.max.apply(null, p);
	//sld_p.min = x_min;
	//sld_p.max = x_max;
	
	/*const pv_min = document.getElementById("pv_min");
	const pv_max = document.getElementById("pv_max");
	pv_min.innerText = x_min;
	pv_max.innerText = x_max;*/
	
    let svg = d3.select(".Graph")//svg area
        .append("svg")
        .attr("width", 1200)
        .attr("height", 1010)
        .attr("viewBox", [0, 0, 1220, 1020])
        .append("g")
        .attr("transform", "translate(" + 40 + "," + 10 + ")");

    let x = d3.scaleLinear()//x aixs
        .domain([x_min - 0.06, x_max])
        .range([0, 1170]);
    svg.append("g")
        .attr("transform", "translate(0," + 980 + ")")
        .call(d3.axisBottom(x));

    let y = d3.scaleLinear()//y aixs
        .domain([y_min - 0.05, y_max + 0.1])
        .range([980, 0]);
    svg.append("g")
        .call(d3.axisLeft(y));

    let gs = svg.selectAll(".point")//scatter plot, dots
        .data(da)
        .enter()
        .append("g")
        .append("circle")
        .attr("id", "c1")
        .attr("class", "point")
        .attr("fill", "black")
        .attr("stroke", "black")
        .style("stroke-width", 2)
        .attr("cx", (d, i) => x(q[i]))
        .attr("cy", (d, i) => y(p[i]))
        .attr("r", 2)
        .on("mouseover", mouseover)
        .on("mouseout", mouseout);
}//====================================================//draw 함수

const tooltip = d3.select(".Graph")
    .append("div")
    .style("position", "absolute")
    .style("opacity", 0)
    .style("padding", "5px")
    .style("border", "2px solid black")
    .style("width", "200px")
    .style("pointer-events", "none")
    .style("background", "white")
    .style("text-align", "center")
    .style("font-size", "12px");

function mouseover(event, d, val) {//mouse over
    tooltip.style("opacity", 1)
        .style("left", (event.pageX) + "px")
        .style("top", (event.pageY - 45) + "px")
        .html(d["gene"] + "<br/>" + "logAvrExp : " + d["logAvrExp"] + "<br/>" + "logFC : " + d["logFC"] + 
			"<br/>" + "PValue : " + d["PValue"] + "<br/>" + "FDR : " + d["FDR"] + "<br/>" +  
			"F : " + d["F"])
    d3.select(this).style("r", 4);
}//mouse over

function mouseout(d) {//mouse out
    d3.select(this).style("r", 2);
    tooltip.style("opacity", 0);
}//mouse out
