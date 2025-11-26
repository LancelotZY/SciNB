

//function updateFooter(category){
  //  let footerTextElement = document.getElementById('footerText');
   // console.log(footerTextElement)
    //footerTextElement.textContent = category;
//}

function updateFooter (subject){
    let element1 = document.getElementById('content1')
    let element2 = document.getElementById('content2')
    

    switch (subject){
        case "全部":
            element1.textContent = "无论是文学作品还是理学符号，都是优美的，因为他们给了我们描述我们眼中世界的能力";
            element2.textContent = '全部';
            break;
        case '数学':
            element1.textContent = "数学是宇宙的语言，用最简单的符号描述最复杂，最奇妙的理论";
            element2.textContent = '数学';
            break;
        case '物理':
            element1.textContent = "何为物理？析万物之理，我们使用数学的语言，描述这个世界的本质";
            element2.textContent = '物理';
            break;
        case '化学':
            element1.textContent = '你以为化学只有一加一等于二？那来看看真正的那些让这个世界沸腾的化学吧！';
            element2.textContent = '化学';
            break;
        case '生物':
            element1.textContent = '生命是自然最精妙的造物，在我们仰望星空，思绪远飞的时候，别忘了我们精妙的构造';
            element2.textContent = '生物';
            break;
        case '天文':
            element1.textContent = '当祖先第一次凝视星空的时候，我就已经诞生了。我脱胎于所有学科之前，但是一直服务于未来';
            element2.textContent = '天文';
            break;
        case '文学/其他':
            element1.textContent = '当理学的呢喃启蒙了人类的文明，文学的光辉照亮了人类的灵魂，成为万物的灵长，宇宙的精华';
            element2.textContent = '文学/其他';
            break;
    }
}

function showContent (contentType) {
    var tabContent = document.getElementsByClassName("articles");
    for (var i = 0; i < tabContent.length; i++) {
        if (contentType === "全部") {
            if (tabContent[i].id === "all") {
                tabContent[i].style.display = "block";
            } else {
                tabContent[i].style.display = "none";
            }
        } else if (contentType === "数学") {
           if (tabContent[i].id === "math") {
               tabContent[i].style.display = "block"; 
            } else {
               tabContent[i].style.display = "none";
            } 
        } else if (contentType === "物理") {
            if (tabContent[i].id === "physic") {
                tabContent[i].style.display = "block"; 
            } else {
                tabContent[i].style.display = "none";
            }
        } else if (contentType === "化学") {
            if (tabContent[i].id === "chem") {
                tabContent[i].style.display = "block"; 
            } else {
                tabContent[i].style.display = "none";
            }
        } else if (contentType === "生物") {
            if (tabContent[i].id === "bio") {
                tabContent[i].style.display = "block"; 
            } else {
                tabContent[i].style.display = "none";
            }
        } else if (contentType === "天文") {
            if (tabContent[i].id === "astro") {
                tabContent[i].style.display = "block"; 
            } else {
                tabContent[i].style.display = "none";
            }
        } else if (contentType === "文学/其他") {
            if (tabContent[i].id === "other") {
                tabContent[i].style.display = "block"; 
            } else {
                tabContent[i].style.display = "none";
            }
        }
    }
}
